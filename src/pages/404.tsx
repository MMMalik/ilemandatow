import * as React from "react";
import { useTranslation } from "@i18n";

const Page404: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("pageNotFound")}</div>
      <div>{t("oopsNotExists")}</div>
    </>
  );
};

export default Page404;
