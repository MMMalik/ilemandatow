import * as React from "react";
import { Grid, GridItem } from "@ilemandatow/ui";
import { filterPollResults, sortPollsByDate } from "../../data";
import { PollCard } from "../../components";
import { PollInfoFragment } from "../../types";

interface Props {
  polls: PollInfoFragment[];
}

const PollsGrid: React.FC<Props> = ({ polls }) => {
  return (
    <Grid>
      {polls
        .sort(sortPollsByDate)
        .map(({ id, polledBy, publishedAt, source, results }) => {
          return (
            <GridItem key={id} className="w-100 w-50-m w-third-l">
              <PollCard
                id={id}
                polledBy={polledBy?.abbr ?? ""}
                publishedAt={publishedAt ?? ""}
                source={source ?? ""}
                results={filterPollResults(results)}
              />
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default PollsGrid;
