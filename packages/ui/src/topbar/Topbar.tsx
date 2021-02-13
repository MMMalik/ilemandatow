import * as React from "react";
import { useTheme } from "../theme";
import TopbarIcon from "./TopbarIcon";

export interface TopbarProps {
  /**
   * Links to be displayed.
   */
  links: React.ReactNode;
  /**
   * Links to be displayed on mobile resolution.
   */
  mobileLinks: React.ReactNode;
  /**
   * Menu items to be displayed.
   */
  menuItems: React.ReactNode;
  /**
   * Menu items to be displayed on mobile resolution.
   */
  mobileMenuItems: React.ReactNode;
  /**
   * Menu items to be displayed on mobile resolution on the overlay.
   */
  mobileOverlayMenuItems: React.ReactNode;
}

const Topbar: React.FC<TopbarProps> = ({
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

  const handleOverlayClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`flex items-center bg-${bgPrimary} shadow-c-b`}>
      <div className="w-50">
        <div className="dn db-l">
          <div className="flex items-center">{links}</div>
        </div>
        <div className="db dn-l">{mobileLinks}</div>
      </div>
      <div className="w-50 tr">
        <div className="dn db-l">{menuItems}</div>
        <div className="db dn-l">
          {mobileMenuItems}
          <TopbarIcon icon="bars" onClick={toggleMenu} />
        </div>
      </div>
      {menuOpen && (
        <div
          className={`fixed dn-l z-max top-0 left-0 w-100 h-100 fade-in bg-${bgPrimary}`}
          onClick={handleOverlayClose}
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
