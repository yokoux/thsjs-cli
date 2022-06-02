import { StepContentClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const StepContentStyleOverrides: Partial<
  OverridesStyleRules<keyof StepContentClasses, "MuiStepContent", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `last={true}` (controlled by `Step`). */
  last: {},
  /** Styles applied to the Transition component. */
  transition: {},
};
