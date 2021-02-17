import * as React from "react";
import { SearchResults } from "@ilemandatow/client";
import { SearchItem } from "@ilemandatow/ui";
import { useDateFormat, useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";

interface Props {
  results: SearchResults;
}

const SearchDialogResults: React.FC<Props> = ({ results }) => {
  const { t } = useTranslation();
  const format = useDateFormat();
  const { routes } = useRoutes();
  const searchedPhrase = results?.phrase;

  if (results.noSearch) {
    return <div className="tc mv5">{t("searchMinLength3")}</div>;
  }

  if (results.noPolls) {
    return <div className="tc mv5">{t("noPollsFound")}</div>;
  }

  return (
    <div>
      {results.polls.map(
        ({ id, polledBy, publishedBy, publishedAt, results, slug }) => {
          const [firstPolledBy] = polledBy;
          const [firstPublishedBy] = publishedBy;
          return (
            <SearchItem
              key={id}
              title={firstPolledBy?.abbr ?? ""}
              subTitle={firstPublishedBy?.abbr ?? ""}
              titleRightSide={format(new Date(publishedAt ?? ""))}
              linkTo={routes.poll.link(slug ?? "")}
              highlight={searchedPhrase}
              description={results
                .map(
                  ({ party, result }) =>
                    `${party?.abbr ?? party?.name ?? ""}: ${
                      result?.toFixed(1) ?? ""
                    }%`
                )
                .join(", ")}
            />
          );
        }
      )}
    </div>
  );
};

export default SearchDialogResults;
