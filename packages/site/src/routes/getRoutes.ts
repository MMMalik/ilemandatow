export const getRoutes = (langPath = "") => {
  const baseLink = `/${langPath}`;

  return {
    home: {
      link: () => baseLink,
    },
    election: {
      link: (id: string) => `${baseLink}/elections/${id}`,
    },
    newPoll: {
      link: () => `${baseLink}/new-poll`,
    },
    poll: {
      link: (id: string) => `${baseLink}/poll/${id}`,
    },
    about: {
      link: () => `${baseLink}/about`,
    },
    privacy: {
      link: () => `${baseLink}/privacy`,
    },
  };
};
