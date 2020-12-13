import * as React from "react";
import { useTranslation } from "react-i18next";
import Page from "@components/layout/page";

const Page404: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <div>{t("pageNotFound")}</div>
      <div>{t("oopsNotExists")}</div>
    </Page>
  );
};

export default Page404;
