import * as React from "react";
import { InputField, Grid, GridItem, useFormContext } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

const NewPollSettings: React.FC = () => {
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
          ref={register({ required: true })}
          name="seats"
          label={t("parliamentSeats")}
          type="number"
          required={true}
          placeholder={t("seats")}
        />
      </GridItem>
    </Grid>
  );
};

export default NewPollSettings;
