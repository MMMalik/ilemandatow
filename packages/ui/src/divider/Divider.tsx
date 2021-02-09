import clsx from "clsx";
import * as React from "react";
import { useTheme } from "../theme";

export interface DividerProps {
  disableSpacing?: boolean;
}

const Divider: React.FC<DividerProps> = ({ disableSpacing }) => {
  const { theme } = useTheme();
  const { textDivider } = theme;

  return (
    <div
      className={clsx(!disableSpacing && "mb4", `bb bw1 b--${textDivider}`)}
    />
  );
};

export default Divider;
