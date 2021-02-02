import * as React from "react";
import { DefinitionItem, DefinitionItemProps } from "@ilemandatow/ui";

const PollDefinitionItem: React.FC<DefinitionItemProps> = (props) => {
  return <DefinitionItem {...props} className="w-100 w-50-m w-auto-l mr3-l" />;
};

export default PollDefinitionItem;
