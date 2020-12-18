import * as React from "react";
import Icon from "../../ui/icon";
import { useTheme } from "../../../theme";

interface Props {
  onListViewClick: () => void;
  onGridViewClick: () => void;
}

const PollsToolbar: React.FC<Props> = ({
  onGridViewClick,
  onListViewClick,
}) => {
  const { theme } = useTheme();
  const { primary } = theme;

  return (
    <div className="flex items-center justify-between pa3">
      <div className={primary}>
        <span>
          <Icon icon="th" onClick={onGridViewClick} />
        </span>
        <span className="mh3">
          <Icon icon="list" onClick={onListViewClick} />
        </span>
      </div>
      <div className="flex items-center w-50 w-30-m w-20-l">
        <div className="w-100"></div>
      </div>
    </div>
  );
};

export default PollsToolbar;
