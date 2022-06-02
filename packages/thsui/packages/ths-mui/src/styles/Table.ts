import { TableClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TableStyleOverrides: Partial<
  OverridesStyleRules<keyof TableClasses, "MuiTable", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `stickyHeader={true}`. */
  stickyHeader: {},
};
