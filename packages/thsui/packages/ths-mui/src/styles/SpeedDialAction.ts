import { SpeedDialActionClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const SpeedDialActionStyleOverrides: Partial<
  OverridesStyleRules<
    keyof SpeedDialActionClasses,
    "MuiSpeedDialAction",
    DefaultTheme
  >
> = {
  /** Styles applied to the Fab component. */
  fab: {},
  /** Styles applied to the Fab component if `open={false}`. */
  fabClosed: {},
  /** Styles applied to the root element if `tooltipOpen={true}`. */
  staticTooltip: {},
  /** Styles applied to the root element if `tooltipOpen={true}` and `open={false}`. */
  staticTooltipClosed: {},
  /** Styles applied to the static tooltip label if `tooltipOpen={true}`. */
  staticTooltipLabel: {},
  /** Styles applied to the root element if `tooltipOpen={true}` and `tooltipPlacement="left"`` */
  tooltipPlacementLeft: {},
  /** Styles applied to the root element if `tooltipOpen={true}` and `tooltipPlacement="right"`` */
  tooltipPlacementRight: {},
};
