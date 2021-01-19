import * as React from "react";
import { Grid, GridItem, Paper } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

const PollsExplained: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pa3">
      <Grid>
        <GridItem className="w-100 w-50-m w-50-l">
          <div className="f4 lh-copy">{t("pollsExplainedDesc")}</div>
        </GridItem>
        <GridItem className="w-100 w-50-m w-50-l">
          <Paper>{"Search..."}</Paper>
        </GridItem>
      </Grid>
    </div>
  );
};

export default PollsExplained;
