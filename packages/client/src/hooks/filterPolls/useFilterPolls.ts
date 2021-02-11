import * as React from "react";
import { DataType } from "../../generated";
import { filterList } from "../../utils";
import { useGetPolls } from "../getPolls";
import { getFilterVariables } from "./getFilterVariables";
import { useFilterReducer } from "./useFilterReducer";

interface FilterPollsConfig {
  initPolls: { polls: DataType.PollFragment[]; count: number };
  pollsPerPage: number;
}

export const useFilterPolls = ({
  initPolls,
  pollsPerPage,
}: FilterPollsConfig) => {
  const {
    state,
    setPollCompanyFilter,
    setPublishersFilter,
    setPage,
  } = useFilterReducer({ pollsPerPage });
  const [filteredPolls, setFilteredPolls] = React.useState(initPolls);
  const { fetchPolls } = useGetPolls();

  React.useEffect(() => {
    const fetchPollsAsync = async () => {
      const { data } = await fetchPolls({
        variables: getFilterVariables(state),
      });
      if (data) {
        setFilteredPolls({
          polls: filterList(data.allPolls),
          count: data._allPollsMeta?.count ?? 0,
        });
      }
    };

    fetchPollsAsync().catch((err) => {
      /* eslint-disable-next-line */
      console.error(err);
    });
  }, [state, fetchPolls]);

  return {
    setPollCompanyFilter,
    setPublishersFilter,
    setPage,
    filteredPolls,
  };
};
