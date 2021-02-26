import * as React from "react";
import MarkdownCmp from "./Markdown";

export const Markdown = () => {
  return (
    <MarkdownCmp>
      {`
### Title 

Here is some introduction. The text is broken into multiple lines. The text is broken into multiple lines. The text is broken into multiple lines. The text is broken into multiple lines. The text is broken into multiple lines. The text is broken into multiple lines. The text is broken into multiple lines.

#### Subtitle 

Here is a subtitle with a [link](https://www.ilemandatow.pl/pl).
`}
    </MarkdownCmp>
  );
};
