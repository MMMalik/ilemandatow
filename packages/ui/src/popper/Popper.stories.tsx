import * as React from "react";
import Button from "../button";
import PopperCmp, { Props } from "./Popper";

export const Popper = (args: Props) => {
  const [refEl, setRefEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setRefEl((refEl) => (refEl ? null : evt.currentTarget));
  };

  return (
    <div>
      <Button onClick={handleClick}>{"Click me"}</Button>
      <PopperCmp {...args} refEl={refEl}>
        {"Hello"}
      </PopperCmp>
    </div>
  );
};
