import { TableContainerClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TableContainerStyleOverrides: Partial<
  OverridesStyleRules<
    keyof TableContainerClasses,
    "MuiTableContainer",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
};
