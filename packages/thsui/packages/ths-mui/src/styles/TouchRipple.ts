import { TouchRippleClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TouchRippleStyleOverrides: Partial<
  OverridesStyleRules<keyof TouchRippleClasses, "MuiTouchRipple", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the internal `Ripple` components `ripple` class. */
  ripple: {},
  /** Styles applied to the internal `Ripple` components `rippleVisible` class. */
  rippleVisible: {},
  /** Styles applied to the internal `Ripple` components `ripplePulsate` class. */
  ripplePulsate: {},
  /** Styles applied to the internal `Ripple` components `child` class. */
  child: {},
  /** Styles applied to the internal `Ripple` components `childLeaving` class. */
  childLeaving: {},
  /** Styles applied to the internal `Ripple` components `childPulsate` class. */
  childPulsate: {},
};
