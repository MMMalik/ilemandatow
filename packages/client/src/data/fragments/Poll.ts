import { PollCompanyFragment } from "./PollCompany";
import { PollMethodFragment } from "./PollMethod";
import { PollResultFragment } from "./PollResult";
import { PublisherFragment } from "./Publisher";

export const PollFragment = /* GraphQL */ `
  fragment Poll on Poll {
    id
    slug
    publishedAt
    publishedBy {
      ...Publisher
    }
    polledBy {
      ...PollCompany
    }
    source
    results {
      ...PollResult
    }
    pollEndedAt
    pollStartedAt
    participantsCount
    method {
      ...PollMethod
    }
  }
  ${PublisherFragment}
  ${PollCompanyFragment}
  ${PollResultFragment}
  ${PollMethodFragment}
`;
