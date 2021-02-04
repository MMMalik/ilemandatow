import * as React from "react";
import { DhondtParliamentSeat, sortBySeats } from "@ilemandatow/seats";
import { Table, TableHead, TableBody, TableHeadCell } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { PartyWithResult } from "../../data";
import PollResultsTableRow from "./PollResultsTableRow";

interface Props {
  /**
   * List of all parties.
   */
  parties: PartyWithResult[];
  /**
   * List of election results.
   */
  seats: DhondtParliamentSeat[];
  /**
   * List of special parties, such as `Undecided` or `Other` placeholders.
   */
  specialParties?: PartyWithResult[];
}

const PollResultsTable: React.FC<Props> = ({
  seats,
  specialParties,
  parties,
}) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableHead>
        <TableHeadCell>{t("party")}</TableHeadCell>
        <TableHeadCell className="tr">{t("resultWithPerc")}</TableHeadCell>
        <TableHeadCell className="tr">{t("seats")}</TableHeadCell>
      </TableHead>
      <TableBody>
        {sortBySeats(seats)
          .map(({ party: partyId, seats }) => {
            const result = parties.find((party) => party.id === partyId);
            return (
              <PollResultsTableRow
                key={partyId}
                seats={seats}
                result={result?.result}
                name={result?.name ?? ""}
                abbr={result?.abbr ?? result?.name ?? ""}
              />
            );
          })
          .concat(
            specialParties?.map(({ id, result, name, abbr }) => {
              return (
                <PollResultsTableRow
                  key={id}
                  seats={0}
                  result={result}
                  name={name ?? ""}
                  abbr={abbr ?? name ?? ""}
                />
              );
            }) ?? []
          )}
      </TableBody>
    </Table>
  );
};

export default PollResultsTable;
