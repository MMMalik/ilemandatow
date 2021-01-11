import { groupQuotients } from "./groupQuotients";

describe("groupQuotients", () => {
  it("groups quotients", () => {
    const result = groupQuotients([
      {
        party: "A",
        quotient: 720,
      },
      {
        party: "C",
        quotient: 480,
      },
      {
        party: "A",
        quotient: 360,
      },
      {
        party: "B",
        quotient: 300,
      },
      {
        party: "A",
        quotient: 240,
      },
      {
        party: "C",
        quotient: 240,
      },
      {
        party: "A",
        quotient: 180,
      },
      {
        party: "C",
        quotient: 160,
      },
    ]);
    expect(result).toEqual({
      A: {
        seats: 4,
      },
      B: {
        seats: 1,
      },
      C: {
        seats: 3,
      },
    });
  });
});
