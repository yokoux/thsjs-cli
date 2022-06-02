import { AppBarClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AppBarStyleOverrides: Partial<
  OverridesStyleRules<keyof AppBarClasses, "MuiAppBar", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `position="fixed"`. */
  positionFixed: {},
  /** Styles applied to the root element if `position="absolute"`. */
  positionAbsolute: {},
  /** Styles applied to the root element if `position="sticky"`. */
  positionSticky: {},
  /** Styles applied to the root element if `position="static"`. */
  positionStatic: {},
  /** Styles applied to the root element if `position="relative"`. */
  positionRelative: {},
  /** Styles applied to the root element if `color="default"`. */
  colorDefault: {},
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {},
  /** Styles applied to the root element if `color="inherit"`. */
  colorInherit: {},
  /** Styles applied to the root element if `color="transparent"`. */
  colorTransparent: {},
};
