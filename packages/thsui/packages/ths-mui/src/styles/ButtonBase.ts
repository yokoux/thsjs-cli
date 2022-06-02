import { ButtonBaseClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ButtonBaseStyleOverrides: Partial<
  OverridesStyleRules<keyof ButtonBaseClasses, "MuiButtonBase", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** State class applied to the root element if keyboard focused. */
  focusVisible: {},
};
