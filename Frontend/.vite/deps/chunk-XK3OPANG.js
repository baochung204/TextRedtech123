import {
  PickersToolbarButton,
  PickersToolbarText,
  validateTime
} from "./chunk-WDK7F5XN.js";
import {
  CalendarOrClockPicker,
  DateRange,
  DesktopWrapper,
  KeyboardDateInput,
  MobileWrapper,
  PickersToolbar,
  PureDateInput,
  Time,
  WrapperVariantContext,
  parseNonNullablePickerDate,
  parsePickerInputValue,
  pickersToolbarClasses,
  useDefaultDates,
  useLocaleText,
  usePickerState,
  useUtils,
  useValidation,
  validateDate
} from "./chunk-63PHC5P6.js";
import {
  Tab_default
} from "./chunk-L2HE7MCI.js";
import {
  Tabs_default,
  tabsClasses_default
} from "./chunk-DYAUEUIU.js";
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

// ../node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React5 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// ../node_modules/@mui/x-date-pickers/DesktopDateTimePicker/DesktopDateTimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// ../node_modules/@mui/x-date-pickers/DateTimePicker/shared.js
init_extends();
function useDateTimePickerDefaultizedProps(props, name) {
  var _themeProps$ampm, _themeProps$minDateTi, _themeProps$maxDateTi, _themeProps$minDateTi2, _themeProps$maxDateTi2;
  const themeProps = useThemeProps({
    props,
    name
  });
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
  if (themeProps.orientation != null && themeProps.orientation !== "portrait") {
    throw new Error("We are not supporting custom orientation for DateTimePicker yet :(");
  }
  return _extends({
    ampm,
    orientation: "portrait",
    openTo: "day",
    views: ["year", "day", "hours", "minutes"],
    ampmInClock: true,
    acceptRegex: ampm ? /[\dap]/gi : /\d/gi,
    disableMaskedInput: false,
    inputFormat: ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h,
    disableIgnoringDatePartForTimeValidation: Boolean(themeProps.minDateTime || themeProps.maxDateTime),
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    minDate: parseNonNullablePickerDate(utils, (_themeProps$minDateTi = themeProps.minDateTime) != null ? _themeProps$minDateTi : themeProps.minDate, defaultDates.minDate),
    maxDate: parseNonNullablePickerDate(utils, (_themeProps$maxDateTi = themeProps.maxDateTime) != null ? _themeProps$maxDateTi : themeProps.maxDate, defaultDates.maxDate),
    minTime: (_themeProps$minDateTi2 = themeProps.minDateTime) != null ? _themeProps$minDateTi2 : themeProps.minTime,
    maxTime: (_themeProps$maxDateTi2 = themeProps.maxDateTime) != null ? _themeProps$maxDateTi2 : themeProps.maxTime
  });
}
var dateTimePickerValueManager = {
  emptyValue: null,
  getTodayValue: (utils) => utils.date(),
  parseInput: parsePickerInputValue,
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
};
var resolveViewTypeFromView = (view) => {
  switch (view) {
    case "year":
    case "month":
    case "day":
      return "calendar";
    default:
      return "clock";
  }
};

// ../node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerToolbar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());

// ../node_modules/@mui/x-date-pickers/DateTimePicker/dateTimePickerToolbarClasses.js
function getDateTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerToolbar", slot);
}
var dateTimePickerToolbarClasses = generateUtilityClasses("MuiDateTimePickerToolbar", ["root", "dateContainer", "timeContainer", "separator"]);

