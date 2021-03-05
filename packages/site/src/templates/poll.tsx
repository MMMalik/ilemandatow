import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { DataType, filterList } from "@ilemandatow/client";
import { SectionTitle } from "@ilemandatow/ui";
import { useDateFormat, useTranslation } from "../i18n";
import { PollViz } from "../views";
import { SEO } from "../components";

export const query = graphql`
  query poll($id: ID!) {
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

const Poll: React.FC<PageProps<any>> = ({ data }) => {
  const { t } = useTranslation();
  const format = useDateFormat();
  const poll: DataType.PollFragment = data.ilemandatow.Poll;
  const codes: DataType.ElectoralCodeFragment[] = filterList(
    data.ilemandatow.allElectoralCodes
  );
  const [firstPolledBy] = poll?.polledBy ?? [];
  const [firstPublishedBy] = poll?.publishedBy ?? [];
  const publishedAt = poll?.publishedAt
    ? format(new Date(poll.publishedAt))
    : "";
  const polledByAbbr = firstPolledBy.abbr ?? "";
  const polledByName = firstPolledBy.name ?? "";
  const publishedByAbbr = firstPublishedBy.abbr ?? "";
  const publishedByName = firstPublishedBy.name ?? "";
  const description = `${polledByName}, ${publishedByName}, ${publishedAt}: ${t(
    "pollPageDesc"
  )}`;
  const title = `${polledByAbbr} - ${publishedByAbbr} - ${t("pollPageTitle")}`;

  return (
    <>
      <SEO title={title} description={description} />
      <SectionTitle title={t("pollResults")} />
      <PollViz poll={poll} codes={codes} />
    </>
  );
};

export default Poll;
