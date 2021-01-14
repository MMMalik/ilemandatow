import * as React from "react";

export interface FormProps {
  /**
   * Callback invoked on submitting form.
   */
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
