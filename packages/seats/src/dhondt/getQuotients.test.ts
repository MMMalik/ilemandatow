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

  it("calculates quotients - no threshold", () => {
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
        {
          party: "D",
          votes: 60,
        },
      ],
      totalSeats: 100,
    });
    expect(result.filter((r) => r.party === "A").length).toEqual(47);
    expect(result.filter((r) => r.party === "B").length).toEqual(19);
    expect(result.filter((r) => r.party === "C").length).toEqual(31);
    expect(result.filter((r) => r.party === "D").length).toEqual(3);
  });

  it("calculates quotients - threshold", () => {
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
        {
          party: "D",
          votes: 60,
        },
      ],
      threshold: 5,
      totalSeats: 100,
    });
    expect(result.filter((r) => r.party === "A").length).toEqual(48);
    expect(result.filter((r) => r.party === "B").length).toEqual(20);
    expect(result.filter((r) => r.party === "C").length).toEqual(32);
    expect(result.filter((r) => r.party === "D").length).toEqual(0);
  });
});
