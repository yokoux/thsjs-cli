import { ModalClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ModalStyleOverrides: Partial<
  OverridesStyleRules<keyof ModalClasses, "MuiModal", DefaultTheme>
> = {};
