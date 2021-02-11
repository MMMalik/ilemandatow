import { applyThreshold } from "./applyThreshold";

describe("applyThreshold", () => {
  it("returns empty list", () => {
    const result = applyThreshold([], 5);
    expect(result).toEqual([]);
  });

  it("returns all results in case of missing threshold", () => {
    const result = applyThreshold([
      { party: "A", votes: 80 },
      { party: "B", votes: 80 },
      { party: "C", votes: 80 },
      { party: "D", votes: 10 },
    ]);
    expect(result).toEqual([
      { party: "A", votes: 80 },
      { party: "B", votes: 80 },
      { party: "C", votes: 80 },
      { party: "D", votes: 10 },
    ]);
  });

  it("returns all results in case of missing threshold", () => {
    const result = applyThreshold(
      [
        { party: "A", votes: 80 },
        { party: "B", votes: 80 },
        { party: "C", votes: 80 },
        { party: "D", votes: 10 },
      ],
      5
    );
    expect(result).toEqual([
      { party: "A", votes: 80 },
      { party: "B", votes: 80 },
      { party: "C", votes: 80 },
    ]);
  });

  it("disables threshold if flag is provided", () => {
    const result = applyThreshold(
      [
        { party: "A", votes: 80 },
        { party: "B", votes: 80 },
        { party: "C", votes: 80 },
        { party: "D", votes: 10, disableThreshold: true },
      ],
      5
    );
    expect(result).toEqual([
      { party: "A", votes: 80 },
      { party: "B", votes: 80 },
      { party: "C", votes: 80 },
      { party: "D", votes: 10, disableThreshold: true },
    ]);
  });
});
