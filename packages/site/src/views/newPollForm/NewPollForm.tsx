import * as React from "react";
import { Grid, GridItem, Paper } from "@ilemandatow/ui";
import { NewPollForm, NewPollFormValues } from "../../components";

interface Props {
  onSubmit: (data: NewPollFormValues) => void;
  initValues: NewPollFormValues;
}

const NewPollFormCmp: React.FC<Props> = ({ onSubmit, initValues }) => {
  return (
    <Grid>
      <GridItem>
        <Paper className="pa4">
          <NewPollForm onSubmit={onSubmit} initValues={initValues} />
        </Paper>
      </GridItem>
    </Grid>
  );
};

export default NewPollFormCmp;
