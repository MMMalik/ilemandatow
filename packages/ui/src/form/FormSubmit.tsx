import * as React from "react";
import Button from "../button";

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
    <div className="flex justify-end">
      <Button htmlType="reset" btnType="secondary">
        {cancelLabel}
      </Button>
      <Button htmlType="submit" className="ml3">
        {submitLabel}
      </Button>
    </div>
  );
};

export default FormSubmit;
