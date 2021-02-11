import { accumulateResults } from "./accumulateResults";

describe("accumulateResults", () => {
  it("returns empty list", () => {
    const result = accumulateResults([]);
    expect(result).toEqual([]);
  });

  it("accumulates results", () => {
    const result = accumulateResults([
      { party: "A", votes: 80 },
      { party: "B", votes: 80 },
      { party: "A", votes: 80 },
      { party: "C", votes: 10 },
      { party: "C", votes: 1 },
    ]);
    expect(result).toEqual([
      { party: "A", votes: 160 },
      { party: "B", votes: 80 },
      { party: "C", votes: 11 },
    ]);
  });

  it("does not modify input", () => {
    const init = [
      { party: "A", votes: 80 },
      { party: "B", votes: 80 },
      { party: "A", votes: 80 },
      { party: "C", votes: 10 },
      { party: "C", votes: 1 },
    ];
    const result = accumulateResults(init);
    expect(init).toEqual(init);
    expect(result).toEqual([
      { party: "A", votes: 160 },
      { party: "B", votes: 80 },
      { party: "C", votes: 11 },
    ]);
  });
});
