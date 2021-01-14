import * as React from "react";
import { Grid, GridItem, Paper, SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";
import { NewPollForm } from "../components";

const NewPoll: React.FC = () => {
  const [newPollData, setNewPollData] = React.useState();
  const { t } = useTranslation();

  const handleSubmit = (data) => {
    setNewPollData(data);
  };

  return (
    <>
      <SectionTitle title={t("newPoll")} />
      {newPollData ? <div /> : <div />}
      <Grid>
        <GridItem>
          <Paper className="pa4">
            <NewPollForm onSubmit={handleSubmit} defaultValues={{}} />
          </Paper>
        </GridItem>
      </Grid>
    </>
  );
};

export default NewPoll;
