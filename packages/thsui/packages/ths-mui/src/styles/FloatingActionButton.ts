import { FabClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const FabStyleOverrides: Partial<
  OverridesStyleRules<keyof FabClasses, "MuiFab", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `color="primary"`. */
  primary: {},
  /** Styles applied to the root element if `color="secondary"`. */
  secondary: {},
  /** Styles applied to the root element if `variant="extended"`. */
  extended: {},
  /** Styles applied to the root element if `variant="circular"`. */
  circular: {},
  /** State class applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if `color="inherit"`. */
  colorInherit: {},
  /** Styles applied to the root element if `size="small"``. */
  sizeSmall: {},
  /** Styles applied to the root element if `size="medium"``. */
  sizeMedium: {},
};
