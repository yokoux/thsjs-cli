import { GridClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const GridStyleOverrides: Partial<
  OverridesStyleRules<keyof GridClasses, "MuiGrid", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `container={true}`. */
  container: {},
  /** Styles applied to the root element if `item={true}`. */
  item: {},
  /** Styles applied to the root element if `zeroMinWidth={true}`. */
  zeroMinWidth: {},
  /** Styles applied to the root element if `direction="column"`. */
  "direction-xs-column": {},
  /** Styles applied to the root element if `direction="column-reverse"`. */
  "direction-xs-column-reverse": {},
  /** Styles applied to the root element if `direction="row-reverse"`. */
  "direction-xs-row-reverse": {},
  /** Styles applied to the root element if `wrap="nowrap"`. */
  "wrap-xs-nowrap": {},
  /** Styles applied to the root element if `wrap="reverse"`. */
  "wrap-xs-wrap-reverse": {},
  "spacing-xs-1": {},
  "spacing-xs-2": {},
  "spacing-xs-3": {},
  "spacing-xs-4": {},
  "spacing-xs-5": {},
  "spacing-xs-6": {},
  "spacing-xs-7": {},
  "spacing-xs-8": {},
  "spacing-xs-9": {},
  "spacing-xs-10": {},
  "grid-xs-auto": {},
  "grid-xs-true": {},
  "grid-xs-1": {},
  "grid-xs-2": {},
  "grid-xs-3": {},
  "grid-xs-4": {},
  "grid-xs-5": {},
  "grid-xs-6": {},
  "grid-xs-7": {},
  "grid-xs-8": {},
  "grid-xs-9": {},
  "grid-xs-10": {},
  "grid-xs-11": {},
  "grid-xs-12": {},
};
