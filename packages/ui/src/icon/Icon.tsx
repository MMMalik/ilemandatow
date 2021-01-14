import * as React from "react";
import clsx from "clsx";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type IconProp = FontAwesomeIconProps["icon"];

export interface Props {
  /**
   * Icon to show.
   */
  icon: IconProp;
  /**
   * Callback fired upon clicking on root.
   */
  onClick?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Optional class name passed to root.
   */
  className?: string;
  /**
   * Icon's size.
   */
  size?: FontAwesomeIconProps["size"];
  /**
   * Style passed to icon component.
   */
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
