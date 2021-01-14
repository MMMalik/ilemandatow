import * as React from "react";
import clsx from "clsx";
import { useTheme } from "../theme";

export interface ButtonProps {
  /**
   * Optional click handler.
   */
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Html type of the button.
   */
  htmlType?: "button" | "submit" | "reset";
  /**
   * Button styling variant.
   */
  btnType?: "primary" | "secondary";
  /**
   * Optional class passed to root component.
   */
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  htmlType = "button",
  btnType = "primary",
  className,
  onClick,
  children,
}) => {
  const { theme } = useTheme();
  const { primary, bgSecondary, textPrimary, textOnPrimary } = theme;

  const btnStyles = {
    primary: `${textOnPrimary} bg-${primary}`,
    secondary: `${textPrimary} bg-${bgSecondary}`,
  };

  return (
    <button
      onClick={onClick}
      type={htmlType}
      className={clsx(
        `bn pointer br2 ph3 pv2 dim ${btnStyles[btnType]}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
