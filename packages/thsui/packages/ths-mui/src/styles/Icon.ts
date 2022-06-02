import { IconClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const IconStyleOverrides: Partial<
  OverridesStyleRules<keyof IconClasses, "MuiIcon", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {},
  /** Styles applied to the root element if `color="action"`. */
  colorAction: {},
  /** Styles applied to the root element if `color="error"`. */
  colorError: {},
  /** Styles applied to the root element if `color="disabled"`. */
  colorDisabled: {},
  /** Styles applied to the root element if `fontSize="inherit"`. */
  fontSizeInherit: {},
  /** Styles applied to the root element if `fontSize="small"`. */
  fontSizeSmall: {},
  /** Styles applied to the root element if `fontSize="large"`. */
  fontSizeLarge: {},
};
