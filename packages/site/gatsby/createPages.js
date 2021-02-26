const { meta, translations } = require("@ilemandatow/locales");

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query getDataForPages {
      ilemandatow {
        allPolls {
          id
          slug
        }
        allDocSections {
          language
          docs {
            id
            slug
          }
        }
      }
    }
  `);

  data.ilemandatow.allPolls.forEach(({ id, slug }) => {
    Object.keys(meta).forEach((lang) => {
      const localizedPath = `/${meta[lang].path}/poll/${slug}`;
      actions.createPage({
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

  data.ilemandatow.allDocSections.forEach(({ language, docs }) => {
    docs.forEach(({ id, slug }) => {
      const localizedPath = `/${language}/docs/${slug}`;
      actions.createPage({
        path: localizedPath,
        component: require.resolve(`../src/templates/docs.tsx`),
        context: {
          id,
          lang: language,
          i18nCtx: {
            ...meta[language],
            translations: translations[language],
          },
        },
      });
    });
  });
};
