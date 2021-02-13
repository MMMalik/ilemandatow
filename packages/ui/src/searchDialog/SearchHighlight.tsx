import * as React from "react";
import { useTheme } from "../theme";

export interface SearchHighlightProps {
  /**
   * Text to display.
   */
  text: string;
  /**
   * Part of text that should be hihglighted.
   */
  highlight?: string;
}

const SearchHighlight: React.FC<SearchHighlightProps> = ({
  text,
  highlight,
}) => {
  const highlighted = React.useMemo(() => {
    if (highlight) {
      return text.split(new RegExp(`(${highlight})`, "i")).map((token, i) => {
        if (token.toLowerCase() === highlight.toLowerCase()) {
          return <mark key={i}>{token}</mark>;
        }
        return token;
      });
    }
    return text;
  }, [text, highlight]);

  return <span>{highlighted}</span>;
};

export default SearchHighlight;
