import * as React from "react";
import SearchDialogCmp, { SearchDialogProps } from "./SearchDialog";
import SearchItem from "./SearchItem";

export const SearchDialog = (args: SearchDialogProps) => {
  const [phrase, setPhrase] = React.useState<string | undefined>();

  return (
    <SearchDialogCmp {...args} onSearch={setPhrase}>
      {["Monkey", "Monkey2", "Giraffe", "Dog", "Doggo", "Doggo :-)", "Cat"]
        .filter((title) =>
          phrase ? title.toLowerCase().includes(phrase.toLowerCase()) : false
        )
        .map((title, i) => {
          return (
            <SearchItem
              key={i}
              title={title}
              subTitle="Foo"
              titleRightSide="01.01.2021"
              highlight={phrase}
              linkTo="https://onet.pl"
              description={Array.from({ length: 15 })
                .map(() => `${title} Foo`)
                .join(" ")}
            />
          );
        })}
    </SearchDialogCmp>
  );
};
