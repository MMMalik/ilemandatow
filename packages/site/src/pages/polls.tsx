import * as React from "react";
import { graphql } from "gatsby";
import { SectionTitle } from "@ilemandatow/ui";
import { GetAllPollsQuery } from "../types";
import { useTranslation } from "../i18n";
import { PollsGrid } from "../views";

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
      <PollsGrid polls={data.allPollsJson.nodes} />
    </>
  );
};

export default Polls;
