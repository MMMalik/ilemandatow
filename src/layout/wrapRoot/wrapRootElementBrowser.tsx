import * as React from "react";
import { WrapPageElementBrowserArgs } from "gatsby";
import ThemeProvider from "@theme";

const wrapRootElementBrowser = ({ element }: WrapPageElementBrowserArgs) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

export default wrapRootElementBrowser;
