import { CheckboxClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const CheckboxStyleOverrides: Partial<
  OverridesStyleRules<keyof CheckboxClasses, "MuiCheckbox", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if `checked={true}`. */
  checked: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** State class applied to the root element if `indeterminate={true}`. */
  indeterminate: {},
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {},
};