// ../node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerToolbar.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["ampm", "parsedValue", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    dateContainer: ["dateContainer"],
    timeContainer: ["timeContainer"],
    separator: ["separator"]
  };
  return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
};
var DateTimePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiDateTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: "space-around",
  position: "relative",
  [`& .${pickersToolbarClasses.penIconButton}`]: _extends({
    position: "absolute",
    top: 8
  }, theme.direction === "rtl" ? {
    left: 8
  } : {
    right: 8
  })
}));
var DateTimePickerToolbarDateContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "DateContainer",
  overridesResolver: (props, styles) => styles.dateContainer
})({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
});
var DateTimePickerToolbarTimeContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeContainer",
  overridesResolver: (props, styles) => styles.timeContainer
})({
  display: "flex"
});
var DateTimePickerToolbarSeparator = styled_default(PickersToolbarText, {
  name: "MuiDateTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  margin: "0 4px 0 2px",
  cursor: "default"
});
function DateTimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerToolbar"
  });
  const {
    ampm,
    parsedValue,
    isMobileKeyboardViewOpen,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarPlaceholder = "––",
    toolbarTitle: toolbarTitleProp,
    views
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const utils = useUtils();
  const localeText = useLocaleText();
  const classes = useUtilityClasses(ownerState);
  const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.dateTimePickerDefaultToolbarTitle;
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const dateText = React.useMemo(() => {
    if (!parsedValue) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils.formatByString(parsedValue, toolbarFormat);
    }
    return utils.format(parsedValue, "shortDate");
  }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils]);
  return (0, import_jsx_runtime2.jsxs)(DateTimePickerToolbarRoot, _extends({
    toolbarTitle,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    className: classes.root,
    viewType: resolveViewTypeFromView(openView)
  }, other, {
    isLandscape: false,
    ownerState,
    children: [(0, import_jsx_runtime2.jsxs)(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState,
      children: [views.includes("year") && (0, import_jsx_runtime.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => setOpenView("year"),
        selected: openView === "year",
        value: parsedValue ? utils.format(parsedValue, "year") : "–"
      }), views.includes("day") && (0, import_jsx_runtime.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h4",
        onClick: () => setOpenView("day"),
        selected: openView === "day",
        value: dateText
      })]
    }), (0, import_jsx_runtime2.jsxs)(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState,
      children: [views.includes("hours") && (0, import_jsx_runtime.jsx)(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setOpenView("hours"),
        selected: openView === "hours",
        value: parsedValue ? formatHours(parsedValue) : "--"
      }), views.includes("minutes") && (0, import_jsx_runtime2.jsxs)(React.Fragment, {
        children: [(0, import_jsx_runtime.jsx)(DateTimePickerToolbarSeparator, {
          variant: "h3",
          value: ":",
          className: classes.separator,
          ownerState
        }), (0, import_jsx_runtime.jsx)(PickersToolbarButton, {
          variant: "h3",
          onClick: () => setOpenView("minutes"),
          selected: openView === "minutes",
          value: parsedValue ? utils.format(parsedValue, "minutes") : "--"
        })]
      }), views.includes("seconds") && (0, import_jsx_runtime2.jsxs)(React.Fragment, {
        children: [(0, import_jsx_runtime.jsx)(DateTimePickerToolbarSeparator, {
          variant: "h3",
          value: ":",
          className: classes.separator,
          ownerState
        }), (0, import_jsx_runtime.jsx)(PickersToolbarButton, {
          variant: "h3",
          onClick: () => setOpenView("seconds"),
          selected: openView === "seconds",
          value: parsedValue ? utils.format(parsedValue, "seconds") : "--"
        })]
      })]
    })]
  }));
}

// ../node_modules/@mui/x-date-pickers/internals/hooks/validation/useDateTimeValidation.js
init_objectWithoutPropertiesLoose();
var _excluded2 = ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"];
var validateDateTime = ({
  props,
  value,
  adapter
}) => {
  const {
    minDate,
    maxDate,
    disableFuture,
    shouldDisableDate,
    disablePast
  } = props, timeValidationProps = _objectWithoutPropertiesLoose(props, _excluded2);
  const dateValidationResult = validateDate({
    adapter,
    value,
    props: {
      minDate,
      maxDate,
      disableFuture,
      shouldDisableDate,
      disablePast
    }
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    props: timeValidationProps
  });
};
var isSameDateTimeError = (a, b) => a === b;
function useDateTimeValidation(props) {
  return useValidation(props, validateDateTime, isSameDateTimeError);
}

// ../node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerTabs.js
init_extends();
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// ../node_modules/@mui/x-date-pickers/DateTimePicker/dateTimePickerTabsClasses.js
function getDateTimePickerTabsUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerTabs", slot);
}
var dateTimePickerTabsClasses = generateUtilityClasses("MuiDateTimePickerTabs", ["root"]);

