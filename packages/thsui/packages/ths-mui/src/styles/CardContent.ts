import { CardContentClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const CardContentStyleOverrides: Partial<
  OverridesStyleRules<keyof CardContentClasses, "MuiCardContent", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
};
