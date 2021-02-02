import * as React from "react";
import Button from "../button";
import FormSection from "./FormSection";

export interface FormSubmitProps {
  /**
   * Label for cancel / reset button.
   */
  cancelLabel: string;
  /**
   * Label for submit button.
   */
  submitLabel: string;
}

const FormSubmit: React.FC<FormSubmitProps> = ({
  cancelLabel,
  submitLabel,
}) => {
  return (
    <FormSection divider={false}>
      <div className="flex justify-end">
        <Button htmlType="reset" btnType="secondary">
          {cancelLabel}
        </Button>
        <Button htmlType="submit" className="ml3">
          {submitLabel}
        </Button>
      </div>
    </FormSection>
  );
};

export default FormSubmit;
