import * as React from "react";
import Icon from "../icon";
import MenuCmp, { Props } from "./Menu";
import MenuItem from "./MenuItem";

export const Menu = (args: Props) => {
  return (
    <MenuCmp
      {...args}
      menuBtn={(onClick) => (
        <Icon onClick={onClick} icon="ellipsis-v" className="pointer dim" />
      )}
    >
      <MenuItem icon="plus">{"Item 1"}</MenuItem>
      <MenuItem icon="minus">{"Item 2"}</MenuItem>
    </MenuCmp>
  );
};
