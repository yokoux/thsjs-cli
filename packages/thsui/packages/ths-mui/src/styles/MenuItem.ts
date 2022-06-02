import { MenuItemClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const MenuItemStyleOverrides: Partial<
  OverridesStyleRules<keyof MenuItemClasses, "MuiMenuItem", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if keyboard focused. */
  focusVisible: {},
  /** Styles applied to the root element if dense. */
  dense: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if `divider={true}`. */
  divider: {},
  /** Styles applied to the inner `component` element unless `disableGutters={true}`. */
  gutters: {},
  /** State class applied to the root element if `selected={true}`. */
  selected: {},
};
