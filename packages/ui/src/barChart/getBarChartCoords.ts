import { ChartValue } from "../chart";
import { BarChartOpts } from "./types";

const defaultOpts: Required<BarChartOpts> = {
  barMargin: 0,
};

const maxX = 1000;
const maxY = 500;

export const getBarChartCoords = (bars: ChartValue[], opts: BarChartOpts) => {
  const { barMargin } = { ...defaultOpts, ...opts };

  const barWidth = maxX / bars.length;
  const highestBar = bars.reduce(
    (acc, b) => (b.value > acc.value ? b : acc),
    bars[0]
  );

  const margin = barMargin * barWidth;

  const parsedBars = bars.map(({ value, id, fill }, i) => {
    const x = i * barWidth + margin;
    const height = (value / highestBar.value) * maxY;

    return {
      id,
      fill,
      x,
      y: maxY - margin - height,
      width: barWidth - 2 * margin,
      height,
    };
  });

  return { parsedBars, maxX, maxY };
};
