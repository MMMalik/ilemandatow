import * as React from "react";
import { DataType, filterNonRegularParties } from "@ilemandatow/client";
import { Grid, GridItem } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { PollCard } from "../../components";

interface Props {
  /**
   * List of polls to render.
   */
  polls: DataType.PollFragment[];
}

const PollCardsGrid: React.FC<Props> = ({ polls }) => {
  const { t } = useTranslation();

  if (polls.length === 0) {
    return <div className="f4 tc mt3">{t("noPollsFound")}</div>;
  }

  return (
    <Grid>
      {polls.map(
        ({ id, polledBy, publishedBy, publishedAt, source, results }) => {
          const [firstPolledBy] = polledBy;
          const [firstPublishedBy] = publishedBy;
          return (
            <GridItem key={id} className="w-100 w-50-m w-third-l">
              <PollCard
                id={id}
                polledBy={firstPolledBy?.abbr ?? ""}
                publishedBy={firstPublishedBy?.abbr ?? ""}
                publishedAt={publishedAt ?? ""}
                source={source ?? ""}
                results={filterNonRegularParties(results)}
              />
            </GridItem>
          );
        }
      )}
    </Grid>
  );
};

export default PollCardsGrid;
