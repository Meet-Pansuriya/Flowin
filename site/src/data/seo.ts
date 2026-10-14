export const publicOrigin = 'https://flowinpipeandfitting.com';

export function publicPath(pathname: string) {
  const path = pathname.replace(/^\/Flowin(?=\/|$)/, '') || '/';
  if (/^\/404(?:\.html|\/)?$/.test(path)) return '/404.html';
  return path.endsWith('.html') || path.endsWith('/') ? path : `${path}/`;
}

export const organization = {
  '@type': 'Organization',
  '@id': `${publicOrigin}/#organization`,
  name: 'Flowin',
  legalName: 'Flowin Pipe Pvt. Ltd.',
  url: `${publicOrigin}/`,
  logo: `${publicOrigin}/images/logo.png`,
  foundingDate: '2013',
  sameAs: ['https://www.instagram.com/flowinpipeandfittings/'],
  description: 'Manufacturer of pipes and fittings for plumbing, drainage and agricultural applications.',
};
