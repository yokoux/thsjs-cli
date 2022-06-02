import { StepLabelClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const StepLabelStyleOverrides: Partial<
  OverridesStyleRules<keyof StepLabelClasses, "MuiStepLabel", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {},
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /** Styles applied to the label element that wraps `children`. */
  label: {},
  /** State class applied to the label element if `active={true}`. */
  active: {},
  /** State class applied to the label element if `completed={true}`. */
  completed: {},
  /** State class applied to the root and label elements if `error={true}`. */
  error: {},
  /** State class applied to the root and label elements if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the `icon` container element. */
  iconContainer: {},
  /** State class applied to the root and icon container and label if `alternativeLabel={true}`. */
  alternativeLabel: {},
  /** Styles applied to the container element which wraps label and `optional`. */
  labelContainer: {},
};
