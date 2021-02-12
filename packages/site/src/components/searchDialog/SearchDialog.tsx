import * as React from "react";
import { useSearch } from "@ilemandatow/client";
import { Dialog, Search } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  toggleSearch: () => void;
}

const SearchDialog: React.FC<Props> = ({ toggleSearch }) => {
  const { t } = useTranslation();
  const { search, results } = useSearch();

  const handleSearch = async (phrase?: string) => {
    await search(phrase);
  };

  return (
    <Dialog
      title={
        <Search
          placeholder={t("search")}
          onSearch={handleSearch}
          wait={500}
          autofocus={true}
        />
      }
      onClose={toggleSearch}
    >
      {results?.polls.map((r) => r.id)}
    </Dialog>
  );
};

export default SearchDialog;
