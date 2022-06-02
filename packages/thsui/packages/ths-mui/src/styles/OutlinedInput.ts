import { OutlinedInputClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const OutlinedInputStyleOverrides: Partial<
  OverridesStyleRules<
    keyof OutlinedInputClasses,
    "MuiOutlinedInput",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if the color is secondary. */
  colorSecondary: {},
  /** Styles applied to the root element if the component is focused. */
  focused: {},
  /** Styles applied to the root element if `disabled={true}`. */
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
  /** Styles applied to the NotchedOutline element. */
  notchedOutline: {},
  /** Styles applied to the input element. */
  input: {},
  /** Styles applied to the input element if `size="small"`. */
  inputSizeSmall: {},
  /** Styles applied to the input element if `multiline={true}`. */
  inputMultiline: {},
  /** Styles applied to the input element if `startAdornment` is provided. */
  inputAdornedStart: {},
  /** Styles applied to the input element if `endAdornment` is provided. */
  inputAdornedEnd: {},
};