// ../node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerTabs.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var viewToTab = (openView) => {
  if (["day", "month", "year"].includes(openView)) {
    return "date";
  }
  return "time";
};
var tabToView = (tab) => {
  if (tab === "date") {
    return "day";
  }
  return "hours";
};
var useUtilityClasses2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
};
var DateTimePickerTabsRoot = styled_default(Tabs_default, {
  name: "MuiDateTimePickerTabs",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState,
  theme
}) => _extends({
  boxShadow: `0 -1px 0 0 inset ${theme.palette.divider}`
}, ownerState.wrapperVariant === "desktop" && {
  order: 1,
  boxShadow: `0 1px 0 0 inset ${theme.palette.divider}`,
  [`& .${tabsClasses_default.indicator}`]: {
    bottom: "auto",
    top: 0
  }
}));
var DateTimePickerTabs = function DateTimePickerTabs2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerTabs"
  });
  const {
    dateRangeIcon = (0, import_jsx_runtime3.jsx)(DateRange, {}),
    onChange,
    timeIcon = (0, import_jsx_runtime3.jsx)(Time, {}),
    view
  } = props;
  const localeText = useLocaleText();
  const wrapperVariant = React2.useContext(WrapperVariantContext);
  const ownerState = _extends({}, props, {
    wrapperVariant
  });
  const classes = useUtilityClasses2(ownerState);
  const handleChange = (event, value) => {
    onChange(tabToView(value));
  };
  return (0, import_jsx_runtime4.jsxs)(DateTimePickerTabsRoot, {
    ownerState,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    className: classes.root,
    children: [(0, import_jsx_runtime3.jsx)(Tab_default, {
      value: "date",
      "aria-label": localeText.dateTableLabel,
      icon: (0, import_jsx_runtime3.jsx)(React2.Fragment, {
        children: dateRangeIcon
      })
    }), (0, import_jsx_runtime3.jsx)(Tab_default, {
      value: "time",
      "aria-label": localeText.timeTableLabel,
      icon: (0, import_jsx_runtime3.jsx)(React2.Fragment, {
        children: timeIcon
      })
    })]
  });
};
true ? DateTimePickerTabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * Date tab icon.
   * @default DateRange
   */
  dateRangeIcon: import_prop_types.default.node,
  /**
   * Callback called when tab is clicked
   * @param {CalendarOrClockPickerView} view Picker view that was clicked
   */
  onChange: import_prop_types.default.func.isRequired,
  /**
   * Time tab icon.
   * @default Time
   */
  timeIcon: import_prop_types.default.node,
  /**
   * Open picker view
   */
  view: import_prop_types.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired
} : void 0;

