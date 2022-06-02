import { CardHeaderClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const CardHeaderStyleOverrides: Partial<
  OverridesStyleRules<keyof CardHeaderClasses, "MuiCardHeader", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the avatar element. */
  avatar: {},
  /** Styles applied to the action element. */
  action: {},
  /** Styles applied to the content wrapper element. */
  content: {},
  /** Styles applied to the title Typography element. */
  title: {},
  /** Styles applied to the subheader Typography element. */
  subheader: {},
};
