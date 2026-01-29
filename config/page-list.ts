// config/page-lists.ts
// This "as const" tells TypeScript to look at exactly what you wrote
export const pageList = {
  'front-page': { layout: 'front-pg', folder: 'front-page', titlet: 'home' },
  'pages': { layout: 'two-one', folder: 'pages', titlet: 'pages' },
  'frameworks': { layout: 'two-one', folder: 'frameworks', titlet: 'frameworks' },
  'exmp': { layout: 'two-one', folder: 'exmp', titlet: 'exmp' },
  'about': { layout: 'full', folder: 'about', titlet: 'about' }
} as const; // The "as const" above is the magic trick.
