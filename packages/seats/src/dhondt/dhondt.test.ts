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
      { party: "C", seats: 3 },
      { party: "B", seats: 1 },
    ]);
  });
});
