import * as React from "react";
import Card from "@components/ui/card";
import Stats from "@components/ui/stats";

export type PollsView = "list" | "grid";

interface Props {
  pollsView: PollsView;
}

const Polls: React.FC<Props> = ({ pollsView }) => {
  return (
    <div className="cf">
      {Array.from({ length: 100 }).map((_, i) => {
        return (
          <div key={i} className={`fl w-100 w-50-m w-third-l pa3`}>
            <Card
              title="Title"
              titleRightSide="10/12/2020"
              linkLabel="See Details"
              linkTo="/"
            >
              <Stats
                stats={[
                  { label: "Label1", value: "Value1" },
                  { label: "Label2", value: "Value2" },
                  { label: "Label3", value: "Value3" },
                  { label: "Label4", value: "Value4" },
                  { label: "Label5", value: "Value5" },
                ]}
              />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Polls;
