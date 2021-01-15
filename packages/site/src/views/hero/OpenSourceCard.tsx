import * as React from "react";
import { Card, Link, Icon } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  linkTo: string;
}

const OpenSourceCard: React.FC<Props> = ({ linkTo }) => {
  const { t } = useTranslation();

  return (
    <Link to={linkTo} external={true}>
      <Card
        title={t("free")}
        clickable={true}
        footer={<Icon icon={["fab", "github"]} size="2x" />}
      >
        {t("openSourceHeroDesc")}
      </Card>
    </Link>
  );
};

export default OpenSourceCard;
