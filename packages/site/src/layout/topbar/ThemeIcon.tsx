import * as React from "react";
import {
  Tooltip,
  TopbarAction,
  TopbarIcon,
  Icon,
  useTheme,
} from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  withTooltip?: boolean;
}

const ThemeIcon: React.FC<Props> = ({ withTooltip = true }) => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  if (withTooltip) {
    return (
      <Tooltip title={t("toggleTheme")}>
        <TopbarIcon icon="sun" onClick={toggleTheme} />
      </Tooltip>
    );
  }

  return (
    <TopbarAction onClick={toggleTheme}>
      <Icon icon="sun" onClick={toggleTheme} />
      <span className="mh1">{t("toggleTheme")}</span>
    </TopbarAction>
  );
};

export default ThemeIcon;
