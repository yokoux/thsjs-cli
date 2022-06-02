import { ListItemTextClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ListItemTextStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ListItemTextClasses,
    "MuiListItemText",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the Typography component if primary and secondary are set. */
  multiline: {},
  /** Styles applied to the Typography component if dense. */
  dense: {},
  /** Styles applied to the root element if `inset={true}`. */
  inset: {},
  /** Styles applied to the primary `Typography` component. */
  primary: {},
  /** Styles applied to the secondary `Typography` component. */
  secondary: {},
};
