import * as React from "react";
import PaginationCmp, { PaginationProps } from "./Pagination";

export const Pagination = (args: PaginationProps) => {
  return <PaginationCmp {...args} />;
};
