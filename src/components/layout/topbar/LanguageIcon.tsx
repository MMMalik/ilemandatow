import * as React from "react";
import { useTranslation } from "react-i18next";
import Tooltip from "@components/ui/tooltip";
import { TopbarAction } from "@components/ui/topbar";

const nextLangMap: { [key: string]: string } = {
  pl: "en",
  en: "pl",
};

interface Props {
  withTooltip?: boolean;
}

const LanguageIcon: React.FC<Props> = ({ withTooltip = true }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const nextLang = nextLangMap[currentLang];

  const toggleLanguage = () => {
    i18n.changeLanguage(nextLang);
  };

  if (withTooltip) {
    return (
      <Tooltip title={t("changeLanguage")}>
        <TopbarAction onClick={toggleLanguage}>{t(currentLang)}</TopbarAction>
      </Tooltip>
    );
  }

  const title = `(${t(nextLang)}) ${t("changeLanguage")}`;

  return <TopbarAction onClick={toggleLanguage}>{title}</TopbarAction>;
};

export default LanguageIcon;
