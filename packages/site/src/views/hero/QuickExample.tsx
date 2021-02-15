import * as React from "react";
import {
  DataType,
  filterList,
  getDhondtResults,
  getLatestElectoralCode,
  getPartiesWithResults,
} from "@ilemandatow/client";
import { Grid, GridItem, Paper, useTheme } from "@ilemandatow/ui";
import { useDateFormat, useTranslation } from "../../i18n";
import { PollChart, PollResultsTable } from "../../components";

interface Props {
  latestPoll?: DataType.PollFragment;
  codes: DataType.ElectoralCodeFragment[];
}

const QuickExample: React.FC<Props> = ({ codes, latestPoll }) => {
  const { t } = useTranslation();
  const { theme, name } = useTheme();
  const format = useDateFormat();
  const { textMuted } = theme;

  if (!latestPoll) {
    return <div className="tc mv3">{t("noPollsFound")}</div>;
  }

  const { results, polledBy, publishedBy, publishedAt } = latestPoll;
  const [firstPolledBy] = polledBy;
  const [firstPublishedBy] = publishedBy;
  const partiesWithResults = getPartiesWithResults(filterList(results), name);
  const latestCode = getLatestElectoralCode(codes);
  const totalSeats = latestCode?.totalSeats ?? 0;
  const seats = getDhondtResults(partiesWithResults, latestCode);

  return (
    <div className="pa3">
      <Grid>
        <GridItem className="w-100">
          <div className="f5 lh-copy mh3-ns">
            <div>{t("quickExampleDesc")}</div>
          </div>
        </GridItem>
        <GridItem className="w-100 lh-copy">
          <div className="mh3-ns">
            <span className="b">{firstPolledBy?.name ?? ""}</span>
            <span className={textMuted}>
              <span>{` / ${firstPublishedBy?.name ?? ""}`}</span>
              <span>{` (${format(new Date(publishedAt ?? ""))})`}</span>
            </span>
          </div>
        </GridItem>
        <GridItem className="w-100 mh3-ns">
          <Grid>
            <GridItem className="w-100 w-50-l">
              <Paper className="h-100 pa3">
                <PollResultsTable parties={partiesWithResults} seats={seats} />
              </Paper>
            </GridItem>
            <GridItem className="w-100 w-50-l">
              <Paper className="h-100 pa3">
                <PollChart
                  parties={partiesWithResults}
                  seats={seats}
                  totalSeats={totalSeats}
                />
              </Paper>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default QuickExample;
