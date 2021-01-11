import * as React from "react";
import { graphql } from "gatsby";
import { GridContainer, GridItem, PageTitle, Paper } from "@ilemandatow/ui";
import { GetPollInfoQuery } from "../types";
import { filterPollResults } from "../data";
import { PollParliamentChart } from "../components";
import { useTranslation } from "../i18n";

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
  const source = poll?.source;
  const polledBy = poll?.polledBy;
  const publishedBy = poll?.publishedBy;
  const publishedAt = poll?.publishedAt;
  const results = poll?.results;

  return (
    <>
      <PageTitle title={t("pollResults")} />
      <GridContainer>
        <GridItem>
          <Paper className="pa3">Table</Paper>
        </GridItem>
        <GridItem className="w-third">
          <Paper className="pa3">Table</Paper>
        </GridItem>
        <GridItem className="w-two-thirds">
          <Paper className="pa3">
            <PollParliamentChart results={filterPollResults(results)} />
          </Paper>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default Poll;
