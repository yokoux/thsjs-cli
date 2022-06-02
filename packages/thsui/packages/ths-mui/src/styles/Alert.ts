import { AlertClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AlertStyleOverrides: Partial<
  OverridesStyleRules<keyof AlertClasses, "MuiAlert", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `variant="filled"`. */
  filled: {},
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the root element if `variant="standard"`. */
  standard: {},
  /** Styles applied to the root element if `variant="standard"` and `color="success"`. */
  standardSuccess: {},
  /** Styles applied to the root element if `variant="standard"` and `color="info"`. */
  standardInfo: {},
  /** Styles applied to the root element if `variant="standard"` and `color="warning"`. */
  standardWarning: {},
  /** Styles applied to the root element if `variant="standard"` and `color="error"`. */
  standardError: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="success"`. */
  outlinedSuccess: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="info"`. */
  outlinedInfo: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
  outlinedWarning: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="error"`. */
  outlinedError: {},
  /** Styles applied to the root element if `variant="filled"` and `color="success"`. */
  filledSuccess: {},
  /** Styles applied to the root element if `variant="filled"` and `color="info"`. */
  filledInfo: {},
  /** Styles applied to the root element if `variant="filled"` and `color="warning"`. */
  filledWarning: {},
  /** Styles applied to the root element if `variant="filled"` and `color="error"`. */
  filledError: {},
  /** Styles applied to the icon wrapper element. */
  icon: {},
  /** Styles applied to the message wrapper element. */
  message: {},
  /** Styles applied to the action wrapper element if `action` is provided. */
  action: {},
};
