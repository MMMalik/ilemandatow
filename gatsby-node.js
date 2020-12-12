exports.createPages = async ({ actions }) => {
  actions.createPage({
    path: "/o-nas",
    component: require.resolve(`./src/pages/about.tsx`),
  });
};
