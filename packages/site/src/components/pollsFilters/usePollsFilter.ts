import * as React from "react";
import { useSelect } from "@ilemandatow/ui";
import { PollsFiltersProps } from "./types";

export const usePollsFilter = ({
  publishers,
  pollCompanies,
  onPollCompaniesSelect,
  onPublishersSelect,
}: PollsFiltersProps) => {
  const publishersOpts = publishers.map((p) => ({
    value: p.name ?? "",
    label: p.name ?? "",
  }));
  const pollCompaniesOpts = pollCompanies.map((p) => ({
    value: p.name ?? "",
    label: p.name ?? "",
  }));
  const handlePublishersSelect = React.useCallback(
    (opts: any) => {
      onPublishersSelect(opts.map((opt: any) => opt.value));
    },
    [onPublishersSelect]
  );
  const handlePollCompaniesSelect = React.useCallback(
    (opts: any) => {
      onPollCompaniesSelect(opts.map((opt: any) => opt.value));
    },
    [onPollCompaniesSelect]
  );
  const {
    selected: selectedPublishers,
    handleSelect: handlePublishersClick,
    deselect: deselectPublisher,
  } = useSelect({
    options: publishersOpts,
    onChange: handlePublishersSelect,
    multi: true,
  });
  const {
    selected: selectedPollCompanies,
    handleSelect: handlePollCompaniesClick,
    deselect: deselectPollCompany,
  } = useSelect({
    options: pollCompaniesOpts,
    onChange: handlePollCompaniesSelect,
    multi: true,
  });

  return {
    deselectPublisher,
    deselectPollCompany,
    handlePublishersClick,
    handlePollCompaniesClick,
    selectedPublishers,
    selectedPollCompanies,
    publishersOpts,
    pollCompaniesOpts,
  };
};
