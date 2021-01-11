import * as React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem, SectionTitle } from "@ilemandatow/ui";
import { PollCard } from "../components";
import { GetAllPollsQuery } from "../types";
import { useTranslation } from "../i18n";

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
        {data.allPollsJson.nodes.map((pollInfo) => {
          return (
            <GridItem key={pollInfo.id} className="w-50-m w-third-l">
              <PollCard pollInfo={pollInfo} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default Polls;
