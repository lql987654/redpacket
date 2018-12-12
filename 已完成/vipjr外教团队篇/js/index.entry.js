!function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }

    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "images/", i(i.s = 8)
}([function (e, t) {
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var i = function (e, t) {
                    var i = e[1] || "", n = e[3];
                    if (!n) return i;
                    if (t && "function" == typeof btoa) {
                        var r = function (e) {
                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                        }(n), o = n.sources.map(function (e) {
                            return "/*# sourceURL=" + n.sourceRoot + e + " */"
                        });
                        return [i].concat(o).concat([r]).join("\n")
                    }
                    return [i].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + i + "}" : i
            }).join("")
        }, t.i = function (e, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var n = {}, r = 0; r < this.length; r++) {
                var o = this[r][0];
                "number" == typeof o && (n[o] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var a = e[r];
                "number" == typeof a[0] && n[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), t.push(a))
            }
        }, t
    }
}, function (e, t, i) {
    var n = {}, r = function (e) {
        var t;
        return function () {
            return void 0 === t && (t = e.apply(this, arguments)), t
        }
    }(function () {
        return window && document && document.all && !window.atob
    }), o = function (e) {
        var t = {};
        return function (e) {
            if ("function" == typeof e) return e();
            if (void 0 === t[e]) {
                var i = function (e) {
                    return document.querySelector(e)
                }.call(this, e);
                if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                    i = i.contentDocument.head
                } catch (e) {
                    i = null
                }
                t[e] = i
            }
            return t[e]
        }
    }(), a = null, s = 0, l = [], c = i(12);

    function u(e, t) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i], o = n[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(g(r.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(g(r.parts[a], t));
                n[r.id] = {id: r.id, refs: 1, parts: s}
            }
        }
    }

    function p(e, t) {
        for (var i = [], n = {}, r = 0; r < e.length; r++) {
            var o = e[r], a = t.base ? o[0] + t.base : o[0], s = {css: o[1], media: o[2], sourceMap: o[3]};
            n[a] ? n[a].parts.push(s) : i.push(n[a] = {id: a, parts: [s]})
        }
        return i
    }

    function d(e, t) {
        var i = o(e.insertInto);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = l[l.length - 1];
        if ("top" === e.insertAt) n ? n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild), l.push(t); else if ("bottom" === e.insertAt) i.appendChild(t); else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = o(e.insertInto + " " + e.insertAt.before);
            i.insertBefore(t, r)
        }
    }

    function h(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = l.indexOf(e);
        t >= 0 && l.splice(t, 1)
    }

    function f(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", v(t, e.attrs), d(e, t), t
    }

    function v(e, t) {
        Object.keys(t).forEach(function (i) {
            e.setAttribute(i, t[i])
        })
    }

    function g(e, t) {
        var i, n, r, o;
        if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function () {
            };
            e.css = o
        }
        if (t.singleton) {
            var l = s++;
            i = a || (a = f(t)), n = A.bind(null, i, l, !1), r = A.bind(null, i, l, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function (e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", v(t, e.attrs), d(e, t), t
        }(t), n = function (e, t, i) {
            var n = i.css, r = i.sourceMap, o = void 0 === t.convertToAbsoluteUrls && r;
            (t.convertToAbsoluteUrls || o) && (n = c(n));
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var a = new Blob([n], {type: "text/css"}), s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, i, t), r = function () {
            h(i), i.href && URL.revokeObjectURL(i.href)
        }) : (i = f(t), n = function (e, t) {
            var i = t.css, n = t.media;
            n && e.setAttribute("media", n);
            if (e.styleSheet) e.styleSheet.cssText = i; else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i))
            }
        }.bind(null, i), r = function () {
            h(i)
        });
        return n(e), function (t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                n(e = t)
            } else r()
        }
    }

    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = r()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var i = p(e, t);
        return u(i, t), function (e) {
            for (var r = [], o = 0; o < i.length; o++) {
                var a = i[o];
                (s = n[a.id]).refs--, r.push(s)
            }
            e && u(p(e, t), t);
            for (o = 0; o < r.length; o++) {
                var s;
                if (0 === (s = r[o]).refs) {
                    for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                    delete n[s.id]
                }
            }
        }
    };
    var m = function () {
        var e = [];
        return function (t, i) {
            return e[t] = i, e.filter(Boolean).join("\n")
        }
    }();

    function A(e, t, i, n) {
        var r = i ? "" : n.css;
        if (e.styleSheet) e.styleSheet.cssText = m(t, r); else {
            var o = document.createTextNode(r), a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABICAMAAABvLTMyAAAAk1BMVEUAAADxaGbxaWXwaGXuaGTwZmbwaGbxaWXxaGXwaGboYmHxaGXvZ2TuZmXvZ2TxaWbxaGbMVVXwZ2HwZ2TxaGXxaGXwaGbwaWbvZ2XsZGDxaWXxaGXwaGXwZ2TrWlrhWVnxaGXwZ2XxaGXwZ2TsZmPrZGLxaWXwaGbwaGbxaGXwaGXxaGXwaGXuY2PwZ2bwaGXxaWZ4DKcMAAAAMHRSTlMAoMWVODLL6o7QFf1KLV3uaQUgY8n58vY9EtaspVMMCOVwWEQmGd3Tg329uJsdingdNLyRAAACZ0lEQVRYw+3X6bKaMACG4SgoSJBNw66giPvy3f/V1XMyLUfJOJjQTqc97z9FH5aEjfReMjsP1DtMuabv0Evh7UOrt8BuqNw8BJw7dwDzCqLeNEW6JOSIE+mlNeiIkDG0frgRoH9z/w3nx/aLquJNbo2X7d/k7JC+iK3e5EgwfdHG/6dG9ptT5WKv1eJhjhTWxSq6cheGdvGvxfUsTw3XSDMv6MQlJ9d4yp1sCM/al/iZYV667KxvtVoSXpUCdKKtZp45Z8B2oTQUTgRksc9Xqg8omKfA2RFc5+vnEtSR5oISRvx4t97CncpyAzD7eU6FOPly3IgJfnwAreQ4E27QnlVb5FJcsUMuXEmZyHCbCI5otCnVZbgKTBetJcRahlsg3Ai+tgx4clzUJ1dRGoueOyMsZLgghCfcaDaS4fw5TsJTZbuU4cgB0ai9ze5dkOICF1nry/N9HXIc2QOr5wsgxZlIcssx2OxxHEJsayFXrLSmayD0piXoNWn4G+MXQAGnd3mSiyMgXfHZfJlNwPdexCX5vOmoi7nEwD13PtAGQwMAhSPgeH5TA7TOqPzIwKPzmyvkxIk5h+i3fDgeZofYr9U5PrR8+4O+OPJHuCGyfjj7833WRFj1wSVHlNZ9nocI86vZrbWQs+9LtBQ4fL7nuOgcsxIBZ+CzQcHPQ3M46dZO80Vbt/9Ylq395nToeDkWHrvW35WH4q/jil65apxZ/XGrCJhMe+KWGhBSlHYfnFMfgcnIY4hmtTp3ToGPA2cboLk6B9A9f7jeAVDn3DXhXU6qXGJgpzf32TOwICo5Zv31o3ddkt/XDzP0jOA1jedEAAAAAElFTkSuQmCC"
}, function (e, t, i) {
    e.exports = i.p + "2108a44363a7b2284024dbb1a5e3589b.png"
}, function (e, t) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function (e, t, i) {
    (function (t) {
        var i;
        i = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = i
    }).call(this, i(4))
}, function (e, t) {
    e.exports = function (e) {
        return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e)
    }
}, function (e, t, i) {
    (function (e, n) {
        var r;
        /**
         * @license
         * Lodash <https://lodash.com/>
         * Copyright JS Foundation and other contributors <https://js.foundation/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */(function () {
            var o, a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                l = "Expected a function", c = "__lodash_hash_undefined__", u = 500, p = "__lodash_placeholder__",
                d = 1, h = 2, f = 4, v = 1, g = 2, m = 1, A = 2, b = 4, y = 8, w = 16, x = 32, _ = 64, k = 128, j = 256,
                C = 512, T = 30, E = "...", S = 800, B = 16, M = 1, z = 2, I = 1 / 0, P = 9007199254740991,
                D = 1.7976931348623157e308, O = NaN, N = 4294967295, L = N - 1, F = N >>> 1,
                R = [["ary", k], ["bind", m], ["bindKey", A], ["curry", y], ["curryRight", w], ["flip", C], ["partial", x], ["partialRight", _], ["rearg", j]],
                Y = "[object Arguments]", H = "[object Array]", Q = "[object AsyncFunction]", V = "[object Boolean]",
                G = "[object Date]", U = "[object DOMException]", W = "[object Error]", X = "[object Function]",
                J = "[object GeneratorFunction]", Z = "[object Map]", q = "[object Number]", K = "[object Null]",
                $ = "[object Object]", ee = "[object Proxy]", te = "[object RegExp]", ie = "[object Set]",
                ne = "[object String]", re = "[object Symbol]", oe = "[object Undefined]", ae = "[object WeakMap]",
                se = "[object WeakSet]", le = "[object ArrayBuffer]", ce = "[object DataView]",
                ue = "[object Float32Array]", pe = "[object Float64Array]", de = "[object Int8Array]",
                he = "[object Int16Array]", fe = "[object Int32Array]", ve = "[object Uint8Array]",
                ge = "[object Uint8ClampedArray]", me = "[object Uint16Array]", Ae = "[object Uint32Array]",
                be = /\b__p \+= '';/g, ye = /\b(__p \+=) '' \+/g, we = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                xe = /&(?:amp|lt|gt|quot|#39);/g, _e = /[&<>"']/g, ke = RegExp(xe.source), je = RegExp(_e.source),
                Ce = /<%-([\s\S]+?)%>/g, Te = /<%([\s\S]+?)%>/g, Ee = /<%=([\s\S]+?)%>/g,
                Se = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Be = /^\w*$/,
                Me = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                ze = /[\\^$.*+?()[\]{}|]/g, Ie = RegExp(ze.source), Pe = /^\s+|\s+$/g, De = /^\s+/, Oe = /\s+$/,
                Ne = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Le = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Fe = /,? & /, Re = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ye = /\\(\\)?/g,
                He = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Qe = /\w*$/, Ve = /^[-+]0x[0-9a-f]+$/i, Ge = /^0b[01]+$/i,
                Ue = /^\[object .+?Constructor\]$/, We = /^0o[0-7]+$/i, Xe = /^(?:0|[1-9]\d*)$/,
                Je = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ze = /($^)/, qe = /['\n\r\u2028\u2029\\]/g,
                Ke = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                $e = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                et = "[\\ud800-\\udfff]", tt = "[" + $e + "]", it = "[" + Ke + "]", nt = "\\d+",
                rt = "[\\u2700-\\u27bf]", ot = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                at = "[^\\ud800-\\udfff" + $e + nt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                st = "\\ud83c[\\udffb-\\udfff]", lt = "[^\\ud800-\\udfff]", ct = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                ut = "[\\ud800-\\udbff][\\udc00-\\udfff]", pt = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                dt = "(?:" + ot + "|" + at + ")", ht = "(?:" + pt + "|" + at + ")",
                ft = "(?:" + it + "|" + st + ")" + "?",
                vt = "[\\ufe0e\\ufe0f]?" + ft + ("(?:\\u200d(?:" + [lt, ct, ut].join("|") + ")[\\ufe0e\\ufe0f]?" + ft + ")*"),
                gt = "(?:" + [rt, ct, ut].join("|") + ")" + vt,
                mt = "(?:" + [lt + it + "?", it, ct, ut, et].join("|") + ")", At = RegExp("['’]", "g"),
                bt = RegExp(it, "g"), yt = RegExp(st + "(?=" + st + ")|" + mt + vt, "g"),
                wt = RegExp([pt + "?" + ot + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [tt, pt, "$"].join("|") + ")", ht + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [tt, pt + dt, "$"].join("|") + ")", pt + "?" + dt + "+(?:['’](?:d|ll|m|re|s|t|ve))?", pt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", nt, gt].join("|"), "g"),
                xt = RegExp("[\\u200d\\ud800-\\udfff" + Ke + "\\ufe0e\\ufe0f]"),
                _t = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                kt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                jt = -1, Ct = {};
            Ct[ue] = Ct[pe] = Ct[de] = Ct[he] = Ct[fe] = Ct[ve] = Ct[ge] = Ct[me] = Ct[Ae] = !0, Ct[Y] = Ct[H] = Ct[le] = Ct[V] = Ct[ce] = Ct[G] = Ct[W] = Ct[X] = Ct[Z] = Ct[q] = Ct[$] = Ct[te] = Ct[ie] = Ct[ne] = Ct[ae] = !1;
            var Tt = {};
            Tt[Y] = Tt[H] = Tt[le] = Tt[ce] = Tt[V] = Tt[G] = Tt[ue] = Tt[pe] = Tt[de] = Tt[he] = Tt[fe] = Tt[Z] = Tt[q] = Tt[$] = Tt[te] = Tt[ie] = Tt[ne] = Tt[re] = Tt[ve] = Tt[ge] = Tt[me] = Tt[Ae] = !0, Tt[W] = Tt[X] = Tt[ae] = !1;
            var Et = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"},
                St = parseFloat, Bt = parseInt, Mt = "object" == typeof e && e && e.Object === Object && e,
                zt = "object" == typeof self && self && self.Object === Object && self,
                It = Mt || zt || Function("return this")(), Pt = "object" == typeof t && t && !t.nodeType && t,
                Dt = Pt && "object" == typeof n && n && !n.nodeType && n, Ot = Dt && Dt.exports === Pt,
                Nt = Ot && Mt.process, Lt = function () {
                    try {
                        var e = Dt && Dt.require && Dt.require("util").types;
                        return e || Nt && Nt.binding && Nt.binding("util")
                    } catch (e) {
                    }
                }(), Ft = Lt && Lt.isArrayBuffer, Rt = Lt && Lt.isDate, Yt = Lt && Lt.isMap, Ht = Lt && Lt.isRegExp,
                Qt = Lt && Lt.isSet, Vt = Lt && Lt.isTypedArray;

            function Gt(e, t, i) {
                switch (i.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, i[0]);
                    case 2:
                        return e.call(t, i[0], i[1]);
                    case 3:
                        return e.call(t, i[0], i[1], i[2])
                }
                return e.apply(t, i)
            }

            function Ut(e, t, i, n) {
                for (var r = -1, o = null == e ? 0 : e.length; ++r < o;) {
                    var a = e[r];
                    t(n, a, i(a), e)
                }
                return n
            }

            function Wt(e, t) {
                for (var i = -1, n = null == e ? 0 : e.length; ++i < n && !1 !== t(e[i], i, e);) ;
                return e
            }

            function Xt(e, t) {
                for (var i = null == e ? 0 : e.length; i-- && !1 !== t(e[i], i, e);) ;
                return e
            }

            function Jt(e, t) {
                for (var i = -1, n = null == e ? 0 : e.length; ++i < n;) if (!t(e[i], i, e)) return !1;
                return !0
            }

            function Zt(e, t) {
                for (var i = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++i < n;) {
                    var a = e[i];
                    t(a, i, e) && (o[r++] = a)
                }
                return o
            }

            function qt(e, t) {
                return !!(null == e ? 0 : e.length) && si(e, t, 0) > -1
            }

            function Kt(e, t, i) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) if (i(t, e[n])) return !0;
                return !1
            }

            function $t(e, t) {
                for (var i = -1, n = null == e ? 0 : e.length, r = Array(n); ++i < n;) r[i] = t(e[i], i, e);
                return r
            }

            function ei(e, t) {
                for (var i = -1, n = t.length, r = e.length; ++i < n;) e[r + i] = t[i];
                return e
            }

            function ti(e, t, i, n) {
                var r = -1, o = null == e ? 0 : e.length;
                for (n && o && (i = e[++r]); ++r < o;) i = t(i, e[r], r, e);
                return i
            }

            function ii(e, t, i, n) {
                var r = null == e ? 0 : e.length;
                for (n && r && (i = e[--r]); r--;) i = t(i, e[r], r, e);
                return i
            }

            function ni(e, t) {
                for (var i = -1, n = null == e ? 0 : e.length; ++i < n;) if (t(e[i], i, e)) return !0;
                return !1
            }

            var ri = pi("length");

            function oi(e, t, i) {
                var n;
                return i(e, function (e, i, r) {
                    if (t(e, i, r)) return n = i, !1
                }), n
            }

            function ai(e, t, i, n) {
                for (var r = e.length, o = i + (n ? 1 : -1); n ? o-- : ++o < r;) if (t(e[o], o, e)) return o;
                return -1
            }

            function si(e, t, i) {
                return t == t ? function (e, t, i) {
                    var n = i - 1, r = e.length;
                    for (; ++n < r;) if (e[n] === t) return n;
                    return -1
                }(e, t, i) : ai(e, ci, i)
            }

            function li(e, t, i, n) {
                for (var r = i - 1, o = e.length; ++r < o;) if (n(e[r], t)) return r;
                return -1
            }

            function ci(e) {
                return e != e
            }

            function ui(e, t) {
                var i = null == e ? 0 : e.length;
                return i ? fi(e, t) / i : O
            }

            function pi(e) {
                return function (t) {
                    return null == t ? o : t[e]
                }
            }

            function di(e) {
                return function (t) {
                    return null == e ? o : e[t]
                }
            }

            function hi(e, t, i, n, r) {
                return r(e, function (e, r, o) {
                    i = n ? (n = !1, e) : t(i, e, r, o)
                }), i
            }

            function fi(e, t) {
                for (var i, n = -1, r = e.length; ++n < r;) {
                    var a = t(e[n]);
                    a !== o && (i = i === o ? a : i + a)
                }
                return i
            }

            function vi(e, t) {
                for (var i = -1, n = Array(e); ++i < e;) n[i] = t(i);
                return n
            }

            function gi(e) {
                return function (t) {
                    return e(t)
                }
            }

            function mi(e, t) {
                return $t(t, function (t) {
                    return e[t]
                })
            }

            function Ai(e, t) {
                return e.has(t)
            }

            function bi(e, t) {
                for (var i = -1, n = e.length; ++i < n && si(t, e[i], 0) > -1;) ;
                return i
            }

            function yi(e, t) {
                for (var i = e.length; i-- && si(t, e[i], 0) > -1;) ;
                return i
            }

            var wi = di({
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }), xi = di({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"});

            function _i(e) {
                return "\\" + Et[e]
            }

            function ki(e) {
                return xt.test(e)
            }

            function ji(e) {
                var t = -1, i = Array(e.size);
                return e.forEach(function (e, n) {
                    i[++t] = [n, e]
                }), i
            }

            function Ci(e, t) {
                return function (i) {
                    return e(t(i))
                }
            }

            function Ti(e, t) {
                for (var i = -1, n = e.length, r = 0, o = []; ++i < n;) {
                    var a = e[i];
                    a !== t && a !== p || (e[i] = p, o[r++] = i)
                }
                return o
            }

            function Ei(e, t) {
                return "__proto__" == t ? o : e[t]
            }

            function Si(e) {
                var t = -1, i = Array(e.size);
                return e.forEach(function (e) {
                    i[++t] = e
                }), i
            }

            function Bi(e) {
                var t = -1, i = Array(e.size);
                return e.forEach(function (e) {
                    i[++t] = [e, e]
                }), i
            }

            function Mi(e) {
                return ki(e) ? function (e) {
                    var t = yt.lastIndex = 0;
                    for (; yt.test(e);) ++t;
                    return t
                }(e) : ri(e)
            }

            function zi(e) {
                return ki(e) ? function (e) {
                    return e.match(yt) || []
                }(e) : function (e) {
                    return e.split("")
                }(e)
            }

            var Ii = di({"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"});
            var Pi = function e(t) {
                var i = (t = null == t ? It : Pi.defaults(It.Object(), t, Pi.pick(It, kt))).Array, n = t.Date,
                    r = t.Error, Ke = t.Function, $e = t.Math, et = t.Object, tt = t.RegExp, it = t.String,
                    nt = t.TypeError, rt = i.prototype, ot = Ke.prototype, at = et.prototype,
                    st = t["__core-js_shared__"], lt = ot.toString, ct = at.hasOwnProperty, ut = 0, pt = function () {
                        var e = /[^.]+$/.exec(st && st.keys && st.keys.IE_PROTO || "");
                        return e ? "Symbol(src)_1." + e : ""
                    }(), dt = at.toString, ht = lt.call(et), ft = It._,
                    vt = tt("^" + lt.call(ct).replace(ze, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    gt = Ot ? t.Buffer : o, mt = t.Symbol, yt = t.Uint8Array, xt = gt ? gt.allocUnsafe : o,
                    Et = Ci(et.getPrototypeOf, et), Mt = et.create, zt = at.propertyIsEnumerable, Pt = rt.splice,
                    Dt = mt ? mt.isConcatSpreadable : o, Nt = mt ? mt.iterator : o, Lt = mt ? mt.toStringTag : o,
                    ri = function () {
                        try {
                            var e = Fo(et, "defineProperty");
                            return e({}, "", {}), e
                        } catch (e) {
                        }
                    }(), di = t.clearTimeout !== It.clearTimeout && t.clearTimeout,
                    Di = n && n.now !== It.Date.now && n.now, Oi = t.setTimeout !== It.setTimeout && t.setTimeout,
                    Ni = $e.ceil, Li = $e.floor, Fi = et.getOwnPropertySymbols, Ri = gt ? gt.isBuffer : o,
                    Yi = t.isFinite, Hi = rt.join, Qi = Ci(et.keys, et), Vi = $e.max, Gi = $e.min, Ui = n.now,
                    Wi = t.parseInt, Xi = $e.random, Ji = rt.reverse, Zi = Fo(t, "DataView"), qi = Fo(t, "Map"),
                    Ki = Fo(t, "Promise"), $i = Fo(t, "Set"), en = Fo(t, "WeakMap"), tn = Fo(et, "create"),
                    nn = en && new en, rn = {}, on = ua(Zi), an = ua(qi), sn = ua(Ki), ln = ua($i), cn = ua(en),
                    un = mt ? mt.prototype : o, pn = un ? un.valueOf : o, dn = un ? un.toString : o;

                function hn(e) {
                    if (Ts(e) && !gs(e) && !(e instanceof mn)) {
                        if (e instanceof gn) return e;
                        if (ct.call(e, "__wrapped__")) return pa(e)
                    }
                    return new gn(e)
                }

                var fn = function () {
                    function e() {
                    }

                    return function (t) {
                        if (!Cs(t)) return {};
                        if (Mt) return Mt(t);
                        e.prototype = t;
                        var i = new e;
                        return e.prototype = o, i
                    }
                }();

                function vn() {
                }

                function gn(e, t) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = o
                }

                function mn(e) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = N, this.__views__ = []
                }

                function An(e) {
                    var t = -1, i = null == e ? 0 : e.length;
                    for (this.clear(); ++t < i;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                function bn(e) {
                    var t = -1, i = null == e ? 0 : e.length;
                    for (this.clear(); ++t < i;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                function yn(e) {
                    var t = -1, i = null == e ? 0 : e.length;
                    for (this.clear(); ++t < i;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                function wn(e) {
                    var t = -1, i = null == e ? 0 : e.length;
                    for (this.__data__ = new yn; ++t < i;) this.add(e[t])
                }

                function xn(e) {
                    var t = this.__data__ = new bn(e);
                    this.size = t.size
                }

                function _n(e, t) {
                    var i = gs(e), n = !i && vs(e), r = !i && !n && ys(e), o = !i && !n && !r && Ds(e),
                        a = i || n || r || o, s = a ? vi(e.length, it) : [], l = s.length;
                    for (var c in e) !t && !ct.call(e, c) || a && ("length" == c || r && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Uo(c, l)) || s.push(c);
                    return s
                }

                function kn(e) {
                    var t = e.length;
                    return t ? e[wr(0, t - 1)] : o
                }

                function jn(e, t) {
                    return sa(io(e), Pn(t, 0, e.length))
                }

                function Cn(e) {
                    return sa(io(e))
                }

                function Tn(e, t, i) {
                    (i === o || ds(e[t], i)) && (i !== o || t in e) || zn(e, t, i)
                }

                function En(e, t, i) {
                    var n = e[t];
                    ct.call(e, t) && ds(n, i) && (i !== o || t in e) || zn(e, t, i)
                }

                function Sn(e, t) {
                    for (var i = e.length; i--;) if (ds(e[i][0], t)) return i;
                    return -1
                }

                function Bn(e, t, i, n) {
                    return Fn(e, function (e, r, o) {
                        t(n, e, i(e), o)
                    }), n
                }

                function Mn(e, t) {
                    return e && no(t, nl(t), e)
                }

                function zn(e, t, i) {
                    "__proto__" == t && ri ? ri(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: i,
                        writable: !0
                    }) : e[t] = i
                }

                function In(e, t) {
                    for (var n = -1, r = t.length, a = i(r), s = null == e; ++n < r;) a[n] = s ? o : Ks(e, t[n]);
                    return a
                }

                function Pn(e, t, i) {
                    return e == e && (i !== o && (e = e <= i ? e : i), t !== o && (e = e >= t ? e : t)), e
                }

                function Dn(e, t, i, n, r, a) {
                    var s, l = t & d, c = t & h, u = t & f;
                    if (i && (s = r ? i(e, n, r, a) : i(e)), s !== o) return s;
                    if (!Cs(e)) return e;
                    var p = gs(e);
                    if (p) {
                        if (s = function (e) {
                                var t = e.length, i = new e.constructor(t);
                                return t && "string" == typeof e[0] && ct.call(e, "index") && (i.index = e.index, i.input = e.input), i
                            }(e), !l) return io(e, s)
                    } else {
                        var v = Ho(e), g = v == X || v == J;
                        if (ys(e)) return Zr(e, l);
                        if (v == $ || v == Y || g && !r) {
                            if (s = c || g ? {} : Vo(e), !l) return c ? function (e, t) {
                                return no(e, Yo(e), t)
                            }(e, function (e, t) {
                                return e && no(t, rl(t), e)
                            }(s, e)) : function (e, t) {
                                return no(e, Ro(e), t)
                            }(e, Mn(s, e))
                        } else {
                            if (!Tt[v]) return r ? e : {};
                            s = function (e, t, i) {
                                var n = e.constructor;
                                switch (t) {
                                    case le:
                                        return qr(e);
                                    case V:
                                    case G:
                                        return new n(+e);
                                    case ce:
                                        return function (e, t) {
                                            var i = t ? qr(e.buffer) : e.buffer;
                                            return new e.constructor(i, e.byteOffset, e.byteLength)
                                        }(e, i);
                                    case ue:
                                    case pe:
                                    case de:
                                    case he:
                                    case fe:
                                    case ve:
                                    case ge:
                                    case me:
                                    case Ae:
                                        return Kr(e, i);
                                    case Z:
                                        return new n;
                                    case q:
                                    case ne:
                                        return new n(e);
                                    case te:
                                        return function (e) {
                                            var t = new e.constructor(e.source, Qe.exec(e));
                                            return t.lastIndex = e.lastIndex, t
                                        }(e);
                                    case ie:
                                        return new n;
                                    case re:
                                        return function (e) {
                                            return pn ? et(pn.call(e)) : {}
                                        }(e)
                                }
                            }(e, v, l)
                        }
                    }
                    a || (a = new xn);
                    var m = a.get(e);
                    if (m) return m;
                    if (a.set(e, s), zs(e)) return e.forEach(function (n) {
                        s.add(Dn(n, t, i, n, e, a))
                    }), s;
                    if (Es(e)) return e.forEach(function (n, r) {
                        s.set(r, Dn(n, t, i, r, e, a))
                    }), s;
                    var A = p ? o : (u ? c ? zo : Mo : c ? rl : nl)(e);
                    return Wt(A || e, function (n, r) {
                        A && (n = e[r = n]), En(s, r, Dn(n, t, i, r, e, a))
                    }), s
                }

                function On(e, t, i) {
                    var n = i.length;
                    if (null == e) return !n;
                    for (e = et(e); n--;) {
                        var r = i[n], a = t[r], s = e[r];
                        if (s === o && !(r in e) || !a(s)) return !1
                    }
                    return !0
                }

                function Nn(e, t, i) {
                    if ("function" != typeof e) throw new nt(l);
                    return na(function () {
                        e.apply(o, i)
                    }, t)
                }

                function Ln(e, t, i, n) {
                    var r = -1, o = qt, s = !0, l = e.length, c = [], u = t.length;
                    if (!l) return c;
                    i && (t = $t(t, gi(i))), n ? (o = Kt, s = !1) : t.length >= a && (o = Ai, s = !1, t = new wn(t));
                    e:for (; ++r < l;) {
                        var p = e[r], d = null == i ? p : i(p);
                        if (p = n || 0 !== p ? p : 0, s && d == d) {
                            for (var h = u; h--;) if (t[h] === d) continue e;
                            c.push(p)
                        } else o(t, d, n) || c.push(p)
                    }
                    return c
                }

                hn.templateSettings = {
                    escape: Ce,
                    evaluate: Te,
                    interpolate: Ee,
                    variable: "",
                    imports: {_: hn}
                }, hn.prototype = vn.prototype, hn.prototype.constructor = hn, gn.prototype = fn(vn.prototype), gn.prototype.constructor = gn, mn.prototype = fn(vn.prototype), mn.prototype.constructor = mn, An.prototype.clear = function () {
                    this.__data__ = tn ? tn(null) : {}, this.size = 0
                }, An.prototype.delete = function (e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }, An.prototype.get = function (e) {
                    var t = this.__data__;
                    if (tn) {
                        var i = t[e];
                        return i === c ? o : i
                    }
                    return ct.call(t, e) ? t[e] : o
                }, An.prototype.has = function (e) {
                    var t = this.__data__;
                    return tn ? t[e] !== o : ct.call(t, e)
                }, An.prototype.set = function (e, t) {
                    var i = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, i[e] = tn && t === o ? c : t, this
                }, bn.prototype.clear = function () {
                    this.__data__ = [], this.size = 0
                }, bn.prototype.delete = function (e) {
                    var t = this.__data__, i = Sn(t, e);
                    return !(i < 0 || (i == t.length - 1 ? t.pop() : Pt.call(t, i, 1), --this.size, 0))
                }, bn.prototype.get = function (e) {
                    var t = this.__data__, i = Sn(t, e);
                    return i < 0 ? o : t[i][1]
                }, bn.prototype.has = function (e) {
                    return Sn(this.__data__, e) > -1
                }, bn.prototype.set = function (e, t) {
                    var i = this.__data__, n = Sn(i, e);
                    return n < 0 ? (++this.size, i.push([e, t])) : i[n][1] = t, this
                }, yn.prototype.clear = function () {
                    this.size = 0, this.__data__ = {hash: new An, map: new (qi || bn), string: new An}
                }, yn.prototype.delete = function (e) {
                    var t = No(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }, yn.prototype.get = function (e) {
                    return No(this, e).get(e)
                }, yn.prototype.has = function (e) {
                    return No(this, e).has(e)
                }, yn.prototype.set = function (e, t) {
                    var i = No(this, e), n = i.size;
                    return i.set(e, t), this.size += i.size == n ? 0 : 1, this
                }, wn.prototype.add = wn.prototype.push = function (e) {
                    return this.__data__.set(e, c), this
                }, wn.prototype.has = function (e) {
                    return this.__data__.has(e)
                }, xn.prototype.clear = function () {
                    this.__data__ = new bn, this.size = 0
                }, xn.prototype.delete = function (e) {
                    var t = this.__data__, i = t.delete(e);
                    return this.size = t.size, i
                }, xn.prototype.get = function (e) {
                    return this.__data__.get(e)
                }, xn.prototype.has = function (e) {
                    return this.__data__.has(e)
                }, xn.prototype.set = function (e, t) {
                    var i = this.__data__;
                    if (i instanceof bn) {
                        var n = i.__data__;
                        if (!qi || n.length < a - 1) return n.push([e, t]), this.size = ++i.size, this;
                        i = this.__data__ = new yn(n)
                    }
                    return i.set(e, t), this.size = i.size, this
                };
                var Fn = ao(Wn), Rn = ao(Xn, !0);

                function Yn(e, t) {
                    var i = !0;
                    return Fn(e, function (e, n, r) {
                        return i = !!t(e, n, r)
                    }), i
                }

                function Hn(e, t, i) {
                    for (var n = -1, r = e.length; ++n < r;) {
                        var a = e[n], s = t(a);
                        if (null != s && (l === o ? s == s && !Ps(s) : i(s, l))) var l = s, c = a
                    }
                    return c
                }

                function Qn(e, t) {
                    var i = [];
                    return Fn(e, function (e, n, r) {
                        t(e, n, r) && i.push(e)
                    }), i
                }

                function Vn(e, t, i, n, r) {
                    var o = -1, a = e.length;
                    for (i || (i = Go), r || (r = []); ++o < a;) {
                        var s = e[o];
                        t > 0 && i(s) ? t > 1 ? Vn(s, t - 1, i, n, r) : ei(r, s) : n || (r[r.length] = s)
                    }
                    return r
                }

                var Gn = so(), Un = so(!0);

                function Wn(e, t) {
                    return e && Gn(e, t, nl)
                }

                function Xn(e, t) {
                    return e && Un(e, t, nl)
                }

                function Jn(e, t) {
                    return Zt(t, function (t) {
                        return _s(e[t])
                    })
                }

                function Zn(e, t) {
                    for (var i = 0, n = (t = Ur(t, e)).length; null != e && i < n;) e = e[ca(t[i++])];
                    return i && i == n ? e : o
                }

                function qn(e, t, i) {
                    var n = t(e);
                    return gs(e) ? n : ei(n, i(e))
                }

                function Kn(e) {
                    return null == e ? e === o ? oe : K : Lt && Lt in et(e) ? function (e) {
                        var t = ct.call(e, Lt), i = e[Lt];
                        try {
                            e[Lt] = o;
                            var n = !0
                        } catch (e) {
                        }
                        var r = dt.call(e);
                        return n && (t ? e[Lt] = i : delete e[Lt]), r
                    }(e) : function (e) {
                        return dt.call(e)
                    }(e)
                }

                function $n(e, t) {
                    return e > t
                }

                function er(e, t) {
                    return null != e && ct.call(e, t)
                }

                function tr(e, t) {
                    return null != e && t in et(e)
                }

                function ir(e, t, n) {
                    for (var r = n ? Kt : qt, a = e[0].length, s = e.length, l = s, c = i(s), u = 1 / 0, p = []; l--;) {
                        var d = e[l];
                        l && t && (d = $t(d, gi(t))), u = Gi(d.length, u), c[l] = !n && (t || a >= 120 && d.length >= 120) ? new wn(l && d) : o
                    }
                    d = e[0];
                    var h = -1, f = c[0];
                    e:for (; ++h < a && p.length < u;) {
                        var v = d[h], g = t ? t(v) : v;
                        if (v = n || 0 !== v ? v : 0, !(f ? Ai(f, g) : r(p, g, n))) {
                            for (l = s; --l;) {
                                var m = c[l];
                                if (!(m ? Ai(m, g) : r(e[l], g, n))) continue e
                            }
                            f && f.push(g), p.push(v)
                        }
                    }
                    return p
                }

                function nr(e, t, i) {
                    var n = null == (e = ta(e, t = Ur(t, e))) ? e : e[ca(xa(t))];
                    return null == n ? o : Gt(n, e, i)
                }

                function rr(e) {
                    return Ts(e) && Kn(e) == Y
                }

                function or(e, t, i, n, r) {
                    return e === t || (null == e || null == t || !Ts(e) && !Ts(t) ? e != e && t != t : function (e, t, i, n, r, a) {
                        var s = gs(e), l = gs(t), c = s ? H : Ho(e), u = l ? H : Ho(t), p = (c = c == Y ? $ : c) == $,
                            d = (u = u == Y ? $ : u) == $, h = c == u;
                        if (h && ys(e)) {
                            if (!ys(t)) return !1;
                            s = !0, p = !1
                        }
                        if (h && !p) return a || (a = new xn), s || Ds(e) ? So(e, t, i, n, r, a) : function (e, t, i, n, r, o, a) {
                            switch (i) {
                                case ce:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                    e = e.buffer, t = t.buffer;
                                case le:
                                    return !(e.byteLength != t.byteLength || !o(new yt(e), new yt(t)));
                                case V:
                                case G:
                                case q:
                                    return ds(+e, +t);
                                case W:
                                    return e.name == t.name && e.message == t.message;
                                case te:
                                case ne:
                                    return e == t + "";
                                case Z:
                                    var s = ji;
                                case ie:
                                    var l = n & v;
                                    if (s || (s = Si), e.size != t.size && !l) return !1;
                                    var c = a.get(e);
                                    if (c) return c == t;
                                    n |= g, a.set(e, t);
                                    var u = So(s(e), s(t), n, r, o, a);
                                    return a.delete(e), u;
                                case re:
                                    if (pn) return pn.call(e) == pn.call(t)
                            }
                            return !1
                        }(e, t, c, i, n, r, a);
                        if (!(i & v)) {
                            var f = p && ct.call(e, "__wrapped__"), m = d && ct.call(t, "__wrapped__");
                            if (f || m) {
                                var A = f ? e.value() : e, b = m ? t.value() : t;
                                return a || (a = new xn), r(A, b, i, n, a)
                            }
                        }
                        return !!h && (a || (a = new xn), function (e, t, i, n, r, a) {
                            var s = i & v, l = Mo(e), c = l.length, u = Mo(t).length;
                            if (c != u && !s) return !1;
                            for (var p = c; p--;) {
                                var d = l[p];
                                if (!(s ? d in t : ct.call(t, d))) return !1
                            }
                            var h = a.get(e);
                            if (h && a.get(t)) return h == t;
                            var f = !0;
                            a.set(e, t), a.set(t, e);
                            for (var g = s; ++p < c;) {
                                d = l[p];
                                var m = e[d], A = t[d];
                                if (n) var b = s ? n(A, m, d, t, e, a) : n(m, A, d, e, t, a);
                                if (!(b === o ? m === A || r(m, A, i, n, a) : b)) {
                                    f = !1;
                                    break
                                }
                                g || (g = "constructor" == d)
                            }
                            if (f && !g) {
                                var y = e.constructor, w = t.constructor;
                                y != w && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof w && w instanceof w) && (f = !1)
                            }
                            return a.delete(e), a.delete(t), f
                        }(e, t, i, n, r, a))
                    }(e, t, i, n, or, r))
                }

                function ar(e, t, i, n) {
                    var r = i.length, a = r, s = !n;
                    if (null == e) return !a;
                    for (e = et(e); r--;) {
                        var l = i[r];
                        if (s && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
                    }
                    for (; ++r < a;) {
                        var c = (l = i[r])[0], u = e[c], p = l[1];
                        if (s && l[2]) {
                            if (u === o && !(c in e)) return !1
                        } else {
                            var d = new xn;
                            if (n) var h = n(u, p, c, e, t, d);
                            if (!(h === o ? or(p, u, v | g, n, d) : h)) return !1
                        }
                    }
                    return !0
                }

                function sr(e) {
                    return !(!Cs(e) || function (e) {
                        return !!pt && pt in e
                    }(e)) && (_s(e) ? vt : Ue).test(ua(e))
                }

                function lr(e) {
                    return "function" == typeof e ? e : null == e ? Sl : "object" == typeof e ? gs(e) ? fr(e[0], e[1]) : hr(e) : Ll(e)
                }

                function cr(e) {
                    if (!qo(e)) return Qi(e);
                    var t = [];
                    for (var i in et(e)) ct.call(e, i) && "constructor" != i && t.push(i);
                    return t
                }

                function ur(e) {
                    if (!Cs(e)) return function (e) {
                        var t = [];
                        if (null != e) for (var i in et(e)) t.push(i);
                        return t
                    }(e);
                    var t = qo(e), i = [];
                    for (var n in e) ("constructor" != n || !t && ct.call(e, n)) && i.push(n);
                    return i
                }

                function pr(e, t) {
                    return e < t
                }

                function dr(e, t) {
                    var n = -1, r = As(e) ? i(e.length) : [];
                    return Fn(e, function (e, i, o) {
                        r[++n] = t(e, i, o)
                    }), r
                }

                function hr(e) {
                    var t = Lo(e);
                    return 1 == t.length && t[0][2] ? $o(t[0][0], t[0][1]) : function (i) {
                        return i === e || ar(i, e, t)
                    }
                }

                function fr(e, t) {
                    return Xo(e) && Ko(t) ? $o(ca(e), t) : function (i) {
                        var n = Ks(i, e);
                        return n === o && n === t ? $s(i, e) : or(t, n, v | g)
                    }
                }

                function vr(e, t, i, n, r) {
                    e !== t && Gn(t, function (a, s) {
                        if (Cs(a)) r || (r = new xn), function (e, t, i, n, r, a, s) {
                            var l = Ei(e, i), c = Ei(t, i), u = s.get(c);
                            if (u) Tn(e, i, u); else {
                                var p = a ? a(l, c, i + "", e, t, s) : o, d = p === o;
                                if (d) {
                                    var h = gs(c), f = !h && ys(c), v = !h && !f && Ds(c);
                                    p = c, h || f || v ? gs(l) ? p = l : bs(l) ? p = io(l) : f ? (d = !1, p = Zr(c, !0)) : v ? (d = !1, p = Kr(c, !0)) : p = [] : Bs(c) || vs(c) ? (p = l, vs(l) ? p = Qs(l) : (!Cs(l) || n && _s(l)) && (p = Vo(c))) : d = !1
                                }
                                d && (s.set(c, p), r(p, c, n, a, s), s.delete(c)), Tn(e, i, p)
                            }
                        }(e, t, s, i, vr, n, r); else {
                            var l = n ? n(Ei(e, s), a, s + "", e, t, r) : o;
                            l === o && (l = a), Tn(e, s, l)
                        }
                    }, rl)
                }

                function gr(e, t) {
                    var i = e.length;
                    if (i) return Uo(t += t < 0 ? i : 0, i) ? e[t] : o
                }

                function mr(e, t, i) {
                    var n = -1;
                    return t = $t(t.length ? t : [Sl], gi(Oo())), function (e, t) {
                        var i = e.length;
                        for (e.sort(t); i--;) e[i] = e[i].value;
                        return e
                    }(dr(e, function (e, i, r) {
                        return {
                            criteria: $t(t, function (t) {
                                return t(e)
                            }), index: ++n, value: e
                        }
                    }), function (e, t) {
                        return function (e, t, i) {
                            for (var n = -1, r = e.criteria, o = t.criteria, a = r.length, s = i.length; ++n < a;) {
                                var l = $r(r[n], o[n]);
                                if (l) {
                                    if (n >= s) return l;
                                    var c = i[n];
                                    return l * ("desc" == c ? -1 : 1)
                                }
                            }
                            return e.index - t.index
                        }(e, t, i)
                    })
                }

                function Ar(e, t, i) {
                    for (var n = -1, r = t.length, o = {}; ++n < r;) {
                        var a = t[n], s = Zn(e, a);
                        i(s, a) && Cr(o, Ur(a, e), s)
                    }
                    return o
                }

                function br(e, t, i, n) {
                    var r = n ? li : si, o = -1, a = t.length, s = e;
                    for (e === t && (t = io(t)), i && (s = $t(e, gi(i))); ++o < a;) for (var l = 0, c = t[o], u = i ? i(c) : c; (l = r(s, u, l, n)) > -1;) s !== e && Pt.call(s, l, 1), Pt.call(e, l, 1);
                    return e
                }

                function yr(e, t) {
                    for (var i = e ? t.length : 0, n = i - 1; i--;) {
                        var r = t[i];
                        if (i == n || r !== o) {
                            var o = r;
                            Uo(r) ? Pt.call(e, r, 1) : Lr(e, r)
                        }
                    }
                    return e
                }

                function wr(e, t) {
                    return e + Li(Xi() * (t - e + 1))
                }

                function xr(e, t) {
                    var i = "";
                    if (!e || t < 1 || t > P) return i;
                    do {
                        t % 2 && (i += e), (t = Li(t / 2)) && (e += e)
                    } while (t);
                    return i
                }

                function _r(e, t) {
                    return ra(ea(e, t, Sl), e + "")
                }

                function kr(e) {
                    return kn(dl(e))
                }

                function jr(e, t) {
                    var i = dl(e);
                    return sa(i, Pn(t, 0, i.length))
                }

                function Cr(e, t, i, n) {
                    if (!Cs(e)) return e;
                    for (var r = -1, a = (t = Ur(t, e)).length, s = a - 1, l = e; null != l && ++r < a;) {
                        var c = ca(t[r]), u = i;
                        if (r != s) {
                            var p = l[c];
                            (u = n ? n(p, c, l) : o) === o && (u = Cs(p) ? p : Uo(t[r + 1]) ? [] : {})
                        }
                        En(l, c, u), l = l[c]
                    }
                    return e
                }

                var Tr = nn ? function (e, t) {
                    return nn.set(e, t), e
                } : Sl, Er = ri ? function (e, t) {
                    return ri(e, "toString", {configurable: !0, enumerable: !1, value: Cl(t), writable: !0})
                } : Sl;

                function Sr(e) {
                    return sa(dl(e))
                }

                function Br(e, t, n) {
                    var r = -1, o = e.length;
                    t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
                    for (var a = i(o); ++r < o;) a[r] = e[r + t];
                    return a
                }

                function Mr(e, t) {
                    var i;
                    return Fn(e, function (e, n, r) {
                        return !(i = t(e, n, r))
                    }), !!i
                }

                function zr(e, t, i) {
                    var n = 0, r = null == e ? n : e.length;
                    if ("number" == typeof t && t == t && r <= F) {
                        for (; n < r;) {
                            var o = n + r >>> 1, a = e[o];
                            null !== a && !Ps(a) && (i ? a <= t : a < t) ? n = o + 1 : r = o
                        }
                        return r
                    }
                    return Ir(e, t, Sl, i)
                }

                function Ir(e, t, i, n) {
                    t = i(t);
                    for (var r = 0, a = null == e ? 0 : e.length, s = t != t, l = null === t, c = Ps(t), u = t === o; r < a;) {
                        var p = Li((r + a) / 2), d = i(e[p]), h = d !== o, f = null === d, v = d == d, g = Ps(d);
                        if (s) var m = n || v; else m = u ? v && (n || h) : l ? v && h && (n || !f) : c ? v && h && !f && (n || !g) : !f && !g && (n ? d <= t : d < t);
                        m ? r = p + 1 : a = p
                    }
                    return Gi(a, L)
                }

                function Pr(e, t) {
                    for (var i = -1, n = e.length, r = 0, o = []; ++i < n;) {
                        var a = e[i], s = t ? t(a) : a;
                        if (!i || !ds(s, l)) {
                            var l = s;
                            o[r++] = 0 === a ? 0 : a
                        }
                    }
                    return o
                }

                function Dr(e) {
                    return "number" == typeof e ? e : Ps(e) ? O : +e
                }

                function Or(e) {
                    if ("string" == typeof e) return e;
                    if (gs(e)) return $t(e, Or) + "";
                    if (Ps(e)) return dn ? dn.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -I ? "-0" : t
                }

                function Nr(e, t, i) {
                    var n = -1, r = qt, o = e.length, s = !0, l = [], c = l;
                    if (i) s = !1, r = Kt; else if (o >= a) {
                        var u = t ? null : _o(e);
                        if (u) return Si(u);
                        s = !1, r = Ai, c = new wn
                    } else c = t ? [] : l;
                    e:for (; ++n < o;) {
                        var p = e[n], d = t ? t(p) : p;
                        if (p = i || 0 !== p ? p : 0, s && d == d) {
                            for (var h = c.length; h--;) if (c[h] === d) continue e;
                            t && c.push(d), l.push(p)
                        } else r(c, d, i) || (c !== l && c.push(d), l.push(p))
                    }
                    return l
                }

                function Lr(e, t) {
                    return null == (e = ta(e, t = Ur(t, e))) || delete e[ca(xa(t))]
                }

                function Fr(e, t, i, n) {
                    return Cr(e, t, i(Zn(e, t)), n)
                }

                function Rr(e, t, i, n) {
                    for (var r = e.length, o = n ? r : -1; (n ? o-- : ++o < r) && t(e[o], o, e);) ;
                    return i ? Br(e, n ? 0 : o, n ? o + 1 : r) : Br(e, n ? o + 1 : 0, n ? r : o)
                }

                function Yr(e, t) {
                    var i = e;
                    return i instanceof mn && (i = i.value()), ti(t, function (e, t) {
                        return t.func.apply(t.thisArg, ei([e], t.args))
                    }, i)
                }

                function Hr(e, t, n) {
                    var r = e.length;
                    if (r < 2) return r ? Nr(e[0]) : [];
                    for (var o = -1, a = i(r); ++o < r;) for (var s = e[o], l = -1; ++l < r;) l != o && (a[o] = Ln(a[o] || s, e[l], t, n));
                    return Nr(Vn(a, 1), t, n)
                }

                function Qr(e, t, i) {
                    for (var n = -1, r = e.length, a = t.length, s = {}; ++n < r;) {
                        var l = n < a ? t[n] : o;
                        i(s, e[n], l)
                    }
                    return s
                }

                function Vr(e) {
                    return bs(e) ? e : []
                }

                function Gr(e) {
                    return "function" == typeof e ? e : Sl
                }

                function Ur(e, t) {
                    return gs(e) ? e : Xo(e, t) ? [e] : la(Vs(e))
                }

                var Wr = _r;

                function Xr(e, t, i) {
                    var n = e.length;
                    return i = i === o ? n : i, !t && i >= n ? e : Br(e, t, i)
                }

                var Jr = di || function (e) {
                    return It.clearTimeout(e)
                };

                function Zr(e, t) {
                    if (t) return e.slice();
                    var i = e.length, n = xt ? xt(i) : new e.constructor(i);
                    return e.copy(n), n
                }

                function qr(e) {
                    var t = new e.constructor(e.byteLength);
                    return new yt(t).set(new yt(e)), t
                }

                function Kr(e, t) {
                    var i = t ? qr(e.buffer) : e.buffer;
                    return new e.constructor(i, e.byteOffset, e.length)
                }

                function $r(e, t) {
                    if (e !== t) {
                        var i = e !== o, n = null === e, r = e == e, a = Ps(e), s = t !== o, l = null === t, c = t == t,
                            u = Ps(t);
                        if (!l && !u && !a && e > t || a && s && c && !l && !u || n && s && c || !i && c || !r) return 1;
                        if (!n && !a && !u && e < t || u && i && r && !n && !a || l && i && r || !s && r || !c) return -1
                    }
                    return 0
                }

                function eo(e, t, n, r) {
                    for (var o = -1, a = e.length, s = n.length, l = -1, c = t.length, u = Vi(a - s, 0), p = i(c + u), d = !r; ++l < c;) p[l] = t[l];
                    for (; ++o < s;) (d || o < a) && (p[n[o]] = e[o]);
                    for (; u--;) p[l++] = e[o++];
                    return p
                }

                function to(e, t, n, r) {
                    for (var o = -1, a = e.length, s = -1, l = n.length, c = -1, u = t.length, p = Vi(a - l, 0), d = i(p + u), h = !r; ++o < p;) d[o] = e[o];
                    for (var f = o; ++c < u;) d[f + c] = t[c];
                    for (; ++s < l;) (h || o < a) && (d[f + n[s]] = e[o++]);
                    return d
                }

                function io(e, t) {
                    var n = -1, r = e.length;
                    for (t || (t = i(r)); ++n < r;) t[n] = e[n];
                    return t
                }

                function no(e, t, i, n) {
                    var r = !i;
                    i || (i = {});
                    for (var a = -1, s = t.length; ++a < s;) {
                        var l = t[a], c = n ? n(i[l], e[l], l, i, e) : o;
                        c === o && (c = e[l]), r ? zn(i, l, c) : En(i, l, c)
                    }
                    return i
                }

                function ro(e, t) {
                    return function (i, n) {
                        var r = gs(i) ? Ut : Bn, o = t ? t() : {};
                        return r(i, e, Oo(n, 2), o)
                    }
                }

                function oo(e) {
                    return _r(function (t, i) {
                        var n = -1, r = i.length, a = r > 1 ? i[r - 1] : o, s = r > 2 ? i[2] : o;
                        for (a = e.length > 3 && "function" == typeof a ? (r--, a) : o, s && Wo(i[0], i[1], s) && (a = r < 3 ? o : a, r = 1), t = et(t); ++n < r;) {
                            var l = i[n];
                            l && e(t, l, n, a)
                        }
                        return t
                    })
                }

                function ao(e, t) {
                    return function (i, n) {
                        if (null == i) return i;
                        if (!As(i)) return e(i, n);
                        for (var r = i.length, o = t ? r : -1, a = et(i); (t ? o-- : ++o < r) && !1 !== n(a[o], o, a);) ;
                        return i
                    }
                }

                function so(e) {
                    return function (t, i, n) {
                        for (var r = -1, o = et(t), a = n(t), s = a.length; s--;) {
                            var l = a[e ? s : ++r];
                            if (!1 === i(o[l], l, o)) break
                        }
                        return t
                    }
                }

                function lo(e) {
                    return function (t) {
                        var i = ki(t = Vs(t)) ? zi(t) : o, n = i ? i[0] : t.charAt(0),
                            r = i ? Xr(i, 1).join("") : t.slice(1);
                        return n[e]() + r
                    }
                }

                function co(e) {
                    return function (t) {
                        return ti(_l(vl(t).replace(At, "")), e, "")
                    }
                }

                function uo(e) {
                    return function () {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3]);
                            case 5:
                                return new e(t[0], t[1], t[2], t[3], t[4]);
                            case 6:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                            case 7:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                        }
                        var i = fn(e.prototype), n = e.apply(i, t);
                        return Cs(n) ? n : i
                    }
                }

                function po(e) {
                    return function (t, i, n) {
                        var r = et(t);
                        if (!As(t)) {
                            var a = Oo(i, 3);
                            t = nl(t), i = function (e) {
                                return a(r[e], e, r)
                            }
                        }
                        var s = e(t, i, n);
                        return s > -1 ? r[a ? t[s] : s] : o
                    }
                }

                function ho(e) {
                    return Bo(function (t) {
                        var i = t.length, n = i, r = gn.prototype.thru;
                        for (e && t.reverse(); n--;) {
                            var a = t[n];
                            if ("function" != typeof a) throw new nt(l);
                            if (r && !s && "wrapper" == Po(a)) var s = new gn([], !0)
                        }
                        for (n = s ? n : i; ++n < i;) {
                            var c = Po(a = t[n]), u = "wrapper" == c ? Io(a) : o;
                            s = u && Jo(u[0]) && u[1] == (k | y | x | j) && !u[4].length && 1 == u[9] ? s[Po(u[0])].apply(s, u[3]) : 1 == a.length && Jo(a) ? s[c]() : s.thru(a)
                        }
                        return function () {
                            var e = arguments, n = e[0];
                            if (s && 1 == e.length && gs(n)) return s.plant(n).value();
                            for (var r = 0, o = i ? t[r].apply(this, e) : n; ++r < i;) o = t[r].call(this, o);
                            return o
                        }
                    })
                }

                function fo(e, t, n, r, a, s, l, c, u, p) {
                    var d = t & k, h = t & m, f = t & A, v = t & (y | w), g = t & C, b = f ? o : uo(e);
                    return function m() {
                        for (var A = arguments.length, y = i(A), w = A; w--;) y[w] = arguments[w];
                        if (v) var x = Do(m), _ = function (e, t) {
                            for (var i = e.length, n = 0; i--;) e[i] === t && ++n;
                            return n
                        }(y, x);
                        if (r && (y = eo(y, r, a, v)), s && (y = to(y, s, l, v)), A -= _, v && A < p) {
                            var k = Ti(y, x);
                            return wo(e, t, fo, m.placeholder, n, y, k, c, u, p - A)
                        }
                        var j = h ? n : this, C = f ? j[e] : e;
                        return A = y.length, c ? y = function (e, t) {
                            for (var i = e.length, n = Gi(t.length, i), r = io(e); n--;) {
                                var a = t[n];
                                e[n] = Uo(a, i) ? r[a] : o
                            }
                            return e
                        }(y, c) : g && A > 1 && y.reverse(), d && u < A && (y.length = u), this && this !== It && this instanceof m && (C = b || uo(C)), C.apply(j, y)
                    }
                }

                function vo(e, t) {
                    return function (i, n) {
                        return function (e, t, i, n) {
                            return Wn(e, function (e, r, o) {
                                t(n, i(e), r, o)
                            }), n
                        }(i, e, t(n), {})
                    }
                }

                function go(e, t) {
                    return function (i, n) {
                        var r;
                        if (i === o && n === o) return t;
                        if (i !== o && (r = i), n !== o) {
                            if (r === o) return n;
                            "string" == typeof i || "string" == typeof n ? (i = Or(i), n = Or(n)) : (i = Dr(i), n = Dr(n)), r = e(i, n)
                        }
                        return r
                    }
                }

                function mo(e) {
                    return Bo(function (t) {
                        return t = $t(t, gi(Oo())), _r(function (i) {
                            var n = this;
                            return e(t, function (e) {
                                return Gt(e, n, i)
                            })
                        })
                    })
                }

                function Ao(e, t) {
                    var i = (t = t === o ? " " : Or(t)).length;
                    if (i < 2) return i ? xr(t, e) : t;
                    var n = xr(t, Ni(e / Mi(t)));
                    return ki(t) ? Xr(zi(n), 0, e).join("") : n.slice(0, e)
                }

                function bo(e) {
                    return function (t, n, r) {
                        return r && "number" != typeof r && Wo(t, n, r) && (n = r = o), t = Fs(t), n === o ? (n = t, t = 0) : n = Fs(n), function (e, t, n, r) {
                            for (var o = -1, a = Vi(Ni((t - e) / (n || 1)), 0), s = i(a); a--;) s[r ? a : ++o] = e, e += n;
                            return s
                        }(t, n, r = r === o ? t < n ? 1 : -1 : Fs(r), e)
                    }
                }

                function yo(e) {
                    return function (t, i) {
                        return "string" == typeof t && "string" == typeof i || (t = Hs(t), i = Hs(i)), e(t, i)
                    }
                }

                function wo(e, t, i, n, r, a, s, l, c, u) {
                    var p = t & y;
                    t |= p ? x : _, (t &= ~(p ? _ : x)) & b || (t &= ~(m | A));
                    var d = [e, t, r, p ? a : o, p ? s : o, p ? o : a, p ? o : s, l, c, u], h = i.apply(o, d);
                    return Jo(e) && ia(h, d), h.placeholder = n, oa(h, e, t)
                }

                function xo(e) {
                    var t = $e[e];
                    return function (e, i) {
                        if (e = Hs(e), i = null == i ? 0 : Gi(Rs(i), 292)) {
                            var n = (Vs(e) + "e").split("e");
                            return +((n = (Vs(t(n[0] + "e" + (+n[1] + i))) + "e").split("e"))[0] + "e" + (+n[1] - i))
                        }
                        return t(e)
                    }
                }

                var _o = $i && 1 / Si(new $i([, -0]))[1] == I ? function (e) {
                    return new $i(e)
                } : Pl;

                function ko(e) {
                    return function (t) {
                        var i = Ho(t);
                        return i == Z ? ji(t) : i == ie ? Bi(t) : function (e, t) {
                            return $t(t, function (t) {
                                return [t, e[t]]
                            })
                        }(t, e(t))
                    }
                }

                function jo(e, t, n, r, a, s, c, u) {
                    var d = t & A;
                    if (!d && "function" != typeof e) throw new nt(l);
                    var h = r ? r.length : 0;
                    if (h || (t &= ~(x | _), r = a = o), c = c === o ? c : Vi(Rs(c), 0), u = u === o ? u : Rs(u), h -= a ? a.length : 0, t & _) {
                        var f = r, v = a;
                        r = a = o
                    }
                    var g = d ? o : Io(e), C = [e, t, n, r, a, f, v, s, c, u];
                    if (g && function (e, t) {
                            var i = e[1], n = t[1], r = i | n, o = r < (m | A | k),
                                a = n == k && i == y || n == k && i == j && e[7].length <= t[8] || n == (k | j) && t[7].length <= t[8] && i == y;
                            if (!o && !a) return e;
                            n & m && (e[2] = t[2], r |= i & m ? 0 : b);
                            var s = t[3];
                            if (s) {
                                var l = e[3];
                                e[3] = l ? eo(l, s, t[4]) : s, e[4] = l ? Ti(e[3], p) : t[4]
                            }
                            (s = t[5]) && (l = e[5], e[5] = l ? to(l, s, t[6]) : s, e[6] = l ? Ti(e[5], p) : t[6]), (s = t[7]) && (e[7] = s), n & k && (e[8] = null == e[8] ? t[8] : Gi(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = r
                        }(C, g), e = C[0], t = C[1], n = C[2], r = C[3], a = C[4], !(u = C[9] = C[9] === o ? d ? 0 : e.length : Vi(C[9] - h, 0)) && t & (y | w) && (t &= ~(y | w)), t && t != m) T = t == y || t == w ? function (e, t, n) {
                        var r = uo(e);
                        return function a() {
                            for (var s = arguments.length, l = i(s), c = s, u = Do(a); c--;) l[c] = arguments[c];
                            var p = s < 3 && l[0] !== u && l[s - 1] !== u ? [] : Ti(l, u);
                            return (s -= p.length) < n ? wo(e, t, fo, a.placeholder, o, l, p, o, o, n - s) : Gt(this && this !== It && this instanceof a ? r : e, this, l)
                        }
                    }(e, t, u) : t != x && t != (m | x) || a.length ? fo.apply(o, C) : function (e, t, n, r) {
                        var o = t & m, a = uo(e);
                        return function t() {
                            for (var s = -1, l = arguments.length, c = -1, u = r.length, p = i(u + l), d = this && this !== It && this instanceof t ? a : e; ++c < u;) p[c] = r[c];
                            for (; l--;) p[c++] = arguments[++s];
                            return Gt(d, o ? n : this, p)
                        }
                    }(e, t, n, r); else var T = function (e, t, i) {
                        var n = t & m, r = uo(e);
                        return function t() {
                            return (this && this !== It && this instanceof t ? r : e).apply(n ? i : this, arguments)
                        }
                    }(e, t, n);
                    return oa((g ? Tr : ia)(T, C), e, t)
                }

                function Co(e, t, i, n) {
                    return e === o || ds(e, at[i]) && !ct.call(n, i) ? t : e
                }

                function To(e, t, i, n, r, a) {
                    return Cs(e) && Cs(t) && (a.set(t, e), vr(e, t, o, To, a), a.delete(t)), e
                }

                function Eo(e) {
                    return Bs(e) ? o : e
                }

                function So(e, t, i, n, r, a) {
                    var s = i & v, l = e.length, c = t.length;
                    if (l != c && !(s && c > l)) return !1;
                    var u = a.get(e);
                    if (u && a.get(t)) return u == t;
                    var p = -1, d = !0, h = i & g ? new wn : o;
                    for (a.set(e, t), a.set(t, e); ++p < l;) {
                        var f = e[p], m = t[p];
                        if (n) var A = s ? n(m, f, p, t, e, a) : n(f, m, p, e, t, a);
                        if (A !== o) {
                            if (A) continue;
                            d = !1;
                            break
                        }
                        if (h) {
                            if (!ni(t, function (e, t) {
                                    if (!Ai(h, t) && (f === e || r(f, e, i, n, a))) return h.push(t)
                                })) {
                                d = !1;
                                break
                            }
                        } else if (f !== m && !r(f, m, i, n, a)) {
                            d = !1;
                            break
                        }
                    }
                    return a.delete(e), a.delete(t), d
                }

                function Bo(e) {
                    return ra(ea(e, o, ma), e + "")
                }

                function Mo(e) {
                    return qn(e, nl, Ro)
                }

                function zo(e) {
                    return qn(e, rl, Yo)
                }

                var Io = nn ? function (e) {
                    return nn.get(e)
                } : Pl;

                function Po(e) {
                    for (var t = e.name + "", i = rn[t], n = ct.call(rn, t) ? i.length : 0; n--;) {
                        var r = i[n], o = r.func;
                        if (null == o || o == e) return r.name
                    }
                    return t
                }

                function Do(e) {
                    return (ct.call(hn, "placeholder") ? hn : e).placeholder
                }

                function Oo() {
                    var e = hn.iteratee || Bl;
                    return e = e === Bl ? lr : e, arguments.length ? e(arguments[0], arguments[1]) : e
                }

                function No(e, t) {
                    var i = e.__data__;
                    return function (e) {
                        var t = typeof e;
                        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                    }(t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                }

                function Lo(e) {
                    for (var t = nl(e), i = t.length; i--;) {
                        var n = t[i], r = e[n];
                        t[i] = [n, r, Ko(r)]
                    }
                    return t
                }

                function Fo(e, t) {
                    var i = function (e, t) {
                        return null == e ? o : e[t]
                    }(e, t);
                    return sr(i) ? i : o
                }

                var Ro = Fi ? function (e) {
                    return null == e ? [] : (e = et(e), Zt(Fi(e), function (t) {
                        return zt.call(e, t)
                    }))
                } : Yl, Yo = Fi ? function (e) {
                    for (var t = []; e;) ei(t, Ro(e)), e = Et(e);
                    return t
                } : Yl, Ho = Kn;

                function Qo(e, t, i) {
                    for (var n = -1, r = (t = Ur(t, e)).length, o = !1; ++n < r;) {
                        var a = ca(t[n]);
                        if (!(o = null != e && i(e, a))) break;
                        e = e[a]
                    }
                    return o || ++n != r ? o : !!(r = null == e ? 0 : e.length) && js(r) && Uo(a, r) && (gs(e) || vs(e))
                }

                function Vo(e) {
                    return "function" != typeof e.constructor || qo(e) ? {} : fn(Et(e))
                }

                function Go(e) {
                    return gs(e) || vs(e) || !!(Dt && e && e[Dt])
                }

                function Uo(e, t) {
                    var i = typeof e;
                    return !!(t = null == t ? P : t) && ("number" == i || "symbol" != i && Xe.test(e)) && e > -1 && e % 1 == 0 && e < t
                }

                function Wo(e, t, i) {
                    if (!Cs(i)) return !1;
                    var n = typeof t;
                    return !!("number" == n ? As(i) && Uo(t, i.length) : "string" == n && t in i) && ds(i[t], e)
                }

                function Xo(e, t) {
                    if (gs(e)) return !1;
                    var i = typeof e;
                    return !("number" != i && "symbol" != i && "boolean" != i && null != e && !Ps(e)) || Be.test(e) || !Se.test(e) || null != t && e in et(t)
                }

                function Jo(e) {
                    var t = Po(e), i = hn[t];
                    if ("function" != typeof i || !(t in mn.prototype)) return !1;
                    if (e === i) return !0;
                    var n = Io(i);
                    return !!n && e === n[0]
                }

                (Zi && Ho(new Zi(new ArrayBuffer(1))) != ce || qi && Ho(new qi) != Z || Ki && "[object Promise]" != Ho(Ki.resolve()) || $i && Ho(new $i) != ie || en && Ho(new en) != ae) && (Ho = function (e) {
                    var t = Kn(e), i = t == $ ? e.constructor : o, n = i ? ua(i) : "";
                    if (n) switch (n) {
                        case on:
                            return ce;
                        case an:
                            return Z;
                        case sn:
                            return "[object Promise]";
                        case ln:
                            return ie;
                        case cn:
                            return ae
                    }
                    return t
                });
                var Zo = st ? _s : Hl;

                function qo(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || at)
                }

                function Ko(e) {
                    return e == e && !Cs(e)
                }

                function $o(e, t) {
                    return function (i) {
                        return null != i && i[e] === t && (t !== o || e in et(i))
                    }
                }

                function ea(e, t, n) {
                    return t = Vi(t === o ? e.length - 1 : t, 0), function () {
                        for (var r = arguments, o = -1, a = Vi(r.length - t, 0), s = i(a); ++o < a;) s[o] = r[t + o];
                        o = -1;
                        for (var l = i(t + 1); ++o < t;) l[o] = r[o];
                        return l[t] = n(s), Gt(e, this, l)
                    }
                }

                function ta(e, t) {
                    return t.length < 2 ? e : Zn(e, Br(t, 0, -1))
                }

                var ia = aa(Tr), na = Oi || function (e, t) {
                    return It.setTimeout(e, t)
                }, ra = aa(Er);

                function oa(e, t, i) {
                    var n = t + "";
                    return ra(e, function (e, t) {
                        var i = t.length;
                        if (!i) return e;
                        var n = i - 1;
                        return t[n] = (i > 1 ? "& " : "") + t[n], t = t.join(i > 2 ? ", " : " "), e.replace(Ne, "{\n/* [wrapped with " + t + "] */\n")
                    }(n, function (e, t) {
                        return Wt(R, function (i) {
                            var n = "_." + i[0];
                            t & i[1] && !qt(e, n) && e.push(n)
                        }), e.sort()
                    }(function (e) {
                        var t = e.match(Le);
                        return t ? t[1].split(Fe) : []
                    }(n), i)))
                }

                function aa(e) {
                    var t = 0, i = 0;
                    return function () {
                        var n = Ui(), r = B - (n - i);
                        if (i = n, r > 0) {
                            if (++t >= S) return arguments[0]
                        } else t = 0;
                        return e.apply(o, arguments)
                    }
                }

                function sa(e, t) {
                    var i = -1, n = e.length, r = n - 1;
                    for (t = t === o ? n : t; ++i < t;) {
                        var a = wr(i, r), s = e[a];
                        e[a] = e[i], e[i] = s
                    }
                    return e.length = t, e
                }

                var la = function (e) {
                    var t = as(e, function (e) {
                        return i.size === u && i.clear(), e
                    }), i = t.cache;
                    return t
                }(function (e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(Me, function (e, i, n, r) {
                        t.push(n ? r.replace(Ye, "$1") : i || e)
                    }), t
                });

                function ca(e) {
                    if ("string" == typeof e || Ps(e)) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -I ? "-0" : t
                }

                function ua(e) {
                    if (null != e) {
                        try {
                            return lt.call(e)
                        } catch (e) {
                        }
                        try {
                            return e + ""
                        } catch (e) {
                        }
                    }
                    return ""
                }

                function pa(e) {
                    if (e instanceof mn) return e.clone();
                    var t = new gn(e.__wrapped__, e.__chain__);
                    return t.__actions__ = io(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                }

                var da = _r(function (e, t) {
                    return bs(e) ? Ln(e, Vn(t, 1, bs, !0)) : []
                }), ha = _r(function (e, t) {
                    var i = xa(t);
                    return bs(i) && (i = o), bs(e) ? Ln(e, Vn(t, 1, bs, !0), Oo(i, 2)) : []
                }), fa = _r(function (e, t) {
                    var i = xa(t);
                    return bs(i) && (i = o), bs(e) ? Ln(e, Vn(t, 1, bs, !0), o, i) : []
                });

                function va(e, t, i) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var r = null == i ? 0 : Rs(i);
                    return r < 0 && (r = Vi(n + r, 0)), ai(e, Oo(t, 3), r)
                }

                function ga(e, t, i) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var r = n - 1;
                    return i !== o && (r = Rs(i), r = i < 0 ? Vi(n + r, 0) : Gi(r, n - 1)), ai(e, Oo(t, 3), r, !0)
                }

                function ma(e) {
                    return null != e && e.length ? Vn(e, 1) : []
                }

                function Aa(e) {
                    return e && e.length ? e[0] : o
                }

                var ba = _r(function (e) {
                    var t = $t(e, Vr);
                    return t.length && t[0] === e[0] ? ir(t) : []
                }), ya = _r(function (e) {
                    var t = xa(e), i = $t(e, Vr);
                    return t === xa(i) ? t = o : i.pop(), i.length && i[0] === e[0] ? ir(i, Oo(t, 2)) : []
                }), wa = _r(function (e) {
                    var t = xa(e), i = $t(e, Vr);
                    return (t = "function" == typeof t ? t : o) && i.pop(), i.length && i[0] === e[0] ? ir(i, o, t) : []
                });

                function xa(e) {
                    var t = null == e ? 0 : e.length;
                    return t ? e[t - 1] : o
                }

                var _a = _r(ka);

                function ka(e, t) {
                    return e && e.length && t && t.length ? br(e, t) : e
                }

                var ja = Bo(function (e, t) {
                    var i = null == e ? 0 : e.length, n = In(e, t);
                    return yr(e, $t(t, function (e) {
                        return Uo(e, i) ? +e : e
                    }).sort($r)), n
                });

                function Ca(e) {
                    return null == e ? e : Ji.call(e)
                }

                var Ta = _r(function (e) {
                    return Nr(Vn(e, 1, bs, !0))
                }), Ea = _r(function (e) {
                    var t = xa(e);
                    return bs(t) && (t = o), Nr(Vn(e, 1, bs, !0), Oo(t, 2))
                }), Sa = _r(function (e) {
                    var t = xa(e);
                    return t = "function" == typeof t ? t : o, Nr(Vn(e, 1, bs, !0), o, t)
                });

                function Ba(e) {
                    if (!e || !e.length) return [];
                    var t = 0;
                    return e = Zt(e, function (e) {
                        if (bs(e)) return t = Vi(e.length, t), !0
                    }), vi(t, function (t) {
                        return $t(e, pi(t))
                    })
                }

                function Ma(e, t) {
                    if (!e || !e.length) return [];
                    var i = Ba(e);
                    return null == t ? i : $t(i, function (e) {
                        return Gt(t, o, e)
                    })
                }

                var za = _r(function (e, t) {
                    return bs(e) ? Ln(e, t) : []
                }), Ia = _r(function (e) {
                    return Hr(Zt(e, bs))
                }), Pa = _r(function (e) {
                    var t = xa(e);
                    return bs(t) && (t = o), Hr(Zt(e, bs), Oo(t, 2))
                }), Da = _r(function (e) {
                    var t = xa(e);
                    return t = "function" == typeof t ? t : o, Hr(Zt(e, bs), o, t)
                }), Oa = _r(Ba);
                var Na = _r(function (e) {
                    var t = e.length, i = t > 1 ? e[t - 1] : o;
                    return Ma(e, i = "function" == typeof i ? (e.pop(), i) : o)
                });

                function La(e) {
                    var t = hn(e);
                    return t.__chain__ = !0, t
                }

                function Fa(e, t) {
                    return t(e)
                }

                var Ra = Bo(function (e) {
                    var t = e.length, i = t ? e[0] : 0, n = this.__wrapped__, r = function (t) {
                        return In(t, e)
                    };
                    return !(t > 1 || this.__actions__.length) && n instanceof mn && Uo(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                        func: Fa,
                        args: [r],
                        thisArg: o
                    }), new gn(n, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(o), e
                    })) : this.thru(r)
                });
                var Ya = ro(function (e, t, i) {
                    ct.call(e, i) ? ++e[i] : zn(e, i, 1)
                });
                var Ha = po(va), Qa = po(ga);

                function Va(e, t) {
                    return (gs(e) ? Wt : Fn)(e, Oo(t, 3))
                }

                function Ga(e, t) {
                    return (gs(e) ? Xt : Rn)(e, Oo(t, 3))
                }

                var Ua = ro(function (e, t, i) {
                    ct.call(e, i) ? e[i].push(t) : zn(e, i, [t])
                });
                var Wa = _r(function (e, t, n) {
                    var r = -1, o = "function" == typeof t, a = As(e) ? i(e.length) : [];
                    return Fn(e, function (e) {
                        a[++r] = o ? Gt(t, e, n) : nr(e, t, n)
                    }), a
                }), Xa = ro(function (e, t, i) {
                    zn(e, i, t)
                });

                function Ja(e, t) {
                    return (gs(e) ? $t : dr)(e, Oo(t, 3))
                }

                var Za = ro(function (e, t, i) {
                    e[i ? 0 : 1].push(t)
                }, function () {
                    return [[], []]
                });
                var qa = _r(function (e, t) {
                    if (null == e) return [];
                    var i = t.length;
                    return i > 1 && Wo(e, t[0], t[1]) ? t = [] : i > 2 && Wo(t[0], t[1], t[2]) && (t = [t[0]]), mr(e, Vn(t, 1), [])
                }), Ka = Di || function () {
                    return It.Date.now()
                };

                function $a(e, t, i) {
                    return t = i ? o : t, t = e && null == t ? e.length : t, jo(e, k, o, o, o, o, t)
                }

                function es(e, t) {
                    var i;
                    if ("function" != typeof t) throw new nt(l);
                    return e = Rs(e), function () {
                        return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = o), i
                    }
                }

                var ts = _r(function (e, t, i) {
                    var n = m;
                    if (i.length) {
                        var r = Ti(i, Do(ts));
                        n |= x
                    }
                    return jo(e, n, t, i, r)
                }), is = _r(function (e, t, i) {
                    var n = m | A;
                    if (i.length) {
                        var r = Ti(i, Do(is));
                        n |= x
                    }
                    return jo(t, n, e, i, r)
                });

                function ns(e, t, i) {
                    var n, r, a, s, c, u, p = 0, d = !1, h = !1, f = !0;
                    if ("function" != typeof e) throw new nt(l);

                    function v(t) {
                        var i = n, a = r;
                        return n = r = o, p = t, s = e.apply(a, i)
                    }

                    function g(e) {
                        var i = e - u;
                        return u === o || i >= t || i < 0 || h && e - p >= a
                    }

                    function m() {
                        var e = Ka();
                        if (g(e)) return A(e);
                        c = na(m, function (e) {
                            var i = t - (e - u);
                            return h ? Gi(i, a - (e - p)) : i
                        }(e))
                    }

                    function A(e) {
                        return c = o, f && n ? v(e) : (n = r = o, s)
                    }

                    function b() {
                        var e = Ka(), i = g(e);
                        if (n = arguments, r = this, u = e, i) {
                            if (c === o) return function (e) {
                                return p = e, c = na(m, t), d ? v(e) : s
                            }(u);
                            if (h) return c = na(m, t), v(u)
                        }
                        return c === o && (c = na(m, t)), s
                    }

                    return t = Hs(t) || 0, Cs(i) && (d = !!i.leading, a = (h = "maxWait" in i) ? Vi(Hs(i.maxWait) || 0, t) : a, f = "trailing" in i ? !!i.trailing : f), b.cancel = function () {
                        c !== o && Jr(c), p = 0, n = u = r = c = o
                    }, b.flush = function () {
                        return c === o ? s : A(Ka())
                    }, b
                }

                var rs = _r(function (e, t) {
                    return Nn(e, 1, t)
                }), os = _r(function (e, t, i) {
                    return Nn(e, Hs(t) || 0, i)
                });

                function as(e, t) {
                    if ("function" != typeof e || null != t && "function" != typeof t) throw new nt(l);
                    var i = function () {
                        var n = arguments, r = t ? t.apply(this, n) : n[0], o = i.cache;
                        if (o.has(r)) return o.get(r);
                        var a = e.apply(this, n);
                        return i.cache = o.set(r, a) || o, a
                    };
                    return i.cache = new (as.Cache || yn), i
                }

                function ss(e) {
                    if ("function" != typeof e) throw new nt(l);
                    return function () {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                        }
                        return !e.apply(this, t)
                    }
                }

                as.Cache = yn;
                var ls = Wr(function (e, t) {
                    var i = (t = 1 == t.length && gs(t[0]) ? $t(t[0], gi(Oo())) : $t(Vn(t, 1), gi(Oo()))).length;
                    return _r(function (n) {
                        for (var r = -1, o = Gi(n.length, i); ++r < o;) n[r] = t[r].call(this, n[r]);
                        return Gt(e, this, n)
                    })
                }), cs = _r(function (e, t) {
                    var i = Ti(t, Do(cs));
                    return jo(e, x, o, t, i)
                }), us = _r(function (e, t) {
                    var i = Ti(t, Do(us));
                    return jo(e, _, o, t, i)
                }), ps = Bo(function (e, t) {
                    return jo(e, j, o, o, o, t)
                });

                function ds(e, t) {
                    return e === t || e != e && t != t
                }

                var hs = yo($n), fs = yo(function (e, t) {
                    return e >= t
                }), vs = rr(function () {
                    return arguments
                }()) ? rr : function (e) {
                    return Ts(e) && ct.call(e, "callee") && !zt.call(e, "callee")
                }, gs = i.isArray, ms = Ft ? gi(Ft) : function (e) {
                    return Ts(e) && Kn(e) == le
                };

                function As(e) {
                    return null != e && js(e.length) && !_s(e)
                }

                function bs(e) {
                    return Ts(e) && As(e)
                }

                var ys = Ri || Hl, ws = Rt ? gi(Rt) : function (e) {
                    return Ts(e) && Kn(e) == G
                };

                function xs(e) {
                    if (!Ts(e)) return !1;
                    var t = Kn(e);
                    return t == W || t == U || "string" == typeof e.message && "string" == typeof e.name && !Bs(e)
                }

                function _s(e) {
                    if (!Cs(e)) return !1;
                    var t = Kn(e);
                    return t == X || t == J || t == Q || t == ee
                }

                function ks(e) {
                    return "number" == typeof e && e == Rs(e)
                }

                function js(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= P
                }

                function Cs(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }

                function Ts(e) {
                    return null != e && "object" == typeof e
                }

                var Es = Yt ? gi(Yt) : function (e) {
                    return Ts(e) && Ho(e) == Z
                };

                function Ss(e) {
                    return "number" == typeof e || Ts(e) && Kn(e) == q
                }

                function Bs(e) {
                    if (!Ts(e) || Kn(e) != $) return !1;
                    var t = Et(e);
                    if (null === t) return !0;
                    var i = ct.call(t, "constructor") && t.constructor;
                    return "function" == typeof i && i instanceof i && lt.call(i) == ht
                }

                var Ms = Ht ? gi(Ht) : function (e) {
                    return Ts(e) && Kn(e) == te
                };
                var zs = Qt ? gi(Qt) : function (e) {
                    return Ts(e) && Ho(e) == ie
                };

                function Is(e) {
                    return "string" == typeof e || !gs(e) && Ts(e) && Kn(e) == ne
                }

                function Ps(e) {
                    return "symbol" == typeof e || Ts(e) && Kn(e) == re
                }

                var Ds = Vt ? gi(Vt) : function (e) {
                    return Ts(e) && js(e.length) && !!Ct[Kn(e)]
                };
                var Os = yo(pr), Ns = yo(function (e, t) {
                    return e <= t
                });

                function Ls(e) {
                    if (!e) return [];
                    if (As(e)) return Is(e) ? zi(e) : io(e);
                    if (Nt && e[Nt]) return function (e) {
                        for (var t, i = []; !(t = e.next()).done;) i.push(t.value);
                        return i
                    }(e[Nt]());
                    var t = Ho(e);
                    return (t == Z ? ji : t == ie ? Si : dl)(e)
                }

                function Fs(e) {
                    return e ? (e = Hs(e)) === I || e === -I ? (e < 0 ? -1 : 1) * D : e == e ? e : 0 : 0 === e ? e : 0
                }

                function Rs(e) {
                    var t = Fs(e), i = t % 1;
                    return t == t ? i ? t - i : t : 0
                }

                function Ys(e) {
                    return e ? Pn(Rs(e), 0, N) : 0
                }

                function Hs(e) {
                    if ("number" == typeof e) return e;
                    if (Ps(e)) return O;
                    if (Cs(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = Cs(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(Pe, "");
                    var i = Ge.test(e);
                    return i || We.test(e) ? Bt(e.slice(2), i ? 2 : 8) : Ve.test(e) ? O : +e
                }

                function Qs(e) {
                    return no(e, rl(e))
                }

                function Vs(e) {
                    return null == e ? "" : Or(e)
                }

                var Gs = oo(function (e, t) {
                    if (qo(t) || As(t)) no(t, nl(t), e); else for (var i in t) ct.call(t, i) && En(e, i, t[i])
                }), Us = oo(function (e, t) {
                    no(t, rl(t), e)
                }), Ws = oo(function (e, t, i, n) {
                    no(t, rl(t), e, n)
                }), Xs = oo(function (e, t, i, n) {
                    no(t, nl(t), e, n)
                }), Js = Bo(In);
                var Zs = _r(function (e, t) {
                    e = et(e);
                    var i = -1, n = t.length, r = n > 2 ? t[2] : o;
                    for (r && Wo(t[0], t[1], r) && (n = 1); ++i < n;) for (var a = t[i], s = rl(a), l = -1, c = s.length; ++l < c;) {
                        var u = s[l], p = e[u];
                        (p === o || ds(p, at[u]) && !ct.call(e, u)) && (e[u] = a[u])
                    }
                    return e
                }), qs = _r(function (e) {
                    return e.push(o, To), Gt(al, o, e)
                });

                function Ks(e, t, i) {
                    var n = null == e ? o : Zn(e, t);
                    return n === o ? i : n
                }

                function $s(e, t) {
                    return null != e && Qo(e, t, tr)
                }

                var el = vo(function (e, t, i) {
                    null != t && "function" != typeof t.toString && (t = dt.call(t)), e[t] = i
                }, Cl(Sl)), tl = vo(function (e, t, i) {
                    null != t && "function" != typeof t.toString && (t = dt.call(t)), ct.call(e, t) ? e[t].push(i) : e[t] = [i]
                }, Oo), il = _r(nr);

                function nl(e) {
                    return As(e) ? _n(e) : cr(e)
                }

                function rl(e) {
                    return As(e) ? _n(e, !0) : ur(e)
                }

                var ol = oo(function (e, t, i) {
                    vr(e, t, i)
                }), al = oo(function (e, t, i, n) {
                    vr(e, t, i, n)
                }), sl = Bo(function (e, t) {
                    var i = {};
                    if (null == e) return i;
                    var n = !1;
                    t = $t(t, function (t) {
                        return t = Ur(t, e), n || (n = t.length > 1), t
                    }), no(e, zo(e), i), n && (i = Dn(i, d | h | f, Eo));
                    for (var r = t.length; r--;) Lr(i, t[r]);
                    return i
                });
                var ll = Bo(function (e, t) {
                    return null == e ? {} : function (e, t) {
                        return Ar(e, t, function (t, i) {
                            return $s(e, i)
                        })
                    }(e, t)
                });

                function cl(e, t) {
                    if (null == e) return {};
                    var i = $t(zo(e), function (e) {
                        return [e]
                    });
                    return t = Oo(t), Ar(e, i, function (e, i) {
                        return t(e, i[0])
                    })
                }

                var ul = ko(nl), pl = ko(rl);

                function dl(e) {
                    return null == e ? [] : mi(e, nl(e))
                }

                var hl = co(function (e, t, i) {
                    return t = t.toLowerCase(), e + (i ? fl(t) : t)
                });

                function fl(e) {
                    return xl(Vs(e).toLowerCase())
                }

                function vl(e) {
                    return (e = Vs(e)) && e.replace(Je, wi).replace(bt, "")
                }

                var gl = co(function (e, t, i) {
                    return e + (i ? "-" : "") + t.toLowerCase()
                }), ml = co(function (e, t, i) {
                    return e + (i ? " " : "") + t.toLowerCase()
                }), Al = lo("toLowerCase");
                var bl = co(function (e, t, i) {
                    return e + (i ? "_" : "") + t.toLowerCase()
                });
                var yl = co(function (e, t, i) {
                    return e + (i ? " " : "") + xl(t)
                });
                var wl = co(function (e, t, i) {
                    return e + (i ? " " : "") + t.toUpperCase()
                }), xl = lo("toUpperCase");

                function _l(e, t, i) {
                    return e = Vs(e), (t = i ? o : t) === o ? function (e) {
                        return _t.test(e)
                    }(e) ? function (e) {
                        return e.match(wt) || []
                    }(e) : function (e) {
                        return e.match(Re) || []
                    }(e) : e.match(t) || []
                }

                var kl = _r(function (e, t) {
                    try {
                        return Gt(e, o, t)
                    } catch (e) {
                        return xs(e) ? e : new r(e)
                    }
                }), jl = Bo(function (e, t) {
                    return Wt(t, function (t) {
                        t = ca(t), zn(e, t, ts(e[t], e))
                    }), e
                });

                function Cl(e) {
                    return function () {
                        return e
                    }
                }

                var Tl = ho(), El = ho(!0);

                function Sl(e) {
                    return e
                }

                function Bl(e) {
                    return lr("function" == typeof e ? e : Dn(e, d))
                }

                var Ml = _r(function (e, t) {
                    return function (i) {
                        return nr(i, e, t)
                    }
                }), zl = _r(function (e, t) {
                    return function (i) {
                        return nr(e, i, t)
                    }
                });

                function Il(e, t, i) {
                    var n = nl(t), r = Jn(t, n);
                    null != i || Cs(t) && (r.length || !n.length) || (i = t, t = e, e = this, r = Jn(t, nl(t)));
                    var o = !(Cs(i) && "chain" in i && !i.chain), a = _s(e);
                    return Wt(r, function (i) {
                        var n = t[i];
                        e[i] = n, a && (e.prototype[i] = function () {
                            var t = this.__chain__;
                            if (o || t) {
                                var i = e(this.__wrapped__);
                                return (i.__actions__ = io(this.__actions__)).push({
                                    func: n,
                                    args: arguments,
                                    thisArg: e
                                }), i.__chain__ = t, i
                            }
                            return n.apply(e, ei([this.value()], arguments))
                        })
                    }), e
                }

                function Pl() {
                }

                var Dl = mo($t), Ol = mo(Jt), Nl = mo(ni);

                function Ll(e) {
                    return Xo(e) ? pi(ca(e)) : function (e) {
                        return function (t) {
                            return Zn(t, e)
                        }
                    }(e)
                }

                var Fl = bo(), Rl = bo(!0);

                function Yl() {
                    return []
                }

                function Hl() {
                    return !1
                }

                var Ql = go(function (e, t) {
                    return e + t
                }, 0), Vl = xo("ceil"), Gl = go(function (e, t) {
                    return e / t
                }, 1), Ul = xo("floor");
                var Wl = go(function (e, t) {
                    return e * t
                }, 1), Xl = xo("round"), Jl = go(function (e, t) {
                    return e - t
                }, 0);
                return hn.after = function (e, t) {
                    if ("function" != typeof t) throw new nt(l);
                    return e = Rs(e), function () {
                        if (--e < 1) return t.apply(this, arguments)
                    }
                }, hn.ary = $a, hn.assign = Gs, hn.assignIn = Us, hn.assignInWith = Ws, hn.assignWith = Xs, hn.at = Js, hn.before = es, hn.bind = ts, hn.bindAll = jl, hn.bindKey = is, hn.castArray = function () {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return gs(e) ? e : [e]
                }, hn.chain = La, hn.chunk = function (e, t, n) {
                    t = (n ? Wo(e, t, n) : t === o) ? 1 : Vi(Rs(t), 0);
                    var r = null == e ? 0 : e.length;
                    if (!r || t < 1) return [];
                    for (var a = 0, s = 0, l = i(Ni(r / t)); a < r;) l[s++] = Br(e, a, a += t);
                    return l
                }, hn.compact = function (e) {
                    for (var t = -1, i = null == e ? 0 : e.length, n = 0, r = []; ++t < i;) {
                        var o = e[t];
                        o && (r[n++] = o)
                    }
                    return r
                }, hn.concat = function () {
                    var e = arguments.length;
                    if (!e) return [];
                    for (var t = i(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
                    return ei(gs(n) ? io(n) : [n], Vn(t, 1))
                }, hn.cond = function (e) {
                    var t = null == e ? 0 : e.length, i = Oo();
                    return e = t ? $t(e, function (e) {
                        if ("function" != typeof e[1]) throw new nt(l);
                        return [i(e[0]), e[1]]
                    }) : [], _r(function (i) {
                        for (var n = -1; ++n < t;) {
                            var r = e[n];
                            if (Gt(r[0], this, i)) return Gt(r[1], this, i)
                        }
                    })
                }, hn.conforms = function (e) {
                    return function (e) {
                        var t = nl(e);
                        return function (i) {
                            return On(i, e, t)
                        }
                    }(Dn(e, d))
                }, hn.constant = Cl, hn.countBy = Ya, hn.create = function (e, t) {
                    var i = fn(e);
                    return null == t ? i : Mn(i, t)
                }, hn.curry = function e(t, i, n) {
                    var r = jo(t, y, o, o, o, o, o, i = n ? o : i);
                    return r.placeholder = e.placeholder, r
                }, hn.curryRight = function e(t, i, n) {
                    var r = jo(t, w, o, o, o, o, o, i = n ? o : i);
                    return r.placeholder = e.placeholder, r
                }, hn.debounce = ns, hn.defaults = Zs, hn.defaultsDeep = qs, hn.defer = rs, hn.delay = os, hn.difference = da, hn.differenceBy = ha, hn.differenceWith = fa, hn.drop = function (e, t, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? Br(e, (t = i || t === o ? 1 : Rs(t)) < 0 ? 0 : t, n) : []
                }, hn.dropRight = function (e, t, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? Br(e, 0, (t = n - (t = i || t === o ? 1 : Rs(t))) < 0 ? 0 : t) : []
                }, hn.dropRightWhile = function (e, t) {
                    return e && e.length ? Rr(e, Oo(t, 3), !0, !0) : []
                }, hn.dropWhile = function (e, t) {
                    return e && e.length ? Rr(e, Oo(t, 3), !0) : []
                }, hn.fill = function (e, t, i, n) {
                    var r = null == e ? 0 : e.length;
                    return r ? (i && "number" != typeof i && Wo(e, t, i) && (i = 0, n = r), function (e, t, i, n) {
                        var r = e.length;
                        for ((i = Rs(i)) < 0 && (i = -i > r ? 0 : r + i), (n = n === o || n > r ? r : Rs(n)) < 0 && (n += r), n = i > n ? 0 : Ys(n); i < n;) e[i++] = t;
                        return e
                    }(e, t, i, n)) : []
                }, hn.filter = function (e, t) {
                    return (gs(e) ? Zt : Qn)(e, Oo(t, 3))
                }, hn.flatMap = function (e, t) {
                    return Vn(Ja(e, t), 1)
                }, hn.flatMapDeep = function (e, t) {
                    return Vn(Ja(e, t), I)
                }, hn.flatMapDepth = function (e, t, i) {
                    return i = i === o ? 1 : Rs(i), Vn(Ja(e, t), i)
                }, hn.flatten = ma, hn.flattenDeep = function (e) {
                    return null != e && e.length ? Vn(e, I) : []
                }, hn.flattenDepth = function (e, t) {
                    return null != e && e.length ? Vn(e, t = t === o ? 1 : Rs(t)) : []
                }, hn.flip = function (e) {
                    return jo(e, C)
                }, hn.flow = Tl, hn.flowRight = El, hn.fromPairs = function (e) {
                    for (var t = -1, i = null == e ? 0 : e.length, n = {}; ++t < i;) {
                        var r = e[t];
                        n[r[0]] = r[1]
                    }
                    return n
                }, hn.functions = function (e) {
                    return null == e ? [] : Jn(e, nl(e))
                }, hn.functionsIn = function (e) {
                    return null == e ? [] : Jn(e, rl(e))
                }, hn.groupBy = Ua, hn.initial = function (e) {
                    return null != e && e.length ? Br(e, 0, -1) : []
                }, hn.intersection = ba, hn.intersectionBy = ya, hn.intersectionWith = wa, hn.invert = el, hn.invertBy = tl, hn.invokeMap = Wa, hn.iteratee = Bl, hn.keyBy = Xa, hn.keys = nl, hn.keysIn = rl, hn.map = Ja, hn.mapKeys = function (e, t) {
                    var i = {};
                    return t = Oo(t, 3), Wn(e, function (e, n, r) {
                        zn(i, t(e, n, r), e)
                    }), i
                }, hn.mapValues = function (e, t) {
                    var i = {};
                    return t = Oo(t, 3), Wn(e, function (e, n, r) {
                        zn(i, n, t(e, n, r))
                    }), i
                }, hn.matches = function (e) {
                    return hr(Dn(e, d))
                }, hn.matchesProperty = function (e, t) {
                    return fr(e, Dn(t, d))
                }, hn.memoize = as, hn.merge = ol, hn.mergeWith = al, hn.method = Ml, hn.methodOf = zl, hn.mixin = Il, hn.negate = ss, hn.nthArg = function (e) {
                    return e = Rs(e), _r(function (t) {
                        return gr(t, e)
                    })
                }, hn.omit = sl, hn.omitBy = function (e, t) {
                    return cl(e, ss(Oo(t)))
                }, hn.once = function (e) {
                    return es(2, e)
                }, hn.orderBy = function (e, t, i, n) {
                    return null == e ? [] : (gs(t) || (t = null == t ? [] : [t]), gs(i = n ? o : i) || (i = null == i ? [] : [i]), mr(e, t, i))
                }, hn.over = Dl, hn.overArgs = ls, hn.overEvery = Ol, hn.overSome = Nl, hn.partial = cs, hn.partialRight = us, hn.partition = Za, hn.pick = ll, hn.pickBy = cl, hn.property = Ll, hn.propertyOf = function (e) {
                    return function (t) {
                        return null == e ? o : Zn(e, t)
                    }
                }, hn.pull = _a, hn.pullAll = ka, hn.pullAllBy = function (e, t, i) {
                    return e && e.length && t && t.length ? br(e, t, Oo(i, 2)) : e
                }, hn.pullAllWith = function (e, t, i) {
                    return e && e.length && t && t.length ? br(e, t, o, i) : e
                }, hn.pullAt = ja, hn.range = Fl, hn.rangeRight = Rl, hn.rearg = ps, hn.reject = function (e, t) {
                    return (gs(e) ? Zt : Qn)(e, ss(Oo(t, 3)))
                }, hn.remove = function (e, t) {
                    var i = [];
                    if (!e || !e.length) return i;
                    var n = -1, r = [], o = e.length;
                    for (t = Oo(t, 3); ++n < o;) {
                        var a = e[n];
                        t(a, n, e) && (i.push(a), r.push(n))
                    }
                    return yr(e, r), i
                }, hn.rest = function (e, t) {
                    if ("function" != typeof e) throw new nt(l);
                    return _r(e, t = t === o ? t : Rs(t))
                }, hn.reverse = Ca,hn.sampleSize = function (e, t, i) {
                    return t = (i ? Wo(e, t, i) : t === o) ? 1 : Rs(t), (gs(e) ? jn : jr)(e, t)
                },hn.set = function (e, t, i) {
                    return null == e ? e : Cr(e, t, i)
                },hn.setWith = function (e, t, i, n) {
                    return n = "function" == typeof n ? n : o, null == e ? e : Cr(e, t, i, n)
                },hn.shuffle = function (e) {
                    return (gs(e) ? Cn : Sr)(e)
                },hn.slice = function (e, t, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? (i && "number" != typeof i && Wo(e, t, i) ? (t = 0, i = n) : (t = null == t ? 0 : Rs(t), i = i === o ? n : Rs(i)), Br(e, t, i)) : []
                },hn.sortBy = qa,hn.sortedUniq = function (e) {
                    return e && e.length ? Pr(e) : []
                },hn.sortedUniqBy = function (e, t) {
                    return e && e.length ? Pr(e, Oo(t, 2)) : []
                },hn.split = function (e, t, i) {
                    return i && "number" != typeof i && Wo(e, t, i) && (t = i = o), (i = i === o ? N : i >>> 0) ? (e = Vs(e)) && ("string" == typeof t || null != t && !Ms(t)) && !(t = Or(t)) && ki(e) ? Xr(zi(e), 0, i) : e.split(t, i) : []
                },hn.spread = function (e, t) {
                    if ("function" != typeof e) throw new nt(l);
                    return t = null == t ? 0 : Vi(Rs(t), 0), _r(function (i) {
                        var n = i[t], r = Xr(i, 0, t);
                        return n && ei(r, n), Gt(e, this, r)
                    })
                },hn.tail = function (e) {
                    var t = null == e ? 0 : e.length;
                    return t ? Br(e, 1, t) : []
                },hn.take = function (e, t, i) {
                    return e && e.length ? Br(e, 0, (t = i || t === o ? 1 : Rs(t)) < 0 ? 0 : t) : []
                },hn.takeRight = function (e, t, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? Br(e, (t = n - (t = i || t === o ? 1 : Rs(t))) < 0 ? 0 : t, n) : []
                },hn.takeRightWhile = function (e, t) {
                    return e && e.length ? Rr(e, Oo(t, 3), !1, !0) : []
                },hn.takeWhile = function (e, t) {
                    return e && e.length ? Rr(e, Oo(t, 3)) : []
                },hn.tap = function (e, t) {
                    return t(e), e
                },hn.throttle = function (e, t, i) {
                    var n = !0, r = !0;
                    if ("function" != typeof e) throw new nt(l);
                    return Cs(i) && (n = "leading" in i ? !!i.leading : n, r = "trailing" in i ? !!i.trailing : r), ns(e, t, {
                        leading: n,
                        maxWait: t,
                        trailing: r
                    })
                },hn.thru = Fa,hn.toArray = Ls,hn.toPairs = ul,hn.toPairsIn = pl,hn.toPath = function (e) {
                    return gs(e) ? $t(e, ca) : Ps(e) ? [e] : io(la(Vs(e)))
                },hn.toPlainObject = Qs,hn.transform = function (e, t, i) {
                    var n = gs(e), r = n || ys(e) || Ds(e);
                    if (t = Oo(t, 4), null == i) {
                        var o = e && e.constructor;
                        i = r ? n ? new o : [] : Cs(e) && _s(o) ? fn(Et(e)) : {}
                    }
                    return (r ? Wt : Wn)(e, function (e, n, r) {
                        return t(i, e, n, r)
                    }), i
                },hn.unary = function (e) {
                    return $a(e, 1)
                },hn.union = Ta,hn.unionBy = Ea,hn.unionWith = Sa,hn.uniq = function (e) {
                    return e && e.length ? Nr(e) : []
                },hn.uniqBy = function (e, t) {
                    return e && e.length ? Nr(e, Oo(t, 2)) : []
                },hn.uniqWith = function (e, t) {
                    return t = "function" == typeof t ? t : o, e && e.length ? Nr(e, o, t) : []
                },hn.unset = function (e, t) {
                    return null == e || Lr(e, t)
                },hn.unzip = Ba,hn.unzipWith = Ma,hn.update = function (e, t, i) {
                    return null == e ? e : Fr(e, t, Gr(i))
                },hn.updateWith = function (e, t, i, n) {
                    return n = "function" == typeof n ? n : o, null == e ? e : Fr(e, t, Gr(i), n)
                },hn.values = dl,hn.valuesIn = function (e) {
                    return null == e ? [] : mi(e, rl(e))
                },hn.without = za,hn.words = _l,hn.wrap = function (e, t) {
                    return cs(Gr(t), e)
                },hn.xor = Ia,hn.xorBy = Pa,hn.xorWith = Da,hn.zip = Oa,hn.zipObject = function (e, t) {
                    return Qr(e || [], t || [], En)
                },hn.zipObjectDeep = function (e, t) {
                    return Qr(e || [], t || [], Cr)
                },hn.zipWith = Na,hn.entries = ul,hn.entriesIn = pl,hn.extend = Us,hn.extendWith = Ws,Il(hn, hn),hn.add = Ql,hn.attempt = kl,hn.camelCase = hl,hn.capitalize = fl,hn.ceil = Vl,hn.clamp = function (e, t, i) {
                    return i === o && (i = t, t = o), i !== o && (i = (i = Hs(i)) == i ? i : 0), t !== o && (t = (t = Hs(t)) == t ? t : 0), Pn(Hs(e), t, i)
                },hn.clone = function (e) {
                    return Dn(e, f)
                },hn.cloneDeep = function (e) {
                    return Dn(e, d | f)
                },hn.cloneDeepWith = function (e, t) {
                    return Dn(e, d | f, t = "function" == typeof t ? t : o)
                },hn.cloneWith = function (e, t) {
                    return Dn(e, f, t = "function" == typeof t ? t : o)
                },hn.conformsTo = function (e, t) {
                    return null == t || On(e, t, nl(t))
                },hn.deburr = vl,hn.defaultTo = function (e, t) {
                    return null == e || e != e ? t : e
                },hn.divide = Gl,hn.endsWith = function (e, t, i) {
                    e = Vs(e), t = Or(t);
                    var n = e.length, r = i = i === o ? n : Pn(Rs(i), 0, n);
                    return (i -= t.length) >= 0 && e.slice(i, r) == t
                },hn.eq = ds,hn.escape = function (e) {
                    return (e = Vs(e)) && je.test(e) ? e.replace(_e, xi) : e
                },hn.escapeRegExp = function (e) {
                    return (e = Vs(e)) && Ie.test(e) ? e.replace(ze, "\\$&") : e
                },hn.every = function (e, t, i) {
                    var n = gs(e) ? Jt : Yn;
                    return i && Wo(e, t, i) && (t = o), n(e, Oo(t, 3))
                },hn.find = Ha,hn.findIndex = va,hn.findKey = function (e, t) {
                    return oi(e, Oo(t, 3), Wn)
                },hn.findLast = Qa,hn.findLastIndex = ga,hn.findLastKey = function (e, t) {
                    return oi(e, Oo(t, 3), Xn)
                },hn.floor = Ul,hn.forEach = Va,hn.forEachRight = Ga,hn.forIn = function (e, t) {
                    return null == e ? e : Gn(e, Oo(t, 3), rl)
                },hn.forInRight = function (e, t) {
                    return null == e ? e : Un(e, Oo(t, 3), rl)
                },hn.forOwn = function (e, t) {
                    return e && Wn(e, Oo(t, 3))
                },hn.forOwnRight = function (e, t) {
                    return e && Xn(e, Oo(t, 3))
                },hn.get = Ks,hn.gt = hs,hn.gte = fs,hn.has = function (e, t) {
                    return null != e && Qo(e, t, er)
                },hn.hasIn = $s,hn.head = Aa,hn.identity = Sl,hn.includes = function (e, t, i, n) {
                    e = As(e) ? e : dl(e), i = i && !n ? Rs(i) : 0;
                    var r = e.length;
                    return i < 0 && (i = Vi(r + i, 0)), Is(e) ? i <= r && e.indexOf(t, i) > -1 : !!r && si(e, t, i) > -1
                },hn.indexOf = function (e, t, i) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var r = null == i ? 0 : Rs(i);
                    return r < 0 && (r = Vi(n + r, 0)), si(e, t, r)
                },hn.inRange = function (e, t, i) {
                    return t = Fs(t), i === o ? (i = t, t = 0) : i = Fs(i), function (e, t, i) {
                        return e >= Gi(t, i) && e < Vi(t, i)
                    }(e = Hs(e), t, i)
                },hn.invoke = il,hn.isArguments = vs,hn.isArray = gs,hn.isArrayBuffer = ms,hn.isArrayLike = As,hn.isArrayLikeObject = bs,hn.isBoolean = function (e) {
                    return !0 === e || !1 === e || Ts(e) && Kn(e) == V
                },hn.isBuffer = ys,hn.isDate = ws,hn.isElement = function (e) {
                    return Ts(e) && 1 === e.nodeType && !Bs(e)
                },hn.isEmpty = function (e) {
                    if (null == e) return !0;
                    if (As(e) && (gs(e) || "string" == typeof e || "function" == typeof e.splice || ys(e) || Ds(e) || vs(e))) return !e.length;
                    var t = Ho(e);
                    if (t == Z || t == ie) return !e.size;
                    if (qo(e)) return !cr(e).length;
                    for (var i in e) if (ct.call(e, i)) return !1;
                    return !0
                },hn.isEqual = function (e, t) {
                    return or(e, t)
                },hn.isEqualWith = function (e, t, i) {
                    var n = (i = "function" == typeof i ? i : o) ? i(e, t) : o;
                    return n === o ? or(e, t, o, i) : !!n
                },hn.isError = xs,hn.isFinite = function (e) {
                    return "number" == typeof e && Yi(e)
                },hn.isFunction = _s,hn.isInteger = ks,hn.isLength = js,hn.isMap = Es,hn.isMatch = function (e, t) {
                    return e === t || ar(e, t, Lo(t))
                },hn.isMatchWith = function (e, t, i) {
                    return i = "function" == typeof i ? i : o, ar(e, t, Lo(t), i)
                },hn.isNaN = function (e) {
                    return Ss(e) && e != +e
                },hn.isNative = function (e) {
                    if (Zo(e)) throw new r(s);
                    return sr(e)
                },hn.isNil = function (e) {
                    return null == e
                },hn.isNull = function (e) {
                    return null === e
                },hn.isNumber = Ss,hn.isObject = Cs,hn.isObjectLike = Ts,hn.isPlainObject = Bs,hn.isRegExp = Ms,hn.isSafeInteger = function (e) {
                    return ks(e) && e >= -P && e <= P
                },hn.isSet = zs,hn.isString = Is,hn.isSymbol = Ps,hn.isTypedArray = Ds,hn.isUndefined = function (e) {
                    return e === o
                },hn.isWeakMap = function (e) {
                    return Ts(e) && Ho(e) == ae
                },hn.isWeakSet = function (e) {
                    return Ts(e) && Kn(e) == se
                },hn.join = function (e, t) {
                    return null == e ? "" : Hi.call(e, t)
                },hn.kebabCase = gl,hn.last = xa,hn.lastIndexOf = function (e, t, i) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var r = n;
                    return i !== o && (r = (r = Rs(i)) < 0 ? Vi(n + r, 0) : Gi(r, n - 1)), t == t ? function (e, t, i) {
                        for (var n = i + 1; n--;) if (e[n] === t) return n;
                        return n
                    }(e, t, r) : ai(e, ci, r, !0)
                },hn.lowerCase = ml,hn.lowerFirst = Al,hn.lt = Os,hn.lte = Ns,hn.max = function (e) {
                    return e && e.length ? Hn(e, Sl, $n) : o
                },hn.maxBy = function (e, t) {
                    return e && e.length ? Hn(e, Oo(t, 2), $n) : o
                },hn.mean = function (e) {
                    return ui(e, Sl)
                },hn.meanBy = function (e, t) {
                    return ui(e, Oo(t, 2))
                },hn.min = function (e) {
                    return e && e.length ? Hn(e, Sl, pr) : o
                },hn.minBy = function (e, t) {
                    return e && e.length ? Hn(e, Oo(t, 2), pr) : o
                },hn.stubArray = Yl,hn.stubFalse = Hl,hn.stubObject = function () {
                    return {}
                },hn.stubString = function () {
                    return ""
                },hn.stubTrue = function () {
                    return !0
                },hn.multiply = Wl,hn.nth = function (e, t) {
                    return e && e.length ? gr(e, Rs(t)) : o
                },hn.noConflict = function () {
                    return It._ === this && (It._ = ft), this
                },hn.noop = Pl,hn.now = Ka,hn.pad = function (e, t, i) {
                    e = Vs(e);
                    var n = (t = Rs(t)) ? Mi(e) : 0;
                    if (!t || n >= t) return e;
                    var r = (t - n) / 2;
                    return Ao(Li(r), i) + e + Ao(Ni(r), i)
                },hn.padEnd = function (e, t, i) {
                    e = Vs(e);
                    var n = (t = Rs(t)) ? Mi(e) : 0;
                    return t && n < t ? e + Ao(t - n, i) : e
                },hn.padStart = function (e, t, i) {
                    e = Vs(e);
                    var n = (t = Rs(t)) ? Mi(e) : 0;
                    return t && n < t ? Ao(t - n, i) + e : e
                },hn.parseInt = function (e, t, i) {
                    return i || null == t ? t = 0 : t && (t = +t), Wi(Vs(e).replace(De, ""), t || 0)
                },hn.random = function (e, t, i) {
                    if (i && "boolean" != typeof i && Wo(e, t, i) && (t = i = o), i === o && ("boolean" == typeof t ? (i = t, t = o) : "boolean" == typeof e && (i = e, e = o)), e === o && t === o ? (e = 0, t = 1) : (e = Fs(e), t === o ? (t = e, e = 0) : t = Fs(t)), e > t) {
                        var n = e;
                        e = t, t = n
                    }
                    if (i || e % 1 || t % 1) {
                        var r = Xi();
                        return Gi(e + r * (t - e + St("1e-" + ((r + "").length - 1))), t)
                    }
                    return wr(e, t)
                },hn.reduce = function (e, t, i) {
                    var n = gs(e) ? ti : hi, r = arguments.length < 3;
                    return n(e, Oo(t, 4), i, r, Fn)
                },hn.reduceRight = function (e, t, i) {
                    var n = gs(e) ? ii : hi, r = arguments.length < 3;
                    return n(e, Oo(t, 4), i, r, Rn)
                },hn.repeat = function (e, t, i) {
                    return t = (i ? Wo(e, t, i) : t === o) ? 1 : Rs(t), xr(Vs(e), t)
                },hn.replace = function () {
                    var e = arguments, t = Vs(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2])
                },hn.result = function (e, t, i) {
                    var n = -1, r = (t = Ur(t, e)).length;
                    for (r || (r = 1, e = o); ++n < r;) {
                        var a = null == e ? o : e[ca(t[n])];
                        a === o && (n = r, a = i), e = _s(a) ? a.call(e) : a
                    }
                    return e
                },hn.round = Xl,hn.runInContext = e,hn.sample = function (e) {
                    return (gs(e) ? kn : kr)(e)
                },hn.size = function (e) {
                    if (null == e) return 0;
                    if (As(e)) return Is(e) ? Mi(e) : e.length;
                    var t = Ho(e);
                    return t == Z || t == ie ? e.size : cr(e).length
                },hn.snakeCase = bl,hn.some = function (e, t, i) {
                    var n = gs(e) ? ni : Mr;
                    return i && Wo(e, t, i) && (t = o), n(e, Oo(t, 3))
                },hn.sortedIndex = function (e, t) {
                    return zr(e, t)
                },hn.sortedIndexBy = function (e, t, i) {
                    return Ir(e, t, Oo(i, 2))
                },hn.sortedIndexOf = function (e, t) {
                    var i = null == e ? 0 : e.length;
                    if (i) {
                        var n = zr(e, t);
                        if (n < i && ds(e[n], t)) return n
                    }
                    return -1
                },hn.sortedLastIndex = function (e, t) {
                    return zr(e, t, !0)
                },hn.sortedLastIndexBy = function (e, t, i) {
                    return Ir(e, t, Oo(i, 2), !0)
                },hn.sortedLastIndexOf = function (e, t) {
                    if (null != e && e.length) {
                        var i = zr(e, t, !0) - 1;
                        if (ds(e[i], t)) return i
                    }
                    return -1
                },hn.startCase = yl,hn.startsWith = function (e, t, i) {
                    return e = Vs(e), i = null == i ? 0 : Pn(Rs(i), 0, e.length), t = Or(t), e.slice(i, i + t.length) == t
                },hn.subtract = Jl,hn.sum = function (e) {
                    return e && e.length ? fi(e, Sl) : 0
                },hn.sumBy = function (e, t) {
                    return e && e.length ? fi(e, Oo(t, 2)) : 0
                },hn.template = function (e, t, i) {
                    var n = hn.templateSettings;
                    i && Wo(e, t, i) && (t = o), e = Vs(e), t = Ws({}, t, n, Co);
                    var r, a, s = Ws({}, t.imports, n.imports, Co), l = nl(s), c = mi(s, l), u = 0,
                        p = t.interpolate || Ze, d = "__p += '",
                        h = tt((t.escape || Ze).source + "|" + p.source + "|" + (p === Ee ? He : Ze).source + "|" + (t.evaluate || Ze).source + "|$", "g"),
                        f = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++jt + "]") + "\n";
                    e.replace(h, function (t, i, n, o, s, l) {
                        return n || (n = o), d += e.slice(u, l).replace(qe, _i), i && (r = !0, d += "' +\n__e(" + i + ") +\n'"), s && (a = !0, d += "';\n" + s + ";\n__p += '"), n && (d += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), u = l + t.length, t
                    }), d += "';\n";
                    var v = t.variable;
                    v || (d = "with (obj) {\n" + d + "\n}\n"), d = (a ? d.replace(be, "") : d).replace(ye, "$1").replace(we, "$1;"), d = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (r ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                    var g = kl(function () {
                        return Ke(l, f + "return " + d).apply(o, c)
                    });
                    if (g.source = d, xs(g)) throw g;
                    return g
                },hn.times = function (e, t) {
                    if ((e = Rs(e)) < 1 || e > P) return [];
                    var i = N, n = Gi(e, N);
                    t = Oo(t), e -= N;
                    for (var r = vi(n, t); ++i < e;) t(i);
                    return r
                },hn.toFinite = Fs,hn.toInteger = Rs,hn.toLength = Ys,hn.toLower = function (e) {
                    return Vs(e).toLowerCase()
                },hn.toNumber = Hs,hn.toSafeInteger = function (e) {
                    return e ? Pn(Rs(e), -P, P) : 0 === e ? e : 0
                },hn.toString = Vs,hn.toUpper = function (e) {
                    return Vs(e).toUpperCase()
                },hn.trim = function (e, t, i) {
                    if ((e = Vs(e)) && (i || t === o)) return e.replace(Pe, "");
                    if (!e || !(t = Or(t))) return e;
                    var n = zi(e), r = zi(t);
                    return Xr(n, bi(n, r), yi(n, r) + 1).join("")
                },hn.trimEnd = function (e, t, i) {
                    if ((e = Vs(e)) && (i || t === o)) return e.replace(Oe, "");
                    if (!e || !(t = Or(t))) return e;
                    var n = zi(e);
                    return Xr(n, 0, yi(n, zi(t)) + 1).join("")
                },hn.trimStart = function (e, t, i) {
                    if ((e = Vs(e)) && (i || t === o)) return e.replace(De, "");
                    if (!e || !(t = Or(t))) return e;
                    var n = zi(e);
                    return Xr(n, bi(n, zi(t))).join("")
                },hn.truncate = function (e, t) {
                    var i = T, n = E;
                    if (Cs(t)) {
                        var r = "separator" in t ? t.separator : r;
                        i = "length" in t ? Rs(t.length) : i, n = "omission" in t ? Or(t.omission) : n
                    }
                    var a = (e = Vs(e)).length;
                    if (ki(e)) {
                        var s = zi(e);
                        a = s.length
                    }
                    if (i >= a) return e;
                    var l = i - Mi(n);
                    if (l < 1) return n;
                    var c = s ? Xr(s, 0, l).join("") : e.slice(0, l);
                    if (r === o) return c + n;
                    if (s && (l += c.length - l), Ms(r)) {
                        if (e.slice(l).search(r)) {
                            var u, p = c;
                            for (r.global || (r = tt(r.source, Vs(Qe.exec(r)) + "g")), r.lastIndex = 0; u = r.exec(p);) var d = u.index;
                            c = c.slice(0, d === o ? l : d)
                        }
                    } else if (e.indexOf(Or(r), l) != l) {
                        var h = c.lastIndexOf(r);
                        h > -1 && (c = c.slice(0, h))
                    }
                    return c + n
                },hn.unescape = function (e) {
                    return (e = Vs(e)) && ke.test(e) ? e.replace(xe, Ii) : e
                },hn.uniqueId = function (e) {
                    var t = ++ut;
                    return Vs(e) + t
                },hn.upperCase = wl,hn.upperFirst = xl,hn.each = Va,hn.eachRight = Ga,hn.first = Aa,Il(hn, function () {
                    var e = {};
                    return Wn(hn, function (t, i) {
                        ct.call(hn.prototype, i) || (e[i] = t)
                    }), e
                }(), {chain: !1}),hn.VERSION = "4.17.10",Wt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
                    hn[e].placeholder = hn
                }),Wt(["drop", "take"], function (e, t) {
                    mn.prototype[e] = function (i) {
                        i = i === o ? 1 : Vi(Rs(i), 0);
                        var n = this.__filtered__ && !t ? new mn(this) : this.clone();
                        return n.__filtered__ ? n.__takeCount__ = Gi(i, n.__takeCount__) : n.__views__.push({
                            size: Gi(i, N),
                            type: e + (n.__dir__ < 0 ? "Right" : "")
                        }), n
                    }, mn.prototype[e + "Right"] = function (t) {
                        return this.reverse()[e](t).reverse()
                    }
                }),Wt(["filter", "map", "takeWhile"], function (e, t) {
                    var i = t + 1, n = i == M || 3 == i;
                    mn.prototype[e] = function (e) {
                        var t = this.clone();
                        return t.__iteratees__.push({
                            iteratee: Oo(e, 3),
                            type: i
                        }), t.__filtered__ = t.__filtered__ || n, t
                    }
                }),Wt(["head", "last"], function (e, t) {
                    var i = "take" + (t ? "Right" : "");
                    mn.prototype[e] = function () {
                        return this[i](1).value()[0]
                    }
                }),Wt(["initial", "tail"], function (e, t) {
                    var i = "drop" + (t ? "" : "Right");
                    mn.prototype[e] = function () {
                        return this.__filtered__ ? new mn(this) : this[i](1)
                    }
                }),mn.prototype.compact = function () {
                    return this.filter(Sl)
                },mn.prototype.find = function (e) {
                    return this.filter(e).head()
                },mn.prototype.findLast = function (e) {
                    return this.reverse().find(e)
                },mn.prototype.invokeMap = _r(function (e, t) {
                    return "function" == typeof e ? new mn(this) : this.map(function (i) {
                        return nr(i, e, t)
                    })
                }),mn.prototype.reject = function (e) {
                    return this.filter(ss(Oo(e)))
                },mn.prototype.slice = function (e, t) {
                    e = Rs(e);
                    var i = this;
                    return i.__filtered__ && (e > 0 || t < 0) ? new mn(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== o && (i = (t = Rs(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i)
                },mn.prototype.takeRightWhile = function (e) {
                    return this.reverse().takeWhile(e).reverse()
                },mn.prototype.toArray = function () {
                    return this.take(N)
                },Wn(mn.prototype, function (e, t) {
                    var i = /^(?:filter|find|map|reject)|While$/.test(t), n = /^(?:head|last)$/.test(t),
                        r = hn[n ? "take" + ("last" == t ? "Right" : "") : t], a = n || /^find/.test(t);
                    r && (hn.prototype[t] = function () {
                        var t = this.__wrapped__, s = n ? [1] : arguments, l = t instanceof mn, c = s[0],
                            u = l || gs(t), p = function (e) {
                                var t = r.apply(hn, ei([e], s));
                                return n && d ? t[0] : t
                            };
                        u && i && "function" == typeof c && 1 != c.length && (l = u = !1);
                        var d = this.__chain__, h = !!this.__actions__.length, f = a && !d, v = l && !h;
                        if (!a && u) {
                            t = v ? t : new mn(this);
                            var g = e.apply(t, s);
                            return g.__actions__.push({func: Fa, args: [p], thisArg: o}), new gn(g, d)
                        }
                        return f && v ? e.apply(this, s) : (g = this.thru(p), f ? n ? g.value()[0] : g.value() : g)
                    })
                }),Wt(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
                    var t = rt[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                        n = /^(?:pop|shift)$/.test(e);
                    hn.prototype[e] = function () {
                        var e = arguments;
                        if (n && !this.__chain__) {
                            var r = this.value();
                            return t.apply(gs(r) ? r : [], e)
                        }
                        return this[i](function (i) {
                            return t.apply(gs(i) ? i : [], e)
                        })
                    }
                }),Wn(mn.prototype, function (e, t) {
                    var i = hn[t];
                    if (i) {
                        var n = i.name + "";
                        (rn[n] || (rn[n] = [])).push({name: t, func: i})
                    }
                }),rn[fo(o, A).name] = [{name: "wrapper", func: o}],mn.prototype.clone = function () {
                    var e = new mn(this.__wrapped__);
                    return e.__actions__ = io(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = io(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = io(this.__views__), e
                },mn.prototype.reverse = function () {
                    if (this.__filtered__) {
                        var e = new mn(this);
                        e.__dir__ = -1, e.__filtered__ = !0
                    } else (e = this.clone()).__dir__ *= -1;
                    return e
                },mn.prototype.value = function () {
                    var e = this.__wrapped__.value(), t = this.__dir__, i = gs(e), n = t < 0, r = i ? e.length : 0,
                        o = function (e, t, i) {
                            for (var n = -1, r = i.length; ++n < r;) {
                                var o = i[n], a = o.size;
                                switch (o.type) {
                                    case"drop":
                                        e += a;
                                        break;
                                    case"dropRight":
                                        t -= a;
                                        break;
                                    case"take":
                                        t = Gi(t, e + a);
                                        break;
                                    case"takeRight":
                                        e = Vi(e, t - a)
                                }
                            }
                            return {start: e, end: t}
                        }(0, r, this.__views__), a = o.start, s = o.end, l = s - a, c = n ? s : a - 1,
                        u = this.__iteratees__, p = u.length, d = 0, h = Gi(l, this.__takeCount__);
                    if (!i || !n && r == l && h == l) return Yr(e, this.__actions__);
                    var f = [];
                    e:for (; l-- && d < h;) {
                        for (var v = -1, g = e[c += t]; ++v < p;) {
                            var m = u[v], A = m.iteratee, b = m.type, y = A(g);
                            if (b == z) g = y; else if (!y) {
                                if (b == M) continue e;
                                break e
                            }
                        }
                        f[d++] = g
                    }
                    return f
                },hn.prototype.at = Ra,hn.prototype.chain = function () {
                    return La(this)
                },hn.prototype.commit = function () {
                    return new gn(this.value(), this.__chain__)
                },hn.prototype.next = function () {
                    this.__values__ === o && (this.__values__ = Ls(this.value()));
                    var e = this.__index__ >= this.__values__.length;
                    return {done: e, value: e ? o : this.__values__[this.__index__++]}
                },hn.prototype.plant = function (e) {
                    for (var t, i = this; i instanceof vn;) {
                        var n = pa(i);
                        n.__index__ = 0, n.__values__ = o, t ? r.__wrapped__ = n : t = n;
                        var r = n;
                        i = i.__wrapped__
                    }
                    return r.__wrapped__ = e, t
                },hn.prototype.reverse = function () {
                    var e = this.__wrapped__;
                    if (e instanceof mn) {
                        var t = e;
                        return this.__actions__.length && (t = new mn(this)), (t = t.reverse()).__actions__.push({
                            func: Fa,
                            args: [Ca],
                            thisArg: o
                        }), new gn(t, this.__chain__)
                    }
                    return this.thru(Ca)
                },hn.prototype.toJSON = hn.prototype.valueOf = hn.prototype.value = function () {
                    return Yr(this.__wrapped__, this.__actions__)
                },hn.prototype.first = hn.prototype.head,Nt && (hn.prototype[Nt] = function () {
                    return this
                }),hn
            }();
            It._ = Pi, (r = function () {
                return Pi
            }.call(t, i, t, n)) === o || (n.exports = r)
        }).call(this)
    }).call(this, i(4), i(34)(e))
}, function (e, t, i) {
    "use strict";
    i(9)
}, function (e, t, i) {
    "use strict";
    i(10), i(13), i(15), i(17);
    var n = i(19), r = i(20), o = (window.$, new r.Index);
    (0, n.RemInit)(550), o.init()
}, function (e, t, i) {
    var n = i(11);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var r = {hmr: !0, transform: void 0, insertInto: void 0};
    i(1)(n, r);
    n.locals && (e.exports = n.locals)
}, function (e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, 'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,button,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,input,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{font-family:Microsoft Yahei;line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}img{display:block;margin:0 auto}', ""])
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var i = t.protocol + "//" + t.host, n = i + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var r, o = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? i + o : n + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
        })
    }
}, function (e, t, i) {
    var n = i(14);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var r = {hmr: !0, transform: void 0, insertInto: void 0};
    i(1)(n, r);
    n.locals && (e.exports = n.locals)
}, function (e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, ".swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-flex;display:flex;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0;width:100%;height:100%;position:relative}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-align-items:flex-start;align-items:flex-start;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{touch-action:pan-y}.swiper-wp8-vertical{touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E\")}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E\");right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-pagination{position:absolute;text-align:center;transition:.3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:hsla(0,0%,100%,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-zoom-container{width:100%;height:100%;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12) infinite;animation:swiper-preloader-spin 1s steps(12) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""])
}, function (e, t, i) {
    var n = i(16);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var r = {hmr: !0, transform: void 0, insertInto: void 0};
    i(1)(n, r);
    n.locals && (e.exports = n.locals)
}, function (e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, "/*!\r\n * WeUI v1.1.3 (https://github.com/weui/weui)\r\n * Copyright 2018 Tencent, Inc.\r\n * Licensed under the MIT license\r\n */html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{line-height:1.6;font-family:-apple-system-font,Helvetica Neue,sans-serif}*{margin:0;padding:0}a img{border:0}a{text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}@font-face{font-weight:400;font-style:normal;font-family:weui;src:url(\"data:application/octet-stream;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJAKEx+AAABfAAAAFZjbWFw65cFHQAAAhwAAAJQZ2x5ZvCRR/EAAASUAAAKtGhlYWQMPROtAAAA4AAAADZoaGVhCCwD+gAAALwAAAAkaG10eEJo//8AAAHUAAAASGxvY2EYqhW4AAAEbAAAACZtYXhwASEAVQAAARgAAAAgbmFtZeNcHtgAAA9IAAAB5nBvc3T6bLhLAAARMAAAAOYAAQAAA+gAAABaA+j/////A+kAAQAAAAAAAAAAAAAAAAAAABIAAQAAAAEAACbZbxtfDzz1AAsD6AAAAADUm2dvAAAAANSbZ2///wAAA+kD6gAAAAgAAgAAAAAAAAABAAAAEgBJAAUAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQOwAZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6gHqEQPoAAAAWgPqAAAAAAABAAAAAAAAAAAAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+j//wPoAAAD6AAAAAAABQAAAAMAAAAsAAAABAAAAXQAAQAAAAAAbgADAAEAAAAsAAMACgAAAXQABABCAAAABAAEAAEAAOoR//8AAOoB//8AAAABAAQAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAANwAAAAAAAAAEQAA6gEAAOoBAAAAAQAA6gIAAOoCAAAAAgAA6gMAAOoDAAAAAwAA6gQAAOoEAAAABAAA6gUAAOoFAAAABQAA6gYAAOoGAAAABgAA6gcAAOoHAAAABwAA6ggAAOoIAAAACAAA6gkAAOoJAAAACQAA6goAAOoKAAAACgAA6gsAAOoLAAAACwAA6gwAAOoMAAAADAAA6g0AAOoNAAAADQAA6g4AAOoOAAAADgAA6g8AAOoPAAAADwAA6hAAAOoQAAAAEAAA6hEAAOoRAAAAEQAAAAAARgCMANIBJAF4AcQCMgJgAqgC/ANIA6YD/gROBKAE9AVaAAAAAgAAAAADrwOtABQAKQAAASIHBgcGFBcWFxYyNzY3NjQnJicmAyInJicmNDc2NzYyFxYXFhQHBgcGAfV4Z2Q7PDw7ZGfwZmQ7PDw7ZGZ4bl5bNjc3Nlte215bNjc3NlteA608O2Rn8GdjOzw8O2Nn8GdkOzz8rzc1W17bXlw1Nzc1XF7bXls1NwAAAAACAAAAAAOzA7MAFwAtAAABIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYTBwYiLwEmNjsBETQ2OwEyFhURMzIWAe52Z2Q7PT07ZGd2fGpmOz4+O2ZpIXYOKA52Dg0XXQsHJgcLXRcNA7M+O2ZqfHZnZDs9PTtkZ3Z9aWY7Pv3wmhISmhIaARcICwsI/ukaAAMAAAAAA+UD5QAXACMALAAAASIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAxQrASI1AzQ7ATIHJyImNDYyFhQGAe6Ecm9BRERBb3KEiXZxQkREQnF1aQIxAwgCQgMBIxIZGSQZGQPkREJxdomEcm9BRERBb3KEinVxQkT9HQICAWICAjEZIxkZIxkAAAAAAgAAAAADsQPkABkALgAAAQYHBgc2BREUFxYXFhc2NzY3NjURJBcmJyYTAQYvASY/ATYyHwEWNjclNjIfARYB9VVVQk+v/tFHPmxebGxdbT1I/tGvT0JVo/7VBASKAwMSAQUBcQEFAgESAgUBEQQD4xMYEhk3YP6sjnVlSD8cHD9IZXWOAVRgNxkSGP62/tkDA48EBBkCAVYCAQHlAQIQBAAAAAADAAAAAAOxA+QAGwAqADMAAAEGBwYHBgcGNxEUFxYXFhc2NzY3NjURJBcmJyYHMzIWFQMUBisBIicDNDYTIiY0NjIWFAYB9UFBODssO38gRz5sXmxsXW09SP7YqFBBVW80BAYMAwImBQELBh4PFhYeFRUD5A8SDhIOEikK/q2PdWRJPh0dPklkdY8BU141GRIY/AYE/sYCAwUBOgQG/kAVHxUVHxUAAAACAAAAAAPkA+QAFwAtAAABIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYTAQYiLwEmPwE2Mh8BFjI3ATYyHwEWAe6Ecm9BQ0NCbnODiXVxQkREQnF1kf6gAQUBowMDFgEFAYUCBQEBQwIFARUEA+NEQnF1iYNzbkJDQ0FvcoSJdXFCRP6j/qUBAagEBR4CAWYBAQENAgIVBAAAAAQAAAAAA68DrQAUACkAPwBDAAABIgcGBwYUFxYXFjI3Njc2NCcmJyYDIicmJyY0NzY3NjIXFhcWFAcGBwYTBQ4BLwEmBg8BBhYfARYyNwE+ASYiFzAfAQH1eGdkOzw8O2Rn8GZkOzw8O2RmeG5eWzY3NzZbXtteWzY3NzZbXmn+9gYSBmAGDwUDBQEGfQUQBgElBQELEBUBAQOtPDtkZ/BnYzs8PDtjZ/BnZDs8/K83NVte215cNTc3NVxe215bNTcCJt0FAQVJBQIGBAcRBoAGBQEhBQ8LBAEBAAABAAAAAAO7AzoAFwAAEy4BPwE+AR8BFjY3ATYWFycWFAcBBiInPQoGBwUHGgzLDCELAh0LHwsNCgr9uQoeCgGzCyEOCw0HCZMJAQoBvgkCCg0LHQv9sQsKAAAAAAIAAAAAA+UD5gAXACwAAAEiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJhMHBi8BJicmNRM0NjsBMhYVExceAQHvhHJvQUNDQm5zg4l1cUJEREJxdVcQAwT6AwIEEAMCKwIDDsUCAQPlREJxdYmDc25CQ0NBb3KEiXVxQkT9VhwEAncCAgMGAXoCAwMC/q2FAgQAAAQAAAAAA68DrQADABgALQAzAAABMB8BAyIHBgcGFBcWFxYyNzY3NjQnJicmAyInJicmNDc2NzYyFxYXFhQHBgcGAyMVMzUjAuUBAfJ4Z2Q7PDw7ZGfwZmQ7PDw7ZGZ4bl5bNjc3Nlte215bNjc3NltemyT92QKDAQEBLDw7ZGfwZ2M7PDw7Y2fwZ2Q7PPyvNzVbXtteXDU3NzVcXtteWzU3AjH9JAAAAAMAAAAAA+QD5AAXACcAMAAAASIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAzMyFhUDFAYrASImNQM0NhMiJjQ2MhYUBgHuhHJvQUNDQm5zg4l1cUJEREJxdZ42BAYMAwInAwMMBh8PFhYeFhYD40RCcXWJg3NuQkNDQW9yhIl1cUJE/vYGBf7AAgMDAgFABQb+NhYfFhYfFgAABAAAAAADwAPAAAgAEgAoAD0AAAEyNjQmIgYUFhcjFTMRIxUzNSMDIgcGBwYVFBYXFjMyNzY3NjU0Jy4BAyInJicmNDc2NzYyFxYXFhQHBgcGAfQYISEwISFRjzk5yTorhG5rPT99am+DdmhlPD4+PMyFbV5bNTc3NVte2l5bNTc3NVteAqAiLyIiLyI5Hf7EHBwCsT89a26Ed8w8Pj48ZWh2g29qffyjNzVbXtpeWzU3NzVbXtpeWzU3AAADAAAAAAOoA6gACwAgADUAAAEHJwcXBxc3FzcnNwMiBwYHBhQXFhcWMjc2NzY0JyYnJgMiJyYnJjQ3Njc2MhcWFxYUBwYHBgKOmpocmpocmpocmpq2dmZiOjs7OmJm7GZiOjs7OmJmdmtdWTQ2NjRZXdZdWTQ2NjRZXQKqmpocmpocmpocmpoBGTs6YmbsZmI6Ozs6YmbsZmI6O/zCNjRZXdZdWTQ2NjRZXdZdWTQ2AAMAAAAAA+kD6gAaAC8AMAAAAQYHBiMiJyYnJjQ3Njc2MhcWFxYVFAcGBwEHATI3Njc2NCcmJyYiBwYHBhQXFhcWMwKONUBCR21dWjU3NzVaXdpdWzU2GBcrASM5/eBXS0grKysrSEuuSkkqLCwqSUpXASMrFxg2NVtd2l1aNTc3NVpdbUdCQDX+3jkBGSsrSEuuSkkqLCwqSUquS0grKwAC//8AAAPoA+gAFAAwAAABIgcGBwYQFxYXFiA3Njc2ECcmJyYTFg4BIi8BBwYuATQ/AScmPgEWHwE3Nh4BBg8BAfSIdHFDRERDcXQBEHRxQ0REQ3F0SQoBFBsKoqgKGxMKqKIKARQbCqKoChsUAQqoA+hEQ3F0/vB0cUNERENxdAEQdHFDRP1jChsTCqiiCgEUGwqiqAobFAEKqKIKARQbCqIAAAIAAAAAA+QD5AAXADQAAAEiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJhMUBiMFFxYUDwEGLwEuAT8BNh8BFhQPAQUyFh0BAe6Ecm9BQ0NCbnODiXVxQkREQnF1fwQC/pGDAQEVAwTsAgEC7AQEFAIBhAFwAgMD40RCcXWJg3NuQkNDQW9yhIl1cUJE/fYCAwuVAgQCFAQE0AIFAtEEBBQCBQGVCwMDJwAAAAUAAAAAA9QD0wAjACcANwBHAEgAAAERFAYjISImNREjIiY9ATQ2MyE1NDYzITIWHQEhMhYdARQGIyERIREHIgYVERQWOwEyNjURNCYjISIGFREUFjsBMjY1ETQmKwEDeyYb/XYbJkMJDQ0JAQYZEgEvExkBBgkNDQn9CQJc0QkNDQktCQ0NCf7sCQ0NCS0JDQ0JLQMi/TQbJiYbAswMCiwJDS4SGRkSLg0JLAoM/UwCtGsNCf5NCQ0NCQGzCQ0NCf5NCQ0NCQGzCQ0AAAAAEADGAAEAAAAAAAEABAAAAAEAAAAAAAIABwAEAAEAAAAAAAMABAALAAEAAAAAAAQABAAPAAEAAAAAAAUACwATAAEAAAAAAAYABAAeAAEAAAAAAAoAKwAiAAEAAAAAAAsAEwBNAAMAAQQJAAEACABgAAMAAQQJAAIADgBoAAMAAQQJAAMACAB2AAMAAQQJAAQACAB+AAMAAQQJAAUAFgCGAAMAAQQJAAYACACcAAMAAQQJAAoAVgCkAAMAAQQJAAsAJgD6d2V1aVJlZ3VsYXJ3ZXVpd2V1aVZlcnNpb24gMS4wd2V1aUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAHcAZQB1AGkAUgBlAGcAdQBsAGEAcgB3AGUAdQBpAHcAZQB1AGkAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQB1AGkARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETAAZjaXJjbGUIZG93bmxvYWQEaW5mbwxzYWZlX3N1Y2Nlc3MJc2FmZV93YXJuB3N1Y2Nlc3MOc3VjY2Vzcy1jaXJjbGURc3VjY2Vzcy1uby1jaXJjbGUHd2FpdGluZw53YWl0aW5nLWNpcmNsZQR3YXJuC2luZm8tY2lyY2xlBmNhbmNlbAZzZWFyY2gFY2xlYXIEYmFjawZkZWxldGUAAAAA\") format(\"truetype\")}[class*=\" weui-icon-\"],[class^=weui-icon-]{display:inline-block;vertical-align:middle;font:normal normal normal 14px/1 weui;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}[class*=\" weui-icon-\"]:before,[class^=weui-icon-]:before{display:inline-block;margin-left:.2em;margin-right:.2em}.weui-icon-circle:before{content:\"\\EA01\"}.weui-icon-download:before{content:\"\\EA02\"}.weui-icon-info:before{content:\"\\EA03\"}.weui-icon-safe-success:before{content:\"\\EA04\"}.weui-icon-safe-warn:before{content:\"\\EA05\"}.weui-icon-success:before{content:\"\\EA06\"}.weui-icon-success-circle:before{content:\"\\EA07\"}.weui-icon-success-no-circle:before{content:\"\\EA08\"}.weui-icon-waiting:before{content:\"\\EA09\"}.weui-icon-waiting-circle:before{content:\"\\EA0A\"}.weui-icon-warn:before{content:\"\\EA0B\"}.weui-icon-info-circle:before{content:\"\\EA0C\"}.weui-icon-cancel:before{content:\"\\EA0D\"}.weui-icon-search:before{content:\"\\EA0E\"}.weui-icon-clear:before{content:\"\\EA0F\"}.weui-icon-back:before{content:\"\\EA10\"}.weui-icon-delete:before{content:\"\\EA11\"}[class*=\" weui-icon_\"]:before,[class^=weui-icon_]:before{margin:0}.weui-icon-success{font-size:23px;color:#09bb07}.weui-icon-waiting{font-size:23px;color:#10aeff}.weui-icon-warn{font-size:23px;color:#f43530}.weui-icon-info{font-size:23px;color:#10aeff}.weui-icon-success-circle,.weui-icon-success-no-circle{font-size:23px;color:#09bb07}.weui-icon-waiting-circle{font-size:23px;color:#10aeff}.weui-icon-circle{font-size:23px;color:#c9c9c9}.weui-icon-download,.weui-icon-info-circle{font-size:23px;color:#09bb07}.weui-icon-safe-success{color:#09bb07}.weui-icon-safe-warn{color:#ffbe00}.weui-icon-cancel{color:#f43530;font-size:22px}.weui-icon-clear,.weui-icon-search{color:#b2b2b2;font-size:14px}.weui-icon-delete.weui-icon_gallery-delete{color:#fff;font-size:22px}.weui-icon_msg{font-size:93px}.weui-icon_msg.weui-icon-warn{color:#f76260}.weui-icon_msg-primary{font-size:93px}.weui-icon_msg-primary.weui-icon-warn{color:#ffbe00}.weui-btn{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;color:#fff;line-height:2.55555556;border-radius:5px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden}.weui-btn:after{content:\" \";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,.2);-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:10px}.weui-btn_inline{display:inline-block}.weui-btn_default{color:#000;background-color:#f8f8f8}.weui-btn_default:not(.weui-btn_disabled):visited{color:#000}.weui-btn_default:not(.weui-btn_disabled):active{color:rgba(0,0,0,.6);background-color:#dedede}.weui-btn_primary{background-color:#1aad19}.weui-btn_primary:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_primary:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:#179b16}.weui-btn_warn{background-color:#e64340}.weui-btn_warn:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_warn:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:#ce3c39}.weui-btn_disabled{color:hsla(0,0%,100%,.6)}.weui-btn_disabled.weui-btn_default{color:rgba(0,0,0,.3);background-color:#f7f7f7}.weui-btn_disabled.weui-btn_primary{background-color:#9ed99d}.weui-btn_disabled.weui-btn_warn{background-color:#ec8b89}.weui-btn_loading .weui-loading{margin:-.2em .34em 0 0}.weui-btn_loading.weui-btn_primary,.weui-btn_loading.weui-btn_warn{color:hsla(0,0%,100%,.6)}.weui-btn_loading.weui-btn_primary{background-color:#179b16}.weui-btn_loading.weui-btn_warn{background-color:#ce3c39}.weui-btn_plain-primary{color:#1aad19;border:1px solid #1aad19}.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{color:rgba(26,173,25,.6);border-color:rgba(26,173,25,.6)}.weui-btn_plain-primary:after{border-width:0}.weui-btn_plain-default{color:#353535;border:1px solid #353535}.weui-btn_plain-default:not(.weui-btn_plain-disabled):active{color:rgba(53,53,53,.6);border-color:rgba(53,53,53,.6)}.weui-btn_plain-default:after{border-width:0}.weui-btn_plain-disabled{color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.2)}button.weui-btn,input.weui-btn{width:100%;border-width:0;outline:0;-webkit-appearance:none}button.weui-btn:focus,input.weui-btn:focus{outline:0}button.weui-btn_inline,button.weui-btn_mini,input.weui-btn_inline,input.weui-btn_mini{width:auto}button.weui-btn_plain-default,button.weui-btn_plain-primary,input.weui-btn_plain-default,input.weui-btn_plain-primary{border-width:1px;background-color:transparent}.weui-btn_mini{display:inline-block;padding:0 1.32em;line-height:2.3;font-size:13px}.weui-btn+.weui-btn{margin-top:15px}.weui-btn.weui-btn_inline+.weui-btn.weui-btn_inline{margin-top:auto;margin-left:15px}.weui-btn-area{margin:1.17647059em 15px .3em}.weui-btn-area_inline{display:-webkit-flex;display:flex}.weui-btn-area_inline .weui-btn{margin-top:auto;margin-right:15px;width:100%;-webkit-flex:1;flex:1}.weui-btn-area_inline .weui-btn:last-child{margin-right:0}.weui-cells{margin-top:1.17647059em;background-color:#fff;line-height:1.47058824;font-size:17px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#e5e5e5;z-index:2}.weui-cells:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.weui-cell:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px;z-index:2}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.weui-cell_swiped{display:block;padding:0}.weui-cell_swiped>.weui-cell__bd{position:relative;z-index:1;background-color:#fff}.weui-cell_swiped>.weui-cell__ft{position:absolute;right:0;top:0;bottom:0;display:-webkit-flex;display:flex;color:#fff}.weui-swiped-btn{display:block;padding:10px 1em;line-height:1.47058824;color:inherit}.weui-swiped-btn_default{background-color:#c7c7cc}.weui-swiped-btn_warn{background-color:#ff3b30}.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-check__label{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-check__label:active{background-color:#ececec}.weui-check{position:absolute;left:-9999em}.weui-cells_radio .weui-cell__ft{padding-left:.35em}.weui-cells_radio .weui-check+.weui-icon-checked{min-width:16px}.weui-cells_radio .weui-check:checked+.weui-icon-checked:before{display:block;content:\"\\EA08\";color:#09bb07;font-size:16px}.weui-cells_checkbox .weui-cell__hd{padding-right:.35em}.weui-cells_checkbox .weui-icon-checked:before{content:\"\\EA01\";color:#c9c9c9;font-size:23px;display:block}.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{content:\"\\EA06\";color:#09bb07}.weui-label{display:block;width:105px;word-wrap:break-word;word-break:break-all}.weui-input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.47058824em;line-height:1.47058824}.weui-input::-webkit-inner-spin-button,.weui-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.weui-textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui-textarea-counter{color:#b2b2b2;text-align:right}.weui-cell_warn .weui-textarea-counter{color:#e64340}.weui-toptips{display:none;position:fixed;-webkit-transform:translateZ(0);transform:translateZ(0);top:0;left:0;right:0;padding:5px;font-size:14px;text-align:center;color:#fff;z-index:5000;word-wrap:break-word;word-break:break-all}.weui-toptips_warn{background-color:#e64340}.weui-cells_form .weui-cell__ft{font-size:0}.weui-cells_form .weui-icon-warn{display:none}.weui-cells_form input,.weui-cells_form label[for],.weui-cells_form textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-cell_warn{color:#e64340}.weui-cell_warn .weui-icon-warn{display:inline-block}.weui-form-preview{position:relative;background-color:#fff}.weui-form-preview:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-form-preview:after,.weui-form-preview:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-form-preview:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-form-preview__hd{position:relative;padding:10px 15px;text-align:right;line-height:2.5em}.weui-form-preview__hd:after{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-form-preview__hd .weui-form-preview__value{font-style:normal;font-size:1.6em}.weui-form-preview__bd{padding:10px 15px;font-size:.9em;text-align:right;color:#999;line-height:2}.weui-form-preview__ft{position:relative;line-height:50px;display:-webkit-flex;display:flex}.weui-form-preview__ft:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-form-preview__item{overflow:hidden}.weui-form-preview__label{float:left;margin-right:1em;min-width:4em;color:#999;text-align:justify;text-align-last:justify}.weui-form-preview__value{display:block;overflow:hidden;word-break:normal;word-wrap:break-word}.weui-form-preview__btn{position:relative;display:block;-webkit-flex:1;flex:1;color:#3cc51f;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}button.weui-form-preview__btn{background-color:transparent;border:0;outline:0;line-height:inherit;font-size:inherit}.weui-form-preview__btn:active{background-color:#eee}.weui-form-preview__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.weui-form-preview__btn:first-child:after{display:none}.weui-form-preview__btn_default{color:#999}.weui-form-preview__btn_primary{color:#0bb20c}.weui-cell_select{padding:0}.weui-cell_select .weui-select{padding-right:30px}.weui-cell_select .weui-cell__bd:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;right:15px;margin-top:-4px}.weui-select{-webkit-appearance:none;border:0;outline:0;background-color:transparent;width:100%;font-size:inherit;height:45px;line-height:45px;position:relative;z-index:1;padding-left:15px}.weui-cell_select-before{padding-right:15px}.weui-cell_select-before .weui-select{width:105px;box-sizing:border-box}.weui-cell_select-before .weui-cell__hd{position:relative}.weui-cell_select-before .weui-cell__hd:after{content:\" \";position:absolute;right:0;top:0;width:1px;bottom:0;border-right:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.weui-cell_select-before .weui-cell__hd:before{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;right:15px;margin-top:-4px}.weui-cell_select-before .weui-cell__bd{padding-left:15px}.weui-cell_select-before .weui-cell__bd:after{display:none}.weui-cell_select-after{padding-left:15px}.weui-cell_select-after .weui-select{padding-left:0}.weui-cell_vcode{padding-top:0;padding-right:0;padding-bottom:0}.weui-vcode-btn,.weui-vcode-img{margin-left:5px;height:45px;vertical-align:middle}.weui-vcode-btn{display:inline-block;padding:0 .6em 0 .7em;border-left:1px solid #e5e5e5;line-height:45px;font-size:17px;color:#3cc51f}button.weui-vcode-btn{background-color:transparent;border-top:0;border-right:0;border-bottom:0;outline:0}.weui-vcode-btn:active{color:#52a341}.weui-gallery{display:none;position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000;z-index:1000}.weui-gallery__img{position:absolute;top:0;right:0;bottom:60px;left:0;background:50% no-repeat;background-size:contain}.weui-gallery__opr{position:absolute;right:0;bottom:0;left:0;background-color:#0d0d0d;color:#fff;line-height:60px;text-align:center}.weui-gallery__del{display:block}.weui-cell_switch{padding-top:6.5px;padding-bottom:6.5px}.weui-switch{-webkit-appearance:none;-moz-appearance:none;appearance:none}.weui-switch,.weui-switch-cp__box{position:relative;width:52px;height:32px;border:1px solid #dfdfdf;outline:0;border-radius:16px;box-sizing:border-box;background-color:#dfdfdf;transition:background-color .1s,border .1s}.weui-switch-cp__box:before,.weui-switch:before{content:\" \";position:absolute;top:0;left:0;width:50px;height:30px;border-radius:15px;background-color:#fdfdfd;transition:-webkit-transform .35s cubic-bezier(.45,1,.4,1);transition:transform .35s cubic-bezier(.45,1,.4,1);transition:transform .35s cubic-bezier(.45,1,.4,1),-webkit-transform .35s cubic-bezier(.45,1,.4,1)}.weui-switch-cp__box:after,.weui-switch:after{content:\" \";position:absolute;top:0;left:0;width:30px;height:30px;border-radius:15px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4);transition:-webkit-transform .35s cubic-bezier(.4,.4,.25,1.35);transition:transform .35s cubic-bezier(.4,.4,.25,1.35);transition:transform .35s cubic-bezier(.4,.4,.25,1.35),-webkit-transform .35s cubic-bezier(.4,.4,.25,1.35)}.weui-switch-cp__input:checked~.weui-switch-cp__box,.weui-switch:checked{border-color:#04be02;background-color:#04be02}.weui-switch-cp__input:checked~.weui-switch-cp__box:before,.weui-switch:checked:before{-webkit-transform:scale(0);transform:scale(0)}.weui-switch-cp__input:checked~.weui-switch-cp__box:after,.weui-switch:checked:after{-webkit-transform:translateX(20px);transform:translateX(20px)}.weui-switch-cp__input{position:absolute;left:-9999px}.weui-switch-cp__box{display:block}.weui-uploader__hd{display:-webkit-flex;display:flex;padding-bottom:10px;-webkit-align-items:center;align-items:center}.weui-uploader__title{-webkit-flex:1;flex:1}.weui-uploader__info{color:#b2b2b2}.weui-uploader__bd{margin-bottom:-4px;margin-right:-9px;overflow:hidden}.weui-uploader__files{list-style:none}.weui-uploader__file{float:left;margin-right:9px;margin-bottom:9px;width:79px;height:79px;background:no-repeat 50%;background-size:cover}.weui-uploader__file_status{position:relative}.weui-uploader__file_status:before{content:\" \";position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.weui-uploader__file_status .weui-uploader__file-content{display:block}.weui-uploader__file-content{display:none;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff}.weui-uploader__file-content .weui-icon-warn{display:inline-block}.weui-uploader__input-box{float:left;position:relative;margin-right:9px;margin-bottom:9px;width:77px;height:77px;border:1px solid #d9d9d9}.weui-uploader__input-box:after,.weui-uploader__input-box:before{content:\" \";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.weui-uploader__input-box:before{width:2px;height:39.5px}.weui-uploader__input-box:after{width:39.5px;height:2px}.weui-uploader__input-box:active{border-color:#999}.weui-uploader__input-box:active:after,.weui-uploader__input-box:active:before{background-color:#999}.weui-uploader__input{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-msg{padding-top:36px;text-align:center}.weui-msg__icon-area{margin-bottom:30px}.weui-msg__text-area{margin-bottom:25px;padding:0 20px}.weui-msg__text-area a{color:#586c94}.weui-msg__title{margin-bottom:5px;font-weight:400;font-size:20px}.weui-msg__desc,.weui-msg__title{word-wrap:break-word;word-break:break-all}.weui-msg__desc{font-size:14px;color:#999}.weui-msg__opr-area{margin-bottom:25px}.weui-msg__extra-area{margin-bottom:15px;font-size:14px;color:#999}.weui-msg__extra-area a{color:#586c94}@media screen and (min-height:438px){.weui-msg__extra-area{position:fixed;left:0;bottom:0;width:100%;text-align:center}}@media only screen and (device-width:375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3){.weui-msg__extra-area{margin-bottom:49px}}.weui-article{padding:20px 15px;font-size:15px}.weui-article section{margin-bottom:1.5em}.weui-article h1{font-size:18px;font-weight:400;margin-bottom:.9em}.weui-article h2{font-size:16px}.weui-article h2,.weui-article h3{font-weight:400;margin-bottom:.34em}.weui-article h3{font-size:15px}.weui-article *{max-width:100%;box-sizing:border-box;word-wrap:break-word}.weui-article p{margin:0 0 .8em}.weui-tabbar{display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#09bb07}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-navbar{display:-webkit-flex;display:flex;position:absolute;z-index:500;top:0;width:100%;background-color:#fafafa}.weui-navbar:after{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #ccc;color:#ccc;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-navbar+.weui-tab__panel{padding-top:50px;padding-bottom:0}.weui-navbar__item{position:relative;display:block;-webkit-flex:1;flex:1;padding:13px 0;text-align:center;font-size:15px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-navbar__item:active{background-color:#ededed}.weui-navbar__item.weui-bar__item_on{background-color:#eaeaea}.weui-navbar__item:after{content:\" \";position:absolute;right:0;top:0;width:1px;bottom:0;border-right:1px solid #ccc;color:#ccc;-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.weui-navbar__item:last-child:after{display:none}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}.weui-progress{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.weui-progress__bar{background-color:#ebebeb;height:3px;-webkit-flex:1;flex:1}.weui-progress__inner-bar{width:0;height:100%;background-color:#09bb07}.weui-progress__opr{display:block;margin-left:15px;font-size:0}.weui-panel{background-color:#fff;margin-top:10px;position:relative;overflow:hidden}.weui-panel:first-child{margin-top:0}.weui-panel:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel:after,.weui-panel:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-panel:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel__hd{padding:14px 15px 10px;color:#999;font-size:13px;position:relative}.weui-panel__hd:after{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-media-box{padding:15px;position:relative}.weui-media-box:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-media-box:first-child:before{display:none}a.weui-media-box{color:#000;-webkit-tap-highlight-color:rgba(0,0,0,0)}a.weui-media-box:active{background-color:#ececec}.weui-media-box__title{font-weight:400;font-size:17px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;word-wrap:break-word;word-break:break-all}.weui-media-box__desc{color:#999;font-size:13px;line-height:1.2;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2}.weui-media-box__info{margin-top:15px;padding-bottom:5px;font-size:13px;color:#cecece;line-height:1em;list-style:none;overflow:hidden}.weui-media-box__info__meta{float:left;padding-right:1em}.weui-media-box__info__meta_extra{padding-left:1em;border-left:1px solid #cecece}.weui-media-box_text .weui-media-box__title{margin-bottom:8px}.weui-media-box_appmsg{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.weui-media-box_appmsg .weui-media-box__hd{margin-right:.8em;width:60px;height:60px;line-height:60px;text-align:center}.weui-media-box_appmsg .weui-media-box__thumb{width:100%;max-height:100%;vertical-align:top}.weui-media-box_appmsg .weui-media-box__bd{-webkit-flex:1;flex:1;min-width:0}.weui-media-box_small-appmsg{padding:0}.weui-media-box_small-appmsg .weui-cells{margin-top:0}.weui-media-box_small-appmsg .weui-cells:before{display:none}.weui-grids{position:relative;overflow:hidden}.weui-grids:before{right:0;height:1px;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-grids:after,.weui-grids:before{content:\" \";position:absolute;left:0;top:0;color:#d9d9d9}.weui-grids:after{width:1px;bottom:0;border-left:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.weui-grid{position:relative;float:left;padding:20px 10px;width:33.33333333%;box-sizing:border-box}.weui-grid:before{top:0;width:1px;border-right:1px solid #d9d9d9;-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.weui-grid:after,.weui-grid:before{content:\" \";position:absolute;right:0;bottom:0;color:#d9d9d9}.weui-grid:after{left:0;height:1px;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-grid:active{background-color:#ececec}.weui-grid__icon{width:28px;height:28px;margin:0 auto}.weui-grid__icon img{display:block;width:100%;height:100%}.weui-grid__icon+.weui-grid__label{margin-top:5px}.weui-grid__label{display:block;color:#000;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.weui-footer,.weui-grid__label{text-align:center;font-size:14px}.weui-footer{color:#999}.weui-footer a{color:#586c94}.weui-footer_fixed-bottom{position:fixed;bottom:.52em;left:0;right:0}.weui-footer__links{font-size:0}.weui-footer__link{display:inline-block;vertical-align:top;margin:0 .62em;position:relative;font-size:14px}.weui-footer__link:before{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #c7c7c7;color:#c7c7c7;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5);left:-.65em;top:.36em;bottom:.36em}.weui-footer__link:first-child:before{display:none}.weui-footer__text{padding:0 .34em;font-size:12px}.weui-flex{display:-webkit-flex;display:flex}.weui-flex__item{-webkit-flex:1;flex:1}.weui-dialog{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.weui-dialog__hd{padding:1.3em 1.6em .5em}.weui-dialog__title{font-weight:400;font-size:18px}.weui-dialog__bd{padding:0 1.6em .8em;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999}.weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.weui-dialog__ft{position:relative;line-height:48px;font-size:18px;display:-webkit-flex;display:flex}.weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-dialog__btn{display:block;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#eee}.weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_default{color:#353535}.weui-dialog__btn_primary{color:#0bb20c}.weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,.1)}.weui-skin_android .weui-dialog__title{font-size:21px}.weui-skin_android .weui-dialog__hd{text-align:left}.weui-skin_android .weui-dialog__bd{color:#999;padding:.25em 1.6em 2em;font-size:17px;text-align:left}.weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.weui-skin_android .weui-dialog__ft:after{display:none}.weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.weui-skin_android .weui-dialog__btn:after{display:none}.weui-skin_android .weui-dialog__btn:active,.weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,.06)}.weui-skin_android .weui-dialog__btn:last-child{margin-right:-.8em}.weui-skin_android .weui-dialog__btn_default{color:gray}@media screen and (min-width:1024px){.weui-dialog{width:35%}}.weui-toast{position:fixed;z-index:5000;width:7.6em;min-height:7.6em;top:180px;left:50%;margin-left:-3.8em;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.weui-icon_toast{margin:22px 0 0;display:block}.weui-icon_toast.weui-icon-success-no-circle:before{color:#fff;font-size:55px}.weui-icon_toast.weui-loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline}.weui-toast__content{margin:0 0 15px}.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-actionsheet{position:fixed;left:0;bottom:0;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:5000;width:100%;background-color:#efeff4;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.weui-actionsheet__title{position:relative;height:65px;padding:0 20px;line-height:1.4;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-flex-direction:column;flex-direction:column;text-align:center;font-size:14px;color:#888;background:#fcfcfd}.weui-actionsheet__title:before{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-actionsheet__title .weui-actionsheet__title-text{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2}.weui-actionsheet__menu{background-color:#fcfcfd}.weui-actionsheet__action{margin-top:6px;background-color:#fcfcfd}.weui-actionsheet__cell{position:relative;padding:10px 0;text-align:center;font-size:18px}.weui-actionsheet__cell:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-actionsheet__cell:active{background-color:#ececec}.weui-actionsheet__cell:first-child:before{display:none}.weui-skin_android .weui-actionsheet{position:fixed;left:50%;top:50%;bottom:auto;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:274px;box-sizing:border-box;-webkit-backface-visibility:hidden;backface-visibility:hidden;background:transparent;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.weui-skin_android .weui-actionsheet__action{display:none}.weui-skin_android .weui-actionsheet__menu{border-radius:2px;box-shadow:0 6px 30px 0 rgba(0,0,0,.1)}.weui-skin_android .weui-actionsheet__cell{padding:13px 24px;font-size:16px;line-height:1.4;text-align:left}.weui-skin_android .weui-actionsheet__cell:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.weui-skin_android .weui-actionsheet__cell:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.weui-actionsheet_toggle{-webkit-transform:translate(0);transform:translate(0)}.weui-loadmore{width:65%;margin:1.5em auto;line-height:1.6em;font-size:14px;text-align:center}.weui-loadmore__tips{display:inline-block;vertical-align:middle}.weui-loadmore_line{border-top:1px solid #e5e5e5;margin-top:2.4em}.weui-loadmore_line .weui-loadmore__tips{position:relative;top:-.9em;padding:0 .55em;background-color:#fff;color:#999}.weui-loadmore_dot .weui-loadmore__tips{padding:0 .16em}.weui-loadmore_dot .weui-loadmore__tips:before{content:\" \";width:4px;height:4px;border-radius:50%;background-color:#e5e5e5;display:inline-block;position:relative;vertical-align:0;top:-.16em}.weui-badge{display:inline-block;padding:.15em .4em;min-width:8px;border-radius:18px;background-color:#f43530;color:#fff;line-height:1.2;text-align:center;font-size:12px;vertical-align:middle}.weui-badge_dot{padding:.4em;min-width:0}.weui-search-bar{position:relative;padding:8px 10px;display:-webkit-flex;display:flex;box-sizing:border-box;background-color:#efeff4;-webkit-text-size-adjust:100%;-webkit-align-items:center;align-items:center}.weui-search-bar:before{top:0;border-top:1px solid #d7d6dc;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-search-bar:after,.weui-search-bar:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#d7d6dc}.weui-search-bar:after{bottom:0;border-bottom:1px solid #d7d6dc;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn{display:block}.weui-search-bar.weui-search-bar_focusing .weui-search-bar__label{display:none}.weui-search-bar__form{position:relative;-webkit-flex:auto;flex:auto;background-color:#efeff4}.weui-search-bar__form:after{content:\"\";position:absolute;left:0;top:0;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:10px;border:1px solid #e6e6ea;box-sizing:border-box;background:#fff}.weui-search-bar__box{position:relative;padding-left:30px;padding-right:30px;height:100%;width:100%;box-sizing:border-box;z-index:1}.weui-search-bar__box .weui-search-bar__input{padding:4px 0;width:100%;height:1.42857143em;border:0;font-size:14px;line-height:1.42857143em;box-sizing:content-box;background:transparent}.weui-search-bar__box .weui-search-bar__input:focus{outline:none}.weui-search-bar__box .weui-icon-search{position:absolute;top:50%;left:10px;margin-top:-14px;line-height:28px}.weui-search-bar__box .weui-icon-clear{position:absolute;top:50%;right:0;margin-top:-14px;padding:0 10px;line-height:28px}.weui-search-bar__label{position:absolute;top:1px;right:1px;bottom:1px;left:1px;z-index:2;border-radius:3px;text-align:center;color:#9b9b9b;background:#fff}.weui-search-bar__label span{display:inline-block;font-size:14px;vertical-align:middle}.weui-search-bar__label .weui-icon-search{margin-right:5px}.weui-search-bar__cancel-btn{display:none;margin-left:10px;line-height:28px;color:#09bb07;white-space:nowrap}.weui-search-bar__input:not(:valid)~.weui-icon-clear{display:none}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{display:none}.weui-picker{position:fixed;width:100%;left:0;bottom:0;z-index:5000;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateY(100%);transform:translateY(100%);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.weui-picker__hd{display:-webkit-flex;display:flex;padding:9px 15px;background-color:#fff;position:relative;text-align:center;font-size:17px}.weui-picker__hd:after{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-picker__action{display:block;-webkit-flex:1;flex:1;color:#1aad19}.weui-picker__action:first-child{text-align:left;color:#888}.weui-picker__action:last-child{text-align:right}.weui-picker__bd{display:-webkit-flex;display:flex;position:relative;background-color:#fff;height:238px;overflow:hidden}.weui-picker__group{-webkit-flex:1;flex:1;position:relative;height:100%}.weui-picker__mask{top:0;height:100%;margin:0 auto;background:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 102px;background-repeat:no-repeat;-webkit-transform:translateZ(0);transform:translateZ(0)}.weui-picker__indicator,.weui-picker__mask{position:absolute;left:0;width:100%;z-index:3}.weui-picker__indicator{height:34px;top:102px}.weui-picker__indicator:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-picker__indicator:after,.weui-picker__indicator:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-picker__indicator:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-picker__content{position:absolute;top:0;left:0;width:100%}.weui-picker__item{padding:0;height:34px;line-height:34px;text-align:center;color:#000;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.weui-picker__item_disabled{color:#999}@-webkit-keyframes slideUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.weui-animate-slide-up{-webkit-animation:slideUp ease .3s forwards;animation:slideUp ease .3s forwards}@-webkit-keyframes slideDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes slideDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.weui-animate-slide-down{-webkit-animation:slideDown ease .3s forwards;animation:slideDown ease .3s forwards}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.weui-animate-fade-in{-webkit-animation:fadeIn ease .3s forwards;animation:fadeIn ease .3s forwards}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.weui-animate-fade-out{-webkit-animation:fadeOut ease .3s forwards;animation:fadeOut ease .3s forwards}.weui-agree{display:block;padding:.5em 15px;font-size:13px}.weui-agree a{color:#586c94}.weui-agree__text{color:#999}.weui-agree__checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;font-size:0;border:1px solid #d1d1d1;background-color:#fff;border-radius:3px;width:13px;height:13px;position:relative;vertical-align:0;top:2px}.weui-agree__checkbox:checked:before{font-family:weui;font-style:normal;font-weight:400;font-feature-settings:normal;font-variant:normal;text-transform:none;text-align:center;speak:none;display:inline-block;vertical-align:middle;text-decoration:inherit;content:\"\\EA08\";color:#09bb07;font-size:13px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-48%) scale(.73);transform:translate(-50%,-48%) scale(.73)}.weui-agree__checkbox:disabled{background-color:#e1e1e1}.weui-agree__checkbox:disabled:before{color:#adadad}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12) infinite;animation:weuiLoading 1s steps(12) infinite;background:transparent url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\") no-repeat;background-size:100%}.weui-btn_loading.weui-btn_primary .weui-loading,.weui-btn_loading.weui-btn_warn .weui-loading,.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\")}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.weui-slider{padding:15px 18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.weui-slider__inner{position:relative;height:2px;background-color:#e9e9e9}.weui-slider__track{height:2px;background-color:#1aad19;width:0}.weui-slider__handler{position:absolute;left:0;top:50%;width:28px;height:28px;margin-left:-14px;margin-top:-14px;border-radius:50%;background-color:#fff;box-shadow:0 0 4px rgba(0,0,0,.2)}.weui-slider-box{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.weui-slider-box .weui-slider{-webkit-flex:1;flex:1}.weui-slider-box__value{margin-left:.5em;min-width:24px;color:#888;text-align:center;font-size:14px}", ""])
}, function (e, t, i) {
    var n = i(18);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var r = {hmr: !0, transform: void 0, insertInto: void 0};
    i(1)(n, r);
    n.locals && (e.exports = n.locals)
}, function (e, t, i) {
    (e.exports = i(0)(!1)).push([e.i, "body{font-size:16px;background:#f8f8f8;font-family:Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif}.ios-10 body,html.ios-10{-webkit-overflow-scrolling:touch;overflow-y:scroll;height:100%}#video-mask{z-index:10000}", ""])
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.RemInit = l, t.RemToPx = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 640;
        0 == a && l();
        return Math.ceil(e / t * 3.2 * s)
    }, t.PxToRem = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 640;
        return e / t * 3.2 + "rem"
    };
    var n = window, r = document, o = null;
    n.onresize = function () {
        l()
    };
    var a = !1, s = 0;

    function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        e && (o = e), a = !0;
        var t = r.getElementsByTagName("html")[0], i = t.clientWidth;
        s = (i = i > e ? e : i) / 20 / 16 * 100, t.style.fontSize = s + "px"
    }
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.Index = void 0;
    var n = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }(), r = d(i(21));
    i(31);
    var o = i(33), a = (p(i(7)), d(i(35)));
    i(36);
    var s = d(i(39)), l = (d(i(55)), d(i(56))), c = p(i(57)), u = i(58);

    function p(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t.default = e, t
    }

    function d(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var h = i(59), f = window.$, v = window.location.host,
        g = window.location.protocol + "//openapi.vipabc.com/VMD/MGM.OfficalWebAPI/LandingPageApi/Vipjr";
    (v.indexOf("192.168") > -1 || v.indexOf("local") > -1 || v.indexOf("stage") > -1 || v.indexOf("devlp") > -1) && (g = "http://stageopenapi.vipabc.com/VMD/MGM.OfficalWebAPI/LandingPageApi/Vipjr");
    t.Index = function () {
        function e() {
            var t = this;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.data = {}, this.DOM = f((0, o.thorough)(h, r.default)), f(window).on("resize", function () {
                t.resize()
            })
        }

        return n(e, [{
            key: "event", value: function () {
                var e = this, t = this.DOM.find("." + r.default["share-float"]);
                this.DOM.find("." + r.default["section-share"] + " button").on("click", function () {
                    t.show()
                }), t.on("click", function () {
                    t.hide()
                }), f(".linkagePage-form").vForm({ajaxUrl: g}), f(".js-common-form").vForm({ajaxUrl: g});
                var i = f("." + r.default["section-phone-float"]);
                f(window).on("scroll", function () {
                    var e = f(window).scrollTop();
                    f(window).height() + e > f(".linkagePage-form").position().top ? i.addClass("" + r.default["section-hide"]) : i.removeClass("" + r.default["section-hide"])
                }), i.find("input").on("focus", function (e) {
                    i.addClass(r.default["input-focus"])
                }).on("blur", function (e) {
                    setTimeout(function () {
                        i.removeClass(r.default["input-focus"])
                    }, 1e3)
                }), this.DOM.find(".ok.js-confirm").on("click", function () {
                    e.DOM.find(".popup_wrap.js-popup").hide()
                })
            }
        }, {
            key: "renderInputFloat", value: function () {
                var e = window.innerHeight,
                    t = f('<div style="position:absolute;top:0;left:0;width:100%;height:100%;"></div>').appendTo("body"),
                    i = t.height();
                t.remove(), f.ajax({type: "GET", url: "/height", data: e + "--" + i + "--"})
            }
        }, {
            key: "init", value: function () {
                var e = this;
                c.getIosVersion(function (e, t) {
                    "10" == t[0] && f("html").addClass("ios-10")
                }), this.PDOM = f("#app"), this.PDOM.append(this.DOM), (new l.default).init();
                new a.default("." + r.default["section-2-swiper"] + " .swiper-container", {
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    spaceBetween: 30,
                    pagination: "." + r.default["section-2-swiper-pagination"]
                }), new a.default("." + r.default["section-4-swiper"] + " .swiper-container", {
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    spaceBetween: 30,
                    pagination: "." + r.default["section-4-swiper-pagination"],
                    on: {
                        init: function () {
                            e.resize()
                        }
                    }
                });
                this.initVideo(), this.initData(), this.initVForm(), this.initShareConfig(), this.setMode(this.data.mode), this.event();
                var t = window.location.host, i = "//lp.vipjr.com/";
                t.indexOf("192.168") > -1 || t.indexOf("local") > -1 || t.indexOf("dev") > -1 || t.indexOf("stage") > -1 || t.indexOf("devlp") > -1 ? i = "http://stagelp.vipjr.com/" : t.indexOf("lpp") > -1 && (i = "http://lpp.vipjr.com/"), i += (0, u.getLinkForFaqAtom)("index", c.getQueryString("clientPlat"), this.data.fromwhere), i += "&clientPlat=" + c.getQueryString("clientPlat"), this.DOM.find("." + r.default["header-left"] + " a").attr("href", i)
            }
        }, {
            key: "setMode", value: function (e) {
                "share" === e ? f("." + r.default["section-share"]).hide() : "origin" === e && (f(".form-wrap").hide(), f("." + r.default["section-phone-float"]).hide())
            }
        }, {
            key: "initVideo", value: function () {
                var e = this;
                this.videoFloat = f("." + r.default["video-float"]), this.DOM.find("." + r.default["video-play"]).on("click", function (t) {
                    if (c.IsPC()) return e.videoCtrl.play(), t.preventDefault(), t.stopPropagation(), !0
                }), this.videoFloat.find("." + r.default["icon-close"]).on("click", function () {
                    return e.videoCtrl.pause(), event.preventDefault(), event.stopPropagation(), !0
                }), this.video = (0, s.default)("my-player"), this.videoCtrl = {
                    play: function () {
                        e.video.play(), e.videoFloat.show()
                    }, pause: function () {
                        e.video.pause(), e.videoFloat.hide()
                    }
                }
            }
        }, {
            key: "resize", value: function () {
                var e = this.DOM.find("." + r.default["section-4-swiper"] + " .swiper-wrapper").height();
                f("." + r.default["section-4-slide"]).height(e)
            }
        }, {
            key: "initShareConfig", value: function () {
                var e = window.location, t = {
                    title: "vipJr拥有怎样的外教团队？快来为宝贝了解一下！",
                    desc: "全球化的英语外教，拓宽孩子国际视野。",
                    link: e.protocol + "//" + e.host + e.pathname + (this.data.fromwhere ? "?fromwhere=" + this.data.fromwhere : ""),
                    imgUrl: "https://source.vipabc.com/ext/images/website/junior/linkage_page/faq/teacher/share_teacher.png"
                };
                window.WXReady = function () {
                    wx.onMenuShareAppMessage(t), wx.onMenuShareTimeline(t), wx.onMenuShareQQ(t), wx.onMenuShareWeibo(t)
                }, f.ajax({url: "//source.vipabc.com/Ext/js/api/weixin/wx_config.js", dataType: "script", cache: !0})
            }
        }, {
            key: "initData", value: function () {
                this.data.mode = this.getMode(), this.data.fromwhere = c.getQueryString("fromwhere")
            }
        }, {
            key: "getMode", value: function () {
                return 1 == c.getQueryString("mode") ? "origin" : "share"
            }
        }, {
            key: "initVForm", value: function () {
                // this.data.invitecode, this.data.fromwhere, this.data.eventid;
                // f.fn.vForm = function (e) {
                //     this.selector;
                //     var t = {
                //         placeholder: !0,
                //         ui: {lp: !0},
                //         rules: {
                //             nation_code: {required: !0, errorTarget: f(this).find("._error-phone-target").selector},
                //             nation_phone: {required: !0, errorTarget: f(this).find("._error-phone-target").selector},
                //             age_area: {required: !0},
                //             name: {required: !1}
                //         },
                //         target: !1,
                //         ajaxUrl: g,
                //         submitHandler: f.vForm.defaultSubmit
                //     };
                //     return t = f.extend(!0, t, e), f(this).each(function (e, i) {
                //         var n = f(i), r = n.find("[type='submit']");
                //         if (n.data({
                //                 reset: n.html(),
                //                 form: e
                //             }), t.placeholder && (!f.fn.placeholder && window.console && console.warn("vForm依赖，placeholder插件，请引用该插件！"), f.fn.placeholder && n.find("[placeholder]").placeholder()), t.ui && (n.find("select").vSelect(t.ui, i), n.find("input[type='radio']").parent().vRadio(t.ui, i)), t.rules && !f.isEmptyObject(t.rules)) for (var o in f.fn.validator || (window.console && console.warn("vForm依赖，validator插件，请引用该插件！"), t.rules = null), t.rules) n.find("[name='" + o + "']").length && n.find("[name='" + o + "']").validator(o, t.rules[o]);
                //         t.target || r.length || n.find("[type='button']").length || n.find("button").length || (window.console && console.warn("请添加提交按钮，或者配置target节点对象！"), r = n), t.target && (r = n.find(t.target)), !r.length && n.find("[type='button']").length ? r = n.find("[type='button']") : !r.length && n.find("button").length && (r = n.find("button")), r.off("click"), r.on("click", function (e) {
                //             t.rules && !f.isEmptyObject(t.rules) ? f.vForm.validate.call(n, t.rules) && t.submitHandler.call(n, t, r) : t.submitHandler.call(n, t, r);
                //             return !1
                //         }), n.off("keydown"), n.on("keydown", function (e) {
                //             "keydown" === e.type && 13 == e.keyCode && (t.rules && !f.isEmptyObject(t.rules) ? f.vForm.validate.call(n, t.rules) && t.submitHandler.call(n, t, r) : t.submitHandler.call(n, t, r))
                //         })
                //     }), this
                // }, f.vForm.washDataExtend = function (e) {
                //     return e
                // }, f.vForm.defaultSubmit = function (e, t) {
                //     var i = this, n = {};
                //     if (n = f.vForm.serialize(n, this, {}), n = f.vForm.washData.call(i, n), n = f.vForm.washDataExtend.call(i, n), f.vForm.beforeSubmitAnalytics(i[0]), !f.vForm.loading(i, t)) return !1;
                //     f(this).addClass("loading"), f.ajax({
                //         type: "GET",
                //         cache: !1,
                //         dataType: "jsonp",
                //         url: e.ajaxUrl,
                //         data: n,
                //         success: function (t) {
                //             var n = t.JSUUID ? t.JSUUID : "";
                //             f(i).removeClass("loading"), f.vForm.afterSubmitAnalytics.call(i, t), f.vForm.afterSubmitAnalyticsExtend.call(i, t), f.vForm.reset.call(i, e), window.location.href = "https://lp.vipjr.com/lpgs/sEVRVddHcn/index.html?fromwhere=" + f.vForm.getQueryString("fromwhere") + "&jsid=" + n
                //         },
                //         error: function (t) {
                //             f.vForm.reset.call(i, e), alert("亲！服务器出错了哦，重新试一下吧！")
                //         }
                //     })
                // }
            }
        }]), e
    }()
}, function (e, t, i) {
    var n = i(22);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var r = {hmr: !0, transform: void 0, insertInto: void 0};
    i(1)(n, r);
    n.locals && (e.exports = n.locals)
}, function (e, t, i) {
    var n = i(6);
    (t = e.exports = i(0)(!1)).push([e.i, ".index-page---2ioz-{width:3.2rem;margin:0 auto}.index-page---2ioz- a{text-decoration:none;color:inherit}.header---3BSxR{background:#fff;font-size:18px;line-height:48px;height:48px;position:relative}.header-text---2jbj6{width:50%;margin:0 auto;height:100%;color:#111;text-align:center}.header-left---1b1O6{position:absolute;left:0;top:0;width:25%;height:48px;color:#ff091a;white-space:nowrap}.icon-back---2R6Gq{display:inline-block;margin-left:.128rem;vertical-align:top;height:100%;width:20px;background:url(" + n(i(23)) + ") 0 no-repeat;background-size:auto 20px}.section-h3---1eppp{text-align:center;color:#fff;font-size:18px;line-height:1.15}.section-h2---3vODy{text-align:center;color:#fff;font-size:32px;line-height:40px}.section-p---3xBMr{text-align:center;color:#fff;font-size:16px;line-height:24px}.section-hide---N2f7m{display:none}.section-1---1qaAP{background:linear-gradient(180deg,#56308c,#9476b8);position:relative}.title-1-1---2VNJs{padding-top:30px;letter-spacing:1px}.title-1-2---17tbC{padding-top:15px;letter-spacing:2px}.title-1-3---cIh-w{margin:6px 30px 1em;letter-spacing:.8px}.section-image---30A8c{width:100%;display:block}.section-2-wrapper---3l-Y9{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.title-2-1---2Ps_3{text-align:left;margin:32px 30px 0;color:#f16966}.title-2-2----KPHS{text-align:left;margin:15px 30px 0;line-height:45px;color:#212121}.title-2-3---lKfgG{text-align:left;margin:7px 30px 0;line-height:24px;color:#666}.table---3Pa01{display:table;width:100%}.cell---ZlOGS{display:table-cell;vertical-align:middle;padding:0 1em;box-sizing:border-box}.table-wrapper---ypZjB{margin:16px 30px 0}.certificate-text---3lrcd,.experience-text---64k0u{display:block;color:#666;font-size:14px;line-height:18px;min-width:5em}.certificate-text---3lrcd span,.experience-text---64k0u span{display:inline-block}.certificate---3YPgs{width:50%;background:url(" + n(i(2)) + ") no-repeat 0;background-size:40px;padding-left:50px}.experience---1TaEA{width:50%;background:url(" + n(i(3)) + ") no-repeat 0;background-size:52px;padding-left:62px}.section-2-swiper---1d66K{position:relative;margin-top:.2304rem}.section-2-slide---1l7FN{width:2.38933rem;height:1.792rem;background:#f16966;border-radius:.13653rem}.section-2-swiper-icon---2b2OL{width:.512rem;height:.512rem;margin:.17067rem auto .09387rem}.section-2-swiper-title---2wCGW{font-size:.1536rem;line-height:.1792rem;color:#fff;text-align:center}.section-2-swiper-content---pL9k9{margin-top:.0768rem;font-size:.11947rem;line-height:.1536rem;color:#fff;text-align:center}.section-2-swiper-pagination---117it{margin-top:.17067rem;position:static;font-size:0;margin:.17067rem .0384rem .2816rem}.section-2-swiper-pagination---117it .swiper-pagination-bullet{background:#212121}.section-2-swiper-pagination---117it .swiper-pagination-bullet-active{background:#000}.section-3---4eG6j{background-image:linear-gradient(-180deg,#007ec0,#2dbcf8);overflow:hidden}.title-3-1---2bWGR{text-align:left;margin:32px 30px 0}.title-3-2---3nRw1{text-align:left;margin:9px 30px 20px;line-height:42px}.title-3-3---3FYIc{margin:0 30px 20px;text-align:left}.video-play---2WJFP{text-align:center;color:#fff;font-size:16px;line-height:24px;margin:0 30px 20px;text-align:left}.video-play---2WJFP span{color:#fff;line-height:20px;vertical-align:top;display:inline-block}.icon-play---2aZUV{display:inline-block;vertical-align:top;background:url(" + n(i(24)) + ") no-repeat 50%;height:20px;width:20px;background-size:100%}.ideas---1R3O4{width:50%;background:url(" + n(i(2)) + ") no-repeat 0;background-size:40px;padding-left:50px;background-image:url(" + n(i(25)) + ");padding-left:43px;background-size:33px}.interest---2h87h{width:50%;background:url(" + n(i(3)) + ") no-repeat 0;background-size:52px;padding-left:62px;background-image:url(" + n(i(26)) + ");padding-left:47px;background-size:37px}.ideas-text---GhZLV,.interest-text---34T4r{color:#fff;display:block;font-size:14px;letter-spacing:1px;line-height:18px;min-width:5em;max-width:7em;min-height:40px}.section-4---3baVw{background:#f7f7f7;overflow:hidden}.title-4-1---1E40a{margin:30px 30px 0;color:#2cbbf7;letter-spacing:.75px}.title-4-2---2Qnl7{margin:20px 25px 0;font-size:32px;line-height:45px;color:#212121;letter-spacing:1.88px}.section-4-swiper---3x1Iq{position:relative;margin-top:.2304rem}.section-4-slide---2GJjo{width:2.38933rem;background:#fff;border-radius:16px}.teacher-avator---21fnx{width:120px;height:120px;border-radius:100%;margin:23px auto 0}.teacher-name---2ge4N{font-size:18px;color:#2bbaf6;letter-spacing:.75px;text-align:center;margin:18px 25px 0;text-transform:uppercase;line-height:21px}.teacher-resume---3p0U3{font-size:14px;color:#212121;letter-spacing:0;text-align:center;line-height:21px;margin:4px 25px 0}.teacher-self-intro---sl_Mh{font-size:14px;color:#666;letter-spacing:1px;text-align:center;line-height:21px;margin:.7em 25px 31px}.section-4-swiper-pagination---2HlC0{margin-top:.17067rem;position:static;font-size:0;margin:.17067rem .0384rem .2816rem}.section-4-swiper-pagination---2HlC0 .swiper-pagination-bullet{background:#212121}.section-4-swiper-pagination---2HlC0 .swiper-pagination-bullet-active{background:#000}.section-5---3W1PI{background-image:linear-gradient(-180deg,#3aa200,#96d86b);overflow:hidden}.title-5-1---2kOvi{margin:30px 30px 0;text-align:left}.title-5-2---2jsHR{margin:6px 30px 0;text-align:left;line-height:42px}.title-5-3---2XJIq{margin:16px 30px 0;text-align:left;letter-spacing:1px}.aifind---1AVkc{width:50%;background:url(" + n(i(2)) + ") no-repeat 0;background-size:40px;padding-left:50px;background-image:url(" + n(i(27)) + ");padding-left:43px;background-size:33px}.select-teacher---1CkNH{width:50%;background:url(" + n(i(3)) + ") no-repeat 0;background-size:52px;padding-left:62px;background-image:url(" + n(i(28)) + ");padding-left:47px;background-size:37px}.aifind-text---uPg2t,.select-teacher-text---5L3B1{color:#fff;display:block;font-size:14px;letter-spacing:1px;line-height:18px;min-width:5em;max-width:7em;min-height:40px}.section-5-table---3EtVV{margin-bottom:20px}.section-6---25Ik4{background-image:linear-gradient(-180deg,#3aa200,#96d86b);overflow:hidden;background-image:linear-gradient(0deg,#f1a127,#df6900)}.title-6-1---2CE-f{margin:30px 30px 0;text-align:left}.title-6-2---1RSXK{margin:6px 30px 0;text-align:left;line-height:42px;margin-top:15px}.title-6-3---_jAGP{margin:16px 30px 0;text-align:left;letter-spacing:1px}.section-6-table---L1wAw{margin-bottom:20px}.section-7---1qRMS{padding:10% 0 8%;overflow:hidden}.section-phone-float---JCTl5{position:fixed;bottom:0;left:0;width:100%;z-index:102}.input-focus---2shYT{font-size:12px}.phone-fixed-wrapper---2Ys2u{width:3.2rem;margin:0 auto;background:#fff;text-align:center}.form-private---1OXQ0{position:relative;top:18px;width:100%;padding:0;color:#979797;text-align:center}.form-private---1OXQ0 a{padding-left:18px;padding-bottom:0;background-image:url(//source.vipabc.com/ext/images/website/vjr/v1/common/icon-linkForm-lock@2x.png);background-position:0;background-repeat:no-repeat;background-size:14px;color:#999}.after-class---1f-F2{width:50%;background:url(" + n(i(2)) + ") no-repeat 0;background-size:40px;padding-left:50px;background-image:url(" + n(i(29)) + ");padding-left:43px;background-size:33px}.improve-qa---3m6Wd{width:50%;background:url(" + n(i(3)) + ") no-repeat 0;background-size:52px;padding-left:62px;background-image:url(" + n(i(30)) + ');padding-left:47px;background-size:37px}.after-class-text---1OuaK,.improve-qa-text---31Xkk{color:#fff;display:block;font-size:14px;letter-spacing:1px;line-height:18px;min-width:5em;max-width:7em;min-height:40px}.fixed-placeholder---3clD5{height:50px;background:#f8f8f8}.fixed-content---2gV2G{position:fixed;z-index:100;bottom:0;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:3.2rem;height:50px;border-top:1px solid #d8d8d8;background:#fff;text-align:center}.fixed-content---2gV2G button{display:inline-block;vertical-align:top;margin-top:8px;height:34px;line-height:34px;width:135px;background-color:#ff4b59;border:none;border-radius:50px;color:#fff;font-size:14px;outline:0;cursor:pointer}.section-share---2w3ZR{position:relative}.share-float---3d_6g{display:none;position:fixed;z-index:100;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.68)}.share-tip---1dswD{position:absolute;top:0;right:50%;width:2.112rem;margin-right:-1.6rem;-webkit-transform:translate(-20px);transform:translate(-20px)}.video-float---mLqvg{position:fixed;display:none;top:0;left:0;width:100%;height:100%;background:#000;z-index:200}.customize-video---3H3fU{height:100%;width:100%;display:block;position:relative}.video-js .vjs-big-play-button{top:50%!important;left:50%!important;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.icon-close---3pIJn{position:absolute;right:20px;top:20px;height:20px;width:20px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.icon-close---3pIJn:after,.icon-close---3pIJn:before{content:"";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:2px;height:2px;width:100%;background:#666}.icon-close---3pIJn:after{width:2px;height:100%}', ""]),
        t.locals = {
        "index-page": "index-page---2ioz-",
        header: "header---3BSxR",
        "header-text": "header-text---2jbj6",
        "header-left": "header-left---1b1O6",
        "icon-back": "icon-back---2R6Gq",
        "section-h3": "section-h3---1eppp",
        "section-h2": "section-h2---3vODy",
        "section-p": "section-p---3xBMr",
        "section-hide": "section-hide---N2f7m",
        "section-1": "section-1---1qaAP",
        "title-1-1": "title-1-1---2VNJs",
        "title-1-2": "title-1-2---17tbC",
        "title-1-3": "title-1-3---cIh-w",
        "section-image": "section-image---30A8c",
        "section-2-wrapper": "section-2-wrapper---3l-Y9",
        "title-2-1": "title-2-1---2Ps_3",
        "title-2-2": "title-2-2----KPHS",
        "title-2-3": "title-2-3---lKfgG",
        table: "table---3Pa01",
        cell: "cell---ZlOGS",
        "table-wrapper": "table-wrapper---ypZjB",
        "certificate-text": "certificate-text---3lrcd",
        "experience-text": "experience-text---64k0u",
        certificate: "certificate---3YPgs",
        experience: "experience---1TaEA",
        "section-2-swiper": "section-2-swiper---1d66K",
        "section-2-slide": "section-2-slide---1l7FN",
        "section-2-swiper-icon": "section-2-swiper-icon---2b2OL",
        "section-2-swiper-title": "section-2-swiper-title---2wCGW",
        "section-2-swiper-content": "section-2-swiper-content---pL9k9",
        "section-2-swiper-pagination": "section-2-swiper-pagination---117it",
        "section-3": "section-3---4eG6j",
        "title-3-1": "title-3-1---2bWGR",
        "title-3-2": "title-3-2---3nRw1",
        "title-3-3": "title-3-3---3FYIc",
        "video-play": "video-play---2WJFP",
        "icon-play": "icon-play---2aZUV",
        ideas: "ideas---1R3O4",
        interest: "interest---2h87h",
        "interest-text": "interest-text---34T4r",
        "ideas-text": "ideas-text---GhZLV",
        "section-4": "section-4---3baVw",
        "title-4-1": "title-4-1---1E40a",
        "title-4-2": "title-4-2---2Qnl7",
        "section-4-swiper": "section-4-swiper---3x1Iq",
        "section-4-slide": "section-4-slide---2GJjo",
        "teacher-avator": "teacher-avator---21fnx",
        "teacher-name": "teacher-name---2ge4N",
        "teacher-resume": "teacher-resume---3p0U3",
        "teacher-self-intro": "teacher-self-intro---sl_Mh",
        "section-4-swiper-pagination": "section-4-swiper-pagination---2HlC0",
        "section-5": "section-5---3W1PI",
        "title-5-1": "title-5-1---2kOvi",
        "title-5-2": "title-5-2---2jsHR",
        "title-5-3": "title-5-3---2XJIq",
        aifind: "aifind---1AVkc",
        "select-teacher": "select-teacher---1CkNH",
        "aifind-text": "aifind-text---uPg2t",
        "select-teacher-text": "select-teacher-text---5L3B1",
        "section-5-table": "section-5-table---3EtVV",
        "section-6": "section-6---25Ik4",
        "title-6-1": "title-6-1---2CE-f",
        "title-6-2": "title-6-2---1RSXK",
        "title-6-3": "title-6-3---_jAGP",
        "section-6-table": "section-6-table---L1wAw",
        "section-7": "section-7---1qRMS",
        "section-phone-float": "section-phone-float---JCTl5",
        "input-focus": "input-focus---2shYT",
        "phone-fixed-wrapper": "phone-fixed-wrapper---2Ys2u",
        "form-private": "form-private---1OXQ0",
        "after-class": "after-class---1f-F2",
        "improve-qa": "improve-qa---3m6Wd",
        "after-class-text": "after-class-text---1OuaK",
        "improve-qa-text": "improve-qa-text---31Xkk",
        "fixed-placeholder": "fixed-placeholder---3clD5",
        "fixed-content": "fixed-content---2gV2G",
        "section-share": "section-share---2w3ZR",
        "share-float": "share-float---3d_6g",
        "share-tip": "share-tip---1dswD",
        "video-float": "video-float---mLqvg",
        "customize-video": "customize-video---3H3fU",
        "icon-close": "icon-close---3pIJn"
    }
}, function (e, t) {

}, function (e, t) {

}, function (e, t, i) {
    e.exports = i.p + "5fde82eb007d2217a777ae537a7e33ee.png"
}, function (e, t, i) {
    e.exports = i.p + "6564d6241bc04e3bd86f63cd10cf9a3a.png"
}, function (e, t, i) {
    e.exports = i.p + "a48195679459bf602d4f6f7d5b5d5a43.png"
}, function (e, t, i) {
    e.exports = i.p + "611021e93596f1083e67cddb763e036e.png"
}, function (e, t, i) {
    e.exports = i.p + "6365101c410db5776f7dd7d16ed9068a.png"
}, function (e, t, i) {
    e.exports = i.p + "f01bfb05707bcc9b4bec475f5b291fe6.png"
}, function (e, t, i) {
    var n = i(32);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var r = {hmr: !0, transform: void 0, insertInto: void 0};
    i(1)(n, r);
    n.locals && (e.exports = n.locals)
}, function (e, t, i) {

}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.thorough = function (e, t) {
        return e.replace(/class=\"(.*?)\"/g, function (e, i, r) {
            var o = i.split(" ");
            return o.length > 0 ? 'class="' + n.map(o, function (e) {
                return t[e] || e
            }).join(" ") + '"' : ""
        })
    };
    var n = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t.default = e, t
    }(i(7))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, i) {
    !function () {
        "use strict";
        var e, t = function (i, r) {
            if (!(this instanceof t)) return new t(i, r);
            var o = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0},
                flip: {slideShadows: !0, limitRotation: !0},
                cube: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94},
                fade: {crossFade: !1},
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            }, a = r && r.virtualTranslate;
            r = r || {};
            var s = {};
            for (var l in r) if ("object" != typeof r[l] || null === r[l] || (r[l].nodeType || r[l] === window || r[l] === document || void 0 !== n && r[l] instanceof n || "undefined" != typeof jQuery && r[l] instanceof jQuery)) s[l] = r[l]; else for (var c in s[l] = {}, r[l]) s[l][c] = r[l][c];
            for (var u in o) if (void 0 === r[u]) r[u] = o[u]; else if ("object" == typeof r[u]) for (var p in o[u]) void 0 === r[u][p] && (r[u][p] = o[u][p]);
            var d = this;
            if (d.params = r, d.originalParams = s, d.classNames = [], void 0 !== e && void 0 !== n && (e = n), (void 0 !== e || (e = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n)) && (d.$ = e, d.currentBreakpoint = void 0, d.getActiveBreakpoint = function () {
                    if (!d.params.breakpoints) return !1;
                    var e, t = !1, i = [];
                    for (e in d.params.breakpoints) d.params.breakpoints.hasOwnProperty(e) && i.push(e);
                    i.sort(function (e, t) {
                        return parseInt(e, 10) > parseInt(t, 10)
                    });
                    for (var n = 0; n < i.length; n++) (e = i[n]) >= window.innerWidth && !t && (t = e);
                    return t || "max"
                }, d.setBreakpoint = function () {
                    var e = d.getActiveBreakpoint();
                    if (e && d.currentBreakpoint !== e) {
                        var t = e in d.params.breakpoints ? d.params.breakpoints[e] : d.originalParams,
                            i = d.params.loop && t.slidesPerView !== d.params.slidesPerView;
                        for (var n in t) d.params[n] = t[n];
                        d.currentBreakpoint = e, i && d.destroyLoop && d.reLoop(!0)
                    }
                }, d.params.breakpoints && d.setBreakpoint(), d.container = e(i), 0 !== d.container.length)) {
                if (d.container.length > 1) {
                    var h = [];
                    return d.container.each(function () {
                        h.push(new t(this, r))
                    }), h
                }
                d.container[0].swiper = d, d.container.data("swiper", d), d.classNames.push(d.params.containerModifierClass + d.params.direction), d.params.freeMode && d.classNames.push(d.params.containerModifierClass + "free-mode"), d.support.flexbox || (d.classNames.push(d.params.containerModifierClass + "no-flexbox"), d.params.slidesPerColumn = 1), d.params.autoHeight && d.classNames.push(d.params.containerModifierClass + "autoheight"), (d.params.parallax || d.params.watchSlidesVisibility) && (d.params.watchSlidesProgress = !0), d.params.touchReleaseOnEdges && (d.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(d.params.effect) >= 0 && (d.support.transforms3d ? (d.params.watchSlidesProgress = !0, d.classNames.push(d.params.containerModifierClass + "3d")) : d.params.effect = "slide"), "slide" !== d.params.effect && d.classNames.push(d.params.containerModifierClass + d.params.effect), "cube" === d.params.effect && (d.params.resistanceRatio = 0, d.params.slidesPerView = 1, d.params.slidesPerColumn = 1, d.params.slidesPerGroup = 1, d.params.centeredSlides = !1, d.params.spaceBetween = 0, d.params.virtualTranslate = !0), "fade" !== d.params.effect && "flip" !== d.params.effect || (d.params.slidesPerView = 1, d.params.slidesPerColumn = 1, d.params.slidesPerGroup = 1, d.params.watchSlidesProgress = !0, d.params.spaceBetween = 0, void 0 === a && (d.params.virtualTranslate = !0)), d.params.grabCursor && d.support.touch && (d.params.grabCursor = !1), d.wrapper = d.container.children("." + d.params.wrapperClass), d.params.pagination && (d.paginationContainer = e(d.params.pagination), d.params.uniqueNavElements && "string" == typeof d.params.pagination && d.paginationContainer.length > 1 && 1 === d.container.find(d.params.pagination).length && (d.paginationContainer = d.container.find(d.params.pagination)), "bullets" === d.params.paginationType && d.params.paginationClickable ? d.paginationContainer.addClass(d.params.paginationModifierClass + "clickable") : d.params.paginationClickable = !1, d.paginationContainer.addClass(d.params.paginationModifierClass + d.params.paginationType)), (d.params.nextButton || d.params.prevButton) && (d.params.nextButton && (d.nextButton = e(d.params.nextButton), d.params.uniqueNavElements && "string" == typeof d.params.nextButton && d.nextButton.length > 1 && 1 === d.container.find(d.params.nextButton).length && (d.nextButton = d.container.find(d.params.nextButton))), d.params.prevButton && (d.prevButton = e(d.params.prevButton), d.params.uniqueNavElements && "string" == typeof d.params.prevButton && d.prevButton.length > 1 && 1 === d.container.find(d.params.prevButton).length && (d.prevButton = d.container.find(d.params.prevButton)))), d.isHorizontal = function () {
                    return "horizontal" === d.params.direction
                }, d.rtl = d.isHorizontal() && ("rtl" === d.container[0].dir.toLowerCase() || "rtl" === d.container.css("direction")), d.rtl && d.classNames.push(d.params.containerModifierClass + "rtl"), d.rtl && (d.wrongRTL = "-webkit-box" === d.wrapper.css("display")), d.params.slidesPerColumn > 1 && d.classNames.push(d.params.containerModifierClass + "multirow"), d.device.android && d.classNames.push(d.params.containerModifierClass + "android"), d.container.addClass(d.classNames.join(" ")), d.translate = 0, d.progress = 0, d.velocity = 0, d.lockSwipeToNext = function () {
                    d.params.allowSwipeToNext = !1, !1 === d.params.allowSwipeToPrev && d.params.grabCursor && d.unsetGrabCursor()
                }, d.lockSwipeToPrev = function () {
                    d.params.allowSwipeToPrev = !1, !1 === d.params.allowSwipeToNext && d.params.grabCursor && d.unsetGrabCursor()
                }, d.lockSwipes = function () {
                    d.params.allowSwipeToNext = d.params.allowSwipeToPrev = !1, d.params.grabCursor && d.unsetGrabCursor()
                }, d.unlockSwipeToNext = function () {
                    d.params.allowSwipeToNext = !0, !0 === d.params.allowSwipeToPrev && d.params.grabCursor && d.setGrabCursor()
                }, d.unlockSwipeToPrev = function () {
                    d.params.allowSwipeToPrev = !0, !0 === d.params.allowSwipeToNext && d.params.grabCursor && d.setGrabCursor()
                }, d.unlockSwipes = function () {
                    d.params.allowSwipeToNext = d.params.allowSwipeToPrev = !0, d.params.grabCursor && d.setGrabCursor()
                }, d.setGrabCursor = function (e) {
                    d.container[0].style.cursor = "move", d.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", d.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", d.container[0].style.cursor = e ? "grabbing" : "grab"
                }, d.unsetGrabCursor = function () {
                    d.container[0].style.cursor = ""
                }, d.params.grabCursor && d.setGrabCursor(), d.imagesToLoad = [], d.imagesLoaded = 0, d.loadImage = function (e, t, i, n, r, o) {
                    var a;

                    function s() {
                        o && o()
                    }

                    e.complete && r ? s() : t ? ((a = new window.Image).onload = s, a.onerror = s, n && (a.sizes = n), i && (a.srcset = i), t && (a.src = t)) : s()
                }, d.preloadImages = function () {
                    function e() {
                        void 0 !== d && null !== d && d && (void 0 !== d.imagesLoaded && d.imagesLoaded++, d.imagesLoaded === d.imagesToLoad.length && (d.params.updateOnImagesReady && d.update(), d.emit("onImagesReady", d)))
                    }

                    d.imagesToLoad = d.container.find("img");
                    for (var t = 0; t < d.imagesToLoad.length; t++) d.loadImage(d.imagesToLoad[t], d.imagesToLoad[t].currentSrc || d.imagesToLoad[t].getAttribute("src"), d.imagesToLoad[t].srcset || d.imagesToLoad[t].getAttribute("srcset"), d.imagesToLoad[t].sizes || d.imagesToLoad[t].getAttribute("sizes"), !0, e)
                }, d.autoplayTimeoutId = void 0, d.autoplaying = !1, d.autoplayPaused = !1, d.startAutoplay = function () {
                    return void 0 === d.autoplayTimeoutId && (!!d.params.autoplay && (!d.autoplaying && (d.autoplaying = !0, d.emit("onAutoplayStart", d), void z())))
                }, d.stopAutoplay = function (e) {
                    d.autoplayTimeoutId && (d.autoplayTimeoutId && clearTimeout(d.autoplayTimeoutId), d.autoplaying = !1, d.autoplayTimeoutId = void 0, d.emit("onAutoplayStop", d))
                }, d.pauseAutoplay = function (e) {
                    d.autoplayPaused || (d.autoplayTimeoutId && clearTimeout(d.autoplayTimeoutId), d.autoplayPaused = !0, 0 === e ? (d.autoplayPaused = !1, z()) : d.wrapper.transitionEnd(function () {
                        d && (d.autoplayPaused = !1, d.autoplaying ? z() : d.stopAutoplay())
                    }))
                }, d.minTranslate = function () {
                    return -d.snapGrid[0]
                }, d.maxTranslate = function () {
                    return -d.snapGrid[d.snapGrid.length - 1]
                }, d.updateAutoHeight = function () {
                    var e, t = [], i = 0;
                    if ("auto" !== d.params.slidesPerView && d.params.slidesPerView > 1) for (e = 0; e < Math.ceil(d.params.slidesPerView); e++) {
                        var n = d.activeIndex + e;
                        if (n > d.slides.length) break;
                        t.push(d.slides.eq(n)[0])
                    } else t.push(d.slides.eq(d.activeIndex)[0]);
                    for (e = 0; e < t.length; e++) if (void 0 !== t[e]) {
                        var r = t[e].offsetHeight;
                        i = r > i ? r : i
                    }
                    i && d.wrapper.css("height", i + "px")
                }, d.updateContainerSize = function () {
                    var e, t;
                    e = void 0 !== d.params.width ? d.params.width : d.container[0].clientWidth, t = void 0 !== d.params.height ? d.params.height : d.container[0].clientHeight, 0 === e && d.isHorizontal() || 0 === t && !d.isHorizontal() || (e = e - parseInt(d.container.css("padding-left"), 10) - parseInt(d.container.css("padding-right"), 10), t = t - parseInt(d.container.css("padding-top"), 10) - parseInt(d.container.css("padding-bottom"), 10), d.width = e, d.height = t, d.size = d.isHorizontal() ? d.width : d.height)
                }, d.updateSlidesSize = function () {
                    d.slides = d.wrapper.children("." + d.params.slideClass), d.snapGrid = [], d.slidesGrid = [], d.slidesSizesGrid = [];
                    var e, t = d.params.spaceBetween, i = -d.params.slidesOffsetBefore, n = 0, r = 0;
                    if (void 0 !== d.size) {
                        var o, a;
                        "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * d.size), d.virtualSize = -t, d.rtl ? d.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : d.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        }), d.params.slidesPerColumn > 1 && (o = Math.floor(d.slides.length / d.params.slidesPerColumn) === d.slides.length / d.params.slidesPerColumn ? d.slides.length : Math.ceil(d.slides.length / d.params.slidesPerColumn) * d.params.slidesPerColumn, "auto" !== d.params.slidesPerView && "row" === d.params.slidesPerColumnFill && (o = Math.max(o, d.params.slidesPerView * d.params.slidesPerColumn)));
                        var s, l = d.params.slidesPerColumn, c = o / l,
                            u = c - (d.params.slidesPerColumn * c - d.slides.length);
                        for (e = 0; e < d.slides.length; e++) {
                            a = 0;
                            var p, h, f, v = d.slides.eq(e);
                            if (d.params.slidesPerColumn > 1) "column" === d.params.slidesPerColumnFill ? (f = e - (h = Math.floor(e / l)) * l, (h > u || h === u && f === l - 1) && ++f >= l && (f = 0, h++), p = h + f * o / l, v.css({
                                "-webkit-box-ordinal-group": p,
                                "-moz-box-ordinal-group": p,
                                "-ms-flex-order": p,
                                "-webkit-order": p,
                                order: p
                            })) : h = e - (f = Math.floor(e / c)) * c, v.css("margin-" + (d.isHorizontal() ? "top" : "left"), 0 !== f && d.params.spaceBetween && d.params.spaceBetween + "px").attr("data-swiper-column", h).attr("data-swiper-row", f);
                            "none" !== v.css("display") && ("auto" === d.params.slidesPerView ? (a = d.isHorizontal() ? v.outerWidth(!0) : v.outerHeight(!0), d.params.roundLengths && (a = M(a))) : (a = (d.size - (d.params.slidesPerView - 1) * t) / d.params.slidesPerView, d.params.roundLengths && (a = M(a)), d.isHorizontal() ? d.slides[e].style.width = a + "px" : d.slides[e].style.height = a + "px"), d.slides[e].swiperSlideSize = a, d.slidesSizesGrid.push(a), d.params.centeredSlides ? (i = i + a / 2 + n / 2 + t, 0 === n && 0 !== e && (i = i - d.size / 2 - t), 0 === e && (i = i - d.size / 2 - t), Math.abs(i) < .001 && (i = 0), r % d.params.slidesPerGroup == 0 && d.snapGrid.push(i), d.slidesGrid.push(i)) : (r % d.params.slidesPerGroup == 0 && d.snapGrid.push(i), d.slidesGrid.push(i), i = i + a + t), d.virtualSize += a + t, n = a, r++)
                        }
                        if (d.virtualSize = Math.max(d.virtualSize, d.size) + d.params.slidesOffsetAfter, d.rtl && d.wrongRTL && ("slide" === d.params.effect || "coverflow" === d.params.effect) && d.wrapper.css({width: d.virtualSize + d.params.spaceBetween + "px"}), d.support.flexbox && !d.params.setWrapperSize || (d.isHorizontal() ? d.wrapper.css({width: d.virtualSize + d.params.spaceBetween + "px"}) : d.wrapper.css({height: d.virtualSize + d.params.spaceBetween + "px"})), d.params.slidesPerColumn > 1 && (d.virtualSize = (a + d.params.spaceBetween) * o, d.virtualSize = Math.ceil(d.virtualSize / d.params.slidesPerColumn) - d.params.spaceBetween, d.isHorizontal() ? d.wrapper.css({width: d.virtualSize + d.params.spaceBetween + "px"}) : d.wrapper.css({height: d.virtualSize + d.params.spaceBetween + "px"}), d.params.centeredSlides)) {
                            for (s = [], e = 0; e < d.snapGrid.length; e++) d.snapGrid[e] < d.virtualSize + d.snapGrid[0] && s.push(d.snapGrid[e]);
                            d.snapGrid = s
                        }
                        if (!d.params.centeredSlides) {
                            for (s = [], e = 0; e < d.snapGrid.length; e++) d.snapGrid[e] <= d.virtualSize - d.size && s.push(d.snapGrid[e]);
                            d.snapGrid = s, Math.floor(d.virtualSize - d.size) - Math.floor(d.snapGrid[d.snapGrid.length - 1]) > 1 && d.snapGrid.push(d.virtualSize - d.size)
                        }
                        0 === d.snapGrid.length && (d.snapGrid = [0]), 0 !== d.params.spaceBetween && (d.isHorizontal() ? d.rtl ? d.slides.css({marginLeft: t + "px"}) : d.slides.css({marginRight: t + "px"}) : d.slides.css({marginBottom: t + "px"})), d.params.watchSlidesProgress && d.updateSlidesOffset()
                    }
                }, d.updateSlidesOffset = function () {
                    for (var e = 0; e < d.slides.length; e++) d.slides[e].swiperSlideOffset = d.isHorizontal() ? d.slides[e].offsetLeft : d.slides[e].offsetTop
                }, d.currentSlidesPerView = function () {
                    var e, t, i = 1;
                    if (d.params.centeredSlides) {
                        var n, r = d.slides[d.activeIndex].swiperSlideSize;
                        for (e = d.activeIndex + 1; e < d.slides.length; e++) d.slides[e] && !n && (i++, (r += d.slides[e].swiperSlideSize) > d.size && (n = !0));
                        for (t = d.activeIndex - 1; t >= 0; t--) d.slides[t] && !n && (i++, (r += d.slides[t].swiperSlideSize) > d.size && (n = !0))
                    } else for (e = d.activeIndex + 1; e < d.slides.length; e++) d.slidesGrid[e] - d.slidesGrid[d.activeIndex] < d.size && i++;
                    return i
                }, d.updateSlidesProgress = function (e) {
                    if (void 0 === e && (e = d.translate || 0), 0 !== d.slides.length) {
                        void 0 === d.slides[0].swiperSlideOffset && d.updateSlidesOffset();
                        var t = -e;
                        d.rtl && (t = e), d.slides.removeClass(d.params.slideVisibleClass);
                        for (var i = 0; i < d.slides.length; i++) {
                            var n = d.slides[i],
                                r = (t + (d.params.centeredSlides ? d.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + d.params.spaceBetween);
                            if (d.params.watchSlidesVisibility) {
                                var o = -(t - n.swiperSlideOffset), a = o + d.slidesSizesGrid[i];
                                (o >= 0 && o < d.size || a > 0 && a <= d.size || o <= 0 && a >= d.size) && d.slides.eq(i).addClass(d.params.slideVisibleClass)
                            }
                            n.progress = d.rtl ? -r : r
                        }
                    }
                }, d.updateProgress = function (e) {
                    void 0 === e && (e = d.translate || 0);
                    var t = d.maxTranslate() - d.minTranslate(), i = d.isBeginning, n = d.isEnd;
                    0 === t ? (d.progress = 0, d.isBeginning = d.isEnd = !0) : (d.progress = (e - d.minTranslate()) / t, d.isBeginning = d.progress <= 0, d.isEnd = d.progress >= 1), d.isBeginning && !i && d.emit("onReachBeginning", d), d.isEnd && !n && d.emit("onReachEnd", d), d.params.watchSlidesProgress && d.updateSlidesProgress(e), d.emit("onProgress", d, d.progress)
                }, d.updateActiveIndex = function () {
                    var e, t, i, n = d.rtl ? d.translate : -d.translate;
                    for (t = 0; t < d.slidesGrid.length; t++) void 0 !== d.slidesGrid[t + 1] ? n >= d.slidesGrid[t] && n < d.slidesGrid[t + 1] - (d.slidesGrid[t + 1] - d.slidesGrid[t]) / 2 ? e = t : n >= d.slidesGrid[t] && n < d.slidesGrid[t + 1] && (e = t + 1) : n >= d.slidesGrid[t] && (e = t);
                    d.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (i = Math.floor(e / d.params.slidesPerGroup)) >= d.snapGrid.length && (i = d.snapGrid.length - 1), e !== d.activeIndex && (d.snapIndex = i, d.previousIndex = d.activeIndex, d.activeIndex = e, d.updateClasses(), d.updateRealIndex())
                }, d.updateRealIndex = function () {
                    d.realIndex = parseInt(d.slides.eq(d.activeIndex).attr("data-swiper-slide-index") || d.activeIndex, 10)
                }, d.updateClasses = function () {
                    d.slides.removeClass(d.params.slideActiveClass + " " + d.params.slideNextClass + " " + d.params.slidePrevClass + " " + d.params.slideDuplicateActiveClass + " " + d.params.slideDuplicateNextClass + " " + d.params.slideDuplicatePrevClass);
                    var t = d.slides.eq(d.activeIndex);
                    t.addClass(d.params.slideActiveClass), r.loop && (t.hasClass(d.params.slideDuplicateClass) ? d.wrapper.children("." + d.params.slideClass + ":not(." + d.params.slideDuplicateClass + ')[data-swiper-slide-index="' + d.realIndex + '"]').addClass(d.params.slideDuplicateActiveClass) : d.wrapper.children("." + d.params.slideClass + "." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + d.realIndex + '"]').addClass(d.params.slideDuplicateActiveClass));
                    var i = t.next("." + d.params.slideClass).addClass(d.params.slideNextClass);
                    d.params.loop && 0 === i.length && (i = d.slides.eq(0)).addClass(d.params.slideNextClass);
                    var n = t.prev("." + d.params.slideClass).addClass(d.params.slidePrevClass);
                    if (d.params.loop && 0 === n.length && (n = d.slides.eq(-1)).addClass(d.params.slidePrevClass), r.loop && (i.hasClass(d.params.slideDuplicateClass) ? d.wrapper.children("." + d.params.slideClass + ":not(." + d.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(d.params.slideDuplicateNextClass) : d.wrapper.children("." + d.params.slideClass + "." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(d.params.slideDuplicateNextClass), n.hasClass(d.params.slideDuplicateClass) ? d.wrapper.children("." + d.params.slideClass + ":not(." + d.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(d.params.slideDuplicatePrevClass) : d.wrapper.children("." + d.params.slideClass + "." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(d.params.slideDuplicatePrevClass)), d.paginationContainer && d.paginationContainer.length > 0) {
                        var o,
                            a = d.params.loop ? Math.ceil((d.slides.length - 2 * d.loopedSlides) / d.params.slidesPerGroup) : d.snapGrid.length;
                        if (d.params.loop ? ((o = Math.ceil((d.activeIndex - d.loopedSlides) / d.params.slidesPerGroup)) > d.slides.length - 1 - 2 * d.loopedSlides && (o -= d.slides.length - 2 * d.loopedSlides), o > a - 1 && (o -= a), o < 0 && "bullets" !== d.params.paginationType && (o = a + o)) : o = void 0 !== d.snapIndex ? d.snapIndex : d.activeIndex || 0, "bullets" === d.params.paginationType && d.bullets && d.bullets.length > 0 && (d.bullets.removeClass(d.params.bulletActiveClass), d.paginationContainer.length > 1 ? d.bullets.each(function () {
                                e(this).index() === o && e(this).addClass(d.params.bulletActiveClass)
                            }) : d.bullets.eq(o).addClass(d.params.bulletActiveClass)), "fraction" === d.params.paginationType && (d.paginationContainer.find("." + d.params.paginationCurrentClass).text(o + 1), d.paginationContainer.find("." + d.params.paginationTotalClass).text(a)), "progress" === d.params.paginationType) {
                            var s = (o + 1) / a, l = s, c = 1;
                            d.isHorizontal() || (c = s, l = 1), d.paginationContainer.find("." + d.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + c + ")").transition(d.params.speed)
                        }
                        "custom" === d.params.paginationType && d.params.paginationCustomRender && (d.paginationContainer.html(d.params.paginationCustomRender(d, o + 1, a)), d.emit("onPaginationRendered", d, d.paginationContainer[0]))
                    }
                    d.params.loop || (d.params.prevButton && d.prevButton && d.prevButton.length > 0 && (d.isBeginning ? (d.prevButton.addClass(d.params.buttonDisabledClass), d.params.a11y && d.a11y && d.a11y.disable(d.prevButton)) : (d.prevButton.removeClass(d.params.buttonDisabledClass), d.params.a11y && d.a11y && d.a11y.enable(d.prevButton))), d.params.nextButton && d.nextButton && d.nextButton.length > 0 && (d.isEnd ? (d.nextButton.addClass(d.params.buttonDisabledClass), d.params.a11y && d.a11y && d.a11y.disable(d.nextButton)) : (d.nextButton.removeClass(d.params.buttonDisabledClass), d.params.a11y && d.a11y && d.a11y.enable(d.nextButton))))
                }, d.updatePagination = function () {
                    if (d.params.pagination && d.paginationContainer && d.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === d.params.paginationType) {
                            for (var t = d.params.loop ? Math.ceil((d.slides.length - 2 * d.loopedSlides) / d.params.slidesPerGroup) : d.snapGrid.length, i = 0; i < t; i++) d.params.paginationBulletRender ? e += d.params.paginationBulletRender(d, i, d.params.bulletClass) : e += "<" + d.params.paginationElement + ' class="' + d.params.bulletClass + '"></' + d.params.paginationElement + ">";
                            d.paginationContainer.html(e), d.bullets = d.paginationContainer.find("." + d.params.bulletClass), d.params.paginationClickable && d.params.a11y && d.a11y && d.a11y.initPagination()
                        }
                        "fraction" === d.params.paginationType && (e = d.params.paginationFractionRender ? d.params.paginationFractionRender(d, d.params.paginationCurrentClass, d.params.paginationTotalClass) : '<span class="' + d.params.paginationCurrentClass + '"></span> / <span class="' + d.params.paginationTotalClass + '"></span>', d.paginationContainer.html(e)), "progress" === d.params.paginationType && (e = d.params.paginationProgressRender ? d.params.paginationProgressRender(d, d.params.paginationProgressbarClass) : '<span class="' + d.params.paginationProgressbarClass + '"></span>', d.paginationContainer.html(e)), "custom" !== d.params.paginationType && d.emit("onPaginationRendered", d, d.paginationContainer[0])
                    }
                }, d.update = function (e) {
                    var t;
                    d && (d.updateContainerSize(), d.updateSlidesSize(), d.updateProgress(), d.updatePagination(), d.updateClasses(), d.params.scrollbar && d.scrollbar && d.scrollbar.set(), e ? (d.controller && d.controller.spline && (d.controller.spline = void 0), d.params.freeMode ? (i(), d.params.autoHeight && d.updateAutoHeight()) : (("auto" === d.params.slidesPerView || d.params.slidesPerView > 1) && d.isEnd && !d.params.centeredSlides ? d.slideTo(d.slides.length - 1, 0, !1, !0) : d.slideTo(d.activeIndex, 0, !1, !0)) || i()) : d.params.autoHeight && d.updateAutoHeight());

                    function i() {
                        d.rtl, d.translate;
                        t = Math.min(Math.max(d.translate, d.maxTranslate()), d.minTranslate()), d.setWrapperTranslate(t), d.updateActiveIndex(), d.updateClasses()
                    }
                }, d.onResize = function (e) {
                    d.params.onBeforeResize && d.params.onBeforeResize(d), d.params.breakpoints && d.setBreakpoint();
                    var t = d.params.allowSwipeToPrev, i = d.params.allowSwipeToNext;
                    d.params.allowSwipeToPrev = d.params.allowSwipeToNext = !0, d.updateContainerSize(), d.updateSlidesSize(), ("auto" === d.params.slidesPerView || d.params.freeMode || e) && d.updatePagination(), d.params.scrollbar && d.scrollbar && d.scrollbar.set(), d.controller && d.controller.spline && (d.controller.spline = void 0);
                    var n = !1;
                    if (d.params.freeMode) {
                        var r = Math.min(Math.max(d.translate, d.maxTranslate()), d.minTranslate());
                        d.setWrapperTranslate(r), d.updateActiveIndex(), d.updateClasses(), d.params.autoHeight && d.updateAutoHeight()
                    } else d.updateClasses(), n = ("auto" === d.params.slidesPerView || d.params.slidesPerView > 1) && d.isEnd && !d.params.centeredSlides ? d.slideTo(d.slides.length - 1, 0, !1, !0) : d.slideTo(d.activeIndex, 0, !1, !0);
                    d.params.lazyLoading && !n && d.lazy && d.lazy.load(), d.params.allowSwipeToPrev = t, d.params.allowSwipeToNext = i, d.params.onAfterResize && d.params.onAfterResize(d)
                }, d.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                }, window.navigator.pointerEnabled ? d.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (d.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }), d.touchEvents = {
                    start: d.support.touch || !d.params.simulateTouch ? "touchstart" : d.touchEventsDesktop.start,
                    move: d.support.touch || !d.params.simulateTouch ? "touchmove" : d.touchEventsDesktop.move,
                    end: d.support.touch || !d.params.simulateTouch ? "touchend" : d.touchEventsDesktop.end
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === d.params.touchEventsTarget ? d.container : d.wrapper).addClass("swiper-wp8-" + d.params.direction), d.initEvents = function (e) {
                    var t = e ? "off" : "on", i = e ? "removeEventListener" : "addEventListener",
                        n = "container" === d.params.touchEventsTarget ? d.container[0] : d.wrapper[0],
                        o = d.support.touch ? n : document, a = !!d.params.nested;
                    if (d.browser.ie) n[i](d.touchEvents.start, d.onTouchStart, !1), o[i](d.touchEvents.move, d.onTouchMove, a), o[i](d.touchEvents.end, d.onTouchEnd, !1); else {
                        if (d.support.touch) {
                            var s = !("touchstart" !== d.touchEvents.start || !d.support.passiveListener || !d.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            n[i](d.touchEvents.start, d.onTouchStart, s), n[i](d.touchEvents.move, d.onTouchMove, a), n[i](d.touchEvents.end, d.onTouchEnd, s)
                        }
                        (r.simulateTouch && !d.device.ios && !d.device.android || r.simulateTouch && !d.support.touch && d.device.ios) && (n[i]("mousedown", d.onTouchStart, !1), document[i]("mousemove", d.onTouchMove, a), document[i]("mouseup", d.onTouchEnd, !1))
                    }
                    window[i]("resize", d.onResize), d.params.nextButton && d.nextButton && d.nextButton.length > 0 && (d.nextButton[t]("click", d.onClickNext), d.params.a11y && d.a11y && d.nextButton[t]("keydown", d.a11y.onEnterKey)), d.params.prevButton && d.prevButton && d.prevButton.length > 0 && (d.prevButton[t]("click", d.onClickPrev), d.params.a11y && d.a11y && d.prevButton[t]("keydown", d.a11y.onEnterKey)), d.params.pagination && d.params.paginationClickable && (d.paginationContainer[t]("click", "." + d.params.bulletClass, d.onClickIndex), d.params.a11y && d.a11y && d.paginationContainer[t]("keydown", "." + d.params.bulletClass, d.a11y.onEnterKey)), (d.params.preventClicks || d.params.preventClicksPropagation) && n[i]("click", d.preventClicks, !0)
                }, d.attachEvents = function () {
                    d.initEvents()
                }, d.detachEvents = function () {
                    d.initEvents(!0)
                }, d.allowClick = !0, d.preventClicks = function (e) {
                    d.allowClick || (d.params.preventClicks && e.preventDefault(), d.params.preventClicksPropagation && d.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, d.onClickNext = function (e) {
                    e.preventDefault(), d.isEnd && !d.params.loop || d.slideNext()
                }, d.onClickPrev = function (e) {
                    e.preventDefault(), d.isBeginning && !d.params.loop || d.slidePrev()
                }, d.onClickIndex = function (t) {
                    t.preventDefault();
                    var i = e(this).index() * d.params.slidesPerGroup;
                    d.params.loop && (i += d.loopedSlides), d.slideTo(i)
                }, d.updateClickedSlide = function (t) {
                    var i = I(t, "." + d.params.slideClass), n = !1;
                    if (i) for (var r = 0; r < d.slides.length; r++) d.slides[r] === i && (n = !0);
                    if (!i || !n) return d.clickedSlide = void 0, void(d.clickedIndex = void 0);
                    if (d.clickedSlide = i, d.clickedIndex = e(i).index(), d.params.slideToClickedSlide && void 0 !== d.clickedIndex && d.clickedIndex !== d.activeIndex) {
                        var o, a = d.clickedIndex,
                            s = "auto" === d.params.slidesPerView ? d.currentSlidesPerView() : d.params.slidesPerView;
                        if (d.params.loop) {
                            if (d.animating) return;
                            o = parseInt(e(d.clickedSlide).attr("data-swiper-slide-index"), 10), d.params.centeredSlides ? a < d.loopedSlides - s / 2 || a > d.slides.length - d.loopedSlides + s / 2 ? (d.fixLoop(), a = d.wrapper.children("." + d.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + d.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                                d.slideTo(a)
                            }, 0)) : d.slideTo(a) : a > d.slides.length - s ? (d.fixLoop(), a = d.wrapper.children("." + d.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + d.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                                d.slideTo(a)
                            }, 0)) : d.slideTo(a)
                        } else d.slideTo(a)
                    }
                };
                var f, v, g, m, A, b, y, w, x, _, k, j, C = "input, select, textarea, button, video", T = Date.now(),
                    E = [];
                for (var S in d.animating = !1, d.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                }, d.onTouchStart = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), (k = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) if (d.params.noSwiping && I(t, "." + d.params.noSwipingClass)) d.allowClick = !0; else if (!d.params.swipeHandler || I(t, d.params.swipeHandler)) {
                        var i = d.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                            n = d.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                        if (!(d.device.ios && d.params.iOSEdgeSwipeDetection && i <= d.params.iOSEdgeSwipeThreshold)) {
                            if (f = !0, v = !1, g = !0, A = void 0, j = void 0, d.touches.startX = i, d.touches.startY = n, m = Date.now(), d.allowClick = !0, d.updateContainerSize(), d.swipeDirection = void 0, d.params.threshold > 0 && (w = !1), "touchstart" !== t.type) {
                                var r = !0;
                                e(t.target).is(C) && (r = !1), document.activeElement && e(document.activeElement).is(C) && document.activeElement.blur(), r && t.preventDefault()
                            }
                            d.emit("onTouchStart", d, t)
                        }
                    }
                }, d.onTouchMove = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), !k || "mousemove" !== t.type) {
                        if (t.preventedByNestedSwiper) return d.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(d.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                        if (d.params.onlyExternal) return d.allowClick = !1, void(f && (d.touches.startX = d.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, d.touches.startY = d.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, m = Date.now()));
                        if (k && d.params.touchReleaseOnEdges && !d.params.loop) if (d.isHorizontal()) {
                            if (d.touches.currentX < d.touches.startX && d.translate <= d.maxTranslate() || d.touches.currentX > d.touches.startX && d.translate >= d.minTranslate()) return
                        } else if (d.touches.currentY < d.touches.startY && d.translate <= d.maxTranslate() || d.touches.currentY > d.touches.startY && d.translate >= d.minTranslate()) return;
                        if (k && document.activeElement && t.target === document.activeElement && e(t.target).is(C)) return v = !0, void(d.allowClick = !1);
                        if (g && d.emit("onTouchMove", d, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                            var i;
                            if (d.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, d.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === A) d.isHorizontal() && d.touches.currentY === d.touches.startY || !d.isHorizontal() && d.touches.currentX === d.touches.startX ? A = !1 : (i = 180 * Math.atan2(Math.abs(d.touches.currentY - d.touches.startY), Math.abs(d.touches.currentX - d.touches.startX)) / Math.PI, A = d.isHorizontal() ? i > d.params.touchAngle : 90 - i > d.params.touchAngle);
                            if (A && d.emit("onTouchMoveOpposite", d, t), void 0 === j && (d.touches.currentX === d.touches.startX && d.touches.currentY === d.touches.startY || (j = !0)), f) if (A) f = !1; else if (j) {
                                d.allowClick = !1, d.emit("onSliderMove", d, t), t.preventDefault(), d.params.touchMoveStopPropagation && !d.params.nested && t.stopPropagation(), v || (r.loop && d.fixLoop(), y = d.getWrapperTranslate(), d.setWrapperTransition(0), d.animating && d.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), d.params.autoplay && d.autoplaying && (d.params.autoplayDisableOnInteraction ? d.stopAutoplay() : d.pauseAutoplay()), _ = !1, !d.params.grabCursor || !0 !== d.params.allowSwipeToNext && !0 !== d.params.allowSwipeToPrev || d.setGrabCursor(!0)), v = !0;
                                var n = d.touches.diff = d.isHorizontal() ? d.touches.currentX - d.touches.startX : d.touches.currentY - d.touches.startY;
                                n *= d.params.touchRatio, d.rtl && (n = -n), d.swipeDirection = n > 0 ? "prev" : "next", b = n + y;
                                var o = !0;
                                if (n > 0 && b > d.minTranslate() ? (o = !1, d.params.resistance && (b = d.minTranslate() - 1 + Math.pow(-d.minTranslate() + y + n, d.params.resistanceRatio))) : n < 0 && b < d.maxTranslate() && (o = !1, d.params.resistance && (b = d.maxTranslate() + 1 - Math.pow(d.maxTranslate() - y - n, d.params.resistanceRatio))), o && (t.preventedByNestedSwiper = !0), !d.params.allowSwipeToNext && "next" === d.swipeDirection && b < y && (b = y), !d.params.allowSwipeToPrev && "prev" === d.swipeDirection && b > y && (b = y), d.params.threshold > 0) {
                                    if (!(Math.abs(n) > d.params.threshold || w)) return void(b = y);
                                    if (!w) return w = !0, d.touches.startX = d.touches.currentX, d.touches.startY = d.touches.currentY, b = y, void(d.touches.diff = d.isHorizontal() ? d.touches.currentX - d.touches.startX : d.touches.currentY - d.touches.startY)
                                }
                                d.params.followFinger && ((d.params.freeMode || d.params.watchSlidesProgress) && d.updateActiveIndex(), d.params.freeMode && (0 === E.length && E.push({
                                    position: d.touches[d.isHorizontal() ? "startX" : "startY"],
                                    time: m
                                }), E.push({
                                    position: d.touches[d.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), d.updateProgress(b), d.setWrapperTranslate(b))
                            }
                        }
                    }
                }, d.onTouchEnd = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), g && d.emit("onTouchEnd", d, t), g = !1, f) {
                        d.params.grabCursor && v && f && (!0 === d.params.allowSwipeToNext || !0 === d.params.allowSwipeToPrev) && d.setGrabCursor(!1);
                        var i, n = Date.now(), r = n - m;
                        if (d.allowClick && (d.updateClickedSlide(t), d.emit("onTap", d, t), r < 300 && n - T > 300 && (x && clearTimeout(x), x = setTimeout(function () {
                                d && (d.params.paginationHide && d.paginationContainer.length > 0 && !e(t.target).hasClass(d.params.bulletClass) && d.paginationContainer.toggleClass(d.params.paginationHiddenClass), d.emit("onClick", d, t))
                            }, 300)), r < 300 && n - T < 300 && (x && clearTimeout(x), d.emit("onDoubleTap", d, t))), T = Date.now(), setTimeout(function () {
                                d && (d.allowClick = !0)
                            }, 0), f && v && d.swipeDirection && 0 !== d.touches.diff && b !== y) if (f = v = !1, i = d.params.followFinger ? d.rtl ? d.translate : -d.translate : -b, d.params.freeMode) {
                            if (i < -d.minTranslate()) return void d.slideTo(d.activeIndex);
                            if (i > -d.maxTranslate()) return void(d.slides.length < d.snapGrid.length ? d.slideTo(d.snapGrid.length - 1) : d.slideTo(d.slides.length - 1));
                            if (d.params.freeModeMomentum) {
                                if (E.length > 1) {
                                    var o = E.pop(), a = E.pop(), s = o.position - a.position, l = o.time - a.time;
                                    d.velocity = s / l, d.velocity = d.velocity / 2, Math.abs(d.velocity) < d.params.freeModeMinimumVelocity && (d.velocity = 0), (l > 150 || (new window.Date).getTime() - o.time > 300) && (d.velocity = 0)
                                } else d.velocity = 0;
                                d.velocity = d.velocity * d.params.freeModeMomentumVelocityRatio, E.length = 0;
                                var c = 1e3 * d.params.freeModeMomentumRatio, u = d.velocity * c, p = d.translate + u;
                                d.rtl && (p = -p);
                                var h, A = !1, w = 20 * Math.abs(d.velocity) * d.params.freeModeMomentumBounceRatio;
                                if (p < d.maxTranslate()) d.params.freeModeMomentumBounce ? (p + d.maxTranslate() < -w && (p = d.maxTranslate() - w), h = d.maxTranslate(), A = !0, _ = !0) : p = d.maxTranslate(); else if (p > d.minTranslate()) d.params.freeModeMomentumBounce ? (p - d.minTranslate() > w && (p = d.minTranslate() + w), h = d.minTranslate(), A = !0, _ = !0) : p = d.minTranslate(); else if (d.params.freeModeSticky) {
                                    var k, j = 0;
                                    for (j = 0; j < d.snapGrid.length; j += 1) if (d.snapGrid[j] > -p) {
                                        k = j;
                                        break
                                    }
                                    p = Math.abs(d.snapGrid[k] - p) < Math.abs(d.snapGrid[k - 1] - p) || "next" === d.swipeDirection ? d.snapGrid[k] : d.snapGrid[k - 1], d.rtl || (p = -p)
                                }
                                if (0 !== d.velocity) c = d.rtl ? Math.abs((-p - d.translate) / d.velocity) : Math.abs((p - d.translate) / d.velocity); else if (d.params.freeModeSticky) return void d.slideReset();
                                d.params.freeModeMomentumBounce && A ? (d.updateProgress(h), d.setWrapperTransition(c), d.setWrapperTranslate(p), d.onTransitionStart(), d.animating = !0, d.wrapper.transitionEnd(function () {
                                    d && _ && (d.emit("onMomentumBounce", d), d.setWrapperTransition(d.params.speed), d.setWrapperTranslate(h), d.wrapper.transitionEnd(function () {
                                        d && d.onTransitionEnd()
                                    }))
                                })) : d.velocity ? (d.updateProgress(p), d.setWrapperTransition(c), d.setWrapperTranslate(p), d.onTransitionStart(), d.animating || (d.animating = !0, d.wrapper.transitionEnd(function () {
                                    d && d.onTransitionEnd()
                                }))) : d.updateProgress(p), d.updateActiveIndex()
                            }
                            (!d.params.freeModeMomentum || r >= d.params.longSwipesMs) && (d.updateProgress(), d.updateActiveIndex())
                        } else {
                            var C, S = 0, B = d.slidesSizesGrid[0];
                            for (C = 0; C < d.slidesGrid.length; C += d.params.slidesPerGroup) void 0 !== d.slidesGrid[C + d.params.slidesPerGroup] ? i >= d.slidesGrid[C] && i < d.slidesGrid[C + d.params.slidesPerGroup] && (S = C, B = d.slidesGrid[C + d.params.slidesPerGroup] - d.slidesGrid[C]) : i >= d.slidesGrid[C] && (S = C, B = d.slidesGrid[d.slidesGrid.length - 1] - d.slidesGrid[d.slidesGrid.length - 2]);
                            var M = (i - d.slidesGrid[S]) / B;
                            if (r > d.params.longSwipesMs) {
                                if (!d.params.longSwipes) return void d.slideTo(d.activeIndex);
                                "next" === d.swipeDirection && (M >= d.params.longSwipesRatio ? d.slideTo(S + d.params.slidesPerGroup) : d.slideTo(S)), "prev" === d.swipeDirection && (M > 1 - d.params.longSwipesRatio ? d.slideTo(S + d.params.slidesPerGroup) : d.slideTo(S))
                            } else {
                                if (!d.params.shortSwipes) return void d.slideTo(d.activeIndex);
                                "next" === d.swipeDirection && d.slideTo(S + d.params.slidesPerGroup), "prev" === d.swipeDirection && d.slideTo(S)
                            }
                        } else f = v = !1
                    }
                }, d._slideTo = function (e, t) {
                    return d.slideTo(e, t, !0, !0)
                }, d.slideTo = function (e, t, i, n) {
                    void 0 === i && (i = !0), void 0 === e && (e = 0), e < 0 && (e = 0), d.snapIndex = Math.floor(e / d.params.slidesPerGroup), d.snapIndex >= d.snapGrid.length && (d.snapIndex = d.snapGrid.length - 1);
                    var r = -d.snapGrid[d.snapIndex];
                    if (d.params.autoplay && d.autoplaying && (n || !d.params.autoplayDisableOnInteraction ? d.pauseAutoplay(t) : d.stopAutoplay()), d.updateProgress(r), d.params.normalizeSlideIndex) for (var o = 0; o < d.slidesGrid.length; o++) -Math.floor(100 * r) >= Math.floor(100 * d.slidesGrid[o]) && (e = o);
                    return !(!d.params.allowSwipeToNext && r < d.translate && r < d.minTranslate()) && (!(!d.params.allowSwipeToPrev && r > d.translate && r > d.maxTranslate() && (d.activeIndex || 0) !== e) && (void 0 === t && (t = d.params.speed), d.previousIndex = d.activeIndex || 0, d.activeIndex = e, d.updateRealIndex(), d.rtl && -r === d.translate || !d.rtl && r === d.translate ? (d.params.autoHeight && d.updateAutoHeight(), d.updateClasses(), "slide" !== d.params.effect && d.setWrapperTranslate(r), !1) : (d.updateClasses(), d.onTransitionStart(i), 0 === t || d.browser.lteIE9 ? (d.setWrapperTranslate(r), d.setWrapperTransition(0), d.onTransitionEnd(i)) : (d.setWrapperTranslate(r), d.setWrapperTransition(t), d.animating || (d.animating = !0, d.wrapper.transitionEnd(function () {
                        d && d.onTransitionEnd(i)
                    }))), !0)))
                }, d.onTransitionStart = function (e) {
                    void 0 === e && (e = !0), d.params.autoHeight && d.updateAutoHeight(), d.lazy && d.lazy.onTransitionStart(), e && (d.emit("onTransitionStart", d), d.activeIndex !== d.previousIndex && (d.emit("onSlideChangeStart", d), d.activeIndex > d.previousIndex ? d.emit("onSlideNextStart", d) : d.emit("onSlidePrevStart", d)))
                }, d.onTransitionEnd = function (e) {
                    d.animating = !1, d.setWrapperTransition(0), void 0 === e && (e = !0), d.lazy && d.lazy.onTransitionEnd(), e && (d.emit("onTransitionEnd", d), d.activeIndex !== d.previousIndex && (d.emit("onSlideChangeEnd", d), d.activeIndex > d.previousIndex ? d.emit("onSlideNextEnd", d) : d.emit("onSlidePrevEnd", d))), d.params.history && d.history && d.history.setHistory(d.params.history, d.activeIndex), d.params.hashnav && d.hashnav && d.hashnav.setHash()
                }, d.slideNext = function (e, t, i) {
                    if (d.params.loop) {
                        if (d.animating) return !1;
                        d.fixLoop();
                        d.container[0].clientLeft;
                        return d.slideTo(d.activeIndex + d.params.slidesPerGroup, t, e, i)
                    }
                    return d.slideTo(d.activeIndex + d.params.slidesPerGroup, t, e, i)
                }, d._slideNext = function (e) {
                    return d.slideNext(!0, e, !0)
                }, d.slidePrev = function (e, t, i) {
                    if (d.params.loop) {
                        if (d.animating) return !1;
                        d.fixLoop();
                        d.container[0].clientLeft;
                        return d.slideTo(d.activeIndex - 1, t, e, i)
                    }
                    return d.slideTo(d.activeIndex - 1, t, e, i)
                }, d._slidePrev = function (e) {
                    return d.slidePrev(!0, e, !0)
                }, d.slideReset = function (e, t, i) {
                    return d.slideTo(d.activeIndex, t, e)
                }, d.disableTouchControl = function () {
                    return d.params.onlyExternal = !0, !0
                }, d.enableTouchControl = function () {
                    return d.params.onlyExternal = !1, !0
                }, d.setWrapperTransition = function (e, t) {
                    d.wrapper.transition(e), "slide" !== d.params.effect && d.effects[d.params.effect] && d.effects[d.params.effect].setTransition(e), d.params.parallax && d.parallax && d.parallax.setTransition(e), d.params.scrollbar && d.scrollbar && d.scrollbar.setTransition(e), d.params.control && d.controller && d.controller.setTransition(e, t), d.emit("onSetTransition", d, e)
                }, d.setWrapperTranslate = function (e, t, i) {
                    var n = 0, r = 0;
                    d.isHorizontal() ? n = d.rtl ? -e : e : r = e, d.params.roundLengths && (n = M(n), r = M(r)), d.params.virtualTranslate || (d.support.transforms3d ? d.wrapper.transform("translate3d(" + n + "px, " + r + "px, 0px)") : d.wrapper.transform("translate(" + n + "px, " + r + "px)")), d.translate = d.isHorizontal() ? n : r;
                    var o = d.maxTranslate() - d.minTranslate();
                    (0 === o ? 0 : (e - d.minTranslate()) / o) !== d.progress && d.updateProgress(e), t && d.updateActiveIndex(), "slide" !== d.params.effect && d.effects[d.params.effect] && d.effects[d.params.effect].setTranslate(d.translate), d.params.parallax && d.parallax && d.parallax.setTranslate(d.translate), d.params.scrollbar && d.scrollbar && d.scrollbar.setTranslate(d.translate), d.params.control && d.controller && d.controller.setTranslate(d.translate, i), d.emit("onSetTranslate", d, d.translate)
                }, d.getTranslate = function (e, t) {
                    var i, n, r, o;
                    return void 0 === t && (t = "x"), d.params.virtualTranslate ? d.rtl ? -d.translate : d.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function (e) {
                        return e.replace(",", ".")
                    }).join(", ")), o = new window.WebKitCSSMatrix("none" === n ? "" : n)) : i = (o = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = window.WebKitCSSMatrix ? o.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = window.WebKitCSSMatrix ? o.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), d.rtl && n && (n = -n), n || 0)
                }, d.getWrapperTranslate = function (e) {
                    return void 0 === e && (e = d.isHorizontal() ? "x" : "y"), d.getTranslate(d.wrapper[0], e)
                }, d.observers = [], d.initObservers = function () {
                    if (d.params.observeParents) for (var e = d.container.parents(), t = 0; t < e.length; t++) P(e[t]);
                    P(d.container[0], {childList: !1}), P(d.wrapper[0], {attributes: !1})
                }, d.disconnectObservers = function () {
                    for (var e = 0; e < d.observers.length; e++) d.observers[e].disconnect();
                    d.observers = []
                }, d.createLoop = function () {
                    d.wrapper.children("." + d.params.slideClass + "." + d.params.slideDuplicateClass).remove();
                    var t = d.wrapper.children("." + d.params.slideClass);
                    "auto" !== d.params.slidesPerView || d.params.loopedSlides || (d.params.loopedSlides = t.length), d.loopedSlides = parseInt(d.params.loopedSlides || d.params.slidesPerView, 10), d.loopedSlides = d.loopedSlides + d.params.loopAdditionalSlides, d.loopedSlides > t.length && (d.loopedSlides = t.length);
                    var i, n = [], r = [];
                    for (t.each(function (i, o) {
                        var a = e(this);
                        i < d.loopedSlides && r.push(o), i < t.length && i >= t.length - d.loopedSlides && n.push(o), a.attr("data-swiper-slide-index", i)
                    }), i = 0; i < r.length; i++) d.wrapper.append(e(r[i].cloneNode(!0)).addClass(d.params.slideDuplicateClass));
                    for (i = n.length - 1; i >= 0; i--) d.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(d.params.slideDuplicateClass))
                }, d.destroyLoop = function () {
                    d.wrapper.children("." + d.params.slideClass + "." + d.params.slideDuplicateClass).remove(), d.slides.removeAttr("data-swiper-slide-index")
                }, d.reLoop = function (e) {
                    var t = d.activeIndex - d.loopedSlides;
                    d.destroyLoop(), d.createLoop(), d.updateSlidesSize(), e && d.slideTo(t + d.loopedSlides, 0, !1)
                }, d.fixLoop = function () {
                    var e;
                    d.activeIndex < d.loopedSlides ? (e = d.slides.length - 3 * d.loopedSlides + d.activeIndex, e += d.loopedSlides, d.slideTo(e, 0, !1, !0)) : ("auto" === d.params.slidesPerView && d.activeIndex >= 2 * d.loopedSlides || d.activeIndex > d.slides.length - 2 * d.params.slidesPerView) && (e = -d.slides.length + d.activeIndex + d.loopedSlides, e += d.loopedSlides, d.slideTo(e, 0, !1, !0))
                }, d.appendSlide = function (e) {
                    if (d.params.loop && d.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && d.wrapper.append(e[t]); else d.wrapper.append(e);
                    d.params.loop && d.createLoop(), d.params.observer && d.support.observer || d.update(!0)
                }, d.prependSlide = function (e) {
                    d.params.loop && d.destroyLoop();
                    var t = d.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var i = 0; i < e.length; i++) e[i] && d.wrapper.prepend(e[i]);
                        t = d.activeIndex + e.length
                    } else d.wrapper.prepend(e);
                    d.params.loop && d.createLoop(), d.params.observer && d.support.observer || d.update(!0), d.slideTo(t, 0, !1)
                }, d.removeSlide = function (e) {
                    d.params.loop && (d.destroyLoop(), d.slides = d.wrapper.children("." + d.params.slideClass));
                    var t, i = d.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var n = 0; n < e.length; n++) t = e[n], d.slides[t] && d.slides.eq(t).remove(), t < i && i--;
                        i = Math.max(i, 0)
                    } else t = e, d.slides[t] && d.slides.eq(t).remove(), t < i && i--, i = Math.max(i, 0);
                    d.params.loop && d.createLoop(), d.params.observer && d.support.observer || d.update(!0), d.params.loop ? d.slideTo(i + d.loopedSlides, 0, !1) : d.slideTo(i, 0, !1)
                }, d.removeAllSlides = function () {
                    for (var e = [], t = 0; t < d.slides.length; t++) e.push(t);
                    d.removeSlide(e)
                }, d.effects = {
                    fade: {
                        setTranslate: function () {
                            for (var e = 0; e < d.slides.length; e++) {
                                var t = d.slides.eq(e), i = -t[0].swiperSlideOffset;
                                d.params.virtualTranslate || (i -= d.translate);
                                var n = 0;
                                d.isHorizontal() || (n = i, i = 0);
                                var r = d.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({opacity: r}).transform("translate3d(" + i + "px, " + n + "px, 0px)")
                            }
                        }, setTransition: function (e) {
                            if (d.slides.transition(e), d.params.virtualTranslate && 0 !== e) {
                                var t = !1;
                                d.slides.transitionEnd(function () {
                                    if (!t && d) {
                                        t = !0, d.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) d.wrapper.trigger(e[i])
                                    }
                                })
                            }
                        }
                    }, flip: {
                        setTranslate: function () {
                            for (var t = 0; t < d.slides.length; t++) {
                                var i = d.slides.eq(t), n = i[0].progress;
                                d.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                                var r = -180 * n, o = 0, a = -i[0].swiperSlideOffset, s = 0;
                                if (d.isHorizontal() ? d.rtl && (r = -r) : (s = a, a = 0, o = -r, r = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + d.slides.length, d.params.flip.slideShadows) {
                                    var l = d.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                        c = d.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                    0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (d.isHorizontal() ? "left" : "top") + '"></div>'), i.append(l)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (d.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(c)), l.length && (l[0].style.opacity = Math.max(-n, 0)), c.length && (c[0].style.opacity = Math.max(n, 0))
                                }
                                i.transform("translate3d(" + a + "px, " + s + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)")
                            }
                        }, setTransition: function (t) {
                            if (d.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), d.params.virtualTranslate && 0 !== t) {
                                var i = !1;
                                d.slides.eq(d.activeIndex).transitionEnd(function () {
                                    if (!i && d && e(this).hasClass(d.params.slideActiveClass)) {
                                        i = !0, d.animating = !1;
                                        for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++) d.wrapper.trigger(t[n])
                                    }
                                })
                            }
                        }
                    }, cube: {
                        setTranslate: function () {
                            var t, i = 0;
                            d.params.cube.shadow && (d.isHorizontal() ? (0 === (t = d.wrapper.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), d.wrapper.append(t)), t.css({height: d.width + "px"})) : 0 === (t = d.container.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), d.container.append(t)));
                            for (var n = 0; n < d.slides.length; n++) {
                                var r = d.slides.eq(n), o = 90 * n, a = Math.floor(o / 360);
                                d.rtl && (o = -o, a = Math.floor(-o / 360));
                                var s = Math.max(Math.min(r[0].progress, 1), -1), l = 0, c = 0, u = 0;
                                n % 4 == 0 ? (l = 4 * -a * d.size, u = 0) : (n - 1) % 4 == 0 ? (l = 0, u = 4 * -a * d.size) : (n - 2) % 4 == 0 ? (l = d.size + 4 * a * d.size, u = d.size) : (n - 3) % 4 == 0 && (l = -d.size, u = 3 * d.size + 4 * d.size * a), d.rtl && (l = -l), d.isHorizontal() || (c = l, l = 0);
                                var p = "rotateX(" + (d.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (d.isHorizontal() ? o : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + u + "px)";
                                if (s <= 1 && s > -1 && (i = 90 * n + 90 * s, d.rtl && (i = 90 * -n - 90 * s)), r.transform(p), d.params.cube.slideShadows) {
                                    var h = d.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                        f = d.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                    0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (d.isHorizontal() ? "left" : "top") + '"></div>'), r.append(h)), 0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (d.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(f)), h.length && (h[0].style.opacity = Math.max(-s, 0)), f.length && (f[0].style.opacity = Math.max(s, 0))
                                }
                            }
                            if (d.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + d.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + d.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + d.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + d.size / 2 + "px"
                                }), d.params.cube.shadow) if (d.isHorizontal()) t.transform("translate3d(0px, " + (d.width / 2 + d.params.cube.shadowOffset) + "px, " + -d.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.params.cube.shadowScale + ")"); else {
                                var v = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                    g = 1.5 - (Math.sin(2 * v * Math.PI / 360) / 2 + Math.cos(2 * v * Math.PI / 360) / 2),
                                    m = d.params.cube.shadowScale, A = d.params.cube.shadowScale / g,
                                    b = d.params.cube.shadowOffset;
                                t.transform("scale3d(" + m + ", 1, " + A + ") translate3d(0px, " + (d.height / 2 + b) + "px, " + -d.height / 2 / A + "px) rotateX(-90deg)")
                            }
                            var y = d.isSafari || d.isUiWebView ? -d.size / 2 : 0;
                            d.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (d.isHorizontal() ? 0 : i) + "deg) rotateY(" + (d.isHorizontal() ? -i : 0) + "deg)")
                        }, setTransition: function (e) {
                            d.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), d.params.cube.shadow && !d.isHorizontal() && d.container.find(".swiper-cube-shadow").transition(e)
                        }
                    }, coverflow: {
                        setTranslate: function () {
                            for (var t = d.translate, i = d.isHorizontal() ? -t + d.width / 2 : -t + d.height / 2, n = d.isHorizontal() ? d.params.coverflow.rotate : -d.params.coverflow.rotate, r = d.params.coverflow.depth, o = 0, a = d.slides.length; o < a; o++) {
                                var s = d.slides.eq(o), l = d.slidesSizesGrid[o],
                                    c = (i - s[0].swiperSlideOffset - l / 2) / l * d.params.coverflow.modifier,
                                    u = d.isHorizontal() ? n * c : 0, p = d.isHorizontal() ? 0 : n * c,
                                    h = -r * Math.abs(c), f = d.isHorizontal() ? 0 : d.params.coverflow.stretch * c,
                                    v = d.isHorizontal() ? d.params.coverflow.stretch * c : 0;
                                Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0);
                                var g = "translate3d(" + v + "px," + f + "px," + h + "px)  rotateX(" + p + "deg) rotateY(" + u + "deg)";
                                if (s.transform(g), s[0].style.zIndex = 1 - Math.abs(Math.round(c)), d.params.coverflow.slideShadows) {
                                    var m = d.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                        A = d.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                    0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (d.isHorizontal() ? "left" : "top") + '"></div>'), s.append(m)), 0 === A.length && (A = e('<div class="swiper-slide-shadow-' + (d.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(A)), m.length && (m[0].style.opacity = c > 0 ? c : 0), A.length && (A[0].style.opacity = -c > 0 ? -c : 0)
                                }
                            }
                            d.browser.ie && (d.wrapper[0].style.perspectiveOrigin = i + "px 50%")
                        }, setTransition: function (e) {
                            d.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, d.lazy = {
                    initialImageLoaded: !1, loadImageInSlide: function (t, i) {
                        if (void 0 !== t && (void 0 === i && (i = !0), 0 !== d.slides.length)) {
                            var n = d.slides.eq(t),
                                r = n.find("." + d.params.lazyLoadingClass + ":not(." + d.params.lazyStatusLoadedClass + "):not(." + d.params.lazyStatusLoadingClass + ")");
                            !n.hasClass(d.params.lazyLoadingClass) || n.hasClass(d.params.lazyStatusLoadedClass) || n.hasClass(d.params.lazyStatusLoadingClass) || (r = r.add(n[0])), 0 !== r.length && r.each(function () {
                                var t = e(this);
                                t.addClass(d.params.lazyStatusLoadingClass);
                                var r = t.attr("data-background"), o = t.attr("data-src"), a = t.attr("data-srcset"),
                                    s = t.attr("data-sizes");
                                d.loadImage(t[0], o || r, a, s, !1, function () {
                                    if (void 0 !== d && null !== d && d) {
                                        if (r ? (t.css("background-image", 'url("' + r + '")'), t.removeAttr("data-background")) : (a && (t.attr("srcset", a), t.removeAttr("data-srcset")), s && (t.attr("sizes", s), t.removeAttr("data-sizes")), o && (t.attr("src", o), t.removeAttr("data-src"))), t.addClass(d.params.lazyStatusLoadedClass).removeClass(d.params.lazyStatusLoadingClass), n.find("." + d.params.lazyPreloaderClass + ", ." + d.params.preloaderClass).remove(), d.params.loop && i) {
                                            var e = n.attr("data-swiper-slide-index");
                                            if (n.hasClass(d.params.slideDuplicateClass)) {
                                                var l = d.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                                d.lazy.loadImageInSlide(l.index(), !1)
                                            } else {
                                                var c = d.wrapper.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                d.lazy.loadImageInSlide(c.index(), !1)
                                            }
                                        }
                                        d.emit("onLazyImageReady", d, n[0], t[0])
                                    }
                                }), d.emit("onLazyImageLoad", d, n[0], t[0])
                            })
                        }
                    }, load: function () {
                        var t, i = d.params.slidesPerView;
                        if ("auto" === i && (i = 0), d.lazy.initialImageLoaded || (d.lazy.initialImageLoaded = !0), d.params.watchSlidesVisibility) d.wrapper.children("." + d.params.slideVisibleClass).each(function () {
                            d.lazy.loadImageInSlide(e(this).index())
                        }); else if (i > 1) for (t = d.activeIndex; t < d.activeIndex + i; t++) d.slides[t] && d.lazy.loadImageInSlide(t); else d.lazy.loadImageInSlide(d.activeIndex);
                        if (d.params.lazyLoadingInPrevNext) if (i > 1 || d.params.lazyLoadingInPrevNextAmount && d.params.lazyLoadingInPrevNextAmount > 1) {
                            var n = d.params.lazyLoadingInPrevNextAmount, r = i,
                                o = Math.min(d.activeIndex + r + Math.max(n, r), d.slides.length),
                                a = Math.max(d.activeIndex - Math.max(r, n), 0);
                            for (t = d.activeIndex + i; t < o; t++) d.slides[t] && d.lazy.loadImageInSlide(t);
                            for (t = a; t < d.activeIndex; t++) d.slides[t] && d.lazy.loadImageInSlide(t)
                        } else {
                            var s = d.wrapper.children("." + d.params.slideNextClass);
                            s.length > 0 && d.lazy.loadImageInSlide(s.index());
                            var l = d.wrapper.children("." + d.params.slidePrevClass);
                            l.length > 0 && d.lazy.loadImageInSlide(l.index())
                        }
                    }, onTransitionStart: function () {
                        d.params.lazyLoading && (d.params.lazyLoadingOnTransitionStart || !d.params.lazyLoadingOnTransitionStart && !d.lazy.initialImageLoaded) && d.lazy.load()
                    }, onTransitionEnd: function () {
                        d.params.lazyLoading && !d.params.lazyLoadingOnTransitionStart && d.lazy.load()
                    }
                }, d.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function (e) {
                        var t = d.scrollbar,
                            i = (d.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[d.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                            n = -d.minTranslate() * t.moveDivider, r = -d.maxTranslate() * t.moveDivider;
                        i < n ? i = n : i > r && (i = r), i = -i / t.moveDivider, d.updateProgress(i), d.setWrapperTranslate(i, !0)
                    },
                    dragStart: function (e) {
                        var t = d.scrollbar;
                        t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), d.params.scrollbarHide && t.track.css("opacity", 1), d.wrapper.transition(100), t.drag.transition(100), d.emit("onScrollbarDragStart", d)
                    },
                    dragMove: function (e) {
                        var t = d.scrollbar;
                        t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), d.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), d.emit("onScrollbarDragMove", d))
                    },
                    dragEnd: function (e) {
                        var t = d.scrollbar;
                        t.isTouched && (t.isTouched = !1, d.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function () {
                            t.track.css("opacity", 0), t.track.transition(400)
                        }, 1e3)), d.emit("onScrollbarDragEnd", d), d.params.scrollbarSnapOnRelease && d.slideReset())
                    },
                    draggableEvents: !1 !== d.params.simulateTouch || d.support.touch ? d.touchEvents : d.touchEventsDesktop,
                    enableDraggable: function () {
                        var t = d.scrollbar, i = d.support.touch ? t.track : document;
                        e(t.track).on(t.draggableEvents.start, t.dragStart), e(i).on(t.draggableEvents.move, t.dragMove), e(i).on(t.draggableEvents.end, t.dragEnd)
                    },
                    disableDraggable: function () {
                        var t = d.scrollbar, i = d.support.touch ? t.track : document;
                        e(t.track).off(t.draggableEvents.start, t.dragStart), e(i).off(t.draggableEvents.move, t.dragMove), e(i).off(t.draggableEvents.end, t.dragEnd)
                    },
                    set: function () {
                        if (d.params.scrollbar) {
                            var t = d.scrollbar;
                            t.track = e(d.params.scrollbar), d.params.uniqueNavElements && "string" == typeof d.params.scrollbar && t.track.length > 1 && 1 === d.container.find(d.params.scrollbar).length && (t.track = d.container.find(d.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = d.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = d.size / d.virtualSize, t.moveDivider = t.divider * (t.trackSize / d.size), t.dragSize = t.trackSize * t.divider, d.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", d.params.scrollbarHide && (t.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function () {
                        if (d.params.scrollbar) {
                            var e, t = d.scrollbar, i = (d.translate, t.dragSize);
                            e = (t.trackSize - t.dragSize) * d.progress, d.rtl && d.isHorizontal() ? (e = -e) > 0 ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e) : e < 0 ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), d.isHorizontal() ? (d.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (d.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = i + "px"), d.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function () {
                                t.track[0].style.opacity = 0, t.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function (e) {
                        d.params.scrollbar && d.scrollbar.drag.transition(e)
                    }
                }, d.controller = {
                    LinearSpline: function (e, t) {
                        var i, n, r = function () {
                            var e, t, i;
                            return function (n, r) {
                                for (t = -1, e = n.length; e - t > 1;) n[i = e + t >> 1] <= r ? t = i : e = i;
                                return e
                            }
                        }();
                        this.x = e, this.y = t, this.lastIndex = e.length - 1;
                        this.x.length;
                        this.interpolate = function (e) {
                            return e ? (n = r(this.x, e), i = n - 1, (e - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                        }
                    }, getInterpolateFunction: function (e) {
                        d.controller.spline || (d.controller.spline = d.params.loop ? new d.controller.LinearSpline(d.slidesGrid, e.slidesGrid) : new d.controller.LinearSpline(d.snapGrid, e.snapGrid))
                    }, setTranslate: function (e, i) {
                        var n, r, o = d.params.control;

                        function a(t) {
                            e = t.rtl && "horizontal" === t.params.direction ? -d.translate : d.translate, "slide" === d.params.controlBy && (d.controller.getInterpolateFunction(t), r = -d.controller.spline.interpolate(-e)), r && "container" !== d.params.controlBy || (n = (t.maxTranslate() - t.minTranslate()) / (d.maxTranslate() - d.minTranslate()), r = (e - d.minTranslate()) * n + t.minTranslate()), d.params.controlInverse && (r = t.maxTranslate() - r), t.updateProgress(r), t.setWrapperTranslate(r, !1, d), t.updateActiveIndex()
                        }

                        if (Array.isArray(o)) for (var s = 0; s < o.length; s++) o[s] !== i && o[s] instanceof t && a(o[s]); else o instanceof t && i !== o && a(o)
                    }, setTransition: function (e, i) {
                        var n, r = d.params.control;

                        function o(t) {
                            t.setWrapperTransition(e, d), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function () {
                                r && (t.params.loop && "slide" === d.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                            }))
                        }

                        if (Array.isArray(r)) for (n = 0; n < r.length; n++) r[n] !== i && r[n] instanceof t && o(r[n]); else r instanceof t && i !== r && o(r)
                    }
                }, d.hashnav = {
                    onHashCange: function (e, t) {
                        var i = document.location.hash.replace("#", "");
                        i !== d.slides.eq(d.activeIndex).attr("data-hash") && d.slideTo(d.wrapper.children("." + d.params.slideClass + '[data-hash="' + i + '"]').index())
                    }, attachEvents: function (t) {
                        var i = t ? "off" : "on";
                        e(window)[i]("hashchange", d.hashnav.onHashCange)
                    }, setHash: function () {
                        if (d.hashnav.initialized && d.params.hashnav) if (d.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + d.slides.eq(d.activeIndex).attr("data-hash") || ""); else {
                            var e = d.slides.eq(d.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = t || ""
                        }
                    }, init: function () {
                        if (d.params.hashnav && !d.params.history) {
                            d.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e) for (var t = 0, i = d.slides.length; t < i; t++) {
                                var n = d.slides.eq(t);
                                if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(d.params.slideDuplicateClass)) {
                                    var r = n.index();
                                    d.slideTo(r, 0, d.params.runCallbacksOnInit, !0)
                                }
                            }
                            d.params.hashnavWatchState && d.hashnav.attachEvents()
                        }
                    }, destroy: function () {
                        d.params.hashnavWatchState && d.hashnav.attachEvents(!0)
                    }
                }, d.history = {
                    init: function () {
                        if (d.params.history) {
                            if (!window.history || !window.history.pushState) return d.params.history = !1, void(d.params.hashnav = !0);
                            d.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, d.params.runCallbacksOnInit), d.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                        }
                    }, setHistoryPopState: function () {
                        d.history.paths = d.history.getPathValues(), d.history.scrollToSlide(d.params.speed, d.history.paths.value, !1)
                    }, getPathValues: function () {
                        var e = window.location.pathname.slice(1).split("/"), t = e.length;
                        return {key: e[t - 2], value: e[t - 1]}
                    }, setHistory: function (e, t) {
                        if (d.history.initialized && d.params.history) {
                            var i = d.slides.eq(t), n = this.slugify(i.attr("data-history"));
                            window.location.pathname.includes(e) || (n = e + "/" + n), d.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                        }
                    }, slugify: function (e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    }, scrollToSlide: function (e, t, i) {
                        if (t) for (var n = 0, r = d.slides.length; n < r; n++) {
                            var o = d.slides.eq(n);
                            if (this.slugify(o.attr("data-history")) === t && !o.hasClass(d.params.slideDuplicateClass)) {
                                var a = o.index();
                                d.slideTo(a, e, i)
                            }
                        } else d.slideTo(0, e, i)
                    }
                }, d.disableKeyboardControl = function () {
                    d.params.keyboardControl = !1, e(document).off("keydown", D)
                }, d.enableKeyboardControl = function () {
                    d.params.keyboardControl = !0, e(document).on("keydown", D)
                }, d.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, d.params.mousewheelControl && (d.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                    var e = "onwheel" in document;
                    if (!e) {
                        var t = document.createElement("div");
                        t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                    }
                    return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e
                }() ? "wheel" : "mousewheel"), d.disableMousewheelControl = function () {
                    if (!d.mousewheel.event) return !1;
                    var t = d.container;
                    return "container" !== d.params.mousewheelEventsTarged && (t = e(d.params.mousewheelEventsTarged)), t.off(d.mousewheel.event, O), d.params.mousewheelControl = !1, !0
                }, d.enableMousewheelControl = function () {
                    if (!d.mousewheel.event) return !1;
                    var t = d.container;
                    return "container" !== d.params.mousewheelEventsTarged && (t = e(d.params.mousewheelEventsTarged)), t.on(d.mousewheel.event, O), d.params.mousewheelControl = !0, !0
                }, d.parallax = {
                    setTranslate: function () {
                        d.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            N(this, d.progress)
                        }), d.slides.each(function () {
                            var t = e(this);
                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                N(this, Math.min(Math.max(t[0].progress, -1), 1))
                            })
                        })
                    }, setTransition: function (t) {
                        void 0 === t && (t = d.params.speed), d.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            var i = e(this), n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (n = 0), i.transition(n)
                        })
                    }
                }, d.zoom = {
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        slide: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        image: void 0,
                        imageWrap: void 0,
                        zoomMax: d.params.zoomMax
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0},
                    getDistanceBetweenTouches: function (e) {
                        if (e.targetTouches.length < 2) return 1;
                        var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, n = e.targetTouches[1].pageX,
                            r = e.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2))
                    },
                    onGestureStart: function (t) {
                        var i = d.zoom;
                        if (!d.support.gestures) {
                            if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                            i.gesture.scaleStart = i.getDistanceBetweenTouches(t)
                        }
                        i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = e(this), 0 === i.gesture.slide.length && (i.gesture.slide = d.slides.eq(d.activeIndex)), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + d.params.zoomContainerClass), i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || d.params.zoomMax, 0 !== i.gesture.imageWrap.length) ? (i.gesture.image.transition(0), i.isScaling = !0) : i.gesture.image = void 0
                    },
                    onGestureChange: function (e) {
                        var t = d.zoom;
                        if (!d.support.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                            t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                        }
                        t.gesture.image && 0 !== t.gesture.image.length && (d.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < d.params.zoomMin && (t.scale = d.params.zoomMin + 1 - Math.pow(d.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                    },
                    onGestureEnd: function (e) {
                        var t = d.zoom;
                        !d.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), d.params.zoomMin), t.gesture.image.transition(d.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                    },
                    onTouchStart: function (e, t) {
                        var i = e.zoom;
                        i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                    },
                    onTouchMove: function (e) {
                        var t = d.zoom;
                        if (t.gesture.image && 0 !== t.gesture.image.length && (d.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                            t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = d.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = d.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), d.rtl && (t.image.startX = -t.image.startX), d.rtl && (t.image.startY = -t.image.startY));
                            var i = t.image.width * t.scale, n = t.image.height * t.scale;
                            if (!(i < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                                if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                    if (d.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                    if (!d.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                                }
                                e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                            }
                        }
                    },
                    onTouchEnd: function (e, t) {
                        var i = e.zoom;
                        if (i.gesture.image && 0 !== i.gesture.image.length) {
                            if (!i.image.isTouched || !i.image.isMoved) return i.image.isTouched = !1, void(i.image.isMoved = !1);
                            i.image.isTouched = !1, i.image.isMoved = !1;
                            var n = 300, r = 300, o = i.velocity.x * n, a = i.image.currentX + o, s = i.velocity.y * r,
                                l = i.image.currentY + s;
                            0 !== i.velocity.x && (n = Math.abs((a - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (r = Math.abs((l - i.image.currentY) / i.velocity.y));
                            var c = Math.max(n, r);
                            i.image.currentX = a, i.image.currentY = l;
                            var u = i.image.width * i.scale, p = i.image.height * i.scale;
                            i.image.minX = Math.min(i.gesture.slideWidth / 2 - u / 2, 0), i.image.maxX = -i.image.minX, i.image.minY = Math.min(i.gesture.slideHeight / 2 - p / 2, 0), i.image.maxY = -i.image.minY, i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX), i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY), i.gesture.imageWrap.transition(c).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                        }
                    },
                    onTransitionEnd: function (e) {
                        var t = e.zoom;
                        t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                    },
                    toggleZoom: function (t, i) {
                        var n, r, o, a, s, l, c, u, p, d, h, f, v, g, m, A, b = t.zoom;
                        (b.gesture.slide || (b.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), b.gesture.image = b.gesture.slide.find("img, svg, canvas"), b.gesture.imageWrap = b.gesture.image.parent("." + t.params.zoomContainerClass)), b.gesture.image && 0 !== b.gesture.image.length) && (void 0 === b.image.touchesStart.x && i ? (n = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX, r = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (n = b.image.touchesStart.x, r = b.image.touchesStart.y), b.scale && 1 !== b.scale ? (b.scale = b.currentScale = 1, b.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), b.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), b.gesture.slide = void 0) : (b.scale = b.currentScale = b.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, i ? (m = b.gesture.slide[0].offsetWidth, A = b.gesture.slide[0].offsetHeight, o = b.gesture.slide.offset().left + m / 2 - n, a = b.gesture.slide.offset().top + A / 2 - r, c = b.gesture.image[0].offsetWidth, u = b.gesture.image[0].offsetHeight, p = c * b.scale, d = u * b.scale, v = -(h = Math.min(m / 2 - p / 2, 0)), g = -(f = Math.min(A / 2 - d / 2, 0)), s = o * b.scale, l = a * b.scale, s < h && (s = h), s > v && (s = v), l < f && (l = f), l > g && (l = g)) : (s = 0, l = 0), b.gesture.imageWrap.transition(300).transform("translate3d(" + s + "px, " + l + "px,0)"), b.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")")))
                    },
                    attachEvents: function (t) {
                        var i = t ? "off" : "on";
                        if (d.params.zoom) {
                            d.slides;
                            var n = !("touchstart" !== d.touchEvents.start || !d.support.passiveListener || !d.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            d.support.gestures ? (d.slides[i]("gesturestart", d.zoom.onGestureStart, n), d.slides[i]("gesturechange", d.zoom.onGestureChange, n), d.slides[i]("gestureend", d.zoom.onGestureEnd, n)) : "touchstart" === d.touchEvents.start && (d.slides[i](d.touchEvents.start, d.zoom.onGestureStart, n), d.slides[i](d.touchEvents.move, d.zoom.onGestureChange, n), d.slides[i](d.touchEvents.end, d.zoom.onGestureEnd, n)), d[i]("touchStart", d.zoom.onTouchStart), d.slides.each(function (t, n) {
                                e(n).find("." + d.params.zoomContainerClass).length > 0 && e(n)[i](d.touchEvents.move, d.zoom.onTouchMove)
                            }), d[i]("touchEnd", d.zoom.onTouchEnd), d[i]("transitionEnd", d.zoom.onTransitionEnd), d.params.zoomToggle && d.on("doubleTap", d.zoom.toggleZoom)
                        }
                    },
                    init: function () {
                        d.zoom.attachEvents()
                    },
                    destroy: function () {
                        d.zoom.attachEvents(!0)
                    }
                }, d._plugins = [], d.plugins) {
                    var B = d.plugins[S](d, d.params[S]);
                    B && d._plugins.push(B)
                }
                return d.callPlugins = function (e) {
                    for (var t = 0; t < d._plugins.length; t++) e in d._plugins[t] && d._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, d.emitterEventListeners = {}, d.emit = function (e) {
                    var t;
                    if (d.params[e] && d.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), d.emitterEventListeners[e]) for (t = 0; t < d.emitterEventListeners[e].length; t++) d.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    d.callPlugins && d.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, d.on = function (e, t) {
                    return e = L(e), d.emitterEventListeners[e] || (d.emitterEventListeners[e] = []), d.emitterEventListeners[e].push(t), d
                }, d.off = function (e, t) {
                    var i;
                    if (e = L(e), void 0 === t) return d.emitterEventListeners[e] = [], d;
                    if (d.emitterEventListeners[e] && 0 !== d.emitterEventListeners[e].length) {
                        for (i = 0; i < d.emitterEventListeners[e].length; i++) d.emitterEventListeners[e][i] === t && d.emitterEventListeners[e].splice(i, 1);
                        return d
                    }
                }, d.once = function (e, t) {
                    e = L(e);
                    var i = function () {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), d.off(e, i)
                    };
                    return d.on(e, i), d
                }, d.a11y = {
                    makeFocusable: function (e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addRole: function (e, t) {
                        return e.attr("role", t), e
                    },
                    addLabel: function (e, t) {
                        return e.attr("aria-label", t), e
                    },
                    disable: function (e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable: function (e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function (t) {
                        13 === t.keyCode && (e(t.target).is(d.params.nextButton) ? (d.onClickNext(t), d.isEnd ? d.a11y.notify(d.params.lastSlideMessage) : d.a11y.notify(d.params.nextSlideMessage)) : e(t.target).is(d.params.prevButton) && (d.onClickPrev(t), d.isBeginning ? d.a11y.notify(d.params.firstSlideMessage) : d.a11y.notify(d.params.prevSlideMessage)), e(t.target).is("." + d.params.bulletClass) && e(t.target)[0].click())
                    },
                    liveRegion: e('<span class="' + d.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function (e) {
                        var t = d.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    init: function () {
                        d.params.nextButton && d.nextButton && d.nextButton.length > 0 && (d.a11y.makeFocusable(d.nextButton), d.a11y.addRole(d.nextButton, "button"), d.a11y.addLabel(d.nextButton, d.params.nextSlideMessage)), d.params.prevButton && d.prevButton && d.prevButton.length > 0 && (d.a11y.makeFocusable(d.prevButton), d.a11y.addRole(d.prevButton, "button"), d.a11y.addLabel(d.prevButton, d.params.prevSlideMessage)), e(d.container).append(d.a11y.liveRegion)
                    },
                    initPagination: function () {
                        d.params.pagination && d.params.paginationClickable && d.bullets && d.bullets.length && d.bullets.each(function () {
                            var t = e(this);
                            d.a11y.makeFocusable(t), d.a11y.addRole(t, "button"), d.a11y.addLabel(t, d.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                        })
                    },
                    destroy: function () {
                        d.a11y.liveRegion && d.a11y.liveRegion.length > 0 && d.a11y.liveRegion.remove()
                    }
                }, d.init = function () {
                    d.params.loop && d.createLoop(), d.updateContainerSize(), d.updateSlidesSize(), d.updatePagination(), d.params.scrollbar && d.scrollbar && (d.scrollbar.set(), d.params.scrollbarDraggable && d.scrollbar.enableDraggable()), "slide" !== d.params.effect && d.effects[d.params.effect] && (d.params.loop || d.updateProgress(), d.effects[d.params.effect].setTranslate()), d.params.loop ? d.slideTo(d.params.initialSlide + d.loopedSlides, 0, d.params.runCallbacksOnInit) : (d.slideTo(d.params.initialSlide, 0, d.params.runCallbacksOnInit), 0 === d.params.initialSlide && (d.parallax && d.params.parallax && d.parallax.setTranslate(), d.lazy && d.params.lazyLoading && (d.lazy.load(), d.lazy.initialImageLoaded = !0))), d.attachEvents(), d.params.observer && d.support.observer && d.initObservers(), d.params.preloadImages && !d.params.lazyLoading && d.preloadImages(), d.params.zoom && d.zoom && d.zoom.init(), d.params.autoplay && d.startAutoplay(), d.params.keyboardControl && d.enableKeyboardControl && d.enableKeyboardControl(), d.params.mousewheelControl && d.enableMousewheelControl && d.enableMousewheelControl(), d.params.hashnavReplaceState && (d.params.replaceState = d.params.hashnavReplaceState), d.params.history && d.history && d.history.init(), d.params.hashnav && d.hashnav && d.hashnav.init(), d.params.a11y && d.a11y && d.a11y.init(), d.emit("onInit", d)
                }, d.cleanupStyles = function () {
                    d.container.removeClass(d.classNames.join(" ")).removeAttr("style"), d.wrapper.removeAttr("style"), d.slides && d.slides.length && d.slides.removeClass([d.params.slideVisibleClass, d.params.slideActiveClass, d.params.slideNextClass, d.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), d.paginationContainer && d.paginationContainer.length && d.paginationContainer.removeClass(d.params.paginationHiddenClass), d.bullets && d.bullets.length && d.bullets.removeClass(d.params.bulletActiveClass), d.params.prevButton && e(d.params.prevButton).removeClass(d.params.buttonDisabledClass), d.params.nextButton && e(d.params.nextButton).removeClass(d.params.buttonDisabledClass), d.params.scrollbar && d.scrollbar && (d.scrollbar.track && d.scrollbar.track.length && d.scrollbar.track.removeAttr("style"), d.scrollbar.drag && d.scrollbar.drag.length && d.scrollbar.drag.removeAttr("style"))
                }, d.destroy = function (e, t) {
                    d.detachEvents(), d.stopAutoplay(), d.params.scrollbar && d.scrollbar && d.params.scrollbarDraggable && d.scrollbar.disableDraggable(), d.params.loop && d.destroyLoop(), t && d.cleanupStyles(), d.disconnectObservers(), d.params.zoom && d.zoom && d.zoom.destroy(), d.params.keyboardControl && d.disableKeyboardControl && d.disableKeyboardControl(), d.params.mousewheelControl && d.disableMousewheelControl && d.disableMousewheelControl(), d.params.a11y && d.a11y && d.a11y.destroy(), d.params.history && !d.params.replaceState && window.removeEventListener("popstate", d.history.setHistoryPopState), d.params.hashnav && d.hashnav && d.hashnav.destroy(), d.emit("onDestroy"), !1 !== e && (d = null)
                }, d.init(), d
            }

            function M(e) {
                return Math.floor(e)
            }

            function z() {
                var e = d.params.autoplay, t = d.slides.eq(d.activeIndex);
                t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || d.params.autoplay), d.autoplayTimeoutId = setTimeout(function () {
                    d.params.loop ? (d.fixLoop(), d._slideNext(), d.emit("onAutoplay", d)) : d.isEnd ? r.autoplayStopOnLast ? d.stopAutoplay() : (d._slideTo(0), d.emit("onAutoplay", d)) : (d._slideNext(), d.emit("onAutoplay", d))
                }, e)
            }

            function I(t, i) {
                var n = e(t.target);
                if (!n.is(i)) if ("string" == typeof i) n = n.parents(i); else if (i.nodeType) {
                    var r;
                    return n.parents().each(function (e, t) {
                        t === i && (r = i)
                    }), r ? i : void 0
                }
                if (0 !== n.length) return n[0]
            }

            function P(e, t) {
                t = t || {};
                var i = new (window.MutationObserver || window.WebkitMutationObserver)(function (e) {
                    e.forEach(function (e) {
                        d.onResize(!0), d.emit("onObserverUpdate", d, e)
                    })
                });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), d.observers.push(i)
            }

            function D(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!d.params.allowSwipeToNext && (d.isHorizontal() && 39 === t || !d.isHorizontal() && 40 === t)) return !1;
                if (!d.params.allowSwipeToPrev && (d.isHorizontal() && 37 === t || !d.isHorizontal() && 38 === t)) return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var i = !1;
                        if (d.container.parents("." + d.params.slideClass).length > 0 && 0 === d.container.parents("." + d.params.slideActiveClass).length) return;
                        var n = {left: window.pageXOffset, top: window.pageYOffset}, r = window.innerWidth,
                            o = window.innerHeight, a = d.container.offset();
                        d.rtl && (a.left = a.left - d.container[0].scrollLeft);
                        for (var s = [[a.left, a.top], [a.left + d.width, a.top], [a.left, a.top + d.height], [a.left + d.width, a.top + d.height]], l = 0; l < s.length; l++) {
                            var c = s[l];
                            c[0] >= n.left && c[0] <= n.left + r && c[1] >= n.top && c[1] <= n.top + o && (i = !0)
                        }
                        if (!i) return
                    }
                    d.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !d.rtl || 37 === t && d.rtl) && d.slideNext(), (37 === t && !d.rtl || 39 === t && d.rtl) && d.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && d.slideNext(), 38 === t && d.slidePrev()), d.emit("onKeyPress", d, t)
                }
            }

            function O(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = 0, i = d.rtl ? -1 : 1, n = function (e) {
                    var t = 0, i = 0, n = 0, r = 0;
                    return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: i,
                        pixelX: n,
                        pixelY: r
                    }
                }(e);
                if (d.params.mousewheelForceToAxis) if (d.isHorizontal()) {
                    if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return;
                    t = n.pixelX * i
                } else {
                    if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return;
                    t = n.pixelY
                } else t = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * i : -n.pixelY;
                if (0 !== t) {
                    if (d.params.mousewheelInvert && (t = -t), d.params.freeMode) {
                        var r = d.getWrapperTranslate() + t * d.params.mousewheelSensitivity, o = d.isBeginning,
                            a = d.isEnd;
                        if (r >= d.minTranslate() && (r = d.minTranslate()), r <= d.maxTranslate() && (r = d.maxTranslate()), d.setWrapperTransition(0), d.setWrapperTranslate(r), d.updateProgress(), d.updateActiveIndex(), (!o && d.isBeginning || !a && d.isEnd) && d.updateClasses(), d.params.freeModeSticky ? (clearTimeout(d.mousewheel.timeout), d.mousewheel.timeout = setTimeout(function () {
                                d.slideReset()
                            }, 300)) : d.params.lazyLoading && d.lazy && d.lazy.load(), d.emit("onScroll", d, e), d.params.autoplay && d.params.autoplayDisableOnInteraction && d.stopAutoplay(), 0 === r || r === d.maxTranslate()) return
                    } else {
                        if ((new window.Date).getTime() - d.mousewheel.lastScrollTime > 60) if (t < 0) if (d.isEnd && !d.params.loop || d.animating) {
                            if (d.params.mousewheelReleaseOnEdges) return !0
                        } else d.slideNext(), d.emit("onScroll", d, e); else if (d.isBeginning && !d.params.loop || d.animating) {
                            if (d.params.mousewheelReleaseOnEdges) return !0
                        } else d.slidePrev(), d.emit("onScroll", d, e);
                        d.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                }
            }

            function N(t, i) {
                var n, r, o;
                t = e(t);
                var a = d.rtl ? -1 : 1;
                n = t.attr("data-swiper-parallax") || "0", r = t.attr("data-swiper-parallax-x"), o = t.attr("data-swiper-parallax-y"), r || o ? (r = r || "0", o = o || "0") : d.isHorizontal() ? (r = n, o = "0") : (o = n, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * a + "%" : r * i * a + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i + "%" : o * i + "px", t.transform("translate3d(" + r + ", " + o + ",0px)")
            }

            function L(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
            }
        };
        t.prototype = {
            isSafari: function () {
                var e = window.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function (e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                lteIE9: function () {
                    var e = document.createElement("div");
                    return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
                }()
            },
            device: function () {
                var e = window.navigator.userAgent, t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    i = e.match(/(iPad).*OS\s([\d_]+)/), n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    r = !i && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                return {ios: i || r || n, android: t}
            }(),
            support: {
                touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
                transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                }(),
                flexbox: function () {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++) if (t[i] in e) return !0
                }(),
                observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
                passiveListener: function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, t)
                    } catch (e) {
                    }
                    return e
                }(),
                gestures: "ongesturestart" in window
            },
            plugins: {}
        };
        for (var i, n = function () {
            var e = function (e) {
                var t = 0;
                for (t = 0; t < e.length; t++) this[t] = e[t];
                return this.length = e.length, this
            }, t = function (t, i) {
                var n = [], r = 0;
                if (t && !i && t instanceof e) return t;
                if (t) if ("string" == typeof t) {
                    var o, a, s = t.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        var l = "div";
                        for (0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select"), (a = document.createElement(l)).innerHTML = t, r = 0; r < a.childNodes.length; r++) n.push(a.childNodes[r])
                    } else for (o = i || "#" !== t[0] || t.match(/[ .<>:~]/) ? (i || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], r = 0; r < o.length; r++) o[r] && n.push(o[r])
                } else if (t.nodeType || t === window || t === document) n.push(t); else if (t.length > 0 && t[0].nodeType) for (r = 0; r < t.length; r++) n.push(t[r]);
                return new e(n)
            };
            return e.prototype = {
                addClass: function (e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.add(t[i]);
                    return this
                }, removeClass: function (e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.remove(t[i]);
                    return this
                }, hasClass: function (e) {
                    return !!this[0] && this[0].classList.contains(e)
                }, toggleClass: function (e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.toggle(t[i]);
                    return this
                }, attr: function (e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var i = 0; i < this.length; i++) if (2 === arguments.length) this[i].setAttribute(e, t); else for (var n in e) this[i][n] = e[n], this[i].setAttribute(n, e[n]);
                    return this
                }, removeAttr: function (e) {
                    for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                    return this
                }, data: function (e, t) {
                    if (void 0 !== t) {
                        for (var i = 0; i < this.length; i++) {
                            var n = this[i];
                            n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t
                        }
                        return this
                    }
                    if (this[0]) {
                        var r = this[0].getAttribute("data-" + e);
                        return r || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                    }
                }, transform: function (e) {
                    for (var t = 0; t < this.length; t++) {
                        var i = this[t].style;
                        i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
                    }
                    return this
                }, transition: function (e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var i = this[t].style;
                        i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
                    }
                    return this
                }, on: function (e, i, n, r) {
                    function o(e) {
                        var r = e.target;
                        if (t(r).is(i)) n.call(r, e); else for (var o = t(r).parents(), a = 0; a < o.length; a++) t(o[a]).is(i) && n.call(o[a], e)
                    }

                    var a, s, l = e.split(" ");
                    for (a = 0; a < this.length; a++) if ("function" == typeof i || !1 === i) for ("function" == typeof i && (n = arguments[1], r = arguments[2] || !1), s = 0; s < l.length; s++) this[a].addEventListener(l[s], n, r); else for (s = 0; s < l.length; s++) this[a].dom7LiveListeners || (this[a].dom7LiveListeners = []), this[a].dom7LiveListeners.push({
                        listener: n,
                        liveListener: o
                    }), this[a].addEventListener(l[s], o, r);
                    return this
                }, off: function (e, t, i, n) {
                    for (var r = e.split(" "), o = 0; o < r.length; o++) for (var a = 0; a < this.length; a++) if ("function" == typeof t || !1 === t) "function" == typeof t && (i = arguments[1], n = arguments[2] || !1), this[a].removeEventListener(r[o], i, n); else if (this[a].dom7LiveListeners) for (var s = 0; s < this[a].dom7LiveListeners.length; s++) this[a].dom7LiveListeners[s].listener === i && this[a].removeEventListener(r[o], this[a].dom7LiveListeners[s].liveListener, n);
                    return this
                }, once: function (e, t, i, n) {
                    var r = this;
                    "function" == typeof t && (t = !1, i = arguments[1], n = arguments[2]), r.on(e, t, function o(a) {
                        i(a), r.off(e, t, o, n)
                    }, n)
                }, trigger: function (e, t) {
                    for (var i = 0; i < this.length; i++) {
                        var n;
                        try {
                            n = new window.CustomEvent(e, {detail: t, bubbles: !0, cancelable: !0})
                        } catch (i) {
                            (n = document.createEvent("Event")).initEvent(e, !0, !0), n.detail = t
                        }
                        this[i].dispatchEvent(n)
                    }
                    return this
                }, transitionEnd: function (e) {
                    var t,
                        i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        n = this;

                    function r(o) {
                        if (o.target === this) for (e.call(this, o), t = 0; t < i.length; t++) n.off(i[t], r)
                    }

                    if (e) for (t = 0; t < i.length; t++) n.on(i[t], r);
                    return this
                }, width: function () {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                }, outerWidth: function (e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                }, height: function () {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                }, outerHeight: function (e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                }, offset: function () {
                    if (this.length > 0) {
                        var e = this[0], t = e.getBoundingClientRect(), i = document.body,
                            n = e.clientTop || i.clientTop || 0, r = e.clientLeft || i.clientLeft || 0,
                            o = window.pageYOffset || e.scrollTop, a = window.pageXOffset || e.scrollLeft;
                        return {top: t.top + o - n, left: t.left + a - r}
                    }
                    return null
                }, css: function (e, t) {
                    var i;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (i = 0; i < this.length; i++) for (var n in e) this[i].style[n] = e[n];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (i = 0; i < this.length; i++) this[i].style[e] = t;
                        return this
                    }
                    return this
                }, each: function (e) {
                    for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                    return this
                }, html: function (e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                    return this
                }, text: function (e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t++) this[t].textContent = e;
                    return this
                }, is: function (i) {
                    if (!this[0]) return !1;
                    var n, r;
                    if ("string" == typeof i) {
                        var o = this[0];
                        if (o === document) return i === document;
                        if (o === window) return i === window;
                        if (o.matches) return o.matches(i);
                        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(i);
                        if (o.mozMatchesSelector) return o.mozMatchesSelector(i);
                        if (o.msMatchesSelector) return o.msMatchesSelector(i);
                        for (n = t(i), r = 0; r < n.length; r++) if (n[r] === this[0]) return !0;
                        return !1
                    }
                    if (i === document) return this[0] === document;
                    if (i === window) return this[0] === window;
                    if (i.nodeType || i instanceof e) {
                        for (n = i.nodeType ? [i] : i, r = 0; r < n.length; r++) if (n[r] === this[0]) return !0;
                        return !1
                    }
                    return !1
                }, index: function () {
                    if (this[0]) {
                        for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                        return t
                    }
                }, eq: function (t) {
                    if (void 0 === t) return this;
                    var i, n = this.length;
                    return new e(t > n - 1 ? [] : t < 0 ? (i = n + t) < 0 ? [] : [this[i]] : [this[t]])
                }, append: function (t) {
                    var i, n;
                    for (i = 0; i < this.length; i++) if ("string" == typeof t) {
                        var r = document.createElement("div");
                        for (r.innerHTML = t; r.firstChild;) this[i].appendChild(r.firstChild)
                    } else if (t instanceof e) for (n = 0; n < t.length; n++) this[i].appendChild(t[n]); else this[i].appendChild(t);
                    return this
                }, prepend: function (t) {
                    var i, n;
                    for (i = 0; i < this.length; i++) if ("string" == typeof t) {
                        var r = document.createElement("div");
                        for (r.innerHTML = t, n = r.childNodes.length - 1; n >= 0; n--) this[i].insertBefore(r.childNodes[n], this[i].childNodes[0])
                    } else if (t instanceof e) for (n = 0; n < t.length; n++) this[i].insertBefore(t[n], this[i].childNodes[0]); else this[i].insertBefore(t, this[i].childNodes[0]);
                    return this
                }, insertBefore: function (e) {
                    for (var i = t(e), n = 0; n < this.length; n++) if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0]); else if (i.length > 1) for (var r = 0; r < i.length; r++) i[r].parentNode.insertBefore(this[n].cloneNode(!0), i[r])
                }, insertAfter: function (e) {
                    for (var i = t(e), n = 0; n < this.length; n++) if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0].nextSibling); else if (i.length > 1) for (var r = 0; r < i.length; r++) i[r].parentNode.insertBefore(this[n].cloneNode(!0), i[r].nextSibling)
                }, next: function (i) {
                    return this.length > 0 ? i ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(i) ? new e([this[0].nextElementSibling]) : new e([]) : this[0].nextElementSibling ? new e([this[0].nextElementSibling]) : new e([]) : new e([])
                }, nextAll: function (i) {
                    var n = [], r = this[0];
                    if (!r) return new e([]);
                    for (; r.nextElementSibling;) {
                        var o = r.nextElementSibling;
                        i ? t(o).is(i) && n.push(o) : n.push(o), r = o
                    }
                    return new e(n)
                }, prev: function (i) {
                    return this.length > 0 ? i ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(i) ? new e([this[0].previousElementSibling]) : new e([]) : this[0].previousElementSibling ? new e([this[0].previousElementSibling]) : new e([]) : new e([])
                }, prevAll: function (i) {
                    var n = [], r = this[0];
                    if (!r) return new e([]);
                    for (; r.previousElementSibling;) {
                        var o = r.previousElementSibling;
                        i ? t(o).is(i) && n.push(o) : n.push(o), r = o
                    }
                    return new e(n)
                }, parent: function (e) {
                    for (var i = [], n = 0; n < this.length; n++) e ? t(this[n].parentNode).is(e) && i.push(this[n].parentNode) : i.push(this[n].parentNode);
                    return t(t.unique(i))
                }, parents: function (e) {
                    for (var i = [], n = 0; n < this.length; n++) for (var r = this[n].parentNode; r;) e ? t(r).is(e) && i.push(r) : i.push(r), r = r.parentNode;
                    return t(t.unique(i))
                }, find: function (t) {
                    for (var i = [], n = 0; n < this.length; n++) for (var r = this[n].querySelectorAll(t), o = 0; o < r.length; o++) i.push(r[o]);
                    return new e(i)
                }, children: function (i) {
                    for (var n = [], r = 0; r < this.length; r++) for (var o = this[r].childNodes, a = 0; a < o.length; a++) i ? 1 === o[a].nodeType && t(o[a]).is(i) && n.push(o[a]) : 1 === o[a].nodeType && n.push(o[a]);
                    return new e(t.unique(n))
                }, remove: function () {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }, add: function () {
                    var e, i;
                    for (e = 0; e < arguments.length; e++) {
                        var n = t(arguments[e]);
                        for (i = 0; i < n.length; i++) this[this.length] = n[i], this.length++
                    }
                    return this
                }
            }, t.fn = e.prototype, t.unique = function (e) {
                for (var t = [], i = 0; i < e.length; i++) -1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }, t
        }(), r = ["jQuery", "Zepto", "Dom7"], o = 0; o < r.length; o++) window[r[o]] && a(window[r[o]]);

        function a(e) {
            e.fn.swiper = function (i) {
                var n;
                return e(this).each(function () {
                    var e = new t(this, i);
                    n || (n = e)
                }), n
            }
        }

        (i = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n) && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function (e) {
            var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                n = this;

            function r(o) {
                if (o.target === this) for (e.call(this, o), t = 0; t < i.length; t++) n.off(i[t], r)
            }

            if (e) for (t = 0; t < i.length; t++) n.on(i[t], r);
            return this
        }), "transform" in i.fn || (i.fn.transform = function (e) {
            for (var t = 0; t < this.length; t++) {
                var i = this[t].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
            }
            return this
        }), "transition" in i.fn || (i.fn.transition = function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var i = this[t].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
            }
            return this
        }), "outerWidth" in i.fn || (i.fn.outerWidth = function (e) {
            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        })), window.Swiper = t
    }(), e.exports = window.Swiper
}, function (e, t, i) {
    var n = i(37);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var r = {hmr: !0, transform: void 0, insertInto: void 0};
    i(1)(n, r);
    n.locals && (e.exports = n.locals)
}, function (e, t, i) {
    var n = i(6);
    (e.exports = i(0)(!1)).push([e.i, ".video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-modal-dialog,.vjs-button>.vjs-icon-placeholder:before,.vjs-modal-dialog .vjs-modal-dialog-content{position:absolute;top:0;left:0;width:100%;height:100%}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.vjs-button>.vjs-icon-placeholder:before{text-align:center}@font-face{font-family:VideoJS;src:url(" + n(i(38)) + '?#iefix) format("eot")}@font-face{font-family:VideoJS;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABBIAAsAAAAAGoQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAPgAAAFZRiV3RY21hcAAAAYQAAADQAAADIjn098ZnbHlmAAACVAAACv4AABEIAwnSw2hlYWQAAA1UAAAAKwAAADYSy2hLaGhlYQAADYAAAAAbAAAAJA4DByFobXR4AAANnAAAAA8AAACE4AAAAGxvY2EAAA2sAAAARAAAAEQ9NEHGbWF4cAAADfAAAAAfAAAAIAEyAIFuYW1lAAAOEAAAASUAAAIK1cf1oHBvc3QAAA84AAABDwAAAZ5AAl/0eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGQ7xTiBgZWBgaWQ5RkDA8MvCM0cwxDOeI6BgYmBlZkBKwhIc01hcPjI+FGBHcRdyA4RZgQRAC4HCwEAAHic7dFprsIgAEXhg8U61XmeWcBb1FuQP4w7ZQXK5boMm3yclFDSANAHmuKviBBeBPQ8ymyo8w3jOh/5r2ui5nN6v8sYNJb3WMdeWRvLji0DhozKdxM6psyYs2DJijUbtuzYc+DIiTMXrty4k8oGLb+n0xCe37ekM7Z66j1DbUy3l6PpHnLfdLO5NdSBoQ4NdWSoY9ON54mhdqa/y1NDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUJORPqkhTd54nJ1YDXBU1RV+576/JBs2bPYPkrDZt5vsJrv53V/I5mclhGDCTwgGBQQSTEji4hCkYIAGd4TGIWFAhV0RQTpWmQp1xv6hA4OTOlNr2zFANbHUYbq2OtNCpViRqsk+e+7bTQAhzti8vPfuPffcc88959zznbcMMPjHD/KDDGEY0ABpYX384NhlomIYlo4JISGEY9mMh2FSidYiqkEUphtNYDSY/dXg9023l4DdxlqUl0chuZRhncJKrsCQHIwcGuwfnhMIzBnuH4Sym+1D2zaGjheXlhYfD238z80mKYMmvJ5XeOTzd8z9eujbMxJNhu4C9xPE/bCMiDuSNIWgkTQwBE55hLSAE7ZwhrHLnAHZOGV/kmBGTiNjZxzI77Hb7Hqjz68TjT6vh+5JT/cCIkqS0D6CqPf5jX4Qjdx5j6vlDfZM4aZFdbVXIxtOlJaP/WottMnH6CJQ3bTiue3PrY23HjnChtuamxwvvzFjxkPrNj3z0tG9T561HDYf6OgmRWvlY3JQHoQb8ltV2Yet7YfWctEjR1AtxS/cSX6U4alf6NJEBQ7YKg9wrXQKd0IeZCb2ux75Uhh1Un+Nz+9LTOE7PK777nN5xqdTneTBhCbx446mZrhnUkrCz2YhA9dSMxaG0SYmT8hi9ZPu1E94PJYQSH6LRmhxec7Q7ZeXntgQuVpbh+a4qWNsckVyTdn0P7o7DpgPW84+uRcq0BITflBikGdUjAZ9wYBVI3mtrNvr9kpg1UsaK6t3690aoorC1lg0GpMH2HAMtkZjsSi5Ig9ESVosOh7GQfLjKNLvKpMKkLSKNFAka710GdgSi8oDMSoNhqjkKBXTgn3swtaxyzGkUzIzae9RtLdWkSlZ1KDX6EzgllzV4NV4SoDFSOGD4+HCeQUF8wrZ5Hs8zIb5EaVxy8DYFTbMCJPnLIWZxugZE2NlivC0gc1qEQUR8jEKgZcAXeH18BiCgl5nlHh0CrjB4Hb5fX4gb0J7c9PuHVsfgkx2n/vTY/JV8kn8PGxf7faOZ8qX8JVByuIf4whk9sqXli2hvPJV9hrp0hY7l8r2x37ydaVsb4xvXv/47v2NjfCl8m5oRDJclFMoE1yk0Uh1Te4/m8lFXe9qBZD0EkheicebXvzI2PLCuoKCukLuhPIeKwaHPEouxw3kMqaIUXDQ1p0mip+MyCORSCQaoUsnY1VZ38nUTrG21WvVo4f1OsEJFhvSfAFwGfT8VHRMeAVUpwLOoLzjT/REIj3O3FhuURE+nERF+0pTId5Fyxv5sfwGyg4O+my4vZv0sZm7oeQlFZORiB+tG0MweVNraeitl7yxiPIHTk4/diVxs94o5lEYishB2iAtkchEnsActoEpx44Fo8XnsQMaA22BlqC20RmhBKzYojZyYaxg+JggMc4HHY2m+L9EkWSYljirOisrO7d3VorxzyZ6Vc4lJqITAu1b2wOBdrLElAP+bFc2eGaZFVbkmJktv5uT6Jlz5D/MnBFor6ig/JPnRViBsV3LNKGGqB1ChJ0tgQywlVLFJIuQgTFttwkiKxhyQdAZMdMYtSaoAewqfvXVYPAbDT6/1mez85YS8FSDywQ6NfAnef6FNEGMilnppyvn5rB6tTyq1pOceRWnp2WJEZFXHeX5oyoem1nTTgdqc4heDY7bOeKz63vnz+/dRx+s31Ht2JGanQ5seirfWJL9tjozU/12TnEjn5oux9OzU3ckGbBzBwNOyk69JykKH0n/0LM9A72tuwM3zQpIRu4AxiToseEpgPOmbROyFe9/X2yeUvoUsCyEvjcgs7fpWP3/aKlFN0+6HFUe6D9HFz/XPwBlN9tTqNyZjFJ8UO2RUT5/h4CptCctEyeisnOyXjALEp7dXKaQKf6O7IMnGjNNACRMLxqdYJX8eMLvmmd68D+ayBLyKKYZwYxDt/GNhzETDJ05Qxlyi3pi3/Z93ndYVSumgj0V/KkIFlO6+1K3fF2+3g0q+YtuSIf0bvmLqV09nnobI6hwcjIP8aPCKayjsF5JBY3LaKAeRLSyYB1h81oTwe9SlPMkXB7G0mfL9q71gaqqwPqu67QRKS1+ObTx+sbQy9QV2OQHEScGkdFBeT7v7qisqqrs6N52i78/R+6S0qQONVj26agOVoswCyQWIV5D86vH53bxNUeXV0K+XZaHv/nm/KsHhOvylwsWnJX/HE8l/4WCv5x+l5n08z6UU8bUMa3MBpSmM7F63AxntdC9eBCKEZW9Hr+ABNqtxgAQrSbMtmrW7lKQuoSgBhSrTazWVU2QAKWY8wiiuhqFmQgWJBgoXiuWIm42N7hqZbBsgXz52O5P5uSvaNgFGnOuvsRw8I8Laha91wMvDuxqWFheN7/8GVtTltdS83DQsXRmqc5ZtcJXEVrlV2doTWk5+Yunm71dG5f55m/qY0MjI93vv9/NfpxXV9sUXrxy2fbNy1or65cOlDRnOoKFeeXcbw42H/bNDT5Qs3flgs31gWC1lD1nfUV/X7NdCnSUdHY2e8afzfKsqZ5ZljfDqjLOmk3UebNXB+aHArPYDRs+/HDDxeT5DiP+sFg7OpRaVQMGBV89PpeBdj22hCE0Uub0UqwLrNWsG0cuyadgLXTeR5rbO4+3c/vl15cur2nRq+TXCQDcS3SO+s6ak+e5/eMS+1dw3btu3YG2tvFL8XdIZvdjdW6TO/4B7IdrZWVPmctm5/59AgsPItTSbCiIBr2OqIGzmu20SMKAS7yqwGBUfGfgjDYlLLDeF0SfcLB2LSx8flT+08/kzz6yOj96rft4rpTjdPQcmLd47uKibbDq7ZSz/XtbH2nN717Nd62rU+c8Icevvv7I09wA6WvjVcafb+FsbNG+ZQ80Rn6ZZsvrP7teP2dzTdoETvNhjCmsr8FID2sJ69VYvdUcxk4AzYRlKcaE38eXNRlfW9H1as9i6acLHp1XpuNB5K7DIvkX08y1ZYvh3KfWaiCzH+ztrSDmD7LuX73x/mJelB8Yj39t8nhNQJJ2CAthpoFGLsGgtSOCJooCGoaJAMTjSWHVZ08YAa1Fg9lPI5U6DOsGVjDasJeZZ+YyhfCwfOzCxlBA69M9XLXtza7H/rav+9Tjq5xNi0wpKQIRNO4Lrzz7yp5QVYM6Jd/oc1Uvn/mQhhuWh6ENXoS2YTZ8QT42bF5d/559zp5r0Uff2VnR2tdf2/WCOd2cO0Mw6qpWPnvxpV0nrt5fZd2yItc199GWe8vlNfNDq+CH/7yAAnB9hn7T4QO4c1g9ScxsZgmzntnE/IDGndtHMw69lFwoCnYsMGx+rBp8JSBqdLzBr9QRPq/PbhWMWFtQZp1xguy/haw3TEHm3TWAnxFWQQWgt7M5OV0lCz1VRYucpWliy7z6Zd4urwPIyeZQqli2Lgg7szJV09PysATbOQtYIrB2YzbkJYkGgJ0m4AjPUap1pvYu1K9qr97z0Yl3p332b2LYB78ncYIlRkau/8GObSsOlZancACE5d5ily+c2+7h5Yj4lqhVmXXB+iXLfvdqSgqfKtQvfHDV0OnvQR1qhw42XS/vkvsh/hXcrDFP0a+SJNIomEfD1nsrYGO+1bgTOJhM8Hv6ek+7vVglxuSRwoKn17S937bm6YJCeSSG0Op1n+7tE37tcZ/p7dsTv4EUrGpDbWueKigsLHhqTVsoEj+JU0kaSjnj9tz8/gryQWwJ9BcJXBC/7smO+I/IFURJetFPrdt5WcoL6DbEJaygI8CTHfQTjf40ofD+DwalTqIAAHicY2BkYGAA4jC5t2/j+W2+MnCzM4DAtTC+5cg0OyNYnIOBCUQBAAceB90AeJxjYGRgYGcAARD5/z87IwMjAypQBAAtgwI4AHicY2BgYGAfYAwAOkQA4QAAAAAAAA4AaAB+AMwA4AECAUIBbAGYAcICGAJYArQC4AMwA7AD3gQwBJYE3AUkBWYFigYgBmYGtAbqB1gIEghYCG4IhHicY2BkYGBQZChlYGcAASYg5gJCBob/YD4DABfTAbQAeJxdkE1qg0AYhl8Tk9AIoVDaVSmzahcF87PMARLIMoFAl0ZHY1BHdBJIT9AT9AQ9RQ9Qeqy+yteNMzDzfM+88w0K4BY/cNAMB6N2bUaPPBLukybCLvleeAAPj8JD+hfhMV7hC3u4wxs7OO4NzQSZcI/8Ltwnfwi75E/hAR7wJTyk/xYeY49fYQ/PztM+jbTZ7LY6OWdBJdX/pqs6NYWa+zMxa13oKrA6Uoerqi/JwtpYxZXJ1coUVmeZUWVlTjq0/tHacjmdxuL90OR8O0UEDYMNdtiSEpz5XQGqzlm30kzUdAYFFOb8R7NOZk0q2lwAyz1i7oAr1xoXvrOgtYhZx8wY5KRV269JZ5yGpmzPTjQhvY9je6vEElPOuJP3mWKnP5M3V+YAAAB4nG2PyXLCMBBE3YCNDWEL2ffk7o8S8oCnkCVHC5C/jzBQlUP6IHVPzYyekl5y0iL5X5/ooY8BUmQYIkeBEca4wgRTzDDHAtdY4ga3uMM9HvCIJzzjBa94wzs+8ImvZNAq8TM+HqVkKxWlrQiOxjujQkNlEzyNzl6Z/cU2XF06at7U83VQyklLpEvSnuzsb+HAPnPfQVgaupa1Jlu4sPLsFblcitaz0dHU0ZF1qatjZ1+aTXYCmp6u0gSvWNPyHLtFZ+ZeXWVSaEkqs3T8S74WklbGbNNNq4LL4+CWKtZDv2cfX8l8aFbKFhEnJnJ+IULFpqwoQnNHlHaVQtPBl+ypmbSWdmyC61KS/AKZC3Y+AA==) format("woff"),url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQiCLJXoAAAE4AAAAVE9TLzJRiV3RAAABjAAAAFZjbWFwOfT3xgAAAmgAAAMiZ2x5ZgMJ0sMAAAXQAAARCGhlYWQSy2hLAAAA4AAAADZoaGVhDgMHIQAAALwAAAAkaG10eOAAAAAAAAHkAAAAhGxvY2E9NEHGAAAFjAAAAERtYXhwATIAgQAAARgAAAAgbmFtZdXH9aAAABbYAAACCnBvc3RAAl/0AAAY5AAAAZ4AAQAABwAAAAAABwAAAP//BwEAAQAAAAAAAAAAAAAAAAAAACEAAQAAAAEAAFYfTwlfDzz1AAsHAAAAAADWVg6nAAAAANZWDqcAAAAABwEHAAAAAAgAAgAAAAAAAAABAAAAIQB1AAcAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKADAAPgACREZMVAAObGF0bgAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAEGygGQAAUAAARxBOYAAAD6BHEE5gAAA1wAVwHOAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAQPEB8SAHAAAAAKEHAAAAAAAAAQAAAAAAAAAAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAAAAAUAAAADAAAALAAAAAQAAAGSAAEAAAAAAIwAAwABAAAALAADAAoAAAGSAAQAYAAAAAQABAABAADxIP//AADxAf//AAAAAQAEAAAAAQACAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAGQAAAAAAAAACAAAPEBAADxAQAAAAEAAPECAADxAgAAAAIAAPEDAADxAwAAAAMAAPEEAADxBAAAAAQAAPEFAADxBQAAAAUAAPEGAADxBgAAAAYAAPEHAADxBwAAAAcAAPEIAADxCAAAAAgAAPEJAADxCQAAAAkAAPEKAADxCgAAAAoAAPELAADxCwAAAAsAAPEMAADxDAAAAAwAAPENAADxDQAAAA0AAPEOAADxDgAAAA4AAPEPAADxDwAAAA8AAPEQAADxEAAAABAAAPERAADxEQAAABEAAPESAADxEgAAABIAAPETAADxEwAAABMAAPEUAADxFAAAABQAAPEVAADxFQAAABUAAPEWAADxFgAAABYAAPEXAADxFwAAABcAAPEYAADxGAAAABgAAPEZAADxGQAAABkAAPEaAADxGgAAABoAAPEbAADxGwAAABsAAPEcAADxHAAAABwAAPEdAADxHQAAAB0AAPEeAADxHgAAAB4AAPEfAADxHwAAAB8AAPEgAADxIAAAACAAAAAAAAAADgBoAH4AzADgAQIBQgFsAZgBwgIYAlgCtALgAzADsAPeBDAElgTcBSQFZgWKBiAGZga0BuoHWAgSCFgIbgiEAAEAAAAABYsFiwACAAABEQECVQM2BYv76gILAAADAAAAAAZrBmsAAgAbADQAAAkCEyIHDgEHBhAXHgEXFiA3PgE3NhAnLgEnJgMiJy4BJyY0Nz4BNzYyFx4BFxYUBw4BBwYC6wHA/kCVmIuGzjk7OznOhosBMIuGzjk7OznOhouYeW9rpi0vLy2ma2/yb2umLS8vLaZrbwIwAVABUAGbOznOhov+0IuGzjk7OznOhosBMIuGzjk7+sAvLaZrb/Jva6YtLy8tpmtv8m9rpi0vAAACAAAAAAVABYsAAwAHAAABIREpAREhEQHAASv+1QJVASsBdQQW++oEFgAAAAQAAAAABiEGIAAHABcAJwAqAAABNCcmJxUXNjcUBxc2NTQnLgEnFR4BFxYBBwEhESEBEQEGBxU2Nxc3AQcXBNA0MlW4A7spcU1FQ+6VbKovMfu0XwFh/p8BKwF1AT5QWZl6mV/9YJycA4BhUlAqpbgYGGNicZKknYyHvSKaIJNlaQIsX/6f/kD+iwH2/sI9G5ojZJhfBJacnAAAAAEAAAAABKsF1gAFAAABESEBEQECCwEqAXb+igRg/kD+iwSq/osAAAACAAAAAAVmBdYACAAOAAABNCcmJxE2NzYBESEBEQEFZTQyVFQyNPwQASsBdf6LA4BhUlAq/aYqUFIBQf5A/osEqv6LAAMAAAAABiAGDwAFAA4AIgAAExEhAREBBTQnJicRNjc2AxUeARcWFAcOAQcVPgE3NhAnLgHgASsBdf6LAsU0MlVVMjS7bKovMTEvqmyV7kNFRUPuBGD+QP6LBKr+i+BhUlAq/aYqUFIC8Jogk2Vp6GllkyCaIr2HjAE6jIe9AAAABAAAAAAFiwWLAAUACwARABcAAAEjESE1IwMzNTM1IQEjFSERIwMVMxUzEQILlgF24JaW4P6KA4DgAXaW4OCWAuv+ipYCCuCW/ICWAXYCoJbgAXYABAAAAAAFiwWLAAUACwARABcAAAEzFTMRIRMjFSERIwEzNTM1IRM1IxEhNQF14Jb+iuDgAXaWAcCW4P6KlpYBdgJV4AF2AcCWAXb76uCWAcDg/oqWAAAAAAIAAAAABdYF1gATABcAAAEhIg4BFREUHgEzITI+ATURNC4BAyERIQVA/IApRCgoRCkDgClEKChEKfyAA4AF1ShEKfyAKUQoKEQpA4ApRCj76wOAAAYAAAAABmsGawAIAA0AFQAeACMALAAACQEmIyIHBgcBJS4BJwEFIQE2NzY1NAUBBgcGFRQXIQUeARcBMwEWMzI3NjcBAr4BZFJQhHt2YwESA44z7Z/+7gLl/dABel0zNfwS/t1dMzUPAjD95DPtnwESeP7dU0+Ee3Zj/u4D8AJoEy0rUf4nd6P6PP4nS/1zZn+Ej0tLAfhmf4SPS0pLo/o8Adn+CBMtK1EB2QAFAAAAAAZrBdYAEwAXABsAHwAjAAABISIOARURFB4BMyEyPgE1ETQuAQEhFSEBITUhBSE1ITUhNSEF1ftWKUUoKEUpBKopRSgoRfstASr+1gLq/RYC6gHA/tYBKv0WAuoF1ShEKfyAKUQoKEQpA4ApRCj9q5X+1ZWVlZaVAAAAAAMAAAAABiAF1gATACsAQwAAASEiDgEVERQeATMhMj4BNRE0LgEBIzUjFTM1MxUUBisBIiY1ETQ2OwEyFhUFIzUjFTM1MxUUBisBIiY1ETQ2OwEyFhUFi/vqKEUoKEUoBBYoRSgoRf2CcJWVcCsf4B8sLB/gHysCC3CVlXAsH+AfKysf4B8sBdUoRCn8gClEKChEKQOAKUQo/fYl4CVKHywsHwEqHywsH0ol4CVKHywsHwEqHywsHwAGAAAAAAYgBPYAAwAHAAsADwATABcAABMzNSMRMzUjETM1IwEhNSERITUhERUhNeCVlZWVlZUBKwQV++sEFfvrBBUDNZb+QJUBwJX+QJb+QJUCVZWVAAAAAQAAAAAGIQZsADEAAAEiBgcBNjQnAR4BMzI+ATQuASIOARUUFwEuASMiDgEUHgEzMjY3AQYVFB4BMj4BNC4BBUAqSx797AcHAg8eTys9Zzw8Z3pnPAf98R5PKz1nPDxnPStPHgIUBjtkdmQ7O2QCTx4cATcbMhsBNB0gPGd6Zzw8Zz0ZG/7NHCA8Z3pnPCAc/soZGDtkOjpkdmQ7AAAAAAIAAAAABlkGawBDAFAAAAE2NCc3PgEnAy4BDwEmLwEuASMhIgYPAQYHJyYGBwMGFh8BBhQXBw4BFxMeAT8BFh8BHgEzITI2PwE2NxcWNjcTNiYnBSIuATQ+ATIeARQOAQWrBQWeCgYHlgcaDLo8QhwDFQ7+1g4VAhxEOroNGgeVBwULnQUFnQsFB5UHGg26O0McAhUOASoOFQIcRDq6DRoHlQcFC/04R3hGRniOeEZGeAM3Kj4qewkbDAEDDAkFSy4bxg4SEg7GHC1LBQkM/v0MGwl7Kj4qewkbDP79DAkFSy4bxg4SEg7GHC1LBQkMAQMMGwlBRniOeEZGeI54RgABAAAAAAZrBmsAGAAAExQXHgEXFiA3PgE3NhAnLgEnJiAHDgEHBpU7Oc6GiwEwi4bOOTs7Oc6Gi/7Qi4bOOTsDgJiLhs45Ozs5zoaLATCLhs45Ozs5zoaLAAAAAAIAAAAABmsGawAYADEAAAEiBw4BBwYQFx4BFxYgNz4BNzYQJy4BJyYDIicuAScmNDc+ATc2MhceARcWFAcOAQcGA4CYi4bOOTs7Oc6GiwEwi4bOOTs7Oc6Gi5h5b2umLS8vLaZrb/Jva6YtLy8tpmtvBms7Oc6Gi/7Qi4bOOTs7Oc6GiwEwi4bOOTv6wC8tpmtv8m9rpi0vLy2ma2/yb2umLS8AAwAAAAAGawZrABgAMQA+AAABIgcOAQcGEBceARcWIDc+ATc2ECcuAScmAyInLgEnJjQ3PgE3NjIXHgEXFhQHDgEHBhMUDgEiLgE0PgEyHgEDgJiKhs85Ozs5z4aKATCKhs85Ozs5z4aKmHlva6YtLy8tpmtv8m9rpi0vLy2ma29nPGd6Zzw8Z3pnPAZrOznPhor+0IqGzzk7OznPhooBMIqGzzk7+sAvLaZrb/Jva6YtLy8tpmtv8m9rpi0vAlU9Zzw8Z3pnPDxnAAAABAAAAAAGIAYhABMAHwApAC0AAAEhIg4BFREUHgEzITI+ATURNC4BASM1IxUjETMVMzU7ASEyFhURFAYjITczNSMFi/vqKEUoKEUoBBYoRSgoRf2CcJVwcJVwlgEqHywsH/7WcJWVBiAoRSj76ihFKChFKAQWKEUo/ICVlQHAu7ssH/7WHyxw4AAAAAACAAAAAAZrBmsAGAAkAAABIgcOAQcGEBceARcWIDc+ATc2ECcuAScmEwcJAScJATcJARcBA4CYi4bOOTs7Oc6GiwEwi4bOOTs7Oc6Gi91p/vT+9GkBC/71aQEMAQxp/vUGazs5zoaL/tCLhs45Ozs5zoaLATCLhs45O/wJaQEL/vVpAQwBDGn+9QELaf70AAABAAAAAAXWBrYAJwAAAREJAREyFxYXFhQHBgcGIicmJyY1IxQXHgEXFjI3PgE3NjQnLgEnJgOA/osBdXpoZjs9PTtmaPRoZjs9lS8tpWtv9G9rpS0vLy2la28FiwEq/ov+iwEqPTtmaPNpZTw9PTxlaXl5b2umLS8vLaZrb/Nva6UuLwABAAAAAAU/BwAAFAAAAREjIgYdASEDIxEhESMRMzU0NjMyBT+dVjwBJSf+/s7//9Ctkwb0/vhISL3+2P0JAvcBKNq6zQAAAAAEAAAAAAaOBwAAMABFAGAAbAAAARQeAxUUBwYEIyImJyY1NDY3NiUuATU0NwYjIiY1NDY3PgEzIQcjHgEVFA4DJzI2NzY1NC4CIyIGBwYVFB4DEzI+AjU0LgEvASYvAiYjIg4DFRQeAgEzFSMVIzUjNTM1MwMfQFtaQDBI/uqfhOU5JVlKgwERIB8VLhaUy0g/TdNwAaKKg0pMMUVGMZImUBo1Ij9qQCpRGS8UKz1ZNjprWzcODxMeChwlThAgNWhvUzZGcX0Da9XVadTUaQPkJEVDUIBOWlN6c1NgPEdRii5SEipAKSQxBMGUUpo2QkBYP4xaSHNHO0A+IRs5ZjqGfVInITtlLmdnUjT8lxo0Xj4ZMCQYIwsXHTgCDiQ4XTtGazsdA2xs29ts2QADAAAAAAaABmwAAwAOACoAAAERIREBFgYrASImNDYyFgERIRE0JiMiBgcGFREhEhAvASEVIz4DMzIWAd3+tgFfAWdUAlJkZ6ZkBI/+t1FWP1UVC/63AgEBAUkCFCpHZz+r0ASP/CED3wEySWJik2Fh/N39yAISaXdFMx4z/dcBjwHwMDCQIDA4H+MAAAEAAAAABpQGAAAxAAABBgcWFRQCDgEEIyAnFjMyNy4BJxYzMjcuAT0BFhcuATU0NxYEFyY1NDYzMhc2NwYHNgaUQ18BTJvW/tKs/vHhIyvhsGmmHyEcKypwk0ROQk4seQFbxgi9hoxgbWAlaV0FaGJFDhyC/v3ut22RBIoCfWEFCxexdQQmAyyOU1hLlbMKJiSGvWYVOXM/CgAAAAEAAAAABYAHAAAiAAABFw4BBwYuAzURIzU+BDc+ATsBESEVIREUHgI3NgUwUBewWWitcE4hqEhyRDAUBQEHBPQBTf6yDSBDME4Bz+0jPgECOFx4eDoCINcaV11vVy0FB/5Y/P36HjQ1HgECAAEAAAAABoAGgABKAAABFAIEIyInNj8BHgEzMj4BNTQuASMiDgMVFBYXFj8BNjc2JyY1NDYzMhYVFAYjIiY3PgI1NCYjIgYVFBcDBhcmAjU0EiQgBBIGgM7+n9FvazsTNhRqPXm+aHfijmm2f1srUE0eCAgGAgYRM9Gpl6mJaz1KDgglFzYyPlYZYxEEzv7OAWEBogFhzgOA0f6fziBdR9MnOYnwlnLIfjpgfYZDaJ4gDCAfGAYXFD1al9mkg6ruVz0jdVkfMkJyVUkx/l5Ga1sBfOnRAWHOzv6fAAAHAAAAAAcBBM8AFwAhADgATwBmAHEAdAAAAREzNhcWFxYXFhcWBw4BBwYHBicmLwEmNxY2NzYuAQcRFAUWNzY/ATY3NjU2JyMGFxYfARYXFhcUFxY3Nj8BNjc2NzYnIwYXFh8BFhcWFRYXFjc2PwE2NzY3NicjBhcWHwEWFxYVFgUzPwEVMxEjBgsBARUnAxwcaC5MND0sTSsvCgdVREdTNWg1KgECq1JrCQcwYkABfhoSCxAKJBQXAX4dAQMCBgMnFxsBJBoSCxAKJBQWAQF+HgEEAgUEJxcbASMZEwsQCiQUFgEBfh4BBAIFBCcXGwH5Q+5B4arNDfHvAhaOAckC/QIBAwwPHzdcZXlZmC8xCAQBAQIDBMIDVkxCZDQF/pUHwgcTCyAUQEdPU8etCAgFCQZHTFxbwLoHEwsgFEBHT1PHrQgIBQkGR0xcW8C6BxMLIBRAR09Tx60ICAUJBkdMXFvAwGQBZQMMFf6D/oYB/fkBAAABAAAAAAYhBrYALAAAASIHDgEHBhURFB4BOwERITU0Nz4BNzYyFx4BFxYdASERMzI+ATURNCcuAScmA4CJfXi6MzU8Zz3g/tUpKJFeYdRhXpEoKf7V4D1nPDUzunh9BrU0M7t4fYn99j1nPAJVlWthXpAoKSkokF5ha5X9qzxnPQIKiX14uzM0AAAAAAIAAAAABUAFQAACAAYAAAkCIREzEQHAAnv9hQLrlQHAAcABwPyAA4AAAAAAAgAAAAAFQAVAAAMABgAAATMRIwkBEQHAlZUBBQJ7BUD8gAHA/kADgAAAAAAAABAAxgABAAAAAAABAAcAAAABAAAAAAACAAcABwABAAAAAAADAAcADgABAAAAAAAEAAcAFQABAAAAAAAFAAsAHAABAAAAAAAGAAcAJwABAAAAAAAKACsALgABAAAAAAALABMAWQADAAEECQABAA4AbAADAAEECQACAA4AegADAAEECQADAA4AiAADAAEECQAEAA4AlgADAAEECQAFABYApAADAAEECQAGAA4AugADAAEECQAKAFYAyAADAAEECQALACYBHlZpZGVvSlNSZWd1bGFyVmlkZW9KU1ZpZGVvSlNWZXJzaW9uIDEuMFZpZGVvSlNHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBWAGkAZABlAG8ASgBTAFIAZQBnAHUAbABhAHIAVgBpAGQAZQBvAEoAUwBWAGkAZABlAG8ASgBTAFYAZQByAHMAaQBvAG4AIAAxAC4AMABWAGkAZABlAG8ASgBTAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIQECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgAEcGxheQtwbGF5LWNpcmNsZQVwYXVzZQt2b2x1bWUtbXV0ZQp2b2x1bWUtbG93CnZvbHVtZS1taWQLdm9sdW1lLWhpZ2gQZnVsbHNjcmVlbi1lbnRlcg9mdWxsc2NyZWVuLWV4aXQGc3F1YXJlB3NwaW5uZXIJc3VidGl0bGVzCGNhcHRpb25zCGNoYXB0ZXJzBXNoYXJlA2NvZwZjaXJjbGUOY2lyY2xlLW91dGxpbmUTY2lyY2xlLWlubmVyLWNpcmNsZQJoZAZjYW5jZWwGcmVwbGF5CGZhY2Vib29rBWdwbHVzCGxpbmtlZGluB3R3aXR0ZXIGdHVtYmxyCXBpbnRlcmVzdBFhdWRpby1kZXNjcmlwdGlvbgVhdWRpbwluZXh0LWl0ZW0NcHJldmlvdXMtaXRlbQAAAAA=) format("truetype");font-weight:400;font-style:normal}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder,.vjs-icon-play{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder:before,.vjs-icon-play:before{content:"\\F101"}.vjs-icon-play-circle{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-play-circle:before{content:"\\F102"}.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder,.vjs-icon-pause{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before,.vjs-icon-pause:before{content:"\\F103"}.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder,.vjs-icon-volume-mute{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before,.vjs-icon-volume-mute:before{content:"\\F104"}.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder,.vjs-icon-volume-low{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before,.vjs-icon-volume-low:before{content:"\\F105"}.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder,.vjs-icon-volume-mid{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before,.vjs-icon-volume-mid:before{content:"\\F106"}.video-js .vjs-mute-control .vjs-icon-placeholder,.vjs-icon-volume-high{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control .vjs-icon-placeholder:before,.vjs-icon-volume-high:before{content:"\\F107"}.video-js .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-enter{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-enter:before{content:"\\F108"}.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-exit{font-family:VideoJS;font-weight:400;font-style:normal}.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-exit:before{content:"\\F109"}.vjs-icon-square{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-square:before{content:"\\F10A"}.vjs-icon-spinner{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-spinner:before{content:"\\F10B"}.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subtitles-button .vjs-icon-placeholder,.vjs-icon-subtitles{font-family:VideoJS;font-weight:400;font-style:normal}.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subtitles-button .vjs-icon-placeholder:before,.vjs-icon-subtitles:before{content:"\\F10C"}.video-js .vjs-captions-button .vjs-icon-placeholder,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder,.vjs-icon-captions{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-captions-button .vjs-icon-placeholder:before,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before,.vjs-icon-captions:before{content:"\\F10D"}.video-js .vjs-chapters-button .vjs-icon-placeholder,.vjs-icon-chapters{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-chapters-button .vjs-icon-placeholder:before,.vjs-icon-chapters:before{content:"\\F10E"}.vjs-icon-share{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-share:before{content:"\\F10F"}.vjs-icon-cog{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-cog:before{content:"\\F110"}.video-js .vjs-play-progress,.video-js .vjs-volume-level,.vjs-icon-circle{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-play-progress:before,.video-js .vjs-volume-level:before,.vjs-icon-circle:before{content:"\\F111"}.vjs-icon-circle-outline{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-circle-outline:before{content:"\\F112"}.vjs-icon-circle-inner-circle{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-circle-inner-circle:before{content:"\\F113"}.vjs-icon-hd{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-hd:before{content:"\\F114"}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder,.vjs-icon-cancel{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{content:"\\F115"}.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder,.vjs-icon-replay{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before,.vjs-icon-replay:before{content:"\\F116"}.vjs-icon-facebook{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-facebook:before{content:"\\F117"}.vjs-icon-gplus{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-gplus:before{content:"\\F118"}.vjs-icon-linkedin{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-linkedin:before{content:"\\F119"}.vjs-icon-twitter{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-twitter:before{content:"\\F11A"}.vjs-icon-tumblr{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-tumblr:before{content:"\\F11B"}.vjs-icon-pinterest{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-pinterest:before{content:"\\F11C"}.video-js .vjs-descriptions-button .vjs-icon-placeholder,.vjs-icon-audio-description{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-descriptions-button .vjs-icon-placeholder:before,.vjs-icon-audio-description:before{content:"\\F11D"}.video-js .vjs-audio-button .vjs-icon-placeholder,.vjs-icon-audio{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-audio-button .vjs-icon-placeholder:before,.vjs-icon-audio:before{content:"\\F11E"}.vjs-icon-next-item{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-next-item:before{content:"\\F11F"}.vjs-icon-previous-item{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-previous-item:before{content:"\\F120"}.video-js{display:block;vertical-align:top;box-sizing:border-box;color:#fff;background-color:#000;position:relative;padding:0;font-size:10px;line-height:1;font-weight:400;font-style:normal;font-family:Arial,Helvetica,sans-serif;word-break:normal}.video-js:-moz-full-screen{position:absolute}.video-js:-webkit-full-screen{width:100%!important;height:100%!important}.video-js[tabindex="-1"]{outline:none}.video-js *,.video-js :after,.video-js :before{box-sizing:inherit}.video-js ul{font-family:inherit;font-size:inherit;line-height:inherit;list-style-position:outside;margin:0}.video-js.vjs-4-3,.video-js.vjs-16-9,.video-js.vjs-fluid{width:100%;max-width:100%;height:0}.video-js.vjs-16-9{padding-top:56.25%}.video-js.vjs-4-3{padding-top:75%}.video-js.vjs-fill,.video-js .vjs-tech{width:100%;height:100%}.video-js .vjs-tech{position:absolute;top:0;left:0}body.vjs-full-window{padding:0;margin:0;height:100%;overflow-y:auto}.vjs-full-window .video-js.vjs-fullscreen{position:fixed;overflow:hidden;z-index:1000;left:0;top:0;bottom:0;right:0}.video-js.vjs-fullscreen{width:100%!important;height:100%!important;padding-top:0!important}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-hidden{display:none!important}.vjs-disabled{opacity:.5;cursor:default}.video-js .vjs-offscreen{height:1px;left:-9999px;position:absolute;top:0;width:1px}.vjs-lock-showing{display:block!important;opacity:1;visibility:visible}.vjs-no-js{padding:20px;color:#fff;background-color:#000;font-size:18px;font-family:Arial,Helvetica,sans-serif;text-align:center;width:300px;height:150px;margin:0 auto}.vjs-no-js a,.vjs-no-js a:visited{color:#66a8cc}.video-js .vjs-big-play-button{font-size:3em;line-height:1.5em;height:1.5em;width:3em;display:block;position:absolute;top:10px;left:10px;padding:0;cursor:pointer;opacity:1;border:.06666em solid #fff;background-color:#2b333f;background-color:rgba(43,51,63,.7);border-radius:.3em;transition:all .4s}.vjs-big-play-centered .vjs-big-play-button{top:50%;left:50%;margin-top:-.75em;margin-left:-1.5em}.video-js .vjs-big-play-button:focus,.video-js:hover .vjs-big-play-button{border-color:#fff;background-color:#73859f;background-color:rgba(115,133,159,.5);transition:all 0s}.vjs-controls-disabled .vjs-big-play-button,.vjs-error .vjs-big-play-button,.vjs-has-started .vjs-big-play-button,.vjs-using-native-controls .vjs-big-play-button{display:none}.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button{display:block}.video-js button{background:none;border:none;color:inherit;display:inline-block;overflow:visible;font-size:inherit;line-height:inherit;text-transform:none;text-decoration:none;transition:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.vjs-control .vjs-button{width:100%;height:100%}.video-js .vjs-control.vjs-close-button{cursor:pointer;height:3em;position:absolute;right:0;top:.5em;z-index:2}.video-js .vjs-modal-dialog{background:rgba(0,0,0,.8);background:linear-gradient(180deg,rgba(0,0,0,.8),hsla(0,0%,100%,0));overflow:auto;box-sizing:content-box}.video-js .vjs-modal-dialog>*{box-sizing:border-box}.vjs-modal-dialog .vjs-modal-dialog-content{font-size:1.2em;line-height:1.5;padding:20px 24px;z-index:1}.vjs-menu-button{cursor:pointer}.vjs-menu-button.vjs-disabled{cursor:default}.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu{display:none}.vjs-menu .vjs-menu-content{display:block;padding:0;margin:0;font-family:Arial,Helvetica,sans-serif;overflow:auto;box-sizing:content-box}.vjs-menu .vjs-menu-content>*{box-sizing:border-box}.vjs-scrubbing .vjs-menu-button:hover .vjs-menu{display:none}.vjs-menu li{list-style:none;margin:0;padding:.2em 0;line-height:1.4em;font-size:1.2em;text-align:center;text-transform:lowercase}.vjs-menu li.vjs-menu-item:focus,.vjs-menu li.vjs-menu-item:hover{background-color:#73859f;background-color:rgba(115,133,159,.5)}.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:focus,.vjs-menu li.vjs-selected:hover{background-color:#fff;color:#2b333f}.vjs-menu li.vjs-menu-title{text-align:center;text-transform:uppercase;font-size:1em;line-height:2em;padding:0;margin:0 0 .3em;font-weight:700;cursor:default}.vjs-menu-button-popup .vjs-menu{display:none;position:absolute;bottom:0;width:10em;left:-3em;height:0;margin-bottom:1.5em;border-top-color:rgba(43,51,63,.7)}.vjs-menu-button-popup .vjs-menu .vjs-menu-content{background-color:#2b333f;background-color:rgba(43,51,63,.7);position:absolute;width:100%;bottom:1.5em;max-height:15em}.vjs-menu-button-popup .vjs-menu.vjs-lock-showing,.vjs-workinghover .vjs-menu-button-popup:hover .vjs-menu{display:block}.video-js .vjs-menu-button-inline{transition:all .4s;overflow:hidden}.video-js .vjs-menu-button-inline:before{width:2.222222222em}.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline{width:12em}.vjs-menu-button-inline .vjs-menu{opacity:0;height:100%;width:auto;position:absolute;left:4em;top:0;padding:0;margin:0;transition:all .4s}.vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-menu-button-inline:focus .vjs-menu,.vjs-menu-button-inline:hover .vjs-menu{display:block;opacity:1}.vjs-no-flex .vjs-menu-button-inline .vjs-menu{display:block;opacity:1;position:relative;width:auto}.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu{width:auto}.vjs-menu-button-inline .vjs-menu-content{width:auto;height:100%;margin:0;overflow:hidden}.video-js .vjs-control-bar{display:none;width:100%;position:absolute;bottom:0;left:0;right:0;height:3em;background-color:#2b333f;background-color:rgba(43,51,63,.7)}.vjs-has-started .vjs-control-bar{display:-webkit-flex;display:flex;visibility:visible;opacity:1;transition:visibility .1s,opacity .1s}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:visible;opacity:0;transition:visibility 1s,opacity 1s}.vjs-controls-disabled .vjs-control-bar,.vjs-error .vjs-control-bar,.vjs-using-native-controls .vjs-control-bar{display:none!important}.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}.vjs-has-started.vjs-no-flex .vjs-control-bar{display:table}.video-js .vjs-control{position:relative;text-align:center;margin:0;padding:0;height:100%;width:4em;-webkit-flex:none;flex:none}.vjs-button>.vjs-icon-placeholder:before{font-size:1.8em;line-height:1.67}.video-js .vjs-control:focus,.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before{text-shadow:0 0 1em #fff}.video-js .vjs-control-text{border:0;clip:rect(0 0 0 0);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.vjs-no-flex .vjs-control{display:table-cell;vertical-align:middle}.video-js .vjs-custom-control-spacer{display:none}.video-js .vjs-progress-control{cursor:pointer;-webkit-flex:auto;flex:auto;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-width:4em;touch-action:none}.video-js .vjs-progress-control.disabled{cursor:default}.vjs-live .vjs-progress-control{display:none}.vjs-no-flex .vjs-progress-control{width:auto}.video-js .vjs-progress-holder{-webkit-flex:auto;flex:auto;transition:all .2s;height:.3em}.video-js .vjs-progress-control .vjs-progress-holder{margin:0 10px}.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.6666666666666667em}.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled{font-size:1em}.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-load-progress div,.video-js .vjs-progress-holder .vjs-play-progress{position:absolute;display:block;height:100%;margin:0;padding:0;width:0;left:0;top:0}.video-js .vjs-play-progress{background-color:#fff}.video-js .vjs-play-progress:before{font-size:.9em;position:absolute;right:-.5em;top:-.333333333333333em;z-index:1}.video-js .vjs-load-progress{background:#bfc7d3;background:rgba(115,133,159,.5)}.video-js .vjs-load-progress div{background:#fff;background:rgba(115,133,159,.75)}.video-js .vjs-time-tooltip{background-color:#fff;background-color:hsla(0,0%,100%,.8);border-radius:.3em;color:#000;float:right;font-family:Arial,Helvetica,sans-serif;font-size:1em;padding:6px 8px 8px;pointer-events:none;position:relative;top:-3.4em;visibility:hidden;z-index:1}.video-js .vjs-progress-holder:focus .vjs-time-tooltip{display:none}.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip,.video-js .vjs-progress-control:hover .vjs-time-tooltip{display:block;font-size:.6em;visibility:visible}.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip{font-size:1em}.video-js .vjs-progress-control .vjs-mouse-display{display:none;position:absolute;width:1px;height:100%;background-color:#000;z-index:1}.vjs-no-flex .vjs-progress-control .vjs-mouse-display{z-index:0}.video-js .vjs-progress-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display{visibility:hidden;opacity:0;transition:visibility 1s,opacity 1s}.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display{display:none}.vjs-mouse-display .vjs-time-tooltip{color:#fff;background-color:#000;background-color:rgba(0,0,0,.8)}.video-js .vjs-slider{position:relative;cursor:pointer;padding:0;margin:0 .45em;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#73859f;background-color:rgba(115,133,159,.5)}.video-js .vjs-slider.disabled{cursor:default}.video-js .vjs-slider:focus{text-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.video-js .vjs-mute-control{cursor:pointer;-webkit-flex:none;flex:none;padding-left:2em;padding-right:2em;padding-bottom:3em}.video-js .vjs-volume-control{cursor:pointer;margin-right:1em;display:-webkit-flex;display:flex}.video-js .vjs-volume-control.vjs-volume-horizontal{width:5em}.video-js .vjs-volume-panel .vjs-volume-control{visibility:visible;opacity:0;width:1px;height:1px;margin-left:-1px}.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical,.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical .vjs-volume-level{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"}.video-js .vjs-volume-panel{transition:width 1s}.video-js .vjs-volume-panel .vjs-mute-control:hover~.vjs-volume-control,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,.video-js .vjs-volume-panel .vjs-volume-control:active,.video-js .vjs-volume-panel .vjs-volume-control:hover,.video-js .vjs-volume-panel:active .vjs-volume-control,.video-js .vjs-volume-panel:focus .vjs-volume-control,.video-js .vjs-volume-panel:hover .vjs-volume-control{visibility:visible;opacity:1;position:relative;transition:visibility .1s,opacity .1s,height .1s,width .1s,left 0s,top 0s}.video-js .vjs-volume-panel .vjs-mute-control:hover~.vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-horizontal,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-horizontal{width:5em;height:3em}.video-js .vjs-volume-panel .vjs-mute-control:hover~.vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-mute-control:hover~.vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-mute-control:hover~.vjs-volume-control.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical .vjs-volume-level{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:hover{width:9em;transition:width .1s}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only{width:4em}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{height:8em;width:3em;left:-3.5em;transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s}.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{width:5em;height:3em;visibility:visible;opacity:1;position:relative;transition:none}.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{position:absolute;bottom:3em;left:.5em}.video-js .vjs-volume-panel{display:-webkit-flex;display:flex}.video-js .vjs-volume-bar{margin:1.35em .45em}.vjs-volume-bar.vjs-slider-horizontal{width:5em;height:.3em}.vjs-volume-bar.vjs-slider-vertical{width:.3em;height:5em;margin:1.35em auto}.video-js .vjs-volume-level{position:absolute;bottom:0;left:0;background-color:#fff}.video-js .vjs-volume-level:before{position:absolute;font-size:.9em}.vjs-slider-vertical .vjs-volume-level{width:.3em}.vjs-slider-vertical .vjs-volume-level:before{top:-.5em;left:-.3em}.vjs-slider-horizontal .vjs-volume-level{height:.3em}.vjs-slider-horizontal .vjs-volume-level:before{top:-.3em;right:-.5em}.video-js .vjs-volume-panel.vjs-volume-panel-vertical{width:4em}.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level{height:100%}.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{width:100%}.video-js .vjs-volume-vertical{width:3em;height:8em;bottom:8em;background-color:#2b333f;background-color:rgba(43,51,63,.7)}.video-js .vjs-volume-horizontal .vjs-menu{left:-2em}.vjs-poster{display:inline-block;background-repeat:no-repeat;background-position:50% 50%;background-size:contain;background-color:#000;cursor:pointer;margin:0;position:absolute;top:0;right:0;bottom:0;left:0;height:100%}.vjs-poster,.vjs-poster img{vertical-align:middle;padding:0}.vjs-poster img{display:block;margin:0 auto;max-height:100%;width:100%}.vjs-has-started .vjs-poster{display:none}.vjs-audio.vjs-has-started .vjs-poster{display:block}.vjs-using-native-controls .vjs-poster{display:none}.video-js .vjs-live-control{display:-webkit-flex;display:flex;-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex:auto;flex:auto;font-size:1em;line-height:3em}.vjs-no-flex .vjs-live-control{display:table-cell;width:auto;text-align:left}.video-js .vjs-time-control{-webkit-flex:none;flex:none;font-size:1em;line-height:3em;min-width:2em;width:auto;padding-left:1em;padding-right:1em}.video-js .vjs-current-time,.vjs-live .vjs-time-control,.vjs-no-flex .vjs-current-time{display:none}.vjs-no-flex .vjs-remaining-time.vjs-time-control.vjs-control{width:0!important;white-space:nowrap}.video-js .vjs-duration,.vjs-no-flex .vjs-duration{display:none}.vjs-time-divider{display:none;line-height:3em}.vjs-live .vjs-time-divider{display:none}.video-js .vjs-play-control .vjs-icon-placeholder{cursor:pointer;-webkit-flex:none;flex:none}.vjs-text-track-display{position:absolute;bottom:3em;left:0;right:0;top:0;pointer-events:none}.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display{bottom:1em}.video-js .vjs-text-track{font-size:1.4em;text-align:center;margin-bottom:.1em;background-color:#000;background-color:rgba(0,0,0,.5)}.vjs-subtitles{color:#fff}.vjs-captions{color:#fc6}.vjs-tt-cue{display:block}video::-webkit-media-text-track-display{-webkit-transform:translateY(-3em);transform:translateY(-3em)}.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display{-webkit-transform:translateY(-1.5em);transform:translateY(-1.5em)}.video-js .vjs-fullscreen-control{cursor:pointer;-webkit-flex:none;flex:none}.vjs-playback-rate .vjs-playback-rate-value,.vjs-playback-rate>.vjs-menu-button{position:absolute;top:0;left:0;width:100%;height:100%}.vjs-playback-rate .vjs-playback-rate-value{pointer-events:none;font-size:1.5em;line-height:2;text-align:center}.vjs-playback-rate .vjs-menu{width:4em;left:0}.vjs-error .vjs-error-display .vjs-modal-dialog-content{font-size:1.4em;text-align:center}.vjs-error .vjs-error-display:before{color:#fff;content:"X";font-family:Arial,Helvetica,sans-serif;font-size:4em;left:0;line-height:1;margin-top:-.5em;position:absolute;text-shadow:.05em .05em .1em #000;text-align:center;top:50%;vertical-align:middle;width:100%}.vjs-loading-spinner{display:none;position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;opacity:.85;text-align:left;border:6px solid rgba(43,51,63,.7);box-sizing:border-box;background-clip:padding-box;width:50px;height:50px;border-radius:25px;visibility:hidden}.vjs-seeking .vjs-loading-spinner,.vjs-waiting .vjs-loading-spinner{display:block;-webkit-animation:0s linear .3s forwards vjs-spinner-show;animation:0s linear .3s forwards vjs-spinner-show}.vjs-loading-spinner:after,.vjs-loading-spinner:before{content:"";position:absolute;margin:-6px;box-sizing:inherit;width:inherit;height:inherit;border-radius:inherit;opacity:1;border:inherit;border-color:transparent;border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:before{-webkit-animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite;animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite}.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:before{border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:after{border-top-color:#fff;-webkit-animation-delay:.44s;animation-delay:.44s}@keyframes vjs-spinner-show{to{visibility:visible}}@-webkit-keyframes vjs-spinner-show{to{visibility:visible}}@keyframes vjs-spinner-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes vjs-spinner-spin{to{-webkit-transform:rotate(1turn)}}@keyframes vjs-spinner-fade{0%{border-top-color:#73859f}20%{border-top-color:#73859f}35%{border-top-color:#fff}60%{border-top-color:#73859f}to{border-top-color:#73859f}}@-webkit-keyframes vjs-spinner-fade{0%{border-top-color:#73859f}20%{border-top-color:#73859f}35%{border-top-color:#fff}60%{border-top-color:#73859f}to{border-top-color:#73859f}}.vjs-chapters-button .vjs-menu ul{width:24em}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder{vertical-align:middle;display:inline-block;margin-bottom:-.1em}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{font-family:VideoJS;content:"\\F10D";font-size:1.5em;line-height:inherit}.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder{vertical-align:middle;display:inline-block;margin-bottom:-.1em}.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{font-family:VideoJS;content:" \\F11D";font-size:1.5em;line-height:inherit}.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer{-webkit-flex:auto;flex:auto}.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer{width:auto}.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-descriptions-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button .vjs-audio-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-audio-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-descriptions-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-audio-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-descriptions-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control{display:none}.vjs-modal-dialog.vjs-text-track-settings{background-color:#2b333f;background-color:rgba(43,51,63,.75);color:#fff;height:70%}.vjs-text-track-settings .vjs-modal-dialog-content{display:table}.vjs-text-track-settings .vjs-track-settings-colors,.vjs-text-track-settings .vjs-track-settings-controls,.vjs-text-track-settings .vjs-track-settings-font{display:table-cell}.vjs-text-track-settings .vjs-track-settings-controls{text-align:right;vertical-align:bottom}@supports (display:grid){.vjs-text-track-settings .vjs-modal-dialog-content{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr auto}.vjs-text-track-settings .vjs-track-settings-colors{display:block;grid-column:1;grid-row:1}.vjs-text-track-settings .vjs-track-settings-font{grid-column:2;grid-row:1}.vjs-text-track-settings .vjs-track-settings-controls{grid-column:2;grid-row:2}}.vjs-track-setting>select{margin-right:5px}.vjs-text-track-settings fieldset{margin:5px;padding:3px;border:none}.vjs-text-track-settings fieldset span{display:inline-block}.vjs-text-track-settings legend{color:#fff;margin:0 0 5px}.vjs-text-track-settings .vjs-label{position:absolute;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);display:block;margin:0 0 5px;padding:0;border:0;height:1px;width:1px;overflow:hidden}.vjs-track-settings-controls button:active,.vjs-track-settings-controls button:focus{outline-style:solid;outline-width:medium;background-image:linear-gradient(0deg,#fff 88%,#73859f)}.vjs-track-settings-controls button:hover{color:rgba(43,51,63,.75)}.vjs-track-settings-controls button{background-color:#fff;background-image:linear-gradient(-180deg,#fff 88%,#73859f);color:#2b333f;cursor:pointer;border-radius:2px}.vjs-track-settings-controls .vjs-default-button{margin-right:1em}@media print{.video-js>:not(.vjs-tech):not(.vjs-poster){visibility:hidden}}.vjs-resize-manager{position:absolute;top:0;left:0;width:100%;height:100%;border:none;visibility:hidden}@media \\0screen{.vjs-user-inactive.vjs-playing .vjs-control-bar :before{content:""}}@media \\0screen{.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:hidden}}', ""])
}, function (e, t, i) {
    e.exports = i.p + "46ac6629168546c71dbf115992aa4be9.eot"
}, function (e, t, i) {
    /**
     * @license
     * Video.js 6.11.0 <http://videojs.com/>
     * Copyright Brightcove, Inc. <https://www.brightcove.com/>
     * Available under Apache License Version 2.0
     * <https://github.com/videojs/video.js/blob/master/LICENSE>
     *
     * Includes vtt.js <https://github.com/mozilla/vtt.js>
     * Available under Apache License Version 2.0
     * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
     */
    function n(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e
    }

    var r = n(i(5)), o = n(i(40)), a = n(i(42)), s = n(i(43)), l = n(i(44)), c = n(i(51)), u = "6.11.0",
        p = r.navigator && r.navigator.userAgent || "", d = /AppleWebKit\/([\d.]+)/i.exec(p),
        h = d ? parseFloat(d.pop()) : null, f = /iPad/i.test(p), v = /iPhone/i.test(p) && !f, g = /iPod/i.test(p),
        m = v || f || g, A = function () {
            var e = p.match(/OS (\d+)_/i);
            return e && e[1] ? e[1] : null
        }(), b = /Android/i.test(p), y = function () {
            var e = p.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
            if (!e) return null;
            var t = e[1] && parseFloat(e[1]), i = e[2] && parseFloat(e[2]);
            return t && i ? parseFloat(e[1] + "." + e[2]) : t || null
        }(), w = b && /webkit/i.test(p) && y < 2.3, x = b && y < 5 && h < 537, _ = /Firefox/i.test(p), k = /Edge/i.test(p),
        j = !k && (/Chrome/i.test(p) || /CriOS/i.test(p)), C = function () {
            var e = p.match(/(Chrome|CriOS)\/(\d+)/);
            return e && e[2] ? parseFloat(e[2]) : null
        }(), T = /MSIE\s8\.0/.test(p), E = function () {
            var e = /MSIE\s(\d+)\.\d/.exec(p), t = e && parseFloat(e[1]);
            return !t && /Trident\/7.0/i.test(p) && /rv:11.0/.test(p) && (t = 11), t
        }(), S = /Safari/i.test(p) && !j && !b && !k, B = (S || m) && !j,
        M = ee() && ("ontouchstart" in r || r.navigator.maxTouchPoints || r.DocumentTouch && r.document instanceof r.DocumentTouch),
        z = ee() && "backgroundSize" in r.document.createElement("video").style, I = (Object.freeze || Object)({
            IS_IPAD: f,
            IS_IPHONE: v,
            IS_IPOD: g,
            IS_IOS: m,
            IOS_VERSION: A,
            IS_ANDROID: b,
            ANDROID_VERSION: y,
            IS_OLD_ANDROID: w,
            IS_NATIVE_ANDROID: x,
            IS_FIREFOX: _,
            IS_EDGE: k,
            IS_CHROME: j,
            CHROME_VERSION: C,
            IS_IE8: T,
            IE_VERSION: E,
            IS_SAFARI: S,
            IS_ANY_SAFARI: B,
            TOUCH_ENABLED: M,
            BACKGROUND_SIZE_SUPPORTED: z
        }), P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, D = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, O = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }, N = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }, L = function (e, t) {
            return e.raw = t, e
        }, F = Object.prototype.toString, R = function (e) {
            return Q(e) ? Object.keys(e) : []
        };

    function Y(e, t) {
        R(e).forEach(function (i) {
            return t(e[i], i)
        })
    }

    function H(e) {
        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
        return Object.assign ? Object.assign.apply(Object, [e].concat(i)) : (i.forEach(function (t) {
            t && Y(t, function (t, i) {
                e[i] = t
            })
        }), e)
    }

    function Q(e) {
        return !!e && "object" === (void 0 === e ? "undefined" : P(e))
    }

    function V(e) {
        return Q(e) && "[object Object]" === F.call(e) && e.constructor === Object
    }

    var G = void 0, U = "info", W = [], X = function (e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!E && E < 11, n = G.levels[U],
            o = new RegExp("^(" + n + ")$");
        if ("log" !== e && t.unshift(e.toUpperCase() + ":"), W && W.push([].concat(t)), t.unshift("VIDEOJS:"), r.console) {
            var a = r.console[e];
            a || "debug" !== e || (a = r.console.info || r.console.log), a && n && o.test(e) && (i && (t = t.map(function (e) {
                if (Q(e) || Array.isArray(e)) try {
                    return JSON.stringify(e)
                } catch (t) {
                    return String(e)
                }
                return String(e)
            }).join(" ")), a.apply ? a[Array.isArray(t) ? "apply" : "call"](r.console, t) : a(t))
        }
    };
    (G = function () {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        X("log", t)
    }).levels = {
        all: "debug|log|warn|error",
        off: "",
        debug: "debug|log|warn|error",
        info: "log|warn|error",
        warn: "warn|error",
        error: "error",
        DEFAULT: U
    }, G.level = function (e) {
        if ("string" == typeof e) {
            if (!G.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
            U = e
        }
        return U
    }, G.history = function () {
        return W ? [].concat(W) : []
    }, G.history.clear = function () {
        W && (W.length = 0)
    }, G.history.disable = function () {
        null !== W && (W.length = 0, W = null)
    }, G.history.enable = function () {
        null === W && (W = [])
    }, G.error = function () {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return X("error", t)
    }, G.warn = function () {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return X("warn", t)
    }, G.debug = function () {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return X("debug", t)
    };
    var J = G;

    function Z(e, t) {
        if (!e || !t) return "";
        if ("function" == typeof r.getComputedStyle) {
            var i = r.getComputedStyle(e);
            return i ? i[t] : ""
        }
        return e.currentStyle[t] || ""
    }

    var q = L(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);

    function K(e) {
        return "string" == typeof e && /\S/.test(e)
    }

    function $(e) {
        if (/\s/.test(e)) throw new Error("class has illegal whitespace characters")
    }

    function ee() {
        return o === r.document && void 0 !== o.createElement
    }

    function te(e) {
        return Q(e) && 1 === e.nodeType
    }

    function ie() {
        try {
            return r.parent !== r.self
        } catch (e) {
            return !0
        }
    }

    function ne(e) {
        return function (t, i) {
            if (!K(t)) return o[e](null);
            K(i) && (i = o.querySelector(i));
            var n = te(i) ? i : o;
            return n[e] && n[e](t)
        }
    }

    function re() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments[3],
            r = o.createElement(e);
        return Object.getOwnPropertyNames(t).forEach(function (e) {
            var i = t[e];
            -1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (J.warn(a(q, e, i)), r.setAttribute(e, i)) : "textContent" === e ? oe(r, i) : r[e] = i
        }), Object.getOwnPropertyNames(i).forEach(function (e) {
            r.setAttribute(e, i[e])
        }), n && ke(r, n), r
    }

    function oe(e, t) {
        return void 0 === e.textContent ? e.innerText = t : e.textContent = t, e
    }

    function ae(e, t) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
    }

    function se(e, t) {
        return $(t), e.classList ? e.classList.contains(t) : function (e) {
            return new RegExp("(^|\\s)" + e + "($|\\s)")
        }(t).test(e.className)
    }

    function le(e, t) {
        return e.classList ? e.classList.add(t) : se(e, t) || (e.className = (e.className + " " + t).trim()), e
    }

    function ce(e, t) {
        return e.classList ? e.classList.remove(t) : ($(t), e.className = e.className.split(/\s+/).filter(function (e) {
            return e !== t
        }).join(" ")), e
    }

    function ue(e, t, i) {
        var n = se(e, t);
        if ("function" == typeof i && (i = i(e, t)), "boolean" != typeof i && (i = !n), i !== n) return i ? le(e, t) : ce(e, t), e
    }

    function pe(e, t) {
        Object.getOwnPropertyNames(t).forEach(function (i) {
            var n = t[i];
            null === n || void 0 === n || !1 === n ? e.removeAttribute(i) : e.setAttribute(i, !0 === n ? "" : n)
        })
    }

    function de(e) {
        var t = {}, i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
        if (e && e.attributes && e.attributes.length > 0) for (var n = e.attributes, r = n.length - 1; r >= 0; r--) {
            var o = n[r].name, a = n[r].value;
            "boolean" != typeof e[o] && -1 === i.indexOf("," + o + ",") || (a = null !== a), t[o] = a
        }
        return t
    }

    function he(e, t) {
        return e.getAttribute(t)
    }

    function fe(e, t, i) {
        e.setAttribute(t, i)
    }

    function ve(e, t) {
        e.removeAttribute(t)
    }

    function ge() {
        o.body.focus(), o.onselectstart = function () {
            return !1
        }
    }

    function me() {
        o.onselectstart = function () {
            return !0
        }
    }

    function Ae(e) {
        if (e && e.getBoundingClientRect && e.parentNode) {
            var t = e.getBoundingClientRect(), i = {};
            return ["bottom", "height", "left", "right", "top", "width"].forEach(function (e) {
                void 0 !== t[e] && (i[e] = t[e])
            }), i.height || (i.height = parseFloat(Z(e, "height"))), i.width || (i.width = parseFloat(Z(e, "width"))), i
        }
    }

    function be(e) {
        var t = void 0;
        if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return {left: 0, top: 0};
        var i = o.documentElement, n = o.body, a = i.clientLeft || n.clientLeft || 0, s = r.pageXOffset || n.scrollLeft,
            l = t.left + s - a, c = i.clientTop || n.clientTop || 0, u = r.pageYOffset || n.scrollTop,
            p = t.top + u - c;
        return {left: Math.round(l), top: Math.round(p)}
    }

    function ye(e, t) {
        var i = {}, n = be(e), r = e.offsetWidth, o = e.offsetHeight, a = n.top, s = n.left, l = t.pageY, c = t.pageX;
        return t.changedTouches && (c = t.changedTouches[0].pageX, l = t.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (a - l + o) / o)), i.x = Math.max(0, Math.min(1, (c - s) / r)), i
    }

    function we(e) {
        return Q(e) && 3 === e.nodeType
    }

    function xe(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        return e
    }

    function _e(e) {
        return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function (e) {
            return "function" == typeof e && (e = e()), te(e) || we(e) ? e : "string" == typeof e && /\S/.test(e) ? o.createTextNode(e) : void 0
        }).filter(function (e) {
            return e
        })
    }

    function ke(e, t) {
        return _e(t).forEach(function (t) {
            return e.appendChild(t)
        }), e
    }

    function je(e, t) {
        return ke(xe(e), t)
    }

    function Ce(e) {
        return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || (9 === E || 0 === e.button && 1 === e.buttons))
    }

    var Te = ne("querySelector"), Ee = ne("querySelectorAll"), Se = (Object.freeze || Object)({
        isReal: ee,
        isEl: te,
        isInFrame: ie,
        createEl: re,
        textContent: oe,
        prependTo: ae,
        hasClass: se,
        addClass: le,
        removeClass: ce,
        toggleClass: ue,
        setAttributes: pe,
        getAttributes: de,
        getAttribute: he,
        setAttribute: fe,
        removeAttribute: ve,
        blockTextSelection: ge,
        unblockTextSelection: me,
        getBoundingClientRect: Ae,
        findPosition: be,
        getPointerPosition: ye,
        isTextNode: we,
        emptyEl: xe,
        normalizeContent: _e,
        appendContent: ke,
        insertContent: je,
        isSingleLeftClick: Ce,
        $: Te,
        $$: Ee
    }), Be = 1;

    function Me() {
        return Be++
    }

    var ze = {}, Ie = "vdata" + (new Date).getTime();

    function Pe(e) {
        var t = e[Ie];
        return t || (t = e[Ie] = Me()), ze[t] || (ze[t] = {}), ze[t]
    }

    function De(e) {
        var t = e[Ie];
        return !!t && !!Object.getOwnPropertyNames(ze[t]).length
    }

    function Oe(e) {
        var t = e[Ie];
        if (t) {
            delete ze[t];
            try {
                delete e[Ie]
            } catch (t) {
                e.removeAttribute ? e.removeAttribute(Ie) : e[Ie] = null
            }
        }
    }

    function Ne(e, t) {
        var i = Pe(e);
        0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && Oe(e)
    }

    function Le(e, t, i, n) {
        i.forEach(function (i) {
            e(t, i, n)
        })
    }

    function Fe(e) {
        function t() {
            return !0
        }

        function i() {
            return !1
        }

        if (!e || !e.isPropagationStopped) {
            var n = e || r.event;
            for (var a in e = {}, n) "layerX" !== a && "layerY" !== a && "keyLocation" !== a && "webkitMovementX" !== a && "webkitMovementY" !== a && ("returnValue" === a && n.preventDefault || (e[a] = n[a]));
            if (e.target || (e.target = e.srcElement || o), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function () {
                    n.preventDefault && n.preventDefault(), e.returnValue = !1, n.returnValue = !1, e.defaultPrevented = !0
                }, e.defaultPrevented = !1, e.stopPropagation = function () {
                    n.stopPropagation && n.stopPropagation(), e.cancelBubble = !0, n.cancelBubble = !0, e.isPropagationStopped = t
                }, e.isPropagationStopped = i, e.stopImmediatePropagation = function () {
                    n.stopImmediatePropagation && n.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                }, e.isImmediatePropagationStopped = i, null !== e.clientX && void 0 !== e.clientX) {
                var s = o.documentElement, l = o.body;
                e.pageX = e.clientX + (s && s.scrollLeft || l && l.scrollLeft || 0) - (s && s.clientLeft || l && l.clientLeft || 0), e.pageY = e.clientY + (s && s.scrollTop || l && l.scrollTop || 0) - (s && s.clientTop || l && l.clientTop || 0)
            }
            e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
        }
        return e
    }

    var Re = !1;
    !function () {
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function () {
                    Re = !0
                }
            });
            r.addEventListener("test", null, e), r.removeEventListener("test", null, e)
        } catch (e) {
        }
    }();
    var Ye = ["touchstart", "touchmove"];

    function He(e, t, i) {
        if (Array.isArray(t)) return Le(He, e, t, i);
        var n = Pe(e);
        if (n.handlers || (n.handlers = {}), n.handlers[t] || (n.handlers[t] = []), i.guid || (i.guid = Me()), n.handlers[t].push(i), n.dispatcher || (n.disabled = !1, n.dispatcher = function (t, i) {
                if (!n.disabled) {
                    t = Fe(t);
                    var r = n.handlers[t.type];
                    if (r) for (var o = r.slice(0), a = 0, s = o.length; a < s && !t.isImmediatePropagationStopped(); a++) try {
                        o[a].call(e, t, i)
                    } catch (e) {
                        J.error(e)
                    }
                }
            }), 1 === n.handlers[t].length) if (e.addEventListener) {
            var r = !1;
            Re && Ye.indexOf(t) > -1 && (r = {passive: !0}), e.addEventListener(t, n.dispatcher, r)
        } else e.attachEvent && e.attachEvent("on" + t, n.dispatcher)
    }

    function Qe(e, t, i) {
        if (De(e)) {
            var n = Pe(e);
            if (n.handlers) {
                if (Array.isArray(t)) return Le(Qe, e, t, i);
                var r = function (e, t) {
                    n.handlers[t] = [], Ne(e, t)
                };
                if (void 0 !== t) {
                    var o = n.handlers[t];
                    if (o) if (i) {
                        if (i.guid) for (var a = 0; a < o.length; a++) o[a].guid === i.guid && o.splice(a--, 1);
                        Ne(e, t)
                    } else r(e, t)
                } else for (var s in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, s) && r(e, s)
            }
        }
    }

    function Ve(e, t, i) {
        var n = De(e) ? Pe(e) : {}, r = e.parentNode || e.ownerDocument;
        if ("string" == typeof t ? t = {
                type: t,
                target: e
            } : t.target || (t.target = e), t = Fe(t), n.dispatcher && n.dispatcher.call(e, t, i), r && !t.isPropagationStopped() && !0 === t.bubbles) Ve.call(null, r, t, i); else if (!r && !t.defaultPrevented) {
            var o = Pe(t.target);
            t.target[t.type] && (o.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), o.disabled = !1)
        }
        return !t.defaultPrevented
    }

    function Ge(e, t, i) {
        if (Array.isArray(t)) return Le(Ge, e, t, i);
        var n = function n() {
            Qe(e, t, n), i.apply(this, arguments)
        };
        n.guid = i.guid = i.guid || Me(), He(e, t, n)
    }

    var Ue = (Object.freeze || Object)({fixEvent: Fe, on: He, off: Qe, trigger: Ve, one: Ge}), We = !1, Xe = void 0,
        Je = function () {
            if (ee() && !1 !== Xe.options.autoSetup) {
                var e = o.getElementsByTagName("video"), t = o.getElementsByTagName("audio"),
                    i = o.getElementsByTagName("video-js"), n = [];
                if (e && e.length > 0) for (var r = 0, a = e.length; r < a; r++) n.push(e[r]);
                if (t && t.length > 0) for (var s = 0, l = t.length; s < l; s++) n.push(t[s]);
                if (i && i.length > 0) for (var c = 0, u = i.length; c < u; c++) n.push(i[c]);
                if (n && n.length > 0) for (var p = 0, d = n.length; p < d; p++) {
                    var h = n[p];
                    if (!h || !h.getAttribute) {
                        Ze(1);
                        break
                    }
                    void 0 === h.player && null !== h.getAttribute("data-setup") && Xe(h)
                } else We || Ze(1)
            }
        };

    function Ze(e, t) {
        t && (Xe = t), r.setTimeout(Je, e)
    }

    ee() && "complete" === o.readyState ? We = !0 : Ge(r, "load", function () {
        We = !0
    });
    var qe = function (e) {
        var t = o.createElement("style");
        return t.className = e, t
    }, Ke = function (e, t) {
        e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
    }, $e = function (e, t, i) {
        t.guid || (t.guid = Me());
        var n = function () {
            return t.apply(e, arguments)
        };
        return n.guid = i ? i + "_" + t.guid : t.guid, n
    }, et = function (e, t) {
        var i = Date.now();
        return function () {
            var n = Date.now();
            n - i >= t && (e.apply(void 0, arguments), i = n)
        }
    }, tt = function (e, t, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r, o = void 0;
        return function () {
            var r = this, a = arguments, s = function () {
                o = null, s = null, i || e.apply(r, a)
            };
            !o && i && e.apply(r, a), n.clearTimeout(o), o = n.setTimeout(s, t)
        }
    }, it = function () {
    };
    it.prototype.allowedEvents_ = {}, it.prototype.on = function (e, t) {
        var i = this.addEventListener;
        this.addEventListener = function () {
        }, He(this, e, t), this.addEventListener = i
    }, it.prototype.addEventListener = it.prototype.on, it.prototype.off = function (e, t) {
        Qe(this, e, t)
    }, it.prototype.removeEventListener = it.prototype.off, it.prototype.one = function (e, t) {
        var i = this.addEventListener;
        this.addEventListener = function () {
        }, Ge(this, e, t), this.addEventListener = i
    }, it.prototype.trigger = function (e) {
        var t = e.type || e;
        "string" == typeof e && (e = {type: t}), e = Fe(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), Ve(this, e)
    }, it.prototype.dispatchEvent = it.prototype.trigger;
    var nt = function (e) {
        return e instanceof it || !!e.eventBusEl_ && ["on", "one", "off", "trigger"].every(function (t) {
            return "function" == typeof e[t]
        })
    }, rt = function (e) {
        return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
    }, ot = function (e) {
        if (!e.nodeName && !nt(e)) throw new Error("Invalid target; must be a DOM node or evented object.")
    }, at = function (e) {
        if (!rt(e)) throw new Error("Invalid event type; must be a non-empty string or array.")
    }, st = function (e) {
        if ("function" != typeof e) throw new Error("Invalid listener; must be a function.")
    }, lt = function (e, t) {
        var i = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_, n = void 0, r = void 0, o = void 0;
        return i ? (n = e.eventBusEl_, t.length >= 3 && t.shift(), r = t[0], o = t[1]) : (n = t[0], r = t[1], o = t[2]), ot(n), at(r), st(o), {
            isTargetingSelf: i,
            target: n,
            type: r,
            listener: o = $e(e, o)
        }
    }, ct = function (e, t, i, n) {
        ot(e), e.nodeName ? Ue[t](e, i, n) : e[t](i, n)
    }, ut = {
        on: function () {
            for (var e = this, t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            var r = lt(this, i), o = r.isTargetingSelf, a = r.target, s = r.type, l = r.listener;
            if (ct(a, "on", s, l), !o) {
                var c = function () {
                    return e.off(a, s, l)
                };
                c.guid = l.guid;
                var u = function () {
                    return e.off("dispose", c)
                };
                u.guid = l.guid, ct(this, "on", "dispose", c), ct(a, "on", "dispose", u)
            }
        }, one: function () {
            for (var e = this, t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            var r = lt(this, i), o = r.isTargetingSelf, a = r.target, s = r.type, l = r.listener;
            if (o) ct(a, "one", s, l); else {
                var c = function t() {
                    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    e.off(a, s, t), l.apply(null, n)
                };
                c.guid = l.guid, ct(a, "one", s, c)
            }
        }, off: function (e, t, i) {
            if (!e || rt(e)) Qe(this.eventBusEl_, e, t); else {
                var n = e, r = t;
                ot(n), at(r), st(i), i = $e(this, i), this.off("dispose", i), n.nodeName ? (Qe(n, r, i), Qe(n, "dispose", i)) : nt(n) && (n.off(r, i), n.off("dispose", i))
            }
        }, trigger: function (e, t) {
            return Ve(this.eventBusEl_, e, t)
        }
    };

    function pt(e) {
        var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).eventBusKey;
        if (t) {
            if (!e[t].nodeName) throw new Error('The eventBusKey "' + t + '" does not refer to an element.');
            e.eventBusEl_ = e[t]
        } else e.eventBusEl_ = re("span", {className: "vjs-event-bus"});
        return H(e, ut), e.on("dispose", function () {
            e.off(), r.setTimeout(function () {
                e.eventBusEl_ = null
            }, 0)
        }), e
    }

    var dt = {
        state: {}, setState: function (e) {
            var t = this;
            "function" == typeof e && (e = e());
            var i = void 0;
            return Y(e, function (e, n) {
                t.state[n] !== e && ((i = i || {})[n] = {from: t.state[n], to: e}), t.state[n] = e
            }), i && nt(this) && this.trigger({changes: i, type: "statechanged"}), i
        }
    };

    function ht(e, t) {
        return H(e, dt), e.state = H({}, e.state, t), "function" == typeof e.handleStateChanged && nt(e) && e.on("statechanged", e.handleStateChanged), e
    }

    function ft(e) {
        return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
    }

    function vt() {
        for (var e = {}, t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
        return i.forEach(function (t) {
            t && Y(t, function (t, i) {
                V(t) ? (V(e[i]) || (e[i] = {}), e[i] = vt(e[i], t)) : e[i] = t
            })
        }), e
    }

    var gt = function () {
        function e(t, i, n) {
            if (D(this, e), !t && this.play ? this.player_ = t = this : this.player_ = t, this.options_ = vt({}, this.options_), i = this.options_ = vt(this.options_, i), this.id_ = i.id || i.el && i.el.id, !this.id_) {
                var r = t && t.id && t.id() || "no_player";
                this.id_ = r + "_component_" + Me()
            }
            this.name_ = i.name || null, i.el ? this.el_ = i.el : !1 !== i.createEl && (this.el_ = this.createEl()), !1 !== i.evented && pt(this, {eventBusKey: this.el_ ? "el_" : null}), ht(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== i.initChildren && this.initChildren(), this.ready(n), !1 !== i.reportTouchActivity && this.enableTouchActivity()
        }

        return e.prototype.dispose = function () {
            if (this.trigger({
                    type: "dispose",
                    bubbles: !1
                }), this.children_) for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
            this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), Oe(this.el_), this.el_ = null), this.player_ = null
        }, e.prototype.player = function () {
            return this.player_
        }, e.prototype.options = function (e) {
            return J.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), e ? (this.options_ = vt(this.options_, e), this.options_) : this.options_
        }, e.prototype.el = function () {
            return this.el_
        }, e.prototype.createEl = function (e, t, i) {
            return re(e, t, i)
        }, e.prototype.localize = function (e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                n = this.player_.language && this.player_.language(),
                r = this.player_.languages && this.player_.languages(), o = r && r[n], a = n && n.split("-")[0],
                s = r && r[a], l = i;
            return o && o[e] ? l = o[e] : s && s[e] && (l = s[e]), t && (l = l.replace(/\{(\d+)\}/g, function (e, i) {
                var n = t[i - 1], r = n;
                return void 0 === n && (r = e), r
            })), l
        }, e.prototype.contentEl = function () {
            return this.contentEl_ || this.el_
        }, e.prototype.id = function () {
            return this.id_
        }, e.prototype.name = function () {
            return this.name_
        }, e.prototype.children = function () {
            return this.children_
        }, e.prototype.getChildById = function (e) {
            return this.childIndex_[e]
        }, e.prototype.getChild = function (e) {
            if (e) return e = ft(e), this.childNameIndex_[e]
        }, e.prototype.addChild = function (t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length, r = void 0,
                o = void 0;
            if ("string" == typeof t) {
                o = ft(t);
                var a = i.componentClass || o;
                i.name = o;
                var s = e.getComponent(a);
                if (!s) throw new Error("Component " + a + " does not exist");
                if ("function" != typeof s) return null;
                r = new s(this.player_ || this, i)
            } else r = t;
            if (this.children_.splice(n, 0, r), "function" == typeof r.id && (this.childIndex_[r.id()] = r), (o = o || r.name && ft(r.name())) && (this.childNameIndex_[o] = r), "function" == typeof r.el && r.el()) {
                var l = this.contentEl().children[n] || null;
                this.contentEl().insertBefore(r.el(), l)
            }
            return r
        }, e.prototype.removeChild = function (e) {
            if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
                for (var t = !1, i = this.children_.length - 1; i >= 0; i--) if (this.children_[i] === e) {
                    t = !0, this.children_.splice(i, 1);
                    break
                }
                if (t) {
                    this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null;
                    var n = e.el();
                    n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                }
            }
        }, e.prototype.initChildren = function () {
            var t = this, i = this.options_.children;
            if (i) {
                var n = this.options_, r = void 0, o = e.getComponent("Tech");
                (r = Array.isArray(i) ? i : Object.keys(i)).concat(Object.keys(this.options_).filter(function (e) {
                    return !r.some(function (t) {
                        return "string" == typeof t ? e === t : e === t.name
                    })
                })).map(function (e) {
                    var n = void 0, r = void 0;
                    return "string" == typeof e ? r = i[n = e] || t.options_[n] || {} : (n = e.name, r = e), {
                        name: n,
                        opts: r
                    }
                }).filter(function (t) {
                    var i = e.getComponent(t.opts.componentClass || ft(t.name));
                    return i && !o.isTech(i)
                }).forEach(function (e) {
                    var i = e.name, r = e.opts;
                    if (void 0 !== n[i] && (r = n[i]), !1 !== r) {
                        !0 === r && (r = {}), r.playerOptions = t.options_.playerOptions;
                        var o = t.addChild(i, r);
                        o && (t[i] = o)
                    }
                })
            }
        }, e.prototype.buildCSSClass = function () {
            return ""
        }, e.prototype.ready = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e) return this.isReady_ ? void(t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e))
        }, e.prototype.triggerReady = function () {
            this.isReady_ = !0, this.setTimeout(function () {
                var e = this.readyQueue_;
                this.readyQueue_ = [], e && e.length > 0 && e.forEach(function (e) {
                    e.call(this)
                }, this), this.trigger("ready")
            }, 1)
        }, e.prototype.$ = function (e, t) {
            return Te(e, t || this.contentEl())
        }, e.prototype.$$ = function (e, t) {
            return Ee(e, t || this.contentEl())
        }, e.prototype.hasClass = function (e) {
            return se(this.el_, e)
        }, e.prototype.addClass = function (e) {
            le(this.el_, e)
        }, e.prototype.removeClass = function (e) {
            ce(this.el_, e)
        }, e.prototype.toggleClass = function (e, t) {
            ue(this.el_, e, t)
        }, e.prototype.show = function () {
            this.removeClass("vjs-hidden")
        }, e.prototype.hide = function () {
            this.addClass("vjs-hidden")
        }, e.prototype.lockShowing = function () {
            this.addClass("vjs-lock-showing")
        }, e.prototype.unlockShowing = function () {
            this.removeClass("vjs-lock-showing")
        }, e.prototype.getAttribute = function (e) {
            return he(this.el_, e)
        }, e.prototype.setAttribute = function (e, t) {
            fe(this.el_, e, t)
        }, e.prototype.removeAttribute = function (e) {
            ve(this.el_, e)
        }, e.prototype.width = function (e, t) {
            return this.dimension("width", e, t)
        }, e.prototype.height = function (e, t) {
            return this.dimension("height", e, t)
        }, e.prototype.dimensions = function (e, t) {
            this.width(e, !0), this.height(t)
        }, e.prototype.dimension = function (e, t, i) {
            if (void 0 !== t) return null !== t && t == t || (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", void(i || this.trigger("componentresize"));
            if (!this.el_) return 0;
            var n = this.el_.style[e], r = n.indexOf("px");
            return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + ft(e)], 10)
        }, e.prototype.currentDimension = function (e) {
            var t = 0;
            if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
            if ("function" == typeof r.getComputedStyle) {
                var i = r.getComputedStyle(this.el_);
                t = i.getPropertyValue(e) || i[e]
            }
            if (0 === (t = parseFloat(t))) {
                var n = "offset" + ft(e);
                t = this.el_[n]
            }
            return t
        }, e.prototype.currentDimensions = function () {
            return {width: this.currentDimension("width"), height: this.currentDimension("height")}
        }, e.prototype.currentWidth = function () {
            return this.currentDimension("width")
        }, e.prototype.currentHeight = function () {
            return this.currentDimension("height")
        }, e.prototype.focus = function () {
            this.el_.focus()
        }, e.prototype.blur = function () {
            this.el_.blur()
        }, e.prototype.emitTapEvents = function () {
            var e = 0, t = null, i = void 0;
            this.on("touchstart", function (n) {
                1 === n.touches.length && (t = {
                    pageX: n.touches[0].pageX,
                    pageY: n.touches[0].pageY
                }, e = (new Date).getTime(), i = !0)
            }), this.on("touchmove", function (e) {
                if (e.touches.length > 1) i = !1; else if (t) {
                    var n = e.touches[0].pageX - t.pageX, r = e.touches[0].pageY - t.pageY;
                    Math.sqrt(n * n + r * r) > 10 && (i = !1)
                }
            });
            var n = function () {
                i = !1
            };
            this.on("touchleave", n), this.on("touchcancel", n), this.on("touchend", function (n) {
                (t = null, !0 === i) && ((new Date).getTime() - e < 200 && (n.preventDefault(), this.trigger("tap")))
            })
        }, e.prototype.enableTouchActivity = function () {
            if (this.player() && this.player().reportUserActivity) {
                var e = $e(this.player(), this.player().reportUserActivity), t = void 0;
                this.on("touchstart", function () {
                    e(), this.clearInterval(t), t = this.setInterval(e, 250)
                });
                var i = function (i) {
                    e(), this.clearInterval(t)
                };
                this.on("touchmove", e), this.on("touchend", i), this.on("touchcancel", i)
            }
        }, e.prototype.setTimeout = function (e, t) {
            var i, n, o = this;
            return e = $e(this, e), i = r.setTimeout(function () {
                o.off("dispose", n), e()
            }, t), (n = function () {
                return o.clearTimeout(i)
            }).guid = "vjs-timeout-" + i, this.on("dispose", n), i
        }, e.prototype.clearTimeout = function (e) {
            r.clearTimeout(e);
            var t = function () {
            };
            return t.guid = "vjs-timeout-" + e, this.off("dispose", t), e
        }, e.prototype.setInterval = function (e, t) {
            var i = this;
            e = $e(this, e);
            var n = r.setInterval(e, t), o = function () {
                return i.clearInterval(n)
            };
            return o.guid = "vjs-interval-" + n, this.on("dispose", o), n
        }, e.prototype.clearInterval = function (e) {
            r.clearInterval(e);
            var t = function () {
            };
            return t.guid = "vjs-interval-" + e, this.off("dispose", t), e
        }, e.prototype.requestAnimationFrame = function (e) {
            var t, i, n = this;
            return this.supportsRaf_ ? (e = $e(this, e), t = r.requestAnimationFrame(function () {
                n.off("dispose", i), e()
            }), (i = function () {
                return n.cancelAnimationFrame(t)
            }).guid = "vjs-raf-" + t, this.on("dispose", i), t) : this.setTimeout(e, 1e3 / 60)
        }, e.prototype.cancelAnimationFrame = function (e) {
            if (this.supportsRaf_) {
                r.cancelAnimationFrame(e);
                var t = function () {
                };
                return t.guid = "vjs-raf-" + e, this.off("dispose", t), e
            }
            return this.clearTimeout(e)
        }, e.registerComponent = function (t, i) {
            if ("string" != typeof t || !t) throw new Error('Illegal component name, "' + t + '"; must be a non-empty string.');
            var n = e.getComponent("Tech"), r = n && n.isTech(i), o = e === i || e.prototype.isPrototypeOf(i.prototype);
            if (r || !o) {
                var a = void 0;
                throw a = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + t + '"; ' + a + ".")
            }
            t = ft(t), e.components_ || (e.components_ = {});
            var s = e.getComponent("Player");
            if ("Player" === t && s && s.players) {
                var l = s.players, c = Object.keys(l);
                if (l && c.length > 0 && c.map(function (e) {
                        return l[e]
                    }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
            }
            return e.components_[t] = i, i
        }, e.getComponent = function (t) {
            if (t) return t = ft(t), e.components_ && e.components_[t] ? e.components_[t] : void 0
        }, e
    }();

    function mt(e, t, i, n) {
        return function (e, t, i) {
            if ("number" != typeof t || t < 0 || t > i) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").")
        }(e, n, i.length - 1), i[n][t]
    }

    function At(e) {
        return void 0 === e || 0 === e.length ? {
            length: 0, start: function () {
                throw new Error("This TimeRanges object is empty")
            }, end: function () {
                throw new Error("This TimeRanges object is empty")
            }
        } : {length: e.length, start: mt.bind(null, "start", 0, e), end: mt.bind(null, "end", 1, e)}
    }

    function bt(e, t) {
        return Array.isArray(e) ? At(e) : void 0 === e || void 0 === t ? At() : At([[e, t]])
    }

    function yt(e, t) {
        var i = 0, n = void 0, r = void 0;
        if (!t) return 0;
        e && e.length || (e = bt(0, 0));
        for (var o = 0; o < e.length; o++) n = e.start(o), (r = e.end(o)) > t && (r = t), i += r - n;
        return i / t
    }

    gt.prototype.supportsRaf_ = "function" == typeof r.requestAnimationFrame && "function" == typeof r.cancelAnimationFrame, gt.registerComponent("Component", gt);
    for (var wt = {}, xt = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], _t = xt[0], kt = void 0, jt = 0; jt < xt.length; jt++) if (xt[jt][1] in o) {
        kt = xt[jt];
        break
    }
    if (kt) for (var Ct = 0; Ct < kt.length; Ct++) wt[_t[Ct]] = kt[Ct];

    function Tt(e) {
        if (e instanceof Tt) return e;
        "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : Q(e) && ("number" == typeof e.code && (this.code = e.code), H(this, e)), this.message || (this.message = Tt.defaultMessages[this.code] || "")
    }

    Tt.prototype.code = 0, Tt.prototype.message = "", Tt.prototype.status = null, Tt.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Tt.defaultMessages = {
        1: "You aborted the media playback",
        2: "A network error caused the media download to fail part-way.",
        3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (var Et = 0; Et < Tt.errorTypes.length; Et++) Tt[Tt.errorTypes[Et]] = Et, Tt.prototype[Tt.errorTypes[Et]] = Et;

    function St(e) {
        return void 0 !== e && null !== e && "function" == typeof e.then
    }

    function Bt(e) {
        St(e) && e.then(null, function (e) {
        })
    }

    var Mt = function (e) {
        return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (t, i, n) {
            return e[i] && (t[i] = e[i]), t
        }, {
            cues: e.cues && Array.prototype.map.call(e.cues, function (e) {
                return {startTime: e.startTime, endTime: e.endTime, text: e.text, id: e.id}
            })
        })
    }, zt = function (e) {
        var t = e.$$("track"), i = Array.prototype.map.call(t, function (e) {
            return e.track
        });
        return Array.prototype.map.call(t, function (e) {
            var t = Mt(e.track);
            return e.src && (t.src = e.src), t
        }).concat(Array.prototype.filter.call(e.textTracks(), function (e) {
            return -1 === i.indexOf(e)
        }).map(Mt))
    }, It = function (e, t) {
        return e.forEach(function (e) {
            var i = t.addRemoteTextTrack(e).track;
            !e.src && e.cues && e.cues.forEach(function (e) {
                return i.addCue(e)
            })
        }), t.textTracks()
    }, Pt = "vjs-modal-dialog", Dt = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.opened_ = r.hasBeenOpened_ = r.hasBeenFilled_ = !1, r.closeable(!r.options_.uncloseable), r.content(r.options_.content), r.contentEl_ = re("div", {className: Pt + "-content"}, {role: "document"}), r.descEl_ = re("p", {
                className: Pt + "-description vjs-control-text",
                id: r.el().getAttribute("aria-describedby")
            }), oe(r.descEl_, r.description()), r.el_.appendChild(r.descEl_), r.el_.appendChild(r.contentEl_), r
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass(),
                tabIndex: -1
            }, {
                "aria-describedby": this.id() + "_description",
                "aria-hidden": "true",
                "aria-label": this.label(),
                role: "dialog"
            })
        }, t.prototype.dispose = function () {
            this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, e.prototype.dispose.call(this)
        }, t.prototype.buildCSSClass = function () {
            return Pt + " vjs-hidden " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.handleKeyPress = function (e) {
            27 === e.which && this.closeable() && this.close()
        }, t.prototype.label = function () {
            return this.localize(this.options_.label || "Modal Window")
        }, t.prototype.description = function () {
            var e = this.options_.description || this.localize("This is a modal window.");
            return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
        }, t.prototype.open = function () {
            if (!this.opened_) {
                var e = this.player();
                this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", $e(this, this.handleKeyPress)), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
            }
        }, t.prototype.opened = function (e) {
            return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_
        }, t.prototype.close = function () {
            if (this.opened_) {
                var e = this.player();
                this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", $e(this, this.handleKeyPress)), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
            }
        }, t.prototype.closeable = function (e) {
            if ("boolean" == typeof e) {
                var t = this.closeable_ = !!e, i = this.getChild("closeButton");
                if (t && !i) {
                    var n = this.contentEl_;
                    this.contentEl_ = this.el_, i = this.addChild("closeButton", {controlText: "Close Modal Dialog"}), this.contentEl_ = n, this.on(i, "close", this.close)
                }
                !t && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
            }
            return this.closeable_
        }, t.prototype.fill = function () {
            this.fillWith(this.content())
        }, t.prototype.fillWith = function (e) {
            var t = this.contentEl(), i = t.parentNode, n = t.nextSibling;
            this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(t), this.empty(), je(t, e), this.trigger("modalfill"), n ? i.insertBefore(t, n) : i.appendChild(t);
            var r = this.getChild("closeButton");
            r && i.appendChild(r.el_)
        }, t.prototype.empty = function () {
            this.trigger("beforemodalempty"), xe(this.contentEl()), this.trigger("modalempty")
        }, t.prototype.content = function (e) {
            return void 0 !== e && (this.content_ = e), this.content_
        }, t.prototype.conditionalFocus_ = function () {
            var e = o.activeElement, t = this.player_.el_;
            this.previouslyActiveEl_ = null, (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus(), this.on(o, "keydown", this.handleKeyDown))
        }, t.prototype.conditionalBlur_ = function () {
            this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(o, "keydown", this.handleKeyDown)
        }, t.prototype.handleKeyDown = function (e) {
            if (9 === e.which) {
                for (var t = this.focusableEls_(), i = this.el_.querySelector(":focus"), n = void 0, r = 0; r < t.length; r++) if (i === t[r]) {
                    n = r;
                    break
                }
                o.activeElement === this.el_ && (n = 0), e.shiftKey && 0 === n ? (t[t.length - 1].focus(), e.preventDefault()) : e.shiftKey || n !== t.length - 1 || (t[0].focus(), e.preventDefault())
            }
        }, t.prototype.focusableEls_ = function () {
            var e = this.el_.querySelectorAll("*");
            return Array.prototype.filter.call(e, function (e) {
                return (e instanceof r.HTMLAnchorElement || e instanceof r.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof r.HTMLInputElement || e instanceof r.HTMLSelectElement || e instanceof r.HTMLTextAreaElement || e instanceof r.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof r.HTMLIFrameElement || e instanceof r.HTMLObjectElement || e instanceof r.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable")
            })
        }, t
    }(gt);
    Dt.prototype.options_ = {pauseOnOpen: !0, temporary: !0}, gt.registerComponent("ModalDialog", Dt);
    var Ot = function (e) {
        function t() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            D(this, t);
            var r = N(this, e.call(this));
            if (!n && (n = r, T)) for (var a in n = o.createElement("custom"), t.prototype) "constructor" !== a && (n[a] = t.prototype[a]);
            n.tracks_ = [], Object.defineProperty(n, "length", {
                get: function () {
                    return this.tracks_.length
                }
            });
            for (var s = 0; s < i.length; s++) n.addTrack(i[s]);
            return N(r, n)
        }

        return O(t, e), t.prototype.addTrack = function (e) {
            var t = this.tracks_.length;
            "" + t in this || Object.defineProperty(this, t, {
                get: function () {
                    return this.tracks_[t]
                }
            }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({track: e, type: "addtrack"}))
        }, t.prototype.removeTrack = function (e) {
            for (var t = void 0, i = 0, n = this.length; i < n; i++) if (this[i] === e) {
                (t = this[i]).off && t.off(), this.tracks_.splice(i, 1);
                break
            }
            t && this.trigger({track: t, type: "removetrack"})
        }, t.prototype.getTrackById = function (e) {
            for (var t = null, i = 0, n = this.length; i < n; i++) {
                var r = this[i];
                if (r.id === e) {
                    t = r;
                    break
                }
            }
            return t
        }, t
    }(it);
    for (var Nt in Ot.prototype.allowedEvents_ = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack"
    }, Ot.prototype.allowedEvents_) Ot.prototype["on" + Nt] = null;
    var Lt = function (e, t) {
            for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
        }, Ft = function (e) {
            function t() {
                var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                D(this, t);
                for (var r = void 0, a = n.length - 1; a >= 0; a--) if (n[a].enabled) {
                    Lt(n, n[a]);
                    break
                }
                if (T) {
                    for (var s in r = o.createElement("custom"), Ot.prototype) "constructor" !== s && (r[s] = Ot.prototype[s]);
                    for (var l in t.prototype) "constructor" !== l && (r[l] = t.prototype[l])
                }
                return (r = i = N(this, e.call(this, n, r))).changing_ = !1, N(i, r)
            }

            return O(t, e), t.prototype.addTrack = function (t) {
                var i = this;
                t.enabled && Lt(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && t.addEventListener("enabledchange", function () {
                    i.changing_ || (i.changing_ = !0, Lt(i, t), i.changing_ = !1, i.trigger("change"))
                })
            }, t
        }(Ot), Rt = function (e, t) {
            for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
        }, Yt = function (e) {
            function t() {
                var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                D(this, t);
                for (var r = void 0, a = n.length - 1; a >= 0; a--) if (n[a].selected) {
                    Rt(n, n[a]);
                    break
                }
                if (T) {
                    for (var s in r = o.createElement("custom"), Ot.prototype) "constructor" !== s && (r[s] = Ot.prototype[s]);
                    for (var l in t.prototype) "constructor" !== l && (r[l] = t.prototype[l])
                }
                return (r = i = N(this, e.call(this, n, r))).changing_ = !1, Object.defineProperty(r, "selectedIndex", {
                    get: function () {
                        for (var e = 0; e < this.length; e++) if (this[e].selected) return e;
                        return -1
                    }, set: function () {
                    }
                }), N(i, r)
            }

            return O(t, e), t.prototype.addTrack = function (t) {
                var i = this;
                t.selected && Rt(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && t.addEventListener("selectedchange", function () {
                    i.changing_ || (i.changing_ = !0, Rt(i, t), i.changing_ = !1, i.trigger("change"))
                })
            }, t
        }(Ot), Ht = function (e) {
            function t() {
                var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                D(this, t);
                var r = void 0;
                if (T) {
                    for (var a in r = o.createElement("custom"), Ot.prototype) "constructor" !== a && (r[a] = Ot.prototype[a]);
                    for (var s in t.prototype) "constructor" !== s && (r[s] = t.prototype[s])
                }
                return i = N(this, e.call(this, n, r)), N(i, r = i)
            }

            return O(t, e), t.prototype.addTrack = function (t) {
                e.prototype.addTrack.call(this, t), t.addEventListener("modechange", $e(this, function () {
                    this.trigger("change")
                }));
                -1 === ["metadata", "chapters"].indexOf(t.kind) && t.addEventListener("modechange", $e(this, function () {
                    this.trigger("selectedlanguagechange")
                }))
            }, t
        }(Ot), Qt = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                D(this, e);
                var i = this;
                if (T) for (var n in i = o.createElement("custom"), e.prototype) "constructor" !== n && (i[n] = e.prototype[n]);
                i.trackElements_ = [], Object.defineProperty(i, "length", {
                    get: function () {
                        return this.trackElements_.length
                    }
                });
                for (var r = 0, a = t.length; r < a; r++) i.addTrackElement_(t[r]);
                if (T) return i
            }

            return e.prototype.addTrackElement_ = function (e) {
                var t = this.trackElements_.length;
                "" + t in this || Object.defineProperty(this, t, {
                    get: function () {
                        return this.trackElements_[t]
                    }
                }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
            }, e.prototype.getTrackElementByTrack_ = function (e) {
                for (var t = void 0, i = 0, n = this.trackElements_.length; i < n; i++) if (e === this.trackElements_[i].track) {
                    t = this.trackElements_[i];
                    break
                }
                return t
            }, e.prototype.removeTrackElement_ = function (e) {
                for (var t = 0, i = this.trackElements_.length; t < i; t++) if (e === this.trackElements_[t]) {
                    this.trackElements_.splice(t, 1);
                    break
                }
            }, e
        }(), Vt = function () {
            function e(t) {
                D(this, e);
                var i = this;
                if (T) for (var n in i = o.createElement("custom"), e.prototype) "constructor" !== n && (i[n] = e.prototype[n]);
                if (e.prototype.setCues_.call(i, t), Object.defineProperty(i, "length", {
                        get: function () {
                            return this.length_
                        }
                    }), T) return i
            }

            return e.prototype.setCues_ = function (e) {
                var t = this.length || 0, i = 0, n = e.length;
                this.cues_ = e, this.length_ = e.length;
                var r = function (e) {
                    "" + e in this || Object.defineProperty(this, "" + e, {
                        get: function () {
                            return this.cues_[e]
                        }
                    })
                };
                if (t < n) for (i = t; i < n; i++) r.call(this, i)
            }, e.prototype.getCueById = function (e) {
                for (var t = null, i = 0, n = this.length; i < n; i++) {
                    var r = this[i];
                    if (r.id === e) {
                        t = r;
                        break
                    }
                }
                return t
            }, e
        }(), Gt = {
            alternative: "alternative",
            captions: "captions",
            main: "main",
            sign: "sign",
            subtitles: "subtitles",
            commentary: "commentary"
        }, Ut = {
            alternative: "alternative",
            descriptions: "descriptions",
            main: "main",
            "main-desc": "main-desc",
            translation: "translation",
            commentary: "commentary"
        }, Wt = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata"
        }, Xt = {disabled: "disabled", hidden: "hidden", showing: "showing"}, Jt = function (e) {
            function t() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                D(this, t);
                var n = N(this, e.call(this)), r = n;
                if (T) for (var a in r = o.createElement("custom"), t.prototype) "constructor" !== a && (r[a] = t.prototype[a]);
                var s = {
                    id: i.id || "vjs_track_" + Me(),
                    kind: i.kind || "",
                    label: i.label || "",
                    language: i.language || ""
                }, l = function (e) {
                    Object.defineProperty(r, e, {
                        get: function () {
                            return s[e]
                        }, set: function () {
                        }
                    })
                };
                for (var c in s) l(c);
                return N(n, r)
            }

            return O(t, e), t
        }(it), Zt = function (e) {
            var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], i = o.createElement("a");
            i.href = e;
            var n = "" === i.host && "file:" !== i.protocol, a = void 0;
            n && ((a = o.createElement("div")).innerHTML = '<a href="' + e + '"></a>', i = a.firstChild, a.setAttribute("style", "display:none; position:absolute;"), o.body.appendChild(a));
            for (var s = {}, l = 0; l < t.length; l++) s[t[l]] = i[t[l]];
            return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), s.protocol || (s.protocol = r.location.protocol), n && o.body.removeChild(a), s
        }, qt = function (e) {
            if (!e.match(/^https?:\/\//)) {
                var t = o.createElement("div");
                t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href
            }
            return e
        }, Kt = function (e) {
            if ("string" == typeof e) {
                var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(e);
                if (t) return t.pop().toLowerCase()
            }
            return ""
        }, $t = function (e) {
            var t = r.location, i = Zt(e);
            return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host
        }, ei = (Object.freeze || Object)({parseUrl: Zt, getAbsoluteURL: qt, getFileExtension: Kt, isCrossOrigin: $t}),
        ti = function (e, t) {
            var i = new r.WebVTT.Parser(r, r.vttjs, r.WebVTT.StringDecoder()), n = [];
            i.oncue = function (e) {
                t.addCue(e)
            }, i.onparsingerror = function (e) {
                n.push(e)
            }, i.onflush = function () {
                t.trigger({type: "loadeddata", target: t})
            }, i.parse(e), n.length > 0 && (r.console && r.console.groupCollapsed && r.console.groupCollapsed("Text Track parsing errors for " + t.src), n.forEach(function (e) {
                return J.error(e)
            }), r.console && r.console.groupEnd && r.console.groupEnd()), i.flush()
        }, ii = function (e, t) {
            var i = {uri: e}, n = $t(e);
            n && (i.cors = n), l(i, $e(this, function (e, i, n) {
                if (e) return J.error(e, i);
                if (t.loaded_ = !0, "function" != typeof r.WebVTT) {
                    if (t.tech_) {
                        var o = function () {
                            return ti(n, t)
                        };
                        t.tech_.on("vttjsloaded", o), t.tech_.on("vttjserror", function () {
                            J.error("vttjs failed to load, stopping trying to process " + t.src), t.tech_.off("vttjsloaded", o)
                        })
                    }
                } else ti(n, t)
            }))
        }, ni = function (e) {
            function t() {
                var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (D(this, t), !n.tech) throw new Error("A tech was not provided.");
                var r = vt(n, {kind: Wt[n.kind] || "subtitles", language: n.language || n.srclang || ""}),
                    o = Xt[r.mode] || "disabled", a = r.default;
                "metadata" !== r.kind && "chapters" !== r.kind || (o = "hidden");
                var s = i = N(this, e.call(this, r));
                if (s.tech_ = r.tech, T) for (var l in t.prototype) "constructor" !== l && (s[l] = t.prototype[l]);
                s.cues_ = [], s.activeCues_ = [];
                var c = new Vt(s.cues_), u = new Vt(s.activeCues_), p = !1, d = $e(s, function () {
                    this.activeCues, p && (this.trigger("cuechange"), p = !1)
                });
                return "disabled" !== o && s.tech_.ready(function () {
                    s.tech_.on("timeupdate", d)
                }, !0), Object.defineProperty(s, "default", {
                    get: function () {
                        return a
                    }, set: function () {
                    }
                }), Object.defineProperty(s, "mode", {
                    get: function () {
                        return o
                    }, set: function (e) {
                        var t = this;
                        Xt[e] && ("showing" === (o = e) && this.tech_.ready(function () {
                            t.tech_.on("timeupdate", d)
                        }, !0), this.trigger("modechange"))
                    }
                }), Object.defineProperty(s, "cues", {
                    get: function () {
                        return this.loaded_ ? c : null
                    }, set: function () {
                    }
                }), Object.defineProperty(s, "activeCues", {
                    get: function () {
                        if (!this.loaded_) return null;
                        if (0 === this.cues.length) return u;
                        for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; i < n; i++) {
                            var r = this.cues[i];
                            r.startTime <= e && r.endTime >= e ? t.push(r) : r.startTime === r.endTime && r.startTime <= e && r.startTime + .5 >= e && t.push(r)
                        }
                        if (p = !1, t.length !== this.activeCues_.length) p = !0; else for (var o = 0; o < t.length; o++) -1 === this.activeCues_.indexOf(t[o]) && (p = !0);
                        return this.activeCues_ = t, u.setCues_(this.activeCues_), u
                    }, set: function () {
                    }
                }), r.src ? (s.src = r.src, ii(r.src, s)) : s.loaded_ = !0, N(i, s)
            }

            return O(t, e), t.prototype.addCue = function (e) {
                var t = e;
                if (r.vttjs && !(e instanceof r.vttjs.VTTCue)) {
                    for (var i in t = new r.vttjs.VTTCue(e.startTime, e.endTime, e.text), e) i in t || (t[i] = e[i]);
                    t.id = e.id, t.originalCue_ = e
                }
                for (var n = this.tech_.textTracks(), o = 0; o < n.length; o++) n[o] !== this && n[o].removeCue(t);
                this.cues_.push(t), this.cues.setCues_(this.cues_)
            }, t.prototype.removeCue = function (e) {
                for (var t = this.cues_.length; t--;) {
                    var i = this.cues_[t];
                    if (i === e || i.originalCue_ && i.originalCue_ === e) {
                        this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
                        break
                    }
                }
            }, t
        }(Jt);
    ni.prototype.allowedEvents_ = {cuechange: "cuechange"};
    var ri = function (e) {
        function t() {
            var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            D(this, t);
            var r = vt(n, {kind: Ut[n.kind] || ""}), o = i = N(this, e.call(this, r)), a = !1;
            if (T) for (var s in t.prototype) "constructor" !== s && (o[s] = t.prototype[s]);
            return Object.defineProperty(o, "enabled", {
                get: function () {
                    return a
                }, set: function (e) {
                    "boolean" == typeof e && e !== a && (a = e, this.trigger("enabledchange"))
                }
            }), r.enabled && (o.enabled = r.enabled), o.loaded_ = !0, N(i, o)
        }

        return O(t, e), t
    }(Jt), oi = function (e) {
        function t() {
            var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            D(this, t);
            var r = vt(n, {kind: Gt[n.kind] || ""}), o = i = N(this, e.call(this, r)), a = !1;
            if (T) for (var s in t.prototype) "constructor" !== s && (o[s] = t.prototype[s]);
            return Object.defineProperty(o, "selected", {
                get: function () {
                    return a
                }, set: function (e) {
                    "boolean" == typeof e && e !== a && (a = e, this.trigger("selectedchange"))
                }
            }), r.selected && (o.selected = r.selected), N(i, o)
        }

        return O(t, e), t
    }(Jt), ai = 0, si = 2, li = function (e) {
        function t() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            D(this, t);
            var n = N(this, e.call(this)), r = void 0, a = n;
            if (T) for (var s in a = o.createElement("custom"), t.prototype) "constructor" !== s && (a[s] = t.prototype[s]);
            var l = new ni(i);
            return a.kind = l.kind, a.src = l.src, a.srclang = l.language, a.label = l.label, a.default = l.default, Object.defineProperty(a, "readyState", {
                get: function () {
                    return r
                }
            }), Object.defineProperty(a, "track", {
                get: function () {
                    return l
                }
            }), r = ai, l.addEventListener("loadeddata", function () {
                r = si, a.trigger({type: "load", target: a})
            }), T ? N(n, a) : n
        }

        return O(t, e), t
    }(it);
    li.prototype.allowedEvents_ = {load: "load"}, li.NONE = ai, li.LOADING = 1, li.LOADED = si, li.ERROR = 3;
    var ci = {
        audio: {ListClass: Ft, TrackClass: ri, capitalName: "Audio"},
        video: {ListClass: Yt, TrackClass: oi, capitalName: "Video"},
        text: {ListClass: Ht, TrackClass: ni, capitalName: "Text"}
    };
    Object.keys(ci).forEach(function (e) {
        ci[e].getterName = e + "Tracks", ci[e].privateName = e + "Tracks_"
    });
    var ui = {
        remoteText: {
            ListClass: Ht,
            TrackClass: ni,
            capitalName: "RemoteText",
            getterName: "remoteTextTracks",
            privateName: "remoteTextTracks_"
        },
        remoteTextEl: {
            ListClass: Qt,
            TrackClass: li,
            capitalName: "RemoteTextTrackEls",
            getterName: "remoteTextTrackEls",
            privateName: "remoteTextTrackEls_"
        }
    }, pi = vt(ci, ui);
    ui.names = Object.keys(ui), ci.names = Object.keys(ci), pi.names = [].concat(ui.names).concat(ci.names);
    var di = function (e) {
        function t() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                };
            D(this, t), i.reportTouchActivity = !1;
            var r = N(this, e.call(this, null, i, n));
            return r.hasStarted_ = !1, r.on("playing", function () {
                this.hasStarted_ = !0
            }), r.on("loadstart", function () {
                this.hasStarted_ = !1
            }), pi.names.forEach(function (e) {
                var t = pi[e];
                i && i[t.getterName] && (r[t.privateName] = i[t.getterName])
            }), r.featuresProgressEvents || r.manualProgressOn(), r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (e) {
                !1 === i["native" + e + "Tracks"] && (r["featuresNative" + e + "Tracks"] = !1)
            }), !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? r.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (r.featuresNativeTextTracks = !0), r.featuresNativeTextTracks || r.emulateTextTracks(), r.autoRemoteTextTracks_ = new pi.text.ListClass, r.initTrackListeners(), i.nativeControlsForTouch || r.emitTapEvents(), r.constructor && (r.name_ = r.constructor.name || "Unknown Tech"), r
        }

        return O(t, e), t.prototype.triggerSourceset = function (e) {
            var t = this;
            this.isReady_ || this.one("ready", function () {
                return t.setTimeout(function () {
                    return t.triggerSourceset(e)
                }, 1)
            }), this.trigger({src: e, type: "sourceset"})
        }, t.prototype.manualProgressOn = function () {
            this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
        }, t.prototype.manualProgressOff = function () {
            this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
        }, t.prototype.trackProgress = function (e) {
            this.stopTrackingProgress(), this.progressInterval = this.setInterval($e(this, function () {
                var e = this.bufferedPercent();
                this.bufferedPercent_ !== e && this.trigger("progress"), this.bufferedPercent_ = e, 1 === e && this.stopTrackingProgress()
            }), 500)
        }, t.prototype.onDurationChange = function (e) {
            this.duration_ = this.duration()
        }, t.prototype.buffered = function () {
            return bt(0, 0)
        }, t.prototype.bufferedPercent = function () {
            return yt(this.buffered(), this.duration_)
        }, t.prototype.stopTrackingProgress = function () {
            this.clearInterval(this.progressInterval)
        }, t.prototype.manualTimeUpdatesOn = function () {
            this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
        }, t.prototype.manualTimeUpdatesOff = function () {
            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
        }, t.prototype.trackCurrentTime = function () {
            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
            }, 250)
        }, t.prototype.stopTrackingCurrentTime = function () {
            this.clearInterval(this.currentTimeInterval), this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }, t.prototype.dispose = function () {
            this.clearTracks(ci.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), e.prototype.dispose.call(this)
        }, t.prototype.clearTracks = function (e) {
            var t = this;
            (e = [].concat(e)).forEach(function (e) {
                for (var i = t[e + "Tracks"]() || [], n = i.length; n--;) {
                    var r = i[n];
                    "text" === e && t.removeRemoteTextTrack(r), i.removeTrack(r)
                }
            })
        }, t.prototype.cleanupAutoTextTracks = function () {
            for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) {
                var i = e[t];
                this.removeRemoteTextTrack(i)
            }
        }, t.prototype.reset = function () {
        }, t.prototype.error = function (e) {
            return void 0 !== e && (this.error_ = new Tt(e), this.trigger("error")), this.error_
        }, t.prototype.played = function () {
            return this.hasStarted_ ? bt(0, 0) : bt()
        }, t.prototype.setCurrentTime = function () {
            this.manualTimeUpdates && this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
        }, t.prototype.initTrackListeners = function () {
            var e = this;
            ci.names.forEach(function (t) {
                var i = ci[t], n = function () {
                    e.trigger(t + "trackchange")
                }, r = e[i.getterName]();
                r.addEventListener("removetrack", n), r.addEventListener("addtrack", n), e.on("dispose", function () {
                    r.removeEventListener("removetrack", n), r.removeEventListener("addtrack", n)
                })
            })
        }, t.prototype.addWebVttScript_ = function () {
            var e = this;
            if (!r.WebVTT) if (o.body.contains(this.el())) {
                if (!this.options_["vtt.js"] && V(c) && Object.keys(c).length > 0) return void this.trigger("vttjsloaded");
                var t = o.createElement("script");
                t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js", t.onload = function () {
                    e.trigger("vttjsloaded")
                }, t.onerror = function () {
                    e.trigger("vttjserror")
                }, this.on("dispose", function () {
                    t.onload = null, t.onerror = null
                }), r.WebVTT = !0, this.el().parentNode.appendChild(t)
            } else this.ready(this.addWebVttScript_)
        }, t.prototype.emulateTextTracks = function () {
            var e = this, t = this.textTracks(), i = this.remoteTextTracks(), n = function (e) {
                return t.addTrack(e.track)
            }, r = function (e) {
                return t.removeTrack(e.track)
            };
            i.on("addtrack", n), i.on("removetrack", r), this.addWebVttScript_();
            var o = function () {
                return e.trigger("texttrackchange")
            }, a = function () {
                o();
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    i.removeEventListener("cuechange", o), "showing" === i.mode && i.addEventListener("cuechange", o)
                }
            };
            a(), t.addEventListener("change", a), t.addEventListener("addtrack", a), t.addEventListener("removetrack", a), this.on("dispose", function () {
                i.off("addtrack", n), i.off("removetrack", r), t.removeEventListener("change", a), t.removeEventListener("addtrack", a), t.removeEventListener("removetrack", a);
                for (var e = 0; e < t.length; e++) {
                    t[e].removeEventListener("cuechange", o)
                }
            })
        }, t.prototype.addTextTrack = function (e, t, i) {
            if (!e) throw new Error("TextTrack kind is required but was not provided");
            return function (e, t, i, n) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, o = e.textTracks();
                r.kind = t, i && (r.label = i), n && (r.language = n), r.tech = e;
                var a = new pi.text.TrackClass(r);
                return o.addTrack(a), a
            }(this, e, t, i)
        }, t.prototype.createRemoteTextTrack = function (e) {
            var t = vt(e, {tech: this});
            return new ui.remoteTextEl.TrackClass(t)
        }, t.prototype.addRemoteTextTrack = function () {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments[1],
                n = this.createRemoteTextTrack(t);
            return !0 !== i && !1 !== i && (J.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), i = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), !0 !== i && this.ready(function () {
                return e.autoRemoteTextTracks_.addTrack(n.track)
            }), n
        }, t.prototype.removeRemoteTextTrack = function (e) {
            var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
            this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e)
        }, t.prototype.getVideoPlaybackQuality = function () {
            return {}
        }, t.prototype.setPoster = function () {
        }, t.prototype.playsinline = function () {
        }, t.prototype.setPlaysinline = function () {
        }, t.prototype.canPlayType = function () {
            return ""
        }, t.canPlayType = function () {
            return ""
        }, t.canPlaySource = function (e, i) {
            return t.canPlayType(e.type)
        }, t.isTech = function (e) {
            return e.prototype instanceof t || e instanceof t || e === t
        }, t.registerTech = function (e, i) {
            if (t.techs_ || (t.techs_ = {}), !t.isTech(i)) throw new Error("Tech " + e + " must be a Tech");
            if (!t.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
            if (!t.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
            return e = ft(e), t.techs_[e] = i, "Tech" !== e && t.defaultTechOrder_.push(e), i
        }, t.getTech = function (e) {
            if (e) return e = ft(e), t.techs_ && t.techs_[e] ? t.techs_[e] : r && r.videojs && r.videojs[e] ? (J.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), r.videojs[e]) : void 0
        }, t
    }(gt);
    pi.names.forEach(function (e) {
        var t = pi[e];
        di.prototype[t.getterName] = function () {
            return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]
        }
    }), di.prototype.featuresVolumeControl = !0, di.prototype.featuresMuteControl = !0, di.prototype.featuresFullscreenResize = !1, di.prototype.featuresPlaybackRate = !1, di.prototype.featuresProgressEvents = !1, di.prototype.featuresSourceset = !1, di.prototype.featuresTimeupdateEvents = !1, di.prototype.featuresNativeTextTracks = !1, di.withSourceHandlers = function (e) {
        e.registerSourceHandler = function (t, i) {
            var n = e.sourceHandlers;
            n || (n = e.sourceHandlers = []), void 0 === i && (i = n.length), n.splice(i, 0, t)
        }, e.canPlayType = function (t) {
            for (var i = e.sourceHandlers || [], n = void 0, r = 0; r < i.length; r++) if (n = i[r].canPlayType(t)) return n;
            return ""
        }, e.selectSourceHandler = function (t, i) {
            for (var n = e.sourceHandlers || [], r = 0; r < n.length; r++) if (n[r].canHandleSource(t, i)) return n[r];
            return null
        }, e.canPlaySource = function (t, i) {
            var n = e.selectSourceHandler(t, i);
            return n ? n.canHandleSource(t, i) : ""
        };
        ["seekable", "seeking", "duration"].forEach(function (e) {
            var t = this[e];
            "function" == typeof t && (this[e] = function () {
                return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
            })
        }, e.prototype), e.prototype.setSource = function (t) {
            var i = e.selectSourceHandler(t, this.options_);
            i || (e.nativeSourceHandler ? i = e.nativeSourceHandler : J.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), i !== e.nativeSourceHandler && (this.currentSource_ = t), this.sourceHandler_ = i.handleSource(t, this, this.options_), this.on("dispose", this.disposeSourceHandler)
        }, e.prototype.disposeSourceHandler = function () {
            this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
        }
    }, gt.registerComponent("Tech", di), di.registerTech("Tech", di), di.defaultTechOrder_ = [];
    var hi = {}, fi = {}, vi = {};

    function gi(e, t, i) {
        e.setTimeout(function () {
            return function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                var n = arguments[2];
                var r = arguments[3];
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                var a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                var s = i[0], l = i.slice(1);
                if ("string" == typeof s) e(t, hi[s], n, r, o, a); else if (s) {
                    var c = function (e, t) {
                        var i = fi[e.id()], n = null;
                        if (void 0 === i || null === i) return n = t(e), fi[e.id()] = [[t, n]], n;
                        for (var r = 0; r < i.length; r++) {
                            var o = i[r], a = o[0], s = o[1];
                            a === t && (n = s)
                        }
                        null === n && (n = t(e), i.push([t, n]));
                        return n
                    }(r, s);
                    if (!c.setSource) return o.push(c), e(t, l, n, r, o, a);
                    c.setSource(H({}, t), function (i, s) {
                        if (i) return e(t, l, n, r, o, a);
                        o.push(c), e(s, t.type === s.type ? l : hi[s.type], n, r, o, a)
                    })
                } else l.length ? e(t, l, n, r, o, a) : a ? n(t, o) : e(t, hi["*"], n, r, o, !0)
            }(t, hi[t.type], i, e)
        }, 1)
    }

    function mi(e, t, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = "call" + ft(i),
            o = e.reduce(wi(r), n), a = o === vi, s = a ? null : t[i](o);
        return function (e, t, i, n) {
            for (var r = e.length - 1; r >= 0; r--) {
                var o = e[r];
                o[t] && o[t](n, i)
            }
        }(e, i, s, a), s
    }

    var Ai = {buffered: 1, currentTime: 1, duration: 1, seekable: 1, played: 1, paused: 1}, bi = {setCurrentTime: 1},
        yi = {play: 1, pause: 1};

    function wi(e) {
        return function (t, i) {
            return t === vi ? vi : i[e] ? i[e](t) : t
        }
    }

    var xi = {
        opus: "video/ogg",
        ogv: "video/ogg",
        mp4: "video/mp4",
        mov: "video/mp4",
        m4v: "video/mp4",
        mkv: "video/x-matroska",
        mp3: "audio/mpeg",
        aac: "audio/aac",
        oga: "audio/ogg",
        m3u8: "application/x-mpegURL"
    }, _i = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = Kt(e);
        return xi[t.toLowerCase()] || ""
    };

    function ki(e) {
        var t = _i(e.src);
        return !e.type && t && (e.type = t), e
    }

    var ji = function (e) {
        function t(i, n, r) {
            D(this, t);
            var o = vt({createEl: !1}, n), a = N(this, e.call(this, i, o, r));
            if (n.playerOptions.sources && 0 !== n.playerOptions.sources.length) i.src(n.playerOptions.sources); else for (var s = 0, l = n.playerOptions.techOrder; s < l.length; s++) {
                var c = ft(l[s]), u = di.getTech(c);
                if (c || (u = gt.getComponent(c)), u && u.isSupported()) {
                    i.loadTech_(c);
                    break
                }
            }
            return a
        }

        return O(t, e), t
    }(gt);
    gt.registerComponent("MediaLoader", ji);
    var Ci = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.emitTapEvents(), r.enable(), r
        }

        return O(t, e), t.prototype.createEl = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            i = H({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass(),
                tabIndex: 0
            }, i), "button" === t && J.error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."), n = H({role: "button"}, n), this.tabIndex_ = i.tabIndex;
            var r = e.prototype.createEl.call(this, t, i, n);
            return this.createControlTextEl(r), r
        }, t.prototype.dispose = function () {
            this.controlTextEl_ = null, e.prototype.dispose.call(this)
        }, t.prototype.createControlTextEl = function (e) {
            return this.controlTextEl_ = re("span", {className: "vjs-control-text"}, {"aria-live": "polite"}), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
        }, t.prototype.controlText = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
            if (void 0 === e) return this.controlText_ || "Need Text";
            var i = this.localize(e);
            this.controlText_ = e, oe(this.controlTextEl_, i), this.nonIconControl || t.setAttribute("title", i)
        }, t.prototype.buildCSSClass = function () {
            return "vjs-control vjs-button " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.enable = function () {
            this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
        }, t.prototype.disable = function () {
            this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
        }, t.prototype.handleClick = function (e) {
        }, t.prototype.handleFocus = function (e) {
            He(o, "keydown", $e(this, this.handleKeyPress))
        }, t.prototype.handleKeyPress = function (t) {
            32 === t.which || 13 === t.which ? (t.preventDefault(), this.trigger("click")) : e.prototype.handleKeyPress && e.prototype.handleKeyPress.call(this, t)
        }, t.prototype.handleBlur = function (e) {
            Qe(o, "keydown", $e(this, this.handleKeyPress))
        }, t
    }(gt);
    gt.registerComponent("ClickableComponent", Ci);
    var Ti = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.update(), i.on("posterchange", $e(r, r.update)), r
        }

        return O(t, e), t.prototype.dispose = function () {
            this.player().off("posterchange", this.update), e.prototype.dispose.call(this)
        }, t.prototype.createEl = function () {
            var e = re("div", {className: "vjs-poster", tabIndex: -1});
            return z || (this.fallbackImg_ = re("img"), e.appendChild(this.fallbackImg_)), e
        }, t.prototype.update = function (e) {
            var t = this.player().poster();
            this.setSrc(t), t ? this.show() : this.hide()
        }, t.prototype.setSrc = function (e) {
            if (this.fallbackImg_) this.fallbackImg_.src = e; else {
                var t = "";
                e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t
            }
        }, t.prototype.handleClick = function (e) {
            this.player_.controls() && (this.player_.paused() ? Bt(this.player_.play()) : this.player_.pause())
        }, t
    }(Ci);
    gt.registerComponent("PosterImage", Ti);
    var Ei = {
        monospace: "monospace",
        sansSerif: "sans-serif",
        serif: "serif",
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: "sans-serif",
        proportionalSerif: "serif",
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };

    function Si(e, t) {
        var i = void 0;
        if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]; else {
            if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
            i = e.slice(1)
        }
        return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
    }

    function Bi(e, t, i) {
        try {
            e.style[t] = i
        } catch (e) {
            return
        }
    }

    var Mi = function (e) {
        function t(i, n, r) {
            D(this, t);
            var o = N(this, e.call(this, i, n, r));
            return i.on("loadstart", $e(o, o.toggleDisplay)), i.on("texttrackchange", $e(o, o.updateDisplay)), i.on("loadstart", $e(o, o.preselectTrack)), i.ready($e(o, function () {
                if (i.tech_ && i.tech_.featuresNativeTextTracks) this.hide(); else {
                    i.on("fullscreenchange", $e(this, this.updateDisplay));
                    for (var e = this.options_.playerOptions.tracks || [], t = 0; t < e.length; t++) this.player_.addRemoteTextTrack(e[t], !0);
                    this.preselectTrack()
                }
            })), o
        }

        return O(t, e), t.prototype.preselectTrack = function () {
            for (var e = {
                captions: 1,
                subtitles: 1
            }, t = this.player_.textTracks(), i = this.player_.cache_.selectedLanguage, n = void 0, r = void 0, o = void 0, a = 0; a < t.length; a++) {
                var s = t[a];
                i && i.enabled && i.language === s.language ? s.kind === i.kind ? o = s : o || (o = s) : i && !i.enabled ? (o = null, n = null, r = null) : s.default && ("descriptions" !== s.kind || n ? s.kind in e && !r && (r = s) : n = s)
            }
            o ? o.mode = "showing" : r ? r.mode = "showing" : n && (n.mode = "showing")
        }, t.prototype.toggleDisplay = function () {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
        }, t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {className: "vjs-text-track-display"}, {
                "aria-live": "off",
                "aria-atomic": "true"
            })
        }, t.prototype.clearDisplay = function () {
            "function" == typeof r.WebVTT && r.WebVTT.processCues(r, [], this.el_)
        }, t.prototype.updateDisplay = function () {
            var e = this.player_.textTracks();
            this.clearDisplay();
            for (var t = null, i = null, n = e.length; n--;) {
                var r = e[n];
                "showing" === r.mode && ("descriptions" === r.kind ? t = r : i = r)
            }
            i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(i)) : t && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(t))
        }, t.prototype.updateForTrack = function (e) {
            if ("function" == typeof r.WebVTT && e.activeCues) {
                for (var t = [], i = 0; i < e.activeCues.length; i++) t.push(e.activeCues[i]);
                if (r.WebVTT.processCues(r, t, this.el_), this.player_.textTrackSettings) for (var n = this.player_.textTrackSettings.getValues(), o = t.length; o--;) {
                    var a = t[o];
                    if (a) {
                        var s = a.displayState;
                        if (n.color && (s.firstChild.style.color = n.color), n.textOpacity && Bi(s.firstChild, "color", Si(n.color || "#fff", n.textOpacity)), n.backgroundColor && (s.firstChild.style.backgroundColor = n.backgroundColor), n.backgroundOpacity && Bi(s.firstChild, "backgroundColor", Si(n.backgroundColor || "#000", n.backgroundOpacity)), n.windowColor && (n.windowOpacity ? Bi(s, "backgroundColor", Si(n.windowColor, n.windowOpacity)) : s.style.backgroundColor = n.windowColor), n.edgeStyle && ("dropshadow" === n.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === n.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === n.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === n.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), n.fontPercent && 1 !== n.fontPercent) {
                            var l = r.parseFloat(s.style.fontSize);
                            s.style.fontSize = l * n.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                        }
                        n.fontFamily && "default" !== n.fontFamily && ("small-caps" === n.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = Ei[n.fontFamily])
                    }
                }
            }
        }, t
    }(gt);
    gt.registerComponent("TextTrackDisplay", Mi);
    var zi = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.createEl = function () {
            var t = this.player_.isAudio(), i = this.localize(t ? "Audio Player" : "Video Player"),
                n = re("span", {className: "vjs-control-text", innerHTML: this.localize("{1} is loading.", [i])}),
                r = e.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner", dir: "ltr"});
            return r.appendChild(n), r
        }, t
    }(gt);
    gt.registerComponent("LoadingSpinner", zi);
    var Ii = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.createEl = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            t = H({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass()
            }, t), i = H({type: "button"}, i);
            var n = gt.prototype.createEl.call(this, "button", t, i);
            return this.createControlTextEl(n), n
        }, t.prototype.addChild = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = this.constructor.name;
            return J.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), gt.prototype.addChild.call(this, e, t)
        }, t.prototype.enable = function () {
            e.prototype.enable.call(this), this.el_.removeAttribute("disabled")
        }, t.prototype.disable = function () {
            e.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
        }, t.prototype.handleKeyPress = function (t) {
            32 !== t.which && 13 !== t.which && e.prototype.handleKeyPress.call(this, t)
        }, t
    }(Ci);
    gt.registerComponent("Button", Ii);
    var Pi = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.mouseused_ = !1, r.on("mousedown", r.handleMouseDown), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-big-play-button"
        }, t.prototype.handleClick = function (e) {
            var t = this.player_.play();
            if (this.mouseused_ && e.clientX && e.clientY) Bt(t); else {
                var i = this.player_.getChild("controlBar"), n = i && i.getChild("playToggle");
                if (n) {
                    var r = function () {
                        return n.focus()
                    };
                    St(t) ? t.then(r, function () {
                    }) : this.setTimeout(r, 1)
                } else this.player_.focus()
            }
        }, t.prototype.handleKeyPress = function (t) {
            this.mouseused_ = !1, e.prototype.handleKeyPress.call(this, t)
        }, t.prototype.handleMouseDown = function (e) {
            this.mouseused_ = !0
        }, t
    }(Ii);
    Pi.prototype.controlText_ = "Play Video", gt.registerComponent("BigPlayButton", Pi);
    var Di = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.controlText(n && n.controlText || r.localize("Close")), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-close-button " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.handleClick = function (e) {
            this.trigger({type: "close", bubbles: !1})
        }, t
    }(Ii);
    gt.registerComponent("CloseButton", Di);
    var Oi = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.on(i, "play", r.handlePlay), r.on(i, "pause", r.handlePause), r.on(i, "ended", r.handleEnded), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-play-control " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.handleClick = function (e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, t.prototype.handleSeeked = function (e) {
            this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
        }, t.prototype.handlePlay = function (e) {
            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
        }, t.prototype.handlePause = function (e) {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
        }, t.prototype.handleEnded = function (e) {
            this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
        }, t
    }(Ii);
    Oi.prototype.controlText_ = "Play", gt.registerComponent("PlayToggle", Oi);
    var Ni = function (e, t) {
        e = e < 0 ? 0 : e;
        var i = Math.floor(e % 60), n = Math.floor(e / 60 % 60), r = Math.floor(e / 3600), o = Math.floor(t / 60 % 60),
            a = Math.floor(t / 3600);
        return (isNaN(e) || e === 1 / 0) && (r = n = i = "-"), (r = r > 0 || a > 0 ? r + ":" : "") + (n = ((r || o >= 10) && n < 10 ? "0" + n : n) + ":") + (i = i < 10 ? "0" + i : i)
    }, Li = Ni;
    var Fi = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
        return Li(e, t)
    }, Ri = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.throttledUpdateContent = et($e(r, r.updateContent), 25), r.on(i, "timeupdate", r.throttledUpdateContent), r
        }

        return O(t, e), t.prototype.createEl = function (t) {
            var i = this.buildCSSClass(), n = e.prototype.createEl.call(this, "div", {
                className: i + " vjs-time-control vjs-control",
                innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + " </span>"
            });
            return this.contentEl_ = re("span", {className: i + "-display"}, {"aria-live": "off"}), this.updateTextNode_(), n.appendChild(this.contentEl_), n
        }, t.prototype.dispose = function () {
            this.contentEl_ = null, this.textNode_ = null, e.prototype.dispose.call(this)
        }, t.prototype.updateTextNode_ = function () {
            if (this.contentEl_) {
                for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
                this.textNode_ = o.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
            }
        }, t.prototype.formatTime_ = function (e) {
            return Fi(e)
        }, t.prototype.updateFormattedTime_ = function (e) {
            var t = this.formatTime_(e);
            t !== this.formattedTime_ && (this.formattedTime_ = t, this.requestAnimationFrame(this.updateTextNode_))
        }, t.prototype.updateContent = function (e) {
        }, t
    }(gt);
    Ri.prototype.labelText_ = "Time", Ri.prototype.controlText_ = "Time", gt.registerComponent("TimeDisplay", Ri);
    var Yi = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.on(i, "ended", r.handleEnded), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-current-time"
        }, t.prototype.updateContent = function (e) {
            var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.updateFormattedTime_(t)
        }, t.prototype.handleEnded = function (e) {
            this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
        }, t
    }(Ri);
    Yi.prototype.labelText_ = "Current Time", Yi.prototype.controlText_ = "Current Time", gt.registerComponent("CurrentTimeDisplay", Yi);
    var Hi = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.on(i, "durationchange", r.updateContent), r.on(i, "loadedmetadata", r.throttledUpdateContent), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-duration"
        }, t.prototype.updateContent = function (e) {
            var t = this.player_.duration();
            t && this.duration_ !== t && (this.duration_ = t, this.updateFormattedTime_(t))
        }, t
    }(Ri);
    Hi.prototype.labelText_ = "Duration", Hi.prototype.controlText_ = "Duration", gt.registerComponent("DurationDisplay", Hi);
    var Qi = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }, t
    }(gt);
    gt.registerComponent("TimeDivider", Qi);
    var Vi = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.on(i, "durationchange", r.throttledUpdateContent), r.on(i, "ended", r.handleEnded), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-remaining-time"
        }, t.prototype.formatTime_ = function (t) {
            return "-" + e.prototype.formatTime_.call(this, t)
        }, t.prototype.updateContent = function (e) {
            this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
        }, t.prototype.handleEnded = function (e) {
            this.player_.duration() && this.updateFormattedTime_(0)
        }, t
    }(Ri);
    Vi.prototype.labelText_ = "Remaining Time", Vi.prototype.controlText_ = "Remaining Time", gt.registerComponent("RemainingTimeDisplay", Vi);
    var Gi = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.updateShowing(), r.on(r.player(), "durationchange", r.updateShowing), r
        }

        return O(t, e), t.prototype.createEl = function () {
            var t = e.prototype.createEl.call(this, "div", {className: "vjs-live-control vjs-control"});
            return this.contentEl_ = re("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
            }, {"aria-live": "off"}), t.appendChild(this.contentEl_), t
        }, t.prototype.dispose = function () {
            this.contentEl_ = null, e.prototype.dispose.call(this)
        }, t.prototype.updateShowing = function (e) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
        }, t
    }(gt);
    gt.registerComponent("LiveDisplay", Gi);
    var Ui = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.bar = r.getChild(r.options_.barName), r.vertical(!!r.options_.vertical), r.enable(), r
        }

        return O(t, e), t.prototype.enabled = function () {
            return this.enabled_
        }, t.prototype.enable = function () {
            this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
        }, t.prototype.disable = function () {
            if (this.enabled()) {
                var e = this.bar.el_.ownerDocument;
                this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
            }
        }, t.prototype.createEl = function (t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return i.className = i.className + " vjs-slider", i = H({tabIndex: 0}, i), n = H({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, n), e.prototype.createEl.call(this, t, i, n)
        }, t.prototype.handleMouseDown = function (e) {
            var t = this.bar.el_.ownerDocument;
            "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || j || e.preventDefault(), ge(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e)
        }, t.prototype.handleMouseMove = function (e) {
        }, t.prototype.handleMouseUp = function () {
            var e = this.bar.el_.ownerDocument;
            me(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update()
        }, t.prototype.update = function () {
            if (this.el_) {
                var e = this.getPercent(), t = this.bar;
                if (t) {
                    ("number" != typeof e || e != e || e < 0 || e === 1 / 0) && (e = 0);
                    var i = (100 * e).toFixed(2) + "%", n = t.el().style;
                    return this.vertical() ? n.height = i : n.width = i, e
                }
            }
        }, t.prototype.calculateDistance = function (e) {
            var t = ye(this.el_, e);
            return this.vertical() ? t.y : t.x
        }, t.prototype.handleFocus = function () {
            this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }, t.prototype.handleKeyPress = function (e) {
            37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepBack()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepForward())
        }, t.prototype.handleBlur = function () {
            this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }, t.prototype.handleClick = function (e) {
            e.stopImmediatePropagation(), e.preventDefault()
        }, t.prototype.vertical = function (e) {
            if (void 0 === e) return this.vertical_ || !1;
            this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
        }, t
    }(gt);
    gt.registerComponent("Slider", Ui);
    var Wi = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.partEls_ = [], r.on(i, "progress", r.update), r
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
            })
        }, t.prototype.dispose = function () {
            this.partEls_ = null, e.prototype.dispose.call(this)
        }, t.prototype.update = function (e) {
            var t = this.player_.buffered(), i = this.player_.duration(), n = this.player_.bufferedEnd(),
                r = this.partEls_, o = function (e, t) {
                    var i = e / t || 0;
                    return 100 * (i >= 1 ? 1 : i) + "%"
                };
            this.el_.style.width = o(n, i);
            for (var a = 0; a < t.length; a++) {
                var s = t.start(a), l = t.end(a), c = r[a];
                c || (c = this.el_.appendChild(re()), r[a] = c), c.style.left = o(s, n), c.style.width = o(l - s, n)
            }
            for (var u = r.length; u > t.length; u--) this.el_.removeChild(r[u - 1]);
            r.length = t.length
        }, t
    }(gt);
    gt.registerComponent("LoadProgressBar", Wi);
    var Xi = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {className: "vjs-time-tooltip"})
        }, t.prototype.update = function (e, t, i) {
            var n = Ae(this.el_), r = Ae(this.player_.el()), o = e.width * t;
            if (r && n) {
                var a = e.left - r.left + o, s = e.width - o + (r.right - e.right), l = n.width / 2;
                a < l ? l += l - a : s < l && (l = s), l < 0 ? l = 0 : l > n.width && (l = n.width), this.el_.style.right = "-" + l + "px", oe(this.el_, i)
            }
        }, t
    }(gt);
    gt.registerComponent("TimeTooltip", Xi);
    var Ji = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
            })
        }, t.prototype.update = function (e, t) {
            var i = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                var n = i.player_.scrubbing() ? i.player_.getCache().currentTime : i.player_.currentTime(),
                    r = Fi(n, i.player_.duration()), o = i.getChild("timeTooltip");
                o && o.update(e, t, r)
            })
        }, t
    }(gt);
    Ji.prototype.options_ = {children: []}, E && !(E > 8) || m || b || Ji.prototype.options_.children.push("timeTooltip"), gt.registerComponent("PlayProgressBar", Ji);
    var Zi = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.update = et($e(r, r.update), 25), r
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {className: "vjs-mouse-display"})
        }, t.prototype.update = function (e, t) {
            var i = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                var n = i.player_.duration(), r = Fi(t * n, n);
                i.el_.style.left = e.width * t + "px", i.getChild("timeTooltip").update(e, t, r)
            })
        }, t
    }(gt);
    Zi.prototype.options_ = {children: ["timeTooltip"]}, gt.registerComponent("MouseTimeDisplay", Zi);
    var qi = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.setEventHandlers_(), r
        }

        return O(t, e), t.prototype.setEventHandlers_ = function () {
            var e = this;
            this.update = et($e(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.updateInterval = null, this.on(this.player_, ["playing"], function () {
                e.clearInterval(e.updateInterval), e.updateInterval = e.setInterval(function () {
                    e.requestAnimationFrame(function () {
                        e.update()
                    })
                }, 30)
            }), this.on(this.player_, ["ended", "pause", "waiting"], function () {
                e.clearInterval(e.updateInterval)
            }), this.on(this.player_, ["timeupdate", "ended"], this.update)
        }, t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {className: "vjs-progress-holder"}, {"aria-label": this.localize("Progress Bar")})
        }, t.prototype.update_ = function (e, t) {
            var i = this.player_.duration();
            this.el_.setAttribute("aria-valuenow", (100 * t).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Fi(e, i), Fi(i, i)], "{1} of {2}")), this.bar.update(Ae(this.el_), t)
        }, t.prototype.update = function (t) {
            var i = e.prototype.update.call(this);
            return this.update_(this.getCurrentTime_(), i), i
        }, t.prototype.getCurrentTime_ = function () {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
        }, t.prototype.handleEnded = function (e) {
            this.update_(this.player_.duration(), 1)
        }, t.prototype.getPercent = function () {
            var e = this.getCurrentTime_() / this.player_.duration();
            return e >= 1 ? 1 : e
        }, t.prototype.handleMouseDown = function (t) {
            Ce(t) && (t.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), e.prototype.handleMouseDown.call(this, t))
        }, t.prototype.handleMouseMove = function (e) {
            if (Ce(e)) {
                var t = this.calculateDistance(e) * this.player_.duration();
                t === this.player_.duration() && (t -= .1), this.player_.currentTime(t)
            }
        }, t.prototype.enable = function () {
            e.prototype.enable.call(this);
            var t = this.getChild("mouseTimeDisplay");
            t && t.show()
        }, t.prototype.disable = function () {
            e.prototype.disable.call(this);
            var t = this.getChild("mouseTimeDisplay");
            t && t.hide()
        }, t.prototype.handleMouseUp = function (t) {
            e.prototype.handleMouseUp.call(this, t), t && t.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }), this.videoWasPlaying && Bt(this.player_.play())
        }, t.prototype.stepForward = function () {
            this.player_.currentTime(this.player_.currentTime() + 5)
        }, t.prototype.stepBack = function () {
            this.player_.currentTime(this.player_.currentTime() - 5)
        }, t.prototype.handleAction = function (e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, t.prototype.handleKeyPress = function (t) {
            32 === t.which || 13 === t.which ? (t.preventDefault(), this.handleAction(t)) : e.prototype.handleKeyPress && e.prototype.handleKeyPress.call(this, t)
        }, t
    }(Ui);
    qi.prototype.options_ = {
        children: ["loadProgressBar", "playProgressBar"],
        barName: "playProgressBar"
    }, E && !(E > 8) || m || b || qi.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), qi.prototype.playerEvent = "timeupdate", gt.registerComponent("SeekBar", qi);
    var Ki = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.handleMouseMove = et($e(r, r.handleMouseMove), 25), r.throttledHandleMouseSeek = et($e(r, r.handleMouseSeek), 25), r.enable(), r
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
        }, t.prototype.handleMouseMove = function (e) {
            var t = this.getChild("seekBar");
            if (t) {
                var i = t.getChild("mouseTimeDisplay"), n = t.el(), r = Ae(n), o = ye(n, e).x;
                o > 1 ? o = 1 : o < 0 && (o = 0), i && i.update(r, o)
            }
        }, t.prototype.handleMouseSeek = function (e) {
            var t = this.getChild("seekBar");
            t && t.handleMouseMove(e)
        }, t.prototype.enabled = function () {
            return this.enabled_
        }, t.prototype.disable = function () {
            this.children().forEach(function (e) {
                return e.disable && e.disable()
            }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
        }, t.prototype.enable = function () {
            this.children().forEach(function (e) {
                return e.enable && e.enable()
            }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
        }, t.prototype.handleMouseDown = function (e) {
            var t = this.el_.ownerDocument, i = this.getChild("seekBar");
            i && i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
        }, t.prototype.handleMouseUp = function (e) {
            var t = this.el_.ownerDocument, i = this.getChild("seekBar");
            i && i.handleMouseUp(e), this.off(t, "mousemove", this.throttledHandleMouseSeek), this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
        }, t
    }(gt);
    Ki.prototype.options_ = {children: ["seekBar"]}, gt.registerComponent("ProgressControl", Ki);
    var $i = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.on(i, "fullscreenchange", r.handleFullscreenChange), !1 === o[wt.fullscreenEnabled] && r.disable(), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-fullscreen-control " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.handleFullscreenChange = function (e) {
            this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
        }, t.prototype.handleClick = function (e) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
        }, t
    }(Ii);
    $i.prototype.controlText_ = "Fullscreen", gt.registerComponent("FullscreenToggle", $i);
    var en = function (e, t) {
        t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function () {
            t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
        })
    }, tn = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }, t
    }(gt);
    gt.registerComponent("VolumeLevel", tn);
    var nn = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.on("slideractive", r.updateLastVolume_), r.on(i, "volumechange", r.updateARIAAttributes), i.ready(function () {
                return r.updateARIAAttributes()
            }), r
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {className: "vjs-volume-bar vjs-slider-bar"}, {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            })
        }, t.prototype.handleMouseDown = function (t) {
            Ce(t) && e.prototype.handleMouseDown.call(this, t)
        }, t.prototype.handleMouseMove = function (e) {
            Ce(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
        }, t.prototype.checkMuted = function () {
            this.player_.muted() && this.player_.muted(!1)
        }, t.prototype.getPercent = function () {
            return this.player_.muted() ? 0 : this.player_.volume()
        }, t.prototype.stepForward = function () {
            this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
        }, t.prototype.stepBack = function () {
            this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
        }, t.prototype.updateARIAAttributes = function (e) {
            var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
        }, t.prototype.volumeAsPercentage_ = function () {
            return Math.round(100 * this.player_.volume())
        }, t.prototype.updateLastVolume_ = function () {
            var e = this, t = this.player_.volume();
            this.one("sliderinactive", function () {
                0 === e.player_.volume() && e.player_.lastVolume_(t)
            })
        }, t
    }(Ui);
    nn.prototype.options_ = {
        children: ["volumeLevel"],
        barName: "volumeLevel"
    }, nn.prototype.playerEvent = "volumechange", gt.registerComponent("VolumeBar", nn);
    var rn = function (e) {
        function t(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D(this, t), n.vertical = n.vertical || !1, (void 0 === n.volumeBar || V(n.volumeBar)) && (n.volumeBar = n.volumeBar || {}, n.volumeBar.vertical = n.vertical);
            var r = N(this, e.call(this, i, n));
            return en(r, i), r.throttledHandleMouseMove = et($e(r, r.handleMouseMove), 25), r.on("mousedown", r.handleMouseDown), r.on("touchstart", r.handleMouseDown), r.on(r.volumeBar, ["focus", "slideractive"], function () {
                r.volumeBar.addClass("vjs-slider-active"), r.addClass("vjs-slider-active"), r.trigger("slideractive")
            }), r.on(r.volumeBar, ["blur", "sliderinactive"], function () {
                r.volumeBar.removeClass("vjs-slider-active"), r.removeClass("vjs-slider-active"), r.trigger("sliderinactive")
            }), r
        }

        return O(t, e), t.prototype.createEl = function () {
            var t = "vjs-volume-horizontal";
            return this.options_.vertical && (t = "vjs-volume-vertical"), e.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control " + t})
        }, t.prototype.handleMouseDown = function (e) {
            var t = this.el_.ownerDocument;
            this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
        }, t.prototype.handleMouseUp = function (e) {
            var t = this.el_.ownerDocument;
            this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
        }, t.prototype.handleMouseMove = function (e) {
            this.volumeBar.handleMouseMove(e)
        }, t
    }(gt);
    rn.prototype.options_ = {children: ["volumeBar"]}, gt.registerComponent("VolumeControl", rn);
    var on = function (e, t) {
        t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function () {
            t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
        })
    }, an = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return on(r, i), r.on(i, ["loadstart", "volumechange"], r.update), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-mute-control " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.handleClick = function (e) {
            var t = this.player_.volume(), i = this.player_.lastVolume_();
            if (0 === t) {
                var n = i < .1 ? .1 : i;
                this.player_.volume(n), this.player_.muted(!1)
            } else this.player_.muted(!this.player_.muted())
        }, t.prototype.update = function (e) {
            this.updateIcon_(), this.updateControlText_()
        }, t.prototype.updateIcon_ = function () {
            var e = this.player_.volume(), t = 3;
            m && this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
            for (var i = 0; i < 4; i++) ce(this.el_, "vjs-vol-" + i);
            le(this.el_, "vjs-vol-" + t)
        }, t.prototype.updateControlText_ = function () {
            var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
            this.controlText() !== e && this.controlText(e)
        }, t
    }(Ii);
    an.prototype.controlText_ = "Mute", gt.registerComponent("MuteToggle", an);
    var sn = function (e) {
        function t(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D(this, t), void 0 !== n.inline ? n.inline = n.inline : n.inline = !0, (void 0 === n.volumeControl || V(n.volumeControl)) && (n.volumeControl = n.volumeControl || {}, n.volumeControl.vertical = !n.inline);
            var r = N(this, e.call(this, i, n));
            return r.on(i, ["loadstart"], r.volumePanelState_), r.on(r.volumeControl, ["slideractive"], r.sliderActive_), r.on(r.volumeControl, ["sliderinactive"], r.sliderInactive_), r
        }

        return O(t, e), t.prototype.sliderActive_ = function () {
            this.addClass("vjs-slider-active")
        }, t.prototype.sliderInactive_ = function () {
            this.removeClass("vjs-slider-active")
        }, t.prototype.volumePanelState_ = function () {
            this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
        }, t.prototype.createEl = function () {
            var t = "vjs-volume-panel-horizontal";
            return this.options_.inline || (t = "vjs-volume-panel-vertical"), e.prototype.createEl.call(this, "div", {className: "vjs-volume-panel vjs-control " + t})
        }, t
    }(gt);
    sn.prototype.options_ = {children: ["muteToggle", "volumeControl"]}, gt.registerComponent("VolumePanel", sn);
    var ln = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return n && (r.menuButton_ = n.menuButton), r.focusedChild_ = -1, r.on("keydown", r.handleKeyPress), r
        }

        return O(t, e), t.prototype.addItem = function (e) {
            this.addChild(e), e.on("click", $e(this, function (t) {
                this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== e.name() && this.menuButton_.focus())
            }))
        }, t.prototype.createEl = function () {
            var t = this.options_.contentElType || "ul";
            this.contentEl_ = re(t, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu");
            var i = e.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
            return i.appendChild(this.contentEl_), He(i, "click", function (e) {
                e.preventDefault(), e.stopImmediatePropagation()
            }), i
        }, t.prototype.dispose = function () {
            this.contentEl_ = null, e.prototype.dispose.call(this)
        }, t.prototype.handleKeyPress = function (e) {
            37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepForward()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepBack())
        }, t.prototype.stepForward = function () {
            var e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
        }, t.prototype.stepBack = function () {
            var e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
        }, t.prototype.focus = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = this.children().slice();
            t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(), t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), this.focusedChild_ = e, t[e].el_.focus())
        }, t
    }(gt);
    gt.registerComponent("Menu", ln);
    var cn = function (e) {
        function t(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D(this, t);
            var r = N(this, e.call(this, i, n));
            r.menuButton_ = new Ii(i, n), r.menuButton_.controlText(r.controlText_), r.menuButton_.el_.setAttribute("aria-haspopup", "true");
            var o = Ii.prototype.buildCSSClass();
            return r.menuButton_.el_.className = r.buildCSSClass() + " " + o, r.menuButton_.removeClass("vjs-control"), r.addChild(r.menuButton_), r.update(), r.enabled_ = !0, r.on(r.menuButton_, "tap", r.handleClick), r.on(r.menuButton_, "click", r.handleClick), r.on(r.menuButton_, "focus", r.handleFocus), r.on(r.menuButton_, "blur", r.handleBlur), r.on("keydown", r.handleSubmenuKeyPress), r
        }

        return O(t, e), t.prototype.update = function () {
            var e = this.createMenu();
            this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
        }, t.prototype.createMenu = function () {
            var e = new ln(this.player_, {menuButton: this});
            if (this.hideThreshold_ = 0, this.options_.title) {
                var t = re("li", {className: "vjs-menu-title", innerHTML: ft(this.options_.title), tabIndex: -1});
                this.hideThreshold_ += 1, e.children_.unshift(t), ae(t, e.contentEl())
            }
            if (this.items = this.createItems(), this.items) for (var i = 0; i < this.items.length; i++) e.addItem(this.items[i]);
            return e
        }, t.prototype.createItems = function () {
        }, t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {className: this.buildWrapperCSSClass()}, {})
        }, t.prototype.buildWrapperCSSClass = function () {
            var t = "vjs-menu-button";
            return !0 === this.options_.inline ? t += "-inline" : t += "-popup", "vjs-menu-button " + t + " " + Ii.prototype.buildCSSClass() + " " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.buildCSSClass = function () {
            var t = "vjs-menu-button";
            return !0 === this.options_.inline ? t += "-inline" : t += "-popup", "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.controlText = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
            return this.menuButton_.controlText(e, t)
        }, t.prototype.handleClick = function (e) {
            this.one(this.menu.contentEl(), "mouseleave", $e(this, function (e) {
                this.unpressButton(), this.el_.blur()
            })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        }, t.prototype.focus = function () {
            this.menuButton_.focus()
        }, t.prototype.blur = function () {
            this.menuButton_.blur()
        }, t.prototype.handleFocus = function () {
            He(o, "keydown", $e(this, this.handleKeyPress))
        }, t.prototype.handleBlur = function () {
            Qe(o, "keydown", $e(this, this.handleKeyPress))
        }, t.prototype.handleKeyPress = function (e) {
            27 === e.which || 9 === e.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus())) : 38 !== e.which && 40 !== e.which || this.buttonPressed_ || (this.pressButton(), e.preventDefault())
        }, t.prototype.handleSubmenuKeyPress = function (e) {
            27 !== e.which && 9 !== e.which || (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus()))
        }, t.prototype.pressButton = function () {
            if (this.enabled_) {
                if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), m && ie()) return;
                this.menu.focus()
            }
        }, t.prototype.unpressButton = function () {
            this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
        }, t.prototype.disable = function () {
            this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
        }, t.prototype.enable = function () {
            this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
        }, t
    }(gt);
    gt.registerComponent("MenuButton", cn);
    var un = function (e) {
        function t(i, n) {
            D(this, t);
            var r = n.tracks, o = N(this, e.call(this, i, n));
            if (o.items.length <= 1 && o.hide(), !r) return N(o);
            var a = $e(o, o.update);
            return r.addEventListener("removetrack", a), r.addEventListener("addtrack", a), o.player_.on("ready", a), o.player_.on("dispose", function () {
                r.removeEventListener("removetrack", a), r.removeEventListener("addtrack", a)
            }), o
        }

        return O(t, e), t
    }(cn);
    gt.registerComponent("TrackButton", un);
    var pn = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.selectable = n.selectable, r.isSelected_ = n.selected || !1, r.multiSelectable = n.multiSelectable, r.selected(r.isSelected_), r.selectable ? r.multiSelectable ? r.el_.setAttribute("role", "menuitemcheckbox") : r.el_.setAttribute("role", "menuitemradio") : r.el_.setAttribute("role", "menuitem"), r
        }

        return O(t, e), t.prototype.createEl = function (t, i, n) {
            return this.nonIconControl = !0, e.prototype.createEl.call(this, "li", H({
                className: "vjs-menu-item",
                innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                tabIndex: -1
            }, i), n)
        }, t.prototype.handleClick = function (e) {
            this.selected(!0)
        }, t.prototype.selected = function (e) {
            this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
        }, t
    }(Ci);
    gt.registerComponent("MenuItem", pn);
    var dn = function (e) {
        function t(i, n) {
            D(this, t);
            var a = n.track, s = i.textTracks();
            n.label = a.label || a.language || "Unknown", n.selected = "showing" === a.mode;
            var l = N(this, e.call(this, i, n));
            l.track = a;
            var c = function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                l.handleTracksChange.apply(l, t)
            }, u = function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                l.handleSelectedLanguageChange.apply(l, t)
            };
            if (i.on(["loadstart", "texttrackchange"], c), s.addEventListener("change", c), s.addEventListener("selectedlanguagechange", u), l.on("dispose", function () {
                    i.off(["loadstart", "texttrackchange"], c), s.removeEventListener("change", c), s.removeEventListener("selectedlanguagechange", u)
                }), void 0 === s.onchange) {
                var p = void 0;
                l.on(["tap", "click"], function () {
                    if ("object" !== P(r.Event)) try {
                        p = new r.Event("change")
                    } catch (e) {
                    }
                    p || (p = o.createEvent("Event")).initEvent("change", !0, !0), s.dispatchEvent(p)
                })
            }
            return l.handleTracksChange(), l
        }

        return O(t, e), t.prototype.handleClick = function (t) {
            var i = this.track.kind, n = this.track.kinds, r = this.player_.textTracks();
            if (n || (n = [i]), e.prototype.handleClick.call(this, t), r) for (var o = 0; o < r.length; o++) {
                var a = r[o];
                a === this.track && n.indexOf(a.kind) > -1 ? "showing" !== a.mode && (a.mode = "showing") : "disabled" !== a.mode && (a.mode = "disabled")
            }
        }, t.prototype.handleTracksChange = function (e) {
            var t = "showing" === this.track.mode;
            t !== this.isSelected_ && this.selected(t)
        }, t.prototype.handleSelectedLanguageChange = function (e) {
            if ("showing" === this.track.mode) {
                var t = this.player_.cache_.selectedLanguage;
                if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
                this.player_.cache_.selectedLanguage = {
                    enabled: !0,
                    language: this.track.language,
                    kind: this.track.kind
                }
            }
        }, t.prototype.dispose = function () {
            this.track = null, e.prototype.dispose.call(this)
        }, t
    }(pn);
    gt.registerComponent("TextTrackMenuItem", dn);
    var hn = function (e) {
        function t(i, n) {
            return D(this, t), n.track = {
                player: i,
                kind: n.kind,
                kinds: n.kinds,
                default: !1,
                mode: "disabled"
            }, n.kinds || (n.kinds = [n.kind]), n.label ? n.track.label = n.label : n.track.label = n.kinds.join(" and ") + " off", n.selectable = !0, n.multiSelectable = !1, N(this, e.call(this, i, n))
        }

        return O(t, e), t.prototype.handleTracksChange = function (e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                if (this.options_.kinds.indexOf(o.kind) > -1 && "showing" === o.mode) {
                    i = !1;
                    break
                }
            }
            i !== this.isSelected_ && this.selected(i)
        }, t.prototype.handleSelectedLanguageChange = function (e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                if (["captions", "descriptions", "subtitles"].indexOf(o.kind) > -1 && "showing" === o.mode) {
                    i = !1;
                    break
                }
            }
            i && (this.player_.cache_.selectedLanguage = {enabled: !1})
        }, t
    }(dn);
    gt.registerComponent("OffTextTrackMenuItem", hn);
    var fn = function (e) {
        function t(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return D(this, t), n.tracks = i.textTracks(), N(this, e.call(this, i, n))
        }

        return O(t, e), t.prototype.createItems = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dn, i = void 0;
            this.label_ && (i = this.label_ + " off"), e.push(new hn(this.player_, {
                kinds: this.kinds_,
                kind: this.kind_,
                label: i
            })), this.hideThreshold_ += 1;
            var n = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                if (this.kinds_.indexOf(o.kind) > -1) {
                    var a = new t(this.player_, {track: o, selectable: !0, multiSelectable: !1});
                    a.addClass("vjs-" + o.kind + "-menu-item"), e.push(a)
                }
            }
            return e
        }, t
    }(un);
    gt.registerComponent("TextTrackButton", fn);
    var vn = function (e) {
        function t(i, n) {
            D(this, t);
            var r = n.track, o = n.cue, a = i.currentTime();
            n.selectable = !0, n.multiSelectable = !1, n.label = o.text, n.selected = o.startTime <= a && a < o.endTime;
            var s = N(this, e.call(this, i, n));
            return s.track = r, s.cue = o, r.addEventListener("cuechange", $e(s, s.update)), s
        }

        return O(t, e), t.prototype.handleClick = function (t) {
            e.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
        }, t.prototype.update = function (e) {
            var t = this.cue, i = this.player_.currentTime();
            this.selected(t.startTime <= i && i < t.endTime)
        }, t
    }(pn);
    gt.registerComponent("ChaptersTrackMenuItem", vn);
    var gn = function (e) {
        function t(i, n, r) {
            return D(this, t), N(this, e.call(this, i, n, r))
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-chapters-button " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.buildWrapperCSSClass = function () {
            return "vjs-chapters-button " + e.prototype.buildWrapperCSSClass.call(this)
        }, t.prototype.update = function (t) {
            this.track_ && (!t || "addtrack" !== t.type && "removetrack" !== t.type) || this.setTrack(this.findChaptersTrack()), e.prototype.update.call(this)
        }, t.prototype.setTrack = function (e) {
            if (this.track_ !== e) {
                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                    var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    t && t.removeEventListener("load", this.updateHandler_), this.track_ = null
                }
                if (this.track_ = e, this.track_) {
                    this.track_.mode = "hidden";
                    var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    i && i.addEventListener("load", this.updateHandler_)
                }
            }
        }, t.prototype.findChaptersTrack = function () {
            for (var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) {
                var i = e[t];
                if (i.kind === this.kind_) return i
            }
        }, t.prototype.getMenuCaption = function () {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(ft(this.kind_))
        }, t.prototype.createMenu = function () {
            return this.options_.title = this.getMenuCaption(), e.prototype.createMenu.call(this)
        }, t.prototype.createItems = function () {
            var e = [];
            if (!this.track_) return e;
            var t = this.track_.cues;
            if (!t) return e;
            for (var i = 0, n = t.length; i < n; i++) {
                var r = t[i], o = new vn(this.player_, {track: this.track_, cue: r});
                e.push(o)
            }
            return e
        }, t
    }(fn);
    gn.prototype.kind_ = "chapters", gn.prototype.controlText_ = "Chapters", gt.registerComponent("ChaptersButton", gn);
    var mn = function (e) {
        function t(i, n, r) {
            D(this, t);
            var o = N(this, e.call(this, i, n, r)), a = i.textTracks(), s = $e(o, o.handleTracksChange);
            return a.addEventListener("change", s), o.on("dispose", function () {
                a.removeEventListener("change", s)
            }), o
        }

        return O(t, e), t.prototype.handleTracksChange = function (e) {
            for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                if (o.kind !== this.kind_ && "showing" === o.mode) {
                    i = !0;
                    break
                }
            }
            i ? this.disable() : this.enable()
        }, t.prototype.buildCSSClass = function () {
            return "vjs-descriptions-button " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.buildWrapperCSSClass = function () {
            return "vjs-descriptions-button " + e.prototype.buildWrapperCSSClass.call(this)
        }, t
    }(fn);
    mn.prototype.kind_ = "descriptions", mn.prototype.controlText_ = "Descriptions", gt.registerComponent("DescriptionsButton", mn);
    var An = function (e) {
        function t(i, n, r) {
            return D(this, t), N(this, e.call(this, i, n, r))
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-subtitles-button " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.buildWrapperCSSClass = function () {
            return "vjs-subtitles-button " + e.prototype.buildWrapperCSSClass.call(this)
        }, t
    }(fn);
    An.prototype.kind_ = "subtitles", An.prototype.controlText_ = "Subtitles", gt.registerComponent("SubtitlesButton", An);
    var bn = function (e) {
        function t(i, n) {
            D(this, t), n.track = {
                player: i,
                kind: n.kind,
                label: n.kind + " settings",
                selectable: !1,
                default: !1,
                mode: "disabled"
            }, n.selectable = !1, n.name = "CaptionSettingsMenuItem";
            var r = N(this, e.call(this, i, n));
            return r.addClass("vjs-texttrack-settings"), r.controlText(", opens " + n.kind + " settings dialog"), r
        }

        return O(t, e), t.prototype.handleClick = function (e) {
            this.player().getChild("textTrackSettings").open()
        }, t
    }(dn);
    gt.registerComponent("CaptionSettingsMenuItem", bn);
    var yn = function (e) {
        function t(i, n, r) {
            return D(this, t), N(this, e.call(this, i, n, r))
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-captions-button " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.buildWrapperCSSClass = function () {
            return "vjs-captions-button " + e.prototype.buildWrapperCSSClass.call(this)
        }, t.prototype.createItems = function () {
            var t = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new bn(this.player_, {kind: this.kind_})), this.hideThreshold_ += 1), e.prototype.createItems.call(this, t)
        }, t
    }(fn);
    yn.prototype.kind_ = "captions", yn.prototype.controlText_ = "Captions", gt.registerComponent("CaptionsButton", yn);
    var wn = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.createEl = function (t, i, n) {
            var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "captions" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), r += "</span>", e.prototype.createEl.call(this, t, H({innerHTML: r}, i), n)
        }, t
    }(dn);
    gt.registerComponent("SubsCapsMenuItem", wn);
    var xn = function (e) {
        function t(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(r.player_.language_) > -1 && (r.label_ = "captions"), r.menuButton_.controlText(ft(r.label_)), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-subs-caps-button " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.buildWrapperCSSClass = function () {
            return "vjs-subs-caps-button " + e.prototype.buildWrapperCSSClass.call(this)
        }, t.prototype.createItems = function () {
            var t = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new bn(this.player_, {kind: this.label_})), this.hideThreshold_ += 1), t = e.prototype.createItems.call(this, t, wn)
        }, t
    }(fn);
    xn.prototype.kinds_ = ["captions", "subtitles"], xn.prototype.controlText_ = "Subtitles", gt.registerComponent("SubsCapsButton", xn);
    var _n = function (e) {
        function t(i, n) {
            D(this, t);
            var r = n.track, o = i.audioTracks();
            n.label = r.label || r.language || "Unknown", n.selected = r.enabled;
            var a = N(this, e.call(this, i, n));
            a.track = r, a.addClass("vjs-" + r.kind + "-menu-item");
            var s = function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                a.handleTracksChange.apply(a, t)
            };
            return o.addEventListener("change", s), a.on("dispose", function () {
                o.removeEventListener("change", s)
            }), a
        }

        return O(t, e), t.prototype.createEl = function (t, i, n) {
            var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "main-desc" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), r += "</span>", e.prototype.createEl.call(this, t, H({innerHTML: r}, i), n)
        }, t.prototype.handleClick = function (t) {
            var i = this.player_.audioTracks();
            e.prototype.handleClick.call(this, t);
            for (var n = 0; n < i.length; n++) {
                var r = i[n];
                r.enabled = r === this.track
            }
        }, t.prototype.handleTracksChange = function (e) {
            this.selected(this.track.enabled)
        }, t
    }(pn);
    gt.registerComponent("AudioTrackMenuItem", _n);
    var kn = function (e) {
        function t(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return D(this, t), n.tracks = i.audioTracks(), N(this, e.call(this, i, n))
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-audio-button " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.buildWrapperCSSClass = function () {
            return "vjs-audio-button " + e.prototype.buildWrapperCSSClass.call(this)
        }, t.prototype.createItems = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.hideThreshold_ = 1;
            for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
                var n = t[i];
                e.push(new _n(this.player_, {track: n, selectable: !0, multiSelectable: !1}))
            }
            return e
        }, t
    }(un);
    kn.prototype.controlText_ = "Audio Track", gt.registerComponent("AudioTrackButton", kn);
    var jn = function (e) {
        function t(i, n) {
            D(this, t);
            var r = n.rate, o = parseFloat(r, 10);
            n.label = r, n.selected = 1 === o, n.selectable = !0, n.multiSelectable = !1;
            var a = N(this, e.call(this, i, n));
            return a.label = r, a.rate = o, a.on(i, "ratechange", a.update), a
        }

        return O(t, e), t.prototype.handleClick = function (t) {
            e.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
        }, t.prototype.update = function (e) {
            this.selected(this.player().playbackRate() === this.rate)
        }, t
    }(pn);
    jn.prototype.contentElType = "button", gt.registerComponent("PlaybackRateMenuItem", jn);
    var Cn = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.updateVisibility(), r.updateLabel(), r.on(i, "loadstart", r.updateVisibility), r.on(i, "ratechange", r.updateLabel), r
        }

        return O(t, e), t.prototype.createEl = function () {
            var t = e.prototype.createEl.call(this);
            return this.labelEl_ = re("div", {
                className: "vjs-playback-rate-value",
                innerHTML: "1x"
            }), t.appendChild(this.labelEl_), t
        }, t.prototype.dispose = function () {
            this.labelEl_ = null, e.prototype.dispose.call(this)
        }, t.prototype.buildCSSClass = function () {
            return "vjs-playback-rate " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.buildWrapperCSSClass = function () {
            return "vjs-playback-rate " + e.prototype.buildWrapperCSSClass.call(this)
        }, t.prototype.createMenu = function () {
            var e = new ln(this.player()), t = this.playbackRates();
            if (t) for (var i = t.length - 1; i >= 0; i--) e.addChild(new jn(this.player(), {rate: t[i] + "x"}));
            return e
        }, t.prototype.updateARIAAttributes = function () {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        }, t.prototype.handleClick = function (e) {
            for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++) if (i[r] > t) {
                n = i[r];
                break
            }
            this.player().playbackRate(n)
        }, t.prototype.playbackRates = function () {
            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
        }, t.prototype.playbackRateSupported = function () {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
        }, t.prototype.updateVisibility = function (e) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }, t.prototype.updateLabel = function (e) {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        }, t
    }(cn);
    Cn.prototype.controlText_ = "Playback Rate", gt.registerComponent("PlaybackRateMenuButton", Cn);
    var Tn = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
        }, t
    }(gt);
    gt.registerComponent("Spacer", Tn);
    var En = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-custom-control-spacer " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.createEl = function () {
            var t = e.prototype.createEl.call(this, {className: this.buildCSSClass()});
            return t.innerHTML = " ", t
        }, t
    }(Tn);
    gt.registerComponent("CustomControlSpacer", En);
    var Sn = function (e) {
        function t() {
            return D(this, t), N(this, e.apply(this, arguments))
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "div", {className: "vjs-control-bar", dir: "ltr"})
        }, t
    }(gt);
    Sn.prototype.options_ = {children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]}, gt.registerComponent("ControlBar", Sn);
    var Bn = function (e) {
        function t(i, n) {
            D(this, t);
            var r = N(this, e.call(this, i, n));
            return r.on(i, "error", r.open), r
        }

        return O(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-error-display " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.content = function () {
            var e = this.player().error();
            return e ? this.localize(e.message) : ""
        }, t
    }(Dt);
    Bn.prototype.options_ = vt(Dt.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }), gt.registerComponent("ErrorDisplay", Bn);
    var Mn = ["#000", "Black"], zn = ["#00F", "Blue"], In = ["#0FF", "Cyan"], Pn = ["#0F0", "Green"],
        Dn = ["#F0F", "Magenta"], On = ["#F00", "Red"], Nn = ["#FFF", "White"], Ln = ["#FF0", "Yellow"],
        Fn = ["1", "Opaque"], Rn = ["0.5", "Semi-Transparent"], Yn = ["0", "Transparent"], Hn = {
            backgroundColor: {
                selector: ".vjs-bg-color > select",
                id: "captions-background-color-%s",
                label: "Color",
                options: [Mn, Nn, On, Pn, zn, Ln, Dn, In]
            },
            backgroundOpacity: {
                selector: ".vjs-bg-opacity > select",
                id: "captions-background-opacity-%s",
                label: "Transparency",
                options: [Fn, Rn, Yn]
            },
            color: {
                selector: ".vjs-fg-color > select",
                id: "captions-foreground-color-%s",
                label: "Color",
                options: [Nn, Mn, On, Pn, zn, Ln, Dn, In]
            },
            edgeStyle: {
                selector: ".vjs-edge-style > select",
                id: "%s",
                label: "Text Edge Style",
                options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
            },
            fontFamily: {
                selector: ".vjs-font-family > select",
                id: "captions-font-family-%s",
                label: "Font Family",
                options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
            },
            fontPercent: {
                selector: ".vjs-font-percent > select",
                id: "captions-font-size-%s",
                label: "Font Size",
                options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
                default: 2,
                parser: function (e) {
                    return "1.00" === e ? null : Number(e)
                }
            },
            textOpacity: {
                selector: ".vjs-text-opacity > select",
                id: "captions-foreground-opacity-%s",
                label: "Transparency",
                options: [Fn, Rn]
            },
            windowColor: {selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color"},
            windowOpacity: {
                selector: ".vjs-window-opacity > select",
                id: "captions-window-opacity-%s",
                label: "Transparency",
                options: [Yn, Rn, Fn]
            }
        };

    function Qn(e, t) {
        if (t && (e = t(e)), e && "none" !== e) return e
    }

    Hn.windowColor.options = Hn.backgroundColor.options;
    var Vn = function (e) {
        function t(i, n) {
            D(this, t), n.temporary = !1;
            var r = N(this, e.call(this, i, n));
            return r.updateDisplay = $e(r, r.updateDisplay), r.fill(), r.hasBeenOpened_ = r.hasBeenFilled_ = !0, r.endDialog = re("p", {
                className: "vjs-control-text",
                textContent: r.localize("End of dialog window.")
            }), r.el().appendChild(r.endDialog), r.setDefaults(), void 0 === n.persistTextTrackSettings && (r.options_.persistTextTrackSettings = r.options_.playerOptions.persistTextTrackSettings), r.on(r.$(".vjs-done-button"), "click", function () {
                r.saveSettings(), r.close()
            }), r.on(r.$(".vjs-default-button"), "click", function () {
                r.setDefaults(), r.updateDisplay()
            }), Y(Hn, function (e) {
                r.on(r.$(e.selector), "change", r.updateDisplay)
            }), r.options_.persistTextTrackSettings && r.restoreSettings(), r
        }

        return O(t, e), t.prototype.dispose = function () {
            this.endDialog = null, e.prototype.dispose.call(this)
        }, t.prototype.createElSelect_ = function (e) {
            var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label", r = Hn[e],
                o = r.id.replace("%s", this.id_), a = [i, o].join(" ").trim();
            return ["<" + n + ' id="' + o + '" class="' + ("label" === n ? "vjs-label" : "") + '">', this.localize(r.label), "</" + n + ">", '<select aria-labelledby="' + a + '">'].concat(r.options.map(function (e) {
                var i = o + "-" + e[1].replace(/\W+/g, "");
                return ['<option id="' + i + '" value="' + e[0] + '" ', 'aria-labelledby="' + a + " " + i + '">', t.localize(e[1]), "</option>"].join("")
            })).concat("</select>").join("")
        }, t.prototype.createElFgColor_ = function () {
            var e = "captions-text-legend-" + this.id_;
            return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
        }, t.prototype.createElBgColor_ = function () {
            var e = "captions-background-" + this.id_;
            return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
        }, t.prototype.createElWinColor_ = function () {
            var e = "captions-window-" + this.id_;
            return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
        }, t.prototype.createElColors_ = function () {
            return re("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            })
        }, t.prototype.createElFont_ = function () {
            return re("div", {
                className: "vjs-track-settings-font",
                innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            })
        }, t.prototype.createElControls_ = function () {
            var e = this.localize("restore all settings to the default values");
            return re("div", {
                className: "vjs-track-settings-controls",
                innerHTML: ['<button class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
            })
        }, t.prototype.content = function () {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
        }, t.prototype.label = function () {
            return this.localize("Caption Settings Dialog")
        }, t.prototype.description = function () {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
        }, t.prototype.buildCSSClass = function () {
            return e.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
        }, t.prototype.getValues = function () {
            var e = this;
            return function (e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return R(e).reduce(function (i, n) {
                    return t(i, e[n], n)
                }, i)
            }(Hn, function (t, i, n) {
                var r = function (e, t) {
                    return Qn(e.options[e.options.selectedIndex].value, t)
                }(e.$(i.selector), i.parser);
                return void 0 !== r && (t[n] = r), t
            }, {})
        }, t.prototype.setValues = function (e) {
            var t = this;
            Y(Hn, function (i, n) {
                !function (e, t, i) {
                    if (t) for (var n = 0; n < e.options.length; n++) if (Qn(e.options[n].value, i) === t) {
                        e.selectedIndex = n;
                        break
                    }
                }(t.$(i.selector), e[n], i.parser)
            })
        }, t.prototype.setDefaults = function () {
            var e = this;
            Y(Hn, function (t) {
                var i = t.hasOwnProperty("default") ? t.default : 0;
                e.$(t.selector).selectedIndex = i
            })
        }, t.prototype.restoreSettings = function () {
            var e = void 0;
            try {
                e = JSON.parse(r.localStorage.getItem("vjs-text-track-settings"))
            } catch (e) {
                J.warn(e)
            }
            e && this.setValues(e)
        }, t.prototype.saveSettings = function () {
            if (this.options_.persistTextTrackSettings) {
                var e = this.getValues();
                try {
                    Object.keys(e).length ? r.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e)) : r.localStorage.removeItem("vjs-text-track-settings")
                } catch (e) {
                    J.warn(e)
                }
            }
        }, t.prototype.updateDisplay = function () {
            var e = this.player_.getChild("textTrackDisplay");
            e && e.updateDisplay()
        }, t.prototype.conditionalBlur_ = function () {
            this.previouslyActiveEl_ = null, this.off(o, "keydown", this.handleKeyDown);
            var e = this.player_.controlBar, t = e && e.subsCapsButton, i = e && e.captionsButton;
            t ? t.focus() : i && i.focus()
        }, t
    }(Dt);
    gt.registerComponent("TextTrackSettings", Vn);
    var Gn = function (e) {
        function t(i, n) {
            D(this, t);
            var o = n.ResizeObserver || r.ResizeObserver;
            null === n.ResizeObserver && (o = !1);
            var a = vt({createEl: !o}, n), s = N(this, e.call(this, i, a));
            return s.ResizeObserver = n.ResizeObserver || r.ResizeObserver, s.loadListener_ = null, s.resizeObserver_ = null, s.debouncedHandler_ = tt(function () {
                s.resizeHandler()
            }, 100, !1, i), o ? (s.resizeObserver_ = new s.ResizeObserver(s.debouncedHandler_), s.resizeObserver_.observe(i.el())) : (s.loadListener_ = function () {
                s.el_.contentWindow && He(s.el_.contentWindow, "resize", s.debouncedHandler_), s.off("load", s.loadListener_)
            }, s.on("load", s.loadListener_)), s
        }

        return O(t, e), t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, "iframe", {className: "vjs-resize-manager"})
        }, t.prototype.resizeHandler = function () {
            this.player_.trigger("playerresize")
        }, t.prototype.dispose = function () {
            this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.el_ && this.el_.contentWindow && Qe(this.el_.contentWindow, "resize", this.debouncedHandler_), this.loadListener_ && this.off("load", this.loadListener_), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null
        }, t
    }(gt);
    gt.registerComponent("ResizeManager", Gn);
    var Un = function (e) {
        var t = e.el();
        if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0;
        var i = e.$$("source"), n = [], r = "";
        if (!i.length) return !1;
        for (var o = 0; o < i.length; o++) {
            var a = i[o].src;
            a && -1 === n.indexOf(a) && n.push(a)
        }
        return !!n.length && (1 === n.length && (r = n[0]), e.triggerSourceset(r), !0)
    }, Wn = {};
    T || (Wn = Object.defineProperty({}, "innerHTML", {
        get: function () {
            return this.cloneNode(!0).innerHTML
        }, set: function (e) {
            var t = o.createElement(this.nodeName.toLowerCase());
            t.innerHTML = e;
            for (var i = o.createDocumentFragment(); t.childNodes.length;) i.appendChild(t.childNodes[0]);
            return this.innerText = "", r.Element.prototype.appendChild.call(this, i), this.innerHTML
        }
    }));
    var Xn = function (e, t) {
        for (var i = {}, n = 0; n < e.length && !((i = Object.getOwnPropertyDescriptor(e[n], t)) && i.set && i.get); n++) ;
        return i.enumerable = !0, i.configurable = !0, i
    }, Jn = function (e) {
        var t = e.el();
        if (!t.resetSourceWatch_) {
            var i = {}, n = function (e) {
                return Xn([e.el(), r.HTMLMediaElement.prototype, r.Element.prototype, Wn], "innerHTML")
            }(e), o = function (i) {
                return function () {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    var a = i.apply(t, r);
                    return Un(e), a
                }
            };
            ["append", "appendChild", "insertAdjacentHTML"].forEach(function (e) {
                t[e] && (i[e] = t[e], t[e] = o(i[e]))
            }), Object.defineProperty(t, "innerHTML", vt(n, {set: o(n.set)})), t.resetSourceWatch_ = function () {
                t.resetSourceWatch_ = null, Object.keys(i).forEach(function (e) {
                    t[e] = i[e]
                }), Object.defineProperty(t, "innerHTML", n)
            }, e.one("sourceset", t.resetSourceWatch_)
        }
    }, Zn = {};
    T || (Zn = Object.defineProperty({}, "src", {
        get: function () {
            return this.hasAttribute("src") ? qt(r.Element.prototype.getAttribute.call(this, "src")) : ""
        }, set: function (e) {
            return r.Element.prototype.setAttribute.call(this, "src", e), e
        }
    }));
    var qn = function (e) {
            if (e.featuresSourceset) {
                var t = e.el();
                if (!t.resetSourceset_) {
                    var i = function (e) {
                        return Xn([e.el(), r.HTMLMediaElement.prototype, Zn], "src")
                    }(e), n = t.setAttribute, o = t.load;
                    Object.defineProperty(t, "src", vt(i, {
                        set: function (n) {
                            var r = i.set.call(t, n);
                            return e.triggerSourceset(t.src), r
                        }
                    })), t.setAttribute = function (i, r) {
                        var o = n.call(t, i, r);
                        return /src/i.test(i) && e.triggerSourceset(t.src), o
                    }, t.load = function () {
                        var i = o.call(t);
                        return Un(e) || (e.triggerSourceset(""), Jn(e)), i
                    }, t.currentSrc ? e.triggerSourceset(t.currentSrc) : Un(e) || Jn(e), t.resetSourceset_ = function () {
                        t.resetSourceset_ = null, t.load = o, t.setAttribute = n, Object.defineProperty(t, "src", i), t.resetSourceWatch_ && t.resetSourceWatch_()
                    }
                }
            }
        },
        Kn = L(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
        $n = function (e) {
            function t(i, n) {
                D(this, t);
                var r = N(this, e.call(this, i, n)), o = i.source, s = !1;
                if (o && (r.el_.currentSrc !== o.src || i.tag && 3 === i.tag.initNetworkState_) ? r.setSource(o) : r.handleLateInit_(r.el_), i.enableSourceset && r.setupSourcesetHandling_(), r.el_.hasChildNodes()) {
                    for (var l = r.el_.childNodes, c = l.length, u = []; c--;) {
                        var p = l[c];
                        "track" === p.nodeName.toLowerCase() && (r.featuresNativeTextTracks ? (r.remoteTextTrackEls().addTrackElement_(p), r.remoteTextTracks().addTrack(p.track), r.textTracks().addTrack(p.track), s || r.el_.hasAttribute("crossorigin") || !$t(p.src) || (s = !0)) : u.push(p))
                    }
                    for (var d = 0; d < u.length; d++) r.el_.removeChild(u[d])
                }
                return r.proxyNativeTracks_(), r.featuresNativeTextTracks && s && J.warn(a(Kn)), r.restoreMetadataTracksInIOSNativePlayer_(), (M || v || x) && !0 === i.nativeControlsForTouch && r.setControls(!0), r.proxyWebkitFullscreen_(), r.triggerReady(), r
            }

            return O(t, e), t.prototype.dispose = function () {
                this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), t.disposeMediaElement(this.el_), this.options_ = null, e.prototype.dispose.call(this)
            }, t.prototype.setupSourcesetHandling_ = function () {
                qn(this)
            }, t.prototype.restoreMetadataTracksInIOSNativePlayer_ = function () {
                var e = this.textTracks(), t = void 0, i = function () {
                    t = [];
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        "metadata" === n.kind && t.push({track: n, storedMode: n.mode})
                    }
                };
                i(), e.addEventListener("change", i), this.on("dispose", function () {
                    return e.removeEventListener("change", i)
                });
                var n = function i() {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        "disabled" === r.track.mode && r.track.mode !== r.storedMode && (r.track.mode = r.storedMode)
                    }
                    e.removeEventListener("change", i)
                };
                this.on("webkitbeginfullscreen", function () {
                    e.removeEventListener("change", i), e.removeEventListener("change", n), e.addEventListener("change", n)
                }), this.on("webkitendfullscreen", function () {
                    e.removeEventListener("change", i), e.addEventListener("change", i), e.removeEventListener("change", n)
                })
            }, t.prototype.proxyNativeTracks_ = function () {
                var e = this;
                ci.names.forEach(function (t) {
                    var i = ci[t], n = e.el()[i.getterName], r = e[i.getterName]();
                    if (e["featuresNative" + i.capitalName + "Tracks"] && n && n.addEventListener) {
                        var o = {
                            change: function (e) {
                                r.trigger({type: "change", target: r, currentTarget: r, srcElement: r})
                            }, addtrack: function (e) {
                                r.addTrack(e.track)
                            }, removetrack: function (e) {
                                r.removeTrack(e.track)
                            }
                        }, a = function () {
                            for (var e = [], t = 0; t < r.length; t++) {
                                for (var i = !1, o = 0; o < n.length; o++) if (n[o] === r[t]) {
                                    i = !0;
                                    break
                                }
                                i || e.push(r[t])
                            }
                            for (; e.length;) r.removeTrack(e.shift())
                        };
                        Object.keys(o).forEach(function (t) {
                            var i = o[t];
                            n.addEventListener(t, i), e.on("dispose", function (e) {
                                return n.removeEventListener(t, i)
                            })
                        }), e.on("loadstart", a), e.on("dispose", function (t) {
                            return e.off("loadstart", a)
                        })
                    }
                })
            }, t.prototype.createEl = function () {
                var e = this.options_.tag;
                if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                    if (e) {
                        var i = e.cloneNode(!0);
                        e.parentNode && e.parentNode.insertBefore(i, e), t.disposeMediaElement(e), e = i
                    } else {
                        e = o.createElement("video");
                        var n = vt({}, this.options_.tag && de(this.options_.tag));
                        M && !0 === this.options_.nativeControlsForTouch || delete n.controls, pe(e, H(n, {
                            id: this.options_.techId,
                            class: "vjs-tech"
                        }))
                    }
                    e.playerId = this.options_.playerId
                }
                void 0 !== this.options_.preload && fe(e, "preload", this.options_.preload);
                for (var r = ["loop", "muted", "playsinline", "autoplay"], a = 0; a < r.length; a++) {
                    var s = r[a], l = this.options_[s];
                    void 0 !== l && (l ? fe(e, s, s) : ve(e, s), e[s] = l)
                }
                return e
            }, t.prototype.handleLateInit_ = function (e) {
                if (0 !== e.networkState && 3 !== e.networkState) {
                    if (0 === e.readyState) {
                        var t = !1, i = function () {
                            t = !0
                        };
                        this.on("loadstart", i);
                        var n = function () {
                            t || this.trigger("loadstart")
                        };
                        return this.on("loadedmetadata", n), void this.ready(function () {
                            this.off("loadstart", i), this.off("loadedmetadata", n), t || this.trigger("loadstart")
                        })
                    }
                    var r = ["loadstart"];
                    r.push("loadedmetadata"), e.readyState >= 2 && r.push("loadeddata"), e.readyState >= 3 && r.push("canplay"), e.readyState >= 4 && r.push("canplaythrough"), this.ready(function () {
                        r.forEach(function (e) {
                            this.trigger(e)
                        }, this)
                    })
                }
            }, t.prototype.setCurrentTime = function (e) {
                try {
                    this.el_.currentTime = e
                } catch (e) {
                    J(e, "Video is not ready. (Video.js)")
                }
            }, t.prototype.duration = function () {
                var e = this;
                if (this.el_.duration === 1 / 0 && b && j && 0 === this.el_.currentTime) {
                    return this.on("timeupdate", function t() {
                        e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"), e.off("timeupdate", t))
                    }), NaN
                }
                return this.el_.duration || NaN
            }, t.prototype.width = function () {
                return this.el_.offsetWidth
            }, t.prototype.height = function () {
                return this.el_.offsetHeight
            }, t.prototype.proxyWebkitFullscreen_ = function () {
                var e = this;
                if ("webkitDisplayingFullscreen" in this.el_) {
                    var t = function () {
                        this.trigger("fullscreenchange", {isFullscreen: !1})
                    }, i = function () {
                        "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {isFullscreen: !0}))
                    };
                    this.on("webkitbeginfullscreen", i), this.on("dispose", function () {
                        e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t)
                    })
                }
            }, t.prototype.supportsFullScreen = function () {
                if ("function" == typeof this.el_.webkitEnterFullScreen) {
                    var e = r.navigator && r.navigator.userAgent || "";
                    if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0
                }
                return !1
            }, t.prototype.enterFullScreen = function () {
                var e = this.el_;
                e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                    e.pause(), e.webkitEnterFullScreen()
                }, 0)) : e.webkitEnterFullScreen()
            }, t.prototype.exitFullScreen = function () {
                this.el_.webkitExitFullScreen()
            }, t.prototype.src = function (e) {
                if (void 0 === e) return this.el_.src;
                this.setSrc(e)
            }, t.prototype.reset = function () {
                t.resetMediaElement(this.el_)
            }, t.prototype.currentSrc = function () {
                return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
            }, t.prototype.setControls = function (e) {
                this.el_.controls = !!e
            }, t.prototype.addTextTrack = function (t, i, n) {
                return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, i, n) : e.prototype.addTextTrack.call(this, t, i, n)
            }, t.prototype.createRemoteTextTrack = function (t) {
                if (!this.featuresNativeTextTracks) return e.prototype.createRemoteTextTrack.call(this, t);
                var i = o.createElement("track");
                return t.kind && (i.kind = t.kind), t.label && (i.label = t.label), (t.language || t.srclang) && (i.srclang = t.language || t.srclang), t.default && (i.default = t.default), t.id && (i.id = t.id), t.src && (i.src = t.src), i
            }, t.prototype.addRemoteTextTrack = function (t, i) {
                var n = e.prototype.addRemoteTextTrack.call(this, t, i);
                return this.featuresNativeTextTracks && this.el().appendChild(n), n
            }, t.prototype.removeRemoteTextTrack = function (t) {
                if (e.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks) for (var i = this.$$("track"), n = i.length; n--;) t !== i[n] && t !== i[n].track || this.el().removeChild(i[n])
            }, t.prototype.getVideoPlaybackQuality = function () {
                if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                var e = {};
                return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), r.performance && "function" == typeof r.performance.now ? e.creationTime = r.performance.now() : r.performance && r.performance.timing && "number" == typeof r.performance.timing.navigationStart && (e.creationTime = r.Date.now() - r.performance.timing.navigationStart), e
            }, t
        }(di);
    if (ee()) {
        $n.TEST_VID = o.createElement("video");
        var er = o.createElement("track");
        er.kind = "captions", er.srclang = "en", er.label = "English", $n.TEST_VID.appendChild(er)
    }
    $n.isSupported = function () {
        try {
            $n.TEST_VID.volume = .5
        } catch (e) {
            return !1
        }
        return !(!$n.TEST_VID || !$n.TEST_VID.canPlayType)
    }, $n.canPlayType = function (e) {
        return $n.TEST_VID.canPlayType(e)
    }, $n.canPlaySource = function (e, t) {
        return $n.canPlayType(e.type)
    }, $n.canControlVolume = function () {
        try {
            var e = $n.TEST_VID.volume;
            return $n.TEST_VID.volume = e / 2 + .1, e !== $n.TEST_VID.volume
        } catch (e) {
            return !1
        }
    }, $n.canMuteVolume = function () {
        try {
            var e = $n.TEST_VID.muted;
            return $n.TEST_VID.muted = !e, $n.TEST_VID.muted ? fe($n.TEST_VID, "muted", "muted") : ve($n.TEST_VID, "muted"), e !== $n.TEST_VID.muted
        } catch (e) {
            return !1
        }
    }, $n.canControlPlaybackRate = function () {
        if (b && j && C < 58) return !1;
        try {
            var e = $n.TEST_VID.playbackRate;
            return $n.TEST_VID.playbackRate = e / 2 + .1, e !== $n.TEST_VID.playbackRate
        } catch (e) {
            return !1
        }
    }, $n.canOverrideAttributes = function () {
        if (T) return !1;
        try {
            var e = function () {
            };
            Object.defineProperty(o.createElement("video"), "src", {
                get: e,
                set: e
            }), Object.defineProperty(o.createElement("audio"), "src", {
                get: e,
                set: e
            }), Object.defineProperty(o.createElement("video"), "innerHTML", {
                get: e,
                set: e
            }), Object.defineProperty(o.createElement("audio"), "innerHTML", {get: e, set: e})
        } catch (e) {
            return !1
        }
        return !0
    }, $n.supportsNativeTextTracks = function () {
        return B || m && j
    }, $n.supportsNativeVideoTracks = function () {
        return !(!$n.TEST_VID || !$n.TEST_VID.videoTracks)
    }, $n.supportsNativeAudioTracks = function () {
        return !(!$n.TEST_VID || !$n.TEST_VID.audioTracks)
    }, $n.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], $n.prototype.featuresVolumeControl = $n.canControlVolume(), $n.prototype.featuresMuteControl = $n.canMuteVolume(), $n.prototype.featuresPlaybackRate = $n.canControlPlaybackRate(), $n.prototype.featuresSourceset = $n.canOverrideAttributes(), $n.prototype.movingMediaElementInDOM = !m, $n.prototype.featuresFullscreenResize = !0, $n.prototype.featuresProgressEvents = !0, $n.prototype.featuresTimeupdateEvents = !0, $n.prototype.featuresNativeTextTracks = $n.supportsNativeTextTracks(), $n.prototype.featuresNativeVideoTracks = $n.supportsNativeVideoTracks(), $n.prototype.featuresNativeAudioTracks = $n.supportsNativeAudioTracks();
    var tr = $n.TEST_VID && $n.TEST_VID.constructor.prototype.canPlayType,
        ir = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, nr = /^video\/mp4/i;
    $n.patchCanPlayType = function () {
        y >= 4 && !_ && !j ? $n.TEST_VID.constructor.prototype.canPlayType = function (e) {
            return e && ir.test(e) ? "maybe" : tr.call(this, e)
        } : w && ($n.TEST_VID.constructor.prototype.canPlayType = function (e) {
            return e && nr.test(e) ? "maybe" : tr.call(this, e)
        })
    }, $n.unpatchCanPlayType = function () {
        var e = $n.TEST_VID.constructor.prototype.canPlayType;
        return $n.TEST_VID.constructor.prototype.canPlayType = tr, e
    }, $n.patchCanPlayType(), $n.disposeMediaElement = function (e) {
        if (e) {
            for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
            e.removeAttribute("src"), "function" == typeof e.load && function () {
                try {
                    e.load()
                } catch (e) {
                }
            }()
        }
    }, $n.resetMediaElement = function (e) {
        if (e) {
            for (var t = e.querySelectorAll("source"), i = t.length; i--;) e.removeChild(t[i]);
            e.removeAttribute("src"), "function" == typeof e.load && function () {
                try {
                    e.load()
                } catch (e) {
                }
            }()
        }
    }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (e) {
        $n.prototype[e] = function () {
            return this.el_[e] || this.el_.hasAttribute(e)
        }
    }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (e) {
        $n.prototype["set" + ft(e)] = function (t) {
            this.el_[e] = t, t ? this.el_.setAttribute(e, e) : this.el_.removeAttribute(e)
        }
    }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (e) {
        $n.prototype[e] = function () {
            return this.el_[e]
        }
    }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function (e) {
        $n.prototype["set" + ft(e)] = function (t) {
            this.el_[e] = t
        }
    }), ["pause", "load", "play"].forEach(function (e) {
        $n.prototype[e] = function () {
            return this.el_[e]()
        }
    }), di.withSourceHandlers($n), $n.nativeSourceHandler = {}, $n.nativeSourceHandler.canPlayType = function (e) {
        try {
            return $n.TEST_VID.canPlayType(e)
        } catch (e) {
            return ""
        }
    }, $n.nativeSourceHandler.canHandleSource = function (e, t) {
        if (e.type) return $n.nativeSourceHandler.canPlayType(e.type);
        if (e.src) {
            var i = Kt(e.src);
            return $n.nativeSourceHandler.canPlayType("video/" + i)
        }
        return ""
    }, $n.nativeSourceHandler.handleSource = function (e, t, i) {
        t.setSrc(e.src)
    }, $n.nativeSourceHandler.dispose = function () {
    }, $n.registerSourceHandler($n.nativeSourceHandler), di.registerTech("Html5", $n);
    var rr = L(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
        or = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
        ar = {canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked"},
        sr = function (e) {
            function t(i, n, r) {
                if (D(this, t), i.id = i.id || n.id || "vjs_video_" + Me(), (n = H(t.getTagSettings(i), n)).initChildren = !1, n.createEl = !1, n.evented = !1, n.reportTouchActivity = !1, !n.language) if ("function" == typeof i.closest) {
                    var o = i.closest("[lang]");
                    o && o.getAttribute && (n.language = o.getAttribute("lang"))
                } else for (var a = i; a && 1 === a.nodeType;) {
                    if (de(a).hasOwnProperty("lang")) {
                        n.language = a.getAttribute("lang");
                        break
                    }
                    a = a.parentNode
                }
                var s = N(this, e.call(this, null, n, r));
                if (s.isPosterFromTech_ = !1, s.queuedCallbacks_ = [], s.isReady_ = !1, s.hasStarted_ = !1, s.userActive_ = !1, !s.options_ || !s.options_.techOrder || !s.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                if (s.tag = i, s.tagAttributes = i && de(i), s.language(s.options_.language), n.languages) {
                    var l = {};
                    Object.getOwnPropertyNames(n.languages).forEach(function (e) {
                        l[e.toLowerCase()] = n.languages[e]
                    }), s.languages_ = l
                } else s.languages_ = t.prototype.options_.languages;
                s.cache_ = {}, s.poster_ = n.poster || "", s.controls_ = !!n.controls, s.cache_.lastVolume = 1, i.controls = !1, i.removeAttribute("controls"), i.hasAttribute("autoplay") ? s.options_.autoplay = !0 : s.autoplay(s.options_.autoplay), s.scrubbing_ = !1, s.el_ = s.createEl(), s.cache_.lastPlaybackRate = s.defaultPlaybackRate(), pt(s, {eventBusKey: "el_"});
                var c = vt(s.options_);
                if (n.plugins) {
                    var p = n.plugins;
                    Object.keys(p).forEach(function (e) {
                        if ("function" != typeof this[e]) throw new Error('plugin "' + e + '" does not exist');
                        this[e](p[e])
                    }, s)
                }
                s.options_.playerOptions = c, s.middleware_ = [], s.initChildren(), s.isAudio("audio" === i.nodeName.toLowerCase()), s.controls() ? s.addClass("vjs-controls-enabled") : s.addClass("vjs-controls-disabled"), s.el_.setAttribute("role", "region"), s.isAudio() ? s.el_.setAttribute("aria-label", s.localize("Audio Player")) : s.el_.setAttribute("aria-label", s.localize("Video Player")), s.isAudio() && s.addClass("vjs-audio"), s.flexNotSupported_() && s.addClass("vjs-no-flex"), m || s.addClass("vjs-workinghover"), t.players[s.id_] = s;
                var d = u.split(".")[0];
                return s.addClass("vjs-v" + d), s.userActive(!0), s.reportUserActivity(), s.one("play", s.listenForUserActivity_), s.on("fullscreenchange", s.handleFullscreenChange_), s.on("stageclick", s.handleStageClick_), s.changingSrc_ = !1, s.playWaitingForReady_ = !1, s.playOnLoadstart_ = null, s
            }

            return O(t, e), t.prototype.dispose = function () {
                this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), t.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), function (e) {
                    fi[e.id()] = null
                }(this), e.prototype.dispose.call(this)
            }, t.prototype.createEl = function () {
                var t = this.tag, i = void 0,
                    n = this.playerElIngest_ = t.parentNode && t.parentNode.hasAttribute && t.parentNode.hasAttribute("data-vjs-player"),
                    a = "video-js" === this.tag.tagName.toLowerCase();
                n ? i = this.el_ = t.parentNode : a || (i = this.el_ = e.prototype.createEl.call(this, "div"));
                var s = de(t);
                if (a) {
                    for (i = this.el_ = t, t = this.tag = o.createElement("video"); i.children.length;) t.appendChild(i.firstChild);
                    se(i, "video-js") || le(i, "video-js"), i.appendChild(t), n = this.playerElIngest_ = i, ["autoplay", "controls", "crossOrigin", "defaultMuted", "defaultPlaybackRate", "loop", "muted", "playbackRate", "src", "volume"].forEach(function (e) {
                        void 0 !== i[e] && (t[e] = i[e])
                    })
                }
                if (t.setAttribute("tabindex", "-1"), E && t.setAttribute("role", "application"), t.removeAttribute("width"), t.removeAttribute("height"), Object.getOwnPropertyNames(s).forEach(function (e) {
                        "class" === e ? (i.className += " " + s[e], a && (t.className += " " + s[e])) : (i.setAttribute(e, s[e]), a && t.setAttribute(e, s[e]))
                    }), t.playerId = t.id, t.id += "_html5_api", t.className = "vjs-tech", t.player = i.player = this, this.addClass("vjs-paused"), !0 !== r.VIDEOJS_NO_DYNAMIC_STYLE) {
                    this.styleEl_ = qe("vjs-styles-dimensions");
                    var l = Te(".vjs-styles-defaults"), c = Te("head");
                    c.insertBefore(this.styleEl_, l ? l.nextSibling : c.firstChild)
                }
                this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                for (var u = t.getElementsByTagName("a"), p = 0; p < u.length; p++) {
                    var d = u.item(p);
                    le(d, "vjs-hidden"), d.setAttribute("hidden", "hidden")
                }
                return t.initNetworkState_ = t.networkState, t.parentNode && !n && t.parentNode.insertBefore(i, t), ae(t, i), this.children_.unshift(t), this.el_.setAttribute("lang", this.language_), this.el_ = i, i
            }, t.prototype.width = function (e) {
                return this.dimension("width", e)
            }, t.prototype.height = function (e) {
                return this.dimension("height", e)
            }, t.prototype.dimension = function (e, t) {
                var i = e + "_";
                if (void 0 === t) return this[i] || 0;
                if ("" === t) return this[i] = void 0, void this.updateStyleEl_();
                var n = parseFloat(t);
                isNaN(n) ? J.error('Improper value "' + t + '" supplied for for ' + e) : (this[i] = n, this.updateStyleEl_())
            }, t.prototype.fluid = function (e) {
                if (void 0 === e) return !!this.fluid_;
                this.fluid_ = !!e, e ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_()
            }, t.prototype.aspectRatio = function (e) {
                if (void 0 === e) return this.aspectRatio_;
                if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
            }, t.prototype.updateStyleEl_ = function () {
                if (!0 !== r.VIDEOJS_NO_DYNAMIC_STYLE) {
                    var e = void 0, t = void 0, i = void 0,
                        n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                        o = n[1] / n[0];
                    e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / o : this.videoWidth() || 300, t = void 0 !== this.height_ ? this.height_ : e * o, i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(i), Ke(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * o + "%;\n      }\n    ")
                } else {
                    var a = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                        s = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                        l = this.tech_ && this.tech_.el();
                    l && (a >= 0 && (l.width = a), s >= 0 && (l.height = s))
                }
            }, t.prototype.loadTech_ = function (e, t) {
                var i = this;
                this.tech_ && this.unloadTech_();
                var n = ft(e), r = e.charAt(0).toLowerCase() + e.slice(1);
                "Html5" !== n && this.tag && (di.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = n, this.isReady_ = !1;
                var o = {
                    source: t,
                    autoplay: "string" != typeof this.autoplay() && this.autoplay(),
                    nativeControlsForTouch: this.options_.nativeControlsForTouch,
                    playerId: this.id(),
                    techId: this.id() + "_" + n + "_api",
                    playsinline: this.options_.playsinline,
                    preload: this.options_.preload,
                    loop: this.options_.loop,
                    muted: this.options_.muted,
                    poster: this.poster(),
                    language: this.language(),
                    playerElIngest: this.playerElIngest_ || !1,
                    "vtt.js": this.options_["vtt.js"],
                    canOverridePoster: !!this.options_.techCanOverridePoster,
                    enableSourceset: this.options_.enableSourceset
                };
                pi.names.forEach(function (e) {
                    var t = pi[e];
                    o[t.getterName] = i[t.privateName]
                }), H(o, this.options_[n]), H(o, this.options_[r]), H(o, this.options_[e.toLowerCase()]), this.tag && (o.tag = this.tag), t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (o.startTime = this.cache_.currentTime);
                var a = di.getTech(e);
                if (!a) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
                this.tech_ = new a(o), this.tech_.ready($e(this, this.handleTechReady_), !0), It(this.textTracksJson_ || [], this.tech_), or.forEach(function (e) {
                    i.on(i.tech_, e, i["handleTech" + ft(e) + "_"])
                }), Object.keys(ar).forEach(function (e) {
                    i.on(i.tech_, e, function (t) {
                        0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
                            callback: i["handleTech" + ar[e] + "_"].bind(i),
                            event: t
                        }) : i["handleTech" + ar[e] + "_"](t)
                    })
                }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || ae(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
            }, t.prototype.unloadTech_ = function () {
                var e = this;
                pi.names.forEach(function (t) {
                    var i = pi[t];
                    e[i.privateName] = e[i.getterName]()
                }), this.textTracksJson_ = zt(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
            }, t.prototype.tech = function (e) {
                return void 0 === e && J.warn(a(rr)), this.tech_
            }, t.prototype.addTechControlsListeners_ = function () {
                this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
            }, t.prototype.removeTechControlsListeners_ = function () {
                this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
            }, t.prototype.handleTechReady_ = function () {
                if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
                    delete this.tag.poster
                } catch (e) {
                    J("deleting tag.poster throws in some browsers", e)
                }
            }, t.prototype.handleTechLoadStart_ = function () {
                this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
            }, t.prototype.manualAutoplay_ = function (e) {
                var t = this;
                if (this.tech_ && "string" == typeof e) {
                    var i = function () {
                        var e = t.muted();
                        t.muted(!0);
                        var i = t.play();
                        if (i && i.then && i.catch) return i.catch(function (i) {
                            t.muted(e)
                        })
                    }, n = void 0;
                    if ("any" === e ? (n = this.play()) && n.then && n.catch && n.catch(function () {
                            return i()
                        }) : n = "muted" === e ? i() : this.play(), n && n.then && n.catch) return n.then(function () {
                        t.trigger({type: "autoplay-success", autoplay: e})
                    }).catch(function (i) {
                        t.trigger({type: "autoplay-failure", autoplay: e})
                    })
                }
            }, t.prototype.updateSourceCaches_ = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = e, i = "";
                "string" != typeof t && (t = e.src, i = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !i && (i = function (e, t) {
                    if (!t) return "";
                    if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
                    var i = e.cache_.sources.filter(function (e) {
                        return e.src === t
                    });
                    if (i.length) return i[0].type;
                    for (var n = e.$$("source"), r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (o.type && o.src && o.src === t) return o.type
                    }
                    return _i(t)
                }(this, t)), this.cache_.source = vt({}, e, {src: t, type: i});
                for (var n = this.cache_.sources.filter(function (e) {
                    return e.src && e.src === t
                }), r = [], o = this.$$("source"), a = [], s = 0; s < o.length; s++) {
                    var l = de(o[s]);
                    r.push(l), l.src && l.src === t && a.push(l.src)
                }
                a.length && !n.length ? this.cache_.sources = r : n.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t
            }, t.prototype.handleTechSourceset_ = function (e) {
                var t = this;
                if (!this.changingSrc_ && (this.updateSourceCaches_(e.src), !e.src)) {
                    this.tech_.one(["sourceset", "loadstart"], function e(i) {
                        "sourceset" !== i.type && t.updateSourceCaches_(t.techGet_("currentSrc")), t.tech_.off(["sourceset", "loadstart"], e)
                    })
                }
                this.trigger({src: e.src, type: "sourceset"})
            }, t.prototype.hasStarted = function (e) {
                if (void 0 === e) return this.hasStarted_;
                e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
            }, t.prototype.handleTechPlay_ = function () {
                this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
            }, t.prototype.handleTechRateChange_ = function () {
                this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function (e) {
                    return e.callback(e.event)
                }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
            }, t.prototype.handleTechWaiting_ = function () {
                var e = this;
                this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
                    return e.removeClass("vjs-waiting")
                })
            }, t.prototype.handleTechCanPlay_ = function () {
                this.removeClass("vjs-waiting"), this.trigger("canplay")
            }, t.prototype.handleTechCanPlayThrough_ = function () {
                this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
            }, t.prototype.handleTechPlaying_ = function () {
                this.removeClass("vjs-waiting"), this.trigger("playing")
            }, t.prototype.handleTechSeeking_ = function () {
                this.addClass("vjs-seeking"), this.trigger("seeking")
            }, t.prototype.handleTechSeeked_ = function () {
                this.removeClass("vjs-seeking"), this.trigger("seeked")
            }, t.prototype.handleTechFirstPlay_ = function () {
                this.options_.starttime && (J.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
            }, t.prototype.handleTechPause_ = function () {
                this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
            }, t.prototype.handleTechEnded_ = function () {
                this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
            }, t.prototype.handleTechDurationChange_ = function () {
                this.duration(this.techGet_("duration"))
            }, t.prototype.handleTechClick_ = function (e) {
                Ce(e) && this.controls_ && (this.paused() ? Bt(this.play()) : this.pause())
            }, t.prototype.handleTechTap_ = function () {
                this.userActive(!this.userActive())
            }, t.prototype.handleTechTouchStart_ = function () {
                this.userWasActive = this.userActive()
            }, t.prototype.handleTechTouchMove_ = function () {
                this.userWasActive && this.reportUserActivity()
            }, t.prototype.handleTechTouchEnd_ = function (e) {
                e.preventDefault()
            }, t.prototype.handleFullscreenChange_ = function () {
                this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
            }, t.prototype.handleStageClick_ = function () {
                this.reportUserActivity()
            }, t.prototype.handleTechFullscreenChange_ = function (e, t) {
                t && this.isFullscreen(t.isFullscreen), this.trigger("fullscreenchange")
            }, t.prototype.handleTechError_ = function () {
                var e = this.tech_.error();
                this.error(e)
            }, t.prototype.handleTechTextData_ = function () {
                var e = null;
                arguments.length > 1 && (e = arguments[1]), this.trigger("textdata", e)
            }, t.prototype.getCache = function () {
                return this.cache_
            }, t.prototype.techCall_ = function (e, t) {
                this.ready(function () {
                    if (e in bi) return function (e, t, i, n) {
                        return t[i](e.reduce(wi(i), n))
                    }(this.middleware_, this.tech_, e, t);
                    if (e in yi) return mi(this.middleware_, this.tech_, e, t);
                    try {
                        this.tech_ && this.tech_[e](t)
                    } catch (e) {
                        throw J(e), e
                    }
                }, !0)
            }, t.prototype.techGet_ = function (e) {
                if (this.tech_ && this.tech_.isReady_) {
                    if (e in Ai) return function (e, t, i) {
                        return e.reduceRight(wi(i), t[i]())
                    }(this.middleware_, this.tech_, e);
                    if (e in yi) return mi(this.middleware_, this.tech_, e);
                    try {
                        return this.tech_[e]()
                    } catch (t) {
                        if (void 0 === this.tech_[e]) throw J("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t), t;
                        if ("TypeError" === t.name) throw J("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t), this.tech_.isReady_ = !1, t;
                        throw J(t), t
                    }
                }
            }, t.prototype.play = function () {
                var e = this;
                if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
                    if (!this.changingSrc_ && (this.src() || this.currentSrc())) return this.techGet_("play");
                    this.playOnLoadstart_ = function () {
                        e.playOnLoadstart_ = null, Bt(e.play())
                    }, this.one("loadstart", this.playOnLoadstart_)
                } else {
                    if (this.playWaitingForReady_) return;
                    this.playWaitingForReady_ = !0, this.ready(function () {
                        e.playWaitingForReady_ = !1, Bt(e.play())
                    })
                }
            }, t.prototype.pause = function () {
                this.techCall_("pause")
            }, t.prototype.paused = function () {
                return !1 !== this.techGet_("paused")
            }, t.prototype.played = function () {
                return this.techGet_("played") || bt(0, 0)
            }, t.prototype.scrubbing = function (e) {
                if (void 0 === e) return this.scrubbing_;
                this.scrubbing_ = !!e, e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
            }, t.prototype.currentTime = function (e) {
                return void 0 !== e ? (e < 0 && (e = 0), void this.techCall_("setCurrentTime", e)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
            }, t.prototype.duration = function (e) {
                if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                (e = parseFloat(e)) < 0 && (e = 1 / 0), e !== this.cache_.duration && (this.cache_.duration = e, e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
            }, t.prototype.remainingTime = function () {
                return this.duration() - this.currentTime()
            }, t.prototype.remainingTimeDisplay = function () {
                return Math.floor(this.duration()) - Math.floor(this.currentTime())
            }, t.prototype.buffered = function () {
                var e = this.techGet_("buffered");
                return e && e.length || (e = bt(0, 0)), e
            }, t.prototype.bufferedPercent = function () {
                return yt(this.buffered(), this.duration())
            }, t.prototype.bufferedEnd = function () {
                var e = this.buffered(), t = this.duration(), i = e.end(e.length - 1);
                return i > t && (i = t), i
            }, t.prototype.volume = function (e) {
                var t = void 0;
                return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), void(t > 0 && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
            }, t.prototype.muted = function (e) {
                if (void 0 === e) return this.techGet_("muted") || !1;
                this.techCall_("setMuted", e)
            }, t.prototype.defaultMuted = function (e) {
                return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
            }, t.prototype.lastVolume_ = function (e) {
                if (void 0 === e || 0 === e) return this.cache_.lastVolume;
                this.cache_.lastVolume = e
            }, t.prototype.supportsFullScreen = function () {
                return this.techGet_("supportsFullScreen") || !1
            }, t.prototype.isFullscreen = function (e) {
                if (void 0 === e) return !!this.isFullscreen_;
                this.isFullscreen_ = !!e
            }, t.prototype.requestFullscreen = function () {
                var e = wt;
                this.isFullscreen(!0), e.requestFullscreen ? (He(o, e.fullscreenchange, $e(this, function t(i) {
                    this.isFullscreen(o[e.fullscreenElement]), !1 === this.isFullscreen() && Qe(o, e.fullscreenchange, t), this.trigger("fullscreenchange")
                })), this.el_[e.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
            }, t.prototype.exitFullscreen = function () {
                var e = wt;
                this.isFullscreen(!1), e.requestFullscreen ? o[e.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
            }, t.prototype.enterFullWindow = function () {
                this.isFullWindow = !0, this.docOrigOverflow = o.documentElement.style.overflow, He(o, "keydown", $e(this, this.fullWindowOnEscKey)), o.documentElement.style.overflow = "hidden", le(o.body, "vjs-full-window"), this.trigger("enterFullWindow")
            }, t.prototype.fullWindowOnEscKey = function (e) {
                27 === e.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
            }, t.prototype.exitFullWindow = function () {
                this.isFullWindow = !1, Qe(o, "keydown", this.fullWindowOnEscKey), o.documentElement.style.overflow = this.docOrigOverflow, ce(o.body, "vjs-full-window"), this.trigger("exitFullWindow")
            }, t.prototype.canPlayType = function (e) {
                for (var t = void 0, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                    var r = n[i], o = di.getTech(r);
                    if (o || (o = gt.getComponent(r)), o) {
                        if (o.isSupported() && (t = o.canPlayType(e))) return t
                    } else J.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
                }
                return ""
            }, t.prototype.selectSource = function (e) {
                var t = this, i = this.options_.techOrder.map(function (e) {
                    return [e, di.getTech(e)]
                }).filter(function (e) {
                    var t = e[0], i = e[1];
                    return i ? i.isSupported() : (J.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                }), n = function (e, t, i) {
                    var n = void 0;
                    return e.some(function (e) {
                        return t.some(function (t) {
                            if (n = i(e, t)) return !0
                        })
                    }), n
                }, r = function (e, i) {
                    var n = e[0];
                    if (e[1].canPlaySource(i, t.options_[n.toLowerCase()])) return {source: i, tech: n}
                };
                return (this.options_.sourceOrder ? n(e, i, function (e) {
                    return function (t, i) {
                        return e(i, t)
                    }
                }(r)) : n(i, e, r)) || !1
            }, t.prototype.src = function (e) {
                var t = this;
                if (void 0 === e) return this.cache_.src || "";
                var i = function e(t) {
                    if (Array.isArray(t)) {
                        var i = [];
                        t.forEach(function (t) {
                            t = e(t), Array.isArray(t) ? i = i.concat(t) : Q(t) && i.push(t)
                        }), t = i
                    } else t = "string" == typeof t && t.trim() ? [ki({src: t})] : Q(t) && "string" == typeof t.src && t.src && t.src.trim() ? [ki(t)] : [];
                    return t
                }(e);
                i.length ? (this.changingSrc_ = !0, this.cache_.sources = i, this.updateSourceCaches_(i[0]), gi(this, i[0], function (e, n) {
                    if (t.middleware_ = n, t.cache_.sources = i, t.updateSourceCaches_(e), t.src_(e)) return i.length > 1 ? t.src(i.slice(1)) : (t.changingSrc_ = !1, t.setTimeout(function () {
                        this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                    }, 0), void t.triggerReady());
                    !function (e, t) {
                        e.forEach(function (e) {
                            return e.setTech && e.setTech(t)
                        })
                    }(n, t.tech_)
                })) : this.setTimeout(function () {
                    this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                }, 0)
            }, t.prototype.src_ = function (e) {
                var t = this, i = this.selectSource([e]);
                return !i || (function (e, t) {
                    return ft(e) === ft(t)
                }(i.tech, this.techName_) ? (this.ready(function () {
                    this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = !1
                }, !0), !1) : (this.changingSrc_ = !0, this.loadTech_(i.tech, i.source), this.tech_.ready(function () {
                    t.changingSrc_ = !1
                }), !1))
            }, t.prototype.load = function () {
                this.techCall_("load")
            }, t.prototype.reset = function () {
                this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
            }, t.prototype.currentSources = function () {
                var e = this.currentSource(), t = [];
                return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
            }, t.prototype.currentSource = function () {
                return this.cache_.source || {}
            }, t.prototype.currentSrc = function () {
                return this.currentSource() && this.currentSource().src || ""
            }, t.prototype.currentType = function () {
                return this.currentSource() && this.currentSource().type || ""
            }, t.prototype.preload = function (e) {
                return void 0 !== e ? (this.techCall_("setPreload", e), void(this.options_.preload = e)) : this.techGet_("preload")
            }, t.prototype.autoplay = function (e) {
                if (void 0 === e) return this.options_.autoplay || !1;
                var t = void 0;
                "string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e, this.manualAutoplay_(e), t = !1) : this.options_.autoplay = !!e, t = t || this.options_.autoplay, this.tech_ && this.techCall_("setAutoplay", t)
            }, t.prototype.playsinline = function (e) {
                return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline")
            }, t.prototype.loop = function (e) {
                return void 0 !== e ? (this.techCall_("setLoop", e), void(this.options_.loop = e)) : this.techGet_("loop")
            }, t.prototype.poster = function (e) {
                if (void 0 === e) return this.poster_;
                e || (e = ""), e !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
            }, t.prototype.handleTechPosterChange_ = function () {
                if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                    var e = this.tech_.poster() || "";
                    e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                }
            }, t.prototype.controls = function (e) {
                if (void 0 === e) return !!this.controls_;
                e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
            }, t.prototype.usingNativeControls = function (e) {
                if (void 0 === e) return !!this.usingNativeControls_;
                e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
            }, t.prototype.error = function (e) {
                return void 0 === e ? this.error_ || null : null === e ? (this.error_ = e, this.removeClass("vjs-error"), void(this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new Tt(e), this.addClass("vjs-error"), J.error("(CODE:" + this.error_.code + " " + Tt.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
            }, t.prototype.reportUserActivity = function (e) {
                this.userActivity_ = !0
            }, t.prototype.userActive = function (e) {
                if (void 0 === e) return this.userActive_;
                if ((e = !!e) !== this.userActive_) {
                    if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                    this.tech_ && this.tech_.one("mousemove", function (e) {
                        e.stopPropagation(), e.preventDefault()
                    }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                }
            }, t.prototype.listenForUserActivity_ = function () {
                var e = void 0, t = void 0, i = void 0, n = $e(this, this.reportUserActivity);
                this.on("mousedown", function () {
                    n(), this.clearInterval(e), e = this.setInterval(n, 250)
                }), this.on("mousemove", function (e) {
                    e.screenX === t && e.screenY === i || (t = e.screenX, i = e.screenY, n())
                }), this.on("mouseup", function (t) {
                    n(), this.clearInterval(e)
                }), this.on("keydown", n), this.on("keyup", n);
                var r = void 0;
                this.setInterval(function () {
                    if (this.userActivity_) {
                        this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(r);
                        var e = this.options_.inactivityTimeout;
                        e <= 0 || (r = this.setTimeout(function () {
                            this.userActivity_ || this.userActive(!1)
                        }, e))
                    }
                }, 250)
            }, t.prototype.playbackRate = function (e) {
                if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
                this.techCall_("setPlaybackRate", e)
            }, t.prototype.defaultPlaybackRate = function (e) {
                return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
            }, t.prototype.isAudio = function (e) {
                if (void 0 === e) return !!this.isAudio_;
                this.isAudio_ = !!e
            }, t.prototype.addTextTrack = function (e, t, i) {
                if (this.tech_) return this.tech_.addTextTrack(e, t, i)
            }, t.prototype.addRemoteTextTrack = function (e, t) {
                if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
            }, t.prototype.removeRemoteTextTrack = function () {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).track,
                    t = void 0 === e ? arguments[0] : e;
                if (this.tech_) return this.tech_.removeRemoteTextTrack(t)
            }, t.prototype.getVideoPlaybackQuality = function () {
                return this.techGet_("getVideoPlaybackQuality")
            }, t.prototype.videoWidth = function () {
                return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
            }, t.prototype.videoHeight = function () {
                return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
            }, t.prototype.language = function (e) {
                if (void 0 === e) return this.language_;
                this.language_ = String(e).toLowerCase()
            }, t.prototype.languages = function () {
                return vt(t.prototype.options_.languages, this.languages_)
            },t.prototype.toJSON = function () {
                var e = vt(this.options_), t = e.tracks;
                e.tracks = [];
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n = vt(n)).player = void 0, e.tracks[i] = n
                }
                return e
            },t.prototype.createModal = function (e, t) {
                var i = this;
                (t = t || {}).content = e || "";
                var n = new Dt(this, t);
                return this.addChild(n), n.on("dispose", function () {
                    i.removeChild(n)
                }), n.open(), n
            },t.getTagSettings = function (e) {
                var t = {sources: [], tracks: []}, i = de(e), n = i["data-setup"];
                if (se(e, "vjs-fluid") && (i.fluid = !0), null !== n) {
                    var r = s(n || "{}"), o = r[0], a = r[1];
                    o && J.error(o), H(i, a)
                }
                if (H(t, i), e.hasChildNodes()) for (var l = e.childNodes, c = 0, u = l.length; c < u; c++) {
                    var p = l[c], d = p.nodeName.toLowerCase();
                    "source" === d ? t.sources.push(de(p)) : "track" === d && t.tracks.push(de(p))
                }
                return t
            },t.prototype.flexNotSupported_ = function () {
                var e = o.createElement("i");
                return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style)
            },t
        }(gt);
    pi.names.forEach(function (e) {
        var t = pi[e];
        sr.prototype[t.getterName] = function () {
            return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
        }
    }), sr.players = {};
    var lr = r.navigator;
    sr.prototype.options_ = {
        techOrder: di.defaultTechOrder_,
        html5: {},
        flash: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
        language: lr && (lr.languages && lr.languages[0] || lr.userLanguage || lr.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media."
    }, T || sr.prototype.options_.children.push("resizeManager"), ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (e) {
        sr.prototype[e] = function () {
            return this.techGet_(e)
        }
    }), or.forEach(function (e) {
        sr.prototype["handleTech" + ft(e) + "_"] = function () {
            return this.trigger(e)
        }
    }), gt.registerComponent("Player", sr);
    var cr = {}, ur = function (e) {
        return cr.hasOwnProperty(e)
    }, pr = function (e) {
        return ur(e) ? cr[e] : void 0
    }, dr = function (e, t) {
        e.activePlugins_ = e.activePlugins_ || {}, e.activePlugins_[t] = !0
    }, hr = function (e, t, i) {
        var n = (i ? "before" : "") + "pluginsetup";
        e.trigger(n, t), e.trigger(n + ":" + t.name, t)
    }, fr = function (e, t) {
        return t.prototype.name = e, function () {
            hr(this, {name: e, plugin: t, instance: null}, !0);
            for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
            var o = new (Function.prototype.bind.apply(t, [null].concat([this].concat(n))));
            return this[e] = function () {
                return o
            }, hr(this, o.getEventHash()), o
        }
    }, vr = function () {
        function e(t) {
            if (D(this, e), this.constructor === e) throw new Error("Plugin must be sub-classed; not directly instantiated.");
            this.player = t, pt(this), delete this.trigger, ht(this, this.constructor.defaultState), dr(t, this.name), this.dispose = $e(this, this.dispose), t.on("dispose", this.dispose)
        }

        return e.prototype.version = function () {
            return this.constructor.VERSION
        }, e.prototype.getEventHash = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.name = this.name, e.plugin = this.constructor, e.instance = this, e
        }, e.prototype.trigger = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Ve(this.eventBusEl_, e, this.getEventHash(t))
        }, e.prototype.handleStateChanged = function (e) {
        }, e.prototype.dispose = function () {
            var e = this.name, t = this.player;
            this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t.activePlugins_[e] = !1, this.player = this.state = null, t[e] = fr(e, cr[e])
        }, e.isBasic = function (t) {
            var i = "string" == typeof t ? pr(t) : t;
            return "function" == typeof i && !e.prototype.isPrototypeOf(i.prototype)
        }, e.registerPlugin = function (t, i) {
            if ("string" != typeof t) throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + (void 0 === t ? "undefined" : P(t)) + ".");
            if (ur(t)) J.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!'); else if (sr.prototype.hasOwnProperty(t)) throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!');
            if ("function" != typeof i) throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + (void 0 === i ? "undefined" : P(i)) + ".");
            return cr[t] = i, "plugin" !== t && (e.isBasic(i) ? sr.prototype[t] = function (e, t) {
                var i = function () {
                    hr(this, {name: e, plugin: t, instance: null}, !0);
                    var i = t.apply(this, arguments);
                    return dr(this, e), hr(this, {name: e, plugin: t, instance: i}), i
                };
                return Object.keys(t).forEach(function (e) {
                    i[e] = t[e]
                }), i
            }(t, i) : sr.prototype[t] = fr(t, i)), i
        }, e.deregisterPlugin = function (e) {
            if ("plugin" === e) throw new Error("Cannot de-register base plugin.");
            ur(e) && (delete cr[e], delete sr.prototype[e])
        }, e.getPlugins = function () {
            var e = void 0;
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(cr)).forEach(function (t) {
                var i = pr(t);
                i && ((e = e || {})[t] = i)
            }), e
        }, e.getPluginVersion = function (e) {
            var t = pr(e);
            return t && t.VERSION || ""
        }, e
    }();
    vr.getPlugin = pr, vr.BASE_PLUGIN_NAME = "plugin", vr.registerPlugin("plugin", vr), sr.prototype.usingPlugin = function (e) {
        return !!this.activePlugins_ && !0 === this.activePlugins_[e]
    }, sr.prototype.hasPlugin = function (e) {
        return !!ur(e)
    };
    "undefined" == typeof HTMLVideoElement && ee() && (o.createElement("video"), o.createElement("audio"), o.createElement("track"), o.createElement("video-js"));
    var gr = function (e) {
        return 0 === e.indexOf("#") ? e.slice(1) : e
    };

    function mr(e, t, i) {
        var n = mr.getPlayer(e);
        if (n) return t && J.warn('Player "' + e + '" is already initialised. Options will not be applied.'), i && n.ready(i), n;
        var r = "string" == typeof e ? Te("#" + gr(e)) : e;
        if (!te(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        o.body.contains(r) || J.warn("The element supplied is not included in the DOM"), t = t || {}, mr.hooks("beforesetup").forEach(function (e) {
            var i = e(r, vt(t));
            Q(i) && !Array.isArray(i) ? t = vt(t, i) : J.error("please return an object in beforesetup hooks")
        });
        var a = gt.getComponent("Player");
        return n = new a(r, t, i), mr.hooks("setup").forEach(function (e) {
            return e(n)
        }), n
    }

    if (mr.hooks_ = {}, mr.hooks = function (e, t) {
            return mr.hooks_[e] = mr.hooks_[e] || [], t && (mr.hooks_[e] = mr.hooks_[e].concat(t)), mr.hooks_[e]
        }, mr.hook = function (e, t) {
            mr.hooks(e, t)
        }, mr.hookOnce = function (e, t) {
            mr.hooks(e, [].concat(t).map(function (t) {
                return function i() {
                    return mr.removeHook(e, i), t.apply(void 0, arguments)
                }
            }))
        }, mr.removeHook = function (e, t) {
            var i = mr.hooks(e).indexOf(t);
            return !(i <= -1) && (mr.hooks_[e] = mr.hooks_[e].slice(), mr.hooks_[e].splice(i, 1), !0)
        }, !0 !== r.VIDEOJS_NO_DYNAMIC_STYLE && ee()) {
        var Ar = Te(".vjs-styles-defaults");
        if (!Ar) {
            Ar = qe("vjs-styles-defaults");
            var br = Te("head");
            br && br.insertBefore(Ar, br.firstChild), Ke(Ar, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
        }
    }
    Ze(1, mr), mr.VERSION = u, mr.options = sr.prototype.options_, mr.getPlayers = function () {
        return sr.players
    }, mr.getPlayer = function (e) {
        var t = sr.players, i = void 0;
        if ("string" == typeof e) {
            var n = gr(e), r = t[n];
            if (r) return r;
            i = Te("#" + n)
        } else i = e;
        if (te(i)) {
            var o = i, a = o.player, s = o.playerId;
            if (a || t[s]) return a || t[s]
        }
    }, mr.getAllPlayers = function () {
        return Object.keys(sr.players).map(function (e) {
            return sr.players[e]
        }).filter(Boolean)
    }, mr.players = sr.players, mr.getComponent = gt.getComponent, mr.registerComponent = function (e, t) {
        di.isTech(t) && J.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), gt.registerComponent.call(gt, e, t)
    }, mr.getTech = di.getTech, mr.registerTech = di.registerTech, mr.use = function (e, t) {
        hi[e] = hi[e] || [], hi[e].push(t)
    }, !T && Object.defineProperty ? (Object.defineProperty(mr, "middleware", {
        value: {},
        writeable: !1,
        enumerable: !0
    }), Object.defineProperty(mr.middleware, "TERMINATOR", {
        value: vi,
        writeable: !1,
        enumerable: !0
    })) : mr.middleware = {TERMINATOR: vi}, mr.browser = I, mr.TOUCH_ENABLED = M, mr.extend = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = function () {
            e.apply(this, arguments)
        }, n = {};
        for (var r in"object" === (void 0 === t ? "undefined" : P(t)) ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), n = t) : "function" == typeof t && (i = t), function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : P(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (e.super_ = t)
        }(i, e), n) n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
        return i
    }, mr.mergeOptions = vt, mr.bind = $e, mr.registerPlugin = vr.registerPlugin, mr.plugin = function (e, t) {
        return J.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), vr.registerPlugin(e, t)
    }, mr.getPlugins = vr.getPlugins, mr.getPlugin = vr.getPlugin, mr.getPluginVersion = vr.getPluginVersion, mr.addLanguage = function (e, t) {
        var i;
        return e = ("" + e).toLowerCase(), mr.options.languages = vt(mr.options.languages, ((i = {})[e] = t, i)), mr.options.languages[e]
    }, mr.log = J, mr.createTimeRange = mr.createTimeRanges = bt, mr.formatTime = Fi, mr.setFormatTime = function (e) {
        Li = e
    }, mr.resetFormatTime = function () {
        Li = Ni
    }, mr.parseUrl = Zt, mr.isCrossOrigin = $t, mr.EventTarget = it, mr.on = He, mr.one = Ge, mr.off = Qe, mr.trigger = Ve, mr.xhr = l, mr.TextTrack = ni, mr.AudioTrack = ri, mr.VideoTrack = oi, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function (e) {
        mr[e] = function () {
            return J.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), Se[e].apply(null, arguments)
        }
    }), mr.computedStyle = Z, mr.dom = Se, mr.url = ei, e.exports = mr
}, function (e, t, i) {
    (function (t) {
        var n, r = void 0 !== t ? t : "undefined" != typeof window ? window : {}, o = i(41);
        "undefined" != typeof document ? n = document : (n = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = r["__GLOBAL_DOCUMENT_CACHE@4"] = o), e.exports = n
    }).call(this, i(4))
}, function (e, t) {
}, function (e, t) {
    function i(e) {
        return e.replace(/\n\r?\s*/g, "")
    }

    e.exports = function (e) {
        for (var t = "", n = 0; n < arguments.length; n++) t += i(e[n]) + (arguments[n + 1] || "");
        return t
    }
}, function (e, t) {
    e.exports = function (e, t) {
        var i, n = null;
        try {
            i = JSON.parse(e, t)
        } catch (e) {
            n = e
        }
        return [n, i]
    }
}, function (e, t, i) {
    "use strict";
    var n = i(5), r = i(45), o = i(46), a = i(50);

    function s(e, t, i) {
        var n = e;
        return r(t) ? (i = t, "string" == typeof e && (n = {uri: e})) : n = a(t, {uri: e}), n.callback = i, n
    }

    function l(e, t, i) {
        return c(t = s(e, t, i))
    }

    function c(e) {
        if (void 0 === e.callback) throw new Error("callback argument missing");
        var t = !1, i = function (i, n, r) {
            t || (t = !0, e.callback(i, n, r))
        };

        function n(e) {
            return clearTimeout(u), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, i(e, m)
        }

        function r() {
            if (!s) {
                var t;
                clearTimeout(u), t = e.useXDR && void 0 === c.status ? 200 : 1223 === c.status ? 204 : c.status;
                var n = m, r = null;
                return 0 !== t ? (n = {
                    body: function () {
                        var e = void 0;
                        if (e = c.response ? c.response : c.responseText || function (e) {
                                if ("document" === e.responseType) return e.responseXML;
                                var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                                return "" !== e.responseType || t ? null : e.responseXML
                            }(c), g) try {
                            e = JSON.parse(e)
                        } catch (e) {
                        }
                        return e
                    }(), statusCode: t, method: d, headers: {}, url: p, rawRequest: c
                }, c.getAllResponseHeaders && (n.headers = o(c.getAllResponseHeaders()))) : r = new Error("Internal XMLHttpRequest Error"), i(r, n, n.body)
            }
        }

        var a, s, c = e.xhr || null;
        c || (c = e.cors || e.useXDR ? new l.XDomainRequest : new l.XMLHttpRequest);
        var u, p = c.url = e.uri || e.url, d = c.method = e.method || "GET", h = e.body || e.data,
            f = c.headers = e.headers || {}, v = !!e.sync, g = !1,
            m = {body: void 0, headers: {}, statusCode: 0, method: d, url: p, rawRequest: c};
        if ("json" in e && !1 !== e.json && (g = !0, f.accept || f.Accept || (f.Accept = "application/json"), "GET" !== d && "HEAD" !== d && (f["content-type"] || f["Content-Type"] || (f["Content-Type"] = "application/json"), h = JSON.stringify(!0 === e.json ? h : e.json))), c.onreadystatechange = function () {
                4 === c.readyState && setTimeout(r, 0)
            }, c.onload = r, c.onerror = n, c.onprogress = function () {
            }, c.onabort = function () {
                s = !0
            }, c.ontimeout = n, c.open(d, p, !v, e.username, e.password), v || (c.withCredentials = !!e.withCredentials), !v && e.timeout > 0 && (u = setTimeout(function () {
                if (!s) {
                    s = !0, c.abort("timeout");
                    var e = new Error("XMLHttpRequest timeout");
                    e.code = "ETIMEDOUT", n(e)
                }
            }, e.timeout)), c.setRequestHeader) for (a in f) f.hasOwnProperty(a) && c.setRequestHeader(a, f[a]); else if (e.headers && !function (e) {
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0
            }(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in e && (c.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(c), c.send(h || null), c
    }

    e.exports = l, l.XMLHttpRequest = n.XMLHttpRequest || function () {
    }, l.XDomainRequest = "withCredentials" in new l.XMLHttpRequest ? l.XMLHttpRequest : n.XDomainRequest, function (e, t) {
        for (var i = 0; i < e.length; i++) t(e[i])
    }(["get", "put", "post", "patch", "head", "delete"], function (e) {
        l["delete" === e ? "del" : e] = function (t, i, n) {
            return (i = s(t, i, n)).method = e.toUpperCase(), c(i)
        }
    })
}, function (e, t) {
    e.exports = function (e) {
        var t = i.call(e);
        return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
    };
    var i = Object.prototype.toString
}, function (e, t, i) {
    var n = i(47), r = i(48);
    e.exports = function (e) {
        if (!e) return {};
        var t = {};
        return r(n(e).split("\n"), function (e) {
            var i = e.indexOf(":"), r = n(e.slice(0, i)).toLowerCase(), o = n(e.slice(i + 1));
            void 0 === t[r] ? t[r] = o : !function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }(t[r]) ? t[r] = [t[r], o] : t[r].push(o)
        }), t
    }
}, function (e, t) {
    (t = e.exports = function (e) {
        return e.replace(/^\s*|\s*$/g, "")
    }).left = function (e) {
        return e.replace(/^\s*/, "")
    }, t.right = function (e) {
        return e.replace(/\s*$/, "")
    }
}, function (e, t, i) {
    "use strict";
    var n = i(49), r = Object.prototype.toString, o = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, i) {
        if (!n(t)) throw new TypeError("iterator must be a function");
        var a;
        arguments.length >= 3 && (a = i), "[object Array]" === r.call(e) ? function (e, t, i) {
            for (var n = 0, r = e.length; n < r; n++) o.call(e, n) && (null == i ? t(e[n], n, e) : t.call(i, e[n], n, e))
        }(e, t, a) : "string" == typeof e ? function (e, t, i) {
            for (var n = 0, r = e.length; n < r; n++) null == i ? t(e.charAt(n), n, e) : t.call(i, e.charAt(n), n, e)
        }(e, t, a) : function (e, t, i) {
            for (var n in e) o.call(e, n) && (null == i ? t(e[n], n, e) : t.call(i, e[n], n, e))
        }(e, t, a)
    }
}, function (e, t, i) {
    "use strict";
    var n = Function.prototype.toString, r = /^\s*class\b/, o = function (e) {
        try {
            var t = n.call(e);
            return r.test(t)
        } catch (e) {
            return !1
        }
    }, a = Object.prototype.toString, s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e.exports = function (e) {
        if (!e) return !1;
        if ("function" != typeof e && "object" != typeof e) return !1;
        if ("function" == typeof e && !e.prototype) return !0;
        if (s) return function (e) {
            try {
                return !o(e) && (n.call(e), !0)
            } catch (e) {
                return !1
            }
        }(e);
        if (o(e)) return !1;
        var t = a.call(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }
}, function (e, t) {
    e.exports = function () {
        for (var e = {}, t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) i.call(n, r) && (e[r] = n[r])
        }
        return e
    };
    var i = Object.prototype.hasOwnProperty
}, function (e, t, i) {
    var n = i(5), r = e.exports = {WebVTT: i(52), VTTCue: i(53), VTTRegion: i(54)};
    n.vttjs = r, n.WebVTT = r.WebVTT;
    var o = r.VTTCue, a = r.VTTRegion, s = n.VTTCue, l = n.VTTRegion;
    r.shim = function () {
        n.VTTCue = o, n.VTTRegion = a
    }, r.restore = function () {
        n.VTTCue = s, n.VTTRegion = l
    }, n.VTTCue || r.shim()
}, function (e, t) {
    var i = Object.create || function () {
        function e() {
        }

        return function (t) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return e.prototype = t, new e
        }
    }();

    function n(e, t) {
        this.name = "ParsingError", this.code = e.code, this.message = t || e.message
    }

    function r(e) {
        function t(e, t, i, n) {
            return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | n) / 1e3
        }

        var i = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
    }

    function o() {
        this.values = i(null)
    }

    function a(e, t, i, n) {
        var r = n ? e.split(n) : [e];
        for (var o in r) if ("string" == typeof r[o]) {
            var a = r[o].split(i);
            if (2 === a.length) t(a[0], a[1])
        }
    }

    function s(e, t, i) {
        var s = e;

        function l() {
            var t = r(e);
            if (null === t) throw new n(n.Errors.BadTimeStamp, "Malformed timestamp: " + s);
            return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
        }

        function c() {
            e = e.replace(/^\s+/, "")
        }

        if (c(), t.startTime = l(), c(), "--\x3e" !== e.substr(0, 3)) throw new n(n.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + s);
        e = e.substr(3), c(), t.endTime = l(), c(), function (e, t) {
            var n = new o;
            a(e, function (e, t) {
                switch (e) {
                    case"region":
                        for (var r = i.length - 1; r >= 0; r--) if (i[r].id === t) {
                            n.set(e, i[r].region);
                            break
                        }
                        break;
                    case"vertical":
                        n.alt(e, t, ["rl", "lr"]);
                        break;
                    case"line":
                        var o = t.split(","), a = o[0];
                        n.integer(e, a), n.percent(e, a) && n.set("snapToLines", !1), n.alt(e, a, ["auto"]), 2 === o.length && n.alt("lineAlign", o[1], ["start", "middle", "end"]);
                        break;
                    case"position":
                        o = t.split(","), n.percent(e, o[0]), 2 === o.length && n.alt("positionAlign", o[1], ["start", "middle", "end"]);
                        break;
                    case"size":
                        n.percent(e, t);
                        break;
                    case"align":
                        n.alt(e, t, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), t.region = n.get("region", null), t.vertical = n.get("vertical", ""), t.line = n.get("line", "auto"), t.lineAlign = n.get("lineAlign", "start"), t.snapToLines = n.get("snapToLines", !0), t.size = n.get("size", 100), t.align = n.get("align", "middle"), t.position = n.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, t.align), t.positionAlign = n.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, t.align)
        }(e, t)
    }

    n.prototype = i(Error.prototype), n.prototype.constructor = n, n.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
    }, o.prototype = {
        set: function (e, t) {
            this.get(e) || "" === t || (this.values[e] = t)
        }, get: function (e, t, i) {
            return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
        }, has: function (e) {
            return e in this.values
        }, alt: function (e, t, i) {
            for (var n = 0; n < i.length; ++n) if (t === i[n]) {
                this.set(e, t);
                break
            }
        }, integer: function (e, t) {
            /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
        }, percent: function (e, t) {
            return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
        }
    };
    var l = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " "},
        c = {c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span"},
        u = {v: "title", lang: "lang"}, p = {rt: "ruby"};

    function d(e, t) {
        function i() {
            if (!t) return null;
            var e = t.match(/^([^<]*)(<[^>]*>?)?/);
            return function (e) {
                return t = t.substr(e.length), e
            }(e[1] ? e[1] : e[2])
        }

        function n(e) {
            return l[e]
        }

        function o(e) {
            for (; A = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) e = e.replace(A[0], n);
            return e
        }

        function a(e, t) {
            return !p[t.localName] || p[t.localName] === e.localName
        }

        function s(t, i) {
            var n = c[t];
            if (!n) return null;
            var r = e.document.createElement(n);
            r.localName = n;
            var o = u[t];
            return o && i && (r[o] = i.trim()), r
        }

        for (var d, h = e.document.createElement("div"), f = h, v = []; null !== (d = i());) if ("<" !== d[0]) f.appendChild(e.document.createTextNode(o(d))); else {
            if ("/" === d[1]) {
                v.length && v[v.length - 1] === d.substr(2).replace(">", "") && (v.pop(), f = f.parentNode);
                continue
            }
            var g, m = r(d.substr(1, d.length - 2));
            if (m) {
                g = e.document.createProcessingInstruction("timestamp", m), f.appendChild(g);
                continue
            }
            var A = d.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
            if (!A) continue;
            if (!(g = s(A[1], A[3]))) continue;
            if (!a(f, g)) continue;
            A[2] && (g.className = A[2].substr(1).replace(".", " ")), v.push(A[1]), f.appendChild(g), f = g
        }
        return h
    }

    var h = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];

    function f(e) {
        for (var t = 0; t < h.length; t++) {
            var i = h[t];
            if (e >= i[0] && e <= i[1]) return !0
        }
        return !1
    }

    function v() {
    }

    function g(e, t, i) {
        var n = /MSIE\s8\.0/.test(navigator.userAgent), r = "rgba(255, 255, 255, 1)", o = "rgba(0, 0, 0, 0.8)";
        n && (r = "rgb(255, 255, 255)", o = "rgb(0, 0, 0)"), v.call(this), this.cue = t, this.cueDiv = d(e, t.text);
        var a = {
            color: r,
            backgroundColor: o,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        n || (a.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl", a.unicodeBidi = "plaintext"), this.applyStyles(a, this.cueDiv), this.div = e.document.createElement("div"), a = {
            textAlign: "middle" === t.align ? "center" : t.align,
            font: i.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, n || (a.direction = function (e) {
            var t = [], i = "";
            if (!e || !e.childNodes) return "ltr";

            function n(e, t) {
                for (var i = t.childNodes.length - 1; i >= 0; i--) e.push(t.childNodes[i])
            }

            function r(e) {
                if (!e || !e.length) return null;
                var t = e.pop(), i = t.textContent || t.innerText;
                if (i) {
                    var o = i.match(/^.*(\n|\r)/);
                    return o ? (e.length = 0, o[0]) : i
                }
                return "ruby" === t.tagName ? r(e) : t.childNodes ? (n(e, t), r(e)) : void 0
            }

            for (n(t, e); i = r(t);) for (var o = 0; o < i.length; o++) if (f(i.charCodeAt(o))) return "rtl";
            return "ltr"
        }(this.cueDiv), a.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(a), this.div.appendChild(this.cueDiv);
        var s = 0;
        switch (t.positionAlign) {
            case"start":
                s = t.position;
                break;
            case"middle":
                s = t.position - t.size / 2;
                break;
            case"end":
                s = t.position - t.size
        }
        "" === t.vertical ? this.applyStyles({
            left: this.formatStyle(s, "%"),
            width: this.formatStyle(t.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(s, "%"),
            height: this.formatStyle(t.size, "%")
        }), this.move = function (e) {
            this.applyStyles({
                top: this.formatStyle(e.top, "px"),
                bottom: this.formatStyle(e.bottom, "px"),
                left: this.formatStyle(e.left, "px"),
                right: this.formatStyle(e.right, "px"),
                height: this.formatStyle(e.height, "px"),
                width: this.formatStyle(e.width, "px")
            })
        }
    }

    function m(e) {
        var t, i, n, r, o = /MSIE\s8\.0/.test(navigator.userAgent);
        if (e.div) {
            i = e.div.offsetHeight, n = e.div.offsetWidth, r = e.div.offsetTop;
            var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
            e = e.div.getBoundingClientRect(), t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) : 0
        }
        this.left = e.left, this.right = e.right, this.top = e.top || r, this.height = e.height || i, this.bottom = e.bottom || r + (e.height || i), this.width = e.width || n, this.lineHeight = void 0 !== t ? t : e.lineHeight, o && !this.lineHeight && (this.lineHeight = 13)
    }

    function A(e, t, i, n) {
        var r = new m(t), o = t.cue, a = function (e) {
            if ("number" == typeof e.line && (e.snapToLines || e.line >= 0 && e.line <= 100)) return e.line;
            if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
            for (var t = e.track, i = t.textTrackList, n = 0, r = 0; r < i.length && i[r] !== t; r++) "showing" === i[r].mode && n++;
            return -1 * ++n
        }(o), s = [];
        if (o.snapToLines) {
            var l;
            switch (o.vertical) {
                case"":
                    s = ["+y", "-y"], l = "height";
                    break;
                case"rl":
                    s = ["+x", "-x"], l = "width";
                    break;
                case"lr":
                    s = ["-x", "+x"], l = "width"
            }
            var c = r.lineHeight, u = c * Math.round(a), p = i[l] + c, d = s[0];
            Math.abs(u) > p && (u = u < 0 ? -1 : 1, u *= Math.ceil(p / c) * c), a < 0 && (u += "" === o.vertical ? i.height : i.width, s = s.reverse()), r.move(d, u)
        } else {
            var h = r.lineHeight / i.height * 100;
            switch (o.lineAlign) {
                case"middle":
                    a -= h / 2;
                    break;
                case"end":
                    a -= h
            }
            switch (o.vertical) {
                case"":
                    t.applyStyles({top: t.formatStyle(a, "%")});
                    break;
                case"rl":
                    t.applyStyles({left: t.formatStyle(a, "%")});
                    break;
                case"lr":
                    t.applyStyles({right: t.formatStyle(a, "%")})
            }
            s = ["+y", "-x", "+x", "-y"], r = new m(t)
        }
        var f = function (e, t) {
            for (var r, o = new m(e), a = 1, s = 0; s < t.length; s++) {
                for (; e.overlapsOppositeAxis(i, t[s]) || e.within(i) && e.overlapsAny(n);) e.move(t[s]);
                if (e.within(i)) return e;
                var l = e.intersectPercentage(i);
                a > l && (r = new m(e), a = l), e = new m(o)
            }
            return r || o
        }(r, s);
        t.move(f.toCSSCompatValues(i))
    }

    function b() {
    }

    v.prototype.applyStyles = function (e, t) {
        for (var i in t = t || this.div, e) e.hasOwnProperty(i) && (t.style[i] = e[i])
    }, v.prototype.formatStyle = function (e, t) {
        return 0 === e ? 0 : e + t
    }, g.prototype = i(v.prototype), g.prototype.constructor = g, m.prototype.move = function (e, t) {
        switch (t = void 0 !== t ? t : this.lineHeight, e) {
            case"+x":
                this.left += t, this.right += t;
                break;
            case"-x":
                this.left -= t, this.right -= t;
                break;
            case"+y":
                this.top += t, this.bottom += t;
                break;
            case"-y":
                this.top -= t, this.bottom -= t
        }
    }, m.prototype.overlaps = function (e) {
        return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
    }, m.prototype.overlapsAny = function (e) {
        for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return !0;
        return !1
    }, m.prototype.within = function (e) {
        return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
    }, m.prototype.overlapsOppositeAxis = function (e, t) {
        switch (t) {
            case"+x":
                return this.left < e.left;
            case"-x":
                return this.right > e.right;
            case"+y":
                return this.top < e.top;
            case"-y":
                return this.bottom > e.bottom
        }
    }, m.prototype.intersectPercentage = function (e) {
        return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
    }, m.prototype.toCSSCompatValues = function (e) {
        return {
            top: this.top - e.top,
            bottom: e.bottom - this.bottom,
            left: this.left - e.left,
            right: e.right - this.right,
            height: this.height,
            width: this.width
        }
    }, m.getSimpleBoxPosition = function (e) {
        var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
            i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
            n = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
        return {
            left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
            right: e.right,
            top: e.top || n,
            height: e.height || t,
            bottom: e.bottom || n + (e.height || t),
            width: e.width || i
        }
    }, b.StringDecoder = function () {
        return {
            decode: function (e) {
                if (!e) return "";
                if ("string" != typeof e) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(e))
            }
        }
    }, b.convertCueToDOMTree = function (e, t) {
        return e && t ? d(e, t) : null
    };
    b.processCues = function (e, t, i) {
        if (!e || !t || !i) return null;
        for (; i.firstChild;) i.removeChild(i.firstChild);
        var n = e.document.createElement("div");
        if (n.style.position = "absolute", n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.margin = "1.5%", i.appendChild(n), function (e) {
                for (var t = 0; t < e.length; t++) if (e[t].hasBeenReset || !e[t].displayState) return !0;
                return !1
            }(t)) {
            var r = [], o = m.getSimpleBoxPosition(n),
                a = {font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"};
            !function () {
                for (var i, s, l = 0; l < t.length; l++) s = t[l], i = new g(e, s, a), n.appendChild(i.div), A(0, i, o, r), s.displayState = i.div, r.push(m.getSimpleBoxPosition(i))
            }()
        } else for (var s = 0; s < t.length; s++) n.appendChild(t[s].displayState)
    }, b.Parser = function (e, t, i) {
        i || (i = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
    }, b.Parser.prototype = {
        reportOrThrowError: function (e) {
            if (!(e instanceof n)) throw e;
            this.onparsingerror && this.onparsingerror(e)
        }, parse: function (e) {
            var t = this;

            function i() {
                for (var e = t.buffer, i = 0; i < e.length && "\r" !== e[i] && "\n" !== e[i];) ++i;
                var n = e.substr(0, i);
                return "\r" === e[i] && ++i, "\n" === e[i] && ++i, t.buffer = e.substr(i), n
            }

            function l(e) {
                e.match(/X-TIMESTAMP-MAP/) ? a(e, function (e, i) {
                    switch (e) {
                        case"X-TIMESTAMP-MAP":
                            !function (e) {
                                var i = new o;
                                a(e, function (e, t) {
                                    switch (e) {
                                        case"MPEGT":
                                            i.integer(e + "S", t);
                                            break;
                                        case"LOCA":
                                            i.set(e + "L", r(t))
                                    }
                                }, /[^\d]:/, /,/), t.ontimestampmap && t.ontimestampmap({
                                    MPEGTS: i.get("MPEGTS"),
                                    LOCAL: i.get("LOCAL")
                                })
                            }(i)
                    }
                }, /=/) : a(e, function (e, i) {
                    switch (e) {
                        case"Region":
                            !function (e) {
                                var i = new o;
                                if (a(e, function (e, t) {
                                        switch (e) {
                                            case"id":
                                                i.set(e, t);
                                                break;
                                            case"width":
                                                i.percent(e, t);
                                                break;
                                            case"lines":
                                                i.integer(e, t);
                                                break;
                                            case"regionanchor":
                                            case"viewportanchor":
                                                var n = t.split(",");
                                                if (2 !== n.length) break;
                                                var r = new o;
                                                if (r.percent("x", n[0]), r.percent("y", n[1]), !r.has("x") || !r.has("y")) break;
                                                i.set(e + "X", r.get("x")), i.set(e + "Y", r.get("y"));
                                                break;
                                            case"scroll":
                                                i.alt(e, t, ["up"])
                                        }
                                    }, /=/, /\s/), i.has("id")) {
                                    var n = new (t.vttjs.VTTRegion || t.window.VTTRegion);
                                    n.width = i.get("width", 100), n.lines = i.get("lines", 3), n.regionAnchorX = i.get("regionanchorX", 0), n.regionAnchorY = i.get("regionanchorY", 100), n.viewportAnchorX = i.get("viewportanchorX", 0), n.viewportAnchorY = i.get("viewportanchorY", 100), n.scroll = i.get("scroll", ""), t.onregion && t.onregion(n), t.regionList.push({
                                        id: i.get("id"),
                                        region: n
                                    })
                                }
                            }(i)
                    }
                }, /:/)
            }

            e && (t.buffer += t.decoder.decode(e, {stream: !0}));
            try {
                var c;
                if ("INITIAL" === t.state) {
                    if (!/\r\n|\n/.test(t.buffer)) return this;
                    var u = (c = i()).match(/^WEBVTT([ \t].*)?$/);
                    if (!u || !u[0]) throw new n(n.Errors.BadSignature);
                    t.state = "HEADER"
                }
                for (var p = !1; t.buffer;) {
                    if (!/\r\n|\n/.test(t.buffer)) return this;
                    switch (p ? p = !1 : c = i(), t.state) {
                        case"HEADER":
                            /:/.test(c) ? l(c) : c || (t.state = "ID");
                            continue;
                        case"NOTE":
                            c || (t.state = "ID");
                            continue;
                        case"ID":
                            if (/^NOTE($|[ \t])/.test(c)) {
                                t.state = "NOTE";
                                break
                            }
                            if (!c) continue;
                            if (t.cue = new (t.vttjs.VTTCue || t.window.VTTCue)(0, 0, ""), t.state = "CUE", -1 === c.indexOf("--\x3e")) {
                                t.cue.id = c;
                                continue
                            }
                        case"CUE":
                            try {
                                s(c, t.cue, t.regionList)
                            } catch (e) {
                                t.reportOrThrowError(e), t.cue = null, t.state = "BADCUE";
                                continue
                            }
                            t.state = "CUETEXT";
                            continue;
                        case"CUETEXT":
                            var d = -1 !== c.indexOf("--\x3e");
                            if (!c || d && (p = !0)) {
                                t.oncue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                                continue
                            }
                            t.cue.text && (t.cue.text += "\n"), t.cue.text += c;
                            continue;
                        case"BADCUE":
                            c || (t.state = "ID");
                            continue
                    }
                }
            } catch (e) {
                t.reportOrThrowError(e), "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        }, flush: function () {
            try {
                if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new n(n.Errors.BadSignature)
            } catch (e) {
                this.reportOrThrowError(e)
            }
            return this.onflush && this.onflush(), this
        }
    }, e.exports = b
}, function (e, t) {
    var i = "auto", n = {"": !0, lr: !0, rl: !0}, r = {start: !0, middle: !0, end: !0, left: !0, right: !0};

    function o(e) {
        return "string" == typeof e && (!!r[e.toLowerCase()] && e.toLowerCase())
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) e[n] = i[n]
        }
        return e
    }

    function s(e, t, r) {
        var s = this, l = /MSIE\s8\.0/.test(navigator.userAgent), c = {};
        l ? s = document.createElement("custom") : c.enumerable = !0, s.hasBeenReset = !1;
        var u = "", p = !1, d = e, h = t, f = r, v = null, g = "", m = !0, A = "auto", b = "start", y = 50,
            w = "middle", x = 50, _ = "middle";
        if (Object.defineProperty(s, "id", a({}, c, {
                get: function () {
                    return u
                }, set: function (e) {
                    u = "" + e
                }
            })), Object.defineProperty(s, "pauseOnExit", a({}, c, {
                get: function () {
                    return p
                }, set: function (e) {
                    p = !!e
                }
            })), Object.defineProperty(s, "startTime", a({}, c, {
                get: function () {
                    return d
                }, set: function (e) {
                    if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                    d = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "endTime", a({}, c, {
                get: function () {
                    return h
                }, set: function (e) {
                    if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                    h = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "text", a({}, c, {
                get: function () {
                    return f
                }, set: function (e) {
                    f = "" + e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "region", a({}, c, {
                get: function () {
                    return v
                }, set: function (e) {
                    v = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "vertical", a({}, c, {
                get: function () {
                    return g
                }, set: function (e) {
                    var t = function (e) {
                        return "string" == typeof e && !!n[e.toLowerCase()] && e.toLowerCase()
                    }(e);
                    if (!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
                    g = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "snapToLines", a({}, c, {
                get: function () {
                    return m
                }, set: function (e) {
                    m = !!e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "line", a({}, c, {
                get: function () {
                    return A
                }, set: function (e) {
                    if ("number" != typeof e && e !== i) throw new SyntaxError("An invalid number or illegal string was specified.");
                    A = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "lineAlign", a({}, c, {
                get: function () {
                    return b
                }, set: function (e) {
                    var t = o(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    b = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "position", a({}, c, {
                get: function () {
                    return y
                }, set: function (e) {
                    if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                    y = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "positionAlign", a({}, c, {
                get: function () {
                    return w
                }, set: function (e) {
                    var t = o(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    w = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "size", a({}, c, {
                get: function () {
                    return x
                }, set: function (e) {
                    if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                    x = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "align", a({}, c, {
                get: function () {
                    return _
                }, set: function (e) {
                    var t = o(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    _ = t, this.hasBeenReset = !0
                }
            })), s.displayState = void 0, l) return s
    }

    s.prototype.getCueAsHTML = function () {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }, e.exports = s
}, function (e, t) {
    var i = {"": !0, up: !0};

    function n(e) {
        return "number" == typeof e && e >= 0 && e <= 100
    }

    e.exports = function () {
        var e = 100, t = 3, r = 0, o = 100, a = 0, s = 100, l = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0, get: function () {
                    return e
                }, set: function (t) {
                    if (!n(t)) throw new Error("Width must be between 0 and 100.");
                    e = t
                }
            }, lines: {
                enumerable: !0, get: function () {
                    return t
                }, set: function (e) {
                    if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
                    t = e
                }
            }, regionAnchorY: {
                enumerable: !0, get: function () {
                    return o
                }, set: function (e) {
                    if (!n(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    o = e
                }
            }, regionAnchorX: {
                enumerable: !0, get: function () {
                    return r
                }, set: function (e) {
                    if (!n(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    r = e
                }
            }, viewportAnchorY: {
                enumerable: !0, get: function () {
                    return s
                }, set: function (e) {
                    if (!n(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    s = e
                }
            }, viewportAnchorX: {
                enumerable: !0, get: function () {
                    return a
                }, set: function (e) {
                    if (!n(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    a = e
                }
            }, scroll: {
                enumerable: !0, get: function () {
                    return l
                }, set: function (e) {
                    var t = function (e) {
                        return "string" == typeof e && !!i[e.toLowerCase()] && e.toLowerCase()
                    }(e);
                    if (!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
                    l = t
                }
            }
        })
    }
}, function (e, t, i) {
    /*!
 * weui.js v1.1.4 (https://weui.io)
 * Copyright 2018, wechat ui team
 * MIT license
 */
    e.exports = function (e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {exports: {}, id: n, loaded: !1};
            return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }

        var i = {};
        return t.m = e, t.c = i, t.p = "", t(0)
    }([function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = i(1), o = n(r), a = i(7), s = n(a), l = i(8), c = n(l), u = i(9), p = n(u), d = i(11), h = n(d),
            f = i(13), v = n(f), g = i(15), m = n(g), A = i(17), b = n(A), y = i(18), w = n(y), x = i(19), _ = n(x),
            k = i(20), j = n(k), C = i(24), T = i(30), E = n(T), S = i(32), B = n(S);
        t.default = {
            dialog: o.default,
            alert: s.default,
            confirm: c.default,
            toast: p.default,
            loading: h.default,
            actionSheet: v.default,
            topTips: m.default,
            searchBar: b.default,
            tab: w.default,
            form: _.default,
            uploader: j.default,
            picker: C.picker,
            datePicker: C.datePicker,
            gallery: E.default,
            slider: B.default
        }, e.exports = t.default
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = i(2), o = n(r), a = i(6), s = n(a), l = void 0;
        t.default = function () {
            function e(t) {
                e = o.default.noop, c.addClass("weui-animate-fade-out"), a.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd", function () {
                    r.remove(), l = !1, t && t()
                })
            }

            function t(t) {
                e(t)
            }

            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (l) return l;
            var n = o.default.os.android;
            i = o.default.extend({
                title: null,
                content: "",
                className: "",
                buttons: [{label: "确定", type: "primary", onClick: o.default.noop}],
                isAndroid: n
            }, i);
            var r = (0, o.default)(o.default.render(s.default, i)), a = r.find(".weui-dialog"),
                c = r.find(".weui-mask");
            return (0, o.default)("body").append(r), c.addClass("weui-animate-fade-in"), a.addClass("weui-animate-fade-in"), r.on("click", ".weui-dialog__btn", function (e) {
                var n = (0, o.default)(this).index();
                i.buttons[n].onClick ? !1 !== i.buttons[n].onClick.call(this, e) && t() : t()
            }).on("touchmove", function (e) {
                e.stopPropagation(), e.preventDefault()
            }), (l = r[0]).hide = t, l
        }, e.exports = t.default
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        i(3);
        var o = i(4), a = n(o), s = i(5), l = n(s);
        (function (e) {
            var t = this.os = {}, i = e.match(/(Android);?[\s\/]+([\d.]+)?/);
            i && (t.android = !0, t.version = i[2])
        }).call(l.default, navigator.userAgent), (0, a.default)(l.default.fn, {
            append: function (e) {
                return e instanceof HTMLElement || (e = e[0]), this.forEach(function (t) {
                    t.appendChild(e)
                }), this
            }, remove: function () {
                return this.forEach(function (e) {
                    e.parentNode.removeChild(e)
                }), this
            }, find: function (e) {
                return (0, l.default)(e, this)
            }, addClass: function (e) {
                return this.forEach(function (t) {
                    t.classList.add(e)
                }), this
            }, removeClass: function (e) {
                return this.forEach(function (t) {
                    t.classList.remove(e)
                }), this
            }, eq: function (e) {
                return (0, l.default)(this[e])
            }, show: function () {
                return this.forEach(function (e) {
                    e.style.display = "block"
                }), this
            }, hide: function () {
                return this.forEach(function (e) {
                    e.style.display = "none"
                }), this
            }, html: function (e) {
                return this.forEach(function (t) {
                    t.innerHTML = e
                }), this
            }, css: function (e) {
                var t = this;
                return Object.keys(e).forEach(function (i) {
                    t.forEach(function (t) {
                        t.style[i] = e[i]
                    })
                }), this
            }, on: function (e, t, i) {
                var n = "string" == typeof t && "function" == typeof i;
                return n || (i = t), this.forEach(function (r) {
                    e.split(" ").forEach(function (e) {
                        r.addEventListener(e, function (e) {
                            n ? this.contains(e.target.closest(t)) && i.call(e.target, e) : i.call(this, e)
                        })
                    })
                }), this
            }, off: function (e, t, i) {
                return "function" == typeof t && (i = t, t = null), this.forEach(function (n) {
                    e.split(" ").forEach(function (e) {
                        "string" == typeof t ? n.querySelectorAll(t).forEach(function (t) {
                            t.removeEventListener(e, i)
                        }) : n.removeEventListener(e, i)
                    })
                }), this
            }, index: function () {
                var e = this[0], t = e.parentNode;
                return Array.prototype.indexOf.call(t.children, e)
            }, offAll: function () {
                var e = this;
                return this.forEach(function (t, i) {
                    var n = t.cloneNode(!0);
                    t.parentNode.replaceChild(n, t), e[i] = n
                }), this
            }, val: function () {
                var e = arguments;
                return arguments.length ? (this.forEach(function (t) {
                    t.value = e[0]
                }), this) : this[0].value
            }, attr: function () {
                var e = arguments, t = this;
                if ("object" == r(arguments[0])) {
                    var i = function () {
                        var i = e[0], n = t;
                        return Object.keys(i).forEach(function (e) {
                            n.forEach(function (t) {
                                t.setAttribute(e, i[e])
                            })
                        }), {v: t}
                    }();
                    if ("object" === (void 0 === i ? "undefined" : r(i))) return i.v
                }
                return "string" == typeof arguments[0] && arguments.length < 2 ? this[0].getAttribute(arguments[0]) : (this.forEach(function (t) {
                    t.setAttribute(e[0], e[1])
                }), this)
            }
        }), (0, a.default)(l.default, {
            extend: a.default, noop: function () {
            }, render: function (e, t) {
                var i = "var p=[];with(this){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');";
                return new Function(i).apply(t)
            }, getStyle: function (e, t) {
                var i, n = (e.ownerDocument || document).defaultView;
                return n && n.getComputedStyle ? (t = t.replace(/([A-Z])/g, "-$1").toLowerCase(), n.getComputedStyle(e, null).getPropertyValue(t)) : e.currentStyle ? (t = t.replace(/\-(\w)/g, function (e, t) {
                    return t.toUpperCase()
                }), i = e.currentStyle[t], /^\d+(em|pt|%|ex)?$/i.test(i) ? function (t) {
                    var i = e.style.left, n = e.runtimeStyle.left;
                    return e.runtimeStyle.left = e.currentStyle.left, e.style.left = t || 0, t = e.style.pixelLeft + "px", e.style.left = i, e.runtimeStyle.left = n, t
                }(i) : i) : void 0
            }
        }), t.default = l.default, e.exports = t.default
    }, function (e, t) {
        !function (e) {
            "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) {
                for (var t = this, i = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; i[n] && i[n] !== t;) ++n;
                return Boolean(i[n])
            }), "function" != typeof e.closest && (e.closest = function (e) {
                for (var t = this; t && 1 === t.nodeType;) {
                    if (t.matches(e)) return t;
                    t = t.parentNode
                }
                return null
            })
        }(window.Element.prototype)
    }, function (e, t) {
        "use strict";
        var i = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
        e.exports = function () {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, i = 0; i < 10; i++) t["_" + String.fromCharCode(i)] = i;
                var n = Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                });
                if ("0123456789" !== n.join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    r[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function (e, t) {
            for (var r, o, a = function (e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), s = 1; s < arguments.length; s++) {
                for (var l in r = Object(arguments[s])) i.call(r, l) && (a[l] = r[l]);
                if (Object.getOwnPropertySymbols) {
                    o = Object.getOwnPropertySymbols(r);
                    for (var c = 0; c < o.length; c++) n.call(r, o[c]) && (a[o[c]] = r[o[c]])
                }
            }
            return a
        }
    }, function (e, t, i) {
        var n;
        !function (i, r) {
            r = function (e, t, i) {
                function n(r, o, a) {
                    return a = Object.create(n.fn), r && a.push.apply(a, r[t] ? [r] : "" + r === r ? /</.test(r) ? ((o = e.createElement(o || t)).innerHTML = r, o.children) : o ? (o = n(o)[0]) ? o[i](r) : a : e[i](r) : "function" == typeof r ? e.readyState[7] ? r() : e[t]("DOMContentLoaded", r) : r), a
                }

                return n.fn = [], n.one = function (e, t) {
                    return n(e, t)[0] || null
                }, n
            }(document, "addEventListener", "querySelectorAll"), void 0 === (n = function () {
                return r
            }.apply(t, [])) || (e.exports = n)
        }()
    }, function (e, t) {
        e.exports = '<div class="<%=className%>"> <div class=weui-mask></div> <div class="weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class="weui-dialog__btn weui-dialog__btn_<%=buttons[i][\'type\']%>"><%=buttons[i][\'label\']%></a> <% } %> </div> </div> </div> '
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = i(2), a = n(o), s = i(1), l = n(s);
        t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default.noop, i = arguments[2];
            return "object" === (void 0 === t ? "undefined" : r(t)) && (i = t, t = a.default.noop), i = a.default.extend({
                content: e,
                buttons: [{label: "确定", type: "primary", onClick: t}]
            }, i), (0, l.default)(i)
        }, e.exports = t.default
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = i(2), a = n(o), s = i(1), l = n(s);
        t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default.noop,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default.noop, n = arguments[3];
            return "object" === (void 0 === t ? "undefined" : r(t)) ? (n = t, t = a.default.noop) : "object" === (void 0 === i ? "undefined" : r(i)) && (n = i, i = a.default.noop), n = a.default.extend({
                content: e,
                buttons: [{label: "取消", type: "default", onClick: i}, {label: "确定", type: "primary", onClick: t}]
            }, n), (0, l.default)(n)
        }, e.exports = t.default
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = i(2), o = n(r), a = i(10), s = n(a), l = void 0;
        t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (l) return l;
            "number" == typeof t && (t = {duration: t}), "function" == typeof t && (t = {callback: t}), t = o.default.extend({
                content: e,
                duration: 3e3,
                callback: o.default.noop,
                className: ""
            }, t);
            var i = (0, o.default)(o.default.render(s.default, t)), n = i.find(".weui-toast"), r = i.find(".weui-mask");
            return (0, o.default)("body").append(i), n.addClass("weui-animate-fade-in"), r.addClass("weui-animate-fade-in"), setTimeout(function () {
                r.addClass("weui-animate-fade-out"), n.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd", function () {
                    i.remove(), l = !1, t.callback()
                })
            }, t.duration), l = i[0], i[0]
        }, e.exports = t.default
    }, function (e, t) {
        e.exports = '<div class="<%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-icon_toast weui-icon-success-no-circle"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = i(2), o = n(r), a = i(12), s = n(a), l = void 0;
        t.default = function () {
            function e(t) {
                e = o.default.noop, a.addClass("weui-animate-fade-out"), r.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd", function () {
                    n.remove(), l = !1, t && t()
                })
            }

            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (l) return l;
            i = o.default.extend({content: t, className: ""}, i);
            var n = (0, o.default)(o.default.render(s.default, i)), r = n.find(".weui-toast"), a = n.find(".weui-mask");
            return (0, o.default)("body").append(n), r.addClass("weui-animate-fade-in"), a.addClass("weui-animate-fade-in"), (l = n[0]).hide = function (t) {
                e(t)
            }, l
        }, e.exports = t.default
    }, function (e, t) {
        e.exports = '<div class="weui-loading_toast <%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-loading weui-icon_toast"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = i(2), o = n(r), a = i(14), s = n(a), l = void 0;
        t.default = function () {
            function e(t) {
                e = o.default.noop, u.addClass(r.isAndroid ? "weui-animate-fade-out" : "weui-animate-slide-down"), p.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd", function () {
                    c.remove(), l = !1, r.onClose(), t && t()
                })
            }

            function t(t) {
                e(t)
            }

            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (l) return l;
            var a = o.default.os.android;
            r = o.default.extend({
                menus: i,
                actions: n,
                title: "",
                className: "",
                isAndroid: a,
                onClose: o.default.noop
            }, r);
            var c = (0, o.default)(o.default.render(s.default, r)), u = c.find(".weui-actionsheet"),
                p = c.find(".weui-mask");
            return (0, o.default)("body").append(c), o.default.getStyle(u[0], "transform"), u.addClass(r.isAndroid ? "weui-animate-fade-in" : "weui-animate-slide-up"), p.addClass("weui-animate-fade-in").on("click", function () {
                t()
            }), c.find(".weui-actionsheet__menu").on("click", ".weui-actionsheet__cell", function (e) {
                var n = (0, o.default)(this).index();
                i[n].onClick.call(this, e), t()
            }), c.find(".weui-actionsheet__action").on("click", ".weui-actionsheet__cell", function (e) {
                var i = (0, o.default)(this).index();
                n[i].onClick.call(this, e), t()
            }), (l = c[0]).hide = t, l
        }, e.exports = t.default
    }, function (e, t) {
        e.exports = '<div class="<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>"> <div class=weui-mask></div> <div class=weui-actionsheet> <% if(!isAndroid && title){ %> <div class=weui-actionsheet__title> <p class=weui-actionsheet__title-text><%= title %></p> </div> <% } %> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> '
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = i(2), o = n(r), a = i(16), s = n(a), l = null;
        t.default = function (e) {
            function t(e) {
                t = o.default.noop, r.remove(), e && e(), n.callback(), l = null
            }

            function i(e) {
                t(e)
            }

            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            "number" == typeof n && (n = {duration: n}), "function" == typeof n && (n = {callback: n}), n = o.default.extend({
                content: e,
                duration: 3e3,
                callback: o.default.noop,
                className: ""
            }, n);
            var r = (0, o.default)(o.default.render(s.default, n));
            return (0, o.default)("body").append(r), l && (clearTimeout(l.timeout), l.hide()), (l = {hide: i}).timeout = setTimeout(i, n.duration), r[0].hide = i, r[0]
        }, e.exports = t.default
    }, function (e, t) {
        e.exports = '<div class="weui-toptips weui-toptips_warn <%= className %>" style=display:block><%= content %></div> '
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = i(2), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(n);
        t.default = function (e) {
            var t = (0, r.default)(e);
            return t.forEach(function (e) {
                function t() {
                    o.val(""), i.removeClass("weui-search-bar_focusing")
                }

                var i = (0, r.default)(e), n = i.find(".weui-search-bar__label"), o = i.find(".weui-search-bar__input"),
                    a = i.find(".weui-icon-clear"), s = i.find(".weui-search-bar__cancel-btn");
                n.on("click", function () {
                    i.addClass("weui-search-bar_focusing"), o[0].focus()
                }), o.on("blur", function () {
                    this.value.length || t()
                }), a.on("click", function () {
                    o.val(""), o[0].focus()
                }), s.on("click", function () {
                    t(), o[0].blur()
                })
            }), t
        }, e.exports = t.default
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = i(2), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(n);
        t.default = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = (0, r.default)(e);
            return t = r.default.extend({defaultIndex: 0, onChange: r.default.noop}, t), i.forEach(function (e) {
                var i = (0, r.default)(e), n = i.find(".weui-navbar__item, .weui-tabbar__item"),
                    o = i.find(".weui-tab__content");
                n.eq(t.defaultIndex).addClass("weui-bar__item_on"), o.eq(t.defaultIndex).show(), n.on("click", function () {
                    var e = (0, r.default)(this), i = e.index();
                    n.removeClass("weui-bar__item_on"), e.addClass("weui-bar__item_on"), o.hide(), o.eq(i).show(), t.onChange.call(this, i)
                })
            }), this
        }, e.exports = t.default
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e) {
            return e && e.classList ? e.classList.contains("weui-cell") ? e : r(e.parentNode) : null
        }

        function o(e, t, i) {
            var n = e[0], r = e.val();
            if ("INPUT" == n.tagName || "TEXTAREA" == n.tagName) {
                var o = n.getAttribute("pattern") || "";
                if ("radio" == n.type) {
                    for (var a = t.find('input[type="radio"][name="' + n.name + '"]'), s = 0, c = a.length; s < c; ++s) if (a[s].checked) return null;
                    return "empty"
                }
                if ("checkbox" != n.type) {
                    if (o) {
                        if (/^REG_/.test(o)) {
                            if (!i) throw"RegExp " + o + " is empty.";
                            if (o = o.replace(/^REG_/, ""), !i[o]) throw"RegExp " + o + " has not found.";
                            o = i[o]
                        }
                        return new RegExp(o).test(r) ? null : e.val().length ? "notMatch" : "empty"
                    }
                    return e.val().length ? null : "empty"
                }
                if (!o) return n.checked ? null : "empty";
                var u = function () {
                    var e = t.find('input[type="checkbox"][name="' + n.name + '"]'),
                        i = o.replace(/[{\s}]/g, "").split(","), r = 0;
                    if (2 != i.length) throw n.outerHTML + " regexp is wrong.";
                    return e.forEach(function (e) {
                        e.checked && ++r
                    }), "" === i[1] ? r >= parseInt(i[0]) ? {v: null} : {v: 0 == r ? "empty" : "notMatch"} : parseInt(i[0]) <= r && r <= parseInt(i[1]) ? {v: null} : {v: 0 == r ? "empty" : "notMatch"}
                }();
                if ("object" === (void 0 === u ? "undefined" : l(u))) return u.v
            } else if (r.length) return null;
            return "empty"
        }

        function a(e) {
            if (e) {
                var t = (0, u.default)(e.ele), i = e.msg,
                    n = t.attr(i + "Tips") || t.attr("tips") || t.attr("placeholder");
                if (n && (0, d.default)(n), "checkbox" == e.ele.type || "radio" == e.ele.type) return;
                var o = r(e.ele);
                o && o.classList.add("weui-cell_warn")
            }
        }

        function s(e) {
            var t = r(e);
            t && t.classList.remove("weui-cell_warn")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, c = i(2), u = n(c), p = i(15), d = n(p);
        t.default = {
            showErrorTips: a, hideErrorTips: s, validate: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default.noop,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return (0, u.default)(e).forEach(function (e) {
                    var n = (0, u.default)(e), r = n.find("[required]");
                    "function" != typeof t && (t = a);
                    for (var s = 0, l = r.length; s < l; ++s) {
                        var c = r.eq(s), p = o(c, n, i.regexp), d = {ele: c[0], msg: p};
                        if (p) return void(t(d) || a(d))
                    }
                    t(null)
                }), this
            }, checkIfBlur: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0, u.default)(e).forEach(function (e) {
                    var i = (0, u.default)(e);
                    i.find("[required]").on("blur", function () {
                        if ("checkbox" != this.type && "radio" != this.type) {
                            var e = (0, u.default)(this);
                            if (!(e.val().length < 1)) {
                                var n = o(e, i, t.regexp);
                                n && a({ele: e[0], msg: n})
                            }
                        }
                    }).on("focus", function () {
                        s(this)
                    })
                }), this
            }
        }, e.exports = t.default
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = i(2), o = n(r), a = i(21), s = n(a), l = i(22), c = i(23), u = n(c), p = 0;
        t.default = function (e, t) {
            function i(e, t) {
                var i = e.find('[data-id="' + t + '"]'), n = i.find(".weui-uploader__file-content");
                return n.length || (n = (0, o.default)('<div class="weui-uploader__file-content"></div>'), i.append(n)), i.addClass("weui-uploader__file_status"), n
            }

            function n(e, t) {
                var i = e.find('[data-id="' + t + '"]').removeClass("weui-uploader__file_status");
                i.find(".weui-uploader__file-content").remove()
            }

            function r(e) {
                e.url = c.createObjectURL(e), e.status = "ready", e.upload = function () {
                    (0, u.default)(o.default.extend({$uploader: a, file: e}, t))
                }, e.stop = function () {
                    this.xhr.abort()
                }, t.onQueued(e), t.auto && e.upload()
            }

            var a = (0, o.default)(e), c = window.URL || window.webkitURL || window.mozURL;
            !1 !== (t = o.default.extend({
                url: "",
                auto: !0,
                type: "file",
                fileVal: "file",
                xhrFields: {},
                onBeforeQueued: o.default.noop,
                onQueued: o.default.noop,
                onBeforeSend: o.default.noop,
                onSuccess: o.default.noop,
                onProgress: o.default.noop,
                onError: o.default.noop
            }, t)).compress && (t.compress = o.default.extend({
                width: 1600,
                height: 1600,
                quality: .8
            }, t.compress)), t.onBeforeQueued && function () {
                var e = t.onBeforeQueued;
                t.onBeforeQueued = function (t, i) {
                    var n = e.call(t, i);
                    if (!1 === n) return !1;
                    if (!0 !== n) {
                        var r = (0, o.default)(o.default.render(s.default, {id: t.id}));
                        a.find(".weui-uploader__files").append(r)
                    }
                }
            }(), t.onQueued && function () {
                var e = t.onQueued;
                t.onQueued = function (i) {
                    if (!e.call(i)) {
                        var r = a.find('[data-id="' + i.id + '"]');
                        r.css({backgroundImage: 'url("' + (i.base64 || i.url) + '")'}), t.auto || n(a, i.id)
                    }
                }
            }(), t.onBeforeSend && function () {
                var e = t.onBeforeSend;
                t.onBeforeSend = function (t, i, n) {
                    var r = e.call(t, i, n);
                    if (!1 === r) return !1
                }
            }(), t.onSuccess && function () {
                var e = t.onSuccess;
                t.onSuccess = function (t, i) {
                    t.status = "success", e.call(t, i) || n(a, t.id)
                }
            }(), t.onProgress && function () {
                var e = t.onProgress;
                t.onProgress = function (t, n) {
                    e.call(t, n) || i(a, t.id).html(n + "%")
                }
            }(), t.onError && function () {
                var e = t.onError;
                t.onError = function (t, n) {
                    t.status = "fail", e.call(t, n) || i(a, t.id).html('<i class="weui-icon-warn"></i>')
                }
            }(), a.find('input[type="file"]').on("change", function (e) {
                var i = e.target.files;
                0 !== i.length && (!1 === t.compress && "file" == t.type ? Array.prototype.forEach.call(i, function (e) {
                    e.id = ++p, !1 !== t.onBeforeQueued(e, i) && r(e)
                }) : Array.prototype.forEach.call(i, function (e) {
                    e.id = ++p, !1 !== t.onBeforeQueued(e, i) && (0, l.compress)(e, t, function (e) {
                        e && r(e)
                    })
                }), this.value = "")
            })
        }, e.exports = t.default
    }, function (e, t) {
        e.exports = '<li class="weui-uploader__file weui-uploader__file_status" data-id="<%= id %>"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> '
    }, function (e, t) {
        "use strict";

        function i(e) {
            for (var t = atob(e.split(",")[1]), i = new ArrayBuffer(t.length), n = new Uint8Array(i), r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
            return i
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            compress: function (e, t, n) {
                var r = new FileReader;
                r.onload = function (r) {
                    if (!1 === t.compress) return e.base64 = r.target.result, void n(e);
                    var o = new Image;
                    o.onload = function () {
                        var r = function (e) {
                                var t, i = e.naturalHeight, n = document.createElement("canvas");
                                n.width = 1, n.height = i;
                                var r = n.getContext("2d");
                                r.drawImage(e, 0, 0);
                                try {
                                    t = r.getImageData(0, 0, 1, i).data
                                } catch (e) {
                                    return 1
                                }
                                for (var o = 0, a = i, s = i; s > o;) {
                                    var l = t[4 * (s - 1) + 3];
                                    0 === l ? a = s : o = s, s = a + o >> 1
                                }
                                var c = s / i;
                                return 0 === c ? 1 : c
                            }(o), a = function (e) {
                                var t = new DataView(e);
                                if (65496 != t.getUint16(0, !1)) return -2;
                                for (var i = t.byteLength, n = 2; n < i;) {
                                    var r = t.getUint16(n, !1);
                                    if (n += 2, 65505 == r) {
                                        if (1165519206 != t.getUint32(n += 2, !1)) return -1;
                                        var o = 18761 == t.getUint16(n += 6, !1);
                                        n += t.getUint32(n + 4, o);
                                        var a = t.getUint16(n, o);
                                        n += 2;
                                        for (var s = 0; s < a; s++) if (274 == t.getUint16(n + 12 * s, o)) return t.getUint16(n + 12 * s + 8, o)
                                    } else {
                                        if (65280 != (65280 & r)) break;
                                        n += t.getUint16(n, !1)
                                    }
                                }
                                return -1
                            }(i(o.src)), s = document.createElement("canvas"), l = s.getContext("2d"), c = t.compress.width,
                            u = t.compress.height, p = o.width, d = o.height, h = void 0;
                        if (p < d && d > u ? (p = parseInt(u * o.width / o.height), d = u) : p >= d && p > c && (d = parseInt(c * o.height / o.width), p = c), s.width = p, s.height = d, a > 0 && function (e, t, i) {
                                var n = e.width, r = e.height;
                                switch (i > 4 && (e.width = r, e.height = n), i) {
                                    case 2:
                                        t.translate(n, 0), t.scale(-1, 1);
                                        break;
                                    case 3:
                                        t.translate(n, r), t.rotate(Math.PI);
                                        break;
                                    case 4:
                                        t.translate(0, r), t.scale(1, -1);
                                        break;
                                    case 5:
                                        t.rotate(.5 * Math.PI), t.scale(1, -1);
                                        break;
                                    case 6:
                                        t.rotate(.5 * Math.PI), t.translate(0, -r);
                                        break;
                                    case 7:
                                        t.rotate(.5 * Math.PI), t.translate(n, -r), t.scale(-1, 1);
                                        break;
                                    case 8:
                                        t.rotate(-.5 * Math.PI), t.translate(-n, 0)
                                }
                            }(s, l, a), l.drawImage(o, 0, 0, p, d / r), h = /image\/jpeg/.test(e.type) || /image\/jpg/.test(e.type) ? s.toDataURL("image/jpeg", t.compress.quality) : s.toDataURL(e.type), "file" == t.type) if (/;base64,null/.test(h) || /;base64,$/.test(h)) n(e); else {
                            var f = function (e) {
                                var t = e.split(",")[0].split(":")[1].split(";")[0], n = i(e);
                                return new Blob([n], {type: t})
                            }(h);
                            f.id = e.id, f.name = e.name, f.lastModified = e.lastModified, f.lastModifiedDate = e.lastModifiedDate, n(f)
                        } else /;base64,null/.test(h) || /;base64,$/.test(h) ? (t.onError(e, new Error("Compress fail, dataURL is " + h + ".")), n()) : (e.base64 = h, n(e))
                    }, o.src = r.target.result
                }, r.readAsDataURL(e)
            }
        }, e.exports = t.default
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            var t = e.url, i = e.file, n = e.fileVal, r = e.onBeforeSend, o = e.onProgress, a = e.onError,
                s = e.onSuccess, l = e.xhrFields, c = i.name, u = i.type, p = i.lastModifiedDate,
                d = {name: c, type: u, size: "file" == e.type ? i.size : i.base64.length, lastModifiedDate: p}, h = {};
            if (!1 !== r(i, d, h)) {
                i.status = "progress", o(i, 0);
                var f = new FormData, v = new XMLHttpRequest;
                i.xhr = v, Object.keys(d).forEach(function (e) {
                    f.append(e, d[e])
                }), "file" == e.type ? f.append(n, i, c) : f.append(n, i.base64), v.onreadystatechange = function () {
                    if (4 == v.readyState) if (200 == v.status) try {
                        var e = JSON.parse(v.responseText);
                        s(i, e)
                    } catch (e) {
                        a(i, e)
                    } else a(i, new Error("XMLHttpRequest response status is " + v.status))
                }, v.upload.addEventListener("progress", function (e) {
                    if (0 != e.total) {
                        var t = 100 * Math.ceil(e.loaded / e.total);
                        o(i, t)
                    }
                }, !1), v.open("POST", t), Object.keys(l).forEach(function (e) {
                    v[e] = l[e]
                }), Object.keys(h).forEach(function (e) {
                    v.setRequestHeader(e, h[e])
                }), v.send(f)
            }
        }, e.exports = t.default
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e) {
            "object" != (void 0 === e ? "undefined" : a(e)) && (e = {label: e, value: e}), l.default.extend(this, e)
        }

        function o() {
            function e(t) {
                e = l.default.noop, v.find(".weui-mask").addClass("weui-animate-fade-out"), v.find(".weui-picker").addClass("weui-animate-slide-down").on("animationend webkitAnimationEnd", function () {
                    v.remove(), m = !1, o.onClose(), t && t()
                })
            }

            function t(t) {
                e(t)
            }

            function i(e, t) {
                if (void 0 === h[t] && o.defaultValue && void 0 !== o.defaultValue[t]) {
                    var n = o.defaultValue[t], s = 0, u = e.length;
                    if ("object" == a(e[s])) for (; s < u && n != e[s].value; ++s) ; else for (; s < u && n != e[s]; ++s) ;
                    s < u && (h[t] = s)
                }
                v.find(".weui-picker__group").eq(t).scroll({
                    items: e, temp: h[t], onChange: function (e, n) {
                        if (p[t] = e ? new r(e) : null, h[t] = n, c) p.length == b && o.onChange(p); else if (e.children && e.children.length > 0) v.find(".weui-picker__group").eq(t + 1).show(), !c && i(e.children, t + 1); else {
                            var a = v.find(".weui-picker__group");
                            a.forEach(function (e, i) {
                                i > t && (0, l.default)(e).hide()
                            }), p.splice(t + 1), o.onChange(p)
                        }
                    }, onConfirm: o.onConfirm
                })
            }

            if (m) return m;
            var n = arguments[arguments.length - 1], o = l.default.extend({
                id: "default",
                className: "",
                container: "body",
                onChange: l.default.noop,
                onConfirm: l.default.noop,
                onClose: l.default.noop
            }, n), s = void 0, c = !1;
            if (arguments.length > 2) {
                var u = 0;
                for (s = []; u < arguments.length - 1;) s.push(arguments[u++]);
                c = !0
            } else s = arguments[0];
            A[o.id] = A[o.id] || [];
            for (var p = [], h = A[o.id], v = (0, l.default)(l.default.render(f.default, o)), b = n.depth || (c ? s.length : d.depthOf(s[0])), y = "", w = b; w--;) y += g.default;
            return v.find(".weui-picker__bd").html(y), (0, l.default)(o.container).append(v), l.default.getStyle(v[0], "transform"), v.find(".weui-mask").addClass("weui-animate-fade-in"), v.find(".weui-picker").addClass("weui-animate-slide-up"), c ? s.forEach(function (e, t) {
                i(e, t)
            }) : i(s, 0), v.on("click", ".weui-mask", function () {
                t()
            }).on("click", ".weui-picker__action", function () {
                t()
            }).on("click", "#weui-picker-confirm", function () {
                o.onConfirm(p)
            }), (m = v[0]).hide = t, m
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, s = i(2), l = n(s), c = i(25), u = n(c);
        i(26);
        var p = i(27), d = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.default = e, t
        }(p), h = i(28), f = n(h), v = i(29), g = n(v);
        r.prototype.toString = function () {
            return this.value
        }, r.prototype.valueOf = function () {
            return this.value
        };
        var m = void 0, A = {};
        t.default = {
            picker: o, datePicker: function (e) {
                var t = new Date, i = l.default.extend({
                    id: "datePicker",
                    onChange: l.default.noop,
                    onConfirm: l.default.noop,
                    start: t.getFullYear() - 20,
                    end: t.getFullYear() + 20,
                    defaultValue: [t.getFullYear(), t.getMonth() + 1, t.getDate()],
                    cron: "* * *"
                }, e);
                "number" == typeof i.start ? i.start = new Date(i.start + "/01/01") : "string" == typeof i.start && (i.start = new Date(i.start.replace(/-/g, "/"))), "number" == typeof i.end ? i.end = new Date(i.end + "/12/31") : "string" == typeof i.end && (i.end = new Date(i.end.replace(/-/g, "/")));
                var n = function (e, t, i) {
                    for (var n = 0, r = e.length; n < r; n++) {
                        var o = e[n];
                        if (o[t] == i) return o
                    }
                }, r = [], a = u.default.parse(i.cron, i.start, i.end), s = void 0;
                do {
                    var c = (s = a.next()).value.getFullYear(), p = s.value.getMonth() + 1, d = s.value.getDate(),
                        h = n(r, "value", c);
                    h || (h = {label: c + "年", value: c, children: []}, r.push(h));
                    var f = n(h.children, "value", p);
                    f || (f = {
                        label: p + "月",
                        value: p,
                        children: []
                    }, h.children.push(f)), f.children.push({label: d + "日", value: d})
                } while (!s.done);
                return o(r, i)
            }
        }, e.exports = t.default
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(), n = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g, r = [[1, 31], [1, 12], [0, 6]], o = function () {
            function e(t, i, n) {
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), this._dates = t[0], this._months = t[1], this._days = t[2], this._start = i, this._end = n, this._pointer = i
            }

            return i(e, [{
                key: "_findNext", value: function () {
                    for (var e = void 0; ;) {
                        if (this._end.getTime() - this._pointer.getTime() < 0) throw new Error("out of range, end is " + this._end + ", current is " + this._pointer);
                        var t = this._pointer.getMonth(), i = this._pointer.getDate(), n = this._pointer.getDay();
                        if (-1 !== this._months.indexOf(t + 1)) if (-1 !== this._dates.indexOf(i)) {
                            if (-1 !== this._days.indexOf(n)) {
                                e = new Date(this._pointer);
                                break
                            }
                            this._pointer.setDate(i + 1)
                        } else this._pointer.setDate(i + 1); else this._pointer.setMonth(t + 1), this._pointer.setDate(1)
                    }
                    return e
                }
            }, {
                key: "next", value: function () {
                    var e = this._findNext();
                    return this._pointer.setDate(this._pointer.getDate() + 1), {value: e, done: !this.hasNext()}
                }
            }, {
                key: "hasNext", value: function () {
                    try {
                        return this._findNext(), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]), e
        }();
        t.default = {
            parse: function (e, t, i) {
                var a = [];
                return e.replace(/^\s\s*|\s\s*$/g, "").split(/\s+/).forEach(function (e, t) {
                    var i = r[t];
                    a.push(function (e, t) {
                        for (var i = t[0], r = t[1], o = [], a = void 0, s = (e = e.replace(/\*/g, i + "-" + r)).split(","), l = 0, c = s.length; l < c; l++) {
                            var u = s[l];
                            u.match(n) && u.replace(n, function (e, t, n, s) {
                                s = parseInt(s) || 1, t = Math.min(Math.max(i, ~~Math.abs(t)), r), n = n ? Math.min(r, ~~Math.abs(n)) : t, a = t;
                                do {
                                    o.push(a), a += s
                                } while (a <= n)
                            })
                        }
                        return o
                    }(e, i))
                }), new o(a, t, i)
            }
        }, e.exports = t.default
    }, function (e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r = i(2), o = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(r), a = function (e, t) {
            return e.css({"-webkit-transition": "all " + t + "s", transition: "all " + t + "s"})
        }, s = function (e, t) {
            return e.css({
                "-webkit-transform": "translate3d(0, " + t + "px, 0)",
                transform: "translate3d(0, " + t + "px, 0)"
            })
        }, l = function (e) {
            for (var t = Math.floor(e.length / 2), i = 0; e[t] && e[t].disabled;) if (t = ++t % e.length, ++i > e.length) throw new Error("No selectable item.");
            return t
        };
        o.default.fn.scroll = function (e) {
            function t(e) {
                f = e, g = +new Date
            }

            function i(e) {
                var t = (v = e) - f;
                a(h, 0), s(h, m + t), g = +new Date, A.push({time: g, y: v}), A.length > 40 && A.shift()
            }

            function r(e) {
                if (f) {
                    var t = (new Date).getTime(), i = b - u.bodyHeight / 2;
                    if (v = e, t - g > 100) x(Math.abs(v - f) > 10 ? v - f : i - v); else if (Math.abs(v - f) > 10) {
                        for (var n = A.length - 1, r = n, o = n; o > 0 && g - A[o].time < 100; o--) r = o;
                        if (r !== n) {
                            var a = A[n], s = A[r], l = a.time - s.time, c = a.y - s.y, p = c / l,
                                d = 150 * p + (v - f);
                            x(d)
                        } else x(0)
                    } else x(i - v);
                    f = null
                }
            }

            var c = this, u = o.default.extend({
                items: [],
                scrollable: ".weui-picker__content",
                offset: 3,
                rowHeight: 34,
                onChange: o.default.noop,
                temp: null,
                bodyHeight: 238
            }, e), p = u.items.map(function (e) {
                return '<div class="weui-picker__item' + (e.disabled ? " weui-picker__item_disabled" : "") + '">' + ("object" == (void 0 === e ? "undefined" : n(e)) ? e.label : e) + "</div>"
            }).join(""), d = (0, o.default)(this);
            d.find(".weui-picker__content").html(p);
            var h = d.find(u.scrollable), f = void 0, v = void 0, g = void 0, m = void 0, A = [],
                b = window.innerHeight;
            if (null !== u.temp && u.temp < u.items.length) {
                var y = u.temp;
                u.onChange.call(this, u.items[y], y), m = (u.offset - y) * u.rowHeight
            } else {
                var w = l(u.items);
                u.onChange.call(this, u.items[w], w), m = function (e, t, i) {
                    var n = l(i);
                    return (e - n) * t
                }(u.offset, u.rowHeight, u.items)
            }
            s(h, m);
            var x = function (e) {
                m += e, m = Math.round(m / u.rowHeight) * u.rowHeight;
                var t = function (e, t) {
                    return e * t
                }(u.offset, u.rowHeight), i = function (e, t, i) {
                    return -t * (i - e - 1)
                }(u.offset, u.rowHeight, u.items.length);
                m > t && (m = t), m < i && (m = i);
                for (var n = u.offset - m / u.rowHeight; u.items[n] && u.items[n].disabled;) e > 0 ? ++n : --n;
                m = (u.offset - n) * u.rowHeight, a(h, .3), s(h, m), u.onChange.call(c, u.items[n], n)
            };
            h = d.offAll().on("touchstart", function (e) {
                t(e.changedTouches[0].pageY)
            }).on("touchmove", function (e) {
                i(e.changedTouches[0].pageY), e.preventDefault()
            }).on("touchend", function (e) {
                r(e.changedTouches[0].pageY)
            }).find(u.scrollable);
            var _ = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
            _ || d.on("mousedown", function (e) {
                t(e.pageY), e.stopPropagation(), e.preventDefault()
            }).on("mousemove", function (e) {
                f && (i(e.pageY), e.stopPropagation(), e.preventDefault())
            }).on("mouseup mouseleave", function (e) {
                r(e.pageY), e.stopPropagation(), e.preventDefault()
            })
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.depthOf = function e(t) {
            var i = 1;
            return t.children && t.children[0] && (i = e(t.children[0]) + 1), i
        }
    }, function (e, t) {
        e.exports = '<div class="<%= className %>"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>取消</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>确定</a> </div> <div class=weui-picker__bd></div> </div> </div> '
    }, function (e, t) {
        e.exports = "<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>"
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = i(2), o = n(r), a = i(31), s = n(a), l = void 0;
        t.default = function (e) {
            function t(e) {
                t = o.default.noop, r.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd", function () {
                    r.remove(), l = !1, e && e()
                })
            }

            function i(e) {
                t(e)
            }

            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (l) return l;
            n = o.default.extend({className: "", onDelete: o.default.noop}, n);
            var r = (0, o.default)(o.default.render(s.default, o.default.extend({url: e}, n)));
            return (0, o.default)("body").append(r), r.find(".weui-gallery__img").on("click", function () {
                i()
            }), r.find(".weui-gallery__del").on("click", function () {
                n.onDelete.call(this, e)
            }), r.show().addClass("weui-animate-fade-in"), (l = r[0]).hide = i, l
        }, e.exports = t.default
    }, function (e, t) {
        e.exports = '<div class="weui-gallery <%= className %>"> <span class=weui-gallery__img style="background-image:url(<%= url %>)"></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class="weui-icon-delete weui-icon_gallery-delete"></i> </a> </div> </div> '
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = i(2), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(n);
        t.default = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = (0, r.default)(e);
            if (void 0 !== (t = r.default.extend({
                    step: void 0,
                    defaultValue: 0,
                    onChange: r.default.noop
                }, t)).step && (t.step = parseFloat(t.step), !t.step || t.step < 0)) throw new Error("Slider step must be a positive number.");
            if (void 0 !== t.defaultValue && t.defaultValue < 0 || t.defaultValue > 100) throw new Error("Slider defaultValue must be >= 0 and <= 100.");
            return i.forEach(function (e) {
                function i() {
                    var e = r.default.getStyle(l[0], "left");
                    return e = /%/.test(e) ? c * parseFloat(e) / 100 : parseFloat(e)
                }

                function n(i) {
                    var n = void 0, r = void 0;
                    t.step && (i = Math.round(i / h) * h), r = 100 * (n = (n = p + i) < 0 ? 0 : n > c ? c : n) / c, s.css({width: r + "%"}), l.css({left: r + "%"}), t.onChange.call(e, r)
                }

                var o = (0, r.default)(e), a = o.find(".weui-slider__inner"), s = o.find(".weui-slider__track"),
                    l = o.find(".weui-slider__handler"), c = parseInt(r.default.getStyle(a[0], "width")),
                    u = a[0].offsetLeft, p = 0, d = 0, h = void 0;
                t.step && (h = c * t.step / 100), t.defaultValue && n(c * t.defaultValue / 100), o.on("click", function (e) {
                    e.preventDefault(), p = i(), n(e.pageX - u - p)
                }), l.on("touchstart", function (e) {
                    p = i(), d = e.changedTouches[0].clientX
                }).on("touchmove", function (e) {
                    e.preventDefault(), n(e.changedTouches[0].clientX - d)
                })
            }), this
        }, e.exports = t.default
    }])
}, function (e, t) {
    e.exports = videoExt
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.CheckPhone = function (e) {
        return e = e.toString(), /^1[0-9]{10}$/.test(e)
    }, t.ComputeCharLength = function (e) {
        var t = e.length, i = void 0;
        (i = /[\u4e00-\u9fa5]/g).test(e) && (t += e.match(i).length);
        (i = /[\uff00-\uffff]/g).test(e) && (t += e.match(i).length);
        return t
    }, t.IsPC = function () {
        for (var e = navigator.userAgent, t = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), i = !0, n = 0; n < t.length; n++) if (e.indexOf(t[n]) > 0) {
            i = !1;
            break
        }
        return i
    }, t.getQueryString = function (e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), i = window.location.search.substr(1).match(t);
        return null != i ? decodeURIComponent(i[2]) : null
    }, t.getQueryStrings = function (e) {
        var t = new Object;
        if (-1 != e.indexOf("?")) for (var i = e.substr(1), n = i.split("&"), r = 0; r < n.length; r++) t[n[r].split("=")[0]] = unescape(n[r].split("=")[1]);
        return t
    }, t.getCookie = function (e) {
        var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
        return (t = document.cookie.match(i)) ? decodeURIComponent(t[2]) : null
    }, t.getEventId = function (e) {
        return ("" + e).substring(0, 4) + Date.now()
    }, t.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|ucweb|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent)
    }, t.getIosVersion = function (e) {
        var t = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
        if (t) return t = t[1].replace(/_/g, "."), e(t, t.split(".")), t
    }
}, function (e, t, i) {
    "use strict";

    function n(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function r(e, t) {
        var i, r = "wechat_service" === t ? "mgm" : "notmgm";
        return (n(i = {
            materials_mgm: "/landingpage/faq/materials/index.html",
            materials_notmgm: "/landingpage/faq/material/index.html",
            aboutvipJr_mgm: "/landingpage/faq/aboutvipJr/index.html",
            aboutvipJr_notmgm: "/landingpage/faq/normal/aboutvipJr/index.html",
            index_mgm: "/landingpage/faq/index/index.html",
            index_notmgm: "/landingpage/faq/index/indexq.html",
            teacher_mgm: "/landingpage/faq/teacher/index.html",
            teacher_notmgm: "/landingpage/faq/teacherq/index.html",
            demo_mgm: "/landingpage/faq/demo/index.html",
            demo_notmgm: "/landingpage/faq/demo/indexq.html",
            classtype_mgm: "/landingpage/faq/classtype/index.html",
            classtype_notmgm: "/landingpage/faq/classtype/indexq.html",
            price_mgm: "/landingpage/faq/price/index.html",
            price_notmgm: "/landingpage/faq/price/indexq.html",
            result_mgm: "/landingpage/faq/result/index.html",
            result_notmgm: "/landingpage/faq/result/indexq.html",
            service_mgm: "/landingpage/faq/service/index.html",
            service_notmgm: "/landingpage/faq/service/indexq.html",
            studyplan_mgm: "/landingpage/faq/studyplan/index.html",
            studyplan_notmgm: "/landingpage/faq/studyplan/indexq.html"
        }, "index_mgm", "/landingpage/faq/index/index.html"), n(i, "index_notmgm", "/landingpage/faq/index/indexq.html"), i)[e + "_" + r]
    }

    function o(e, t, i) {
        return {
            materials_wechat_service: "wu4Msr7cOM",
            materials_wechat_subscription: "m8ErhGs5r1",
            materials_weibo: "VFmrXBHcwx",
            aboutvipJr_wechat_service: "5G7BvIqIkZ",
            aboutvipJr_wechat_subscription: "C11f8fh2oQ",
            aboutvipJr_weibo: "pNSsR3tEuM",
            index_wechat_service: "BUuEazFSq9",
            index_wechat_subscription: "SVG6nWhAl2",
            index_weibo: "QqFTvceKyr",
            teacher_wechat_service: "mvsqchxeT5",
            teacher_wechat_subscription: "BhCsCwjpRF",
            teacher_weibo: "gRyveeQFUW",
            demo_wechat_service: "7yTqV270EI",
            demo_wechat_subscription: "lRSwhOXMam",
            demo_weibo: "uOS1dFs40K",
            classtype_wechat_service: "iE9VWgYLPJ",
            classtype_wechat_subscription: "Ku251tXSed",
            classtype_weibo: "t0KWOMkJ68",
            price_wechat_service: "uyhPJoqHxW",
            price_wechat_subscription: "Uh86ir4mHU",
            price_weibo: "KfxaUh6MrP",
            result_wechat_service: "kNnaTpXsbg",
            result_wechat_subscription: "twBbKZD6bq",
            result_weibo: "VFmrXBHcwx",
            service_wechat_service: "vvv1xGky7G",
            service_wechat_subscription: "Us9tZZr7I2",
            service_weibo: "bgPdsuizjo",
            studyplan_wechat_service: "HJsbYEBijR",
            studyplan_wechat_subscription: "LkRtdKw36u",
            studyplan_weibo: "ft196bilGb"
        }[e + "_" + t] || i || ""
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.getLinkForFaqAtom = function (e, t, i) {
        var n = r(e, t), a = o(e, t, i);
        return n + "?fromwhere=" + a
    }, t.getLinkOnlyForFaqAtom = r, t.getLinkFromWhereForFaqAtom = o
}, function (e, t, i) {
    e.exports =  '';
}, function (e, t, i) {
    e.exports = i.p + "e9a435c441912533755c4b5a8e52ed2b.png"
}, function (e, t, i) {
    e.exports = i.p + "3bca532ac4e0bf1a234533fa875cd1cb.png"
}, function (e, t, i) {
    e.exports = i.p + "669a0fee3deb4692a93e2a21322bd379.png"
}, function (e, t, i) {
    e.exports = i.p + "af28a8e8930913c41eceae91fd11ea8f.png"
}, function (e, t, i) {
    e.exports = i.p + "d76a4b53f9ad68576096c9069116e25e.png"
}, function (e, t, i) {
    e.exports = i.p + "624019d63e2cdf1e3ce7a869bace6294.png"
}, function (e, t, i) {
    e.exports = i.p + "f48c9fe171c768ce6b1d3ba9e8fba6c8.png"
}, function (e, t, i) {
    e.exports = i.p + "162b101e1fb8482e432644fb5fb35d55.png"
}, function (e, t, i) {
    e.exports = i.p + "dd2a7e17307b1db51fb0fbd1c97d4806.png"
}, function (e, t, i) {
    e.exports = i.p + "cd2685d0e89c5ddaed96501fa3088e43.png"
}, function (e, t, i) {
    e.exports = i.p + "c30792357d6ad7a6cf2243836f4c619b.png"
}, function (e, t, i) {
    e.exports = i.p + "1402994bf21b254ed6c1178bf8628f3a.png"
}, function (e, t, i) {
    e.exports = i.p + "f7dcd69713c8ee1af9f3d7dbdfc02feb.png"
}, function (e, t, i) {
    e.exports = i.p + "72e25bdf13a282131f7b04f3f8668575.png"
}, function (e, t, i) {
    e.exports = i.p + "f674173e9c2b3e3ef5235fbdabd10866.png"
}, function (e, t, i) {
    e.exports = i.p + "e6ec6c4dbe9934282ccc3263eb3e80a5.png"
}, function (e, t, i) {
    e.exports = i.p + "4bb727ddb03b386e69282462b962ea01.png"
}, function (e, t, i) {
    e.exports = i.p + "4a56b4a35c1296de82e1a3c0a00243ec.png"
}]);