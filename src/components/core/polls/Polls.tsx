import * as React from "react";
import { useTranslation } from "react-i18next";
import Card from "@components/ui/card";
import Stats from "@components/ui/stats";
import { PollInfoFragment } from "@graphql/types";
import { routes } from "@routes";

export type PollsView = "list" | "grid";

interface Props {
  polls: PollInfoFragment[];
  pollsView: PollsView;
}

const Polls: React.FC<Props> = ({ pollsView, polls }) => {
  const { t } = useTranslation();

  return (
    <div className="cf">
      {polls.map(({ id, polledBy, publishedAt, results }) => {
        return (
          <div key={id} className={`fl w-100 w-50-m w-third-l pa3`}>
            <Card
              title={polledBy ?? ""}
              titleRightSide={new Date(publishedAt ?? 0).toLocaleString()}
              linkLabel={t("seeDetails")}
              linkTo={routes.home.link()}
            >
              <Stats
                stats={
                  results?.map((result) => ({
                    value: String(result?.result ?? 0),
                    label: result?.party?.name ?? "",
                  })) ?? []
                }
              />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Polls;
