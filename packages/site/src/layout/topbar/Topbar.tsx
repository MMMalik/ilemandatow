import * as React from "react";
import { Topbar } from "@ilemandatow/ui";
import AboutUs from "./AboutUs";
import ThemeIcon from "./ThemeIcon";
import LanguageIcon from "./LanguageIcon";
import Home from "./Home";
import Polls from "./Polls";
import NextPoll from "./NextPoll";

const AppTopbar: React.FC = () => {
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
            <NextPoll />
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
