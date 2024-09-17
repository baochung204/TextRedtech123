import {
  createIsAfterIgnoreDatePart,
  getPickersToolbarUtilityClass,
  useValidation
} from "./chunk-63PHC5P6.js";
import {
  Typography_default
} from "./chunk-S3OBIIMB.js";
import {
  Button_default
} from "./chunk-L4S74MCU.js";
import {
  clsx_m_default
} from "./chunk-JJHJ2M4Q.js";
import {
  useThemeProps
} from "./chunk-6VRJ5KTC.js";
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

// ../node_modules/@mui/x-date-pickers/internals/hooks/validation/useTimeValidation.js
var validateTime = ({
  adapter,
  value,
  props
}) => {
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation
  } = props;
  const date = adapter.utils.date(value);
  const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
  if (value === null) {
    return null;
  }
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(minTime && isAfter(minTime, date)):
      return "minTime";
    case Boolean(maxTime && isAfter(date, maxTime)):
      return "maxTime";
    case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getHours(date), "hours")):
      return "shouldDisableTime-hours";
    case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getMinutes(date), "minutes")):
      return "shouldDisableTime-minutes";
    case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getSeconds(date), "seconds")):
      return "shouldDisableTime-seconds";
    case Boolean(minutesStep && adapter.utils.getMinutes(date) % minutesStep !== 0):
      return "minutesStep";
    default:
      return null;
  }
};
var isSameTimeError = (a, b) => a === b;
var useTimeValidation = (props) => useValidation(props, validateTime, isSameTimeError);

// ../node_modules/@mui/x-date-pickers/internals/components/PickersToolbarText.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());

// ../node_modules/@mui/x-date-pickers/internals/components/pickersToolbarTextClasses.js
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("PrivatePickersToolbarText", slot);
}
var pickersToolbarTextClasses = generateUtilityClasses("PrivatePickersToolbarText", ["root", "selected"]);

// ../node_modules/@mui/x-date-pickers/internals/components/PickersToolbarText.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "selected", "value"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    selected
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
var PickersToolbarTextRoot = styled_default(Typography_default, {
  name: "PrivatePickersToolbarText",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${pickersToolbarTextClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: theme.palette.text.secondary,
  [`&.${pickersToolbarTextClasses.selected}`]: {
    color: theme.palette.text.primary
  }
}));
var PickersToolbarText = React.forwardRef(function PickersToolbarText2(props, ref) {
  const {
    className,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const classes = useUtilityClasses(props);
  return (0, import_jsx_runtime.jsx)(PickersToolbarTextRoot, _extends({
    ref,
    className: clsx_m_default(className, classes.root),
    component: "span"
  }, other, {
    children: value
  }));
});

// ../node_modules/@mui/x-date-pickers/internals/components/PickersToolbarButton.js
init_extends();
init_objectWithoutPropertiesLoose();
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["align", "className", "selected", "typographyClassName", "value", "variant"];
var useUtilityClasses2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarButtonRoot = styled_default(Button_default, {
  name: "MuiPickersToolbarButton",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
var PickersToolbarButton = React2.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    selected,
    typographyClassName,
    value,
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const classes = useUtilityClasses2(props);
  return (0, import_jsx_runtime2.jsx)(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref,
    className: clsx_m_default(className, classes.root)
  }, other, {
    children: (0, import_jsx_runtime2.jsx)(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});

export {
  PickersToolbarText,
  PickersToolbarButton,
  validateTime,
  useTimeValidation
};
//# sourceMappingURL=chunk-WDK7F5XN.js.map
