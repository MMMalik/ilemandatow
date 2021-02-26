import { DataType } from "../generated";
import { filterList } from "./filterList";
import { filterNonRegularParties } from "./filterNonRegularParties";
import { filterRegularParties } from "./filterRegularParties";
import { getDhondtResults } from "./getDhondtResults";
import { getElectoralCode } from "./getElectoralCode";
import { getPartiesWithResults } from "./getPartiesWithResults";

export const getPartitionedParties = (
  codes: DataType.ElectoralCodeFragment[],
  themeName: string,
  poll?: DataType.PollFragment | null
) => {
  const results = filterList(poll?.results ?? []);
  const code = getElectoralCode(codes, poll);
  const seatsParties = getDhondtResults(
    filterNonRegularParties(results).map(({ party, result }) => ({
      id: party?.id ?? "",
      result: result ?? 0,
    })),
    code
  );
  const parties = getPartiesWithResults(results, themeName);
  const specialParties = getPartiesWithResults(
    filterRegularParties(results),
    themeName
  );
  return { code, parties, specialParties, seatsParties };
};
