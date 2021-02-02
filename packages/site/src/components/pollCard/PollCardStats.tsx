import * as React from "react";
import { DefinitionList, DefinitionItem } from "@ilemandatow/ui";
import { PollResultFragment } from "../../types";
import { sortPollResults } from "../../data";

interface Props {
  results: PollResultFragment[];
}

const PollCardStats: React.FC<Props> = ({ results }) => {
  return (
    <DefinitionList>
      {results
        .slice(0, 6)
        .sort(sortPollResults)
        .map(({ result, party }) => {
          return (
            <DefinitionItem
              key={party?.id}
              className="w-third"
              label={party?.abbr ?? ""}
              value={result ?? ""}
            />
          );
        })}
    </DefinitionList>
  );
};

export default PollCardStats;
