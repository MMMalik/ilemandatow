import * as React from "react";
import { useTranslation } from "@i18n";
import { useRoutes } from "@routes";
import { TopbarLink } from "@components/ui/topbar";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { routes } = useRoutes();

  return <TopbarLink to={routes.home.link()}>{t("home")}</TopbarLink>;
};

export default Home;
