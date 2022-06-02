import { TableSortLabelClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TableSortLabelStyleOverrides: Partial<
  OverridesStyleRules<
    keyof TableSortLabelClasses,
    "MuiTableSortLabel",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if `active={true}`. */
  active: {},
  /** Styles applied to the icon component. */
  icon: {},
  /** Styles applied to the icon component if `direction="desc"`. */
  iconDirectionDesc: {},
  /** Styles applied to the icon component if `direction="asc"`. */
  iconDirectionAsc: {},
};
