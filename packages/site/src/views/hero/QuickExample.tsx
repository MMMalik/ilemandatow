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
    <div>
      <Grid>
        <GridItem>
          <div className="f4 lh-copy">
            <div>{t("quickExampleDesc")}</div>
          </div>
        </GridItem>
        <GridItem className="w-50">
          <Paper className="h-100"></Paper>
        </GridItem>
        <GridItem className="w-50">
          <Paper>
            <PollChart parties={[]} seats={[]} />
          </Paper>
        </GridItem>
      </Grid>
    </div>
  );
};

export default QuickExample;
