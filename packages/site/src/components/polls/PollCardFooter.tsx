import * as React from "react";
import { Icon, Link, Tooltip } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";

interface Props {
  pollId: string;
  source?: string | null;
}

const PollCardFooter: React.FC<Props> = ({ pollId, source }) => {
  const { t } = useTranslation();
  const { routes } = useRoutes();

  return (
    <div className="flex justify-between">
      {source && (
        <Tooltip title={t("source")}>
          <Link to={source} external={true}>
            <Icon icon="external-link-alt" />
          </Link>
        </Tooltip>
      )}
      <Link to={routes.poll.link(pollId)}>{t("seeDetails")}</Link>
    </div>
  );
};

export default PollCardFooter;
