import * as React from "react";
import { useTranslation } from "../i18n";
import NewPoll from "../components/newPoll";

const NewPollPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {t("newPoll")}
      <NewPoll />
    </>
  );
};

export default NewPollPage;
