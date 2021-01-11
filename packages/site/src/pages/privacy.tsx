import * as React from "react";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("privacy")} />
    </>
  );
};

export default Privacy;
