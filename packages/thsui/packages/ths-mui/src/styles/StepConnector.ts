import { StepConnectorClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const StepConnectorStyleOverrides: Partial<
  OverridesStyleRules<
    keyof StepConnectorClasses,
    "MuiStepConnector",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {},
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /** Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {},
  /** State class applied to the root element if `active={true}`. */
  active: {},
  /** State class applied to the root element if `completed={true}`. */
  completed: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the line element. */
  line: {},
  /** Styles applied to the root element if `orientation="horizontal"`. */
  lineHorizontal: {},
  /** Styles applied to the root element if `orientation="vertical"`. */
  lineVertical: {},
};
