import * as React from "react";
import { DataType } from "@ilemandatow/client";
import { DataCard } from "@ilemandatow/ui";
import { useDateFormat } from "../../i18n";
import PollCardStats from "./PollCardStats";
import PollCardFooter from "./PollCardFooter";

interface Props {
  id: string;
  polledBy: string;
  publishedBy: string;
  publishedAt: string;
  source: string;
  results: DataType.PollResultFragment[];
}

const PollCard: React.FC<Props> = ({
  id,
  polledBy,
  publishedAt,
  publishedBy,
  source,
  results,
}) => {
  const format = useDateFormat();

  return (
    <DataCard
      title={polledBy}
      subTitle={publishedBy}
      titleRightSide={format(new Date(publishedAt))}
      footer={<PollCardFooter pollId={id} source={source} />}
    >
      <PollCardStats results={results} />
    </DataCard>
  );
};

export default PollCard;
