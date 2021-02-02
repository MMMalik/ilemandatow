import * as React from "react";
import clsx from "clsx";

export interface ToolbarProps {
  /**
   * Toolbar alignment.
   */
  alignment?: "left" | "right";
}

const Toolbar: React.FC<ToolbarProps> = ({ alignment = "right", children }) => {
  return (
    <div
      className={clsx(
        "flex",
        alignment === "left" ? "justify-start" : "justify-end"
      )}
    >
      {children}
    </div>
  );
};

export default Toolbar;
