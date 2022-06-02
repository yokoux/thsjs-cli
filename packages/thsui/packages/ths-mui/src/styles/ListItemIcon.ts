import { ListItemIconClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ListItemIconStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ListItemIconClasses,
    "MuiListItemIcon",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
  alignItemsFlexStart: {},
};
