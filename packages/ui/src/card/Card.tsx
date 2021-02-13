import clsx from "clsx";
import * as React from "react";
import Paper from "../paper";
import { useTheme } from "../theme";

export interface CardProps {
  /**
   * Card's title.
   */
  title: string;
  /**
   * Content that goes to the bottom.
   */
  footer?: React.ReactNode;
  /**
   * Adds styling for clickable card.
   */
  clickable?: boolean;
}

const Card: React.FC<CardProps> = ({ title, clickable, footer, children }) => {
  const { theme } = useTheme();
  const { textMuted } = theme;

  return (
    <Paper
      className={clsx(
        "tc pa3 h-100 flex flex-column justify-between",
        clickable && "pointer"
      )}
    >
      <div className="b f5">{title}</div>
      <div className="mv3 lh-copy">{children}</div>
      <div className={`pa2 ${textMuted}`}>{footer}</div>
    </Paper>
  );
};

export default Card;
