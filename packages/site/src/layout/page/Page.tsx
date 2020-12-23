import * as React from "react";
import { PageWrapper } from "@ilemandatow/ui";
import Topbar from "../topbar";
import Footer from "../footer";

const Page: React.FC = ({ children }) => {
  return (
    <PageWrapper topbar={<Topbar />} footer={<Footer />}>
      {children}
    </PageWrapper>
  );
};

export default Page;
