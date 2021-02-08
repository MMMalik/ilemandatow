import { sortBySeats } from "./sortBySeats";

describe("sortBySeats", () => {
  it("does not modify input", () => {
    const init = [
      { party: "A", seats: 4 },
      { party: "B", seats: 1 },
      { party: "C", seats: 3 },
    ];
    const result = sortBySeats(init);
    expect(init).toEqual([
      { party: "A", seats: 4 },
      { party: "B", seats: 1 },
      { party: "C", seats: 3 },
    ]);
    expect(result).toEqual([
      { party: "A", seats: 4 },
      { party: "C", seats: 3 },
      { party: "B", seats: 1 },
    ]);
  });

  it("sorts in descending order", () => {
    const result = sortBySeats(
      [
        { party: "A", seats: 4 },
        { party: "B", seats: 1 },
        { party: "C", seats: 3 },
      ],
      "desc"
    );
    expect(result).toEqual([
      { party: "A", seats: 4 },
      { party: "C", seats: 3 },
      { party: "B", seats: 1 },
    ]);
  });

  it("solve ties alphabetically descending", () => {
    const result = sortBySeats(
      [
        { party: "B", seats: 4 },
        { party: "A", seats: 4 },
        { party: "C", seats: 3 },
      ],
      "desc"
    );
    expect(result).toEqual([
      { party: "A", seats: 4 },
      { party: "B", seats: 4 },
      { party: "C", seats: 3 },
    ]);
  });

  it("sorts in descending order - default", () => {
    const result = sortBySeats([
      { party: "A", seats: 4 },
      { party: "B", seats: 1 },
      { party: "C", seats: 3 },
    ]);
    expect(result).toEqual([
      { party: "A", seats: 4 },
      { party: "C", seats: 3 },
      { party: "B", seats: 1 },
    ]);
  });

  it("sorts in ascending order", () => {
    const result = sortBySeats(
      [
        { party: "A", seats: 4 },
        { party: "B", seats: 1 },
        { party: "C", seats: 3 },
      ],
      "asc"
    );
    expect(result).toEqual([
      { party: "B", seats: 1 },
      { party: "C", seats: 3 },
      { party: "A", seats: 4 },
    ]);
  });
});
