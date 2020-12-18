import * as React from "react";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";
import Tooltip from "../../components/ui/tooltip";
import { TopbarLink } from "../../components/ui/topbar";

interface Props {
  withTooltip?: boolean;
}

const nextLangMap: { [key: string]: string } = {
  en: "pl",
  pl: "en",
};

const LanguageIcon: React.FC<Props> = ({ withTooltip = true }) => {
  const { t, language = "en" } = useTranslation();
  const { replaceCurrentRouteLang } = useRoutes();
  const nextLang = nextLangMap[language];
  const nextRoute = replaceCurrentRouteLang(nextLang);

  if (withTooltip) {
    return (
      <Tooltip title={t("changeLanguage")}>
        <TopbarLink to={nextRoute}>{t(language)}</TopbarLink>
      </Tooltip>
    );
  }

  const title = `(${t(nextLang)}) ${t("changeLanguage")}`;

  return <TopbarLink to={nextRoute}>{title}</TopbarLink>;
};

export default LanguageIcon;
