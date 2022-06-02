import { InputLabelClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const InputLabelStyleOverrides: Partial<
  OverridesStyleRules<keyof InputLabelClasses, "MuiInputLabel", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if `focused={true}`. */
  focused: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** State class applied to the root element if `error={true}`. */
  error: {},
  /** State class applied to the root element if `required={true}`. */
  required: {},
  /** State class applied to the asterisk element. */
  asterisk: {},
  /** Styles applied to the root element if the component is a descendant of `FormControl`. */
  formControl: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the input element if `shrink={true}`. */
  shrink: {},
  /** Styles applied to the input element unless `disableAnimation={true}`. */
  animated: {},
  /** Styles applied to the root element if `variant="filled"`. */
  filled: {},
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the root element if `variant="standard"`. */
  standard: {},
};
