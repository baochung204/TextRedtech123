import {
  _extends,
  init_extends
} from "./chunk-PAHICXFQ.js";
import {
  require_react
} from "./chunk-UMBEC6V5.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/react-router-dom/index.js
var import_react2 = __toESM(require_react());

// node_modules/history/index.js
init_extends();
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = true ? function(obj) {
  return Object.freeze(obj);
} : function(obj) {
  return obj;
};
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
var BeforeUnloadEventType = "beforeunload";
var HashChangeEventType = "hashchange";
var PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$window = _options.window, window = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window.history;
  function getIndexAndLocation() {
    var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname,
      search,
      hash,
      state: state.usr || null,
      key: state.key || "default"
    })];
  }
  var blockedPopTx = null;
  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;
      var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;
          if (delta) {
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          true ? warning(
            false,
            // TODO: Write up a doc that explains our blocking strategy in
            // detail and link to it here so people can understand better what
            // is going on and how to avoid it.
            "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."
          ) : void 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }
  window.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;
  var _getIndexAndLocation2 = getIndexAndLocation(), index = _getIndexAndLocation2[0], location = _getIndexAndLocation2[1];
  var listeners = createEvents();
  var blockers = createEvents();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }
    return readOnly(_extends({
      pathname: location.pathname,
      hash: "",
      search: ""
    }, typeof to === "string" ? parsePath(to) : to, {
      state,
      key: createKey()
    }));
  }
  function getHistoryStateAndUrl(nextLocation, index2) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index2
    }, createHref(nextLocation)];
  }
  function allowTx(action2, location2, retry) {
    return !blockers.length || (blockers.call({
      action: action2,
      location: location2,
      retry
    }), false);
  }
  function applyTx(nextAction) {
    action = nextAction;
    var _getIndexAndLocation3 = getIndexAndLocation();
    index = _getIndexAndLocation3[0];
    location = _getIndexAndLocation3[1];
    listeners.call({
      action,
      location
    });
  }
  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      push(to, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        window.location.assign(url);
      }
      applyTx(nextAction);
    }
  }
  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      replace(to, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
      globalHistory.replaceState(historyState, "", url);
      applyTx(nextAction);
    }
  }
  function go(delta) {
    globalHistory.go(delta);
  }
  var history = {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    createHref,
    push,
    replace,
    go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);
      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }
      return function() {
        unblock();
        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  var _options2 = options, _options2$window = _options2.window, window = _options2$window === void 0 ? document.defaultView : _options2$window;
  var globalHistory = window.history;
  function getIndexAndLocation() {
    var _parsePath = parsePath(window.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? "/" : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? "" : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? "" : _parsePath$hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname,
      search,
      hash,
      state: state.usr || null,
      key: state.key || "default"
    })];
  }
  var blockedPopTx = null;
  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;
      var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;
          if (delta) {
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          true ? warning(
            false,
            // TODO: Write up a doc that explains our blocking strategy in
            // detail and link to it here so people can understand better
            // what is going on and how to avoid it.
            "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."
          ) : void 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }
  window.addEventListener(PopStateEventType, handlePop);
  window.addEventListener(HashChangeEventType, function() {
    var _getIndexAndLocation5 = getIndexAndLocation(), nextLocation = _getIndexAndLocation5[1];
    if (createPath(nextLocation) !== createPath(location)) {
      handlePop();
    }
  });
  var action = Action.Pop;
  var _getIndexAndLocation6 = getIndexAndLocation(), index = _getIndexAndLocation6[0], location = _getIndexAndLocation6[1];
  var listeners = createEvents();
  var blockers = createEvents();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getBaseHref() {
    var base = document.querySelector("base");
    var href = "";
    if (base && base.getAttribute("href")) {
      var url = window.location.href;
      var hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href;
  }
  function createHref(to) {
    return getBaseHref() + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }
    return readOnly(_extends({
      pathname: location.pathname,
      hash: "",
      search: ""
    }, typeof to === "string" ? parsePath(to) : to, {
      state,
      key: createKey()
    }));
  }
  function getHistoryStateAndUrl(nextLocation, index2) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index2
    }, createHref(nextLocation)];
  }
  function allowTx(action2, location2, retry) {
    return !blockers.length || (blockers.call({
      action: action2,
      location: location2,
      retry
    }), false);
  }
  function applyTx(nextAction) {
    action = nextAction;
    var _getIndexAndLocation7 = getIndexAndLocation();
    index = _getIndexAndLocation7[0];
    location = _getIndexAndLocation7[1];
    listeners.call({
      action,
      location
    });
  }
  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      push(to, state);
    }
    true ? warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")") : void 0;
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1];
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        window.location.assign(url);
      }
      applyTx(nextAction);
    }
  }
  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      replace(to, state);
    }
    true ? warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")") : void 0;
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1];
      globalHistory.replaceState(historyState, "", url);
      applyTx(nextAction);
    }
  }
  function go(delta) {
    globalHistory.go(delta);
  }
  var history = {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    createHref,
    push,
    replace,
    go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);
      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }
      return function() {
        unblock();
        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  var _options3 = options, _options3$initialEntr = _options3.initialEntries, initialEntries = _options3$initialEntr === void 0 ? ["/"] : _options3$initialEntr, initialIndex = _options3.initialIndex;
  var entries = initialEntries.map(function(entry) {
    var location2 = readOnly(_extends({
      pathname: "/",
      search: "",
      hash: "",
      state: null,
      key: createKey()
    }, typeof entry === "string" ? parsePath(entry) : entry));
    true ? warning(location2.pathname.charAt(0) === "/", "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")") : void 0;
    return location2;
  });
  var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
  var action = Action.Pop;
  var location = entries[index];
  var listeners = createEvents();
  var blockers = createEvents();
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }
    return readOnly(_extends({
      pathname: location.pathname,
      search: "",
      hash: ""
    }, typeof to === "string" ? parsePath(to) : to, {
      state,
      key: createKey()
    }));
  }
  function allowTx(action2, location2, retry) {
    return !blockers.length || (blockers.call({
      action: action2,
      location: location2,
      retry
    }), false);
  }
  function applyTx(nextAction, nextLocation) {
    action = nextAction;
    location = nextLocation;
    listeners.call({
      action,
      location
    });
  }
  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      push(to, state);
    }
    true ? warning(location.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")") : void 0;
    if (allowTx(nextAction, nextLocation, retry)) {
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      applyTx(nextAction, nextLocation);
    }
  }
  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      replace(to, state);
    }
    true ? warning(location.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")") : void 0;
    if (allowTx(nextAction, nextLocation, retry)) {
      entries[index] = nextLocation;
      applyTx(nextAction, nextLocation);
    }
  }
  function go(delta) {
    var nextIndex = clamp(index + delta, 0, entries.length - 1);
    var nextAction = Action.Pop;
    var nextLocation = entries[nextIndex];
    function retry() {
      go(delta);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      index = nextIndex;
      applyTx(nextAction, nextLocation);
    }
  }
  var history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    createHref,
    push,
    replace,
    go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      return blockers.push(blocker);
    }
  };
  return history;
}
function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
function promptBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = "";
}
function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },
    push: function push(fn) {
      handlers.push(fn);
      return function() {
        handlers = handlers.filter(function(handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function(fn) {
        return fn && fn(arg);
      });
    }
  };
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    var searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}

