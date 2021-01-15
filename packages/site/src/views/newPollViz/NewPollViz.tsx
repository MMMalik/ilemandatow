import * as React from "react";
import { Button, Grid, GridItem, Paper } from "@ilemandatow/ui";
import {
  ElectionSettingsList,
  PollChart,
  PollResultsTable,
} from "../../components";
import { getDhondtResults, PartyWithResult } from "../../data";
import { useTranslation } from "../../i18n";

interface Props {
  threshold?: string;
  parliamentSeats?: string;
  parties: Partial<PartyWithResult>[];
  onRecalculate: () => void;
}

const NewPollViz: React.FC<Props> = ({
  threshold,
  parliamentSeats,
  parties,
  onRecalculate,
}) => {
  const { t } = useTranslation();
  const seats = getDhondtResults(parties);

  return (
    <Grid>
      <GridItem>
        <Paper className="pa4 flex justify-between">
          <ElectionSettingsList
            threshold={threshold ?? "0"}
            parliamentSeats={parliamentSeats ?? "0"}
          />
          <Button icon="redo" onClick={onRecalculate}>
            {t("edit")}
          </Button>
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
    </Grid>
  );
};

export default NewPollViz;
