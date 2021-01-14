import * as React from "react";
import { Topbar } from "../topbar/Topbar.stories";
import { Footer } from "../footer/Footer.stories";
import PageWrapperCmp, { PageWrapperProps } from "./PageWrapper";

export const PageWrapper = (args: PageWrapperProps) => {
  /* eslint-disable-next-line */
  // @ts-ignore
  return <PageWrapperCmp topbar={<Topbar />} footer={<Footer />} {...args} />;
};
