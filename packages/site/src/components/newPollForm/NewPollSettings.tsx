import * as React from "react";
import { InputField, FormRegisterFn, Grid, GridItem } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  registerFn: FormRegisterFn;
}

const NewPollSettings: React.FC<Props> = ({ registerFn }) => {
  const { t } = useTranslation();

  return (
    <Grid>
      <GridItem className="w-50">
        <InputField
          ref={registerFn({ required: true })}
          name="threshold"
          label={t("electionThreshold")}
          type="number"
          required={true}
          placeholder={t("threshold")}
        />
      </GridItem>
      <GridItem className="w-50">
        <InputField
          ref={registerFn({ required: true })}
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
