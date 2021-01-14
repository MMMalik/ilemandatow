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
    <div className="ph4">
      <Grid className={clsx(divider && "bt", `pv4 b--${textDivider}`)}>
        <GridItem className="w-third pv3 ph4">
          <div className="f5 mb2">{title}</div>
          <div className={`lh-copy ${textMuted}`}>{description}</div>
        </GridItem>
        <GridItem className="w-two-thirds pv3 ph4">{children}</GridItem>
      </Grid>
    </div>
  );
};

export default FormSection;
