const { meta, translations } = require("@ilemandatow/locales");

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

  return data.allPollsJson.nodes.map(({ id }) => {
    Object.keys(meta).map((lang) => {
      const localizedPath = `/${meta[lang].path}/poll/${id}`;
      return actions.createPage({
        path: localizedPath,
        component: require.resolve(`../src/templates/poll.tsx`),
        context: {
          id,
          i18nCtx: {
            ...meta[lang],
            translations: translations[lang],
          },
        },
      });
    });
  });
};
