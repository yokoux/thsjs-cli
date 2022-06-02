import { TableHeadClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TableHeadStyleOverrides: Partial<
  OverridesStyleRules<keyof TableHeadClasses, "MuiTableHead", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
};
