import * as React from "react";
import {
  TableRow,
  TableCellEditable,
  TableCellEditableColor,
  useFormContext,
  useWatch,
} from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  partyNameField: string;
  defaultName: string;
  partyResultField: string;
  defaultResult: number;
  partyColorField: string;
  defaultColor: string;
  settings: React.ReactNode;
}

const NewPollResultsTableRow: React.FC<Props> = ({
  partyNameField,
  defaultName,
  partyResultField,
  defaultResult,
  partyColorField,
  defaultColor,
  settings,
}) => {
  const { t } = useTranslation();
  const { register, setValue } = useFormContext();
  const currentColor = useWatch<string>({
    name: partyColorField,
    defaultValue: defaultColor,
  });

  const handleChangeColor = (hex: string) => {
    setValue(partyColorField, hex);
  };

  return (
    <TableRow>
      <TableCellEditable
        ref={register()}
        name={partyNameField}
        defaultValue={defaultName}
        placeholder={t("partyName")}
      />
      <TableCellEditable
        ref={register()}
        name={partyResultField}
        defaultValue={defaultResult}
        type="number"
        inputClassName="w-50"
        placeholder={t("pollResult")}
      />
      <TableCellEditableColor
        ref={register()}
        name={partyColorField}
        defaultValue={defaultColor}
        color={currentColor}
        onChange={handleChangeColor}
      />
      {settings}
    </TableRow>
  );
};

export default NewPollResultsTableRow;
