import { ContainerClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ContainerStyleOverrides: Partial<
  OverridesStyleRules<keyof ContainerClasses, "MuiContainer", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `disableGutters={true}`. */
  disableGutters: {},
  /** Styles applied to the root element if `fixed={true}`. */
  fixed: {},
  /** Styles applied to the root element if `maxWidth="xs"`. */
  maxWidthXs: {},
  /** Styles applied to the root element if `maxWidth="sm"`. */
  maxWidthSm: {},
  /** Styles applied to the root element if `maxWidth="md"`. */
  maxWidthMd: {},
  /** Styles applied to the root element if `maxWidth="lg"`. */
  maxWidthLg: {},
  /** Styles applied to the root element if `maxWidth="xl"`. */
  maxWidthXl: {},
};
