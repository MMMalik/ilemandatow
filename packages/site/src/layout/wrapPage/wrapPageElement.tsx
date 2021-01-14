import * as React from "react";
import { Link, WrapPageElementBrowserArgs } from "gatsby";
import { UIProvider } from "@ilemandatow/ui";
import { PageContext } from "../../types";
import I18nProvider from "../../i18n";
import Page from "../page";

const GatsbyLinkWrapper: React.FC<any> = ({ to, children, className }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs<any, PageContext>) => {
  return (
    <I18nProvider i18n={props.pageContext.i18nCtx}>
      <UIProvider LinkInternalComponent={GatsbyLinkWrapper}>
        <Page>{element}</Page>
      </UIProvider>
    </I18nProvider>
  );
};

export default wrapPageElement;
