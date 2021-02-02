import * as React from "react";
import { DefinitionList } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import DateSpan from "../dateSpan";
import PollDefinitionItem from "../pollDefinitionItem";

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
      {polledBy && (
        <PollDefinitionItem label={t("conductedBy")} value={polledBy} />
      )}
      {publishedBy && source && (
        <PollDefinitionItem
          label={t("commissionedBy")}
          value={publishedBy}
          linkTo={source}
          linkExternal={true}
        />
      )}
      {publishedAt && (
        <PollDefinitionItem
          label={t("publishedAt")}
          value={<DateSpan from={publishedAt} />}
        />
      )}
    </DefinitionList>
  );
};

export default PollInfoList;
