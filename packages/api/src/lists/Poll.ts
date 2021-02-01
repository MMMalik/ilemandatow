import {
  CalendarDay,
  Integer,
  Float,
  Relationship,
  Text,
  Uuid,
  Slug,
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
    publishedBy: { type: Relationship, ref: "Publisher", many: true },
    polledBy: { type: Relationship, ref: "PollCompany", many: true },
    publishedAt: { type: CalendarDay },
    method: { type: Relationship, ref: "PollMethod" },
    results: { type: Relationship, ref: "PollResult", many: true },
    participantsCount: { type: Integer },
    participantsMightNotVote: { type: Float },
    participantsMightVote: { type: Float },
    participantsUndecided: { type: Float },
    participantsWillNotVote: { type: Float },
    participantsWillVote: { type: Float },
    pollStartedAt: { type: CalendarDay },
    pollEndedAt: { type: CalendarDay },
    errorMargin: { type: Float },
    slug: {
      type: Slug,
      hooks: {
        resolveInput: async ({ resolvedData, operation, context }: any) => {
          if (operation === "create") {
            const publishedBy = resolvedData.publishedBy.map(
              (id: string) => `"${id}"`
            );
            const polledBy = resolvedData.polledBy.map(
              (id: string) => `"${id}"`
            );
            const { data: publisher } = await context.executeGraphQL({
              query: `query getPublishers {
                allPublishers(where: { id_in: [${publishedBy.join(",")}] } ) {
                  name
                }
              }`,
            });
            const { data: pollCompany } = await context.executeGraphQL({
              query: `query getPollCompanies {
                allPollCompanies(where: { id_in: [${polledBy.join(",")}] }) {
                  name
                }
              }`,
            });
            return slugId(["polledBy", "publishedBy", "publishedAt"])({
              resolvedData: {
                publishedAt: resolvedData.publishedAt,
                polledBy: pollCompany.allPollCompanies
                  .map((p: any) => p.name)
                  .join(" "),
                publishedBy: publisher.allPublishers
                  .map((p: any) => p.name)
                  .join(" "),
              },
            });
          }
          return resolvedData.slug;
        },
      },
      regenerateOnUpdate: false,
    },
  },
};
