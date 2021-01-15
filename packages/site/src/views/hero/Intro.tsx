import * as React from "react";
import { FlagPl } from "../../components";
import { useTranslation } from "../../i18n";

const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <div className="lh-copy w-40 tc">
        <div className="f3 b mt2 mb3">
          <span>{"ilemandatow.pl"}</span>
          <span className="dib w2 mh2">
            <FlagPl />
          </span>
        </div>
        <div className="f4 mv3">
          <span>{t("heroTitle")}</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
