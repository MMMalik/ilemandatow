import * as React from "react";
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
}

const Search: React.FC<SearchProps> = ({
  onSearch,
  wait,
  placeholder,
  autofocus,
}) => {
  const ref = React.useRef<HTMLInputElement | null>(null);
  const [searchPhrase, setSearchPhrase] = React.useState<string | undefined>(
    undefined
  );

  const debouncedOnSearch = React.useMemo(() => {
    return debounce(onSearch, wait ?? 0);
  }, [onSearch, wait]);

  React.useEffect(() => {
    if (autofocus && ref && ref.current && ref.current.focus) {
      ref.current.focus();
    }
  }, [ref?.current?.focus, autofocus]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setSearchPhrase(value && value.trim() !== "" ? value : undefined);
    debouncedOnSearch(value);
  };

  return (
    <div className="flex items-center">
      <InputField
        ref={ref}
        value={searchPhrase}
        onChange={handleChange}
        name="search"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
