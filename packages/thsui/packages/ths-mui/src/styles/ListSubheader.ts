import { ListSubheaderClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ListSubheaderStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ListSubheaderClasses,
    "MuiListSubheader",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the root element if `color="inherit"`. */
  colorInherit: {},
  /** Styles applied to the inner `component` element unless `disableGutters={true}`. */
  gutters: {},
  /** Styles applied to the root element if `inset={true}`. */
  inset: {},
  /** Styles applied to the root element unless `disableSticky={true}`. */
  sticky: {},
};
