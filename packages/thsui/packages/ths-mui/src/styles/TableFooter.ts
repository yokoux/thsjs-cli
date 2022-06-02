import { TableFooterClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TableFooterStyleOverrides: Partial<
  OverridesStyleRules<keyof TableFooterClasses, "MuiTableFooter", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
};
