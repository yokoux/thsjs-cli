import { ToggleButtonClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ToggleButtonStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ToggleButtonClasses,
    "MuiToggleButton",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** State class applied to the root element if `selected={true}`. */
  selected: {},
  /** State class applied to the root element if `color="standard"`. */
  standard: {},
  /** State class applied to the root element if `color="primary"`. */
  primary: {},
  /** State class applied to the root element if `color="secondary"`. */
  secondary: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: {},
  /** Styles applied to the root element if `size="large"`. */
  sizeLarge: {},
};
