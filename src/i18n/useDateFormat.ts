import { format } from "date-fns";
import { useTranslation } from "./useTranslation";

export const useDateFormat = () => {
  const { dateFormat = "dd.MM.yyyy" } = useTranslation();

  return (d: number | Date) => {
    return format(d, dateFormat);
  };
};
