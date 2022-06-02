import { StepClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const StepStyleOverrides: Partial<
  OverridesStyleRules<keyof StepClasses, "MuiStep", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {},
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /** Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {},
  /** State class applied to the root element if `completed={true}`. */
  completed: {},
};
