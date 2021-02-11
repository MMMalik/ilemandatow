import { DataType } from "@ilemandatow/client";

export interface PollsFiltersProps {
  /**
   * List of publishers to select from.
   */
  publishers: DataType.PublisherFragment[];
  /**
   * List of poll companies to select from.
   */
  pollCompanies: DataType.PollCompanyFragment[];
  /**
   * Callback invoked upon selecting a publisher.
   */
  onPublishersSelect: (items: string[]) => void;
  /**
   * Callback invoked upon selecting a poll company.
   */
  onPollCompaniesSelect: (items: string[]) => void;
}
