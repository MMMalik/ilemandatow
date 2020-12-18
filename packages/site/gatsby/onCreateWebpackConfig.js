exports.onCreateWebpackConfig = ({ actions, rules, loaders, getConfig }) => {
  const config = getConfig();
  const fonts = rules.fonts();
  fonts.use = [loaders.file()];
  config.module.rules = [
    ...config.module.rules.filter(
      (rule) => !String(rule.test).includes("woff(2)?")
    ),
    fonts,
  ];
  actions.replaceWebpackConfig(config);
};
