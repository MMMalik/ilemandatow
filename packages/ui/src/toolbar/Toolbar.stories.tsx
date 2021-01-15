import * as React from "react";
import ToolbarItem from "./ToolbarItem";
import ToolbarCmp, { ToolbarProps } from "./Toolbar";

export const Toolbar = (args: ToolbarProps) => {
  const [active, setActive] = React.useState(0);

  const handleClick = (i: number) => () => {
    setActive(i);
  };

  return (
    <div className="w5">
      <ToolbarCmp {...args}>
        <ToolbarItem
          icon="cog"
          onClick={handleClick(0)}
          active={active === 0}
        />
        <ToolbarItem
          icon="poll"
          onClick={handleClick(1)}
          active={active === 1}
        />
        <ToolbarItem
          icon="trash"
          onClick={handleClick(2)}
          active={active === 2}
        />
      </ToolbarCmp>
    </div>
  );
};
