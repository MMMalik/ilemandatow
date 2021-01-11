import * as React from "react";
import { Topbar, TopbarButtonLink } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";
import AboutUs from "./AboutUs";
import ThemeIcon from "./ThemeIcon";
import LanguageIcon from "./LanguageIcon";
import Home from "./Home";
import Polls from "./Polls";

const AppTopbar: React.FC = () => {
  const { t } = useTranslation();
  const { routes } = useRoutes();

  return (
    <>
      <Topbar
        links={
          <>
            <Home />
            <Polls />
            <AboutUs />
          </>
        }
        mobileLinks={<Home />}
        menuItems={
          <>
            <ThemeIcon />
            <LanguageIcon />
            <TopbarButtonLink to={routes.newPoll.link()}>
              {t("newPoll")}
            </TopbarButtonLink>
          </>
        }
        mobileMenuItems={null}
        mobileOverlayMenuItems={
          <>
            <Polls />
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
