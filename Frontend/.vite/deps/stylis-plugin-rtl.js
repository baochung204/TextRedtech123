import {
  __commonJS
} from "./chunk-ROME4SDB.js";

// node_modules/cssjanus/src/cssjanus.js
var require_cssjanus = __commonJS({
  "node_modules/cssjanus/src/cssjanus.js"(exports, module) {
    var cssjanus;
    function Tokenizer(regex, token) {
      var matches = [], index = 0;
      function tokenizeCallback(match) {
        matches.push(match);
        return token;
      }
      function detokenizeCallback() {
        return matches[index++];
      }
      return {
        /**
         * Replace matching strings with tokens.
         *
         * @param {string} str String to tokenize
         * @return {string} Tokenized string
         */
        tokenize: function(str) {
          return str.replace(regex, tokenizeCallback);
        },
        /**
         * Restores tokens to their original values.
         *
         * @param {string} str String previously run through tokenize()
         * @return {string} Original string
         */
        detokenize: function(str) {
          return str.replace(new RegExp("(" + token + ")", "g"), detokenizeCallback);
        }
      };
    }
    function CSSJanus() {
      var temporaryToken = "`TMP`", temporaryLtrToken = "`TMPLTR`", temporaryRtlToken = "`TMPRTL`", noFlipSingleToken = "`NOFLIP_SINGLE`", noFlipClassToken = "`NOFLIP_CLASS`", commentToken = "`COMMENT`", nonAsciiPattern = "[^\\u0020-\\u007e]", unicodePattern = "(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)", numPattern = "(?:[0-9]*\\.[0-9]+|[0-9]+)", unitPattern = "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)", directionPattern = "direction\\s*:\\s*", urlSpecialCharsPattern = "[!#$%&*-~]", validAfterUriCharsPattern = `['"]?\\s*`, nonLetterPattern = "(^|[^a-zA-Z])", charsWithinSelectorPattern = "[^\\}]*?", noFlipPattern = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/", commentPattern = "\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", escapePattern = "(?:" + unicodePattern + "|\\\\[^\\r\\n\\f0-9a-f])", nmstartPattern = "(?:[_a-z]|" + nonAsciiPattern + "|" + escapePattern + ")", nmcharPattern = "(?:[_a-z0-9-]|" + nonAsciiPattern + "|" + escapePattern + ")", identPattern = "-?" + nmstartPattern + nmcharPattern + "*", quantPattern = numPattern + "(?:\\s*" + unitPattern + "|" + identPattern + ")?", signedQuantPattern = "((?:-?" + quantPattern + ")|(?:inherit|auto))", signedQuantSimplePattern = "(?:-?" + numPattern + "(?:\\s*" + unitPattern + ")?)", mathOperatorsPattern = "(?:\\+|\\-|\\*|\\/)", allowedCharsPattern = "(?:\\(|\\)|\\t| )", calcEquationPattern = "(?:" + allowedCharsPattern + "|" + signedQuantSimplePattern + "|" + mathOperatorsPattern + "){3,}", calcPattern = "(?:calc\\((?:" + calcEquationPattern + ")\\))", signedQuantCalcPattern = "((?:-?" + quantPattern + ")|(?:inherit|auto)|" + calcPattern + ")", fourNotationQuantPropsPattern = "((?:margin|padding|border-width)\\s*:\\s*)", fourNotationColorPropsPattern = "((?:-color|border-style)\\s*:\\s*)", colorPattern = "(#?" + nmcharPattern + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))", urlCharsPattern = "(?:" + urlSpecialCharsPattern + "|" + nonAsciiPattern + "|" + escapePattern + ")*?", lookAheadNotLetterPattern = "(?![a-zA-Z])", lookAheadNotOpenBracePattern = "(?!(" + nmcharPattern + `|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|"[^"]*"|` + commentToken + ")*?{)", lookAheadNotClosingParenPattern = "(?!" + urlCharsPattern + validAfterUriCharsPattern + "\\))", lookAheadForClosingParenPattern = "(?=" + urlCharsPattern + validAfterUriCharsPattern + "\\))", suffixPattern = "(\\s*(?:!important\\s*)?[;}])", temporaryTokenRegExp = /`TMP`/g, temporaryLtrTokenRegExp = /`TMPLTR`/g, temporaryRtlTokenRegExp = /`TMPRTL`/g, commentRegExp = new RegExp(commentPattern, "gi"), noFlipSingleRegExp = new RegExp("(" + noFlipPattern + lookAheadNotOpenBracePattern + "[^;}]+;?)", "gi"), noFlipClassRegExp = new RegExp("(" + noFlipPattern + charsWithinSelectorPattern + "})", "gi"), directionLtrRegExp = new RegExp("(" + directionPattern + ")ltr", "gi"), directionRtlRegExp = new RegExp("(" + directionPattern + ")rtl", "gi"), leftRegExp = new RegExp(nonLetterPattern + "(left)" + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, "gi"), rightRegExp = new RegExp(nonLetterPattern + "(right)" + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, "gi"), leftInUrlRegExp = new RegExp(nonLetterPattern + "(left)" + lookAheadForClosingParenPattern, "gi"), rightInUrlRegExp = new RegExp(nonLetterPattern + "(right)" + lookAheadForClosingParenPattern, "gi"), ltrDirSelector = /(:dir\( *)ltr( *\))/g, rtlDirSelector = /(:dir\( *)rtl( *\))/g, ltrInUrlRegExp = new RegExp(nonLetterPattern + "(ltr)" + lookAheadForClosingParenPattern, "gi"), rtlInUrlRegExp = new RegExp(nonLetterPattern + "(rtl)" + lookAheadForClosingParenPattern, "gi"), cursorEastRegExp = new RegExp(nonLetterPattern + "([ns]?)e-resize", "gi"), cursorWestRegExp = new RegExp(nonLetterPattern + "([ns]?)w-resize", "gi"), fourNotationQuantRegExp = new RegExp(fourNotationQuantPropsPattern + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + suffixPattern, "gi"), fourNotationColorRegExp = new RegExp(fourNotationColorPropsPattern + colorPattern + "(\\s+)" + colorPattern + "(\\s+)" + colorPattern + "(\\s+)" + colorPattern + suffixPattern, "gi"), bgHorizontalPercentageRegExp = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + quantPattern + ")", "gi"), bgHorizontalPercentageXRegExp = new RegExp("(background-position-x\\s*:\\s*)(-?" + numPattern + "%)", "gi"), borderRadiusRegExp = new RegExp("(border-radius\\s*:\\s*)" + signedQuantPattern + "(?:(?:\\s+" + signedQuantPattern + ")(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?)?(?:(?:(?:\\s*\\/\\s*)" + signedQuantPattern + ")(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?)?" + suffixPattern, "gi"), boxShadowRegExp = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + signedQuantPattern, "gi"), textShadow1RegExp = new RegExp("(text-shadow\\s*:\\s*)" + signedQuantPattern + "(\\s*)" + colorPattern, "gi"), textShadow2RegExp = new RegExp("(text-shadow\\s*:\\s*)" + colorPattern + "(\\s*)" + signedQuantPattern, "gi"), textShadow3RegExp = new RegExp("(text-shadow\\s*:\\s*)" + signedQuantPattern, "gi"), translateXRegExp = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + signedQuantPattern + "(\\s*\\))", "gi"), translateRegExp = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + signedQuantPattern + "((?:\\s*,\\s*" + signedQuantPattern + "){0,2}\\s*\\))", "gi");
      function calculateNewBackgroundPosition(match, pre, value) {
        var idx, len;
        if (value.slice(-1) === "%") {
          idx = value.indexOf(".");
          if (idx !== -1) {
            len = value.length - idx - 2;
            value = 100 - parseFloat(value);
            value = value.toFixed(len) + "%";
          } else {
            value = 100 - parseFloat(value) + "%";
          }
        }
        return pre + value;
      }
      function flipBorderRadiusValues(values) {
        switch (values.length) {
          case 4:
            values = [values[1], values[0], values[3], values[2]];
            break;
          case 3:
            values = [values[1], values[0], values[1], values[2]];
            break;
          case 2:
            values = [values[1], values[0]];
            break;
          case 1:
            values = [values[0]];
            break;
        }
        return values.join(" ");
      }
      function calculateNewBorderRadius(match, pre) {
        var values, args = [].slice.call(arguments), firstGroup = args.slice(2, 6).filter(function(val) {
          return val;
        }), secondGroup = args.slice(6, 10).filter(function(val) {
          return val;
        }), post = args[10] || "";
        if (secondGroup.length) {
          values = flipBorderRadiusValues(firstGroup) + " / " + flipBorderRadiusValues(secondGroup);
        } else {
          values = flipBorderRadiusValues(firstGroup);
        }
        return pre + values + post;
      }
      function flipSign(value) {
        if (parseFloat(value) === 0) {
          return value;
        }
        if (value[0] === "-") {
          return value.slice(1);
        }
        return "-" + value;
      }
      function calculateNewShadow(match, property, offset) {
        return property + flipSign(offset);
      }
      function calculateNewTranslate(match, property, prefix, offset, suffix) {
        return property + prefix + flipSign(offset) + suffix;
      }
      function calculateNewFourTextShadow(match, property, color, space, offset) {
        return property + color + space + flipSign(offset);
      }
      return {
        /**
         * Transform a left-to-right stylesheet to right-to-left.
         *
         * @param {string} css Stylesheet to transform
         * @param {Object} options Options
         * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
         * (e.g. 'ltr', 'rtl')
         * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
         * (e.g. 'left', 'right')
         * @return {string} Transformed stylesheet
         */
        "transform": function(css, options) {
          var noFlipSingleTokenizer = new Tokenizer(noFlipSingleRegExp, noFlipSingleToken), noFlipClassTokenizer = new Tokenizer(noFlipClassRegExp, noFlipClassToken), commentTokenizer = new Tokenizer(commentRegExp, commentToken);
          css = commentTokenizer.tokenize(
            noFlipClassTokenizer.tokenize(
              noFlipSingleTokenizer.tokenize(
                // We wrap tokens in ` , not ~ like the original implementation does.
                // This was done because ` is not a legal character in CSS and can only
                // occur in URLs, where we escape it to %60 before inserting our tokens.
                css.replace("`", "%60")
              )
            )
          );
          if (options.transformDirInUrl) {
            css = css.replace(ltrDirSelector, "$1" + temporaryLtrToken + "$2").replace(rtlDirSelector, "$1" + temporaryRtlToken + "$2").replace(ltrInUrlRegExp, "$1" + temporaryToken).replace(rtlInUrlRegExp, "$1ltr").replace(temporaryTokenRegExp, "rtl").replace(temporaryLtrTokenRegExp, "ltr").replace(temporaryRtlTokenRegExp, "rtl");
          }
          if (options.transformEdgeInUrl) {
            css = css.replace(leftInUrlRegExp, "$1" + temporaryToken).replace(rightInUrlRegExp, "$1left").replace(temporaryTokenRegExp, "right");
          }
          css = css.replace(directionLtrRegExp, "$1" + temporaryToken).replace(directionRtlRegExp, "$1ltr").replace(temporaryTokenRegExp, "rtl").replace(leftRegExp, "$1" + temporaryToken).replace(rightRegExp, "$1left").replace(temporaryTokenRegExp, "right").replace(cursorEastRegExp, "$1$2" + temporaryToken).replace(cursorWestRegExp, "$1$2e-resize").replace(temporaryTokenRegExp, "w-resize").replace(borderRadiusRegExp, calculateNewBorderRadius).replace(boxShadowRegExp, calculateNewShadow).replace(textShadow1RegExp, calculateNewFourTextShadow).replace(textShadow2RegExp, calculateNewFourTextShadow).replace(textShadow3RegExp, calculateNewShadow).replace(translateXRegExp, calculateNewTranslate).replace(translateRegExp, calculateNewTranslate).replace(fourNotationQuantRegExp, "$1$2$3$8$5$6$7$4$9").replace(fourNotationColorRegExp, "$1$2$3$8$5$6$7$4$9").replace(bgHorizontalPercentageRegExp, calculateNewBackgroundPosition).replace(bgHorizontalPercentageXRegExp, calculateNewBackgroundPosition);
          css = noFlipSingleTokenizer.detokenize(
            noFlipClassTokenizer.detokenize(
              commentTokenizer.detokenize(css)
            )
          );
          return css;
        }
      };
    }
    cssjanus = new CSSJanus();
    if (typeof module !== "undefined" && module.exports) {
      exports.transform = function(css, options, transformEdgeInUrl) {
        var norm;
        if (typeof options === "object") {
          norm = options;
        } else {
          norm = {};
          if (typeof options === "boolean") {
            norm.transformDirInUrl = options;
          }
          if (typeof transformEdgeInUrl === "boolean") {
            norm.transformEdgeInUrl = transformEdgeInUrl;
          }
        }
        return cssjanus.transform(css, norm);
      };
    } else if (typeof window !== "undefined") {
      window["cssjanus"] = cssjanus;
    }
  }
});

// node_modules/stylis/dist/umd/stylis.js
var require_stylis = __commonJS({
  "node_modules/stylis/dist/umd/stylis.js"(exports, module) {
    (function(e, r) {
      typeof exports === "object" && typeof module !== "undefined" ? r(exports) : typeof define === "function" && define.amd ? define(["exports"], r) : (e = e || self, r(e.stylis = {}));
    })(exports, function(e) {
      "use strict";
      var r = "-ms-";
      var a = "-moz-";
      var c = "-webkit-";
      var n = "comm";
      var t = "rule";
      var s = "decl";
      var i = "@page";
      var u = "@media";
      var o = "@import";
      var f = "@charset";
      var l = "@viewport";
      var p = "@supports";
      var h = "@document";
      var v = "@namespace";
      var d = "@keyframes";
      var b = "@font-face";
      var w = "@counter-style";
      var m = "@font-feature-values";
      var g = "@layer";
      var k = Math.abs;
      var $ = String.fromCharCode;
      var x = Object.assign;
      function E(e2, r2) {
        return M(e2, 0) ^ 45 ? (((r2 << 2 ^ M(e2, 0)) << 2 ^ M(e2, 1)) << 2 ^ M(e2, 2)) << 2 ^ M(e2, 3) : 0;
      }
      function y(e2) {
        return e2.trim();
      }
      function T(e2, r2) {
        return (e2 = r2.exec(e2)) ? e2[0] : e2;
      }
      function A(e2, r2, a2) {
        return e2.replace(r2, a2);
      }
      function O(e2, r2) {
        return e2.indexOf(r2);
      }
      function M(e2, r2) {
        return e2.charCodeAt(r2) | 0;
      }
      function C(e2, r2, a2) {
        return e2.slice(r2, a2);
      }
      function R(e2) {
        return e2.length;
      }
      function S(e2) {
        return e2.length;
      }
      function z(e2, r2) {
        return r2.push(e2), e2;
      }
      function N(e2, r2) {
        return e2.map(r2).join("");
      }
      e.line = 1;
      e.column = 1;
      e.length = 0;
      e.position = 0;
      e.character = 0;
      e.characters = "";
      function P(r2, a2, c2, n2, t2, s2, i2) {
        return { value: r2, root: a2, parent: c2, type: n2, props: t2, children: s2, line: e.line, column: e.column, length: i2, return: "" };
      }
      function j(e2, r2) {
        return x(P("", null, null, "", null, null, 0), e2, { length: -e2.length }, r2);
      }
      function U() {
        return e.character;
      }
      function _() {
        e.character = e.position > 0 ? M(e.characters, --e.position) : 0;
        if (e.column--, e.character === 10)
          e.column = 1, e.line--;
        return e.character;
      }
      function F() {
        e.character = e.position < e.length ? M(e.characters, e.position++) : 0;
        if (e.column++, e.character === 10)
          e.column = 1, e.line++;
        return e.character;
      }
      function I() {
        return M(e.characters, e.position);
      }
      function L() {
        return e.position;
      }
      function D(r2, a2) {
        return C(e.characters, r2, a2);
      }
      function Y(e2) {
        switch (e2) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function K(r2) {
        return e.line = e.column = 1, e.length = R(e.characters = r2), e.position = 0, [];
      }
      function V(r2) {
        return e.characters = "", r2;
      }
      function W(r2) {
        return y(D(e.position - 1, q(r2 === 91 ? r2 + 2 : r2 === 40 ? r2 + 1 : r2)));
      }
      function B(e2) {
        return V(H(K(e2)));
      }
      function G(r2) {
        while (e.character = I())
          if (e.character < 33)
            F();
          else
            break;
        return Y(r2) > 2 || Y(e.character) > 3 ? "" : " ";
      }
      function H(r2) {
        while (F())
          switch (Y(e.character)) {
            case 0:
              z(Q(e.position - 1), r2);
              break;
            case 2:
              z(W(e.character), r2);
              break;
            default:
              z($(e.character), r2);
          }
        return r2;
      }
      function Z(r2, a2) {
        while (--a2 && F())
          if (e.character < 48 || e.character > 102 || e.character > 57 && e.character < 65 || e.character > 70 && e.character < 97)
            break;
        return D(r2, L() + (a2 < 6 && I() == 32 && F() == 32));
      }
      function q(r2) {
        while (F())
          switch (e.character) {
            case r2:
              return e.position;
            case 34:
            case 39:
              if (r2 !== 34 && r2 !== 39)
                q(e.character);
              break;
            case 40:
              if (r2 === 41)
                q(r2);
              break;
            case 92:
              F();
              break;
          }
        return e.position;
      }
      function J(r2, a2) {
        while (F())
          if (r2 + e.character === 47 + 10)
            break;
          else if (r2 + e.character === 42 + 42 && I() === 47)
            break;
        return "/*" + D(a2, e.position - 1) + "*" + $(r2 === 47 ? r2 : F());
      }
      function Q(r2) {
        while (!Y(I()))
          F();
        return D(r2, e.position);
      }
      function X(e2) {
        return V(ee("", null, null, null, [""], e2 = K(e2), 0, [0], e2));
      }
      function ee(e2, r2, a2, c2, n2, t2, s2, i2, u2) {
        var o2 = 0;
        var f2 = 0;
        var l2 = s2;
        var p2 = 0;
        var h2 = 0;
        var v2 = 0;
        var d2 = 1;
        var b2 = 1;
        var w2 = 1;
        var m2 = 0;
        var g2 = "";
        var k2 = n2;
        var x2 = t2;
        var E2 = c2;
        var y2 = g2;
        while (b2)
          switch (v2 = m2, m2 = F()) {
            case 40:
              if (v2 != 108 && M(y2, l2 - 1) == 58) {
                if (O(y2 += A(W(m2), "&", "&\f"), "&\f") != -1)
                  w2 = -1;
                break;
              }
            case 34:
            case 39:
            case 91:
              y2 += W(m2);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              y2 += G(v2);
              break;
            case 92:
              y2 += Z(L() - 1, 7);
              continue;
            case 47:
              switch (I()) {
                case 42:
                case 47:
                  z(ae(J(F(), L()), r2, a2), u2);
                  break;
                default:
                  y2 += "/";
              }
              break;
            case 123 * d2:
              i2[o2++] = R(y2) * w2;
            case 125 * d2:
            case 59:
            case 0:
              switch (m2) {
                case 0:
                case 125:
                  b2 = 0;
                case 59 + f2:
                  if (w2 == -1)
                    y2 = A(y2, /\f/g, "");
                  if (h2 > 0 && R(y2) - l2)
                    z(h2 > 32 ? ce(y2 + ";", c2, a2, l2 - 1) : ce(A(y2, " ", "") + ";", c2, a2, l2 - 2), u2);
                  break;
                case 59:
                  y2 += ";";
                default:
                  z(E2 = re(y2, r2, a2, o2, f2, n2, i2, g2, k2 = [], x2 = [], l2), t2);
                  if (m2 === 123)
                    if (f2 === 0)
                      ee(y2, r2, E2, E2, k2, t2, l2, i2, x2);
                    else
                      switch (p2 === 99 && M(y2, 3) === 110 ? 100 : p2) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          ee(e2, E2, E2, c2 && z(re(e2, E2, E2, 0, 0, n2, i2, g2, n2, k2 = [], l2), x2), n2, x2, l2, i2, c2 ? k2 : x2);
                          break;
                        default:
                          ee(y2, E2, E2, E2, [""], x2, 0, i2, x2);
                      }
              }
              o2 = f2 = h2 = 0, d2 = w2 = 1, g2 = y2 = "", l2 = s2;
              break;
            case 58:
              l2 = 1 + R(y2), h2 = v2;
            default:
              if (d2 < 1) {
                if (m2 == 123)
                  --d2;
                else if (m2 == 125 && d2++ == 0 && _() == 125)
                  continue;
              }
              switch (y2 += $(m2), m2 * d2) {
                case 38:
                  w2 = f2 > 0 ? 1 : (y2 += "\f", -1);
                  break;
                case 44:
                  i2[o2++] = (R(y2) - 1) * w2, w2 = 1;
                  break;
                case 64:
                  if (I() === 45)
                    y2 += W(F());
                  p2 = I(), f2 = l2 = R(g2 = y2 += Q(L())), m2++;
                  break;
                case 45:
                  if (v2 === 45 && R(y2) == 2)
                    d2 = 0;
              }
          }
        return t2;
      }
      function re(e2, r2, a2, c2, n2, s2, i2, u2, o2, f2, l2) {
        var p2 = n2 - 1;
        var h2 = n2 === 0 ? s2 : [""];
        var v2 = S(h2);
        for (var d2 = 0, b2 = 0, w2 = 0; d2 < c2; ++d2)
          for (var m2 = 0, g2 = C(e2, p2 + 1, p2 = k(b2 = i2[d2])), $2 = e2; m2 < v2; ++m2)
            if ($2 = y(b2 > 0 ? h2[m2] + " " + g2 : A(g2, /&\f/g, h2[m2])))
              o2[w2++] = $2;
        return P(e2, r2, a2, n2 === 0 ? t : u2, o2, f2, l2);
      }
      function ae(e2, r2, a2) {
        return P(e2, r2, a2, n, $(U()), C(e2, 2, -2), 0);
      }
      function ce(e2, r2, a2, c2) {
        return P(e2, r2, a2, s, C(e2, 0, c2), C(e2, c2 + 1, -1), c2);
      }
      function ne(e2, n2, t2) {
        switch (E(e2, n2)) {
          case 5103:
            return c + "print-" + e2 + e2;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return c + e2 + e2;
          case 4789:
            return a + e2 + e2;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return c + e2 + a + e2 + r + e2 + e2;
          case 5936:
            switch (M(e2, n2 + 11)) {
              case 114:
                return c + e2 + r + A(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
              case 108:
                return c + e2 + r + A(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
              case 45:
                return c + e2 + r + A(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
            }
          case 6828:
          case 4268:
          case 2903:
            return c + e2 + r + e2 + e2;
          case 6165:
            return c + e2 + r + "flex-" + e2 + e2;
          case 5187:
            return c + e2 + A(e2, /(\w+).+(:[^]+)/, c + "box-$1$2" + r + "flex-$1$2") + e2;
          case 5443:
            return c + e2 + r + "flex-item-" + A(e2, /flex-|-self/g, "") + (!T(e2, /flex-|baseline/) ? r + "grid-row-" + A(e2, /flex-|-self/g, "") : "") + e2;
          case 4675:
            return c + e2 + r + "flex-line-pack" + A(e2, /align-content|flex-|-self/g, "") + e2;
          case 5548:
            return c + e2 + r + A(e2, "shrink", "negative") + e2;
          case 5292:
            return c + e2 + r + A(e2, "basis", "preferred-size") + e2;
          case 6060:
            return c + "box-" + A(e2, "-grow", "") + c + e2 + r + A(e2, "grow", "positive") + e2;
          case 4554:
            return c + A(e2, /([^-])(transform)/g, "$1" + c + "$2") + e2;
          case 6187:
            return A(A(A(e2, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), e2, "") + e2;
          case 5495:
          case 3959:
            return A(e2, /(image-set\([^]*)/, c + "$1$`$1");
          case 4968:
            return A(A(e2, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + r + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c + e2 + e2;
          case 4200:
            if (!T(e2, /flex-|baseline/))
              return r + "grid-column-align" + C(e2, n2) + e2;
            break;
          case 2592:
          case 3360:
            return r + A(e2, "template-", "") + e2;
          case 4384:
          case 3616:
            if (t2 && t2.some(function(e3, r2) {
              return n2 = r2, T(e3.props, /grid-\w+-end/);
            })) {
              return ~O(e2 + (t2 = t2[n2].value), "span") ? e2 : r + A(e2, "-start", "") + e2 + r + "grid-row-span:" + (~O(t2, "span") ? T(t2, /\d+/) : +T(t2, /\d+/) - +T(e2, /\d+/)) + ";";
            }
            return r + A(e2, "-start", "") + e2;
          case 4896:
          case 4128:
            return t2 && t2.some(function(e3) {
              return T(e3.props, /grid-\w+-start/);
            }) ? e2 : r + A(A(e2, "-end", "-span"), "span ", "") + e2;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return A(e2, /(.+)-inline(.+)/, c + "$1$2") + e2;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (R(e2) - 1 - n2 > 6)
              switch (M(e2, n2 + 1)) {
                case 109:
                  if (M(e2, n2 + 4) !== 45)
                    break;
                case 102:
                  return A(e2, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3$1" + a + (M(e2, n2 + 3) == 108 ? "$3" : "$2-$3")) + e2;
                case 115:
                  return ~O(e2, "stretch") ? ne(A(e2, "stretch", "fill-available"), n2, t2) + e2 : e2;
              }
            break;
          case 5152:
          case 5920:
            return A(e2, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(a2, c2, n3, t3, s2, i2, u2) {
              return r + c2 + ":" + n3 + u2 + (t3 ? r + c2 + "-span:" + (s2 ? i2 : +i2 - +n3) + u2 : "") + e2;
            });
          case 4949:
            if (M(e2, n2 + 6) === 121)
              return A(e2, ":", ":" + c) + e2;
            break;
          case 6444:
            switch (M(e2, M(e2, 14) === 45 ? 18 : 11)) {
              case 120:
                return A(e2, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + c + (M(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + c + "$2$3$1" + r + "$2box$3") + e2;
              case 100:
                return A(e2, ":", ":" + r) + e2;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return A(e2, "scroll-", "scroll-snap-") + e2;
        }
        return e2;
      }
      function te(e2, r2) {
        var a2 = "";
        var c2 = S(e2);
        for (var n2 = 0; n2 < c2; n2++)
          a2 += r2(e2[n2], n2, e2, r2) || "";
        return a2;
      }
      function se(e2, r2, a2, c2) {
        switch (e2.type) {
          case g:
            if (e2.children.length)
              break;
          case o:
          case s:
            return e2.return = e2.return || e2.value;
          case n:
            return "";
          case d:
            return e2.return = e2.value + "{" + te(e2.children, c2) + "}";
          case t:
            e2.value = e2.props.join(",");
        }
        return R(a2 = te(e2.children, c2)) ? e2.return = e2.value + "{" + a2 + "}" : "";
      }
      function ie(e2) {
        var r2 = S(e2);
        return function(a2, c2, n2, t2) {
          var s2 = "";
          for (var i2 = 0; i2 < r2; i2++)
            s2 += e2[i2](a2, c2, n2, t2) || "";
          return s2;
        };
      }
      function ue(e2) {
        return function(r2) {
          if (!r2.root) {
            if (r2 = r2.return)
              e2(r2);
          }
        };
      }
      function oe(e2, n2, i2, u2) {
        if (e2.length > -1) {
          if (!e2.return)
            switch (e2.type) {
              case s:
                e2.return = ne(e2.value, e2.length, i2);
                return;
              case d:
                return te([j(e2, { value: A(e2.value, "@", "@" + c) })], u2);
              case t:
                if (e2.length)
                  return N(e2.props, function(n3) {
                    switch (T(n3, /(::plac\w+|:read-\w+)/)) {
                      case ":read-only":
                      case ":read-write":
                        return te([j(e2, { props: [A(n3, /:(read-\w+)/, ":" + a + "$1")] })], u2);
                      case "::placeholder":
                        return te([j(e2, { props: [A(n3, /:(plac\w+)/, ":" + c + "input-$1")] }), j(e2, { props: [A(n3, /:(plac\w+)/, ":" + a + "$1")] }), j(e2, { props: [A(n3, /:(plac\w+)/, r + "input-$1")] })], u2);
                    }
                    return "";
                  });
            }
        }
      }
      function fe(e2) {
        switch (e2.type) {
          case t:
            e2.props = e2.props.map(function(r2) {
              return N(B(r2), function(r3, a2, c2) {
                switch (M(r3, 0)) {
                  case 12:
                    return C(r3, 1, R(r3));
                  case 0:
                  case 40:
                  case 43:
                  case 62:
                  case 126:
                    return r3;
                  case 58:
                    if (c2[++a2] === "global")
                      c2[a2] = "", c2[++a2] = "\f" + C(c2[a2], a2 = 1, -1);
                  case 32:
                    return a2 === 1 ? "" : r3;
                  default:
                    switch (a2) {
                      case 0:
                        e2 = r3;
                        return S(c2) > 1 ? "" : r3;
                      case (a2 = S(c2) - 1):
                      case 2:
                        return a2 === 2 ? r3 + e2 + e2 : r3 + e2;
                      default:
                        return r3;
                    }
                }
              });
            });
        }
      }
      e.CHARSET = f;
      e.COMMENT = n;
      e.COUNTER_STYLE = w;
      e.DECLARATION = s;
      e.DOCUMENT = h;
      e.FONT_FACE = b;
      e.FONT_FEATURE_VALUES = m;
      e.IMPORT = o;
      e.KEYFRAMES = d;
      e.LAYER = g;
      e.MEDIA = u;
      e.MOZ = a;
      e.MS = r;
      e.NAMESPACE = v;
      e.PAGE = i;
      e.RULESET = t;
      e.SUPPORTS = p;
      e.VIEWPORT = l;
      e.WEBKIT = c;
      e.abs = k;
      e.alloc = K;
      e.append = z;
      e.assign = x;
      e.caret = L;
      e.char = U;
      e.charat = M;
      e.combine = N;
      e.comment = ae;
      e.commenter = J;
      e.compile = X;
      e.copy = j;
      e.dealloc = V;
      e.declaration = ce;
      e.delimit = W;
      e.delimiter = q;
      e.escaping = Z;
      e.from = $;
      e.hash = E;
      e.identifier = Q;
      e.indexof = O;
      e.match = T;
      e.middleware = ie;
      e.namespace = fe;
      e.next = F;
      e.node = P;
      e.parse = ee;
      e.peek = I;
      e.prefix = ne;
      e.prefixer = oe;
      e.prev = _;
      e.replace = A;
      e.ruleset = re;
      e.rulesheet = ue;
      e.serialize = te;
      e.sizeof = S;
      e.slice = D;
      e.stringify = se;
      e.strlen = R;
      e.substr = C;
      e.token = Y;
      e.tokenize = B;
      e.tokenizer = H;
      e.trim = y;
      e.whitespace = G;
      Object.defineProperty(e, "__esModule", { value: true });
    });
  }
});

// node_modules/stylis-plugin-rtl/dist/stylis-rtl.js
var require_stylis_rtl = __commonJS({
  "node_modules/stylis-plugin-rtl/dist/stylis-rtl.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _cssjanus = _interopRequireDefault(require_cssjanus());
    var _stylis = require_stylis();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function stringifyPreserveComments(element, index, children, callback) {
      switch (element.type) {
        case _stylis.IMPORT:
        case _stylis.DECLARATION:
        case _stylis.COMMENT:
          return element["return"] = element["return"] || element.value;
        case _stylis.RULESET: {
          element.value = element.props.join(",");
          element.children.forEach(function(x) {
            if (x.type === _stylis.COMMENT)
              x.children = x.value;
          });
        }
      }
      return (0, _stylis.strlen)(children = (0, _stylis.serialize)(element.children, stringifyPreserveComments)) ? element["return"] = element.value + "{" + children + "}" : "";
    }
    function stylisRTLPlugin(element, index, children, callback) {
      if (!element.root) {
        var stringified = _cssjanus["default"].transform(stringifyPreserveComments(element, index, children, callback));
        element.children = stringified ? (0, _stylis.compile)(stringified)[0].children : [];
        element["return"] = "";
      }
    }
    Object.defineProperty(stylisRTLPlugin, "name", {
      value: "stylisRTLPlugin"
    });
    var _default = stylisRTLPlugin;
    exports["default"] = _default;
  }
});
export default require_stylis_rtl();
/*! Bundled license information:

cssjanus/src/cssjanus.js:
  (*!
   * CSSJanus. https://www.mediawiki.org/wiki/CSSJanus
   *
   * Copyright 2014 Trevor Parscal
   * Copyright 2010 Roan Kattouw
   * Copyright 2008 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=stylis-plugin-rtl.js.map
