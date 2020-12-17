import * as React from "react";
import { useDateFormat } from "@i18n";
import { PollInfoFragment } from "@utils/types";
import Card from "@components/ui/card";
import PollCardStats from "./PollCardStats";
import PollCardFooter from "./PollCardFooter";

interface Props {
  pollInfo: PollInfoFragment;
}

const PollCard: React.FC<Props> = ({ pollInfo }) => {
  const format = useDateFormat();
  const { id, polledBy, publishedAt, source, results } = pollInfo;

  return (
    <Card
      title={polledBy?.abbr ?? ""}
      titleRightSide={format(new Date(publishedAt))}
      footer={<PollCardFooter pollId={id} source={source} />}
    >
      <PollCardStats results={results} />
    </Card>
  );
};

export default PollCard;
