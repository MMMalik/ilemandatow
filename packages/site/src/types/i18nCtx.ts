export interface I18nCtx {
  default?: boolean;
  path?: string;
  locale?: string;
  dateFormat?: string;
  siteLanguage?: string;
  ogLanguage?: string;
  defaultTitle?: string;
  defaultDescription?: string;
  translations?: { [key: string]: string };
}
