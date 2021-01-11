import * as React from "react";
import { PollInfoFragment } from "../../types";
import PollCard from "./PollCard";

interface Props {
  polls: PollInfoFragment[];
}

const PollsCards: React.FC<Props> = ({ polls }) => {
  return (
    <div className="cf">
      {polls.map((pollInfo) => {
        return (
          <div key={pollInfo.id} className={`fl w-100 w-50-m w-third-l pa3`}>
            <PollCard pollInfo={pollInfo} />
          </div>
        );
      })}
    </div>
  );
};

export default PollsCards;
