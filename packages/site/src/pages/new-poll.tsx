import { useTranslation } from "@i18n";
import * as React from "react";

const NewPoll: React.FC = () => {
  const { t } = useTranslation();
  return <>{t("newPoll")}</>;
};

export default NewPoll;
