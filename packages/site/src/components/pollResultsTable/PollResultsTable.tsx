import * as React from "react";
import { DhondtParliamentSeat } from "@ilemandatow/seats";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeadCell,
  Tooltip,
} from "@ilemandatow/ui";
import { PollResultFragment } from "../../types";
import { useTranslation } from "../../i18n";
import { getPartyFromResult } from "../../data";

interface Props {
  results: PollResultFragment[];
  seats: DhondtParliamentSeat[];
}

const PollResultsTable: React.FC<Props> = ({ seats, results }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableHead>
        <TableHeadCell>{t("party")}</TableHeadCell>
        <TableHeadCell>{`${t("result")} %`}</TableHeadCell>
        <TableHeadCell>{t("seats")}</TableHeadCell>
      </TableHead>
      <TableBody>
        {seats.map(({ party: partyId, seats }, i) => {
          const result = getPartyFromResult(results, partyId);
          return (
            <TableRow key={result?.party?.id ?? i}>
              <TableCell>
                <div className="flex align-center">
                  <Tooltip title={result?.party?.name ?? ""}>
                    {result?.party?.abbr ?? ""}
                  </Tooltip>
                </div>
              </TableCell>
              <TableCell>{result?.result?.toFixed(1) ?? ""}</TableCell>
              <TableCell>{seats}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default PollResultsTable;
