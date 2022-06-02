import { AccordionDetailsClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AccordionDetailsStyleOverrides: Partial<
  OverridesStyleRules<
    keyof AccordionDetailsClasses,
    "MuiAccordionDetails",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
};
