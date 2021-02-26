import * as React from "react";
import {
  Grid,
  GridItem,
  Markdown,
  TableOfContents,
  TableOfContentsItem,
  TableOfContentsSection,
} from "@ilemandatow/ui";
import { DataType } from "@ilemandatow/client";
import { useRoutes } from "../../routes";

interface Props {
  currentDoc?: DataType.DocFragment;
  sections: DataType.DocSection[];
}

const Docs: React.FC<Props> = ({ currentDoc, sections }) => {
  const routes = useRoutes();

  return (
    <Grid>
      <GridItem className="w-100 w-20-l">
        <TableOfContents>
          {sections.map(({ id, title, docs }) => {
            return (
              <TableOfContentsSection title={title ?? ""} key={id}>
                {docs.map(({ id, slug, title }) => {
                  return (
                    <TableOfContentsItem
                      linkTo={routes.routes.docs.link(slug ?? "")}
                      active={currentDoc?.id === id}
                      key={id}
                    >
                      {title}
                    </TableOfContentsItem>
                  );
                })}
              </TableOfContentsSection>
            );
          })}
        </TableOfContents>
      </GridItem>
      <GridItem className="w-100 w-80-l">
        <div className="">
          <Markdown>{currentDoc?.body}</Markdown>
        </div>
      </GridItem>
    </Grid>
  );
};

export default Docs;
