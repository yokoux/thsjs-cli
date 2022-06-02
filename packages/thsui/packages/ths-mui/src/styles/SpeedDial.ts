import { SpeedDialClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const SpeedDialStyleOverrides: Partial<
  OverridesStyleRules<keyof SpeedDialClasses, "MuiSpeedDial", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the Fab component. */
  fab: {},
  /** Styles applied to the root element if direction="up" */
  directionUp: {},
  /** Styles applied to the root element if direction="down" */
  directionDown: {},
  /** Styles applied to the root element if direction="left" */
  directionLeft: {},
  /** Styles applied to the root element if direction="right" */
  directionRight: {},
  /** Styles applied to the actions (`children` wrapper) element. */
  actions: {},
  /** Styles applied to the actions (`children` wrapper) element if `open={false}`. */
  actionsClosed: {},
};
