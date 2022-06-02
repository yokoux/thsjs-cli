import { MobileStepperClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const MobileStepperStyleOverrides: Partial<
  OverridesStyleRules<
    keyof MobileStepperClasses,
    "MuiMobileStepper",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `position="bottom"`. */
  positionBottom: {},
  /** Styles applied to the root element if `position="top"`. */
  positionTop: {},
  /** Styles applied to the root element if `position="static"`. */
  positionStatic: {},
  /** Styles applied to the dots container if `variant="dots"`. */
  dots: {},
  /** Styles applied to each dot if `variant="dots"`. */
  dot: {},
  /** Styles applied to a dot if `variant="dots"` and this is the active step. */
  dotActive: {},
  /** Styles applied to the Linear Progress component if `variant="progress"`. */
  progress: {},
};
