import * as React from "react";
import { DataType, sortPollResults } from "@ilemandatow/client";
import { DefinitionList, DefinitionItem } from "@ilemandatow/ui";
import PollResult from "../pollResult";

interface Props {
  results: DataType.PollResultFragment[];
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
              value={<PollResult result={result} />}
            />
          );
        })}
    </DefinitionList>
  );
};

export default PollCardStats;
