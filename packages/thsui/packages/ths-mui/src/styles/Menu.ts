import { MenuClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const MenuStyleOverrides: Partial<
  OverridesStyleRules<keyof MenuClasses, "MuiMenu", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the Paper component. */
  paper: {},
  /** Styles applied to the List component via `MenuList`. */
  list: {},
};
