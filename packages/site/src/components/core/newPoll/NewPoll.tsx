import * as React from "react";
import { dhondt } from "@ilemandatow/seats";

const NewPoll: React.FC = () => {
  console.log({ dhondt: dhondt({ results: [], threshold: 5 }) });
  return <div>{"Test"}</div>;
};

export default NewPoll;
