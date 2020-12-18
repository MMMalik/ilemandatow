import { useTranslation } from "@i18n";
import * as React from "react";
import NewPoll from "@components/core/newPoll";

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
