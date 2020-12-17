const localesMeta = require("../locales/meta");
const { removeTrailingSlash } = require("./utils");

exports.onCreatePage = async ({ page, actions, reporter }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  const localesByKey = Object.keys(localesMeta);
  const is404 = page.path.includes("404");

  const getTranslations = (langKey) => {
    return require(`../locales/translations/${langKey}.json`);
  };

  if (is404) {
    const defaultLang = localesByKey.find((lang) => localesMeta[lang].default);

    if (!defaultLang) {
      return reporter.panicOnBuild("Default language was not found.");
    }

    return createPage({
      ...page,
      context: {
        ...page.context,
        i18nCtx: {
          ...localesMeta[defaultLang],
          translations: getTranslations(defaultLang),
        },
      },
    });
  } else {
    Object.keys(localesMeta).map((lang) => {
      const localizedPath = `/${localesMeta[lang].path}${page.path}`;
      return createPage({
        ...page,
        path: removeTrailingSlash(localizedPath),
        context: {
          ...page.context,
          i18nCtx: {
            ...localesMeta[lang],
            translations: getTranslations(lang),
          },
        },
      });
    });
  }
};
