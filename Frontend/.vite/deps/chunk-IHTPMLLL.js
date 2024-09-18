import {
  init_esm,
  useForkRef
} from "./chunk-RFBTVAV3.js";
import {
  init_useEnhancedEffect,
  useEnhancedEffect_default
} from "./chunk-NIKHLA4J.js";
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

// ../node_modules/@mui/x-tree-view/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/useSlotProps.js
init_extends();
init_objectWithoutPropertiesLoose();
init_esm();

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/appendOwnerState.js
init_extends();

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/mergeSlotProps.js
init_extends();

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_default(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/useSlotProps.js
var _excluded = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/ClassNameConfigurator.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var defaultContextValue = {
  disableDefaultClasses: false
};
var ClassNameConfiguratorContext = React.createContext(defaultContextValue);
if (true) {
  ClassNameConfiguratorContext.displayName = "ClassNameConfiguratorContext";
}
function useClassNamesOverride(generateUtilityClass) {
  const {
    disableDefaultClasses
  } = React.useContext(ClassNameConfiguratorContext);
  return (slot) => {
    if (disableDefaultClasses) {
      return "";
    }
    return generateUtilityClass(slot);
  };
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/useRootElementName.js
var React2 = __toESM(require_react());
function useRootElementName(parameters) {
  const {
    rootElementName: rootElementNameProp = "",
    componentName
  } = parameters;
  const [rootElementName, setRootElementName] = React2.useState(rootElementNameProp.toUpperCase());
  if (true) {
    React2.useEffect(() => {
      if (rootElementNameProp && rootElementName !== rootElementNameProp.toUpperCase()) {
        console.error(`useRootElementName: the \`rootElementName\` prop of ${componentName ? `the ${componentName} component` : "a component"} expected the '${rootElementNameProp}' element, but a '${rootElementName.toLowerCase()}' was rendered instead`, "This may cause hydration issues in an SSR context, for example in a Next.js app");
      }
    }, [rootElementNameProp, rootElementName, componentName]);
  }
  const updateRootElementName = React2.useCallback((instance) => {
    var _instance$tagName;
    setRootElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : "");
  }, []);
  return [rootElementName, updateRootElementName];
}

// ../node_modules/@mui/x-tree-view/node_modules/@mui/base/utils/prepareForSlot.js
init_extends();
init_objectWithoutPropertiesLoose();
var React3 = __toESM(require_react());

// ../node_modules/@mui/x-tree-view/internals/TreeViewProvider/DescendantProvider.js
init_objectWithoutPropertiesLoose();
init_extends();
var React4 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_useEnhancedEffect();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["element"];
function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }
  return -1;
}
function binaryFindElement(array, element) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (array[middle].element === element) {
      return middle;
    }
    if (array[middle].element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return start;
}
var DescendantContext = React4.createContext({});
if (true) {
  DescendantContext.displayName = "DescendantContext";
}
function usePrevious(value) {
  const ref = React4.useRef(null);
  React4.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
var noop = () => {
};
function useDescendant(descendant) {
  const [, forceUpdate] = React4.useState();
  const {
    registerDescendant = noop,
    unregisterDescendant = noop,
    descendants = [],
    parentId = null
  } = React4.useContext(DescendantContext);
  const index = findIndex(descendants, (item) => item.element === descendant.element);
  const previousDescendants = usePrevious(descendants);
  const someDescendantsHaveChanged = descendants.some((newDescendant, position) => {
    return previousDescendants && previousDescendants[position] && previousDescendants[position].element !== newDescendant.element;
  });
  useEnhancedEffect_default(() => {
    if (descendant.element) {
      registerDescendant(_extends({}, descendant, {
        index
      }));
      return () => {
        unregisterDescendant(descendant.element);
      };
    }
    forceUpdate({});
    return void 0;
  }, [registerDescendant, unregisterDescendant, index, someDescendantsHaveChanged, descendant]);
  return {
    parentId,
    index
  };
}
function DescendantProvider(props) {
  const {
    children,
    id
  } = props;
  const [items, set] = React4.useState([]);
  const registerDescendant = React4.useCallback((_ref) => {
    let {
      element
    } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded2);
    set((oldItems) => {
      if (oldItems.length === 0) {
        return [_extends({}, other, {
          element,
          index: 0
        })];
      }
      const index = binaryFindElement(oldItems, element);
      let newItems;
      if (oldItems[index] && oldItems[index].element === element) {
        newItems = oldItems;
      } else {
        const newItem = _extends({}, other, {
          element,
          index
        });
        newItems = oldItems.slice();
        newItems.splice(index, 0, newItem);
      }
      newItems.forEach((item, position) => {
        item.index = position;
      });
      return newItems;
    });
  }, []);
  const unregisterDescendant = React4.useCallback((element) => {
    set((oldItems) => oldItems.filter((item) => element !== item.element));
  }, []);
  const value = React4.useMemo(() => ({
    descendants: items,
    registerDescendant,
    unregisterDescendant,
    parentId: id
  }), [items, registerDescendant, unregisterDescendant, id]);
  return (0, import_jsx_runtime2.jsx)(DescendantContext.Provider, {
    value,
    children
  });
}
true ? DescendantProvider.propTypes = {
  children: import_prop_types.default.node,
  id: import_prop_types.default.string
} : void 0;

// ../node_modules/@mui/x-tree-view/internals/TreeViewProvider/TreeViewContext.js
var React5 = __toESM(require_react());
var DEFAULT_TREE_VIEW_CONTEXT_VALUE = {
  instance: null,
  multiSelect: false,
  disabledItemsFocusable: false,
  treeId: void 0,
  icons: {
    defaultCollapseIcon: null,
    defaultExpandIcon: null,
    defaultParentIcon: null,
    defaultEndIcon: null
  }
};
var TreeViewContext = React5.createContext(DEFAULT_TREE_VIEW_CONTEXT_VALUE);
if (true) {
  TreeViewContext.displayName = "TreeViewContext";
}

export {
  clsx_default,
  isHostComponent,
  areArraysEqual,
  useClassNamesOverride,
  extractEventHandlers,
  resolveComponentProps,
  useRootElementName,
  useSlotProps,
  useDescendant,
  DescendantProvider,
  DEFAULT_TREE_VIEW_CONTEXT_VALUE,
  TreeViewContext
};
//# sourceMappingURL=chunk-IHTPMLLL.js.map
