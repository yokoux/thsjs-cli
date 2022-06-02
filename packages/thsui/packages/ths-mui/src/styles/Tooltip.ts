import { TooltipClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TooltipStyleOverrides: Partial<
  OverridesStyleRules<keyof TooltipClasses, "MuiTooltip", DefaultTheme>
> = {
  /** Styles applied to the Popper component. */
  popper: {},
  /** Styles applied to the Popper component unless `disableInteractive={true}`. */
  popperInteractive: {},
  /** Styles applied to the Popper component if `arrow={true}`. */
  popperArrow: {},
  /** Styles applied to the Popper component unless the tooltip is open. */
  popperClose: {},
  /** Styles applied to the tooltip (label wrapper) element. */
  tooltip: {},
  /** Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
  tooltipArrow: {},
  /** Styles applied to the arrow element. */
  arrow: {},
  /** Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
  touch: {},
  /** Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
  tooltipPlacementLeft: {},
  /** Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
  tooltipPlacementRight: {},
  /** Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
  tooltipPlacementTop: {},
  /** Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
  tooltipPlacementBottom: {},
};
