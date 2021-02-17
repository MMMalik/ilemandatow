import { getDhondtResults } from "./getDhondtResults";

describe("getDhondtResults", () => {
  it("returns results", () => {
    const results = getDhondtResults(
      [
        { id: "1", result: 50 },
        { id: "2", result: 50 },
      ],
      {
        id: "1",
        threshold: 5,
        totalSeats: 460,
        districts: [{ id: "1", totalSeats: 460 }],
      }
    );
    expect(results).toEqual([
      { party: "1", seats: 230, init: { party: "1", votes: 50 } },
      { party: "2", seats: 230, init: { party: "2", votes: 50 } },
    ]);
  });

  it("returns results - fill missing %", () => {
    const results = getDhondtResults(
      [
        { id: "1", result: 50 },
        { id: "2", result: 30 },
        { id: "3", result: 4.9 },
      ],
      {
        id: "1",
        threshold: 5,
        totalSeats: 460,
        districts: [{ id: "1", totalSeats: 460 }],
      }
    );
    expect(results).toEqual([
      { party: "1", seats: 288, init: { party: "1", votes: 50 } },
      { party: "2", seats: 172, init: { party: "2", votes: 30 } },
      { party: "3", seats: 0, init: { party: "3", votes: 4.9 } },
    ]);
  });

  it("returns empty list - missing electoral code", () => {
    const results = getDhondtResults([
      { id: "1", result: 50 },
      { id: "2", result: 50 },
    ]);
    expect(results).toEqual([]);
  });
});
