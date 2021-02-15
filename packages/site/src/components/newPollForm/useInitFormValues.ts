import { useTranslation } from "../../i18n";
import { getNewParty } from "./getNewParty";
import { NewPollFormValues } from "./types";

const validate = (formValues?: any) => {
  if (JSON.stringify(formValues) === "{}") {
    return false;
  }
  return true;
};

export const useInitFormValues = (formValues?: any) => {
  const { t } = useTranslation();

  const defaultValues = {
    parties: [
      getNewParty(t("party1"), "25", "#5e2ca5"),
      getNewParty(t("party2"), "35", "#fcba03"),
      getNewParty(t("party3"), "40", "#00f03c"),
    ],
    threshold: "5.0",
  };

  const parsed = {
    ...formValues,
    parties: formValues?.parties?.map((p: any) => JSON.parse(p)),
  };
  const isValid = validate(parsed);

  return isValid ? (parsed as NewPollFormValues) : defaultValues;
};
