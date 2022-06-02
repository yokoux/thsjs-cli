import { ImageListClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ImageListStyleOverrides: Partial<
  OverridesStyleRules<keyof ImageListClasses, "MuiImageList", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `variant="masonry"`. */
  masonry: {},
  /** Styles applied to the root element if `variant="quilted"`. */
  quilted: {},
  /** Styles applied to the root element if `variant="standard"`. */
  standard: {},
  /** Styles applied to the root element if `variant="woven"`. */
  woven: {},
};
