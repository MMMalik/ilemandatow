import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { DataType, filterList } from "@ilemandatow/client";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";
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
  const poll: DataType.PollFragment = data.ilemandatow.Poll;
  const codes: DataType.ElectoralCodeFragment[] = filterList(
    data.ilemandatow.allElectoralCodes
  );
  const [firstPolledBy] = poll?.polledBy ?? [];
  const desc = [...poll?.polledBy, ...poll?.publishedBy]
    .filter(Boolean)
    .join(", ");

  return (
    <>
      <SEO
        title={`${firstPolledBy.abbr} - ${t("pollPageTitle")}`}
        description={`${desc}: ${t("pollPageDesc")}`}
      />
      <SectionTitle title={t("pollResults")} />
      <PollViz poll={poll} codes={codes} />
    </>
  );
};

export default Poll;
