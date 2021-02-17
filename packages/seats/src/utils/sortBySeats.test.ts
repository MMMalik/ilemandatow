import { sortBySeats } from "./sortBySeats";

describe("sortBySeats", () => {
  it("does not modify input", () => {
    const init = [
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
      { party: "B", seats: 1, init: { party: "B", votes: 50 } },
      { party: "C", seats: 3, init: { party: "C", votes: 20 } },
    ];
    const result = sortBySeats(init);
    expect(init).toEqual([
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
      { party: "B", seats: 1, init: { party: "B", votes: 50 } },
      { party: "C", seats: 3, init: { party: "C", votes: 20 } },
    ]);
    expect(result).toEqual([
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
      { party: "C", seats: 3, init: { party: "C", votes: 20 } },
      { party: "B", seats: 1, init: { party: "B", votes: 50 } },
    ]);
  });

  it("sorts - desc by default", () => {
    const result = sortBySeats([
      { party: "B", seats: 1, init: { party: "B", votes: 50 } },
      { party: "C", seats: 3, init: { party: "C", votes: 20 } },
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
    ]);
    expect(result).toEqual([
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
      { party: "C", seats: 3, init: { party: "C", votes: 20 } },
      { party: "B", seats: 1, init: { party: "B", votes: 50 } },
    ]);
  });

  it("sorts - desc - tie by votes", () => {
    const result = sortBySeats([
      { party: "B", seats: 1, init: { party: "B", votes: 49 } },
      { party: "C", seats: 1, init: { party: "C", votes: 50 } },
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
    ]);
    expect(result).toEqual([
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
      { party: "C", seats: 1, init: { party: "C", votes: 50 } },
      { party: "B", seats: 1, init: { party: "B", votes: 49 } },
    ]);
  });

  it("sorts - desc - tie by name", () => {
    const result = sortBySeats([
      { party: "B", seats: 1, init: { party: "B", votes: 50 } },
      { party: "C", seats: 1, init: { party: "C", votes: 50 } },
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
    ]);
    expect(result).toEqual([
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
      { party: "B", seats: 1, init: { party: "B", votes: 50 } },
      { party: "C", seats: 1, init: { party: "C", votes: 50 } },
    ]);
  });

  it("sorts - asc", () => {
    const result = sortBySeats(
      [
        { party: "B", seats: 1, init: { party: "B", votes: 50 } },
        { party: "A", seats: 4, init: { party: "A", votes: 100 } },
        { party: "C", seats: 3, init: { party: "C", votes: 20 } },
      ],
      "asc"
    );
    expect(result).toEqual([
      { party: "B", seats: 1, init: { party: "B", votes: 50 } },
      { party: "C", seats: 3, init: { party: "C", votes: 20 } },
      { party: "A", seats: 4, init: { party: "A", votes: 100 } },
    ]);
  });
});
