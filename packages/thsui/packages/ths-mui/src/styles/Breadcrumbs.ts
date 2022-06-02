import { BreadcrumbsClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const BreadcrumbsStyleOverrides: Partial<
  OverridesStyleRules<keyof BreadcrumbsClasses, "MuiBreadcrumbs", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the ol element. */
  ol: {},
  /** Styles applied to the li element. */
  li: {},
  /** Styles applied to the separator element. */
  separator: {},
};
