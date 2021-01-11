import * as React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem, SectionTitle, Paper } from "@ilemandatow/ui";
import { GetPollInfoQuery } from "../types";
import { filterPollResults, getDhondtResults, getPollMethod } from "../data";
import {
  PollParliamentChart,
  PollInfoList,
  PollResultsTable,
  PollMethodologyList,
} from "../components";
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
  const filteredResults = filterPollResults(poll?.results);
  const seats = getDhondtResults(filteredResults);

  return (
    <>
      <SectionTitle title={t("pollResults")} />
      <Grid>
        <GridItem>
          <Paper className="pa4">
            <PollInfoList
              source={poll?.source ?? undefined}
              publishedBy={poll?.publishedBy?.name ?? undefined}
              publishedAt={poll?.publishedAt ?? undefined}
              polledBy={poll?.polledBy?.name ?? undefined}
            />
          </Paper>
        </GridItem>
        <GridItem className="w-third">
          <Paper className="pa4 h-100">
            <PollResultsTable results={filteredResults} seats={seats} />
          </Paper>
        </GridItem>
        <GridItem className="w-two-thirds">
          <Paper className="pa4 h-100">
            <PollParliamentChart results={filteredResults} seats={seats} />
          </Paper>
        </GridItem>
        <GridItem>
          <Paper className="pa4">
            <PollMethodologyList
              pollStartedAt={poll?.pollStartedAt ?? undefined}
              pollEndedAt={poll?.pollEndedAt ?? undefined}
              method={getPollMethod(poll)}
              participantsCount={poll?.participantsCount ?? undefined}
            />
          </Paper>
        </GridItem>
      </Grid>
    </>
  );
};

export default Poll;
