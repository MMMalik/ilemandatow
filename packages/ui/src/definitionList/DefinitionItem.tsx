import * as React from "react";

interface Props {
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
}

const DefinitionItem: React.FC<Props> = ({ label, value, className }) => {
  return (
    <div className={className}>
      <div className="f6 mb2 b">{label}</div>
      <div>{value}</div>
    </div>
  );
};

export default DefinitionItem;
