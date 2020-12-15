import * as React from "react";
import { useTranslation } from "react-i18next";
import { Maybe } from "@graphql/types";
import { routes } from "@routes";
import Icon from "@components/ui/icon";
import Link from "@components/ui/link";
import Tooltip from "@components/ui/tooltip";

interface Props {
  pollId: string;
  source?: Maybe<string>;
}

const PollCardFooter: React.FC<Props> = ({ pollId, source }) => {
  const { t } = useTranslation();

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
