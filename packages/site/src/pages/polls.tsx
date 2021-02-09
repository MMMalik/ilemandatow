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
      allPolls(first: 12, sortBy: publishedAt_DESC) {
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
  const totalPolls = data.ilemandatow._allPollsMeta.count;
  const polls: PollFragment[] = filterList(data.ilemandatow.allPolls);

  return (
    <>
      <SectionTitle title={t("polls")} />
      <PollsGrid
        initPolls={polls}
        totalPolls={totalPolls ?? 0}
        pollsPerPage={12}
      />
    </>
  );
};

export default Polls;
