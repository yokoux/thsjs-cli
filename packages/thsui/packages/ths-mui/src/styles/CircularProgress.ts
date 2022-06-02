import { CircularProgressClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const CircularProgressStyleOverrides: Partial<
  OverridesStyleRules<
    keyof CircularProgressClasses,
    "MuiCircularProgress",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `variant="determinate"`. */
  determinate: {},
  /** Styles applied to the root element if `variant="indeterminate"`. */
  indeterminate: {},
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {},
  /** Styles applied to the svg element. */
  svg: {},
  /** Styles applied to the `circle` svg path. */
  circle: {},
  /** Styles applied to the `circle` svg path if `variant="determinate"`. */
  circleDeterminate: {},
  /** Styles applied to the `circle` svg path if `variant="indeterminate"`. */
  circleIndeterminate: {},
  /** Styles applied to the `circle` svg path if `disableShrink={true}`. */
  circleDisableShrink: {},
};
