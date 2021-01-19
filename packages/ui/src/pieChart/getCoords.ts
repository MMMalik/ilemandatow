import { rotateCoords } from "../chart";

export const getCoords = (startX: number, startY: number, value: number) => {
  return rotateCoords(startX, startY, 2 * Math.PI * (value / 100));
};
