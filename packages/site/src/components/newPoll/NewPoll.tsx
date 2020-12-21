import * as React from "react";
import { dhondt } from "@ilemandatow/seats";

const NewPoll: React.FC = () => {
  return <div>{JSON.stringify(dhondt({ results: [], threshold: 5 }))}</div>;
};

export default NewPoll;
