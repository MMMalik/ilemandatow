import * as React from "react";
import InputFieldCmp, { InputFieldProps } from "./InputField";

export const InputField = (args: InputFieldProps) => {
  return <InputFieldCmp {...args} />;
};
