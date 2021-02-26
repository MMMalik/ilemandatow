import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { DataType, filterList } from "@ilemandatow/client";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../i18n";
import { Docs } from "../views";

export const query = graphql`
  query doc($id: ID!, $lang: IleMandatow_DocSectionLanguageType!) {
    ilemandatow {
      Doc(where: { id: $id }) {
        ...Doc
      }
      allDocSections(sortBy: order_ASC, where: { language: $lang }) {
        ...DocSection
      }
    }
  }
`;

const Doc: React.FC<PageProps<any>> = ({ data }) => {
  const { t } = useTranslation();
  const currentDoc: DataType.DocFragment = data.ilemandatow.Doc ?? undefined;
  const sections: DataType.DocSection[] = filterList(
    data.ilemandatow.allDocSections
  );

  return (
    <>
      <SectionTitle title={t("docs")} />
      <Docs currentDoc={currentDoc} sections={sections} />
    </>
  );
};

export default Doc;
