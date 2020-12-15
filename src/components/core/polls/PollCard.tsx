import * as React from "react";
import { useDateFormat } from "@date";
import { PollInfoFragment } from "@graphql/types";
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
      titleRightSide={format(new Date(publishedAt), "dd/MM/yyyy")}
      footer={<PollCardFooter pollId={id} source={source} />}
    >
      <PollCardStats results={results} />
    </Card>
  );
};

export default PollCard;
