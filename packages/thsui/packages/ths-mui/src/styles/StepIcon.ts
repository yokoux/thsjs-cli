import { StepIconClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const StepIconStyleOverrides: Partial<
  OverridesStyleRules<keyof StepIconClasses, "MuiStepIcon", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the SVG text element. */
  text: {},
  /** State class applied to the root element if `active={true}`. */
  active: {},
  /** State class applied to the root element if `completed={true}`. */
  completed: {},
  /** State class applied to the root element if `error={true}`. */
  error: {},
};
