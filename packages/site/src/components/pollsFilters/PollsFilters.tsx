import * as React from "react";
import { Grid, GridItem, Select, SelectOption } from "@ilemandatow/ui";
import { DataType } from "@ilemandatow/client";

interface Props {
  publishers: DataType.PublisherFragment[];
  pollCompanies: DataType.PollCompanyFragment[];
  onPublishersSelect: (items: string[]) => void;
  onPollCompaniesSelect: (items: string[]) => void;
}

const PollsFilters: React.FC<Props> = ({
  publishers,
  pollCompanies,
  onPublishersSelect,
  onPollCompaniesSelect,
}) => {
  const handlePublishersSelect = React.useCallback(
    (opts: SelectOption[] | SelectOption) => {
      if (Array.isArray(opts)) {
        onPublishersSelect(opts.map((opt) => opt.value));
      }
    },
    [onPublishersSelect]
  );

  const handlePollCompaniesSelect = React.useCallback(
    (opts: SelectOption[] | SelectOption) => {
      if (Array.isArray(opts)) {
        onPollCompaniesSelect(opts.map((opt) => opt.value));
      }
    },
    [onPollCompaniesSelect]
  );

  return (
    <div>
      <Grid>
        <GridItem className="w-third-l">
          <Select
            options={publishers.map((p) => ({
              value: p.name ?? "",
              label: p.name ?? "",
            }))}
            multi={true}
            placeholder="Select publishers..."
            onChange={handlePublishersSelect}
          />
        </GridItem>
        <GridItem className="w-third-l">
          <Select
            options={pollCompanies.map((p) => ({
              value: p.name ?? "",
              label: p.name ?? "",
            }))}
            multi={true}
            placeholder="Select poll companies..."
            onChange={handlePollCompaniesSelect}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default PollsFilters;
