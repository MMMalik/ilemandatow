import * as React from "react";
import DefinitionItem from "./DefinitionItem";
import DefinitionListCmp from "./DefinitionList";

export const DefinitionList = () => {
  return (
    <DefinitionListCmp>
      <DefinitionItem label="Item 1" value="Value of item 1" />
      <DefinitionItem
        label="Item 1"
        value="Value of item 2"
        linkTo="https://onet.pl"
        linkExternal={true}
      />
    </DefinitionListCmp>
  );
};
