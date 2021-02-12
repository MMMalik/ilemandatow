import * as React from "react";
import { Grid, GridItem, Paper } from "@ilemandatow/ui";
import {
  PartyWithResult,
  getDhondtResults,
  getLatestElectoralCode,
  DataType,
} from "@ilemandatow/client";
import {
  ElectionSettingsList,
  PollChart,
  PollResultsTable,
} from "../../components";

interface Props {
  threshold: number;
  parties: PartyWithResult[];
  codes: DataType.ElectoralCodeFragment[];
}

const NewPollViz: React.FC<Props> = ({ threshold, parties, codes }) => {
  const latestCode = getLatestElectoralCode(codes);
  const totalSeats = latestCode?.totalSeats ?? 0;
  const seats = getDhondtResults(
    parties,
    latestCode ? { ...latestCode, threshold } : undefined
  );

  return (
    <Grid>
      <GridItem className="w-100">
        <Paper className="pa4">
          <ElectionSettingsList
            threshold={threshold}
            parliamentSeats={totalSeats}
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
          <PollChart parties={parties} seats={seats} totalSeats={totalSeats} />
        </Paper>
      </GridItem>
    </Grid>
  );
};

export default NewPollViz;
