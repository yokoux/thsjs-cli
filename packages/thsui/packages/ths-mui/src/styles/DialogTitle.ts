import { DialogTitleClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const DialogTitleStyleOverrides: Partial<
  OverridesStyleRules<keyof DialogTitleClasses, "MuiDialogTitle", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
};
