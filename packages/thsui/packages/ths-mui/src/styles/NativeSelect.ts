import { NativeSelectClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const NativeSelectStyleOverrides: Partial<
  OverridesStyleRules<
    keyof NativeSelectClasses,
    "MuiNativeSelect",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the select component `select` class. */
  select: {},
  /** Styles applied to the select component if `multiple={true}`. */
  multiple: {},
  /** Styles applied to the select component if `variant="filled"`. */
  filled: {},
  /** Styles applied to the select component if `variant="outlined"`. */
  outlined: {},
  /** Styles applied to the select component if `variant="standard"`. */
  standard: {},
  /** State class applied to the select component `disabled` class. */
  disabled: {},
  /** Styles applied to the icon component. */
  icon: {},
  /** Styles applied to the icon component if the popup is open. */
  iconOpen: {},
  /** Styles applied to the icon component if `variant="filled"`. */
  iconFilled: {},
  /** Styles applied to the icon component if `variant="outlined"`. */
  iconOutlined: {},
  /** Styles applied to the icon component if `variant="standard"`. */
  iconStandard: {},
  /** Styles applied to the underlying native input component. */
  nativeInput: {},
};
