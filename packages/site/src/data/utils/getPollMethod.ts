import { PLACEHOLDER_POLL_METHOD } from "../../constants";
import { PollInfoFragment } from "../../types";

export const getPollMethod = (poll?: PollInfoFragment) => {
  return poll?.method !== PLACEHOLDER_POLL_METHOD
    ? poll?.method ?? undefined
    : undefined;
};
