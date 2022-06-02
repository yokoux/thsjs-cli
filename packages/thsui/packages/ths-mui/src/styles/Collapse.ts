import { CollapseClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const CollapseStyleOverrides: Partial<
  OverridesStyleRules<keyof CollapseClasses, "MuiCollapse", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element if `orientation="horizontal"`. */
  horizontal: {},
  /** Styles applied to the root element when the transition has entered. */
  entered: {},
  /** Styles applied to the root element when the transition has exited and `collapsedSize` = 0px. */
  hidden: {},
  /** Styles applied to the outer wrapper element. */
  wrapper: {},
  /** Styles applied to the inner wrapper element. */
  wrapperInner: {},
};
