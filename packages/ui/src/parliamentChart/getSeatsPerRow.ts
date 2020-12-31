/**
 * Gets number of seats per row.
 *
 * @param innerR value of inner radius
 * @param seatR value of seat radius
 * @param totalSeats total number of seats
 */
export const getSeatsPerRow = (
  innerR: number,
  seatR: number,
  totalSeats: number
) => {
  const result: number[] = [];
  let seatsLeft = totalSeats;

  // Run as long as there are seats to add
  while (seatsLeft > 0) {
    const currentLength = Math.PI * (3 * seatR * result.length + innerR);
    const numOfSeats = Math.floor((currentLength + seatR) / (3 * seatR));

    // If number of seats to add is higher than number of seats in current row, then distribute seats among existing rows.
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
