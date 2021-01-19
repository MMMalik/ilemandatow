import * as React from "react";
import { TopbarLink } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";

interface Props {
  btn?: boolean;
}

const NextPoll: React.FC<Props> = ({ btn = true }) => {
  const { t } = useTranslation();
  const { routes } = useRoutes();

  return (
    <TopbarLink btn={btn} to={routes.newPollForm.link()}>
      {t("newPoll")}
    </TopbarLink>
  );
};

export default NextPoll;
