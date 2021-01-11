import * as React from "react";
import { DefinitionList, DefinitionItem } from "@ilemandatow/ui";
import { useDateFormat, useTranslation } from "../../i18n";

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
  const format = useDateFormat();

  return (
    <DefinitionList>
      {pollStartedAt && (
        <DefinitionItem
          label={t("conductedAt")}
          value={
            pollEndedAt
              ? `${format(new Date(pollStartedAt))} - ${format(
                  new Date(pollEndedAt)
                )}`
              : format(new Date(pollStartedAt))
          }
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
