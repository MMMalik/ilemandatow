export const getRoutes = (langPath = "") => {
  const basePath = `/:lang`;
  const baseLink = `/${langPath}`;

  return {
    home: {
      path: basePath,
      link: () => baseLink,
    },
    election: {
      path: `${basePath}/elections/:id`,
      link: (id: string) => `${baseLink}/elections/${id}`,
    },
    newPoll: {
      path: `${basePath}/new-poll`,
      link: () => `${baseLink}/new-poll`,
    },
    poll: {
      path: `${basePath}/poll/:id`,
      link: (id: string) => `${baseLink}/poll/${id}`,
    },
    about: {
      path: `${basePath}/about`,
      link: () => `${baseLink}/about`,
    },
  };
};
