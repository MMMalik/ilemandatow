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
  /**
   * Callback fired upon clicking on cancel btn.
   */
  onCancel?: () => void;
}

const FormSubmit: React.FC<FormSubmitProps> = ({
  cancelLabel,
  submitLabel,
  onCancel,
}) => {
  return (
    <FormSection divider={false}>
      <div className="flex justify-end">
        <Button onClick={onCancel} btnType="secondary">
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
