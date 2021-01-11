import * as React from "react";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";

const NewPoll: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("newPoll")} />
    </>
  );
};

export default NewPoll;
