import { PieChartPie } from "./types";

export const sumPies = (pies: PieChartPie[], div = 1) => {
  return pies.reduce((acc, n) => acc + n.value / div, 0);
};
