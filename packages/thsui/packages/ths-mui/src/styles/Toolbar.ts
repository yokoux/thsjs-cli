import { ToolbarClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ToolbarStyleOverrides: Partial<
  OverridesStyleRules<keyof ToolbarClasses, "MuiToolbar", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element unless `disableGutters={true}`. */
  gutters: {},
  /** Styles applied to the root element if `variant="regular"`. */
  regular: {},
  /** Styles applied to the root element if `variant="dense"`. */
  dense: {},
};
