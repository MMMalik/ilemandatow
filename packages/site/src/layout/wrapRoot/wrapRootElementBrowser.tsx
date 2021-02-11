import * as React from "react";
import { WrapPageElementBrowserArgs } from "gatsby";
import { ThemeProvider } from "@ilemandatow/ui";
import { ApiProvider, apiClient } from "@ilemandatow/client";
import { config } from "../../config";

const wrapRootElementBrowser = ({ element }: WrapPageElementBrowserArgs) => {
  return (
    <ApiProvider value={apiClient(config.apiUrl)}>
      <ThemeProvider>{element}</ThemeProvider>
    </ApiProvider>
  );
};

export default wrapRootElementBrowser;
