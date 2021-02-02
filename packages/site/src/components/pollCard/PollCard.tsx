import * as React from "react";
import { DataCard } from "@ilemandatow/ui";
import { useDateFormat } from "../../i18n";
import { PollResultFragment } from "../../types";
import PollCardStats from "./PollCardStats";
import PollCardFooter from "./PollCardFooter";

interface Props {
  id: string;
  polledBy: string;
  publishedAt: string;
  source: string;
  results: PollResultFragment[];
}

const PollCard: React.FC<Props> = ({
  id,
  polledBy,
  publishedAt,
  source,
  results,
}) => {
  const format = useDateFormat();

  return (
    <DataCard
      title={polledBy}
      titleRightSide={format(new Date(publishedAt))}
      footer={<PollCardFooter pollId={id} source={source} />}
    >
      <PollCardStats results={results} />
    </DataCard>
  );
};

export default PollCard;
