import * as React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem, SectionTitle } from "@ilemandatow/ui";
import { PollCard } from "../components";
import { GetAllPollsQuery } from "../types";
import { useTranslation } from "../i18n";
import { filterPollResults } from "../data";

export const query = graphql`
  query getAllPolls {
    allPollsJson {
      nodes {
        ...PollInfo
      }
    }
  }
`;

interface Props {
  data: GetAllPollsQuery;
}

const Polls: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("polls")} />
      <Grid>
        {data.allPollsJson.nodes.map(
          ({ id, polledBy, publishedAt, source, results }) => {
            return (
              <GridItem key={id} className="w-50-m w-third-l">
                <PollCard
                  id={id}
                  polledBy={polledBy?.abbr ?? ""}
                  publishedAt={publishedAt}
                  source={source ?? ""}
                  results={filterPollResults(results)}
                />
              </GridItem>
            );
          }
        )}
      </Grid>
    </>
  );
};

export default Polls;
