import * as React from "react";
import { Grid, GridItem, Paper } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { PollChart } from "../../components";

interface Props {
  linkTo: string;
}

const QuickExample: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <div className="pa3">
      <Grid>
        <GridItem className="w-100">
          <div className="f4 lh-copy">
            <div>{t("quickExampleDesc")}</div>
          </div>
        </GridItem>
        <GridItem className="w-100 w-50-m w-50-l">
          <Paper className="h-100">Test</Paper>
        </GridItem>
        <GridItem className="w-100 w-50-m w-50-l">
          <Paper>
            <PollChart parties={[]} seats={[]} />
          </Paper>
        </GridItem>
      </Grid>
    </div>
  );
};

export default QuickExample;
