import * as React from "react";
import { Tooltip, TopbarIcon } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  toggleSearch: () => void;
}

const SearchIcon: React.FC<Props> = ({ toggleSearch }) => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t("search")}>
      <TopbarIcon icon="search" onClick={toggleSearch} />
    </Tooltip>
  );
};

export default SearchIcon;
