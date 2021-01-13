import * as React from "react";
import {
  MenuItem,
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableContextMenu,
  useFieldArray,
} from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import NewPollResultsTableRow from "./NewPollResultsTableRow";

const defaultParty = {
  name: "",
  result: 0,
  color: "#000000",
};

const NewPollResultsTable: React.FC = () => {
  const { t } = useTranslation();
  const { fields, insert, remove } = useFieldArray({ name: "parties" });

  const insertRowAbove = (index: number) => () => {
    insert(index, { ...defaultParty });
  };

  const insertRowBelow = (index: number) => () => {
    insert(index + 1, { ...defaultParty });
  };

  const removeRow = (index: number) => () => {
    remove(index);
  };

  return (
    <Table>
      <TableHead>
        <TableHeadCell>{t("party")}</TableHeadCell>
        <TableHeadCell>{t("resultWithPerc")}</TableHeadCell>
        <TableHeadCell>{t("color")}</TableHeadCell>
        <TableHeadCell />
      </TableHead>
      <TableBody>
        {fields.map(({ id, name, result, color }, i) => {
          return (
            <NewPollResultsTableRow
              key={id}
              partyNameField={`parties[${i}].name`}
              defaultName={name}
              partyResultField={`parties[${i}].result`}
              defaultResult={result}
              partyColorField={`parties[${i}].color`}
              defaultColor={color}
              settings={
                <TableContextMenu>
                  <MenuItem icon="angle-up" onClick={insertRowAbove(i)}>
                    {t("insertRowAbove")}
                  </MenuItem>
                  <MenuItem icon="trash" onClick={removeRow(i)}>
                    {t("removeRow")}
                  </MenuItem>
                  <MenuItem icon="angle-down" onClick={insertRowBelow(i)}>
                    {t("insertRowBelow")}
                  </MenuItem>
                </TableContextMenu>
              }
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export default NewPollResultsTable;
