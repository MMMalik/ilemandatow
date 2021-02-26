import * as React from "react";
import clsx from "clsx";
import { TableRow, TableCell, useTheme } from "@ilemandatow/ui";
import PollResult from "../pollResult";

interface Props {
  /**
   * Party name.
   */
  name: string;
  /**
   * Party abbreviation.
   */
  abbr: string;
  /**
   * Party result.
   */
  result?: number | null;
  /**
   * Number of seats.
   */
  seats: number;
}

const PollResultsTableRow: React.FC<Props> = ({
  name,
  abbr,
  result,
  seats,
}) => {
  const { theme } = useTheme();
  const { textDisabled } = theme;
  const isDisabled = seats === 0;

  return (
    <TableRow>
      <TableCell className={clsx(isDisabled && textDisabled)}>
        <span className="dn-ns">{abbr}</span>
        <span className="dn di-m di-l">{name}</span>
      </TableCell>
      <TableCell className={clsx("tr", isDisabled && textDisabled)}>
        <PollResult result={result} />
      </TableCell>
      <TableCell className={clsx("tr", isDisabled && textDisabled)}>
        {seats}
      </TableCell>
    </TableRow>
  );
};

export default PollResultsTableRow;