// ../node_modules/@mui/x-date-pickers/DesktopDateTimePicker/DesktopDateTimePicker.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded3 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps", "hideTabs"];
var DesktopDateTimePicker = React3.forwardRef(function DesktopDateTimePicker2(inProps, ref) {
  const props = useDateTimePickerDefaultizedProps(inProps, "MuiDesktopDateTimePicker");
  const validationError = useDateTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, dateTimePickerValueManager);
  const {
    PaperProps,
    PopperProps,
    ToolbarComponent = DateTimePickerToolbar,
    TransitionComponent,
    components: providedComponents,
    componentsProps,
    hideTabs = true
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const components = React3.useMemo(() => _extends({
    Tabs: DateTimePickerTabs
  }, providedComponents), [providedComponents]);
  const AllDateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return (0, import_jsx_runtime5.jsx)(DesktopWrapper, _extends({}, wrapperProps, {
    DateInputProps: AllDateInputProps,
    KeyboardDateInputComponent: KeyboardDateInput,
    PopperProps,
    PaperProps,
    TransitionComponent,
    components,
    componentsProps,
    children: (0, import_jsx_runtime5.jsx)(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps: AllDateInputProps,
      components,
      componentsProps,
      hideTabs
    }, other))
  }));
});
true ? DesktopDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: import_prop_types2.default.instanceOf(RegExp),
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types2.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: import_prop_types2.default.bool,
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
   * Date tab icon.
   */
  dateRangeIcon: import_prop_types2.default.node,
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
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types2.default.bool,
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
   * Accessible text that helps user to understand which time and view is selected.
   * @template TDate
   * @param {ClockPickerView} view The current view rendered.
   * @param {TDate | null} time The current time.
   * @param {MuiPickersAdapter<TDate>} adapter The current date adapter.
   * @returns {string} The clock label.
   * @deprecated Use the `localeText` prop of `LocalizationProvider` instead, see https://mui.com/x/react-date-pickers/localization/.
   * @default <TDate extends any>(
   *   view: ClockView,
   *   time: TDate | null,
   *   adapter: MuiPickersAdapter<TDate>,
   * ) =>
   *   `Select ${view}. ${
   *     time === null ? 'No time selected' : `Selected time is ${adapter.format(time, 'fullTime')}`
   *   }`
   */
  getClockLabelText: import_prop_types2.default.func,
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
  /**
   * Toggles visibility of date time switching tabs
   * @default false for mobile, true for desktop
   */
  hideTabs: import_prop_types2.default.bool,
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
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types2.default.any,
  /**
   * Max time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  maxTime: import_prop_types2.default.any,
  /**
   * Minimal selectable date. @DateIOType
   */
  minDate: import_prop_types2.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types2.default.any,
  /**
   * Min time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  minTime: import_prop_types2.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types2.default.number,
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
   * @param {CalendarOrClockPickerView} view The new view.
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
  openTo: import_prop_types2.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types2.default.oneOf(["landscape", "portrait"]),
  /**
   * Paper props passed down to [Paper](https://mui.com/material-ui/api/paper/) component.
   */
  PaperProps: import_prop_types2.default.object,
  /**
   * Popper props passed down to [Popper](https://mui.com/material-ui/api/popper/) component.
   */
  PopperProps: import_prop_types2.default.object,
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
   * Dynamically check if time is disabled or not.
   * If returns `false` appropriate time point will ot be acceptable.
   * @param {number} timeValue The value to check.
   * @param {ClockPickerView} clockType The clock type of the timeValue.
   * @returns {boolean} Returns `true` if the time should be disabled
   */
  shouldDisableTime: import_prop_types2.default.func,
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
   * Time tab icon.
   */
  timeIcon: import_prop_types2.default.node,
  /**
   * Component that will replace default toolbar renderer.
   * @default DateTimePickerToolbar
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
   * @default 'Select date & time'
   */
  toolbarTitle: import_prop_types2.default.node,
  /**
   * Custom component for popper [Transition](https://mui.com/material-ui/transitions/#transitioncomponent-prop).
   */
  TransitionComponent: import_prop_types2.default.elementType,
  /**
   * The value of the picker.
   */
  value: import_prop_types2.default.any,
  /**
   * Array of views to show.
   * @default ['year', 'day', 'hours', 'minutes']
   */
  views: import_prop_types2.default.arrayOf(import_prop_types2.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired)
} : void 0;

