import * as React from "react";
import { MenuItem } from "../menu";
import TableCmp from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableCellEditable from "./TableCellEditable";
import TableContextMenu from "./TableContextMenu";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";

export const Table = (args: any) => {
  return (
    <TableCmp {...args}>
      <TableHead>
        <TableHeadCell>Col 1</TableHeadCell>
        <TableHeadCell>Col 2</TableHeadCell>
        <TableHeadCell>Col 3</TableHeadCell>
      </TableHead>
      <TableBody>
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <TableRow key={i}>
              <TableCell>{`Row ${i + 1}, Col 1`}</TableCell>
              <TableCell>{`Row ${i + 1}, Col 2`}</TableCell>
              <TableCell>{`Row ${i + 1}, Col 3`}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </TableCmp>
  );
};

export const TableEditable = (args: any) => {
  return (
    <TableCmp {...args}>
      <TableHead>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Value</TableHeadCell>
      </TableHead>
      <TableBody>
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <TableRow key={i}>
              <TableCellEditable
                name={`name_${i}`}
                value={`Name ${i}`}
                placeholder="Provide name"
              />
              <TableCellEditable
                name={`value_${i}`}
                value=""
                placeholder="Provide value"
              />
            </TableRow>
          );
        })}
      </TableBody>
    </TableCmp>
  );
};

export const TableCtxMenu = (args: any) => {
  return (
    <TableCmp {...args}>
      <TableHead>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Value</TableHeadCell>
        <TableHeadCell />
      </TableHead>
      <TableBody>
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <TableRow key={i}>
              <TableCell>{`Row ${i + 1}, Col 1`}</TableCell>
              <TableCell>{`Row ${i + 1}, Col 2`}</TableCell>
              <TableCell>{`Row ${i + 1}, Col 3`}</TableCell>
              <TableContextMenu>
                <MenuItem icon="plus">{"Item 1"}</MenuItem>
                <MenuItem icon="minus">{"Item 2"}</MenuItem>
              </TableContextMenu>
            </TableRow>
          );
        })}
      </TableBody>
    </TableCmp>
  );
};
