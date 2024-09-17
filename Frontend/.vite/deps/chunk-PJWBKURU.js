import {
  Tabs_default
} from "./chunk-DYAUEUIU.js";
import {
  getPanelId,
  getTabId,
  useTabContext
} from "./chunk-S4QP5OMH.js";
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

// ../node_modules/@mui/lab/TabList/TabList.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children"];
var TabList = React.forwardRef(function TabList2(props, ref) {
  const {
    children: childrenProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const context = useTabContext();
  if (context === null) {
    throw new TypeError("No TabContext provided");
  }
  const children = React.Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return React.cloneElement(child, {
      // SOMEDAY: `Tabs` will set those themselves
      "aria-controls": getPanelId(context, child.props.value),
      id: getTabId(context, child.props.value)
    });
  });
  return (0, import_jsx_runtime.jsx)(Tabs_default, _extends({}, other, {
    ref,
    value: context.value,
    children
  }));
});
true ? TabList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A list of `<Tab />` elements.
   */
  children: import_prop_types.default.node
} : void 0;
var TabList_default = TabList;

export {
  TabList_default
};
//# sourceMappingURL=chunk-PJWBKURU.js.map
