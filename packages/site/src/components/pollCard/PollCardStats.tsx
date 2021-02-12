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
      {sortPollResults(results)
        .slice(0, 6)
        .map(({ result, party }) => {
          return (
            <DefinitionItem
              key={party?.id}
              className="w-third"
              label={<span>{party?.abbr ?? ""}</span>}
              value={<PollResult result={result} showPerc={true} />}
            />
          );
        })}
    </DefinitionList>
  );
};

export default PollCardStats;
