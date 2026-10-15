import pdfplumber,json,re,hashlib
from pathlib import Path
from PIL import Image,ImageChops
pdfpath=Path('design/assets/flowin-price-list-october-2026.pdf')
pdf=pdfplumber.open(pdfpath)
out=Path('site/public/images/catalogue-october');out.mkdir(parents=True,exist_ok=True)
Path('tmp/october-catalogue').mkdir(parents=True,exist_ok=True)
products=[];audit=[]
def clean(s):
 s=(s or '').replace('\n',' ').replace('4\ufffd','4\"').replace('\ufffd','').strip()
 return re.sub(r'\s+',' ',s)
def cell(s):
 return re.sub(r'(?<=\d)=(?=\d)', '.', clean(s))
def slug(s):return re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')
def title(s):
 s=clean(s).replace('45" ELBOW','45° ELBOW').replace('87.5O','87.5°').replace('45O','45°').replace('OFFCET','OFFSET').replace('SOKET','SOCKET').replace('BALLVALVE','BALL VALVE').replace('ENDCAP','END CAP').replace('ENDPLUG','END PLUG')
 s=s.title().replace('Upvc','uPVC').replace('Cpvc','cPVC').replace('Sdr','SDR').replace('Sch','SCH').replace('Astm','ASTM').replace('Asmt','ASTM').replace('Isi','ISI').replace('Mta','MTA').replace('Fta','FTA').replace('Rrc','RRC').replace('Swr','SWR').replace('Pvc','PVC').replace('N.R.V.','N.R.V.')
 return s
for pageidx in range(2,14):
 page=pdf.pages[pageidx];pg=pageidx+1
 raster=page.to_image(resolution=300).original.convert('RGB');sx=raster.width/page.width;sy=raster.height/page.height
 for ti,table in enumerate(page.find_tables()):
  raw=table.extract();has_image=raw[0][0]==''
  rows=[r[1:] if has_image else r[:] for r in raw]
  name=clean(next(v for v in rows[0] if v));range_='upvc' if pg<=6 else 'cpvc' if pg<=10 else 'agriculture' if pg==14 else 'swr'
  system=('ring-fit' if pg==11 or (pg==12 and ti<3) else 'self-fit') if range_=='swr' else ''
  starts=[0]
  for ri,row in enumerate(rows[1:],1):
   non=[clean(v) for v in row if v]
   if len(non)==1 and ('CPVC PIPE SCH' in non[0]):starts.append(ri)
  starts.append(len(rows))
  for part in range(len(starts)-1):
   block=rows[starts[part]:starts[part+1]]
   rawname=clean(next(v for v in block[0] if v));display=title(rawname)
   kind='pipes' if ('PIPE' in rawname and ('SWR PIPE TYPE' in rawname or 'CPVC' in rawname or 'UPVC' in rawname or 'AGRICULTURE PIPES' in rawname )) or 'SINGLE SOCKET TYPE' in rawname else 'fittings'
   first=block[1];has_size=clean(first[0]).upper()=='SIZE'
   start=3 if has_size else 2
   if pg==10 and ti==7:
    headers=['Size (inch)','Size (mm)','Rate per piece','Packing'];body=[[cell(v) for v in r if v is not None] for r in block[3:]]
   else:
    headers=[]
    for ci,v in enumerate(first):
     low=clean(block[2][ci]) if has_size else ''
     if has_size and ci==0:label='Size (inch)'
     elif has_size and ci==1:label='Size (mm)'
     elif low and kind=='pipes':label=low+' / piece' if low not in ['INCH','MM'] else low
     else:label=clean(v)
     headers.append(label)
    body=[]
    for r in block[start:]:
     if clean(r[0]).upper() in ['SIZE','INCH']:continue
     vals=[cell(v) for v in r]
     if any(vals):body.append(vals)
   # Extract the image area exactly from the catalogue, excluding table rules.
   if has_image:
    b=table.rows[0].cells[0];b=(b[0]+1,b[1]+1,b[2]-1,b[3]-1)
    img=raster.crop((round(b[0]*sx)+5,round(b[1]*sy)+5,round(b[2]*sx)-5,round(b[3]*sy)-5))
    bg=Image.new('RGB',img.size,'white');diff=ImageChops.difference(img,bg).convert('L').point(lambda x:255 if x>12 else 0);bbox=diff.getbbox()
    if bbox:img=img.crop(bbox)
    image_type='product'
   else:
    b=table.bbox;img=raster.crop((round(b[0]*sx),round(b[1]*sy),round(b[2]*sx),round(b[3]*sy)));image_type='catalogue-table'
   canvas=Image.new('RGB',(960,720),'white');factor=min(840/img.width,620/img.height);img=img.resize((round(img.width*factor),round(img.height*factor)),Image.Resampling.LANCZOS);canvas.paste(img,((960-img.width)//2,(720-img.height)//2))
   product_slug=slug(display)
   if system:product_slug=system+'-'+product_slug
   # Degree punctuation alone should not turn decimal bend angles into unrelated names.
   key=range_+'/'+product_slug
   assert not any(x['id']==key for x in products),key
   image='/images/catalogue-october/'+range_+'-'+product_slug+'.webp'
   if image_type == 'product':canvas.save(Path('site/public')/image.lstrip('/'),'WEBP',quality=90)
   group=(system+' ' if system else '')+kind
   product={'id':key,'range':range_,'system':system,'kind':kind,'group':group,'slug':product_slug,'name':display,'printedName':rawname,'sourcePage':pg,'sourceTable':ti,'sourcePart':part,'image':image,'imageType':image_type,'headers':headers,'rows':body,'href':'/products/'+key+'/'}
   if pg==3 and ti<2:product['note']='Includes the larger-size ASTM F-441 rows shown with this schedule in the catalogue.'
   assert body,key
   assert all(len(r)==len(headers) for r in body),(key,headers,body)
   products.append(product);audit.append({'id':key,'page':pg,'table':ti,'part':part,'rows':len(body),'headers':headers})
Path('site/src/data/octoberCatalogue.json').write_text(json.dumps(products,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
Path('tmp/october-catalogue/audit.json').write_text(json.dumps(audit,indent=2))
print(len(products),'products;',sum(len(p['rows']) for p in products),'rows')
print({r:sum(p['range']==r for p in products) for r in ['upvc','cpvc','swr','agriculture']})
