import * as React from "react";
import {
  ChipsList,
  Grid,
  GridItem,
  Select,
  SelectOption,
} from "@ilemandatow/ui";
import { useTranslation } from "../../i18n";
import { PollsFiltersProps } from "./types";
import { usePollsFilter } from "./usePollsFilter";

const PollsFilters: React.FC<PollsFiltersProps> = (props) => {
  const { t } = useTranslation();
  const {
    handlePollCompaniesClick,
    handlePublishersClick,
    selectedPublishers,
    selectedPollCompanies,
    publishersOpts,
    pollCompaniesOpts,
    deselectPollCompany,
    deselectPublisher,
  } = usePollsFilter(props);

  const handlePublisherRemove = (opt: SelectOption) => {
    deselectPublisher(opt);
  };

  const handlePollCompanyRemove = (opt: SelectOption) => {
    deselectPollCompany(opt);
  };

  return (
    <div>
      <Grid>
        <GridItem className="w-100 w-50-m w-third-l">
          <Select
            options={pollCompaniesOpts}
            selected={selectedPollCompanies}
            multi={true}
            placeholder={t("selectPollCompanies")}
            onOptionClick={handlePollCompaniesClick}
          />
        </GridItem>
        <GridItem className="w-100 w-50-m w-third-l">
          <Select
            options={publishersOpts}
            selected={selectedPublishers}
            multi={true}
            placeholder={t("selectPublishers")}
            onOptionClick={handlePublishersClick}
          />
        </GridItem>
      </Grid>
      {selectedPollCompanies.length > 0 && (
        <div className="mt4">
          <ChipsList
            title={t("pollCompanies")}
            selected={selectedPollCompanies.map((p) => ({
              value: p,
              label: p.label,
            }))}
            onRemove={handlePollCompanyRemove}
          />
        </div>
      )}
      {selectedPublishers.length > 0 && (
        <div className="mt4">
          <ChipsList
            title={t("publishers")}
            selected={selectedPublishers.map((p) => ({
              value: p,
              label: p.label,
            }))}
            onRemove={handlePublisherRemove}
          />
        </div>
      )}
    </div>
  );
};

export default PollsFilters;
