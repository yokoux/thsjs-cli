import { InputClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const InputStyleOverrides: Partial<
  OverridesStyleRules<keyof InputClasses, "MuiInput", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if the component is a descendant of `FormControl`. */
  formControl: {},
  /** Styles applied to the root element if the component is focused. */
  focused: {},
  /** Styles applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if color secondary. */
  colorSecondary: {},
  /** Styles applied to the root element unless `disableUnderline={true}`. */
  underline: {},
  /** State class applied to the root element if `error={true}`. */
  error: {},
  /** Styles applied to the input element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `multiline={true}`. */
  multiline: {},
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {},
  /** Styles applied to the input element. */
  input: {},
  /** Styles applied to the input element if `size="small"`. */
  inputSizeSmall: {},
  /** Styles applied to the input element if `multiline={true}`. */
  inputMultiline: {},
  /** Styles applied to the input element if `type="search"`. */
  inputTypeSearch: {},
};