// ../node_modules/@mui/x-date-pickers/MobileDateTimePicker/MobileDateTimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded4 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps", "hideTabs"];
var MobileDateTimePicker = React4.forwardRef(function MobileDateTimePicker2(inProps, ref) {
  const props = useDateTimePickerDefaultizedProps(inProps, "MuiMobileDateTimePicker");
  const validationError = useDateTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, dateTimePickerValueManager);
  const {
    ToolbarComponent = DateTimePickerToolbar,
    components: providedComponents,
    componentsProps,
    hideTabs = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const components = React4.useMemo(() => _extends({
    Tabs: DateTimePickerTabs
  }, providedComponents), [providedComponents]);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return (0, import_jsx_runtime6.jsx)(MobileWrapper, _extends({}, other, wrapperProps, {
    DateInputProps,
    PureDateInputComponent: PureDateInput,
    components,
    componentsProps,
    children: (0, import_jsx_runtime6.jsx)(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps,
      hideTabs
    }, other))
  }));
});
true ? MobileDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: import_prop_types3.default.instanceOf(RegExp),
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types3.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: import_prop_types3.default.bool,
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
   * Date tab icon.
   */
  dateRangeIcon: import_prop_types3.default.node,
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
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types3.default.bool,
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
   * Accessible text that helps user to understand which time and view is selected.
   * @template TDate
   * @param {ClockPickerView} view The current view rendered.
   * @param {TDate | null} time The current time.
   * @param {MuiPickersAdapter<TDate>} adapter The current date adapter.
   * @returns {string} The clock label.
   * @deprecated Use the `localeText` prop of `LocalizationProvider` instead, see https://mui.com/x/react-date-pickers/localization/.
   * @default <TDate extends any>(
   *   view: ClockView,
   *   time: TDate | null,
   *   adapter: MuiPickersAdapter<TDate>,
   * ) =>
   *   `Select ${view}. ${
   *     time === null ? 'No time selected' : `Selected time is ${adapter.format(time, 'fullTime')}`
   *   }`
   */
  getClockLabelText: import_prop_types3.default.func,
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
  /**
   * Toggles visibility of date time switching tabs
   * @default false for mobile, true for desktop
   */
  hideTabs: import_prop_types3.default.bool,
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
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types3.default.any,
  /**
   * Max time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  maxTime: import_prop_types3.default.any,
  /**
   * Minimal selectable date. @DateIOType
   */
  minDate: import_prop_types3.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types3.default.any,
  /**
   * Min time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  minTime: import_prop_types3.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types3.default.number,
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
   * @param {CalendarOrClockPickerView} view The new view.
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
  openTo: import_prop_types3.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types3.default.oneOf(["landscape", "portrait"]),
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
   * Dynamically check if time is disabled or not.
   * If returns `false` appropriate time point will ot be acceptable.
   * @param {number} timeValue The value to check.
   * @param {ClockPickerView} clockType The clock type of the timeValue.
   * @returns {boolean} Returns `true` if the time should be disabled
   */
  shouldDisableTime: import_prop_types3.default.func,
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
   * Time tab icon.
   */
  timeIcon: import_prop_types3.default.node,
  /**
   * Component that will replace default toolbar renderer.
   * @default DateTimePickerToolbar
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
   * @default 'Select date & time'
   */
  toolbarTitle: import_prop_types3.default.node,
  /**
   * The value of the picker.
   */
  value: import_prop_types3.default.any,
  /**
   * Array of views to show.
   * @default ['year', 'day', 'hours', 'minutes']
   */
  views: import_prop_types3.default.arrayOf(import_prop_types3.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired)
} : void 0;

