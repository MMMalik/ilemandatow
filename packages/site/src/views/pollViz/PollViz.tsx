import * as React from "react";
import { Grid, GridItem, Paper } from "@ilemandatow/ui";
import { filterPollResults, getDhondtResults, getPollMethod } from "../../data";
import {
  PollChart,
  PollInfoList,
  PollResultsTable,
  PollMethodologyList,
} from "../../components";
import { PollInfoFragment } from "../../types";

interface Props {
  poll: PollInfoFragment;
}

const Poll: React.FC<Props> = ({ poll }) => {
  const filteredResults = filterPollResults(poll?.results);
  const seats = getDhondtResults(
    filteredResults.map(({ party, result }) => ({
      id: party?.id ?? "",
      result: result ?? 0,
    }))
  );
  const parties = filteredResults.map(({ party, result }) => ({
    id: party?.id ?? "",
    name: party?.name ?? "",
    result: result ?? 0,
    color: party?.color ?? "",
    colorDarkTheme: party?.colorDarkTheme ?? "",
  }));

  return (
    <Grid>
      <GridItem>
        <Paper className="pa4">
          <PollInfoList
            source={poll?.source ?? undefined}
            publishedBy={poll?.publishedBy?.name ?? undefined}
            publishedAt={poll?.publishedAt ?? undefined}
            polledBy={poll?.polledBy?.name ?? undefined}
          />
        </Paper>
      </GridItem>
      <GridItem className="w-third">
        <Paper className="pa4 h-100">
          <PollResultsTable parties={parties} seats={seats} />
        </Paper>
      </GridItem>
      <GridItem className="w-two-thirds">
        <Paper className="pa4 h-100">
          <PollChart parties={parties} seats={seats} />
        </Paper>
      </GridItem>
      <GridItem>
        <Paper className="pa4">
          <PollMethodologyList
            pollStartedAt={poll?.pollStartedAt ?? undefined}
            pollEndedAt={poll?.pollEndedAt ?? undefined}
            method={getPollMethod(poll)}
            participantsCount={poll?.participantsCount ?? undefined}
          />
        </Paper>
      </GridItem>
    </Grid>
  );
};

export default Poll;
