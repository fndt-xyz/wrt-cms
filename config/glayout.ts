// config/glayout.ts
export const layouts = {
  'front-pg': {
    gridClass: "grid-front-page",
    mainClass: "md:col-span-2",
    sideClass: "md:col-span-1"
  },
  'two-one': {
    gridClass: "grid-two-one",
    mainClass: "md:col-span-2",
    sideClass: "md:col-span-1"
  },
  'half-half': {
    gridClass: "grid-cols-1 md:grid-cols-2",
    mainClass: "md:col-span-1",
    sideClass: "md:col-span-1"
  },
  'full': {
    gridClass: "grid-cols-1",
    mainClass: "w-full",
    sideClass: "hidden"
  }
};

