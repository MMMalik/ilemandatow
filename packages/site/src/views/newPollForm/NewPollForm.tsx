import * as React from "react";
import { Grid, GridItem, Paper } from "@ilemandatow/ui";
import { NewPollForm, NewPollFormValues } from "../../components";

interface Props {
  onSubmit: (data: NewPollFormValues) => void;
  initValues: NewPollFormValues;
  totalSeats: number;
}

const NewPollFormCmp: React.FC<Props> = ({
  onSubmit,
  initValues,
  totalSeats,
}) => {
  return (
    <Grid>
      <GridItem className="w-100">
        <Paper className="pa4">
          <NewPollForm
            onSubmit={onSubmit}
            initValues={initValues}
            totalSeats={totalSeats}
          />
        </Paper>
      </GridItem>
    </Grid>
  );
};

export default NewPollFormCmp;
