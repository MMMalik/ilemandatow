import * as React from "react";
import { useSearch } from "@ilemandatow/client";
import { SearchDialog, SearchItem } from "@ilemandatow/ui";
import { useDateFormat, useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";

interface Props {
  toggleSearch: () => void;
}

const SearchDialogCmp: React.FC<Props> = ({ toggleSearch }) => {
  const { t } = useTranslation();
  const format = useDateFormat();
  const { search, results } = useSearch();
  const { routes } = useRoutes();
  const searchedPhrase = results?.phrase;

  const handleSearch = async (phrase?: string) => {
    await search(phrase);
  };

  return (
    <SearchDialog
      placeholder={t("search")}
      onClose={toggleSearch}
      onSearch={handleSearch}
    >
      {results?.polls.map(
        ({ id, polledBy, publishedBy, publishedAt, results }) => {
          const [firstPolledBy] = polledBy;
          const [firstPublishedBy] = publishedBy;
          return (
            <SearchItem
              key={id}
              title={firstPolledBy?.abbr ?? ""}
              subTitle={firstPublishedBy?.abbr ?? ""}
              titleRightSide={format(new Date(publishedAt ?? ""))}
              linkTo={routes.poll.link(id)}
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
    </SearchDialog>
  );
};

export default SearchDialogCmp;
