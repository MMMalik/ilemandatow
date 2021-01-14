import * as React from "react";
import CardCmp, { CardProps } from "./Card";

export const Card = (args: CardProps) => {
  return (
    <div className="w5">
      <CardCmp {...args} />
    </div>
  );
};
