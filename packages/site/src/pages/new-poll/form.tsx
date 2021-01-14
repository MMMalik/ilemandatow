import * as React from "react";
import { navigate, PageProps } from "gatsby";
import { parse, stringify } from "query-string";
import { SectionTitle } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { NewPollFormValues, useInitFormValues } from "../../components";
import { NewPollForm } from "../../views";
import { useRoutes } from "../../routes";

const NewPoll: React.FC<PageProps> = ({ location }) => {
  const { t } = useTranslation();
  const { routes } = useRoutes();
  const formValues = useInitFormValues(parse(location.search));

  const handleSubmit = (data: NewPollFormValues) => {
    navigate(
      routes.newPollViz.link(
        stringify({
          ...data,
          parties: data.parties?.map((p) => JSON.stringify(p)),
        })
      )
    );
  };

  return (
    <>
      <SectionTitle title={t("newPoll")} />
      <NewPollForm onSubmit={handleSubmit} initValues={formValues} />
    </>
  );
};

export default NewPoll;
