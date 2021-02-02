export const rotateCoords = (x: number, y: number, angleInRads: number) => {
  return [
    x * Math.cos(angleInRads) - y * Math.sin(angleInRads),
    x * Math.sin(angleInRads) + y * Math.cos(angleInRads),
  ];
};
