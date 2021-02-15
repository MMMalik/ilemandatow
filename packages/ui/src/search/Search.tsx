import * as React from "react";
import Icon from "../icon";
import InputField from "../inputField";
import { debounce } from "../utils";

export interface SearchProps {
  /**
   * Search callback.
   */
  onSearch: (phrase?: string) => void;
  /**
   * Wait time before invoking `onSearch`.
   */
  wait?: number;
  /**
   * Enables autofocus.
   */
  autofocus?: boolean;
  /**
   * Placeholder text.
   */
  placeholder?: string;
  /**
   * Initial search value.
   */
  initPhrase?: string;
}

const Search: React.FC<SearchProps> = ({
  onSearch,
  wait,
  placeholder,
  autofocus,
  initPhrase,
}) => {
  const ref = React.useRef<HTMLInputElement | null>(null);
  const [searchPhrase, setSearchPhrase] = React.useState<string | undefined>(
    initPhrase
  );

  const debouncedOnSearch = React.useMemo(() => {
    return debounce(onSearch, wait ?? 0);
  }, [onSearch, wait]);

  React.useEffect(() => {
    if (autofocus && ref && ref.current && ref.current.focus) {
      ref.current.focus();
    }
  }, [ref?.current?.focus, autofocus]);

  React.useEffect(() => {
    if (initPhrase) {
      debouncedOnSearch(initPhrase);
    }
  }, [initPhrase, debouncedOnSearch]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setSearchPhrase(value && value.trim() !== "" ? value : undefined);
    debouncedOnSearch(value);
  };

  return (
    <div className="flex items-center">
      <Icon icon="search" className="mr2" />
      <InputField
        ref={ref}
        value={searchPhrase ?? ""}
        onChange={handleChange}
        name="search"
        placeholder={placeholder}
        bare={true}
      />
    </div>
  );
};

export default Search;
