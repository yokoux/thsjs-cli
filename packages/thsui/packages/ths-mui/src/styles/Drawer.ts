import { DrawerClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const DrawerStyleOverrides: Partial<
  OverridesStyleRules<keyof DrawerClasses, "MuiDrawer", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `variant="permanent or persistent"`. */
  docked: {},
  /** Styles applied to the Paper component. */
  paper: {},
  /** Styles applied to the Paper component if `anchor="left"`. */
  paperAnchorLeft: {},
  /** Styles applied to the Paper component if `anchor="right"`. */
  paperAnchorRight: {},
  /** Styles applied to the Paper component if `anchor="top"`. */
  paperAnchorTop: {},
  /** Styles applied to the Paper component if `anchor="bottom"`. */
  paperAnchorBottom: {},
  /** Styles applied to the Paper component if `anchor="left"` and `variant` is not "temporary". */
  paperAnchorDockedLeft: {},
  /** Styles applied to the Paper component if `anchor="top"` and `variant` is not "temporary". */
  paperAnchorDockedTop: {},
  /** Styles applied to the Paper component if `anchor="right"` and `variant` is not "temporary". */
  paperAnchorDockedRight: {},
  /** Styles applied to the Paper component if `anchor="bottom"` and `variant` is not "temporary". */
  paperAnchorDockedBottom: {},
  /** Styles applied to the Modal component. */
  modal: {},
};
