import * as React from "react";
import Link from "../link";
import { useTheme } from "../theme";
import SearchHighlight from "./SearchHighlight";

export interface SearchItemProps {
  /**
   * Item's title.
   */
  title: string;
  /**
   * Item's subtitle.
   */
  subTitle?: string;
  /**
   * Right side content.
   */
  titleRightSide?: string;
  /**
   * Description text.
   */
  description?: string;
  /**
   * Part of text that should be hihglighted.
   */
  highlight?: string;
  /**
   * Item becomes a link to specified location.
   */
  linkTo?: string;
}

const SearchItem: React.FC<SearchItemProps> = ({
  title,
  subTitle,
  titleRightSide,
  highlight,
  description,
  linkTo,
}) => {
  const { theme } = useTheme();
  const { textMuted, textDivider } = theme;

  const content = (
    <div className={`pa3 bb b--${textDivider} hover-bg-${textDivider}`}>
      <div className={`flex justify-between`}>
        <div>
          <span className="b">
            <SearchHighlight highlight={highlight} text={title} />
          </span>
          {subTitle && (
            <span className={`ml1 ${textMuted}`}>
              <span>{` / `}</span>
              <SearchHighlight highlight={highlight} text={subTitle} />
            </span>
          )}
        </div>
        {titleRightSide && (
          <div className={`f6 ${textMuted}`}>
            <SearchHighlight highlight={highlight} text={titleRightSide} />
          </div>
        )}
      </div>
      {description && (
        <div className="mt3 w-80 lh-copy">
          <SearchHighlight highlight={highlight} text={description} />
        </div>
      )}
    </div>
  );

  return linkTo ? <Link to={linkTo}>{content}</Link> : content;
};

export default SearchItem;
