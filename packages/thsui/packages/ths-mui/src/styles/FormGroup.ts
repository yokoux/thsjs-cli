import { FormGroupClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const FormGroupStyleOverrides: Partial<
  OverridesStyleRules<keyof FormGroupClasses, "MuiFormGroup", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `row={true}`. */
  row: {},
  /** State class applied to the root element if `error={true}`. */
  error: {},
};
