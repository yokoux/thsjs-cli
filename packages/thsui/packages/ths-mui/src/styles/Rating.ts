import { RatingClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const RatingStyleOverrides: Partial<
  OverridesStyleRules<keyof RatingClasses, "MuiRating", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: {},
  /** Styles applied to the root element if `size="large"`. */
  sizeLarge: {},
  /** Styles applied to the root element if `readOnly={true}`. */
  readOnly: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** State class applied to the root element if keyboard focused. */
  focusVisible: {},
  /** Visually hide an element. */
  visuallyHidden: {},
  /** Styles applied to the label elements. */
  label: {},
  /** Styles applied to the label of the "no value" input when it is active. */
  labelEmptyValueActive: {},
  /** Styles applied to the icon wrapping elements. */
  icon: {},
  /** Styles applied to the icon wrapping elements when empty. */
  iconEmpty: {},
  /** Styles applied to the icon wrapping elements when filled. */
  iconFilled: {},
  /** Styles applied to the icon wrapping elements when hover. */
  iconHover: {},
  /** Styles applied to the icon wrapping elements when focus. */
  iconFocus: {},
  /** Styles applied to the icon wrapping elements when active. */
  iconActive: {},
  /** Styles applied to the icon wrapping elements when decimals are necessary. */
  decimal: {},
};
