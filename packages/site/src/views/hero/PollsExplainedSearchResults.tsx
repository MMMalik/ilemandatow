import * as React from "react";
import { SearchResults } from "@ilemandatow/client";
import { Link, useTheme } from "@ilemandatow/ui";
import { useDateFormat, useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";

interface Props {
  results: SearchResults;
}

const PollsExplainedSearchResults: React.FC<Props> = ({ results }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { routes } = useRoutes();
  const format = useDateFormat();
  const { textMuted, textDivider } = theme;

  if (results.noSearch) {
    return <div className="tc mv3">{t("searchMinLength3")}</div>;
  }

  if (results.noPolls) {
    return <div className="tc mv3">{t("noPollsFound")}</div>;
  }

  return (
    <div>
      {results?.polls.map(({ id, polledBy, publishedBy, publishedAt }) => {
        const [firstPolledBy] = polledBy;
        const [firstPublishedBy] = publishedBy;
        return (
          <Link key={id} to={routes.poll.link(id)}>
            <div
              className={`flex justify-between pv3 ph2 bb b--${textDivider} hover-bg-${textDivider}`}
            >
              <div>
                <span className="b">{firstPolledBy?.abbr ?? ""}</span>
                <span className={`ml1 ${textMuted}`}>
                  {` / ${firstPublishedBy?.abbr ?? ""}`}
                </span>
              </div>
              <div className={`f6 ${textMuted}`}>
                {format(new Date(publishedAt ?? ""))}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PollsExplainedSearchResults;
