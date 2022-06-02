import { PaperClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const PaperStyleOverrides: Partial<
  OverridesStyleRules<keyof PaperClasses, "MuiPaper", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element unless `square={true}`. */
  rounded: {},
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the root element if `variant="elevation"`. */
  elevation: {},
  elevation0: {},
  elevation1: {},
  elevation2: {},
  elevation3: {},
  elevation4: {},
  elevation5: {},
  elevation6: {},
  elevation7: {},
  elevation8: {},
  elevation9: {},
  elevation10: {},
  elevation11: {},
  elevation12: {},
  elevation13: {},
  elevation14: {},
  elevation15: {},
  elevation16: {},
  elevation17: {},
  elevation18: {},
  elevation19: {},
  elevation20: {},
  elevation21: {},
  elevation22: {},
  elevation23: {},
  elevation24: {},
};
