import * as React from "react";
import { Grid, GridItem, Paper } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

const PollsExplained: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Grid>
        <GridItem className="w-50 pa3">
          <div className="f4 lh-copy">{t("pollsExplainedDesc")}</div>
        </GridItem>
        <GridItem className="w-50">
          <Paper>{"Search..."}</Paper>
        </GridItem>
      </Grid>
    </div>
  );
};

export default PollsExplained;
