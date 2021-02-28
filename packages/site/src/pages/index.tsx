import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { DataType, filterList } from "@ilemandatow/client";
import { SEO } from "../components";
import { Hero } from "../views";
import { useTranslation } from "../i18n";

export const query = graphql`
  query index {
    ilemandatow {
      allPolls(first: 1, sortBy: publishedAt_DESC) {
        ...Poll
      }
      allElectoralCodes {
        ...ElectoralCode
      }
    }
  }
`;

const Index: React.FC<PageProps<any>> = ({ data }) => {
  const { t } = useTranslation();

  const polls: DataType.PollFragment[] = filterList(data.ilemandatow.allPolls);
  const codes: DataType.ElectoralCodeFragment[] = filterList(
    data.ilemandatow.allElectoralCodes
  );

  return (
    <>
      <SEO title={t("indexPageTitle")} description={t("indexPageDesc")} />
      <Hero latestPoll={polls[0]} codes={codes} />
    </>
  );
};

export default Index;
