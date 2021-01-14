import * as React from "react";
import DismissablePopperCmp, {
  DismissablePopperProps,
} from "./DismissablePopper";

export const DismissablePopper = (args: DismissablePopperProps) => {
  return <DismissablePopperCmp {...args} />;
};
