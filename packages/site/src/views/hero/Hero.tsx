import * as React from "react";
import { Grid, GridItem, useTheme } from "@ilemandatow/ui";
import { useRoutes } from "../../routes";
import { useSiteMetaData } from "../../data";
import NewPollCard from "./NewPollCard";
import PollsCard from "./PollsCard";
import OpenSourceCard from "./OpenSourceCard";
import MoreInfo from "./MoreInfo";
import Intro from "./Intro";
import PollsExplained from "./PollsExplained";
import QuickExample from "./QuickExample";

const Hero: React.FC = () => {
  const { repoUrl } = useSiteMetaData();
  const { routes } = useRoutes();
  const { theme } = useTheme();
  const { textDivider } = theme;
  const sectionCls = `pv5 ph3-l`;
  const dividerCls = `bb bw1 b--${textDivider}`;

  return (
    <div className="pv4 pa4-l">
      <div>
        <Grid>
          <GridItem className="w-100">
            <Intro />
          </GridItem>
        </Grid>
      </div>
      <div className={`${sectionCls} ${dividerCls}`}>
        <Grid>
          <GridItem className="w-100 w-50-m w-25-l">
            <PollsCard linkTo={routes.polls.link()} />
          </GridItem>
          <GridItem className="w-100 w-50-m w-25-l">
            <NewPollCard linkTo={routes.newPollForm.link()} />
          </GridItem>
          <GridItem className="w-100 w-50-m w-25-l">
            <OpenSourceCard linkTo={repoUrl} />
          </GridItem>
          <GridItem className="w-100 w-50-m w-25-l">
            <MoreInfo linkTo={routes.about.link()} />
          </GridItem>
        </Grid>
      </div>
      <div className={`${sectionCls} ${dividerCls}`}>
        <Grid>
          <GridItem className="w-100">
            <PollsExplained />
          </GridItem>
        </Grid>
      </div>
      <div className={sectionCls}>
        <Grid>
          <GridItem className="w-100">
            <QuickExample linkTo={routes.newPollForm.link()} />
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
