export const getCoords = (value: number, startX = 0, startY = -1) => {
  const rads = 2 * Math.PI * (value / 100);
  const x = startX * Math.cos(rads) - startY * Math.sin(rads);
  const y = startX * Math.sin(rads) + startY * Math.cos(rads);
  return [x, y];
};
