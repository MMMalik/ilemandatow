import * as React from "react";
import { useSearch } from "@ilemandatow/client";
import { SearchDialog } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import SearchDialogResults from "./SearchDialogResults";

interface Props {
  toggleSearch: () => void;
}

const SearchDialogCmp: React.FC<Props> = ({ toggleSearch }) => {
  const { t } = useTranslation();
  const { search, results } = useSearch();

  const handleSearch = React.useCallback(
    async (phrase?: string) => {
      await search(phrase, { minLength: 3 });
    },
    [search]
  );

  return (
    <SearchDialog
      placeholder={t("search")}
      onClose={toggleSearch}
      onSearch={handleSearch}
    >
      <SearchDialogResults results={results} />
    </SearchDialog>
  );
};

export default SearchDialogCmp;
