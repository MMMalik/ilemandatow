import * as React from "react";
import Dialog from "../dialog";
import Search from "../search";

export interface SearchDialogProps {
  /**
   * Callback fired upon closing dialog.
   */
  onClose: () => void;
  /**
   * Callback fired when search is requested.
   */
  onSearch: (phrase?: string) => void;
  /**
   * Search input box placeholder.
   */
  placeholder: string;
}

const SearchDialog: React.FC<SearchDialogProps> = ({
  children,
  onClose,
  onSearch,
  placeholder,
}) => {
  return (
    <Dialog
      title={
        <Search
          placeholder={placeholder}
          onSearch={onSearch}
          wait={250}
          autofocus={true}
        />
      }
      onClose={onClose}
    >
      {children}
    </Dialog>
  );
};

export default SearchDialog;
