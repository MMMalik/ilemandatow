import * as React from "react";
import DataCardCmp, { DataCardProps } from "./DataCard";

export const DataCard = (args: DataCardProps) => {
  return (
    <div className="w5">
      <DataCardCmp {...args} />
    </div>
  );
};
