import {
  getPanelId,
  getTabId,
  useTabContext
} from "./chunk-S4QP5OMH.js";
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

// ../node_modules/@mui/lab/TabPanel/TabPanel.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// ../node_modules/@mui/lab/TabPanel/tabPanelClasses.js
function getTabPanelUtilityClass(slot) {
  return generateUtilityClass("MuiTabPanel", slot);
}
var tabPanelClasses = generateUtilityClasses("MuiTabPanel", ["root"]);
var tabPanelClasses_default = tabPanelClasses;

// ../node_modules/@mui/lab/TabPanel/TabPanel.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "value"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTabPanelUtilityClass, classes);
};
var TabPanelRoot = styled_default("div", {
  name: "MuiTabPanel",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
var TabPanel = React.forwardRef(function TabPanel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTabPanel"
  });
  const {
    children,
    className,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props);
  const classes = useUtilityClasses(ownerState);
  const context = useTabContext();
  if (context === null) {
    throw new TypeError("No TabContext provided");
  }
  const id = getPanelId(context, value);
  const tabId = getTabId(context, value);
  return (0, import_jsx_runtime.jsx)(TabPanelRoot, _extends({
    "aria-labelledby": tabId,
    className: clsx_m_default(classes.root, className),
    hidden: value !== context.value,
    id,
    ref,
    role: "tabpanel",
    ownerState
  }, other, {
    children: value === context.value && children
  }));
});
true ? TabPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The `value` of the corresponding `Tab`. Must use the index of the `Tab` when
   * no `value` was passed to `Tab`.
   */
  value: import_prop_types.default.string.isRequired
} : void 0;
var TabPanel_default = TabPanel;

export {
  getTabPanelUtilityClass,
  tabPanelClasses_default,
  TabPanel_default
};
//# sourceMappingURL=chunk-ECCIGOXB.js.map
