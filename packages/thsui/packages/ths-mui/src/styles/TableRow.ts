import { TableRowClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TableRowStyleOverrides: Partial<
  OverridesStyleRules<keyof TableRowClasses, "MuiTableRow", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if `selected={true}`. */
  selected: {},
  /** State class applied to the root element if `hover={true}`. */
  hover: {},
  /** Styles applied to the root element if table variant="head". */
  head: {},
  /** Styles applied to the root element if table variant="footer". */
  footer: {},
};
