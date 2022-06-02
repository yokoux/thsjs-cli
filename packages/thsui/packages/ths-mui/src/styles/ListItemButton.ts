import { ListItemButtonClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ListItemButtonStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ListItemButtonClasses,
    "MuiListItemButton",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the `component`'s `focusVisibleClassName` prop. */
  focusVisible: {},
  /** Styles applied to the component element if dense. */
  dense: {},
  /** Styles applied to the component element if `alignItems="flex-start"`. */
  alignItemsFlexStart: {},
  /** State class applied to the inner `component` element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the inner `component` element if `divider={true}`. */
  divider: {},
  /** Styles applied to the inner `component` element unless `disableGutters={true}`. */
  gutters: {},
  /** State class applied to the root element if `selected={true}`. */
  selected: {},
};
