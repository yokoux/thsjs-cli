import { AccordionActionsClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AccordionActionsStyleOverrides: Partial<
  OverridesStyleRules<
    keyof AccordionActionsClasses,
    "MuiAccordionActions",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element unless `disableSpacing={true}`. */
  spacing: {},
};
