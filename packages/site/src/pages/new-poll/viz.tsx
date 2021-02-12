import * as React from "react";
import { navigate, graphql, PageProps } from "gatsby";
import { parse } from "query-string";
import { DataType, filterList } from "@ilemandatow/client";
import { Button, SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useInitFormValues } from "../../components";
import { NewPollViz } from "../../views";
import { useRoutes } from "../../routes";

export const query = graphql`
  query viz {
    ilemandatow {
      allElectoralCodes {
        ...ElectoralCode
      }
    }
  }
`;

const Viz: React.FC<PageProps<any>> = ({ location, data }) => {
  const { t } = useTranslation();
  const { routes } = useRoutes();
  const formValues = useInitFormValues(parse(location.search));
  const codes: DataType.ElectoralCodeFragment[] = filterList(
    data.ilemandatow.allElectoralCodes
  );

  const handleRecalculate = () => {
    navigate(routes.newPollForm.link(location.search.substr(1)));
  };

  const { parties, threshold } = formValues;

  return (
    <>
      <SectionTitle
        title={t("newPoll")}
        toolbar={
          <Button icon="cog" onClick={handleRecalculate}>
            {t("edit")}
          </Button>
        }
      />
      <NewPollViz
        parties={
          parties?.map((party) => ({
            ...party,
            abbr: party.name,
            result: parseInt(party.result ?? "0", 10),
          })) ?? []
        }
        threshold={parseInt(threshold ?? "0", 10)}
        codes={codes}
      />
    </>
  );
};

export default Viz;
