import { TablePaginationClasses } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { DefaultTheme } from "@mui/private-theming";

export const TablePaginationStyleOverrides: Partial<
  OverridesStyleRules<
    keyof TablePaginationClasses,
    "MuiTablePagination",
    DefaultTheme
  >
> = {
  /** Styles applied to the root element. */
  root: {},
  /** Styles applied to the Toolbar component. */
  toolbar: {},
  /** Styles applied to the spacer element. */
  spacer: {},
  /** Styles applied to the select label Typography element. */
  selectLabel: {},
  /** Styles applied to the Select component `root` element. */
  selectRoot: {},
  /** Styles applied to the Select component `select` class. */
  select: {},
  /** Styles applied to the Select component `icon` class. */
  selectIcon: {},
  /** Styles applied to the Select component `root` element. */
  input: {},
  /** Styles applied to the MenuItem component. */
  menuItem: {},
  /** Styles applied to the displayed rows Typography element. */
  displayedRows: {},
  /** Styles applied to the internal `TablePaginationActions` component. */
  actions: {},
};
