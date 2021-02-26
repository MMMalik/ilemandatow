import clsx from "clsx";
import * as React from "react";
import Divider from "../divider";
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
  const { textMuted } = theme;

  return (
    <>
      <div className={clsx(divider && "mb4", "pa3-l")}>
        <Grid>
          {title && (
            <GridItem className="w-100 w-40-l pr3-l">
              <div className="f5 mb3">{title}</div>
              <div className={`lh-copy mb3 ${textMuted}`}>{description}</div>
            </GridItem>
          )}
          <GridItem className={clsx(title ? "w-100 w-60-l" : "w-100")}>
            {children}
          </GridItem>
        </Grid>
      </div>
      {divider && <Divider />}
    </>
  );
};

export default FormSection;
