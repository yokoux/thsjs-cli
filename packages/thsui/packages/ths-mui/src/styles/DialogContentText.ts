import { DialogContentTextClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const DialogContentTextStyleOverrides: Partial<
  OverridesStyleRules<
    keyof DialogContentTextClasses,
    "MuiDialogContentText",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
};
