import { FormLabelClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const FormLabelStyleOverrides: Partial<
  OverridesStyleRules<keyof FormLabelClasses, "MuiFormLabel", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if the color is secondary. */
  colorSecondary: {},
  /** State class applied to the root element if `focused={true}`. */
  focused: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** State class applied to the root element if `error={true}`. */
  error: {},
  /** State class applied to the root element if `filled={true}`. */
  filled: {},
  /** State class applied to the root element if `required={true}`. */
  required: {},
  /** Styles applied to the asterisk element. */
  asterisk: {},
};
