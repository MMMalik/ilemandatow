import { useTheme } from "@theme";
import * as React from "react";
import ReactSelect from "react-select";

interface SelectOption {
  label: React.ReactNode;
  value: string;
}

interface Props {
  options: SelectOption[];
}

const Select: React.FC<Props> = ({ options }) => {
  const { theme } = useTheme();

  const customTheme = React.useCallback(
    (rsTheme) => ({
      ...rsTheme,
      borderRadius: 0,
      colors: {
        ...rsTheme.colors,
        primary: theme.defs.primary,
        primary25: theme.defs.primary,
        neutral0: theme.defs.bgPrimary,
      },
    }),
    [theme]
  );

  return (
    <ReactSelect
      options={options}
      components={{
        IndicatorSeparator: null,
      }}
      theme={customTheme}
    />
  );
};

export default Select;
