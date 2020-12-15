import * as React from "react";
import { useGetAllPolls } from "src/data";

const Search: React.FC = () => {
  const data = useGetAllPolls();
  return <div></div>;
};

export default Search;
