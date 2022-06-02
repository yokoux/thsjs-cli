import { ListItemAvatarClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ListItemAvatarStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ListItemAvatarClasses,
    "MuiListItemAvatar",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
  alignItemsFlexStart: {},
};
