import * as React from "react";
import { PollFragment } from "@ilemandatow/client";
import { Grid, GridItem } from "@ilemandatow/ui";
import { filterNonRegularParties } from "../../data";
import { PollCard } from "../../components";

interface Props {
  /**
   * List of polls to render.
   */
  polls: PollFragment[];
}

const PollCardsGrid: React.FC<Props> = ({ polls }) => {
  return (
    <Grid>
      {polls.map(({ id, polledBy, publishedAt, source, results }) => {
        const [firstPolledBy] = polledBy;
        return (
          <GridItem key={id} className="w-100 w-50-m w-third-l">
            <PollCard
              id={id}
              polledBy={firstPolledBy?.abbr ?? ""}
              publishedAt={publishedAt ?? ""}
              source={source ?? ""}
              results={filterNonRegularParties(results)}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PollCardsGrid;
