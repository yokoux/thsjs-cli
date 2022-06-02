import { TypographyClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TypographyStyleOverrides: Partial<
  OverridesStyleRules<keyof TypographyClasses, "MuiTypography", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `variant="body2"`. */
  body2: {},
  /** Styles applied to the root element if `variant="body1"`. */
  body1: {},
  /** Styles applied to the root element if `variant="caption"`. */
  caption: {},
  /** Styles applied to the root element if `variant="button"`. */
  button: {},
  /** Styles applied to the root element if `variant="h1"`. */
  h1: {},
  /** Styles applied to the root element if `variant="h2"`. */
  h2: {},
  /** Styles applied to the root element if `variant="h3"`. */
  h3: {},
  /** Styles applied to the root element if `variant="h4"`. */
  h4: {},
  /** Styles applied to the root element if `variant="h5"`. */
  h5: {},
  /** Styles applied to the root element if `variant="h6"`. */
  h6: {},
  /** Styles applied to the root element if `variant="subtitle1"`. */
  subtitle1: {},
  /** Styles applied to the root element if `variant="subtitle2"`. */
  subtitle2: {},
  /** Styles applied to the root element if `variant="overline"`. */
  overline: {},
  /** Styles applied to the root element if `variant="inherit"`. */
  inherit: {},
  /** Styles applied to the root element if `align="left"`. */
  alignLeft: {},
  /** Styles applied to the root element if `align="center"`. */
  alignCenter: {},
  /** Styles applied to the root element if `align="right"`. */
  alignRight: {},
  /** Styles applied to the root element if `align="justify"`. */
  alignJustify: {},
  /** Styles applied to the root element if `nowrap={true}`. */
  noWrap: {},
  /** Styles applied to the root element if `gutterBottom={true}`. */
  gutterBottom: {},
  /** Styles applied to the root element if `paragraph={true}`. */
  paragraph: {},
};
