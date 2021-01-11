import * as React from "react";
import clsx from "clsx";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type IconProp = FontAwesomeIconProps["icon"];

interface Props {
  icon: IconProp;
  onClick?: () => void;
  className?: string;
  size?: FontAwesomeIconProps["size"];
  style?: FontAwesomeIconProps["style"];
}

const Icon: React.FC<Props> = ({ icon, size, onClick, className, style }) => {
  return (
    <div
      className={clsx("dib", className, onClick && "dim pointer")}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size={size} style={style} />
    </div>
  );
};

export default Icon;
