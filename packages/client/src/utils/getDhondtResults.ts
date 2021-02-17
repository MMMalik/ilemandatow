import { dhondtByDistricts } from "@ilemandatow/seats";
import { DataType } from "../generated";
import { PartyResult } from "./types";

/**
 * Calculates parliament seats distribution via D'Hondt method.
 *
 * @param results results
 * @param code electoral code
 */
export const getDhondtResults = (
  results: PartyResult[],
  code?: DataType.ElectoralCodeFragment
) => {
  if (!code) {
    return [];
  }

  const { threshold, districts } = code;

  return dhondtByDistricts({
    resultsByDistrict: districts.map((d) => {
      return {
        results: results.map((r) => {
          return {
            party: r.id ?? "",
            votes: r.result ?? 0,
          };
        }),
        totalSeats: d.totalSeats ?? 0,
      };
    }),
    globalThreshold: threshold ?? 0,
    fillMissingPerc: true,
  });
};
