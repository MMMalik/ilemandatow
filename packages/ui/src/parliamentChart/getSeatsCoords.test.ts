import { getSeatsCoords } from "./getSeatsCoords";

describe("getSeatsCoords", () => {
  it("distributes seats evenly", () => {
    const { groupedParties } = getSeatsCoords({
      parties: [
        { id: "P1", label: "Party 1", fill: "blue", seats: 150 },
        { id: "P2", label: "Party 2", fill: "red", seats: 50 },
      ],
      totalSeats: 100,
    });
    expect(groupedParties.length).toEqual(2);
  });
});
