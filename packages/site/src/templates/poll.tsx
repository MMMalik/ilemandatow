import * as React from "react";
import { graphql } from "gatsby";
import { DataType, filterList } from "@ilemandatow/client";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";
import { PollViz } from "../views";

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
  const poll: DataType.PollFragment = data.ilemandatow.Poll;
  const codes: DataType.ElectoralCodeFragment[] = filterList(
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
