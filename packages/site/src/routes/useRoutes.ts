import { useLocation } from "@reach/router";
import { useTranslation } from "../i18n";
import { getRoutes } from "./getRoutes";

export const useRoutes = () => {
  const { path } = useTranslation();
  const { pathname } = useLocation();

  const replaceCurrentRouteLang = (langKey: string) => {
    return pathname.replace(new RegExp(`^/${path}`, "gi"), `/${langKey}`);
  };

  return {
    routes: getRoutes(path),
    replaceCurrentRouteLang,
  };
};
