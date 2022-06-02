import { AlertTitleClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AlertTitleStyleOverrides: Partial<
  OverridesStyleRules<keyof AlertTitleClasses, "MuiAlertTitle", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
};
