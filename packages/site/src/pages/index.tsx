import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { DataType, filterList } from "@ilemandatow/client";
import { Hero } from "../views";

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
  const polls: DataType.PollFragment[] = filterList(data.ilemandatow.allPolls);
  const codes: DataType.ElectoralCodeFragment[] = filterList(
    data.ilemandatow.allElectoralCodes
  );

  return (
    <>
      <Hero latestPoll={polls[0]} codes={codes} />
    </>
  );
};

export default Index;
