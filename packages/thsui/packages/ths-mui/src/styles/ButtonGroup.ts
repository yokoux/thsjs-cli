import { ButtonGroupClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ButtonGroupStyleOverrides: Partial<
  OverridesStyleRules<keyof ButtonGroupClasses, "MuiButtonGroup", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `variant="contained"`. */
  contained: {},
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the root element if `variant="text"`. */
  text: {},
  /** Styles applied to the root element if `disableElevation={true}`. */
  disableElevation: {},
  /** State class applied to the child elements if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {},
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /** Styles applied to the children. */
  grouped: {},
  /** Styles applied to the children if `orientation="horizontal"`. */
  groupedHorizontal: {},
  /** Styles applied to the children if `orientation="vertical"`. */
  groupedVertical: {},
  /** Styles applied to the children if `variant="text"`. */
  groupedText: {},
  /** Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
  groupedTextHorizontal: {},
  /** Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
  groupedTextVertical: {},
  /** Styles applied to the children if `variant="text"` and `color="primary"`. */
  groupedTextPrimary: {},
  /** Styles applied to the children if `variant="text"` and `color="secondary"`. */
  groupedTextSecondary: {},
  /** Styles applied to the children if `variant="outlined"`. */
  groupedOutlined: {},
  /** Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
  groupedOutlinedHorizontal: {},
  /** Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
  groupedOutlinedVertical: {},
  /** Styles applied to the children if `variant="outlined"` and `color="primary"`. */
  groupedOutlinedPrimary: {},
  /** Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
  groupedOutlinedSecondary: {},
  /** Styles applied to the children if `variant="contained"`. */
  groupedContained: {},
  /** Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
  groupedContainedHorizontal: {},
  /** Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
  groupedContainedVertical: {},
  /** Styles applied to the children if `variant="contained"` and `color="primary"`. */
  groupedContainedPrimary: {},
  /** Styles applied to the children if `variant="contained"` and `color="secondary"`. */
  groupedContainedSecondary: {},
};
