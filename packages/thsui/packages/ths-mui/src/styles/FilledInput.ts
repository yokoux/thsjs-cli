import { FilledInputClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const FilledInputStyleOverrides: Partial<
  OverridesStyleRules<keyof FilledInputClasses, "MuiFilledInput", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if color secondary. */
  colorSecondary: {},
  /** Styles applied to the root element unless `disableUnderline={true}`. */
  underline: {},
  /** State class applied to the root element if the component is focused. */
  focused: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if `startAdornment` is provided. */
  adornedStart: {},
  /** Styles applied to the root element if `endAdornment` is provided. */
  adornedEnd: {},
  /** State class applied to the root element if `error={true}`. */
  error: {},
  /** Styles applied to the input element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `multiline={true}`. */
  multiline: {},
  /** Styles applied to the root element if `hiddenLabel={true}`. */
  hiddenLabel: {},
  /** Styles applied to the input element. */
  input: {},
  /** Styles applied to the input element if `size="small"`. */
  inputSizeSmall: {},
  /** Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
  inputHiddenLabel: {},
  /** Styles applied to the input element if `multiline={true}`. */
  inputMultiline: {},
  /** Styles applied to the input element if `startAdornment` is provided. */
  inputAdornedStart: {},
  /** Styles applied to the input element if `endAdornment` is provided. */
  inputAdornedEnd: {},
};
