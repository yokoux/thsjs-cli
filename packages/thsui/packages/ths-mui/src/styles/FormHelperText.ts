import { FormHelperTextClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const FormHelperTextStyleOverrides: Partial<
  OverridesStyleRules<
    keyof FormHelperTextClasses,
    "MuiFormHelperText",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if `error={true}`. */
  error: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
  contained: {},
  /** State class applied to the root element if `focused={true}`. */
  focused: {},
  /** State class applied to the root element if `filled={true}`. */
  filled: {},
  /** State class applied to the root element if `required={true}`. */
  required: {},
};
