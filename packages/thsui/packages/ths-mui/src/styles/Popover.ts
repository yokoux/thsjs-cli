import { PopoverClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const PopoverStyleOverrides: Partial<
  OverridesStyleRules<keyof PopoverClasses, "MuiPopover", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the Paper component. */
  paper: {},
};
