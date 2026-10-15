import data from './octoberCatalogue.json';

export const ringFitPipeLengths = data.filter(p => p.range === 'swr' && p.system === 'ring-fit' && p.imageType === 'catalogue-table');
export const ringFitPipes = {
  ...ringFitPipeLengths[0],
  id: 'swr/ring-fit-pipes', slug: 'ring-fit-pipes', href: '/products/swr/ring-fit-pipes/',
  name: 'SWR Ring-fit Pipes — Type A', printedName: 'SWR RING-FIT PIPES TYPE A',
  headers: ['Length (m)', 'Length (feet)', 'Size (inch)', 'Size (mm)'],
  rows: ringFitPipeLengths.flatMap(p => p.rows.map(row => [
    p.printedName.match(/(\d+(?:\.\d+)?)\s*MTR/i)?.[1] ?? '',
    p.printedName.match(/\(([\d.]+)\s*FEET/i)?.[1] ?? '',
    ...row.slice(0, 2),
  ])),
};
export const catalogueProducts = data.filter(p => !ringFitPipeLengths.includes(p)).concat(ringFitPipes);
export const rangeNames: Record<string, string> = {
  upvc: 'uPVC plumbing', cpvc: 'cPVC plumbing', swr: 'SWR drainage', agriculture: 'Agriculture',
};

export function publicProductDetails(product: typeof data[number]) {
  const visible = product.headers.flatMap((header, index) => /rate|price|per piece|\/\s*piece/i.test(header) ? [] : [index]);
  return { headers: visible.map(i => product.headers[i]), rows: product.rows.map(row => visible.map(i => row[i])) };
}

export function productOptions(product: typeof data[number]) {
  if (product.id === 'swr/ring-fit-pipes') return ['Single socket', 'Double socket', '6 lengths: 0.6, 0.9, 1.2, 1.8, 3 and 6 m'];
  return [...new Set(product.headers.flatMap(header => {
    if (/MTR/i.test(header)) return [header.replace(/\s*\/ piece/i, '').replace(/MTR/i, 'm')];
    if (/SOCKET/i.test(header)) return [header.replace(/\s*\/ piece/i, '').toLowerCase()];
    if (/KG\/CM2/i.test(header)) return [header.replace(/RATE.*$/i, '').trim()];
    return [];
  }))];
}

export function matchesCollection(product: { kind: string; productName: string }, collection?: string) {
  if (!collection) return true;
  const name = product.productName.toLowerCase();
  if (collection.endsWith('pipes')) return product.kind === 'pipes';
  if (collection.includes('shoe-bends')) return name.includes('shoe bend');
  if (collection.endsWith('bends')) return name.includes('bend') && !name.includes('shoe');
  if (collection === 'tees-and-couplers') return name.includes('tee') || name.includes('coupler') || name.includes('reducing elbow');
  if (collection.endsWith('couplers')) return name.includes('coupler');
  if (collection === 'reducing-tees') return name.includes('reducing tee');
  if (collection.endsWith('elbows')) return name.includes('elbow');
  if (collection.endsWith('tees')) return name.includes('tee');
  return product.kind === 'fittings';
}
