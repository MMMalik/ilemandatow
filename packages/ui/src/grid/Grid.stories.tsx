import * as React from "react";
import Paper from "../paper";
import GridCmp, { Props } from "./Grid";
import GridItem from "./GridItem";

export const Grid = (args: Props) => {
  return (
    <GridCmp {...args}>
      <GridItem className="w-50">
        <Paper className="pa3">{"Item 1"}</Paper>
      </GridItem>
      <GridItem className="w-50">
        <Paper className="pa3">{"Item 2"}</Paper>
      </GridItem>
      <GridItem className="w-100">
        <Paper className="pa3">{"Item 3"}</Paper>
      </GridItem>
    </GridCmp>
  );
};
