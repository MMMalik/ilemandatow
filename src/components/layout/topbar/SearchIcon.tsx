import * as React from "react";
import { useTranslation } from "react-i18next";
import Tooltip from "@components/ui/tooltip";
import { TopbarIcon } from "@components/ui/topbar";

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
