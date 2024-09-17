import {
  PickersToolbarButton,
  PickersToolbarText,
  useTimeValidation
} from "./chunk-WDK7F5XN.js";
import {
  CalendarOrClockPicker,
  Clock,
  DesktopWrapper,
  KeyboardDateInput,
  MobileWrapper,
  PickersToolbar,
  PureDateInput,
  arrayIncludes,
  parsePickerInputValue,
  pickersToolbarClasses,
  useLocaleText,
  useMeridiemMode,
  usePickerState,
  useUtils
} from "./chunk-63PHC5P6.js";
import {
  useThemeProps
} from "./chunk-6VRJ5KTC.js";
import {
  useTheme
} from "./chunk-T2OHPXZ3.js";
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

// ../node_modules/@mui/x-date-pickers/TimePicker/TimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// ../node_modules/@mui/x-date-pickers/DesktopTimePicker/DesktopTimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// ../node_modules/@mui/x-date-pickers/TimePicker/shared.js
init_extends();
function useTimePickerDefaultizedProps(props, name) {
  var _themeProps$ampm;
  const themeProps = useThemeProps({
    props,
    name
  });
  const utils = useUtils();
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
  const localeText = useLocaleText();
  const getOpenDialogAriaText = localeText.openTimePickerDialogue;
  return _extends({
    ampm,
    openTo: "hours",
    views: ["hours", "minutes"],
    acceptRegex: ampm ? /[\dapAP]/gi : /\d/gi,
    disableMaskedInput: false,
    getOpenDialogAriaText,
    inputFormat: ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h
  }, themeProps, {
    components: _extends({
      OpenPickerIcon: Clock
    }, themeProps.components)
  });
}
var timePickerValueManager = {
  emptyValue: null,
  parseInput: parsePickerInputValue,
  getTodayValue: (utils) => utils.date(),
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b),
  valueReducer: (utils, lastValidValue, newValue) => {
    if (!lastValidValue || !utils.isValid(newValue)) {
      return newValue;
    }
    return utils.mergeDateAndTime(lastValidValue, newValue);
  }
};

// ../node_modules/@mui/x-date-pickers/TimePicker/TimePickerToolbar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());

// ../node_modules/@mui/x-date-pickers/TimePicker/timePickerToolbarClasses.js
function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiTimePickerToolbar", slot);
}
var timePickerToolbarClasses = generateUtilityClasses("MuiTimePickerToolbar", ["root", "separator", "hourMinuteLabel", "hourMinuteLabelLandscape", "hourMinuteLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);

// ../node_modules/@mui/x-date-pickers/TimePicker/TimePickerToolbar.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["ampm", "ampmInClock", "parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views", "disabled", "readOnly"];
var useUtilityClasses = (ownerState) => {
  const {
    theme,
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"],
    hourMinuteLabel: ["hourMinuteLabel", isLandscape && "hourMinuteLabelLandscape", theme.direction === "rtl" && "hourMinuteLabelReverse"],
    ampmSelection: ["ampmSelection", isLandscape && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};
var TimePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  [`& .${pickersToolbarClasses.penIconButtonLandscape}`]: {
    marginTop: "auto"
  }
});
var TimePickerToolbarSeparator = styled_default(PickersToolbarText, {
  name: "MuiTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  outline: 0,
  margin: "0 4px 0 2px",
  cursor: "default"
});
var TimePickerToolbarHourMinuteLabel = styled_default("div", {
  name: "MuiTimePickerToolbar",
  slot: "HourMinuteLabel",
  overridesResolver: (props, styles) => [{
    [`&.${timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles.hourMinuteLabelLandscape,
    [`&.${timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles.hourMinuteLabelReverse
  }, styles.hourMinuteLabel]
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end"
}, ownerState.isLandscape && {
  marginTop: "auto"
}, theme.direction === "rtl" && {
  flexDirection: "row-reverse"
}));
var TimePickerToolbarAmPmSelection = styled_default("div", {
  name: "MuiTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles) => [{
    [`.${timePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${timePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})(({
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: "4px 0 auto",
  flexDirection: "row",
  justifyContent: "space-around",
  flexBasis: "100%"
}, {
  [`& .${timePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  }
}));
function TimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    parsedValue,
    isLandscape,
    isMobileKeyboardViewOpen,
    onChange,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarTitle: toolbarTitleProp,
    views,
    disabled,
    readOnly
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const utils = useUtils();
  const localeText = useLocaleText();
  const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.timePickerDefaultToolbarTitle;
  const theme = useTheme();
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(parsedValue, ampm, onChange);
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const ownerState = props;
  const classes = useUtilityClasses(_extends({}, ownerState, {
    theme
  }));
  const separator = (0, import_jsx_runtime.jsx)(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return (0, import_jsx_runtime2.jsxs)(TimePickerToolbarRoot, _extends({
    viewType: "clock",
    landscapeDirection: "row",
    toolbarTitle,
    isLandscape,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    ownerState,
    className: classes.root
  }, other, {
    children: [(0, import_jsx_runtime2.jsxs)(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState,
      children: [arrayIncludes(views, "hours") && (0, import_jsx_runtime.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView("hours"),
        selected: openView === "hours",
        value: parsedValue ? formatHours(parsedValue) : "--"
      }), arrayIncludes(views, ["hours", "minutes"]) && separator, arrayIncludes(views, "minutes") && (0, import_jsx_runtime.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView("minutes"),
        selected: openView === "minutes",
        value: parsedValue ? utils.format(parsedValue, "minutes") : "--"
      }), arrayIncludes(views, ["minutes", "seconds"]) && separator, arrayIncludes(views, "seconds") && (0, import_jsx_runtime.jsx)(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setOpenView("seconds"),
        selected: openView === "seconds",
        value: parsedValue ? utils.format(parsedValue, "seconds") : "--"
      })]
    }), showAmPmControl && (0, import_jsx_runtime2.jsxs)(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState,
      children: [(0, import_jsx_runtime.jsx)(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "am",
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText("am"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled
      }), (0, import_jsx_runtime.jsx)(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "pm",
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText("pm"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        disabled
      })]
    })]
  }));
}

