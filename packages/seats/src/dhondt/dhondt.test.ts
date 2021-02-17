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
      { party: "A", seats: 4, init: { party: "A", votes: 720 } },
      { party: "B", seats: 1, init: { party: "B", votes: 300 } },
      { party: "C", seats: 3, init: { party: "C", votes: 480 } },
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
      { party: "A", seats: 47, init: { party: "A", votes: 720 } },
      { party: "B", seats: 19, init: { party: "B", votes: 300 } },
      { party: "C", seats: 31, init: { party: "C", votes: 480 } },
      { party: "D", seats: 3, init: { party: "D", votes: 60 } },
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
      { party: "A", seats: 48, init: { party: "A", votes: 720 } },
      { party: "B", seats: 20, init: { party: "B", votes: 300 } },
      { party: "C", seats: 32, init: { party: "C", votes: 480 } },
      { party: "D", seats: 0, init: { party: "D", votes: 60 } },
    ]);
  });

  it("calculates seats - fills undecided voters", () => {
    const result = dhondt({
      results: [
        {
          party: "A",
          votes: 80,
        },
        {
          party: "B",
          votes: 10,
        },
        {
          party: "C",
          votes: 5,
        },
      ],
      threshold: 5,
      totalSeats: 460,
      fillMissingPerc: true,
    });
    expect(result).toEqual([
      { party: "A", seats: 388, init: { party: "A", votes: 80 } },
      { party: "B", seats: 48, init: { party: "B", votes: 10 } },
      { party: "C", seats: 24, init: { party: "C", votes: 5 } },
    ]);
  });
});
