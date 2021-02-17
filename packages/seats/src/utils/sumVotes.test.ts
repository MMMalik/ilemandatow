import { sumVotes } from "./sumVotes";

describe("sumVotes", () => {
  it("sums votes", () => {
    const result = sumVotes([
      { party: "A", votes: 80 },
      { party: "B", votes: 10 },
      { party: "C", votes: 5 },
    ]);
    expect(result).toEqual(95);
  });
});
