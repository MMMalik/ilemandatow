import * as React from "react";
import { nanoid } from "nanoid";
import { WidgetPreviewProps, WidgetControlProps } from "../common";

export const NanoIdControl: React.FC<WidgetControlProps> = ({
  onChange,
  forId,
  classNameWrapper,
  value,
}) => {
  React.useEffect(() => {
    if (!value) {
      onChange(nanoid());
    }
  }, [value]);

  return (
    <input
      id={forId}
      value={value}
      className={classNameWrapper}
      disabled={true}
    />
  );
};

export const NanoIdPreview: React.FC<WidgetPreviewProps> = (props) => {
  return <div>{props.value}</div>;
};
