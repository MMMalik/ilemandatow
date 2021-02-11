import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetaData = () => {
  const data = useStaticQuery(
    graphql`
      query getSiteMetaData {
        allSite {
          nodes {
            siteMetadata {
              appVersion
              description
              siteUrl
              repoUrl
              title
            }
          }
        }
      }
    `
  );

  const meta = data.allSite.nodes[0]?.siteMetadata;

  return {
    appVersion: meta?.appVersion ?? "",
    description: meta?.description ?? "",
    siteUrl: meta?.siteUrl ?? "",
    repoUrl: meta?.repoUrl ?? "",
    title: meta?.title ?? "",
  };
};
