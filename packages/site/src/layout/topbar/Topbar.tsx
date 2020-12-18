import * as React from "react";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";
import Topbar, { TopbarButtonLink } from "../../components/ui/topbar";
import AboutUs from "./AboutUs";
import ThemeIcon from "./ThemeIcon";
import LanguageIcon from "./LanguageIcon";
import SearchIcon from "./SearchIcon";
import Home from "./Home";

const AppTopbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const { t } = useTranslation();
  const { routes } = useRoutes();

  const toggleSearch = () => {
    setSearchOpen((current) => !current);
  };

  return (
    <>
      <Topbar
        links={
          <>
            <Home />
            <AboutUs />
          </>
        }
        mobileLinks={<Home />}
        menuItems={
          <>
            <SearchIcon toggleSearch={toggleSearch} />
            <ThemeIcon />
            <LanguageIcon />
            <TopbarButtonLink to={routes.newPoll.link()}>
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
    </>
  );
};

export default AppTopbar;
