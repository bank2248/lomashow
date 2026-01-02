(function() {
   const t = document.createElement("link").relList;
   if (t && t.supports && t.supports("modulepreload")) return;
   for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
   new MutationObserver(u => {
       for (const f of u)
           if (f.type === "childList")
               for (const m of f.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && a(m)
   }).observe(document, {
       childList: !0,
       subtree: !0
   });

   function l(u) {
       const f = {};
       return u.integrity && (f.integrity = u.integrity), u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? f.credentials = "include" : u.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
   }

   function a(u) {
       if (u.ep) return;
       u.ep = !0;
       const f = l(u);
       fetch(u.href, f)
   }
})();

function wh(i) {
   return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var lu = {
       exports: {}
   },
   $o = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Bp;

function t0() {
   if (Bp) return $o;
   Bp = 1;
   var i = Symbol.for("react.transitional.element"),
       t = Symbol.for("react.fragment");

   function l(a, u, f) {
       var m = null;
       if (f !== void 0 && (m = "" + f), u.key !== void 0 && (m = "" + u.key), "key" in u) {
           f = {};
           for (var g in u) g !== "key" && (f[g] = u[g])
       } else f = u;
       return u = f.ref, {
           $$typeof: i,
           type: a,
           key: m,
           ref: u !== void 0 ? u : null,
           props: f
       }
   }
   return $o.Fragment = t, $o.jsx = l, $o.jsxs = l, $o
}
var Op;

function n0() {
   return Op || (Op = 1, lu.exports = t0()), lu.exports
}
var N = n0(),
   au = {
       exports: {}
   },
   le = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Fp;

function i0() {
   if (Fp) return le;
   Fp = 1;
   var i = Symbol.for("react.transitional.element"),
       t = Symbol.for("react.portal"),
       l = Symbol.for("react.fragment"),
       a = Symbol.for("react.strict_mode"),
       u = Symbol.for("react.profiler"),
       f = Symbol.for("react.consumer"),
       m = Symbol.for("react.context"),
       g = Symbol.for("react.forward_ref"),
       y = Symbol.for("react.suspense"),
       h = Symbol.for("react.memo"),
       v = Symbol.for("react.lazy"),
       S = Symbol.for("react.activity"),
       E = Symbol.iterator;

   function C(M) {
       return M === null || typeof M != "object" ? null : (M = E && M[E] || M["@@iterator"], typeof M == "function" ? M : null)
   }
   var b = {
           isMounted: function() {
               return !1
           },
           enqueueForceUpdate: function() {},
           enqueueReplaceState: function() {},
           enqueueSetState: function() {}
       },
       H = Object.assign,
       U = {};

   function P(M, k, Y) {
       this.props = M, this.context = k, this.refs = U, this.updater = Y || b
   }
   P.prototype.isReactComponent = {}, P.prototype.setState = function(M, k) {
       if (typeof M != "object" && typeof M != "function" && M != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
       this.updater.enqueueSetState(this, M, k, "setState")
   }, P.prototype.forceUpdate = function(M) {
       this.updater.enqueueForceUpdate(this, M, "forceUpdate")
   };

   function K() {}
   K.prototype = P.prototype;

   function B(M, k, Y) {
       this.props = M, this.context = k, this.refs = U, this.updater = Y || b
   }
   var X = B.prototype = new K;
   X.constructor = B, H(X, P.prototype), X.isPureReactComponent = !0;
   var ee = Array.isArray;

   function te() {}
   var F = {
           H: null,
           A: null,
           T: null,
           S: null
       },
       he = Object.prototype.hasOwnProperty;

   function W(M, k, Y) {
       var Z = Y.ref;
       return {
           $$typeof: i,
           type: M,
           key: k,
           ref: Z !== void 0 ? Z : null,
           props: Y
       }
   }

   function de(M, k) {
       return W(M.type, k, M.props)
   }

   function Ce(M) {
       return typeof M == "object" && M !== null && M.$$typeof === i
   }

   function Ge(M) {
       var k = {
           "=": "=0",
           ":": "=2"
       };
       return "$" + M.replace(/[=:]/g, function(Y) {
           return k[Y]
       })
   }
   var Ee = /\/+/g;

   function Be(M, k) {
       return typeof M == "object" && M !== null && M.key != null ? Ge("" + M.key) : k.toString(36)
   }

   function ut(M) {
       switch (M.status) {
           case "fulfilled":
               return M.value;
           case "rejected":
               throw M.reason;
           default:
               switch (typeof M.status == "string" ? M.then(te, te) : (M.status = "pending", M.then(function(k) {
                       M.status === "pending" && (M.status = "fulfilled", M.value = k)
                   }, function(k) {
                       M.status === "pending" && (M.status = "rejected", M.reason = k)
                   })), M.status) {
                   case "fulfilled":
                       return M.value;
                   case "rejected":
                       throw M.reason
               }
       }
       throw M
   }

   function G(M, k, Y, Z, ae) {
       var ue = typeof M;
       (ue === "undefined" || ue === "boolean") && (M = null);
       var _e = !1;
       if (M === null) _e = !0;
       else switch (ue) {
           case "bigint":
           case "string":
           case "number":
               _e = !0;
               break;
           case "object":
               switch (M.$$typeof) {
                   case i:
                   case t:
                       _e = !0;
                       break;
                   case v:
                       return _e = M._init, G(_e(M._payload), k, Y, Z, ae)
               }
       }
       if (_e) return ae = ae(M), _e = Z === "" ? "." + Be(M, 0) : Z, ee(ae) ? (Y = "", _e != null && (Y = _e.replace(Ee, "$&/") + "/"), G(ae, k, Y, "", function(io) {
           return io
       })) : ae != null && (Ce(ae) && (ae = de(ae, Y + (ae.key == null || M && M.key === ae.key ? "" : ("" + ae.key).replace(Ee, "$&/") + "/") + _e)), k.push(ae)), 1;
       _e = 0;
       var lt = Z === "" ? "." : Z + ":";
       if (ee(M))
           for (var Ve = 0; Ve < M.length; Ve++) Z = M[Ve], ue = lt + Be(Z, Ve), _e += G(Z, k, Y, ue, ae);
       else if (Ve = C(M), typeof Ve == "function")
           for (M = Ve.call(M), Ve = 0; !(Z = M.next()).done;) Z = Z.value, ue = lt + Be(Z, Ve++), _e += G(Z, k, Y, ue, ae);
       else if (ue === "object") {
           if (typeof M.then == "function") return G(ut(M), k, Y, Z, ae);
           throw k = String(M), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.")
       }
       return _e
   }

   function O(M, k, Y) {
       if (M == null) return M;
       var Z = [],
           ae = 0;
       return G(M, Z, "", "", function(ue) {
           return k.call(Y, ue, ae++)
       }), Z
   }

   function ie(M) {
       if (M._status === -1) {
           var k = M._result;
           k = k(), k.then(function(Y) {
               (M._status === 0 || M._status === -1) && (M._status = 1, M._result = Y)
           }, function(Y) {
               (M._status === 0 || M._status === -1) && (M._status = 2, M._result = Y)
           }), M._status === -1 && (M._status = 0, M._result = k)
       }
       if (M._status === 1) return M._result.default;
       throw M._result
   }
   var Me = typeof reportError == "function" ? reportError : function(M) {
           if (typeof window == "object" && typeof window.ErrorEvent == "function") {
               var k = new window.ErrorEvent("error", {
                   bubbles: !0,
                   cancelable: !0,
                   message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
                   error: M
               });
               if (!window.dispatchEvent(k)) return
           } else if (typeof process == "object" && typeof process.emit == "function") {
               process.emit("uncaughtException", M);
               return
           }
           console.error(M)
       },
       De = {
           map: O,
           forEach: function(M, k, Y) {
               O(M, function() {
                   k.apply(this, arguments)
               }, Y)
           },
           count: function(M) {
               var k = 0;
               return O(M, function() {
                   k++
               }), k
           },
           toArray: function(M) {
               return O(M, function(k) {
                   return k
               }) || []
           },
           only: function(M) {
               if (!Ce(M)) throw Error("React.Children.only expected to receive a single React element child.");
               return M
           }
       };
   return le.Activity = S, le.Children = De, le.Component = P, le.Fragment = l, le.Profiler = u, le.PureComponent = B, le.StrictMode = a, le.Suspense = y, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, le.__COMPILER_RUNTIME = {
       __proto__: null,
       c: function(M) {
           return F.H.useMemoCache(M)
       }
   }, le.cache = function(M) {
       return function() {
           return M.apply(null, arguments)
       }
   }, le.cacheSignal = function() {
       return null
   }, le.cloneElement = function(M, k, Y) {
       if (M == null) throw Error("The argument must be a React element, but you passed " + M + ".");
       var Z = H({}, M.props),
           ae = M.key;
       if (k != null)
           for (ue in k.key !== void 0 && (ae = "" + k.key), k) !he.call(k, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && k.ref === void 0 || (Z[ue] = k[ue]);
       var ue = arguments.length - 2;
       if (ue === 1) Z.children = Y;
       else if (1 < ue) {
           for (var _e = Array(ue), lt = 0; lt < ue; lt++) _e[lt] = arguments[lt + 2];
           Z.children = _e
       }
       return W(M.type, ae, Z)
   }, le.createContext = function(M) {
       return M = {
           $$typeof: m,
           _currentValue: M,
           _currentValue2: M,
           _threadCount: 0,
           Provider: null,
           Consumer: null
       }, M.Provider = M, M.Consumer = {
           $$typeof: f,
           _context: M
       }, M
   }, le.createElement = function(M, k, Y) {
       var Z, ae = {},
           ue = null;
       if (k != null)
           for (Z in k.key !== void 0 && (ue = "" + k.key), k) he.call(k, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (ae[Z] = k[Z]);
       var _e = arguments.length - 2;
       if (_e === 1) ae.children = Y;
       else if (1 < _e) {
           for (var lt = Array(_e), Ve = 0; Ve < _e; Ve++) lt[Ve] = arguments[Ve + 2];
           ae.children = lt
       }
       if (M && M.defaultProps)
           for (Z in _e = M.defaultProps, _e) ae[Z] === void 0 && (ae[Z] = _e[Z]);
       return W(M, ue, ae)
   }, le.createRef = function() {
       return {
           current: null
       }
   }, le.forwardRef = function(M) {
       return {
           $$typeof: g,
           render: M
       }
   }, le.isValidElement = Ce, le.lazy = function(M) {
       return {
           $$typeof: v,
           _payload: {
               _status: -1,
               _result: M
           },
           _init: ie
       }
   }, le.memo = function(M, k) {
       return {
           $$typeof: h,
           type: M,
           compare: k === void 0 ? null : k
       }
   }, le.startTransition = function(M) {
       var k = F.T,
           Y = {};
       F.T = Y;
       try {
           var Z = M(),
               ae = F.S;
           ae !== null && ae(Y, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(te, Me)
       } catch (ue) {
           Me(ue)
       } finally {
           k !== null && Y.types !== null && (k.types = Y.types), F.T = k
       }
   }, le.unstable_useCacheRefresh = function() {
       return F.H.useCacheRefresh()
   }, le.use = function(M) {
       return F.H.use(M)
   }, le.useActionState = function(M, k, Y) {
       return F.H.useActionState(M, k, Y)
   }, le.useCallback = function(M, k) {
       return F.H.useCallback(M, k)
   }, le.useContext = function(M) {
       return F.H.useContext(M)
   }, le.useDebugValue = function() {}, le.useDeferredValue = function(M, k) {
       return F.H.useDeferredValue(M, k)
   }, le.useEffect = function(M, k) {
       return F.H.useEffect(M, k)
   }, le.useEffectEvent = function(M) {
       return F.H.useEffectEvent(M)
   }, le.useId = function() {
       return F.H.useId()
   }, le.useImperativeHandle = function(M, k, Y) {
       return F.H.useImperativeHandle(M, k, Y)
   }, le.useInsertionEffect = function(M, k) {
       return F.H.useInsertionEffect(M, k)
   }, le.useLayoutEffect = function(M, k) {
       return F.H.useLayoutEffect(M, k)
   }, le.useMemo = function(M, k) {
       return F.H.useMemo(M, k)
   }, le.useOptimistic = function(M, k) {
       return F.H.useOptimistic(M, k)
   }, le.useReducer = function(M, k, Y) {
       return F.H.useReducer(M, k, Y)
   }, le.useRef = function(M) {
       return F.H.useRef(M)
   }, le.useState = function(M) {
       return F.H.useState(M)
   }, le.useSyncExternalStore = function(M, k, Y) {
       return F.H.useSyncExternalStore(M, k, Y)
   }, le.useTransition = function() {
       return F.H.useTransition()
   }, le.version = "19.2.3", le
}
var Yp;

function Iu() {
   return Yp || (Yp = 1, au.exports = i0()), au.exports
}
var Pe = Iu();
const o0 = wh(Pe);
var su = {
       exports: {}
   },
   Wo = {},
   ru = {
       exports: {}
   },
   uu = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Jp;

function l0() {
   return Jp || (Jp = 1, (function(i) {
       function t(G, O) {
           var ie = G.length;
           G.push(O);
           e: for (; 0 < ie;) {
               var Me = ie - 1 >>> 1,
                   De = G[Me];
               if (0 < u(De, O)) G[Me] = O, G[ie] = De, ie = Me;
               else break e
           }
       }

       function l(G) {
           return G.length === 0 ? null : G[0]
       }

       function a(G) {
           if (G.length === 0) return null;
           var O = G[0],
               ie = G.pop();
           if (ie !== O) {
               G[0] = ie;
               e: for (var Me = 0, De = G.length, M = De >>> 1; Me < M;) {
                   var k = 2 * (Me + 1) - 1,
                       Y = G[k],
                       Z = k + 1,
                       ae = G[Z];
                   if (0 > u(Y, ie)) Z < De && 0 > u(ae, Y) ? (G[Me] = ae, G[Z] = ie, Me = Z) : (G[Me] = Y, G[k] = ie, Me = k);
                   else if (Z < De && 0 > u(ae, ie)) G[Me] = ae, G[Z] = ie, Me = Z;
                   else break e
               }
           }
           return O
       }

       function u(G, O) {
           var ie = G.sortIndex - O.sortIndex;
           return ie !== 0 ? ie : G.id - O.id
       }
       if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
           var f = performance;
           i.unstable_now = function() {
               return f.now()
           }
       } else {
           var m = Date,
               g = m.now();
           i.unstable_now = function() {
               return m.now() - g
           }
       }
       var y = [],
           h = [],
           v = 1,
           S = null,
           E = 3,
           C = !1,
           b = !1,
           H = !1,
           U = !1,
           P = typeof setTimeout == "function" ? setTimeout : null,
           K = typeof clearTimeout == "function" ? clearTimeout : null,
           B = typeof setImmediate < "u" ? setImmediate : null;

       function X(G) {
           for (var O = l(h); O !== null;) {
               if (O.callback === null) a(h);
               else if (O.startTime <= G) a(h), O.sortIndex = O.expirationTime, t(y, O);
               else break;
               O = l(h)
           }
       }

       function ee(G) {
           if (H = !1, X(G), !b)
               if (l(y) !== null) b = !0, te || (te = !0, Ge());
               else {
                   var O = l(h);
                   O !== null && ut(ee, O.startTime - G)
               }
       }
       var te = !1,
           F = -1,
           he = 5,
           W = -1;

       function de() {
           return U ? !0 : !(i.unstable_now() - W < he)
       }

       function Ce() {
           if (U = !1, te) {
               var G = i.unstable_now();
               W = G;
               var O = !0;
               try {
                   e: {
                       b = !1,
                       H && (H = !1, K(F), F = -1),
                       C = !0;
                       var ie = E;
                       try {
                           t: {
                               for (X(G), S = l(y); S !== null && !(S.expirationTime > G && de());) {
                                   var Me = S.callback;
                                   if (typeof Me == "function") {
                                       S.callback = null, E = S.priorityLevel;
                                       var De = Me(S.expirationTime <= G);
                                       if (G = i.unstable_now(), typeof De == "function") {
                                           S.callback = De, X(G), O = !0;
                                           break t
                                       }
                                       S === l(y) && a(y), X(G)
                                   } else a(y);
                                   S = l(y)
                               }
                               if (S !== null) O = !0;
                               else {
                                   var M = l(h);
                                   M !== null && ut(ee, M.startTime - G), O = !1
                               }
                           }
                           break e
                       }
                       finally {
                           S = null, E = ie, C = !1
                       }
                       O = void 0
                   }
               }
               finally {
                   O ? Ge() : te = !1
               }
           }
       }
       var Ge;
       if (typeof B == "function") Ge = function() {
           B(Ce)
       };
       else if (typeof MessageChannel < "u") {
           var Ee = new MessageChannel,
               Be = Ee.port2;
           Ee.port1.onmessage = Ce, Ge = function() {
               Be.postMessage(null)
           }
       } else Ge = function() {
           P(Ce, 0)
       };

       function ut(G, O) {
           F = P(function() {
               G(i.unstable_now())
           }, O)
       }
       i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(G) {
           G.callback = null
       }, i.unstable_forceFrameRate = function(G) {
           0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : he = 0 < G ? Math.floor(1e3 / G) : 5
       }, i.unstable_getCurrentPriorityLevel = function() {
           return E
       }, i.unstable_next = function(G) {
           switch (E) {
               case 1:
               case 2:
               case 3:
                   var O = 3;
                   break;
               default:
                   O = E
           }
           var ie = E;
           E = O;
           try {
               return G()
           } finally {
               E = ie
           }
       }, i.unstable_requestPaint = function() {
           U = !0
       }, i.unstable_runWithPriority = function(G, O) {
           switch (G) {
               case 1:
               case 2:
               case 3:
               case 4:
               case 5:
                   break;
               default:
                   G = 3
           }
           var ie = E;
           E = G;
           try {
               return O()
           } finally {
               E = ie
           }
       }, i.unstable_scheduleCallback = function(G, O, ie) {
           var Me = i.unstable_now();
           switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? Me + ie : Me) : ie = Me, G) {
               case 1:
                   var De = -1;
                   break;
               case 2:
                   De = 250;
                   break;
               case 5:
                   De = 1073741823;
                   break;
               case 4:
                   De = 1e4;
                   break;
               default:
                   De = 5e3
           }
           return De = ie + De, G = {
               id: v++,
               callback: O,
               priorityLevel: G,
               startTime: ie,
               expirationTime: De,
               sortIndex: -1
           }, ie > Me ? (G.sortIndex = ie, t(h, G), l(y) === null && G === l(h) && (H ? (K(F), F = -1) : H = !0, ut(ee, ie - Me))) : (G.sortIndex = De, t(y, G), b || C || (b = !0, te || (te = !0, Ge()))), G
       }, i.unstable_shouldYield = de, i.unstable_wrapCallback = function(G) {
           var O = E;
           return function() {
               var ie = E;
               E = O;
               try {
                   return G.apply(this, arguments)
               } finally {
                   E = ie
               }
           }
       }
   })(uu)), uu
}
var Kp;

function a0() {
   return Kp || (Kp = 1, ru.exports = l0()), ru.exports
}
var cu = {
       exports: {}
   },
   it = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Xp;

function s0() {
   if (Xp) return it;
   Xp = 1;
   var i = Iu();

   function t(y) {
       var h = "https://react.dev/errors/" + y;
       if (1 < arguments.length) {
           h += "?args[]=" + encodeURIComponent(arguments[1]);
           for (var v = 2; v < arguments.length; v++) h += "&args[]=" + encodeURIComponent(arguments[v])
       }
       return "Minified React error #" + y + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
   }

   function l() {}
   var a = {
           d: {
               f: l,
               r: function() {
                   throw Error(t(522))
               },
               D: l,
               C: l,
               L: l,
               m: l,
               X: l,
               S: l,
               M: l
           },
           p: 0,
           findDOMNode: null
       },
       u = Symbol.for("react.portal");

   function f(y, h, v) {
       var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
       return {
           $$typeof: u,
           key: S == null ? null : "" + S,
           children: y,
           containerInfo: h,
           implementation: v
       }
   }
   var m = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

   function g(y, h) {
       if (y === "font") return "";
       if (typeof h == "string") return h === "use-credentials" ? h : ""
   }
   return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, it.createPortal = function(y, h) {
       var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
       if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(t(299));
       return f(y, h, null, v)
   }, it.flushSync = function(y) {
       var h = m.T,
           v = a.p;
       try {
           if (m.T = null, a.p = 2, y) return y()
       } finally {
           m.T = h, a.p = v, a.d.f()
       }
   }, it.preconnect = function(y, h) {
       typeof y == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, a.d.C(y, h))
   }, it.prefetchDNS = function(y) {
       typeof y == "string" && a.d.D(y)
   }, it.preinit = function(y, h) {
       if (typeof y == "string" && h && typeof h.as == "string") {
           var v = h.as,
               S = g(v, h.crossOrigin),
               E = typeof h.integrity == "string" ? h.integrity : void 0,
               C = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
           v === "style" ? a.d.S(y, typeof h.precedence == "string" ? h.precedence : void 0, {
               crossOrigin: S,
               integrity: E,
               fetchPriority: C
           }) : v === "script" && a.d.X(y, {
               crossOrigin: S,
               integrity: E,
               fetchPriority: C,
               nonce: typeof h.nonce == "string" ? h.nonce : void 0
           })
       }
   }, it.preinitModule = function(y, h) {
       if (typeof y == "string")
           if (typeof h == "object" && h !== null) {
               if (h.as == null || h.as === "script") {
                   var v = g(h.as, h.crossOrigin);
                   a.d.M(y, {
                       crossOrigin: v,
                       integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                       nonce: typeof h.nonce == "string" ? h.nonce : void 0
                   })
               }
           } else h == null && a.d.M(y)
   }, it.preload = function(y, h) {
       if (typeof y == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
           var v = h.as,
               S = g(v, h.crossOrigin);
           a.d.L(y, v, {
               crossOrigin: S,
               integrity: typeof h.integrity == "string" ? h.integrity : void 0,
               nonce: typeof h.nonce == "string" ? h.nonce : void 0,
               type: typeof h.type == "string" ? h.type : void 0,
               fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
               referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
               imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
               imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
               media: typeof h.media == "string" ? h.media : void 0
           })
       }
   }, it.preloadModule = function(y, h) {
       if (typeof y == "string")
           if (h) {
               var v = g(h.as, h.crossOrigin);
               a.d.m(y, {
                   as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
                   crossOrigin: v,
                   integrity: typeof h.integrity == "string" ? h.integrity : void 0
               })
           } else a.d.m(y)
   }, it.requestFormReset = function(y) {
       a.d.r(y)
   }, it.unstable_batchedUpdates = function(y, h) {
       return y(h)
   }, it.useFormState = function(y, h, v) {
       return m.H.useFormState(y, h, v)
   }, it.useFormStatus = function() {
       return m.H.useHostTransitionStatus()
   }, it.version = "19.2.3", it
}
var Qp;

function r0() {
   if (Qp) return cu.exports;
   Qp = 1;

   function i() {
       if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
           __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
       } catch (t) {
           console.error(t)
       }
   }
   return i(), cu.exports = s0(), cu.exports
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Zp;

function u0() {
   if (Zp) return Wo;
   Zp = 1;
   var i = a0(),
       t = Iu(),
       l = r0();

   function a(e) {
       var n = "https://react.dev/errors/" + e;
       if (1 < arguments.length) {
           n += "?args[]=" + encodeURIComponent(arguments[1]);
           for (var o = 2; o < arguments.length; o++) n += "&args[]=" + encodeURIComponent(arguments[o])
       }
       return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
   }

   function u(e) {
       return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
   }

   function f(e) {
       var n = e,
           o = e;
       if (e.alternate)
           for (; n.return;) n = n.return;
       else {
           e = n;
           do n = e, (n.flags & 4098) !== 0 && (o = n.return), e = n.return; while (e)
       }
       return n.tag === 3 ? o : null
   }

   function m(e) {
       if (e.tag === 13) {
           var n = e.memoizedState;
           if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
       }
       return null
   }

   function g(e) {
       if (e.tag === 31) {
           var n = e.memoizedState;
           if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
       }
       return null
   }

   function y(e) {
       if (f(e) !== e) throw Error(a(188))
   }

   function h(e) {
       var n = e.alternate;
       if (!n) {
           if (n = f(e), n === null) throw Error(a(188));
           return n !== e ? null : e
       }
       for (var o = e, s = n;;) {
           var d = o.return;
           if (d === null) break;
           var p = d.alternate;
           if (p === null) {
               if (s = d.return, s !== null) {
                   o = s;
                   continue
               }
               break
           }
           if (d.child === p.child) {
               for (p = d.child; p;) {
                   if (p === o) return y(d), e;
                   if (p === s) return y(d), n;
                   p = p.sibling
               }
               throw Error(a(188))
           }
           if (o.return !== s.return) o = d, s = p;
           else {
               for (var T = !1, _ = d.child; _;) {
                   if (_ === o) {
                       T = !0, o = d, s = p;
                       break
                   }
                   if (_ === s) {
                       T = !0, s = d, o = p;
                       break
                   }
                   _ = _.sibling
               }
               if (!T) {
                   for (_ = p.child; _;) {
                       if (_ === o) {
                           T = !0, o = p, s = d;
                           break
                       }
                       if (_ === s) {
                           T = !0, s = p, o = d;
                           break
                       }
                       _ = _.sibling
                   }
                   if (!T) throw Error(a(189))
               }
           }
           if (o.alternate !== s) throw Error(a(190))
       }
       if (o.tag !== 3) throw Error(a(188));
       return o.stateNode.current === o ? e : n
   }

   function v(e) {
       var n = e.tag;
       if (n === 5 || n === 26 || n === 27 || n === 6) return e;
       for (e = e.child; e !== null;) {
           if (n = v(e), n !== null) return n;
           e = e.sibling
       }
       return null
   }
   var S = Object.assign,
       E = Symbol.for("react.element"),
       C = Symbol.for("react.transitional.element"),
       b = Symbol.for("react.portal"),
       H = Symbol.for("react.fragment"),
       U = Symbol.for("react.strict_mode"),
       P = Symbol.for("react.profiler"),
       K = Symbol.for("react.consumer"),
       B = Symbol.for("react.context"),
       X = Symbol.for("react.forward_ref"),
       ee = Symbol.for("react.suspense"),
       te = Symbol.for("react.suspense_list"),
       F = Symbol.for("react.memo"),
       he = Symbol.for("react.lazy"),
       W = Symbol.for("react.activity"),
       de = Symbol.for("react.memo_cache_sentinel"),
       Ce = Symbol.iterator;

   function Ge(e) {
       return e === null || typeof e != "object" ? null : (e = Ce && e[Ce] || e["@@iterator"], typeof e == "function" ? e : null)
   }
   var Ee = Symbol.for("react.client.reference");

   function Be(e) {
       if (e == null) return null;
       if (typeof e == "function") return e.$$typeof === Ee ? null : e.displayName || e.name || null;
       if (typeof e == "string") return e;
       switch (e) {
           case H:
               return "Fragment";
           case P:
               return "Profiler";
           case U:
               return "StrictMode";
           case ee:
               return "Suspense";
           case te:
               return "SuspenseList";
           case W:
               return "Activity"
       }
       if (typeof e == "object") switch (e.$$typeof) {
           case b:
               return "Portal";
           case B:
               return e.displayName || "Context";
           case K:
               return (e._context.displayName || "Context") + ".Consumer";
           case X:
               var n = e.render;
               return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
           case F:
               return n = e.displayName || null, n !== null ? n : Be(e.type) || "Memo";
           case he:
               n = e._payload, e = e._init;
               try {
                   return Be(e(n))
               } catch {}
       }
       return null
   }
   var ut = Array.isArray,
       G = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
       O = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
       ie = {
           pending: !1,
           data: null,
           method: null,
           action: null
       },
       Me = [],
       De = -1;

   function M(e) {
       return {
           current: e
       }
   }

   function k(e) {
       0 > De || (e.current = Me[De], Me[De] = null, De--)
   }

   function Y(e, n) {
       De++, Me[De] = e.current, e.current = n
   }
   var Z = M(null),
       ae = M(null),
       ue = M(null),
       _e = M(null);

   function lt(e, n) {
       switch (Y(ue, n), Y(ae, e), Y(Z, null), n.nodeType) {
           case 9:
           case 11:
               e = (e = n.documentElement) && (e = e.namespaceURI) ? fp(e) : 0;
               break;
           default:
               if (e = n.tagName, n = n.namespaceURI) n = fp(n), e = dp(n, e);
               else switch (e) {
                   case "svg":
                       e = 1;
                       break;
                   case "math":
                       e = 2;
                       break;
                   default:
                       e = 0
               }
       }
       k(Z), Y(Z, e)
   }

   function Ve() {
       k(Z), k(ae), k(ue)
   }

   function io(e) {
       e.memoizedState !== null && Y(_e, e);
       var n = Z.current,
           o = dp(n, e.type);
       n !== o && (Y(ae, e), Y(Z, o))
   }

   function nl(e) {
       ae.current === e && (k(Z), k(ae)), _e.current === e && (k(_e), Ko._currentValue = ie)
   }
   var Pa, ku;

   function Fn(e) {
       if (Pa === void 0) try {
           throw Error()
       } catch (o) {
           var n = o.stack.trim().match(/\n( *(at )?)/);
           Pa = n && n[1] || "", ku = -1 < o.stack.indexOf(`
   at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : ""
       }
       return `
` + Pa + e + ku
   }
   var Ba = !1;

   function Oa(e, n) {
       if (!e || Ba) return "";
       Ba = !0;
       var o = Error.prepareStackTrace;
       Error.prepareStackTrace = void 0;
       try {
           var s = {
               DetermineComponentFrameRoot: function() {
                   try {
                       if (n) {
                           var z = function() {
                               throw Error()
                           };
                           if (Object.defineProperty(z.prototype, "props", {
                                   set: function() {
                                       throw Error()
                                   }
                               }), typeof Reflect == "object" && Reflect.construct) {
                               try {
                                   Reflect.construct(z, [])
                               } catch (L) {
                                   var w = L
                               }
                               Reflect.construct(e, [], z)
                           } else {
                               try {
                                   z.call()
                               } catch (L) {
                                   w = L
                               }
                               e.call(z.prototype)
                           }
                       } else {
                           try {
                               throw Error()
                           } catch (L) {
                               w = L
                           }(z = e()) && typeof z.catch == "function" && z.catch(function() {})
                       }
                   } catch (L) {
                       if (L && w && typeof L.stack == "string") return [L.stack, w.stack]
                   }
                   return [null, null]
               }
           };
           s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
           var d = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
           d && d.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
               value: "DetermineComponentFrameRoot"
           });
           var p = s.DetermineComponentFrameRoot(),
               T = p[0],
               _ = p[1];
           if (T && _) {
               var A = T.split(`
`),
                   D = _.split(`
`);
               for (d = s = 0; s < A.length && !A[s].includes("DetermineComponentFrameRoot");) s++;
               for (; d < D.length && !D[d].includes("DetermineComponentFrameRoot");) d++;
               if (s === A.length || d === D.length)
                   for (s = A.length - 1, d = D.length - 1; 1 <= s && 0 <= d && A[s] !== D[d];) d--;
               for (; 1 <= s && 0 <= d; s--, d--)
                   if (A[s] !== D[d]) {
                       if (s !== 1 || d !== 1)
                           do
                               if (s--, d--, 0 > d || A[s] !== D[d]) {
                                   var q = `
` + A[s].replace(" at new ", " at ");
                                   return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q
                               } while (1 <= s && 0 <= d);
                       break
                   }
           }
       } finally {
           Ba = !1, Error.prepareStackTrace = o
       }
       return (o = e ? e.displayName || e.name : "") ? Fn(o) : ""
   }

   function wg(e, n) {
       switch (e.tag) {
           case 26:
           case 27:
           case 5:
               return Fn(e.type);
           case 16:
               return Fn("Lazy");
           case 13:
               return e.child !== n && n !== null ? Fn("Suspense Fallback") : Fn("Suspense");
           case 19:
               return Fn("SuspenseList");
           case 0:
           case 15:
               return Oa(e.type, !1);
           case 11:
               return Oa(e.type.render, !1);
           case 1:
               return Oa(e.type, !0);
           case 31:
               return Fn("Activity");
           default:
               return ""
       }
   }

   function Pu(e) {
       try {
           var n = "",
               o = null;
           do n += wg(e, o), o = e, e = e.return; while (e);
           return n
       } catch (s) {
           return `
Error generating stack: ` + s.message + `
` + s.stack
       }
   }
   var Fa = Object.prototype.hasOwnProperty,
       Ya = i.unstable_scheduleCallback,
       Ja = i.unstable_cancelCallback,
       Ug = i.unstable_shouldYield,
       Lg = i.unstable_requestPaint,
       yt = i.unstable_now,
       Gg = i.unstable_getCurrentPriorityLevel,
       Bu = i.unstable_ImmediatePriority,
       Ou = i.unstable_UserBlockingPriority,
       il = i.unstable_NormalPriority,
       Hg = i.unstable_LowPriority,
       Fu = i.unstable_IdlePriority,
       qg = i.log,
       Vg = i.unstable_setDisableYieldValue,
       oo = null,
       vt = null;

   function yn(e) {
       if (typeof qg == "function" && Vg(e), vt && typeof vt.setStrictMode == "function") try {
           vt.setStrictMode(oo, e)
       } catch {}
   }
   var Tt = Math.clz32 ? Math.clz32 : Pg,
       zg = Math.log,
       kg = Math.LN2;

   function Pg(e) {
       return e >>>= 0, e === 0 ? 32 : 31 - (zg(e) / kg | 0) | 0
   }
   var ol = 256,
       ll = 262144,
       al = 4194304;

   function Yn(e) {
       var n = e & 42;
       if (n !== 0) return n;
       switch (e & -e) {
           case 1:
               return 1;
           case 2:
               return 2;
           case 4:
               return 4;
           case 8:
               return 8;
           case 16:
               return 16;
           case 32:
               return 32;
           case 64:
               return 64;
           case 128:
               return 128;
           case 256:
           case 512:
           case 1024:
           case 2048:
           case 4096:
           case 8192:
           case 16384:
           case 32768:
           case 65536:
           case 131072:
               return e & 261888;
           case 262144:
           case 524288:
           case 1048576:
           case 2097152:
               return e & 3932160;
           case 4194304:
           case 8388608:
           case 16777216:
           case 33554432:
               return e & 62914560;
           case 67108864:
               return 67108864;
           case 134217728:
               return 134217728;
           case 268435456:
               return 268435456;
           case 536870912:
               return 536870912;
           case 1073741824:
               return 0;
           default:
               return e
       }
   }

   function sl(e, n, o) {
       var s = e.pendingLanes;
       if (s === 0) return 0;
       var d = 0,
           p = e.suspendedLanes,
           T = e.pingedLanes;
       e = e.warmLanes;
       var _ = s & 134217727;
       return _ !== 0 ? (s = _ & ~p, s !== 0 ? d = Yn(s) : (T &= _, T !== 0 ? d = Yn(T) : o || (o = _ & ~e, o !== 0 && (d = Yn(o))))) : (_ = s & ~p, _ !== 0 ? d = Yn(_) : T !== 0 ? d = Yn(T) : o || (o = s & ~e, o !== 0 && (d = Yn(o)))), d === 0 ? 0 : n !== 0 && n !== d && (n & p) === 0 && (p = d & -d, o = n & -n, p >= o || p === 32 && (o & 4194048) !== 0) ? n : d
   }

   function lo(e, n) {
       return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0
   }

   function Bg(e, n) {
       switch (e) {
           case 1:
           case 2:
           case 4:
           case 8:
           case 64:
               return n + 250;
           case 16:
           case 32:
           case 128:
           case 256:
           case 512:
           case 1024:
           case 2048:
           case 4096:
           case 8192:
           case 16384:
           case 32768:
           case 65536:
           case 131072:
           case 262144:
           case 524288:
           case 1048576:
           case 2097152:
               return n + 5e3;
           case 4194304:
           case 8388608:
           case 16777216:
           case 33554432:
               return -1;
           case 67108864:
           case 134217728:
           case 268435456:
           case 536870912:
           case 1073741824:
               return -1;
           default:
               return -1
       }
   }

   function Yu() {
       var e = al;
       return al <<= 1, (al & 62914560) === 0 && (al = 4194304), e
   }

   function Ka(e) {
       for (var n = [], o = 0; 31 > o; o++) n.push(e);
       return n
   }

   function ao(e, n) {
       e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
   }

   function Og(e, n, o, s, d, p) {
       var T = e.pendingLanes;
       e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= o, e.entangledLanes &= o, e.errorRecoveryDisabledLanes &= o, e.shellSuspendCounter = 0;
       var _ = e.entanglements,
           A = e.expirationTimes,
           D = e.hiddenUpdates;
       for (o = T & ~o; 0 < o;) {
           var q = 31 - Tt(o),
               z = 1 << q;
           _[q] = 0, A[q] = -1;
           var w = D[q];
           if (w !== null)
               for (D[q] = null, q = 0; q < w.length; q++) {
                   var L = w[q];
                   L !== null && (L.lane &= -536870913)
               }
           o &= ~z
       }
       s !== 0 && Ju(e, s, 0), p !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= p & ~(T & ~n))
   }

   function Ju(e, n, o) {
       e.pendingLanes |= n, e.suspendedLanes &= ~n;
       var s = 31 - Tt(n);
       e.entangledLanes |= n, e.entanglements[s] = e.entanglements[s] | 1073741824 | o & 261930
   }

   function Ku(e, n) {
       var o = e.entangledLanes |= n;
       for (e = e.entanglements; o;) {
           var s = 31 - Tt(o),
               d = 1 << s;
           d & n | e[s] & n && (e[s] |= n), o &= ~d
       }
   }

   function Xu(e, n) {
       var o = n & -n;
       return o = (o & 42) !== 0 ? 1 : Xa(o), (o & (e.suspendedLanes | n)) !== 0 ? 0 : o
   }

   function Xa(e) {
       switch (e) {
           case 2:
               e = 1;
               break;
           case 8:
               e = 4;
               break;
           case 32:
               e = 16;
               break;
           case 256:
           case 512:
           case 1024:
           case 2048:
           case 4096:
           case 8192:
           case 16384:
           case 32768:
           case 65536:
           case 131072:
           case 262144:
           case 524288:
           case 1048576:
           case 2097152:
           case 4194304:
           case 8388608:
           case 16777216:
           case 33554432:
               e = 128;
               break;
           case 268435456:
               e = 134217728;
               break;
           default:
               e = 0
       }
       return e
   }

   function Qa(e) {
       return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
   }

   function Qu() {
       var e = O.p;
       return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gp(e.type))
   }

   function Zu(e, n) {
       var o = O.p;
       try {
           return O.p = e, n()
       } finally {
           O.p = o
       }
   }
   var vn = Math.random().toString(36).slice(2),
       We = "__reactFiber$" + vn,
       ct = "__reactProps$" + vn,
       fi = "__reactContainer$" + vn,
       Za = "__reactEvents$" + vn,
       Fg = "__reactListeners$" + vn,
       Yg = "__reactHandles$" + vn,
       $u = "__reactResources$" + vn,
       so = "__reactMarker$" + vn;

   function $a(e) {
       delete e[We], delete e[ct], delete e[Za], delete e[Fg], delete e[Yg]
   }

   function di(e) {
       var n = e[We];
       if (n) return n;
       for (var o = e.parentNode; o;) {
           if (n = o[fi] || o[We]) {
               if (o = n.alternate, n.child !== null || o !== null && o.child !== null)
                   for (e = Tp(e); e !== null;) {
                       if (o = e[We]) return o;
                       e = Tp(e)
                   }
               return n
           }
           e = o, o = e.parentNode
       }
       return null
   }

   function pi(e) {
       if (e = e[We] || e[fi]) {
           var n = e.tag;
           if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return e
       }
       return null
   }

   function ro(e) {
       var n = e.tag;
       if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
       throw Error(a(33))
   }

   function mi(e) {
       var n = e[$u];
       return n || (n = e[$u] = {
           hoistableStyles: new Map,
           hoistableScripts: new Map
       }), n
   }

   function Xe(e) {
       e[so] = !0
   }
   var Wu = new Set,
       ju = {};

   function Jn(e, n) {
       hi(e, n), hi(e + "Capture", n)
   }

   function hi(e, n) {
       for (ju[e] = n, e = 0; e < n.length; e++) Wu.add(n[e])
   }
   var Jg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
       ec = {},
       tc = {};

   function Kg(e) {
       return Fa.call(tc, e) ? !0 : Fa.call(ec, e) ? !1 : Jg.test(e) ? tc[e] = !0 : (ec[e] = !0, !1)
   }

   function rl(e, n, o) {
       if (Kg(n))
           if (o === null) e.removeAttribute(n);
           else {
               switch (typeof o) {
                   case "undefined":
                   case "function":
                   case "symbol":
                       e.removeAttribute(n);
                       return;
                   case "boolean":
                       var s = n.toLowerCase().slice(0, 5);
                       if (s !== "data-" && s !== "aria-") {
                           e.removeAttribute(n);
                           return
                       }
               }
               e.setAttribute(n, "" + o)
           }
   }

   function ul(e, n, o) {
       if (o === null) e.removeAttribute(n);
       else {
           switch (typeof o) {
               case "undefined":
               case "function":
               case "symbol":
               case "boolean":
                   e.removeAttribute(n);
                   return
           }
           e.setAttribute(n, "" + o)
       }
   }

   function Qt(e, n, o, s) {
       if (s === null) e.removeAttribute(o);
       else {
           switch (typeof s) {
               case "undefined":
               case "function":
               case "symbol":
               case "boolean":
                   e.removeAttribute(o);
                   return
           }
           e.setAttributeNS(n, o, "" + s)
       }
   }

   function Nt(e) {
       switch (typeof e) {
           case "bigint":
           case "boolean":
           case "number":
           case "string":
           case "undefined":
               return e;
           case "object":
               return e;
           default:
               return ""
       }
   }

   function nc(e) {
       var n = e.type;
       return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
   }

   function Xg(e, n, o) {
       var s = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
       if (!e.hasOwnProperty(n) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
           var d = s.get,
               p = s.set;
           return Object.defineProperty(e, n, {
               configurable: !0,
               get: function() {
                   return d.call(this)
               },
               set: function(T) {
                   o = "" + T, p.call(this, T)
               }
           }), Object.defineProperty(e, n, {
               enumerable: s.enumerable
           }), {
               getValue: function() {
                   return o
               },
               setValue: function(T) {
                   o = "" + T
               },
               stopTracking: function() {
                   e._valueTracker = null, delete e[n]
               }
           }
       }
   }

   function Wa(e) {
       if (!e._valueTracker) {
           var n = nc(e) ? "checked" : "value";
           e._valueTracker = Xg(e, n, "" + e[n])
       }
   }

   function ic(e) {
       if (!e) return !1;
       var n = e._valueTracker;
       if (!n) return !0;
       var o = n.getValue(),
           s = "";
       return e && (s = nc(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== o ? (n.setValue(e), !0) : !1
   }

   function cl(e) {
       if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
       try {
           return e.activeElement || e.body
       } catch {
           return e.body
       }
   }
   var Qg = /[\n"\\]/g;

   function xt(e) {
       return e.replace(Qg, function(n) {
           return "\\" + n.charCodeAt(0).toString(16) + " "
       })
   }

   function ja(e, n, o, s, d, p, T, _) {
       e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), n != null ? T === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Nt(n)) : e.value !== "" + Nt(n) && (e.value = "" + Nt(n)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), n != null ? es(e, T, Nt(n)) : o != null ? es(e, T, Nt(o)) : s != null && e.removeAttribute("value"), d == null && p != null && (e.defaultChecked = !!p), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + Nt(_) : e.removeAttribute("name")
   }

   function oc(e, n, o, s, d, p, T, _) {
       if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.type = p), n != null || o != null) {
           if (!(p !== "submit" && p !== "reset" || n != null)) {
               Wa(e);
               return
           }
           o = o != null ? "" + Nt(o) : "", n = n != null ? "" + Nt(n) : o, _ || n === e.value || (e.value = n), e.defaultValue = n
       }
       s = s ?? d, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = _ ? e.checked : !!s, e.defaultChecked = !!s, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T), Wa(e)
   }

   function es(e, n, o) {
       n === "number" && cl(e.ownerDocument) === e || e.defaultValue === "" + o || (e.defaultValue = "" + o)
   }

   function gi(e, n, o, s) {
       if (e = e.options, n) {
           n = {};
           for (var d = 0; d < o.length; d++) n["$" + o[d]] = !0;
           for (o = 0; o < e.length; o++) d = n.hasOwnProperty("$" + e[o].value), e[o].selected !== d && (e[o].selected = d), d && s && (e[o].defaultSelected = !0)
       } else {
           for (o = "" + Nt(o), n = null, d = 0; d < e.length; d++) {
               if (e[d].value === o) {
                   e[d].selected = !0, s && (e[d].defaultSelected = !0);
                   return
               }
               n !== null || e[d].disabled || (n = e[d])
           }
           n !== null && (n.selected = !0)
       }
   }

   function lc(e, n, o) {
       if (n != null && (n = "" + Nt(n), n !== e.value && (e.value = n), o == null)) {
           e.defaultValue !== n && (e.defaultValue = n);
           return
       }
       e.defaultValue = o != null ? "" + Nt(o) : ""
   }

   function ac(e, n, o, s) {
       if (n == null) {
           if (s != null) {
               if (o != null) throw Error(a(92));
               if (ut(s)) {
                   if (1 < s.length) throw Error(a(93));
                   s = s[0]
               }
               o = s
           }
           o == null && (o = ""), n = o
       }
       o = Nt(n), e.defaultValue = o, s = e.textContent, s === o && s !== "" && s !== null && (e.value = s), Wa(e)
   }

   function yi(e, n) {
       if (n) {
           var o = e.firstChild;
           if (o && o === e.lastChild && o.nodeType === 3) {
               o.nodeValue = n;
               return
           }
       }
       e.textContent = n
   }
   var Zg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

   function sc(e, n, o) {
       var s = n.indexOf("--") === 0;
       o == null || typeof o == "boolean" || o === "" ? s ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : s ? e.setProperty(n, o) : typeof o != "number" || o === 0 || Zg.has(n) ? n === "float" ? e.cssFloat = o : e[n] = ("" + o).trim() : e[n] = o + "px"
   }

   function rc(e, n, o) {
       if (n != null && typeof n != "object") throw Error(a(62));
       if (e = e.style, o != null) {
           for (var s in o) !o.hasOwnProperty(s) || n != null && n.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
           for (var d in n) s = n[d], n.hasOwnProperty(d) && o[d] !== s && sc(e, d, s)
       } else
           for (var p in n) n.hasOwnProperty(p) && sc(e, p, n[p])
   }

   function ts(e) {
       if (e.indexOf("-") === -1) return !1;
       switch (e) {
           case "annotation-xml":
           case "color-profile":
           case "font-face":
           case "font-face-src":
           case "font-face-uri":
           case "font-face-format":
           case "font-face-name":
           case "missing-glyph":
               return !1;
           default:
               return !0
       }
   }
   var $g = new Map([
           ["acceptCharset", "accept-charset"],
           ["htmlFor", "for"],
           ["httpEquiv", "http-equiv"],
           ["crossOrigin", "crossorigin"],
           ["accentHeight", "accent-height"],
           ["alignmentBaseline", "alignment-baseline"],
           ["arabicForm", "arabic-form"],
           ["baselineShift", "baseline-shift"],
           ["capHeight", "cap-height"],
           ["clipPath", "clip-path"],
           ["clipRule", "clip-rule"],
           ["colorInterpolation", "color-interpolation"],
           ["colorInterpolationFilters", "color-interpolation-filters"],
           ["colorProfile", "color-profile"],
           ["colorRendering", "color-rendering"],
           ["dominantBaseline", "dominant-baseline"],
           ["enableBackground", "enable-background"],
           ["fillOpacity", "fill-opacity"],
           ["fillRule", "fill-rule"],
           ["floodColor", "flood-color"],
           ["floodOpacity", "flood-opacity"],
           ["fontFamily", "font-family"],
           ["fontSize", "font-size"],
           ["fontSizeAdjust", "font-size-adjust"],
           ["fontStretch", "font-stretch"],
           ["fontStyle", "font-style"],
           ["fontVariant", "font-variant"],
           ["fontWeight", "font-weight"],
           ["glyphName", "glyph-name"],
           ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
           ["glyphOrientationVertical", "glyph-orientation-vertical"],
           ["horizAdvX", "horiz-adv-x"],
           ["horizOriginX", "horiz-origin-x"],
           ["imageRendering", "image-rendering"],
           ["letterSpacing", "letter-spacing"],
           ["lightingColor", "lighting-color"],
           ["markerEnd", "marker-end"],
           ["markerMid", "marker-mid"],
           ["markerStart", "marker-start"],
           ["overlinePosition", "overline-position"],
           ["overlineThickness", "overline-thickness"],
           ["paintOrder", "paint-order"],
           ["panose-1", "panose-1"],
           ["pointerEvents", "pointer-events"],
           ["renderingIntent", "rendering-intent"],
           ["shapeRendering", "shape-rendering"],
           ["stopColor", "stop-color"],
           ["stopOpacity", "stop-opacity"],
           ["strikethroughPosition", "strikethrough-position"],
           ["strikethroughThickness", "strikethrough-thickness"],
           ["strokeDasharray", "stroke-dasharray"],
           ["strokeDashoffset", "stroke-dashoffset"],
           ["strokeLinecap", "stroke-linecap"],
           ["strokeLinejoin", "stroke-linejoin"],
           ["strokeMiterlimit", "stroke-miterlimit"],
           ["strokeOpacity", "stroke-opacity"],
           ["strokeWidth", "stroke-width"],
           ["textAnchor", "text-anchor"],
           ["textDecoration", "text-decoration"],
           ["textRendering", "text-rendering"],
           ["transformOrigin", "transform-origin"],
           ["underlinePosition", "underline-position"],
           ["underlineThickness", "underline-thickness"],
           ["unicodeBidi", "unicode-bidi"],
           ["unicodeRange", "unicode-range"],
           ["unitsPerEm", "units-per-em"],
           ["vAlphabetic", "v-alphabetic"],
           ["vHanging", "v-hanging"],
           ["vIdeographic", "v-ideographic"],
           ["vMathematical", "v-mathematical"],
           ["vectorEffect", "vector-effect"],
           ["vertAdvY", "vert-adv-y"],
           ["vertOriginX", "vert-origin-x"],
           ["vertOriginY", "vert-origin-y"],
           ["wordSpacing", "word-spacing"],
           ["writingMode", "writing-mode"],
           ["xmlnsXlink", "xmlns:xlink"],
           ["xHeight", "x-height"]
       ]),
       Wg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

   function fl(e) {
       return Wg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
   }

   function Zt() {}
   var ns = null;

   function is(e) {
       return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
   }
   var vi = null,
       Ti = null;

   function uc(e) {
       var n = pi(e);
       if (n && (e = n.stateNode)) {
           var o = e[ct] || null;
           e: switch (e = n.stateNode, n.type) {
               case "input":
                   if (ja(e, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name), n = o.name, o.type === "radio" && n != null) {
                       for (o = e; o.parentNode;) o = o.parentNode;
                       for (o = o.querySelectorAll('input[name="' + xt("" + n) + '"][type="radio"]'), n = 0; n < o.length; n++) {
                           var s = o[n];
                           if (s !== e && s.form === e.form) {
                               var d = s[ct] || null;
                               if (!d) throw Error(a(90));
                               ja(s, d.value, d.defaultValue, d.defaultValue, d.checked, d.defaultChecked, d.type, d.name)
                           }
                       }
                       for (n = 0; n < o.length; n++) s = o[n], s.form === e.form && ic(s)
                   }
                   break e;
               case "textarea":
                   lc(e, o.value, o.defaultValue);
                   break e;
               case "select":
                   n = o.value, n != null && gi(e, !!o.multiple, n, !1)
           }
       }
   }
   var os = !1;

   function cc(e, n, o) {
       if (os) return e(n, o);
       os = !0;
       try {
           var s = e(n);
           return s
       } finally {
           if (os = !1, (vi !== null || Ti !== null) && (Wl(), vi && (n = vi, e = Ti, Ti = vi = null, uc(n), e)))
               for (n = 0; n < e.length; n++) uc(e[n])
       }
   }

   function uo(e, n) {
       var o = e.stateNode;
       if (o === null) return null;
       var s = o[ct] || null;
       if (s === null) return null;
       o = s[n];
       e: switch (n) {
           case "onClick":
           case "onClickCapture":
           case "onDoubleClick":
           case "onDoubleClickCapture":
           case "onMouseDown":
           case "onMouseDownCapture":
           case "onMouseMove":
           case "onMouseMoveCapture":
           case "onMouseUp":
           case "onMouseUpCapture":
           case "onMouseEnter":
               (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
               break e;
           default:
               e = !1
       }
       if (e) return null;
       if (o && typeof o != "function") throw Error(a(231, n, typeof o));
       return o
   }
   var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
       ls = !1;
   if ($t) try {
       var co = {};
       Object.defineProperty(co, "passive", {
           get: function() {
               ls = !0
           }
       }), window.addEventListener("test", co, co), window.removeEventListener("test", co, co)
   } catch {
       ls = !1
   }
   var Tn = null,
       as = null,
       dl = null;

   function fc() {
       if (dl) return dl;
       var e, n = as,
           o = n.length,
           s, d = "value" in Tn ? Tn.value : Tn.textContent,
           p = d.length;
       for (e = 0; e < o && n[e] === d[e]; e++);
       var T = o - e;
       for (s = 1; s <= T && n[o - s] === d[p - s]; s++);
       return dl = d.slice(e, 1 < s ? 1 - s : void 0)
   }

   function pl(e) {
       var n = e.keyCode;
       return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
   }

   function ml() {
       return !0
   }

   function dc() {
       return !1
   }

   function ft(e) {
       function n(o, s, d, p, T) {
           this._reactName = o, this._targetInst = d, this.type = s, this.nativeEvent = p, this.target = T, this.currentTarget = null;
           for (var _ in e) e.hasOwnProperty(_) && (o = e[_], this[_] = o ? o(p) : p[_]);
           return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? ml : dc, this.isPropagationStopped = dc, this
       }
       return S(n.prototype, {
           preventDefault: function() {
               this.defaultPrevented = !0;
               var o = this.nativeEvent;
               o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ml)
           },
           stopPropagation: function() {
               var o = this.nativeEvent;
               o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ml)
           },
           persist: function() {},
           isPersistent: ml
       }), n
   }
   var Kn = {
           eventPhase: 0,
           bubbles: 0,
           cancelable: 0,
           timeStamp: function(e) {
               return e.timeStamp || Date.now()
           },
           defaultPrevented: 0,
           isTrusted: 0
       },
       hl = ft(Kn),
       fo = S({}, Kn, {
           view: 0,
           detail: 0
       }),
       jg = ft(fo),
       ss, rs, po, gl = S({}, fo, {
           screenX: 0,
           screenY: 0,
           clientX: 0,
           clientY: 0,
           pageX: 0,
           pageY: 0,
           ctrlKey: 0,
           shiftKey: 0,
           altKey: 0,
           metaKey: 0,
           getModifierState: cs,
           button: 0,
           buttons: 0,
           relatedTarget: function(e) {
               return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
           },
           movementX: function(e) {
               return "movementX" in e ? e.movementX : (e !== po && (po && e.type === "mousemove" ? (ss = e.screenX - po.screenX, rs = e.screenY - po.screenY) : rs = ss = 0, po = e), ss)
           },
           movementY: function(e) {
               return "movementY" in e ? e.movementY : rs
           }
       }),
       pc = ft(gl),
       ey = S({}, gl, {
           dataTransfer: 0
       }),
       ty = ft(ey),
       ny = S({}, fo, {
           relatedTarget: 0
       }),
       us = ft(ny),
       iy = S({}, Kn, {
           animationName: 0,
           elapsedTime: 0,
           pseudoElement: 0
       }),
       oy = ft(iy),
       ly = S({}, Kn, {
           clipboardData: function(e) {
               return "clipboardData" in e ? e.clipboardData : window.clipboardData
           }
       }),
       ay = ft(ly),
       sy = S({}, Kn, {
           data: 0
       }),
       mc = ft(sy),
       ry = {
           Esc: "Escape",
           Spacebar: " ",
           Left: "ArrowLeft",
           Up: "ArrowUp",
           Right: "ArrowRight",
           Down: "ArrowDown",
           Del: "Delete",
           Win: "OS",
           Menu: "ContextMenu",
           Apps: "ContextMenu",
           Scroll: "ScrollLock",
           MozPrintableKey: "Unidentified"
       },
       uy = {
           8: "Backspace",
           9: "Tab",
           12: "Clear",
           13: "Enter",
           16: "Shift",
           17: "Control",
           18: "Alt",
           19: "Pause",
           20: "CapsLock",
           27: "Escape",
           32: " ",
           33: "PageUp",
           34: "PageDown",
           35: "End",
           36: "Home",
           37: "ArrowLeft",
           38: "ArrowUp",
           39: "ArrowRight",
           40: "ArrowDown",
           45: "Insert",
           46: "Delete",
           112: "F1",
           113: "F2",
           114: "F3",
           115: "F4",
           116: "F5",
           117: "F6",
           118: "F7",
           119: "F8",
           120: "F9",
           121: "F10",
           122: "F11",
           123: "F12",
           144: "NumLock",
           145: "ScrollLock",
           224: "Meta"
       },
       cy = {
           Alt: "altKey",
           Control: "ctrlKey",
           Meta: "metaKey",
           Shift: "shiftKey"
       };

   function fy(e) {
       var n = this.nativeEvent;
       return n.getModifierState ? n.getModifierState(e) : (e = cy[e]) ? !!n[e] : !1
   }

   function cs() {
       return fy
   }
   var dy = S({}, fo, {
           key: function(e) {
               if (e.key) {
                   var n = ry[e.key] || e.key;
                   if (n !== "Unidentified") return n
               }
               return e.type === "keypress" ? (e = pl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uy[e.keyCode] || "Unidentified" : ""
           },
           code: 0,
           location: 0,
           ctrlKey: 0,
           shiftKey: 0,
           altKey: 0,
           metaKey: 0,
           repeat: 0,
           locale: 0,
           getModifierState: cs,
           charCode: function(e) {
               return e.type === "keypress" ? pl(e) : 0
           },
           keyCode: function(e) {
               return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
           },
           which: function(e) {
               return e.type === "keypress" ? pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
           }
       }),
       py = ft(dy),
       my = S({}, gl, {
           pointerId: 0,
           width: 0,
           height: 0,
           pressure: 0,
           tangentialPressure: 0,
           tiltX: 0,
           tiltY: 0,
           twist: 0,
           pointerType: 0,
           isPrimary: 0
       }),
       hc = ft(my),
       hy = S({}, fo, {
           touches: 0,
           targetTouches: 0,
           changedTouches: 0,
           altKey: 0,
           metaKey: 0,
           ctrlKey: 0,
           shiftKey: 0,
           getModifierState: cs
       }),
       gy = ft(hy),
       yy = S({}, Kn, {
           propertyName: 0,
           elapsedTime: 0,
           pseudoElement: 0
       }),
       vy = ft(yy),
       Ty = S({}, gl, {
           deltaX: function(e) {
               return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
           },
           deltaY: function(e) {
               return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
           },
           deltaZ: 0,
           deltaMode: 0
       }),
       Sy = ft(Ty),
       Ey = S({}, Kn, {
           newState: 0,
           oldState: 0
       }),
       _y = ft(Ey),
       Cy = [9, 13, 27, 32],
       fs = $t && "CompositionEvent" in window,
       mo = null;
   $t && "documentMode" in document && (mo = document.documentMode);
   var Ay = $t && "TextEvent" in window && !mo,
       gc = $t && (!fs || mo && 8 < mo && 11 >= mo),
       yc = " ",
       vc = !1;

   function Tc(e, n) {
       switch (e) {
           case "keyup":
               return Cy.indexOf(n.keyCode) !== -1;
           case "keydown":
               return n.keyCode !== 229;
           case "keypress":
           case "mousedown":
           case "focusout":
               return !0;
           default:
               return !1
       }
   }

   function Sc(e) {
       return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
   }
   var Si = !1;

   function Ry(e, n) {
       switch (e) {
           case "compositionend":
               return Sc(n);
           case "keypress":
               return n.which !== 32 ? null : (vc = !0, yc);
           case "textInput":
               return e = n.data, e === yc && vc ? null : e;
           default:
               return null
       }
   }

   function My(e, n) {
       if (Si) return e === "compositionend" || !fs && Tc(e, n) ? (e = fc(), dl = as = Tn = null, Si = !1, e) : null;
       switch (e) {
           case "paste":
               return null;
           case "keypress":
               if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                   if (n.char && 1 < n.char.length) return n.char;
                   if (n.which) return String.fromCharCode(n.which)
               }
               return null;
           case "compositionend":
               return gc && n.locale !== "ko" ? null : n.data;
           default:
               return null
       }
   }
   var Ny = {
       color: !0,
       date: !0,
       datetime: !0,
       "datetime-local": !0,
       email: !0,
       month: !0,
       number: !0,
       password: !0,
       range: !0,
       search: !0,
       tel: !0,
       text: !0,
       time: !0,
       url: !0,
       week: !0
   };

   function Ec(e) {
       var n = e && e.nodeName && e.nodeName.toLowerCase();
       return n === "input" ? !!Ny[e.type] : n === "textarea"
   }

   function _c(e, n, o, s) {
       vi ? Ti ? Ti.push(s) : Ti = [s] : vi = s, n = la(n, "onChange"), 0 < n.length && (o = new hl("onChange", "change", null, o, s), e.push({
           event: o,
           listeners: n
       }))
   }
   var ho = null,
       go = null;

   function xy(e) {
       lp(e, 0)
   }

   function yl(e) {
       var n = ro(e);
       if (ic(n)) return e
   }

   function Cc(e, n) {
       if (e === "change") return n
   }
   var Ac = !1;
   if ($t) {
       var ds;
       if ($t) {
           var ps = "oninput" in document;
           if (!ps) {
               var Rc = document.createElement("div");
               Rc.setAttribute("oninput", "return;"), ps = typeof Rc.oninput == "function"
           }
           ds = ps
       } else ds = !1;
       Ac = ds && (!document.documentMode || 9 < document.documentMode)
   }

   function Mc() {
       ho && (ho.detachEvent("onpropertychange", Nc), go = ho = null)
   }

   function Nc(e) {
       if (e.propertyName === "value" && yl(go)) {
           var n = [];
           _c(n, go, e, is(e)), cc(xy, n)
       }
   }

   function Iy(e, n, o) {
       e === "focusin" ? (Mc(), ho = n, go = o, ho.attachEvent("onpropertychange", Nc)) : e === "focusout" && Mc()
   }

   function Dy(e) {
       if (e === "selectionchange" || e === "keyup" || e === "keydown") return yl(go)
   }

   function by(e, n) {
       if (e === "click") return yl(n)
   }

   function wy(e, n) {
       if (e === "input" || e === "change") return yl(n)
   }

   function Uy(e, n) {
       return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
   }
   var St = typeof Object.is == "function" ? Object.is : Uy;

   function yo(e, n) {
       if (St(e, n)) return !0;
       if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
       var o = Object.keys(e),
           s = Object.keys(n);
       if (o.length !== s.length) return !1;
       for (s = 0; s < o.length; s++) {
           var d = o[s];
           if (!Fa.call(n, d) || !St(e[d], n[d])) return !1
       }
       return !0
   }

   function xc(e) {
       for (; e && e.firstChild;) e = e.firstChild;
       return e
   }

   function Ic(e, n) {
       var o = xc(e);
       e = 0;
       for (var s; o;) {
           if (o.nodeType === 3) {
               if (s = e + o.textContent.length, e <= n && s >= n) return {
                   node: o,
                   offset: n - e
               };
               e = s
           }
           e: {
               for (; o;) {
                   if (o.nextSibling) {
                       o = o.nextSibling;
                       break e
                   }
                   o = o.parentNode
               }
               o = void 0
           }
           o = xc(o)
       }
   }

   function Dc(e, n) {
       return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Dc(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
   }

   function bc(e) {
       e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
       for (var n = cl(e.document); n instanceof e.HTMLIFrameElement;) {
           try {
               var o = typeof n.contentWindow.location.href == "string"
           } catch {
               o = !1
           }
           if (o) e = n.contentWindow;
           else break;
           n = cl(e.document)
       }
       return n
   }

   function ms(e) {
       var n = e && e.nodeName && e.nodeName.toLowerCase();
       return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
   }
   var Ly = $t && "documentMode" in document && 11 >= document.documentMode,
       Ei = null,
       hs = null,
       vo = null,
       gs = !1;

   function wc(e, n, o) {
       var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
       gs || Ei == null || Ei !== cl(s) || (s = Ei, "selectionStart" in s && ms(s) ? s = {
           start: s.selectionStart,
           end: s.selectionEnd
       } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
           anchorNode: s.anchorNode,
           anchorOffset: s.anchorOffset,
           focusNode: s.focusNode,
           focusOffset: s.focusOffset
       }), vo && yo(vo, s) || (vo = s, s = la(hs, "onSelect"), 0 < s.length && (n = new hl("onSelect", "select", null, n, o), e.push({
           event: n,
           listeners: s
       }), n.target = Ei)))
   }

   function Xn(e, n) {
       var o = {};
       return o[e.toLowerCase()] = n.toLowerCase(), o["Webkit" + e] = "webkit" + n, o["Moz" + e] = "moz" + n, o
   }
   var _i = {
           animationend: Xn("Animation", "AnimationEnd"),
           animationiteration: Xn("Animation", "AnimationIteration"),
           animationstart: Xn("Animation", "AnimationStart"),
           transitionrun: Xn("Transition", "TransitionRun"),
           transitionstart: Xn("Transition", "TransitionStart"),
           transitioncancel: Xn("Transition", "TransitionCancel"),
           transitionend: Xn("Transition", "TransitionEnd")
       },
       ys = {},
       Uc = {};
   $t && (Uc = document.createElement("div").style, "AnimationEvent" in window || (delete _i.animationend.animation, delete _i.animationiteration.animation, delete _i.animationstart.animation), "TransitionEvent" in window || delete _i.transitionend.transition);

   function Qn(e) {
       if (ys[e]) return ys[e];
       if (!_i[e]) return e;
       var n = _i[e],
           o;
       for (o in n)
           if (n.hasOwnProperty(o) && o in Uc) return ys[e] = n[o];
       return e
   }
   var Lc = Qn("animationend"),
       Gc = Qn("animationiteration"),
       Hc = Qn("animationstart"),
       Gy = Qn("transitionrun"),
       Hy = Qn("transitionstart"),
       qy = Qn("transitioncancel"),
       qc = Qn("transitionend"),
       Vc = new Map,
       vs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
   vs.push("scrollEnd");

   function zt(e, n) {
       Vc.set(e, n), Jn(n, [e])
   }
   var vl = typeof reportError == "function" ? reportError : function(e) {
           if (typeof window == "object" && typeof window.ErrorEvent == "function") {
               var n = new window.ErrorEvent("error", {
                   bubbles: !0,
                   cancelable: !0,
                   message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                   error: e
               });
               if (!window.dispatchEvent(n)) return
           } else if (typeof process == "object" && typeof process.emit == "function") {
               process.emit("uncaughtException", e);
               return
           }
           console.error(e)
       },
       It = [],
       Ci = 0,
       Ts = 0;

   function Tl() {
       for (var e = Ci, n = Ts = Ci = 0; n < e;) {
           var o = It[n];
           It[n++] = null;
           var s = It[n];
           It[n++] = null;
           var d = It[n];
           It[n++] = null;
           var p = It[n];
           if (It[n++] = null, s !== null && d !== null) {
               var T = s.pending;
               T === null ? d.next = d : (d.next = T.next, T.next = d), s.pending = d
           }
           p !== 0 && zc(o, d, p)
       }
   }

   function Sl(e, n, o, s) {
       It[Ci++] = e, It[Ci++] = n, It[Ci++] = o, It[Ci++] = s, Ts |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s)
   }

   function Ss(e, n, o, s) {
       return Sl(e, n, o, s), El(e)
   }

   function Zn(e, n) {
       return Sl(e, null, null, n), El(e)
   }

   function zc(e, n, o) {
       e.lanes |= o;
       var s = e.alternate;
       s !== null && (s.lanes |= o);
       for (var d = !1, p = e.return; p !== null;) p.childLanes |= o, s = p.alternate, s !== null && (s.childLanes |= o), p.tag === 22 && (e = p.stateNode, e === null || e._visibility & 1 || (d = !0)), e = p, p = p.return;
       return e.tag === 3 ? (p = e.stateNode, d && n !== null && (d = 31 - Tt(o), e = p.hiddenUpdates, s = e[d], s === null ? e[d] = [n] : s.push(n), n.lane = o | 536870912), p) : null
   }

   function El(e) {
       if (50 < ko) throw ko = 0, Ir = null, Error(a(185));
       for (var n = e.return; n !== null;) e = n, n = e.return;
       return e.tag === 3 ? e.stateNode : null
   }
   var Ai = {};

   function Vy(e, n, o, s) {
       this.tag = e, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
   }

   function Et(e, n, o, s) {
       return new Vy(e, n, o, s)
   }

   function Es(e) {
       return e = e.prototype, !(!e || !e.isReactComponent)
   }

   function Wt(e, n) {
       var o = e.alternate;
       return o === null ? (o = Et(e.tag, n, e.key, e.mode), o.elementType = e.elementType, o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = n, o.type = e.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = e.flags & 65011712, o.childLanes = e.childLanes, o.lanes = e.lanes, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, n = e.dependencies, o.dependencies = n === null ? null : {
           lanes: n.lanes,
           firstContext: n.firstContext
       }, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o.refCleanup = e.refCleanup, o
   }

   function kc(e, n) {
       e.flags &= 65011714;
       var o = e.alternate;
       return o === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = o.childLanes, e.lanes = o.lanes, e.child = o.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = o.memoizedProps, e.memoizedState = o.memoizedState, e.updateQueue = o.updateQueue, e.type = o.type, n = o.dependencies, e.dependencies = n === null ? null : {
           lanes: n.lanes,
           firstContext: n.firstContext
       }), e
   }

   function _l(e, n, o, s, d, p) {
       var T = 0;
       if (s = e, typeof e == "function") Es(e) && (T = 1);
       else if (typeof e == "string") T = Ov(e, o, Z.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
       else e: switch (e) {
           case W:
               return e = Et(31, o, n, d), e.elementType = W, e.lanes = p, e;
           case H:
               return $n(o.children, d, p, n);
           case U:
               T = 8, d |= 24;
               break;
           case P:
               return e = Et(12, o, n, d | 2), e.elementType = P, e.lanes = p, e;
           case ee:
               return e = Et(13, o, n, d), e.elementType = ee, e.lanes = p, e;
           case te:
               return e = Et(19, o, n, d), e.elementType = te, e.lanes = p, e;
           default:
               if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                   case B:
                       T = 10;
                       break e;
                   case K:
                       T = 9;
                       break e;
                   case X:
                       T = 11;
                       break e;
                   case F:
                       T = 14;
                       break e;
                   case he:
                       T = 16, s = null;
                       break e
               }
               T = 29, o = Error(a(130, e === null ? "null" : typeof e, "")), s = null
       }
       return n = Et(T, o, n, d), n.elementType = e, n.type = s, n.lanes = p, n
   }

   function $n(e, n, o, s) {
       return e = Et(7, e, s, n), e.lanes = o, e
   }

   function _s(e, n, o) {
       return e = Et(6, e, null, n), e.lanes = o, e
   }

   function Pc(e) {
       var n = Et(18, null, null, 0);
       return n.stateNode = e, n
   }

   function Cs(e, n, o) {
       return n = Et(4, e.children !== null ? e.children : [], e.key, n), n.lanes = o, n.stateNode = {
           containerInfo: e.containerInfo,
           pendingChildren: null,
           implementation: e.implementation
       }, n
   }
   var Bc = new WeakMap;

   function Dt(e, n) {
       if (typeof e == "object" && e !== null) {
           var o = Bc.get(e);
           return o !== void 0 ? o : (n = {
               value: e,
               source: n,
               stack: Pu(n)
           }, Bc.set(e, n), n)
       }
       return {
           value: e,
           source: n,
           stack: Pu(n)
       }
   }
   var Ri = [],
       Mi = 0,
       Cl = null,
       To = 0,
       bt = [],
       wt = 0,
       Sn = null,
       Yt = 1,
       Jt = "";

   function jt(e, n) {
       Ri[Mi++] = To, Ri[Mi++] = Cl, Cl = e, To = n
   }

   function Oc(e, n, o) {
       bt[wt++] = Yt, bt[wt++] = Jt, bt[wt++] = Sn, Sn = e;
       var s = Yt;
       e = Jt;
       var d = 32 - Tt(s) - 1;
       s &= ~(1 << d), o += 1;
       var p = 32 - Tt(n) + d;
       if (30 < p) {
           var T = d - d % 5;
           p = (s & (1 << T) - 1).toString(32), s >>= T, d -= T, Yt = 1 << 32 - Tt(n) + d | o << d | s, Jt = p + e
       } else Yt = 1 << p | o << d | s, Jt = e
   }

   function As(e) {
       e.return !== null && (jt(e, 1), Oc(e, 1, 0))
   }

   function Rs(e) {
       for (; e === Cl;) Cl = Ri[--Mi], Ri[Mi] = null, To = Ri[--Mi], Ri[Mi] = null;
       for (; e === Sn;) Sn = bt[--wt], bt[wt] = null, Jt = bt[--wt], bt[wt] = null, Yt = bt[--wt], bt[wt] = null
   }

   function Fc(e, n) {
       bt[wt++] = Yt, bt[wt++] = Jt, bt[wt++] = Sn, Yt = n.id, Jt = n.overflow, Sn = e
   }
   var je = null,
       we = null,
       ge = !1,
       En = null,
       Ut = !1,
       Ms = Error(a(519));

   function _n(e) {
       var n = Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
       throw So(Dt(n, e)), Ms
   }

   function Yc(e) {
       var n = e.stateNode,
           o = e.type,
           s = e.memoizedProps;
       switch (n[We] = e, n[ct] = s, o) {
           case "dialog":
               fe("cancel", n), fe("close", n);
               break;
           case "iframe":
           case "object":
           case "embed":
               fe("load", n);
               break;
           case "video":
           case "audio":
               for (o = 0; o < Bo.length; o++) fe(Bo[o], n);
               break;
           case "source":
               fe("error", n);
               break;
           case "img":
           case "image":
           case "link":
               fe("error", n), fe("load", n);
               break;
           case "details":
               fe("toggle", n);
               break;
           case "input":
               fe("invalid", n), oc(n, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0);
               break;
           case "select":
               fe("invalid", n);
               break;
           case "textarea":
               fe("invalid", n), ac(n, s.value, s.defaultValue, s.children)
       }
       o = s.children, typeof o != "string" && typeof o != "number" && typeof o != "bigint" || n.textContent === "" + o || s.suppressHydrationWarning === !0 || up(n.textContent, o) ? (s.popover != null && (fe("beforetoggle", n), fe("toggle", n)), s.onScroll != null && fe("scroll", n), s.onScrollEnd != null && fe("scrollend", n), s.onClick != null && (n.onclick = Zt), n = !0) : n = !1, n || _n(e, !0)
   }

   function Jc(e) {
       for (je = e.return; je;) switch (je.tag) {
           case 5:
           case 31:
           case 13:
               Ut = !1;
               return;
           case 27:
           case 3:
               Ut = !0;
               return;
           default:
               je = je.return
       }
   }

   function Ni(e) {
       if (e !== je) return !1;
       if (!ge) return Jc(e), ge = !0, !1;
       var n = e.tag,
           o;
       if ((o = n !== 3 && n !== 27) && ((o = n === 5) && (o = e.type, o = !(o !== "form" && o !== "button") || Fr(e.type, e.memoizedProps)), o = !o), o && we && _n(e), Jc(e), n === 13) {
           if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
           we = vp(e)
       } else if (n === 31) {
           if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
           we = vp(e)
       } else n === 27 ? (n = we, Hn(e.type) ? (e = Qr, Qr = null, we = e) : we = n) : we = je ? Gt(e.stateNode.nextSibling) : null;
       return !0
   }

   function Wn() {
       we = je = null, ge = !1
   }

   function Ns() {
       var e = En;
       return e !== null && (ht === null ? ht = e : ht.push.apply(ht, e), En = null), e
   }

   function So(e) {
       En === null ? En = [e] : En.push(e)
   }
   var xs = M(null),
       jn = null,
       en = null;

   function Cn(e, n, o) {
       Y(xs, n._currentValue), n._currentValue = o
   }

   function tn(e) {
       e._currentValue = xs.current, k(xs)
   }

   function Is(e, n, o) {
       for (; e !== null;) {
           var s = e.alternate;
           if ((e.childLanes & n) !== n ? (e.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), e === o) break;
           e = e.return
       }
   }

   function Ds(e, n, o, s) {
       var d = e.child;
       for (d !== null && (d.return = e); d !== null;) {
           var p = d.dependencies;
           if (p !== null) {
               var T = d.child;
               p = p.firstContext;
               e: for (; p !== null;) {
                   var _ = p;
                   p = d;
                   for (var A = 0; A < n.length; A++)
                       if (_.context === n[A]) {
                           p.lanes |= o, _ = p.alternate, _ !== null && (_.lanes |= o), Is(p.return, o, e), s || (T = null);
                           break e
                       } p = _.next
               }
           } else if (d.tag === 18) {
               if (T = d.return, T === null) throw Error(a(341));
               T.lanes |= o, p = T.alternate, p !== null && (p.lanes |= o), Is(T, o, e), T = null
           } else T = d.child;
           if (T !== null) T.return = d;
           else
               for (T = d; T !== null;) {
                   if (T === e) {
                       T = null;
                       break
                   }
                   if (d = T.sibling, d !== null) {
                       d.return = T.return, T = d;
                       break
                   }
                   T = T.return
               }
           d = T
       }
   }

   function xi(e, n, o, s) {
       e = null;
       for (var d = n, p = !1; d !== null;) {
           if (!p) {
               if ((d.flags & 524288) !== 0) p = !0;
               else if ((d.flags & 262144) !== 0) break
           }
           if (d.tag === 10) {
               var T = d.alternate;
               if (T === null) throw Error(a(387));
               if (T = T.memoizedProps, T !== null) {
                   var _ = d.type;
                   St(d.pendingProps.value, T.value) || (e !== null ? e.push(_) : e = [_])
               }
           } else if (d === _e.current) {
               if (T = d.alternate, T === null) throw Error(a(387));
               T.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(Ko) : e = [Ko])
           }
           d = d.return
       }
       e !== null && Ds(n, e, o, s), n.flags |= 262144
   }

   function Al(e) {
       for (e = e.firstContext; e !== null;) {
           if (!St(e.context._currentValue, e.memoizedValue)) return !0;
           e = e.next
       }
       return !1
   }

   function ei(e) {
       jn = e, en = null, e = e.dependencies, e !== null && (e.firstContext = null)
   }

   function et(e) {
       return Kc(jn, e)
   }

   function Rl(e, n) {
       return jn === null && ei(e), Kc(e, n)
   }

   function Kc(e, n) {
       var o = n._currentValue;
       if (n = {
               context: n,
               memoizedValue: o,
               next: null
           }, en === null) {
           if (e === null) throw Error(a(308));
           en = n, e.dependencies = {
               lanes: 0,
               firstContext: n
           }, e.flags |= 524288
       } else en = en.next = n;
       return o
   }
   var zy = typeof AbortController < "u" ? AbortController : function() {
           var e = [],
               n = this.signal = {
                   aborted: !1,
                   addEventListener: function(o, s) {
                       e.push(s)
                   }
               };
           this.abort = function() {
               n.aborted = !0, e.forEach(function(o) {
                   return o()
               })
           }
       },
       ky = i.unstable_scheduleCallback,
       Py = i.unstable_NormalPriority,
       Oe = {
           $$typeof: B,
           Consumer: null,
           Provider: null,
           _currentValue: null,
           _currentValue2: null,
           _threadCount: 0
       };

   function bs() {
       return {
           controller: new zy,
           data: new Map,
           refCount: 0
       }
   }

   function Eo(e) {
       e.refCount--, e.refCount === 0 && ky(Py, function() {
           e.controller.abort()
       })
   }
   var _o = null,
       ws = 0,
       Ii = 0,
       Di = null;

   function By(e, n) {
       if (_o === null) {
           var o = _o = [];
           ws = 0, Ii = Gr(), Di = {
               status: "pending",
               value: void 0,
               then: function(s) {
                   o.push(s)
               }
           }
       }
       return ws++, n.then(Xc, Xc), n
   }

   function Xc() {
       if (--ws === 0 && _o !== null) {
           Di !== null && (Di.status = "fulfilled");
           var e = _o;
           _o = null, Ii = 0, Di = null;
           for (var n = 0; n < e.length; n++)(0, e[n])()
       }
   }

   function Oy(e, n) {
       var o = [],
           s = {
               status: "pending",
               value: null,
               reason: null,
               then: function(d) {
                   o.push(d)
               }
           };
       return e.then(function() {
           s.status = "fulfilled", s.value = n;
           for (var d = 0; d < o.length; d++)(0, o[d])(n)
       }, function(d) {
           for (s.status = "rejected", s.reason = d, d = 0; d < o.length; d++)(0, o[d])(void 0)
       }), s
   }
   var Qc = G.S;
   G.S = function(e, n) {
       Ud = yt(), typeof n == "object" && n !== null && typeof n.then == "function" && By(e, n), Qc !== null && Qc(e, n)
   };
   var ti = M(null);

   function Us() {
       var e = ti.current;
       return e !== null ? e : be.pooledCache
   }

   function Ml(e, n) {
       n === null ? Y(ti, ti.current) : Y(ti, n.pool)
   }

   function Zc() {
       var e = Us();
       return e === null ? null : {
           parent: Oe._currentValue,
           pool: e
       }
   }
   var bi = Error(a(460)),
       Ls = Error(a(474)),
       Nl = Error(a(542)),
       xl = {
           then: function() {}
       };

   function $c(e) {
       return e = e.status, e === "fulfilled" || e === "rejected"
   }

   function Wc(e, n, o) {
       switch (o = e[o], o === void 0 ? e.push(n) : o !== n && (n.then(Zt, Zt), n = o), n.status) {
           case "fulfilled":
               return n.value;
           case "rejected":
               throw e = n.reason, ef(e), e;
           default:
               if (typeof n.status == "string") n.then(Zt, Zt);
               else {
                   if (e = be, e !== null && 100 < e.shellSuspendCounter) throw Error(a(482));
                   e = n, e.status = "pending", e.then(function(s) {
                       if (n.status === "pending") {
                           var d = n;
                           d.status = "fulfilled", d.value = s
                       }
                   }, function(s) {
                       if (n.status === "pending") {
                           var d = n;
                           d.status = "rejected", d.reason = s
                       }
                   })
               }
               switch (n.status) {
                   case "fulfilled":
                       return n.value;
                   case "rejected":
                       throw e = n.reason, ef(e), e
               }
               throw ii = n, bi
       }
   }

   function ni(e) {
       try {
           var n = e._init;
           return n(e._payload)
       } catch (o) {
           throw o !== null && typeof o == "object" && typeof o.then == "function" ? (ii = o, bi) : o
       }
   }
   var ii = null;

   function jc() {
       if (ii === null) throw Error(a(459));
       var e = ii;
       return ii = null, e
   }

   function ef(e) {
       if (e === bi || e === Nl) throw Error(a(483))
   }
   var wi = null,
       Co = 0;

   function Il(e) {
       var n = Co;
       return Co += 1, wi === null && (wi = []), Wc(wi, e, n)
   }

   function Ao(e, n) {
       n = n.props.ref, e.ref = n !== void 0 ? n : null
   }

   function Dl(e, n) {
       throw n.$$typeof === E ? Error(a(525)) : (e = Object.prototype.toString.call(n), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)))
   }

   function tf(e) {
       function n(x, R) {
           if (e) {
               var I = x.deletions;
               I === null ? (x.deletions = [R], x.flags |= 16) : I.push(R)
           }
       }

       function o(x, R) {
           if (!e) return null;
           for (; R !== null;) n(x, R), R = R.sibling;
           return null
       }

       function s(x) {
           for (var R = new Map; x !== null;) x.key !== null ? R.set(x.key, x) : R.set(x.index, x), x = x.sibling;
           return R
       }

       function d(x, R) {
           return x = Wt(x, R), x.index = 0, x.sibling = null, x
       }

       function p(x, R, I) {
           return x.index = I, e ? (I = x.alternate, I !== null ? (I = I.index, I < R ? (x.flags |= 67108866, R) : I) : (x.flags |= 67108866, R)) : (x.flags |= 1048576, R)
       }

       function T(x) {
           return e && x.alternate === null && (x.flags |= 67108866), x
       }

       function _(x, R, I, V) {
           return R === null || R.tag !== 6 ? (R = _s(I, x.mode, V), R.return = x, R) : (R = d(R, I), R.return = x, R)
       }

       function A(x, R, I, V) {
           var j = I.type;
           return j === H ? q(x, R, I.props.children, V, I.key) : R !== null && (R.elementType === j || typeof j == "object" && j !== null && j.$$typeof === he && ni(j) === R.type) ? (R = d(R, I.props), Ao(R, I), R.return = x, R) : (R = _l(I.type, I.key, I.props, null, x.mode, V), Ao(R, I), R.return = x, R)
       }

       function D(x, R, I, V) {
           return R === null || R.tag !== 4 || R.stateNode.containerInfo !== I.containerInfo || R.stateNode.implementation !== I.implementation ? (R = Cs(I, x.mode, V), R.return = x, R) : (R = d(R, I.children || []), R.return = x, R)
       }

       function q(x, R, I, V, j) {
           return R === null || R.tag !== 7 ? (R = $n(I, x.mode, V, j), R.return = x, R) : (R = d(R, I), R.return = x, R)
       }

       function z(x, R, I) {
           if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return R = _s("" + R, x.mode, I), R.return = x, R;
           if (typeof R == "object" && R !== null) {
               switch (R.$$typeof) {
                   case C:
                       return I = _l(R.type, R.key, R.props, null, x.mode, I), Ao(I, R), I.return = x, I;
                   case b:
                       return R = Cs(R, x.mode, I), R.return = x, R;
                   case he:
                       return R = ni(R), z(x, R, I)
               }
               if (ut(R) || Ge(R)) return R = $n(R, x.mode, I, null), R.return = x, R;
               if (typeof R.then == "function") return z(x, Il(R), I);
               if (R.$$typeof === B) return z(x, Rl(x, R), I);
               Dl(x, R)
           }
           return null
       }

       function w(x, R, I, V) {
           var j = R !== null ? R.key : null;
           if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint") return j !== null ? null : _(x, R, "" + I, V);
           if (typeof I == "object" && I !== null) {
               switch (I.$$typeof) {
                   case C:
                       return I.key === j ? A(x, R, I, V) : null;
                   case b:
                       return I.key === j ? D(x, R, I, V) : null;
                   case he:
                       return I = ni(I), w(x, R, I, V)
               }
               if (ut(I) || Ge(I)) return j !== null ? null : q(x, R, I, V, null);
               if (typeof I.then == "function") return w(x, R, Il(I), V);
               if (I.$$typeof === B) return w(x, R, Rl(x, I), V);
               Dl(x, I)
           }
           return null
       }

       function L(x, R, I, V, j) {
           if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint") return x = x.get(I) || null, _(R, x, "" + V, j);
           if (typeof V == "object" && V !== null) {
               switch (V.$$typeof) {
                   case C:
                       return x = x.get(V.key === null ? I : V.key) || null, A(R, x, V, j);
                   case b:
                       return x = x.get(V.key === null ? I : V.key) || null, D(R, x, V, j);
                   case he:
                       return V = ni(V), L(x, R, I, V, j)
               }
               if (ut(V) || Ge(V)) return x = x.get(I) || null, q(R, x, V, j, null);
               if (typeof V.then == "function") return L(x, R, I, Il(V), j);
               if (V.$$typeof === B) return L(x, R, I, Rl(R, V), j);
               Dl(R, V)
           }
           return null
       }

       function Q(x, R, I, V) {
           for (var j = null, ye = null, $ = R, re = R = 0, me = null; $ !== null && re < I.length; re++) {
               $.index > re ? (me = $, $ = null) : me = $.sibling;
               var ve = w(x, $, I[re], V);
               if (ve === null) {
                   $ === null && ($ = me);
                   break
               }
               e && $ && ve.alternate === null && n(x, $), R = p(ve, R, re), ye === null ? j = ve : ye.sibling = ve, ye = ve, $ = me
           }
           if (re === I.length) return o(x, $), ge && jt(x, re), j;
           if ($ === null) {
               for (; re < I.length; re++) $ = z(x, I[re], V), $ !== null && (R = p($, R, re), ye === null ? j = $ : ye.sibling = $, ye = $);
               return ge && jt(x, re), j
           }
           for ($ = s($); re < I.length; re++) me = L($, x, re, I[re], V), me !== null && (e && me.alternate !== null && $.delete(me.key === null ? re : me.key), R = p(me, R, re), ye === null ? j = me : ye.sibling = me, ye = me);
           return e && $.forEach(function(Pn) {
               return n(x, Pn)
           }), ge && jt(x, re), j
       }

       function ne(x, R, I, V) {
           if (I == null) throw Error(a(151));
           for (var j = null, ye = null, $ = R, re = R = 0, me = null, ve = I.next(); $ !== null && !ve.done; re++, ve = I.next()) {
               $.index > re ? (me = $, $ = null) : me = $.sibling;
               var Pn = w(x, $, ve.value, V);
               if (Pn === null) {
                   $ === null && ($ = me);
                   break
               }
               e && $ && Pn.alternate === null && n(x, $), R = p(Pn, R, re), ye === null ? j = Pn : ye.sibling = Pn, ye = Pn, $ = me
           }
           if (ve.done) return o(x, $), ge && jt(x, re), j;
           if ($ === null) {
               for (; !ve.done; re++, ve = I.next()) ve = z(x, ve.value, V), ve !== null && (R = p(ve, R, re), ye === null ? j = ve : ye.sibling = ve, ye = ve);
               return ge && jt(x, re), j
           }
           for ($ = s($); !ve.done; re++, ve = I.next()) ve = L($, x, re, ve.value, V), ve !== null && (e && ve.alternate !== null && $.delete(ve.key === null ? re : ve.key), R = p(ve, R, re), ye === null ? j = ve : ye.sibling = ve, ye = ve);
           return e && $.forEach(function(e0) {
               return n(x, e0)
           }), ge && jt(x, re), j
       }

       function Ie(x, R, I, V) {
           if (typeof I == "object" && I !== null && I.type === H && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
               switch (I.$$typeof) {
                   case C:
                       e: {
                           for (var j = I.key; R !== null;) {
                               if (R.key === j) {
                                   if (j = I.type, j === H) {
                                       if (R.tag === 7) {
                                           o(x, R.sibling), V = d(R, I.props.children), V.return = x, x = V;
                                           break e
                                       }
                                   } else if (R.elementType === j || typeof j == "object" && j !== null && j.$$typeof === he && ni(j) === R.type) {
                                       o(x, R.sibling), V = d(R, I.props), Ao(V, I), V.return = x, x = V;
                                       break e
                                   }
                                   o(x, R);
                                   break
                               } else n(x, R);
                               R = R.sibling
                           }
                           I.type === H ? (V = $n(I.props.children, x.mode, V, I.key), V.return = x, x = V) : (V = _l(I.type, I.key, I.props, null, x.mode, V), Ao(V, I), V.return = x, x = V)
                       }
                       return T(x);
                   case b:
                       e: {
                           for (j = I.key; R !== null;) {
                               if (R.key === j)
                                   if (R.tag === 4 && R.stateNode.containerInfo === I.containerInfo && R.stateNode.implementation === I.implementation) {
                                       o(x, R.sibling), V = d(R, I.children || []), V.return = x, x = V;
                                       break e
                                   } else {
                                       o(x, R);
                                       break
                                   }
                               else n(x, R);
                               R = R.sibling
                           }
                           V = Cs(I, x.mode, V),
                           V.return = x,
                           x = V
                       }
                       return T(x);
                   case he:
                       return I = ni(I), Ie(x, R, I, V)
               }
               if (ut(I)) return Q(x, R, I, V);
               if (Ge(I)) {
                   if (j = Ge(I), typeof j != "function") throw Error(a(150));
                   return I = j.call(I), ne(x, R, I, V)
               }
               if (typeof I.then == "function") return Ie(x, R, Il(I), V);
               if (I.$$typeof === B) return Ie(x, R, Rl(x, I), V);
               Dl(x, I)
           }
           return typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint" ? (I = "" + I, R !== null && R.tag === 6 ? (o(x, R.sibling), V = d(R, I), V.return = x, x = V) : (o(x, R), V = _s(I, x.mode, V), V.return = x, x = V), T(x)) : o(x, R)
       }
       return function(x, R, I, V) {
           try {
               Co = 0;
               var j = Ie(x, R, I, V);
               return wi = null, j
           } catch ($) {
               if ($ === bi || $ === Nl) throw $;
               var ye = Et(29, $, null, x.mode);
               return ye.lanes = V, ye.return = x, ye
           } finally {}
       }
   }
   var oi = tf(!0),
       nf = tf(!1),
       An = !1;

   function Gs(e) {
       e.updateQueue = {
           baseState: e.memoizedState,
           firstBaseUpdate: null,
           lastBaseUpdate: null,
           shared: {
               pending: null,
               lanes: 0,
               hiddenCallbacks: null
           },
           callbacks: null
       }
   }

   function Hs(e, n) {
       e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
           baseState: e.baseState,
           firstBaseUpdate: e.firstBaseUpdate,
           lastBaseUpdate: e.lastBaseUpdate,
           shared: e.shared,
           callbacks: null
       })
   }

   function Rn(e) {
       return {
           lane: e,
           tag: 0,
           payload: null,
           callback: null,
           next: null
       }
   }

   function Mn(e, n, o) {
       var s = e.updateQueue;
       if (s === null) return null;
       if (s = s.shared, (Se & 2) !== 0) {
           var d = s.pending;
           return d === null ? n.next = n : (n.next = d.next, d.next = n), s.pending = n, n = El(e), zc(e, null, o), n
       }
       return Sl(e, s, n, o), El(e)
   }

   function Ro(e, n, o) {
       if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194048) !== 0)) {
           var s = n.lanes;
           s &= e.pendingLanes, o |= s, n.lanes = o, Ku(e, o)
       }
   }

   function qs(e, n) {
       var o = e.updateQueue,
           s = e.alternate;
       if (s !== null && (s = s.updateQueue, o === s)) {
           var d = null,
               p = null;
           if (o = o.firstBaseUpdate, o !== null) {
               do {
                   var T = {
                       lane: o.lane,
                       tag: o.tag,
                       payload: o.payload,
                       callback: null,
                       next: null
                   };
                   p === null ? d = p = T : p = p.next = T, o = o.next
               } while (o !== null);
               p === null ? d = p = n : p = p.next = n
           } else d = p = n;
           o = {
               baseState: s.baseState,
               firstBaseUpdate: d,
               lastBaseUpdate: p,
               shared: s.shared,
               callbacks: s.callbacks
           }, e.updateQueue = o;
           return
       }
       e = o.lastBaseUpdate, e === null ? o.firstBaseUpdate = n : e.next = n, o.lastBaseUpdate = n
   }
   var Vs = !1;

   function Mo() {
       if (Vs) {
           var e = Di;
           if (e !== null) throw e
       }
   }

   function No(e, n, o, s) {
       Vs = !1;
       var d = e.updateQueue;
       An = !1;
       var p = d.firstBaseUpdate,
           T = d.lastBaseUpdate,
           _ = d.shared.pending;
       if (_ !== null) {
           d.shared.pending = null;
           var A = _,
               D = A.next;
           A.next = null, T === null ? p = D : T.next = D, T = A;
           var q = e.alternate;
           q !== null && (q = q.updateQueue, _ = q.lastBaseUpdate, _ !== T && (_ === null ? q.firstBaseUpdate = D : _.next = D, q.lastBaseUpdate = A))
       }
       if (p !== null) {
           var z = d.baseState;
           T = 0, q = D = A = null, _ = p;
           do {
               var w = _.lane & -536870913,
                   L = w !== _.lane;
               if (L ? (pe & w) === w : (s & w) === w) {
                   w !== 0 && w === Ii && (Vs = !0), q !== null && (q = q.next = {
                       lane: 0,
                       tag: _.tag,
                       payload: _.payload,
                       callback: null,
                       next: null
                   });
                   e: {
                       var Q = e,
                           ne = _;w = n;
                       var Ie = o;
                       switch (ne.tag) {
                           case 1:
                               if (Q = ne.payload, typeof Q == "function") {
                                   z = Q.call(Ie, z, w);
                                   break e
                               }
                               z = Q;
                               break e;
                           case 3:
                               Q.flags = Q.flags & -65537 | 128;
                           case 0:
                               if (Q = ne.payload, w = typeof Q == "function" ? Q.call(Ie, z, w) : Q, w == null) break e;
                               z = S({}, z, w);
                               break e;
                           case 2:
                               An = !0
                       }
                   }
                   w = _.callback, w !== null && (e.flags |= 64, L && (e.flags |= 8192), L = d.callbacks, L === null ? d.callbacks = [w] : L.push(w))
               } else L = {
                   lane: w,
                   tag: _.tag,
                   payload: _.payload,
                   callback: _.callback,
                   next: null
               }, q === null ? (D = q = L, A = z) : q = q.next = L, T |= w;
               if (_ = _.next, _ === null) {
                   if (_ = d.shared.pending, _ === null) break;
                   L = _, _ = L.next, L.next = null, d.lastBaseUpdate = L, d.shared.pending = null
               }
           } while (!0);
           q === null && (A = z), d.baseState = A, d.firstBaseUpdate = D, d.lastBaseUpdate = q, p === null && (d.shared.lanes = 0), bn |= T, e.lanes = T, e.memoizedState = z
       }
   }

   function of(e, n) {
       if (typeof e != "function") throw Error(a(191, e));
       e.call(n)
   }

   function lf(e, n) {
       var o = e.callbacks;
       if (o !== null)
           for (e.callbacks = null, e = 0; e < o.length; e++) of(o[e], n)
   }
   var Ui = M(null),
       bl = M(0);

   function af(e, n) {
       e = fn, Y(bl, e), Y(Ui, n), fn = e | n.baseLanes
   }

   function zs() {
       Y(bl, fn), Y(Ui, Ui.current)
   }

   function ks() {
       fn = bl.current, k(Ui), k(bl)
   }
   var _t = M(null),
       Lt = null;

   function Nn(e) {
       var n = e.alternate;
       Y(ze, ze.current & 1), Y(_t, e), Lt === null && (n === null || Ui.current !== null || n.memoizedState !== null) && (Lt = e)
   }

   function Ps(e) {
       Y(ze, ze.current), Y(_t, e), Lt === null && (Lt = e)
   }

   function sf(e) {
       e.tag === 22 ? (Y(ze, ze.current), Y(_t, e), Lt === null && (Lt = e)) : xn()
   }

   function xn() {
       Y(ze, ze.current), Y(_t, _t.current)
   }

   function Ct(e) {
       k(_t), Lt === e && (Lt = null), k(ze)
   }
   var ze = M(0);

   function wl(e) {
       for (var n = e; n !== null;) {
           if (n.tag === 13) {
               var o = n.memoizedState;
               if (o !== null && (o = o.dehydrated, o === null || Kr(o) || Xr(o))) return n
           } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
               if ((n.flags & 128) !== 0) return n
           } else if (n.child !== null) {
               n.child.return = n, n = n.child;
               continue
           }
           if (n === e) break;
           for (; n.sibling === null;) {
               if (n.return === null || n.return === e) return null;
               n = n.return
           }
           n.sibling.return = n.return, n = n.sibling
       }
       return null
   }
   var nn = 0,
       se = null,
       Ne = null,
       Fe = null,
       Ul = !1,
       Li = !1,
       li = !1,
       Ll = 0,
       xo = 0,
       Gi = null,
       Fy = 0;

   function He() {
       throw Error(a(321))
   }

   function Bs(e, n) {
       if (n === null) return !1;
       for (var o = 0; o < n.length && o < e.length; o++)
           if (!St(e[o], n[o])) return !1;
       return !0
   }

   function Os(e, n, o, s, d, p) {
       return nn = p, se = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, G.H = e === null || e.memoizedState === null ? Ff : or, li = !1, p = o(s, d), li = !1, Li && (p = uf(n, o, s, d)), rf(e), p
   }

   function rf(e) {
       G.H = bo;
       var n = Ne !== null && Ne.next !== null;
       if (nn = 0, Fe = Ne = se = null, Ul = !1, xo = 0, Gi = null, n) throw Error(a(300));
       e === null || Ye || (e = e.dependencies, e !== null && Al(e) && (Ye = !0))
   }

   function uf(e, n, o, s) {
       se = e;
       var d = 0;
       do {
           if (Li && (Gi = null), xo = 0, Li = !1, 25 <= d) throw Error(a(301));
           if (d += 1, Fe = Ne = null, e.updateQueue != null) {
               var p = e.updateQueue;
               p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0)
           }
           G.H = Yf, p = n(o, s)
       } while (Li);
       return p
   }

   function Yy() {
       var e = G.H,
           n = e.useState()[0];
       return n = typeof n.then == "function" ? Io(n) : n, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (se.flags |= 1024), n
   }

   function Fs() {
       var e = Ll !== 0;
       return Ll = 0, e
   }

   function Ys(e, n, o) {
       n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~o
   }

   function Js(e) {
       if (Ul) {
           for (e = e.memoizedState; e !== null;) {
               var n = e.queue;
               n !== null && (n.pending = null), e = e.next
           }
           Ul = !1
       }
       nn = 0, Fe = Ne = se = null, Li = !1, xo = Ll = 0, Gi = null
   }

   function at() {
       var e = {
           memoizedState: null,
           baseState: null,
           baseQueue: null,
           queue: null,
           next: null
       };
       return Fe === null ? se.memoizedState = Fe = e : Fe = Fe.next = e, Fe
   }

   function ke() {
       if (Ne === null) {
           var e = se.alternate;
           e = e !== null ? e.memoizedState : null
       } else e = Ne.next;
       var n = Fe === null ? se.memoizedState : Fe.next;
       if (n !== null) Fe = n, Ne = e;
       else {
           if (e === null) throw se.alternate === null ? Error(a(467)) : Error(a(310));
           Ne = e, e = {
               memoizedState: Ne.memoizedState,
               baseState: Ne.baseState,
               baseQueue: Ne.baseQueue,
               queue: Ne.queue,
               next: null
           }, Fe === null ? se.memoizedState = Fe = e : Fe = Fe.next = e
       }
       return Fe
   }

   function Gl() {
       return {
           lastEffect: null,
           events: null,
           stores: null,
           memoCache: null
       }
   }

   function Io(e) {
       var n = xo;
       return xo += 1, Gi === null && (Gi = []), e = Wc(Gi, e, n), n = se, (Fe === null ? n.memoizedState : Fe.next) === null && (n = n.alternate, G.H = n === null || n.memoizedState === null ? Ff : or), e
   }

   function Hl(e) {
       if (e !== null && typeof e == "object") {
           if (typeof e.then == "function") return Io(e);
           if (e.$$typeof === B) return et(e)
       }
       throw Error(a(438, String(e)))
   }

   function Ks(e) {
       var n = null,
           o = se.updateQueue;
       if (o !== null && (n = o.memoCache), n == null) {
           var s = se.alternate;
           s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (n = {
               data: s.data.map(function(d) {
                   return d.slice()
               }),
               index: 0
           })))
       }
       if (n == null && (n = {
               data: [],
               index: 0
           }), o === null && (o = Gl(), se.updateQueue = o), o.memoCache = n, o = n.data[n.index], o === void 0)
           for (o = n.data[n.index] = Array(e), s = 0; s < e; s++) o[s] = de;
       return n.index++, o
   }

   function on(e, n) {
       return typeof n == "function" ? n(e) : n
   }

   function ql(e) {
       var n = ke();
       return Xs(n, Ne, e)
   }

   function Xs(e, n, o) {
       var s = e.queue;
       if (s === null) throw Error(a(311));
       s.lastRenderedReducer = o;
       var d = e.baseQueue,
           p = s.pending;
       if (p !== null) {
           if (d !== null) {
               var T = d.next;
               d.next = p.next, p.next = T
           }
           n.baseQueue = d = p, s.pending = null
       }
       if (p = e.baseState, d === null) e.memoizedState = p;
       else {
           n = d.next;
           var _ = T = null,
               A = null,
               D = n,
               q = !1;
           do {
               var z = D.lane & -536870913;
               if (z !== D.lane ? (pe & z) === z : (nn & z) === z) {
                   var w = D.revertLane;
                   if (w === 0) A !== null && (A = A.next = {
                       lane: 0,
                       revertLane: 0,
                       gesture: null,
                       action: D.action,
                       hasEagerState: D.hasEagerState,
                       eagerState: D.eagerState,
                       next: null
                   }), z === Ii && (q = !0);
                   else if ((nn & w) === w) {
                       D = D.next, w === Ii && (q = !0);
                       continue
                   } else z = {
                       lane: 0,
                       revertLane: D.revertLane,
                       gesture: null,
                       action: D.action,
                       hasEagerState: D.hasEagerState,
                       eagerState: D.eagerState,
                       next: null
                   }, A === null ? (_ = A = z, T = p) : A = A.next = z, se.lanes |= w, bn |= w;
                   z = D.action, li && o(p, z), p = D.hasEagerState ? D.eagerState : o(p, z)
               } else w = {
                   lane: z,
                   revertLane: D.revertLane,
                   gesture: D.gesture,
                   action: D.action,
                   hasEagerState: D.hasEagerState,
                   eagerState: D.eagerState,
                   next: null
               }, A === null ? (_ = A = w, T = p) : A = A.next = w, se.lanes |= z, bn |= z;
               D = D.next
           } while (D !== null && D !== n);
           if (A === null ? T = p : A.next = _, !St(p, e.memoizedState) && (Ye = !0, q && (o = Di, o !== null))) throw o;
           e.memoizedState = p, e.baseState = T, e.baseQueue = A, s.lastRenderedState = p
       }
       return d === null && (s.lanes = 0), [e.memoizedState, s.dispatch]
   }

   function Qs(e) {
       var n = ke(),
           o = n.queue;
       if (o === null) throw Error(a(311));
       o.lastRenderedReducer = e;
       var s = o.dispatch,
           d = o.pending,
           p = n.memoizedState;
       if (d !== null) {
           o.pending = null;
           var T = d = d.next;
           do p = e(p, T.action), T = T.next; while (T !== d);
           St(p, n.memoizedState) || (Ye = !0), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), o.lastRenderedState = p
       }
       return [p, s]
   }

   function cf(e, n, o) {
       var s = se,
           d = ke(),
           p = ge;
       if (p) {
           if (o === void 0) throw Error(a(407));
           o = o()
       } else o = n();
       var T = !St((Ne || d).memoizedState, o);
       if (T && (d.memoizedState = o, Ye = !0), d = d.queue, Ws(pf.bind(null, s, d, e), [e]), d.getSnapshot !== n || T || Fe !== null && Fe.memoizedState.tag & 1) {
           if (s.flags |= 2048, Hi(9, {
                   destroy: void 0
               }, df.bind(null, s, d, o, n), null), be === null) throw Error(a(349));
           p || (nn & 127) !== 0 || ff(s, n, o)
       }
       return o
   }

   function ff(e, n, o) {
       e.flags |= 16384, e = {
           getSnapshot: n,
           value: o
       }, n = se.updateQueue, n === null ? (n = Gl(), se.updateQueue = n, n.stores = [e]) : (o = n.stores, o === null ? n.stores = [e] : o.push(e))
   }

   function df(e, n, o, s) {
       n.value = o, n.getSnapshot = s, mf(n) && hf(e)
   }

   function pf(e, n, o) {
       return o(function() {
           mf(n) && hf(e)
       })
   }

   function mf(e) {
       var n = e.getSnapshot;
       e = e.value;
       try {
           var o = n();
           return !St(e, o)
       } catch {
           return !0
       }
   }

   function hf(e) {
       var n = Zn(e, 2);
       n !== null && gt(n, e, 2)
   }

   function Zs(e) {
       var n = at();
       if (typeof e == "function") {
           var o = e;
           if (e = o(), li) {
               yn(!0);
               try {
                   o()
               } finally {
                   yn(!1)
               }
           }
       }
       return n.memoizedState = n.baseState = e, n.queue = {
           pending: null,
           lanes: 0,
           dispatch: null,
           lastRenderedReducer: on,
           lastRenderedState: e
       }, n
   }

   function gf(e, n, o, s) {
       return e.baseState = o, Xs(e, Ne, typeof s == "function" ? s : on)
   }

   function Jy(e, n, o, s, d) {
       if (kl(e)) throw Error(a(485));
       if (e = n.action, e !== null) {
           var p = {
               payload: d,
               action: e,
               next: null,
               isTransition: !0,
               status: "pending",
               value: null,
               reason: null,
               listeners: [],
               then: function(T) {
                   p.listeners.push(T)
               }
           };
           G.T !== null ? o(!0) : p.isTransition = !1, s(p), o = n.pending, o === null ? (p.next = n.pending = p, yf(n, p)) : (p.next = o.next, n.pending = o.next = p)
       }
   }

   function yf(e, n) {
       var o = n.action,
           s = n.payload,
           d = e.state;
       if (n.isTransition) {
           var p = G.T,
               T = {};
           G.T = T;
           try {
               var _ = o(d, s),
                   A = G.S;
               A !== null && A(T, _), vf(e, n, _)
           } catch (D) {
               $s(e, n, D)
           } finally {
               p !== null && T.types !== null && (p.types = T.types), G.T = p
           }
       } else try {
           p = o(d, s), vf(e, n, p)
       } catch (D) {
           $s(e, n, D)
       }
   }

   function vf(e, n, o) {
       o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(function(s) {
           Tf(e, n, s)
       }, function(s) {
           return $s(e, n, s)
       }) : Tf(e, n, o)
   }

   function Tf(e, n, o) {
       n.status = "fulfilled", n.value = o, Sf(n), e.state = o, n = e.pending, n !== null && (o = n.next, o === n ? e.pending = null : (o = o.next, n.next = o, yf(e, o)))
   }

   function $s(e, n, o) {
       var s = e.pending;
       if (e.pending = null, s !== null) {
           s = s.next;
           do n.status = "rejected", n.reason = o, Sf(n), n = n.next; while (n !== s)
       }
       e.action = null
   }

   function Sf(e) {
       e = e.listeners;
       for (var n = 0; n < e.length; n++)(0, e[n])()
   }

   function Ef(e, n) {
       return n
   }

   function _f(e, n) {
       if (ge) {
           var o = be.formState;
           if (o !== null) {
               e: {
                   var s = se;
                   if (ge) {
                       if (we) {
                           t: {
                               for (var d = we, p = Ut; d.nodeType !== 8;) {
                                   if (!p) {
                                       d = null;
                                       break t
                                   }
                                   if (d = Gt(d.nextSibling), d === null) {
                                       d = null;
                                       break t
                                   }
                               }
                               p = d.data,
                               d = p === "F!" || p === "F" ? d : null
                           }
                           if (d) {
                               we = Gt(d.nextSibling), s = d.data === "F!";
                               break e
                           }
                       }
                       _n(s)
                   }
                   s = !1
               }
               s && (n = o[0])
           }
       }
       return o = at(), o.memoizedState = o.baseState = n, s = {
           pending: null,
           lanes: 0,
           dispatch: null,
           lastRenderedReducer: Ef,
           lastRenderedState: n
       }, o.queue = s, o = Pf.bind(null, se, s), s.dispatch = o, s = Zs(!1), p = ir.bind(null, se, !1, s.queue), s = at(), d = {
           state: n,
           dispatch: null,
           action: e,
           pending: null
       }, s.queue = d, o = Jy.bind(null, se, d, p, o), d.dispatch = o, s.memoizedState = e, [n, o, !1]
   }

   function Cf(e) {
       var n = ke();
       return Af(n, Ne, e)
   }

   function Af(e, n, o) {
       if (n = Xs(e, n, Ef)[0], e = ql(on)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
           var s = Io(n)
       } catch (T) {
           throw T === bi ? Nl : T
       } else s = n;
       n = ke();
       var d = n.queue,
           p = d.dispatch;
       return o !== n.memoizedState && (se.flags |= 2048, Hi(9, {
           destroy: void 0
       }, Ky.bind(null, d, o), null)), [s, p, e]
   }

   function Ky(e, n) {
       e.action = n
   }

   function Rf(e) {
       var n = ke(),
           o = Ne;
       if (o !== null) return Af(n, o, e);
       ke(), n = n.memoizedState, o = ke();
       var s = o.queue.dispatch;
       return o.memoizedState = e, [n, s, !1]
   }

   function Hi(e, n, o, s) {
       return e = {
           tag: e,
           create: o,
           deps: s,
           inst: n,
           next: null
       }, n = se.updateQueue, n === null && (n = Gl(), se.updateQueue = n), o = n.lastEffect, o === null ? n.lastEffect = e.next = e : (s = o.next, o.next = e, e.next = s, n.lastEffect = e), e
   }

   function Mf() {
       return ke().memoizedState
   }

   function Vl(e, n, o, s) {
       var d = at();
       se.flags |= e, d.memoizedState = Hi(1 | n, {
           destroy: void 0
       }, o, s === void 0 ? null : s)
   }

   function zl(e, n, o, s) {
       var d = ke();
       s = s === void 0 ? null : s;
       var p = d.memoizedState.inst;
       Ne !== null && s !== null && Bs(s, Ne.memoizedState.deps) ? d.memoizedState = Hi(n, p, o, s) : (se.flags |= e, d.memoizedState = Hi(1 | n, p, o, s))
   }

   function Nf(e, n) {
       Vl(8390656, 8, e, n)
   }

   function Ws(e, n) {
       zl(2048, 8, e, n)
   }

   function Xy(e) {
       se.flags |= 4;
       var n = se.updateQueue;
       if (n === null) n = Gl(), se.updateQueue = n, n.events = [e];
       else {
           var o = n.events;
           o === null ? n.events = [e] : o.push(e)
       }
   }

   function xf(e) {
       var n = ke().memoizedState;
       return Xy({
               ref: n,
               nextImpl: e
           }),
           function() {
               if ((Se & 2) !== 0) throw Error(a(440));
               return n.impl.apply(void 0, arguments)
           }
   }

   function If(e, n) {
       return zl(4, 2, e, n)
   }

   function Df(e, n) {
       return zl(4, 4, e, n)
   }

   function bf(e, n) {
       if (typeof n == "function") {
           e = e();
           var o = n(e);
           return function() {
               typeof o == "function" ? o() : n(null)
           }
       }
       if (n != null) return e = e(), n.current = e,
           function() {
               n.current = null
           }
   }

   function wf(e, n, o) {
       o = o != null ? o.concat([e]) : null, zl(4, 4, bf.bind(null, n, e), o)
   }

   function js() {}

   function Uf(e, n) {
       var o = ke();
       n = n === void 0 ? null : n;
       var s = o.memoizedState;
       return n !== null && Bs(n, s[1]) ? s[0] : (o.memoizedState = [e, n], e)
   }

   function Lf(e, n) {
       var o = ke();
       n = n === void 0 ? null : n;
       var s = o.memoizedState;
       if (n !== null && Bs(n, s[1])) return s[0];
       if (s = e(), li) {
           yn(!0);
           try {
               e()
           } finally {
               yn(!1)
           }
       }
       return o.memoizedState = [s, n], s
   }

   function er(e, n, o) {
       return o === void 0 || (nn & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = o, e = Gd(), se.lanes |= e, bn |= e, o)
   }

   function Gf(e, n, o, s) {
       return St(o, n) ? o : Ui.current !== null ? (e = er(e, o, s), St(e, n) || (Ye = !0), e) : (nn & 42) === 0 || (nn & 1073741824) !== 0 && (pe & 261930) === 0 ? (Ye = !0, e.memoizedState = o) : (e = Gd(), se.lanes |= e, bn |= e, n)
   }

   function Hf(e, n, o, s, d) {
       var p = O.p;
       O.p = p !== 0 && 8 > p ? p : 8;
       var T = G.T,
           _ = {};
       G.T = _, ir(e, !1, n, o);
       try {
           var A = d(),
               D = G.S;
           if (D !== null && D(_, A), A !== null && typeof A == "object" && typeof A.then == "function") {
               var q = Oy(A, s);
               Do(e, n, q, Mt(e))
           } else Do(e, n, s, Mt(e))
       } catch (z) {
           Do(e, n, {
               then: function() {},
               status: "rejected",
               reason: z
           }, Mt())
       } finally {
           O.p = p, T !== null && _.types !== null && (T.types = _.types), G.T = T
       }
   }

   function Qy() {}

   function tr(e, n, o, s) {
       if (e.tag !== 5) throw Error(a(476));
       var d = qf(e).queue;
       Hf(e, d, n, ie, o === null ? Qy : function() {
           return Vf(e), o(s)
       })
   }

   function qf(e) {
       var n = e.memoizedState;
       if (n !== null) return n;
       n = {
           memoizedState: ie,
           baseState: ie,
           baseQueue: null,
           queue: {
               pending: null,
               lanes: 0,
               dispatch: null,
               lastRenderedReducer: on,
               lastRenderedState: ie
           },
           next: null
       };
       var o = {};
       return n.next = {
           memoizedState: o,
           baseState: o,
           baseQueue: null,
           queue: {
               pending: null,
               lanes: 0,
               dispatch: null,
               lastRenderedReducer: on,
               lastRenderedState: o
           },
           next: null
       }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n
   }

   function Vf(e) {
       var n = qf(e);
       n.next === null && (n = e.alternate.memoizedState), Do(e, n.next.queue, {}, Mt())
   }

   function nr() {
       return et(Ko)
   }

   function zf() {
       return ke().memoizedState
   }

   function kf() {
       return ke().memoizedState
   }

   function Zy(e) {
       for (var n = e.return; n !== null;) {
           switch (n.tag) {
               case 24:
               case 3:
                   var o = Mt();
                   e = Rn(o);
                   var s = Mn(n, e, o);
                   s !== null && (gt(s, n, o), Ro(s, n, o)), n = {
                       cache: bs()
                   }, e.payload = n;
                   return
           }
           n = n.return
       }
   }

   function $y(e, n, o) {
       var s = Mt();
       o = {
           lane: s,
           revertLane: 0,
           gesture: null,
           action: o,
           hasEagerState: !1,
           eagerState: null,
           next: null
       }, kl(e) ? Bf(n, o) : (o = Ss(e, n, o, s), o !== null && (gt(o, e, s), Of(o, n, s)))
   }

   function Pf(e, n, o) {
       var s = Mt();
       Do(e, n, o, s)
   }

   function Do(e, n, o, s) {
       var d = {
           lane: s,
           revertLane: 0,
           gesture: null,
           action: o,
           hasEagerState: !1,
           eagerState: null,
           next: null
       };
       if (kl(e)) Bf(n, d);
       else {
           var p = e.alternate;
           if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
               var T = n.lastRenderedState,
                   _ = p(T, o);
               if (d.hasEagerState = !0, d.eagerState = _, St(_, T)) return Sl(e, n, d, 0), be === null && Tl(), !1
           } catch {} finally {}
           if (o = Ss(e, n, d, s), o !== null) return gt(o, e, s), Of(o, n, s), !0
       }
       return !1
   }

   function ir(e, n, o, s) {
       if (s = {
               lane: 2,
               revertLane: Gr(),
               gesture: null,
               action: s,
               hasEagerState: !1,
               eagerState: null,
               next: null
           }, kl(e)) {
           if (n) throw Error(a(479))
       } else n = Ss(e, o, s, 2), n !== null && gt(n, e, 2)
   }

   function kl(e) {
       var n = e.alternate;
       return e === se || n !== null && n === se
   }

   function Bf(e, n) {
       Li = Ul = !0;
       var o = e.pending;
       o === null ? n.next = n : (n.next = o.next, o.next = n), e.pending = n
   }

   function Of(e, n, o) {
       if ((o & 4194048) !== 0) {
           var s = n.lanes;
           s &= e.pendingLanes, o |= s, n.lanes = o, Ku(e, o)
       }
   }
   var bo = {
       readContext: et,
       use: Hl,
       useCallback: He,
       useContext: He,
       useEffect: He,
       useImperativeHandle: He,
       useLayoutEffect: He,
       useInsertionEffect: He,
       useMemo: He,
       useReducer: He,
       useRef: He,
       useState: He,
       useDebugValue: He,
       useDeferredValue: He,
       useTransition: He,
       useSyncExternalStore: He,
       useId: He,
       useHostTransitionStatus: He,
       useFormState: He,
       useActionState: He,
       useOptimistic: He,
       useMemoCache: He,
       useCacheRefresh: He
   };
   bo.useEffectEvent = He;
   var Ff = {
           readContext: et,
           use: Hl,
           useCallback: function(e, n) {
               return at().memoizedState = [e, n === void 0 ? null : n], e
           },
           useContext: et,
           useEffect: Nf,
           useImperativeHandle: function(e, n, o) {
               o = o != null ? o.concat([e]) : null, Vl(4194308, 4, bf.bind(null, n, e), o)
           },
           useLayoutEffect: function(e, n) {
               return Vl(4194308, 4, e, n)
           },
           useInsertionEffect: function(e, n) {
               Vl(4, 2, e, n)
           },
           useMemo: function(e, n) {
               var o = at();
               n = n === void 0 ? null : n;
               var s = e();
               if (li) {
                   yn(!0);
                   try {
                       e()
                   } finally {
                       yn(!1)
                   }
               }
               return o.memoizedState = [s, n], s
           },
           useReducer: function(e, n, o) {
               var s = at();
               if (o !== void 0) {
                   var d = o(n);
                   if (li) {
                       yn(!0);
                       try {
                           o(n)
                       } finally {
                           yn(!1)
                       }
                   }
               } else d = n;
               return s.memoizedState = s.baseState = d, e = {
                   pending: null,
                   lanes: 0,
                   dispatch: null,
                   lastRenderedReducer: e,
                   lastRenderedState: d
               }, s.queue = e, e = e.dispatch = $y.bind(null, se, e), [s.memoizedState, e]
           },
           useRef: function(e) {
               var n = at();
               return e = {
                   current: e
               }, n.memoizedState = e
           },
           useState: function(e) {
               e = Zs(e);
               var n = e.queue,
                   o = Pf.bind(null, se, n);
               return n.dispatch = o, [e.memoizedState, o]
           },
           useDebugValue: js,
           useDeferredValue: function(e, n) {
               var o = at();
               return er(o, e, n)
           },
           useTransition: function() {
               var e = Zs(!1);
               return e = Hf.bind(null, se, e.queue, !0, !1), at().memoizedState = e, [!1, e]
           },
           useSyncExternalStore: function(e, n, o) {
               var s = se,
                   d = at();
               if (ge) {
                   if (o === void 0) throw Error(a(407));
                   o = o()
               } else {
                   if (o = n(), be === null) throw Error(a(349));
                   (pe & 127) !== 0 || ff(s, n, o)
               }
               d.memoizedState = o;
               var p = {
                   value: o,
                   getSnapshot: n
               };
               return d.queue = p, Nf(pf.bind(null, s, p, e), [e]), s.flags |= 2048, Hi(9, {
                   destroy: void 0
               }, df.bind(null, s, p, o, n), null), o
           },
           useId: function() {
               var e = at(),
                   n = be.identifierPrefix;
               if (ge) {
                   var o = Jt,
                       s = Yt;
                   o = (s & ~(1 << 32 - Tt(s) - 1)).toString(32) + o, n = "_" + n + "R_" + o, o = Ll++, 0 < o && (n += "H" + o.toString(32)), n += "_"
               } else o = Fy++, n = "_" + n + "r_" + o.toString(32) + "_";
               return e.memoizedState = n
           },
           useHostTransitionStatus: nr,
           useFormState: _f,
           useActionState: _f,
           useOptimistic: function(e) {
               var n = at();
               n.memoizedState = n.baseState = e;
               var o = {
                   pending: null,
                   lanes: 0,
                   dispatch: null,
                   lastRenderedReducer: null,
                   lastRenderedState: null
               };
               return n.queue = o, n = ir.bind(null, se, !0, o), o.dispatch = n, [e, n]
           },
           useMemoCache: Ks,
           useCacheRefresh: function() {
               return at().memoizedState = Zy.bind(null, se)
           },
           useEffectEvent: function(e) {
               var n = at(),
                   o = {
                       impl: e
                   };
               return n.memoizedState = o,
                   function() {
                       if ((Se & 2) !== 0) throw Error(a(440));
                       return o.impl.apply(void 0, arguments)
                   }
           }
       },
       or = {
           readContext: et,
           use: Hl,
           useCallback: Uf,
           useContext: et,
           useEffect: Ws,
           useImperativeHandle: wf,
           useInsertionEffect: If,
           useLayoutEffect: Df,
           useMemo: Lf,
           useReducer: ql,
           useRef: Mf,
           useState: function() {
               return ql(on)
           },
           useDebugValue: js,
           useDeferredValue: function(e, n) {
               var o = ke();
               return Gf(o, Ne.memoizedState, e, n)
           },
           useTransition: function() {
               var e = ql(on)[0],
                   n = ke().memoizedState;
               return [typeof e == "boolean" ? e : Io(e), n]
           },
           useSyncExternalStore: cf,
           useId: zf,
           useHostTransitionStatus: nr,
           useFormState: Cf,
           useActionState: Cf,
           useOptimistic: function(e, n) {
               var o = ke();
               return gf(o, Ne, e, n)
           },
           useMemoCache: Ks,
           useCacheRefresh: kf
       };
   or.useEffectEvent = xf;
   var Yf = {
       readContext: et,
       use: Hl,
       useCallback: Uf,
       useContext: et,
       useEffect: Ws,
       useImperativeHandle: wf,
       useInsertionEffect: If,
       useLayoutEffect: Df,
       useMemo: Lf,
       useReducer: Qs,
       useRef: Mf,
       useState: function() {
           return Qs(on)
       },
       useDebugValue: js,
       useDeferredValue: function(e, n) {
           var o = ke();
           return Ne === null ? er(o, e, n) : Gf(o, Ne.memoizedState, e, n)
       },
       useTransition: function() {
           var e = Qs(on)[0],
               n = ke().memoizedState;
           return [typeof e == "boolean" ? e : Io(e), n]
       },
       useSyncExternalStore: cf,
       useId: zf,
       useHostTransitionStatus: nr,
       useFormState: Rf,
       useActionState: Rf,
       useOptimistic: function(e, n) {
           var o = ke();
           return Ne !== null ? gf(o, Ne, e, n) : (o.baseState = e, [e, o.queue.dispatch])
       },
       useMemoCache: Ks,
       useCacheRefresh: kf
   };
   Yf.useEffectEvent = xf;

   function lr(e, n, o, s) {
       n = e.memoizedState, o = o(s, n), o = o == null ? n : S({}, n, o), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o)
   }
   var ar = {
       enqueueSetState: function(e, n, o) {
           e = e._reactInternals;
           var s = Mt(),
               d = Rn(s);
           d.payload = n, o != null && (d.callback = o), n = Mn(e, d, s), n !== null && (gt(n, e, s), Ro(n, e, s))
       },
       enqueueReplaceState: function(e, n, o) {
           e = e._reactInternals;
           var s = Mt(),
               d = Rn(s);
           d.tag = 1, d.payload = n, o != null && (d.callback = o), n = Mn(e, d, s), n !== null && (gt(n, e, s), Ro(n, e, s))
       },
       enqueueForceUpdate: function(e, n) {
           e = e._reactInternals;
           var o = Mt(),
               s = Rn(o);
           s.tag = 2, n != null && (s.callback = n), n = Mn(e, s, o), n !== null && (gt(n, e, o), Ro(n, e, o))
       }
   };

   function Jf(e, n, o, s, d, p, T) {
       return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, p, T) : n.prototype && n.prototype.isPureReactComponent ? !yo(o, s) || !yo(d, p) : !0
   }

   function Kf(e, n, o, s) {
       e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, s), n.state !== e && ar.enqueueReplaceState(n, n.state, null)
   }

   function ai(e, n) {
       var o = n;
       if ("ref" in n) {
           o = {};
           for (var s in n) s !== "ref" && (o[s] = n[s])
       }
       if (e = e.defaultProps) {
           o === n && (o = S({}, o));
           for (var d in e) o[d] === void 0 && (o[d] = e[d])
       }
       return o
   }

   function Xf(e) {
       vl(e)
   }

   function Qf(e) {
       console.error(e)
   }

   function Zf(e) {
       vl(e)
   }

   function Pl(e, n) {
       try {
           var o = e.onUncaughtError;
           o(n.value, {
               componentStack: n.stack
           })
       } catch (s) {
           setTimeout(function() {
               throw s
           })
       }
   }

   function $f(e, n, o) {
       try {
           var s = e.onCaughtError;
           s(o.value, {
               componentStack: o.stack,
               errorBoundary: n.tag === 1 ? n.stateNode : null
           })
       } catch (d) {
           setTimeout(function() {
               throw d
           })
       }
   }

   function sr(e, n, o) {
       return o = Rn(o), o.tag = 3, o.payload = {
           element: null
       }, o.callback = function() {
           Pl(e, n)
       }, o
   }

   function Wf(e) {
       return e = Rn(e), e.tag = 3, e
   }

   function jf(e, n, o, s) {
       var d = o.type.getDerivedStateFromError;
       if (typeof d == "function") {
           var p = s.value;
           e.payload = function() {
               return d(p)
           }, e.callback = function() {
               $f(n, o, s)
           }
       }
       var T = o.stateNode;
       T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
           $f(n, o, s), typeof d != "function" && (wn === null ? wn = new Set([this]) : wn.add(this));
           var _ = s.stack;
           this.componentDidCatch(s.value, {
               componentStack: _ !== null ? _ : ""
           })
       })
   }

   function Wy(e, n, o, s, d) {
       if (o.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
           if (n = o.alternate, n !== null && xi(n, o, d, !0), o = _t.current, o !== null) {
               switch (o.tag) {
                   case 31:
                   case 13:
                       return Lt === null ? jl() : o.alternate === null && qe === 0 && (qe = 3), o.flags &= -257, o.flags |= 65536, o.lanes = d, s === xl ? o.flags |= 16384 : (n = o.updateQueue, n === null ? o.updateQueue = new Set([s]) : n.add(s), wr(e, s, d)), !1;
                   case 22:
                       return o.flags |= 65536, s === xl ? o.flags |= 16384 : (n = o.updateQueue, n === null ? (n = {
                           transitions: null,
                           markerInstances: null,
                           retryQueue: new Set([s])
                       }, o.updateQueue = n) : (o = n.retryQueue, o === null ? n.retryQueue = new Set([s]) : o.add(s)), wr(e, s, d)), !1
               }
               throw Error(a(435, o.tag))
           }
           return wr(e, s, d), jl(), !1
       }
       if (ge) return n = _t.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = d, s !== Ms && (e = Error(a(422), {
           cause: s
       }), So(Dt(e, o)))) : (s !== Ms && (n = Error(a(423), {
           cause: s
       }), So(Dt(n, o))), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, s = Dt(s, o), d = sr(e.stateNode, s, d), qs(e, d), qe !== 4 && (qe = 2)), !1;
       var p = Error(a(520), {
           cause: s
       });
       if (p = Dt(p, o), zo === null ? zo = [p] : zo.push(p), qe !== 4 && (qe = 2), n === null) return !0;
       s = Dt(s, o), o = n;
       do {
           switch (o.tag) {
               case 3:
                   return o.flags |= 65536, e = d & -d, o.lanes |= e, e = sr(o.stateNode, s, e), qs(o, e), !1;
               case 1:
                   if (n = o.type, p = o.stateNode, (o.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (wn === null || !wn.has(p)))) return o.flags |= 65536, d &= -d, o.lanes |= d, d = Wf(d), jf(d, e, o, s), qs(o, d), !1
           }
           o = o.return
       } while (o !== null);
       return !1
   }
   var rr = Error(a(461)),
       Ye = !1;

   function tt(e, n, o, s) {
       n.child = e === null ? nf(n, null, o, s) : oi(n, e.child, o, s)
   }

   function ed(e, n, o, s, d) {
       o = o.render;
       var p = n.ref;
       if ("ref" in s) {
           var T = {};
           for (var _ in s) _ !== "ref" && (T[_] = s[_])
       } else T = s;
       return ei(n), s = Os(e, n, o, T, p, d), _ = Fs(), e !== null && !Ye ? (Ys(e, n, d), ln(e, n, d)) : (ge && _ && As(n), n.flags |= 1, tt(e, n, s, d), n.child)
   }

   function td(e, n, o, s, d) {
       if (e === null) {
           var p = o.type;
           return typeof p == "function" && !Es(p) && p.defaultProps === void 0 && o.compare === null ? (n.tag = 15, n.type = p, nd(e, n, p, s, d)) : (e = _l(o.type, null, s, n, n.mode, d), e.ref = n.ref, e.return = n, n.child = e)
       }
       if (p = e.child, !gr(e, d)) {
           var T = p.memoizedProps;
           if (o = o.compare, o = o !== null ? o : yo, o(T, s) && e.ref === n.ref) return ln(e, n, d)
       }
       return n.flags |= 1, e = Wt(p, s), e.ref = n.ref, e.return = n, n.child = e
   }

   function nd(e, n, o, s, d) {
       if (e !== null) {
           var p = e.memoizedProps;
           if (yo(p, s) && e.ref === n.ref)
               if (Ye = !1, n.pendingProps = s = p, gr(e, d))(e.flags & 131072) !== 0 && (Ye = !0);
               else return n.lanes = e.lanes, ln(e, n, d)
       }
       return ur(e, n, o, s, d)
   }

   function id(e, n, o, s) {
       var d = s.children,
           p = e !== null ? e.memoizedState : null;
       if (e === null && n.stateNode === null && (n.stateNode = {
               _visibility: 1,
               _pendingMarkers: null,
               _retryCache: null,
               _transitions: null
           }), s.mode === "hidden") {
           if ((n.flags & 128) !== 0) {
               if (p = p !== null ? p.baseLanes | o : o, e !== null) {
                   for (s = n.child = e.child, d = 0; s !== null;) d = d | s.lanes | s.childLanes, s = s.sibling;
                   s = d & ~p
               } else s = 0, n.child = null;
               return od(e, n, p, o, s)
           }
           if ((o & 536870912) !== 0) n.memoizedState = {
               baseLanes: 0,
               cachePool: null
           }, e !== null && Ml(n, p !== null ? p.cachePool : null), p !== null ? af(n, p) : zs(), sf(n);
           else return s = n.lanes = 536870912, od(e, n, p !== null ? p.baseLanes | o : o, o, s)
       } else p !== null ? (Ml(n, p.cachePool), af(n, p), xn(), n.memoizedState = null) : (e !== null && Ml(n, null), zs(), xn());
       return tt(e, n, d, o), n.child
   }

   function wo(e, n) {
       return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
           _visibility: 1,
           _pendingMarkers: null,
           _retryCache: null,
           _transitions: null
       }), n.sibling
   }

   function od(e, n, o, s, d) {
       var p = Us();
       return p = p === null ? null : {
           parent: Oe._currentValue,
           pool: p
       }, n.memoizedState = {
           baseLanes: o,
           cachePool: p
       }, e !== null && Ml(n, null), zs(), sf(n), e !== null && xi(e, n, s, !0), n.childLanes = d, null
   }

   function Bl(e, n) {
       return n = Fl({
           mode: n.mode,
           children: n.children
       }, e.mode), n.ref = e.ref, e.child = n, n.return = e, n
   }

   function ld(e, n, o) {
       return oi(n, e.child, null, o), e = Bl(n, n.pendingProps), e.flags |= 2, Ct(n), n.memoizedState = null, e
   }

   function jy(e, n, o) {
       var s = n.pendingProps,
           d = (n.flags & 128) !== 0;
       if (n.flags &= -129, e === null) {
           if (ge) {
               if (s.mode === "hidden") return e = Bl(n, s), n.lanes = 536870912, wo(null, e);
               if (Ps(n), (e = we) ? (e = yp(e, Ut), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = {
                       dehydrated: e,
                       treeContext: Sn !== null ? {
                           id: Yt,
                           overflow: Jt
                       } : null,
                       retryLane: 536870912,
                       hydrationErrors: null
                   }, o = Pc(e), o.return = n, n.child = o, je = n, we = null)) : e = null, e === null) throw _n(n);
               return n.lanes = 536870912, null
           }
           return Bl(n, s)
       }
       var p = e.memoizedState;
       if (p !== null) {
           var T = p.dehydrated;
           if (Ps(n), d)
               if (n.flags & 256) n.flags &= -257, n = ld(e, n, o);
               else if (n.memoizedState !== null) n.child = e.child, n.flags |= 128, n = null;
           else throw Error(a(558));
           else if (Ye || xi(e, n, o, !1), d = (o & e.childLanes) !== 0, Ye || d) {
               if (s = be, s !== null && (T = Xu(s, o), T !== 0 && T !== p.retryLane)) throw p.retryLane = T, Zn(e, T), gt(s, e, T), rr;
               jl(), n = ld(e, n, o)
           } else e = p.treeContext, we = Gt(T.nextSibling), je = n, ge = !0, En = null, Ut = !1, e !== null && Fc(n, e), n = Bl(n, s), n.flags |= 4096;
           return n
       }
       return e = Wt(e.child, {
           mode: s.mode,
           children: s.children
       }), e.ref = n.ref, n.child = e, e.return = n, e
   }

   function Ol(e, n) {
       var o = n.ref;
       if (o === null) e !== null && e.ref !== null && (n.flags |= 4194816);
       else {
           if (typeof o != "function" && typeof o != "object") throw Error(a(284));
           (e === null || e.ref !== o) && (n.flags |= 4194816)
       }
   }

   function ur(e, n, o, s, d) {
       return ei(n), o = Os(e, n, o, s, void 0, d), s = Fs(), e !== null && !Ye ? (Ys(e, n, d), ln(e, n, d)) : (ge && s && As(n), n.flags |= 1, tt(e, n, o, d), n.child)
   }

   function ad(e, n, o, s, d, p) {
       return ei(n), n.updateQueue = null, o = uf(n, s, o, d), rf(e), s = Fs(), e !== null && !Ye ? (Ys(e, n, p), ln(e, n, p)) : (ge && s && As(n), n.flags |= 1, tt(e, n, o, p), n.child)
   }

   function sd(e, n, o, s, d) {
       if (ei(n), n.stateNode === null) {
           var p = Ai,
               T = o.contextType;
           typeof T == "object" && T !== null && (p = et(T)), p = new o(s, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = ar, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = s, p.state = n.memoizedState, p.refs = {}, Gs(n), T = o.contextType, p.context = typeof T == "object" && T !== null ? et(T) : Ai, p.state = n.memoizedState, T = o.getDerivedStateFromProps, typeof T == "function" && (lr(n, o, T, s), p.state = n.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (T = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), T !== p.state && ar.enqueueReplaceState(p, p.state, null), No(n, s, p, d), Mo(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !0
       } else if (e === null) {
           p = n.stateNode;
           var _ = n.memoizedProps,
               A = ai(o, _);
           p.props = A;
           var D = p.context,
               q = o.contextType;
           T = Ai, typeof q == "object" && q !== null && (T = et(q));
           var z = o.getDerivedStateFromProps;
           q = typeof z == "function" || typeof p.getSnapshotBeforeUpdate == "function", _ = n.pendingProps !== _, q || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (_ || D !== T) && Kf(n, p, s, T), An = !1;
           var w = n.memoizedState;
           p.state = w, No(n, s, p, d), Mo(), D = n.memoizedState, _ || w !== D || An ? (typeof z == "function" && (lr(n, o, z, s), D = n.memoizedState), (A = An || Jf(n, o, A, s, w, D, T)) ? (q || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = D), p.props = s, p.state = D, p.context = T, s = A) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !1)
       } else {
           p = n.stateNode, Hs(e, n), T = n.memoizedProps, q = ai(o, T), p.props = q, z = n.pendingProps, w = p.context, D = o.contextType, A = Ai, typeof D == "object" && D !== null && (A = et(D)), _ = o.getDerivedStateFromProps, (D = typeof _ == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (T !== z || w !== A) && Kf(n, p, s, A), An = !1, w = n.memoizedState, p.state = w, No(n, s, p, d), Mo();
           var L = n.memoizedState;
           T !== z || w !== L || An || e !== null && e.dependencies !== null && Al(e.dependencies) ? (typeof _ == "function" && (lr(n, o, _, s), L = n.memoizedState), (q = An || Jf(n, o, q, s, w, L, A) || e !== null && e.dependencies !== null && Al(e.dependencies)) ? (D || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, L, A), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(s, L, A)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || T === e.memoizedProps && w === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && w === e.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = L), p.props = s, p.state = L, p.context = A, s = q) : (typeof p.componentDidUpdate != "function" || T === e.memoizedProps && w === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && w === e.memoizedState || (n.flags |= 1024), s = !1)
       }
       return p = s, Ol(e, n), s = (n.flags & 128) !== 0, p || s ? (p = n.stateNode, o = s && typeof o.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, e !== null && s ? (n.child = oi(n, e.child, null, d), n.child = oi(n, null, o, d)) : tt(e, n, o, d), n.memoizedState = p.state, e = n.child) : e = ln(e, n, d), e
   }

   function rd(e, n, o, s) {
       return Wn(), n.flags |= 256, tt(e, n, o, s), n.child
   }
   var cr = {
       dehydrated: null,
       treeContext: null,
       retryLane: 0,
       hydrationErrors: null
   };

   function fr(e) {
       return {
           baseLanes: e,
           cachePool: Zc()
       }
   }

   function dr(e, n, o) {
       return e = e !== null ? e.childLanes & ~o : 0, n && (e |= Rt), e
   }

   function ud(e, n, o) {
       var s = n.pendingProps,
           d = !1,
           p = (n.flags & 128) !== 0,
           T;
       if ((T = p) || (T = e !== null && e.memoizedState === null ? !1 : (ze.current & 2) !== 0), T && (d = !0, n.flags &= -129), T = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
           if (ge) {
               if (d ? Nn(n) : xn(), (e = we) ? (e = yp(e, Ut), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = {
                       dehydrated: e,
                       treeContext: Sn !== null ? {
                           id: Yt,
                           overflow: Jt
                       } : null,
                       retryLane: 536870912,
                       hydrationErrors: null
                   }, o = Pc(e), o.return = n, n.child = o, je = n, we = null)) : e = null, e === null) throw _n(n);
               return Xr(e) ? n.lanes = 32 : n.lanes = 536870912, null
           }
           var _ = s.children;
           return s = s.fallback, d ? (xn(), d = n.mode, _ = Fl({
               mode: "hidden",
               children: _
           }, d), s = $n(s, d, o, null), _.return = n, s.return = n, _.sibling = s, n.child = _, s = n.child, s.memoizedState = fr(o), s.childLanes = dr(e, T, o), n.memoizedState = cr, wo(null, s)) : (Nn(n), pr(n, _))
       }
       var A = e.memoizedState;
       if (A !== null && (_ = A.dehydrated, _ !== null)) {
           if (p) n.flags & 256 ? (Nn(n), n.flags &= -257, n = mr(e, n, o)) : n.memoizedState !== null ? (xn(), n.child = e.child, n.flags |= 128, n = null) : (xn(), _ = s.fallback, d = n.mode, s = Fl({
               mode: "visible",
               children: s.children
           }, d), _ = $n(_, d, o, null), _.flags |= 2, s.return = n, _.return = n, s.sibling = _, n.child = s, oi(n, e.child, null, o), s = n.child, s.memoizedState = fr(o), s.childLanes = dr(e, T, o), n.memoizedState = cr, n = wo(null, s));
           else if (Nn(n), Xr(_)) {
               if (T = _.nextSibling && _.nextSibling.dataset, T) var D = T.dgst;
               T = D, s = Error(a(419)), s.stack = "", s.digest = T, So({
                   value: s,
                   source: null,
                   stack: null
               }), n = mr(e, n, o)
           } else if (Ye || xi(e, n, o, !1), T = (o & e.childLanes) !== 0, Ye || T) {
               if (T = be, T !== null && (s = Xu(T, o), s !== 0 && s !== A.retryLane)) throw A.retryLane = s, Zn(e, s), gt(T, e, s), rr;
               Kr(_) || jl(), n = mr(e, n, o)
           } else Kr(_) ? (n.flags |= 192, n.child = e.child, n = null) : (e = A.treeContext, we = Gt(_.nextSibling), je = n, ge = !0, En = null, Ut = !1, e !== null && Fc(n, e), n = pr(n, s.children), n.flags |= 4096);
           return n
       }
       return d ? (xn(), _ = s.fallback, d = n.mode, A = e.child, D = A.sibling, s = Wt(A, {
           mode: "hidden",
           children: s.children
       }), s.subtreeFlags = A.subtreeFlags & 65011712, D !== null ? _ = Wt(D, _) : (_ = $n(_, d, o, null), _.flags |= 2), _.return = n, s.return = n, s.sibling = _, n.child = s, wo(null, s), s = n.child, _ = e.child.memoizedState, _ === null ? _ = fr(o) : (d = _.cachePool, d !== null ? (A = Oe._currentValue, d = d.parent !== A ? {
           parent: A,
           pool: A
       } : d) : d = Zc(), _ = {
           baseLanes: _.baseLanes | o,
           cachePool: d
       }), s.memoizedState = _, s.childLanes = dr(e, T, o), n.memoizedState = cr, wo(e.child, s)) : (Nn(n), o = e.child, e = o.sibling, o = Wt(o, {
           mode: "visible",
           children: s.children
       }), o.return = n, o.sibling = null, e !== null && (T = n.deletions, T === null ? (n.deletions = [e], n.flags |= 16) : T.push(e)), n.child = o, n.memoizedState = null, o)
   }

   function pr(e, n) {
       return n = Fl({
           mode: "visible",
           children: n
       }, e.mode), n.return = e, e.child = n
   }

   function Fl(e, n) {
       return e = Et(22, e, null, n), e.lanes = 0, e
   }

   function mr(e, n, o) {
       return oi(n, e.child, null, o), e = pr(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e
   }

   function cd(e, n, o) {
       e.lanes |= n;
       var s = e.alternate;
       s !== null && (s.lanes |= n), Is(e.return, n, o)
   }

   function hr(e, n, o, s, d, p) {
       var T = e.memoizedState;
       T === null ? e.memoizedState = {
           isBackwards: n,
           rendering: null,
           renderingStartTime: 0,
           last: s,
           tail: o,
           tailMode: d,
           treeForkCount: p
       } : (T.isBackwards = n, T.rendering = null, T.renderingStartTime = 0, T.last = s, T.tail = o, T.tailMode = d, T.treeForkCount = p)
   }

   function fd(e, n, o) {
       var s = n.pendingProps,
           d = s.revealOrder,
           p = s.tail;
       s = s.children;
       var T = ze.current,
           _ = (T & 2) !== 0;
       if (_ ? (T = T & 1 | 2, n.flags |= 128) : T &= 1, Y(ze, T), tt(e, n, s, o), s = ge ? To : 0, !_ && e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null;) {
           if (e.tag === 13) e.memoizedState !== null && cd(e, o, n);
           else if (e.tag === 19) cd(e, o, n);
           else if (e.child !== null) {
               e.child.return = e, e = e.child;
               continue
           }
           if (e === n) break e;
           for (; e.sibling === null;) {
               if (e.return === null || e.return === n) break e;
               e = e.return
           }
           e.sibling.return = e.return, e = e.sibling
       }
       switch (d) {
           case "forwards":
               for (o = n.child, d = null; o !== null;) e = o.alternate, e !== null && wl(e) === null && (d = o), o = o.sibling;
               o = d, o === null ? (d = n.child, n.child = null) : (d = o.sibling, o.sibling = null), hr(n, !1, d, o, p, s);
               break;
           case "backwards":
           case "unstable_legacy-backwards":
               for (o = null, d = n.child, n.child = null; d !== null;) {
                   if (e = d.alternate, e !== null && wl(e) === null) {
                       n.child = d;
                       break
                   }
                   e = d.sibling, d.sibling = o, o = d, d = e
               }
               hr(n, !0, o, null, p, s);
               break;
           case "together":
               hr(n, !1, null, null, void 0, s);
               break;
           default:
               n.memoizedState = null
       }
       return n.child
   }

   function ln(e, n, o) {
       if (e !== null && (n.dependencies = e.dependencies), bn |= n.lanes, (o & n.childLanes) === 0)
           if (e !== null) {
               if (xi(e, n, o, !1), (o & n.childLanes) === 0) return null
           } else return null;
       if (e !== null && n.child !== e.child) throw Error(a(153));
       if (n.child !== null) {
           for (e = n.child, o = Wt(e, e.pendingProps), n.child = o, o.return = n; e.sibling !== null;) e = e.sibling, o = o.sibling = Wt(e, e.pendingProps), o.return = n;
           o.sibling = null
       }
       return n.child
   }

   function gr(e, n) {
       return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Al(e)))
   }

   function ev(e, n, o) {
       switch (n.tag) {
           case 3:
               lt(n, n.stateNode.containerInfo), Cn(n, Oe, e.memoizedState.cache), Wn();
               break;
           case 27:
           case 5:
               io(n);
               break;
           case 4:
               lt(n, n.stateNode.containerInfo);
               break;
           case 10:
               Cn(n, n.type, n.memoizedProps.value);
               break;
           case 31:
               if (n.memoizedState !== null) return n.flags |= 128, Ps(n), null;
               break;
           case 13:
               var s = n.memoizedState;
               if (s !== null) return s.dehydrated !== null ? (Nn(n), n.flags |= 128, null) : (o & n.child.childLanes) !== 0 ? ud(e, n, o) : (Nn(n), e = ln(e, n, o), e !== null ? e.sibling : null);
               Nn(n);
               break;
           case 19:
               var d = (e.flags & 128) !== 0;
               if (s = (o & n.childLanes) !== 0, s || (xi(e, n, o, !1), s = (o & n.childLanes) !== 0), d) {
                   if (s) return fd(e, n, o);
                   n.flags |= 128
               }
               if (d = n.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Y(ze, ze.current), s) break;
               return null;
           case 22:
               return n.lanes = 0, id(e, n, o, n.pendingProps);
           case 24:
               Cn(n, Oe, e.memoizedState.cache)
       }
       return ln(e, n, o)
   }

   function dd(e, n, o) {
       if (e !== null)
           if (e.memoizedProps !== n.pendingProps) Ye = !0;
           else {
               if (!gr(e, o) && (n.flags & 128) === 0) return Ye = !1, ev(e, n, o);
               Ye = (e.flags & 131072) !== 0
           }
       else Ye = !1, ge && (n.flags & 1048576) !== 0 && Oc(n, To, n.index);
       switch (n.lanes = 0, n.tag) {
           case 16:
               e: {
                   var s = n.pendingProps;
                   if (e = ni(n.elementType), n.type = e, typeof e == "function") Es(e) ? (s = ai(e, s), n.tag = 1, n = sd(null, n, e, s, o)) : (n.tag = 0, n = ur(null, n, e, s, o));
                   else {
                       if (e != null) {
                           var d = e.$$typeof;
                           if (d === X) {
                               n.tag = 11, n = ed(null, n, e, s, o);
                               break e
                           } else if (d === F) {
                               n.tag = 14, n = td(null, n, e, s, o);
                               break e
                           }
                       }
                       throw n = Be(e) || e, Error(a(306, n, ""))
                   }
               }
               return n;
           case 0:
               return ur(e, n, n.type, n.pendingProps, o);
           case 1:
               return s = n.type, d = ai(s, n.pendingProps), sd(e, n, s, d, o);
           case 3:
               e: {
                   if (lt(n, n.stateNode.containerInfo), e === null) throw Error(a(387));s = n.pendingProps;
                   var p = n.memoizedState;d = p.element,
                   Hs(e, n),
                   No(n, s, null, o);
                   var T = n.memoizedState;
                   if (s = T.cache, Cn(n, Oe, s), s !== p.cache && Ds(n, [Oe], o, !0), Mo(), s = T.element, p.isDehydrated)
                       if (p = {
                               element: s,
                               isDehydrated: !1,
                               cache: T.cache
                           }, n.updateQueue.baseState = p, n.memoizedState = p, n.flags & 256) {
                           n = rd(e, n, s, o);
                           break e
                       } else if (s !== d) {
                       d = Dt(Error(a(424)), n), So(d), n = rd(e, n, s, o);
                       break e
                   } else {
                       switch (e = n.stateNode.containerInfo, e.nodeType) {
                           case 9:
                               e = e.body;
                               break;
                           default:
                               e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                       }
                       for (we = Gt(e.firstChild), je = n, ge = !0, En = null, Ut = !0, o = nf(n, null, s, o), n.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling
                   } else {
                       if (Wn(), s === d) {
                           n = ln(e, n, o);
                           break e
                       }
                       tt(e, n, s, o)
                   }
                   n = n.child
               }
               return n;
           case 26:
               return Ol(e, n), e === null ? (o = Cp(n.type, null, n.pendingProps, null)) ? n.memoizedState = o : ge || (o = n.type, e = n.pendingProps, s = aa(ue.current).createElement(o), s[We] = n, s[ct] = e, nt(s, o, e), Xe(s), n.stateNode = s) : n.memoizedState = Cp(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
           case 27:
               return io(n), e === null && ge && (s = n.stateNode = Sp(n.type, n.pendingProps, ue.current), je = n, Ut = !0, d = we, Hn(n.type) ? (Qr = d, we = Gt(s.firstChild)) : we = d), tt(e, n, n.pendingProps.children, o), Ol(e, n), e === null && (n.flags |= 4194304), n.child;
           case 5:
               return e === null && ge && ((d = s = we) && (s = Dv(s, n.type, n.pendingProps, Ut), s !== null ? (n.stateNode = s, je = n, we = Gt(s.firstChild), Ut = !1, d = !0) : d = !1), d || _n(n)), io(n), d = n.type, p = n.pendingProps, T = e !== null ? e.memoizedProps : null, s = p.children, Fr(d, p) ? s = null : T !== null && Fr(d, T) && (n.flags |= 32), n.memoizedState !== null && (d = Os(e, n, Yy, null, null, o), Ko._currentValue = d), Ol(e, n), tt(e, n, s, o), n.child;
           case 6:
               return e === null && ge && ((e = o = we) && (o = bv(o, n.pendingProps, Ut), o !== null ? (n.stateNode = o, je = n, we = null, e = !0) : e = !1), e || _n(n)), null;
           case 13:
               return ud(e, n, o);
           case 4:
               return lt(n, n.stateNode.containerInfo), s = n.pendingProps, e === null ? n.child = oi(n, null, s, o) : tt(e, n, s, o), n.child;
           case 11:
               return ed(e, n, n.type, n.pendingProps, o);
           case 7:
               return tt(e, n, n.pendingProps, o), n.child;
           case 8:
               return tt(e, n, n.pendingProps.children, o), n.child;
           case 12:
               return tt(e, n, n.pendingProps.children, o), n.child;
           case 10:
               return s = n.pendingProps, Cn(n, n.type, s.value), tt(e, n, s.children, o), n.child;
           case 9:
               return d = n.type._context, s = n.pendingProps.children, ei(n), d = et(d), s = s(d), n.flags |= 1, tt(e, n, s, o), n.child;
           case 14:
               return td(e, n, n.type, n.pendingProps, o);
           case 15:
               return nd(e, n, n.type, n.pendingProps, o);
           case 19:
               return fd(e, n, o);
           case 31:
               return jy(e, n, o);
           case 22:
               return id(e, n, o, n.pendingProps);
           case 24:
               return ei(n), s = et(Oe), e === null ? (d = Us(), d === null && (d = be, p = bs(), d.pooledCache = p, p.refCount++, p !== null && (d.pooledCacheLanes |= o), d = p), n.memoizedState = {
                   parent: s,
                   cache: d
               }, Gs(n), Cn(n, Oe, d)) : ((e.lanes & o) !== 0 && (Hs(e, n), No(n, null, null, o), Mo()), d = e.memoizedState, p = n.memoizedState, d.parent !== s ? (d = {
                   parent: s,
                   cache: s
               }, n.memoizedState = d, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = d), Cn(n, Oe, s)) : (s = p.cache, Cn(n, Oe, s), s !== d.cache && Ds(n, [Oe], o, !0))), tt(e, n, n.pendingProps.children, o), n.child;
           case 29:
               throw n.pendingProps
       }
       throw Error(a(156, n.tag))
   }

   function an(e) {
       e.flags |= 4
   }

   function yr(e, n, o, s, d) {
       if ((n = (e.mode & 32) !== 0) && (n = !1), n) {
           if (e.flags |= 16777216, (d & 335544128) === d)
               if (e.stateNode.complete) e.flags |= 8192;
               else if (zd()) e.flags |= 8192;
           else throw ii = xl, Ls
       } else e.flags &= -16777217
   }

   function pd(e, n) {
       if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) e.flags &= -16777217;
       else if (e.flags |= 16777216, !xp(n))
           if (zd()) e.flags |= 8192;
           else throw ii = xl, Ls
   }

   function Yl(e, n) {
       n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Yu() : 536870912, e.lanes |= n, ki |= n)
   }

   function Uo(e, n) {
       if (!ge) switch (e.tailMode) {
           case "hidden":
               n = e.tail;
               for (var o = null; n !== null;) n.alternate !== null && (o = n), n = n.sibling;
               o === null ? e.tail = null : o.sibling = null;
               break;
           case "collapsed":
               o = e.tail;
               for (var s = null; o !== null;) o.alternate !== null && (s = o), o = o.sibling;
               s === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null
       }
   }

   function Ue(e) {
       var n = e.alternate !== null && e.alternate.child === e.child,
           o = 0,
           s = 0;
       if (n)
           for (var d = e.child; d !== null;) o |= d.lanes | d.childLanes, s |= d.subtreeFlags & 65011712, s |= d.flags & 65011712, d.return = e, d = d.sibling;
       else
           for (d = e.child; d !== null;) o |= d.lanes | d.childLanes, s |= d.subtreeFlags, s |= d.flags, d.return = e, d = d.sibling;
       return e.subtreeFlags |= s, e.childLanes = o, n
   }

   function tv(e, n, o) {
       var s = n.pendingProps;
       switch (Rs(n), n.tag) {
           case 16:
           case 15:
           case 0:
           case 11:
           case 7:
           case 8:
           case 12:
           case 9:
           case 14:
               return Ue(n), null;
           case 1:
               return Ue(n), null;
           case 3:
               return o = n.stateNode, s = null, e !== null && (s = e.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), tn(Oe), Ve(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (Ni(n) ? an(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Ns())), Ue(n), null;
           case 26:
               var d = n.type,
                   p = n.memoizedState;
               return e === null ? (an(n), p !== null ? (Ue(n), pd(n, p)) : (Ue(n), yr(n, d, null, s, o))) : p ? p !== e.memoizedState ? (an(n), Ue(n), pd(n, p)) : (Ue(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== s && an(n), Ue(n), yr(n, d, e, s, o)), null;
           case 27:
               if (nl(n), o = ue.current, d = n.type, e !== null && n.stateNode != null) e.memoizedProps !== s && an(n);
               else {
                   if (!s) {
                       if (n.stateNode === null) throw Error(a(166));
                       return Ue(n), null
                   }
                   e = Z.current, Ni(n) ? Yc(n) : (e = Sp(d, s, o), n.stateNode = e, an(n))
               }
               return Ue(n), null;
           case 5:
               if (nl(n), d = n.type, e !== null && n.stateNode != null) e.memoizedProps !== s && an(n);
               else {
                   if (!s) {
                       if (n.stateNode === null) throw Error(a(166));
                       return Ue(n), null
                   }
                   if (p = Z.current, Ni(n)) Yc(n);
                   else {
                       var T = aa(ue.current);
                       switch (p) {
                           case 1:
                               p = T.createElementNS("http://www.w3.org/2000/svg", d);
                               break;
                           case 2:
                               p = T.createElementNS("http://www.w3.org/1998/Math/MathML", d);
                               break;
                           default:
                               switch (d) {
                                   case "svg":
                                       p = T.createElementNS("http://www.w3.org/2000/svg", d);
                                       break;
                                   case "math":
                                       p = T.createElementNS("http://www.w3.org/1998/Math/MathML", d);
                                       break;
                                   case "script":
                                       p = T.createElement("div"), p.innerHTML = "<script><\/script>", p = p.removeChild(p.firstChild);
                                       break;
                                   case "select":
                                       p = typeof s.is == "string" ? T.createElement("select", {
                                           is: s.is
                                       }) : T.createElement("select"), s.multiple ? p.multiple = !0 : s.size && (p.size = s.size);
                                       break;
                                   default:
                                       p = typeof s.is == "string" ? T.createElement(d, {
                                           is: s.is
                                       }) : T.createElement(d)
                               }
                       }
                       p[We] = n, p[ct] = s;
                       e: for (T = n.child; T !== null;) {
                           if (T.tag === 5 || T.tag === 6) p.appendChild(T.stateNode);
                           else if (T.tag !== 4 && T.tag !== 27 && T.child !== null) {
                               T.child.return = T, T = T.child;
                               continue
                           }
                           if (T === n) break e;
                           for (; T.sibling === null;) {
                               if (T.return === null || T.return === n) break e;
                               T = T.return
                           }
                           T.sibling.return = T.return, T = T.sibling
                       }
                       n.stateNode = p;
                       e: switch (nt(p, d, s), d) {
                           case "button":
                           case "input":
                           case "select":
                           case "textarea":
                               s = !!s.autoFocus;
                               break e;
                           case "img":
                               s = !0;
                               break e;
                           default:
                               s = !1
                       }
                       s && an(n)
                   }
               }
               return Ue(n), yr(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, o), null;
           case 6:
               if (e && n.stateNode != null) e.memoizedProps !== s && an(n);
               else {
                   if (typeof s != "string" && n.stateNode === null) throw Error(a(166));
                   if (e = ue.current, Ni(n)) {
                       if (e = n.stateNode, o = n.memoizedProps, s = null, d = je, d !== null) switch (d.tag) {
                           case 27:
                           case 5:
                               s = d.memoizedProps
                       }
                       e[We] = n, e = !!(e.nodeValue === o || s !== null && s.suppressHydrationWarning === !0 || up(e.nodeValue, o)), e || _n(n, !0)
                   } else e = aa(e).createTextNode(s), e[We] = n, n.stateNode = e
               }
               return Ue(n), null;
           case 31:
               if (o = n.memoizedState, e === null || e.memoizedState !== null) {
                   if (s = Ni(n), o !== null) {
                       if (e === null) {
                           if (!s) throw Error(a(318));
                           if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(557));
                           e[We] = n
                       } else Wn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                       Ue(n), e = !1
                   } else o = Ns(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), e = !0;
                   if (!e) return n.flags & 256 ? (Ct(n), n) : (Ct(n), null);
                   if ((n.flags & 128) !== 0) throw Error(a(558))
               }
               return Ue(n), null;
           case 13:
               if (s = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                   if (d = Ni(n), s !== null && s.dehydrated !== null) {
                       if (e === null) {
                           if (!d) throw Error(a(318));
                           if (d = n.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(a(317));
                           d[We] = n
                       } else Wn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                       Ue(n), d = !1
                   } else d = Ns(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
                   if (!d) return n.flags & 256 ? (Ct(n), n) : (Ct(n), null)
               }
               return Ct(n), (n.flags & 128) !== 0 ? (n.lanes = o, n) : (o = s !== null, e = e !== null && e.memoizedState !== null, o && (s = n.child, d = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (d = s.alternate.memoizedState.cachePool.pool), p = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (p = s.memoizedState.cachePool.pool), p !== d && (s.flags |= 2048)), o !== e && o && (n.child.flags |= 8192), Yl(n, n.updateQueue), Ue(n), null);
           case 4:
               return Ve(), e === null && zr(n.stateNode.containerInfo), Ue(n), null;
           case 10:
               return tn(n.type), Ue(n), null;
           case 19:
               if (k(ze), s = n.memoizedState, s === null) return Ue(n), null;
               if (d = (n.flags & 128) !== 0, p = s.rendering, p === null)
                   if (d) Uo(s, !1);
                   else {
                       if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
                           for (e = n.child; e !== null;) {
                               if (p = wl(e), p !== null) {
                                   for (n.flags |= 128, Uo(s, !1), e = p.updateQueue, n.updateQueue = e, Yl(n, e), n.subtreeFlags = 0, e = o, o = n.child; o !== null;) kc(o, e), o = o.sibling;
                                   return Y(ze, ze.current & 1 | 2), ge && jt(n, s.treeForkCount), n.child
                               }
                               e = e.sibling
                           }
                       s.tail !== null && yt() > Zl && (n.flags |= 128, d = !0, Uo(s, !1), n.lanes = 4194304)
                   }
               else {
                   if (!d)
                       if (e = wl(p), e !== null) {
                           if (n.flags |= 128, d = !0, e = e.updateQueue, n.updateQueue = e, Yl(n, e), Uo(s, !0), s.tail === null && s.tailMode === "hidden" && !p.alternate && !ge) return Ue(n), null
                       } else 2 * yt() - s.renderingStartTime > Zl && o !== 536870912 && (n.flags |= 128, d = !0, Uo(s, !1), n.lanes = 4194304);
                   s.isBackwards ? (p.sibling = n.child, n.child = p) : (e = s.last, e !== null ? e.sibling = p : n.child = p, s.last = p)
               }
               return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = yt(), e.sibling = null, o = ze.current, Y(ze, d ? o & 1 | 2 : o & 1), ge && jt(n, s.treeForkCount), e) : (Ue(n), null);
           case 22:
           case 23:
               return Ct(n), ks(), s = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (n.flags |= 8192) : s && (n.flags |= 8192), s ? (o & 536870912) !== 0 && (n.flags & 128) === 0 && (Ue(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ue(n), o = n.updateQueue, o !== null && Yl(n, o.retryQueue), o = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (o = e.memoizedState.cachePool.pool), s = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool), s !== o && (n.flags |= 2048), e !== null && k(ti), null;
           case 24:
               return o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), tn(Oe), Ue(n), null;
           case 25:
               return null;
           case 30:
               return null
       }
       throw Error(a(156, n.tag))
   }

   function nv(e, n) {
       switch (Rs(n), n.tag) {
           case 1:
               return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
           case 3:
               return tn(Oe), Ve(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
           case 26:
           case 27:
           case 5:
               return nl(n), null;
           case 31:
               if (n.memoizedState !== null) {
                   if (Ct(n), n.alternate === null) throw Error(a(340));
                   Wn()
               }
               return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
           case 13:
               if (Ct(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
                   if (n.alternate === null) throw Error(a(340));
                   Wn()
               }
               return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
           case 19:
               return k(ze), null;
           case 4:
               return Ve(), null;
           case 10:
               return tn(n.type), null;
           case 22:
           case 23:
               return Ct(n), ks(), e !== null && k(ti), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
           case 24:
               return tn(Oe), null;
           case 25:
               return null;
           default:
               return null
       }
   }

   function md(e, n) {
       switch (Rs(n), n.tag) {
           case 3:
               tn(Oe), Ve();
               break;
           case 26:
           case 27:
           case 5:
               nl(n);
               break;
           case 4:
               Ve();
               break;
           case 31:
               n.memoizedState !== null && Ct(n);
               break;
           case 13:
               Ct(n);
               break;
           case 19:
               k(ze);
               break;
           case 10:
               tn(n.type);
               break;
           case 22:
           case 23:
               Ct(n), ks(), e !== null && k(ti);
               break;
           case 24:
               tn(Oe)
       }
   }

   function Lo(e, n) {
       try {
           var o = n.updateQueue,
               s = o !== null ? o.lastEffect : null;
           if (s !== null) {
               var d = s.next;
               o = d;
               do {
                   if ((o.tag & e) === e) {
                       s = void 0;
                       var p = o.create,
                           T = o.inst;
                       s = p(), T.destroy = s
                   }
                   o = o.next
               } while (o !== d)
           }
       } catch (_) {
           Re(n, n.return, _)
       }
   }

   function In(e, n, o) {
       try {
           var s = n.updateQueue,
               d = s !== null ? s.lastEffect : null;
           if (d !== null) {
               var p = d.next;
               s = p;
               do {
                   if ((s.tag & e) === e) {
                       var T = s.inst,
                           _ = T.destroy;
                       if (_ !== void 0) {
                           T.destroy = void 0, d = n;
                           var A = o,
                               D = _;
                           try {
                               D()
                           } catch (q) {
                               Re(d, A, q)
                           }
                       }
                   }
                   s = s.next
               } while (s !== p)
           }
       } catch (q) {
           Re(n, n.return, q)
       }
   }

   function hd(e) {
       var n = e.updateQueue;
       if (n !== null) {
           var o = e.stateNode;
           try {
               lf(n, o)
           } catch (s) {
               Re(e, e.return, s)
           }
       }
   }

   function gd(e, n, o) {
       o.props = ai(e.type, e.memoizedProps), o.state = e.memoizedState;
       try {
           o.componentWillUnmount()
       } catch (s) {
           Re(e, n, s)
       }
   }

   function Go(e, n) {
       try {
           var o = e.ref;
           if (o !== null) {
               switch (e.tag) {
                   case 26:
                   case 27:
                   case 5:
                       var s = e.stateNode;
                       break;
                   case 30:
                       s = e.stateNode;
                       break;
                   default:
                       s = e.stateNode
               }
               typeof o == "function" ? e.refCleanup = o(s) : o.current = s
           }
       } catch (d) {
           Re(e, n, d)
       }
   }

   function Kt(e, n) {
       var o = e.ref,
           s = e.refCleanup;
       if (o !== null)
           if (typeof s == "function") try {
               s()
           } catch (d) {
               Re(e, n, d)
           } finally {
               e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
           } else if (typeof o == "function") try {
               o(null)
           } catch (d) {
               Re(e, n, d)
           } else o.current = null
   }

   function yd(e) {
       var n = e.type,
           o = e.memoizedProps,
           s = e.stateNode;
       try {
           e: switch (n) {
               case "button":
               case "input":
               case "select":
               case "textarea":
                   o.autoFocus && s.focus();
                   break e;
               case "img":
                   o.src ? s.src = o.src : o.srcSet && (s.srcset = o.srcSet)
           }
       }
       catch (d) {
           Re(e, e.return, d)
       }
   }

   function vr(e, n, o) {
       try {
           var s = e.stateNode;
           Av(s, e.type, o, n), s[ct] = n
       } catch (d) {
           Re(e, e.return, d)
       }
   }

   function vd(e) {
       return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4
   }

   function Tr(e) {
       e: for (;;) {
           for (; e.sibling === null;) {
               if (e.return === null || vd(e.return)) return null;
               e = e.return
           }
           for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
               if (e.tag === 27 && Hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
               e.child.return = e, e = e.child
           }
           if (!(e.flags & 2)) return e.stateNode
       }
   }

   function Sr(e, n, o) {
       var s = e.tag;
       if (s === 5 || s === 6) e = e.stateNode, n ? (o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o).insertBefore(e, n) : (n = o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o, n.appendChild(e), o = o._reactRootContainer, o != null || n.onclick !== null || (n.onclick = Zt));
       else if (s !== 4 && (s === 27 && Hn(e.type) && (o = e.stateNode, n = null), e = e.child, e !== null))
           for (Sr(e, n, o), e = e.sibling; e !== null;) Sr(e, n, o), e = e.sibling
   }

   function Jl(e, n, o) {
       var s = e.tag;
       if (s === 5 || s === 6) e = e.stateNode, n ? o.insertBefore(e, n) : o.appendChild(e);
       else if (s !== 4 && (s === 27 && Hn(e.type) && (o = e.stateNode), e = e.child, e !== null))
           for (Jl(e, n, o), e = e.sibling; e !== null;) Jl(e, n, o), e = e.sibling
   }

   function Td(e) {
       var n = e.stateNode,
           o = e.memoizedProps;
       try {
           for (var s = e.type, d = n.attributes; d.length;) n.removeAttributeNode(d[0]);
           nt(n, s, o), n[We] = e, n[ct] = o
       } catch (p) {
           Re(e, e.return, p)
       }
   }
   var sn = !1,
       Je = !1,
       Er = !1,
       Sd = typeof WeakSet == "function" ? WeakSet : Set,
       Qe = null;

   function iv(e, n) {
       if (e = e.containerInfo, Br = pa, e = bc(e), ms(e)) {
           if ("selectionStart" in e) var o = {
               start: e.selectionStart,
               end: e.selectionEnd
           };
           else e: {
               o = (o = e.ownerDocument) && o.defaultView || window;
               var s = o.getSelection && o.getSelection();
               if (s && s.rangeCount !== 0) {
                   o = s.anchorNode;
                   var d = s.anchorOffset,
                       p = s.focusNode;
                   s = s.focusOffset;
                   try {
                       o.nodeType, p.nodeType
                   } catch {
                       o = null;
                       break e
                   }
                   var T = 0,
                       _ = -1,
                       A = -1,
                       D = 0,
                       q = 0,
                       z = e,
                       w = null;
                   t: for (;;) {
                       for (var L; z !== o || d !== 0 && z.nodeType !== 3 || (_ = T + d), z !== p || s !== 0 && z.nodeType !== 3 || (A = T + s), z.nodeType === 3 && (T += z.nodeValue.length), (L = z.firstChild) !== null;) w = z, z = L;
                       for (;;) {
                           if (z === e) break t;
                           if (w === o && ++D === d && (_ = T), w === p && ++q === s && (A = T), (L = z.nextSibling) !== null) break;
                           z = w, w = z.parentNode
                       }
                       z = L
                   }
                   o = _ === -1 || A === -1 ? null : {
                       start: _,
                       end: A
                   }
               } else o = null
           }
           o = o || {
               start: 0,
               end: 0
           }
       } else o = null;
       for (Or = {
               focusedElem: e,
               selectionRange: o
           }, pa = !1, Qe = n; Qe !== null;)
           if (n = Qe, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, Qe = e;
           else
               for (; Qe !== null;) {
                   switch (n = Qe, p = n.alternate, e = n.flags, n.tag) {
                       case 0:
                           if ((e & 4) !== 0 && (e = n.updateQueue, e = e !== null ? e.events : null, e !== null))
                               for (o = 0; o < e.length; o++) d = e[o], d.ref.impl = d.nextImpl;
                           break;
                       case 11:
                       case 15:
                           break;
                       case 1:
                           if ((e & 1024) !== 0 && p !== null) {
                               e = void 0, o = n, d = p.memoizedProps, p = p.memoizedState, s = o.stateNode;
                               try {
                                   var Q = ai(o.type, d);
                                   e = s.getSnapshotBeforeUpdate(Q, p), s.__reactInternalSnapshotBeforeUpdate = e
                               } catch (ne) {
                                   Re(o, o.return, ne)
                               }
                           }
                           break;
                       case 3:
                           if ((e & 1024) !== 0) {
                               if (e = n.stateNode.containerInfo, o = e.nodeType, o === 9) Jr(e);
                               else if (o === 1) switch (e.nodeName) {
                                   case "HEAD":
                                   case "HTML":
                                   case "BODY":
                                       Jr(e);
                                       break;
                                   default:
                                       e.textContent = ""
                               }
                           }
                           break;
                       case 5:
                       case 26:
                       case 27:
                       case 6:
                       case 4:
                       case 17:
                           break;
                       default:
                           if ((e & 1024) !== 0) throw Error(a(163))
                   }
                   if (e = n.sibling, e !== null) {
                       e.return = n.return, Qe = e;
                       break
                   }
                   Qe = n.return
               }
   }

   function Ed(e, n, o) {
       var s = o.flags;
       switch (o.tag) {
           case 0:
           case 11:
           case 15:
               un(e, o), s & 4 && Lo(5, o);
               break;
           case 1:
               if (un(e, o), s & 4)
                   if (e = o.stateNode, n === null) try {
                       e.componentDidMount()
                   } catch (T) {
                       Re(o, o.return, T)
                   } else {
                       var d = ai(o.type, n.memoizedProps);
                       n = n.memoizedState;
                       try {
                           e.componentDidUpdate(d, n, e.__reactInternalSnapshotBeforeUpdate)
                       } catch (T) {
                           Re(o, o.return, T)
                       }
                   }
               s & 64 && hd(o), s & 512 && Go(o, o.return);
               break;
           case 3:
               if (un(e, o), s & 64 && (e = o.updateQueue, e !== null)) {
                   if (n = null, o.child !== null) switch (o.child.tag) {
                       case 27:
                       case 5:
                           n = o.child.stateNode;
                           break;
                       case 1:
                           n = o.child.stateNode
                   }
                   try {
                       lf(e, n)
                   } catch (T) {
                       Re(o, o.return, T)
                   }
               }
               break;
           case 27:
               n === null && s & 4 && Td(o);
           case 26:
           case 5:
               un(e, o), n === null && s & 4 && yd(o), s & 512 && Go(o, o.return);
               break;
           case 12:
               un(e, o);
               break;
           case 31:
               un(e, o), s & 4 && Ad(e, o);
               break;
           case 13:
               un(e, o), s & 4 && Rd(e, o), s & 64 && (e = o.memoizedState, e !== null && (e = e.dehydrated, e !== null && (o = dv.bind(null, o), wv(e, o))));
               break;
           case 22:
               if (s = o.memoizedState !== null || sn, !s) {
                   n = n !== null && n.memoizedState !== null || Je, d = sn;
                   var p = Je;
                   sn = s, (Je = n) && !p ? cn(e, o, (o.subtreeFlags & 8772) !== 0) : un(e, o), sn = d, Je = p
               }
               break;
           case 30:
               break;
           default:
               un(e, o)
       }
   }

   function _d(e) {
       var n = e.alternate;
       n !== null && (e.alternate = null, _d(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && $a(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
   }
   var Le = null,
       dt = !1;

   function rn(e, n, o) {
       for (o = o.child; o !== null;) Cd(e, n, o), o = o.sibling
   }

   function Cd(e, n, o) {
       if (vt && typeof vt.onCommitFiberUnmount == "function") try {
           vt.onCommitFiberUnmount(oo, o)
       } catch {}
       switch (o.tag) {
           case 26:
               Je || Kt(o, n), rn(e, n, o), o.memoizedState ? o.memoizedState.count-- : o.stateNode && (o = o.stateNode, o.parentNode.removeChild(o));
               break;
           case 27:
               Je || Kt(o, n);
               var s = Le,
                   d = dt;
               Hn(o.type) && (Le = o.stateNode, dt = !1), rn(e, n, o), Fo(o.stateNode), Le = s, dt = d;
               break;
           case 5:
               Je || Kt(o, n);
           case 6:
               if (s = Le, d = dt, Le = null, rn(e, n, o), Le = s, dt = d, Le !== null)
                   if (dt) try {
                       (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(o.stateNode)
                   } catch (p) {
                       Re(o, n, p)
                   } else try {
                       Le.removeChild(o.stateNode)
                   } catch (p) {
                       Re(o, n, p)
                   }
               break;
           case 18:
               Le !== null && (dt ? (e = Le, hp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, o.stateNode), Xi(e)) : hp(Le, o.stateNode));
               break;
           case 4:
               s = Le, d = dt, Le = o.stateNode.containerInfo, dt = !0, rn(e, n, o), Le = s, dt = d;
               break;
           case 0:
           case 11:
           case 14:
           case 15:
               In(2, o, n), Je || In(4, o, n), rn(e, n, o);
               break;
           case 1:
               Je || (Kt(o, n), s = o.stateNode, typeof s.componentWillUnmount == "function" && gd(o, n, s)), rn(e, n, o);
               break;
           case 21:
               rn(e, n, o);
               break;
           case 22:
               Je = (s = Je) || o.memoizedState !== null, rn(e, n, o), Je = s;
               break;
           default:
               rn(e, n, o)
       }
   }

   function Ad(e, n) {
       if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
           e = e.dehydrated;
           try {
               Xi(e)
           } catch (o) {
               Re(n, n.return, o)
           }
       }
   }

   function Rd(e, n) {
       if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
           Xi(e)
       } catch (o) {
           Re(n, n.return, o)
       }
   }

   function ov(e) {
       switch (e.tag) {
           case 31:
           case 13:
           case 19:
               var n = e.stateNode;
               return n === null && (n = e.stateNode = new Sd), n;
           case 22:
               return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Sd), n;
           default:
               throw Error(a(435, e.tag))
       }
   }

   function Kl(e, n) {
       var o = ov(e);
       n.forEach(function(s) {
           if (!o.has(s)) {
               o.add(s);
               var d = pv.bind(null, e, s);
               s.then(d, d)
           }
       })
   }

   function pt(e, n) {
       var o = n.deletions;
       if (o !== null)
           for (var s = 0; s < o.length; s++) {
               var d = o[s],
                   p = e,
                   T = n,
                   _ = T;
               e: for (; _ !== null;) {
                   switch (_.tag) {
                       case 27:
                           if (Hn(_.type)) {
                               Le = _.stateNode, dt = !1;
                               break e
                           }
                           break;
                       case 5:
                           Le = _.stateNode, dt = !1;
                           break e;
                       case 3:
                       case 4:
                           Le = _.stateNode.containerInfo, dt = !0;
                           break e
                   }
                   _ = _.return
               }
               if (Le === null) throw Error(a(160));
               Cd(p, T, d), Le = null, dt = !1, p = d.alternate, p !== null && (p.return = null), d.return = null
           }
       if (n.subtreeFlags & 13886)
           for (n = n.child; n !== null;) Md(n, e), n = n.sibling
   }
   var kt = null;

   function Md(e, n) {
       var o = e.alternate,
           s = e.flags;
       switch (e.tag) {
           case 0:
           case 11:
           case 14:
           case 15:
               pt(n, e), mt(e), s & 4 && (In(3, e, e.return), Lo(3, e), In(5, e, e.return));
               break;
           case 1:
               pt(n, e), mt(e), s & 512 && (Je || o === null || Kt(o, o.return)), s & 64 && sn && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (o = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = o === null ? s : o.concat(s))));
               break;
           case 26:
               var d = kt;
               if (pt(n, e), mt(e), s & 512 && (Je || o === null || Kt(o, o.return)), s & 4) {
                   var p = o !== null ? o.memoizedState : null;
                   if (s = e.memoizedState, o === null)
                       if (s === null)
                           if (e.stateNode === null) {
                               e: {
                                   s = e.type,
                                   o = e.memoizedProps,
                                   d = d.ownerDocument || d;t: switch (s) {
                                       case "title":
                                           p = d.getElementsByTagName("title")[0], (!p || p[so] || p[We] || p.namespaceURI === "http://www.w3.org/2000/svg" || p.hasAttribute("itemprop")) && (p = d.createElement(s), d.head.insertBefore(p, d.querySelector("head > title"))), nt(p, s, o), p[We] = e, Xe(p), s = p;
                                           break e;
                                       case "link":
                                           var T = Mp("link", "href", d).get(s + (o.href || ""));
                                           if (T) {
                                               for (var _ = 0; _ < T.length; _++)
                                                   if (p = T[_], p.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && p.getAttribute("rel") === (o.rel == null ? null : o.rel) && p.getAttribute("title") === (o.title == null ? null : o.title) && p.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
                                                       T.splice(_, 1);
                                                       break t
                                                   }
                                           }
                                           p = d.createElement(s), nt(p, s, o), d.head.appendChild(p);
                                           break;
                                       case "meta":
                                           if (T = Mp("meta", "content", d).get(s + (o.content || ""))) {
                                               for (_ = 0; _ < T.length; _++)
                                                   if (p = T[_], p.getAttribute("content") === (o.content == null ? null : "" + o.content) && p.getAttribute("name") === (o.name == null ? null : o.name) && p.getAttribute("property") === (o.property == null ? null : o.property) && p.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && p.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
                                                       T.splice(_, 1);
                                                       break t
                                                   }
                                           }
                                           p = d.createElement(s), nt(p, s, o), d.head.appendChild(p);
                                           break;
                                       default:
                                           throw Error(a(468, s))
                                   }
                                   p[We] = e,
                                   Xe(p),
                                   s = p
                               }
                               e.stateNode = s
                           }
                   else Np(d, e.type, e.stateNode);
                   else e.stateNode = Rp(d, s, e.memoizedProps);
                   else p !== s ? (p === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : p.count--, s === null ? Np(d, e.type, e.stateNode) : Rp(d, s, e.memoizedProps)) : s === null && e.stateNode !== null && vr(e, e.memoizedProps, o.memoizedProps)
               }
               break;
           case 27:
               pt(n, e), mt(e), s & 512 && (Je || o === null || Kt(o, o.return)), o !== null && s & 4 && vr(e, e.memoizedProps, o.memoizedProps);
               break;
           case 5:
               if (pt(n, e), mt(e), s & 512 && (Je || o === null || Kt(o, o.return)), e.flags & 32) {
                   d = e.stateNode;
                   try {
                       yi(d, "")
                   } catch (Q) {
                       Re(e, e.return, Q)
                   }
               }
               s & 4 && e.stateNode != null && (d = e.memoizedProps, vr(e, d, o !== null ? o.memoizedProps : d)), s & 1024 && (Er = !0);
               break;
           case 6:
               if (pt(n, e), mt(e), s & 4) {
                   if (e.stateNode === null) throw Error(a(162));
                   s = e.memoizedProps, o = e.stateNode;
                   try {
                       o.nodeValue = s
                   } catch (Q) {
                       Re(e, e.return, Q)
                   }
               }
               break;
           case 3:
               if (ua = null, d = kt, kt = sa(n.containerInfo), pt(n, e), kt = d, mt(e), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
                   Xi(n.containerInfo)
               } catch (Q) {
                   Re(e, e.return, Q)
               }
               Er && (Er = !1, Nd(e));
               break;
           case 4:
               s = kt, kt = sa(e.stateNode.containerInfo), pt(n, e), mt(e), kt = s;
               break;
           case 12:
               pt(n, e), mt(e);
               break;
           case 31:
               pt(n, e), mt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Kl(e, s)));
               break;
           case 13:
               pt(n, e), mt(e), e.child.flags & 8192 && e.memoizedState !== null != (o !== null && o.memoizedState !== null) && (Ql = yt()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Kl(e, s)));
               break;
           case 22:
               d = e.memoizedState !== null;
               var A = o !== null && o.memoizedState !== null,
                   D = sn,
                   q = Je;
               if (sn = D || d, Je = q || A, pt(n, e), Je = q, sn = D, mt(e), s & 8192) e: for (n = e.stateNode, n._visibility = d ? n._visibility & -2 : n._visibility | 1, d && (o === null || A || sn || Je || si(e)), o = null, n = e;;) {
                   if (n.tag === 5 || n.tag === 26) {
                       if (o === null) {
                           A = o = n;
                           try {
                               if (p = A.stateNode, d) T = p.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
                               else {
                                   _ = A.stateNode;
                                   var z = A.memoizedProps.style,
                                       w = z != null && z.hasOwnProperty("display") ? z.display : null;
                                   _.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim()
                               }
                           } catch (Q) {
                               Re(A, A.return, Q)
                           }
                       }
                   } else if (n.tag === 6) {
                       if (o === null) {
                           A = n;
                           try {
                               A.stateNode.nodeValue = d ? "" : A.memoizedProps
                           } catch (Q) {
                               Re(A, A.return, Q)
                           }
                       }
                   } else if (n.tag === 18) {
                       if (o === null) {
                           A = n;
                           try {
                               var L = A.stateNode;
                               d ? gp(L, !0) : gp(A.stateNode, !1)
                           } catch (Q) {
                               Re(A, A.return, Q)
                           }
                       }
                   } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
                       n.child.return = n, n = n.child;
                       continue
                   }
                   if (n === e) break e;
                   for (; n.sibling === null;) {
                       if (n.return === null || n.return === e) break e;
                       o === n && (o = null), n = n.return
                   }
                   o === n && (o = null), n.sibling.return = n.return, n = n.sibling
               }
               s & 4 && (s = e.updateQueue, s !== null && (o = s.retryQueue, o !== null && (s.retryQueue = null, Kl(e, o))));
               break;
           case 19:
               pt(n, e), mt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Kl(e, s)));
               break;
           case 30:
               break;
           case 21:
               break;
           default:
               pt(n, e), mt(e)
       }
   }

   function mt(e) {
       var n = e.flags;
       if (n & 2) {
           try {
               for (var o, s = e.return; s !== null;) {
                   if (vd(s)) {
                       o = s;
                       break
                   }
                   s = s.return
               }
               if (o == null) throw Error(a(160));
               switch (o.tag) {
                   case 27:
                       var d = o.stateNode,
                           p = Tr(e);
                       Jl(e, p, d);
                       break;
                   case 5:
                       var T = o.stateNode;
                       o.flags & 32 && (yi(T, ""), o.flags &= -33);
                       var _ = Tr(e);
                       Jl(e, _, T);
                       break;
                   case 3:
                   case 4:
                       var A = o.stateNode.containerInfo,
                           D = Tr(e);
                       Sr(e, D, A);
                       break;
                   default:
                       throw Error(a(161))
               }
           } catch (q) {
               Re(e, e.return, q)
           }
           e.flags &= -3
       }
       n & 4096 && (e.flags &= -4097)
   }

   function Nd(e) {
       if (e.subtreeFlags & 1024)
           for (e = e.child; e !== null;) {
               var n = e;
               Nd(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling
           }
   }

   function un(e, n) {
       if (n.subtreeFlags & 8772)
           for (n = n.child; n !== null;) Ed(e, n.alternate, n), n = n.sibling
   }

   function si(e) {
       for (e = e.child; e !== null;) {
           var n = e;
           switch (n.tag) {
               case 0:
               case 11:
               case 14:
               case 15:
                   In(4, n, n.return), si(n);
                   break;
               case 1:
                   Kt(n, n.return);
                   var o = n.stateNode;
                   typeof o.componentWillUnmount == "function" && gd(n, n.return, o), si(n);
                   break;
               case 27:
                   Fo(n.stateNode);
               case 26:
               case 5:
                   Kt(n, n.return), si(n);
                   break;
               case 22:
                   n.memoizedState === null && si(n);
                   break;
               case 30:
                   si(n);
                   break;
               default:
                   si(n)
           }
           e = e.sibling
       }
   }

   function cn(e, n, o) {
       for (o = o && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
           var s = n.alternate,
               d = e,
               p = n,
               T = p.flags;
           switch (p.tag) {
               case 0:
               case 11:
               case 15:
                   cn(d, p, o), Lo(4, p);
                   break;
               case 1:
                   if (cn(d, p, o), s = p, d = s.stateNode, typeof d.componentDidMount == "function") try {
                       d.componentDidMount()
                   } catch (D) {
                       Re(s, s.return, D)
                   }
                   if (s = p, d = s.updateQueue, d !== null) {
                       var _ = s.stateNode;
                       try {
                           var A = d.shared.hiddenCallbacks;
                           if (A !== null)
                               for (d.shared.hiddenCallbacks = null, d = 0; d < A.length; d++) of(A[d], _)
                       } catch (D) {
                           Re(s, s.return, D)
                       }
                   }
                   o && T & 64 && hd(p), Go(p, p.return);
                   break;
               case 27:
                   Td(p);
               case 26:
               case 5:
                   cn(d, p, o), o && s === null && T & 4 && yd(p), Go(p, p.return);
                   break;
               case 12:
                   cn(d, p, o);
                   break;
               case 31:
                   cn(d, p, o), o && T & 4 && Ad(d, p);
                   break;
               case 13:
                   cn(d, p, o), o && T & 4 && Rd(d, p);
                   break;
               case 22:
                   p.memoizedState === null && cn(d, p, o), Go(p, p.return);
                   break;
               case 30:
                   break;
               default:
                   cn(d, p, o)
           }
           n = n.sibling
       }
   }

   function _r(e, n) {
       var o = null;
       e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (o = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== o && (e != null && e.refCount++, o != null && Eo(o))
   }

   function Cr(e, n) {
       e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Eo(e))
   }

   function Pt(e, n, o, s) {
       if (n.subtreeFlags & 10256)
           for (n = n.child; n !== null;) xd(e, n, o, s), n = n.sibling
   }

   function xd(e, n, o, s) {
       var d = n.flags;
       switch (n.tag) {
           case 0:
           case 11:
           case 15:
               Pt(e, n, o, s), d & 2048 && Lo(9, n);
               break;
           case 1:
               Pt(e, n, o, s);
               break;
           case 3:
               Pt(e, n, o, s), d & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Eo(e)));
               break;
           case 12:
               if (d & 2048) {
                   Pt(e, n, o, s), e = n.stateNode;
                   try {
                       var p = n.memoizedProps,
                           T = p.id,
                           _ = p.onPostCommit;
                       typeof _ == "function" && _(T, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                   } catch (A) {
                       Re(n, n.return, A)
                   }
               } else Pt(e, n, o, s);
               break;
           case 31:
               Pt(e, n, o, s);
               break;
           case 13:
               Pt(e, n, o, s);
               break;
           case 23:
               break;
           case 22:
               p = n.stateNode, T = n.alternate, n.memoizedState !== null ? p._visibility & 2 ? Pt(e, n, o, s) : Ho(e, n) : p._visibility & 2 ? Pt(e, n, o, s) : (p._visibility |= 2, qi(e, n, o, s, (n.subtreeFlags & 10256) !== 0 || !1)), d & 2048 && _r(T, n);
               break;
           case 24:
               Pt(e, n, o, s), d & 2048 && Cr(n.alternate, n);
               break;
           default:
               Pt(e, n, o, s)
       }
   }

   function qi(e, n, o, s, d) {
       for (d = d && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null;) {
           var p = e,
               T = n,
               _ = o,
               A = s,
               D = T.flags;
           switch (T.tag) {
               case 0:
               case 11:
               case 15:
                   qi(p, T, _, A, d), Lo(8, T);
                   break;
               case 23:
                   break;
               case 22:
                   var q = T.stateNode;
                   T.memoizedState !== null ? q._visibility & 2 ? qi(p, T, _, A, d) : Ho(p, T) : (q._visibility |= 2, qi(p, T, _, A, d)), d && D & 2048 && _r(T.alternate, T);
                   break;
               case 24:
                   qi(p, T, _, A, d), d && D & 2048 && Cr(T.alternate, T);
                   break;
               default:
                   qi(p, T, _, A, d)
           }
           n = n.sibling
       }
   }

   function Ho(e, n) {
       if (n.subtreeFlags & 10256)
           for (n = n.child; n !== null;) {
               var o = e,
                   s = n,
                   d = s.flags;
               switch (s.tag) {
                   case 22:
                       Ho(o, s), d & 2048 && _r(s.alternate, s);
                       break;
                   case 24:
                       Ho(o, s), d & 2048 && Cr(s.alternate, s);
                       break;
                   default:
                       Ho(o, s)
               }
               n = n.sibling
           }
   }
   var qo = 8192;

   function Vi(e, n, o) {
       if (e.subtreeFlags & qo)
           for (e = e.child; e !== null;) Id(e, n, o), e = e.sibling
   }

   function Id(e, n, o) {
       switch (e.tag) {
           case 26:
               Vi(e, n, o), e.flags & qo && e.memoizedState !== null && Fv(o, kt, e.memoizedState, e.memoizedProps);
               break;
           case 5:
               Vi(e, n, o);
               break;
           case 3:
           case 4:
               var s = kt;
               kt = sa(e.stateNode.containerInfo), Vi(e, n, o), kt = s;
               break;
           case 22:
               e.memoizedState === null && (s = e.alternate, s !== null && s.memoizedState !== null ? (s = qo, qo = 16777216, Vi(e, n, o), qo = s) : Vi(e, n, o));
               break;
           default:
               Vi(e, n, o)
       }
   }

   function Dd(e) {
       var n = e.alternate;
       if (n !== null && (e = n.child, e !== null)) {
           n.child = null;
           do n = e.sibling, e.sibling = null, e = n; while (e !== null)
       }
   }

   function Vo(e) {
       var n = e.deletions;
       if ((e.flags & 16) !== 0) {
           if (n !== null)
               for (var o = 0; o < n.length; o++) {
                   var s = n[o];
                   Qe = s, wd(s, e)
               }
           Dd(e)
       }
       if (e.subtreeFlags & 10256)
           for (e = e.child; e !== null;) bd(e), e = e.sibling
   }

   function bd(e) {
       switch (e.tag) {
           case 0:
           case 11:
           case 15:
               Vo(e), e.flags & 2048 && In(9, e, e.return);
               break;
           case 3:
               Vo(e);
               break;
           case 12:
               Vo(e);
               break;
           case 22:
               var n = e.stateNode;
               e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Xl(e)) : Vo(e);
               break;
           default:
               Vo(e)
       }
   }

   function Xl(e) {
       var n = e.deletions;
       if ((e.flags & 16) !== 0) {
           if (n !== null)
               for (var o = 0; o < n.length; o++) {
                   var s = n[o];
                   Qe = s, wd(s, e)
               }
           Dd(e)
       }
       for (e = e.child; e !== null;) {
           switch (n = e, n.tag) {
               case 0:
               case 11:
               case 15:
                   In(8, n, n.return), Xl(n);
                   break;
               case 22:
                   o = n.stateNode, o._visibility & 2 && (o._visibility &= -3, Xl(n));
                   break;
               default:
                   Xl(n)
           }
           e = e.sibling
       }
   }

   function wd(e, n) {
       for (; Qe !== null;) {
           var o = Qe;
           switch (o.tag) {
               case 0:
               case 11:
               case 15:
                   In(8, o, n);
                   break;
               case 23:
               case 22:
                   if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
                       var s = o.memoizedState.cachePool.pool;
                       s != null && s.refCount++
                   }
                   break;
               case 24:
                   Eo(o.memoizedState.cache)
           }
           if (s = o.child, s !== null) s.return = o, Qe = s;
           else e: for (o = e; Qe !== null;) {
               s = Qe;
               var d = s.sibling,
                   p = s.return;
               if (_d(s), s === o) {
                   Qe = null;
                   break e
               }
               if (d !== null) {
                   d.return = p, Qe = d;
                   break e
               }
               Qe = p
           }
       }
   }
   var lv = {
           getCacheForType: function(e) {
               var n = et(Oe),
                   o = n.data.get(e);
               return o === void 0 && (o = e(), n.data.set(e, o)), o
           },
           cacheSignal: function() {
               return et(Oe).controller.signal
           }
       },
       av = typeof WeakMap == "function" ? WeakMap : Map,
       Se = 0,
       be = null,
       ce = null,
       pe = 0,
       Ae = 0,
       At = null,
       Dn = !1,
       zi = !1,
       Ar = !1,
       fn = 0,
       qe = 0,
       bn = 0,
       ri = 0,
       Rr = 0,
       Rt = 0,
       ki = 0,
       zo = null,
       ht = null,
       Mr = !1,
       Ql = 0,
       Ud = 0,
       Zl = 1 / 0,
       $l = null,
       wn = null,
       Ke = 0,
       Un = null,
       Pi = null,
       dn = 0,
       Nr = 0,
       xr = null,
       Ld = null,
       ko = 0,
       Ir = null;

   function Mt() {
       return (Se & 2) !== 0 && pe !== 0 ? pe & -pe : G.T !== null ? Gr() : Qu()
   }

   function Gd() {
       if (Rt === 0)
           if ((pe & 536870912) === 0 || ge) {
               var e = ll;
               ll <<= 1, (ll & 3932160) === 0 && (ll = 262144), Rt = e
           } else Rt = 536870912;
       return e = _t.current, e !== null && (e.flags |= 32), Rt
   }

   function gt(e, n, o) {
       (e === be && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) && (Bi(e, 0), Ln(e, pe, Rt, !1)), ao(e, o), ((Se & 2) === 0 || e !== be) && (e === be && ((Se & 2) === 0 && (ri |= o), qe === 4 && Ln(e, pe, Rt, !1)), Xt(e))
   }

   function Hd(e, n, o) {
       if ((Se & 6) !== 0) throw Error(a(327));
       var s = !o && (n & 127) === 0 && (n & e.expiredLanes) === 0 || lo(e, n),
           d = s ? uv(e, n) : br(e, n, !0),
           p = s;
       do {
           if (d === 0) {
               zi && !s && Ln(e, n, 0, !1);
               break
           } else {
               if (o = e.current.alternate, p && !sv(o)) {
                   d = br(e, n, !1), p = !1;
                   continue
               }
               if (d === 2) {
                   if (p = n, e.errorRecoveryDisabledLanes & p) var T = 0;
                   else T = e.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0;
                   if (T !== 0) {
                       n = T;
                       e: {
                           var _ = e;d = zo;
                           var A = _.current.memoizedState.isDehydrated;
                           if (A && (Bi(_, T).flags |= 256), T = br(_, T, !1), T !== 2) {
                               if (Ar && !A) {
                                   _.errorRecoveryDisabledLanes |= p, ri |= p, d = 4;
                                   break e
                               }
                               p = ht, ht = d, p !== null && (ht === null ? ht = p : ht.push.apply(ht, p))
                           }
                           d = T
                       }
                       if (p = !1, d !== 2) continue
                   }
               }
               if (d === 1) {
                   Bi(e, 0), Ln(e, n, 0, !0);
                   break
               }
               e: {
                   switch (s = e, p = d, p) {
                       case 0:
                       case 1:
                           throw Error(a(345));
                       case 4:
                           if ((n & 4194048) !== n) break;
                       case 6:
                           Ln(s, n, Rt, !Dn);
                           break e;
                       case 2:
                           ht = null;
                           break;
                       case 3:
                       case 5:
                           break;
                       default:
                           throw Error(a(329))
                   }
                   if ((n & 62914560) === n && (d = Ql + 300 - yt(), 10 < d)) {
                       if (Ln(s, n, Rt, !Dn), sl(s, 0, !0) !== 0) break e;
                       dn = n, s.timeoutHandle = pp(qd.bind(null, s, o, ht, $l, Mr, n, Rt, ri, ki, Dn, p, "Throttled", -0, 0), d);
                       break e
                   }
                   qd(s, o, ht, $l, Mr, n, Rt, ri, ki, Dn, p, null, -0, 0)
               }
           }
           break
       } while (!0);
       Xt(e)
   }

   function qd(e, n, o, s, d, p, T, _, A, D, q, z, w, L) {
       if (e.timeoutHandle = -1, z = n.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
           z = {
               stylesheets: null,
               count: 0,
               imgCount: 0,
               imgBytes: 0,
               suspenseyImages: [],
               waitingForImages: !0,
               waitingForViewTransition: !1,
               unsuspend: Zt
           }, Id(n, p, z);
           var Q = (p & 62914560) === p ? Ql - yt() : (p & 4194048) === p ? Ud - yt() : 0;
           if (Q = Yv(z, Q), Q !== null) {
               dn = p, e.cancelPendingCommit = Q(Yd.bind(null, e, n, p, o, s, d, T, _, A, q, z, null, w, L)), Ln(e, p, T, !D);
               return
           }
       }
       Yd(e, n, p, o, s, d, T, _, A)
   }

   function sv(e) {
       for (var n = e;;) {
           var o = n.tag;
           if ((o === 0 || o === 11 || o === 15) && n.flags & 16384 && (o = n.updateQueue, o !== null && (o = o.stores, o !== null)))
               for (var s = 0; s < o.length; s++) {
                   var d = o[s],
                       p = d.getSnapshot;
                   d = d.value;
                   try {
                       if (!St(p(), d)) return !1
                   } catch {
                       return !1
                   }
               }
           if (o = n.child, n.subtreeFlags & 16384 && o !== null) o.return = n, n = o;
           else {
               if (n === e) break;
               for (; n.sibling === null;) {
                   if (n.return === null || n.return === e) return !0;
                   n = n.return
               }
               n.sibling.return = n.return, n = n.sibling
           }
       }
       return !0
   }

   function Ln(e, n, o, s) {
       n &= ~Rr, n &= ~ri, e.suspendedLanes |= n, e.pingedLanes &= ~n, s && (e.warmLanes |= n), s = e.expirationTimes;
       for (var d = n; 0 < d;) {
           var p = 31 - Tt(d),
               T = 1 << p;
           s[p] = -1, d &= ~T
       }
       o !== 0 && Ju(e, o, n)
   }

   function Wl() {
       return (Se & 6) === 0 ? (Po(0), !1) : !0
   }

   function Dr() {
       if (ce !== null) {
           if (Ae === 0) var e = ce.return;
           else e = ce, en = jn = null, Js(e), wi = null, Co = 0, e = ce;
           for (; e !== null;) md(e.alternate, e), e = e.return;
           ce = null
       }
   }

   function Bi(e, n) {
       var o = e.timeoutHandle;
       o !== -1 && (e.timeoutHandle = -1, Nv(o)), o = e.cancelPendingCommit, o !== null && (e.cancelPendingCommit = null, o()), dn = 0, Dr(), be = e, ce = o = Wt(e.current, null), pe = n, Ae = 0, At = null, Dn = !1, zi = lo(e, n), Ar = !1, ki = Rt = Rr = ri = bn = qe = 0, ht = zo = null, Mr = !1, (n & 8) !== 0 && (n |= n & 32);
       var s = e.entangledLanes;
       if (s !== 0)
           for (e = e.entanglements, s &= n; 0 < s;) {
               var d = 31 - Tt(s),
                   p = 1 << d;
               n |= e[d], s &= ~p
           }
       return fn = n, Tl(), o
   }

   function Vd(e, n) {
       se = null, G.H = bo, n === bi || n === Nl ? (n = jc(), Ae = 3) : n === Ls ? (n = jc(), Ae = 4) : Ae = n === rr ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, At = n, ce === null && (qe = 1, Pl(e, Dt(n, e.current)))
   }

   function zd() {
       var e = _t.current;
       return e === null ? !0 : (pe & 4194048) === pe ? Lt === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === Lt : !1
   }

   function kd() {
       var e = G.H;
       return G.H = bo, e === null ? bo : e
   }

   function Pd() {
       var e = G.A;
       return G.A = lv, e
   }

   function jl() {
       qe = 4, Dn || (pe & 4194048) !== pe && _t.current !== null || (zi = !0), (bn & 134217727) === 0 && (ri & 134217727) === 0 || be === null || Ln(be, pe, Rt, !1)
   }

   function br(e, n, o) {
       var s = Se;
       Se |= 2;
       var d = kd(),
           p = Pd();
       (be !== e || pe !== n) && ($l = null, Bi(e, n)), n = !1;
       var T = qe;
       e: do try {
               if (Ae !== 0 && ce !== null) {
                   var _ = ce,
                       A = At;
                   switch (Ae) {
                       case 8:
                           Dr(), T = 6;
                           break e;
                       case 3:
                       case 2:
                       case 9:
                       case 6:
                           _t.current === null && (n = !0);
                           var D = Ae;
                           if (Ae = 0, At = null, Oi(e, _, A, D), o && zi) {
                               T = 0;
                               break e
                           }
                           break;
                       default:
                           D = Ae, Ae = 0, At = null, Oi(e, _, A, D)
                   }
               }
               rv(), T = qe;
               break
           } catch (q) {
               Vd(e, q)
           }
           while (!0);
       return n && e.shellSuspendCounter++, en = jn = null, Se = s, G.H = d, G.A = p, ce === null && (be = null, pe = 0, Tl()), T
   }

   function rv() {
       for (; ce !== null;) Bd(ce)
   }

   function uv(e, n) {
       var o = Se;
       Se |= 2;
       var s = kd(),
           d = Pd();
       be !== e || pe !== n ? ($l = null, Zl = yt() + 500, Bi(e, n)) : zi = lo(e, n);
       e: do try {
               if (Ae !== 0 && ce !== null) {
                   n = ce;
                   var p = At;
                   t: switch (Ae) {
                       case 1:
                           Ae = 0, At = null, Oi(e, n, p, 1);
                           break;
                       case 2:
                       case 9:
                           if ($c(p)) {
                               Ae = 0, At = null, Od(n);
                               break
                           }
                           n = function() {
                               Ae !== 2 && Ae !== 9 || be !== e || (Ae = 7), Xt(e)
                           }, p.then(n, n);
                           break e;
                       case 3:
                           Ae = 7;
                           break e;
                       case 4:
                           Ae = 5;
                           break e;
                       case 7:
                           $c(p) ? (Ae = 0, At = null, Od(n)) : (Ae = 0, At = null, Oi(e, n, p, 7));
                           break;
                       case 5:
                           var T = null;
                           switch (ce.tag) {
                               case 26:
                                   T = ce.memoizedState;
                               case 5:
                               case 27:
                                   var _ = ce;
                                   if (T ? xp(T) : _.stateNode.complete) {
                                       Ae = 0, At = null;
                                       var A = _.sibling;
                                       if (A !== null) ce = A;
                                       else {
                                           var D = _.return;
                                           D !== null ? (ce = D, ea(D)) : ce = null
                                       }
                                       break t
                                   }
                           }
                           Ae = 0, At = null, Oi(e, n, p, 5);
                           break;
                       case 6:
                           Ae = 0, At = null, Oi(e, n, p, 6);
                           break;
                       case 8:
                           Dr(), qe = 6;
                           break e;
                       default:
                           throw Error(a(462))
                   }
               }
               cv();
               break
           } catch (q) {
               Vd(e, q)
           }
           while (!0);
       return en = jn = null, G.H = s, G.A = d, Se = o, ce !== null ? 0 : (be = null, pe = 0, Tl(), qe)
   }

   function cv() {
       for (; ce !== null && !Ug();) Bd(ce)
   }

   function Bd(e) {
       var n = dd(e.alternate, e, fn);
       e.memoizedProps = e.pendingProps, n === null ? ea(e) : ce = n
   }

   function Od(e) {
       var n = e,
           o = n.alternate;
       switch (n.tag) {
           case 15:
           case 0:
               n = ad(o, n, n.pendingProps, n.type, void 0, pe);
               break;
           case 11:
               n = ad(o, n, n.pendingProps, n.type.render, n.ref, pe);
               break;
           case 5:
               Js(n);
           default:
               md(o, n), n = ce = kc(n, fn), n = dd(o, n, fn)
       }
       e.memoizedProps = e.pendingProps, n === null ? ea(e) : ce = n
   }

   function Oi(e, n, o, s) {
       en = jn = null, Js(n), wi = null, Co = 0;
       var d = n.return;
       try {
           if (Wy(e, d, n, o, pe)) {
               qe = 1, Pl(e, Dt(o, e.current)), ce = null;
               return
           }
       } catch (p) {
           if (d !== null) throw ce = d, p;
           qe = 1, Pl(e, Dt(o, e.current)), ce = null;
           return
       }
       n.flags & 32768 ? (ge || s === 1 ? e = !0 : zi || (pe & 536870912) !== 0 ? e = !1 : (Dn = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = _t.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Fd(n, e)) : ea(n)
   }

   function ea(e) {
       var n = e;
       do {
           if ((n.flags & 32768) !== 0) {
               Fd(n, Dn);
               return
           }
           e = n.return;
           var o = tv(n.alternate, n, fn);
           if (o !== null) {
               ce = o;
               return
           }
           if (n = n.sibling, n !== null) {
               ce = n;
               return
           }
           ce = n = e
       } while (n !== null);
       qe === 0 && (qe = 5)
   }

   function Fd(e, n) {
       do {
           var o = nv(e.alternate, e);
           if (o !== null) {
               o.flags &= 32767, ce = o;
               return
           }
           if (o = e.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !n && (e = e.sibling, e !== null)) {
               ce = e;
               return
           }
           ce = e = o
       } while (e !== null);
       qe = 6, ce = null
   }

   function Yd(e, n, o, s, d, p, T, _, A) {
       e.cancelPendingCommit = null;
       do ta(); while (Ke !== 0);
       if ((Se & 6) !== 0) throw Error(a(327));
       if (n !== null) {
           if (n === e.current) throw Error(a(177));
           if (p = n.lanes | n.childLanes, p |= Ts, Og(e, o, p, T, _, A), e === be && (ce = be = null, pe = 0), Pi = n, Un = e, dn = o, Nr = p, xr = d, Ld = s, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, mv(il, function() {
                   return Zd(), null
               })) : (e.callbackNode = null, e.callbackPriority = 0), s = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || s) {
               s = G.T, G.T = null, d = O.p, O.p = 2, T = Se, Se |= 4;
               try {
                   iv(e, n, o)
               } finally {
                   Se = T, O.p = d, G.T = s
               }
           }
           Ke = 1, Jd(), Kd(), Xd()
       }
   }

   function Jd() {
       if (Ke === 1) {
           Ke = 0;
           var e = Un,
               n = Pi,
               o = (n.flags & 13878) !== 0;
           if ((n.subtreeFlags & 13878) !== 0 || o) {
               o = G.T, G.T = null;
               var s = O.p;
               O.p = 2;
               var d = Se;
               Se |= 4;
               try {
                   Md(n, e);
                   var p = Or,
                       T = bc(e.containerInfo),
                       _ = p.focusedElem,
                       A = p.selectionRange;
                   if (T !== _ && _ && _.ownerDocument && Dc(_.ownerDocument.documentElement, _)) {
                       if (A !== null && ms(_)) {
                           var D = A.start,
                               q = A.end;
                           if (q === void 0 && (q = D), "selectionStart" in _) _.selectionStart = D, _.selectionEnd = Math.min(q, _.value.length);
                           else {
                               var z = _.ownerDocument || document,
                                   w = z && z.defaultView || window;
                               if (w.getSelection) {
                                   var L = w.getSelection(),
                                       Q = _.textContent.length,
                                       ne = Math.min(A.start, Q),
                                       Ie = A.end === void 0 ? ne : Math.min(A.end, Q);
                                   !L.extend && ne > Ie && (T = Ie, Ie = ne, ne = T);
                                   var x = Ic(_, ne),
                                       R = Ic(_, Ie);
                                   if (x && R && (L.rangeCount !== 1 || L.anchorNode !== x.node || L.anchorOffset !== x.offset || L.focusNode !== R.node || L.focusOffset !== R.offset)) {
                                       var I = z.createRange();
                                       I.setStart(x.node, x.offset), L.removeAllRanges(), ne > Ie ? (L.addRange(I), L.extend(R.node, R.offset)) : (I.setEnd(R.node, R.offset), L.addRange(I))
                                   }
                               }
                           }
                       }
                       for (z = [], L = _; L = L.parentNode;) L.nodeType === 1 && z.push({
                           element: L,
                           left: L.scrollLeft,
                           top: L.scrollTop
                       });
                       for (typeof _.focus == "function" && _.focus(), _ = 0; _ < z.length; _++) {
                           var V = z[_];
                           V.element.scrollLeft = V.left, V.element.scrollTop = V.top
                       }
                   }
                   pa = !!Br, Or = Br = null
               } finally {
                   Se = d, O.p = s, G.T = o
               }
           }
           e.current = n, Ke = 2
       }
   }

   function Kd() {
       if (Ke === 2) {
           Ke = 0;
           var e = Un,
               n = Pi,
               o = (n.flags & 8772) !== 0;
           if ((n.subtreeFlags & 8772) !== 0 || o) {
               o = G.T, G.T = null;
               var s = O.p;
               O.p = 2;
               var d = Se;
               Se |= 4;
               try {
                   Ed(e, n.alternate, n)
               } finally {
                   Se = d, O.p = s, G.T = o
               }
           }
           Ke = 3
       }
   }

   function Xd() {
       if (Ke === 4 || Ke === 3) {
           Ke = 0, Lg();
           var e = Un,
               n = Pi,
               o = dn,
               s = Ld;
           (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, Pi = Un = null, Qd(e, e.pendingLanes));
           var d = e.pendingLanes;
           if (d === 0 && (wn = null), Qa(o), n = n.stateNode, vt && typeof vt.onCommitFiberRoot == "function") try {
               vt.onCommitFiberRoot(oo, n, void 0, (n.current.flags & 128) === 128)
           } catch {}
           if (s !== null) {
               n = G.T, d = O.p, O.p = 2, G.T = null;
               try {
                   for (var p = e.onRecoverableError, T = 0; T < s.length; T++) {
                       var _ = s[T];
                       p(_.value, {
                           componentStack: _.stack
                       })
                   }
               } finally {
                   G.T = n, O.p = d
               }
           }(dn & 3) !== 0 && ta(), Xt(e), d = e.pendingLanes, (o & 261930) !== 0 && (d & 42) !== 0 ? e === Ir ? ko++ : (ko = 0, Ir = e) : ko = 0, Po(0)
       }
   }

   function Qd(e, n) {
       (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, Eo(n)))
   }

   function ta() {
       return Jd(), Kd(), Xd(), Zd()
   }

   function Zd() {
       if (Ke !== 5) return !1;
       var e = Un,
           n = Nr;
       Nr = 0;
       var o = Qa(dn),
           s = G.T,
           d = O.p;
       try {
           O.p = 32 > o ? 32 : o, G.T = null, o = xr, xr = null;
           var p = Un,
               T = dn;
           if (Ke = 0, Pi = Un = null, dn = 0, (Se & 6) !== 0) throw Error(a(331));
           var _ = Se;
           if (Se |= 4, bd(p.current), xd(p, p.current, T, o), Se = _, Po(0, !1), vt && typeof vt.onPostCommitFiberRoot == "function") try {
               vt.onPostCommitFiberRoot(oo, p)
           } catch {}
           return !0
       } finally {
           O.p = d, G.T = s, Qd(e, n)
       }
   }

   function $d(e, n, o) {
       n = Dt(o, n), n = sr(e.stateNode, n, 2), e = Mn(e, n, 2), e !== null && (ao(e, 2), Xt(e))
   }

   function Re(e, n, o) {
       if (e.tag === 3) $d(e, e, o);
       else
           for (; n !== null;) {
               if (n.tag === 3) {
                   $d(n, e, o);
                   break
               } else if (n.tag === 1) {
                   var s = n.stateNode;
                   if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (wn === null || !wn.has(s))) {
                       e = Dt(o, e), o = Wf(2), s = Mn(n, o, 2), s !== null && (jf(o, s, n, e), ao(s, 2), Xt(s));
                       break
                   }
               }
               n = n.return
           }
   }

   function wr(e, n, o) {
       var s = e.pingCache;
       if (s === null) {
           s = e.pingCache = new av;
           var d = new Set;
           s.set(n, d)
       } else d = s.get(n), d === void 0 && (d = new Set, s.set(n, d));
       d.has(o) || (Ar = !0, d.add(o), e = fv.bind(null, e, n, o), n.then(e, e))
   }

   function fv(e, n, o) {
       var s = e.pingCache;
       s !== null && s.delete(n), e.pingedLanes |= e.suspendedLanes & o, e.warmLanes &= ~o, be === e && (pe & o) === o && (qe === 4 || qe === 3 && (pe & 62914560) === pe && 300 > yt() - Ql ? (Se & 2) === 0 && Bi(e, 0) : Rr |= o, ki === pe && (ki = 0)), Xt(e)
   }

   function Wd(e, n) {
       n === 0 && (n = Yu()), e = Zn(e, n), e !== null && (ao(e, n), Xt(e))
   }

   function dv(e) {
       var n = e.memoizedState,
           o = 0;
       n !== null && (o = n.retryLane), Wd(e, o)
   }

   function pv(e, n) {
       var o = 0;
       switch (e.tag) {
           case 31:
           case 13:
               var s = e.stateNode,
                   d = e.memoizedState;
               d !== null && (o = d.retryLane);
               break;
           case 19:
               s = e.stateNode;
               break;
           case 22:
               s = e.stateNode._retryCache;
               break;
           default:
               throw Error(a(314))
       }
       s !== null && s.delete(n), Wd(e, o)
   }

   function mv(e, n) {
       return Ya(e, n)
   }
   var na = null,
       Fi = null,
       Ur = !1,
       ia = !1,
       Lr = !1,
       Gn = 0;

   function Xt(e) {
       e !== Fi && e.next === null && (Fi === null ? na = Fi = e : Fi = Fi.next = e), ia = !0, Ur || (Ur = !0, gv())
   }

   function Po(e, n) {
       if (!Lr && ia) {
           Lr = !0;
           do
               for (var o = !1, s = na; s !== null;) {
                   if (e !== 0) {
                       var d = s.pendingLanes;
                       if (d === 0) var p = 0;
                       else {
                           var T = s.suspendedLanes,
                               _ = s.pingedLanes;
                           p = (1 << 31 - Tt(42 | e) + 1) - 1, p &= d & ~(T & ~_), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0
                       }
                       p !== 0 && (o = !0, np(s, p))
                   } else p = pe, p = sl(s, s === be ? p : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1), (p & 3) === 0 || lo(s, p) || (o = !0, np(s, p));
                   s = s.next
               }
           while (o);
           Lr = !1
       }
   }

   function hv() {
       jd()
   }

   function jd() {
       ia = Ur = !1;
       var e = 0;
       Gn !== 0 && Mv() && (e = Gn);
       for (var n = yt(), o = null, s = na; s !== null;) {
           var d = s.next,
               p = ep(s, n);
           p === 0 ? (s.next = null, o === null ? na = d : o.next = d, d === null && (Fi = o)) : (o = s, (e !== 0 || (p & 3) !== 0) && (ia = !0)), s = d
       }
       Ke !== 0 && Ke !== 5 || Po(e), Gn !== 0 && (Gn = 0)
   }

   function ep(e, n) {
       for (var o = e.suspendedLanes, s = e.pingedLanes, d = e.expirationTimes, p = e.pendingLanes & -62914561; 0 < p;) {
           var T = 31 - Tt(p),
               _ = 1 << T,
               A = d[T];
           A === -1 ? ((_ & o) === 0 || (_ & s) !== 0) && (d[T] = Bg(_, n)) : A <= n && (e.expiredLanes |= _), p &= ~_
       }
       if (n = be, o = pe, o = sl(e, e === n ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s = e.callbackNode, o === 0 || e === n && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) return s !== null && s !== null && Ja(s), e.callbackNode = null, e.callbackPriority = 0;
       if ((o & 3) === 0 || lo(e, o)) {
           if (n = o & -o, n === e.callbackPriority) return n;
           switch (s !== null && Ja(s), Qa(o)) {
               case 2:
               case 8:
                   o = Ou;
                   break;
               case 32:
                   o = il;
                   break;
               case 268435456:
                   o = Fu;
                   break;
               default:
                   o = il
           }
           return s = tp.bind(null, e), o = Ya(o, s), e.callbackPriority = n, e.callbackNode = o, n
       }
       return s !== null && s !== null && Ja(s), e.callbackPriority = 2, e.callbackNode = null, 2
   }

   function tp(e, n) {
       if (Ke !== 0 && Ke !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
       var o = e.callbackNode;
       if (ta() && e.callbackNode !== o) return null;
       var s = pe;
       return s = sl(e, e === be ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s === 0 ? null : (Hd(e, s, n), ep(e, yt()), e.callbackNode != null && e.callbackNode === o ? tp.bind(null, e) : null)
   }

   function np(e, n) {
       if (ta()) return null;
       Hd(e, n, !0)
   }

   function gv() {
       xv(function() {
           (Se & 6) !== 0 ? Ya(Bu, hv) : jd()
       })
   }

   function Gr() {
       if (Gn === 0) {
           var e = Ii;
           e === 0 && (e = ol, ol <<= 1, (ol & 261888) === 0 && (ol = 256)), Gn = e
       }
       return Gn
   }

   function ip(e) {
       return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : fl("" + e)
   }

   function op(e, n) {
       var o = n.ownerDocument.createElement("input");
       return o.name = n.name, o.value = n.value, e.id && o.setAttribute("form", e.id), n.parentNode.insertBefore(o, n), e = new FormData(e), o.parentNode.removeChild(o), e
   }

   function yv(e, n, o, s, d) {
       if (n === "submit" && o && o.stateNode === d) {
           var p = ip((d[ct] || null).action),
               T = s.submitter;
           T && (n = (n = T[ct] || null) ? ip(n.formAction) : T.getAttribute("formAction"), n !== null && (p = n, T = null));
           var _ = new hl("action", "action", null, s, d);
           e.push({
               event: _,
               listeners: [{
                   instance: null,
                   listener: function() {
                       if (s.defaultPrevented) {
                           if (Gn !== 0) {
                               var A = T ? op(d, T) : new FormData(d);
                               tr(o, {
                                   pending: !0,
                                   data: A,
                                   method: d.method,
                                   action: p
                               }, null, A)
                           }
                       } else typeof p == "function" && (_.preventDefault(), A = T ? op(d, T) : new FormData(d), tr(o, {
                           pending: !0,
                           data: A,
                           method: d.method,
                           action: p
                       }, p, A))
                   },
                   currentTarget: d
               }]
           })
       }
   }
   for (var Hr = 0; Hr < vs.length; Hr++) {
       var qr = vs[Hr],
           vv = qr.toLowerCase(),
           Tv = qr[0].toUpperCase() + qr.slice(1);
       zt(vv, "on" + Tv)
   }
   zt(Lc, "onAnimationEnd"), zt(Gc, "onAnimationIteration"), zt(Hc, "onAnimationStart"), zt("dblclick", "onDoubleClick"), zt("focusin", "onFocus"), zt("focusout", "onBlur"), zt(Gy, "onTransitionRun"), zt(Hy, "onTransitionStart"), zt(qy, "onTransitionCancel"), zt(qc, "onTransitionEnd"), hi("onMouseEnter", ["mouseout", "mouseover"]), hi("onMouseLeave", ["mouseout", "mouseover"]), hi("onPointerEnter", ["pointerout", "pointerover"]), hi("onPointerLeave", ["pointerout", "pointerover"]), Jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
   var Bo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
       Sv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));

   function lp(e, n) {
       n = (n & 4) !== 0;
       for (var o = 0; o < e.length; o++) {
           var s = e[o],
               d = s.event;
           s = s.listeners;
           e: {
               var p = void 0;
               if (n)
                   for (var T = s.length - 1; 0 <= T; T--) {
                       var _ = s[T],
                           A = _.instance,
                           D = _.currentTarget;
                       if (_ = _.listener, A !== p && d.isPropagationStopped()) break e;
                       p = _, d.currentTarget = D;
                       try {
                           p(d)
                       } catch (q) {
                           vl(q)
                       }
                       d.currentTarget = null, p = A
                   } else
                       for (T = 0; T < s.length; T++) {
                           if (_ = s[T], A = _.instance, D = _.currentTarget, _ = _.listener, A !== p && d.isPropagationStopped()) break e;
                           p = _, d.currentTarget = D;
                           try {
                               p(d)
                           } catch (q) {
                               vl(q)
                           }
                           d.currentTarget = null, p = A
                       }
           }
       }
   }

   function fe(e, n) {
       var o = n[Za];
       o === void 0 && (o = n[Za] = new Set);
       var s = e + "__bubble";
       o.has(s) || (ap(n, e, 2, !1), o.add(s))
   }

   function Vr(e, n, o) {
       var s = 0;
       n && (s |= 4), ap(o, e, s, n)
   }
   var oa = "_reactListening" + Math.random().toString(36).slice(2);

   function zr(e) {
       if (!e[oa]) {
           e[oa] = !0, Wu.forEach(function(o) {
               o !== "selectionchange" && (Sv.has(o) || Vr(o, !1, e), Vr(o, !0, e))
           });
           var n = e.nodeType === 9 ? e : e.ownerDocument;
           n === null || n[oa] || (n[oa] = !0, Vr("selectionchange", !1, n))
       }
   }

   function ap(e, n, o, s) {
       switch (Gp(n)) {
           case 2:
               var d = Xv;
               break;
           case 8:
               d = Qv;
               break;
           default:
               d = eu
       }
       o = d.bind(null, n, o, e), d = void 0, !ls || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = !0), s ? d !== void 0 ? e.addEventListener(n, o, {
           capture: !0,
           passive: d
       }) : e.addEventListener(n, o, !0) : d !== void 0 ? e.addEventListener(n, o, {
           passive: d
       }) : e.addEventListener(n, o, !1)
   }

   function kr(e, n, o, s, d) {
       var p = s;
       if ((n & 1) === 0 && (n & 2) === 0 && s !== null) e: for (;;) {
           if (s === null) return;
           var T = s.tag;
           if (T === 3 || T === 4) {
               var _ = s.stateNode.containerInfo;
               if (_ === d) break;
               if (T === 4)
                   for (T = s.return; T !== null;) {
                       var A = T.tag;
                       if ((A === 3 || A === 4) && T.stateNode.containerInfo === d) return;
                       T = T.return
                   }
               for (; _ !== null;) {
                   if (T = di(_), T === null) return;
                   if (A = T.tag, A === 5 || A === 6 || A === 26 || A === 27) {
                       s = p = T;
                       continue e
                   }
                   _ = _.parentNode
               }
           }
           s = s.return
       }
       cc(function() {
           var D = p,
               q = is(o),
               z = [];
           e: {
               var w = Vc.get(e);
               if (w !== void 0) {
                   var L = hl,
                       Q = e;
                   switch (e) {
                       case "keypress":
                           if (pl(o) === 0) break e;
                       case "keydown":
                       case "keyup":
                           L = py;
                           break;
                       case "focusin":
                           Q = "focus", L = us;
                           break;
                       case "focusout":
                           Q = "blur", L = us;
                           break;
                       case "beforeblur":
                       case "afterblur":
                           L = us;
                           break;
                       case "click":
                           if (o.button === 2) break e;
                       case "auxclick":
                       case "dblclick":
                       case "mousedown":
                       case "mousemove":
                       case "mouseup":
                       case "mouseout":
                       case "mouseover":
                       case "contextmenu":
                           L = pc;
                           break;
                       case "drag":
                       case "dragend":
                       case "dragenter":
                       case "dragexit":
                       case "dragleave":
                       case "dragover":
                       case "dragstart":
                       case "drop":
                           L = ty;
                           break;
                       case "touchcancel":
                       case "touchend":
                       case "touchmove":
                       case "touchstart":
                           L = gy;
                           break;
                       case Lc:
                       case Gc:
                       case Hc:
                           L = oy;
                           break;
                       case qc:
                           L = vy;
                           break;
                       case "scroll":
                       case "scrollend":
                           L = jg;
                           break;
                       case "wheel":
                           L = Sy;
                           break;
                       case "copy":
                       case "cut":
                       case "paste":
                           L = ay;
                           break;
                       case "gotpointercapture":
                       case "lostpointercapture":
                       case "pointercancel":
                       case "pointerdown":
                       case "pointermove":
                       case "pointerout":
                       case "pointerover":
                       case "pointerup":
                           L = hc;
                           break;
                       case "toggle":
                       case "beforetoggle":
                           L = _y
                   }
                   var ne = (n & 4) !== 0,
                       Ie = !ne && (e === "scroll" || e === "scrollend"),
                       x = ne ? w !== null ? w + "Capture" : null : w;
                   ne = [];
                   for (var R = D, I; R !== null;) {
                       var V = R;
                       if (I = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || I === null || x === null || (V = uo(R, x), V != null && ne.push(Oo(R, V, I))), Ie) break;
                       R = R.return
                   }
                   0 < ne.length && (w = new L(w, Q, null, o, q), z.push({
                       event: w,
                       listeners: ne
                   }))
               }
           }
           if ((n & 7) === 0) {
               e: {
                   if (w = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", w && o !== ns && (Q = o.relatedTarget || o.fromElement) && (di(Q) || Q[fi])) break e;
                   if ((L || w) && (w = q.window === q ? q : (w = q.ownerDocument) ? w.defaultView || w.parentWindow : window, L ? (Q = o.relatedTarget || o.toElement, L = D, Q = Q ? di(Q) : null, Q !== null && (Ie = f(Q), ne = Q.tag, Q !== Ie || ne !== 5 && ne !== 27 && ne !== 6) && (Q = null)) : (L = null, Q = D), L !== Q)) {
                       if (ne = pc, V = "onMouseLeave", x = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ne = hc, V = "onPointerLeave", x = "onPointerEnter", R = "pointer"), Ie = L == null ? w : ro(L), I = Q == null ? w : ro(Q), w = new ne(V, R + "leave", L, o, q), w.target = Ie, w.relatedTarget = I, V = null, di(q) === D && (ne = new ne(x, R + "enter", Q, o, q), ne.target = I, ne.relatedTarget = Ie, V = ne), Ie = V, L && Q) t: {
                           for (ne = Ev, x = L, R = Q, I = 0, V = x; V; V = ne(V)) I++;V = 0;
                           for (var j = R; j; j = ne(j)) V++;
                           for (; 0 < I - V;) x = ne(x),
                           I--;
                           for (; 0 < V - I;) R = ne(R),
                           V--;
                           for (; I--;) {
                               if (x === R || R !== null && x === R.alternate) {
                                   ne = x;
                                   break t
                               }
                               x = ne(x), R = ne(R)
                           }
                           ne = null
                       }
                       else ne = null;
                       L !== null && sp(z, w, L, ne, !1), Q !== null && Ie !== null && sp(z, Ie, Q, ne, !0)
                   }
               }
               e: {
                   if (w = D ? ro(D) : window, L = w.nodeName && w.nodeName.toLowerCase(), L === "select" || L === "input" && w.type === "file") var ye = Cc;
                   else if (Ec(w))
                       if (Ac) ye = wy;
                       else {
                           ye = Dy;
                           var $ = Iy
                       }
                   else L = w.nodeName,
                   !L || L.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? D && ts(D.elementType) && (ye = Cc) : ye = by;
                   if (ye && (ye = ye(e, D))) {
                       _c(z, ye, o, q);
                       break e
                   }
                   $ && $(e, w, D),
                   e === "focusout" && D && w.type === "number" && D.memoizedProps.value != null && es(w, "number", w.value)
               }
               switch ($ = D ? ro(D) : window, e) {
                   case "focusin":
                       (Ec($) || $.contentEditable === "true") && (Ei = $, hs = D, vo = null);
                       break;
                   case "focusout":
                       vo = hs = Ei = null;
                       break;
                   case "mousedown":
                       gs = !0;
                       break;
                   case "contextmenu":
                   case "mouseup":
                   case "dragend":
                       gs = !1, wc(z, o, q);
                       break;
                   case "selectionchange":
                       if (Ly) break;
                   case "keydown":
                   case "keyup":
                       wc(z, o, q)
               }
               var re;
               if (fs) e: {
                   switch (e) {
                       case "compositionstart":
                           var me = "onCompositionStart";
                           break e;
                       case "compositionend":
                           me = "onCompositionEnd";
                           break e;
                       case "compositionupdate":
                           me = "onCompositionUpdate";
                           break e
                   }
                   me = void 0
               }
               else Si ? Tc(e, o) && (me = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (me = "onCompositionStart");me && (gc && o.locale !== "ko" && (Si || me !== "onCompositionStart" ? me === "onCompositionEnd" && Si && (re = fc()) : (Tn = q, as = "value" in Tn ? Tn.value : Tn.textContent, Si = !0)), $ = la(D, me), 0 < $.length && (me = new mc(me, e, null, o, q), z.push({
                   event: me,
                   listeners: $
               }), re ? me.data = re : (re = Sc(o), re !== null && (me.data = re)))),
               (re = Ay ? Ry(e, o) : My(e, o)) && (me = la(D, "onBeforeInput"), 0 < me.length && ($ = new mc("onBeforeInput", "beforeinput", null, o, q), z.push({
                   event: $,
                   listeners: me
               }), $.data = re)),
               yv(z, e, D, o, q)
           }
           lp(z, n)
       })
   }

   function Oo(e, n, o) {
       return {
           instance: e,
           listener: n,
           currentTarget: o
       }
   }

   function la(e, n) {
       for (var o = n + "Capture", s = []; e !== null;) {
           var d = e,
               p = d.stateNode;
           if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || p === null || (d = uo(e, o), d != null && s.unshift(Oo(e, d, p)), d = uo(e, n), d != null && s.push(Oo(e, d, p))), e.tag === 3) return s;
           e = e.return
       }
       return []
   }

   function Ev(e) {
       if (e === null) return null;
       do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
       return e || null
   }

   function sp(e, n, o, s, d) {
       for (var p = n._reactName, T = []; o !== null && o !== s;) {
           var _ = o,
               A = _.alternate,
               D = _.stateNode;
           if (_ = _.tag, A !== null && A === s) break;
           _ !== 5 && _ !== 26 && _ !== 27 || D === null || (A = D, d ? (D = uo(o, p), D != null && T.unshift(Oo(o, D, A))) : d || (D = uo(o, p), D != null && T.push(Oo(o, D, A)))), o = o.return
       }
       T.length !== 0 && e.push({
           event: n,
           listeners: T
       })
   }
   var _v = /\r\n?/g,
       Cv = /\u0000|\uFFFD/g;

   function rp(e) {
       return (typeof e == "string" ? e : "" + e).replace(_v, `
`).replace(Cv, "")
   }

   function up(e, n) {
       return n = rp(n), rp(e) === n
   }

   function xe(e, n, o, s, d, p) {
       switch (o) {
           case "children":
               typeof s == "string" ? n === "body" || n === "textarea" && s === "" || yi(e, s) : (typeof s == "number" || typeof s == "bigint") && n !== "body" && yi(e, "" + s);
               break;
           case "className":
               ul(e, "class", s);
               break;
           case "tabIndex":
               ul(e, "tabindex", s);
               break;
           case "dir":
           case "role":
           case "viewBox":
           case "width":
           case "height":
               ul(e, o, s);
               break;
           case "style":
               rc(e, s, p);
               break;
           case "data":
               if (n !== "object") {
                   ul(e, "data", s);
                   break
               }
           case "src":
           case "href":
               if (s === "" && (n !== "a" || o !== "href")) {
                   e.removeAttribute(o);
                   break
               }
               if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
                   e.removeAttribute(o);
                   break
               }
               s = fl("" + s), e.setAttribute(o, s);
               break;
           case "action":
           case "formAction":
               if (typeof s == "function") {
                   e.setAttribute(o, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                   break
               } else typeof p == "function" && (o === "formAction" ? (n !== "input" && xe(e, n, "name", d.name, d, null), xe(e, n, "formEncType", d.formEncType, d, null), xe(e, n, "formMethod", d.formMethod, d, null), xe(e, n, "formTarget", d.formTarget, d, null)) : (xe(e, n, "encType", d.encType, d, null), xe(e, n, "method", d.method, d, null), xe(e, n, "target", d.target, d, null)));
               if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                   e.removeAttribute(o);
                   break
               }
               s = fl("" + s), e.setAttribute(o, s);
               break;
           case "onClick":
               s != null && (e.onclick = Zt);
               break;
           case "onScroll":
               s != null && fe("scroll", e);
               break;
           case "onScrollEnd":
               s != null && fe("scrollend", e);
               break;
           case "dangerouslySetInnerHTML":
               if (s != null) {
                   if (typeof s != "object" || !("__html" in s)) throw Error(a(61));
                   if (o = s.__html, o != null) {
                       if (d.children != null) throw Error(a(60));
                       e.innerHTML = o
                   }
               }
               break;
           case "multiple":
               e.multiple = s && typeof s != "function" && typeof s != "symbol";
               break;
           case "muted":
               e.muted = s && typeof s != "function" && typeof s != "symbol";
               break;
           case "suppressContentEditableWarning":
           case "suppressHydrationWarning":
           case "defaultValue":
           case "defaultChecked":
           case "innerHTML":
           case "ref":
               break;
           case "autoFocus":
               break;
           case "xlinkHref":
               if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
                   e.removeAttribute("xlink:href");
                   break
               }
               o = fl("" + s), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o);
               break;
           case "contentEditable":
           case "spellCheck":
           case "draggable":
           case "value":
           case "autoReverse":
           case "externalResourcesRequired":
           case "focusable":
           case "preserveAlpha":
               s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(o, "" + s) : e.removeAttribute(o);
               break;
           case "inert":
           case "allowFullScreen":
           case "async":
           case "autoPlay":
           case "controls":
           case "default":
           case "defer":
           case "disabled":
           case "disablePictureInPicture":
           case "disableRemotePlayback":
           case "formNoValidate":
           case "hidden":
           case "loop":
           case "noModule":
           case "noValidate":
           case "open":
           case "playsInline":
           case "readOnly":
           case "required":
           case "reversed":
           case "scoped":
           case "seamless":
           case "itemScope":
               s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(o, "") : e.removeAttribute(o);
               break;
           case "capture":
           case "download":
               s === !0 ? e.setAttribute(o, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(o, s) : e.removeAttribute(o);
               break;
           case "cols":
           case "rows":
           case "size":
           case "span":
               s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(o, s) : e.removeAttribute(o);
               break;
           case "rowSpan":
           case "start":
               s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(o) : e.setAttribute(o, s);
               break;
           case "popover":
               fe("beforetoggle", e), fe("toggle", e), rl(e, "popover", s);
               break;
           case "xlinkActuate":
               Qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
               break;
           case "xlinkArcrole":
               Qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
               break;
           case "xlinkRole":
               Qt(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
               break;
           case "xlinkShow":
               Qt(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
               break;
           case "xlinkTitle":
               Qt(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
               break;
           case "xlinkType":
               Qt(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
               break;
           case "xmlBase":
               Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
               break;
           case "xmlLang":
               Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
               break;
           case "xmlSpace":
               Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
               break;
           case "is":
               rl(e, "is", s);
               break;
           case "innerText":
           case "textContent":
               break;
           default:
               (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = $g.get(o) || o, rl(e, o, s))
       }
   }

   function Pr(e, n, o, s, d, p) {
       switch (o) {
           case "style":
               rc(e, s, p);
               break;
           case "dangerouslySetInnerHTML":
               if (s != null) {
                   if (typeof s != "object" || !("__html" in s)) throw Error(a(61));
                   if (o = s.__html, o != null) {
                       if (d.children != null) throw Error(a(60));
                       e.innerHTML = o
                   }
               }
               break;
           case "children":
               typeof s == "string" ? yi(e, s) : (typeof s == "number" || typeof s == "bigint") && yi(e, "" + s);
               break;
           case "onScroll":
               s != null && fe("scroll", e);
               break;
           case "onScrollEnd":
               s != null && fe("scrollend", e);
               break;
           case "onClick":
               s != null && (e.onclick = Zt);
               break;
           case "suppressContentEditableWarning":
           case "suppressHydrationWarning":
           case "innerHTML":
           case "ref":
               break;
           case "innerText":
           case "textContent":
               break;
           default:
               if (!ju.hasOwnProperty(o)) e: {
                   if (o[0] === "o" && o[1] === "n" && (d = o.endsWith("Capture"), n = o.slice(2, d ? o.length - 7 : void 0), p = e[ct] || null, p = p != null ? p[o] : null, typeof p == "function" && e.removeEventListener(n, p, d), typeof s == "function")) {
                       typeof p != "function" && p !== null && (o in e ? e[o] = null : e.hasAttribute(o) && e.removeAttribute(o)), e.addEventListener(n, s, d);
                       break e
                   }
                   o in e ? e[o] = s : s === !0 ? e.setAttribute(o, "") : rl(e, o, s)
               }
       }
   }

   function nt(e, n, o) {
       switch (n) {
           case "div":
           case "span":
           case "svg":
           case "path":
           case "a":
           case "g":
           case "p":
           case "li":
               break;
           case "img":
               fe("error", e), fe("load", e);
               var s = !1,
                   d = !1,
                   p;
               for (p in o)
                   if (o.hasOwnProperty(p)) {
                       var T = o[p];
                       if (T != null) switch (p) {
                           case "src":
                               s = !0;
                               break;
                           case "srcSet":
                               d = !0;
                               break;
                           case "children":
                           case "dangerouslySetInnerHTML":
                               throw Error(a(137, n));
                           default:
                               xe(e, n, p, T, o, null)
                       }
                   } d && xe(e, n, "srcSet", o.srcSet, o, null), s && xe(e, n, "src", o.src, o, null);
               return;
           case "input":
               fe("invalid", e);
               var _ = p = T = d = null,
                   A = null,
                   D = null;
               for (s in o)
                   if (o.hasOwnProperty(s)) {
                       var q = o[s];
                       if (q != null) switch (s) {
                           case "name":
                               d = q;
                               break;
                           case "type":
                               T = q;
                               break;
                           case "checked":
                               A = q;
                               break;
                           case "defaultChecked":
                               D = q;
                               break;
                           case "value":
                               p = q;
                               break;
                           case "defaultValue":
                               _ = q;
                               break;
                           case "children":
                           case "dangerouslySetInnerHTML":
                               if (q != null) throw Error(a(137, n));
                               break;
                           default:
                               xe(e, n, s, q, o, null)
                       }
                   } oc(e, p, _, A, D, T, d, !1);
               return;
           case "select":
               fe("invalid", e), s = T = p = null;
               for (d in o)
                   if (o.hasOwnProperty(d) && (_ = o[d], _ != null)) switch (d) {
                       case "value":
                           p = _;
                           break;
                       case "defaultValue":
                           T = _;
                           break;
                       case "multiple":
                           s = _;
                       default:
                           xe(e, n, d, _, o, null)
                   }
               n = p, o = T, e.multiple = !!s, n != null ? gi(e, !!s, n, !1) : o != null && gi(e, !!s, o, !0);
               return;
           case "textarea":
               fe("invalid", e), p = d = s = null;
               for (T in o)
                   if (o.hasOwnProperty(T) && (_ = o[T], _ != null)) switch (T) {
                       case "value":
                           s = _;
                           break;
                       case "defaultValue":
                           d = _;
                           break;
                       case "children":
                           p = _;
                           break;
                       case "dangerouslySetInnerHTML":
                           if (_ != null) throw Error(a(91));
                           break;
                       default:
                           xe(e, n, T, _, o, null)
                   }
               ac(e, s, d, p);
               return;
           case "option":
               for (A in o)
                   if (o.hasOwnProperty(A) && (s = o[A], s != null)) switch (A) {
                       case "selected":
                           e.selected = s && typeof s != "function" && typeof s != "symbol";
                           break;
                       default:
                           xe(e, n, A, s, o, null)
                   }
               return;
           case "dialog":
               fe("beforetoggle", e), fe("toggle", e), fe("cancel", e), fe("close", e);
               break;
           case "iframe":
           case "object":
               fe("load", e);
               break;
           case "video":
           case "audio":
               for (s = 0; s < Bo.length; s++) fe(Bo[s], e);
               break;
           case "image":
               fe("error", e), fe("load", e);
               break;
           case "details":
               fe("toggle", e);
               break;
           case "embed":
           case "source":
           case "link":
               fe("error", e), fe("load", e);
           case "area":
           case "base":
           case "br":
           case "col":
           case "hr":
           case "keygen":
           case "meta":
           case "param":
           case "track":
           case "wbr":
           case "menuitem":
               for (D in o)
                   if (o.hasOwnProperty(D) && (s = o[D], s != null)) switch (D) {
                       case "children":
                       case "dangerouslySetInnerHTML":
                           throw Error(a(137, n));
                       default:
                           xe(e, n, D, s, o, null)
                   }
               return;
           default:
               if (ts(n)) {
                   for (q in o) o.hasOwnProperty(q) && (s = o[q], s !== void 0 && Pr(e, n, q, s, o, void 0));
                   return
               }
       }
       for (_ in o) o.hasOwnProperty(_) && (s = o[_], s != null && xe(e, n, _, s, o, null))
   }

   function Av(e, n, o, s) {
       switch (n) {
           case "div":
           case "span":
           case "svg":
           case "path":
           case "a":
           case "g":
           case "p":
           case "li":
               break;
           case "input":
               var d = null,
                   p = null,
                   T = null,
                   _ = null,
                   A = null,
                   D = null,
                   q = null;
               for (L in o) {
                   var z = o[L];
                   if (o.hasOwnProperty(L) && z != null) switch (L) {
                       case "checked":
                           break;
                       case "value":
                           break;
                       case "defaultValue":
                           A = z;
                       default:
                           s.hasOwnProperty(L) || xe(e, n, L, null, s, z)
                   }
               }
               for (var w in s) {
                   var L = s[w];
                   if (z = o[w], s.hasOwnProperty(w) && (L != null || z != null)) switch (w) {
                       case "type":
                           p = L;
                           break;
                       case "name":
                           d = L;
                           break;
                       case "checked":
                           D = L;
                           break;
                       case "defaultChecked":
                           q = L;
                           break;
                       case "value":
                           T = L;
                           break;
                       case "defaultValue":
                           _ = L;
                           break;
                       case "children":
                       case "dangerouslySetInnerHTML":
                           if (L != null) throw Error(a(137, n));
                           break;
                       default:
                           L !== z && xe(e, n, w, L, s, z)
                   }
               }
               ja(e, T, _, A, D, q, p, d);
               return;
           case "select":
               L = T = _ = w = null;
               for (p in o)
                   if (A = o[p], o.hasOwnProperty(p) && A != null) switch (p) {
                       case "value":
                           break;
                       case "multiple":
                           L = A;
                       default:
                           s.hasOwnProperty(p) || xe(e, n, p, null, s, A)
                   }
               for (d in s)
                   if (p = s[d], A = o[d], s.hasOwnProperty(d) && (p != null || A != null)) switch (d) {
                       case "value":
                           w = p;
                           break;
                       case "defaultValue":
                           _ = p;
                           break;
                       case "multiple":
                           T = p;
                       default:
                           p !== A && xe(e, n, d, p, s, A)
                   }
               n = _, o = T, s = L, w != null ? gi(e, !!o, w, !1) : !!s != !!o && (n != null ? gi(e, !!o, n, !0) : gi(e, !!o, o ? [] : "", !1));
               return;
           case "textarea":
               L = w = null;
               for (_ in o)
                   if (d = o[_], o.hasOwnProperty(_) && d != null && !s.hasOwnProperty(_)) switch (_) {
                       case "value":
                           break;
                       case "children":
                           break;
                       default:
                           xe(e, n, _, null, s, d)
                   }
               for (T in s)
                   if (d = s[T], p = o[T], s.hasOwnProperty(T) && (d != null || p != null)) switch (T) {
                       case "value":
                           w = d;
                           break;
                       case "defaultValue":
                           L = d;
                           break;
                       case "children":
                           break;
                       case "dangerouslySetInnerHTML":
                           if (d != null) throw Error(a(91));
                           break;
                       default:
                           d !== p && xe(e, n, T, d, s, p)
                   }
               lc(e, w, L);
               return;
           case "option":
               for (var Q in o)
                   if (w = o[Q], o.hasOwnProperty(Q) && w != null && !s.hasOwnProperty(Q)) switch (Q) {
                       case "selected":
                           e.selected = !1;
                           break;
                       default:
                           xe(e, n, Q, null, s, w)
                   }
               for (A in s)
                   if (w = s[A], L = o[A], s.hasOwnProperty(A) && w !== L && (w != null || L != null)) switch (A) {
                       case "selected":
                           e.selected = w && typeof w != "function" && typeof w != "symbol";
                           break;
                       default:
                           xe(e, n, A, w, s, L)
                   }
               return;
           case "img":
           case "link":
           case "area":
           case "base":
           case "br":
           case "col":
           case "embed":
           case "hr":
           case "keygen":
           case "meta":
           case "param":
           case "source":
           case "track":
           case "wbr":
           case "menuitem":
               for (var ne in o) w = o[ne], o.hasOwnProperty(ne) && w != null && !s.hasOwnProperty(ne) && xe(e, n, ne, null, s, w);
               for (D in s)
                   if (w = s[D], L = o[D], s.hasOwnProperty(D) && w !== L && (w != null || L != null)) switch (D) {
                       case "children":
                       case "dangerouslySetInnerHTML":
                           if (w != null) throw Error(a(137, n));
                           break;
                       default:
                           xe(e, n, D, w, s, L)
                   }
               return;
           default:
               if (ts(n)) {
                   for (var Ie in o) w = o[Ie], o.hasOwnProperty(Ie) && w !== void 0 && !s.hasOwnProperty(Ie) && Pr(e, n, Ie, void 0, s, w);
                   for (q in s) w = s[q], L = o[q], !s.hasOwnProperty(q) || w === L || w === void 0 && L === void 0 || Pr(e, n, q, w, s, L);
                   return
               }
       }
       for (var x in o) w = o[x], o.hasOwnProperty(x) && w != null && !s.hasOwnProperty(x) && xe(e, n, x, null, s, w);
       for (z in s) w = s[z], L = o[z], !s.hasOwnProperty(z) || w === L || w == null && L == null || xe(e, n, z, w, s, L)
   }

   function cp(e) {
       switch (e) {
           case "css":
           case "script":
           case "font":
           case "img":
           case "image":
           case "input":
           case "link":
               return !0;
           default:
               return !1
       }
   }

   function Rv() {
       if (typeof performance.getEntriesByType == "function") {
           for (var e = 0, n = 0, o = performance.getEntriesByType("resource"), s = 0; s < o.length; s++) {
               var d = o[s],
                   p = d.transferSize,
                   T = d.initiatorType,
                   _ = d.duration;
               if (p && _ && cp(T)) {
                   for (T = 0, _ = d.responseEnd, s += 1; s < o.length; s++) {
                       var A = o[s],
                           D = A.startTime;
                       if (D > _) break;
                       var q = A.transferSize,
                           z = A.initiatorType;
                       q && cp(z) && (A = A.responseEnd, T += q * (A < _ ? 1 : (_ - D) / (A - D)))
                   }
                   if (--s, n += 8 * (p + T) / (d.duration / 1e3), e++, 10 < e) break
               }
           }
           if (0 < e) return n / e / 1e6
       }
       return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5
   }
   var Br = null,
       Or = null;

   function aa(e) {
       return e.nodeType === 9 ? e : e.ownerDocument
   }

   function fp(e) {
       switch (e) {
           case "http://www.w3.org/2000/svg":
               return 1;
           case "http://www.w3.org/1998/Math/MathML":
               return 2;
           default:
               return 0
       }
   }

   function dp(e, n) {
       if (e === 0) switch (n) {
           case "svg":
               return 1;
           case "math":
               return 2;
           default:
               return 0
       }
       return e === 1 && n === "foreignObject" ? 0 : e
   }

   function Fr(e, n) {
       return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
   }
   var Yr = null;

   function Mv() {
       var e = window.event;
       return e && e.type === "popstate" ? e === Yr ? !1 : (Yr = e, !0) : (Yr = null, !1)
   }
   var pp = typeof setTimeout == "function" ? setTimeout : void 0,
       Nv = typeof clearTimeout == "function" ? clearTimeout : void 0,
       mp = typeof Promise == "function" ? Promise : void 0,
       xv = typeof queueMicrotask == "function" ? queueMicrotask : typeof mp < "u" ? function(e) {
           return mp.resolve(null).then(e).catch(Iv)
       } : pp;

   function Iv(e) {
       setTimeout(function() {
           throw e
       })
   }

   function Hn(e) {
       return e === "head"
   }

   function hp(e, n) {
       var o = n,
           s = 0;
       do {
           var d = o.nextSibling;
           if (e.removeChild(o), d && d.nodeType === 8)
               if (o = d.data, o === "/$" || o === "/&") {
                   if (s === 0) {
                       e.removeChild(d), Xi(n);
                       return
                   }
                   s--
               } else if (o === "$" || o === "$?" || o === "$~" || o === "$!" || o === "&") s++;
           else if (o === "html") Fo(e.ownerDocument.documentElement);
           else if (o === "head") {
               o = e.ownerDocument.head, Fo(o);
               for (var p = o.firstChild; p;) {
                   var T = p.nextSibling,
                       _ = p.nodeName;
                   p[so] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && p.rel.toLowerCase() === "stylesheet" || o.removeChild(p), p = T
               }
           } else o === "body" && Fo(e.ownerDocument.body);
           o = d
       } while (o);
       Xi(n)
   }

   function gp(e, n) {
       var o = e;
       e = 0;
       do {
           var s = o.nextSibling;
           if (o.nodeType === 1 ? n ? (o._stashedDisplay = o.style.display, o.style.display = "none") : (o.style.display = o._stashedDisplay || "", o.getAttribute("style") === "" && o.removeAttribute("style")) : o.nodeType === 3 && (n ? (o._stashedText = o.nodeValue, o.nodeValue = "") : o.nodeValue = o._stashedText || ""), s && s.nodeType === 8)
               if (o = s.data, o === "/$") {
                   if (e === 0) break;
                   e--
               } else o !== "$" && o !== "$?" && o !== "$~" && o !== "$!" || e++;
           o = s
       } while (o)
   }

   function Jr(e) {
       var n = e.firstChild;
       for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
           var o = n;
           switch (n = n.nextSibling, o.nodeName) {
               case "HTML":
               case "HEAD":
               case "BODY":
                   Jr(o), $a(o);
                   continue;
               case "SCRIPT":
               case "STYLE":
                   continue;
               case "LINK":
                   if (o.rel.toLowerCase() === "stylesheet") continue
           }
           e.removeChild(o)
       }
   }

   function Dv(e, n, o, s) {
       for (; e.nodeType === 1;) {
           var d = o;
           if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
               if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
           } else if (s) {
               if (!e[so]) switch (n) {
                   case "meta":
                       if (!e.hasAttribute("itemprop")) break;
                       return e;
                   case "link":
                       if (p = e.getAttribute("rel"), p === "stylesheet" && e.hasAttribute("data-precedence")) break;
                       if (p !== d.rel || e.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || e.getAttribute("title") !== (d.title == null ? null : d.title)) break;
                       return e;
                   case "style":
                       if (e.hasAttribute("data-precedence")) break;
                       return e;
                   case "script":
                       if (p = e.getAttribute("src"), (p !== (d.src == null ? null : d.src) || e.getAttribute("type") !== (d.type == null ? null : d.type) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && p && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                       return e;
                   default:
                       return e
               }
           } else if (n === "input" && e.type === "hidden") {
               var p = d.name == null ? null : "" + d.name;
               if (d.type === "hidden" && e.getAttribute("name") === p) return e
           } else return e;
           if (e = Gt(e.nextSibling), e === null) break
       }
       return null
   }

   function bv(e, n, o) {
       if (n === "") return null;
       for (; e.nodeType !== 3;)
           if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !o || (e = Gt(e.nextSibling), e === null)) return null;
       return e
   }

   function yp(e, n) {
       for (; e.nodeType !== 8;)
           if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Gt(e.nextSibling), e === null)) return null;
       return e
   }

   function Kr(e) {
       return e.data === "$?" || e.data === "$~"
   }

   function Xr(e) {
       return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
   }

   function wv(e, n) {
       var o = e.ownerDocument;
       if (e.data === "$~") e._reactRetry = n;
       else if (e.data !== "$?" || o.readyState !== "loading") n();
       else {
           var s = function() {
               n(), o.removeEventListener("DOMContentLoaded", s)
           };
           o.addEventListener("DOMContentLoaded", s), e._reactRetry = s
       }
   }

   function Gt(e) {
       for (; e != null; e = e.nextSibling) {
           var n = e.nodeType;
           if (n === 1 || n === 3) break;
           if (n === 8) {
               if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F") break;
               if (n === "/$" || n === "/&") return null
           }
       }
       return e
   }
   var Qr = null;

   function vp(e) {
       e = e.nextSibling;
       for (var n = 0; e;) {
           if (e.nodeType === 8) {
               var o = e.data;
               if (o === "/$" || o === "/&") {
                   if (n === 0) return Gt(e.nextSibling);
                   n--
               } else o !== "$" && o !== "$!" && o !== "$?" && o !== "$~" && o !== "&" || n++
           }
           e = e.nextSibling
       }
       return null
   }

   function Tp(e) {
       e = e.previousSibling;
       for (var n = 0; e;) {
           if (e.nodeType === 8) {
               var o = e.data;
               if (o === "$" || o === "$!" || o === "$?" || o === "$~" || o === "&") {
                   if (n === 0) return e;
                   n--
               } else o !== "/$" && o !== "/&" || n++
           }
           e = e.previousSibling
       }
       return null
   }

   function Sp(e, n, o) {
       switch (n = aa(o), e) {
           case "html":
               if (e = n.documentElement, !e) throw Error(a(452));
               return e;
           case "head":
               if (e = n.head, !e) throw Error(a(453));
               return e;
           case "body":
               if (e = n.body, !e) throw Error(a(454));
               return e;
           default:
               throw Error(a(451))
       }
   }

   function Fo(e) {
       for (var n = e.attributes; n.length;) e.removeAttributeNode(n[0]);
       $a(e)
   }
   var Ht = new Map,
       Ep = new Set;

   function sa(e) {
       return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
   }
   var pn = O.d;
   O.d = {
       f: Uv,
       r: Lv,
       D: Gv,
       C: Hv,
       L: qv,
       m: Vv,
       X: kv,
       S: zv,
       M: Pv
   };

   function Uv() {
       var e = pn.f(),
           n = Wl();
       return e || n
   }

   function Lv(e) {
       var n = pi(e);
       n !== null && n.tag === 5 && n.type === "form" ? Vf(n) : pn.r(e)
   }
   var Yi = typeof document > "u" ? null : document;

   function _p(e, n, o) {
       var s = Yi;
       if (s && typeof n == "string" && n) {
           var d = xt(n);
           d = 'link[rel="' + e + '"][href="' + d + '"]', typeof o == "string" && (d += '[crossorigin="' + o + '"]'), Ep.has(d) || (Ep.add(d), e = {
               rel: e,
               crossOrigin: o,
               href: n
           }, s.querySelector(d) === null && (n = s.createElement("link"), nt(n, "link", e), Xe(n), s.head.appendChild(n)))
       }
   }

   function Gv(e) {
       pn.D(e), _p("dns-prefetch", e, null)
   }

   function Hv(e, n) {
       pn.C(e, n), _p("preconnect", e, n)
   }

   function qv(e, n, o) {
       pn.L(e, n, o);
       var s = Yi;
       if (s && e && n) {
           var d = 'link[rel="preload"][as="' + xt(n) + '"]';
           n === "image" && o && o.imageSrcSet ? (d += '[imagesrcset="' + xt(o.imageSrcSet) + '"]', typeof o.imageSizes == "string" && (d += '[imagesizes="' + xt(o.imageSizes) + '"]')) : d += '[href="' + xt(e) + '"]';
           var p = d;
           switch (n) {
               case "style":
                   p = Ji(e);
                   break;
               case "script":
                   p = Ki(e)
           }
           Ht.has(p) || (e = S({
               rel: "preload",
               href: n === "image" && o && o.imageSrcSet ? void 0 : e,
               as: n
           }, o), Ht.set(p, e), s.querySelector(d) !== null || n === "style" && s.querySelector(Yo(p)) || n === "script" && s.querySelector(Jo(p)) || (n = s.createElement("link"), nt(n, "link", e), Xe(n), s.head.appendChild(n)))
       }
   }

   function Vv(e, n) {
       pn.m(e, n);
       var o = Yi;
       if (o && e) {
           var s = n && typeof n.as == "string" ? n.as : "script",
               d = 'link[rel="modulepreload"][as="' + xt(s) + '"][href="' + xt(e) + '"]',
               p = d;
           switch (s) {
               case "audioworklet":
               case "paintworklet":
               case "serviceworker":
               case "sharedworker":
               case "worker":
               case "script":
                   p = Ki(e)
           }
           if (!Ht.has(p) && (e = S({
                   rel: "modulepreload",
                   href: e
               }, n), Ht.set(p, e), o.querySelector(d) === null)) {
               switch (s) {
                   case "audioworklet":
                   case "paintworklet":
                   case "serviceworker":
                   case "sharedworker":
                   case "worker":
                   case "script":
                       if (o.querySelector(Jo(p))) return
               }
               s = o.createElement("link"), nt(s, "link", e), Xe(s), o.head.appendChild(s)
           }
       }
   }

   function zv(e, n, o) {
       pn.S(e, n, o);
       var s = Yi;
       if (s && e) {
           var d = mi(s).hoistableStyles,
               p = Ji(e);
           n = n || "default";
           var T = d.get(p);
           if (!T) {
               var _ = {
                   loading: 0,
                   preload: null
               };
               if (T = s.querySelector(Yo(p))) _.loading = 5;
               else {
                   e = S({
                       rel: "stylesheet",
                       href: e,
                       "data-precedence": n
                   }, o), (o = Ht.get(p)) && Zr(e, o);
                   var A = T = s.createElement("link");
                   Xe(A), nt(A, "link", e), A._p = new Promise(function(D, q) {
                       A.onload = D, A.onerror = q
                   }), A.addEventListener("load", function() {
                       _.loading |= 1
                   }), A.addEventListener("error", function() {
                       _.loading |= 2
                   }), _.loading |= 4, ra(T, n, s)
               }
               T = {
                   type: "stylesheet",
                   instance: T,
                   count: 1,
                   state: _
               }, d.set(p, T)
           }
       }
   }

   function kv(e, n) {
       pn.X(e, n);
       var o = Yi;
       if (o && e) {
           var s = mi(o).hoistableScripts,
               d = Ki(e),
               p = s.get(d);
           p || (p = o.querySelector(Jo(d)), p || (e = S({
               src: e,
               async: !0
           }, n), (n = Ht.get(d)) && $r(e, n), p = o.createElement("script"), Xe(p), nt(p, "link", e), o.head.appendChild(p)), p = {
               type: "script",
               instance: p,
               count: 1,
               state: null
           }, s.set(d, p))
       }
   }

   function Pv(e, n) {
       pn.M(e, n);
       var o = Yi;
       if (o && e) {
           var s = mi(o).hoistableScripts,
               d = Ki(e),
               p = s.get(d);
           p || (p = o.querySelector(Jo(d)), p || (e = S({
               src: e,
               async: !0,
               type: "module"
           }, n), (n = Ht.get(d)) && $r(e, n), p = o.createElement("script"), Xe(p), nt(p, "link", e), o.head.appendChild(p)), p = {
               type: "script",
               instance: p,
               count: 1,
               state: null
           }, s.set(d, p))
       }
   }

   function Cp(e, n, o, s) {
       var d = (d = ue.current) ? sa(d) : null;
       if (!d) throw Error(a(446));
       switch (e) {
           case "meta":
           case "title":
               return null;
           case "style":
               return typeof o.precedence == "string" && typeof o.href == "string" ? (n = Ji(o.href), o = mi(d).hoistableStyles, s = o.get(n), s || (s = {
                   type: "style",
                   instance: null,
                   count: 0,
                   state: null
               }, o.set(n, s)), s) : {
                   type: "void",
                   instance: null,
                   count: 0,
                   state: null
               };
           case "link":
               if (o.rel === "stylesheet" && typeof o.href == "string" && typeof o.precedence == "string") {
                   e = Ji(o.href);
                   var p = mi(d).hoistableStyles,
                       T = p.get(e);
                   if (T || (d = d.ownerDocument || d, T = {
                           type: "stylesheet",
                           instance: null,
                           count: 0,
                           state: {
                               loading: 0,
                               preload: null
                           }
                       }, p.set(e, T), (p = d.querySelector(Yo(e))) && !p._p && (T.instance = p, T.state.loading = 5), Ht.has(e) || (o = {
                           rel: "preload",
                           as: "style",
                           href: o.href,
                           crossOrigin: o.crossOrigin,
                           integrity: o.integrity,
                           media: o.media,
                           hrefLang: o.hrefLang,
                           referrerPolicy: o.referrerPolicy
                       }, Ht.set(e, o), p || Bv(d, e, o, T.state))), n && s === null) throw Error(a(528, ""));
                   return T
               }
               if (n && s !== null) throw Error(a(529, ""));
               return null;
           case "script":
               return n = o.async, o = o.src, typeof o == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ki(o), o = mi(d).hoistableScripts, s = o.get(n), s || (s = {
                   type: "script",
                   instance: null,
                   count: 0,
                   state: null
               }, o.set(n, s)), s) : {
                   type: "void",
                   instance: null,
                   count: 0,
                   state: null
               };
           default:
               throw Error(a(444, e))
       }
   }

   function Ji(e) {
       return 'href="' + xt(e) + '"'
   }

   function Yo(e) {
       return 'link[rel="stylesheet"][' + e + "]"
   }

   function Ap(e) {
       return S({}, e, {
           "data-precedence": e.precedence,
           precedence: null
       })
   }

   function Bv(e, n, o, s) {
       e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? s.loading = 1 : (n = e.createElement("link"), s.preload = n, n.addEventListener("load", function() {
           return s.loading |= 1
       }), n.addEventListener("error", function() {
           return s.loading |= 2
       }), nt(n, "link", o), Xe(n), e.head.appendChild(n))
   }

   function Ki(e) {
       return '[src="' + xt(e) + '"]'
   }

   function Jo(e) {
       return "script[async]" + e
   }

   function Rp(e, n, o) {
       if (n.count++, n.instance === null) switch (n.type) {
           case "style":
               var s = e.querySelector('style[data-href~="' + xt(o.href) + '"]');
               if (s) return n.instance = s, Xe(s), s;
               var d = S({}, o, {
                   "data-href": o.href,
                   "data-precedence": o.precedence,
                   href: null,
                   precedence: null
               });
               return s = (e.ownerDocument || e).createElement("style"), Xe(s), nt(s, "style", d), ra(s, o.precedence, e), n.instance = s;
           case "stylesheet":
               d = Ji(o.href);
               var p = e.querySelector(Yo(d));
               if (p) return n.state.loading |= 4, n.instance = p, Xe(p), p;
               s = Ap(o), (d = Ht.get(d)) && Zr(s, d), p = (e.ownerDocument || e).createElement("link"), Xe(p);
               var T = p;
               return T._p = new Promise(function(_, A) {
                   T.onload = _, T.onerror = A
               }), nt(p, "link", s), n.state.loading |= 4, ra(p, o.precedence, e), n.instance = p;
           case "script":
               return p = Ki(o.src), (d = e.querySelector(Jo(p))) ? (n.instance = d, Xe(d), d) : (s = o, (d = Ht.get(p)) && (s = S({}, o), $r(s, d)), e = e.ownerDocument || e, d = e.createElement("script"), Xe(d), nt(d, "link", s), e.head.appendChild(d), n.instance = d);
           case "void":
               return null;
           default:
               throw Error(a(443, n.type))
       } else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (s = n.instance, n.state.loading |= 4, ra(s, o.precedence, e));
       return n.instance
   }

   function ra(e, n, o) {
       for (var s = o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), d = s.length ? s[s.length - 1] : null, p = d, T = 0; T < s.length; T++) {
           var _ = s[T];
           if (_.dataset.precedence === n) p = _;
           else if (p !== d) break
       }
       p ? p.parentNode.insertBefore(e, p.nextSibling) : (n = o.nodeType === 9 ? o.head : o, n.insertBefore(e, n.firstChild))
   }

   function Zr(e, n) {
       e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title)
   }

   function $r(e, n) {
       e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity)
   }
   var ua = null;

   function Mp(e, n, o) {
       if (ua === null) {
           var s = new Map,
               d = ua = new Map;
           d.set(o, s)
       } else d = ua, s = d.get(o), s || (s = new Map, d.set(o, s));
       if (s.has(e)) return s;
       for (s.set(e, null), o = o.getElementsByTagName(e), d = 0; d < o.length; d++) {
           var p = o[d];
           if (!(p[so] || p[We] || e === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
               var T = p.getAttribute(n) || "";
               T = e + T;
               var _ = s.get(T);
               _ ? _.push(p) : s.set(T, [p])
           }
       }
       return s
   }

   function Np(e, n, o) {
       e = e.ownerDocument || e, e.head.insertBefore(o, n === "title" ? e.querySelector("head > title") : null)
   }

   function Ov(e, n, o) {
       if (o === 1 || n.itemProp != null) return !1;
       switch (e) {
           case "meta":
           case "title":
               return !0;
           case "style":
               if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
               return !0;
           case "link":
               if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
               switch (n.rel) {
                   case "stylesheet":
                       return e = n.disabled, typeof n.precedence == "string" && e == null;
                   default:
                       return !0
               }
           case "script":
               if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0
       }
       return !1
   }

   function xp(e) {
       return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
   }

   function Fv(e, n, o, s) {
       if (o.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (o.state.loading & 4) === 0) {
           if (o.instance === null) {
               var d = Ji(s.href),
                   p = n.querySelector(Yo(d));
               if (p) {
                   n = p._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = ca.bind(e), n.then(e, e)), o.state.loading |= 4, o.instance = p, Xe(p);
                   return
               }
               p = n.ownerDocument || n, s = Ap(s), (d = Ht.get(d)) && Zr(s, d), p = p.createElement("link"), Xe(p);
               var T = p;
               T._p = new Promise(function(_, A) {
                   T.onload = _, T.onerror = A
               }), nt(p, "link", s), o.instance = p
           }
           e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(o, n), (n = o.state.preload) && (o.state.loading & 3) === 0 && (e.count++, o = ca.bind(e), n.addEventListener("load", o), n.addEventListener("error", o))
       }
   }
   var Wr = 0;

   function Yv(e, n) {
       return e.stylesheets && e.count === 0 && da(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(o) {
           var s = setTimeout(function() {
               if (e.stylesheets && da(e, e.stylesheets), e.unsuspend) {
                   var p = e.unsuspend;
                   e.unsuspend = null, p()
               }
           }, 6e4 + n);
           0 < e.imgBytes && Wr === 0 && (Wr = 62500 * Rv());
           var d = setTimeout(function() {
               if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && da(e, e.stylesheets), e.unsuspend)) {
                   var p = e.unsuspend;
                   e.unsuspend = null, p()
               }
           }, (e.imgBytes > Wr ? 50 : 800) + n);
           return e.unsuspend = o,
               function() {
                   e.unsuspend = null, clearTimeout(s), clearTimeout(d)
               }
       } : null
   }

   function ca() {
       if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
           if (this.stylesheets) da(this, this.stylesheets);
           else if (this.unsuspend) {
               var e = this.unsuspend;
               this.unsuspend = null, e()
           }
       }
   }
   var fa = null;

   function da(e, n) {
       e.stylesheets = null, e.unsuspend !== null && (e.count++, fa = new Map, n.forEach(Jv, e), fa = null, ca.call(e))
   }

   function Jv(e, n) {
       if (!(n.state.loading & 4)) {
           var o = fa.get(e);
           if (o) var s = o.get(null);
           else {
               o = new Map, fa.set(e, o);
               for (var d = e.querySelectorAll("link[data-precedence],style[data-precedence]"), p = 0; p < d.length; p++) {
                   var T = d[p];
                   (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (o.set(T.dataset.precedence, T), s = T)
               }
               s && o.set(null, s)
           }
           d = n.instance, T = d.getAttribute("data-precedence"), p = o.get(T) || s, p === s && o.set(null, d), o.set(T, d), this.count++, s = ca.bind(this), d.addEventListener("load", s), d.addEventListener("error", s), p ? p.parentNode.insertBefore(d, p.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), n.state.loading |= 4
       }
   }
   var Ko = {
       $$typeof: B,
       Provider: null,
       Consumer: null,
       _currentValue: ie,
       _currentValue2: ie,
       _threadCount: 0
   };

   function Kv(e, n, o, s, d, p, T, _, A) {
       this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ka(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ka(0), this.hiddenUpdates = Ka(null), this.identifierPrefix = s, this.onUncaughtError = d, this.onCaughtError = p, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = new Map
   }

   function Ip(e, n, o, s, d, p, T, _, A, D, q, z) {
       return e = new Kv(e, n, o, T, A, D, q, z, _), n = 1, p === !0 && (n |= 24), p = Et(3, null, null, n), e.current = p, p.stateNode = e, n = bs(), n.refCount++, e.pooledCache = n, n.refCount++, p.memoizedState = {
           element: s,
           isDehydrated: o,
           cache: n
       }, Gs(p), e
   }

   function Dp(e) {
       return e ? (e = Ai, e) : Ai
   }

   function bp(e, n, o, s, d, p) {
       d = Dp(d), s.context === null ? s.context = d : s.pendingContext = d, s = Rn(n), s.payload = {
           element: o
       }, p = p === void 0 ? null : p, p !== null && (s.callback = p), o = Mn(e, s, n), o !== null && (gt(o, e, n), Ro(o, e, n))
   }

   function wp(e, n) {
       if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
           var o = e.retryLane;
           e.retryLane = o !== 0 && o < n ? o : n
       }
   }

   function jr(e, n) {
       wp(e, n), (e = e.alternate) && wp(e, n)
   }

   function Up(e) {
       if (e.tag === 13 || e.tag === 31) {
           var n = Zn(e, 67108864);
           n !== null && gt(n, e, 67108864), jr(e, 67108864)
       }
   }

   function Lp(e) {
       if (e.tag === 13 || e.tag === 31) {
           var n = Mt();
           n = Xa(n);
           var o = Zn(e, n);
           o !== null && gt(o, e, n), jr(e, n)
       }
   }
   var pa = !0;

   function Xv(e, n, o, s) {
       var d = G.T;
       G.T = null;
       var p = O.p;
       try {
           O.p = 2, eu(e, n, o, s)
       } finally {
           O.p = p, G.T = d
       }
   }

   function Qv(e, n, o, s) {
       var d = G.T;
       G.T = null;
       var p = O.p;
       try {
           O.p = 8, eu(e, n, o, s)
       } finally {
           O.p = p, G.T = d
       }
   }

   function eu(e, n, o, s) {
       if (pa) {
           var d = tu(s);
           if (d === null) kr(e, n, s, ma, o), Hp(e, s);
           else if ($v(d, e, n, o, s)) s.stopPropagation();
           else if (Hp(e, s), n & 4 && -1 < Zv.indexOf(e)) {
               for (; d !== null;) {
                   var p = pi(d);
                   if (p !== null) switch (p.tag) {
                       case 3:
                           if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                               var T = Yn(p.pendingLanes);
                               if (T !== 0) {
                                   var _ = p;
                                   for (_.pendingLanes |= 2, _.entangledLanes |= 2; T;) {
                                       var A = 1 << 31 - Tt(T);
                                       _.entanglements[1] |= A, T &= ~A
                                   }
                                   Xt(p), (Se & 6) === 0 && (Zl = yt() + 500, Po(0))
                               }
                           }
                           break;
                       case 31:
                       case 13:
                           _ = Zn(p, 2), _ !== null && gt(_, p, 2), Wl(), jr(p, 2)
                   }
                   if (p = tu(s), p === null && kr(e, n, s, ma, o), p === d) break;
                   d = p
               }
               d !== null && s.stopPropagation()
           } else kr(e, n, s, null, o)
       }
   }

   function tu(e) {
       return e = is(e), nu(e)
   }
   var ma = null;

   function nu(e) {
       if (ma = null, e = di(e), e !== null) {
           var n = f(e);
           if (n === null) e = null;
           else {
               var o = n.tag;
               if (o === 13) {
                   if (e = m(n), e !== null) return e;
                   e = null
               } else if (o === 31) {
                   if (e = g(n), e !== null) return e;
                   e = null
               } else if (o === 3) {
                   if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
                   e = null
               } else n !== e && (e = null)
           }
       }
       return ma = e, null
   }

   function Gp(e) {
       switch (e) {
           case "beforetoggle":
           case "cancel":
           case "click":
           case "close":
           case "contextmenu":
           case "copy":
           case "cut":
           case "auxclick":
           case "dblclick":
           case "dragend":
           case "dragstart":
           case "drop":
           case "focusin":
           case "focusout":
           case "input":
           case "invalid":
           case "keydown":
           case "keypress":
           case "keyup":
           case "mousedown":
           case "mouseup":
           case "paste":
           case "pause":
           case "play":
           case "pointercancel":
           case "pointerdown":
           case "pointerup":
           case "ratechange":
           case "reset":
           case "resize":
           case "seeked":
           case "submit":
           case "toggle":
           case "touchcancel":
           case "touchend":
           case "touchstart":
           case "volumechange":
           case "change":
           case "selectionchange":
           case "textInput":
           case "compositionstart":
           case "compositionend":
           case "compositionupdate":
           case "beforeblur":
           case "afterblur":
           case "beforeinput":
           case "blur":
           case "fullscreenchange":
           case "focus":
           case "hashchange":
           case "popstate":
           case "select":
           case "selectstart":
               return 2;
           case "drag":
           case "dragenter":
           case "dragexit":
           case "dragleave":
           case "dragover":
           case "mousemove":
           case "mouseout":
           case "mouseover":
           case "pointermove":
           case "pointerout":
           case "pointerover":
           case "scroll":
           case "touchmove":
           case "wheel":
           case "mouseenter":
           case "mouseleave":
           case "pointerenter":
           case "pointerleave":
               return 8;
           case "message":
               switch (Gg()) {
                   case Bu:
                       return 2;
                   case Ou:
                       return 8;
                   case il:
                   case Hg:
                       return 32;
                   case Fu:
                       return 268435456;
                   default:
                       return 32
               }
           default:
               return 32
       }
   }
   var iu = !1,
       qn = null,
       Vn = null,
       zn = null,
       Xo = new Map,
       Qo = new Map,
       kn = [],
       Zv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

   function Hp(e, n) {
       switch (e) {
           case "focusin":
           case "focusout":
               qn = null;
               break;
           case "dragenter":
           case "dragleave":
               Vn = null;
               break;
           case "mouseover":
           case "mouseout":
               zn = null;
               break;
           case "pointerover":
           case "pointerout":
               Xo.delete(n.pointerId);
               break;
           case "gotpointercapture":
           case "lostpointercapture":
               Qo.delete(n.pointerId)
       }
   }

   function Zo(e, n, o, s, d, p) {
       return e === null || e.nativeEvent !== p ? (e = {
           blockedOn: n,
           domEventName: o,
           eventSystemFlags: s,
           nativeEvent: p,
           targetContainers: [d]
       }, n !== null && (n = pi(n), n !== null && Up(n)), e) : (e.eventSystemFlags |= s, n = e.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), e)
   }

   function $v(e, n, o, s, d) {
       switch (n) {
           case "focusin":
               return qn = Zo(qn, e, n, o, s, d), !0;
           case "dragenter":
               return Vn = Zo(Vn, e, n, o, s, d), !0;
           case "mouseover":
               return zn = Zo(zn, e, n, o, s, d), !0;
           case "pointerover":
               var p = d.pointerId;
               return Xo.set(p, Zo(Xo.get(p) || null, e, n, o, s, d)), !0;
           case "gotpointercapture":
               return p = d.pointerId, Qo.set(p, Zo(Qo.get(p) || null, e, n, o, s, d)), !0
       }
       return !1
   }

   function qp(e) {
       var n = di(e.target);
       if (n !== null) {
           var o = f(n);
           if (o !== null) {
               if (n = o.tag, n === 13) {
                   if (n = m(o), n !== null) {
                       e.blockedOn = n, Zu(e.priority, function() {
                           Lp(o)
                       });
                       return
                   }
               } else if (n === 31) {
                   if (n = g(o), n !== null) {
                       e.blockedOn = n, Zu(e.priority, function() {
                           Lp(o)
                       });
                       return
                   }
               } else if (n === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                   e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                   return
               }
           }
       }
       e.blockedOn = null
   }

   function ha(e) {
       if (e.blockedOn !== null) return !1;
       for (var n = e.targetContainers; 0 < n.length;) {
           var o = tu(e.nativeEvent);
           if (o === null) {
               o = e.nativeEvent;
               var s = new o.constructor(o.type, o);
               ns = s, o.target.dispatchEvent(s), ns = null
           } else return n = pi(o), n !== null && Up(n), e.blockedOn = o, !1;
           n.shift()
       }
       return !0
   }

   function Vp(e, n, o) {
       ha(e) && o.delete(n)
   }

   function Wv() {
       iu = !1, qn !== null && ha(qn) && (qn = null), Vn !== null && ha(Vn) && (Vn = null), zn !== null && ha(zn) && (zn = null), Xo.forEach(Vp), Qo.forEach(Vp)
   }

   function ga(e, n) {
       e.blockedOn === n && (e.blockedOn = null, iu || (iu = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Wv)))
   }
   var ya = null;

   function zp(e) {
       ya !== e && (ya = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
           ya === e && (ya = null);
           for (var n = 0; n < e.length; n += 3) {
               var o = e[n],
                   s = e[n + 1],
                   d = e[n + 2];
               if (typeof s != "function") {
                   if (nu(s || o) === null) continue;
                   break
               }
               var p = pi(o);
               p !== null && (e.splice(n, 3), n -= 3, tr(p, {
                   pending: !0,
                   data: d,
                   method: o.method,
                   action: s
               }, s, d))
           }
       }))
   }

   function Xi(e) {
       function n(A) {
           return ga(A, e)
       }
       qn !== null && ga(qn, e), Vn !== null && ga(Vn, e), zn !== null && ga(zn, e), Xo.forEach(n), Qo.forEach(n);
       for (var o = 0; o < kn.length; o++) {
           var s = kn[o];
           s.blockedOn === e && (s.blockedOn = null)
       }
       for (; 0 < kn.length && (o = kn[0], o.blockedOn === null);) qp(o), o.blockedOn === null && kn.shift();
       if (o = (e.ownerDocument || e).$$reactFormReplay, o != null)
           for (s = 0; s < o.length; s += 3) {
               var d = o[s],
                   p = o[s + 1],
                   T = d[ct] || null;
               if (typeof p == "function") T || zp(o);
               else if (T) {
                   var _ = null;
                   if (p && p.hasAttribute("formAction")) {
                       if (d = p, T = p[ct] || null) _ = T.formAction;
                       else if (nu(d) !== null) continue
                   } else _ = T.action;
                   typeof _ == "function" ? o[s + 1] = _ : (o.splice(s, 3), s -= 3), zp(o)
               }
           }
   }

   function kp() {
       function e(p) {
           p.canIntercept && p.info === "react-transition" && p.intercept({
               handler: function() {
                   return new Promise(function(T) {
                       return d = T
                   })
               },
               focusReset: "manual",
               scroll: "manual"
           })
       }

       function n() {
           d !== null && (d(), d = null), s || setTimeout(o, 20)
       }

       function o() {
           if (!s && !navigation.transition) {
               var p = navigation.currentEntry;
               p && p.url != null && navigation.navigate(p.url, {
                   state: p.getState(),
                   info: "react-transition",
                   history: "replace"
               })
           }
       }
       if (typeof navigation == "object") {
           var s = !1,
               d = null;
           return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(o, 100),
               function() {
                   s = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), d !== null && (d(), d = null)
               }
       }
   }

   function ou(e) {
       this._internalRoot = e
   }
   va.prototype.render = ou.prototype.render = function(e) {
       var n = this._internalRoot;
       if (n === null) throw Error(a(409));
       var o = n.current,
           s = Mt();
       bp(o, s, e, n, null, null)
   }, va.prototype.unmount = ou.prototype.unmount = function() {
       var e = this._internalRoot;
       if (e !== null) {
           this._internalRoot = null;
           var n = e.containerInfo;
           bp(e.current, 2, null, e, null, null), Wl(), n[fi] = null
       }
   };

   function va(e) {
       this._internalRoot = e
   }
   va.prototype.unstable_scheduleHydration = function(e) {
       if (e) {
           var n = Qu();
           e = {
               blockedOn: null,
               target: e,
               priority: n
           };
           for (var o = 0; o < kn.length && n !== 0 && n < kn[o].priority; o++);
           kn.splice(o, 0, e), o === 0 && qp(e)
       }
   };
   var Pp = t.version;
   if (Pp !== "19.2.3") throw Error(a(527, Pp, "19.2.3"));
   O.findDOMNode = function(e) {
       var n = e._reactInternals;
       if (n === void 0) throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
       return e = h(n), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e
   };
   var jv = {
       bundleType: 0,
       version: "19.2.3",
       rendererPackageName: "react-dom",
       currentDispatcherRef: G,
       reconcilerVersion: "19.2.3"
   };
   if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
       var Ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
       if (!Ta.isDisabled && Ta.supportsFiber) try {
           oo = Ta.inject(jv), vt = Ta
       } catch {}
   }
   return Wo.createRoot = function(e, n) {
       if (!u(e)) throw Error(a(299));
       var o = !1,
           s = "",
           d = Xf,
           p = Qf,
           T = Zf;
       return n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (d = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (T = n.onRecoverableError)), n = Ip(e, 1, !1, null, null, o, s, null, d, p, T, kp), e[fi] = n.current, zr(e), new ou(n)
   }, Wo.hydrateRoot = function(e, n, o) {
       if (!u(e)) throw Error(a(299));
       var s = !1,
           d = "",
           p = Xf,
           T = Qf,
           _ = Zf,
           A = null;
       return o != null && (o.unstable_strictMode === !0 && (s = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onUncaughtError !== void 0 && (p = o.onUncaughtError), o.onCaughtError !== void 0 && (T = o.onCaughtError), o.onRecoverableError !== void 0 && (_ = o.onRecoverableError), o.formState !== void 0 && (A = o.formState)), n = Ip(e, 1, !0, n, o ?? null, s, d, A, p, T, _, kp), n.context = Dp(null), o = n.current, s = Mt(), s = Xa(s), d = Rn(s), d.callback = null, Mn(o, d, s), o = s, n.current.lanes = o, ao(n, o), Xt(n), e[fi] = n.current, zr(e), new va(n)
   }, Wo.version = "19.2.3", Wo
}
var $p;

function c0() {
   if ($p) return su.exports;
   $p = 1;

   function i() {
       if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
           __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
       } catch (t) {
           console.error(t)
       }
   }
   return i(), su.exports = u0(), su.exports
}
var f0 = c0();
const d0 = wh(f0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const p0 = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
   m0 = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, l, a) => a ? a.toUpperCase() : l.toLowerCase()),
   Wp = i => {
       const t = m0(i);
       return t.charAt(0).toUpperCase() + t.slice(1)
   },
   Uh = (...i) => i.filter((t, l, a) => !!t && t.trim() !== "" && a.indexOf(t) === l).join(" ").trim(),
   h0 = i => {
       for (const t in i)
           if (t.startsWith("aria-") || t === "role" || t === "title") return !0
   };
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var g0 = {
   xmlns: "http://www.w3.org/2000/svg",
   width: 24,
   height: 24,
   viewBox: "0 0 24 24",
   fill: "none",
   stroke: "currentColor",
   strokeWidth: 2,
   strokeLinecap: "round",
   strokeLinejoin: "round"
};
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const y0 = Pe.forwardRef(({
   color: i = "currentColor",
   size: t = 24,
   strokeWidth: l = 2,
   absoluteStrokeWidth: a,
   className: u = "",
   children: f,
   iconNode: m,
   ...g
}, y) => Pe.createElement("svg", {
   ref: y,
   ...g0,
   width: t,
   height: t,
   stroke: i,
   strokeWidth: a ? Number(l) * 24 / Number(t) : l,
   className: Uh("lucide", u),
   ...!f && !h0(g) && {
       "aria-hidden": "true"
   },
   ...g
}, [...m.map(([h, v]) => Pe.createElement(h, v)), ...Array.isArray(f) ? f : [f]]));
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ze = (i, t) => {
   const l = Pe.forwardRef(({
       className: a,
       ...u
   }, f) => Pe.createElement(y0, {
       ref: f,
       iconNode: t,
       className: Uh(`lucide-${p0(Wp(i))}`, `lucide-${i}`, a),
       ...u
   }));
   return l.displayName = Wp(i), l
};
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const v0 = [
       ["path", {
           d: "M12 5v14",
           key: "s699le"
       }],
       ["path", {
           d: "m19 12-7 7-7-7",
           key: "1idqje"
       }]
   ],
   T0 = Ze("arrow-down", v0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const S0 = [
       ["path", {
           d: "M20 6 9 17l-5-5",
           key: "1gmf2c"
       }]
   ],
   E0 = Ze("check", S0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _0 = [
       ["circle", {
           cx: "12",
           cy: "12",
           r: "10",
           key: "1mglay"
       }],
       ["line", {
           x1: "12",
           x2: "12",
           y1: "8",
           y2: "12",
           key: "1pkeuh"
       }],
       ["line", {
           x1: "12",
           x2: "12.01",
           y1: "16",
           y2: "16",
           key: "4dfq90"
       }]
   ],
   C0 = Ze("circle-alert", _0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const A0 = [
       ["path", {
           d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
           key: "kmsa83"
       }],
       ["circle", {
           cx: "12",
           cy: "12",
           r: "10",
           key: "1mglay"
       }]
   ],
   R0 = Ze("circle-play", A0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const M0 = [
       ["rect", {
           width: "14",
           height: "14",
           x: "8",
           y: "8",
           rx: "2",
           ry: "2",
           key: "17jyea"
       }],
       ["path", {
           d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
           key: "zix9uf"
       }]
   ],
   N0 = Ze("copy", M0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const x0 = [
       ["circle", {
           cx: "12",
           cy: "12",
           r: "10",
           key: "1mglay"
       }],
       ["circle", {
           cx: "12",
           cy: "12",
           r: "2",
           key: "1c9p78"
       }]
   ],
   I0 = Ze("disc", x0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const D0 = [
       ["path", {
           d: "M12 15V3",
           key: "m9g1x1"
       }],
       ["path", {
           d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
           key: "ih7n3h"
       }],
       ["path", {
           d: "m7 10 5 5 5-5",
           key: "brsn70"
       }]
   ],
   b0 = Ze("download", D0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const w0 = [
       ["path", {
           d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
           key: "1jg4f8"
       }]
   ],
   U0 = Ze("facebook", w0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const L0 = [
       ["rect", {
           width: "20",
           height: "20",
           x: "2",
           y: "2",
           rx: "5",
           ry: "5",
           key: "2e1cvw"
       }],
       ["path", {
           d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
           key: "9exkf1"
       }],
       ["line", {
           x1: "17.5",
           x2: "17.51",
           y1: "6.5",
           y2: "6.5",
           key: "r4j83e"
       }]
   ],
   G0 = Ze("instagram", L0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const H0 = [
       ["path", {
           d: "M21 12a9 9 0 1 1-6.219-8.56",
           key: "13zald"
       }]
   ],
   q0 = Ze("loader-circle", H0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const V0 = [
       ["path", {
           d: "M4 5h16",
           key: "1tepv9"
       }],
       ["path", {
           d: "M4 12h16",
           key: "1lakjw"
       }],
       ["path", {
           d: "M4 19h16",
           key: "1djgab"
       }]
   ],
   z0 = Ze("menu", V0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const k0 = [
       ["rect", {
           x: "14",
           y: "3",
           width: "5",
           height: "18",
           rx: "1",
           key: "kaeet6"
       }],
       ["rect", {
           x: "5",
           y: "3",
           width: "5",
           height: "18",
           rx: "1",
           key: "1wsw3u"
       }]
   ],
   P0 = Ze("pause", k0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const B0 = [
       ["path", {
           d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
           key: "nt11vn"
       }],
       ["path", {
           d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
           key: "15qc1e"
       }],
       ["path", {
           d: "m2.3 2.3 7.286 7.286",
           key: "1wuzzi"
       }],
       ["circle", {
           cx: "11",
           cy: "11",
           r: "2",
           key: "xmgehs"
       }]
   ],
   O0 = Ze("pen-tool", B0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const F0 = [
       ["path", {
           d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
           key: "10ikf1"
       }]
   ],
   Lh = Ze("play", F0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Y0 = [
       ["path", {
           d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
           key: "15892j"
       }],
       ["path", {
           d: "M3 20V4",
           key: "1ptbpl"
       }]
   ],
   J0 = Ze("skip-back", Y0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const K0 = [
       ["path", {
           d: "M21 4v16",
           key: "7j8fe9"
       }],
       ["path", {
           d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
           key: "zs4d6"
       }]
   ],
   X0 = Ze("skip-forward", K0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Q0 = [
       ["path", {
           d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
           key: "pff0z6"
       }]
   ],
   Z0 = Ze("twitter", Q0);
/**
* @license lucide-react v0.561.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $0 = [
       ["path", {
           d: "M18 6 6 18",
           key: "1bl5f8"
       }],
       ["path", {
           d: "m6 6 12 12",
           key: "d8bk6v"
       }]
   ],
   W0 = Ze("x", $0),
   Gh = "LOMASHOW",
   j0 = "",
   eT = "n/a",
   Hh = 'Happy New Year!',
   jo = [{
   }],
   Sa = [{
       id: "1",
       quote: "",
       source: ""
   }, {
       id: "2",
       quote: "",
       source: ""
   }],
   tT = [{
       id: "1",
       date: "N/A",
       venue: "",
       city: "",
       ticketLink: ""
   }],
   nT = [{
       name: "Borjor",
       role: "Vocals",
       image: "../assets/image/cat_judge.png"
   }, {
       name: "Bank",
       role: "Produce",
       image: "../assets/image/cat_googleearthtake2.png"
   }],
   iT = () => {
       const [i, t] = Pe.useState(!1), [l, a] = Pe.useState(!1);
       Pe.useEffect(() => {
           const y = () => {
               t(window.scrollY > 50)
           };
           return window.addEventListener("scroll", y), () => window.removeEventListener("scroll", y)
       }, []);
       const u = [{
               name: "Music",
               href: "#music"
           }, {
               name: "Video",
               href: "#video"
           }, {
               name: "About",
               href: "#about"
           }, /*{
               name: "Press",
               href: "#press"
           }, */{
               name: "Contact",
               href: "#contact"
           }],
           f = i ? "text-black" : "text-white",
           m = i ? "text-gray-500 hover:text-black" : "text-white/70 hover:text-white",
           g = i ? "border-gray-200" : "border-white/10";
       return N.jsx("nav", {
           className: `fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${i?`bg-[#fdfbf7]/90 backdrop-blur-md py-4 ${g}`:"bg-transparent py-6 border-transparent"}`,
           children: N.jsxs("div", {
               className: "max-w-7xl mx-auto px-6 grid grid-cols-3 items-center",
               children: [N.jsx("div", {
                   className: "hidden md:flex space-x-8 justify-start",
                   children: u.slice(0, 2).map(y => N.jsx("a", {
                       href: y.href,
                       className: `text-xs font-medium transition-all hover:italic uppercase tracking-widest ${m}`,
                       children: y.name
                   }, y.name))
               }), N.jsx("div", {
                   className: "flex justify-center md:col-start-2",
                   children: N.jsx("a", {
                       href: "#",
                       className: `text-2xl font-['DynaPuff'] font-medium tracking-tight z-50 whitespace-nowrap transition-colors duration-500 ${f}`,
                       children: Gh
                   })
               }), N.jsx("div", {
                   className: "hidden md:flex space-x-8 justify-end",
                   children: u.slice(2).map(y => N.jsx("a", {
                       href: y.href,
                       className: `text-xs font-medium transition-all hover:italic uppercase tracking-widest ${m}`,
                       children: y.name
                   }, y.name))
               }), N.jsx("div", {
                   className: "md:hidden flex justify-end col-start-3",
                   children: N.jsx("button", {
                       className: `${f} z-50`,
                       onClick: () => a(!l),
                       children: l ? N.jsx(W0, {
                           size: 24,
                           className: i || l ? "text-black" : "text-white"
                       }) : N.jsx(z0, {
                           size: 24
                       })
                   })
               }), l && N.jsx("div", {
                   className: "fixed inset-0 bg-[#fdfbf7] flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in-up z-40",
                   children: u.map(y => N.jsx("a", {
                       href: y.href,
                       className: "text-4xl font-serif text-black hover:text-[#c07e66] italic transition-colors",
                       onClick: () => a(!1),
                       children: y.name
                   }, y.name))
               })]
           })
       })
   },
   oT = () => N.jsxs("section", {
       className: "relative h-screen w-full flex items-center justify-center overflow-hidden",
       children: [N.jsxs("div", {
           className: "absolute inset-0 z-0",
           children: [N.jsxs("video", {
               autoPlay: !0,
               muted: !0,
               loop: !0,
               playsInline: !0,
               className: "w-full h-full object-cover",
               poster: "../assets/image/lomashowcover.jpg",
               children: [N.jsx("source", {
                   src: "../assets/lyricsvideo_promo.mp4",
                   type: "video/mp4"
               }), "Your browser does not support the video tag."]
           }), N.jsx("div", {
               className: "absolute inset-0 bg-black/30 mix-blend-multiply"
           }), N.jsx("div", {
               className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"
           }), N.jsx("div", {
               className: "absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
           })]
       }), N.jsxs("div", {
           className: "relative z-10 text-center px-6 max-w-5xl mx-auto fade-in-up",
           children: [N.jsxs("div", {
               className: "mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md",
               children: [N.jsx("div", {
                   className: "w-2 h-2 rounded-full bg-red-500 animate-pulse"
               }), N.jsx("span", {
                   className: "text-[10px] font-['Prompt'] tracking-[0.2em] text-white uppercase",
                   children: "New Release"
               })]
           }), N.jsxs("h1", {
               className: "text-6xl md:text-8xl lg:text-9xl font-['Prompt'] text-white mb-6 leading-[0.85] tracking-tight mix-blend-overlay opacity-90",
               children: ["ไม่เกลียดฉันก็พอ", N.jsx("br", {}), N.jsx]
           }), N.jsx("p", {
               className: "text-lg md:text-xl text-gray-200 font-light max-w-xl mx-auto leading-relaxed mb-10 tracking-wide",
               children: j0
           }), N.jsxs("div", {
               className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
               children: [N.jsx("a", {
                   href: "#music",
                   className: "group relative px-8 py-4 bg-white text-black hover:bg-[#f0ebe5] transition-all duration-300 uppercase text-xs tracking-[0.2em] font-bold overflow-hidden",
                   children: N.jsxs("span", {
                       className: "relative z-10 flex items-center gap-2",
                       children: ["See More Releases", N.jsx(Lh, {
                           size: 12,
                           fill: "currentColor"
                       })]
                   })
               }), N.jsx("a", {
                   href: "#video",
                   className: "px-8 py-4 border border-white/50 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs tracking-[0.2em] font-bold backdrop-blur-sm",
                   children: "Watch Video"
               })]
           })]
       }), N.jsxs("div", {
           className: "absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity",
           children: [N.jsx("span", {
               className: "text-[10px] uppercase tracking-widest",
               children: "Scroll"
           }), N.jsx(T0, {
               size: 20,
               strokeWidth: 1.5
           })]
       })]
   }),
   lT = () => {
       const [i, t] = Pe.useState(0), [l, a] = Pe.useState(!1), [u, f] = Pe.useState(0), m = Pe.useRef(null), g = jo[i];
       Pe.useEffect(() => {
           m.current && (l ? m.current.play().catch(C => console.error("Play failed", C)) : m.current.pause())
       }, [l, i]);
       const y = () => a(!l),
           h = () => {
               t(C => (C + 1) % jo.length), a(!0)
           },
           v = () => {
               t(C => (C - 1 + jo.length) % jo.length), a(!0)
           },
           S = () => {
               if (m.current) {
                   const C = m.current.currentTime / m.current.duration * 100;
                   f(C || 0)
               }
           },
           E = C => {
               t(C), a(!0)
           };

         return N.jsx("section", {
            id: "music",
            className: "py-32 relative",
            children: N.jsx("div", {
              className: "max-w-6xl mx-auto px-6",
              children: N.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-1 gap-16 items-center",
          
                children: [
          
                  /* ================= LEFT : SPOTIFY ================= */
                  N.jsxs("div", {
                    children: [
          
                      N.jsx("h2", {
                        className: "text-4xl font-['Shizuru'] mb-2",
                        children: "Discography"
                      }),
          
                      N.jsx("p", {
                        className: "text-gray-500 mb-8 font-light",
                        children: ":)"
                      }),
          
                      N.jsxs("div", {
                        className:
                          "bg-white p-8 border border-[#e5e5e5] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.02)]",
          
                        children: [
          
                          N.jsx("iframe", {
                            src: "https://open.spotify.com/embed/artist/0Ye0NzgGB7c8Izabxm0Rsy?utm_source=generator",
                            width: "100%",
                            height: 352,
                            frameBorder: "0",
                            allow:
                              "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                            loading: "lazy",
                            style: {
                              borderRadius: "12px"
                            }
                          })
          
                        ]
                      }),
          
                      N.jsxs("div", {
                        className:
                          "mt-6 flex gap-4 text-xs font-bold uppercase tracking-widest text-gray-400",
          
                        children: [
          
                          N.jsxs("button", {
                            onClick: () =>
                              window.open(
                                "https://open.spotify.com/artist/0Ye0NzgGB7c8Izabxm0Rsy?si=i4hYY_pCRAyYXERi_Ls-1Q",
                                "_blank"
                              ),
                            className: "hover:text-black flex items-center gap-2",
                            children: ["Spotify"]
                          }),
          
                          N.jsxs("button", {
                            onClick: () =>
                              window.open(
                                "https://music.apple.com/us/artist/lomashow/1574892059",
                                "_blank"
                              ),
                            className: "hover:text-black flex items-center gap-2",
                            children: ["Apple Music"]
                          })
          
                        ]
                      })
          
                    ]
                  }),
          
                  /* ================= RIGHT : TRACK / RELEASE LIST ================= */
         /*         N.jsx("div", {
                    className: "lg:pl-12",
                    children: [
                      {
                        title: "EP 2024",
                        duration: "6 tracks",
                        url: "https://open.spotify.com/album/XXXXXXXX"
                      },
                      {
                        title: "Film Scoring Demos",
                        duration: "12 tracks",
                        url: "https://open.spotify.com/playlist/YYYYYYYY"
                      }
                    ].map((C, b) =>
                      N.jsxs(
                        "div",
                        {
                          onClick: () => window.open(C.url, "_blank"),
                          className:
                            "group flex items-center justify-between py-6 border-b border-gray-200 cursor-pointer transition-all hover:pl-4 hover:opacity-100 opacity-70",
          
                          children: [
          
                            N.jsxs("div", {
                              className: "flex items-center gap-6",
                              children: [
                                N.jsxs("span", {
                                  className: "text-sm font-mono text-gray-300",
                                  children: ["0", b + 1]
                                }),
                                N.jsx("span", {
                                  className:
                                    "text-xl font-serif group-hover:italic transition-all",
                                  children: C.title
                                })
                              ]
                            }),
          
                            N.jsx("span", {
                              className: "text-xs text-gray-400 font-mono",
                              children: C.duration
                            })
          
                          ]
                        },
                        b
                      )
                    )
                  })  
                    */ 
                ]
              })
            })
          });
          
/*       return N.jsx("section", {
           id: "music",
           className: "py-32 relative",
           children: N.jsx("div", {
               className: "max-w-6xl mx-auto px-6",
               children: N.jsxs("div", {
                   className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                   children: [N.jsxs("div", {
                       className: "relative",
                       children: [N.jsx("h2", {
                           className: "text-4xl font-serif mb-2",
                           children: "Discography"
                       }), N.jsx("p", {
                           className: "text-gray-500 mb-8 font-light",
                           children: "Original recordings & demos"
                       }), N.jsxs("div", {
                           className: "bg-white p-8 border border-[#e5e5e5] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.02)] relative overflow-hidden",
                           children: [N.jsx("div", {
                               className: "absolute top-0 right-0 p-4 flex gap-1 items-end h-16 opacity-20 pointer-events-none",
                               children: [...Array(10)].map((C, b) => N.jsx("div", {
                                   className: `w-1 bg-black transition-all duration-300 ${l?"animate-pulse":"h-1"}`,
                                   style: {
                                       height: l ? `${Math.random()*100}%` : "4px",
                                       animationDelay: `${b*.1}s`
                                   }
                               }, b))
                           }), N.jsxs("div", {
                               className: "flex gap-6 items-center mb-8",
                               children: [N.jsxs("div", {
                                   className: `w-24 h-24 bg-gray-100 flex-shrink-0 relative overflow-hidden ${l?"rounded-full animate-[spin_8s_linear_infinite]":"rounded-none"}`,
                                   children: [N.jsx("img", {
                                       src: g.coverArt,
                                       className: "w-full h-full object-cover"
                                   }), l && N.jsx("div", {
                                       className: "absolute inset-0 border-[3px] border-white/30 rounded-full"
                                   })]
                               }), N.jsxs("div", {
                                   children: [N.jsx("p", {
                                       className: "text-xs font-bold uppercase tracking-widest text-[#c07e66] mb-1",
                                       children: "Now Playing"
                                   }), N.jsx("h3", {
                                       className: "text-2xl font-serif italic",
                                       children: g.title
                                   })]
                               })]
                           }), N.jsx("audio", {
                               ref: m,
                               src: g.url,
                               onTimeUpdate: S,
                               onEnded: h
                           }), N.jsxs("div", {
                               className: "flex items-center justify-between gap-4 mb-6",
                               children: [N.jsx("button", {
                                   onClick: v,
                                   className: "hover:text-[#c07e66] transition-colors",
                                   children: N.jsx(J0, {
                                       size: 20
                                   })
                               }), N.jsx("button", {
                                   onClick: y,
                                   className: "w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all",
                                   children: l ? N.jsx(P0, {
                                       size: 18
                                   }) : N.jsx(Lh, {
                                       size: 18,
                                       className: "ml-0.5"
                                   })
                               }), N.jsx("button", {
                                   onClick: h,
                                   className: "hover:text-[#c07e66] transition-colors",
                                   children: N.jsx(X0, {
                                       size: 20
                                   })
                               })]
                           }), N.jsxs("div", {
                               className: "w-full h-px bg-gray-200 relative cursor-pointer group",
                               children: [N.jsx("div", {
                                   className: "absolute top-0 left-0 h-full bg-black transition-all",
                                   style: {
                                       width: `${u}%`
                                   }
                               }), N.jsx("div", {
                                   className: "absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                                   style: {
                                       left: `${u}%`
                                   }
                               })]
                           })]
                       }), N.jsxs("div", {
                           className: "mt-6 flex gap-4 text-xs font-bold uppercase tracking-widest text-gray-400",
                           children: [N.jsxs("button", {
                               className: "hover:text-black flex items-center gap-2",
                               children: [N.jsx(I0, {
                                   size: 14
                               }), " Spotify"]
                           }), N.jsxs("button", {
                               className: "hover:text-black flex items-center gap-2",
                               children: [N.jsx(b0, {
                                   size: 14
                               }), " Apple Music"]
                           })]
                       })]
                   }), N.jsx("div", {
                       className: "lg:pl-12",
                       children: jo.map((C, b) => N.jsxs("div", {
                           onClick: () => E(b),
                           className: `group flex items-center justify-between py-6 border-b border-gray-200 cursor-pointer transition-all hover:pl-4 ${i===b?"opacity-100":"opacity-60 hover:opacity-100"}`,
                           children: [N.jsxs("div", {
                               className: "flex items-center gap-6",
                               children: [N.jsxs("span", {
                                   className: `text-sm font-mono ${i===b?"text-[#c07e66]":"text-gray-300"}`,
                                   children: ["0", b + 1]
                               }), N.jsx("span", {
                                   className: "text-xl font-serif group-hover:italic transition-all",
                                   children: C.title
                               })]
                           }), N.jsx("span", {
                               className: "text-xs text-gray-400 font-mono",
                               children: C.duration
                           })]
                       }, C.id))
                   })]
               })
           })
       }) */
   },
   aT = () => N.jsxs("section", {
       id: "about",
       className: "py-24 bg-[#fdfbf7] relative overflow-hidden",
       children: [N.jsx("div", {
           className: "absolute top-0 left-1/4 w-px h-full bg-gray-200 hidden lg:block"
       }), N.jsxs("div", {
           className: "max-w-7xl mx-auto px-6 relative z-10",
           children: [N.jsxs("div", {
               className: "grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-start",
               children: [N.jsxs("div", {
                   className: "lg:pl-24 pt-12",
                   children: [N.jsxs("h2", {
                       className: "text-6xl font-['Prompt'] text-black leading-[0.9] mb-8",
                       children: ["This is us.", N.jsx("br", {}), " ", N.jsx("span", {
                           className: "italic text-[#c07e66]",
                           children: "LOMASHOW"
                       })]
                   }), N.jsx("div", {
                       className: "space-y-6 text-gray-600 font-light text-lg leading-relaxed",
                       children: Hh.split(`
`).map((i, t) => N.jsx("p", {
                           children: i
                       }, t))
                   })]
               }), N.jsxs("div", {
                   className: "relative",
                   children: [N.jsxs("div", {
                       className: "bg-white p-8 shadow-sm border border-gray-100 rotate-2 max-w-sm ml-auto",
                       children: [N.jsxs("p", {
                           className: "font-['Prompt'] italic text-xl mb-4 text-center",
                           children: ['"', Sa[0].quote, '"']
                       }), N.jsxs("p", {
                           className: "text-xs font-bold text-gray-400 text-center uppercase tracking-widest",
                           children: ["— ", Sa[0].source]
                       })]
                   }), N.jsxs("div", {
                       className: "bg-[#f2f0eb] p-8 shadow-sm border border-gray-100 -rotate-1 max-w-sm mt-8 mr-auto",
                       children: [N.jsxs("p", {
                           className: "font-['Prompt'] italic text-xl mb-4 text-center",
                           children: ['"', Sa[1].quote, '"']
                       }), N.jsxs("p", {
                           className: "text-xs font-bold text-gray-400 text-center uppercase tracking-widest",
                           children: ["— ", Sa[1].source]
                       })]
                   })]
               })]
           }), N.jsxs("div", {
               className: "relative",
               children: [N.jsx("h3", {
                   className: "text-center text-xs font-bold uppercase tracking-[0.3em] mb-16 text-gray-400",
                   children: ""
               }), N.jsx("div", {
                   className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start",
                   children: nT.map((i, t) => N.jsxs("div", {
                       className: `group flex flex-col ${t===1?"md:mt-24":t===2?"md:mt-12":""}`,
                       children: [N.jsxs("div", {
                           className: "relative overflow-hidden mb-6 aspect-[3/4] bg-gray-200",
                           children: [N.jsx("div", {
                               className: "absolute inset-0 bg-[#c07e66]/0 group-hover:bg-[#c07e66]/10 transition-colors z-10 duration-500"
                           }), N.jsx("img", {
                               src: i.image,
                               alt: i.name,
                               className: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 sepia-[0.2]"
                           })]
                       }), N.jsxs("div", {
                           className: "text-center",
                           children: [N.jsx("h3", {
                               className: "text-2xl font-serif text-black italic group-hover:text-[#c07e66] transition-colors",
                               children: i.name
                           }), N.jsx("p", {
                               className: "text-[10px] text-gray-500 uppercase tracking-widest mt-2 font-medium",
                               children: i.role
                           })]
                       })]
                   }, i.name))
               })]
           })]
       })]
   });
var mu = (i => (i.MYSTICAL = "Mystical", i.ENERGETIC = "Energetic", i.PROFESSIONAL = "Professional", i.INTIMATE = "Intimate", i))(mu || {}),
   sT = {};
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
let rT, uT;

function cT() {
   return {
       geminiUrl: rT,
       vertexUrl: uT
   }
}

function fT(i, t, l, a) {
   var u, f;
   if (!(i != null && i.baseUrl)) {
       const m = cT();
       return t ? (u = m.vertexUrl) !== null && u !== void 0 ? u : l : (f = m.geminiUrl) !== null && f !== void 0 ? f : a
   }
   return i.baseUrl
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class hn {}

function J(i, t) {
   const l = /\{([^}]+)\}/g;
   return i.replace(l, (a, u) => {
       if (Object.prototype.hasOwnProperty.call(t, u)) {
           const f = t[u];
           return f != null ? String(f) : ""
       } else throw new Error(`Key '${u}' not found in valueMap.`)
   })
}

function c(i, t, l) {
   for (let f = 0; f < t.length - 1; f++) {
       const m = t[f];
       if (m.endsWith("[]")) {
           const g = m.slice(0, -2);
           if (!(g in i))
               if (Array.isArray(l)) i[g] = Array.from({
                   length: l.length
               }, () => ({}));
               else throw new Error(`Value must be a list given an array path ${m}`);
           if (Array.isArray(i[g])) {
               const y = i[g];
               if (Array.isArray(l))
                   for (let h = 0; h < y.length; h++) {
                       const v = y[h];
                       c(v, t.slice(f + 1), l[h])
                   } else
                       for (const h of y) c(h, t.slice(f + 1), l)
           }
           return
       } else if (m.endsWith("[0]")) {
           const g = m.slice(0, -3);
           g in i || (i[g] = [{}]);
           const y = i[g];
           c(y[0], t.slice(f + 1), l);
           return
       }(!i[m] || typeof i[m] != "object") && (i[m] = {}), i = i[m]
   }
   const a = t[t.length - 1],
       u = i[a];
   if (u !== void 0) {
       if (!l || typeof l == "object" && Object.keys(l).length === 0 || l === u) return;
       if (typeof u == "object" && typeof l == "object" && u !== null && l !== null) Object.assign(u, l);
       else throw new Error(`Cannot set value for an existing key. Key: ${a}`)
   } else a === "_self" && typeof l == "object" && l !== null && !Array.isArray(l) ? Object.assign(i, l) : i[a] = l
}

function r(i, t, l = void 0) {
   try {
       if (t.length === 1 && t[0] === "_self") return i;
       for (let a = 0; a < t.length; a++) {
           if (typeof i != "object" || i === null) return l;
           const u = t[a];
           if (u.endsWith("[]")) {
               const f = u.slice(0, -2);
               if (f in i) {
                   const m = i[f];
                   return Array.isArray(m) ? m.map(g => r(g, t.slice(a + 1), l)) : l
               } else return l
           } else i = i[u]
       }
       return i
   } catch (a) {
       if (a instanceof TypeError) return l;
       throw a
   }
}

function dT(i, t) {
   for (const [l, a] of Object.entries(t)) {
       const u = l.split("."),
           f = a.split("."),
           m = new Set;
       let g = -1;
       for (let y = 0; y < u.length; y++)
           if (u[y] === "*") {
               g = y;
               break
           } if (g !== -1 && f.length > g)
           for (let y = g; y < f.length; y++) {
               const h = f[y];
               h !== "*" && !h.endsWith("[]") && !h.endsWith("[0]") && m.add(h)
           }
       hu(i, u, f, 0, m)
   }
}

function hu(i, t, l, a, u) {
   if (a >= t.length || typeof i != "object" || i === null) return;
   const f = t[a];
   if (f.endsWith("[]")) {
       const m = f.slice(0, -2),
           g = i;
       if (m in g && Array.isArray(g[m]))
           for (const y of g[m]) hu(y, t, l, a + 1, u)
   } else if (f === "*") {
       if (typeof i == "object" && i !== null && !Array.isArray(i)) {
           const m = i,
               g = Object.keys(m).filter(h => !h.startsWith("_") && !u.has(h)),
               y = {};
           for (const h of g) y[h] = m[h];
           for (const [h, v] of Object.entries(y)) {
               const S = [];
               for (const E of l.slice(a)) E === "*" ? S.push(h) : S.push(E);
               c(m, S, v)
           }
           for (const h of g) delete m[h]
       }
   } else {
       const m = i;
       f in m && hu(m[f], t, l, a + 1, u)
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function Du(i) {
   if (typeof i != "string") throw new Error("fromImageBytes must be a string");
   return i
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function pT(i) {
   const t = {},
       l = r(i, ["operationName"]);
   l != null && c(t, ["operationName"], l);
   const a = r(i, ["resourceName"]);
   return a != null && c(t, ["_url", "resourceName"], a), t
}

function mT(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["metadata"]);
   a != null && c(t, ["metadata"], a);
   const u = r(i, ["done"]);
   u != null && c(t, ["done"], u);
   const f = r(i, ["error"]);
   f != null && c(t, ["error"], f);
   const m = r(i, ["response", "generateVideoResponse"]);
   return m != null && c(t, ["response"], gT(m)), t
}

function hT(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["metadata"]);
   a != null && c(t, ["metadata"], a);
   const u = r(i, ["done"]);
   u != null && c(t, ["done"], u);
   const f = r(i, ["error"]);
   f != null && c(t, ["error"], f);
   const m = r(i, ["response"]);
   return m != null && c(t, ["response"], yT(m)), t
}

function gT(i) {
   const t = {},
       l = r(i, ["generatedSamples"]);
   if (l != null) {
       let f = l;
       Array.isArray(f) && (f = f.map(m => vT(m))), c(t, ["generatedVideos"], f)
   }
   const a = r(i, ["raiMediaFilteredCount"]);
   a != null && c(t, ["raiMediaFilteredCount"], a);
   const u = r(i, ["raiMediaFilteredReasons"]);
   return u != null && c(t, ["raiMediaFilteredReasons"], u), t
}

function yT(i) {
   const t = {},
       l = r(i, ["videos"]);
   if (l != null) {
       let f = l;
       Array.isArray(f) && (f = f.map(m => TT(m))), c(t, ["generatedVideos"], f)
   }
   const a = r(i, ["raiMediaFilteredCount"]);
   a != null && c(t, ["raiMediaFilteredCount"], a);
   const u = r(i, ["raiMediaFilteredReasons"]);
   return u != null && c(t, ["raiMediaFilteredReasons"], u), t
}

function vT(i) {
   const t = {},
       l = r(i, ["video"]);
   return l != null && c(t, ["video"], RT(l)), t
}

function TT(i) {
   const t = {},
       l = r(i, ["_self"]);
   return l != null && c(t, ["video"], MT(l)), t
}

function ST(i) {
   const t = {},
       l = r(i, ["operationName"]);
   return l != null && c(t, ["_url", "operationName"], l), t
}

function ET(i) {
   const t = {},
       l = r(i, ["operationName"]);
   return l != null && c(t, ["_url", "operationName"], l), t
}

function _T(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["metadata"]);
   a != null && c(t, ["metadata"], a);
   const u = r(i, ["done"]);
   u != null && c(t, ["done"], u);
   const f = r(i, ["error"]);
   f != null && c(t, ["error"], f);
   const m = r(i, ["response"]);
   return m != null && c(t, ["response"], CT(m)), t
}

function CT(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["parent"]);
   a != null && c(t, ["parent"], a);
   const u = r(i, ["documentName"]);
   return u != null && c(t, ["documentName"], u), t
}

function qh(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["metadata"]);
   a != null && c(t, ["metadata"], a);
   const u = r(i, ["done"]);
   u != null && c(t, ["done"], u);
   const f = r(i, ["error"]);
   f != null && c(t, ["error"], f);
   const m = r(i, ["response"]);
   return m != null && c(t, ["response"], AT(m)), t
}

function AT(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["parent"]);
   a != null && c(t, ["parent"], a);
   const u = r(i, ["documentName"]);
   return u != null && c(t, ["documentName"], u), t
}

function RT(i) {
   const t = {},
       l = r(i, ["uri"]);
   l != null && c(t, ["uri"], l);
   const a = r(i, ["encodedVideo"]);
   a != null && c(t, ["videoBytes"], Du(a));
   const u = r(i, ["encoding"]);
   return u != null && c(t, ["mimeType"], u), t
}

function MT(i) {
   const t = {},
       l = r(i, ["gcsUri"]);
   l != null && c(t, ["uri"], l);
   const a = r(i, ["bytesBase64Encoded"]);
   a != null && c(t, ["videoBytes"], Du(a));
   const u = r(i, ["mimeType"]);
   return u != null && c(t, ["mimeType"], u), t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
var jp;
(function(i) {
   i.OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED", i.OUTCOME_OK = "OUTCOME_OK", i.OUTCOME_FAILED = "OUTCOME_FAILED", i.OUTCOME_DEADLINE_EXCEEDED = "OUTCOME_DEADLINE_EXCEEDED"
})(jp || (jp = {}));
var em;
(function(i) {
   i.LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED", i.PYTHON = "PYTHON"
})(em || (em = {}));
var tm;
(function(i) {
   i.SCHEDULING_UNSPECIFIED = "SCHEDULING_UNSPECIFIED", i.SILENT = "SILENT", i.WHEN_IDLE = "WHEN_IDLE", i.INTERRUPT = "INTERRUPT"
})(tm || (tm = {}));
var Bn;
(function(i) {
   i.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED", i.STRING = "STRING", i.NUMBER = "NUMBER", i.INTEGER = "INTEGER", i.BOOLEAN = "BOOLEAN", i.ARRAY = "ARRAY", i.OBJECT = "OBJECT", i.NULL = "NULL"
})(Bn || (Bn = {}));
var nm;
(function(i) {
   i.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", i.MODE_DYNAMIC = "MODE_DYNAMIC"
})(nm || (nm = {}));
var im;
(function(i) {
   i.API_SPEC_UNSPECIFIED = "API_SPEC_UNSPECIFIED", i.SIMPLE_SEARCH = "SIMPLE_SEARCH", i.ELASTIC_SEARCH = "ELASTIC_SEARCH"
})(im || (im = {}));
var om;
(function(i) {
   i.AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED", i.NO_AUTH = "NO_AUTH", i.API_KEY_AUTH = "API_KEY_AUTH", i.HTTP_BASIC_AUTH = "HTTP_BASIC_AUTH", i.GOOGLE_SERVICE_ACCOUNT_AUTH = "GOOGLE_SERVICE_ACCOUNT_AUTH", i.OAUTH = "OAUTH", i.OIDC_AUTH = "OIDC_AUTH"
})(om || (om = {}));
var lm;
(function(i) {
   i.HTTP_IN_UNSPECIFIED = "HTTP_IN_UNSPECIFIED", i.HTTP_IN_QUERY = "HTTP_IN_QUERY", i.HTTP_IN_HEADER = "HTTP_IN_HEADER", i.HTTP_IN_PATH = "HTTP_IN_PATH", i.HTTP_IN_BODY = "HTTP_IN_BODY", i.HTTP_IN_COOKIE = "HTTP_IN_COOKIE"
})(lm || (lm = {}));
var am;
(function(i) {
   i.PHISH_BLOCK_THRESHOLD_UNSPECIFIED = "PHISH_BLOCK_THRESHOLD_UNSPECIFIED", i.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", i.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", i.BLOCK_HIGH_AND_ABOVE = "BLOCK_HIGH_AND_ABOVE", i.BLOCK_HIGHER_AND_ABOVE = "BLOCK_HIGHER_AND_ABOVE", i.BLOCK_VERY_HIGH_AND_ABOVE = "BLOCK_VERY_HIGH_AND_ABOVE", i.BLOCK_ONLY_EXTREMELY_HIGH = "BLOCK_ONLY_EXTREMELY_HIGH"
})(am || (am = {}));
var sm;
(function(i) {
   i.THINKING_LEVEL_UNSPECIFIED = "THINKING_LEVEL_UNSPECIFIED", i.LOW = "LOW", i.HIGH = "HIGH"
})(sm || (sm = {}));
var rm;
(function(i) {
   i.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", i.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", i.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", i.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", i.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT", i.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY", i.HARM_CATEGORY_IMAGE_HATE = "HARM_CATEGORY_IMAGE_HATE", i.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT = "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT", i.HARM_CATEGORY_IMAGE_HARASSMENT = "HARM_CATEGORY_IMAGE_HARASSMENT", i.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT = "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT", i.HARM_CATEGORY_JAILBREAK = "HARM_CATEGORY_JAILBREAK"
})(rm || (rm = {}));
var um;
(function(i) {
   i.HARM_BLOCK_METHOD_UNSPECIFIED = "HARM_BLOCK_METHOD_UNSPECIFIED", i.SEVERITY = "SEVERITY", i.PROBABILITY = "PROBABILITY"
})(um || (um = {}));
var cm;
(function(i) {
   i.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", i.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", i.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", i.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", i.BLOCK_NONE = "BLOCK_NONE", i.OFF = "OFF"
})(cm || (cm = {}));
var fm;
(function(i) {
   i.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", i.STOP = "STOP", i.MAX_TOKENS = "MAX_TOKENS", i.SAFETY = "SAFETY", i.RECITATION = "RECITATION", i.LANGUAGE = "LANGUAGE", i.OTHER = "OTHER", i.BLOCKLIST = "BLOCKLIST", i.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", i.SPII = "SPII", i.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", i.IMAGE_SAFETY = "IMAGE_SAFETY", i.UNEXPECTED_TOOL_CALL = "UNEXPECTED_TOOL_CALL", i.IMAGE_PROHIBITED_CONTENT = "IMAGE_PROHIBITED_CONTENT", i.NO_IMAGE = "NO_IMAGE", i.IMAGE_RECITATION = "IMAGE_RECITATION", i.IMAGE_OTHER = "IMAGE_OTHER"
})(fm || (fm = {}));
var dm;
(function(i) {
   i.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", i.NEGLIGIBLE = "NEGLIGIBLE", i.LOW = "LOW", i.MEDIUM = "MEDIUM", i.HIGH = "HIGH"
})(dm || (dm = {}));
var pm;
(function(i) {
   i.HARM_SEVERITY_UNSPECIFIED = "HARM_SEVERITY_UNSPECIFIED", i.HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE", i.HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW", i.HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM", i.HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH"
})(pm || (pm = {}));
var mm;
(function(i) {
   i.URL_RETRIEVAL_STATUS_UNSPECIFIED = "URL_RETRIEVAL_STATUS_UNSPECIFIED", i.URL_RETRIEVAL_STATUS_SUCCESS = "URL_RETRIEVAL_STATUS_SUCCESS", i.URL_RETRIEVAL_STATUS_ERROR = "URL_RETRIEVAL_STATUS_ERROR", i.URL_RETRIEVAL_STATUS_PAYWALL = "URL_RETRIEVAL_STATUS_PAYWALL", i.URL_RETRIEVAL_STATUS_UNSAFE = "URL_RETRIEVAL_STATUS_UNSAFE"
})(mm || (mm = {}));
var hm;
(function(i) {
   i.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", i.SAFETY = "SAFETY", i.OTHER = "OTHER", i.BLOCKLIST = "BLOCKLIST", i.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", i.IMAGE_SAFETY = "IMAGE_SAFETY", i.MODEL_ARMOR = "MODEL_ARMOR", i.JAILBREAK = "JAILBREAK"
})(hm || (hm = {}));
var gm;
(function(i) {
   i.TRAFFIC_TYPE_UNSPECIFIED = "TRAFFIC_TYPE_UNSPECIFIED", i.ON_DEMAND = "ON_DEMAND", i.PROVISIONED_THROUGHPUT = "PROVISIONED_THROUGHPUT"
})(gm || (gm = {}));
var xa;
(function(i) {
   i.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", i.TEXT = "TEXT", i.IMAGE = "IMAGE", i.AUDIO = "AUDIO"
})(xa || (xa = {}));
var ym;
(function(i) {
   i.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED", i.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW", i.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM", i.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH"
})(ym || (ym = {}));
var vm;
(function(i) {
   i.TUNING_MODE_UNSPECIFIED = "TUNING_MODE_UNSPECIFIED", i.TUNING_MODE_FULL = "TUNING_MODE_FULL", i.TUNING_MODE_PEFT_ADAPTER = "TUNING_MODE_PEFT_ADAPTER"
})(vm || (vm = {}));
var Tm;
(function(i) {
   i.ADAPTER_SIZE_UNSPECIFIED = "ADAPTER_SIZE_UNSPECIFIED", i.ADAPTER_SIZE_ONE = "ADAPTER_SIZE_ONE", i.ADAPTER_SIZE_TWO = "ADAPTER_SIZE_TWO", i.ADAPTER_SIZE_FOUR = "ADAPTER_SIZE_FOUR", i.ADAPTER_SIZE_EIGHT = "ADAPTER_SIZE_EIGHT", i.ADAPTER_SIZE_SIXTEEN = "ADAPTER_SIZE_SIXTEEN", i.ADAPTER_SIZE_THIRTY_TWO = "ADAPTER_SIZE_THIRTY_TWO"
})(Tm || (Tm = {}));
var gu;
(function(i) {
   i.JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED", i.JOB_STATE_QUEUED = "JOB_STATE_QUEUED", i.JOB_STATE_PENDING = "JOB_STATE_PENDING", i.JOB_STATE_RUNNING = "JOB_STATE_RUNNING", i.JOB_STATE_SUCCEEDED = "JOB_STATE_SUCCEEDED", i.JOB_STATE_FAILED = "JOB_STATE_FAILED", i.JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING", i.JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED", i.JOB_STATE_PAUSED = "JOB_STATE_PAUSED", i.JOB_STATE_EXPIRED = "JOB_STATE_EXPIRED", i.JOB_STATE_UPDATING = "JOB_STATE_UPDATING", i.JOB_STATE_PARTIALLY_SUCCEEDED = "JOB_STATE_PARTIALLY_SUCCEEDED"
})(gu || (gu = {}));
var Sm;
(function(i) {
   i.TUNING_TASK_UNSPECIFIED = "TUNING_TASK_UNSPECIFIED", i.TUNING_TASK_I2V = "TUNING_TASK_I2V", i.TUNING_TASK_T2V = "TUNING_TASK_T2V", i.TUNING_TASK_R2V = "TUNING_TASK_R2V"
})(Sm || (Sm = {}));
var Em;
(function(i) {
   i.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED", i.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW", i.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM", i.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH"
})(Em || (Em = {}));
var _m;
(function(i) {
   i.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED", i.PRIORITIZE_QUALITY = "PRIORITIZE_QUALITY", i.BALANCED = "BALANCED", i.PRIORITIZE_COST = "PRIORITIZE_COST"
})(_m || (_m = {}));
var Cm;
(function(i) {
   i.UNSPECIFIED = "UNSPECIFIED", i.BLOCKING = "BLOCKING", i.NON_BLOCKING = "NON_BLOCKING"
})(Cm || (Cm = {}));
var Am;
(function(i) {
   i.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", i.MODE_DYNAMIC = "MODE_DYNAMIC"
})(Am || (Am = {}));
var Rm;
(function(i) {
   i.ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED", i.ENVIRONMENT_BROWSER = "ENVIRONMENT_BROWSER"
})(Rm || (Rm = {}));
var Mm;
(function(i) {
   i.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", i.AUTO = "AUTO", i.ANY = "ANY", i.NONE = "NONE", i.VALIDATED = "VALIDATED"
})(Mm || (Mm = {}));
var Nm;
(function(i) {
   i.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", i.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", i.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", i.BLOCK_NONE = "BLOCK_NONE"
})(Nm || (Nm = {}));
var xm;
(function(i) {
   i.DONT_ALLOW = "DONT_ALLOW", i.ALLOW_ADULT = "ALLOW_ADULT", i.ALLOW_ALL = "ALLOW_ALL"
})(xm || (xm = {}));
var Im;
(function(i) {
   i.auto = "auto", i.en = "en", i.ja = "ja", i.ko = "ko", i.hi = "hi", i.zh = "zh", i.pt = "pt", i.es = "es"
})(Im || (Im = {}));
var Dm;
(function(i) {
   i.MASK_MODE_DEFAULT = "MASK_MODE_DEFAULT", i.MASK_MODE_USER_PROVIDED = "MASK_MODE_USER_PROVIDED", i.MASK_MODE_BACKGROUND = "MASK_MODE_BACKGROUND", i.MASK_MODE_FOREGROUND = "MASK_MODE_FOREGROUND", i.MASK_MODE_SEMANTIC = "MASK_MODE_SEMANTIC"
})(Dm || (Dm = {}));
var bm;
(function(i) {
   i.CONTROL_TYPE_DEFAULT = "CONTROL_TYPE_DEFAULT", i.CONTROL_TYPE_CANNY = "CONTROL_TYPE_CANNY", i.CONTROL_TYPE_SCRIBBLE = "CONTROL_TYPE_SCRIBBLE", i.CONTROL_TYPE_FACE_MESH = "CONTROL_TYPE_FACE_MESH"
})(bm || (bm = {}));
var wm;
(function(i) {
   i.SUBJECT_TYPE_DEFAULT = "SUBJECT_TYPE_DEFAULT", i.SUBJECT_TYPE_PERSON = "SUBJECT_TYPE_PERSON", i.SUBJECT_TYPE_ANIMAL = "SUBJECT_TYPE_ANIMAL", i.SUBJECT_TYPE_PRODUCT = "SUBJECT_TYPE_PRODUCT"
})(wm || (wm = {}));
var Um;
(function(i) {
   i.EDIT_MODE_DEFAULT = "EDIT_MODE_DEFAULT", i.EDIT_MODE_INPAINT_REMOVAL = "EDIT_MODE_INPAINT_REMOVAL", i.EDIT_MODE_INPAINT_INSERTION = "EDIT_MODE_INPAINT_INSERTION", i.EDIT_MODE_OUTPAINT = "EDIT_MODE_OUTPAINT", i.EDIT_MODE_CONTROLLED_EDITING = "EDIT_MODE_CONTROLLED_EDITING", i.EDIT_MODE_STYLE = "EDIT_MODE_STYLE", i.EDIT_MODE_BGSWAP = "EDIT_MODE_BGSWAP", i.EDIT_MODE_PRODUCT_IMAGE = "EDIT_MODE_PRODUCT_IMAGE"
})(Um || (Um = {}));
var Lm;
(function(i) {
   i.FOREGROUND = "FOREGROUND", i.BACKGROUND = "BACKGROUND", i.PROMPT = "PROMPT", i.SEMANTIC = "SEMANTIC", i.INTERACTIVE = "INTERACTIVE"
})(Lm || (Lm = {}));
var Gm;
(function(i) {
   i.ASSET = "ASSET", i.STYLE = "STYLE"
})(Gm || (Gm = {}));
var Hm;
(function(i) {
   i.INSERT = "INSERT", i.REMOVE = "REMOVE", i.REMOVE_STATIC = "REMOVE_STATIC", i.OUTPAINT = "OUTPAINT"
})(Hm || (Hm = {}));
var qm;
(function(i) {
   i.OPTIMIZED = "OPTIMIZED", i.LOSSLESS = "LOSSLESS"
})(qm || (qm = {}));
var Vm;
(function(i) {
   i.SUPERVISED_FINE_TUNING = "SUPERVISED_FINE_TUNING", i.PREFERENCE_TUNING = "PREFERENCE_TUNING"
})(Vm || (Vm = {}));
var zm;
(function(i) {
   i.STATE_UNSPECIFIED = "STATE_UNSPECIFIED", i.STATE_PENDING = "STATE_PENDING", i.STATE_ACTIVE = "STATE_ACTIVE", i.STATE_FAILED = "STATE_FAILED"
})(zm || (zm = {}));
var km;
(function(i) {
   i.STATE_UNSPECIFIED = "STATE_UNSPECIFIED", i.PROCESSING = "PROCESSING", i.ACTIVE = "ACTIVE", i.FAILED = "FAILED"
})(km || (km = {}));
var Pm;
(function(i) {
   i.SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED", i.UPLOADED = "UPLOADED", i.GENERATED = "GENERATED"
})(Pm || (Pm = {}));
var Bm;
(function(i) {
   i.TURN_COMPLETE_REASON_UNSPECIFIED = "TURN_COMPLETE_REASON_UNSPECIFIED", i.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", i.RESPONSE_REJECTED = "RESPONSE_REJECTED", i.NEED_MORE_INPUT = "NEED_MORE_INPUT"
})(Bm || (Bm = {}));
var Om;
(function(i) {
   i.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", i.TEXT = "TEXT", i.IMAGE = "IMAGE", i.VIDEO = "VIDEO", i.AUDIO = "AUDIO", i.DOCUMENT = "DOCUMENT"
})(Om || (Om = {}));
var Fm;
(function(i) {
   i.VAD_SIGNAL_TYPE_UNSPECIFIED = "VAD_SIGNAL_TYPE_UNSPECIFIED", i.VAD_SIGNAL_TYPE_SOS = "VAD_SIGNAL_TYPE_SOS", i.VAD_SIGNAL_TYPE_EOS = "VAD_SIGNAL_TYPE_EOS"
})(Fm || (Fm = {}));
var Ym;
(function(i) {
   i.START_SENSITIVITY_UNSPECIFIED = "START_SENSITIVITY_UNSPECIFIED", i.START_SENSITIVITY_HIGH = "START_SENSITIVITY_HIGH", i.START_SENSITIVITY_LOW = "START_SENSITIVITY_LOW"
})(Ym || (Ym = {}));
var Jm;
(function(i) {
   i.END_SENSITIVITY_UNSPECIFIED = "END_SENSITIVITY_UNSPECIFIED", i.END_SENSITIVITY_HIGH = "END_SENSITIVITY_HIGH", i.END_SENSITIVITY_LOW = "END_SENSITIVITY_LOW"
})(Jm || (Jm = {}));
var Km;
(function(i) {
   i.ACTIVITY_HANDLING_UNSPECIFIED = "ACTIVITY_HANDLING_UNSPECIFIED", i.START_OF_ACTIVITY_INTERRUPTS = "START_OF_ACTIVITY_INTERRUPTS", i.NO_INTERRUPTION = "NO_INTERRUPTION"
})(Km || (Km = {}));
var Xm;
(function(i) {
   i.TURN_COVERAGE_UNSPECIFIED = "TURN_COVERAGE_UNSPECIFIED", i.TURN_INCLUDES_ONLY_ACTIVITY = "TURN_INCLUDES_ONLY_ACTIVITY", i.TURN_INCLUDES_ALL_INPUT = "TURN_INCLUDES_ALL_INPUT"
})(Xm || (Xm = {}));
var Qm;
(function(i) {
   i.SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED", i.C_MAJOR_A_MINOR = "C_MAJOR_A_MINOR", i.D_FLAT_MAJOR_B_FLAT_MINOR = "D_FLAT_MAJOR_B_FLAT_MINOR", i.D_MAJOR_B_MINOR = "D_MAJOR_B_MINOR", i.E_FLAT_MAJOR_C_MINOR = "E_FLAT_MAJOR_C_MINOR", i.E_MAJOR_D_FLAT_MINOR = "E_MAJOR_D_FLAT_MINOR", i.F_MAJOR_D_MINOR = "F_MAJOR_D_MINOR", i.G_FLAT_MAJOR_E_FLAT_MINOR = "G_FLAT_MAJOR_E_FLAT_MINOR", i.G_MAJOR_E_MINOR = "G_MAJOR_E_MINOR", i.A_FLAT_MAJOR_F_MINOR = "A_FLAT_MAJOR_F_MINOR", i.A_MAJOR_G_FLAT_MINOR = "A_MAJOR_G_FLAT_MINOR", i.B_FLAT_MAJOR_G_MINOR = "B_FLAT_MAJOR_G_MINOR", i.B_MAJOR_A_FLAT_MINOR = "B_MAJOR_A_FLAT_MINOR"
})(Qm || (Qm = {}));
var Zm;
(function(i) {
   i.MUSIC_GENERATION_MODE_UNSPECIFIED = "MUSIC_GENERATION_MODE_UNSPECIFIED", i.QUALITY = "QUALITY", i.DIVERSITY = "DIVERSITY", i.VOCALIZATION = "VOCALIZATION"
})(Zm || (Zm = {}));
var Zi;
(function(i) {
   i.PLAYBACK_CONTROL_UNSPECIFIED = "PLAYBACK_CONTROL_UNSPECIFIED", i.PLAY = "PLAY", i.PAUSE = "PAUSE", i.STOP = "STOP", i.RESET_CONTEXT = "RESET_CONTEXT"
})(Zi || (Zi = {}));
class yu {
   constructor(t) {
       const l = {};
       for (const a of t.headers.entries()) l[a[0]] = a[1];
       this.headers = l, this.responseInternal = t
   }
   json() {
       return this.responseInternal.json()
   }
}
class el {
   get text() {
       var t, l, a, u, f, m, g, y;
       if (((u = (a = (l = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || l === void 0 ? void 0 : l.content) === null || a === void 0 ? void 0 : a.parts) === null || u === void 0 ? void 0 : u.length) === 0) return;
       this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning text from the first one.");
       let h = "",
           v = !1;
       const S = [];
       for (const E of (y = (g = (m = (f = this.candidates) === null || f === void 0 ? void 0 : f[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) !== null && y !== void 0 ? y : []) {
           for (const [C, b] of Object.entries(E)) C !== "text" && C !== "thought" && C !== "thoughtSignature" && (b !== null || b !== void 0) && S.push(C);
           if (typeof E.text == "string") {
               if (typeof E.thought == "boolean" && E.thought) continue;
               v = !0, h += E.text
           }
       }
       return S.length > 0 && console.warn(`there are non-text parts ${S} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), v ? h : void 0
   }
   get data() {
       var t, l, a, u, f, m, g, y;
       if (((u = (a = (l = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || l === void 0 ? void 0 : l.content) === null || a === void 0 ? void 0 : a.parts) === null || u === void 0 ? void 0 : u.length) === 0) return;
       this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning data from the first one.");
       let h = "";
       const v = [];
       for (const S of (y = (g = (m = (f = this.candidates) === null || f === void 0 ? void 0 : f[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) !== null && y !== void 0 ? y : []) {
           for (const [E, C] of Object.entries(S)) E !== "inlineData" && (C !== null || C !== void 0) && v.push(E);
           S.inlineData && typeof S.inlineData.data == "string" && (h += atob(S.inlineData.data))
       }
       return v.length > 0 && console.warn(`there are non-data parts ${v} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), h.length > 0 ? btoa(h) : void 0
   }
   get functionCalls() {
       var t, l, a, u, f, m, g, y;
       if (((u = (a = (l = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || l === void 0 ? void 0 : l.content) === null || a === void 0 ? void 0 : a.parts) === null || u === void 0 ? void 0 : u.length) === 0) return;
       this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning function calls from the first one.");
       const h = (y = (g = (m = (f = this.candidates) === null || f === void 0 ? void 0 : f[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) === null || y === void 0 ? void 0 : y.filter(v => v.functionCall).map(v => v.functionCall).filter(v => v !== void 0);
       if ((h == null ? void 0 : h.length) !== 0) return h
   }
   get executableCode() {
       var t, l, a, u, f, m, g, y, h;
       if (((u = (a = (l = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || l === void 0 ? void 0 : l.content) === null || a === void 0 ? void 0 : a.parts) === null || u === void 0 ? void 0 : u.length) === 0) return;
       this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning executable code from the first one.");
       const v = (y = (g = (m = (f = this.candidates) === null || f === void 0 ? void 0 : f[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) === null || y === void 0 ? void 0 : y.filter(S => S.executableCode).map(S => S.executableCode).filter(S => S !== void 0);
       if ((v == null ? void 0 : v.length) !== 0) return (h = v == null ? void 0 : v[0]) === null || h === void 0 ? void 0 : h.code
   }
   get codeExecutionResult() {
       var t, l, a, u, f, m, g, y, h;
       if (((u = (a = (l = (t = this.candidates) === null || t === void 0 ? void 0 : t[0]) === null || l === void 0 ? void 0 : l.content) === null || a === void 0 ? void 0 : a.parts) === null || u === void 0 ? void 0 : u.length) === 0) return;
       this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning code execution result from the first one.");
       const v = (y = (g = (m = (f = this.candidates) === null || f === void 0 ? void 0 : f[0]) === null || m === void 0 ? void 0 : m.content) === null || g === void 0 ? void 0 : g.parts) === null || y === void 0 ? void 0 : y.filter(S => S.codeExecutionResult).map(S => S.codeExecutionResult).filter(S => S !== void 0);
       if ((v == null ? void 0 : v.length) !== 0) return (h = v == null ? void 0 : v[0]) === null || h === void 0 ? void 0 : h.output
   }
}
class $m {}
class Wm {}
class NT {}
class xT {}
class IT {}
class DT {}
class jm {}
class eh {}
class th {}
class bT {}
class Ia {
   _fromAPIResponse({
       apiResponse: t,
       _isVertexAI: l
   }) {
       const a = new Ia;
       let u;
       const f = t;
       return l ? u = hT(f) : u = mT(f), Object.assign(a, u), a
   }
}
class nh {}
class ih {}
class oh {}
class lh {}
class wT {}
class UT {}
class LT {}
class bu {
   _fromAPIResponse({
       apiResponse: t,
       _isVertexAI: l
   }) {
       const a = new bu,
           f = _T(t);
       return Object.assign(a, f), a
   }
}
class GT {}
class HT {}
class qT {}
class ah {}
class VT {
   get text() {
       var t, l, a;
       let u = "",
           f = !1;
       const m = [];
       for (const g of (a = (l = (t = this.serverContent) === null || t === void 0 ? void 0 : t.modelTurn) === null || l === void 0 ? void 0 : l.parts) !== null && a !== void 0 ? a : []) {
           for (const [y, h] of Object.entries(g)) y !== "text" && y !== "thought" && h !== null && m.push(y);
           if (typeof g.text == "string") {
               if (typeof g.thought == "boolean" && g.thought) continue;
               f = !0, u += g.text
           }
       }
       return m.length > 0 && console.warn(`there are non-text parts ${m} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), f ? u : void 0
   }
   get data() {
       var t, l, a;
       let u = "";
       const f = [];
       for (const m of (a = (l = (t = this.serverContent) === null || t === void 0 ? void 0 : t.modelTurn) === null || l === void 0 ? void 0 : l.parts) !== null && a !== void 0 ? a : []) {
           for (const [g, y] of Object.entries(m)) g !== "inlineData" && y !== null && f.push(g);
           m.inlineData && typeof m.inlineData.data == "string" && (u += atob(m.inlineData.data))
       }
       return f.length > 0 && console.warn(`there are non-data parts ${f} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), u.length > 0 ? btoa(u) : void 0
   }
}
class zT {
   get audioChunk() {
       if (this.serverContent && this.serverContent.audioChunks && this.serverContent.audioChunks.length > 0) return this.serverContent.audioChunks[0]
   }
}
class wu {
   _fromAPIResponse({
       apiResponse: t,
       _isVertexAI: l
   }) {
       const a = new wu,
           f = qh(t);
       return Object.assign(a, f), a
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function Te(i, t) {
   if (!t || typeof t != "string") throw new Error("model is required and must be a string");
   if (t.includes("..") || t.includes("?") || t.includes("&")) throw new Error("invalid model parameter");
   if (i.isVertexAI()) {
       if (t.startsWith("publishers/") || t.startsWith("projects/") || t.startsWith("models/")) return t;
       if (t.indexOf("/") >= 0) {
           const l = t.split("/", 2);
           return `publishers/${l[0]}/models/${l[1]}`
       } else return `publishers/google/models/${t}`
   } else return t.startsWith("models/") || t.startsWith("tunedModels/") ? t : `models/${t}`
}

function Vh(i, t) {
   const l = Te(i, t);
   return l ? l.startsWith("publishers/") && i.isVertexAI() ? `projects/${i.getProject()}/locations/${i.getLocation()}/${l}` : l.startsWith("models/") && i.isVertexAI() ? `projects/${i.getProject()}/locations/${i.getLocation()}/publishers/google/${l}` : l : ""
}

function zh(i) {
   return Array.isArray(i) ? i.map(t => Da(t)) : [Da(i)]
}

function Da(i) {
   if (typeof i == "object" && i !== null) return i;
   throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof i}`)
}

function kh(i) {
   const t = Da(i);
   if (t.mimeType && t.mimeType.startsWith("image/")) return t;
   throw new Error(`Unsupported mime type: ${t.mimeType}`)
}

function Ph(i) {
   const t = Da(i);
   if (t.mimeType && t.mimeType.startsWith("audio/")) return t;
   throw new Error(`Unsupported mime type: ${t.mimeType}`)
}

function sh(i) {
   if (i == null) throw new Error("PartUnion is required");
   if (typeof i == "object") return i;
   if (typeof i == "string") return {
       text: i
   };
   throw new Error(`Unsupported part type: ${typeof i}`)
}

function Bh(i) {
   if (i == null || Array.isArray(i) && i.length === 0) throw new Error("PartListUnion is required");
   return Array.isArray(i) ? i.map(t => sh(t)) : [sh(i)]
}

function vu(i) {
   return i != null && typeof i == "object" && "parts" in i && Array.isArray(i.parts)
}

function rh(i) {
   return i != null && typeof i == "object" && "functionCall" in i
}

function uh(i) {
   return i != null && typeof i == "object" && "functionResponse" in i
}

function ot(i) {
   if (i == null) throw new Error("ContentUnion is required");
   return vu(i) ? i : {
       role: "user",
       parts: Bh(i)
   }
}

function Uu(i, t) {
   if (!t) return [];
   if (i.isVertexAI() && Array.isArray(t)) return t.flatMap(l => {
       const a = ot(l);
       return a.parts && a.parts.length > 0 && a.parts[0].text !== void 0 ? [a.parts[0].text] : []
   });
   if (i.isVertexAI()) {
       const l = ot(t);
       return l.parts && l.parts.length > 0 && l.parts[0].text !== void 0 ? [l.parts[0].text] : []
   }
   return Array.isArray(t) ? t.map(l => ot(l)) : [ot(t)]
}

function qt(i) {
   if (i == null || Array.isArray(i) && i.length === 0) throw new Error("contents are required");
   if (!Array.isArray(i)) {
       if (rh(i) || uh(i)) throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");
       return [ot(i)]
   }
   const t = [],
       l = [],
       a = vu(i[0]);
   for (const u of i) {
       const f = vu(u);
       if (f != a) throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");
       if (f) t.push(u);
       else {
           if (rh(u) || uh(u)) throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");
           l.push(u)
       }
   }
   return a || t.push({
       role: "user",
       parts: Bh(l)
   }), t
}

function kT(i, t) {
   i.includes("null") && (t.nullable = !0);
   const l = i.filter(a => a !== "null");
   if (l.length === 1) t.type = Object.values(Bn).includes(l[0].toUpperCase()) ? l[0].toUpperCase() : Bn.TYPE_UNSPECIFIED;
   else {
       t.anyOf = [];
       for (const a of l) t.anyOf.push({
           type: Object.values(Bn).includes(a.toUpperCase()) ? a.toUpperCase() : Bn.TYPE_UNSPECIFIED
       })
   }
}

function Wi(i) {
   const t = {},
       l = ["items"],
       a = ["anyOf"],
       u = ["properties"];
   if (i.type && i.anyOf) throw new Error("type and anyOf cannot be both populated.");
   const f = i.anyOf;
   f != null && f.length == 2 && (f[0].type === "null" ? (t.nullable = !0, i = f[1]) : f[1].type === "null" && (t.nullable = !0, i = f[0])), i.type instanceof Array && kT(i.type, t);
   for (const [m, g] of Object.entries(i))
       if (g != null)
           if (m == "type") {
               if (g === "null") throw new Error("type: null can not be the only possible type for the field.");
               if (g instanceof Array) continue;
               t.type = Object.values(Bn).includes(g.toUpperCase()) ? g.toUpperCase() : Bn.TYPE_UNSPECIFIED
           } else if (l.includes(m)) t[m] = Wi(g);
   else if (a.includes(m)) {
       const y = [];
       for (const h of g) {
           if (h.type == "null") {
               t.nullable = !0;
               continue
           }
           y.push(Wi(h))
       }
       t[m] = y
   } else if (u.includes(m)) {
       const y = {};
       for (const [h, v] of Object.entries(g)) y[h] = Wi(v);
       t[m] = y
   } else {
       if (m === "additionalProperties") continue;
       t[m] = g
   }
   return t
}

function Lu(i) {
   return Wi(i)
}

function Gu(i) {
   if (typeof i == "object") return i;
   if (typeof i == "string") return {
       voiceConfig: {
           prebuiltVoiceConfig: {
               voiceName: i
           }
       }
   };
   throw new Error(`Unsupported speechConfig type: ${typeof i}`)
}

function Hu(i) {
   if ("multiSpeakerVoiceConfig" in i) throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");
   return i
}

function eo(i) {
   if (i.functionDeclarations)
       for (const t of i.functionDeclarations) t.parameters && (Object.keys(t.parameters).includes("$schema") ? t.parametersJsonSchema || (t.parametersJsonSchema = t.parameters, delete t.parameters) : t.parameters = Wi(t.parameters)), t.response && (Object.keys(t.response).includes("$schema") ? t.responseJsonSchema || (t.responseJsonSchema = t.response, delete t.response) : t.response = Wi(t.response));
   return i
}

function to(i) {
   if (i == null) throw new Error("tools is required");
   if (!Array.isArray(i)) throw new Error("tools is required and must be an array of Tools");
   const t = [];
   for (const l of i) t.push(l);
   return t
}

function PT(i, t, l, a = 1) {
   const u = !t.startsWith(`${l}/`) && t.split("/").length === a;
   return i.isVertexAI() ? t.startsWith("projects/") ? t : t.startsWith("locations/") ? `projects/${i.getProject()}/${t}` : t.startsWith(`${l}/`) ? `projects/${i.getProject()}/locations/${i.getLocation()}/${t}` : u ? `projects/${i.getProject()}/locations/${i.getLocation()}/${l}/${t}` : t : u ? `${l}/${t}` : t
}

function gn(i, t) {
   if (typeof t != "string") throw new Error("name must be a string");
   return PT(i, t, "cachedContents")
}

function Oh(i) {
   switch (i) {
       case "STATE_UNSPECIFIED":
           return "JOB_STATE_UNSPECIFIED";
       case "CREATING":
           return "JOB_STATE_RUNNING";
       case "ACTIVE":
           return "JOB_STATE_SUCCEEDED";
       case "FAILED":
           return "JOB_STATE_FAILED";
       default:
           return i
   }
}

function On(i) {
   return Du(i)
}

function BT(i) {
   return i != null && typeof i == "object" && "name" in i
}

function OT(i) {
   return i != null && typeof i == "object" && "video" in i
}

function FT(i) {
   return i != null && typeof i == "object" && "uri" in i
}

function Fh(i) {
   var t;
   let l;
   if (BT(i) && (l = i.name), !(FT(i) && (l = i.uri, l === void 0)) && !(OT(i) && (l = (t = i.video) === null || t === void 0 ? void 0 : t.uri, l === void 0))) {
       if (typeof i == "string" && (l = i), l === void 0) throw new Error("Could not extract file name from the provided input.");
       if (l.startsWith("https://")) {
           const u = l.split("files/")[1].match(/[a-z0-9]+/);
           if (u === null) throw new Error(`Could not extract file name from URI ${l}`);
           l = u[0]
       } else l.startsWith("files/") && (l = l.split("files/")[1]);
       return l
   }
}

function Yh(i, t) {
   let l;
   return i.isVertexAI() ? l = t ? "publishers/google/models" : "models" : l = t ? "models" : "tunedModels", l
}

function Jh(i) {
   for (const t of ["models", "tunedModels", "publisherModels"])
       if (YT(i, t)) return i[t];
   return []
}

function YT(i, t) {
   return i !== null && typeof i == "object" && t in i
}

function JT(i, t = {}) {
   const l = i,
       a = {
           name: l.name,
           description: l.description,
           parametersJsonSchema: l.inputSchema
       };
   return l.outputSchema && (a.responseJsonSchema = l.outputSchema), t.behavior && (a.behavior = t.behavior), {
       functionDeclarations: [a]
   }
}

function KT(i, t = {}) {
   const l = [],
       a = new Set;
   for (const u of i) {
       const f = u.name;
       if (a.has(f)) throw new Error(`Duplicate function name ${f} found in MCP tools. Please ensure function names are unique.`);
       a.add(f);
       const m = JT(u, t);
       m.functionDeclarations && l.push(...m.functionDeclarations)
   }
   return {
       functionDeclarations: l
   }
}

function Kh(i, t) {
   let l;
   if (typeof t == "string")
       if (i.isVertexAI())
           if (t.startsWith("gs://")) l = {
               format: "jsonl",
               gcsUri: [t]
           };
           else if (t.startsWith("bq://")) l = {
       format: "bigquery",
       bigqueryUri: t
   };
   else throw new Error(`Unsupported string source for Vertex AI: ${t}`);
   else if (t.startsWith("files/")) l = {
       fileName: t
   };
   else throw new Error(`Unsupported string source for Gemini API: ${t}`);
   else if (Array.isArray(t)) {
       if (i.isVertexAI()) throw new Error("InlinedRequest[] is not supported in Vertex AI.");
       l = {
           inlinedRequests: t
       }
   } else l = t;
   const a = [l.gcsUri, l.bigqueryUri].filter(Boolean).length,
       u = [l.inlinedRequests, l.fileName].filter(Boolean).length;
   if (i.isVertexAI()) {
       if (u > 0 || a !== 1) throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")
   } else if (a > 0 || u !== 1) throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");
   return l
}

function XT(i) {
   if (typeof i != "string") return i;
   const t = i;
   if (t.startsWith("gs://")) return {
       format: "jsonl",
       gcsUri: t
   };
   if (t.startsWith("bq://")) return {
       format: "bigquery",
       bigqueryUri: t
   };
   throw new Error(`Unsupported destination: ${t}`)
}

function Xh(i) {
   if (typeof i != "object" || i === null) return {};
   const t = i,
       l = t.inlinedResponses;
   if (typeof l != "object" || l === null) return i;
   const u = l.inlinedResponses;
   if (!Array.isArray(u) || u.length === 0) return i;
   let f = !1;
   for (const m of u) {
       if (typeof m != "object" || m === null) continue;
       const y = m.response;
       if (typeof y != "object" || y === null) continue;
       if (y.embedding !== void 0) {
           f = !0;
           break
       }
   }
   return f && (t.inlinedEmbedContentResponses = t.inlinedResponses, delete t.inlinedResponses), i
}

function no(i, t) {
   const l = t;
   if (!i.isVertexAI()) {
       if (/batches\/[^/]+$/.test(l)) return l.split("/").pop();
       throw new Error(`Invalid batch job name: ${l}.`)
   }
   if (/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(l)) return l.split("/").pop();
   if (/^\d+$/.test(l)) return l;
   throw new Error(`Invalid batch job name: ${l}.`)
}

function Qh(i) {
   const t = i;
   return t === "BATCH_STATE_UNSPECIFIED" ? "JOB_STATE_UNSPECIFIED" : t === "BATCH_STATE_PENDING" ? "JOB_STATE_PENDING" : t === "BATCH_STATE_RUNNING" ? "JOB_STATE_RUNNING" : t === "BATCH_STATE_SUCCEEDED" ? "JOB_STATE_SUCCEEDED" : t === "BATCH_STATE_FAILED" ? "JOB_STATE_FAILED" : t === "BATCH_STATE_CANCELLED" ? "JOB_STATE_CANCELLED" : t === "BATCH_STATE_EXPIRED" ? "JOB_STATE_EXPIRED" : t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function QT(i) {
   const t = {},
       l = r(i, ["responsesFile"]);
   l != null && c(t, ["fileName"], l);
   const a = r(i, ["inlinedResponses", "inlinedResponses"]);
   if (a != null) {
       let f = a;
       Array.isArray(f) && (f = f.map(m => IS(m))), c(t, ["inlinedResponses"], f)
   }
   const u = r(i, ["inlinedEmbedContentResponses", "inlinedResponses"]);
   if (u != null) {
       let f = u;
       Array.isArray(f) && (f = f.map(m => m)), c(t, ["inlinedEmbedContentResponses"], f)
   }
   return t
}

function ZT(i) {
   const t = {},
       l = r(i, ["predictionsFormat"]);
   l != null && c(t, ["format"], l);
   const a = r(i, ["gcsDestination", "outputUriPrefix"]);
   a != null && c(t, ["gcsUri"], a);
   const u = r(i, ["bigqueryDestination", "outputUri"]);
   return u != null && c(t, ["bigqueryUri"], u), t
}

function $T(i) {
   const t = {},
       l = r(i, ["format"]);
   l != null && c(t, ["predictionsFormat"], l);
   const a = r(i, ["gcsUri"]);
   a != null && c(t, ["gcsDestination", "outputUriPrefix"], a);
   const u = r(i, ["bigqueryUri"]);
   if (u != null && c(t, ["bigqueryDestination", "outputUri"], u), r(i, ["fileName"]) !== void 0) throw new Error("fileName parameter is not supported in Vertex AI.");
   if (r(i, ["inlinedResponses"]) !== void 0) throw new Error("inlinedResponses parameter is not supported in Vertex AI.");
   if (r(i, ["inlinedEmbedContentResponses"]) !== void 0) throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");
   return t
}

function Ma(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["metadata", "displayName"]);
   a != null && c(t, ["displayName"], a);
   const u = r(i, ["metadata", "state"]);
   u != null && c(t, ["state"], Qh(u));
   const f = r(i, ["metadata", "createTime"]);
   f != null && c(t, ["createTime"], f);
   const m = r(i, ["metadata", "endTime"]);
   m != null && c(t, ["endTime"], m);
   const g = r(i, ["metadata", "updateTime"]);
   g != null && c(t, ["updateTime"], g);
   const y = r(i, ["metadata", "model"]);
   y != null && c(t, ["model"], y);
   const h = r(i, ["metadata", "output"]);
   return h != null && c(t, ["dest"], QT(Xh(h))), t
}

function Tu(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["displayName"]);
   a != null && c(t, ["displayName"], a);
   const u = r(i, ["state"]);
   u != null && c(t, ["state"], Qh(u));
   const f = r(i, ["error"]);
   f != null && c(t, ["error"], f);
   const m = r(i, ["createTime"]);
   m != null && c(t, ["createTime"], m);
   const g = r(i, ["startTime"]);
   g != null && c(t, ["startTime"], g);
   const y = r(i, ["endTime"]);
   y != null && c(t, ["endTime"], y);
   const h = r(i, ["updateTime"]);
   h != null && c(t, ["updateTime"], h);
   const v = r(i, ["model"]);
   v != null && c(t, ["model"], v);
   const S = r(i, ["inputConfig"]);
   S != null && c(t, ["src"], WT(S));
   const E = r(i, ["outputConfig"]);
   E != null && c(t, ["dest"], ZT(Xh(E)));
   const C = r(i, ["completionStats"]);
   return C != null && c(t, ["completionStats"], C), t
}

function WT(i) {
   const t = {},
       l = r(i, ["instancesFormat"]);
   l != null && c(t, ["format"], l);
   const a = r(i, ["gcsSource", "uris"]);
   a != null && c(t, ["gcsUri"], a);
   const u = r(i, ["bigquerySource", "inputUri"]);
   return u != null && c(t, ["bigqueryUri"], u), t
}

function jT(i, t) {
   const l = {};
   if (r(t, ["format"]) !== void 0) throw new Error("format parameter is not supported in Gemini API.");
   if (r(t, ["gcsUri"]) !== void 0) throw new Error("gcsUri parameter is not supported in Gemini API.");
   if (r(t, ["bigqueryUri"]) !== void 0) throw new Error("bigqueryUri parameter is not supported in Gemini API.");
   const a = r(t, ["fileName"]);
   a != null && c(l, ["fileName"], a);
   const u = r(t, ["inlinedRequests"]);
   if (u != null) {
       let f = u;
       Array.isArray(f) && (f = f.map(m => xS(i, m))), c(l, ["requests", "requests"], f)
   }
   return l
}

function eS(i) {
   const t = {},
       l = r(i, ["format"]);
   l != null && c(t, ["instancesFormat"], l);
   const a = r(i, ["gcsUri"]);
   a != null && c(t, ["gcsSource", "uris"], a);
   const u = r(i, ["bigqueryUri"]);
   if (u != null && c(t, ["bigquerySource", "inputUri"], u), r(i, ["fileName"]) !== void 0) throw new Error("fileName parameter is not supported in Vertex AI.");
   if (r(i, ["inlinedRequests"]) !== void 0) throw new Error("inlinedRequests parameter is not supported in Vertex AI.");
   return t
}

function tS(i) {
   const t = {},
       l = r(i, ["data"]);
   if (l != null && c(t, ["data"], l), r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function nS(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], no(i, a)), l
}

function iS(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], no(i, a)), l
}

function oS(i) {
   const t = {},
       l = r(i, ["content"]);
   l != null && c(t, ["content"], l);
   const a = r(i, ["citationMetadata"]);
   a != null && c(t, ["citationMetadata"], lS(a));
   const u = r(i, ["tokenCount"]);
   u != null && c(t, ["tokenCount"], u);
   const f = r(i, ["finishReason"]);
   f != null && c(t, ["finishReason"], f);
   const m = r(i, ["avgLogprobs"]);
   m != null && c(t, ["avgLogprobs"], m);
   const g = r(i, ["groundingMetadata"]);
   g != null && c(t, ["groundingMetadata"], g);
   const y = r(i, ["index"]);
   y != null && c(t, ["index"], y);
   const h = r(i, ["logprobsResult"]);
   h != null && c(t, ["logprobsResult"], h);
   const v = r(i, ["safetyRatings"]);
   if (v != null) {
       let E = v;
       Array.isArray(E) && (E = E.map(C => C)), c(t, ["safetyRatings"], E)
   }
   const S = r(i, ["urlContextMetadata"]);
   return S != null && c(t, ["urlContextMetadata"], S), t
}

function lS(i) {
   const t = {},
       l = r(i, ["citationSources"]);
   if (l != null) {
       let a = l;
       Array.isArray(a) && (a = a.map(u => u)), c(t, ["citations"], a)
   }
   return t
}

function Zh(i) {
   const t = {},
       l = r(i, ["parts"]);
   if (l != null) {
       let u = l;
       Array.isArray(u) && (u = u.map(f => HS(f))), c(t, ["parts"], u)
   }
   const a = r(i, ["role"]);
   return a != null && c(t, ["role"], a), t
}

function aS(i, t) {
   const l = {},
       a = r(i, ["displayName"]);
   if (t !== void 0 && a != null && c(t, ["batch", "displayName"], a), r(i, ["dest"]) !== void 0) throw new Error("dest parameter is not supported in Gemini API.");
   return l
}

function sS(i, t) {
   const l = {},
       a = r(i, ["displayName"]);
   t !== void 0 && a != null && c(t, ["displayName"], a);
   const u = r(i, ["dest"]);
   return t !== void 0 && u != null && c(t, ["outputConfig"], $T(XT(u))), l
}

function ch(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["src"]);
   u != null && c(l, ["batch", "inputConfig"], jT(i, Kh(i, u)));
   const f = r(t, ["config"]);
   return f != null && aS(f, l), l
}

function rS(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["model"], Te(i, a));
   const u = r(t, ["src"]);
   u != null && c(l, ["inputConfig"], eS(Kh(i, u)));
   const f = r(t, ["config"]);
   return f != null && sS(f, l), l
}

function uS(i, t) {
   const l = {},
       a = r(i, ["displayName"]);
   return t !== void 0 && a != null && c(t, ["batch", "displayName"], a), l
}

function cS(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["src"]);
   u != null && c(l, ["batch", "inputConfig"], yS(i, u));
   const f = r(t, ["config"]);
   return f != null && uS(f, l), l
}

function fS(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], no(i, a)), l
}

function dS(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], no(i, a)), l
}

function pS(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["name"]);
   a != null && c(t, ["name"], a);
   const u = r(i, ["done"]);
   u != null && c(t, ["done"], u);
   const f = r(i, ["error"]);
   return f != null && c(t, ["error"], f), t
}

function mS(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["name"]);
   a != null && c(t, ["name"], a);
   const u = r(i, ["done"]);
   u != null && c(t, ["done"], u);
   const f = r(i, ["error"]);
   return f != null && c(t, ["error"], f), t
}

function hS(i, t) {
   const l = {},
       a = r(t, ["contents"]);
   if (a != null) {
       let f = Uu(i, a);
       Array.isArray(f) && (f = f.map(m => m)), c(l, ["requests[]", "request", "content"], f)
   }
   const u = r(t, ["config"]);
   return u != null && (c(l, ["_self"], gS(u, l)), dT(l, {
       "requests[].*": "requests[].request.*"
   })), l
}

function gS(i, t) {
   const l = {},
       a = r(i, ["taskType"]);
   t !== void 0 && a != null && c(t, ["requests[]", "taskType"], a);
   const u = r(i, ["title"]);
   t !== void 0 && u != null && c(t, ["requests[]", "title"], u);
   const f = r(i, ["outputDimensionality"]);
   if (t !== void 0 && f != null && c(t, ["requests[]", "outputDimensionality"], f), r(i, ["mimeType"]) !== void 0) throw new Error("mimeType parameter is not supported in Gemini API.");
   if (r(i, ["autoTruncate"]) !== void 0) throw new Error("autoTruncate parameter is not supported in Gemini API.");
   return l
}

function yS(i, t) {
   const l = {},
       a = r(t, ["fileName"]);
   a != null && c(l, ["file_name"], a);
   const u = r(t, ["inlinedRequests"]);
   return u != null && c(l, ["requests"], hS(i, u)), l
}

function vS(i) {
   const t = {};
   if (r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const l = r(i, ["fileUri"]);
   l != null && c(t, ["fileUri"], l);
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function TS(i) {
   const t = {},
       l = r(i, ["id"]);
   l != null && c(t, ["id"], l);
   const a = r(i, ["args"]);
   a != null && c(t, ["args"], a);
   const u = r(i, ["name"]);
   if (u != null && c(t, ["name"], u), r(i, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
   if (r(i, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
   return t
}

function SS(i) {
   const t = {},
       l = r(i, ["mode"]);
   l != null && c(t, ["mode"], l);
   const a = r(i, ["allowedFunctionNames"]);
   if (a != null && c(t, ["allowedFunctionNames"], a), r(i, ["streamFunctionCallArguments"]) !== void 0) throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");
   return t
}

function ES(i, t, l) {
   const a = {},
       u = r(t, ["systemInstruction"]);
   l !== void 0 && u != null && c(l, ["systemInstruction"], Zh(ot(u)));
   const f = r(t, ["temperature"]);
   f != null && c(a, ["temperature"], f);
   const m = r(t, ["topP"]);
   m != null && c(a, ["topP"], m);
   const g = r(t, ["topK"]);
   g != null && c(a, ["topK"], g);
   const y = r(t, ["candidateCount"]);
   y != null && c(a, ["candidateCount"], y);
   const h = r(t, ["maxOutputTokens"]);
   h != null && c(a, ["maxOutputTokens"], h);
   const v = r(t, ["stopSequences"]);
   v != null && c(a, ["stopSequences"], v);
   const S = r(t, ["responseLogprobs"]);
   S != null && c(a, ["responseLogprobs"], S);
   const E = r(t, ["logprobs"]);
   E != null && c(a, ["logprobs"], E);
   const C = r(t, ["presencePenalty"]);
   C != null && c(a, ["presencePenalty"], C);
   const b = r(t, ["frequencyPenalty"]);
   b != null && c(a, ["frequencyPenalty"], b);
   const H = r(t, ["seed"]);
   H != null && c(a, ["seed"], H);
   const U = r(t, ["responseMimeType"]);
   U != null && c(a, ["responseMimeType"], U);
   const P = r(t, ["responseSchema"]);
   P != null && c(a, ["responseSchema"], Lu(P));
   const K = r(t, ["responseJsonSchema"]);
   if (K != null && c(a, ["responseJsonSchema"], K), r(t, ["routingConfig"]) !== void 0) throw new Error("routingConfig parameter is not supported in Gemini API.");
   if (r(t, ["modelSelectionConfig"]) !== void 0) throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
   const B = r(t, ["safetySettings"]);
   if (l !== void 0 && B != null) {
       let Ee = B;
       Array.isArray(Ee) && (Ee = Ee.map(Be => qS(Be))), c(l, ["safetySettings"], Ee)
   }
   const X = r(t, ["tools"]);
   if (l !== void 0 && X != null) {
       let Ee = to(X);
       Array.isArray(Ee) && (Ee = Ee.map(Be => zS(eo(Be)))), c(l, ["tools"], Ee)
   }
   const ee = r(t, ["toolConfig"]);
   if (l !== void 0 && ee != null && c(l, ["toolConfig"], VS(ee)), r(t, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
   const te = r(t, ["cachedContent"]);
   l !== void 0 && te != null && c(l, ["cachedContent"], gn(i, te));
   const F = r(t, ["responseModalities"]);
   F != null && c(a, ["responseModalities"], F);
   const he = r(t, ["mediaResolution"]);
   he != null && c(a, ["mediaResolution"], he);
   const W = r(t, ["speechConfig"]);
   if (W != null && c(a, ["speechConfig"], Gu(W)), r(t, ["audioTimestamp"]) !== void 0) throw new Error("audioTimestamp parameter is not supported in Gemini API.");
   const de = r(t, ["thinkingConfig"]);
   de != null && c(a, ["thinkingConfig"], de);
   const Ce = r(t, ["imageConfig"]);
   Ce != null && c(a, ["imageConfig"], NS(Ce));
   const Ge = r(t, ["enableEnhancedCivicAnswers"]);
   return Ge != null && c(a, ["enableEnhancedCivicAnswers"], Ge), a
}

function _S(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["candidates"]);
   if (a != null) {
       let y = a;
       Array.isArray(y) && (y = y.map(h => oS(h))), c(t, ["candidates"], y)
   }
   const u = r(i, ["modelVersion"]);
   u != null && c(t, ["modelVersion"], u);
   const f = r(i, ["promptFeedback"]);
   f != null && c(t, ["promptFeedback"], f);
   const m = r(i, ["responseId"]);
   m != null && c(t, ["responseId"], m);
   const g = r(i, ["usageMetadata"]);
   return g != null && c(t, ["usageMetadata"], g), t
}

function CS(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], no(i, a)), l
}

function AS(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], no(i, a)), l
}

function RS(i) {
   const t = {};
   if (r(i, ["authConfig"]) !== void 0) throw new Error("authConfig parameter is not supported in Gemini API.");
   const l = r(i, ["enableWidget"]);
   return l != null && c(t, ["enableWidget"], l), t
}

function MS(i) {
   const t = {};
   if (r(i, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
   if (r(i, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
   const l = r(i, ["timeRangeFilter"]);
   return l != null && c(t, ["timeRangeFilter"], l), t
}

function NS(i) {
   const t = {},
       l = r(i, ["aspectRatio"]);
   l != null && c(t, ["aspectRatio"], l);
   const a = r(i, ["imageSize"]);
   if (a != null && c(t, ["imageSize"], a), r(i, ["outputMimeType"]) !== void 0) throw new Error("outputMimeType parameter is not supported in Gemini API.");
   if (r(i, ["outputCompressionQuality"]) !== void 0) throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");
   return t
}

function xS(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["request", "model"], Te(i, a));
   const u = r(t, ["contents"]);
   if (u != null) {
       let g = qt(u);
       Array.isArray(g) && (g = g.map(y => Zh(y))), c(l, ["request", "contents"], g)
   }
   const f = r(t, ["metadata"]);
   f != null && c(l, ["metadata"], f);
   const m = r(t, ["config"]);
   return m != null && c(l, ["request", "generationConfig"], ES(i, m, r(l, ["request"], {}))), l
}

function IS(i) {
   const t = {},
       l = r(i, ["response"]);
   l != null && c(t, ["response"], _S(l));
   const a = r(i, ["error"]);
   return a != null && c(t, ["error"], a), t
}

function DS(i, t) {
   const l = {},
       a = r(i, ["pageSize"]);
   t !== void 0 && a != null && c(t, ["_query", "pageSize"], a);
   const u = r(i, ["pageToken"]);
   if (t !== void 0 && u != null && c(t, ["_query", "pageToken"], u), r(i, ["filter"]) !== void 0) throw new Error("filter parameter is not supported in Gemini API.");
   return l
}

function bS(i, t) {
   const l = {},
       a = r(i, ["pageSize"]);
   t !== void 0 && a != null && c(t, ["_query", "pageSize"], a);
   const u = r(i, ["pageToken"]);
   t !== void 0 && u != null && c(t, ["_query", "pageToken"], u);
   const f = r(i, ["filter"]);
   return t !== void 0 && f != null && c(t, ["_query", "filter"], f), l
}

function wS(i) {
   const t = {},
       l = r(i, ["config"]);
   return l != null && DS(l, t), t
}

function US(i) {
   const t = {},
       l = r(i, ["config"]);
   return l != null && bS(l, t), t
}

function LS(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["nextPageToken"]);
   a != null && c(t, ["nextPageToken"], a);
   const u = r(i, ["operations"]);
   if (u != null) {
       let f = u;
       Array.isArray(f) && (f = f.map(m => Ma(m))), c(t, ["batchJobs"], f)
   }
   return t
}

function GS(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["nextPageToken"]);
   a != null && c(t, ["nextPageToken"], a);
   const u = r(i, ["batchPredictionJobs"]);
   if (u != null) {
       let f = u;
       Array.isArray(f) && (f = f.map(m => Tu(m))), c(t, ["batchJobs"], f)
   }
   return t
}

function HS(i) {
   const t = {},
       l = r(i, ["mediaResolution"]);
   l != null && c(t, ["mediaResolution"], l);
   const a = r(i, ["codeExecutionResult"]);
   a != null && c(t, ["codeExecutionResult"], a);
   const u = r(i, ["executableCode"]);
   u != null && c(t, ["executableCode"], u);
   const f = r(i, ["fileData"]);
   f != null && c(t, ["fileData"], vS(f));
   const m = r(i, ["functionCall"]);
   m != null && c(t, ["functionCall"], TS(m));
   const g = r(i, ["functionResponse"]);
   g != null && c(t, ["functionResponse"], g);
   const y = r(i, ["inlineData"]);
   y != null && c(t, ["inlineData"], tS(y));
   const h = r(i, ["text"]);
   h != null && c(t, ["text"], h);
   const v = r(i, ["thought"]);
   v != null && c(t, ["thought"], v);
   const S = r(i, ["thoughtSignature"]);
   S != null && c(t, ["thoughtSignature"], S);
   const E = r(i, ["videoMetadata"]);
   return E != null && c(t, ["videoMetadata"], E), t
}

function qS(i) {
   const t = {},
       l = r(i, ["category"]);
   if (l != null && c(t, ["category"], l), r(i, ["method"]) !== void 0) throw new Error("method parameter is not supported in Gemini API.");
   const a = r(i, ["threshold"]);
   return a != null && c(t, ["threshold"], a), t
}

function VS(i) {
   const t = {},
       l = r(i, ["functionCallingConfig"]);
   l != null && c(t, ["functionCallingConfig"], SS(l));
   const a = r(i, ["retrievalConfig"]);
   return a != null && c(t, ["retrievalConfig"], a), t
}

function zS(i) {
   const t = {},
       l = r(i, ["functionDeclarations"]);
   if (l != null) {
       let v = l;
       Array.isArray(v) && (v = v.map(S => S)), c(t, ["functionDeclarations"], v)
   }
   if (r(i, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
   const a = r(i, ["googleSearchRetrieval"]);
   a != null && c(t, ["googleSearchRetrieval"], a);
   const u = r(i, ["computerUse"]);
   u != null && c(t, ["computerUse"], u);
   const f = r(i, ["fileSearch"]);
   f != null && c(t, ["fileSearch"], f);
   const m = r(i, ["codeExecution"]);
   if (m != null && c(t, ["codeExecution"], m), r(i, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
   const g = r(i, ["googleMaps"]);
   g != null && c(t, ["googleMaps"], RS(g));
   const y = r(i, ["googleSearch"]);
   y != null && c(t, ["googleSearch"], MS(y));
   const h = r(i, ["urlContext"]);
   return h != null && c(t, ["urlContext"], h), t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
var mn;
(function(i) {
   i.PAGED_ITEM_BATCH_JOBS = "batchJobs", i.PAGED_ITEM_MODELS = "models", i.PAGED_ITEM_TUNING_JOBS = "tuningJobs", i.PAGED_ITEM_FILES = "files", i.PAGED_ITEM_CACHED_CONTENTS = "cachedContents", i.PAGED_ITEM_FILE_SEARCH_STORES = "fileSearchStores", i.PAGED_ITEM_DOCUMENTS = "documents"
})(mn || (mn = {}));
class ci {
   constructor(t, l, a, u) {
       this.pageInternal = [], this.paramsInternal = {}, this.requestInternal = l, this.init(t, a, u)
   }
   init(t, l, a) {
       var u, f;
       this.nameInternal = t, this.pageInternal = l[this.nameInternal] || [], this.sdkHttpResponseInternal = l == null ? void 0 : l.sdkHttpResponse, this.idxInternal = 0;
       let m = {
           config: {}
       };
       !a || Object.keys(a).length === 0 ? m = {
           config: {}
       } : typeof a == "object" ? m = Object.assign({}, a) : m = a, m.config && (m.config.pageToken = l.nextPageToken), this.paramsInternal = m, this.pageInternalSize = (f = (u = m.config) === null || u === void 0 ? void 0 : u.pageSize) !== null && f !== void 0 ? f : this.pageInternal.length
   }
   initNextPage(t) {
       this.init(this.nameInternal, t, this.paramsInternal)
   }
   get page() {
       return this.pageInternal
   }
   get name() {
       return this.nameInternal
   }
   get pageSize() {
       return this.pageInternalSize
   }
   get sdkHttpResponse() {
       return this.sdkHttpResponseInternal
   }
   get params() {
       return this.paramsInternal
   }
   get pageLength() {
       return this.pageInternal.length
   }
   getItem(t) {
       return this.pageInternal[t]
   } [Symbol.asyncIterator]() {
       return {
           next: async () => {
               if (this.idxInternal >= this.pageLength)
                   if (this.hasNextPage()) await this.nextPage();
                   else return {
                       value: void 0,
                       done: !0
                   };
               const t = this.getItem(this.idxInternal);
               return this.idxInternal += 1, {
                   value: t,
                   done: !1
               }
           },
           return: async () => ({
               value: void 0,
               done: !0
           })
       }
   }
   async nextPage() {
       if (!this.hasNextPage()) throw new Error("No more pages to fetch.");
       const t = await this.requestInternal(this.params);
       return this.initNextPage(t), this.page
   }
   hasNextPage() {
       var t;
       return ((t = this.params.config) === null || t === void 0 ? void 0 : t.pageToken) !== void 0
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class kS extends hn {
   constructor(t) {
       super(), this.apiClient = t, this.list = async (l = {}) => new ci(mn.PAGED_ITEM_BATCH_JOBS, a => this.listInternal(a), await this.listInternal(l), l), this.create = async l => (this.apiClient.isVertexAI() && (l.config = this.formatDestination(l.src, l.config)), this.createInternal(l)), this.createEmbeddings = async l => {
           if (console.warn("batches.createEmbeddings() is experimental and may change without notice."), this.apiClient.isVertexAI()) throw new Error("Vertex AI does not support batches.createEmbeddings.");
           return this.createEmbeddingsInternal(l)
       }
   }
   createInlinedGenerateContentRequest(t) {
       const l = ch(this.apiClient, t),
           a = l._url,
           u = J("{model}:batchGenerateContent", a),
           g = l.batch.inputConfig.requests,
           y = g.requests,
           h = [];
       for (const v of y) {
           const S = Object.assign({}, v);
           if (S.systemInstruction) {
               const E = S.systemInstruction;
               delete S.systemInstruction;
               const C = S.request;
               C.systemInstruction = E, S.request = C
           }
           h.push(S)
       }
       return g.requests = h, delete l.config, delete l._url, delete l._query, {
           path: u,
           body: l
       }
   }
   getGcsUri(t) {
       if (typeof t == "string") return t.startsWith("gs://") ? t : void 0;
       if (!Array.isArray(t) && t.gcsUri && t.gcsUri.length > 0) return t.gcsUri[0]
   }
   getBigqueryUri(t) {
       if (typeof t == "string") return t.startsWith("bq://") ? t : void 0;
       if (!Array.isArray(t)) return t.bigqueryUri
   }
   formatDestination(t, l) {
       const a = l ? Object.assign({}, l) : {},
           u = Date.now().toString();
       if (a.displayName || (a.displayName = `genaiBatchJob_${u}`), a.dest === void 0) {
           const f = this.getGcsUri(t),
               m = this.getBigqueryUri(t);
           if (f) f.endsWith(".jsonl") ? a.dest = `${f.slice(0,-6)}/dest` : a.dest = `${f}_dest_${u}`;
           else if (m) a.dest = `${m}_dest_${u}`;
           else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")
       }
       return a
   }
   async createInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = rS(this.apiClient, t);
           return g = J("batchPredictionJobs", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json()), m.then(v => Tu(v))
       } else {
           const h = ch(this.apiClient, t);
           return g = J("{model}:batchGenerateContent", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json()), m.then(v => Ma(v))
       }
   }
   async createEmbeddingsInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = cS(this.apiClient, t);
           return f = J("{model}:asyncBatchEmbedContent", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => Ma(y))
       }
   }
   async get(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = AS(this.apiClient, t);
           return g = J("batchPredictionJobs/{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json()), m.then(v => Tu(v))
       } else {
           const h = CS(this.apiClient, t);
           return g = J("batches/{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json()), m.then(v => Ma(v))
       }
   }
   async cancel(t) {
       var l, a, u, f;
       let m = "",
           g = {};
       if (this.apiClient.isVertexAI()) {
           const y = iS(this.apiClient, t);
           m = J("batchPredictionJobs/{name}:cancel", y._url), g = y._query, delete y._url, delete y._query, await this.apiClient.request({
               path: m,
               queryParams: g,
               body: JSON.stringify(y),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           })
       } else {
           const y = nS(this.apiClient, t);
           m = J("batches/{name}:cancel", y._url), g = y._query, delete y._url, delete y._query, await this.apiClient.request({
               path: m,
               queryParams: g,
               body: JSON.stringify(y),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           })
       }
   }
   async listInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = US(t);
           return g = J("batchPredictionJobs", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = GS(v),
                   E = new ah;
               return Object.assign(E, S), E
           })
       } else {
           const h = wS(t);
           return g = J("batches", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = LS(v),
                   E = new ah;
               return Object.assign(E, S), E
           })
       }
   }
   async delete(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = dS(this.apiClient, t);
           return g = J("batchPredictionJobs/{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "DELETE",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => mS(v))
       } else {
           const h = fS(this.apiClient, t);
           return g = J("batches/{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "DELETE",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => pS(v))
       }
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function PS(i) {
   const t = {},
       l = r(i, ["data"]);
   if (l != null && c(t, ["data"], l), r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function fh(i) {
   const t = {},
       l = r(i, ["parts"]);
   if (l != null) {
       let u = l;
       Array.isArray(u) && (u = u.map(f => cE(f))), c(t, ["parts"], u)
   }
   const a = r(i, ["role"]);
   return a != null && c(t, ["role"], a), t
}

function BS(i, t) {
   const l = {},
       a = r(i, ["ttl"]);
   t !== void 0 && a != null && c(t, ["ttl"], a);
   const u = r(i, ["expireTime"]);
   t !== void 0 && u != null && c(t, ["expireTime"], u);
   const f = r(i, ["displayName"]);
   t !== void 0 && f != null && c(t, ["displayName"], f);
   const m = r(i, ["contents"]);
   if (t !== void 0 && m != null) {
       let v = qt(m);
       Array.isArray(v) && (v = v.map(S => fh(S))), c(t, ["contents"], v)
   }
   const g = r(i, ["systemInstruction"]);
   t !== void 0 && g != null && c(t, ["systemInstruction"], fh(ot(g)));
   const y = r(i, ["tools"]);
   if (t !== void 0 && y != null) {
       let v = y;
       Array.isArray(v) && (v = v.map(S => dE(S))), c(t, ["tools"], v)
   }
   const h = r(i, ["toolConfig"]);
   if (t !== void 0 && h != null && c(t, ["toolConfig"], fE(h)), r(i, ["kmsKeyName"]) !== void 0) throw new Error("kmsKeyName parameter is not supported in Gemini API.");
   return l
}

function OS(i, t) {
   const l = {},
       a = r(i, ["ttl"]);
   t !== void 0 && a != null && c(t, ["ttl"], a);
   const u = r(i, ["expireTime"]);
   t !== void 0 && u != null && c(t, ["expireTime"], u);
   const f = r(i, ["displayName"]);
   t !== void 0 && f != null && c(t, ["displayName"], f);
   const m = r(i, ["contents"]);
   if (t !== void 0 && m != null) {
       let S = qt(m);
       Array.isArray(S) && (S = S.map(E => E)), c(t, ["contents"], S)
   }
   const g = r(i, ["systemInstruction"]);
   t !== void 0 && g != null && c(t, ["systemInstruction"], ot(g));
   const y = r(i, ["tools"]);
   if (t !== void 0 && y != null) {
       let S = y;
       Array.isArray(S) && (S = S.map(E => pE(E))), c(t, ["tools"], S)
   }
   const h = r(i, ["toolConfig"]);
   t !== void 0 && h != null && c(t, ["toolConfig"], h);
   const v = r(i, ["kmsKeyName"]);
   return t !== void 0 && v != null && c(t, ["encryption_spec", "kmsKeyName"], v), l
}

function FS(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["model"], Vh(i, a));
   const u = r(t, ["config"]);
   return u != null && BS(u, l), l
}

function YS(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["model"], Vh(i, a));
   const u = r(t, ["config"]);
   return u != null && OS(u, l), l
}

function JS(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], gn(i, a)), l
}

function KS(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], gn(i, a)), l
}

function XS(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   return l != null && c(t, ["sdkHttpResponse"], l), t
}

function QS(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   return l != null && c(t, ["sdkHttpResponse"], l), t
}

function ZS(i) {
   const t = {};
   if (r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const l = r(i, ["fileUri"]);
   l != null && c(t, ["fileUri"], l);
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function $S(i) {
   const t = {},
       l = r(i, ["id"]);
   l != null && c(t, ["id"], l);
   const a = r(i, ["args"]);
   a != null && c(t, ["args"], a);
   const u = r(i, ["name"]);
   if (u != null && c(t, ["name"], u), r(i, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
   if (r(i, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
   return t
}

function WS(i) {
   const t = {},
       l = r(i, ["mode"]);
   l != null && c(t, ["mode"], l);
   const a = r(i, ["allowedFunctionNames"]);
   if (a != null && c(t, ["allowedFunctionNames"], a), r(i, ["streamFunctionCallArguments"]) !== void 0) throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");
   return t
}

function jS(i) {
   const t = {};
   if (r(i, ["behavior"]) !== void 0) throw new Error("behavior parameter is not supported in Vertex AI.");
   const l = r(i, ["description"]);
   l != null && c(t, ["description"], l);
   const a = r(i, ["name"]);
   a != null && c(t, ["name"], a);
   const u = r(i, ["parameters"]);
   u != null && c(t, ["parameters"], u);
   const f = r(i, ["parametersJsonSchema"]);
   f != null && c(t, ["parametersJsonSchema"], f);
   const m = r(i, ["response"]);
   m != null && c(t, ["response"], m);
   const g = r(i, ["responseJsonSchema"]);
   return g != null && c(t, ["responseJsonSchema"], g), t
}

function eE(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], gn(i, a)), l
}

function tE(i, t) {
   const l = {},
       a = r(t, ["name"]);
   return a != null && c(l, ["_url", "name"], gn(i, a)), l
}

function nE(i) {
   const t = {};
   if (r(i, ["authConfig"]) !== void 0) throw new Error("authConfig parameter is not supported in Gemini API.");
   const l = r(i, ["enableWidget"]);
   return l != null && c(t, ["enableWidget"], l), t
}

function iE(i) {
   const t = {};
   if (r(i, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
   if (r(i, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
   const l = r(i, ["timeRangeFilter"]);
   return l != null && c(t, ["timeRangeFilter"], l), t
}

function oE(i, t) {
   const l = {},
       a = r(i, ["pageSize"]);
   t !== void 0 && a != null && c(t, ["_query", "pageSize"], a);
   const u = r(i, ["pageToken"]);
   return t !== void 0 && u != null && c(t, ["_query", "pageToken"], u), l
}

function lE(i, t) {
   const l = {},
       a = r(i, ["pageSize"]);
   t !== void 0 && a != null && c(t, ["_query", "pageSize"], a);
   const u = r(i, ["pageToken"]);
   return t !== void 0 && u != null && c(t, ["_query", "pageToken"], u), l
}

function aE(i) {
   const t = {},
       l = r(i, ["config"]);
   return l != null && oE(l, t), t
}

function sE(i) {
   const t = {},
       l = r(i, ["config"]);
   return l != null && lE(l, t), t
}

function rE(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["nextPageToken"]);
   a != null && c(t, ["nextPageToken"], a);
   const u = r(i, ["cachedContents"]);
   if (u != null) {
       let f = u;
       Array.isArray(f) && (f = f.map(m => m)), c(t, ["cachedContents"], f)
   }
   return t
}

function uE(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["nextPageToken"]);
   a != null && c(t, ["nextPageToken"], a);
   const u = r(i, ["cachedContents"]);
   if (u != null) {
       let f = u;
       Array.isArray(f) && (f = f.map(m => m)), c(t, ["cachedContents"], f)
   }
   return t
}

function cE(i) {
   const t = {},
       l = r(i, ["mediaResolution"]);
   l != null && c(t, ["mediaResolution"], l);
   const a = r(i, ["codeExecutionResult"]);
   a != null && c(t, ["codeExecutionResult"], a);
   const u = r(i, ["executableCode"]);
   u != null && c(t, ["executableCode"], u);
   const f = r(i, ["fileData"]);
   f != null && c(t, ["fileData"], ZS(f));
   const m = r(i, ["functionCall"]);
   m != null && c(t, ["functionCall"], $S(m));
   const g = r(i, ["functionResponse"]);
   g != null && c(t, ["functionResponse"], g);
   const y = r(i, ["inlineData"]);
   y != null && c(t, ["inlineData"], PS(y));
   const h = r(i, ["text"]);
   h != null && c(t, ["text"], h);
   const v = r(i, ["thought"]);
   v != null && c(t, ["thought"], v);
   const S = r(i, ["thoughtSignature"]);
   S != null && c(t, ["thoughtSignature"], S);
   const E = r(i, ["videoMetadata"]);
   return E != null && c(t, ["videoMetadata"], E), t
}

function fE(i) {
   const t = {},
       l = r(i, ["functionCallingConfig"]);
   l != null && c(t, ["functionCallingConfig"], WS(l));
   const a = r(i, ["retrievalConfig"]);
   return a != null && c(t, ["retrievalConfig"], a), t
}

function dE(i) {
   const t = {},
       l = r(i, ["functionDeclarations"]);
   if (l != null) {
       let v = l;
       Array.isArray(v) && (v = v.map(S => S)), c(t, ["functionDeclarations"], v)
   }
   if (r(i, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
   const a = r(i, ["googleSearchRetrieval"]);
   a != null && c(t, ["googleSearchRetrieval"], a);
   const u = r(i, ["computerUse"]);
   u != null && c(t, ["computerUse"], u);
   const f = r(i, ["fileSearch"]);
   f != null && c(t, ["fileSearch"], f);
   const m = r(i, ["codeExecution"]);
   if (m != null && c(t, ["codeExecution"], m), r(i, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
   const g = r(i, ["googleMaps"]);
   g != null && c(t, ["googleMaps"], nE(g));
   const y = r(i, ["googleSearch"]);
   y != null && c(t, ["googleSearch"], iE(y));
   const h = r(i, ["urlContext"]);
   return h != null && c(t, ["urlContext"], h), t
}

function pE(i) {
   const t = {},
       l = r(i, ["functionDeclarations"]);
   if (l != null) {
       let S = l;
       Array.isArray(S) && (S = S.map(E => jS(E))), c(t, ["functionDeclarations"], S)
   }
   const a = r(i, ["retrieval"]);
   a != null && c(t, ["retrieval"], a);
   const u = r(i, ["googleSearchRetrieval"]);
   u != null && c(t, ["googleSearchRetrieval"], u);
   const f = r(i, ["computerUse"]);
   if (f != null && c(t, ["computerUse"], f), r(i, ["fileSearch"]) !== void 0) throw new Error("fileSearch parameter is not supported in Vertex AI.");
   const m = r(i, ["codeExecution"]);
   m != null && c(t, ["codeExecution"], m);
   const g = r(i, ["enterpriseWebSearch"]);
   g != null && c(t, ["enterpriseWebSearch"], g);
   const y = r(i, ["googleMaps"]);
   y != null && c(t, ["googleMaps"], y);
   const h = r(i, ["googleSearch"]);
   h != null && c(t, ["googleSearch"], h);
   const v = r(i, ["urlContext"]);
   return v != null && c(t, ["urlContext"], v), t
}

function mE(i, t) {
   const l = {},
       a = r(i, ["ttl"]);
   t !== void 0 && a != null && c(t, ["ttl"], a);
   const u = r(i, ["expireTime"]);
   return t !== void 0 && u != null && c(t, ["expireTime"], u), l
}

function hE(i, t) {
   const l = {},
       a = r(i, ["ttl"]);
   t !== void 0 && a != null && c(t, ["ttl"], a);
   const u = r(i, ["expireTime"]);
   return t !== void 0 && u != null && c(t, ["expireTime"], u), l
}

function gE(i, t) {
   const l = {},
       a = r(t, ["name"]);
   a != null && c(l, ["_url", "name"], gn(i, a));
   const u = r(t, ["config"]);
   return u != null && mE(u, l), l
}

function yE(i, t) {
   const l = {},
       a = r(t, ["name"]);
   a != null && c(l, ["_url", "name"], gn(i, a));
   const u = r(t, ["config"]);
   return u != null && hE(u, l), l
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class vE extends hn {
   constructor(t) {
       super(), this.apiClient = t, this.list = async (l = {}) => new ci(mn.PAGED_ITEM_CACHED_CONTENTS, a => this.listInternal(a), await this.listInternal(l), l)
   }
   async create(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = YS(this.apiClient, t);
           return g = J("cachedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json()), m.then(v => v)
       } else {
           const h = FS(this.apiClient, t);
           return g = J("cachedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json()), m.then(v => v)
       }
   }
   async get(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = tE(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json()), m.then(v => v)
       } else {
           const h = eE(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json()), m.then(v => v)
       }
   }
   async delete(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = KS(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "DELETE",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = QS(v),
                   E = new oh;
               return Object.assign(E, S), E
           })
       } else {
           const h = JS(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "DELETE",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = XS(v),
                   E = new oh;
               return Object.assign(E, S), E
           })
       }
   }
   async update(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = yE(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "PATCH",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json()), m.then(v => v)
       } else {
           const h = gE(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "PATCH",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json()), m.then(v => v)
       }
   }
   async listInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = sE(t);
           return g = J("cachedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = uE(v),
                   E = new lh;
               return Object.assign(E, S), E
           })
       } else {
           const h = aE(t);
           return g = J("cachedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = rE(v),
                   E = new lh;
               return Object.assign(E, S), E
           })
       }
   }
}

function ba(i, t) {
   var l = {};
   for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && t.indexOf(a) < 0 && (l[a] = i[a]);
   if (i != null && typeof Object.getOwnPropertySymbols == "function")
       for (var u = 0, a = Object.getOwnPropertySymbols(i); u < a.length; u++) t.indexOf(a[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, a[u]) && (l[a[u]] = i[a[u]]);
   return l
}

function dh(i) {
   var t = typeof Symbol == "function" && Symbol.iterator,
       l = t && i[t],
       a = 0;
   if (l) return l.call(i);
   if (i && typeof i.length == "number") return {
       next: function() {
           return i && a >= i.length && (i = void 0), {
               value: i && i[a++],
               done: !i
           }
       }
   };
   throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function oe(i) {
   return this instanceof oe ? (this.v = i, this) : new oe(i)
}

function Bt(i, t, l) {
   if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
   var a = l.apply(i, t || []),
       u, f = [];
   return u = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), g("next"), g("throw"), g("return", m), u[Symbol.asyncIterator] = function() {
       return this
   }, u;

   function m(C) {
       return function(b) {
           return Promise.resolve(b).then(C, S)
       }
   }

   function g(C, b) {
       a[C] && (u[C] = function(H) {
           return new Promise(function(U, P) {
               f.push([C, H, U, P]) > 1 || y(C, H)
           })
       }, b && (u[C] = b(u[C])))
   }

   function y(C, b) {
       try {
           h(a[C](b))
       } catch (H) {
           E(f[0][3], H)
       }
   }

   function h(C) {
       C.value instanceof oe ? Promise.resolve(C.value.v).then(v, S) : E(f[0][2], C)
   }

   function v(C) {
       y("next", C)
   }

   function S(C) {
       y("throw", C)
   }

   function E(C, b) {
       C(b), f.shift(), f.length && y(f[0][0], f[0][1])
   }
}

function Ot(i) {
   if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
   var t = i[Symbol.asyncIterator],
       l;
   return t ? t.call(i) : (i = typeof dh == "function" ? dh(i) : i[Symbol.iterator](), l = {}, a("next"), a("throw"), a("return"), l[Symbol.asyncIterator] = function() {
       return this
   }, l);

   function a(f) {
       l[f] = i[f] && function(m) {
           return new Promise(function(g, y) {
               m = i[f](m), u(g, y, m.done, m.value)
           })
       }
   }

   function u(f, m, g, y) {
       Promise.resolve(y).then(function(h) {
           f({
               value: h,
               done: g
           })
       }, m)
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function TE(i) {
   var t;
   if (i.candidates == null || i.candidates.length === 0) return !1;
   const l = (t = i.candidates[0]) === null || t === void 0 ? void 0 : t.content;
   return l === void 0 ? !1 : $h(l)
}

function $h(i) {
   if (i.parts === void 0 || i.parts.length === 0) return !1;
   for (const t of i.parts)
       if (t === void 0 || Object.keys(t).length === 0) return !1;
   return !0
}

function SE(i) {
   if (i.length !== 0) {
       for (const t of i)
           if (t.role !== "user" && t.role !== "model") throw new Error(`Role must be user or model, but got ${t.role}.`)
   }
}

function ph(i) {
   if (i === void 0 || i.length === 0) return [];
   const t = [],
       l = i.length;
   let a = 0;
   for (; a < l;)
       if (i[a].role === "user") t.push(i[a]), a++;
       else {
           const u = [];
           let f = !0;
           for (; a < l && i[a].role === "model";) u.push(i[a]), f && !$h(i[a]) && (f = !1), a++;
           f ? t.push(...u) : t.pop()
       } return t
}
class EE {
   constructor(t, l) {
       this.modelsModule = t, this.apiClient = l
   }
   create(t) {
       return new _E(this.apiClient, this.modelsModule, t.model, t.config, structuredClone(t.history))
   }
}
class _E {
   constructor(t, l, a, u = {}, f = []) {
       this.apiClient = t, this.modelsModule = l, this.model = a, this.config = u, this.history = f, this.sendPromise = Promise.resolve(), SE(f)
   }
   async sendMessage(t) {
       var l;
       await this.sendPromise;
       const a = ot(t.message),
           u = this.modelsModule.generateContent({
               model: this.model,
               contents: this.getHistory(!0).concat(a),
               config: (l = t.config) !== null && l !== void 0 ? l : this.config
           });
       return this.sendPromise = (async () => {
           var f, m, g;
           const y = await u,
               h = (m = (f = y.candidates) === null || f === void 0 ? void 0 : f[0]) === null || m === void 0 ? void 0 : m.content,
               v = y.automaticFunctionCallingHistory,
               S = this.getHistory(!0).length;
           let E = [];
           v != null && (E = (g = v.slice(S)) !== null && g !== void 0 ? g : []);
           const C = h ? [h] : [];
           this.recordHistory(a, C, E)
       })(), await this.sendPromise.catch(() => {
           this.sendPromise = Promise.resolve()
       }), u
   }
   async sendMessageStream(t) {
       var l;
       await this.sendPromise;
       const a = ot(t.message),
           u = this.modelsModule.generateContentStream({
               model: this.model,
               contents: this.getHistory(!0).concat(a),
               config: (l = t.config) !== null && l !== void 0 ? l : this.config
           });
       this.sendPromise = u.then(() => {}).catch(() => {});
       const f = await u;
       return this.processStreamResponse(f, a)
   }
   getHistory(t = !1) {
       const l = t ? ph(this.history) : this.history;
       return structuredClone(l)
   }
   processStreamResponse(t, l) {
       return Bt(this, arguments, function*() {
           var u, f, m, g, y, h;
           const v = [];
           try {
               for (var S = !0, E = Ot(t), C; C = yield oe(E.next()), u = C.done, !u; S = !0) {
                   g = C.value, S = !1;
                   const b = g;
                   if (TE(b)) {
                       const H = (h = (y = b.candidates) === null || y === void 0 ? void 0 : y[0]) === null || h === void 0 ? void 0 : h.content;
                       H !== void 0 && v.push(H)
                   }
                   yield yield oe(b)
               }
           } catch (b) {
               f = {
                   error: b
               }
           } finally {
               try {
                   !S && !u && (m = E.return) && (yield oe(m.call(E)))
               } finally {
                   if (f) throw f.error
               }
           }
           this.recordHistory(l, v)
       })
   }
   recordHistory(t, l, a) {
       let u = [];
       l.length > 0 && l.every(f => f.role !== void 0) ? u = l : u.push({
           role: "model",
           parts: []
       }), a && a.length > 0 ? this.history.push(...ph(a)) : this.history.push(t), this.history.push(...u)
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class La extends Error {
   constructor(t) {
       super(t.message), this.name = "ApiError", this.status = t.status, Object.setPrototypeOf(this, La.prototype)
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function CE(i) {
   const t = {},
       l = r(i, ["file"]);
   return l != null && c(t, ["file"], l), t
}

function AE(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   return l != null && c(t, ["sdkHttpResponse"], l), t
}

function RE(i) {
   const t = {},
       l = r(i, ["name"]);
   return l != null && c(t, ["_url", "file"], Fh(l)), t
}

function ME(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   return l != null && c(t, ["sdkHttpResponse"], l), t
}

function NE(i) {
   const t = {},
       l = r(i, ["name"]);
   return l != null && c(t, ["_url", "file"], Fh(l)), t
}

function xE(i, t) {
   const l = {},
       a = r(i, ["pageSize"]);
   t !== void 0 && a != null && c(t, ["_query", "pageSize"], a);
   const u = r(i, ["pageToken"]);
   return t !== void 0 && u != null && c(t, ["_query", "pageToken"], u), l
}

function IE(i) {
   const t = {},
       l = r(i, ["config"]);
   return l != null && xE(l, t), t
}

function DE(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["nextPageToken"]);
   a != null && c(t, ["nextPageToken"], a);
   const u = r(i, ["files"]);
   if (u != null) {
       let f = u;
       Array.isArray(f) && (f = f.map(m => m)), c(t, ["files"], f)
   }
   return t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class bE extends hn {
   constructor(t) {
       super(), this.apiClient = t, this.list = async (l = {}) => new ci(mn.PAGED_ITEM_FILES, a => this.listInternal(a), await this.listInternal(l), l)
   }
   async upload(t) {
       if (this.apiClient.isVertexAI()) throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");
       return this.apiClient.uploadFile(t.file, t.config).then(l => l)
   }
   async download(t) {
       await this.apiClient.downloadFile(t)
   }
   async listInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = IE(t);
           return f = J("files", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json().then(h => {
               const v = h;
               return v.sdkHttpResponse = {
                   headers: y.headers
               }, v
           })), u.then(y => {
               const h = DE(y),
                   v = new GT;
               return Object.assign(v, h), v
           })
       }
   }
   async createInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = CE(t);
           return f = J("upload/v1beta/files", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => {
               const h = AE(y),
                   v = new HT;
               return Object.assign(v, h), v
           })
       }
   }
   async get(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = NE(t);
           return f = J("files/{file}", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => y)
       }
   }
   async delete(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = RE(t);
           return f = J("files/{file}", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "DELETE",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json().then(h => {
               const v = h;
               return v.sdkHttpResponse = {
                   headers: y.headers
               }, v
           })), u.then(y => {
               const h = ME(y),
                   v = new qT;
               return Object.assign(v, h), v
           })
       }
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function Na(i) {
   const t = {},
       l = r(i, ["data"]);
   if (l != null && c(t, ["data"], l), r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function wE(i) {
   const t = {},
       l = r(i, ["parts"]);
   if (l != null) {
       let u = l;
       Array.isArray(u) && (u = u.map(f => XE(f))), c(t, ["parts"], u)
   }
   const a = r(i, ["role"]);
   return a != null && c(t, ["role"], a), t
}

function UE(i) {
   const t = {};
   if (r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const l = r(i, ["fileUri"]);
   l != null && c(t, ["fileUri"], l);
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function LE(i) {
   const t = {},
       l = r(i, ["id"]);
   l != null && c(t, ["id"], l);
   const a = r(i, ["args"]);
   a != null && c(t, ["args"], a);
   const u = r(i, ["name"]);
   if (u != null && c(t, ["name"], u), r(i, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
   if (r(i, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
   return t
}

function GE(i) {
   const t = {};
   if (r(i, ["behavior"]) !== void 0) throw new Error("behavior parameter is not supported in Vertex AI.");
   const l = r(i, ["description"]);
   l != null && c(t, ["description"], l);
   const a = r(i, ["name"]);
   a != null && c(t, ["name"], a);
   const u = r(i, ["parameters"]);
   u != null && c(t, ["parameters"], u);
   const f = r(i, ["parametersJsonSchema"]);
   f != null && c(t, ["parametersJsonSchema"], f);
   const m = r(i, ["response"]);
   m != null && c(t, ["response"], m);
   const g = r(i, ["responseJsonSchema"]);
   return g != null && c(t, ["responseJsonSchema"], g), t
}

function HE(i) {
   const t = {},
       l = r(i, ["modelSelectionConfig"]);
   l != null && c(t, ["modelConfig"], l);
   const a = r(i, ["responseJsonSchema"]);
   a != null && c(t, ["responseJsonSchema"], a);
   const u = r(i, ["audioTimestamp"]);
   u != null && c(t, ["audioTimestamp"], u);
   const f = r(i, ["candidateCount"]);
   f != null && c(t, ["candidateCount"], f);
   const m = r(i, ["enableAffectiveDialog"]);
   m != null && c(t, ["enableAffectiveDialog"], m);
   const g = r(i, ["frequencyPenalty"]);
   g != null && c(t, ["frequencyPenalty"], g);
   const y = r(i, ["logprobs"]);
   y != null && c(t, ["logprobs"], y);
   const h = r(i, ["maxOutputTokens"]);
   h != null && c(t, ["maxOutputTokens"], h);
   const v = r(i, ["mediaResolution"]);
   v != null && c(t, ["mediaResolution"], v);
   const S = r(i, ["presencePenalty"]);
   S != null && c(t, ["presencePenalty"], S);
   const E = r(i, ["responseLogprobs"]);
   E != null && c(t, ["responseLogprobs"], E);
   const C = r(i, ["responseMimeType"]);
   C != null && c(t, ["responseMimeType"], C);
   const b = r(i, ["responseModalities"]);
   b != null && c(t, ["responseModalities"], b);
   const H = r(i, ["responseSchema"]);
   H != null && c(t, ["responseSchema"], H);
   const U = r(i, ["routingConfig"]);
   U != null && c(t, ["routingConfig"], U);
   const P = r(i, ["seed"]);
   P != null && c(t, ["seed"], P);
   const K = r(i, ["speechConfig"]);
   K != null && c(t, ["speechConfig"], Wh(K));
   const B = r(i, ["stopSequences"]);
   B != null && c(t, ["stopSequences"], B);
   const X = r(i, ["temperature"]);
   X != null && c(t, ["temperature"], X);
   const ee = r(i, ["thinkingConfig"]);
   ee != null && c(t, ["thinkingConfig"], ee);
   const te = r(i, ["topK"]);
   te != null && c(t, ["topK"], te);
   const F = r(i, ["topP"]);
   if (F != null && c(t, ["topP"], F), r(i, ["enableEnhancedCivicAnswers"]) !== void 0) throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
   return t
}

function qE(i) {
   const t = {};
   if (r(i, ["authConfig"]) !== void 0) throw new Error("authConfig parameter is not supported in Gemini API.");
   const l = r(i, ["enableWidget"]);
   return l != null && c(t, ["enableWidget"], l), t
}

function VE(i) {
   const t = {};
   if (r(i, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
   if (r(i, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
   const l = r(i, ["timeRangeFilter"]);
   return l != null && c(t, ["timeRangeFilter"], l), t
}

function zE(i, t) {
   const l = {},
       a = r(i, ["generationConfig"]);
   t !== void 0 && a != null && c(t, ["setup", "generationConfig"], a);
   const u = r(i, ["responseModalities"]);
   t !== void 0 && u != null && c(t, ["setup", "generationConfig", "responseModalities"], u);
   const f = r(i, ["temperature"]);
   t !== void 0 && f != null && c(t, ["setup", "generationConfig", "temperature"], f);
   const m = r(i, ["topP"]);
   t !== void 0 && m != null && c(t, ["setup", "generationConfig", "topP"], m);
   const g = r(i, ["topK"]);
   t !== void 0 && g != null && c(t, ["setup", "generationConfig", "topK"], g);
   const y = r(i, ["maxOutputTokens"]);
   t !== void 0 && y != null && c(t, ["setup", "generationConfig", "maxOutputTokens"], y);
   const h = r(i, ["mediaResolution"]);
   t !== void 0 && h != null && c(t, ["setup", "generationConfig", "mediaResolution"], h);
   const v = r(i, ["seed"]);
   t !== void 0 && v != null && c(t, ["setup", "generationConfig", "seed"], v);
   const S = r(i, ["speechConfig"]);
   t !== void 0 && S != null && c(t, ["setup", "generationConfig", "speechConfig"], Hu(S));
   const E = r(i, ["thinkingConfig"]);
   t !== void 0 && E != null && c(t, ["setup", "generationConfig", "thinkingConfig"], E);
   const C = r(i, ["enableAffectiveDialog"]);
   t !== void 0 && C != null && c(t, ["setup", "generationConfig", "enableAffectiveDialog"], C);
   const b = r(i, ["systemInstruction"]);
   t !== void 0 && b != null && c(t, ["setup", "systemInstruction"], wE(ot(b)));
   const H = r(i, ["tools"]);
   if (t !== void 0 && H != null) {
       let te = to(H);
       Array.isArray(te) && (te = te.map(F => ZE(eo(F)))), c(t, ["setup", "tools"], te)
   }
   const U = r(i, ["sessionResumption"]);
   t !== void 0 && U != null && c(t, ["setup", "sessionResumption"], QE(U));
   const P = r(i, ["inputAudioTranscription"]);
   t !== void 0 && P != null && c(t, ["setup", "inputAudioTranscription"], P);
   const K = r(i, ["outputAudioTranscription"]);
   t !== void 0 && K != null && c(t, ["setup", "outputAudioTranscription"], K);
   const B = r(i, ["realtimeInputConfig"]);
   t !== void 0 && B != null && c(t, ["setup", "realtimeInputConfig"], B);
   const X = r(i, ["contextWindowCompression"]);
   t !== void 0 && X != null && c(t, ["setup", "contextWindowCompression"], X);
   const ee = r(i, ["proactivity"]);
   if (t !== void 0 && ee != null && c(t, ["setup", "proactivity"], ee), r(i, ["explicitVadSignal"]) !== void 0) throw new Error("explicitVadSignal parameter is not supported in Gemini API.");
   return l
}

function kE(i, t) {
   const l = {},
       a = r(i, ["generationConfig"]);
   t !== void 0 && a != null && c(t, ["setup", "generationConfig"], HE(a));
   const u = r(i, ["responseModalities"]);
   t !== void 0 && u != null && c(t, ["setup", "generationConfig", "responseModalities"], u);
   const f = r(i, ["temperature"]);
   t !== void 0 && f != null && c(t, ["setup", "generationConfig", "temperature"], f);
   const m = r(i, ["topP"]);
   t !== void 0 && m != null && c(t, ["setup", "generationConfig", "topP"], m);
   const g = r(i, ["topK"]);
   t !== void 0 && g != null && c(t, ["setup", "generationConfig", "topK"], g);
   const y = r(i, ["maxOutputTokens"]);
   t !== void 0 && y != null && c(t, ["setup", "generationConfig", "maxOutputTokens"], y);
   const h = r(i, ["mediaResolution"]);
   t !== void 0 && h != null && c(t, ["setup", "generationConfig", "mediaResolution"], h);
   const v = r(i, ["seed"]);
   t !== void 0 && v != null && c(t, ["setup", "generationConfig", "seed"], v);
   const S = r(i, ["speechConfig"]);
   t !== void 0 && S != null && c(t, ["setup", "generationConfig", "speechConfig"], Wh(Hu(S)));
   const E = r(i, ["thinkingConfig"]);
   t !== void 0 && E != null && c(t, ["setup", "generationConfig", "thinkingConfig"], E);
   const C = r(i, ["enableAffectiveDialog"]);
   t !== void 0 && C != null && c(t, ["setup", "generationConfig", "enableAffectiveDialog"], C);
   const b = r(i, ["systemInstruction"]);
   t !== void 0 && b != null && c(t, ["setup", "systemInstruction"], ot(b));
   const H = r(i, ["tools"]);
   if (t !== void 0 && H != null) {
       let F = to(H);
       Array.isArray(F) && (F = F.map(he => $E(eo(he)))), c(t, ["setup", "tools"], F)
   }
   const U = r(i, ["sessionResumption"]);
   t !== void 0 && U != null && c(t, ["setup", "sessionResumption"], U);
   const P = r(i, ["inputAudioTranscription"]);
   t !== void 0 && P != null && c(t, ["setup", "inputAudioTranscription"], P);
   const K = r(i, ["outputAudioTranscription"]);
   t !== void 0 && K != null && c(t, ["setup", "outputAudioTranscription"], K);
   const B = r(i, ["realtimeInputConfig"]);
   t !== void 0 && B != null && c(t, ["setup", "realtimeInputConfig"], B);
   const X = r(i, ["contextWindowCompression"]);
   t !== void 0 && X != null && c(t, ["setup", "contextWindowCompression"], X);
   const ee = r(i, ["proactivity"]);
   t !== void 0 && ee != null && c(t, ["setup", "proactivity"], ee);
   const te = r(i, ["explicitVadSignal"]);
   return t !== void 0 && te != null && c(t, ["setup", "explicitVadSignal"], te), l
}

function PE(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["setup", "model"], Te(i, a));
   const u = r(t, ["config"]);
   return u != null && c(l, ["config"], zE(u, l)), l
}

function BE(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["setup", "model"], Te(i, a));
   const u = r(t, ["config"]);
   return u != null && c(l, ["config"], kE(u, l)), l
}

function OE(i) {
   const t = {},
       l = r(i, ["musicGenerationConfig"]);
   return l != null && c(t, ["musicGenerationConfig"], l), t
}

function FE(i) {
   const t = {},
       l = r(i, ["weightedPrompts"]);
   if (l != null) {
       let a = l;
       Array.isArray(a) && (a = a.map(u => u)), c(t, ["weightedPrompts"], a)
   }
   return t
}

function YE(i) {
   const t = {},
       l = r(i, ["media"]);
   if (l != null) {
       let h = zh(l);
       Array.isArray(h) && (h = h.map(v => Na(v))), c(t, ["mediaChunks"], h)
   }
   const a = r(i, ["audio"]);
   a != null && c(t, ["audio"], Na(Ph(a)));
   const u = r(i, ["audioStreamEnd"]);
   u != null && c(t, ["audioStreamEnd"], u);
   const f = r(i, ["video"]);
   f != null && c(t, ["video"], Na(kh(f)));
   const m = r(i, ["text"]);
   m != null && c(t, ["text"], m);
   const g = r(i, ["activityStart"]);
   g != null && c(t, ["activityStart"], g);
   const y = r(i, ["activityEnd"]);
   return y != null && c(t, ["activityEnd"], y), t
}

function JE(i) {
   const t = {},
       l = r(i, ["media"]);
   if (l != null) {
       let h = zh(l);
       Array.isArray(h) && (h = h.map(v => v)), c(t, ["mediaChunks"], h)
   }
   const a = r(i, ["audio"]);
   a != null && c(t, ["audio"], Ph(a));
   const u = r(i, ["audioStreamEnd"]);
   u != null && c(t, ["audioStreamEnd"], u);
   const f = r(i, ["video"]);
   f != null && c(t, ["video"], kh(f));
   const m = r(i, ["text"]);
   m != null && c(t, ["text"], m);
   const g = r(i, ["activityStart"]);
   g != null && c(t, ["activityStart"], g);
   const y = r(i, ["activityEnd"]);
   return y != null && c(t, ["activityEnd"], y), t
}

function KE(i) {
   const t = {},
       l = r(i, ["setupComplete"]);
   l != null && c(t, ["setupComplete"], l);
   const a = r(i, ["serverContent"]);
   a != null && c(t, ["serverContent"], a);
   const u = r(i, ["toolCall"]);
   u != null && c(t, ["toolCall"], u);
   const f = r(i, ["toolCallCancellation"]);
   f != null && c(t, ["toolCallCancellation"], f);
   const m = r(i, ["usageMetadata"]);
   m != null && c(t, ["usageMetadata"], WE(m));
   const g = r(i, ["goAway"]);
   g != null && c(t, ["goAway"], g);
   const y = r(i, ["sessionResumptionUpdate"]);
   y != null && c(t, ["sessionResumptionUpdate"], y);
   const h = r(i, ["voiceActivityDetectionSignal"]);
   return h != null && c(t, ["voiceActivityDetectionSignal"], h), t
}

function XE(i) {
   const t = {},
       l = r(i, ["mediaResolution"]);
   l != null && c(t, ["mediaResolution"], l);
   const a = r(i, ["codeExecutionResult"]);
   a != null && c(t, ["codeExecutionResult"], a);
   const u = r(i, ["executableCode"]);
   u != null && c(t, ["executableCode"], u);
   const f = r(i, ["fileData"]);
   f != null && c(t, ["fileData"], UE(f));
   const m = r(i, ["functionCall"]);
   m != null && c(t, ["functionCall"], LE(m));
   const g = r(i, ["functionResponse"]);
   g != null && c(t, ["functionResponse"], g);
   const y = r(i, ["inlineData"]);
   y != null && c(t, ["inlineData"], Na(y));
   const h = r(i, ["text"]);
   h != null && c(t, ["text"], h);
   const v = r(i, ["thought"]);
   v != null && c(t, ["thought"], v);
   const S = r(i, ["thoughtSignature"]);
   S != null && c(t, ["thoughtSignature"], S);
   const E = r(i, ["videoMetadata"]);
   return E != null && c(t, ["videoMetadata"], E), t
}

function QE(i) {
   const t = {},
       l = r(i, ["handle"]);
   if (l != null && c(t, ["handle"], l), r(i, ["transparent"]) !== void 0) throw new Error("transparent parameter is not supported in Gemini API.");
   return t
}

function Wh(i) {
   const t = {},
       l = r(i, ["voiceConfig"]);
   l != null && c(t, ["voiceConfig"], l);
   const a = r(i, ["languageCode"]);
   if (a != null && c(t, ["languageCode"], a), r(i, ["multiSpeakerVoiceConfig"]) !== void 0) throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
   return t
}

function ZE(i) {
   const t = {},
       l = r(i, ["functionDeclarations"]);
   if (l != null) {
       let v = l;
       Array.isArray(v) && (v = v.map(S => S)), c(t, ["functionDeclarations"], v)
   }
   if (r(i, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
   const a = r(i, ["googleSearchRetrieval"]);
   a != null && c(t, ["googleSearchRetrieval"], a);
   const u = r(i, ["computerUse"]);
   u != null && c(t, ["computerUse"], u);
   const f = r(i, ["fileSearch"]);
   f != null && c(t, ["fileSearch"], f);
   const m = r(i, ["codeExecution"]);
   if (m != null && c(t, ["codeExecution"], m), r(i, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
   const g = r(i, ["googleMaps"]);
   g != null && c(t, ["googleMaps"], qE(g));
   const y = r(i, ["googleSearch"]);
   y != null && c(t, ["googleSearch"], VE(y));
   const h = r(i, ["urlContext"]);
   return h != null && c(t, ["urlContext"], h), t
}

function $E(i) {
   const t = {},
       l = r(i, ["functionDeclarations"]);
   if (l != null) {
       let S = l;
       Array.isArray(S) && (S = S.map(E => GE(E))), c(t, ["functionDeclarations"], S)
   }
   const a = r(i, ["retrieval"]);
   a != null && c(t, ["retrieval"], a);
   const u = r(i, ["googleSearchRetrieval"]);
   u != null && c(t, ["googleSearchRetrieval"], u);
   const f = r(i, ["computerUse"]);
   if (f != null && c(t, ["computerUse"], f), r(i, ["fileSearch"]) !== void 0) throw new Error("fileSearch parameter is not supported in Vertex AI.");
   const m = r(i, ["codeExecution"]);
   m != null && c(t, ["codeExecution"], m);
   const g = r(i, ["enterpriseWebSearch"]);
   g != null && c(t, ["enterpriseWebSearch"], g);
   const y = r(i, ["googleMaps"]);
   y != null && c(t, ["googleMaps"], y);
   const h = r(i, ["googleSearch"]);
   h != null && c(t, ["googleSearch"], h);
   const v = r(i, ["urlContext"]);
   return v != null && c(t, ["urlContext"], v), t
}

function WE(i) {
   const t = {},
       l = r(i, ["promptTokenCount"]);
   l != null && c(t, ["promptTokenCount"], l);
   const a = r(i, ["cachedContentTokenCount"]);
   a != null && c(t, ["cachedContentTokenCount"], a);
   const u = r(i, ["candidatesTokenCount"]);
   u != null && c(t, ["responseTokenCount"], u);
   const f = r(i, ["toolUsePromptTokenCount"]);
   f != null && c(t, ["toolUsePromptTokenCount"], f);
   const m = r(i, ["thoughtsTokenCount"]);
   m != null && c(t, ["thoughtsTokenCount"], m);
   const g = r(i, ["totalTokenCount"]);
   g != null && c(t, ["totalTokenCount"], g);
   const y = r(i, ["promptTokensDetails"]);
   if (y != null) {
       let C = y;
       Array.isArray(C) && (C = C.map(b => b)), c(t, ["promptTokensDetails"], C)
   }
   const h = r(i, ["cacheTokensDetails"]);
   if (h != null) {
       let C = h;
       Array.isArray(C) && (C = C.map(b => b)), c(t, ["cacheTokensDetails"], C)
   }
   const v = r(i, ["candidatesTokensDetails"]);
   if (v != null) {
       let C = v;
       Array.isArray(C) && (C = C.map(b => b)), c(t, ["responseTokensDetails"], C)
   }
   const S = r(i, ["toolUsePromptTokensDetails"]);
   if (S != null) {
       let C = S;
       Array.isArray(C) && (C = C.map(b => b)), c(t, ["toolUsePromptTokensDetails"], C)
   }
   const E = r(i, ["trafficType"]);
   return E != null && c(t, ["trafficType"], E), t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function jE(i) {
   const t = {},
       l = r(i, ["data"]);
   if (l != null && c(t, ["data"], l), r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function e_(i) {
   const t = {},
       l = r(i, ["content"]);
   l != null && c(t, ["content"], l);
   const a = r(i, ["citationMetadata"]);
   a != null && c(t, ["citationMetadata"], t_(a));
   const u = r(i, ["tokenCount"]);
   u != null && c(t, ["tokenCount"], u);
   const f = r(i, ["finishReason"]);
   f != null && c(t, ["finishReason"], f);
   const m = r(i, ["avgLogprobs"]);
   m != null && c(t, ["avgLogprobs"], m);
   const g = r(i, ["groundingMetadata"]);
   g != null && c(t, ["groundingMetadata"], g);
   const y = r(i, ["index"]);
   y != null && c(t, ["index"], y);
   const h = r(i, ["logprobsResult"]);
   h != null && c(t, ["logprobsResult"], h);
   const v = r(i, ["safetyRatings"]);
   if (v != null) {
       let E = v;
       Array.isArray(E) && (E = E.map(C => C)), c(t, ["safetyRatings"], E)
   }
   const S = r(i, ["urlContextMetadata"]);
   return S != null && c(t, ["urlContextMetadata"], S), t
}

function t_(i) {
   const t = {},
       l = r(i, ["citationSources"]);
   if (l != null) {
       let a = l;
       Array.isArray(a) && (a = a.map(u => u)), c(t, ["citations"], a)
   }
   return t
}

function n_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["contents"]);
   if (u != null) {
       let f = qt(u);
       Array.isArray(f) && (f = f.map(m => m)), c(l, ["contents"], f)
   }
   return l
}

function i_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["tokensInfo"]);
   if (a != null) {
       let u = a;
       Array.isArray(u) && (u = u.map(f => f)), c(t, ["tokensInfo"], u)
   }
   return t
}

function o_(i) {
   const t = {},
       l = r(i, ["values"]);
   l != null && c(t, ["values"], l);
   const a = r(i, ["statistics"]);
   return a != null && c(t, ["statistics"], l_(a)), t
}

function l_(i) {
   const t = {},
       l = r(i, ["truncated"]);
   l != null && c(t, ["truncated"], l);
   const a = r(i, ["token_count"]);
   return a != null && c(t, ["tokenCount"], a), t
}

function Ga(i) {
   const t = {},
       l = r(i, ["parts"]);
   if (l != null) {
       let u = l;
       Array.isArray(u) && (u = u.map(f => mC(f))), c(t, ["parts"], u)
   }
   const a = r(i, ["role"]);
   return a != null && c(t, ["role"], a), t
}

function a_(i) {
   const t = {},
       l = r(i, ["controlType"]);
   l != null && c(t, ["controlType"], l);
   const a = r(i, ["enableControlImageComputation"]);
   return a != null && c(t, ["computeControl"], a), t
}

function s_(i) {
   const t = {};
   if (r(i, ["systemInstruction"]) !== void 0) throw new Error("systemInstruction parameter is not supported in Gemini API.");
   if (r(i, ["tools"]) !== void 0) throw new Error("tools parameter is not supported in Gemini API.");
   if (r(i, ["generationConfig"]) !== void 0) throw new Error("generationConfig parameter is not supported in Gemini API.");
   return t
}

function r_(i, t) {
   const l = {},
       a = r(i, ["systemInstruction"]);
   t !== void 0 && a != null && c(t, ["systemInstruction"], ot(a));
   const u = r(i, ["tools"]);
   if (t !== void 0 && u != null) {
       let m = u;
       Array.isArray(m) && (m = m.map(g => ig(g))), c(t, ["tools"], m)
   }
   const f = r(i, ["generationConfig"]);
   return t !== void 0 && f != null && c(t, ["generationConfig"], j_(f)), l
}

function u_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["contents"]);
   if (u != null) {
       let m = qt(u);
       Array.isArray(m) && (m = m.map(g => Ga(g))), c(l, ["contents"], m)
   }
   const f = r(t, ["config"]);
   return f != null && s_(f), l
}

function c_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["contents"]);
   if (u != null) {
       let m = qt(u);
       Array.isArray(m) && (m = m.map(g => g)), c(l, ["contents"], m)
   }
   const f = r(t, ["config"]);
   return f != null && r_(f, l), l
}

function f_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["totalTokens"]);
   a != null && c(t, ["totalTokens"], a);
   const u = r(i, ["cachedContentTokenCount"]);
   return u != null && c(t, ["cachedContentTokenCount"], u), t
}

function d_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["totalTokens"]);
   return a != null && c(t, ["totalTokens"], a), t
}

function p_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   return a != null && c(l, ["_url", "name"], Te(i, a)), l
}

function m_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   return a != null && c(l, ["_url", "name"], Te(i, a)), l
}

function h_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   return l != null && c(t, ["sdkHttpResponse"], l), t
}

function g_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   return l != null && c(t, ["sdkHttpResponse"], l), t
}

function y_(i, t) {
   const l = {},
       a = r(i, ["outputGcsUri"]);
   t !== void 0 && a != null && c(t, ["parameters", "storageUri"], a);
   const u = r(i, ["negativePrompt"]);
   t !== void 0 && u != null && c(t, ["parameters", "negativePrompt"], u);
   const f = r(i, ["numberOfImages"]);
   t !== void 0 && f != null && c(t, ["parameters", "sampleCount"], f);
   const m = r(i, ["aspectRatio"]);
   t !== void 0 && m != null && c(t, ["parameters", "aspectRatio"], m);
   const g = r(i, ["guidanceScale"]);
   t !== void 0 && g != null && c(t, ["parameters", "guidanceScale"], g);
   const y = r(i, ["seed"]);
   t !== void 0 && y != null && c(t, ["parameters", "seed"], y);
   const h = r(i, ["safetyFilterLevel"]);
   t !== void 0 && h != null && c(t, ["parameters", "safetySetting"], h);
   const v = r(i, ["personGeneration"]);
   t !== void 0 && v != null && c(t, ["parameters", "personGeneration"], v);
   const S = r(i, ["includeSafetyAttributes"]);
   t !== void 0 && S != null && c(t, ["parameters", "includeSafetyAttributes"], S);
   const E = r(i, ["includeRaiReason"]);
   t !== void 0 && E != null && c(t, ["parameters", "includeRaiReason"], E);
   const C = r(i, ["language"]);
   t !== void 0 && C != null && c(t, ["parameters", "language"], C);
   const b = r(i, ["outputMimeType"]);
   t !== void 0 && b != null && c(t, ["parameters", "outputOptions", "mimeType"], b);
   const H = r(i, ["outputCompressionQuality"]);
   t !== void 0 && H != null && c(t, ["parameters", "outputOptions", "compressionQuality"], H);
   const U = r(i, ["addWatermark"]);
   t !== void 0 && U != null && c(t, ["parameters", "addWatermark"], U);
   const P = r(i, ["labels"]);
   t !== void 0 && P != null && c(t, ["labels"], P);
   const K = r(i, ["editMode"]);
   t !== void 0 && K != null && c(t, ["parameters", "editMode"], K);
   const B = r(i, ["baseSteps"]);
   return t !== void 0 && B != null && c(t, ["parameters", "editConfig", "baseSteps"], B), l
}

function v_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["prompt"]);
   u != null && c(l, ["instances[0]", "prompt"], u);
   const f = r(t, ["referenceImages"]);
   if (f != null) {
       let g = f;
       Array.isArray(g) && (g = g.map(y => SC(y))), c(l, ["instances[0]", "referenceImages"], g)
   }
   const m = r(t, ["config"]);
   return m != null && y_(m, l), l
}

function T_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["predictions"]);
   if (a != null) {
       let u = a;
       Array.isArray(u) && (u = u.map(f => Ha(f))), c(t, ["generatedImages"], u)
   }
   return t
}

function S_(i, t) {
   const l = {},
       a = r(i, ["taskType"]);
   t !== void 0 && a != null && c(t, ["requests[]", "taskType"], a);
   const u = r(i, ["title"]);
   t !== void 0 && u != null && c(t, ["requests[]", "title"], u);
   const f = r(i, ["outputDimensionality"]);
   if (t !== void 0 && f != null && c(t, ["requests[]", "outputDimensionality"], f), r(i, ["mimeType"]) !== void 0) throw new Error("mimeType parameter is not supported in Gemini API.");
   if (r(i, ["autoTruncate"]) !== void 0) throw new Error("autoTruncate parameter is not supported in Gemini API.");
   return l
}

function E_(i, t) {
   const l = {},
       a = r(i, ["taskType"]);
   t !== void 0 && a != null && c(t, ["instances[]", "task_type"], a);
   const u = r(i, ["title"]);
   t !== void 0 && u != null && c(t, ["instances[]", "title"], u);
   const f = r(i, ["outputDimensionality"]);
   t !== void 0 && f != null && c(t, ["parameters", "outputDimensionality"], f);
   const m = r(i, ["mimeType"]);
   t !== void 0 && m != null && c(t, ["instances[]", "mimeType"], m);
   const g = r(i, ["autoTruncate"]);
   return t !== void 0 && g != null && c(t, ["parameters", "autoTruncate"], g), l
}

function __(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["contents"]);
   if (u != null) {
       let g = Uu(i, u);
       Array.isArray(g) && (g = g.map(y => y)), c(l, ["requests[]", "content"], g)
   }
   const f = r(t, ["config"]);
   f != null && S_(f, l);
   const m = r(t, ["model"]);
   return m !== void 0 && c(l, ["requests[]", "model"], Te(i, m)), l
}

function C_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["contents"]);
   if (u != null) {
       let m = Uu(i, u);
       Array.isArray(m) && (m = m.map(g => g)), c(l, ["instances[]", "content"], m)
   }
   const f = r(t, ["config"]);
   return f != null && E_(f, l), l
}

function A_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["embeddings"]);
   if (a != null) {
       let f = a;
       Array.isArray(f) && (f = f.map(m => m)), c(t, ["embeddings"], f)
   }
   const u = r(i, ["metadata"]);
   return u != null && c(t, ["metadata"], u), t
}

function R_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["predictions[]", "embeddings"]);
   if (a != null) {
       let f = a;
       Array.isArray(f) && (f = f.map(m => o_(m))), c(t, ["embeddings"], f)
   }
   const u = r(i, ["metadata"]);
   return u != null && c(t, ["metadata"], u), t
}

function M_(i) {
   const t = {},
       l = r(i, ["endpoint"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["deployedModelId"]);
   return a != null && c(t, ["deployedModelId"], a), t
}

function N_(i) {
   const t = {};
   if (r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const l = r(i, ["fileUri"]);
   l != null && c(t, ["fileUri"], l);
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function x_(i) {
   const t = {},
       l = r(i, ["id"]);
   l != null && c(t, ["id"], l);
   const a = r(i, ["args"]);
   a != null && c(t, ["args"], a);
   const u = r(i, ["name"]);
   if (u != null && c(t, ["name"], u), r(i, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
   if (r(i, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
   return t
}

function I_(i) {
   const t = {},
       l = r(i, ["mode"]);
   l != null && c(t, ["mode"], l);
   const a = r(i, ["allowedFunctionNames"]);
   if (a != null && c(t, ["allowedFunctionNames"], a), r(i, ["streamFunctionCallArguments"]) !== void 0) throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");
   return t
}

function D_(i) {
   const t = {};
   if (r(i, ["behavior"]) !== void 0) throw new Error("behavior parameter is not supported in Vertex AI.");
   const l = r(i, ["description"]);
   l != null && c(t, ["description"], l);
   const a = r(i, ["name"]);
   a != null && c(t, ["name"], a);
   const u = r(i, ["parameters"]);
   u != null && c(t, ["parameters"], u);
   const f = r(i, ["parametersJsonSchema"]);
   f != null && c(t, ["parametersJsonSchema"], f);
   const m = r(i, ["response"]);
   m != null && c(t, ["response"], m);
   const g = r(i, ["responseJsonSchema"]);
   return g != null && c(t, ["responseJsonSchema"], g), t
}

function b_(i, t, l) {
   const a = {},
       u = r(t, ["systemInstruction"]);
   l !== void 0 && u != null && c(l, ["systemInstruction"], Ga(ot(u)));
   const f = r(t, ["temperature"]);
   f != null && c(a, ["temperature"], f);
   const m = r(t, ["topP"]);
   m != null && c(a, ["topP"], m);
   const g = r(t, ["topK"]);
   g != null && c(a, ["topK"], g);
   const y = r(t, ["candidateCount"]);
   y != null && c(a, ["candidateCount"], y);
   const h = r(t, ["maxOutputTokens"]);
   h != null && c(a, ["maxOutputTokens"], h);
   const v = r(t, ["stopSequences"]);
   v != null && c(a, ["stopSequences"], v);
   const S = r(t, ["responseLogprobs"]);
   S != null && c(a, ["responseLogprobs"], S);
   const E = r(t, ["logprobs"]);
   E != null && c(a, ["logprobs"], E);
   const C = r(t, ["presencePenalty"]);
   C != null && c(a, ["presencePenalty"], C);
   const b = r(t, ["frequencyPenalty"]);
   b != null && c(a, ["frequencyPenalty"], b);
   const H = r(t, ["seed"]);
   H != null && c(a, ["seed"], H);
   const U = r(t, ["responseMimeType"]);
   U != null && c(a, ["responseMimeType"], U);
   const P = r(t, ["responseSchema"]);
   P != null && c(a, ["responseSchema"], Lu(P));
   const K = r(t, ["responseJsonSchema"]);
   if (K != null && c(a, ["responseJsonSchema"], K), r(t, ["routingConfig"]) !== void 0) throw new Error("routingConfig parameter is not supported in Gemini API.");
   if (r(t, ["modelSelectionConfig"]) !== void 0) throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
   const B = r(t, ["safetySettings"]);
   if (l !== void 0 && B != null) {
       let Ee = B;
       Array.isArray(Ee) && (Ee = Ee.map(Be => EC(Be))), c(l, ["safetySettings"], Ee)
   }
   const X = r(t, ["tools"]);
   if (l !== void 0 && X != null) {
       let Ee = to(X);
       Array.isArray(Ee) && (Ee = Ee.map(Be => xC(eo(Be)))), c(l, ["tools"], Ee)
   }
   const ee = r(t, ["toolConfig"]);
   if (l !== void 0 && ee != null && c(l, ["toolConfig"], NC(ee)), r(t, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
   const te = r(t, ["cachedContent"]);
   l !== void 0 && te != null && c(l, ["cachedContent"], gn(i, te));
   const F = r(t, ["responseModalities"]);
   F != null && c(a, ["responseModalities"], F);
   const he = r(t, ["mediaResolution"]);
   he != null && c(a, ["mediaResolution"], he);
   const W = r(t, ["speechConfig"]);
   if (W != null && c(a, ["speechConfig"], Gu(W)), r(t, ["audioTimestamp"]) !== void 0) throw new Error("audioTimestamp parameter is not supported in Gemini API.");
   const de = r(t, ["thinkingConfig"]);
   de != null && c(a, ["thinkingConfig"], de);
   const Ce = r(t, ["imageConfig"]);
   Ce != null && c(a, ["imageConfig"], oC(Ce));
   const Ge = r(t, ["enableEnhancedCivicAnswers"]);
   return Ge != null && c(a, ["enableEnhancedCivicAnswers"], Ge), a
}

function w_(i, t, l) {
   const a = {},
       u = r(t, ["systemInstruction"]);
   l !== void 0 && u != null && c(l, ["systemInstruction"], ot(u));
   const f = r(t, ["temperature"]);
   f != null && c(a, ["temperature"], f);
   const m = r(t, ["topP"]);
   m != null && c(a, ["topP"], m);
   const g = r(t, ["topK"]);
   g != null && c(a, ["topK"], g);
   const y = r(t, ["candidateCount"]);
   y != null && c(a, ["candidateCount"], y);
   const h = r(t, ["maxOutputTokens"]);
   h != null && c(a, ["maxOutputTokens"], h);
   const v = r(t, ["stopSequences"]);
   v != null && c(a, ["stopSequences"], v);
   const S = r(t, ["responseLogprobs"]);
   S != null && c(a, ["responseLogprobs"], S);
   const E = r(t, ["logprobs"]);
   E != null && c(a, ["logprobs"], E);
   const C = r(t, ["presencePenalty"]);
   C != null && c(a, ["presencePenalty"], C);
   const b = r(t, ["frequencyPenalty"]);
   b != null && c(a, ["frequencyPenalty"], b);
   const H = r(t, ["seed"]);
   H != null && c(a, ["seed"], H);
   const U = r(t, ["responseMimeType"]);
   U != null && c(a, ["responseMimeType"], U);
   const P = r(t, ["responseSchema"]);
   P != null && c(a, ["responseSchema"], Lu(P));
   const K = r(t, ["responseJsonSchema"]);
   K != null && c(a, ["responseJsonSchema"], K);
   const B = r(t, ["routingConfig"]);
   B != null && c(a, ["routingConfig"], B);
   const X = r(t, ["modelSelectionConfig"]);
   X != null && c(a, ["modelConfig"], X);
   const ee = r(t, ["safetySettings"]);
   if (l !== void 0 && ee != null) {
       let G = ee;
       Array.isArray(G) && (G = G.map(O => O)), c(l, ["safetySettings"], G)
   }
   const te = r(t, ["tools"]);
   if (l !== void 0 && te != null) {
       let G = to(te);
       Array.isArray(G) && (G = G.map(O => ig(eo(O)))), c(l, ["tools"], G)
   }
   const F = r(t, ["toolConfig"]);
   l !== void 0 && F != null && c(l, ["toolConfig"], F);
   const he = r(t, ["labels"]);
   l !== void 0 && he != null && c(l, ["labels"], he);
   const W = r(t, ["cachedContent"]);
   l !== void 0 && W != null && c(l, ["cachedContent"], gn(i, W));
   const de = r(t, ["responseModalities"]);
   de != null && c(a, ["responseModalities"], de);
   const Ce = r(t, ["mediaResolution"]);
   Ce != null && c(a, ["mediaResolution"], Ce);
   const Ge = r(t, ["speechConfig"]);
   Ge != null && c(a, ["speechConfig"], ng(Gu(Ge)));
   const Ee = r(t, ["audioTimestamp"]);
   Ee != null && c(a, ["audioTimestamp"], Ee);
   const Be = r(t, ["thinkingConfig"]);
   Be != null && c(a, ["thinkingConfig"], Be);
   const ut = r(t, ["imageConfig"]);
   if (ut != null && c(a, ["imageConfig"], lC(ut)), r(t, ["enableEnhancedCivicAnswers"]) !== void 0) throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
   return a
}

function mh(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["contents"]);
   if (u != null) {
       let m = qt(u);
       Array.isArray(m) && (m = m.map(g => Ga(g))), c(l, ["contents"], m)
   }
   const f = r(t, ["config"]);
   return f != null && c(l, ["generationConfig"], b_(i, f, l)), l
}

function hh(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["contents"]);
   if (u != null) {
       let m = qt(u);
       Array.isArray(m) && (m = m.map(g => g)), c(l, ["contents"], m)
   }
   const f = r(t, ["config"]);
   return f != null && c(l, ["generationConfig"], w_(i, f, l)), l
}

function gh(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["candidates"]);
   if (a != null) {
       let y = a;
       Array.isArray(y) && (y = y.map(h => e_(h))), c(t, ["candidates"], y)
   }
   const u = r(i, ["modelVersion"]);
   u != null && c(t, ["modelVersion"], u);
   const f = r(i, ["promptFeedback"]);
   f != null && c(t, ["promptFeedback"], f);
   const m = r(i, ["responseId"]);
   m != null && c(t, ["responseId"], m);
   const g = r(i, ["usageMetadata"]);
   return g != null && c(t, ["usageMetadata"], g), t
}

function yh(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["candidates"]);
   if (a != null) {
       let h = a;
       Array.isArray(h) && (h = h.map(v => v)), c(t, ["candidates"], h)
   }
   const u = r(i, ["createTime"]);
   u != null && c(t, ["createTime"], u);
   const f = r(i, ["modelVersion"]);
   f != null && c(t, ["modelVersion"], f);
   const m = r(i, ["promptFeedback"]);
   m != null && c(t, ["promptFeedback"], m);
   const g = r(i, ["responseId"]);
   g != null && c(t, ["responseId"], g);
   const y = r(i, ["usageMetadata"]);
   return y != null && c(t, ["usageMetadata"], y), t
}

function U_(i, t) {
   const l = {};
   if (r(i, ["outputGcsUri"]) !== void 0) throw new Error("outputGcsUri parameter is not supported in Gemini API.");
   if (r(i, ["negativePrompt"]) !== void 0) throw new Error("negativePrompt parameter is not supported in Gemini API.");
   const a = r(i, ["numberOfImages"]);
   t !== void 0 && a != null && c(t, ["parameters", "sampleCount"], a);
   const u = r(i, ["aspectRatio"]);
   t !== void 0 && u != null && c(t, ["parameters", "aspectRatio"], u);
   const f = r(i, ["guidanceScale"]);
   if (t !== void 0 && f != null && c(t, ["parameters", "guidanceScale"], f), r(i, ["seed"]) !== void 0) throw new Error("seed parameter is not supported in Gemini API.");
   const m = r(i, ["safetyFilterLevel"]);
   t !== void 0 && m != null && c(t, ["parameters", "safetySetting"], m);
   const g = r(i, ["personGeneration"]);
   t !== void 0 && g != null && c(t, ["parameters", "personGeneration"], g);
   const y = r(i, ["includeSafetyAttributes"]);
   t !== void 0 && y != null && c(t, ["parameters", "includeSafetyAttributes"], y);
   const h = r(i, ["includeRaiReason"]);
   t !== void 0 && h != null && c(t, ["parameters", "includeRaiReason"], h);
   const v = r(i, ["language"]);
   t !== void 0 && v != null && c(t, ["parameters", "language"], v);
   const S = r(i, ["outputMimeType"]);
   t !== void 0 && S != null && c(t, ["parameters", "outputOptions", "mimeType"], S);
   const E = r(i, ["outputCompressionQuality"]);
   if (t !== void 0 && E != null && c(t, ["parameters", "outputOptions", "compressionQuality"], E), r(i, ["addWatermark"]) !== void 0) throw new Error("addWatermark parameter is not supported in Gemini API.");
   if (r(i, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
   const C = r(i, ["imageSize"]);
   if (t !== void 0 && C != null && c(t, ["parameters", "sampleImageSize"], C), r(i, ["enhancePrompt"]) !== void 0) throw new Error("enhancePrompt parameter is not supported in Gemini API.");
   return l
}

function L_(i, t) {
   const l = {},
       a = r(i, ["outputGcsUri"]);
   t !== void 0 && a != null && c(t, ["parameters", "storageUri"], a);
   const u = r(i, ["negativePrompt"]);
   t !== void 0 && u != null && c(t, ["parameters", "negativePrompt"], u);
   const f = r(i, ["numberOfImages"]);
   t !== void 0 && f != null && c(t, ["parameters", "sampleCount"], f);
   const m = r(i, ["aspectRatio"]);
   t !== void 0 && m != null && c(t, ["parameters", "aspectRatio"], m);
   const g = r(i, ["guidanceScale"]);
   t !== void 0 && g != null && c(t, ["parameters", "guidanceScale"], g);
   const y = r(i, ["seed"]);
   t !== void 0 && y != null && c(t, ["parameters", "seed"], y);
   const h = r(i, ["safetyFilterLevel"]);
   t !== void 0 && h != null && c(t, ["parameters", "safetySetting"], h);
   const v = r(i, ["personGeneration"]);
   t !== void 0 && v != null && c(t, ["parameters", "personGeneration"], v);
   const S = r(i, ["includeSafetyAttributes"]);
   t !== void 0 && S != null && c(t, ["parameters", "includeSafetyAttributes"], S);
   const E = r(i, ["includeRaiReason"]);
   t !== void 0 && E != null && c(t, ["parameters", "includeRaiReason"], E);
   const C = r(i, ["language"]);
   t !== void 0 && C != null && c(t, ["parameters", "language"], C);
   const b = r(i, ["outputMimeType"]);
   t !== void 0 && b != null && c(t, ["parameters", "outputOptions", "mimeType"], b);
   const H = r(i, ["outputCompressionQuality"]);
   t !== void 0 && H != null && c(t, ["parameters", "outputOptions", "compressionQuality"], H);
   const U = r(i, ["addWatermark"]);
   t !== void 0 && U != null && c(t, ["parameters", "addWatermark"], U);
   const P = r(i, ["labels"]);
   t !== void 0 && P != null && c(t, ["labels"], P);
   const K = r(i, ["imageSize"]);
   t !== void 0 && K != null && c(t, ["parameters", "sampleImageSize"], K);
   const B = r(i, ["enhancePrompt"]);
   return t !== void 0 && B != null && c(t, ["parameters", "enhancePrompt"], B), l
}

function G_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["prompt"]);
   u != null && c(l, ["instances[0]", "prompt"], u);
   const f = r(t, ["config"]);
   return f != null && U_(f, l), l
}

function H_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["prompt"]);
   u != null && c(l, ["instances[0]", "prompt"], u);
   const f = r(t, ["config"]);
   return f != null && L_(f, l), l
}

function q_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["predictions"]);
   if (a != null) {
       let f = a;
       Array.isArray(f) && (f = f.map(m => Q_(m))), c(t, ["generatedImages"], f)
   }
   const u = r(i, ["positivePromptSafetyAttributes"]);
   return u != null && c(t, ["positivePromptSafetyAttributes"], eg(u)), t
}

function V_(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["predictions"]);
   if (a != null) {
       let f = a;
       Array.isArray(f) && (f = f.map(m => Ha(m))), c(t, ["generatedImages"], f)
   }
   const u = r(i, ["positivePromptSafetyAttributes"]);
   return u != null && c(t, ["positivePromptSafetyAttributes"], tg(u)), t
}

function z_(i, t) {
   const l = {},
       a = r(i, ["numberOfVideos"]);
   if (t !== void 0 && a != null && c(t, ["parameters", "sampleCount"], a), r(i, ["outputGcsUri"]) !== void 0) throw new Error("outputGcsUri parameter is not supported in Gemini API.");
   if (r(i, ["fps"]) !== void 0) throw new Error("fps parameter is not supported in Gemini API.");
   const u = r(i, ["durationSeconds"]);
   if (t !== void 0 && u != null && c(t, ["parameters", "durationSeconds"], u), r(i, ["seed"]) !== void 0) throw new Error("seed parameter is not supported in Gemini API.");
   const f = r(i, ["aspectRatio"]);
   t !== void 0 && f != null && c(t, ["parameters", "aspectRatio"], f);
   const m = r(i, ["resolution"]);
   t !== void 0 && m != null && c(t, ["parameters", "resolution"], m);
   const g = r(i, ["personGeneration"]);
   if (t !== void 0 && g != null && c(t, ["parameters", "personGeneration"], g), r(i, ["pubsubTopic"]) !== void 0) throw new Error("pubsubTopic parameter is not supported in Gemini API.");
   const y = r(i, ["negativePrompt"]);
   t !== void 0 && y != null && c(t, ["parameters", "negativePrompt"], y);
   const h = r(i, ["enhancePrompt"]);
   if (t !== void 0 && h != null && c(t, ["parameters", "enhancePrompt"], h), r(i, ["generateAudio"]) !== void 0) throw new Error("generateAudio parameter is not supported in Gemini API.");
   const v = r(i, ["lastFrame"]);
   t !== void 0 && v != null && c(t, ["instances[0]", "lastFrame"], qa(v));
   const S = r(i, ["referenceImages"]);
   if (t !== void 0 && S != null) {
       let E = S;
       Array.isArray(E) && (E = E.map(C => PC(C))), c(t, ["instances[0]", "referenceImages"], E)
   }
   if (r(i, ["mask"]) !== void 0) throw new Error("mask parameter is not supported in Gemini API.");
   if (r(i, ["compressionQuality"]) !== void 0) throw new Error("compressionQuality parameter is not supported in Gemini API.");
   return l
}

function k_(i, t) {
   const l = {},
       a = r(i, ["numberOfVideos"]);
   t !== void 0 && a != null && c(t, ["parameters", "sampleCount"], a);
   const u = r(i, ["outputGcsUri"]);
   t !== void 0 && u != null && c(t, ["parameters", "storageUri"], u);
   const f = r(i, ["fps"]);
   t !== void 0 && f != null && c(t, ["parameters", "fps"], f);
   const m = r(i, ["durationSeconds"]);
   t !== void 0 && m != null && c(t, ["parameters", "durationSeconds"], m);
   const g = r(i, ["seed"]);
   t !== void 0 && g != null && c(t, ["parameters", "seed"], g);
   const y = r(i, ["aspectRatio"]);
   t !== void 0 && y != null && c(t, ["parameters", "aspectRatio"], y);
   const h = r(i, ["resolution"]);
   t !== void 0 && h != null && c(t, ["parameters", "resolution"], h);
   const v = r(i, ["personGeneration"]);
   t !== void 0 && v != null && c(t, ["parameters", "personGeneration"], v);
   const S = r(i, ["pubsubTopic"]);
   t !== void 0 && S != null && c(t, ["parameters", "pubsubTopic"], S);
   const E = r(i, ["negativePrompt"]);
   t !== void 0 && E != null && c(t, ["parameters", "negativePrompt"], E);
   const C = r(i, ["enhancePrompt"]);
   t !== void 0 && C != null && c(t, ["parameters", "enhancePrompt"], C);
   const b = r(i, ["generateAudio"]);
   t !== void 0 && b != null && c(t, ["parameters", "generateAudio"], b);
   const H = r(i, ["lastFrame"]);
   t !== void 0 && H != null && c(t, ["instances[0]", "lastFrame"], Ft(H));
   const U = r(i, ["referenceImages"]);
   if (t !== void 0 && U != null) {
       let B = U;
       Array.isArray(B) && (B = B.map(X => BC(X))), c(t, ["instances[0]", "referenceImages"], B)
   }
   const P = r(i, ["mask"]);
   t !== void 0 && P != null && c(t, ["instances[0]", "mask"], kC(P));
   const K = r(i, ["compressionQuality"]);
   return t !== void 0 && K != null && c(t, ["parameters", "compressionQuality"], K), l
}

function P_(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["metadata"]);
   a != null && c(t, ["metadata"], a);
   const u = r(i, ["done"]);
   u != null && c(t, ["done"], u);
   const f = r(i, ["error"]);
   f != null && c(t, ["error"], f);
   const m = r(i, ["response", "generateVideoResponse"]);
   return m != null && c(t, ["response"], Y_(m)), t
}

function B_(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["metadata"]);
   a != null && c(t, ["metadata"], a);
   const u = r(i, ["done"]);
   u != null && c(t, ["done"], u);
   const f = r(i, ["error"]);
   f != null && c(t, ["error"], f);
   const m = r(i, ["response"]);
   return m != null && c(t, ["response"], J_(m)), t
}

function O_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["prompt"]);
   u != null && c(l, ["instances[0]", "prompt"], u);
   const f = r(t, ["image"]);
   f != null && c(l, ["instances[0]", "image"], qa(f));
   const m = r(t, ["video"]);
   m != null && c(l, ["instances[0]", "video"], og(m));
   const g = r(t, ["source"]);
   g != null && K_(g, l);
   const y = r(t, ["config"]);
   return y != null && z_(y, l), l
}

function F_(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["prompt"]);
   u != null && c(l, ["instances[0]", "prompt"], u);
   const f = r(t, ["image"]);
   f != null && c(l, ["instances[0]", "image"], Ft(f));
   const m = r(t, ["video"]);
   m != null && c(l, ["instances[0]", "video"], lg(m));
   const g = r(t, ["source"]);
   g != null && X_(g, l);
   const y = r(t, ["config"]);
   return y != null && k_(y, l), l
}

function Y_(i) {
   const t = {},
       l = r(i, ["generatedSamples"]);
   if (l != null) {
       let f = l;
       Array.isArray(f) && (f = f.map(m => $_(m))), c(t, ["generatedVideos"], f)
   }
   const a = r(i, ["raiMediaFilteredCount"]);
   a != null && c(t, ["raiMediaFilteredCount"], a);
   const u = r(i, ["raiMediaFilteredReasons"]);
   return u != null && c(t, ["raiMediaFilteredReasons"], u), t
}

function J_(i) {
   const t = {},
       l = r(i, ["videos"]);
   if (l != null) {
       let f = l;
       Array.isArray(f) && (f = f.map(m => W_(m))), c(t, ["generatedVideos"], f)
   }
   const a = r(i, ["raiMediaFilteredCount"]);
   a != null && c(t, ["raiMediaFilteredCount"], a);
   const u = r(i, ["raiMediaFilteredReasons"]);
   return u != null && c(t, ["raiMediaFilteredReasons"], u), t
}

function K_(i, t) {
   const l = {},
       a = r(i, ["prompt"]);
   t !== void 0 && a != null && c(t, ["instances[0]", "prompt"], a);
   const u = r(i, ["image"]);
   t !== void 0 && u != null && c(t, ["instances[0]", "image"], qa(u));
   const f = r(i, ["video"]);
   return t !== void 0 && f != null && c(t, ["instances[0]", "video"], og(f)), l
}

function X_(i, t) {
   const l = {},
       a = r(i, ["prompt"]);
   t !== void 0 && a != null && c(t, ["instances[0]", "prompt"], a);
   const u = r(i, ["image"]);
   t !== void 0 && u != null && c(t, ["instances[0]", "image"], Ft(u));
   const f = r(i, ["video"]);
   return t !== void 0 && f != null && c(t, ["instances[0]", "video"], lg(f)), l
}

function Q_(i) {
   const t = {},
       l = r(i, ["_self"]);
   l != null && c(t, ["image"], aC(l));
   const a = r(i, ["raiFilteredReason"]);
   a != null && c(t, ["raiFilteredReason"], a);
   const u = r(i, ["_self"]);
   return u != null && c(t, ["safetyAttributes"], eg(u)), t
}

function Ha(i) {
   const t = {},
       l = r(i, ["_self"]);
   l != null && c(t, ["image"], jh(l));
   const a = r(i, ["raiFilteredReason"]);
   a != null && c(t, ["raiFilteredReason"], a);
   const u = r(i, ["_self"]);
   u != null && c(t, ["safetyAttributes"], tg(u));
   const f = r(i, ["prompt"]);
   return f != null && c(t, ["enhancedPrompt"], f), t
}

function Z_(i) {
   const t = {},
       l = r(i, ["_self"]);
   l != null && c(t, ["mask"], jh(l));
   const a = r(i, ["labels"]);
   if (a != null) {
       let u = a;
       Array.isArray(u) && (u = u.map(f => f)), c(t, ["labels"], u)
   }
   return t
}

function $_(i) {
   const t = {},
       l = r(i, ["video"]);
   return l != null && c(t, ["video"], VC(l)), t
}

function W_(i) {
   const t = {},
       l = r(i, ["_self"]);
   return l != null && c(t, ["video"], zC(l)), t
}

function j_(i) {
   const t = {},
       l = r(i, ["modelSelectionConfig"]);
   l != null && c(t, ["modelConfig"], l);
   const a = r(i, ["responseJsonSchema"]);
   a != null && c(t, ["responseJsonSchema"], a);
   const u = r(i, ["audioTimestamp"]);
   u != null && c(t, ["audioTimestamp"], u);
   const f = r(i, ["candidateCount"]);
   f != null && c(t, ["candidateCount"], f);
   const m = r(i, ["enableAffectiveDialog"]);
   m != null && c(t, ["enableAffectiveDialog"], m);
   const g = r(i, ["frequencyPenalty"]);
   g != null && c(t, ["frequencyPenalty"], g);
   const y = r(i, ["logprobs"]);
   y != null && c(t, ["logprobs"], y);
   const h = r(i, ["maxOutputTokens"]);
   h != null && c(t, ["maxOutputTokens"], h);
   const v = r(i, ["mediaResolution"]);
   v != null && c(t, ["mediaResolution"], v);
   const S = r(i, ["presencePenalty"]);
   S != null && c(t, ["presencePenalty"], S);
   const E = r(i, ["responseLogprobs"]);
   E != null && c(t, ["responseLogprobs"], E);
   const C = r(i, ["responseMimeType"]);
   C != null && c(t, ["responseMimeType"], C);
   const b = r(i, ["responseModalities"]);
   b != null && c(t, ["responseModalities"], b);
   const H = r(i, ["responseSchema"]);
   H != null && c(t, ["responseSchema"], H);
   const U = r(i, ["routingConfig"]);
   U != null && c(t, ["routingConfig"], U);
   const P = r(i, ["seed"]);
   P != null && c(t, ["seed"], P);
   const K = r(i, ["speechConfig"]);
   K != null && c(t, ["speechConfig"], ng(K));
   const B = r(i, ["stopSequences"]);
   B != null && c(t, ["stopSequences"], B);
   const X = r(i, ["temperature"]);
   X != null && c(t, ["temperature"], X);
   const ee = r(i, ["thinkingConfig"]);
   ee != null && c(t, ["thinkingConfig"], ee);
   const te = r(i, ["topK"]);
   te != null && c(t, ["topK"], te);
   const F = r(i, ["topP"]);
   if (F != null && c(t, ["topP"], F), r(i, ["enableEnhancedCivicAnswers"]) !== void 0) throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
   return t
}

function eC(i, t) {
   const l = {},
       a = r(t, ["model"]);
   return a != null && c(l, ["_url", "name"], Te(i, a)), l
}

function tC(i, t) {
   const l = {},
       a = r(t, ["model"]);
   return a != null && c(l, ["_url", "name"], Te(i, a)), l
}

function nC(i) {
   const t = {};
   if (r(i, ["authConfig"]) !== void 0) throw new Error("authConfig parameter is not supported in Gemini API.");
   const l = r(i, ["enableWidget"]);
   return l != null && c(t, ["enableWidget"], l), t
}

function iC(i) {
   const t = {};
   if (r(i, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
   if (r(i, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
   const l = r(i, ["timeRangeFilter"]);
   return l != null && c(t, ["timeRangeFilter"], l), t
}

function oC(i) {
   const t = {},
       l = r(i, ["aspectRatio"]);
   l != null && c(t, ["aspectRatio"], l);
   const a = r(i, ["imageSize"]);
   if (a != null && c(t, ["imageSize"], a), r(i, ["outputMimeType"]) !== void 0) throw new Error("outputMimeType parameter is not supported in Gemini API.");
   if (r(i, ["outputCompressionQuality"]) !== void 0) throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");
   return t
}

function lC(i) {
   const t = {},
       l = r(i, ["aspectRatio"]);
   l != null && c(t, ["aspectRatio"], l);
   const a = r(i, ["imageSize"]);
   a != null && c(t, ["imageSize"], a);
   const u = r(i, ["outputMimeType"]);
   u != null && c(t, ["imageOutputOptions", "mimeType"], u);
   const f = r(i, ["outputCompressionQuality"]);
   return f != null && c(t, ["imageOutputOptions", "compressionQuality"], f), t
}

function aC(i) {
   const t = {},
       l = r(i, ["bytesBase64Encoded"]);
   l != null && c(t, ["imageBytes"], On(l));
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function jh(i) {
   const t = {},
       l = r(i, ["gcsUri"]);
   l != null && c(t, ["gcsUri"], l);
   const a = r(i, ["bytesBase64Encoded"]);
   a != null && c(t, ["imageBytes"], On(a));
   const u = r(i, ["mimeType"]);
   return u != null && c(t, ["mimeType"], u), t
}

function qa(i) {
   const t = {};
   if (r(i, ["gcsUri"]) !== void 0) throw new Error("gcsUri parameter is not supported in Gemini API.");
   const l = r(i, ["imageBytes"]);
   l != null && c(t, ["bytesBase64Encoded"], On(l));
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function Ft(i) {
   const t = {},
       l = r(i, ["gcsUri"]);
   l != null && c(t, ["gcsUri"], l);
   const a = r(i, ["imageBytes"]);
   a != null && c(t, ["bytesBase64Encoded"], On(a));
   const u = r(i, ["mimeType"]);
   return u != null && c(t, ["mimeType"], u), t
}

function sC(i, t, l) {
   const a = {},
       u = r(t, ["pageSize"]);
   l !== void 0 && u != null && c(l, ["_query", "pageSize"], u);
   const f = r(t, ["pageToken"]);
   l !== void 0 && f != null && c(l, ["_query", "pageToken"], f);
   const m = r(t, ["filter"]);
   l !== void 0 && m != null && c(l, ["_query", "filter"], m);
   const g = r(t, ["queryBase"]);
   return l !== void 0 && g != null && c(l, ["_url", "models_url"], Yh(i, g)), a
}

function rC(i, t, l) {
   const a = {},
       u = r(t, ["pageSize"]);
   l !== void 0 && u != null && c(l, ["_query", "pageSize"], u);
   const f = r(t, ["pageToken"]);
   l !== void 0 && f != null && c(l, ["_query", "pageToken"], f);
   const m = r(t, ["filter"]);
   l !== void 0 && m != null && c(l, ["_query", "filter"], m);
   const g = r(t, ["queryBase"]);
   return l !== void 0 && g != null && c(l, ["_url", "models_url"], Yh(i, g)), a
}

function uC(i, t) {
   const l = {},
       a = r(t, ["config"]);
   return a != null && sC(i, a, l), l
}

function cC(i, t) {
   const l = {},
       a = r(t, ["config"]);
   return a != null && rC(i, a, l), l
}

function fC(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["nextPageToken"]);
   a != null && c(t, ["nextPageToken"], a);
   const u = r(i, ["_self"]);
   if (u != null) {
       let f = Jh(u);
       Array.isArray(f) && (f = f.map(m => Su(m))), c(t, ["models"], f)
   }
   return t
}

function dC(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["nextPageToken"]);
   a != null && c(t, ["nextPageToken"], a);
   const u = r(i, ["_self"]);
   if (u != null) {
       let f = Jh(u);
       Array.isArray(f) && (f = f.map(m => Eu(m))), c(t, ["models"], f)
   }
   return t
}

function pC(i) {
   const t = {},
       l = r(i, ["maskMode"]);
   l != null && c(t, ["maskMode"], l);
   const a = r(i, ["segmentationClasses"]);
   a != null && c(t, ["maskClasses"], a);
   const u = r(i, ["maskDilation"]);
   return u != null && c(t, ["dilation"], u), t
}

function Su(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["displayName"]);
   a != null && c(t, ["displayName"], a);
   const u = r(i, ["description"]);
   u != null && c(t, ["description"], u);
   const f = r(i, ["version"]);
   f != null && c(t, ["version"], f);
   const m = r(i, ["_self"]);
   m != null && c(t, ["tunedModelInfo"], IC(m));
   const g = r(i, ["inputTokenLimit"]);
   g != null && c(t, ["inputTokenLimit"], g);
   const y = r(i, ["outputTokenLimit"]);
   y != null && c(t, ["outputTokenLimit"], y);
   const h = r(i, ["supportedGenerationMethods"]);
   h != null && c(t, ["supportedActions"], h);
   const v = r(i, ["temperature"]);
   v != null && c(t, ["temperature"], v);
   const S = r(i, ["maxTemperature"]);
   S != null && c(t, ["maxTemperature"], S);
   const E = r(i, ["topP"]);
   E != null && c(t, ["topP"], E);
   const C = r(i, ["topK"]);
   C != null && c(t, ["topK"], C);
   const b = r(i, ["thinking"]);
   return b != null && c(t, ["thinking"], b), t
}

function Eu(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["displayName"]);
   a != null && c(t, ["displayName"], a);
   const u = r(i, ["description"]);
   u != null && c(t, ["description"], u);
   const f = r(i, ["versionId"]);
   f != null && c(t, ["version"], f);
   const m = r(i, ["deployedModels"]);
   if (m != null) {
       let S = m;
       Array.isArray(S) && (S = S.map(E => M_(E))), c(t, ["endpoints"], S)
   }
   const g = r(i, ["labels"]);
   g != null && c(t, ["labels"], g);
   const y = r(i, ["_self"]);
   y != null && c(t, ["tunedModelInfo"], DC(y));
   const h = r(i, ["defaultCheckpointId"]);
   h != null && c(t, ["defaultCheckpointId"], h);
   const v = r(i, ["checkpoints"]);
   if (v != null) {
       let S = v;
       Array.isArray(S) && (S = S.map(E => E)), c(t, ["checkpoints"], S)
   }
   return t
}

function mC(i) {
   const t = {},
       l = r(i, ["mediaResolution"]);
   l != null && c(t, ["mediaResolution"], l);
   const a = r(i, ["codeExecutionResult"]);
   a != null && c(t, ["codeExecutionResult"], a);
   const u = r(i, ["executableCode"]);
   u != null && c(t, ["executableCode"], u);
   const f = r(i, ["fileData"]);
   f != null && c(t, ["fileData"], N_(f));
   const m = r(i, ["functionCall"]);
   m != null && c(t, ["functionCall"], x_(m));
   const g = r(i, ["functionResponse"]);
   g != null && c(t, ["functionResponse"], g);
   const y = r(i, ["inlineData"]);
   y != null && c(t, ["inlineData"], jE(y));
   const h = r(i, ["text"]);
   h != null && c(t, ["text"], h);
   const v = r(i, ["thought"]);
   v != null && c(t, ["thought"], v);
   const S = r(i, ["thoughtSignature"]);
   S != null && c(t, ["thoughtSignature"], S);
   const E = r(i, ["videoMetadata"]);
   return E != null && c(t, ["videoMetadata"], E), t
}

function hC(i) {
   const t = {},
       l = r(i, ["productImage"]);
   return l != null && c(t, ["image"], Ft(l)), t
}

function gC(i, t) {
   const l = {},
       a = r(i, ["numberOfImages"]);
   t !== void 0 && a != null && c(t, ["parameters", "sampleCount"], a);
   const u = r(i, ["baseSteps"]);
   t !== void 0 && u != null && c(t, ["parameters", "baseSteps"], u);
   const f = r(i, ["outputGcsUri"]);
   t !== void 0 && f != null && c(t, ["parameters", "storageUri"], f);
   const m = r(i, ["seed"]);
   t !== void 0 && m != null && c(t, ["parameters", "seed"], m);
   const g = r(i, ["safetyFilterLevel"]);
   t !== void 0 && g != null && c(t, ["parameters", "safetySetting"], g);
   const y = r(i, ["personGeneration"]);
   t !== void 0 && y != null && c(t, ["parameters", "personGeneration"], y);
   const h = r(i, ["addWatermark"]);
   t !== void 0 && h != null && c(t, ["parameters", "addWatermark"], h);
   const v = r(i, ["outputMimeType"]);
   t !== void 0 && v != null && c(t, ["parameters", "outputOptions", "mimeType"], v);
   const S = r(i, ["outputCompressionQuality"]);
   t !== void 0 && S != null && c(t, ["parameters", "outputOptions", "compressionQuality"], S);
   const E = r(i, ["enhancePrompt"]);
   t !== void 0 && E != null && c(t, ["parameters", "enhancePrompt"], E);
   const C = r(i, ["labels"]);
   return t !== void 0 && C != null && c(t, ["labels"], C), l
}

function yC(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["source"]);
   u != null && TC(u, l);
   const f = r(t, ["config"]);
   return f != null && gC(f, l), l
}

function vC(i) {
   const t = {},
       l = r(i, ["predictions"]);
   if (l != null) {
       let a = l;
       Array.isArray(a) && (a = a.map(u => Ha(u))), c(t, ["generatedImages"], a)
   }
   return t
}

function TC(i, t) {
   const l = {},
       a = r(i, ["prompt"]);
   t !== void 0 && a != null && c(t, ["instances[0]", "prompt"], a);
   const u = r(i, ["personImage"]);
   t !== void 0 && u != null && c(t, ["instances[0]", "personImage", "image"], Ft(u));
   const f = r(i, ["productImages"]);
   if (t !== void 0 && f != null) {
       let m = f;
       Array.isArray(m) && (m = m.map(g => hC(g))), c(t, ["instances[0]", "productImages"], m)
   }
   return l
}

function SC(i) {
   const t = {},
       l = r(i, ["referenceImage"]);
   l != null && c(t, ["referenceImage"], Ft(l));
   const a = r(i, ["referenceId"]);
   a != null && c(t, ["referenceId"], a);
   const u = r(i, ["referenceType"]);
   u != null && c(t, ["referenceType"], u);
   const f = r(i, ["maskImageConfig"]);
   f != null && c(t, ["maskImageConfig"], pC(f));
   const m = r(i, ["controlImageConfig"]);
   m != null && c(t, ["controlImageConfig"], a_(m));
   const g = r(i, ["styleImageConfig"]);
   g != null && c(t, ["styleImageConfig"], g);
   const y = r(i, ["subjectImageConfig"]);
   return y != null && c(t, ["subjectImageConfig"], y), t
}

function eg(i) {
   const t = {},
       l = r(i, ["safetyAttributes", "categories"]);
   l != null && c(t, ["categories"], l);
   const a = r(i, ["safetyAttributes", "scores"]);
   a != null && c(t, ["scores"], a);
   const u = r(i, ["contentType"]);
   return u != null && c(t, ["contentType"], u), t
}

function tg(i) {
   const t = {},
       l = r(i, ["safetyAttributes", "categories"]);
   l != null && c(t, ["categories"], l);
   const a = r(i, ["safetyAttributes", "scores"]);
   a != null && c(t, ["scores"], a);
   const u = r(i, ["contentType"]);
   return u != null && c(t, ["contentType"], u), t
}

function EC(i) {
   const t = {},
       l = r(i, ["category"]);
   if (l != null && c(t, ["category"], l), r(i, ["method"]) !== void 0) throw new Error("method parameter is not supported in Gemini API.");
   const a = r(i, ["threshold"]);
   return a != null && c(t, ["threshold"], a), t
}

function _C(i) {
   const t = {},
       l = r(i, ["image"]);
   return l != null && c(t, ["image"], Ft(l)), t
}

function CC(i, t) {
   const l = {},
       a = r(i, ["mode"]);
   t !== void 0 && a != null && c(t, ["parameters", "mode"], a);
   const u = r(i, ["maxPredictions"]);
   t !== void 0 && u != null && c(t, ["parameters", "maxPredictions"], u);
   const f = r(i, ["confidenceThreshold"]);
   t !== void 0 && f != null && c(t, ["parameters", "confidenceThreshold"], f);
   const m = r(i, ["maskDilation"]);
   t !== void 0 && m != null && c(t, ["parameters", "maskDilation"], m);
   const g = r(i, ["binaryColorThreshold"]);
   t !== void 0 && g != null && c(t, ["parameters", "binaryColorThreshold"], g);
   const y = r(i, ["labels"]);
   return t !== void 0 && y != null && c(t, ["labels"], y), l
}

function AC(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["source"]);
   u != null && MC(u, l);
   const f = r(t, ["config"]);
   return f != null && CC(f, l), l
}

function RC(i) {
   const t = {},
       l = r(i, ["predictions"]);
   if (l != null) {
       let a = l;
       Array.isArray(a) && (a = a.map(u => Z_(u))), c(t, ["generatedMasks"], a)
   }
   return t
}

function MC(i, t) {
   const l = {},
       a = r(i, ["prompt"]);
   t !== void 0 && a != null && c(t, ["instances[0]", "prompt"], a);
   const u = r(i, ["image"]);
   t !== void 0 && u != null && c(t, ["instances[0]", "image"], Ft(u));
   const f = r(i, ["scribbleImage"]);
   return t !== void 0 && f != null && c(t, ["instances[0]", "scribble"], _C(f)), l
}

function ng(i) {
   const t = {},
       l = r(i, ["voiceConfig"]);
   l != null && c(t, ["voiceConfig"], l);
   const a = r(i, ["languageCode"]);
   if (a != null && c(t, ["languageCode"], a), r(i, ["multiSpeakerVoiceConfig"]) !== void 0) throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
   return t
}

function NC(i) {
   const t = {},
       l = r(i, ["functionCallingConfig"]);
   l != null && c(t, ["functionCallingConfig"], I_(l));
   const a = r(i, ["retrievalConfig"]);
   return a != null && c(t, ["retrievalConfig"], a), t
}

function xC(i) {
   const t = {},
       l = r(i, ["functionDeclarations"]);
   if (l != null) {
       let v = l;
       Array.isArray(v) && (v = v.map(S => S)), c(t, ["functionDeclarations"], v)
   }
   if (r(i, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
   const a = r(i, ["googleSearchRetrieval"]);
   a != null && c(t, ["googleSearchRetrieval"], a);
   const u = r(i, ["computerUse"]);
   u != null && c(t, ["computerUse"], u);
   const f = r(i, ["fileSearch"]);
   f != null && c(t, ["fileSearch"], f);
   const m = r(i, ["codeExecution"]);
   if (m != null && c(t, ["codeExecution"], m), r(i, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
   const g = r(i, ["googleMaps"]);
   g != null && c(t, ["googleMaps"], nC(g));
   const y = r(i, ["googleSearch"]);
   y != null && c(t, ["googleSearch"], iC(y));
   const h = r(i, ["urlContext"]);
   return h != null && c(t, ["urlContext"], h), t
}

function ig(i) {
   const t = {},
       l = r(i, ["functionDeclarations"]);
   if (l != null) {
       let S = l;
       Array.isArray(S) && (S = S.map(E => D_(E))), c(t, ["functionDeclarations"], S)
   }
   const a = r(i, ["retrieval"]);
   a != null && c(t, ["retrieval"], a);
   const u = r(i, ["googleSearchRetrieval"]);
   u != null && c(t, ["googleSearchRetrieval"], u);
   const f = r(i, ["computerUse"]);
   if (f != null && c(t, ["computerUse"], f), r(i, ["fileSearch"]) !== void 0) throw new Error("fileSearch parameter is not supported in Vertex AI.");
   const m = r(i, ["codeExecution"]);
   m != null && c(t, ["codeExecution"], m);
   const g = r(i, ["enterpriseWebSearch"]);
   g != null && c(t, ["enterpriseWebSearch"], g);
   const y = r(i, ["googleMaps"]);
   y != null && c(t, ["googleMaps"], y);
   const h = r(i, ["googleSearch"]);
   h != null && c(t, ["googleSearch"], h);
   const v = r(i, ["urlContext"]);
   return v != null && c(t, ["urlContext"], v), t
}

function IC(i) {
   const t = {},
       l = r(i, ["baseModel"]);
   l != null && c(t, ["baseModel"], l);
   const a = r(i, ["createTime"]);
   a != null && c(t, ["createTime"], a);
   const u = r(i, ["updateTime"]);
   return u != null && c(t, ["updateTime"], u), t
}

function DC(i) {
   const t = {},
       l = r(i, ["labels", "google-vertex-llm-tuning-base-model-id"]);
   l != null && c(t, ["baseModel"], l);
   const a = r(i, ["createTime"]);
   a != null && c(t, ["createTime"], a);
   const u = r(i, ["updateTime"]);
   return u != null && c(t, ["updateTime"], u), t
}

function bC(i, t) {
   const l = {},
       a = r(i, ["displayName"]);
   t !== void 0 && a != null && c(t, ["displayName"], a);
   const u = r(i, ["description"]);
   t !== void 0 && u != null && c(t, ["description"], u);
   const f = r(i, ["defaultCheckpointId"]);
   return t !== void 0 && f != null && c(t, ["defaultCheckpointId"], f), l
}

function wC(i, t) {
   const l = {},
       a = r(i, ["displayName"]);
   t !== void 0 && a != null && c(t, ["displayName"], a);
   const u = r(i, ["description"]);
   t !== void 0 && u != null && c(t, ["description"], u);
   const f = r(i, ["defaultCheckpointId"]);
   return t !== void 0 && f != null && c(t, ["defaultCheckpointId"], f), l
}

function UC(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "name"], Te(i, a));
   const u = r(t, ["config"]);
   return u != null && bC(u, l), l
}

function LC(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["config"]);
   return u != null && wC(u, l), l
}

function GC(i, t) {
   const l = {},
       a = r(i, ["outputGcsUri"]);
   t !== void 0 && a != null && c(t, ["parameters", "storageUri"], a);
   const u = r(i, ["safetyFilterLevel"]);
   t !== void 0 && u != null && c(t, ["parameters", "safetySetting"], u);
   const f = r(i, ["personGeneration"]);
   t !== void 0 && f != null && c(t, ["parameters", "personGeneration"], f);
   const m = r(i, ["includeRaiReason"]);
   t !== void 0 && m != null && c(t, ["parameters", "includeRaiReason"], m);
   const g = r(i, ["outputMimeType"]);
   t !== void 0 && g != null && c(t, ["parameters", "outputOptions", "mimeType"], g);
   const y = r(i, ["outputCompressionQuality"]);
   t !== void 0 && y != null && c(t, ["parameters", "outputOptions", "compressionQuality"], y);
   const h = r(i, ["enhanceInputImage"]);
   t !== void 0 && h != null && c(t, ["parameters", "upscaleConfig", "enhanceInputImage"], h);
   const v = r(i, ["imagePreservationFactor"]);
   t !== void 0 && v != null && c(t, ["parameters", "upscaleConfig", "imagePreservationFactor"], v);
   const S = r(i, ["labels"]);
   t !== void 0 && S != null && c(t, ["labels"], S);
   const E = r(i, ["numberOfImages"]);
   t !== void 0 && E != null && c(t, ["parameters", "sampleCount"], E);
   const C = r(i, ["mode"]);
   return t !== void 0 && C != null && c(t, ["parameters", "mode"], C), l
}

function HC(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["_url", "model"], Te(i, a));
   const u = r(t, ["image"]);
   u != null && c(l, ["instances[0]", "image"], Ft(u));
   const f = r(t, ["upscaleFactor"]);
   f != null && c(l, ["parameters", "upscaleConfig", "upscaleFactor"], f);
   const m = r(t, ["config"]);
   return m != null && GC(m, l), l
}

function qC(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["predictions"]);
   if (a != null) {
       let u = a;
       Array.isArray(u) && (u = u.map(f => Ha(f))), c(t, ["generatedImages"], u)
   }
   return t
}

function VC(i) {
   const t = {},
       l = r(i, ["uri"]);
   l != null && c(t, ["uri"], l);
   const a = r(i, ["encodedVideo"]);
   a != null && c(t, ["videoBytes"], On(a));
   const u = r(i, ["encoding"]);
   return u != null && c(t, ["mimeType"], u), t
}

function zC(i) {
   const t = {},
       l = r(i, ["gcsUri"]);
   l != null && c(t, ["uri"], l);
   const a = r(i, ["bytesBase64Encoded"]);
   a != null && c(t, ["videoBytes"], On(a));
   const u = r(i, ["mimeType"]);
   return u != null && c(t, ["mimeType"], u), t
}

function kC(i) {
   const t = {},
       l = r(i, ["image"]);
   l != null && c(t, ["_self"], Ft(l));
   const a = r(i, ["maskMode"]);
   return a != null && c(t, ["maskMode"], a), t
}

function PC(i) {
   const t = {},
       l = r(i, ["image"]);
   l != null && c(t, ["image"], qa(l));
   const a = r(i, ["referenceType"]);
   return a != null && c(t, ["referenceType"], a), t
}

function BC(i) {
   const t = {},
       l = r(i, ["image"]);
   l != null && c(t, ["image"], Ft(l));
   const a = r(i, ["referenceType"]);
   return a != null && c(t, ["referenceType"], a), t
}

function og(i) {
   const t = {},
       l = r(i, ["uri"]);
   l != null && c(t, ["uri"], l);
   const a = r(i, ["videoBytes"]);
   a != null && c(t, ["encodedVideo"], On(a));
   const u = r(i, ["mimeType"]);
   return u != null && c(t, ["encoding"], u), t
}

function lg(i) {
   const t = {},
       l = r(i, ["uri"]);
   l != null && c(t, ["gcsUri"], l);
   const a = r(i, ["videoBytes"]);
   a != null && c(t, ["bytesBase64Encoded"], On(a));
   const u = r(i, ["mimeType"]);
   return u != null && c(t, ["mimeType"], u), t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function OC(i, t) {
   const l = {},
       a = r(i, ["displayName"]);
   return t !== void 0 && a != null && c(t, ["displayName"], a), l
}

function FC(i) {
   const t = {},
       l = r(i, ["config"]);
   return l != null && OC(l, t), t
}

function YC(i, t) {
   const l = {},
       a = r(i, ["force"]);
   return t !== void 0 && a != null && c(t, ["_query", "force"], a), l
}

function JC(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["_url", "name"], l);
   const a = r(i, ["config"]);
   return a != null && YC(a, t), t
}

function KC(i) {
   const t = {},
       l = r(i, ["name"]);
   return l != null && c(t, ["_url", "name"], l), t
}

function XC(i, t) {
   const l = {},
       a = r(i, ["customMetadata"]);
   if (t !== void 0 && a != null) {
       let f = a;
       Array.isArray(f) && (f = f.map(m => m)), c(t, ["customMetadata"], f)
   }
   const u = r(i, ["chunkingConfig"]);
   return t !== void 0 && u != null && c(t, ["chunkingConfig"], u), l
}

function QC(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["name"], l);
   const a = r(i, ["metadata"]);
   a != null && c(t, ["metadata"], a);
   const u = r(i, ["done"]);
   u != null && c(t, ["done"], u);
   const f = r(i, ["error"]);
   f != null && c(t, ["error"], f);
   const m = r(i, ["response"]);
   return m != null && c(t, ["response"], $C(m)), t
}

function ZC(i) {
   const t = {},
       l = r(i, ["fileSearchStoreName"]);
   l != null && c(t, ["_url", "file_search_store_name"], l);
   const a = r(i, ["fileName"]);
   a != null && c(t, ["fileName"], a);
   const u = r(i, ["config"]);
   return u != null && XC(u, t), t
}

function $C(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["parent"]);
   a != null && c(t, ["parent"], a);
   const u = r(i, ["documentName"]);
   return u != null && c(t, ["documentName"], u), t
}

function WC(i, t) {
   const l = {},
       a = r(i, ["pageSize"]);
   t !== void 0 && a != null && c(t, ["_query", "pageSize"], a);
   const u = r(i, ["pageToken"]);
   return t !== void 0 && u != null && c(t, ["_query", "pageToken"], u), l
}

function jC(i) {
   const t = {},
       l = r(i, ["config"]);
   return l != null && WC(l, t), t
}

function eA(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["nextPageToken"]);
   a != null && c(t, ["nextPageToken"], a);
   const u = r(i, ["fileSearchStores"]);
   if (u != null) {
       let f = u;
       Array.isArray(f) && (f = f.map(m => m)), c(t, ["fileSearchStores"], f)
   }
   return t
}

function ag(i, t) {
   const l = {},
       a = r(i, ["mimeType"]);
   t !== void 0 && a != null && c(t, ["mimeType"], a);
   const u = r(i, ["displayName"]);
   t !== void 0 && u != null && c(t, ["displayName"], u);
   const f = r(i, ["customMetadata"]);
   if (t !== void 0 && f != null) {
       let g = f;
       Array.isArray(g) && (g = g.map(y => y)), c(t, ["customMetadata"], g)
   }
   const m = r(i, ["chunkingConfig"]);
   return t !== void 0 && m != null && c(t, ["chunkingConfig"], m), l
}

function tA(i) {
   const t = {},
       l = r(i, ["fileSearchStoreName"]);
   l != null && c(t, ["_url", "file_search_store_name"], l);
   const a = r(i, ["config"]);
   return a != null && ag(a, t), t
}

function nA(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   return l != null && c(t, ["sdkHttpResponse"], l), t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const iA = "Content-Type",
   oA = "X-Server-Timeout",
   lA = "User-Agent",
   _u = "x-goog-api-client",
   aA = "1.33.0",
   sA = `google-genai-sdk/${aA}`,
   rA = "v1beta1",
   uA = "v1beta";
class cA {
   constructor(t) {
       var l, a;
       this.clientOptions = Object.assign(Object.assign({}, t), {
           project: t.project,
           location: t.location,
           apiKey: t.apiKey,
           vertexai: t.vertexai
       });
       const u = {};
       this.clientOptions.vertexai ? (u.apiVersion = (l = this.clientOptions.apiVersion) !== null && l !== void 0 ? l : rA, u.baseUrl = this.baseUrlFromProjectLocation(), this.normalizeAuthParameters()) : (u.apiVersion = (a = this.clientOptions.apiVersion) !== null && a !== void 0 ? a : uA, u.baseUrl = "https://generativelanguage.googleapis.com/"), u.headers = this.getDefaultHeaders(), this.clientOptions.httpOptions = u, t.httpOptions && (this.clientOptions.httpOptions = this.patchHttpOptions(u, t.httpOptions))
   }
   baseUrlFromProjectLocation() {
       return this.clientOptions.project && this.clientOptions.location && this.clientOptions.location !== "global" ? `https://${this.clientOptions.location}-aiplatform.googleapis.com/` : "https://aiplatform.googleapis.com/"
   }
   normalizeAuthParameters() {
       if (this.clientOptions.project && this.clientOptions.location) {
           this.clientOptions.apiKey = void 0;
           return
       }
       this.clientOptions.project = void 0, this.clientOptions.location = void 0
   }
   isVertexAI() {
       var t;
       return (t = this.clientOptions.vertexai) !== null && t !== void 0 ? t : !1
   }
   getProject() {
       return this.clientOptions.project
   }
   getLocation() {
       return this.clientOptions.location
   }
   getApiVersion() {
       if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.apiVersion !== void 0) return this.clientOptions.httpOptions.apiVersion;
       throw new Error("API version is not set.")
   }
   getBaseUrl() {
       if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.baseUrl !== void 0) return this.clientOptions.httpOptions.baseUrl;
       throw new Error("Base URL is not set.")
   }
   getRequestUrl() {
       return this.getRequestUrlInternal(this.clientOptions.httpOptions)
   }
   getHeaders() {
       if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.headers !== void 0) return this.clientOptions.httpOptions.headers;
       throw new Error("Headers are not set.")
   }
   getRequestUrlInternal(t) {
       if (!t || t.baseUrl === void 0 || t.apiVersion === void 0) throw new Error("HTTP options are not correctly set.");
       const a = [t.baseUrl.endsWith("/") ? t.baseUrl.slice(0, -1) : t.baseUrl];
       return t.apiVersion && t.apiVersion !== "" && a.push(t.apiVersion), a.join("/")
   }
   getBaseResourcePath() {
       return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`
   }
   getApiKey() {
       return this.clientOptions.apiKey
   }
   getWebsocketBaseUrl() {
       const t = this.getBaseUrl(),
           l = new URL(t);
       return l.protocol = l.protocol == "http:" ? "ws" : "wss", l.toString()
   }
   setBaseUrl(t) {
       if (this.clientOptions.httpOptions) this.clientOptions.httpOptions.baseUrl = t;
       else throw new Error("HTTP options are not correctly set.")
   }
   constructUrl(t, l, a) {
       const u = [this.getRequestUrlInternal(l)];
       return a && u.push(this.getBaseResourcePath()), t !== "" && u.push(t), new URL(`${u.join("/")}`)
   }
   shouldPrependVertexProjectPath(t) {
       return !(this.clientOptions.apiKey || !this.clientOptions.vertexai || t.path.startsWith("projects/") || t.httpMethod === "GET" && t.path.startsWith("publishers/google/models"))
   }
   async request(t) {
       let l = this.clientOptions.httpOptions;
       t.httpOptions && (l = this.patchHttpOptions(this.clientOptions.httpOptions, t.httpOptions));
       const a = this.shouldPrependVertexProjectPath(t),
           u = this.constructUrl(t.path, l, a);
       if (t.queryParams)
           for (const [m, g] of Object.entries(t.queryParams)) u.searchParams.append(m, String(g));
       let f = {};
       if (t.httpMethod === "GET") {
           if (t.body && t.body !== "{}") throw new Error("Request body should be empty for GET request, but got non empty request body")
       } else f.body = t.body;
       return f = await this.includeExtraHttpOptionsToRequestInit(f, l, u.toString(), t.abortSignal), this.unaryApiCall(u, f, t.httpMethod)
   }
   patchHttpOptions(t, l) {
       const a = JSON.parse(JSON.stringify(t));
       for (const [u, f] of Object.entries(l)) typeof f == "object" ? a[u] = Object.assign(Object.assign({}, a[u]), f) : f !== void 0 && (a[u] = f);
       return a
   }
   async requestStream(t) {
       let l = this.clientOptions.httpOptions;
       t.httpOptions && (l = this.patchHttpOptions(this.clientOptions.httpOptions, t.httpOptions));
       const a = this.shouldPrependVertexProjectPath(t),
           u = this.constructUrl(t.path, l, a);
       (!u.searchParams.has("alt") || u.searchParams.get("alt") !== "sse") && u.searchParams.set("alt", "sse");
       let f = {};
       return f.body = t.body, f = await this.includeExtraHttpOptionsToRequestInit(f, l, u.toString(), t.abortSignal), this.streamApiCall(u, f, t.httpMethod)
   }
   async includeExtraHttpOptionsToRequestInit(t, l, a, u) {
       if (l && l.timeout || u) {
           const f = new AbortController,
               m = f.signal;
           if (l.timeout && (l == null ? void 0 : l.timeout) > 0) {
               const g = setTimeout(() => f.abort(), l.timeout);
               g && typeof g.unref == "function" && g.unref()
           }
           u && u.addEventListener("abort", () => {
               f.abort()
           }), t.signal = m
       }
       return l && l.extraBody !== null && fA(t, l.extraBody), t.headers = await this.getHeadersInternal(l, a), t
   }
   async unaryApiCall(t, l, a) {
       return this.apiCall(t.toString(), Object.assign(Object.assign({}, l), {
           method: a
       })).then(async u => (await vh(u), new yu(u))).catch(u => {
           throw u instanceof Error ? u : new Error(JSON.stringify(u))
       })
   }
   async streamApiCall(t, l, a) {
       return this.apiCall(t.toString(), Object.assign(Object.assign({}, l), {
           method: a
       })).then(async u => (await vh(u), this.processStreamResponse(u))).catch(u => {
           throw u instanceof Error ? u : new Error(JSON.stringify(u))
       })
   }
   processStreamResponse(t) {
       return Bt(this, arguments, function*() {
           var a;
           const u = (a = t == null ? void 0 : t.body) === null || a === void 0 ? void 0 : a.getReader(),
               f = new TextDecoder("utf-8");
           if (!u) throw new Error("Response body is empty");
           try {
               let m = "";
               const g = "data:",
                   y = [`

`, "\r\r", `\r
\r
`];
               for (;;) {
                   const {
                       done: h,
                       value: v
                   } = yield oe(u.read());
                   if (h) {
                       if (m.trim().length > 0) throw new Error("Incomplete JSON segment at the end");
                       break
                   }
                   const S = f.decode(v, {
                       stream: !0
                   });
                   try {
                       const b = JSON.parse(S);
                       if ("error" in b) {
                           const H = JSON.parse(JSON.stringify(b.error)),
                               U = H.status,
                               P = H.code,
                               K = `got status: ${U}. ${JSON.stringify(b)}`;
                           if (P >= 400 && P < 600) throw new La({
                               message: K,
                               status: P
                           })
                       }
                   } catch (b) {
                       if (b.name === "ApiError") throw b
                   }
                   m += S;
                   let E = -1,
                       C = 0;
                   for (;;) {
                       E = -1, C = 0;
                       for (const U of y) {
                           const P = m.indexOf(U);
                           P !== -1 && (E === -1 || P < E) && (E = P, C = U.length)
                       }
                       if (E === -1) break;
                       const b = m.substring(0, E);
                       m = m.substring(E + C);
                       const H = b.trim();
                       if (H.startsWith(g)) {
                           const U = H.substring(g.length).trim();
                           try {
                               const P = new Response(U, {
                                   headers: t == null ? void 0 : t.headers,
                                   status: t == null ? void 0 : t.status,
                                   statusText: t == null ? void 0 : t.statusText
                               });
                               yield yield oe(new yu(P))
                           } catch (P) {
                               throw new Error(`exception parsing stream chunk ${U}. ${P}`)
                           }
                       }
                   }
               }
           } finally {
               u.releaseLock()
           }
       })
   }
   async apiCall(t, l) {
       return fetch(t, l).catch(a => {
           throw new Error(`exception ${a} sending request`)
       })
   }
   getDefaultHeaders() {
       const t = {},
           l = sA + " " + this.clientOptions.userAgentExtra;
       return t[lA] = l, t[_u] = l, t[iA] = "application/json", t
   }
   async getHeadersInternal(t, l) {
       const a = new Headers;
       if (t && t.headers) {
           for (const [u, f] of Object.entries(t.headers)) a.append(u, f);
           t.timeout && t.timeout > 0 && a.append(oA, String(Math.ceil(t.timeout / 1e3)))
       }
       return await this.clientOptions.auth.addAuthHeaders(a, l), a
   }
   getFileName(t) {
       var l;
       let a = "";
       return typeof t == "string" && (a = t.replace(/[/\\]+$/, ""), a = (l = a.split(/[/\\]/).pop()) !== null && l !== void 0 ? l : ""), a
   }
   async uploadFile(t, l) {
       var a;
       const u = {};
       l != null && (u.mimeType = l.mimeType, u.name = l.name, u.displayName = l.displayName), u.name && !u.name.startsWith("files/") && (u.name = `files/${u.name}`);
       const f = this.clientOptions.uploader,
           m = await f.stat(t);
       u.sizeBytes = String(m.size);
       const g = (a = l == null ? void 0 : l.mimeType) !== null && a !== void 0 ? a : m.type;
       if (g === void 0 || g === "") throw new Error("Can not determine mimeType. Please provide mimeType in the config.");
       u.mimeType = g;
       const y = {
               file: u
           },
           h = this.getFileName(t),
           v = J("upload/v1beta/files", y._url),
           S = await this.fetchUploadUrl(v, u.sizeBytes, u.mimeType, h, y, l == null ? void 0 : l.httpOptions);
       return f.upload(t, S, this)
   }
   async uploadFileToFileSearchStore(t, l, a) {
       var u;
       const f = this.clientOptions.uploader,
           m = await f.stat(l),
           g = String(m.size),
           y = (u = a == null ? void 0 : a.mimeType) !== null && u !== void 0 ? u : m.type;
       if (y === void 0 || y === "") throw new Error("Can not determine mimeType. Please provide mimeType in the config.");
       const h = `upload/v1beta/${t}:uploadToFileSearchStore`,
           v = this.getFileName(l),
           S = {};
       a != null && ag(a, S);
       const E = await this.fetchUploadUrl(h, g, y, v, S, a == null ? void 0 : a.httpOptions);
       return f.uploadToFileSearchStore(l, E, this)
   }
   async downloadFile(t) {
       await this.clientOptions.downloader.download(t, this)
   }
   async fetchUploadUrl(t, l, a, u, f, m) {
       var g;
       let y = {};
       m ? y = m : y = {
           apiVersion: "",
           headers: Object.assign({
               "Content-Type": "application/json",
               "X-Goog-Upload-Protocol": "resumable",
               "X-Goog-Upload-Command": "start",
               "X-Goog-Upload-Header-Content-Length": `${l}`,
               "X-Goog-Upload-Header-Content-Type": `${a}`
           }, u ? {
               "X-Goog-Upload-File-Name": u
           } : {})
       };
       const h = await this.request({
           path: t,
           body: JSON.stringify(f),
           httpMethod: "POST",
           httpOptions: y
       });
       if (!h || !(h != null && h.headers)) throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");
       const v = (g = h == null ? void 0 : h.headers) === null || g === void 0 ? void 0 : g["x-goog-upload-url"];
       if (v === void 0) throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");
       return v
   }
}
async function vh(i) {
   var t;
   if (i === void 0) throw new Error("response is undefined");
   if (!i.ok) {
       const l = i.status;
       let a;
       !((t = i.headers.get("content-type")) === null || t === void 0) && t.includes("application/json") ? a = await i.json() : a = {
           error: {
               message: await i.text(),
               code: i.status,
               status: i.statusText
           }
       };
       const u = JSON.stringify(a);
       throw l >= 400 && l < 600 ? new La({
           message: u,
           status: l
       }) : new Error(u)
   }
}

function fA(i, t) {
   if (!t || Object.keys(t).length === 0) return;
   if (i.body instanceof Blob) {
       console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");
       return
   }
   let l = {};
   if (typeof i.body == "string" && i.body.length > 0) try {
       const f = JSON.parse(i.body);
       if (typeof f == "object" && f !== null && !Array.isArray(f)) l = f;
       else {
           console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");
           return
       }
   } catch {
       console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");
       return
   }

   function a(f, m) {
       const g = Object.assign({}, f);
       for (const y in m)
           if (Object.prototype.hasOwnProperty.call(m, y)) {
               const h = m[y],
                   v = g[y];
               h && typeof h == "object" && !Array.isArray(h) && v && typeof v == "object" && !Array.isArray(v) ? g[y] = a(v, h) : (v && h && typeof v != typeof h && console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${y}". Original type: ${typeof v}, New type: ${typeof h}. Overwriting.`), g[y] = h)
           } return g
   }
   const u = a(l, t);
   i.body = JSON.stringify(u)
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const dA = "mcp_used/unknown";
let pA = !1;

function sg(i) {
   for (const t of i)
       if (mA(t) || typeof t == "object" && "inputSchema" in t) return !0;
   return pA
}

function rg(i) {
   var t;
   const l = (t = i[_u]) !== null && t !== void 0 ? t : "";
   i[_u] = (l + ` ${dA}`).trimStart()
}

function mA(i) {
   return i !== null && typeof i == "object" && i instanceof qu
}

function hA(i) {
   return Bt(this, arguments, function*(l, a = 100) {
       let u, f = 0;
       for (; f < a;) {
           const m = yield oe(l.listTools({
               cursor: u
           }));
           for (const g of m.tools) yield yield oe(g), f++;
           if (!m.nextCursor) break;
           u = m.nextCursor
       }
   })
}
class qu {
   constructor(t = [], l) {
       this.mcpTools = [], this.functionNameToMcpClient = {}, this.mcpClients = t, this.config = l
   }
   static create(t, l) {
       return new qu(t, l)
   }
   async initialize() {
       var t, l, a, u;
       if (this.mcpTools.length > 0) return;
       const f = {},
           m = [];
       for (const v of this.mcpClients) try {
           for (var g = !0, y = (l = void 0, Ot(hA(v))), h; h = await y.next(), t = h.done, !t; g = !0) {
               u = h.value, g = !1;
               const S = u;
               m.push(S);
               const E = S.name;
               if (f[E]) throw new Error(`Duplicate function name ${E} found in MCP tools. Please ensure function names are unique.`);
               f[E] = v
           }
       } catch (S) {
           l = {
               error: S
           }
       } finally {
           try {
               !g && !t && (a = y.return) && await a.call(y)
           } finally {
               if (l) throw l.error
           }
       }
       this.mcpTools = m, this.functionNameToMcpClient = f
   }
   async tool() {
       return await this.initialize(), KT(this.mcpTools, this.config)
   }
   async callTool(t) {
       await this.initialize();
       const l = [];
       for (const a of t)
           if (a.name in this.functionNameToMcpClient) {
               const u = this.functionNameToMcpClient[a.name];
               let f;
               this.config.timeout && (f = {
                   timeout: this.config.timeout
               });
               const m = await u.callTool({
                   name: a.name,
                   arguments: a.args
               }, void 0, f);
               l.push({
                   functionResponse: {
                       name: a.name,
                       response: m.isError ? {
                           error: m
                       } : m
                   }
               })
           } return l
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
async function gA(i, t, l) {
   const a = new zT;
   let u;
   l.data instanceof Blob ? u = JSON.parse(await l.data.text()) : u = JSON.parse(l.data), Object.assign(a, u), t(a)
}
class yA {
   constructor(t, l, a) {
       this.apiClient = t, this.auth = l, this.webSocketFactory = a
   }
   async connect(t) {
       var l, a;
       if (this.apiClient.isVertexAI()) throw new Error("Live music is not supported for Vertex AI.");
       console.warn("Live music generation is experimental and may change in future versions.");
       const u = this.apiClient.getWebsocketBaseUrl(),
           f = this.apiClient.getApiVersion(),
           m = SA(this.apiClient.getDefaultHeaders()),
           g = this.apiClient.getApiKey(),
           y = `${u}/ws/google.ai.generativelanguage.${f}.GenerativeService.BidiGenerateMusic?key=${g}`;
       let h = () => {};
       const v = new Promise(B => {
               h = B
           }),
           S = t.callbacks,
           E = function() {
               h({})
           },
           C = this.apiClient,
           b = {
               onopen: E,
               onmessage: B => {
                   gA(C, S.onmessage, B)
               },
               onerror: (l = S == null ? void 0 : S.onerror) !== null && l !== void 0 ? l : function(B) {},
               onclose: (a = S == null ? void 0 : S.onclose) !== null && a !== void 0 ? a : function(B) {}
           },
           H = this.webSocketFactory.create(y, TA(m), b);
       H.connect(), await v;
       const K = {
           setup: {
               model: Te(this.apiClient, t.model)
           }
       };
       return H.send(JSON.stringify(K)), new vA(H, this.apiClient)
   }
}
class vA {
   constructor(t, l) {
       this.conn = t, this.apiClient = l
   }
   async setWeightedPrompts(t) {
       if (!t.weightedPrompts || Object.keys(t.weightedPrompts).length === 0) throw new Error("Weighted prompts must be set and contain at least one entry.");
       const l = FE(t);
       this.conn.send(JSON.stringify({
           clientContent: l
       }))
   }
   async setMusicGenerationConfig(t) {
       t.musicGenerationConfig || (t.musicGenerationConfig = {});
       const l = OE(t);
       this.conn.send(JSON.stringify(l))
   }
   sendPlaybackControl(t) {
       const l = {
           playbackControl: t
       };
       this.conn.send(JSON.stringify(l))
   }
   play() {
       this.sendPlaybackControl(Zi.PLAY)
   }
   pause() {
       this.sendPlaybackControl(Zi.PAUSE)
   }
   stop() {
       this.sendPlaybackControl(Zi.STOP)
   }
   resetContext() {
       this.sendPlaybackControl(Zi.RESET_CONTEXT)
   }
   close() {
       this.conn.close()
   }
}

function TA(i) {
   const t = {};
   return i.forEach((l, a) => {
       t[a] = l
   }), t
}

function SA(i) {
   const t = new Headers;
   for (const [l, a] of Object.entries(i)) t.append(l, a);
   return t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const EA = "FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";
async function _A(i, t, l) {
   const a = new VT;
   let u;
   l.data instanceof Blob ? u = await l.data.text() : l.data instanceof ArrayBuffer ? u = new TextDecoder().decode(l.data) : u = l.data;
   const f = JSON.parse(u);
   if (i.isVertexAI()) {
       const m = KE(f);
       Object.assign(a, m)
   } else Object.assign(a, f);
   t(a)
}
class CA {
   constructor(t, l, a) {
       this.apiClient = t, this.auth = l, this.webSocketFactory = a, this.music = new yA(this.apiClient, this.auth, this.webSocketFactory)
   }
   async connect(t) {
       var l, a, u, f, m, g;
       if (t.config && t.config.httpOptions) throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");
       const y = this.apiClient.getWebsocketBaseUrl(),
           h = this.apiClient.getApiVersion();
       let v;
       const S = this.apiClient.getHeaders();
       t.config && t.config.tools && sg(t.config.tools) && rg(S);
       const E = NA(S);
       if (this.apiClient.isVertexAI()) v = `${y}/ws/google.cloud.aiplatform.${h}.LlmBidiService/BidiGenerateContent`, await this.auth.addAuthHeaders(E, v);
       else {
           const W = this.apiClient.getApiKey();
           let de = "BidiGenerateContent",
               Ce = "key";
           W != null && W.startsWith("auth_tokens/") && (console.warn("Warning: Ephemeral token support is experimental and may change in future versions."), h !== "v1alpha" && console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."), de = "BidiGenerateContentConstrained", Ce = "access_token"), v = `${y}/ws/google.ai.generativelanguage.${h}.GenerativeService.${de}?${Ce}=${W}`
       }
       let C = () => {};
       const b = new Promise(W => {
               C = W
           }),
           H = t.callbacks,
           U = function() {
               var W;
               (W = H == null ? void 0 : H.onopen) === null || W === void 0 || W.call(H), C({})
           },
           P = this.apiClient,
           K = {
               onopen: U,
               onmessage: W => {
                   _A(P, H.onmessage, W)
               },
               onerror: (l = H == null ? void 0 : H.onerror) !== null && l !== void 0 ? l : function(W) {},
               onclose: (a = H == null ? void 0 : H.onclose) !== null && a !== void 0 ? a : function(W) {}
           },
           B = this.webSocketFactory.create(v, MA(E), K);
       B.connect(), await b;
       let X = Te(this.apiClient, t.model);
       if (this.apiClient.isVertexAI() && X.startsWith("publishers/")) {
           const W = this.apiClient.getProject(),
               de = this.apiClient.getLocation();
           X = `projects/${W}/locations/${de}/` + X
       }
       let ee = {};
       this.apiClient.isVertexAI() && ((u = t.config) === null || u === void 0 ? void 0 : u.responseModalities) === void 0 && (t.config === void 0 ? t.config = {
           responseModalities: [xa.AUDIO]
       } : t.config.responseModalities = [xa.AUDIO]), !((f = t.config) === null || f === void 0) && f.generationConfig && console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");
       const te = (g = (m = t.config) === null || m === void 0 ? void 0 : m.tools) !== null && g !== void 0 ? g : [],
           F = [];
       for (const W of te)
           if (this.isCallableTool(W)) {
               const de = W;
               F.push(await de.tool())
           } else F.push(W);
       F.length > 0 && (t.config.tools = F);
       const he = {
           model: X,
           config: t.config,
           callbacks: t.callbacks
       };
       return this.apiClient.isVertexAI() ? ee = BE(this.apiClient, he) : ee = PE(this.apiClient, he), delete ee.config, B.send(JSON.stringify(ee)), new RA(B, this.apiClient)
   }
   isCallableTool(t) {
       return "callTool" in t && typeof t.callTool == "function"
   }
}
const AA = {
   turnComplete: !0
};
class RA {
   constructor(t, l) {
       this.conn = t, this.apiClient = l
   }
   tLiveClientContent(t, l) {
       if (l.turns !== null && l.turns !== void 0) {
           let a = [];
           try {
               a = qt(l.turns), t.isVertexAI() || (a = a.map(u => Ga(u)))
           } catch {
               throw new Error(`Failed to parse client content "turns", type: '${typeof l.turns}'`)
           }
           return {
               clientContent: {
                   turns: a,
                   turnComplete: l.turnComplete
               }
           }
       }
       return {
           clientContent: {
               turnComplete: l.turnComplete
           }
       }
   }
   tLiveClienttToolResponse(t, l) {
       let a = [];
       if (l.functionResponses == null) throw new Error("functionResponses is required.");
       if (Array.isArray(l.functionResponses) ? a = l.functionResponses : a = [l.functionResponses], a.length === 0) throw new Error("functionResponses is required.");
       for (const f of a) {
           if (typeof f != "object" || f === null || !("name" in f) || !("response" in f)) throw new Error(`Could not parse function response, type '${typeof f}'.`);
           if (!t.isVertexAI() && !("id" in f)) throw new Error(EA)
       }
       return {
           toolResponse: {
               functionResponses: a
           }
       }
   }
   sendClientContent(t) {
       t = Object.assign(Object.assign({}, AA), t);
       const l = this.tLiveClientContent(this.apiClient, t);
       this.conn.send(JSON.stringify(l))
   }
   sendRealtimeInput(t) {
       let l = {};
       this.apiClient.isVertexAI() ? l = {
           realtimeInput: JE(t)
       } : l = {
           realtimeInput: YE(t)
       }, this.conn.send(JSON.stringify(l))
   }
   sendToolResponse(t) {
       if (t.functionResponses == null) throw new Error("Tool response parameters are required.");
       const l = this.tLiveClienttToolResponse(this.apiClient, t);
       this.conn.send(JSON.stringify(l))
   }
   close() {
       this.conn.close()
   }
}

function MA(i) {
   const t = {};
   return i.forEach((l, a) => {
       t[a] = l
   }), t
}

function NA(i) {
   const t = new Headers;
   for (const [l, a] of Object.entries(i)) t.append(l, a);
   return t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Th = 10;

function Sh(i) {
   var t, l, a;
   if (!((t = i == null ? void 0 : i.automaticFunctionCalling) === null || t === void 0) && t.disable) return !0;
   let u = !1;
   for (const m of (l = i == null ? void 0 : i.tools) !== null && l !== void 0 ? l : [])
       if (ji(m)) {
           u = !0;
           break
       } if (!u) return !0;
   const f = (a = i == null ? void 0 : i.automaticFunctionCalling) === null || a === void 0 ? void 0 : a.maximumRemoteCalls;
   return f && (f < 0 || !Number.isInteger(f)) || f == 0 ? (console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:", f), !0) : !1
}

function ji(i) {
   return "callTool" in i && typeof i.callTool == "function"
}

function xA(i) {
   var t, l, a;
   return (a = (l = (t = i.config) === null || t === void 0 ? void 0 : t.tools) === null || l === void 0 ? void 0 : l.some(u => ji(u))) !== null && a !== void 0 ? a : !1
}

function Eh(i) {
   var t;
   const l = [];
   return !((t = i == null ? void 0 : i.config) === null || t === void 0) && t.tools && i.config.tools.forEach((a, u) => {
       if (ji(a)) return;
       const f = a;
       f.functionDeclarations && f.functionDeclarations.length > 0 && l.push(u)
   }), l
}

function _h(i) {
   var t;
   return !(!((t = i == null ? void 0 : i.automaticFunctionCalling) === null || t === void 0) && t.ignoreCallHistory)
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class IA extends hn {
   constructor(t) {
       super(), this.apiClient = t, this.generateContent = async l => {
           var a, u, f, m, g;
           const y = await this.processParamsMaybeAddMcpUsage(l);
           if (this.maybeMoveToResponseJsonSchem(l), !xA(l) || Sh(l.config)) return await this.generateContentInternal(y);
           const h = Eh(l);
           if (h.length > 0) {
               const H = h.map(U => `tools[${U}]`).join(", ");
               throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${H}.`)
           }
           let v, S;
           const E = qt(y.contents),
               C = (f = (u = (a = y.config) === null || a === void 0 ? void 0 : a.automaticFunctionCalling) === null || u === void 0 ? void 0 : u.maximumRemoteCalls) !== null && f !== void 0 ? f : Th;
           let b = 0;
           for (; b < C && (v = await this.generateContentInternal(y), !(!v.functionCalls || v.functionCalls.length === 0));) {
               const H = v.candidates[0].content,
                   U = [];
               for (const P of (g = (m = l.config) === null || m === void 0 ? void 0 : m.tools) !== null && g !== void 0 ? g : [])
                   if (ji(P)) {
                       const B = await P.callTool(v.functionCalls);
                       U.push(...B)
                   } b++, S = {
                   role: "user",
                   parts: U
               }, y.contents = qt(y.contents), y.contents.push(H), y.contents.push(S), _h(y.config) && (E.push(H), E.push(S))
           }
           return _h(y.config) && (v.automaticFunctionCallingHistory = E), v
       }, this.generateContentStream = async l => {
           var a, u, f, m, g;
           if (this.maybeMoveToResponseJsonSchem(l), Sh(l.config)) {
               const S = await this.processParamsMaybeAddMcpUsage(l);
               return await this.generateContentStreamInternal(S)
           }
           const y = Eh(l);
           if (y.length > 0) {
               const S = y.map(E => `tools[${E}]`).join(", ");
               throw new Error(`Incompatible tools found at ${S}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)
           }
           const h = (f = (u = (a = l == null ? void 0 : l.config) === null || a === void 0 ? void 0 : a.toolConfig) === null || u === void 0 ? void 0 : u.functionCallingConfig) === null || f === void 0 ? void 0 : f.streamFunctionCallArguments,
               v = (g = (m = l == null ? void 0 : l.config) === null || m === void 0 ? void 0 : m.automaticFunctionCalling) === null || g === void 0 ? void 0 : g.disable;
           if (h && !v) throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");
           return await this.processAfcStream(l)
       }, this.generateImages = async l => await this.generateImagesInternal(l).then(a => {
           var u;
           let f;
           const m = [];
           if (a != null && a.generatedImages)
               for (const y of a.generatedImages) y && (y != null && y.safetyAttributes) && ((u = y == null ? void 0 : y.safetyAttributes) === null || u === void 0 ? void 0 : u.contentType) === "Positive Prompt" ? f = y == null ? void 0 : y.safetyAttributes : m.push(y);
           let g;
           return f ? g = {
               generatedImages: m,
               positivePromptSafetyAttributes: f,
               sdkHttpResponse: a.sdkHttpResponse
           } : g = {
               generatedImages: m,
               sdkHttpResponse: a.sdkHttpResponse
           }, g
       }), this.list = async l => {
           var a;
           const m = {
               config: Object.assign(Object.assign({}, {
                   queryBase: !0
               }), l == null ? void 0 : l.config)
           };
           if (this.apiClient.isVertexAI() && !m.config.queryBase) {
               if (!((a = m.config) === null || a === void 0) && a.filter) throw new Error("Filtering tuned models list for Vertex AI is not currently supported");
               m.config.filter = "labels.tune-type:*"
           }
           return new ci(mn.PAGED_ITEM_MODELS, g => this.listInternal(g), await this.listInternal(m), m)
       }, this.editImage = async l => {
           const a = {
               model: l.model,
               prompt: l.prompt,
               referenceImages: [],
               config: l.config
           };
           return l.referenceImages && l.referenceImages && (a.referenceImages = l.referenceImages.map(u => u.toReferenceImageAPI())), await this.editImageInternal(a)
       }, this.upscaleImage = async l => {
           let a = {
               numberOfImages: 1,
               mode: "upscale"
           };
           l.config && (a = Object.assign(Object.assign({}, a), l.config));
           const u = {
               model: l.model,
               image: l.image,
               upscaleFactor: l.upscaleFactor,
               config: a
           };
           return await this.upscaleImageInternal(u)
       }, this.generateVideos = async l => {
           var a, u, f, m, g, y;
           if ((l.prompt || l.image || l.video) && l.source) throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");
           return this.apiClient.isVertexAI() || (!((a = l.video) === null || a === void 0) && a.uri && (!((u = l.video) === null || u === void 0) && u.videoBytes) ? l.video = {
               uri: l.video.uri,
               mimeType: l.video.mimeType
           } : !((m = (f = l.source) === null || f === void 0 ? void 0 : f.video) === null || m === void 0) && m.uri && (!((y = (g = l.source) === null || g === void 0 ? void 0 : g.video) === null || y === void 0) && y.videoBytes) && (l.source.video = {
               uri: l.source.video.uri,
               mimeType: l.source.video.mimeType
           })), await this.generateVideosInternal(l)
       }
   }
   maybeMoveToResponseJsonSchem(t) {
       t.config && t.config.responseSchema && (t.config.responseJsonSchema || Object.keys(t.config.responseSchema).includes("$schema") && (t.config.responseJsonSchema = t.config.responseSchema, delete t.config.responseSchema))
   }
   async processParamsMaybeAddMcpUsage(t) {
       var l, a, u;
       const f = (l = t.config) === null || l === void 0 ? void 0 : l.tools;
       if (!f) return t;
       const m = await Promise.all(f.map(async y => ji(y) ? await y.tool() : y)),
           g = {
               model: t.model,
               contents: t.contents,
               config: Object.assign(Object.assign({}, t.config), {
                   tools: m
               })
           };
       if (g.config.tools = m, t.config && t.config.tools && sg(t.config.tools)) {
           const y = (u = (a = t.config.httpOptions) === null || a === void 0 ? void 0 : a.headers) !== null && u !== void 0 ? u : {};
           let h = Object.assign({}, y);
           Object.keys(h).length === 0 && (h = this.apiClient.getDefaultHeaders()), rg(h), g.config.httpOptions = Object.assign(Object.assign({}, t.config.httpOptions), {
               headers: h
           })
       }
       return g
   }
   async initAfcToolsMap(t) {
       var l, a, u;
       const f = new Map;
       for (const m of (a = (l = t.config) === null || l === void 0 ? void 0 : l.tools) !== null && a !== void 0 ? a : [])
           if (ji(m)) {
               const g = m,
                   y = await g.tool();
               for (const h of (u = y.functionDeclarations) !== null && u !== void 0 ? u : []) {
                   if (!h.name) throw new Error("Function declaration name is required.");
                   if (f.has(h.name)) throw new Error(`Duplicate tool declaration name: ${h.name}`);
                   f.set(h.name, g)
               }
           } return f
   }
   async processAfcStream(t) {
       var l, a, u;
       const f = (u = (a = (l = t.config) === null || l === void 0 ? void 0 : l.automaticFunctionCalling) === null || a === void 0 ? void 0 : a.maximumRemoteCalls) !== null && u !== void 0 ? u : Th;
       let m = !1,
           g = 0;
       const y = await this.initAfcToolsMap(t);
       return (function(h, v, S) {
           return Bt(this, arguments, function*() {
               for (var E, C, b, H, U, P; g < f;) {
                   m && (g++, m = !1);
                   const ee = yield oe(h.processParamsMaybeAddMcpUsage(S)), te = yield oe(h.generateContentStreamInternal(ee)), F = [], he = [];
                   try {
                       for (var K = !0, B = (C = void 0, Ot(te)), X; X = yield oe(B.next()), E = X.done, !E; K = !0) {
                           H = X.value, K = !1;
                           const W = H;
                           if (yield yield oe(W), W.candidates && (!((U = W.candidates[0]) === null || U === void 0) && U.content)) {
                               he.push(W.candidates[0].content);
                               for (const de of (P = W.candidates[0].content.parts) !== null && P !== void 0 ? P : [])
                                   if (g < f && de.functionCall) {
                                       if (!de.functionCall.name) throw new Error("Function call name was not returned by the model.");
                                       if (v.has(de.functionCall.name)) {
                                           const Ce = yield oe(v.get(de.functionCall.name).callTool([de.functionCall]));
                                           F.push(...Ce)
                                       } else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${v.keys()}, mising tool: ${de.functionCall.name}`)
                                   }
                           }
                       }
                   } catch (W) {
                       C = {
                           error: W
                       }
                   } finally {
                       try {
                           !K && !E && (b = B.return) && (yield oe(b.call(B)))
                       } finally {
                           if (C) throw C.error
                       }
                   }
                   if (F.length > 0) {
                       m = !0;
                       const W = new el;
                       W.candidates = [{
                           content: {
                               role: "user",
                               parts: F
                           }
                       }], yield yield oe(W);
                       const de = [];
                       de.push(...he), de.push({
                           role: "user",
                           parts: F
                       });
                       const Ce = qt(S.contents).concat(de);
                       S.contents = Ce
                   } else break
               }
           })
       })(this, y, t)
   }
   async generateContentInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = hh(this.apiClient, t);
           return g = J("{model}:generateContent", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = yh(v),
                   E = new el;
               return Object.assign(E, S), E
           })
       } else {
           const h = mh(this.apiClient, t);
           return g = J("{model}:generateContent", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = gh(v),
                   E = new el;
               return Object.assign(E, S), E
           })
       }
   }
   async generateContentStreamInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = hh(this.apiClient, t);
           return g = J("{model}:streamGenerateContent?alt=sse", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.requestStream({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }), m.then(function(S) {
               return Bt(this, arguments, function*() {
                   var E, C, b, H;
                   try {
                       for (var U = !0, P = Ot(S), K; K = yield oe(P.next()), E = K.done, !E; U = !0) {
                           H = K.value, U = !1;
                           const B = H,
                               X = yh(yield oe(B.json()));
                           X.sdkHttpResponse = {
                               headers: B.headers
                           };
                           const ee = new el;
                           Object.assign(ee, X), yield yield oe(ee)
                       }
                   } catch (B) {
                       C = {
                           error: B
                       }
                   } finally {
                       try {
                           !U && !E && (b = P.return) && (yield oe(b.call(P)))
                       } finally {
                           if (C) throw C.error
                       }
                   }
               })
           })
       } else {
           const h = mh(this.apiClient, t);
           return g = J("{model}:streamGenerateContent?alt=sse", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.requestStream({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }), m.then(function(S) {
               return Bt(this, arguments, function*() {
                   var E, C, b, H;
                   try {
                       for (var U = !0, P = Ot(S), K; K = yield oe(P.next()), E = K.done, !E; U = !0) {
                           H = K.value, U = !1;
                           const B = H,
                               X = gh(yield oe(B.json()));
                           X.sdkHttpResponse = {
                               headers: B.headers
                           };
                           const ee = new el;
                           Object.assign(ee, X), yield yield oe(ee)
                       }
                   } catch (B) {
                       C = {
                           error: B
                       }
                   } finally {
                       try {
                           !U && !E && (b = P.return) && (yield oe(b.call(P)))
                       } finally {
                           if (C) throw C.error
                       }
                   }
               })
           })
       }
   }
   async embedContent(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = C_(this.apiClient, t);
           return g = J("{model}:predict", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = R_(v),
                   E = new $m;
               return Object.assign(E, S), E
           })
       } else {
           const h = __(this.apiClient, t);
           return g = J("{model}:batchEmbedContents", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = A_(v),
                   E = new $m;
               return Object.assign(E, S), E
           })
       }
   }
   async generateImagesInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = H_(this.apiClient, t);
           return g = J("{model}:predict", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = V_(v),
                   E = new Wm;
               return Object.assign(E, S), E
           })
       } else {
           const h = G_(this.apiClient, t);
           return g = J("{model}:predict", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = q_(v),
                   E = new Wm;
               return Object.assign(E, S), E
           })
       }
   }
   async editImageInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) {
           const g = v_(this.apiClient, t);
           return f = J("{model}:predict", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json().then(h => {
               const v = h;
               return v.sdkHttpResponse = {
                   headers: y.headers
               }, v
           })), u.then(y => {
               const h = T_(y),
                   v = new NT;
               return Object.assign(v, h), v
           })
       } else throw new Error("This method is only supported by the Vertex AI.")
   }
   async upscaleImageInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) {
           const g = HC(this.apiClient, t);
           return f = J("{model}:predict", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json().then(h => {
               const v = h;
               return v.sdkHttpResponse = {
                   headers: y.headers
               }, v
           })), u.then(y => {
               const h = qC(y),
                   v = new xT;
               return Object.assign(v, h), v
           })
       } else throw new Error("This method is only supported by the Vertex AI.")
   }
   async recontextImage(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) {
           const g = yC(this.apiClient, t);
           return f = J("{model}:predict", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => {
               const h = vC(y),
                   v = new IT;
               return Object.assign(v, h), v
           })
       } else throw new Error("This method is only supported by the Vertex AI.")
   }
   async segmentImage(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) {
           const g = AC(this.apiClient, t);
           return f = J("{model}:predict", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => {
               const h = RC(y),
                   v = new DT;
               return Object.assign(v, h), v
           })
       } else throw new Error("This method is only supported by the Vertex AI.")
   }
   async get(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = tC(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json()), m.then(v => Eu(v))
       } else {
           const h = eC(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json()), m.then(v => Su(v))
       }
   }
   async listInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = cC(this.apiClient, t);
           return g = J("{models_url}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = dC(v),
                   E = new jm;
               return Object.assign(E, S), E
           })
       } else {
           const h = uC(this.apiClient, t);
           return g = J("{models_url}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = fC(v),
                   E = new jm;
               return Object.assign(E, S), E
           })
       }
   }
   async update(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = LC(this.apiClient, t);
           return g = J("{model}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "PATCH",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json()), m.then(v => Eu(v))
       } else {
           const h = UC(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "PATCH",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json()), m.then(v => Su(v))
       }
   }
   async delete(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = m_(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "DELETE",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = g_(v),
                   E = new eh;
               return Object.assign(E, S), E
           })
       } else {
           const h = p_(this.apiClient, t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "DELETE",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = h_(v),
                   E = new eh;
               return Object.assign(E, S), E
           })
       }
   }
   async countTokens(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = c_(this.apiClient, t);
           return g = J("{model}:countTokens", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = d_(v),
                   E = new th;
               return Object.assign(E, S), E
           })
       } else {
           const h = u_(this.apiClient, t);
           return g = J("{model}:countTokens", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = f_(v),
                   E = new th;
               return Object.assign(E, S), E
           })
       }
   }
   async computeTokens(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) {
           const g = n_(this.apiClient, t);
           return f = J("{model}:computeTokens", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json().then(h => {
               const v = h;
               return v.sdkHttpResponse = {
                   headers: y.headers
               }, v
           })), u.then(y => {
               const h = i_(y),
                   v = new bT;
               return Object.assign(v, h), v
           })
       } else throw new Error("This method is only supported by the Vertex AI.")
   }
   async generateVideosInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = F_(this.apiClient, t);
           return g = J("{model}:predictLongRunning", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json()), m.then(v => {
               const S = B_(v),
                   E = new Ia;
               return Object.assign(E, S), E
           })
       } else {
           const h = O_(this.apiClient, t);
           return g = J("{model}:predictLongRunning", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json()), m.then(v => {
               const S = P_(v),
                   E = new Ia;
               return Object.assign(E, S), E
           })
       }
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class DA extends hn {
   constructor(t) {
       super(), this.apiClient = t
   }
   async getVideosOperation(t) {
       const l = t.operation,
           a = t.config;
       if (l.name === void 0 || l.name === "") throw new Error("Operation name is required.");
       if (this.apiClient.isVertexAI()) {
           const u = l.name.split("/operations/")[0];
           let f;
           a && "httpOptions" in a && (f = a.httpOptions);
           const m = await this.fetchPredictVideosOperationInternal({
               operationName: l.name,
               resourceName: u,
               config: {
                   httpOptions: f
               }
           });
           return l._fromAPIResponse({
               apiResponse: m,
               _isVertexAI: !0
           })
       } else {
           const u = await this.getVideosOperationInternal({
               operationName: l.name,
               config: a
           });
           return l._fromAPIResponse({
               apiResponse: u,
               _isVertexAI: !1
           })
       }
   }
   async get(t) {
       const l = t.operation,
           a = t.config;
       if (l.name === void 0 || l.name === "") throw new Error("Operation name is required.");
       if (this.apiClient.isVertexAI()) {
           const u = l.name.split("/operations/")[0];
           let f;
           a && "httpOptions" in a && (f = a.httpOptions);
           const m = await this.fetchPredictVideosOperationInternal({
               operationName: l.name,
               resourceName: u,
               config: {
                   httpOptions: f
               }
           });
           return l._fromAPIResponse({
               apiResponse: m,
               _isVertexAI: !0
           })
       } else {
           const u = await this.getVideosOperationInternal({
               operationName: l.name,
               config: a
           });
           return l._fromAPIResponse({
               apiResponse: u,
               _isVertexAI: !1
           })
       }
   }
   async getVideosOperationInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = ET(t);
           return g = J("{operationName}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json()), m
       } else {
           const h = ST(t);
           return g = J("{operationName}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json()), m
       }
   }
   async fetchPredictVideosOperationInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) {
           const g = pT(t);
           return f = J("{resourceName}:fetchPredictOperation", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u
       } else throw new Error("This method is only supported by the Vertex AI.")
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function bA(i) {
   const t = {},
       l = r(i, ["data"]);
   if (l != null && c(t, ["data"], l), r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function wA(i) {
   const t = {},
       l = r(i, ["parts"]);
   if (l != null) {
       let u = l;
       Array.isArray(u) && (u = u.map(f => PA(f))), c(t, ["parts"], u)
   }
   const a = r(i, ["role"]);
   return a != null && c(t, ["role"], a), t
}

function UA(i, t, l) {
   const a = {},
       u = r(t, ["expireTime"]);
   l !== void 0 && u != null && c(l, ["expireTime"], u);
   const f = r(t, ["newSessionExpireTime"]);
   l !== void 0 && f != null && c(l, ["newSessionExpireTime"], f);
   const m = r(t, ["uses"]);
   l !== void 0 && m != null && c(l, ["uses"], m);
   const g = r(t, ["liveConnectConstraints"]);
   l !== void 0 && g != null && c(l, ["bidiGenerateContentSetup"], kA(i, g));
   const y = r(t, ["lockAdditionalFields"]);
   return l !== void 0 && y != null && c(l, ["fieldMask"], y), a
}

function LA(i, t) {
   const l = {},
       a = r(t, ["config"]);
   return a != null && c(l, ["config"], UA(i, a, l)), l
}

function GA(i) {
   const t = {};
   if (r(i, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
   const l = r(i, ["fileUri"]);
   l != null && c(t, ["fileUri"], l);
   const a = r(i, ["mimeType"]);
   return a != null && c(t, ["mimeType"], a), t
}

function HA(i) {
   const t = {},
       l = r(i, ["id"]);
   l != null && c(t, ["id"], l);
   const a = r(i, ["args"]);
   a != null && c(t, ["args"], a);
   const u = r(i, ["name"]);
   if (u != null && c(t, ["name"], u), r(i, ["partialArgs"]) !== void 0) throw new Error("partialArgs parameter is not supported in Gemini API.");
   if (r(i, ["willContinue"]) !== void 0) throw new Error("willContinue parameter is not supported in Gemini API.");
   return t
}

function qA(i) {
   const t = {};
   if (r(i, ["authConfig"]) !== void 0) throw new Error("authConfig parameter is not supported in Gemini API.");
   const l = r(i, ["enableWidget"]);
   return l != null && c(t, ["enableWidget"], l), t
}

function VA(i) {
   const t = {};
   if (r(i, ["excludeDomains"]) !== void 0) throw new Error("excludeDomains parameter is not supported in Gemini API.");
   if (r(i, ["blockingConfidence"]) !== void 0) throw new Error("blockingConfidence parameter is not supported in Gemini API.");
   const l = r(i, ["timeRangeFilter"]);
   return l != null && c(t, ["timeRangeFilter"], l), t
}

function zA(i, t) {
   const l = {},
       a = r(i, ["generationConfig"]);
   t !== void 0 && a != null && c(t, ["setup", "generationConfig"], a);
   const u = r(i, ["responseModalities"]);
   t !== void 0 && u != null && c(t, ["setup", "generationConfig", "responseModalities"], u);
   const f = r(i, ["temperature"]);
   t !== void 0 && f != null && c(t, ["setup", "generationConfig", "temperature"], f);
   const m = r(i, ["topP"]);
   t !== void 0 && m != null && c(t, ["setup", "generationConfig", "topP"], m);
   const g = r(i, ["topK"]);
   t !== void 0 && g != null && c(t, ["setup", "generationConfig", "topK"], g);
   const y = r(i, ["maxOutputTokens"]);
   t !== void 0 && y != null && c(t, ["setup", "generationConfig", "maxOutputTokens"], y);
   const h = r(i, ["mediaResolution"]);
   t !== void 0 && h != null && c(t, ["setup", "generationConfig", "mediaResolution"], h);
   const v = r(i, ["seed"]);
   t !== void 0 && v != null && c(t, ["setup", "generationConfig", "seed"], v);
   const S = r(i, ["speechConfig"]);
   t !== void 0 && S != null && c(t, ["setup", "generationConfig", "speechConfig"], Hu(S));
   const E = r(i, ["thinkingConfig"]);
   t !== void 0 && E != null && c(t, ["setup", "generationConfig", "thinkingConfig"], E);
   const C = r(i, ["enableAffectiveDialog"]);
   t !== void 0 && C != null && c(t, ["setup", "generationConfig", "enableAffectiveDialog"], C);
   const b = r(i, ["systemInstruction"]);
   t !== void 0 && b != null && c(t, ["setup", "systemInstruction"], wA(ot(b)));
   const H = r(i, ["tools"]);
   if (t !== void 0 && H != null) {
       let te = to(H);
       Array.isArray(te) && (te = te.map(F => OA(eo(F)))), c(t, ["setup", "tools"], te)
   }
   const U = r(i, ["sessionResumption"]);
   t !== void 0 && U != null && c(t, ["setup", "sessionResumption"], BA(U));
   const P = r(i, ["inputAudioTranscription"]);
   t !== void 0 && P != null && c(t, ["setup", "inputAudioTranscription"], P);
   const K = r(i, ["outputAudioTranscription"]);
   t !== void 0 && K != null && c(t, ["setup", "outputAudioTranscription"], K);
   const B = r(i, ["realtimeInputConfig"]);
   t !== void 0 && B != null && c(t, ["setup", "realtimeInputConfig"], B);
   const X = r(i, ["contextWindowCompression"]);
   t !== void 0 && X != null && c(t, ["setup", "contextWindowCompression"], X);
   const ee = r(i, ["proactivity"]);
   if (t !== void 0 && ee != null && c(t, ["setup", "proactivity"], ee), r(i, ["explicitVadSignal"]) !== void 0) throw new Error("explicitVadSignal parameter is not supported in Gemini API.");
   return l
}

function kA(i, t) {
   const l = {},
       a = r(t, ["model"]);
   a != null && c(l, ["setup", "model"], Te(i, a));
   const u = r(t, ["config"]);
   return u != null && c(l, ["config"], zA(u, l)), l
}

function PA(i) {
   const t = {},
       l = r(i, ["mediaResolution"]);
   l != null && c(t, ["mediaResolution"], l);
   const a = r(i, ["codeExecutionResult"]);
   a != null && c(t, ["codeExecutionResult"], a);
   const u = r(i, ["executableCode"]);
   u != null && c(t, ["executableCode"], u);
   const f = r(i, ["fileData"]);
   f != null && c(t, ["fileData"], GA(f));
   const m = r(i, ["functionCall"]);
   m != null && c(t, ["functionCall"], HA(m));
   const g = r(i, ["functionResponse"]);
   g != null && c(t, ["functionResponse"], g);
   const y = r(i, ["inlineData"]);
   y != null && c(t, ["inlineData"], bA(y));
   const h = r(i, ["text"]);
   h != null && c(t, ["text"], h);
   const v = r(i, ["thought"]);
   v != null && c(t, ["thought"], v);
   const S = r(i, ["thoughtSignature"]);
   S != null && c(t, ["thoughtSignature"], S);
   const E = r(i, ["videoMetadata"]);
   return E != null && c(t, ["videoMetadata"], E), t
}

function BA(i) {
   const t = {},
       l = r(i, ["handle"]);
   if (l != null && c(t, ["handle"], l), r(i, ["transparent"]) !== void 0) throw new Error("transparent parameter is not supported in Gemini API.");
   return t
}

function OA(i) {
   const t = {},
       l = r(i, ["functionDeclarations"]);
   if (l != null) {
       let v = l;
       Array.isArray(v) && (v = v.map(S => S)), c(t, ["functionDeclarations"], v)
   }
   if (r(i, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
   const a = r(i, ["googleSearchRetrieval"]);
   a != null && c(t, ["googleSearchRetrieval"], a);
   const u = r(i, ["computerUse"]);
   u != null && c(t, ["computerUse"], u);
   const f = r(i, ["fileSearch"]);
   f != null && c(t, ["fileSearch"], f);
   const m = r(i, ["codeExecution"]);
   if (m != null && c(t, ["codeExecution"], m), r(i, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
   const g = r(i, ["googleMaps"]);
   g != null && c(t, ["googleMaps"], qA(g));
   const y = r(i, ["googleSearch"]);
   y != null && c(t, ["googleSearch"], VA(y));
   const h = r(i, ["urlContext"]);
   return h != null && c(t, ["urlContext"], h), t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function FA(i) {
   const t = [];
   for (const l in i)
       if (Object.prototype.hasOwnProperty.call(i, l)) {
           const a = i[l];
           if (typeof a == "object" && a != null && Object.keys(a).length > 0) {
               const u = Object.keys(a).map(f => `${l}.${f}`);
               t.push(...u)
           } else t.push(l)
       } return t.join(",")
}

function YA(i, t) {
   let l = null;
   const a = i.bidiGenerateContentSetup;
   if (typeof a == "object" && a !== null && "setup" in a) {
       const f = a.setup;
       typeof f == "object" && f !== null ? (i.bidiGenerateContentSetup = f, l = f) : delete i.bidiGenerateContentSetup
   } else a !== void 0 && delete i.bidiGenerateContentSetup;
   const u = i.fieldMask;
   if (l) {
       const f = FA(l);
       if (Array.isArray(t == null ? void 0 : t.lockAdditionalFields) && (t == null ? void 0 : t.lockAdditionalFields.length) === 0) f ? i.fieldMask = f : delete i.fieldMask;
       else if (t != null && t.lockAdditionalFields && t.lockAdditionalFields.length > 0 && u !== null && Array.isArray(u) && u.length > 0) {
           const m = ["temperature", "topK", "topP", "maxOutputTokens", "responseModalities", "seed", "speechConfig"];
           let g = [];
           u.length > 0 && (g = u.map(h => m.includes(h) ? `generationConfig.${h}` : h));
           const y = [];
           f && y.push(f), g.length > 0 && y.push(...g), y.length > 0 ? i.fieldMask = y.join(",") : delete i.fieldMask
       } else delete i.fieldMask
   } else u !== null && Array.isArray(u) && u.length > 0 ? i.fieldMask = u.join(",") : delete i.fieldMask;
   return i
}
class JA extends hn {
   constructor(t) {
       super(), this.apiClient = t
   }
   async create(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");
       {
           const g = LA(this.apiClient, t);
           f = J("auth_tokens", g._url), m = g._query, delete g.config, delete g._url, delete g._query;
           const y = YA(g, t.config);
           return u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(y),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(h => h.json()), u.then(h => h)
       }
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function KA(i, t) {
   const l = {},
       a = r(i, ["force"]);
   return t !== void 0 && a != null && c(t, ["_query", "force"], a), l
}

function XA(i) {
   const t = {},
       l = r(i, ["name"]);
   l != null && c(t, ["_url", "name"], l);
   const a = r(i, ["config"]);
   return a != null && KA(a, t), t
}

function QA(i) {
   const t = {},
       l = r(i, ["name"]);
   return l != null && c(t, ["_url", "name"], l), t
}

function ZA(i, t) {
   const l = {},
       a = r(i, ["pageSize"]);
   t !== void 0 && a != null && c(t, ["_query", "pageSize"], a);
   const u = r(i, ["pageToken"]);
   return t !== void 0 && u != null && c(t, ["_query", "pageToken"], u), l
}

function $A(i) {
   const t = {},
       l = r(i, ["parent"]);
   l != null && c(t, ["_url", "parent"], l);
   const a = r(i, ["config"]);
   return a != null && ZA(a, t), t
}

function WA(i) {
   const t = {},
       l = r(i, ["sdkHttpResponse"]);
   l != null && c(t, ["sdkHttpResponse"], l);
   const a = r(i, ["nextPageToken"]);
   a != null && c(t, ["nextPageToken"], a);
   const u = r(i, ["documents"]);
   if (u != null) {
       let f = u;
       Array.isArray(f) && (f = f.map(m => m)), c(t, ["documents"], f)
   }
   return t
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class jA extends hn {
   constructor(t) {
       super(), this.apiClient = t, this.list = async l => new ci(mn.PAGED_ITEM_DOCUMENTS, a => this.listInternal({
           parent: l.parent,
           config: a.config
       }), await this.listInternal(l), l)
   }
   async get(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = QA(t);
           return f = J("{name}", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => y)
       }
   }
   async delete(t) {
       var l, a;
       let u = "",
           f = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const m = XA(t);
           u = J("{name}", m._url), f = m._query, delete m._url, delete m._query, await this.apiClient.request({
               path: u,
               queryParams: f,
               body: JSON.stringify(m),
               httpMethod: "DELETE",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           })
       }
   }
   async listInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = $A(t);
           return f = J("{parent}/documents", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => {
               const h = WA(y),
                   v = new wT;
               return Object.assign(v, h), v
           })
       }
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class eR extends hn {
   constructor(t, l = new jA(t)) {
       super(), this.apiClient = t, this.documents = l, this.list = async (a = {}) => new ci(mn.PAGED_ITEM_FILE_SEARCH_STORES, u => this.listInternal(u), await this.listInternal(a), a)
   }
   async uploadToFileSearchStore(t) {
       if (this.apiClient.isVertexAI()) throw new Error("Vertex AI does not support uploading files to a file search store.");
       return this.apiClient.uploadFileToFileSearchStore(t.fileSearchStoreName, t.file, t.config)
   }
   async create(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = FC(t);
           return f = J("fileSearchStores", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => y)
       }
   }
   async get(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = KC(t);
           return f = J("{name}", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => y)
       }
   }
   async delete(t) {
       var l, a;
       let u = "",
           f = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const m = JC(t);
           u = J("{name}", m._url), f = m._query, delete m._url, delete m._query, await this.apiClient.request({
               path: u,
               queryParams: f,
               body: JSON.stringify(m),
               httpMethod: "DELETE",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           })
       }
   }
   async listInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = jC(t);
           return f = J("fileSearchStores", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => {
               const h = eA(y),
                   v = new UT;
               return Object.assign(v, h), v
           })
       }
   }
   async uploadToFileSearchStoreInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = tA(t);
           return f = J("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => {
               const h = nA(y),
                   v = new LT;
               return Object.assign(v, h), v
           })
       }
   }
   async importFile(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = ZC(t);
           return f = J("{file_search_store_name}:importFile", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json()), u.then(y => {
               const h = QC(y),
                   v = new bu;
               return Object.assign(v, h), v
           })
       }
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
let ug = function() {
   const {
       crypto: i
   } = globalThis;
   if (i != null && i.randomUUID) return ug = i.randomUUID.bind(i), i.randomUUID();
   const t = new Uint8Array(1),
       l = i ? () => i.getRandomValues(t)[0] : () => Math.random() * 255 & 255;
   return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, a => (+a ^ l() & 15 >> +a / 4).toString(16))
};
const tR = () => ug();
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function Cu(i) {
   return typeof i == "object" && i !== null && ("name" in i && i.name === "AbortError" || "message" in i && String(i.message).includes("FetchRequestCanceledException"))
}
const Au = i => {
   if (i instanceof Error) return i;
   if (typeof i == "object" && i !== null) {
       try {
           if (Object.prototype.toString.call(i) === "[object Error]") {
               const t = new Error(i.message, i.cause ? {
                   cause: i.cause
               } : {});
               return i.stack && (t.stack = i.stack), i.cause && !t.cause && (t.cause = i.cause), i.name && (t.name = i.name), t
           }
       } catch {}
       try {
           return new Error(JSON.stringify(i))
       } catch {}
   }
   return new Error(i)
};
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class Vt extends Error {}
class rt extends Vt {
   constructor(t, l, a, u) {
       super(`${rt.makeMessage(t,l,a)}`), this.status = t, this.headers = u, this.error = l
   }
   static makeMessage(t, l, a) {
       const u = l != null && l.message ? typeof l.message == "string" ? l.message : JSON.stringify(l.message) : l ? JSON.stringify(l) : a;
       return t && u ? `${t} ${u}` : t ? `${t} status code (no body)` : u || "(no status code or body)"
   }
   static generate(t, l, a, u) {
       if (!t || !u) return new Va({
           message: a,
           cause: Au(l)
       });
       const f = l;
       return t === 400 ? new fg(t, f, a, u) : t === 401 ? new dg(t, f, a, u) : t === 403 ? new pg(t, f, a, u) : t === 404 ? new mg(t, f, a, u) : t === 409 ? new hg(t, f, a, u) : t === 422 ? new gg(t, f, a, u) : t === 429 ? new yg(t, f, a, u) : t >= 500 ? new vg(t, f, a, u) : new rt(t, f, a, u)
   }
}
class Ru extends rt {
   constructor({
       message: t
   } = {}) {
       super(void 0, void 0, t || "Request was aborted.", void 0)
   }
}
class Va extends rt {
   constructor({
       message: t,
       cause: l
   }) {
       super(void 0, void 0, t || "Connection error.", void 0), l && (this.cause = l)
   }
}
class cg extends Va {
   constructor({
       message: t
   } = {}) {
       super({
           message: t ?? "Request timed out."
       })
   }
}
class fg extends rt {}
class dg extends rt {}
class pg extends rt {}
class mg extends rt {}
class hg extends rt {}
class gg extends rt {}
class yg extends rt {}
class vg extends rt {}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const nR = /^[a-z][a-z0-9+.-]*:/i,
   iR = i => nR.test(i);
let Mu = i => (Mu = Array.isArray, Mu(i));
const oR = Mu;
let lR = oR;
const Ch = lR;

function aR(i) {
   if (!i) return !0;
   for (const t in i) return !1;
   return !0
}

function sR(i, t) {
   return Object.prototype.hasOwnProperty.call(i, t)
}
const rR = (i, t) => {
       if (typeof t != "number" || !Number.isInteger(t)) throw new Vt(`${i} must be an integer`);
       if (t < 0) throw new Vt(`${i} must be a positive integer`);
       return t
   },
   uR = i => {
       try {
           return JSON.parse(i)
       } catch {
           return
       }
   };
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const cR = i => new Promise(t => setTimeout(t, i));
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Qi = "0.0.1";
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function fR() {
   return typeof Deno < "u" && Deno.build != null ? "deno" : typeof EdgeRuntime < "u" ? "edge" : Object.prototype.toString.call(typeof globalThis.process < "u" ? globalThis.process : 0) === "[object process]" ? "node" : "unknown"
}
const dR = () => {
   var i, t, l, a, u;
   const f = fR();
   if (f === "deno") return {
       "X-Stainless-Lang": "js",
       "X-Stainless-Package-Version": Qi,
       "X-Stainless-OS": Rh(Deno.build.os),
       "X-Stainless-Arch": Ah(Deno.build.arch),
       "X-Stainless-Runtime": "deno",
       "X-Stainless-Runtime-Version": typeof Deno.version == "string" ? Deno.version : (t = (i = Deno.version) === null || i === void 0 ? void 0 : i.deno) !== null && t !== void 0 ? t : "unknown"
   };
   if (typeof EdgeRuntime < "u") return {
       "X-Stainless-Lang": "js",
       "X-Stainless-Package-Version": Qi,
       "X-Stainless-OS": "Unknown",
       "X-Stainless-Arch": `other:${EdgeRuntime}`,
       "X-Stainless-Runtime": "edge",
       "X-Stainless-Runtime-Version": globalThis.process.version
   };
   if (f === "node") return {
       "X-Stainless-Lang": "js",
       "X-Stainless-Package-Version": Qi,
       "X-Stainless-OS": Rh((l = globalThis.process.platform) !== null && l !== void 0 ? l : "unknown"),
       "X-Stainless-Arch": Ah((a = globalThis.process.arch) !== null && a !== void 0 ? a : "unknown"),
       "X-Stainless-Runtime": "node",
       "X-Stainless-Runtime-Version": (u = globalThis.process.version) !== null && u !== void 0 ? u : "unknown"
   };
   const m = pR();
   return m ? {
       "X-Stainless-Lang": "js",
       "X-Stainless-Package-Version": Qi,
       "X-Stainless-OS": "Unknown",
       "X-Stainless-Arch": "unknown",
       "X-Stainless-Runtime": `browser:${m.browser}`,
       "X-Stainless-Runtime-Version": m.version
   } : {
       "X-Stainless-Lang": "js",
       "X-Stainless-Package-Version": Qi,
       "X-Stainless-OS": "Unknown",
       "X-Stainless-Arch": "unknown",
       "X-Stainless-Runtime": "unknown",
       "X-Stainless-Runtime-Version": "unknown"
   }
};

function pR() {
   if (typeof navigator > "u" || !navigator) return null;
   const i = [{
       key: "edge",
       pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
   }, {
       key: "ie",
       pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
   }, {
       key: "ie",
       pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
   }, {
       key: "chrome",
       pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
   }, {
       key: "firefox",
       pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
   }, {
       key: "safari",
       pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
   }];
   for (const {
           key: t,
           pattern: l
       }
       of i) {
       const a = l.exec(navigator.userAgent);
       if (a) {
           const u = a[1] || 0,
               f = a[2] || 0,
               m = a[3] || 0;
           return {
               browser: t,
               version: `${u}.${f}.${m}`
           }
       }
   }
   return null
}
const Ah = i => i === "x32" ? "x32" : i === "x86_64" || i === "x64" ? "x64" : i === "arm" ? "arm" : i === "aarch64" || i === "arm64" ? "arm64" : i ? `other:${i}` : "unknown",
   Rh = i => (i = i.toLowerCase(), i.includes("ios") ? "iOS" : i === "android" ? "Android" : i === "darwin" ? "MacOS" : i === "win32" ? "Windows" : i === "freebsd" ? "FreeBSD" : i === "openbsd" ? "OpenBSD" : i === "linux" ? "Linux" : i ? `Other:${i}` : "Unknown");
let Ea;
const mR = () => Ea ?? (Ea = dR());
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function hR() {
   if (typeof fetch < "u") return fetch;
   throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")
}

function Tg(...i) {
   const t = globalThis.ReadableStream;
   if (typeof t > "u") throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
   return new t(...i)
}

function gR(i) {
   let t = Symbol.asyncIterator in i ? i[Symbol.asyncIterator]() : i[Symbol.iterator]();
   return Tg({
       start() {},
       async pull(l) {
           const {
               done: a,
               value: u
           } = await t.next();
           a ? l.close() : l.enqueue(u)
       },
       async cancel() {
           var l;
           await ((l = t.return) === null || l === void 0 ? void 0 : l.call(t))
       }
   })
}

function Sg(i) {
   if (i[Symbol.asyncIterator]) return i;
   const t = i.getReader();
   return {
       async next() {
           try {
               const l = await t.read();
               return l != null && l.done && t.releaseLock(), l
           } catch (l) {
               throw t.releaseLock(), l
           }
       },
       async return () {
           const l = t.cancel();
           return t.releaseLock(), await l, {
               done: !0,
               value: void 0
           }
       },
       [Symbol.asyncIterator]() {
           return this
       }
   }
}
async function yR(i) {
   var t, l;
   if (i === null || typeof i != "object") return;
   if (i[Symbol.asyncIterator]) {
       await ((l = (t = i[Symbol.asyncIterator]()).return) === null || l === void 0 ? void 0 : l.call(t));
       return
   }
   const a = i.getReader(),
       u = a.cancel();
   a.releaseLock(), await u
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const vR = ({
   headers: i,
   body: t
}) => ({
   bodyHeaders: {
       "content-type": "application/json"
   },
   body: JSON.stringify(t)
});
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Eg = () => {
   var i;
   if (typeof File > "u") {
       const {
           process: t
       } = globalThis, l = typeof((i = t == null ? void 0 : t.versions) === null || i === void 0 ? void 0 : i.node) == "string" && parseInt(t.versions.node.split(".")) < 20;
       throw new Error("`File` is not defined as a global, which is required for file uploads." + (l ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""))
   }
};

function fu(i, t, l) {
   return Eg(), new File(i, t ?? "unknown_file", l)
}

function TR(i) {
   return (typeof i == "object" && i !== null && ("name" in i && i.name && String(i.name) || "url" in i && i.url && String(i.url) || "filename" in i && i.filename && String(i.filename) || "path" in i && i.path && String(i.path)) || "").split(/[\\/]/).pop() || void 0
}
const SR = i => i != null && typeof i == "object" && typeof i[Symbol.asyncIterator] == "function";
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const _g = i => i != null && typeof i == "object" && typeof i.size == "number" && typeof i.type == "string" && typeof i.text == "function" && typeof i.slice == "function" && typeof i.arrayBuffer == "function",
   ER = i => i != null && typeof i == "object" && typeof i.name == "string" && typeof i.lastModified == "number" && _g(i),
   _R = i => i != null && typeof i == "object" && typeof i.url == "string" && typeof i.blob == "function";
async function CR(i, t, l) {
   if (Eg(), i = await i, ER(i)) return i instanceof File ? i : fu([await i.arrayBuffer()], i.name);
   if (_R(i)) {
       const u = await i.blob();
       return t || (t = new URL(i.url).pathname.split(/[\\/]/).pop()), fu(await Nu(u), t, l)
   }
   const a = await Nu(i);
   if (t || (t = TR(i)), !(l != null && l.type)) {
       const u = a.find(f => typeof f == "object" && "type" in f && f.type);
       typeof u == "string" && (l = Object.assign(Object.assign({}, l), {
           type: u
       }))
   }
   return fu(a, t, l)
}
async function Nu(i) {
   var t, l, a, u, f;
   let m = [];
   if (typeof i == "string" || ArrayBuffer.isView(i) || i instanceof ArrayBuffer) m.push(i);
   else if (_g(i)) m.push(i instanceof Blob ? i : await i.arrayBuffer());
   else if (SR(i)) try {
       for (var g = !0, y = Ot(i), h; h = await y.next(), t = h.done, !t; g = !0) {
           u = h.value, g = !1;
           const v = u;
           m.push(...await Nu(v))
       }
   } catch (v) {
       l = {
           error: v
       }
   } finally {
       try {
           !g && !t && (a = y.return) && await a.call(y)
       } finally {
           if (l) throw l.error
       }
   } else {
       const v = (f = i == null ? void 0 : i.constructor) === null || f === void 0 ? void 0 : f.name;
       throw new Error(`Unexpected data type: ${typeof i}${v?`; constructor: ${v}`:""}${AR(i)}`)
   }
   return m
}

function AR(i) {
   return typeof i != "object" || i === null ? "" : `; props: [${Object.getOwnPropertyNames(i).map(l=>`"${l}"`).join(", ")}]`
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class Cg {
   constructor(t) {
       this._client = t
   }
}
Cg._key = [];
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function Ag(i) {
   return i.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent)
}
const Mh = Object.freeze(Object.create(null)),
   RR = (i = Ag) => (function(l, ...a) {
       if (l.length === 1) return l[0];
       let u = !1;
       const f = [],
           m = l.reduce((v, S, E) => {
               var C, b, H;
               /[?#]/.test(S) && (u = !0);
               const U = a[E];
               let P = (u ? encodeURIComponent : i)("" + U);
               return E !== a.length && (U == null || typeof U == "object" && U.toString === ((H = Object.getPrototypeOf((b = Object.getPrototypeOf((C = U.hasOwnProperty) !== null && C !== void 0 ? C : Mh)) !== null && b !== void 0 ? b : Mh)) === null || H === void 0 ? void 0 : H.toString)) && (P = U + "", f.push({
                   start: v.length + S.length,
                   length: P.length,
                   error: `Value of type ${Object.prototype.toString.call(U).slice(8,-1)} is not a valid path parameter`
               })), v + S + (E === a.length ? "" : P)
           }, ""),
           g = m.split(/[?#]/, 1)[0],
           y = new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)", "gi");
       let h;
       for (;
           (h = y.exec(g)) !== null;) f.push({
           start: h.index,
           length: h[0].length,
           error: `Value "${h[0]}" can't be safely passed as a path parameter`
       });
       if (f.sort((v, S) => v.start - S.start), f.length > 0) {
           let v = 0;
           const S = f.reduce((E, C) => {
               const b = " ".repeat(C.start - v),
                   H = "^".repeat(C.length);
               return v = C.start + C.length, E + b + H
           }, "");
           throw new Vt(`Path parameters result in path with invalid segments:
${f.map(E=>E.error).join(`
`)}
${m}
${S}`)
       }
       return m
   }),
   _a = RR(Ag);
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class Rg extends Cg {
   create(t, l) {
       var a;
       const {
           api_version: u = this._client.apiVersion
       } = t, f = ba(t, ["api_version"]);
       if ("model" in f && "agent_config" in f) throw new Vt("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");
       if ("agent" in f && "generation_config" in f) throw new Vt("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");
       return this._client.post(_a`/${u}/interactions`, Object.assign(Object.assign({
           body: f
       }, l), {
           stream: (a = t.stream) !== null && a !== void 0 ? a : !1
       }))
   }
   delete(t, l = {}, a) {
       const {
           api_version: u = this._client.apiVersion
       } = l ?? {};
       return this._client.delete(_a`/${u}/interactions/${t}`, a)
   }
   cancel(t, l = {}, a) {
       const {
           api_version: u = this._client.apiVersion
       } = l ?? {};
       return this._client.post(_a`/${u}/interactions/${t}/cancel`, a)
   }
   get(t, l = {}, a) {
       var u;
       const f = l ?? {},
           {
               api_version: m = this._client.apiVersion
           } = f,
           g = ba(f, ["api_version"]);
       return this._client.get(_a`/${m}/interactions/${t}`, Object.assign(Object.assign({
           query: g
       }, a), {
           stream: (u = l == null ? void 0 : l.stream) !== null && u !== void 0 ? u : !1
       }))
   }
}
Rg._key = Object.freeze(["interactions"]);
class Mg extends Rg {}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function MR(i) {
   let t = 0;
   for (const u of i) t += u.length;
   const l = new Uint8Array(t);
   let a = 0;
   for (const u of i) l.set(u, a), a += u.length;
   return l
}
let Ca;

function Vu(i) {
   let t;
   return (Ca ?? (t = new globalThis.TextEncoder, Ca = t.encode.bind(t)))(i)
}
let Aa;

function Nh(i) {
   let t;
   return (Aa ?? (t = new globalThis.TextDecoder, Aa = t.decode.bind(t)))(i)
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class za {
   constructor() {
       this.buffer = new Uint8Array, this.carriageReturnIndex = null
   }
   decode(t) {
       if (t == null) return [];
       const l = t instanceof ArrayBuffer ? new Uint8Array(t) : typeof t == "string" ? Vu(t) : t;
       this.buffer = MR([this.buffer, l]);
       const a = [];
       let u;
       for (;
           (u = NR(this.buffer, this.carriageReturnIndex)) != null;) {
           if (u.carriage && this.carriageReturnIndex == null) {
               this.carriageReturnIndex = u.index;
               continue
           }
           if (this.carriageReturnIndex != null && (u.index !== this.carriageReturnIndex + 1 || u.carriage)) {
               a.push(Nh(this.buffer.subarray(0, this.carriageReturnIndex - 1))), this.buffer = this.buffer.subarray(this.carriageReturnIndex), this.carriageReturnIndex = null;
               continue
           }
           const f = this.carriageReturnIndex !== null ? u.preceding - 1 : u.preceding,
               m = Nh(this.buffer.subarray(0, f));
           a.push(m), this.buffer = this.buffer.subarray(u.index), this.carriageReturnIndex = null
       }
       return a
   }
   flush() {
       return this.buffer.length ? this.decode(`
`) : []
   }
}
za.NEWLINE_CHARS = new Set([`
`, "\r"]);
za.NEWLINE_REGEXP = /\r\n|[\n\r]/g;

function NR(i, t) {
   for (let u = t ?? 0; u < i.length; u++) {
       if (i[u] === 10) return {
           preceding: u,
           index: u + 1,
           carriage: !1
       };
       if (i[u] === 13) return {
           preceding: u,
           index: u + 1,
           carriage: !0
       }
   }
   return null
}

function xR(i) {
   for (let a = 0; a < i.length - 1; a++) {
       if (i[a] === 10 && i[a + 1] === 10 || i[a] === 13 && i[a + 1] === 13) return a + 2;
       if (i[a] === 13 && i[a + 1] === 10 && a + 3 < i.length && i[a + 2] === 13 && i[a + 3] === 10) return a + 4
   }
   return -1
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const wa = {
       off: 0,
       error: 200,
       warn: 300,
       info: 400,
       debug: 500
   },
   xh = (i, t, l) => {
       if (i) {
           if (sR(wa, i)) return i;
           st(l).warn(`${t} was set to ${JSON.stringify(i)}, expected one of ${JSON.stringify(Object.keys(wa))}`)
       }
   };

function tl() {}

function Ra(i, t, l) {
   return !t || wa[i] > wa[l] ? tl : t[i].bind(t)
}
const IR = {
   error: tl,
   warn: tl,
   info: tl,
   debug: tl
};
let Ih = new WeakMap;

function st(i) {
   var t;
   const l = i.logger,
       a = (t = i.logLevel) !== null && t !== void 0 ? t : "off";
   if (!l) return IR;
   const u = Ih.get(l);
   if (u && u[0] === a) return u[1];
   const f = {
       error: Ra("error", l, a),
       warn: Ra("warn", l, a),
       info: Ra("info", l, a),
       debug: Ra("debug", l, a)
   };
   return Ih.set(l, [a, f]), f
}
const ui = i => (i.options && (i.options = Object.assign({}, i.options), delete i.options.headers), i.headers && (i.headers = Object.fromEntries((i.headers instanceof Headers ? [...i.headers] : Object.entries(i.headers)).map(([t, l]) => [t, t.toLowerCase() === "x-goog-api-key" || t.toLowerCase() === "authorization" || t.toLowerCase() === "cookie" || t.toLowerCase() === "set-cookie" ? "***" : l]))), "retryOfRequestLogID" in i && (i.retryOfRequestLogID && (i.retryOf = i.retryOfRequestLogID), delete i.retryOfRequestLogID), i);
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class $i {
   constructor(t, l, a) {
       this.iterator = t, this.controller = l, this.client = a
   }
   static fromSSEResponse(t, l, a) {
       let u = !1;
       const f = a ? st(a) : console;

       function m() {
           return Bt(this, arguments, function*() {
               var y, h, v, S;
               if (u) throw new Vt("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
               u = !0;
               let E = !1;
               try {
                   try {
                       for (var C = !0, b = Ot(DR(t, l)), H; H = yield oe(b.next()), y = H.done, !y; C = !0) {
                           S = H.value, C = !1;
                           const U = S;
                           if (!E)
                               if (U.data.startsWith("[DONE]")) {
                                   E = !0;
                                   continue
                               } else try {
                                   yield yield oe(JSON.parse(U.data))
                               } catch (P) {
                                   throw f.error("Could not parse message into JSON:", U.data), f.error("From chunk:", U.raw), P
                               }
                       }
                   } catch (U) {
                       h = {
                           error: U
                       }
                   } finally {
                       try {
                           !C && !y && (v = b.return) && (yield oe(v.call(b)))
                       } finally {
                           if (h) throw h.error
                       }
                   }
                   E = !0
               } catch (U) {
                   if (Cu(U)) return yield oe(void 0);
                   throw U
               } finally {
                   E || l.abort()
               }
           })
       }
       return new $i(m, l, a)
   }
   static fromReadableStream(t, l, a) {
       let u = !1;

       function f() {
           return Bt(this, arguments, function*() {
               var y, h, v, S;
               const E = new za,
                   C = Sg(t);
               try {
                   for (var b = !0, H = Ot(C), U; U = yield oe(H.next()), y = U.done, !y; b = !0) {
                       S = U.value, b = !1;
                       const P = S;
                       for (const K of E.decode(P)) yield yield oe(K)
                   }
               } catch (P) {
                   h = {
                       error: P
                   }
               } finally {
                   try {
                       !b && !y && (v = H.return) && (yield oe(v.call(H)))
                   } finally {
                       if (h) throw h.error
                   }
               }
               for (const P of E.flush()) yield yield oe(P)
           })
       }

       function m() {
           return Bt(this, arguments, function*() {
               var y, h, v, S;
               if (u) throw new Vt("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
               u = !0;
               let E = !1;
               try {
                   try {
                       for (var C = !0, b = Ot(f()), H; H = yield oe(b.next()), y = H.done, !y; C = !0) {
                           S = H.value, C = !1;
                           const U = S;
                           E || U && (yield yield oe(JSON.parse(U)))
                       }
                   } catch (U) {
                       h = {
                           error: U
                       }
                   } finally {
                       try {
                           !C && !y && (v = b.return) && (yield oe(v.call(b)))
                       } finally {
                           if (h) throw h.error
                       }
                   }
                   E = !0
               } catch (U) {
                   if (Cu(U)) return yield oe(void 0);
                   throw U
               } finally {
                   E || l.abort()
               }
           })
       }
       return new $i(m, l, a)
   } [Symbol.asyncIterator]() {
       return this.iterator()
   }
   tee() {
       const t = [],
           l = [],
           a = this.iterator(),
           u = f => ({
               next: () => {
                   if (f.length === 0) {
                       const m = a.next();
                       t.push(m), l.push(m)
                   }
                   return f.shift()
               }
           });
       return [new $i(() => u(t), this.controller, this.client), new $i(() => u(l), this.controller, this.client)]
   }
   toReadableStream() {
       const t = this;
       let l;
       return Tg({
           async start() {
               l = t[Symbol.asyncIterator]()
           },
           async pull(a) {
               try {
                   const {
                       value: u,
                       done: f
                   } = await l.next();
                   if (f) return a.close();
                   const m = Vu(JSON.stringify(u) + `
`);
                   a.enqueue(m)
               } catch (u) {
                   a.error(u)
               }
           },
           async cancel() {
               var a;
               await ((a = l.return) === null || a === void 0 ? void 0 : a.call(l))
           }
       })
   }
}

function DR(i, t) {
   return Bt(this, arguments, function*() {
       var a, u, f, m;
       if (!i.body) throw t.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative" ? new Vt("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api") : new Vt("Attempted to iterate over a response with no body");
       const g = new wR,
           y = new za,
           h = Sg(i.body);
       try {
           for (var v = !0, S = Ot(bR(h)), E; E = yield oe(S.next()), a = E.done, !a; v = !0) {
               m = E.value, v = !1;
               const C = m;
               for (const b of y.decode(C)) {
                   const H = g.decode(b);
                   H && (yield yield oe(H))
               }
           }
       } catch (C) {
           u = {
               error: C
           }
       } finally {
           try {
               !v && !a && (f = S.return) && (yield oe(f.call(S)))
           } finally {
               if (u) throw u.error
           }
       }
       for (const C of y.flush()) {
           const b = g.decode(C);
           b && (yield yield oe(b))
       }
   })
}

function bR(i) {
   return Bt(this, arguments, function*() {
       var l, a, u, f;
       let m = new Uint8Array;
       try {
           for (var g = !0, y = Ot(i), h; h = yield oe(y.next()), l = h.done, !l; g = !0) {
               f = h.value, g = !1;
               const v = f;
               if (v == null) continue;
               const S = v instanceof ArrayBuffer ? new Uint8Array(v) : typeof v == "string" ? Vu(v) : v;
               let E = new Uint8Array(m.length + S.length);
               E.set(m), E.set(S, m.length), m = E;
               let C;
               for (;
                   (C = xR(m)) !== -1;) yield yield oe(m.slice(0, C)), m = m.slice(C)
           }
       } catch (v) {
           a = {
               error: v
           }
       } finally {
           try {
               !g && !l && (u = y.return) && (yield oe(u.call(y)))
           } finally {
               if (a) throw a.error
           }
       }
       m.length > 0 && (yield yield oe(m))
   })
}
class wR {
   constructor() {
       this.event = null, this.data = [], this.chunks = []
   }
   decode(t) {
       if (t.endsWith("\r") && (t = t.substring(0, t.length - 1)), !t) {
           if (!this.event && !this.data.length) return null;
           const f = {
               event: this.event,
               data: this.data.join(`
`),
               raw: this.chunks
           };
           return this.event = null, this.data = [], this.chunks = [], f
       }
       if (this.chunks.push(t), t.startsWith(":")) return null;
       let [l, a, u] = UR(t, ":");
       return u.startsWith(" ") && (u = u.substring(1)), l === "event" ? this.event = u : l === "data" && this.data.push(u), null
   }
}

function UR(i, t) {
   const l = i.indexOf(t);
   return l !== -1 ? [i.substring(0, l), t, i.substring(l + t.length)] : [i, "", ""]
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
async function LR(i, t) {
   const {
       response: l,
       requestLogID: a,
       retryOfRequestLogID: u,
       startTime: f
   } = t, m = await (async () => {
       var g;
       if (t.options.stream) return st(i).debug("response", l.status, l.url, l.headers, l.body), t.options.__streamClass ? t.options.__streamClass.fromSSEResponse(l, t.controller, i) : $i.fromSSEResponse(l, t.controller, i);
       if (l.status === 204) return null;
       if (t.options.__binaryResponse) return l;
       const y = l.headers.get("content-type"),
           h = (g = y == null ? void 0 : y.split(";")[0]) === null || g === void 0 ? void 0 : g.trim();
       return (h == null ? void 0 : h.includes("application/json")) || (h == null ? void 0 : h.endsWith("+json")) ? await l.json() : await l.text()
   })();
   return st(i).debug(`[${a}] response parsed`, ui({
       retryOfRequestLogID: u,
       url: l.url,
       status: l.status,
       body: m,
       durationMs: Date.now() - f
   })), m
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class zu extends Promise {
   constructor(t, l, a = LR) {
       super(u => {
           u(null)
       }), this.responsePromise = l, this.parseResponse = a, this.client = t
   }
   _thenUnwrap(t) {
       return new zu(this.client, this.responsePromise, async (l, a) => t(await this.parseResponse(l, a), a))
   }
   asResponse() {
       return this.responsePromise.then(t => t.response)
   }
   async withResponse() {
       const [t, l] = await Promise.all([this.parse(), this.asResponse()]);
       return {
           data: t,
           response: l
       }
   }
   parse() {
       return this.parsedPromise || (this.parsedPromise = this.responsePromise.then(t => this.parseResponse(this.client, t))), this.parsedPromise
   }
   then(t, l) {
       return this.parse().then(t, l)
   } catch (t) {
       return this.parse().catch(t)
   } finally(t) {
       return this.parse().finally(t)
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Ng = Symbol("brand.privateNullableHeaders");

function* GR(i) {
   if (!i) return;
   if (Ng in i) {
       const {
           values: a,
           nulls: u
       } = i;
       yield* a.entries();
       for (const f of u) yield [f, null];
       return
   }
   let t = !1,
       l;
   i instanceof Headers ? l = i.entries() : Ch(i) ? l = i : (t = !0, l = Object.entries(i ?? {}));
   for (let a of l) {
       const u = a[0];
       if (typeof u != "string") throw new TypeError("expected header name to be a string");
       const f = Ch(a[1]) ? a[1] : [a[1]];
       let m = !1;
       for (const g of f) g !== void 0 && (t && !m && (m = !0, yield [u, null]), yield [u, g])
   }
}
const du = i => {
   const t = new Headers,
       l = new Set;
   for (const a of i) {
       const u = new Set;
       for (const [f, m] of GR(a)) {
           const g = f.toLowerCase();
           u.has(g) || (t.delete(f), u.add(g)), m === null ? (t.delete(f), l.add(g)) : (t.append(f, m), l.delete(g))
       }
   }
   return {
       [Ng]: !0,
       values: t,
       nulls: l
   }
};
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const pu = i => {
   var t, l, a, u, f, m;
   if (typeof globalThis.process < "u") return (a = (l = (t = sT) === null || t === void 0 ? void 0 : t[i]) === null || l === void 0 ? void 0 : l.trim()) !== null && a !== void 0 ? a : void 0;
   if (typeof globalThis.Deno < "u") return (m = (f = (u = globalThis.Deno.env) === null || u === void 0 ? void 0 : u.get) === null || f === void 0 ? void 0 : f.call(u, i)) === null || m === void 0 ? void 0 : m.trim()
};
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
var xg;
class ka {
   constructor(t) {
       var l, a, u, f, m, g, y, h = t === void 0 ? {} : t,
           {
               baseURL: v = pu("GEMINI_NEXT_GEN_API_BASE_URL"),
               apiKey: S = (l = pu("GEMINI_API_KEY")) !== null && l !== void 0 ? l : null,
               apiVersion: E = "v1beta"
           } = h,
           C = ba(h, ["baseURL", "apiKey", "apiVersion"]);
       const b = Object.assign(Object.assign({
           apiKey: S,
           apiVersion: E
       }, C), {
           baseURL: v || "https://generativelanguage.googleapis.com"
       });
       this.baseURL = b.baseURL, this.timeout = (a = b.timeout) !== null && a !== void 0 ? a : ka.DEFAULT_TIMEOUT, this.logger = (u = b.logger) !== null && u !== void 0 ? u : console;
       const H = "warn";
       this.logLevel = H, this.logLevel = (m = (f = xh(b.logLevel, "ClientOptions.logLevel", this)) !== null && f !== void 0 ? f : xh(pu("GEMINI_NEXT_GEN_API_LOG"), "process.env['GEMINI_NEXT_GEN_API_LOG']", this)) !== null && m !== void 0 ? m : H, this.fetchOptions = b.fetchOptions, this.maxRetries = (g = b.maxRetries) !== null && g !== void 0 ? g : 2, this.fetch = (y = b.fetch) !== null && y !== void 0 ? y : hR(), this.encoder = vR, this._options = b, this.apiKey = S, this.apiVersion = E
   }
   withOptions(t) {
       return new this.constructor(Object.assign(Object.assign(Object.assign({}, this._options), {
           baseURL: this.baseURL,
           maxRetries: this.maxRetries,
           timeout: this.timeout,
           logger: this.logger,
           logLevel: this.logLevel,
           fetch: this.fetch,
           fetchOptions: this.fetchOptions,
           apiKey: this.apiKey,
           apiVersion: this.apiVersion
       }), t))
   }
   baseURLOverridden() {
       return this.baseURL !== "https://generativelanguage.googleapis.com"
   }
   defaultQuery() {
       return this._options.defaultQuery
   }
   validateHeaders({
       values: t,
       nulls: l
   }) {
       if (!(this.apiKey && t.get("x-goog-api-key")) && !l.has("x-goog-api-key")) throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')
   }
   async authHeaders(t) {
       if (this.apiKey != null) return du([{
           "x-goog-api-key": this.apiKey
       }])
   }
   stringifyQuery(t) {
       return Object.entries(t).filter(([l, a]) => typeof a < "u").map(([l, a]) => {
           if (typeof a == "string" || typeof a == "number" || typeof a == "boolean") return `${encodeURIComponent(l)}=${encodeURIComponent(a)}`;
           if (a === null) return `${encodeURIComponent(l)}=`;
           throw new Vt(`Cannot stringify type ${typeof a}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)
       }).join("&")
   }
   getUserAgent() {
       return `${this.constructor.name}/JS ${Qi}`
   }
   defaultIdempotencyKey() {
       return `stainless-node-retry-${tR()}`
   }
   makeStatusError(t, l, a, u) {
       return rt.generate(t, l, a, u)
   }
   buildURL(t, l, a) {
       const u = !this.baseURLOverridden() && a || this.baseURL,
           f = iR(t) ? new URL(t) : new URL(u + (u.endsWith("/") && t.startsWith("/") ? t.slice(1) : t)),
           m = this.defaultQuery();
       return aR(m) || (l = Object.assign(Object.assign({}, m), l)), typeof l == "object" && l && !Array.isArray(l) && (f.search = this.stringifyQuery(l)), f.toString()
   }
   async prepareOptions(t) {}
   async prepareRequest(t, {
       url: l,
       options: a
   }) {}
   get(t, l) {
       return this.methodRequest("get", t, l)
   }
   post(t, l) {
       return this.methodRequest("post", t, l)
   }
   patch(t, l) {
       return this.methodRequest("patch", t, l)
   }
   put(t, l) {
       return this.methodRequest("put", t, l)
   }
   delete(t, l) {
       return this.methodRequest("delete", t, l)
   }
   methodRequest(t, l, a) {
       return this.request(Promise.resolve(a).then(u => Object.assign({
           method: t,
           path: l
       }, u)))
   }
   request(t, l = null) {
       return new zu(this, this.makeRequest(t, l, void 0))
   }
   async makeRequest(t, l, a) {
       var u, f, m;
       const g = await t,
           y = (u = g.maxRetries) !== null && u !== void 0 ? u : this.maxRetries;
       l == null && (l = y), await this.prepareOptions(g);
       const {
           req: h,
           url: v,
           timeout: S
       } = await this.buildRequest(g, {
           retryCount: y - l
       });
       await this.prepareRequest(h, {
           url: v,
           options: g
       });
       const E = "log_" + (Math.random() * (1 << 24) | 0).toString(16).padStart(6, "0"),
           C = a === void 0 ? "" : `, retryOf: ${a}`,
           b = Date.now();
       if (st(this).debug(`[${E}] sending request`, ui({
               retryOfRequestLogID: a,
               method: g.method,
               url: v,
               options: g,
               headers: h.headers
           })), !((f = g.signal) === null || f === void 0) && f.aborted) throw new Ru;
       const H = new AbortController,
           U = await this.fetchWithTimeout(v, h, S, H).catch(Au),
           P = Date.now();
       if (U instanceof globalThis.Error) {
           const B = `retrying, ${l} attempts remaining`;
           if (!((m = g.signal) === null || m === void 0) && m.aborted) throw new Ru;
           const X = Cu(U) || /timed? ?out/i.test(String(U) + ("cause" in U ? String(U.cause) : ""));
           if (l) return st(this).info(`[${E}] connection ${X?"timed out":"failed"} - ${B}`), st(this).debug(`[${E}] connection ${X?"timed out":"failed"} (${B})`, ui({
               retryOfRequestLogID: a,
               url: v,
               durationMs: P - b,
               message: U.message
           })), this.retryRequest(g, l, a ?? E);
           throw st(this).info(`[${E}] connection ${X?"timed out":"failed"} - error; no more retries left`), st(this).debug(`[${E}] connection ${X?"timed out":"failed"} (error; no more retries left)`, ui({
               retryOfRequestLogID: a,
               url: v,
               durationMs: P - b,
               message: U.message
           })), X ? new cg : new Va({
               cause: U
           })
       }
       const K = `[${E}${C}] ${h.method} ${v} ${U.ok?"succeeded":"failed"} with status ${U.status} in ${P-b}ms`;
       if (!U.ok) {
           const B = await this.shouldRetry(U);
           if (l && B) {
               const W = `retrying, ${l} attempts remaining`;
               return await yR(U.body), st(this).info(`${K} - ${W}`), st(this).debug(`[${E}] response error (${W})`, ui({
                   retryOfRequestLogID: a,
                   url: U.url,
                   status: U.status,
                   headers: U.headers,
                   durationMs: P - b
               })), this.retryRequest(g, l, a ?? E, U.headers)
           }
           const X = B ? "error; no more retries left" : "error; not retryable";
           st(this).info(`${K} - ${X}`);
           const ee = await U.text().catch(W => Au(W).message),
               te = uR(ee),
               F = te ? void 0 : ee;
           throw st(this).debug(`[${E}] response error (${X})`, ui({
               retryOfRequestLogID: a,
               url: U.url,
               status: U.status,
               headers: U.headers,
               message: F,
               durationMs: Date.now() - b
           })), this.makeStatusError(U.status, te, F, U.headers)
       }
       return st(this).info(K), st(this).debug(`[${E}] response start`, ui({
           retryOfRequestLogID: a,
           url: U.url,
           status: U.status,
           headers: U.headers,
           durationMs: P - b
       })), {
           response: U,
           options: g,
           controller: H,
           requestLogID: E,
           retryOfRequestLogID: a,
           startTime: b
       }
   }
   async fetchWithTimeout(t, l, a, u) {
       const f = l || {},
           {
               signal: m,
               method: g
           } = f,
           y = ba(f, ["signal", "method"]);
       m && m.addEventListener("abort", () => u.abort());
       const h = setTimeout(() => u.abort(), a),
           v = globalThis.ReadableStream && y.body instanceof globalThis.ReadableStream || typeof y.body == "object" && y.body !== null && Symbol.asyncIterator in y.body,
           S = Object.assign(Object.assign(Object.assign({
               signal: u.signal
           }, v ? {
               duplex: "half"
           } : {}), {
               method: "GET"
           }), y);
       g && (S.method = g.toUpperCase());
       try {
           return await this.fetch.call(void 0, t, S)
       } finally {
           clearTimeout(h)
       }
   }
   async shouldRetry(t) {
       const l = t.headers.get("x-should-retry");
       return l === "true" ? !0 : l === "false" ? !1 : t.status === 408 || t.status === 409 || t.status === 429 || t.status >= 500
   }
   async retryRequest(t, l, a, u) {
       var f;
       let m;
       const g = u == null ? void 0 : u.get("retry-after-ms");
       if (g) {
           const h = parseFloat(g);
           Number.isNaN(h) || (m = h)
       }
       const y = u == null ? void 0 : u.get("retry-after");
       if (y && !m) {
           const h = parseFloat(y);
           Number.isNaN(h) ? m = Date.parse(y) - Date.now() : m = h * 1e3
       }
       if (!(m && 0 <= m && m < 60 * 1e3)) {
           const h = (f = t.maxRetries) !== null && f !== void 0 ? f : this.maxRetries;
           m = this.calculateDefaultRetryTimeoutMillis(l, h)
       }
       return await cR(m), this.makeRequest(t, l - 1, a)
   }
   calculateDefaultRetryTimeoutMillis(t, l) {
       const f = l - t,
           m = Math.min(.5 * Math.pow(2, f), 8),
           g = 1 - Math.random() * .25;
       return m * g * 1e3
   }
   async buildRequest(t, {
       retryCount: l = 0
   } = {}) {
       var a, u, f;
       const m = Object.assign({}, t),
           {
               method: g,
               path: y,
               query: h,
               defaultBaseURL: v
           } = m,
           S = this.buildURL(y, h, v);
       "timeout" in m && rR("timeout", m.timeout), m.timeout = (a = m.timeout) !== null && a !== void 0 ? a : this.timeout;
       const {
           bodyHeaders: E,
           body: C
       } = this.buildBody({
           options: m
       }), b = await this.buildHeaders({
           options: t,
           method: g,
           bodyHeaders: E,
           retryCount: l
       });
       return {
           req: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
               method: g,
               headers: b
           }, m.signal && {
               signal: m.signal
           }), globalThis.ReadableStream && C instanceof globalThis.ReadableStream && {
               duplex: "half"
           }), C && {
               body: C
           }), (u = this.fetchOptions) !== null && u !== void 0 ? u : {}), (f = m.fetchOptions) !== null && f !== void 0 ? f : {}),
           url: S,
           timeout: m.timeout
       }
   }
   async buildHeaders({
       options: t,
       method: l,
       bodyHeaders: a,
       retryCount: u
   }) {
       let f = {};
       this.idempotencyHeader && l !== "get" && (t.idempotencyKey || (t.idempotencyKey = this.defaultIdempotencyKey()), f[this.idempotencyHeader] = t.idempotencyKey);
       const m = du([f, Object.assign(Object.assign({
           Accept: "application/json",
           "User-Agent": this.getUserAgent(),
           "X-Stainless-Retry-Count": String(u)
       }, t.timeout ? {
           "X-Stainless-Timeout": String(Math.trunc(t.timeout / 1e3))
       } : {}), mR()), await this.authHeaders(t), this._options.defaultHeaders, a, t.headers]);
       return this.validateHeaders(m), m.values
   }
   buildBody({
       options: {
           body: t,
           headers: l
       }
   }) {
       if (!t) return {
           bodyHeaders: void 0,
           body: void 0
       };
       const a = du([l]);
       return ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof DataView || typeof t == "string" && a.values.has("content-type") || globalThis.Blob && t instanceof globalThis.Blob || t instanceof FormData || t instanceof URLSearchParams || globalThis.ReadableStream && t instanceof globalThis.ReadableStream ? {
           bodyHeaders: void 0,
           body: t
       } : typeof t == "object" && (Symbol.asyncIterator in t || Symbol.iterator in t && "next" in t && typeof t.next == "function") ? {
           bodyHeaders: void 0,
           body: gR(t)
       } : this.encoder({
           body: t,
           headers: a
       })
   }
}
ka.DEFAULT_TIMEOUT = 6e4;
class $e extends ka {
   constructor() {
       super(...arguments), this.interactions = new Mg(this)
   }
}
xg = $e;
$e.GeminiNextGenAPIClient = xg;
$e.GeminiNextGenAPIClientError = Vt;
$e.APIError = rt;
$e.APIConnectionError = Va;
$e.APIConnectionTimeoutError = cg;
$e.APIUserAbortError = Ru;
$e.NotFoundError = mg;
$e.ConflictError = hg;
$e.RateLimitError = yg;
$e.BadRequestError = fg;
$e.AuthenticationError = dg;
$e.InternalServerError = vg;
$e.PermissionDeniedError = pg;
$e.UnprocessableEntityError = gg;
$e.toFile = CR;
$e.Interactions = Mg;
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function HR(i, t) {
   const l = {},
       a = r(i, ["name"]);
   return a != null && c(l, ["_url", "name"], a), l
}

function qR(i, t) {
   const l = {},
       a = r(i, ["name"]);
   return a != null && c(l, ["_url", "name"], a), l
}

function VR(i, t) {
   const l = {},
       a = r(i, ["sdkHttpResponse"]);
   return a != null && c(l, ["sdkHttpResponse"], a), l
}

function zR(i, t) {
   const l = {},
       a = r(i, ["sdkHttpResponse"]);
   return a != null && c(l, ["sdkHttpResponse"], a), l
}

function kR(i, t, l) {
   const a = {};
   if (r(i, ["validationDataset"]) !== void 0) throw new Error("validationDataset parameter is not supported in Gemini API.");
   const u = r(i, ["tunedModelDisplayName"]);
   if (t !== void 0 && u != null && c(t, ["displayName"], u), r(i, ["description"]) !== void 0) throw new Error("description parameter is not supported in Gemini API.");
   const f = r(i, ["epochCount"]);
   t !== void 0 && f != null && c(t, ["tuningTask", "hyperparameters", "epochCount"], f);
   const m = r(i, ["learningRateMultiplier"]);
   if (m != null && c(a, ["tuningTask", "hyperparameters", "learningRateMultiplier"], m), r(i, ["exportLastCheckpointOnly"]) !== void 0) throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");
   if (r(i, ["preTunedModelCheckpointId"]) !== void 0) throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");
   if (r(i, ["adapterSize"]) !== void 0) throw new Error("adapterSize parameter is not supported in Gemini API.");
   const g = r(i, ["batchSize"]);
   t !== void 0 && g != null && c(t, ["tuningTask", "hyperparameters", "batchSize"], g);
   const y = r(i, ["learningRate"]);
   if (t !== void 0 && y != null && c(t, ["tuningTask", "hyperparameters", "learningRate"], y), r(i, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
   if (r(i, ["beta"]) !== void 0) throw new Error("beta parameter is not supported in Gemini API.");
   return a
}

function PR(i, t, l) {
   const a = {};
   let u = r(l, ["config", "method"]);
   if (u === void 0 && (u = "SUPERVISED_FINE_TUNING"), u === "SUPERVISED_FINE_TUNING") {
       const C = r(i, ["validationDataset"]);
       t !== void 0 && C != null && c(t, ["supervisedTuningSpec"], Dh(C))
   } else if (u === "PREFERENCE_TUNING") {
       const C = r(i, ["validationDataset"]);
       t !== void 0 && C != null && c(t, ["preferenceOptimizationSpec"], Dh(C))
   }
   const f = r(i, ["tunedModelDisplayName"]);
   t !== void 0 && f != null && c(t, ["tunedModelDisplayName"], f);
   const m = r(i, ["description"]);
   t !== void 0 && m != null && c(t, ["description"], m);
   let g = r(l, ["config", "method"]);
   if (g === void 0 && (g = "SUPERVISED_FINE_TUNING"), g === "SUPERVISED_FINE_TUNING") {
       const C = r(i, ["epochCount"]);
       t !== void 0 && C != null && c(t, ["supervisedTuningSpec", "hyperParameters", "epochCount"], C)
   } else if (g === "PREFERENCE_TUNING") {
       const C = r(i, ["epochCount"]);
       t !== void 0 && C != null && c(t, ["preferenceOptimizationSpec", "hyperParameters", "epochCount"], C)
   }
   let y = r(l, ["config", "method"]);
   if (y === void 0 && (y = "SUPERVISED_FINE_TUNING"), y === "SUPERVISED_FINE_TUNING") {
       const C = r(i, ["learningRateMultiplier"]);
       t !== void 0 && C != null && c(t, ["supervisedTuningSpec", "hyperParameters", "learningRateMultiplier"], C)
   } else if (y === "PREFERENCE_TUNING") {
       const C = r(i, ["learningRateMultiplier"]);
       t !== void 0 && C != null && c(t, ["preferenceOptimizationSpec", "hyperParameters", "learningRateMultiplier"], C)
   }
   let h = r(l, ["config", "method"]);
   if (h === void 0 && (h = "SUPERVISED_FINE_TUNING"), h === "SUPERVISED_FINE_TUNING") {
       const C = r(i, ["exportLastCheckpointOnly"]);
       t !== void 0 && C != null && c(t, ["supervisedTuningSpec", "exportLastCheckpointOnly"], C)
   } else if (h === "PREFERENCE_TUNING") {
       const C = r(i, ["exportLastCheckpointOnly"]);
       t !== void 0 && C != null && c(t, ["preferenceOptimizationSpec", "exportLastCheckpointOnly"], C)
   }
   let v = r(l, ["config", "method"]);
   if (v === void 0 && (v = "SUPERVISED_FINE_TUNING"), v === "SUPERVISED_FINE_TUNING") {
       const C = r(i, ["adapterSize"]);
       t !== void 0 && C != null && c(t, ["supervisedTuningSpec", "hyperParameters", "adapterSize"], C)
   } else if (v === "PREFERENCE_TUNING") {
       const C = r(i, ["adapterSize"]);
       t !== void 0 && C != null && c(t, ["preferenceOptimizationSpec", "hyperParameters", "adapterSize"], C)
   }
   if (r(i, ["batchSize"]) !== void 0) throw new Error("batchSize parameter is not supported in Vertex AI.");
   if (r(i, ["learningRate"]) !== void 0) throw new Error("learningRate parameter is not supported in Vertex AI.");
   const S = r(i, ["labels"]);
   t !== void 0 && S != null && c(t, ["labels"], S);
   const E = r(i, ["beta"]);
   return t !== void 0 && E != null && c(t, ["preferenceOptimizationSpec", "hyperParameters", "beta"], E), a
}

function BR(i, t) {
   const l = {},
       a = r(i, ["baseModel"]);
   a != null && c(l, ["baseModel"], a);
   const u = r(i, ["preTunedModel"]);
   u != null && c(l, ["preTunedModel"], u);
   const f = r(i, ["trainingDataset"]);
   f != null && jR(f);
   const m = r(i, ["config"]);
   return m != null && kR(m, l), l
}

function OR(i, t) {
   const l = {},
       a = r(i, ["baseModel"]);
   a != null && c(l, ["baseModel"], a);
   const u = r(i, ["preTunedModel"]);
   u != null && c(l, ["preTunedModel"], u);
   const f = r(i, ["trainingDataset"]);
   f != null && eM(f, l, t);
   const m = r(i, ["config"]);
   return m != null && PR(m, l, t), l
}

function FR(i, t) {
   const l = {},
       a = r(i, ["name"]);
   return a != null && c(l, ["_url", "name"], a), l
}

function YR(i, t) {
   const l = {},
       a = r(i, ["name"]);
   return a != null && c(l, ["_url", "name"], a), l
}

function JR(i, t, l) {
   const a = {},
       u = r(i, ["pageSize"]);
   t !== void 0 && u != null && c(t, ["_query", "pageSize"], u);
   const f = r(i, ["pageToken"]);
   t !== void 0 && f != null && c(t, ["_query", "pageToken"], f);
   const m = r(i, ["filter"]);
   return t !== void 0 && m != null && c(t, ["_query", "filter"], m), a
}

function KR(i, t, l) {
   const a = {},
       u = r(i, ["pageSize"]);
   t !== void 0 && u != null && c(t, ["_query", "pageSize"], u);
   const f = r(i, ["pageToken"]);
   t !== void 0 && f != null && c(t, ["_query", "pageToken"], f);
   const m = r(i, ["filter"]);
   return t !== void 0 && m != null && c(t, ["_query", "filter"], m), a
}

function XR(i, t) {
   const l = {},
       a = r(i, ["config"]);
   return a != null && JR(a, l), l
}

function QR(i, t) {
   const l = {},
       a = r(i, ["config"]);
   return a != null && KR(a, l), l
}

function ZR(i, t) {
   const l = {},
       a = r(i, ["sdkHttpResponse"]);
   a != null && c(l, ["sdkHttpResponse"], a);
   const u = r(i, ["nextPageToken"]);
   u != null && c(l, ["nextPageToken"], u);
   const f = r(i, ["tunedModels"]);
   if (f != null) {
       let m = f;
       Array.isArray(m) && (m = m.map(g => Ig(g))), c(l, ["tuningJobs"], m)
   }
   return l
}

function $R(i, t) {
   const l = {},
       a = r(i, ["sdkHttpResponse"]);
   a != null && c(l, ["sdkHttpResponse"], a);
   const u = r(i, ["nextPageToken"]);
   u != null && c(l, ["nextPageToken"], u);
   const f = r(i, ["tuningJobs"]);
   if (f != null) {
       let m = f;
       Array.isArray(m) && (m = m.map(g => xu(g))), c(l, ["tuningJobs"], m)
   }
   return l
}

function WR(i, t) {
   const l = {},
       a = r(i, ["name"]);
   a != null && c(l, ["model"], a);
   const u = r(i, ["name"]);
   return u != null && c(l, ["endpoint"], u), l
}

function jR(i, t) {
   const l = {};
   if (r(i, ["gcsUri"]) !== void 0) throw new Error("gcsUri parameter is not supported in Gemini API.");
   if (r(i, ["vertexDatasetResource"]) !== void 0) throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");
   const a = r(i, ["examples"]);
   if (a != null) {
       let u = a;
       Array.isArray(u) && (u = u.map(f => f)), c(l, ["examples", "examples"], u)
   }
   return l
}

function eM(i, t, l) {
   const a = {};
   let u = r(l, ["config", "method"]);
   if (u === void 0 && (u = "SUPERVISED_FINE_TUNING"), u === "SUPERVISED_FINE_TUNING") {
       const m = r(i, ["gcsUri"]);
       t !== void 0 && m != null && c(t, ["supervisedTuningSpec", "trainingDatasetUri"], m)
   } else if (u === "PREFERENCE_TUNING") {
       const m = r(i, ["gcsUri"]);
       t !== void 0 && m != null && c(t, ["preferenceOptimizationSpec", "trainingDatasetUri"], m)
   }
   let f = r(l, ["config", "method"]);
   if (f === void 0 && (f = "SUPERVISED_FINE_TUNING"), f === "SUPERVISED_FINE_TUNING") {
       const m = r(i, ["vertexDatasetResource"]);
       t !== void 0 && m != null && c(t, ["supervisedTuningSpec", "trainingDatasetUri"], m)
   } else if (f === "PREFERENCE_TUNING") {
       const m = r(i, ["vertexDatasetResource"]);
       t !== void 0 && m != null && c(t, ["preferenceOptimizationSpec", "trainingDatasetUri"], m)
   }
   if (r(i, ["examples"]) !== void 0) throw new Error("examples parameter is not supported in Vertex AI.");
   return a
}

function Ig(i, t) {
   const l = {},
       a = r(i, ["sdkHttpResponse"]);
   a != null && c(l, ["sdkHttpResponse"], a);
   const u = r(i, ["name"]);
   u != null && c(l, ["name"], u);
   const f = r(i, ["state"]);
   f != null && c(l, ["state"], Oh(f));
   const m = r(i, ["createTime"]);
   m != null && c(l, ["createTime"], m);
   const g = r(i, ["tuningTask", "startTime"]);
   g != null && c(l, ["startTime"], g);
   const y = r(i, ["tuningTask", "completeTime"]);
   y != null && c(l, ["endTime"], y);
   const h = r(i, ["updateTime"]);
   h != null && c(l, ["updateTime"], h);
   const v = r(i, ["description"]);
   v != null && c(l, ["description"], v);
   const S = r(i, ["baseModel"]);
   S != null && c(l, ["baseModel"], S);
   const E = r(i, ["_self"]);
   return E != null && c(l, ["tunedModel"], WR(E)), l
}

function xu(i, t) {
   const l = {},
       a = r(i, ["sdkHttpResponse"]);
   a != null && c(l, ["sdkHttpResponse"], a);
   const u = r(i, ["name"]);
   u != null && c(l, ["name"], u);
   const f = r(i, ["state"]);
   f != null && c(l, ["state"], Oh(f));
   const m = r(i, ["createTime"]);
   m != null && c(l, ["createTime"], m);
   const g = r(i, ["startTime"]);
   g != null && c(l, ["startTime"], g);
   const y = r(i, ["endTime"]);
   y != null && c(l, ["endTime"], y);
   const h = r(i, ["updateTime"]);
   h != null && c(l, ["updateTime"], h);
   const v = r(i, ["error"]);
   v != null && c(l, ["error"], v);
   const S = r(i, ["description"]);
   S != null && c(l, ["description"], S);
   const E = r(i, ["baseModel"]);
   E != null && c(l, ["baseModel"], E);
   const C = r(i, ["tunedModel"]);
   C != null && c(l, ["tunedModel"], C);
   const b = r(i, ["preTunedModel"]);
   b != null && c(l, ["preTunedModel"], b);
   const H = r(i, ["supervisedTuningSpec"]);
   H != null && c(l, ["supervisedTuningSpec"], H);
   const U = r(i, ["preferenceOptimizationSpec"]);
   U != null && c(l, ["preferenceOptimizationSpec"], U);
   const P = r(i, ["tuningDataStats"]);
   P != null && c(l, ["tuningDataStats"], P);
   const K = r(i, ["encryptionSpec"]);
   K != null && c(l, ["encryptionSpec"], K);
   const B = r(i, ["partnerModelTuningSpec"]);
   B != null && c(l, ["partnerModelTuningSpec"], B);
   const X = r(i, ["customBaseModel"]);
   X != null && c(l, ["customBaseModel"], X);
   const ee = r(i, ["experiment"]);
   ee != null && c(l, ["experiment"], ee);
   const te = r(i, ["labels"]);
   te != null && c(l, ["labels"], te);
   const F = r(i, ["outputUri"]);
   F != null && c(l, ["outputUri"], F);
   const he = r(i, ["pipelineJob"]);
   he != null && c(l, ["pipelineJob"], he);
   const W = r(i, ["serviceAccount"]);
   W != null && c(l, ["serviceAccount"], W);
   const de = r(i, ["tunedModelDisplayName"]);
   de != null && c(l, ["tunedModelDisplayName"], de);
   const Ce = r(i, ["veoTuningSpec"]);
   return Ce != null && c(l, ["veoTuningSpec"], Ce), l
}

function tM(i, t) {
   const l = {},
       a = r(i, ["sdkHttpResponse"]);
   a != null && c(l, ["sdkHttpResponse"], a);
   const u = r(i, ["name"]);
   u != null && c(l, ["name"], u);
   const f = r(i, ["metadata"]);
   f != null && c(l, ["metadata"], f);
   const m = r(i, ["done"]);
   m != null && c(l, ["done"], m);
   const g = r(i, ["error"]);
   return g != null && c(l, ["error"], g), l
}

function Dh(i, t) {
   const l = {},
       a = r(i, ["gcsUri"]);
   a != null && c(l, ["validationDatasetUri"], a);
   const u = r(i, ["vertexDatasetResource"]);
   return u != null && c(l, ["validationDatasetUri"], u), l
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class nM extends hn {
   constructor(t) {
       super(), this.apiClient = t, this.list = async (l = {}) => new ci(mn.PAGED_ITEM_TUNING_JOBS, a => this.listInternal(a), await this.listInternal(l), l), this.get = async l => await this.getInternal(l), this.tune = async l => {
           var a;
           if (this.apiClient.isVertexAI())
               if (l.baseModel.startsWith("projects/")) {
                   const u = {
                       tunedModelName: l.baseModel
                   };
                   !((a = l.config) === null || a === void 0) && a.preTunedModelCheckpointId && (u.checkpointId = l.config.preTunedModelCheckpointId);
                   const f = Object.assign(Object.assign({}, l), {
                       preTunedModel: u
                   });
                   return f.baseModel = void 0, await this.tuneInternal(f)
               } else {
                   const u = Object.assign({}, l);
                   return await this.tuneInternal(u)
               }
           else {
               const u = Object.assign({}, l),
                   f = await this.tuneMldevInternal(u);
               let m = "";
               return f.metadata !== void 0 && f.metadata.tunedModel !== void 0 ? m = f.metadata.tunedModel : f.name !== void 0 && f.name.includes("/operations/") && (m = f.name.split("/operations/")[0]), {
                   name: m,
                   state: gu.JOB_STATE_QUEUED
               }
           }
       }
   }
   async getInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = YR(t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => xu(v))
       } else {
           const h = FR(t);
           return g = J("{name}", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => Ig(v))
       }
   }
   async listInternal(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = QR(t);
           return g = J("tuningJobs", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = $R(v),
                   E = new nh;
               return Object.assign(E, S), E
           })
       } else {
           const h = XR(t);
           return g = J("tunedModels", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "GET",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = ZR(v),
                   E = new nh;
               return Object.assign(E, S), E
           })
       }
   }
   async cancel(t) {
       var l, a, u, f;
       let m, g = "",
           y = {};
       if (this.apiClient.isVertexAI()) {
           const h = qR(t);
           return g = J("{name}:cancel", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = zR(v),
                   E = new ih;
               return Object.assign(E, S), E
           })
       } else {
           const h = HR(t);
           return g = J("{name}:cancel", h._url), y = h._query, delete h._url, delete h._query, m = this.apiClient.request({
               path: g,
               queryParams: y,
               body: JSON.stringify(h),
               httpMethod: "POST",
               httpOptions: (u = t.config) === null || u === void 0 ? void 0 : u.httpOptions,
               abortSignal: (f = t.config) === null || f === void 0 ? void 0 : f.abortSignal
           }).then(v => v.json().then(S => {
               const E = S;
               return E.sdkHttpResponse = {
                   headers: v.headers
               }, E
           })), m.then(v => {
               const S = VR(v),
                   E = new ih;
               return Object.assign(E, S), E
           })
       }
   }
   async tuneInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) {
           const g = OR(t, t);
           return f = J("tuningJobs", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json().then(h => {
               const v = h;
               return v.sdkHttpResponse = {
                   headers: y.headers
               }, v
           })), u.then(y => xu(y))
       } else throw new Error("This method is only supported by the Vertex AI.")
   }
   async tuneMldevInternal(t) {
       var l, a;
       let u, f = "",
           m = {};
       if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
       {
           const g = BR(t);
           return f = J("tunedModels", g._url), m = g._query, delete g._url, delete g._query, u = this.apiClient.request({
               path: f,
               queryParams: m,
               body: JSON.stringify(g),
               httpMethod: "POST",
               httpOptions: (l = t.config) === null || l === void 0 ? void 0 : l.httpOptions,
               abortSignal: (a = t.config) === null || a === void 0 ? void 0 : a.abortSignal
           }).then(y => y.json().then(h => {
               const v = h;
               return v.sdkHttpResponse = {
                   headers: y.headers
               }, v
           })), u.then(y => tM(y))
       }
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class iM {
   async download(t, l) {
       throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")
   }
}
const oM = 1024 * 1024 * 8,
   lM = 3,
   aM = 1e3,
   sM = 2,
   Ua = "x-goog-upload-status";
async function rM(i, t, l) {
   var a;
   const u = await Dg(i, t, l),
       f = await (u == null ? void 0 : u.json());
   if (((a = u == null ? void 0 : u.headers) === null || a === void 0 ? void 0 : a[Ua]) !== "final") throw new Error("Failed to upload file: Upload status is not finalized.");
   return f.file
}
async function uM(i, t, l) {
   var a;
   const u = await Dg(i, t, l),
       f = await (u == null ? void 0 : u.json());
   if (((a = u == null ? void 0 : u.headers) === null || a === void 0 ? void 0 : a[Ua]) !== "final") throw new Error("Failed to upload file: Upload status is not finalized.");
   const m = qh(f),
       g = new wu;
   return Object.assign(g, m), g
}
async function Dg(i, t, l) {
   var a, u;
   let f = 0,
       m = 0,
       g = new yu(new Response),
       y = "upload";
   for (f = i.size; m < f;) {
       const h = Math.min(oM, f - m),
           v = i.slice(m, m + h);
       m + h >= f && (y += ", finalize");
       let S = 0,
           E = aM;
       for (; S < lM && (g = await l.request({
               path: "",
               body: v,
               httpMethod: "POST",
               httpOptions: {
                   apiVersion: "",
                   baseUrl: t,
                   headers: {
                       "X-Goog-Upload-Command": y,
                       "X-Goog-Upload-Offset": String(m),
                       "Content-Length": String(h)
                   }
               }
           }), !(!((a = g == null ? void 0 : g.headers) === null || a === void 0) && a[Ua]));) S++, await fM(E), E = E * sM;
       if (m += h, ((u = g == null ? void 0 : g.headers) === null || u === void 0 ? void 0 : u[Ua]) !== "active") break;
       if (f <= m) throw new Error("All content has been uploaded, but the upload status is not finalized.")
   }
   return g
}
async function cM(i) {
   return {
       size: i.size,
       type: i.type
   }
}

function fM(i) {
   return new Promise(t => setTimeout(t, i))
}
class dM {
   async upload(t, l, a) {
       if (typeof t == "string") throw new Error("File path is not supported in browser uploader.");
       return await rM(t, l, a)
   }
   async uploadToFileSearchStore(t, l, a) {
       if (typeof t == "string") throw new Error("File path is not supported in browser uploader.");
       return await uM(t, l, a)
   }
   async stat(t) {
       if (typeof t == "string") throw new Error("File path is not supported in browser uploader.");
       return await cM(t)
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class pM {
   create(t, l, a) {
       return new mM(t, l, a)
   }
}
class mM {
   constructor(t, l, a) {
       this.url = t, this.headers = l, this.callbacks = a
   }
   connect() {
       this.ws = new WebSocket(this.url), this.ws.onopen = this.callbacks.onopen, this.ws.onerror = this.callbacks.onerror, this.ws.onclose = this.callbacks.onclose, this.ws.onmessage = this.callbacks.onmessage
   }
   send(t) {
       if (this.ws === void 0) throw new Error("WebSocket is not connected");
       this.ws.send(t)
   }
   close() {
       if (this.ws === void 0) throw new Error("WebSocket is not connected");
       this.ws.close()
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const bh = "x-goog-api-key";
class hM {
   constructor(t) {
       this.apiKey = t
   }
   async addAuthHeaders(t, l) {
       if (t.get(bh) === null) {
           if (this.apiKey.startsWith("auth_tokens/")) throw new Error("Ephemeral tokens are only supported by the live API.");
           if (!this.apiKey) throw new Error("API key is missing. Please provide a valid API key.");
           t.append(bh, this.apiKey)
       }
   }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const gM = "gl-node/";
class yM {
   get interactions() {
       if (this._interactions !== void 0) return this._interactions;
       if (console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions."), this.vertexai) throw new Error("This version of the GenAI SDK does not support Vertex AI API for interactions.");
       const t = this.httpOptions;
       t != null && t.extraBody && console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");
       const l = new $e({
           baseURL: this.apiClient.getBaseUrl(),
           apiKey: this.apiKey,
           defaultHeaders: this.apiClient.getDefaultHeaders(),
           timeout: t == null ? void 0 : t.timeout
       });
       return this._interactions = l.interactions, this._interactions
   }
   constructor(t) {
       var l;
       if (t.apiKey == null) throw new Error("An API Key must be set when running in a browser");
       if (t.project || t.location) throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");
       this.vertexai = (l = t.vertexai) !== null && l !== void 0 ? l : !1, this.apiKey = t.apiKey;
       const a = fT(t.httpOptions, t.vertexai, void 0, void 0);
       a && (t.httpOptions ? t.httpOptions.baseUrl = a : t.httpOptions = {
           baseUrl: a
       }), this.apiVersion = t.apiVersion, this.httpOptions = t.httpOptions;
       const u = new hM(this.apiKey);
       this.apiClient = new cA({
           auth: u,
           apiVersion: this.apiVersion,
           apiKey: this.apiKey,
           vertexai: this.vertexai,
           httpOptions: this.httpOptions,
           userAgentExtra: gM + "web",
           uploader: new dM,
           downloader: new iM
       }), this.models = new IA(this.apiClient), this.live = new CA(this.apiClient, u, new pM), this.batches = new kS(this.apiClient), this.chats = new EE(this.models, this.apiClient), this.caches = new vE(this.apiClient), this.files = new bE(this.apiClient), this.operations = new DA(this.apiClient), this.authTokens = new JA(this.apiClient), this.tunings = new nM(this.apiClient), this.fileSearchStores = new eR(this.apiClient)
   }
}
const vM = new yM({
       apiKey: "PLACEHOLDER_API_KEY"
   }),
   TM = async i => {
       const t = "gemini-2.5-flash",
           l = `

 `;
       try {
           return (await vM.models.generateContent({
               model: t,
               contents: l
           })).text || "Could not generate press release at this time."
       } catch (a) {
           throw console.error("Gemini generation error:", a), new Error("Failed to generate content. Please try again.")
       }
   }, SM = () => {
       const [i, t] = Pe.useState(""), [l, a] = Pe.useState(mu.MYSTICAL), [u, f] = Pe.useState(""), [m, g] = Pe.useState(""), [y, h] = Pe.useState(!1), [v, S] = Pe.useState(null), [E, C] = Pe.useState(!1), b = async () => {
           if (!i) {
               S("Please enter a topic.");
               return
           }
           h(!0), S(null), g("");
           try {
               const P = await TM({
                   topic: i,
                   tone: l,
                   targetAudience: u || "General Music Blogs"
               });
               g(P)
           } catch {
               S("Failed to generate content. Please try again.")
           } finally {
               h(!1)
           }
       }, H = () => {
           navigator.clipboard.writeText(m), C(!0), setTimeout(() => C(!1), 2e3)
       };
   },
   
    EM = () => N.jsx("section", {
       id: "contact",
       className: "py-24 bg-white relative",
       children: N.jsx("div", {
           className: "max-w-7xl mx-auto px-6",
           children: N.jsxs("div", {
               className: "grid grid-cols-1 md:grid-cols-2 gap-20",
               children: [N.jsxs("div", {
                   children: [N.jsx("h2", {
                       className: "text-4xl font-['Shizuru'] text-black mb-8",
                       children: "TOUR"
                   }), N.jsx("div", {
                       className: "divide-y divide-gray-200 border-t border-b border-gray-200",
                       children: tT.map(i => N.jsxs("div", {
                           className: "py-6 flex items-center justify-between group hover:bg-gray-50 transition-colors px-2",
                           children: [N.jsxs("div", {
                               className: "flex items-baseline gap-8",
                               children: [N.jsx("span", {
                                   className: "text-sm font-bold text-gray-400 uppercase tracking-widest w-16",
                                   children: i.date
                               }), N.jsxs("div", {
                                   children: [N.jsx("h4", {
                                       className: "text-xl font-serif text-black",
                                       children: i.venue
                                   }), N.jsx("p", {
                                       className: "text-sm text-gray-500 mt-1",
                                       children: i.city
                                   })]
                               })]
                           }), N.jsx("a", {
                               href: i.ticketLink,
                               className: "text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors",
                               children: "Tickets"
                           })]
                       }, i.id))
                   })]
               }), N.jsxs("div", {
                   className: "flex flex-col justify-between",
                   children: [N.jsxs("div", {
                       children: [N.jsx("h2", {
                           className: "text-4xl font-serif text-black mb-8",
                           children: ""
                       }), N.jsxs("div", {
                           className: "space-y-8",
                           children: [N.jsxs("div", {
                               children: [N.jsx("p", {
                                   className: "text-xs font-bold text-gray-400 uppercase tracking-widest mb-1",
                                   children: "Contact"
                               }), N.jsx("a", {
                                   href: "mailto:baw210.artist@gmail.com",
                                   className: "text-2xl font-serif text-black hover:text-gray-600 transition-colors",
                                   children: "baw210.artist@gmail.com"
                               })]
                           })]
                       })]
                   }), N.jsx("div", {
  className: "flex gap-6 mt-12",
  children: [
    {
      Icon: G0,
      href: "https://www.instagram.com/lomashowz/"
    },
    /*{
      Icon: Z0,
      href: "https://www.youtube.com/@lomashowz"
    },*/
    {
      Icon: U0,
      href: "https://www.facebook.com/lomalomashow"
    }
  ].map((item, i) =>
    N.jsx(
      "a",
      {
        href: item.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-black hover:text-gray-500 transition-colors",
        children: N.jsx(item.Icon, { size: 24 })
      },
      i
    )
  )
})
]
               })]
           })
       })
   }),
_M = () => N.jsxs("div", {
  className: "min-h-screen bg-white text-black",
  children: [
    N.jsx(iT, {}),
    N.jsxs("main", {
      children: [

        N.jsx(oT, {}),
        N.jsx(lT, {}),
        N.jsx(aT, {}),

        /* ================= VIDEO SECTION (YOUTUBE) ================= */
        N.jsx("section", {
          id: "video",
          className: "py-24 bg-gray-50",
          children: N.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [

              N.jsx("div", {
                className: "text-center mb-12",
                children: N.jsx("h2", {
                  className: "text-4xl font-['Shizuru'] text-black",
                  children: "LATEST RELEASE"
                })
              }),

              N.jsxs("div", {
                className:
                  "aspect-video w-full bg-black overflow-hidden rounded-xl shadow-xl",

                children: [
                  N.jsx("iframe", {
                    src: "https://www.youtube.com/embed/wut0uW62HdE?si=BwvOqfUVssQC_fyW",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: true,
                    className: "w-full h-full"
                  })]
              })]
          })
        }), N.jsx(SM, {}), N.jsx(EM, {})]
       }), N.jsx("footer", {
           className: "py-12 bg-white border-t border-gray-100 text-center text-gray-400 text-sm",
           children: N.jsxs("p", {
               children: ["© ", new Date().getFullYear(), " LOMASHOW"]
           })
       })]
   }), bg = document.getElementById("root");
if (!bg) throw new Error("Could not find root element to mount to");
const CM = d0.createRoot(bg);
CM.render(N.jsx(o0.StrictMode, {
   children: N.jsx(_M, {})
}));