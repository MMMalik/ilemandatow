import * as React from "react";
import { useTranslation } from "@i18n";
import { useRoutes } from "@routes";
import Icon from "@components/ui/icon";
import Link from "@components/ui/link";
import Tooltip from "@components/ui/tooltip";

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
