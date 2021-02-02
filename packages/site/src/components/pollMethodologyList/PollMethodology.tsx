import * as React from "react";
import { DefinitionList } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import DateSpan from "../dateSpan";
import PollDefinitionItem from "../pollDefinitionItem";

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
        <PollDefinitionItem
          label={t("conductedAt")}
          value={<DateSpan from={pollStartedAt} to={pollEndedAt} />}
        />
      )}
      {method && <PollDefinitionItem label={t("method")} value={method} />}
      {participantsCount && (
        <PollDefinitionItem
          label={t("participantsCount")}
          value={participantsCount}
        />
      )}
    </DefinitionList>
  );
};

export default PollMethodology;
