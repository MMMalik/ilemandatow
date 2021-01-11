import * as React from "react";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t("aboutUs")} />
    </>
  );
};

export default About;
