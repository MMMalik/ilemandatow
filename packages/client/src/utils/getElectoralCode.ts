import { DataType } from "../generated";
import { getTime } from "./getTime";

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
