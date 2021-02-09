import * as React from "react";
import { graphql } from "gatsby";
import { ElectoralCodeFragment, PollFragment } from "@ilemandatow/client";
import { SectionTitle } from "@ilemandatow/ui";
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
  data: any;
}

const Poll: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const poll: PollFragment = data.ilemandatow.Poll;
  const codes: ElectoralCodeFragment[] = filterList(
    data.ilemandatow.allElectoralCodes
  );

  return (
    <>
      <SectionTitle title={t("pollResults")} />
      <PollViz poll={poll} codes={codes} />
    </>
  );
};

export default Poll;
