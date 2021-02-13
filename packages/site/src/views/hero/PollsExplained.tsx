import * as React from "react";
import { useSearch } from "@ilemandatow/client";
import { Grid, GridItem, Link, Paper, Search, useTheme } from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { useRoutes } from "../../routes";
import PollsExplainedSearchResults from "./PollsExplainedSearchResults";

const PollsExplained: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { routes } = useRoutes();
  const { search, results } = useSearch();
  const { textDivider } = theme;

  const showPolls = 3;

  const handleSearch = React.useCallback(
    async (phrase?: string) => {
      await search(phrase, { limit: showPolls, minLength: 3 });
    },
    [search]
  );

  return (
    <div className="pa3">
      <Grid>
        <GridItem className="w-100 w-50-l">
          <div className="f5 lh-copy mh3-ns">{t("pollsExplainedDesc")}</div>
        </GridItem>
        <GridItem className="w-100 w-50-l">
          <Paper className="pa3 mh3-ns">
            <div className={`pv2 bb b--${textDivider}`}>
              <Search
                onSearch={handleSearch}
                placeholder={t("search")}
                wait={250}
                initPhrase="ibris"
              />
            </div>
            <PollsExplainedSearchResults results={results} />
            {results.totalPolls !== undefined &&
              results.totalPolls > showPolls && (
                <div className="mt3 mh2">
                  <Link to={routes.polls.link()} primary={true}>
                    <span>{t("seeAllPollsFor")}</span>
                    <span className="">{` ${results.phrase}`}</span>
                    <span>{` (${results.totalPolls})`}</span>
                  </Link>
                </div>
              )}
          </Paper>
        </GridItem>
      </Grid>
    </div>
  );
};

export default PollsExplained;
