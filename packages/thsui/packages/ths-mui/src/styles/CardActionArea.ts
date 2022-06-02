import { CardActionAreaClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const CardActionAreaStyleOverrides: Partial<
  OverridesStyleRules<
    keyof CardActionAreaClasses,
    "MuiCardActionArea",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the ButtonBase root element if the action area is keyboard focused. */
  focusVisible: {},
  /** Styles applied to the overlay that covers the action area when it is keyboard focused. */
  focusHighlight: {},
};
