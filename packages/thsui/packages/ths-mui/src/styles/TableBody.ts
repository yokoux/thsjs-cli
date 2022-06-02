import { TableBodyClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TableBodyStyleOverrides: Partial<
  OverridesStyleRules<keyof TableBodyClasses, "MuiTableBody", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
};
