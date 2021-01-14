import * as React from "react";
import { useDateFormat } from "../../i18n";

interface Props {
  from: string;
  to?: string;
}

const DateSpan: React.FC<Props> = ({ from, to }) => {
  const format = useDateFormat();

  return (
    <span>
      {to
        ? `${format(new Date(from))} - ${format(new Date(to))}`
        : format(new Date(from))}
    </span>
  );
};

export default DateSpan;