// ../node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePicker.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded5 = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
var DateTimePicker = React5.forwardRef(function DateTimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePicker"
  });
  const {
    desktopModeMediaQuery = "@media (pointer: fine)",
    DialogProps,
    PopperProps,
    TransitionComponent
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime7.jsx)(DesktopDateTimePicker, _extends({
      ref,
      PopperProps,
      TransitionComponent
    }, other));
  }
  return (0, import_jsx_runtime7.jsx)(MobileDateTimePicker, _extends({
    ref,
    DialogProps
  }, other));
});
true ? DateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: import_prop_types4.default.instanceOf(RegExp),
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types4.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: import_prop_types4.default.bool,
  autoFocus: import_prop_types4.default.bool,
  children: import_prop_types4.default.node,
  /**
   * className applied to the root component.
   */
  className: import_prop_types4.default.string,
  /**
   * If `true` the popup or dialog will immediately close after submitting full date.
   * @default `true` for Desktop, `false` for Mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types4.default.bool,
  /**
   * Overrideable components.
   * @default {}
   */
  components: import_prop_types4.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   */
  componentsProps: import_prop_types4.default.object,
  /**
   * Date tab icon.
   */
  dateRangeIcon: import_prop_types4.default.node,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types4.default.func,
  /**
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: import_prop_types4.default.any,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types4.default.string,
  /**
   * Props applied to the [`Dialog`](https://mui.com/material-ui/api/dialog/) element.
   */
  DialogProps: import_prop_types4.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types4.default.bool,
  /**
   * If `true` future days are disabled.
   * @default false
   */
  disableFuture: import_prop_types4.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types4.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types4.default.bool,
  /**
   * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
   * @default false
   */
  disableMaskedInput: import_prop_types4.default.bool,
  /**
   * Do not render open picker button (renders only text field with validation).
   * @default false
   */
  disableOpenPicker: import_prop_types4.default.bool,
  /**
   * If `true` past days are disabled.
   * @default false
   */
  disablePast: import_prop_types4.default.bool,
  /**
   * Accessible text that helps user to understand which time and view is selected.
   * @template TDate
   * @param {ClockPickerView} view The current view rendered.
   * @param {TDate | null} time The current time.
   * @param {MuiPickersAdapter<TDate>} adapter The current date adapter.
   * @returns {string} The clock label.
   * @deprecated Use the `localeText` prop of `LocalizationProvider` instead, see https://mui.com/x/react-date-pickers/localization/.
   * @default <TDate extends any>(
   *   view: ClockView,
   *   time: TDate | null,
   *   adapter: MuiPickersAdapter<TDate>,
   * ) =>
   *   `Select ${view}. ${
   *     time === null ? 'No time selected' : `Selected time is ${adapter.format(time, 'fullTime')}`
   *   }`
   */
  getClockLabelText: import_prop_types4.default.func,
  /**
   * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
   * @template TInputDate, TDate
   * @param {TInputDate} date The date from which we want to add an aria-text.
   * @param {MuiPickersAdapter<TDate>} utils The utils to manipulate the date.
   * @returns {string} The aria-text to render inside the dialog.
   * @default (date, utils) => `Choose date, selected date is ${utils.format(utils.date(date), 'fullDate')}`
   */
  getOpenDialogAriaText: import_prop_types4.default.func,
  /**
   * Get aria-label text for switching between views button.
   * @param {CalendarPickerView} currentView The view from which we want to get the button text.
   * @returns {string} The label of the view.
   * @deprecated Use the `localeText` prop of `LocalizationProvider` instead, see https://mui.com/x/react-date-pickers/localization/.
   */
  getViewSwitchingButtonText: import_prop_types4.default.func,
  /**
   * Toggles visibility of date time switching tabs
   * @default false for mobile, true for desktop
   */
  hideTabs: import_prop_types4.default.bool,
  ignoreInvalidInputs: import_prop_types4.default.bool,
  /**
   * Props to pass to keyboard input adornment.
   */
  InputAdornmentProps: import_prop_types4.default.object,
  /**
   * Format string.
   */
  inputFormat: import_prop_types4.default.string,
  InputProps: import_prop_types4.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.shape({
    current: import_prop_types4.default.object
  })]),
  label: import_prop_types4.default.node,
  /**
   * Left arrow icon aria-label text.
   * @deprecated
   */
  leftArrowButtonText: import_prop_types4.default.string,
  /**
   * If `true` renders `LoadingComponent` in calendar instead of calendar view.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types4.default.bool,
  /**
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: import_prop_types4.default.string,
  /**
   * Maximal selectable date. @DateIOType
   */
  maxDate: import_prop_types4.default.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types4.default.any,
  /**
   * Max time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  maxTime: import_prop_types4.default.any,
  /**
   * Minimal selectable date. @DateIOType
   */
  minDate: import_prop_types4.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types4.default.any,
  /**
   * Min time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  minTime: import_prop_types4.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types4.default.number,
  /**
   * Callback fired when date is accepted @DateIOType.
   * @template TValue
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types4.default.func,
  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   * @template TValue
   * @param {TValue} value The new parsed value.
   * @param {string} keyboardInputValue The current value of the keyboard input.
   */
  onChange: import_prop_types4.default.func.isRequired,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   */
  onClose: import_prop_types4.default.func,
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
  onError: import_prop_types4.default.func,
  /**
   * Callback firing on month change @DateIOType.
   * @template TDate
   * @param {TDate} month The new month.
   * @returns {void|Promise} -
   */
  onMonthChange: import_prop_types4.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: import_prop_types4.default.func,
  /**
   * Callback fired on view change.
   * @param {CalendarOrClockPickerView} view The new view.
   */
  onViewChange: import_prop_types4.default.func,
  /**
   * Callback firing on year change @DateIOType.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types4.default.func,
  /**
   * Control the popup or dialog open state.
   */
  open: import_prop_types4.default.bool,
  /**
   * Props to pass to keyboard adornment button.
   */
  OpenPickerButtonProps: import_prop_types4.default.object,
  /**
   * First view to show.
   * Must be a valid option from `views` list
   * @default 'day'
   */
  openTo: import_prop_types4.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types4.default.oneOf(["landscape", "portrait"]),
  /**
   * Paper props passed down to [Paper](https://mui.com/material-ui/api/paper/) component.
   */
  PaperProps: import_prop_types4.default.object,
  /**
   * Popper props passed down to [Popper](https://mui.com/material-ui/api/popper/) component.
   */
  PopperProps: import_prop_types4.default.object,
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: import_prop_types4.default.bool,
  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: import_prop_types4.default.bool,
  /**
   * Custom renderer for day. Check the [PickersDay](https://mui.com/x/api/date-pickers/pickers-day/) component.
   * @template TDate
   * @param {TDate} day The day to render.
   * @param {Array<TDate | null>} selectedDays The days currently selected.
   * @param {PickersDayProps<TDate>} pickersDayProps The props of the day to render.
   * @returns {JSX.Element} The element representing the day.
   */
  renderDay: import_prop_types4.default.func,
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
  renderInput: import_prop_types4.default.func.isRequired,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types4.default.func,
  /**
   * Custom formatter to be passed into Rifm component.
   * @param {string} str The un-formatted string.
   * @returns {string} The formatted string.
   */
  rifmFormatter: import_prop_types4.default.func,
  /**
   * Right arrow icon aria-label text.
   * @deprecated
   */
  rightArrowButtonText: import_prop_types4.default.string,
  /**
   * Disable specific date. @DateIOType
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types4.default.func,
  /**
   * Disable specific months dynamically.
   * Works like `shouldDisableDate` but for month selection view @DateIOType.
   * @template TDate
   * @param {TDate} month The month to check.
   * @returns {boolean} If `true` the month will be disabled.
   */
  shouldDisableMonth: import_prop_types4.default.func,
  /**
   * Dynamically check if time is disabled or not.
   * If returns `false` appropriate time point will ot be acceptable.
   * @param {number} timeValue The value to check.
   * @param {ClockPickerView} clockType The clock type of the timeValue.
   * @returns {boolean} Returns `true` if the time should be disabled
   */
  shouldDisableTime: import_prop_types4.default.func,
  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} Returns `true` if the year should be disabled.
   */
  shouldDisableYear: import_prop_types4.default.func,
  /**
   * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types4.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: import_prop_types4.default.bool,
  /**
   * Time tab icon.
   */
  timeIcon: import_prop_types4.default.node,
  /**
   * Component that will replace default toolbar renderer.
   * @default DateTimePickerToolbar
   */
  ToolbarComponent: import_prop_types4.default.elementType,
  /**
   * Date format, that is displaying in toolbar.
   */
  toolbarFormat: import_prop_types4.default.string,
  /**
   * Mobile picker date value placeholder, displaying if `value` === `null`.
   * @default '–'
   */
  toolbarPlaceholder: import_prop_types4.default.node,
  /**
   * Mobile picker title, displaying in the toolbar.
   * @default 'Select date & time'
   */
  toolbarTitle: import_prop_types4.default.node,
  /**
   * Custom component for popper [Transition](https://mui.com/material-ui/transitions/#transitioncomponent-prop).
   */
  TransitionComponent: import_prop_types4.default.elementType,
  /**
   * The value of the picker.
   */
  value: import_prop_types4.default.any,
  /**
   * Array of views to show.
   * @default ['year', 'day', 'hours', 'minutes']
   */
  views: import_prop_types4.default.arrayOf(import_prop_types4.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired)
} : void 0;

export {
  useDateTimePickerDefaultizedProps,
  dateTimePickerValueManager,
  dateTimePickerToolbarClasses,
  DateTimePickerToolbar,
  useDateTimeValidation,
  dateTimePickerTabsClasses,
  DateTimePickerTabs,
  DesktopDateTimePicker,
  MobileDateTimePicker,
  DateTimePicker
};
//# sourceMappingURL=chunk-XK3OPANG.js.map
