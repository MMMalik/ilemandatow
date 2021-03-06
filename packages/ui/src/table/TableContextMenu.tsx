import * as React from "react";
import Icon from "../icon";
import Menu from "../menu";
import { useTheme } from "../theme";
import TableCell from "./TableCell";

const TableContextMenu: React.FC = ({ children }) => {
  const { theme } = useTheme();
  const { textMuted } = theme;

  return (
    <TableCell>
      <Menu
        placement="bottom-start"
        MenuBtn={({ onClick }) => (
          <Icon
            onClick={onClick}
            icon="cog"
            className={`pointer dim ${textMuted}`}
          />
        )}
      >
        {children}
      </Menu>
    </TableCell>
  );
};

export default TableContextMenu;
