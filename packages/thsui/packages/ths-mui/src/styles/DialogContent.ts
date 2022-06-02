import { DialogContentClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const DialogContentStyleOverrides: Partial<
  OverridesStyleRules<
    keyof DialogContentClasses,
    "MuiDialogContent",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `dividers={true}`. */
  dividers: {},
};
