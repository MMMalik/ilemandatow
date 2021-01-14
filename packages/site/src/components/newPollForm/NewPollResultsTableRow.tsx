import * as React from "react";
import {
  TableRow,
  TableCellEditable,
  useFormContext,
  useWatch,
  ColorPickerMenu,
  TableContextMenu,
  MenuItem,
} from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  partyIdField: string;
  defaultId: string;
  partyNameField: string;
  defaultName: string;
  partyResultField: string;
  defaultResult: number;
  partyColorField: string;
  defaultColor: string;
  insertRowAbove: () => void;
  insertRowBelow: () => void;
  removeRow: () => void;
}

const NewPollResultsTableRow: React.FC<Props> = ({
  partyIdField,
  defaultId,
  partyNameField,
  defaultName,
  partyResultField,
  defaultResult,
  partyColorField,
  defaultColor,
  insertRowAbove,
  insertRowBelow,
  removeRow,
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
      >
        {/* Makes sure that `id` is retained. */}
        <input
          type="text"
          className="dn"
          name={partyIdField}
          defaultValue={defaultId}
          ref={register()}
        />
      </TableCellEditable>
      <TableCellEditable
        ref={register()}
        name={partyResultField}
        defaultValue={defaultResult}
        type="number"
        inputClassName="w-50"
        placeholder={t("pollResult")}
      />
      <TableCellEditable
        ref={register()}
        name={partyColorField}
        defaultValue={defaultColor}
        hidden={true}
      >
        <ColorPickerMenu color={currentColor} onChange={handleChangeColor} />
      </TableCellEditable>
      <TableContextMenu>
        <MenuItem icon="angle-up" onClick={insertRowAbove}>
          {t("insertRowAbove")}
        </MenuItem>
        <MenuItem icon="trash" onClick={removeRow}>
          {t("removeRow")}
        </MenuItem>
        <MenuItem icon="angle-down" onClick={insertRowBelow}>
          {t("insertRowBelow")}
        </MenuItem>
      </TableContextMenu>
    </TableRow>
  );
};

export default NewPollResultsTableRow;
