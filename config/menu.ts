// define your clean mapping here
export const pagesMap = {
  'page 01': '/pages',
  'page 02': '/pages',
  'page 03': '/pages',
};

// the menu tree references those maps
export const menuTree = [
  { name: 'home', path: '/' },

  { 
    name: 'pages', 
    path: '/pages', 
    children: pagesMap 
  },
  
  { name: 'about', path: '/about' }
];
