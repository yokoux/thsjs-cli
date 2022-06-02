import { AccordionSummaryClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AccordionSummaryStyleOverrides: Partial<
  OverridesStyleRules<
    keyof AccordionSummaryClasses,
    "MuiAccordionSummary",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** State class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
  expanded: {},
  /** State class applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element unless `disableGutters={true}`. */
  gutters: {},
  /** Styles applied to the children wrapper element unless `disableGutters={true}`. */
  contentGutters: {},
  /** Styles applied to the children wrapper element. */
  content: {},
  /** Styles applied to the `expandIcon`'s wrapper element. */
  expandIconWrapper: {},
};
