import * as React from "react";
import { useGetAllPolls } from "@hooks";

const Search: React.FC = () => {
  const data = useGetAllPolls();
  return <div></div>;
};

export default Search;
