import * as React from "react";
import TopbarLink from "./TopbarLink";
import TopbarCmp, { Props } from "./Topbar";
import TopbarIcon from "./TopbarIcon";

export const Topbar = (args: Props) => {
  const handleClick = () => {
    //
  };

  return (
    <div style={{ width: "90vw" }}>
      <TopbarCmp
        links={
          <>
            <TopbarLink to="https://onet.pl" external={true}>
              {"Link 1"}
            </TopbarLink>
            <TopbarLink to="https://onet.pl" external={true}>
              {"Link 2"}
            </TopbarLink>
          </>
        }
        mobileLinks={
          <TopbarLink to="https://onet.pl" external={true}>
            {"Link 1"}
          </TopbarLink>
        }
        menuItems={
          <>
            <TopbarIcon icon="cog" onClick={handleClick} />
            <TopbarLink to="https://onet.pl" external={true} btn={true}>
              {"Button 1"}
            </TopbarLink>
          </>
        }
        mobileMenuItems={null}
        mobileOverlayMenuItems={
          <>
            <TopbarLink to="https://onet.pl" external={true}>
              {"Link 2"}
            </TopbarLink>
            <TopbarIcon icon="cog" onClick={handleClick} />
          </>
        }
        {...args}
      />
    </div>
  );
};
