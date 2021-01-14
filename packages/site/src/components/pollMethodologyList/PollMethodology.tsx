import * as React from "react";
import { DefinitionList, DefinitionItem } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import DateSpan from "../dateSpan";

interface Props {
  pollStartedAt?: string;
  pollEndedAt?: string;
  method?: string;
  participantsCount?: number;
}

const PollMethodology: React.FC<Props> = ({
  pollStartedAt,
  pollEndedAt,
  method,
  participantsCount,
}) => {
  const { t } = useTranslation();

  return (
    <DefinitionList>
      {pollStartedAt && (
        <DefinitionItem
          label={t("conductedAt")}
          value={<DateSpan from={pollStartedAt} to={pollEndedAt} />}
        />
      )}
      {method && <DefinitionItem label={t("method")} value={method} />}
      {participantsCount && (
        <DefinitionItem
          label={t("participantsCount")}
          value={participantsCount}
        />
      )}
    </DefinitionList>
  );
};

export default PollMethodology;
