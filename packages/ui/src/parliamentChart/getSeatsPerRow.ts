/**
 * Gets number of seats per row on the chart.
 *
 * Note: This method only calculates the total number of seats per row. It doesn't calculate seats distribution among parties.
 *
 * @param innerR chart inner radius
 * @param seatR seat radius
 * @param totalSeats total number of seats
 */
export const getSeatsPerRow = (
  innerR: number,
  seatR: number,
  totalSeats: number,
  dist: number
) => {
  const result: number[] = [];
  let seatsLeft = totalSeats;

  // Runs as long as there are seats to add
  while (seatsLeft > 0) {
    const currentLength = Math.PI * (dist * seatR * result.length + innerR);
    const numOfSeats = Math.round((currentLength + seatR) / (dist * seatR));

    // If number of seats to add is higher than number of seats in current row, then distribute seats among existing rows rather than adding a new row.
    if (numOfSeats > seatsLeft) {
      let rowIndex = result.length - 1;
      while (seatsLeft > 0) {
        result[rowIndex] = result[rowIndex] + 1;
        seatsLeft = seatsLeft - 1;
        rowIndex = rowIndex - 1 < 0 ? result.length - 1 : rowIndex - 1;
      }
    } else {
      result.push(numOfSeats);
    }

    seatsLeft = seatsLeft - numOfSeats;
  }

  return result;
};
