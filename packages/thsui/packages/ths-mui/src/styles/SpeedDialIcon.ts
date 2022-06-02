import { SpeedDialIconClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const SpeedDialIconStyleOverrides: Partial<
  OverridesStyleRules<
    keyof SpeedDialIconClasses,
    "MuiSpeedDialIcon",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the icon component. */
  icon: {},
  /** Styles applied to the icon component if `open={true}`. */
  iconOpen: {},
  /** Styles applied to the icon when an `openIcon` is provided and if `open={true}`. */
  iconWithOpenIconOpen: {},
  /** Styles applied to the `openIcon` if provided. */
  openIcon: {},
  /** Styles applied to the `openIcon` if provided and if `open={true}`. */
  openIconOpen: {},
};
