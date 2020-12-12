import * as React from "react";
import { useTheme } from "@theme";
import { routes } from "@routes";
import TopbarLink from "./TopbarLink";
import TopbarIcon from "./TopbarIcon";
import TopbarOverlay from "./TopbarOverlay";

const Topbar: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { toggleTheme } = useTheme();

  const toggleMenu = () => {
    setOpenMenu((current) => !current);
  };

  const links = (
    <>
      <TopbarLink to={routes.calculate.path}>{"Oblicz"}</TopbarLink>
      <TopbarLink to={routes.about.path}>{"O nas"}</TopbarLink>
    </>
  );

  return (
    <nav className="flex items-center ph2">
      <div className="w-25">
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="dib mh2 w2 h2 br-100"
          alt="Site Name"
        />
      </div>
      <div className="w-75 tr">
        <div className="dn db-ns">
          {links}
          <TopbarIcon icon="adjust" onClick={toggleTheme} />
        </div>
        <div className="db dn-ns">
          <TopbarIcon icon="adjust" onClick={toggleTheme} />
          <TopbarIcon icon="bars" onClick={toggleMenu} />
        </div>
      </div>
      <div className="dn-ns">
        <TopbarOverlay open={openMenu} toggleOpen={toggleMenu}>
          {links}
        </TopbarOverlay>
      </div>
    </nav>
  );
};

export default Topbar;
