import { DialogClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const DialogStyleOverrides: Partial<
  OverridesStyleRules<keyof DialogClasses, "MuiDialog", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the container element if `scroll="paper"`. */
  scrollPaper: {},
  /** Styles applied to the container element if `scroll="body"`. */
  scrollBody: {},
  /** Styles applied to the container element. */
  container: {},
  /** Styles applied to the Paper component. */
  paper: {},
  /** Styles applied to the Paper component if `scroll="paper"`. */
  paperScrollPaper: {},
  /** Styles applied to the Paper component if `scroll="body"`. */
  paperScrollBody: {},
  /** Styles applied to the Paper component if `maxWidth=false`. */
  paperWidthFalse: {},
  /** Styles applied to the Paper component if `maxWidth="xs"`. */
  paperWidthXs: {},
  /** Styles applied to the Paper component if `maxWidth="sm"`. */
  paperWidthSm: {},
  /** Styles applied to the Paper component if `maxWidth="md"`. */
  paperWidthMd: {},
  /** Styles applied to the Paper component if `maxWidth="lg"`. */
  paperWidthLg: {},
  /** Styles applied to the Paper component if `maxWidth="xl"`. */
  paperWidthXl: {},
  /** Styles applied to the Paper component if `fullWidth={true}`. */
  paperFullWidth: {},
  /** Styles applied to the Paper component if `fullScreen={true}`. */
  paperFullScreen: {},
};
