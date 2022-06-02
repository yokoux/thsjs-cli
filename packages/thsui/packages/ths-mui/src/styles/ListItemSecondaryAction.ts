import { ListItemSecondaryActionClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ListItemSecondaryActionStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ListItemSecondaryActionClasses,
    "MuiListItemSecondaryAction",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element when the parent `ListItem` has `disableGutters={true}`. */
  disableGutters: {},
};
