import { TextFieldClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TextFieldStyleOverrides: Partial<
  OverridesStyleRules<keyof TextFieldClasses, "MuiTextField", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
};
