import * as React from "react";
import { Grid, GridItem, Paper, useTheme } from "@ilemandatow/ui";
import {
  filterList,
  filterNonRegularParties,
  filterRegularParties,
  getDhondtResults,
  getPartiesWithResults,
} from "../../data";
import {
  PollChart,
  PollInfoList,
  PollResultsTable,
  PollMethodologyList,
} from "../../components";
import { PollFragment } from "../../types";

interface Props {
  poll?: PollFragment | null;
}

const PollViz: React.FC<Props> = ({ poll }) => {
  const { name } = useTheme();
  const results = filterList(poll?.results ?? []);
  const seatsParties = getDhondtResults(
    filterNonRegularParties(results).map(({ party, result }) => ({
      id: party?.id ?? "",
      result: result ?? 0,
    }))
  );
  const parties = getPartiesWithResults(results, name);
  const specialParties = getPartiesWithResults(
    filterRegularParties(results),
    name
  );

  const [firstPublishedBy] = poll?.publishedBy ?? [];
  const [firstPolledBy] = poll?.polledBy ?? [];

  return (
    <Grid>
      <GridItem className="w-100">
        <Paper className="pa4">
          <PollInfoList
            source={poll?.source ?? undefined}
            publishedBy={firstPublishedBy?.name ?? undefined}
            publishedAt={poll?.publishedAt ?? undefined}
            polledBy={firstPolledBy?.name ?? undefined}
          />
        </Paper>
      </GridItem>
      <GridItem className="w-100 w-40-l">
        <Paper className="pa4 h-100">
          <PollResultsTable
            parties={parties}
            seats={seatsParties}
            specialParties={specialParties}
          />
        </Paper>
      </GridItem>
      <GridItem className="w-100 w-60-l">
        <Paper className="pa3 h-100">
          <PollChart parties={parties} seats={seatsParties} />
        </Paper>
      </GridItem>
      <GridItem className="w-100">
        <Paper className="pa4">
          <PollMethodologyList
            pollStartedAt={poll?.pollStartedAt ?? undefined}
            pollEndedAt={poll?.pollEndedAt ?? undefined}
            method={poll?.method?.name ?? ""}
            participantsCount={poll?.participantsCount ?? undefined}
          />
        </Paper>
      </GridItem>
    </Grid>
  );
};

export default PollViz;
