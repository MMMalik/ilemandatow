import * as React from "react";
import { WrapPageElementBrowserArgs } from "gatsby";
import { PageContext } from "@utils/types";
import I18nProvider from "@i18n";
import Page from "../page";

const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs<any, PageContext>) => {
  return (
    <I18nProvider i18n={props.pageContext.i18nCtx}>
      <Page>{element}</Page>
    </I18nProvider>
  );
};

export default wrapPageElement;
