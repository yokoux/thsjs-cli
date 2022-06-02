import { IconButtonClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const IconButtonStyleOverrides: Partial<
  OverridesStyleRules<keyof IconButtonClasses, "MuiIconButton", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `edge="start"`. */
  edgeStart: {},
  /** Styles applied to the root element if `edge="end"`. */
  edgeEnd: {},
  /** Styles applied to the root element if `color="inherit"`. */
  colorInherit: {},
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: {},
  /** Styles applied to the root element if `size="large"`. */
  sizeLarge: {},
};
