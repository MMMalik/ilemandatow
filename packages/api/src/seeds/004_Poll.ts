import { join } from "path";
import * as Knex from "knex";
import { readDir, slugId } from "../utils";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("Poll").del();

  await knex.schema.table("Poll", (table) => {
    table.string("deprecatedId");
  });

  const polls = (
    await readDir(join(__dirname, "../../../content/polls"))
  ).map((p) => JSON.parse(p));

  const methods = await knex("PollMethod").select();
  const publishers = await knex("Publisher").select();
  const parties = await knex("Party").select();
  const pollCompanies = await knex("PollCompany").select();

  // Inserts seed entries
  const insertedPolls: any[] = await knex("Poll")
    .returning("*")
    .insert(
      polls.map((poll) => {
        const {
          id,
          publishedAt,
          pollStartedAt,
          pollEndedAt,
          participantsCount,
          source,
          participantsWillVote,
          participantsMightVote,
          participantsUndecided,
          participantsMightNotVote,
          participantsWillNotVote,
          error,
          method,
          publishedBy___NODE,
          polledBy___NODE,
        } = poll;
        const publishedBy = publishers.find(
          (p) => publishedBy___NODE === p.deprecatedId
        );
        const foundMethod = methods.find((m) => m.name === method);
        const polledBy = pollCompanies.find(
          (p) => polledBy___NODE === p.deprecatedId
        );
        const data = {
          id: knex.raw("gen_random_uuid()"),
          deprecatedId: id,
          publishedAt,
          pollStartedAt,
          pollEndedAt,
          participantsCount,
          source,
          participantsWillVote,
          participantsMightVote,
          participantsUndecided,
          participantsMightNotVote,
          participantsWillNotVote,
          errorMargin: error,
          method: foundMethod.id,
          publishedBy: publishedBy.id,
          polledBy: polledBy.id,
        };
        return {
          ...data,
          slug: slugId(["polledBy.name", "publishedBy.name", "publishedAt"])({
            resolvedData: {
              polledBy,
              publishedBy,
              publishedAt,
            },
          }),
        };
      })
    );

  const pollResultRows = insertedPolls.map((insertedPoll) => {
    const poll = polls.find((p) => p.id === insertedPoll.deprecatedId);
    return {
      poll,
      insertedPoll,
      results: poll.results.map((r: any) => {
        const party = parties.find((p) => p.deprecatedId === r.party___NODE);
        return {
          id: knex.raw("gen_random_uuid()"),
          result: r.result,
          party: party.id,
        };
      }),
    };
  });

  await Promise.all(
    pollResultRows.map(async ({ insertedPoll, results }) => {
      const insertedPollResults: any[] = await knex("PollResult")
        .returning("*")
        .insert(results);

      await knex("Poll_results_many").insert(
        insertedPollResults.map((r) => {
          return {
            Poll_left_id: insertedPoll.id,
            PollResult_right_id: r.id,
          };
        })
      );
    })
  );
}
