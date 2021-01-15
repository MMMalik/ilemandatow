import * as React from "react";
import CardCmp from "./Card";

export const Card = (args: any) => {
  return (
    <div className="w5">
      <CardCmp {...args} />
    </div>
  );
};
