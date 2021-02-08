import * as React from "react";
import { graphql } from "gatsby";
import { SectionTitle } from "@ilemandatow/ui";
import { GetPollQuery } from "../types";
import { useTranslation } from "../i18n";
import { PollViz } from "../views";
import { filterList } from "../data";

export const query = graphql`
  query getPoll($id: ID!) {
    ilemandatow {
      Poll(where: { id: $id }) {
        ...Poll
      }
      allElectoralCodes {
        ...ElectoralCode
      }
    }
  }
`;

interface Props {
  data: GetPollQuery;
}

const Poll: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const poll = data.ilemandatow.Poll;
  const codes = filterList(data.ilemandatow.allElectoralCodes);

  return (
    <>
      <SectionTitle title={t("pollResults")} />
      <PollViz poll={poll} codes={codes} />
    </>
  );
};

export default Poll;
