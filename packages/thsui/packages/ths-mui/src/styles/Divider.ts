import { DividerClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const DividerStyleOverrides: Partial<
  OverridesStyleRules<keyof DividerClasses, "MuiDivider", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `absolute={true}`. */
  absolute: {},
  /** Styles applied to the root element if `variant="inset"`. */
  inset: {},
  /** Styles applied to the root element if `variant="fullWidth"`. */
  fullWidth: {},
  /** Styles applied to the root element if `light={true}`. */
  light: {},
  /** Styles applied to the root element if `variant="middle"`. */
  middle: {},
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /** Styles applied to the root element if `flexItem={true}`. */
  flexItem: {},
  /** Styles applied to the root element if divider have text. */
  withChildren: {},
  /** Styles applied to the root element if divider have text and `orientation="vertical"`. */
  withChildrenVertical: {},
  /** Styles applied to the root element if `textAlign="right" orientation="horizontal"`. */
  textAlignRight: {},
  /** Styles applied to the root element if `textAlign="left" orientation="horizontal"`. */
  textAlignLeft: {},
  /** Styles applied to the span children element if `orientation="horizontal"`. */
  wrapper: {},
  /** Styles applied to the span children element if `orientation="vertical"`. */
  wrapperVertical: {},
};
