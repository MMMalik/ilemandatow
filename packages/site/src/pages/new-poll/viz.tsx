import * as React from "react";
import { navigate, PageProps } from "gatsby";
import { parse } from "query-string";
import { Button, SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useInitFormValues } from "../../components";
import { NewPollViz } from "../../views";
import { useRoutes } from "../../routes";

const NewPoll: React.FC<PageProps> = ({ location }) => {
  const { t } = useTranslation();
  const { routes } = useRoutes();
  const formValues = useInitFormValues(parse(location.search));

  const handleRecalculate = () => {
    navigate(routes.newPollForm.link(location.search.substr(1)));
  };

  const { parties, threshold, seats } = formValues;

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
            result: parseInt(party.result ?? "0", 10),
          })) ?? []
        }
        threshold={threshold ?? "0"}
        parliamentSeats={seats ?? "0"}
      />
    </>
  );
};

export default NewPoll;
