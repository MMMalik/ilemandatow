import { join } from "path";
import * as Knex from "knex";
import { readDir, slugId } from "../../../utils";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("Poll").del();

  await knex.schema.table("Poll", (table) => {
    table.string("deprecatedId");
  });

  const polls = (
    await readDir(join(__dirname, "../../../../../content/polls"))
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
        } = poll;
        const foundMethod = methods.find((m) => m.name === method);
        const publisher = publishers.find(
          (p) => p.deprecatedId === poll.publishedBy___NODE
        );
        const pollCompany = pollCompanies.find(
          (p) => p.deprecatedId === poll.polledBy___NODE
        );
        return {
          id: knex.raw("gen_random_uuid()"),
          deprecatedId: id,
          publishedAt: publishedAt || null,
          pollStartedAt: pollStartedAt || null,
          pollEndedAt: pollEndedAt || null,
          participantsCount,
          source,
          participantsWillVote,
          participantsMightVote,
          participantsUndecided,
          participantsMightNotVote,
          participantsWillNotVote,
          errorMargin: error,
          method: foundMethod.id,
          slug: slugId(["pollCompany.name", "publisher.name", "publishedAt"])({
            resolvedData: {
              publishedAt,
              pollCompany,
              publisher,
            },
          }),
        };
      })
    );

  const pollRows = insertedPolls.map((insertedPoll) => {
    const poll = polls.find((p) => p.id === insertedPoll.deprecatedId);
    const publisher = publishers.find(
      (p) => p.deprecatedId === poll.publishedBy___NODE
    );
    const pollCompany = pollCompanies.find(
      (p) => p.deprecatedId === poll.polledBy___NODE
    );
    return {
      insertedPoll,
      publishedBy: {
        Poll_left_id: insertedPoll.id,
        Publisher_right_id: publisher.id,
      },
      polledBy: {
        Poll_left_id: insertedPoll.id,
        PollCompany_right_id: pollCompany.id,
      },
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
    pollRows.map(async ({ insertedPoll, results, publishedBy, polledBy }) => {
      const insertedPollResults: any[] = await knex("PollResult")
        .returning("*")
        .insert(results);

      await knex("Poll_polledBy_many").insert([polledBy]);

      await knex("Poll_publishedBy_many").insert([publishedBy]);

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
