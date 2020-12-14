export const routes = {
  home: {
    path: "/",
    link: () => `/`,
  },
  election: {
    path: "/elections/:id",
    link: (id: string) => `/elections/${id}`,
  },
  newPoll: {
    path: "/new-poll",
    link: () => `/new-poll`,
  },
  poll: {
    path: "/poll/:id",
    link: (id: string) => `/poll/${id}`,
  },
  about: {
    path: "/about",
    link: () => `/about`,
  },
};
