import * as React from "react";
import { DhondtParliamentSeat, sortBySeats } from "@ilemandatow/seats";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeadCell,
} from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { PartyWithResult } from "../../data";

interface Props {
  parties: PartyWithResult[];
  seats: DhondtParliamentSeat[];
}

const PollResultsTable: React.FC<Props> = ({ seats, parties }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableHead>
        <TableHeadCell>{t("party")}</TableHeadCell>
        <TableHeadCell>{t("resultWithPerc")}</TableHeadCell>
        <TableHeadCell>{t("seats")}</TableHeadCell>
      </TableHead>
      <TableBody>
        {sortBySeats(seats).map(({ party: partyId, seats }, i) => {
          const result = parties.find((party) => party.id === partyId);
          return (
            <TableRow key={result?.id ?? i}>
              <TableCell>
                <div className="flex align-center">{result?.name ?? ""}</div>
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
