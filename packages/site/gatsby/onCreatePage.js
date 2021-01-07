const { meta, translations } = require("@ilemandatow/locales");
const { removeTrailingSlash } = require("./utils");

exports.onCreatePage = async ({ page, actions, reporter }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  const localesByKey = Object.keys(meta);
  const is404 = page.path.includes("404");

  if (is404) {
    const defaultLang = localesByKey.find((lang) => meta[lang].default);

    if (!defaultLang) {
      return reporter.panicOnBuild("Default language was not found.");
    }

    return createPage({
      ...page,
      context: {
        ...page.context,
        i18nCtx: {
          ...meta[defaultLang],
          translations: translations[defaultLang],
        },
      },
    });
  } else {
    Object.keys(meta).map((lang) => {
      const localizedPath = `/${meta[lang].path}${page.path}`;
      return createPage({
        ...page,
        path: removeTrailingSlash(localizedPath),
        context: {
          ...page.context,
          i18nCtx: {
            ...meta[lang],
            translations: translations[lang],
          },
        },
      });
    });
  }
};
