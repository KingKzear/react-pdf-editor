import { style } from "typestyle";
import { Colors } from "../../../Colors";

export const Main = style({
  $debugName: "ColumnsMain",
  display: "flex",
  flexFlow: "row nowrap",
  borderBottom: `1px solid ${Colors.Ashes}77`,
  width: "100%"
});

export const ColumnTitle = style ({
  $debugName: "ColumnTitle",
  fontSize: 12,
  margin: 0
})