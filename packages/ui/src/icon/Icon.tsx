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
}

const Icon: React.FC<Props> = ({ icon, size, onClick, className }) => {
  return (
    <div
      className={clsx(className, onClick && "dim dib pointer")}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size={size} />
    </div>
  );
};

export default Icon;
