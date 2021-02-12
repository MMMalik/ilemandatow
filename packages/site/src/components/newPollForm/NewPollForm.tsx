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
  totalSeats: number;
}

const NewPollForm: React.FC<Props> = ({ onSubmit, initValues, totalSeats }) => {
  const { t } = useTranslation();
  const methods = useForm<NewPollFormValues>({
    onSubmit,
    defaultValues: initValues,
  });

  const handleCancel = () => {
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.onSubmit}>
        <FormSection
          title={t("pollResultsTableTitle")}
          description={t("pollResultsTableDescription")}
        >
          <NewPollResultsTable />
        </FormSection>
        <FormSection
          title={t("electionSettingsTitle")}
          description={t("electionSettingsDescription")}
        >
          <NewPollSettings totalSeats={totalSeats} />
        </FormSection>
        <FormSubmit
          onCancel={handleCancel}
          submitLabel={t("submit")}
          cancelLabel={t("cancel")}
        />
      </Form>
    </FormProvider>
  );
};

export default NewPollForm;
