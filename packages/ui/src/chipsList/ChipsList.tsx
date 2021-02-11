import * as React from "react";
import Chip from "../chip";
import { useTheme } from "../theme";
import { ChipListOption } from "./types";

export interface ChipsListProps {
  /**
   * Section's title.
   */
  title: string;
  /**
   * List of selected options.
   */
  selected: ChipListOption[];
  /**
   * Callback invoked when an item is removed.
   */
  onRemove: (value: any) => void;
}

const ChipsList: React.FC<ChipsListProps> = ({ title, selected, onRemove }) => {
  const { theme } = useTheme();
  const { textPrimary } = theme;

  return (
    <div>
      {title && <div className={`mb2 f5 ${textPrimary}`}>{title}</div>}
      <div>
        {selected.map(({ value, label }) => {
          return (
            <div key={label} className="dib mr1 mb1">
              <Chip label={label} value={value} onRemove={onRemove} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChipsList;
