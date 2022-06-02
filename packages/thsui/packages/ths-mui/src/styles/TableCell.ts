import { TableCellClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TableCellStyleOverrides: Partial<
  OverridesStyleRules<keyof TableCellClasses, "MuiTableCell", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `variant="head"` or `context.table.head`. */
  head: {},
  /** Styles applied to the root element if `variant="body"` or `context.table.body`. */
  body: {},
  /** Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
  footer: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: {},
  /** Styles applied to the root element if `padding="checkbox"`. */
  paddingCheckbox: {},
  /** Styles applied to the root element if `padding="none"`. */
  paddingNone: {},
  /** Styles applied to the root element if `align="left"`. */
  alignLeft: {},
  /** Styles applied to the root element if `align="center"`. */
  alignCenter: {},
  /** Styles applied to the root element if `align="right"`. */
  alignRight: {},
  /** Styles applied to the root element if `align="justify"`. */
  alignJustify: {},
  /** Styles applied to the root element if `context.table.stickyHeader={true}`. */
  stickyHeader: {},
};
