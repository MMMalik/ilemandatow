import { parseParties } from "./parseParties";

export type ChartView = "parliament" | "bars" | "pie";

export type ParsedParties = ReturnType<typeof parseParties>;
