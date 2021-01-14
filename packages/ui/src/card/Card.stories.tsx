import * as React from "react";
import CardCmp, { Props } from "./Card";

export const Card = (args: Props) => {
  return (
    <div className="w5">
      <CardCmp {...args} />
    </div>
  );
};
