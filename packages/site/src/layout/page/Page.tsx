import * as React from "react";
import { useLocation } from "@reach/router";
import { PageWrapper } from "@ilemandatow/ui";
import Topbar from "../topbar";
import Footer from "../footer";

const Page: React.FC = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <PageWrapper topbar={<Topbar key={pathname} />} footer={<Footer />}>
      {children}
    </PageWrapper>
  );
};

export default Page;
