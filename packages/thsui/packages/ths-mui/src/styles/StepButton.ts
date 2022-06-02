import { StepButtonClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const StepButtonStyleOverrides: Partial<
  OverridesStyleRules<keyof StepButtonClasses, "MuiStepButton", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {},
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /** Styles applied to the `ButtonBase` touch-ripple. */
  touchRipple: {},
};
