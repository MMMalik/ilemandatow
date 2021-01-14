import * as React from "react";
import { TopbarLink } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";

const NextPoll: React.FC = () => {
  const { t } = useTranslation();
  const { routes } = useRoutes();

  return (
    <TopbarLink btn={true} to={routes.newPollForm.link()}>
      {t("newPoll")}
    </TopbarLink>
  );
};

export default NextPoll;
