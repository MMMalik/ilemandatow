import * as React from "react";
import LegendItem from "./LegendItem";
import { ParliamentChartParty } from "./types";

interface Props {
  parties: ParliamentChartParty[];
}

const Legend: React.FC<Props> = ({ parties }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {parties.map(({ label, fill }) => {
        return <LegendItem key={label} label={label} backgroundColor={fill} />;
      })}
    </div>
  );
};

export default Legend;
