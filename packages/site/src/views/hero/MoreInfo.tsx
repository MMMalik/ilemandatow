import * as React from "react";
import { Card, Link, Icon } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  linkTo: string;
}

const MoreInfo: React.FC<Props> = ({ linkTo }) => {
  const { t } = useTranslation();

  return (
    <Link to={linkTo}>
      <Card
        title={t("moreInfo")}
        clickable={true}
        footer={<Icon icon="info" size="2x" />}
      >
        {t("moreInfoHeroDesc")}
      </Card>
    </Link>
  );
};

export default MoreInfo;
