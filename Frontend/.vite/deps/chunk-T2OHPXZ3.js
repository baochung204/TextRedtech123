import {
  useTheme_default
} from "./chunk-F774JSOC.js";
import {
  defaultTheme_default,
  identifier_default,
  init_defaultTheme,
  init_identifier
} from "./chunk-U2ZDWUM5.js";
import {
  require_react
} from "./chunk-Y4AEIJ5V.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// ../node_modules/@mui/material/styles/useTheme.js
var React = __toESM(require_react());
init_defaultTheme();
init_identifier();
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}

export {
  useTheme
};
//# sourceMappingURL=chunk-T2OHPXZ3.js.map
