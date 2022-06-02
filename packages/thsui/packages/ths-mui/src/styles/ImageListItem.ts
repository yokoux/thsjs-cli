import { ImageListItemClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ImageListItemStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ImageListItemClasses,
    "MuiImageListItem",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to an `img` element to ensure it covers the item. */
  img: {},
  /** Styles applied to the root element if `variant="standard"`. */
  standard: {},
  /** Styles applied to the root element if `variant="woven"`. */
  woven: {},
  /** Styles applied to the root element if `variant="masonry"`. */
  masonry: {},
  /** Styles applied to the root element if `variant="quilted"`. */
  quilted: {},
};
