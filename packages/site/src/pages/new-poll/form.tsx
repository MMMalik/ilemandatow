import * as React from "react";
import { navigate, graphql, PageProps } from "gatsby";
import { parse, stringify } from "query-string";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { NewPollFormValues, useInitFormValues } from "../../components";
import { NewPollForm } from "../../views";
import { useRoutes } from "../../routes";
import {
  DataType,
  filterList,
  getLatestElectoralCode,
} from "@ilemandatow/client";

export const query = graphql`
  query form {
    ilemandatow {
      allElectoralCodes {
        ...ElectoralCode
      }
    }
  }
`;

const Form: React.FC<PageProps<any>> = ({ location, data }) => {
  const { t } = useTranslation();
  const { routes } = useRoutes();
  const formValues = useInitFormValues(parse(location.search));
  const codes: DataType.ElectoralCodeFragment[] = filterList(
    data.ilemandatow.allElectoralCodes
  );
  const latestCode = getLatestElectoralCode(codes);

  const handleSubmit = (formData: NewPollFormValues) => {
    navigate(
      routes.newPollViz.link(
        stringify({
          ...formData,
          parties: formData.parties?.map((p) => JSON.stringify(p)),
        })
      )
    );
  };

  return (
    <>
      <SectionTitle title={t("simulateElections")} />
      <NewPollForm
        onSubmit={handleSubmit}
        initValues={formValues}
        totalSeats={latestCode?.totalSeats ?? 0}
      />
    </>
  );
};

export default Form;
