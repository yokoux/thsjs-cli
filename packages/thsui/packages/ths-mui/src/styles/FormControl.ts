import { FormControlClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const FormControlStyleOverrides: Partial<
  OverridesStyleRules<keyof FormControlClasses, "MuiFormControl", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `margin="normal"`. */
  marginNormal: {},
  /** Styles applied to the root element if `margin="dense"`. */
  marginDense: {},
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {},
};
