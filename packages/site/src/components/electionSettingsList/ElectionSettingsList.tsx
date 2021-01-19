import * as React from "react";
import { DefinitionList } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import PollDefinitionItem from "../pollDefinitionItem";

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
      {threshold && (
        <PollDefinitionItem label={t("threshold")} value={threshold} />
      )}
      {parliamentSeats && (
        <PollDefinitionItem
          label={t("parliamentSeats")}
          value={parliamentSeats}
        />
      )}
    </DefinitionList>
  );
};

export default ElectionSettingsList;
