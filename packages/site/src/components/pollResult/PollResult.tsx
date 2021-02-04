import * as React from "react";

interface Props {
  result?: number | null;
}

const PollResult: React.FC<Props> = ({ result }) => {
  if (result === undefined || result === null) {
    return <span>{"?"}</span>;
  }
  return <span>{result.toFixed(1)}</span>;
};

export default PollResult;
