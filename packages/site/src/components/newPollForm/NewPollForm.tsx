import * as React from "react";
import { Form, FormSection, FormSubmit, useForm } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import NewPollResultsTable from "./NewPollResultsTable";
import NewPollSettings from "./NewPollSettings";

const NewPollForm: React.FC = () => {
  const { t } = useTranslation();
  const { onSubmit, register } = useForm({
    onSubmit: (data) => {
      console.log({ data });
      alert(JSON.stringify(data));
    },
    defaultValues: {
      threshold: 5.0,
      seats: 460,
    },
  });

  return (
    <Form onSubmit={onSubmit}>
      <FormSection
        divider={false}
        title={t("pollResultsTableTitle")}
        description={t("pollResultsTableDescription")}
      >
        <NewPollResultsTable registerFn={register} />
      </FormSection>
      <FormSection
        title={t("electionSettingsTitle")}
        description={t("electionSettingsDescription")}
      >
        <NewPollSettings registerFn={register} />
      </FormSection>
      <FormSection>
        <FormSubmit submitLabel={t("submit")} cancelLabel={t("cancel")} />
      </FormSection>
    </Form>
  );
};

export default NewPollForm;
