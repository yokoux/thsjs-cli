import { AvatarGroupClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const AvatarGroupStyleOverrides: Partial<
  OverridesStyleRules<keyof AvatarGroupClasses, "MuiAvatarGroup", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the avatar elements. */
  avatar: {},
};
