import * as React from "react";

export interface Props {
  /**
   * Callback invoked on submitting form.
   */
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({ children, onSubmit }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
