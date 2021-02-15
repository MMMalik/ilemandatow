import { DataType } from "../generated";

/**
 * Chooses latest electoral code, i.e. currently in effect.
 *
 * @param codes list of electoral codes
 */
export const getLatestElectoralCode = (
  codes: DataType.ElectoralCodeFragment[]
) => {
  return codes.find(({ inEffectTo }) => {
    return !inEffectTo;
  });
};
