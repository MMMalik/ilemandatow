import { FormValues } from "@ilemandatow/ui";

export interface NewPollFormParty {
  id: string;
  name: string;
  result: string;
  color: string;
}

export type NewPollFormValues = FormValues<{
  parties: NewPollFormParty[];
  threshold: string;
}>;
