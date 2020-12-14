import * as React from "react";
import { nanoid } from "nanoid";

export const NanoIdControl: React.FC = () => {
  const [nanoId, setNanoId] = React.useState<string | undefined>();

  React.useEffect(() => {
    setNanoId(nanoid());
  }, []);

  return <input value={nanoId} disabled={true} />;
};

export const NanoIdPreview: React.FC<{ value: string }> = ({ value }) => {
  return <p>{value}</p>;
};
