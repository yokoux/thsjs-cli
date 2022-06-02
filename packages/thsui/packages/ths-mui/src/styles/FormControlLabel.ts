import { FormControlLabelClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const FormControlLabelStyleOverrides: Partial<
  OverridesStyleRules<
    keyof FormControlLabelClasses,
    "MuiFormControlLabel",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `labelPlacement="start"`. */
  labelPlacementStart: {},
  /** Styles applied to the root element if `labelPlacement="top"`. */
  labelPlacementTop: {},
  /** Styles applied to the root element if `labelPlacement="bottom"`. */
  labelPlacementBottom: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the label's Typography component. */
  label: {},
  /** State class applied to the root element if `error={true}`. */
  error: {},
};
