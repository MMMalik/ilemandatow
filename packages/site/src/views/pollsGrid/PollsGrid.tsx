import * as React from "react";
import { PollFragment, SortPollsBy, useGetPolls } from "@ilemandatow/client";
import { Pagination } from "@ilemandatow/ui";
import { PollCardsGrid } from "../../components";
import { filterList } from "../../data";

interface Props {
  /**
   * Init list of polls.
   */
  initPolls: PollFragment[];
  /**
   * Total number of polls.
   */
  totalPolls: number;
  /**
   * Number of items to render per page.
   */
  pollsPerPage: number;
}

const PollsGrid: React.FC<Props> = ({
  initPolls,
  totalPolls,
  pollsPerPage,
}) => {
  const [polls, setPolls] = React.useState(initPolls);
  const { fetchPolls } = useGetPolls();

  const handlePageChange = React.useCallback(
    async (page: number) => {
      const { data } = await fetchPolls({
        variables: {
          sortBy: SortPollsBy.PublishedAtDesc,
          skip: (page - 1) * pollsPerPage,
          first: pollsPerPage,
        },
      });
      setPolls(filterList(data?.allPolls) ?? []);
    },
    [fetchPolls, pollsPerPage]
  );

  return (
    <div>
      <div>
        <PollCardsGrid polls={polls} />
      </div>
      <div className="flex justify-center mt3">
        <Pagination
          perPage={pollsPerPage}
          items={totalPolls}
          initPage={1}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PollsGrid;
