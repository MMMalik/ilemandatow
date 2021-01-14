import * as React from "react";
import LinkCmp, { LinkProps } from "./Link";

export const Link = (args: LinkProps) => {
  return <LinkCmp {...args} />;
};
