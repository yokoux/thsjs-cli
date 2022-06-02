import { LinkClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const LinkStyleOverrides: Partial<
  OverridesStyleRules<keyof LinkClasses, "MuiLink", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `underline="none"`. */
  underlineNone: {},
  /** Styles applied to the root element if `underline="hover"`. */
  underlineHover: {},
  /** Styles applied to the root element if `underline="always"`. */
  underlineAlways: {},
  /** Styles applied to the root element if `component="button"`. */
  button: {},
  /** State class applied to the root element if the link is keyboard focused. */
  focusVisible: {},
};
