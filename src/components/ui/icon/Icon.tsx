import * as React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type IconProp = FontAwesomeIconProps["icon"];

interface Props {
  icon: IconProp;
  onClick?: () => void;
}

const Icon: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      onClick={onClick}
      className={onClick ? "dim pointer" : undefined}
    />
  );
};

export default Icon;
