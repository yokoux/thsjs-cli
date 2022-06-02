import { ListItemClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ListItemStyleOverrides: Partial<
  OverridesStyleRules<keyof ListItemClasses, "MuiListItem", DefaultTheme>
> = {
  /** Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
  root: {},
  /** Styles applied to the container element if `children` includes `ListItemSecondaryAction`. */
  container: {},
  /** State class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
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
  /** Styles applied to the root element unless `disablePadding={true}`. */
  padding: {},
  /** Styles applied to the inner `component` element if `button={true}`. */
  button: {},
  /** Styles applied to the component element if `children` includes `ListItemSecondaryAction`. */
  secondaryAction: {},
  /** State class applied to the root element if `selected={true}`. */
  selected: {},
};
