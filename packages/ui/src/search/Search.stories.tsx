import * as React from "react";
import SearchCmp, { SearchProps } from "./Search";

export const Search = (args: SearchProps) => {
  return <SearchCmp {...args} />;
};
