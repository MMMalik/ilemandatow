import * as React from "react";
import { TopbarLink } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { routes } = useRoutes();

  return <TopbarLink to={routes.home.link()}>{t("home")}</TopbarLink>;
};

export default Home;
