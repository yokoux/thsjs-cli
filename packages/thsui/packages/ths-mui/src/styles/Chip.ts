import { ChipClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ChipStyleOverrides: Partial<
  OverridesStyleRules<keyof ChipClasses, "MuiChip", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: {},
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {},
  /** State class applied to the root element if `disabled={true}`. */
  disabled: {},
  /** Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
  clickable: {},
  /** Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
  clickableColorPrimary: {},
  /** Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
  clickableColorSecondary: {},
  /** Styles applied to the root element if `onDelete` is defined. */
  deletable: {},
  /** Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
  deletableColorPrimary: {},
  /** Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
  deletableColorSecondary: {},
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the root element if `variant="filled"`. */
  filled: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
  outlinedPrimary: {},
  /** Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {},
  /** Styles applied to the avatar element. */
  avatar: {},
  /** Styles applied to the avatar element if `size="small"`. */
  avatarSmall: {},
  /** Styles applied to the avatar element if `size="medium"`. */
  avatarMedium: {},
  /** Styles applied to the avatar element if `color="primary"`. */
  avatarColorPrimary: {},
  /** Styles applied to the avatar element if `color="secondary"`. */
  avatarColorSecondary: {},
  /** Styles applied to the icon element. */
  icon: {},
  /** Styles applied to the icon element if `size="small"`. */
  iconSmall: {},
  /** Styles applied to the icon element if `size="medium"`. */
  iconMedium: {},
  /** Styles applied to the icon element if `color="primary"`. */
  iconColorPrimary: {},
  /** Styles applied to the icon element if `color="secondary"`. */
  iconColorSecondary: {},
  /** Styles applied to the label `span` element. */
  label: {},
  /** Styles applied to the label `span` element if `size="small"`. */
  labelSmall: {},
  /** Styles applied to the label `span` element if `size="medium"`. */
  labelMedium: {},
  /** Styles applied to the deleteIcon element. */
  deleteIcon: {},
  /** Styles applied to the deleteIcon element if `size="small"`. */
  deleteIconSmall: {},
  /** Styles applied to the deleteIcon element if `size="medium"`. */
  deleteIconMedium: {},
  /** Styles applied to the deleteIcon element if `color="primary"` and `variant="filled"`. */
  deleteIconColorPrimary: {},
  /** Styles applied to the deleteIcon element if `color="secondary"` and `variant="filled"`. */
  deleteIconColorSecondary: {},
  /** Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
  deleteIconOutlinedColorPrimary: {},
  /** Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
  deleteIconOutlinedColorSecondary: {},
  /** State class applied to the root element if keyboard focused. */
  focusVisible: {},
};
