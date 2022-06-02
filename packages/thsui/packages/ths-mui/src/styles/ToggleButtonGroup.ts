import { ToggleButtonGroupClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ToggleButtonGroupStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ToggleButtonGroupClasses,
    "MuiToggleButtonGroup",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the children. */
  grouped: {},
  /** Styles applied to the children if `orientation="horizontal"`. */
  groupedHorizontal: {},
  /** Styles applied to the children if `orientation="vertical"`. */
  groupedVertical: {},
};
