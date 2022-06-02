import { PaginationClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const PaginationStyleOverrides: Partial<
  OverridesStyleRules<keyof PaginationClasses, "MuiPagination", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the ul element. */
  ul: {},
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the root element if `variant="text"`. */
  text: {},
};
