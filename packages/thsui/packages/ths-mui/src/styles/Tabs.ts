import { TabsClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TabsStyleOverrides: Partial<
  OverridesStyleRules<keyof TabsClasses, "MuiTabs", DefaultTheme>
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /** Styles applied to the flex container element. */
  flexContainer: {},
  /** Styles applied to the flex container element if `orientation="vertical"`. */
  flexContainerVertical: {},
  /** Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
  centered: {},
  /** Styles applied to the tablist element. */
  scroller: {},
  /** Styles applied to the tablist element if `!variant="scrollable"`. */
  fixed: {},
  /** Styles applied to the tablist element if `variant="scrollable"` and `orientation="horizontal"`. */
  scrollableX: {},
  /** Styles applied to the tablist element if `variant="scrollable"` and `orientation="vertical"`. */
  scrollableY: {},
  /** Styles applied to the tablist element if `variant="scrollable"` and `visibleScrollbar={false}`. */
  hideScrollbar: {},
  /** Styles applied to the ScrollButtonComponent component. */
  scrollButtons: {},
  /** Styles applied to the ScrollButtonComponent component if `allowScrollButtonsMobile={true}`. */
  scrollButtonsHideMobile: {},
  /** Styles applied to the TabIndicator component. */
  indicator: {},
};
