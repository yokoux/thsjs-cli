import { CardClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const CardStyleOverrides: Partial<
  OverridesStyleRules<keyof CardClasses, "MuiCard", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
};
