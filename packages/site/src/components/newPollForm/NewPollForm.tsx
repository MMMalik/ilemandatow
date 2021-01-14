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
import { NewPollFormValues } from "./types";

interface Props {
  onSubmit: (data: NewPollFormValues) => void;
  initValues: NewPollFormValues;
}

const NewPollForm: React.FC<Props> = ({ onSubmit, initValues }) => {
  const { t } = useTranslation();
  const methods = useForm<NewPollFormValues>({
    onSubmit,
    defaultValues: initValues,
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
