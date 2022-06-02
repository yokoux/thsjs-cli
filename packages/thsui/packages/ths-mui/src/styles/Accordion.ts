import { AccordionClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AccordionStyleOverrides: Partial<
  OverridesStyleRules<keyof AccordionClasses, "MuiAccordion", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element unless `square={true}`. */
  rounded: {},
  /** State class applied to the root element if `expanded={true}`. */
  expanded: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element unless `disableGutters={true}`. */
  gutters: {},
  /** Styles applied to the region element, the container of the children. */
  region: {},
};
