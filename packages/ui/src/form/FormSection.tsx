import clsx from "clsx";
import * as React from "react";
import Grid, { GridItem } from "../grid";
import { useTheme } from "../theme";

interface FormSectionProps {
  /**
   * Section title.
   */
  title?: string;
  /**
   * Section description.
   */
  description?: string;
  /**
   * Shows divider on top of the section.
   */
  divider?: boolean;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
  divider = true,
}) => {
  const { theme } = useTheme();
  const { textMuted, textDivider } = theme;

  return (
    <div className={clsx(divider && `mb4 bb b--${textDivider}`)}>
      <Grid>
        {title && (
          <GridItem className="w-100 w-third-l mb2 pa4-l">
            <div className="f5 mb2">{title}</div>
            <div className={`lh-copy ${textMuted}`}>{description}</div>
          </GridItem>
        )}
        <GridItem
          className={clsx(
            "pa4-l",
            divider && "mb4",
            title ? "w-100 w-two-thirds-l" : "w-100"
          )}
        >
          {children}
        </GridItem>
      </Grid>
    </div>
  );
};

export default FormSection;
