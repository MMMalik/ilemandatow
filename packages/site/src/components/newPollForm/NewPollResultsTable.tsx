import * as React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
  TableCellEditable,
  FormRegisterFn,
} from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  registerFn: FormRegisterFn;
}

const NewPollResultsTable: React.FC<Props> = ({ registerFn }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableHead>
        <TableHeadCell>{t("party")}</TableHeadCell>
        <TableHeadCell>{t("resultWithPerc")}</TableHeadCell>
        <TableHeadCell>{t("color")}</TableHeadCell>
      </TableHead>
      <TableBody>
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <TableRow key={i}>
              <TableCellEditable
                ref={registerFn}
                name={`partyName_${i}`}
                placeholder={t("partyName")}
              />
              <TableCellEditable
                ref={registerFn}
                name={`partyValue_${i}`}
                type="number"
                placeholder={t("pollResult")}
              />
              <TableCellEditable
                ref={registerFn}
                name={`partyColor_${i}`}
                type="text"
                placeholder={t("color")}
              />
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default NewPollResultsTable;
