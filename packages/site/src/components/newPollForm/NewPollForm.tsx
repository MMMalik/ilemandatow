import * as React from "react";
import {
  Form,
  FormProvider,
  FormSection,
  FormSubmit,
  useForm,
} from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import NewPollResultsTable from "./NewPollResultsTable";
import NewPollSettings from "./NewPollSettings";

const NewPollForm: React.FC = () => {
  const { t } = useTranslation();
  const methods = useForm({
    onSubmit: (data) => {
      alert(JSON.stringify(data));
    },
    defaultValues: {
      parties: [
        {
          name: t("party1"),
          result: 25,
          color: "#5E2CA5",
        },
        {
          name: t("party2"),
          result: 35,
          color: "#fcba03",
        },
        {
          name: t("party3"),
          result: 40,
          color: "#00f03c",
        },
      ],
      threshold: 5.0,
      seats: 460,
    },
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.onSubmit}>
        <FormSection
          divider={false}
          title={t("pollResultsTableTitle")}
          description={t("pollResultsTableDescription")}
        >
          <NewPollResultsTable />
        </FormSection>
        <FormSection
          title={t("electionSettingsTitle")}
          description={t("electionSettingsDescription")}
        >
          <NewPollSettings />
        </FormSection>
        <FormSection>
          <FormSubmit submitLabel={t("submit")} cancelLabel={t("cancel")} />
        </FormSection>
      </Form>
    </FormProvider>
  );
};

export default NewPollForm;
