import * as React from "react";
import { DefinitionList, DefinitionItem } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import DateSpan from "../dateSpan";

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

  return (
    <DefinitionList>
      {polledBy && <DefinitionItem label={t("conductedBy")} value={polledBy} />}
      {publishedBy && source && (
        <DefinitionItem
          label={t("commissionedBy")}
          value={publishedBy}
          linkTo={source}
          linkExternal={true}
        />
      )}
      {publishedAt && (
        <DefinitionItem
          label={t("publishedAt")}
          value={<DateSpan from={publishedAt} />}
        />
      )}
    </DefinitionList>
  );
};

export default PollInfoList;
