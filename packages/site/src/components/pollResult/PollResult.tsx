import { useTheme } from "@ilemandatow/ui";
import * as React from "react";

interface Props {
  /**
   * Poll result to parse.
   */
  result?: number | null;
  /**
   * Toggles % sign.
   */
  showPerc?: boolean;
}

const PollResult: React.FC<Props> = ({ result, showPerc }) => {
  const { theme } = useTheme();
  const { textMuted } = theme;

  if (result === undefined || result === null) {
    return <span>{"?"}</span>;
  }

  return (
    <span>
      <span>{result.toFixed(1)}</span>
      {showPerc && <span className={`f7 ml1 ${textMuted}`}>{"%"}</span>}
    </span>
  );
};

export default PollResult;
