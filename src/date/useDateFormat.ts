import { format } from "date-fns";
import { enGB, pl } from "date-fns/locale";
import { useTranslation } from "react-i18next";

const langToLocale: { [key: string]: Locale } = {
  en: enGB,
  pl,
};

export const useDateFormat = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (d: number | Date, f: string) => {
    return format(d, f, { locale: langToLocale[currentLang] });
  };
};
