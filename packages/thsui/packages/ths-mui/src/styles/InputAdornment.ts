import { InputAdornmentClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const InputAdornmentStyleOverrides: Partial<
  OverridesStyleRules<
    keyof InputAdornmentClasses,
    "MuiInputAdornment",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `variant="filled"`. */
  filled: {},
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the root element if `variant="standard"`. */
  standard: {},
  /** Styles applied to the root element if `position="start"`. */
  positionStart: {},
  /** Styles applied to the root element if `position="end"`. */
  positionEnd: {},
  /** Styles applied to the root element if `disablePointerEvents={true}`. */
  disablePointerEvents: {},
  /** Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},
  /** Styles applied if the adornment is used inside <FormControl size="small" />. */
  sizeSmall: {},
};
