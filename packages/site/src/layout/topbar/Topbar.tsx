import * as React from "react";
import { Topbar } from "@ilemandatow/ui";
import Docs from "./Docs";
import ThemeIcon from "./ThemeIcon";
import LanguageIcon from "./LanguageIcon";
import Home from "./Home";
import Polls from "./Polls";
import NextPoll from "./NextPoll";
import SearchIcon from "./SearchIcon";
import { SearchDialog } from "../../components";

const AppTopbar: React.FC = () => {
  const [search, setSearch] = React.useState(false);

  const toggleSearch = () => {
    setSearch((open) => !open);
  };

  return (
    <>
      <Topbar
        links={
          <>
            <Home />
            <Polls />
            <Docs />
          </>
        }
        mobileLinks={<Home />}
        menuItems={
          <>
            <SearchIcon toggleSearch={toggleSearch} />
            <ThemeIcon />
            <LanguageIcon />
            <NextPoll />
          </>
        }
        mobileMenuItems={
          <>
            <SearchIcon toggleSearch={toggleSearch} />
          </>
        }
        mobileOverlayMenuItems={
          <>
            <Polls />
            <Docs />
            <NextPoll btn={false} />
            <ThemeIcon withTooltip={false} />
            <LanguageIcon withTooltip={false} />
          </>
        }
      />
      {search && <SearchDialog toggleSearch={toggleSearch} />}
    </>
  );
};

export default AppTopbar;
