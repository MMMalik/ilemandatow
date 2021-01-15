import * as React from "react";
import { Card, Link, Icon } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  linkTo: string;
}

const PollsCard: React.FC<Props> = ({ linkTo }) => {
  const { t } = useTranslation();

  return (
    <Link to={linkTo}>
      <Card
        title={t("polls")}
        clickable={true}
        footer={<Icon icon="poll" size="2x" />}
      >
        <div>{t("pollsHeroDesc")}</div>
      </Card>
    </Link>
  );
};

export default PollsCard;
