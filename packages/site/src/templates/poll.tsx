import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "../i18n";
import { GetPollInfoQuery } from "../types";

export const query = graphql`
  query getPollInfo($id: String!) {
    allPollsJson(filter: { id: { eq: $id } }) {
      nodes {
        id
        method
      }
    }
  }
`;

interface Props {
  data: GetPollInfoQuery;
}

const Poll: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("poll")}</div>
      <div>{data.allPollsJson.nodes[0]?.id}</div>
    </>
  );
};

export default Poll;
