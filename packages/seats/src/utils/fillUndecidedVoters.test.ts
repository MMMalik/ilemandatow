import { fillUndecidedVoters } from "./fillUndecidedVoters";

describe("fillUndecidedVoters", () => {
  it("returns results as they are", () => {
    const result = fillUndecidedVoters([
      { party: "A", votes: 80 },
      { party: "B", votes: 10 },
      { party: "C", votes: 5 },
      { party: "D", votes: 5 },
    ]);
    expect(result).toEqual([
      { party: "A", votes: 80 },
      { party: "B", votes: 10 },
      { party: "C", votes: 5 },
      { party: "D", votes: 5 },
    ]);
  });

  it("adds placeholder party", () => {
    const result = fillUndecidedVoters([
      { party: "A", votes: 80 },
      { party: "B", votes: 10 },
      { party: "C", votes: 5 },
    ]);
    expect(result).toEqual([
      { party: "A", votes: 80 },
      { party: "B", votes: 10 },
      { party: "C", votes: 5 },
      { party: "___placeholder", votes: 5 },
    ]);
  });
});
