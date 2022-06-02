import { AutocompleteClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AutocompleteStyleOverrides: Partial<
  OverridesStyleRules<
    keyof AutocompleteClasses,
    "MuiAutocomplete",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {},
  /** State class applied to the root element if focused. */
  focused: {},
  /** Styles applied to the tag elements, e.g. the chips. */
  tag: {},
  /** Styles applied to the tag elements, e.g. the chips if `size="small"`. */
  tagSizeSmall: {},
  /** Styles applied to the tag elements, e.g. the chips if `size="medium"`. */
  tagSizeMedium: {},
  /** Styles applied when the popup icon is rendered. */
  hasPopupIcon: {},
  /** Styles applied when the clear icon is rendered. */
  hasClearIcon: {},
  /** Styles applied to the Input element. */
  inputRoot: {},
  /** Styles applied to the input element. */
  input: {},
  /** Styles applied to the input element if tag focused. */
  inputFocused: {},
  /** Styles applied to the endAdornment element. */
  endAdornment: {},
  /** Styles applied to the clear indicator. */
  clearIndicator: {},
  /** Styles applied to the popup indicator. */
  popupIndicator: {},
  /** Styles applied to the popup indicator if the popup is open. */
  popupIndicatorOpen: {},
  /** Styles applied to the popper element. */
  popper: {},
  /** Styles applied to the popper element if `disablePortal={true}`. */
  popperDisablePortal: {},
  /** Styles applied to the Paper component. */
  paper: {},
  /** Styles applied to the listbox component. */
  listbox: {},
  /** Styles applied to the loading wrapper. */
  loading: {},
  /** Styles applied to the no option wrapper. */
  noOptions: {},
  /** Styles applied to the option elements. */
  option: {},
  /** Styles applied to the group's label elements. */
  groupLabel: {},
  /** Styles applied to the group's ul elements. */
  groupUl: {},
};
