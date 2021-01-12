import * as React from "react";

interface Props {
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
