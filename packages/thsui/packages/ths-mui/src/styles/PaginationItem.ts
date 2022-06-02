import { PaginationItemClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const PaginationItemStyleOverrides: Partial<
  OverridesStyleRules<
    keyof PaginationItemClasses,
    "MuiPaginationItem",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `type="page"`. */
  page: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `size="large"`. */
  sizeLarge: {},
  /** Styles applied to the root element if `variant="text"`. */
  text: {},
  /** Styles applied to the root element if `variant="text"` and `color="primary"`. */
  textPrimary: {},
  /** Styles applied to the root element if `variant="text"` and `color="secondary"`. */
  textSecondary: {},
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
  outlinedPrimary: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {},
  /** Styles applied to the root element if `rounded="true"`. */
  rounded: {},
  /** Styles applied to the root element if `type="start-ellipsis"` or `type="end-ellipsis"`. */
  ellipsis: {},
  /** Styles applyed to the root element if `type="first"` or type="last". */
  firstLast: {},
  /** Styles applyed to the root element if `type="previous"` or type="next". */
  previousNext: {},
  /** State class applied to the root element if keyboard focused. */
  focusVisible: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** State class applied to the root element if `selected={true}`. */
  selected: {},
  /** Styles applied to the icon to display. */
  icon: {},
};
