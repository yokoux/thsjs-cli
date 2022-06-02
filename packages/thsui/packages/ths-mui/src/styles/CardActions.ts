import { CardActionsClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const CardActionsStyleOverrides: Partial<
  OverridesStyleRules<keyof CardActionsClasses, "MuiCardActions", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element unless `disableSpacing={true}`. */
  spacing: {},
};
