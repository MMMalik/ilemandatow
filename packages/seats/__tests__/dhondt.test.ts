import { dhondt } from "../src/dhondt/dhondt";
import { getQuotients } from "../src/dhondt/getQuotients";
import { groupQuotients } from "../src/dhondt/groupQuotients";

describe("dhondt", () => {
  describe("dhondt - getQuotients", () => {
    it("returns empty list", () => {
      const result = getQuotients({
        results: [],
        totalSeats: 100,
      });
      expect(result).toEqual([]);
    });

    it("calculates quotients", () => {
      const result = getQuotients({
        results: [
          {
            party: "A",
            votes: 720,
          },
          {
            party: "B",
            votes: 300,
          },
          {
            party: "C",
            votes: 480,
          },
        ],
        totalSeats: 8,
      });
      expect(result).toEqual([
        {
          party: "A",
          quotient: 720,
        },
        {
          party: "C",
          quotient: 480,
        },
        {
          party: "A",
          quotient: 360,
        },
        {
          party: "B",
          quotient: 300,
        },
        {
          party: "C",
          quotient: 240,
        },
        {
          party: "A",
          quotient: 240,
        },
        {
          party: "A",
          quotient: 180,
        },
        {
          party: "C",
          quotient: 160,
        },
      ]);
    });
  });

  describe("dhondt - groupQuotients", () => {
    it("groups quotients", () => {
      const result = groupQuotients([
        {
          party: "A",
          quotient: 720,
        },
        {
          party: "C",
          quotient: 480,
        },
        {
          party: "A",
          quotient: 360,
        },
        {
          party: "B",
          quotient: 300,
        },
        {
          party: "A",
          quotient: 240,
        },
        {
          party: "C",
          quotient: 240,
        },
        {
          party: "A",
          quotient: 180,
        },
        {
          party: "C",
          quotient: 160,
        },
      ]);
      expect(result).toEqual({
        A: {
          seats: 4,
        },
        B: {
          seats: 1,
        },
        C: {
          seats: 3,
        },
      });
    });
  });

  describe("dhondt - main", () => {
    it("returns empty list", () => {
      const result = dhondt({
        results: [],
        totalSeats: 100,
      });
      expect(result).toEqual([]);
    });

    it("calculates seats", () => {
      const result = dhondt({
        results: [
          {
            party: "A",
            votes: 720,
          },
          {
            party: "B",
            votes: 300,
          },
          {
            party: "C",
            votes: 480,
          },
        ],
        totalSeats: 8,
      });
      expect(result).toEqual([
        { party: "A", seats: 4 },
        { party: "C", seats: 3 },
        { party: "B", seats: 1 },
      ]);
    });
  });
});
