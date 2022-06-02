import { BottomNavigationClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const BottomNavigationStyleOverrides: Partial<
  OverridesStyleRules<
    keyof BottomNavigationClasses,
    "MuiBottomNavigation",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
};
