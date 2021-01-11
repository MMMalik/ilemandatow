import * as React from "react";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";

const Index: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("home")} />
    </>
  );
};

export default Index;
