import { RadioClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const RadioStyleOverrides: Partial<
  OverridesStyleRules<keyof RadioClasses, "MuiRadio", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if `checked={true}`. */
  checked: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {},
};
