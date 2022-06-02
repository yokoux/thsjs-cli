import { SwitchClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const SwitchStyleOverrides: Partial<
  OverridesStyleRules<keyof SwitchClasses, "MuiSwitch", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `edge="start"`. */
  edgeStart: {},
  /** Styles applied to the root element if `edge="end"`. */
  edgeEnd: {},
  /** Styles applied to the internal `SwitchBase` component's `root` class. */
  switchBase: {},
  /** Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
  colorSecondary: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: {},
  /** State class applied to the internal `SwitchBase` component's `checked` class. */
  checked: {},
  /** State class applied to the internal SwitchBase component's disabled class. */
  disabled: {},
  /** Styles applied to the internal SwitchBase component's input element. */
  input: {},
  /** Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
  thumb: {},
  /** Styles applied to the track element. */
  track: {},
};
