import { ImageListItemBarClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const ImageListItemBarStyleOverrides: Partial<
  OverridesStyleRules<
    keyof ImageListItemBarClasses,
    "MuiImageListItemBar",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `position="bottom"`. */
  positionBottom: {},
  /** Styles applied to the root element if `position="top"`. */
  positionTop: {},
  /** Styles applied to the root element if `position="below"`. */
  positionBelow: {},
  /** Styles applied to the title and subtitle container element. */
  titleWrap: {},
  /** Styles applied to the title and subtitle container element if `position="below"`. */
  titleWrapBelow: {},
  /** Styles applied to the container element if `actionPosition="left"`. */
  titleWrapActionPosLeft: {},
  /** Styles applied to the container element if `actionPosition="right"`. */
  titleWrapActionPosRight: {},
  /** Styles applied to the title container element. */
  title: {},
  /** Styles applied to the subtitle container element. */
  subtitle: {},
  /** Styles applied to the actionIcon if supplied. */
  actionIcon: {},
  /** Styles applied to the actionIcon if `actionPosition="left"`. */
  actionIconActionPosLeft: {},
};
