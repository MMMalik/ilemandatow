import * as React from "react";
import { useTheme } from "../theme";
import TopbarIcon from "./TopbarIcon";

interface Props {
  links: React.ReactNode;
  mobileLinks: React.ReactNode;
  menuItems: React.ReactNode;
  mobileMenuItems: React.ReactNode;
  mobileOverlayMenuItems: React.ReactNode;
}

const Topbar: React.FC<Props> = ({
  links,
  mobileLinks,
  menuItems,
  mobileMenuItems,
  mobileOverlayMenuItems,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { theme } = useTheme();
  const { bgPrimary } = theme;

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  return (
    <nav className={`flex items-center bg-${bgPrimary}`}>
      <div className="w-25">
        <div className="dn db-ns">
          <div className="flex items-center">{links}</div>
        </div>
        <div className="db dn-ns">{mobileLinks}</div>
      </div>
      <div className="w-75 tr">
        <div className="dn db-ns">{menuItems}</div>
        <div className="db dn-ns">
          {mobileMenuItems}
          <TopbarIcon icon="bars" onClick={toggleMenu} />
        </div>
      </div>
      {menuOpen && (
        <div
          className={`fixed dn-ns z-max top-0 left-0 w-100 h-100 fade-in bg-${bgPrimary}`}
        >
          <div className="w-100 tr ph2">
            <TopbarIcon icon="times" onClick={toggleMenu} />
          </div>
          <div className="flex flex-column items-center">
            {mobileOverlayMenuItems}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;