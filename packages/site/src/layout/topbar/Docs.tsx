import * as React from "react";
import { TopbarLink } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";

const Docs: React.FC = () => {
  const { t } = useTranslation();
  const { routes } = useRoutes();

  return <TopbarLink to={routes.docs.link()}>{t("docs")}</TopbarLink>;
};

export default Docs;
