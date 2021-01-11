import { dhondt } from "./dhondt";

describe("dhondt", () => {
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
      { party: "B", seats: 1 },
      { party: "C", seats: 3 },
    ]);
  });

  it("calculates seats - threshold", () => {
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
        {
          party: "D",
          votes: 60,
        },
      ],
      totalSeats: 100,
    });
    expect(result).toEqual([
      { party: "A", seats: 47 },
      { party: "B", seats: 19 },
      { party: "C", seats: 31 },
      { party: "D", seats: 3 },
    ]);
  });

  it("calculates seats - threshold", () => {
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
        {
          party: "D",
          votes: 60,
        },
      ],
      threshold: 5,
      totalSeats: 100,
    });
    expect(result).toEqual([
      { party: "A", seats: 48 },
      { party: "B", seats: 20 },
      { party: "C", seats: 32 },
      { party: "D", seats: 0 },
    ]);
  });
});
