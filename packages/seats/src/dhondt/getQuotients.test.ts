import { getQuotients } from "./getQuotients";

describe("getQuotients", () => {
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
