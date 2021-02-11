import * as React from "react";
import { DataType, useFilterPolls } from "@ilemandatow/client";
import { Divider, Grid, GridItem, Pagination, Paper } from "@ilemandatow/ui";
import { PollCardsGrid, PollsFilters } from "../../components";

interface Props {
  /**
   * Init list of polls.
   */
  initPolls: DataType.PollFragment[];
  /**
   * Total number of polls.
   */
  totalPolls: number;
  /**
   * Number of items to render per page.
   */
  pollsPerPage: number;
  /**
   * List of publishers.
   */
  publishers: DataType.PublisherFragment[];
  /**
   * List of poll companies.
   */
  pollCompanies: DataType.PollCompanyFragment[];
}

const PollsGrid: React.FC<Props> = ({
  initPolls,
  totalPolls,
  pollsPerPage,
  publishers,
  pollCompanies,
}) => {
  const {
    filteredPolls,
    setPage,
    setPollCompanyFilter,
    setPublishersFilter,
  } = useFilterPolls({
    initPolls: { polls: initPolls, count: totalPolls },
    pollsPerPage,
  });
  const { count, polls } = filteredPolls;

  return (
    <Grid>
      <GridItem className="w-100">
        <Paper className="pa4">
          <PollsFilters
            publishers={publishers}
            pollCompanies={pollCompanies}
            onPollCompaniesSelect={setPollCompanyFilter}
            onPublishersSelect={setPublishersFilter}
          />
        </Paper>
      </GridItem>
      <GridItem className="w-100">
        <Divider disableSpacing={true} />
      </GridItem>
      <GridItem className="w-100">
        <PollCardsGrid polls={polls} />
      </GridItem>
      <GridItem className="w-100">
        <div className="flex justify-center">
          <Pagination
            perPage={pollsPerPage}
            items={count}
            initPage={1}
            onChange={setPage}
            hideOnSinglePage={true}
          />
        </div>
      </GridItem>
    </Grid>
  );
};

export default PollsGrid;
