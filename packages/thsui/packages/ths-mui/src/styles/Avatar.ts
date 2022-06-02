import { AvatarClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AvatarStyleOverrides: Partial<
  OverridesStyleRules<keyof AvatarClasses, "MuiAvatar", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if not `src` or `srcSet`. */
  colorDefault: {},
  /** Styles applied to the root element if `variant="circular"`. */
  circular: {},
  /** Styles applied to the root element if `variant="rounded"`. */
  rounded: {},
  /** Styles applied to the root element if `variant="square"`. */
  square: {},
  /** Styles applied to the img element if either `src` or `srcSet` is defined. */
  img: {},
  /** Styles applied to the fallback icon */
  fallback: {},
};
