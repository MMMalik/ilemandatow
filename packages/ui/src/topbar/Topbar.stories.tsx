import * as React from "react";
import { noOp } from "../utils";
import TopbarLink from "./TopbarLink";
import TopbarCmp, { TopbarProps } from "./Topbar";
import TopbarIcon from "./TopbarIcon";

export const Topbar = (args: TopbarProps) => {
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
            <TopbarIcon icon="cog" onClick={noOp} />
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
            <TopbarIcon icon="cog" onClick={noOp} />
          </>
        }
        {...args}
      />
    </div>
  );
};
