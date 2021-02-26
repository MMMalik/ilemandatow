export const getRoutes = (langPath = "") => {
  const baseLink = `/${langPath}`;

  return {
    home: {
      link: () => baseLink,
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
      link: (slug: string) => `${baseLink}/poll/${slug}`,
    },
    polls: {
      link: () => `${baseLink}/polls`,
    },
    docs: {
      link: (slug?: string) =>
        slug ? `${baseLink}/docs/${slug}` : `${baseLink}/docs/about`,
    },
    privacy: {
      link: () => `${baseLink}/privacy`,
    },
  };
};