// ../node_modules/@mui/x-date-pickers/DesktopTimePicker/DesktopTimePicker.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded2 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
var DesktopTimePicker = React2.forwardRef(function DesktopTimePicker2(inProps, ref) {
  const props = useTimePickerDefaultizedProps(inProps, "MuiDesktopTimePicker");
  const validationError = useTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, timePickerValueManager);
  const {
    PaperProps,
    PopperProps,
    ToolbarComponent = TimePickerToolbar,
    TransitionComponent,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return (0, import_jsx_runtime3.jsx)(DesktopWrapper, _extends({}, wrapperProps, {
    DateInputProps,
    KeyboardDateInputComponent: KeyboardDateInput,
    PopperProps,
    PaperProps,
    TransitionComponent,
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
true ? DesktopTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: import_prop_types.default.instanceOf(RegExp),
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: import_prop_types.default.bool,
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
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types.default.bool,
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
  getClockLabelText: import_prop_types.default.func,
  /**
   * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
   * @template TInputDate, TDate
   * @param {TInputDate} date The date from which we want to add an aria-text.
   * @param {MuiPickersAdapter<TDate>} utils The utils to manipulate the date.
   * @returns {string} The aria-text to render inside the dialog.
   * @default (date, utils) => `Choose date, selected date is ${utils.format(utils.date(date), 'fullDate')}`
   */
  getOpenDialogAriaText: import_prop_types.default.func,
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
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: import_prop_types.default.string,
  /**
   * Max time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  maxTime: import_prop_types.default.any,
  /**
   * Min time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  minTime: import_prop_types.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types.default.number,
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
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: import_prop_types.default.func,
  /**
   * Callback fired on view change.
   * @param {ClockPickerView} view The new view.
   */
  onViewChange: import_prop_types.default.func,
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
   * @default 'hours'
   */
  openTo: import_prop_types.default.oneOf(["hours", "minutes", "seconds"]),
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
   * Custom formatter to be passed into Rifm component.
   * @param {string} str The un-formatted string.
   * @returns {string} The formatted string.
   */
  rifmFormatter: import_prop_types.default.func,
  /**
   * Dynamically check if time is disabled or not.
   * If returns `false` appropriate time point will ot be acceptable.
   * @param {number} timeValue The value to check.
   * @param {ClockPickerView} clockType The clock type of the timeValue.
   * @returns {boolean} Returns `true` if the time should be disabled
   */
  shouldDisableTime: import_prop_types.default.func,
  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: import_prop_types.default.bool,
  /**
   * Component that will replace default toolbar renderer.
   * @default TimePickerToolbar
   */
  ToolbarComponent: import_prop_types.default.elementType,
  /**
   * Mobile picker title, displaying in the toolbar.
   * @default 'Select time'
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
   * @default ['hours', 'minutes']
   */
  views: import_prop_types.default.arrayOf(import_prop_types.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
} : void 0;

// ../node_modules/@mui/x-date-pickers/MobileTimePicker/MobileTimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded3 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];
var MobileTimePicker = React3.forwardRef(function MobileTimePicker2(inProps, ref) {
  const props = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
  const validationError = useTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, timePickerValueManager);
  const {
    ToolbarComponent = TimePickerToolbar,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return (0, import_jsx_runtime4.jsx)(MobileWrapper, _extends({}, other, wrapperProps, {
    DateInputProps,
    PureDateInputComponent: PureDateInput,
    components,
    componentsProps,
    children: (0, import_jsx_runtime4.jsx)(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
true ? MobileTimePicker.propTypes = {
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
   * Props applied to the [`Dialog`](https://mui.com/material-ui/api/dialog/) element.
   */
  DialogProps: import_prop_types2.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
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
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: import_prop_types2.default.string,
  /**
   * Max time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  maxTime: import_prop_types2.default.any,
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
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: import_prop_types2.default.func,
  /**
   * Callback fired on view change.
   * @param {ClockPickerView} view The new view.
   */
  onViewChange: import_prop_types2.default.func,
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
   * @default 'hours'
   */
  openTo: import_prop_types2.default.oneOf(["hours", "minutes", "seconds"]),
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
   * Custom formatter to be passed into Rifm component.
   * @param {string} str The un-formatted string.
   * @returns {string} The formatted string.
   */
  rifmFormatter: import_prop_types2.default.func,
  /**
   * Dynamically check if time is disabled or not.
   * If returns `false` appropriate time point will ot be acceptable.
   * @param {number} timeValue The value to check.
   * @param {ClockPickerView} clockType The clock type of the timeValue.
   * @returns {boolean} Returns `true` if the time should be disabled
   */
  shouldDisableTime: import_prop_types2.default.func,
  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: import_prop_types2.default.bool,
  /**
   * Component that will replace default toolbar renderer.
   * @default TimePickerToolbar
   */
  ToolbarComponent: import_prop_types2.default.elementType,
  /**
   * Mobile picker title, displaying in the toolbar.
   * @default 'Select time'
   */
  toolbarTitle: import_prop_types2.default.node,
  /**
   * The value of the picker.
   */
  value: import_prop_types2.default.any,
  /**
   * Array of views to show.
   * @default ['hours', 'minutes']
   */
  views: import_prop_types2.default.arrayOf(import_prop_types2.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
} : void 0;

// ../node_modules/@mui/x-date-pickers/TimePicker/TimePicker.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded4 = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
var TimePicker = React4.forwardRef(function TimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePicker"
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
    return (0, import_jsx_runtime5.jsx)(DesktopTimePicker, _extends({
      ref,
      PopperProps,
      TransitionComponent
    }, other));
  }
  return (0, import_jsx_runtime5.jsx)(MobileTimePicker, _extends({
    ref,
    DialogProps
  }, other));
});
true ? TimePicker.propTypes = {
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
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: import_prop_types3.default.string,
  /**
   * Max time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  maxTime: import_prop_types3.default.any,
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
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: import_prop_types3.default.func,
  /**
   * Callback fired on view change.
   * @param {ClockPickerView} view The new view.
   */
  onViewChange: import_prop_types3.default.func,
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
   * @default 'hours'
   */
  openTo: import_prop_types3.default.oneOf(["hours", "minutes", "seconds"]),
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
   * Custom formatter to be passed into Rifm component.
   * @param {string} str The un-formatted string.
   * @returns {string} The formatted string.
   */
  rifmFormatter: import_prop_types3.default.func,
  /**
   * Dynamically check if time is disabled or not.
   * If returns `false` appropriate time point will ot be acceptable.
   * @param {number} timeValue The value to check.
   * @param {ClockPickerView} clockType The clock type of the timeValue.
   * @returns {boolean} Returns `true` if the time should be disabled
   */
  shouldDisableTime: import_prop_types3.default.func,
  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: import_prop_types3.default.bool,
  /**
   * Component that will replace default toolbar renderer.
   * @default TimePickerToolbar
   */
  ToolbarComponent: import_prop_types3.default.elementType,
  /**
   * Mobile picker title, displaying in the toolbar.
   * @default 'Select time'
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
   * @default ['hours', 'minutes']
   */
  views: import_prop_types3.default.arrayOf(import_prop_types3.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
} : void 0;

export {
  useTimePickerDefaultizedProps,
  timePickerValueManager,
  timePickerToolbarClasses,
  TimePickerToolbar,
  DesktopTimePicker,
  MobileTimePicker,
  TimePicker
};
//# sourceMappingURL=chunk-RU5GAYYT.js.map
