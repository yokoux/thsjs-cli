import { CardMediaClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const CardMediaStyleOverrides: Partial<
  OverridesStyleRules<keyof CardMediaClasses, "MuiCardMedia", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {},
  /** Styles applied to the root element if `component="picture or img"`. */
  img: {},
};
