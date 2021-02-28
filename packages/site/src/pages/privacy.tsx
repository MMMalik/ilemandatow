import * as React from "react";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";
import { SEO } from "../components";

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t("privacyPageTitle")} description={t("privacyPageDesc")} />
      <SectionTitle title={t("privacy")} />
    </>
  );
};

export default Privacy;
