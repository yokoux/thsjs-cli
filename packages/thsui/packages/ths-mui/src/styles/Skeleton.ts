import { SkeletonClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const SkeletonStyleOverrides: Partial<
  OverridesStyleRules<keyof SkeletonClasses, "MuiSkeleton", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `variant="text"`. */
  text: {},
  /** Styles applied to the root element if `variant="rectangular"`. */
  rectangular: {},
  /** Styles applied to the root element if `variant="circular"`. */
  circular: {},
  /** Styles applied to the root element if `animation="pulse"`. */
  pulse: {},
  /** Styles applied to the root element if `animation="wave"`. */
  wave: {},
  /** Styles applied when the component is passed children. */
  withChildren: {},
  /** Styles applied when the component is passed children and no width. */
  fitContent: {},
  /** Styles applied when the component is passed children and no height. */
  heightAuto: {},
};
