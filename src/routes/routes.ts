export const routes = {
  election: {
    path: "/wybory/:id",
    link: (id: string) => `/wybory/${id}`,
  },
  calculate: {
    path: "/oblicz",
    link: () => `/oblicz`,
  },
  poll: {
    path: "/sondaz/:id",
    link: (id: string) => `/sondaz/${id}`,
  },
  about: {
    path: "/o-nas",
    link: () => `/o-nas`,
  },
};
