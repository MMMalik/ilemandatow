import * as React from "react";
import { graphql } from "gatsby";
import { DataType, filterList } from "@ilemandatow/client";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";
import { PollsGrid } from "../views";

export const query = graphql`
  query getAllPolls {
    ilemandatow {
      allPolls(first: 12, sortBy: publishedAt_DESC) {
        ...Poll
      }
      allPublishers {
        ...Publisher
      }
      allPollCompanies {
        ...PollCompany
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
  const polls: DataType.PollFragment[] = filterList(data.ilemandatow.allPolls);
  const publishers: DataType.PublisherFragment[] = filterList(
    data.ilemandatow.allPublishers
  );
  const pollCompanies: DataType.PollCompanyFragment[] = filterList(
    data.ilemandatow.allPollCompanies
  );

  return (
    <>
      <SectionTitle title={t("polls")} />
      <PollsGrid
        initPolls={polls}
        totalPolls={totalPolls ?? 0}
        pollsPerPage={12}
        publishers={publishers}
        pollCompanies={pollCompanies}
      />
    </>
  );
};

export default Polls;
