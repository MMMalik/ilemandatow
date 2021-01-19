import { ChartValue } from "../chart";

export const sumPies = (pies: ChartValue[], div = 1) => {
  return pies.reduce((acc, n) => acc + n.value / div, 0);
};
