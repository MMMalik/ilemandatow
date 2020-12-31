import { getSeatsPerRow } from "./getSeatsPerRow";

describe("getSeatsPerRow", () => {
  it("calculates number of seats per row", () => {
    const result = getSeatsPerRow(20, 5, 100);
    expect(result.reduce((acc, v) => acc + v, 0)).toEqual(100);
    expect(result).toEqual([4, 8, 11, 14, 18, 21, 24]);
  });
});
