import * as React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@theme";
import Tooltip from "@components/ui/tooltip";
import Icon from "@components/ui/icon";
import { TopbarAction, TopbarIcon } from "@components/ui/topbar";

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
