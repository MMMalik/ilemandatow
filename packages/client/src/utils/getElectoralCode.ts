import { DataType } from "../generated";
import { getTime } from "./getTime";

/**
 * Chooses electoral code for supplied poll.
 *
 * @param codes list of electoral codes
 * @param poll poll document
 */
export const getElectoralCode = (
  codes: DataType.ElectoralCodeFragment[],
  poll?: DataType.PollFragment | null
) => {
  if (!poll || !poll.publishedAt) {
    return undefined;
  }

  const { publishedAt } = poll;
  const publishedAtTime = getTime(publishedAt);

  return codes.find(({ inEffectSince, inEffectTo }) => {
    if (!inEffectSince) {
      return false;
    }

    return (
      publishedAtTime >= getTime(inEffectSince) &&
      (inEffectTo ? publishedAtTime < getTime(inEffectTo) : true)
    );
  });
};
