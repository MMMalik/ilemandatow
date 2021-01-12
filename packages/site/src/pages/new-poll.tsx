import * as React from "react";
import { Grid, GridItem, Paper, SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";
import { NewPollForm } from "../components";

const NewPoll: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("newPoll")} />
      <Grid>
        <GridItem>
          <Paper className="pa4">
            <NewPollForm />
          </Paper>
        </GridItem>
      </Grid>
    </>
  );
};

export default NewPoll;
