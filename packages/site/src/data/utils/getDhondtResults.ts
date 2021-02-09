import { ElectoralCodeFragment } from "@ilemandatow/client";
import { dhondtByDistricts } from "@ilemandatow/seats";

interface PartyResult {
  id?: string;
  result?: number;
}

export const getDhondtResults = (
  results: PartyResult[],
  code?: ElectoralCodeFragment
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
  });
};
