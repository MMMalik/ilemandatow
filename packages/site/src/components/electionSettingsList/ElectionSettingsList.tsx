import * as React from "react";
import { DefinitionList, DefinitionItem } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  threshold?: string;
  parliamentSeats?: string;
}

const ElectionSettingsList: React.FC<Props> = ({
  threshold,
  parliamentSeats,
}) => {
  const { t } = useTranslation();

  return (
    <DefinitionList>
      {threshold && <DefinitionItem label={t("threshold")} value={threshold} />}
      {parliamentSeats && (
        <DefinitionItem label={t("parliamentSeats")} value={parliamentSeats} />
      )}
    </DefinitionList>
  );
};

export default ElectionSettingsList;
