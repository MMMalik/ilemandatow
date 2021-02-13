import * as React from "react";
import { Card, Link, Icon } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  linkTo: string;
}

const NewPollCard: React.FC<Props> = ({ linkTo }) => {
  const { t } = useTranslation();

  return (
    <Link to={linkTo}>
      <Card
        title={t("simulateElections")}
        clickable={true}
        footer={<Icon icon="person-booth" size="2x" />}
      >
        {t("newPollHeroDesc")}
      </Card>
    </Link>
  );
};

export default NewPollCard;
