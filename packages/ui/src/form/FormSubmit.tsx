import * as React from "react";
import Button from "../button";

interface Props {
  cancelLabel: string;
  submitLabel: string;
}

const FormSubmit: React.FC<Props> = ({ cancelLabel, submitLabel }) => {
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
