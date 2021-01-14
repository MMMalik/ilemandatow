import * as React from "react";
import { graphql } from "gatsby";
import { SectionTitle } from "@ilemandatow/ui";
import { GetPollInfoQuery } from "../types";
import { useTranslation } from "../i18n";
import { PollViz } from "../views";

export const query = graphql`
  query getPollInfo($id: String!) {
    allPollsJson(filter: { id: { eq: $id } }) {
      nodes {
        ...PollInfo
      }
    }
  }
`;

interface Props {
  data: GetPollInfoQuery;
}

const Poll: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const poll = data.allPollsJson.nodes[0];

  return (
    <>
      <SectionTitle title={t("pollResults")} />
      <PollViz poll={poll} />
    </>
  );
};

export default Poll;
