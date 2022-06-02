import { TabClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TabStyleOverrides: Partial<
  OverridesStyleRules<keyof TabClasses, "MuiTab", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if both `icon` and `label` are provided. */
  labelIcon: {},
  /** Styles applied to the root element if the parent [`Tabs`](/material-ui/api/tabs/) has `textColor="inherit"`. */
  textColorInherit: {},
  /** Styles applied to the root element if the parent [`Tabs`](/material-ui/api/tabs/) has `textColor="primary"`. */
  textColorPrimary: {},
  /** Styles applied to the root element if the parent [`Tabs`](/material-ui/api/tabs/) has `textColor="secondary"`. */
  textColorSecondary: {},
  /** State class applied to the root element if `selected={true}` (controlled by the Tabs component). */
  selected: {},
  /** State class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
  disabled: {},
  /** Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
  fullWidth: {},
  /** Styles applied to the root element if `wrapped={true}`. */
  wrapped: {},
  /** Styles applied to the wrapper element of `icon` if `icon` is provided. */
  iconWrapper: {},
};
