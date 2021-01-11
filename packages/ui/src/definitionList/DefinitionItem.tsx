import * as React from "react";

interface Props {
  label: string;
  value: React.ReactNode;
}

const DefinitionItem: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="pr5">
      <div className="f6 mv2 b">{label}</div>
      <div>{value}</div>
    </div>
  );
};

export default DefinitionItem;
