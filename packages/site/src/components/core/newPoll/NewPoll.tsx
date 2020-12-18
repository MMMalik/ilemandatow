import * as React from "react";
import { dhondt } from "@ilemandatow/seats";

interface Result {
  name: string;
  result: number;
}

interface Props {
  results: Result[];
  threshold: number;
}

const NewPoll: React.FC<Props> = () => {
  return <div></div>;
};

export default NewPoll;
