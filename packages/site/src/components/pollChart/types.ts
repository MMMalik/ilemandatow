import { parseParties } from "./parseParties";

export type ChartView = "parliament" | "bar" | "pie";

export type ParsedParties = ReturnType<typeof parseParties>;
