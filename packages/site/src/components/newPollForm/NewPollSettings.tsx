import * as React from "react";
import { InputField, Grid, GridItem, useFormContext } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  totalSeats: number;
}

const NewPollSettings: React.FC<Props> = ({ totalSeats }) => {
  const { t } = useTranslation();
  const { register } = useFormContext();

  return (
    <Grid>
      <GridItem className="w-100 w-50-l">
        <InputField
          ref={register({ required: true })}
          name="threshold"
          label={t("electionThreshold")}
          type="number"
          required={true}
          placeholder={t("threshold")}
        />
      </GridItem>
      <GridItem className="w-100 w-50-l">
        <InputField
          name="seats"
          label={t("parliamentSeats")}
          type="number"
          required={true}
          placeholder={t("seats")}
          disabled={true}
          value={totalSeats}
          helperText={t("valueCannotBeChanged")}
        />
      </GridItem>
    </Grid>
  );
};

export default NewPollSettings;
