import { SnackbarContentClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const SnackbarContentStyleOverrides: Partial<
  OverridesStyleRules<
    keyof SnackbarContentClasses,
    "MuiSnackbarContent",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the message wrapper element. */
  message: {},
  /** Styles applied to the action wrapper element if `action` is provided. */
  action: {},
};
