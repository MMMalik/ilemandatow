export const getRoutes = (langPath = "") => {
  const baseLink = `/${langPath}`;

  return {
    home: {
      link: () => baseLink,
    },
    election: {
      link: (id: string) => `${baseLink}/elections/${id}`,
    },
    newPollForm: {
      link: (query?: string) =>
        query
          ? `${baseLink}/new-poll/form?${query}`
          : `${baseLink}/new-poll/form`,
    },
    newPollViz: {
      link: (query?: string) =>
        query
          ? `${baseLink}/new-poll/viz?${query}`
          : `${baseLink}/new-poll/viz`,
    },
    poll: {
      link: (id: string) => `${baseLink}/poll/${id}`,
    },
    polls: {
      link: () => `${baseLink}/polls`,
    },
    docs: {
      link: (slug?: string) =>
        slug ? `${baseLink}/docs/${slug}` : `${baseLink}/docs`,
    },
    privacy: {
      link: () => `${baseLink}/privacy`,
    },
  };
};
