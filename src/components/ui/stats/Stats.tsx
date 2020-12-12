import * as React from "react";
import { useTheme } from "@theme";

interface Stat {
  label: string;
  value: string;
}

interface Props {
  stats: Stat[];
}

const Stats: React.FC<Props> = ({ stats }) => {
  const { theme } = useTheme();
  const { textMuted } = theme;

  return (
    <div className="cf">
      {stats.map(({ label, value }) => {
        return (
          <div key={value} className="fl w-third mb3">
            <div className={`${textMuted} mv1`}>{label}</div>
            <div className="b">{value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
