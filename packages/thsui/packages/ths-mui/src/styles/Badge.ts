import { BadgeClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const BadgeStyleOverrides: Partial<
  OverridesStyleRules<keyof BadgeClasses, "MuiBadge", DefaultTheme>
> = {
  /** Class name applied to the root element. */
  root: {},
  /** Class name applied to the badge `span` element. */
  badge: {},
  /** Class name applied to the badge `span` element if `variant="dot"`. */
  dot: {},
  /** Class name applied to the badge `span` element if `variant="standard"`. */
  standard: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'right' }}`. */
  anchorOriginTopRight: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'right' }}`. */
  anchorOriginBottomRight: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'left' }}`. */
  anchorOriginTopLeft: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'left' }}`. */
  anchorOriginBottomLeft: {},
  /** State class applied to the badge `span` element if `invisible={true}`. */
  invisible: {},
  /** Styles applied to the badge `span` element if `color="primary"`. */
  colorPrimary: {},
  /** Styles applied to the badge `span` element if `color="secondary"`. */
  colorSecondary: {},
  /** Styles applied to the badge `span` element if `color="error"`. */
  colorError: {},
  /** Styles applied to the badge `span` element if `color="info"`. */
  colorInfo: {},
  /** Styles applied to the badge `span` element if `color="success"`. */
  colorSuccess: {},
  /** Styles applied to the badge `span` element if `color="warning"`. */
  colorWarning: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'right' }} overlap="rectangular"`. */
  anchorOriginTopRightRectangular: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'right' }} overlap="rectangular"`. */
  anchorOriginBottomRightRectangular: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'left' }} overlap="rectangular"`. */
  anchorOriginTopLeftRectangular: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'left' }} overlap="rectangular"`. */
  anchorOriginBottomLeftRectangular: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'right' }} overlap="circular"`. */
  anchorOriginTopRightCircular: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'right' }} overlap="circular"`. */
  anchorOriginBottomRightCircular: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'top', 'left' }} overlap="circular"`. */
  anchorOriginTopLeftCircular: {},
  /** Class name applied to the badge `span` element if `anchorOrigin={{ 'bottom', 'left' }} overlap="circular"`. */
  anchorOriginBottomLeftCircular: {},
  /** Class name applied to the badge `span` element if `overlap="rectangular"`. */
  overlapRectangular: {},
  /** Class name applied to the badge `span` element if `overlap="circular"`. */
  overlapCircular: {},
};