// node_modules/react-router/index.js
var import_react = __toESM(require_react());
var NavigationContext = (0, import_react.createContext)(null);
if (true) {
  NavigationContext.displayName = "Navigation";
}
var LocationContext = (0, import_react.createContext)(null);
if (true) {
  LocationContext.displayName = "Location";
}
var RouteContext = (0, import_react.createContext)({
  outlet: null,
  matches: []
});
if (true) {
  RouteContext.displayName = "Route";
}
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning2(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    true ? warning2(false, message) : void 0;
  }
}
function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }
  return path.replace(/:(\w+)/g, (_, key) => {
    !(params[key] != null) ? true ? invariant(false, 'Missing ":' + key + '" param') : invariant(false) : void 0;
    return params[key];
  }).replace(/\/*\*$/, (_) => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
}
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ? true ? invariant(false, 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? true ? invariant(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
var paramRe = /^:\w+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  true ? warning2(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".')) : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : (
      // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
      // parent routes to matching only their own words and nothing more, e.g. parent
      // route "/home" should not match "/home2".
      // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
      // but do not consume the character in the matched path so they can match against
      // nested paths.
      "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"
    );
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    true ? warning2(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")) : void 0;
    return value;
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename.length) || "/";
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function useHref(to) {
  !useInRouterContext() ? true ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return (0, import_react.useContext)(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? true ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  return (0, import_react.useContext)(LocationContext).location;
}
function useNavigationType() {
  return (0, import_react.useContext)(LocationContext).navigationType;
}
function useMatch(pattern) {
  !useInRouterContext() ? true ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let {
    pathname
  } = useLocation();
  return (0, import_react.useMemo)(() => matchPath(pattern, pathname), [pathname, pattern]);
}
function useNavigate() {
  !useInRouterContext() ? true ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext);
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  let activeRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0, import_react.useCallback)(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    true ? warning2(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.") : void 0;
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
var OutletContext = (0, import_react.createContext)(null);
function useOutletContext() {
  return (0, import_react.useContext)(OutletContext);
}
function useOutlet(context) {
  let outlet = (0, import_react.useContext)(RouteContext).outlet;
  if (outlet) {
    return (0, import_react.createElement)(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useParams() {
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to) {
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return (0, import_react.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? true ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let {
    matches: parentMatches
  } = (0, import_react.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? true ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  if (true) {
    true ? warning2(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
    true ? warning2(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null)
    return null;
  return matches.reduceRight((outlet, match, index) => {
    return (0, import_react.createElement)(RouteContext.Provider, {
      children: match.route.element !== void 0 ? match.route.element : outlet,
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
function MemoryRouter(_ref) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref;
  let historyRef = (0, import_react.useRef)();
  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex
    });
  }
  let history = historyRef.current;
  let [state, setState] = (0, import_react.useState)({
    action: history.action,
    location: history.location
  });
  (0, import_react.useLayoutEffect)(() => history.listen(setState), [history]);
  return (0, import_react.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function Navigate(_ref2) {
  let {
    to,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ? true ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  true ? warning2(!(0, import_react.useContext)(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.") : void 0;
  let navigate = useNavigate();
  (0, import_react.useEffect)(() => {
    navigate(to, {
      replace,
      state
    });
  });
  return null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  true ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : invariant(false);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? true ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0, import_react.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = (0, import_react.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  true ? warning2(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location == null) {
    return null;
  }
  return (0, import_react.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, (0, import_react.createElement)(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
}
function createRoutesFromChildren(children) {
  let routes = [];
  import_react.Children.forEach(children, (element) => {
    if (!(0, import_react.isValidElement)(element)) {
      return;
    }
    if (element.type === import_react.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }
    !(element.type === Route) ? true ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : invariant(false) : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }
    routes.push(route);
  });
  return routes;
}
function renderMatches(matches) {
  return _renderMatches(matches);
}

// node_modules/react-router-dom/index.js
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
var _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function warning3(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = (0, import_react2.useRef)();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window
    });
  }
  let history = historyRef.current;
  let [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location
  });
  (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]);
  return (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = (0, import_react2.useRef)();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window
    });
  }
  let history = historyRef.current;
  let [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location
  });
  (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]);
  return (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location
  });
  (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]);
  return (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var Link = (0, import_react2.forwardRef)(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    (0, import_react2.createElement)("a", _extends2({}, rest, {
      href,
      onClick: handleClick,
      ref,
      target
    }))
  );
});
if (true) {
  Link.displayName = "Link";
}
var NavLink = (0, import_react2.forwardRef)(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return (0, import_react2.createElement)(Link, _extends2({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});
if (true) {
  NavLink.displayName = "NavLink";
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return (0, import_react2.useCallback)((event) => {
    if (event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
function useSearchParams(defaultInit) {
  true ? warning3(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.") : void 0;
  let defaultSearchParamsRef = (0, import_react2.useRef)(createSearchParams(defaultInit));
  let location = useLocation();
  let searchParams = (0, import_react2.useMemo)(() => {
    let searchParams2 = createSearchParams(location.search);
    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams2.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach((value) => {
          searchParams2.append(key, value);
        });
      }
    }
    return searchParams2;
  }, [location.search]);
  let navigate = useNavigate();
  let setSearchParams = (0, import_react2.useCallback)((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
  }, []));
}
export {
  BrowserRouter,
  HashRouter,
  Link,
  MemoryRouter,
  NavLink,
  Navigate,
  Action as NavigationType,
  Outlet,
  Route,
  Router,
  Routes,
  LocationContext as UNSAFE_LocationContext,
  NavigationContext as UNSAFE_NavigationContext,
  RouteContext as UNSAFE_RouteContext,
  createPath,
  createRoutesFromChildren,
  createSearchParams,
  generatePath,
  matchPath,
  matchRoutes,
  parsePath,
  renderMatches,
  resolvePath,
  HistoryRouter as unstable_HistoryRouter,
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLocation,
  useMatch,
  useNavigate,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRoutes,
  useSearchParams
};
/*! Bundled license information:

react-router/index.js:
  (**
   * React Router v6.3.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/index.js:
  (**
   * React Router DOM v6.3.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=react-router-dom.js.map
