import { ButtonClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ButtonStyleOverrides: Partial<
  OverridesStyleRules<keyof ButtonClasses, "MuiButton", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {
    lineHeight: 1,
  },
  /** Styles applied to the root element if `variant="text"`. */
  text: {},
  /** Styles applied to the root element if `variant="text"` and `color="inherit"`. */
  textInherit: {},
  /** Styles applied to the root element if `variant="text"` and `color="primary"`. */
  textPrimary: {},
  /** Styles applied to the root element if `variant="text"` and `color="secondary"`. */
  textSecondary: {},
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="inherit"`. */
  outlinedInherit: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
  outlinedPrimary: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {},
  /** Styles applied to the root element if `variant="contained"`. */
  contained: {
    color: "white",
  },
  /** Styles applied to the root element if `variant="contained"` and `color="inherit"`. */
  containedInherit: {},
  /** Styles applied to the root element if `variant="contained"` and `color="primary"`. */
  containedPrimary: {},
  /** Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
  containedSecondary: {},
  /** Styles applied to the root element if `disableElevation={true}`. */
  disableElevation: {},
  /** State class applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if `color="inherit"`. */
  colorInherit: {},
  /** Styles applied to the root element if `size="small"` and `variant="text"`. */
  textSizeSmall: {},
  /** Styles applied to the root element if `size="medium"` and `variant="text"`. */
  textSizeMedium: {},
  /** Styles applied to the root element if `size="large"` and `variant="text"`. */
  textSizeLarge: {},
  /** Styles applied to the root element if `size="small"` and `variant="outlined"`. */
  outlinedSizeSmall: {},
  /** Styles applied to the root element if `size="medium"` and `variant="outlined"`. */
  outlinedSizeMedium: {},
  /** Styles applied to the root element if `size="large"` and `variant="outlined"`. */
  outlinedSizeLarge: {},
  /** Styles applied to the root element if `size="small"` and `variant="contained"`. */
  containedSizeSmall: {},
  /** Styles applied to the root element if `size="medium"` and `variant="contained"`. */
  containedSizeMedium: {},
  /** Styles applied to the root element if `size="large"` and `variant="contained"`. */
  containedSizeLarge: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    padding: "0.35rem 0.5rem",
  },
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: {
    padding: "0.5rem 0.75rem",
  },
  /** Styles applied to the root element if `size="large"`. */
  sizeLarge: {
    padding: "0.75rem 1rem",
  },
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {},
  /** Styles applied to the startIcon element if supplied. */
  startIcon: {},
  /** Styles applied to the endIcon element if supplied. */
  endIcon: {},
  /** Styles applied to the icon element if supplied and `size="small"`. */
  iconSizeSmall: {},
  /** Styles applied to the icon element if supplied and `size="medium"`. */
  iconSizeMedium: {},
  /** Styles applied to the icon element if supplied and `size="large"`. */
  iconSizeLarge: {},
};
