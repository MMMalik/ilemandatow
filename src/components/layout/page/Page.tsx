import * as React from "react";
import { useTheme } from "@theme";
import Topbar from "../topbar";

const Layout: React.FC = ({ children }) => {
  const { theme } = useTheme();
  const { textPrimary, bgSecondary } = theme;

  return (
    <div className={`${textPrimary} bg-${bgSecondary}`}>
      <Topbar />
      <div className="pa3 pa4-m pa5-l">{children}</div>
      <footer></footer>
    </div>
  );
};

export default Layout;
