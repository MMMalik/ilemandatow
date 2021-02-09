import * as React from "react";
import { graphql } from "gatsby";
import { PollFragment } from "@ilemandatow/client";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";
import { PollsGrid } from "../views";
import { filterList } from "../data";

export const query = graphql`
  query getAllPolls {
    ilemandatow {
      allPolls(first: 20) {
        ...Poll
      }
      allElectoralCodes {
        ...ElectoralCode
      }
      _allPollsMeta {
        count
      }
    }
  }
`;

interface Props {
  data: any;
}

const Polls: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const totalPolls: number = data.ilemandatow._allPollsMeta.count;
  const polls: PollFragment[] = filterList(data.ilemandatow.allPolls);

  return (
    <>
      <SectionTitle title={t("polls")} />
      <PollsGrid polls={polls} />
    </>
  );
};

export default Polls;
