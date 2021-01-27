import {
  CalendarDay,
  Integer,
  Float,
  Relationship,
  Text,
  Uuid,
  Slug,
  Virtual,
} from "@keystonejs/fields";
import { slugId } from "../utils";

export const Poll = {
  fields: {
    id: {
      type: Uuid,
      knexOptions: {
        defaultTo: (knex: any) => knex.raw("gen_random_uuid()"),
      },
    },
    source: { type: Text },
    publishedAt: { type: CalendarDay },
    pollStartedAt: { type: CalendarDay },
    pollEndedAt: { type: CalendarDay },
    participantsCount: { type: Integer },
    participantsWillVote: { type: Float },
    participantsMightVote: { type: Float },
    participantsUndecided: { type: Float },
    participantsMightNotVote: { type: Float },
    participantsWillNotVote: { type: Float },
    errorMargin: { type: Float },
    results: { type: Relationship, ref: "PollResult", many: true },
    publishedBy: { type: Relationship, ref: "Publisher" },
    polledBy: { type: Relationship, ref: "PollCompany" },
    method: { type: Relationship, ref: "PollMethod" },
    slug: {
      type: Slug,
      hooks: {
        resolveInput: async ({ resolvedData, operation, context }: any) => {
          if (operation === "create") {
            const { data: publisher } = await context.executeGraphQL({
              query: `query getPublisher {
                Publisher(where: {id:"${resolvedData.publishedBy}"}) {
                  name
                }
              }`,
            });
            const { data: pollCompany } = await context.executeGraphQL({
              query: `query getPollCompany {
                PollCompany(where: {id:"${resolvedData.polledBy}"}) {
                  name
                }
              }`,
            });
            return slugId(["polledBy.name", "publishedBy.name", "publishedAt"])(
              {
                resolvedData: {
                  polledBy: pollCompany.PollCompany,
                  publishedBy: publisher.Publisher,
                },
              }
            );
          }
          return resolvedData.slug;
        },
      },
      regenerateOnUpdate: false,
    },
  },
};
