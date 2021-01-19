import * as React from "react";
import { useTheme } from "../theme";

const Divider: React.FC = () => {
  const { theme } = useTheme();
  const { textDivider } = theme;

  return <div className={`mb4 bb bw1 b--${textDivider}`} />;
};

export default Divider;
