import { ListClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ListStyleOverrides: Partial<
  OverridesStyleRules<keyof ListClasses, "MuiList", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element unless `disablePadding={true}`. */
  padding: {},
  /** Styles applied to the root element if dense. */
  dense: {},
  /** Styles applied to the root element if a `subheader` is provided. */
  subheader: {},
};
