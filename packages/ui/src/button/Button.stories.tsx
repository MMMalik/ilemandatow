import * as React from "react";
import ButtonCmp, { ButtonProps } from "./Button";

export const Button = (args: ButtonProps) => {
  return <ButtonCmp {...args} />;
};
