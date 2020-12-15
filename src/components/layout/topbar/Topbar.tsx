import * as React from "react";
import { useTranslation } from "react-i18next";
import { routes } from "@routes";
import Topbar, { TopbarButtonLink } from "@components/ui/topbar";
import Search from "@components/core/search";
import AboutUs from "./AboutUs";
import ThemeIcon from "./ThemeIcon";
import LanguageIcon from "./LanguageIcon";
import SearchIcon from "./SearchIcon";

const AppTopbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const { t } = useTranslation();

  const toggleSearch = () => {
    setSearchOpen((current) => !current);
  };

  return (
    <>
      <Topbar
        links={
          <>
            <img
              src="https://tachyons.io/img/logo.jpg"
              className="dib mh2 w2 h2 br-100 ph2"
              alt="Site Name"
            />
            <AboutUs />
          </>
        }
        mobileLinks={
          <img
            src="https://tachyons.io/img/logo.jpg"
            className="dib mh2 w2 h2 br-100 ph2"
            alt="Site Name"
          />
        }
        menuItems={
          <>
            <SearchIcon toggleSearch={toggleSearch} />
            <ThemeIcon />
            <LanguageIcon />
            <TopbarButtonLink to={routes.newPoll.path}>
              {t("newPoll")}
            </TopbarButtonLink>
          </>
        }
        mobileMenuItems={
          <>
            <SearchIcon toggleSearch={toggleSearch} />
          </>
        }
        mobileOverlayMenuItems={
          <>
            <AboutUs />
            <ThemeIcon withTooltip={false} />
            <LanguageIcon withTooltip={false} />
          </>
        }
      />
      <Search />
    </>
  );
};

export default AppTopbar;
