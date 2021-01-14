import { nanoid } from "nanoid";
import { useTranslation } from "../../i18n";
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
      {
        id: nanoid(),
        name: t("party1"),
        result: "25",
        color: "#5E2CA5",
      },
      {
        id: nanoid(),
        name: t("party2"),
        result: "35",
        color: "#fcba03",
      },
      { id: nanoid(), name: t("party3"), result: "40", color: "#00f03c" },
    ],
    threshold: "5.0",
    seats: "460",
  };

  const parsed = {
    ...formValues,
    parties: formValues?.parties?.map((p: any) => JSON.parse(p)),
  };
  const isValid = validate(parsed);

  return isValid ? (parsed as NewPollFormValues) : defaultValues;
};
