import { createTheme } from "@mui/material";
import { AccordionStyleOverrides } from "./Accordion";
import { AccordionActionsStyleOverrides } from "./AccordionActions";
import { AccordionDetailsStyleOverrides } from "./AccordionDetails";
import { AccordionSummaryStyleOverrides } from "./AccordionSummary";
import { AlertStyleOverrides } from "./Alert";
import { AlertTitleStyleOverrides } from "./AlertTitle";
import { AppBarStyleOverrides } from "./AppBar";
import { AutocompleteStyleOverrides } from "./Autocomplete";
import { AvatarStyleOverrides } from "./Avatar";
import { AvatarGroupStyleOverrides } from "./AvatarGroup";
import { BackdropStyleOverrides } from "./Backdrop";
import { BadgeStyleOverrides } from "./Badge";
import { BottomNavigationStyleOverrides } from "./BottomNavigation";
import { BottomNavigationActionStyleOverrides } from "./BottomNavigationAction";
import { BreadcrumbsStyleOverrides } from "./Breadcrumbs";
import { ButtonStyleOverrides } from "./Button";
import { ButtonBaseStyleOverrides } from "./ButtonBase";
import { ButtonGroupStyleOverrides } from "./ButtonGroup";
import { CardStyleOverrides } from "./Card";
import { CardActionAreaStyleOverrides } from "./CardActionArea";
import { CardActionsStyleOverrides } from "./CardActions";
import { CardContentStyleOverrides } from "./CardContent";
import { CardHeaderStyleOverrides } from "./CardHeader";
import { CardMediaStyleOverrides } from "./CardMedia";
import { CheckboxStyleOverrides } from "./Checkbox";
import { ChipStyleOverrides } from "./Chip";
import { CircularProgressStyleOverrides } from "./CircularProgress";
import { CollapseStyleOverrides } from "./Collapse";
import { ContainerStyleOverrides } from "./Container";
import { DialogStyleOverrides } from "./Dialog";
import { DialogActionsStyleOverrides } from "./DialogActions";
import { DialogContentStyleOverrides } from "./DialogContent";
import { DialogContentTextStyleOverrides } from "./DialogContentText";
import { DialogTitleStyleOverrides } from "./DialogTitle";
import { DividerStyleOverrides } from "./Divider";
import { DrawerStyleOverrides } from "./Drawer";
import { FilledInputStyleOverrides } from "./FilledInput";
import { FabStyleOverrides } from "./FloatingActionButton";
import { FormControlStyleOverrides } from "./FormControl";
import { FormControlLabelStyleOverrides } from "./FormControlLabel";
import { FormGroupStyleOverrides } from "./FormGroup";
import { FormHelperTextStyleOverrides } from "./FormHelperText";
import { FormLabelStyleOverrides } from "./FormLabel";
import { GridStyleOverrides } from "./Grid";
import { IconStyleOverrides } from "./Icon";
import { IconButtonStyleOverrides } from "./IconButton";
import { ImageListStyleOverrides } from "./ImageList";
import { ImageListItemStyleOverrides } from "./ImageListItem";
import { ImageListItemBarStyleOverrides } from "./ImageListItemBar";
import { InputStyleOverrides } from "./Input";
import { InputAdornmentStyleOverrides } from "./InputAdornment";
import { InputBaseStyleOverrides } from "./InputBase";
import { InputLabelStyleOverrides } from "./InputLabel";
import { LinearProgressStyleOverrides } from "./LinearProgress";
import { LinkStyleOverrides } from "./Link";
import { ListStyleOverrides } from "./List";
import { ListItemStyleOverrides } from "./ListItem";
import { ListItemAvatarStyleOverrides } from "./ListItemAvatar";
import { ListItemButtonStyleOverrides } from "./ListItemButton";
import { ListItemIconStyleOverrides } from "./ListItemIcon";
import { ListItemSecondaryActionStyleOverrides } from "./ListItemSecondaryAction";
import { ListItemTextStyleOverrides } from "./ListItemText";
import { ListSubheaderStyleOverrides } from "./ListSubheader";
import { MenuStyleOverrides } from "./Menu";
import { MenuItemStyleOverrides } from "./MenuItem";
import { MobileStepperStyleOverrides } from "./MobileStepper";
import { ModalStyleOverrides } from "./Modal";
import { NativeSelectStyleOverrides } from "./NativeSelect";
import { OutlinedInputStyleOverrides } from "./OutlinedInput";
import { PaginationStyleOverrides } from "./Pagination";
import { PaginationItemStyleOverrides } from "./PaginationItem";
import { PaperStyleOverrides } from "./Paper";
import { PopoverStyleOverrides } from "./Popover";
import { RadioStyleOverrides } from "./Radio";
import { RatingStyleOverrides } from "./Rating";
import { SelectStyleOverrides } from "./Select";
import { SkeletonStyleOverrides } from "./Skeleton";
import { SliderStyleOverrides } from "./Slider";
import { SnackbarStyleOverrides } from "./Snackbar";
import { SnackbarContentStyleOverrides } from "./SnackbarContent";
import { SpeedDialStyleOverrides } from "./SpeedDial";
import { SpeedDialActionStyleOverrides } from "./SpeedDialAction";
import { SpeedDialIconStyleOverrides } from "./SpeedDialIcon";
import { StepStyleOverrides } from "./Step";
import { StepButtonStyleOverrides } from "./StepButton";
import { StepConnectorStyleOverrides } from "./StepConnector";
import { StepContentStyleOverrides } from "./StepContent";
import { StepIconStyleOverrides } from "./StepIcon";
import { StepLabelStyleOverrides } from "./StepLabel";
import { StepperStyleOverrides } from "./Stepper";
import { SvgIconStyleOverrides } from "./SvgIcon";
import { SwitchStyleOverrides } from "./Switch";
import { TabStyleOverrides } from "./Tab";
import { TableStyleOverrides } from "./Table";
import { TableBodyStyleOverrides } from "./TableBody";
import { TableCellStyleOverrides } from "./TableCell";
import { TableContainerStyleOverrides } from "./TableContainer";
import { TableFooterStyleOverrides } from "./TableFooter";
import { TableHeadStyleOverrides } from "./TableHead";
import { TablePaginationStyleOverrides } from "./TablePagination";
import { TableRowStyleOverrides } from "./TableRow";
import { TableSortLabelStyleOverrides } from "./TableSortLabel";
import { TabsStyleOverrides } from "./Tabs";
import { TextFieldStyleOverrides } from "./TextField";
import { ToggleButtonStyleOverrides } from "./ToggleButton";
import { ToggleButtonGroupStyleOverrides } from "./ToggleButtonGroup";
import { ToolbarStyleOverrides } from "./Toolbar";
import { TooltipStyleOverrides } from "./Tooltip";
import { TouchRippleStyleOverrides } from "./TouchRipple";
import { TypographyStyleOverrides } from "./Typography";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#0081ff",
    },
    secondary: {
      main: "#e03997",
    },
    success: {
      main: "#39b54a",
    },
    info: {
      main: "#8799a3",
    },
    warning: {
      main: "#fbbd08",
    },
    error: {
      main: "#e54d42",
    },
  },
  components: {
    MuiAlert: {
      defaultProps: {},
      styleOverrides: AlertStyleOverrides,
    },
    MuiAlertTitle: {
      defaultProps: {},
      styleOverrides: AlertTitleStyleOverrides,
    },
    MuiAppBar: {
      defaultProps: {},
      styleOverrides: AppBarStyleOverrides,
    },
    MuiAutocomplete: {
      defaultProps: {},
      styleOverrides: AutocompleteStyleOverrides,
    },
    MuiAvatar: {
      defaultProps: {},
      styleOverrides: AvatarStyleOverrides,
    },
    MuiAvatarGroup: {
      defaultProps: {},
      styleOverrides: AvatarGroupStyleOverrides,
    },
    MuiBackdrop: {
      defaultProps: {},
      styleOverrides: BackdropStyleOverrides,
    },
    MuiBadge: {
      defaultProps: {},
      styleOverrides: BadgeStyleOverrides,
    },
    MuiBottomNavigation: {
      defaultProps: {},
      styleOverrides: BottomNavigationStyleOverrides,
    },
    MuiBottomNavigationAction: {
      defaultProps: {},
      styleOverrides: BottomNavigationActionStyleOverrides,
    },
    MuiBreadcrumbs: {
      defaultProps: {},
      styleOverrides: BreadcrumbsStyleOverrides,
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: ButtonStyleOverrides,
    },
    MuiButtonBase: {
      defaultProps: {},
      styleOverrides: ButtonBaseStyleOverrides,
    },
    MuiButtonGroup: {
      defaultProps: {},
      styleOverrides: ButtonGroupStyleOverrides,
    },
    MuiCard: {
      defaultProps: {},
      styleOverrides: CardStyleOverrides,
    },
    MuiCardActionArea: {
      defaultProps: {},
      styleOverrides: CardActionAreaStyleOverrides,
    },
    MuiCardActions: {
      defaultProps: {},
      styleOverrides: CardActionsStyleOverrides,
    },
    MuiCardContent: {
      defaultProps: {},
      styleOverrides: CardContentStyleOverrides,
    },
    MuiCardHeader: {
      defaultProps: {},
      styleOverrides: CardHeaderStyleOverrides,
    },
    MuiCardMedia: {
      defaultProps: {},
      styleOverrides: CardMediaStyleOverrides,
    },
    MuiCheckbox: {
      defaultProps: {},
      styleOverrides: CheckboxStyleOverrides,
    },
    MuiChip: {
      defaultProps: {},
      styleOverrides: ChipStyleOverrides,
    },
    MuiCircularProgress: {
      defaultProps: {},
      styleOverrides: CircularProgressStyleOverrides,
    },
    MuiCollapse: {
      defaultProps: {},
      styleOverrides: CollapseStyleOverrides,
    },
    MuiContainer: {
      defaultProps: {},
      styleOverrides: ContainerStyleOverrides,
    },
    MuiCssBaseline: {
      defaultProps: {},
      styleOverrides: {},
    },
    MuiDialog: {
      defaultProps: {},
      styleOverrides: DialogStyleOverrides,
    },
    MuiDialogActions: {
      defaultProps: {},
      styleOverrides: DialogActionsStyleOverrides,
    },
    MuiDialogContent: {
      defaultProps: {},
      styleOverrides: DialogContentStyleOverrides,
    },
    MuiDialogContentText: {
      defaultProps: {},
      styleOverrides: DialogContentTextStyleOverrides,
    },
    MuiDialogTitle: {
      defaultProps: {},
      styleOverrides: DialogTitleStyleOverrides,
    },
    MuiDivider: {
      defaultProps: {},
      styleOverrides: DividerStyleOverrides,
    },
    MuiDrawer: {
      defaultProps: {},
      styleOverrides: DrawerStyleOverrides,
    },
    MuiAccordion: {
      defaultProps: {},
      styleOverrides: AccordionStyleOverrides,
    },
    MuiAccordionActions: {
      defaultProps: {},
      styleOverrides: AccordionActionsStyleOverrides,
    },
    MuiAccordionDetails: {
      defaultProps: {},
      styleOverrides: AccordionDetailsStyleOverrides,
    },
    MuiAccordionSummary: {
      defaultProps: {},
      styleOverrides: AccordionSummaryStyleOverrides,
    },
    MuiFab: {
      defaultProps: {},
      styleOverrides: FabStyleOverrides,
    },
    MuiFilledInput: {
      defaultProps: {},
      styleOverrides: FilledInputStyleOverrides,
    },
    MuiFormControl: {
      defaultProps: {},
      styleOverrides: FormControlStyleOverrides,
    },
    MuiFormControlLabel: {
      defaultProps: {},
      styleOverrides: FormControlLabelStyleOverrides,
    },
    MuiFormGroup: {
      defaultProps: {},
      styleOverrides: FormGroupStyleOverrides,
    },
    MuiFormHelperText: {
      defaultProps: {},
      styleOverrides: FormHelperTextStyleOverrides,
    },
    MuiFormLabel: {
      defaultProps: {},
      styleOverrides: FormLabelStyleOverrides,
    },
    MuiGrid: {
      defaultProps: {},
      styleOverrides: GridStyleOverrides,
    },
    MuiImageList: {
      defaultProps: {},
      styleOverrides: ImageListStyleOverrides,
    },
    MuiImageListItem: {
      defaultProps: {},
      styleOverrides: ImageListItemStyleOverrides,
    },
    MuiImageListItemBar: {
      defaultProps: {},
      styleOverrides: ImageListItemBarStyleOverrides,
    },
    MuiIcon: {
      defaultProps: {},
      styleOverrides: IconStyleOverrides,
    },
    MuiIconButton: {
      defaultProps: {},
      styleOverrides: IconButtonStyleOverrides,
    },
    MuiInput: {
      defaultProps: {},
      styleOverrides: InputStyleOverrides,
    },
    MuiInputAdornment: {
      defaultProps: {},
      styleOverrides: InputAdornmentStyleOverrides,
    },
    MuiInputBase: {
      defaultProps: {},
      styleOverrides: InputBaseStyleOverrides,
    },
    MuiInputLabel: {
      defaultProps: {},
      styleOverrides: InputLabelStyleOverrides,
    },
    MuiLinearProgress: {
      defaultProps: {},
      styleOverrides: LinearProgressStyleOverrides,
    },
    MuiLink: {
      defaultProps: {},
      styleOverrides: LinkStyleOverrides,
    },
    MuiList: {
      defaultProps: {},
      styleOverrides: ListStyleOverrides,
    },
    MuiListItem: {
      defaultProps: {},
      styleOverrides: ListItemStyleOverrides,
    },
    MuiListItemButton: {
      defaultProps: {},
      styleOverrides: ListItemButtonStyleOverrides,
    },
    MuiListItemAvatar: {
      defaultProps: {},
      styleOverrides: ListItemAvatarStyleOverrides,
    },
    MuiListItemIcon: {
      defaultProps: {},
      styleOverrides: ListItemIconStyleOverrides,
    },
    MuiListItemSecondaryAction: {
      defaultProps: {},
      styleOverrides: ListItemSecondaryActionStyleOverrides,
    },
    MuiListItemText: {
      defaultProps: {},
      styleOverrides: ListItemTextStyleOverrides,
    },
    MuiListSubheader: {
      defaultProps: {},
      styleOverrides: ListSubheaderStyleOverrides,
    },
    MuiMenu: {
      defaultProps: {},
      styleOverrides: MenuStyleOverrides,
    },
    MuiMenuItem: {
      defaultProps: {},
      styleOverrides: MenuItemStyleOverrides,
    },
    MuiMobileStepper: {
      defaultProps: {},
      styleOverrides: MobileStepperStyleOverrides,
    },
    MuiModal: {
      defaultProps: {},
      styleOverrides: ModalStyleOverrides,
    },
    MuiNativeSelect: {
      defaultProps: {},
      styleOverrides: NativeSelectStyleOverrides,
    },
    MuiOutlinedInput: {
      defaultProps: {},
      styleOverrides: OutlinedInputStyleOverrides,
    },
    MuiPagination: {
      defaultProps: {},
      styleOverrides: PaginationStyleOverrides,
    },
    MuiPaginationItem: {
      defaultProps: {},
      styleOverrides: PaginationItemStyleOverrides,
    },
    MuiPaper: {
      defaultProps: {},
      styleOverrides: PaperStyleOverrides,
    },
    MuiPopper: {
      defaultProps: {},
    },
    MuiPopover: {
      defaultProps: {},
      styleOverrides: PopoverStyleOverrides,
    },
    MuiRadio: {
      defaultProps: {},
      styleOverrides: RadioStyleOverrides,
    },
    MuiRating: {
      defaultProps: {},
      styleOverrides: RatingStyleOverrides,
    },
    MuiScopedCssBaseline: {
      defaultProps: {},
      styleOverrides: {},
    },
    MuiSelect: {
      defaultProps: {},
      styleOverrides: SelectStyleOverrides,
    },
    MuiSkeleton: {
      defaultProps: {},
      styleOverrides: SkeletonStyleOverrides,
    },
    MuiSlider: {
      defaultProps: {},
      styleOverrides: SliderStyleOverrides,
    },
    MuiSnackbar: {
      defaultProps: {},
      styleOverrides: SnackbarStyleOverrides,
    },
    MuiSnackbarContent: {
      defaultProps: {},
      styleOverrides: SnackbarContentStyleOverrides,
    },
    MuiSpeedDial: {
      defaultProps: {},
      styleOverrides: SpeedDialStyleOverrides,
    },
    MuiSpeedDialAction: {
      defaultProps: {},
      styleOverrides: SpeedDialActionStyleOverrides,
    },
    MuiSpeedDialIcon: {
      defaultProps: {},
      styleOverrides: SpeedDialIconStyleOverrides,
    },
    MuiStack: {
      defaultProps: {},
    },
    MuiStep: {
      defaultProps: {},
      styleOverrides: StepStyleOverrides,
    },
    MuiStepButton: {
      defaultProps: {},
      styleOverrides: StepButtonStyleOverrides,
    },
    MuiStepConnector: {
      defaultProps: {},
      styleOverrides: StepConnectorStyleOverrides,
    },
    MuiStepContent: {
      defaultProps: {},
      styleOverrides: StepContentStyleOverrides,
    },
    MuiStepIcon: {
      defaultProps: {},
      styleOverrides: StepIconStyleOverrides,
    },
    MuiStepLabel: {
      defaultProps: {},
      styleOverrides: StepLabelStyleOverrides,
    },
    MuiStepper: {
      defaultProps: {},
      styleOverrides: StepperStyleOverrides,
    },
    MuiSvgIcon: {
      defaultProps: {},
      styleOverrides: SvgIconStyleOverrides,
    },
    MuiSwitch: {
      defaultProps: {},
      styleOverrides: SwitchStyleOverrides,
    },
    MuiTab: {
      defaultProps: {},
      styleOverrides: TabStyleOverrides,
    },
    MuiTable: {
      defaultProps: {},
      styleOverrides: TableStyleOverrides,
    },
    MuiTableBody: {
      defaultProps: {},
      styleOverrides: TableBodyStyleOverrides,
    },
    MuiTableCell: {
      defaultProps: {},
      styleOverrides: TableCellStyleOverrides,
    },
    MuiTableContainer: {
      defaultProps: {},
      styleOverrides: TableContainerStyleOverrides,
    },
    MuiTableFooter: {
      defaultProps: {},
      styleOverrides: TableFooterStyleOverrides,
    },
    MuiTableHead: {
      defaultProps: {},
      styleOverrides: TableHeadStyleOverrides,
    },
    MuiTablePagination: {
      defaultProps: {},
      styleOverrides: TablePaginationStyleOverrides,
    },
    MuiTableRow: {
      defaultProps: {},
      styleOverrides: TableRowStyleOverrides,
    },
    MuiTableSortLabel: {
      defaultProps: {},
      styleOverrides: TableSortLabelStyleOverrides,
    },
    MuiTabs: {
      defaultProps: {},
      styleOverrides: TabsStyleOverrides,
    },
    MuiTextField: {
      defaultProps: {},
      styleOverrides: TextFieldStyleOverrides,
    },
    MuiToggleButton: {
      defaultProps: {},
      styleOverrides: ToggleButtonStyleOverrides,
    },
    MuiToggleButtonGroup: {
      defaultProps: {},
      styleOverrides: ToggleButtonGroupStyleOverrides,
    },
    MuiToolbar: {
      defaultProps: {},
      styleOverrides: ToolbarStyleOverrides,
    },
    MuiTooltip: {
      defaultProps: {},
      styleOverrides: TooltipStyleOverrides,
    },
    MuiTouchRipple: {
      defaultProps: {},
      styleOverrides: TouchRippleStyleOverrides,
    },
    MuiTypography: {
      defaultProps: {},
      styleOverrides: TypographyStyleOverrides,
    },
    MuiUseMediaQuery: {
      defaultProps: {},
    },
  },
});
