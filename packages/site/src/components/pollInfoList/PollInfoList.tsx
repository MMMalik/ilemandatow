import * as React from "react";
import {
  DefinitionList,
  DefinitionItem,
  Icon,
  Link,
  useTheme,
} from "@ilemandatow/ui";
import { useDateFormat, useTranslation } from "../../i18n";

interface Props {
  polledBy?: string;
  publishedBy?: string;
  publishedAt?: string;
  source?: string;
}

const PollInfoList: React.FC<Props> = ({
  polledBy,
  publishedBy,
  publishedAt,
  source,
}) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const format = useDateFormat();
  const { textMuted } = theme;

  return (
    <DefinitionList>
      {polledBy && <DefinitionItem label={t("conductedBy")} value={polledBy} />}
      {publishedBy && source && (
        <DefinitionItem
          className="ml5"
          label={t("commissionedBy")}
          
          value={
            <Link to={source} external={true} className="flex align-center">
              <span>{publishedBy}</span>
              <Icon className={`ml1 ${textMuted}`} icon="external-link-alt" />
            </Link>
          }
        />
      )}
      {publishedAt && (
        <DefinitionItem
          className="ml5"
          label={t("publishedAt")}
          value={format(new Date(publishedAt))}
        />
      )}
    </DefinitionList>
  );
};

export default PollInfoList;
