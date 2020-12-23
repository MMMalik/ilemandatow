import { useStaticQuery, graphql } from "gatsby";
import { GetSiteMetaDataQuery } from "../../types";

export const useSiteMetaData = () => {
  const data = useStaticQuery<GetSiteMetaDataQuery>(
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
