import * as React from "react";
import Button from "../button";
import PopperCmp, { PopperProps } from "./Popper";

export const Popper = (args: PopperProps) => {
  const [refEl, setRefEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = evt.currentTarget;
    setRefEl((refEl) => (refEl ? null : target));
  };

  return (
    <div>
      <Button onClick={handleClick}>{"Click me"}</Button>
      <PopperCmp {...args} refEl={refEl}>
        <div className="pa3">{"Hello"}</div>
      </PopperCmp>
    </div>
  );
};
