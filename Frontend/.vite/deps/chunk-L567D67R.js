import {
  CalendarOrClockPicker,
  DesktopWrapper,
  KeyboardDateInput,
  MobileWrapper,
  PickersToolbar,
  PureDateInput,
  parseNonNullablePickerDate,
  parsePickerInputValue,
  useDateValidation,
  useDefaultDates,
  useLocaleText,
  usePickerState,
  useUtils
} from "./chunk-63PHC5P6.js";
import {
  Typography_default
} from "./chunk-S3OBIIMB.js";
import {
  useThemeProps
} from "./chunk-6VRJ5KTC.js";
import {
  useMediaQuery
} from "./chunk-XRW6V3KJ.js";
import {
  styled_default
} from "./chunk-A3KA7VNO.js";
import {
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses
} from "./chunk-BO3VFK36.js";
import {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose
} from "./chunk-47ZW5A4E.js";
import {
  require_prop_types
} from "./chunk-44IBZ3UN.js";
import {
  require_jsx_runtime
} from "./chunk-4TP5FOBB.js";
import {
  _extends,
  init_extends
} from "./chunk-CGZNCG4B.js";
import {
  require_react
} from "./chunk-Y4AEIJ5V.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// ../node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// ../node_modules/@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// ../node_modules/@mui/x-date-pickers/DatePicker/shared.js
init_extends();
var isYearOnlyView = (views) => views.length === 1 && views[0] === "year";
var isYearAndMonthViews = (views) => views.length === 2 && views.indexOf("month") !== -1 && views.indexOf("year") !== -1;
var getFormatAndMaskByViews = (views, utils) => {
  if (isYearOnlyView(views)) {
    return {
      inputFormat: utils.formats.year
    };
  }
  if (isYearAndMonthViews(views)) {
    return {
      disableMaskedInput: true,
      inputFormat: utils.formats.monthAndYear
    };
  }
  return {
    inputFormat: utils.formats.keyboardDate
  };
};
function useDatePickerDefaultizedProps(props, name) {
  var _themeProps$views;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  const views = (_themeProps$views = themeProps.views) != null ? _themeProps$views : ["year", "day"];
  return _extends({
    openTo: "day",
    disableFuture: false,
    disablePast: false
  }, getFormatAndMaskByViews(views, utils), themeProps, {
    views,
    minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
var datePickerValueManager = {
  emptyValue: null,
  getTodayValue: (utils) => utils.date(),
  parseInput: parsePickerInputValue,
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
};

// ../node_modules/@mui/x-date-pickers/DatePicker/DatePickerToolbar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());

// ../node_modules/@mui/x-date-pickers/DatePicker/datePickerToolbarClasses.js
function getDatePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDatePickerToolbar", slot);
}
var datePickerToolbarClasses = generateUtilityClasses("MuiDatePickerToolbar", ["root", "title"]);

// ../node_modules/@mui/x-date-pickers/DatePicker/DatePickerToolbar.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    title: ["title"]
  };
  return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
};
var DatePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
var DatePickerToolbarTitle = styled_default(Typography_default, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (_, styles) => styles.title
})(({
  ownerState
}) => _extends({}, ownerState.isLandscape && {
  margin: "auto 16px auto auto"
}));
var DatePickerToolbar = React.forwardRef(function DatePickerToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePickerToolbar"
  });
  const {
    parsedValue,
    isLandscape,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarPlaceholder = "––",
    toolbarTitle: toolbarTitleProp,
    views
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const utils = useUtils();
  const localeText = useLocaleText();
  const classes = useUtilityClasses(props);
  const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.datePickerDefaultToolbarTitle;
  const dateText = React.useMemo(() => {
    if (!parsedValue) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils.formatByString(parsedValue, toolbarFormat);
    }
    if (isYearOnlyView(views)) {
      return utils.format(parsedValue, "year");
    }
    if (isYearAndMonthViews(views)) {
      return utils.format(parsedValue, "month");
    }
    return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(parsedValue, "normalDateWithWeekday") : utils.format(parsedValue, "normalDate");
  }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils, views]);
  const ownerState = props;
  return (0, import_jsx_runtime.jsx)(DatePickerToolbarRoot, _extends({
    ref,
    toolbarTitle,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    isLandscape,
    className: classes.root
  }, other, {
    children: (0, import_jsx_runtime.jsx)(DatePickerToolbarTitle, {
      variant: "h4",
      align: isLandscape ? "left" : "center",
      ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});

// ../node_modules/@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["onChange", "PopperProps", "PaperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
var DesktopDatePicker = React2.forwardRef(function DesktopDatePicker2(inProps, ref) {
  const props = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
  const validationError = useDateValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, datePickerValueManager);
  const {
    PopperProps,
    PaperProps,
    ToolbarComponent = DatePickerToolbar,
    TransitionComponent,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const AllDateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return (0, import_jsx_runtime2.jsx)(DesktopWrapper, _extends({}, wrapperProps, {
    DateInputProps: AllDateInputProps,
    KeyboardDateInputComponent: KeyboardDateInput,
    PopperProps,
    PaperProps,
    TransitionComponent,
    components,
    componentsProps,
    children: (0, import_jsx_runtime2.jsx)(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps: AllDateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
true ? DesktopDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: import_prop_types.default.instanceOf(RegExp),
  autoFocus: import_prop_types.default.bool,
  children: import_prop_types.default.node,
  /**
   * className applied to the root component.
   */
  className: import_prop_types.default.string,
  /**
   * If `true` the popup or dialog will immediately close after submitting full date.
   * @default `true` for Desktop, `false` for Mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types.default.bool,
  /**
   * Overrideable components.
   * @default {}
   */
  components: import_prop_types.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   */
  componentsProps: import_prop_types.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types.default.func,
  /**
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: import_prop_types.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true` future days are disabled.
   * @default false
   */
  disableFuture: import_prop_types.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types.default.bool,
  /**
   * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
   * @default false
   */
  disableMaskedInput: import_prop_types.default.bool,
  /**
   * Do not render open picker button (renders only text field with validation).
   * @default false
   */
  disableOpenPicker: import_prop_types.default.bool,
  /**
   * If `true` past days are disabled.
   * @default false
   */
  disablePast: import_prop_types.default.bool,
  /**
   * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
   * @template TInputDate, TDate
   * @param {TInputDate} date The date from which we want to add an aria-text.
   * @param {MuiPickersAdapter<TDate>} utils The utils to manipulate the date.
   * @returns {string} The aria-text to render inside the dialog.
   * @default (date, utils) => `Choose date, selected date is ${utils.format(utils.date(date), 'fullDate')}`
   */
  getOpenDialogAriaText: import_prop_types.default.func,
  /**
   * Get aria-label text for switching between views button.
   * @param {CalendarPickerView} currentView The view from which we want to get the button text.
   * @returns {string} The label of the view.
   * @deprecated Use the `localeText` prop of `LocalizationProvider` instead, see https://mui.com/x/react-date-pickers/localization/.
   */
  getViewSwitchingButtonText: import_prop_types.default.func,
  ignoreInvalidInputs: import_prop_types.default.bool,
  /**
   * Props to pass to keyboard input adornment.
   */
  InputAdornmentProps: import_prop_types.default.object,
  /**
   * Format string.
   */
  inputFormat: import_prop_types.default.string,
  InputProps: import_prop_types.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({
    current: import_prop_types.default.object
  })]),
  label: import_prop_types.default.node,
  /**
   * Left arrow icon aria-label text.
   * @deprecated
   */
  leftArrowButtonText: import_prop_types.default.string,
  /**
   * If `true` renders `LoadingComponent` in calendar instead of calendar view.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types.default.bool,
  /**
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: import_prop_types.default.string,
  /**
   * Maximal selectable date. @DateIOType
   */
  maxDate: import_prop_types.default.any,
  /**
   * Minimal selectable date. @DateIOType
   */
  minDate: import_prop_types.default.any,
  /**
   * Callback fired when date is accepted @DateIOType.
   * @template TValue
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types.default.func,
  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   * @template TValue
   * @param {TValue} value The new parsed value.
   * @param {string} keyboardInputValue The current value of the keyboard input.
   */
  onChange: import_prop_types.default.func.isRequired,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   */
  onClose: import_prop_types.default.func,
  /**
   * Callback that fired when input value or new `value` prop validation returns **new** validation error (or value is valid after error).
   * In case of validation error detected `reason` prop return non-null value and `TextField` must be displayed in `error` state.
   * This can be used to render appropriate form error.
   *
   * [Read the guide](https://next.material-ui-pickers.dev/guides/forms) about form integration and error displaying.
   * @DateIOType
   *
   * @template TError, TInputValue
   * @param {TError} reason The reason why the current value is not valid.
   * @param {TInputValue} value The invalid value.
   */
  onError: import_prop_types.default.func,
  /**
   * Callback firing on month change @DateIOType.
   * @template TDate
   * @param {TDate} month The new month.
   * @returns {void|Promise} -
   */
  onMonthChange: import_prop_types.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: import_prop_types.default.func,
  /**
   * Callback fired on view change.
   * @param {CalendarPickerView} view The new view.
   */
  onViewChange: import_prop_types.default.func,
  /**
   * Callback firing on year change @DateIOType.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types.default.func,
  /**
   * Control the popup or dialog open state.
   */
  open: import_prop_types.default.bool,
  /**
   * Props to pass to keyboard adornment button.
   */
  OpenPickerButtonProps: import_prop_types.default.object,
  /**
   * First view to show.
   * Must be a valid option from `views` list
   * @default 'day'
   */
  openTo: import_prop_types.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types.default.oneOf(["landscape", "portrait"]),
  /**
   * Paper props passed down to [Paper](https://mui.com/material-ui/api/paper/) component.
   */
  PaperProps: import_prop_types.default.object,
  /**
   * Popper props passed down to [Popper](https://mui.com/material-ui/api/popper/) component.
   */
  PopperProps: import_prop_types.default.object,
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: import_prop_types.default.bool,
  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: import_prop_types.default.bool,
  /**
   * Custom renderer for day. Check the [PickersDay](https://mui.com/x/api/date-pickers/pickers-day/) component.
   * @template TDate
   * @param {TDate} day The day to render.
   * @param {Array<TDate | null>} selectedDays The days currently selected.
   * @param {PickersDayProps<TDate>} pickersDayProps The props of the day to render.
   * @returns {JSX.Element} The element representing the day.
   */
  renderDay: import_prop_types.default.func,
  /**
   * The `renderInput` prop allows you to customize the rendered input.
   * The `props` argument of this render prop contains props of [TextField](https://mui.com/material-ui/api/text-field/#props) that you need to forward.
   * Pay specific attention to the `ref` and `inputProps` keys.
   * @example ```jsx
   * renderInput={props => <TextField {...props} />}
   * ````
   * @param {MuiTextFieldPropsType} props The props of the input.
   * @returns {React.ReactNode} The node to render as the input.
   */
  renderInput: import_prop_types.default.func.isRequired,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types.default.func,
  /**
   * Custom formatter to be passed into Rifm component.
   * @param {string} str The un-formatted string.
   * @returns {string} The formatted string.
   */
  rifmFormatter: import_prop_types.default.func,
  /**
   * Right arrow icon aria-label text.
   * @deprecated
   */
  rightArrowButtonText: import_prop_types.default.string,
  /**
   * Disable specific date. @DateIOType
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types.default.func,
  /**
   * Disable specific months dynamically.
   * Works like `shouldDisableDate` but for month selection view @DateIOType.
   * @template TDate
   * @param {TDate} month The month to check.
   * @returns {boolean} If `true` the month will be disabled.
   */
  shouldDisableMonth: import_prop_types.default.func,
  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} Returns `true` if the year should be disabled.
   */
  shouldDisableYear: import_prop_types.default.func,
  /**
   * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: import_prop_types.default.bool,
  /**
   * Component that will replace default toolbar renderer.
   * @default DatePickerToolbar
   */
  ToolbarComponent: import_prop_types.default.elementType,
  /**
   * Date format, that is displaying in toolbar.
   */
  toolbarFormat: import_prop_types.default.string,
  /**
   * Mobile picker date value placeholder, displaying if `value` === `null`.
   * @default '–'
   */
  toolbarPlaceholder: import_prop_types.default.node,
  /**
   * Mobile picker title, displaying in the toolbar.
   * @default 'Select date'
   */
  toolbarTitle: import_prop_types.default.node,
  /**
   * Custom component for popper [Transition](https://mui.com/material-ui/transitions/#transitioncomponent-prop).
   */
  TransitionComponent: import_prop_types.default.elementType,
  /**
   * The value of the picker.
   */
  value: import_prop_types.default.any,
  /**
   * Array of views to show.
   * @default ['year', 'day']
   */
  views: import_prop_types.default.arrayOf(import_prop_types.default.oneOf(["day", "month", "year"]).isRequired)
} : void 0;

// ../node_modules/@mui/x-date-pickers/MobileDatePicker/MobileDatePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded3 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];
var MobileDatePicker = React3.forwardRef(function MobileDatePicker2(inProps, ref) {
  const props = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
  const validationError = useDateValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, datePickerValueManager);
  const {
    ToolbarComponent = DatePickerToolbar,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return (0, import_jsx_runtime3.jsx)(MobileWrapper, _extends({}, other, wrapperProps, {
    DateInputProps,
    PureDateInputComponent: PureDateInput,
    components,
    componentsProps,
    children: (0, import_jsx_runtime3.jsx)(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
true ? MobileDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: import_prop_types2.default.instanceOf(RegExp),
  autoFocus: import_prop_types2.default.bool,
  children: import_prop_types2.default.node,
  /**
   * className applied to the root component.
   */
  className: import_prop_types2.default.string,
  /**
   * If `true` the popup or dialog will immediately close after submitting full date.
   * @default `true` for Desktop, `false` for Mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types2.default.bool,
  /**
   * Overrideable components.
   * @default {}
   */
  components: import_prop_types2.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   */
  componentsProps: import_prop_types2.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types2.default.func,
  /**
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: import_prop_types2.default.any,
  /**
   * Props applied to the [`Dialog`](https://mui.com/material-ui/api/dialog/) element.
   */
  DialogProps: import_prop_types2.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * If `true` future days are disabled.
   * @default false
   */
  disableFuture: import_prop_types2.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types2.default.bool,
  /**
   * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
   * @default false
   */
  disableMaskedInput: import_prop_types2.default.bool,
  /**
   * Do not render open picker button (renders only text field with validation).
   * @default false
   */
  disableOpenPicker: import_prop_types2.default.bool,
  /**
   * If `true` past days are disabled.
   * @default false
   */
  disablePast: import_prop_types2.default.bool,
  /**
   * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
   * @template TInputDate, TDate
   * @param {TInputDate} date The date from which we want to add an aria-text.
   * @param {MuiPickersAdapter<TDate>} utils The utils to manipulate the date.
   * @returns {string} The aria-text to render inside the dialog.
   * @default (date, utils) => `Choose date, selected date is ${utils.format(utils.date(date), 'fullDate')}`
   */
  getOpenDialogAriaText: import_prop_types2.default.func,
  /**
   * Get aria-label text for switching between views button.
   * @param {CalendarPickerView} currentView The view from which we want to get the button text.
   * @returns {string} The label of the view.
   * @deprecated Use the `localeText` prop of `LocalizationProvider` instead, see https://mui.com/x/react-date-pickers/localization/.
   */
  getViewSwitchingButtonText: import_prop_types2.default.func,
  ignoreInvalidInputs: import_prop_types2.default.bool,
  /**
   * Props to pass to keyboard input adornment.
   */
  InputAdornmentProps: import_prop_types2.default.object,
  /**
   * Format string.
   */
  inputFormat: import_prop_types2.default.string,
  InputProps: import_prop_types2.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.shape({
    current: import_prop_types2.default.object
  })]),
  label: import_prop_types2.default.node,
  /**
   * Left arrow icon aria-label text.
   * @deprecated
   */
  leftArrowButtonText: import_prop_types2.default.string,
  /**
   * If `true` renders `LoadingComponent` in calendar instead of calendar view.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types2.default.bool,
  /**
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: import_prop_types2.default.string,
  /**
   * Maximal selectable date. @DateIOType
   */
  maxDate: import_prop_types2.default.any,
  /**
   * Minimal selectable date. @DateIOType
   */
  minDate: import_prop_types2.default.any,
  /**
   * Callback fired when date is accepted @DateIOType.
   * @template TValue
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types2.default.func,
  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   * @template TValue
   * @param {TValue} value The new parsed value.
   * @param {string} keyboardInputValue The current value of the keyboard input.
   */
  onChange: import_prop_types2.default.func.isRequired,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   */
  onClose: import_prop_types2.default.func,
  /**
   * Callback that fired when input value or new `value` prop validation returns **new** validation error (or value is valid after error).
   * In case of validation error detected `reason` prop return non-null value and `TextField` must be displayed in `error` state.
   * This can be used to render appropriate form error.
   *
   * [Read the guide](https://next.material-ui-pickers.dev/guides/forms) about form integration and error displaying.
   * @DateIOType
   *
   * @template TError, TInputValue
   * @param {TError} reason The reason why the current value is not valid.
   * @param {TInputValue} value The invalid value.
   */
  onError: import_prop_types2.default.func,
  /**
   * Callback firing on month change @DateIOType.
   * @template TDate
   * @param {TDate} month The new month.
   * @returns {void|Promise} -
   */
  onMonthChange: import_prop_types2.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: import_prop_types2.default.func,
  /**
   * Callback fired on view change.
   * @param {CalendarPickerView} view The new view.
   */
  onViewChange: import_prop_types2.default.func,
  /**
   * Callback firing on year change @DateIOType.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types2.default.func,
  /**
   * Control the popup or dialog open state.
   */
  open: import_prop_types2.default.bool,
  /**
   * Props to pass to keyboard adornment button.
   */
  OpenPickerButtonProps: import_prop_types2.default.object,
  /**
   * First view to show.
   * Must be a valid option from `views` list
   * @default 'day'
   */
  openTo: import_prop_types2.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types2.default.oneOf(["landscape", "portrait"]),
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: import_prop_types2.default.bool,
  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: import_prop_types2.default.bool,
  /**
   * Custom renderer for day. Check the [PickersDay](https://mui.com/x/api/date-pickers/pickers-day/) component.
   * @template TDate
   * @param {TDate} day The day to render.
   * @param {Array<TDate | null>} selectedDays The days currently selected.
   * @param {PickersDayProps<TDate>} pickersDayProps The props of the day to render.
   * @returns {JSX.Element} The element representing the day.
   */
  renderDay: import_prop_types2.default.func,
  /**
   * The `renderInput` prop allows you to customize the rendered input.
   * The `props` argument of this render prop contains props of [TextField](https://mui.com/material-ui/api/text-field/#props) that you need to forward.
   * Pay specific attention to the `ref` and `inputProps` keys.
   * @example ```jsx
   * renderInput={props => <TextField {...props} />}
   * ````
   * @param {MuiTextFieldPropsType} props The props of the input.
   * @returns {React.ReactNode} The node to render as the input.
   */
  renderInput: import_prop_types2.default.func.isRequired,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types2.default.func,
  /**
   * Custom formatter to be passed into Rifm component.
   * @param {string} str The un-formatted string.
   * @returns {string} The formatted string.
   */
  rifmFormatter: import_prop_types2.default.func,
  /**
   * Right arrow icon aria-label text.
   * @deprecated
   */
  rightArrowButtonText: import_prop_types2.default.string,
  /**
   * Disable specific date. @DateIOType
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types2.default.func,
  /**
   * Disable specific months dynamically.
   * Works like `shouldDisableDate` but for month selection view @DateIOType.
   * @template TDate
   * @param {TDate} month The month to check.
   * @returns {boolean} If `true` the month will be disabled.
   */
  shouldDisableMonth: import_prop_types2.default.func,
  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} Returns `true` if the year should be disabled.
   */
  shouldDisableYear: import_prop_types2.default.func,
  /**
   * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types2.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: import_prop_types2.default.bool,
  /**
   * Component that will replace default toolbar renderer.
   * @default DatePickerToolbar
   */
  ToolbarComponent: import_prop_types2.default.elementType,
  /**
   * Date format, that is displaying in toolbar.
   */
  toolbarFormat: import_prop_types2.default.string,
  /**
   * Mobile picker date value placeholder, displaying if `value` === `null`.
   * @default '–'
   */
  toolbarPlaceholder: import_prop_types2.default.node,
  /**
   * Mobile picker title, displaying in the toolbar.
   * @default 'Select date'
   */
  toolbarTitle: import_prop_types2.default.node,
  /**
   * The value of the picker.
   */
  value: import_prop_types2.default.any,
  /**
   * Array of views to show.
   * @default ['year', 'day']
   */
  views: import_prop_types2.default.arrayOf(import_prop_types2.default.oneOf(["day", "month", "year"]).isRequired)
} : void 0;

// ../node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded4 = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
var DatePicker = React4.forwardRef(function DatePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePicker"
  });
  const {
    desktopModeMediaQuery = "@media (pointer: fine)",
    DialogProps,
    PopperProps,
    TransitionComponent
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime4.jsx)(DesktopDatePicker, _extends({
      ref,
      PopperProps,
      TransitionComponent
    }, other));
  }
  return (0, import_jsx_runtime4.jsx)(MobileDatePicker, _extends({
    ref,
    DialogProps
  }, other));
});
true ? DatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: import_prop_types3.default.instanceOf(RegExp),
  autoFocus: import_prop_types3.default.bool,
  children: import_prop_types3.default.node,
  /**
   * className applied to the root component.
   */
  className: import_prop_types3.default.string,
  /**
   * If `true` the popup or dialog will immediately close after submitting full date.
   * @default `true` for Desktop, `false` for Mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types3.default.bool,
  /**
   * Overrideable components.
   * @default {}
   */
  components: import_prop_types3.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   */
  componentsProps: import_prop_types3.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types3.default.func,
  /**
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: import_prop_types3.default.any,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types3.default.string,
  /**
   * Props applied to the [`Dialog`](https://mui.com/material-ui/api/dialog/) element.
   */
  DialogProps: import_prop_types3.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types3.default.bool,
  /**
   * If `true` future days are disabled.
   * @default false
   */
  disableFuture: import_prop_types3.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types3.default.bool,
  /**
   * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
   * @default false
   */
  disableMaskedInput: import_prop_types3.default.bool,
  /**
   * Do not render open picker button (renders only text field with validation).
   * @default false
   */
  disableOpenPicker: import_prop_types3.default.bool,
  /**
   * If `true` past days are disabled.
   * @default false
   */
  disablePast: import_prop_types3.default.bool,
  /**
   * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
   * @template TInputDate, TDate
   * @param {TInputDate} date The date from which we want to add an aria-text.
   * @param {MuiPickersAdapter<TDate>} utils The utils to manipulate the date.
   * @returns {string} The aria-text to render inside the dialog.
   * @default (date, utils) => `Choose date, selected date is ${utils.format(utils.date(date), 'fullDate')}`
   */
  getOpenDialogAriaText: import_prop_types3.default.func,
  /**
   * Get aria-label text for switching between views button.
   * @param {CalendarPickerView} currentView The view from which we want to get the button text.
   * @returns {string} The label of the view.
   * @deprecated Use the `localeText` prop of `LocalizationProvider` instead, see https://mui.com/x/react-date-pickers/localization/.
   */
  getViewSwitchingButtonText: import_prop_types3.default.func,
  ignoreInvalidInputs: import_prop_types3.default.bool,
  /**
   * Props to pass to keyboard input adornment.
   */
  InputAdornmentProps: import_prop_types3.default.object,
  /**
   * Format string.
   */
  inputFormat: import_prop_types3.default.string,
  InputProps: import_prop_types3.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.shape({
    current: import_prop_types3.default.object
  })]),
  label: import_prop_types3.default.node,
  /**
   * Left arrow icon aria-label text.
   * @deprecated
   */
  leftArrowButtonText: import_prop_types3.default.string,
  /**
   * If `true` renders `LoadingComponent` in calendar instead of calendar view.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types3.default.bool,
  /**
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: import_prop_types3.default.string,
  /**
   * Maximal selectable date. @DateIOType
   */
  maxDate: import_prop_types3.default.any,
  /**
   * Minimal selectable date. @DateIOType
   */
  minDate: import_prop_types3.default.any,
  /**
   * Callback fired when date is accepted @DateIOType.
   * @template TValue
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types3.default.func,
  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   * @template TValue
   * @param {TValue} value The new parsed value.
   * @param {string} keyboardInputValue The current value of the keyboard input.
   */
  onChange: import_prop_types3.default.func.isRequired,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   */
  onClose: import_prop_types3.default.func,
  /**
   * Callback that fired when input value or new `value` prop validation returns **new** validation error (or value is valid after error).
   * In case of validation error detected `reason` prop return non-null value and `TextField` must be displayed in `error` state.
   * This can be used to render appropriate form error.
   *
   * [Read the guide](https://next.material-ui-pickers.dev/guides/forms) about form integration and error displaying.
   * @DateIOType
   *
   * @template TError, TInputValue
   * @param {TError} reason The reason why the current value is not valid.
   * @param {TInputValue} value The invalid value.
   */
  onError: import_prop_types3.default.func,
  /**
   * Callback firing on month change @DateIOType.
   * @template TDate
   * @param {TDate} month The new month.
   * @returns {void|Promise} -
   */
  onMonthChange: import_prop_types3.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: import_prop_types3.default.func,
  /**
   * Callback fired on view change.
   * @param {CalendarPickerView} view The new view.
   */
  onViewChange: import_prop_types3.default.func,
  /**
   * Callback firing on year change @DateIOType.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types3.default.func,
  /**
   * Control the popup or dialog open state.
   */
  open: import_prop_types3.default.bool,
  /**
   * Props to pass to keyboard adornment button.
   */
  OpenPickerButtonProps: import_prop_types3.default.object,
  /**
   * First view to show.
   * Must be a valid option from `views` list
   * @default 'day'
   */
  openTo: import_prop_types3.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types3.default.oneOf(["landscape", "portrait"]),
  /**
   * Paper props passed down to [Paper](https://mui.com/material-ui/api/paper/) component.
   */
  PaperProps: import_prop_types3.default.object,
  /**
   * Popper props passed down to [Popper](https://mui.com/material-ui/api/popper/) component.
   */
  PopperProps: import_prop_types3.default.object,
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: import_prop_types3.default.bool,
  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: import_prop_types3.default.bool,
  /**
   * Custom renderer for day. Check the [PickersDay](https://mui.com/x/api/date-pickers/pickers-day/) component.
   * @template TDate
   * @param {TDate} day The day to render.
   * @param {Array<TDate | null>} selectedDays The days currently selected.
   * @param {PickersDayProps<TDate>} pickersDayProps The props of the day to render.
   * @returns {JSX.Element} The element representing the day.
   */
  renderDay: import_prop_types3.default.func,
  /**
   * The `renderInput` prop allows you to customize the rendered input.
   * The `props` argument of this render prop contains props of [TextField](https://mui.com/material-ui/api/text-field/#props) that you need to forward.
   * Pay specific attention to the `ref` and `inputProps` keys.
   * @example ```jsx
   * renderInput={props => <TextField {...props} />}
   * ````
   * @param {MuiTextFieldPropsType} props The props of the input.
   * @returns {React.ReactNode} The node to render as the input.
   */
  renderInput: import_prop_types3.default.func.isRequired,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types3.default.func,
  /**
   * Custom formatter to be passed into Rifm component.
   * @param {string} str The un-formatted string.
   * @returns {string} The formatted string.
   */
  rifmFormatter: import_prop_types3.default.func,
  /**
   * Right arrow icon aria-label text.
   * @deprecated
   */
  rightArrowButtonText: import_prop_types3.default.string,
  /**
   * Disable specific date. @DateIOType
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types3.default.func,
  /**
   * Disable specific months dynamically.
   * Works like `shouldDisableDate` but for month selection view @DateIOType.
   * @template TDate
   * @param {TDate} month The month to check.
   * @returns {boolean} If `true` the month will be disabled.
   */
  shouldDisableMonth: import_prop_types3.default.func,
  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} Returns `true` if the year should be disabled.
   */
  shouldDisableYear: import_prop_types3.default.func,
  /**
   * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types3.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: import_prop_types3.default.bool,
  /**
   * Component that will replace default toolbar renderer.
   * @default DatePickerToolbar
   */
  ToolbarComponent: import_prop_types3.default.elementType,
  /**
   * Date format, that is displaying in toolbar.
   */
  toolbarFormat: import_prop_types3.default.string,
  /**
   * Mobile picker date value placeholder, displaying if `value` === `null`.
   * @default '–'
   */
  toolbarPlaceholder: import_prop_types3.default.node,
  /**
   * Mobile picker title, displaying in the toolbar.
   * @default 'Select date'
   */
  toolbarTitle: import_prop_types3.default.node,
  /**
   * Custom component for popper [Transition](https://mui.com/material-ui/transitions/#transitioncomponent-prop).
   */
  TransitionComponent: import_prop_types3.default.elementType,
  /**
   * The value of the picker.
   */
  value: import_prop_types3.default.any,
  /**
   * Array of views to show.
   * @default ['year', 'day']
   */
  views: import_prop_types3.default.arrayOf(import_prop_types3.default.oneOf(["day", "month", "year"]).isRequired)
} : void 0;

export {
  useDatePickerDefaultizedProps,
  datePickerValueManager,
  datePickerToolbarClasses,
  DatePickerToolbar,
  DesktopDatePicker,
  MobileDatePicker,
  DatePicker
};
//# sourceMappingURL=chunk-L567D67R.js.map
