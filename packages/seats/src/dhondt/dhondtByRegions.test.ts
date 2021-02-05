import { sortBySeats } from "../utils";
import { dhondtByRegions } from "./dhondtByRegions";

const elections2019 = [
  {
    region: 1,
    results: [
      { party: "PiS", votes: 183364 },
      { party: "KO", votes: 108191 },
      { party: "Lewica", votes: 71061 },
      { party: "PSL", votes: 31006 },
      { party: "Konfederacja", votes: 25319 },
      { party: "Bezpartyjni", votes: 13495 },
    ],
    totalSeats: 12,
  },
  {
    region: 2,
    results: [
      { party: "PiS", votes: 114728 },
      { party: "KO", votes: 90812 },
      { party: "Lewica", votes: 34957 },
      { party: "PSL", votes: 20528 },
      { party: "Konfederacja", votes: 15346 },
      { party: "Bezpartyjni", votes: 6631 },
    ],
    totalSeats: 8,
  },
  {
    region: 3,
    results: [
      { party: "PiS", votes: 226915 },
      { party: "KO", votes: 214629 },
      { party: "Lewica", votes: 100843 },
      { party: "Konfederacja", votes: 48775 },
      { party: "PSL", votes: 42269 },
      { party: "Bezpartyjni", votes: 21024 },
    ],
    totalSeats: 14,
  },
  {
    region: 4,
    results: [
      { party: "PiS", votes: 167550 },
      { party: "KO", votes: 142844 },
      { party: "Lewica", votes: 69763 },
      { party: "PSL", votes: 41497 },
      { party: "Konfederacja", votes: 32406 },
      { party: "Bezpartyjni", votes: 5922 },
    ],
    totalSeats: 12,
  },
  {
    region: 5,
    results: [
      { party: "PiS", votes: 182648 },
      { party: "KO", votes: 119526 },
      { party: "Lewica", votes: 67076 },
      { party: "PSL", votes: 49225 },
      { party: "Konfederacja", votes: 28625 },
      { party: "Bezpartyjni", votes: 5230 },
    ],
    totalSeats: 13,
  },
  {
    region: 6,
    results: [
      { party: "PiS", votes: 313284 },
      { party: "KO", votes: 109185 },
      { party: "PSL", votes: 51474 },
      { party: "Lewica", votes: 44152 },
      { party: "Konfederacja", votes: 40012 },
      { party: "Bezpartyjni", votes: 7490 },
    ],
    totalSeats: 15,
  },
  {
    region: 7,
    results: [
      { party: "PiS", votes: 238802 },
      { party: "KO", votes: 59401 },
      { party: "PSL", votes: 47604 },
      { party: "Lewica", votes: 27404 },
      { party: "Konfederacja", votes: 23439 },
      { party: "Bezpartyjni", votes: 4668 },
    ],
    totalSeats: 12,
  },
  {
    region: 8,
    results: [
      { party: "PiS", votes: 150188 },
      { party: "KO", votes: 136955 },
      { party: "Lewica", votes: 68341 },
      { party: "PSL", votes: 50943 },
      { party: "Konfederacja", votes: 31490 },
    ],
    totalSeats: 12,
  },
  {
    region: 9,
    results: [
      { party: "KO", votes: 148830 },
      { party: "PiS", votes: 136731 },
      { party: "Lewica", votes: 83524 },
      { party: "Konfederacja", votes: 27627 },
      { party: "PSL", votes: 18828 },
    ],
    totalSeats: 10,
  },
  {
    region: 10,
    results: [
      { party: "PiS", votes: 194658 },
      { party: "KO", votes: 54160 },
      { party: "Lewica", votes: 37930 },
      { party: "PSL", votes: 36151 },
      { party: "Konfederacja", votes: 23427 },
    ],
    totalSeats: 9,
  },
  {
    region: 11,
    results: [
      { party: "PiS", votes: 229245 },
      { party: "KO", votes: 94268 },
      { party: "Lewica", votes: 55116 },
      { party: "PSL", votes: 47373 },
      { party: "Konfederacja", votes: 27054 },
      { party: "Bezpartyjni", votes: 7183 },
    ],
    totalSeats: 12,
  },
  {
    region: 12,
    results: [
      { party: "PiS", votes: 169106 },
      { party: "KO", votes: 72869 },
      { party: "Lewica", votes: 26909 },
      { party: "PSL", votes: 24996 },
      { party: "Konfederacja", votes: 22334 },
    ],
    totalSeats: 8,
  },
  {
    region: 13,
    results: [
      { party: "PiS", votes: 256847 },
      { party: "KO", votes: 197930 },
      { party: "Lewica", votes: 84457 },
      { party: "Konfederacja", votes: 51855 },
      { party: "PSL", votes: 47219 },
      { party: "Bezpartyjni", votes: 9214 },
      { party: "Prawica", votes: 1765 },
    ],
    totalSeats: 14,
  },
  {
    region: 14,
    results: [
      { party: "PiS", votes: 243583 },
      { party: "KO", votes: 51183 },
      { party: "PSL", votes: 27203 },
      { party: "Konfederacja", votes: 25747 },
      { party: "Lewica", votes: 22483 },
    ],
    totalSeats: 10,
  },
  {
    region: 15,
    results: [
      { party: "PiS", votes: 206845 },
      { party: "KO", votes: 48597 },
      { party: "PSL", votes: 46333 },
      { party: "Konfederacja", votes: 24695 },
      { party: "Lewica", votes: 20618 },
    ],
    totalSeats: 9,
  },
  {
    region: 16,
    results: [
      { party: "PiS", votes: 194371 },
      { party: "KO", votes: 62429 },
      { party: "PSL", votes: 56227 },
      { party: "Lewica", votes: 32448 },
      { party: "Konfederacja", votes: 19405 },
      { party: "Bezpartyjni", votes: 5681 },
    ],
    totalSeats: 10,
  },
  {
    region: 17,
    results: [
      { party: "PiS", votes: 193709 },
      { party: "KO", votes: 57449 },
      { party: "PSL", votes: 34185 },
      { party: "Lewica", votes: 24884 },
      { party: "Konfederacja", votes: 19724 },
      { party: "Bezpartyjni", votes: 2555 },
      { party: "Skuteczni", votes: 2503 },
    ],
    totalSeats: 9,
  },
  {
    region: 18,
    results: [
      { party: "PiS", votes: 270641 },
      { party: "KO", votes: 63124 },
      { party: "PSL", votes: 54085 },
      { party: "Konfederacja", votes: 29390 },
      { party: "Lewica", votes: 29235 },
      { party: "Bezpartyjni", votes: 5019 },
      { party: "Emeryci", votes: 1412 },
    ],
    totalSeats: 12,
  },
  {
    region: 19,
    results: [
      { party: "KO", votes: 581077 },
      { party: "PiS", votes: 379880 },
      { party: "Lewica", votes: 251434 },
      { party: "Konfederacja", votes: 103843 },
      { party: "PSL", votes: 65683 },
    ],
    totalSeats: 20,
  },
  {
    region: 20,
    results: [
      { party: "PiS", votes: 244823 },
      { party: "KO", votes: 171286 },
      { party: "Lewica", votes: 78348 },
      { party: "PSL", votes: 51484 },
      { party: "Konfederacja", votes: 39675 },
      { party: "Bezpartyjni", votes: 13111 },
    ],
    totalSeats: 12,
  },
  {
    region: 21,
    results: [
      { party: "PiS", votes: 152999 },
      { party: "KO", votes: 108570 },
      { party: "Lewica", votes: 47699 },
      { party: "PSL", votes: 41901 },
      { party: "Niemiecka", votes: 32094, disableThreshold: true },
      { party: "Konfederacja", votes: 23176 },
    ],
    totalSeats: 12,
  },
  {
    region: 22,
    results: [
      { party: "PiS", votes: 247488 },
      { party: "KO", votes: 62246 },
      { party: "PSL", votes: 30655 },
      { party: "Konfederacja", votes: 26615 },
      { party: "Lewica", votes: 23577 },
    ],
    totalSeats: 11,
  },
  {
    region: 23,
    results: [
      { party: "PiS", votes: 367268 },
      { party: "KO", votes: 84703 },
      { party: "Konfederacja", votes: 48600 },
      { party: "PSL", votes: 45868 },
      { party: "Lewica", votes: 38817 },
      { party: "Skuteczni", votes: 3530 },
    ],
    totalSeats: 15,
  },
  {
    region: 24,
    results: [
      { party: "PiS", votes: 270888 },
      { party: "KO", votes: 109527 },
      { party: "PSL", votes: 48566 },
      { party: "Lewica", votes: 47342 },
      { party: "Konfederacja", votes: 36207 },
      { party: "Bezpartyjni", votes: 4001 },
      { party: "Skuteczni", votes: 2272 },
      { party: "Emeryci", votes: 1775 },
    ],
    totalSeats: 14,
  },
  {
    region: 25,
    results: [
      { party: "KO", votes: 218484 },
      { party: "PiS", votes: 169753 },
      { party: "Lewica", votes: 71236 },
      { party: "Konfederacja", votes: 38153 },
      { party: "PSL", votes: 31203 },
    ],
    totalSeats: 12,
  },
  {
    region: 26,
    results: [
      { party: "PiS", votes: 211582 },
      { party: "KO", votes: 208208 },
      { party: "Lewica", votes: 72436 },
      { party: "PSL", votes: 46132 },
      { party: "Konfederacja", votes: 42364 },
    ],
    totalSeats: 14,
  },
  {
    region: 27,
    results: [
      { party: "PiS", votes: 182027 },
      { party: "KO", votes: 105876 },
      { party: "Lewica", votes: 44701 },
      { party: "Konfederacja", votes: 28900 },
      { party: "PSL", votes: 27752 },
    ],
    totalSeats: 9,
  },
  {
    region: 28,
    results: [
      { party: "PiS", votes: 125990 },
      { party: "KO", votes: 64374 },
      { party: "Lewica", votes: 44354 },
      { party: "PSL", votes: 24704 },
      { party: "Konfederacja", votes: 17278 },
      { party: "Bezpartyjni", votes: 7817 },
    ],
    totalSeats: 7,
  },
  {
    region: 29,
    results: [
      { party: "PiS", votes: 128579 },
      { party: "KO", votes: 111078 },
      { party: "Lewica", votes: 45583 },
      { party: "Konfederacja", votes: 26114 },
      { party: "PSL", votes: 20408 },
      { party: "Bezpartyjni", votes: 8885 },
    ],
    totalSeats: 9,
  },
  {
    region: 30,
    results: [
      { party: "PiS", votes: 161160 },
      { party: "KO", votes: 92493 },
      { party: "Lewica", votes: 32300 },
      { party: "Konfederacja", votes: 23939 },
      { party: "PSL", votes: 18816 },
      { party: "Bezpartyjni", votes: 5128 },
    ],
    totalSeats: 9,
  },
  {
    region: 31,
    results: [
      { party: "PiS", votes: 184030 },
      { party: "KO", votes: 174683 },
      { party: "Lewica", votes: 55992 },
      { party: "Konfederacja", votes: 34416 },
      { party: "PSL", votes: 20512 },
    ],
    totalSeats: 12,
  },
  {
    region: 32,
    results: [
      { party: "PiS", votes: 123553 },
      { party: "KO", votes: 99499 },
      { party: "Lewica", votes: 73466 },
      { party: "Konfederacja", votes: 21650 },
      { party: "PSL", votes: 16263 },
    ],
    totalSeats: 9,
  },
  {
    region: 33,
    results: [
      { party: "PiS", votes: 314455 },
      { party: "KO", votes: 94880 },
      { party: "Lewica", votes: 56699 },
      { party: "PSL", votes: 56289 },
      { party: "Konfederacja", votes: 33895 },
      { party: "Skuteczni", votes: 8273 },
      { party: "Bezpartyjni", votes: 5400 },
    ],
    totalSeats: 16,
  },
  {
    region: 34,
    results: [
      { party: "PiS", votes: 102478 },
      { party: "KO", votes: 71320 },
      { party: "Lewica", votes: 29196 },
      { party: "PSL", votes: 27319 },
      { party: "Konfederacja", votes: 14187 },
      { party: "Bezpartyjni", votes: 6319 },
    ],
    totalSeats: 8,
  },
  {
    region: 35,
    results: [
      { party: "PiS", votes: 128760 },
      { party: "KO", votes: 87780 },
      { party: "Lewica", votes: 45912 },
      { party: "PSL", votes: 43758 },
      { party: "Konfederacja", votes: 23134 },
      { party: "Skuteczni", votes: 2340 },
    ],
    totalSeats: 10,
  },
  {
    region: 36,
    results: [
      { party: "PiS", votes: 195053 },
      { party: "KO", votes: 113489 },
      { party: "Lewica", votes: 61674 },
      { party: "PSL", votes: 58759 },
      { party: "Konfederacja", votes: 30177 },
    ],
    totalSeats: 12,
  },
  {
    region: 37,
    results: [
      { party: "PiS", votes: 166965 },
      { party: "KO", votes: 72295 },
      { party: "Lewica", votes: 53090 },
      { party: "PSL", votes: 34620 },
      { party: "Konfederacja", votes: 23810 },
      { party: "Emeryci", votes: 2261 },
    ],
    totalSeats: 9,
  },
  {
    region: 38,
    results: [
      { party: "PiS", votes: 124392 },
      { party: "KO", votes: 106810 },
      { party: "PSL", votes: 48371 },
      { party: "Lewica", votes: 46355 },
      { party: "Konfederacja", votes: 23123 },
    ],
    totalSeats: 9,
  },
  {
    region: 39,
    results: [
      { party: "KO", votes: 233474 },
      { party: "PiS", votes: 130319 },
      { party: "Lewica", votes: 84835 },
      { party: "Konfederacja", votes: 34024 },
      { party: "PSL", votes: 31875 },
    ],
    totalSeats: 10,
  },
  {
    region: 40,
    results: [
      { party: "PiS", votes: 100078 },
      { party: "KO", votes: 87799 },
      { party: "Lewica", votes: 41943 },
      { party: "PSL", votes: 25632 },
      { party: "Konfederacja", votes: 16259 },
    ],
    totalSeats: 8,
  },
  {
    region: 41,
    results: [
      { party: "KO", votes: 168022 },
      { party: "PiS", votes: 165200 },
      { party: "Lewica", votes: 71756 },
      { party: "PSL", votes: 34807 },
      { party: "Konfederacja", votes: 30744 },
    ],
    totalSeats: 12,
  },
];

describe("dhondtByRegions", () => {
  it("returns empty list", () => {
    const result = dhondtByRegions({ resultsByRegion: [] });
    expect(result).toEqual([]);
  });

  it("calculates election results", () => {
    const result = sortBySeats(
      dhondtByRegions({
        resultsByRegion: elections2019,
        globalThreshold: 5,
      })
    );
    expect(result).toEqual([
      { party: "PiS", seats: 235 },
      { party: "KO", seats: 134 },
      { party: "Lewica", seats: 49 },
      { party: "PSL", seats: 30 },
      { party: "Konfederacja", seats: 11 },
      { party: "Niemiecka", seats: 1 },
      { party: "Bezpartyjni", seats: 0 },
      { party: "Emeryci", seats: 0 },
      { party: "Prawica", seats: 0 },
      { party: "Skuteczni", seats: 0 },
    ]);
  });
});
