import { LinearProgressClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const LinearProgressStyleOverrides: Partial<
  OverridesStyleRules<
    keyof LinearProgressClasses,
    "MuiLinearProgress",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`. */
  colorPrimary: {},
  /** Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
  colorSecondary: {},
  /** Styles applied to the root element if `variant="determinate"`. */
  determinate: {},
  /** Styles applied to the root element if `variant="indeterminate"`. */
  indeterminate: {},
  /** Styles applied to the root element if `variant="buffer"`. */
  buffer: {},
  /** Styles applied to the root element if `variant="query"`. */
  query: {},
  /** Styles applied to the additional bar element if `variant="buffer"`. */
  dashed: {},
  /** Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
  dashedColorPrimary: {},
  /** Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
  dashedColorSecondary: {},
  /** Styles applied to the layered bar1 and bar2 elements. */
  bar: {},
  /** Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
  barColorPrimary: {},
  /** Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
  barColorSecondary: {},
  /** Styles applied to the bar1 element if `variant="indeterminate or query"`. */
  bar1Indeterminate: {},
  /** Styles applied to the bar1 element if `variant="determinate"`. */
  bar1Determinate: {},
  /** Styles applied to the bar1 element if `variant="buffer"`. */
  bar1Buffer: {},
  /** Styles applied to the bar2 element if `variant="indeterminate or query"`. */
  bar2Indeterminate: {},
  /** Styles applied to the bar2 element if `variant="buffer"`. */
  bar2Buffer: {},
};
