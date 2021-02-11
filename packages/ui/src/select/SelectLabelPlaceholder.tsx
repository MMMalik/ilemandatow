import * as React from "react";
import { SelectContext } from "./context";

export interface SelectLabelPlaceholderProps {
  /**
   * Selection placeholder. Displayed when no items are selected.
   */
  placeholder?: string;
}

const SelectLabelPlaceholder: React.FC<SelectLabelPlaceholderProps> = ({
  placeholder,
}) => {
  const { selected } = React.useContext(SelectContext);
  return (
    <div className="w-80 truncate">
      {selected.length > 0
        ? selected.map((s) => s.label).join(", ")
        : placeholder}
    </div>
  );
};

export default SelectLabelPlaceholder;
