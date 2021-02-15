import * as React from "react";
import { DataType } from "@ilemandatow/client";
import { Divider, Grid, GridItem } from "@ilemandatow/ui";
import { useRoutes } from "../../routes";
import { useSiteMetaData } from "../../data";
import NewPollCard from "./NewPollCard";
import PollsCard from "./PollsCard";
import OpenSourceCard from "./OpenSourceCard";
import MoreInfo from "./MoreInfo";
import Intro from "./Intro";
import PollsExplained from "./PollsExplained";
import QuickExample from "./QuickExample";

interface Props {
  latestPoll?: DataType.PollFragment;
  codes: DataType.ElectoralCodeFragment[];
}

const Hero: React.FC<Props> = ({ codes, latestPoll }) => {
  const { repoUrl } = useSiteMetaData();
  const { routes } = useRoutes();

  return (
    <>
      <div>
        <Grid>
          <GridItem className="w-100">
            <Intro />
          </GridItem>
        </Grid>
      </div>
      <div className="mb4 pa3">
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
      <Divider />
      <div className="mb4">
        <Grid>
          <GridItem className="w-100">
            <PollsExplained />
          </GridItem>
        </Grid>
      </div>
      <Divider />
      <div>
        <Grid>
          <GridItem className="w-100">
            <QuickExample codes={codes} latestPoll={latestPoll} />
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default Hero;
