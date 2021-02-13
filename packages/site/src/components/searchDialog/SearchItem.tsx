import * as React from "react";
import { useSearch } from "@ilemandatow/client";
import { Dialog, Search } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";

interface Props {
  title: string;
  subTitle: string;
  titleRightSide: string;
}

const SearchItem: React.FC<Props> = ({ title }) => {
  const { t } = useTranslation();
  const { search, results } = useSearch();

  const handleSearch = async (phrase?: string) => {
    await search(phrase);
  };

  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

export default SearchItem;
