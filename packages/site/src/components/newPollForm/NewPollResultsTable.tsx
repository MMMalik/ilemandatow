import * as React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  useFieldArray,
} from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { getNewParty } from "./getNewParty";
import NewPollResultsTableRow from "./NewPollResultsTableRow";

const NewPollResultsTable: React.FC = () => {
  const { t } = useTranslation();
  const { fields, insert, remove } = useFieldArray({
    name: "parties",
    keyName: "_id",
  });

  const insertRowAbove = (index: number) => () => {
    insert(index, getNewParty());
  };

  const insertRowBelow = (index: number) => () => {
    insert(index + 1, getNewParty());
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
        {fields.map(({ _id, id, name, result, color }, i) => {
          return (
            <NewPollResultsTableRow
              key={_id}
              partyIdField={`parties[${i}].id`}
              defaultId={id}
              partyNameField={`parties[${i}].name`}
              defaultName={name}
              partyResultField={`parties[${i}].result`}
              defaultResult={result}
              partyColorField={`parties[${i}].color`}
              defaultColor={color}
              insertRowAbove={insertRowAbove(i)}
              insertRowBelow={insertRowBelow(i)}
              removeRow={removeRow(i)}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export default NewPollResultsTable;
