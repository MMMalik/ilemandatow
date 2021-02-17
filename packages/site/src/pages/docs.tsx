import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { DataType } from "@ilemandatow/client";
import { navigate } from "@reach/router";
import { useRoutes } from "../routes";

export const query = graphql`
  query docs {
    ilemandatow {
      allDocSections(sortBy: order_ASC, first: 1) {
        docs(sortBy: order_ASC, first: 1) {
          slug
        }
      }
    }
  }
`;

const Docs: React.FC<PageProps<any>> = ({ data }) => {
  const { routes } = useRoutes();
  const docSections: DataType.DocSection[] = data.ilemandatow.allDocSections;
  const firstDoc = docSections?.[0]?.docs?.[0];

  React.useEffect(() => {
    if (firstDoc && firstDoc.slug) {
      navigate(routes.docs.link(firstDoc.slug));
    }
  }, [routes, firstDoc]);

  return null;
};

export default Docs;
