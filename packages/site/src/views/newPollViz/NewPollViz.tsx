import * as React from "react";
import { Grid, GridItem, Paper } from "@ilemandatow/ui";
import { PartyWithResult, getDhondtResults } from "@ilemandatow/client";
import {
  ElectionSettingsList,
  PollChart,
  PollResultsTable,
} from "../../components";

interface Props {
  threshold?: string;
  parliamentSeats?: string;
  parties: Partial<PartyWithResult>[];
}

const NewPollViz: React.FC<Props> = ({
  threshold,
  parliamentSeats,
  parties,
}) => {
  const seats = getDhondtResults(parties);

  return (
    <Grid>
      <GridItem className="w-100">
        <Paper className="pa4">
          <ElectionSettingsList
            threshold={threshold ?? "0"}
            parliamentSeats={parliamentSeats ?? "0"}
          />
        </Paper>
      </GridItem>
      <GridItem className="w-100 w-third-l">
        <Paper className="pa4 h-100">
          <PollResultsTable parties={parties} seats={seats} />
        </Paper>
      </GridItem>
      <GridItem className="w-100 w-two-thirds-l">
        <Paper className="pa4 h-100">
          <PollChart
            parties={parties}
            seats={seats}
            totalSeats={parseInt(parliamentSeats ?? "0", 10)}
          />
        </Paper>
      </GridItem>
    </Grid>
  );
};

export default NewPollViz;
