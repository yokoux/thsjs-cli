import { BackdropClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const BackdropStyleOverrides: Partial<
  OverridesStyleRules<keyof BackdropClasses, "MuiBackdrop", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `invisible={true}`. */
  invisible: {},
};
