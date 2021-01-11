import * as React from "react";
import { Card } from "@ilemandatow/ui";
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
    <Card
      title={polledBy}
      titleRightSide={format(new Date(publishedAt))}
      footer={<PollCardFooter pollId={id} source={source} />}
    >
      <PollCardStats results={results} />
    </Card>
  );
};

export default PollCard;
