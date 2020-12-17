const localesMeta = require("../locales/meta");

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query getAllPolls {
      allPollsJson {
        nodes {
          id
        }
      }
    }
  `);

  const getTranslations = (langKey) => {
    return require(`../locales/translations/${langKey}.json`);
  };

  return data.allPollsJson.nodes.map(({ id }) => {
    Object.keys(localesMeta).map((lang) => {
      const localizedPath = `/${localesMeta[lang].path}/poll/${id}`;
      return actions.createPage({
        path: localizedPath,
        component: require.resolve(`../src/templates/poll.tsx`),
        context: {
          id,
          i18nCtx: {
            ...localesMeta[lang],
            translations: getTranslations(lang),
          },
        },
      });
    });
  });
};
