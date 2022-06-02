import { BottomNavigationActionClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const BottomNavigationActionStyleOverrides: Partial<
  OverridesStyleRules<
    keyof BottomNavigationActionClasses,
    "MuiBottomNavigationAction",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if selected. */
  selected: {},
  /** State class applied to the root element if `showLabel={false}` and not selected. */
  iconOnly: {},
  /** Styles applied to the label's span element. */
  label: {},
};
