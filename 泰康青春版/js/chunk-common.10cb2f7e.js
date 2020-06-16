(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-common"], {
    "27a5": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmIAAABXCAIAAAAoHL6GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNWZjMDdiNi05YWFkLTRlMWQtYjczYS1jOGQxNGJhNWZkNzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0QxM0UwNUZGMkVEMTFFOEE3NERFNjQxNzc2MkQ2QTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0QxM0UwNUVGMkVEMTFFOEE3NERFNjQxNzc2MkQ2QTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGQzZTcxMzUtZTFjMC00NGU4LWIwNzEtNzE1ZjZmMmQzYTViIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzI1ZmJhNjctNDNkOS0yMTQxLThlODAtYjc2YmEyNDRiYjhhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dX9CwAAAAShJREFUeNrs1TEBAAAIwzDAv735wQAvXyKhTztJAQCXkQAAbBIAbBIAbBIAbBIAbBIAbBIAbBIAbBIAbBIAbBIAsEkAsEkAsEkAsEkAsEkAsEkAsEkAsEkAsEkAsEkAwCYBwCYBwCYBwCYBwCYBwCYBwCYBwCYBwCYBwCYBAJsEAJsEAJsEAJsEAJsEAJsEAJsEAJsEAJsEAJsEAJsEAGwSAGwSAGwSAGwSAGwSAGwSAGwSAGwSAGwSAGwSALBJALBJALBJALBJALBJALBJALBJALBJALBJALBJAMAmAcAmAcAmAcAmAcAmAcAmAcAmAcAmAcAmAcAmAcAmAQCbBACbBACbBACbBACbBACbBACbBACbBACbBACbBABsEgBsEgBsEgBerAADAH0iAy1Yjk0kAAAAAElFTkSuQmCC"
    }, "378b": function (e, t, i) {
        "use strict";
        i.d(t, "c", (function () {
            return n
        })), i.d(t, "d", (function () {
            return r
        })), i.d(t, "b", (function () {
            return c
        })), i.d(t, "a", (function () {
            return A
        }));
        i("a481");
        var a = i("7618"), n = function (e, t, i, n) {
            if ("object" === Object(a["a"])(e)) var r = e; else if ("string" === typeof e) r = new Date(e);
            r.setFullYear(r.getFullYear() + i), r.setDate(r.getDate() + t);
            var c = r.getFullYear(), A = (i = r.getMonth() + 1, r.getDate());
            return i < 10 && (i = "0" + i), A < 10 && (A = "0" + A), 0 == n ? c + "-" + i + "-" + A : c + "年" + i + "月" + A + "日"
        }, r = function (e) {
            if (15 == e.length) var t = e.slice(14, 15) % 2 == 0 ? "1" : "0"; else t = e.slice(16, 17) % 2 == 0 ? "1" : "0";
            return t
        }, c = function (e) {
            var t = "";
            return null != e && "" != e && (15 == e.length ? t = "19" + e.substr(6, 6) : 18 == e.length && (t = e.substr(6, 8)), t = t.replace(/(.{4})(.{2})/, "$1-$2-")), t
        }, A = function (e, t) {
            var i = new Date(t), a = new Date(e),
                n = i.getFullYear() - a.getFullYear() - (i.getMonth() < a.getMonth() || i.getMonth() == a.getMonth() && i.getDate() < a.getDate() ? 1 : 0);
            return n
        }
    }, "479c": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4917"),
            core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__),
            validator = {
                types: {
                    isNoEmpty: function (e) {
                        return !!e
                    }, isName: function (e) {
                        var t, i = /^[a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D\u00B7\s\/_-]+$/, a = /[\u4E00-\u9FA5]/g;
                        e.match(a);
                        if (t = e.length, t < 1 || t > 50) return !1;
                        if (e.match(i)) {
                            var n = /^[\u00B7\s\/_-]+/, r = /[\u00B7\s\/_-]+$/, c = /[\u00B7\s\/_-]{2,}/,
                                A = /[\u4E00-\u9FA5\uF900-\uFA2D]+[\s]+/,
                                s = /[\u4E00-\u9FA5\uF900-\uFA2D]+[\u00B7\s\/_-]?[a-zA-Z]+/,
                                u = /[a-zA-Z]+[\u00B7\s\/_-]?[\u4E00-\u9FA5\uF900-\uFA2D]+/;
                            return !n.test(e) && (!r.test(e) && (!c.test(e) && (!A.test(e) && (!s.test(e) && !u.test(e)))))
                        }
                        return !1
                    }, isCid: function (e) {
                        var t, i, a, n = new Date, r = n.getFullYear(), c = n.getMonth() + 1, A = n.getDate(), s = e,
                            u = s.length;
                        if (0 === u) return !1;
                        if (15 !== u && 18 !== u) return !1;
                        if (15 === u) {
                            for (var o = 0; o < u; o++) if (isNaN(e.charAt(o))) return !1;
                            if (t = "19" + s.substring(6, 8), i = s.substring(8, 10), a = s.substring(10, 12), i > 12 || i <= 0) return !1;
                            if (a > 31 || a <= 0) return !1;
                            if ((4 === i || 6 === i || 9 === i || 11 === i) && a > 30) return !1;
                            if (2 === i) if (LeapYear(t)) {
                                if (a > 29) return !1
                            } else if (a > 28) return !1
                        }
                        if (18 === u) {
                            for (o = 0; o < u - 1; o++) if (isNaN(e.charAt(o))) return !1;
                            if (isNaN(e.charAt(17)) && "X" !== e.charAt(17) && "x" !== e.charAt(17)) return !1;
                            if (e.indexOf("X") > 0 && 17 !== e.indexOf("X") || e.indexOf("x") > 0 && 17 !== e.indexOf("x")) return !1;
                            if (t = s.substring(6, 10), t > r || t < 1900) return !1;
                            if (i = s.substring(10, 12), i > 12 || i <= 0) return !1;
                            if (t === r && i > c) return !1;
                            if (a = s.substring(12, 14), a > 31 || a <= 0) return !1;
                            if ((4 === i || 6 === i || 9 === i || 11 === i) && a > 30) return !1;
                            if (2 === i) if (LeapYear(t)) {
                                if (a > 29) return !1
                            } else if (a > 28) return !1;
                            if (t === r && i === c && a > A) return !1;
                            if ("x" === s.charAt(17) || "X" === s.charAt(17)) {
                                if ("X" !== GetVerifyBit(s)) return !1
                            } else if (s.charAt(17) !== GetVerifyBit(s)) return !1
                        }
                        return !0
                    }, isHid: function (e) {
                        var t = /^[a-zA-Z0-9]{7,20}$/;
                        return t.test(e)
                    }, isJid: function (e) {
                        var t = /(^[\u4E00-\u9FA5\uF900-\uFA2D]{3,5}\d{6,12})$/;
                        return e.match(t)
                    }, isGATid: function (e) {
                        var t = /^[a-zA-Z0-9]{8,20}$/;
                        return e.match(t)
                    }, isExtraid: function (e) {
                        var t = /^[a-zA-Z0-9]{7,20}$/;
                        return e.match(t)
                    }, isPolicyAge: function (e) {
                        return !(e < 50 || e > 70)
                    }, isPolicyAgeMateMale: function (e) {
                        return !(e < 22)
                    }, isPolicyAgeMateFemale: function (e) {
                        return !(e < 20)
                    }, isInsureAgeMateMale: function (e) {
                        return !(e < 50 || e > 70)
                    }, isInsureAgeMateFemale: function (e) {
                        return !(e < 50 || e > 70)
                    }, isPolicyAgeChild: function (e) {
                        return !(e < 18)
                    }, isInsureAgeChild: function (e) {
                        return !(e > 17)
                    }, isPolicyAgeParnets: function (e) {
                        return !(e < 18)
                    }, isInsureAgeParnets: function (e) {
                        return !(e < 50 || e > 70)
                    }, isTel: function (e) {
                        var t = /^1\d{10}$/;
                        return t.test(e)
                    }, isEmail: function (e) {
                        var t = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                        return !(!(e.length <= 50) || !e.match(t) && "" !== e)
                    }, isCode: function (e) {
                        var t = /^[a-zA-Z0-9]{6}$/;
                        return e.match(t)
                    }, isBooblean: function (e) {
                        return e
                    }
                }
            };

        function GetVerifyBit(id) {
            var result = "",
                nNum = eval(7 * id.charAt(0) + 9 * id.charAt(1) + 10 * id.charAt(2) + 5 * id.charAt(3) + 8 * id.charAt(4) + 4 * id.charAt(5) + 2 * id.charAt(6) + 1 * id.charAt(7) + 6 * id.charAt(8) + 3 * id.charAt(9) + 7 * id.charAt(10) + 9 * id.charAt(11) + 10 * id.charAt(12) + 5 * id.charAt(13) + 8 * id.charAt(14) + 4 * id.charAt(15) + 2 * id.charAt(16));
            switch (nNum %= 11, nNum) {
                case 0:
                    result = "1";
                    break;
                case 1:
                    result = "0";
                    break;
                case 2:
                    result = "X";
                    break;
                case 3:
                    result = "9";
                    break;
                case 4:
                    result = "8";
                    break;
                case 5:
                    result = "7";
                    break;
                case 6:
                    result = "6";
                    break;
                case 7:
                    result = "5";
                    break;
                case 8:
                    result = "4";
                    break;
                case 9:
                    result = "3";
                    break;
                case 10:
                    result = "2";
                    break
            }
            return result
        }

        function LeapYear(e) {
            if (e % 100 === 0) {
                if (e % 400 === 0) return !0
            } else if (e % 4 === 0) return !0;
            return !1
        }

        __webpack_exports__["a"] = validator
    }, "4ee2": function (e, t, i) {
    }, "4ef8": function (e, t, i) {
        "use strict";
        var a = i("bc3a"), n = i.n(a);
        t["a"] = {
            post: function (e, t) {
                return new Promise((function (i, a) {
                    n.a.post(e, t).then((function (e) {
                        i(e.data)
                    })).catch((function (e) {
                        a(e)
                    }))
                }))
            }, get: function (e, t) {
                return new Promise((function (i, a) {
                    n.a.get(e, {params: t}).then((function (e) {
                        i(e.data)
                    })).catch((function (e) {
                        a(e)
                    }))
                }))
            }
        }
    }, 5580: function (e, t, i) {
        e.exports = i.p + "img/title1.ceddd53a.png"
    }, 6934: function (e, t) {
        var i = {
            5e3: "非常抱歉，您的状况不符合本产品的要求，不能投保本产品",
            5001: "姓名格式不正确！！",
            5002: "身份证号码格式不正确！！",
            5003: "投保人手机号码格式不正确！！",
            5004: "电子邮箱格式不正确！！",
            5005: "投保人年龄不符合投保规则",
            5006: "保费异常",
            5007: "投保人信息为空",
            5009: "配偶关系不正确",
            5010: "被保人信息为空",
            5011: "姓名格式不正确!!",
            5013: "年龄需在50~70周岁之间！！",
            5014: "被保人身份证超出投保次数",
            2001: "非个险银保渠道！",
            2002: "无效的秘钥！",
            2003: "该秘钥已被使用，请重新输入！",
            4e3: "被保人存在处理中的订单",
            5025: "您不符合本计划要求，请选择其他计划",
            5020: "投保人签名不能为空!!",
            5021: "被保人尚未完成签名，请不要着急!!"
        };
        e.exports = i
    }, 8880: function (e, t, i) {
    }, "8c89": function (e, t, i) {
        "use strict";
        t["a"] = "production"
    }, "99b0": function (e, t, i) {
        "use strict";
        var a = i("378b"), n = i("b383"), r = function (e, t, i, n, r) {
            var c = [{type: "isNoEmpty", value: e.policyName, info: "请输入投保人姓名！"}, {
                type: "isName",
                value: e.policyName,
                info: "投保人姓名格式不正确！"
            }, {type: "isNoEmpty", value: e.policyCardNum, info: "请输入投保人身份证号码！"}, {
                type: "isCid",
                value: e.policyCardNum,
                info: "投保人身份证号码格式不正确！"
            }, {type: "isNoEmpty", value: e.policyPhoneNum, info: "请输入投保人手机号码！"}, {
                type: "isTel",
                value: e.policyPhoneNum,
                info: "投保人手机号码格式不正确！"
            }, {type: "isNoEmpty", value: n, info: "请输入验证码！"}, {
                type: "isCode",
                value: n,
                info: "验证码有误，请重新输入！"
            }, {type: "isNoEmpty", value: e.email, info: "请输入电子邮箱！"}, {
                type: "isEmail",
                value: e.email,
                info: "电子邮箱格式不正确！"
            }];
            return "00" == e.relationship ? c = c.concat([{
                type: "isPolicyAge",
                value: Object(a["a"])(e.policyBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "年龄需在50~70周岁之间！"
            }]) : (c = c.concat([{type: "isNoEmpty", value: e.insureName, info: "请输入被保人姓名！"}, {
                type: "isName",
                value: e.insureName,
                info: "被保人姓名格式不正确！"
            }, {type: "isNoEmpty", value: e.insureCardNum, info: "请输入被保人身份证号码！"}, {
                type: "isCid",
                value: e.insureCardNum,
                info: "被保人身份证号码格式不正确！"
            }]), "01" == e.relationship ? c = "0" == Object(a["d"])(e.policyCardNum) && "0" !== Object(a["d"])(e.insureCardNum) ? c.concat([{
                type: "isPolicyAgeMateMale",
                value: Object(a["a"])(e.policyBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "投保人年龄需大于22周岁！"
            }, {
                type: "isInsureAgeMateFemale",
                value: Object(a["a"])(e.insureBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "被保人年龄需在50~70周岁之间！"
            }]) : "1" == Object(a["d"])(e.policyCardNum) && "1" !== Object(a["d"])(e.insureCardNum) ? c.concat([{
                type: "isPolicyAgeMateFemale",
                value: Object(a["a"])(e.policyBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "投保人年龄需大于20周岁！"
            }, {
                type: "isInsureAgeMateMale",
                value: Object(a["a"])(e.insureBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "被保人年龄需在50~70周岁之间！"
            }]) : c.concat([{
                type: "isBooblean",
                value: Object(a["d"])(e.insureCardNum) !== Object(a["d"])(e.policyCardNum),
                info: "投被保人性别录入信息有误，请重新录入！"
            }]) : "03" == e.relationship ? c = c.concat([{
                type: "isPolicyAgeParnets",
                value: Object(a["a"])(e.policyBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "投保人年龄需大于18周岁！"
            }, {
                type: "isBooblean",
                value: Object(a["a"])(e.insureBirth, Object(a["c"])(new Date, 0, 0, 0)) > Object(a["a"])(e.policyBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "被保人年龄需大于投保人年龄！"
            }, {
                type: "isInsureAgeParnets",
                value: Object(a["a"])(e.insureBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "被保人需在50~70周岁之间！"
            }]) : "02" == e.relationship && (c = c.concat([{
                type: "isPolicyAgeChild",
                value: Object(a["a"])(e.policyBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "投保人年龄需大于18周岁！"
            }, {
                type: "isBooblean",
                value: Object(a["a"])(e.insureBirth, Object(a["c"])(new Date, 0, 0, 0)) < Object(a["a"])(e.policyBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "被保人年龄需小于投保人年龄！"
            }, {
                type: "isInsureAgeChild",
                value: Object(a["a"])(e.insureBirth, Object(a["c"])(new Date, 0, 0, 0)),
                info: "年龄需在0（出生且住院满30天）~~17周岁之间"
            }, {
                type: "isBooblean",
                value: Object(a["c"])(new Date, -30, 0, 0) >= e.insureBirth,
                info: "年龄需在0（出生且住院满30天）~~17周岁之间"
            }]))), "2" == t.payWay && (c = c.concat([{
                type: "isNoEmpty",
                value: t.bank,
                info: "请选择银行!"
            }, {type: "isNoEmpty", value: t.bankCard, info: "请输入银行卡号!"}, {
                type: "isBooblean",
                value: t.bankCard > 40,
                info: "银行卡号录入有误，请重新输入"
            }, {type: "isNoEmpty", value: t.bankCardAgain, info: "请输入银行卡号!"}, {
                type: "isBooblean",
                value: t.bankCardAgain > 40,
                info: "银行卡号录入有误，请重新输入"
            }, {
                type: "isBooblean",
                value: t.bankCard === t.bankCardAgain,
                info: "两次输入不一致，请重新输入！"
            }])), c = c.concat([{
                type: "isBooblean",
                value: i,
                info: "请阅读相关条款！"
            }]), "2" == t.payWay && (c = c.concat([{type: "isBooblean", value: r, info: "尚未同意授权验证，请在页面最下方勾选！"}])), c
        }, c = function (e, t, i) {
            var a = e.riskCode, n = e.userType, r = e.homeId, c = e.company, A = r.substring(1), s = c.substring(0, 1),
                u = "?riskcode=" + a + "&intersalesmancode=" + A + "&usertype=" + n + "&outerdeptcompanycode=" + s;
            "00" == t.relationship && (t.insureCardNum = t.policyCardNum, t.insureName = t.policyName, t.insureSex = t.policySex, t.insureBirth = t.policyBirth);
            var o = {
                premium: i,
                intersalesmancode: A,
                outerdeptcompanycode: s,
                riskcode: a,
                usertype: n,
                comboId: "1",
                applicantList: [{
                    identifyNumber: t.policyCardNum.toUpperCase(),
                    identifyType: "01",
                    sex: t.policySex,
                    name: t.policyName,
                    mobile: t.policyPhoneNum,
                    birthday: t.policyBirth,
                    mail: t.email
                }],
                insuredList: [{
                    identifyNumber: t.insureCardNum.toUpperCase(),
                    identifyType: "01",
                    sex: t.insureSex,
                    name: t.insureName,
                    birthday: t.insureBirth,
                    relatedperson: t.relationship,
                    mobile: t.insurePhoneNum
                }]
            };
            return {parameter: u, proposal: o}
        }, A = function (e, t, i, a) {
            var r = sessionStorage.getItem("search"), c = n.parse(r), A = c.key, s = c.riskCode, u = c.userType,
                o = c.homeId, l = c.chipsChannel, p = c.company, g = o.substring(1), h = p.substring(0, 1),
                m = JSON.parse(localStorage.getItem("axbsSerialNumber")).data,
                b = "?riskcode=" + s + "&logincachekey=" + A + "&usertype=" + u;
            "00" == e.relationship && (e.insureCardNum = e.policyCardNum, e.insureName = e.policyName, e.insureSex = e.policySex, e.insureBirth = e.policyBirth, e.insurePhoneNum = e.policyPhoneNum);
            var d = {
                msgCode: a,
                premium: i,
                intersalesmancode: g,
                outerdeptcompanycode: h,
                invokeChannel: l,
                comboId: "1",
                serialNumber: m,
                payMethod: e.payMethod,
                payWay: t.payWay,
                companyNo: t.bank.companyNo,
                companyNoYW: t.bank.companyNoYW,
                bankCodeYW: t.bank.bankCodeYW,
                bankName: t.bank.bankName,
                bankCode: t.bank.bankCode,
                payAccNo: t.bankCard,
                renewInsurance: t.renewInsurance,
                applicantList: [{
                    identifyNumber: e.policyCardNum.toUpperCase(),
                    identifyType: "01",
                    sex: e.policySex,
                    name: e.policyName,
                    mobile: e.policyPhoneNum,
                    birthday: e.policyBirth,
                    mail: e.email
                }],
                insuredList: [{
                    identifyNumber: e.insureCardNum.toUpperCase(),
                    identifyType: "01",
                    sex: e.insureSex,
                    name: e.insureName,
                    birthday: e.insureBirth,
                    relatedperson: e.relationship,
                    mobile: e.insurePhoneNum
                }]
            };
            return {parameter: b, proposal: d}
        };
        t["a"] = {getValidateData: r, getVerifyUrlParams: c, getVerifySignParams: A}
    }, a436: function (e, t, i) {
        "use strict";
        var a = i("eac6"), n = i.n(a);
        n.a
    }, bf80: function (e, t) {
        e.exports = "data:image/png;base64,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"
    }, d722: function (e, t, i) {
        "use strict";
        i.d(t, "a", (function () {
            return n
        }));
        var a = i("8c89"), n = "";
        "dev" === a["a"] && (n = "/api")
    }, dc7e: function (e, t, i) {
        "use strict";
        var a = function () {
            var e = this, t = e.$createElement;
            e._self._c;
            return e._m(0)
        }, n = [function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", [i("table", [i("tr", [i("th", [e._v("适用条款")]), i("th", [e._v("保险责任")]), i("th", [e._v("保额(元)")])]), i("tr", [i("td", {attrs: {rowspan: "2"}}, [e._v("泰康e顺"), i("br"), e._v("短期意外伤害保险")]), i("td", [e._v("意外身故")]), i("td", [e._v("50,000")])]), i("tr", [i("td", [e._v("意外伤残")]), i("td", [e._v("10,000")])]), i("tr", [i("td", {attrs: {rowspan: "5"}}, [e._v("泰康e顺"), i("br"), e._v("短期交通意外伤害保险")]), i("td", [e._v("航空意外")]), i("td", [e._v("500,000")])]), i("tr", [i("td", [e._v("公交意外")]), i("td", [e._v("50,000")])]), i("tr", [i("td", [e._v("地铁意外")]), i("td", [e._v("50,000")])]), i("tr", [i("td", [e._v("出租车意外")]), i("td", [e._v("50,000")])]), i("tr", [i("td", [e._v("乘坐私家车意外")]), i("td", [e._v("50,000")])]), i("tr", [i("td", {attrs: {rowspan: "2"}}, [e._v("泰康e顺"), i("br"), e._v("短期意外伤害医疗保险")]), i("td", [e._v("意外门急诊")]), i("td", [e._v("10,000")])]), i("tr", [i("td", [e._v("意外住院")]), i("td", [e._v("10,000")])]), i("tr", [i("td", [e._v("泰康e顺"), i("br"), e._v("白血病疾病保险"), i("br"), e._v("(变更备案)")]), i("td", [e._v("白血病")]), i("td", [e._v("100,000")])]), i("tr", {staticClass: "beBold"}, [i("td", {attrs: {colspan: "2"}}, [e._v("投保年龄 (周岁)")]), i("td", [e._v("0-17")])]), i("tr", {staticClass: "beBold"}, [i("td", {attrs: {colspan: "2"}}, [e._v("交费方式")]), i("td", [e._v("月交/年交")])])])])
        }], r = {props: {}}, c = r, A = (i("a436"), i("2877")), s = Object(A["a"])(c, a, n, !1, null, "276f40a2", null);
        t["a"] = s.exports
    }, eab4: function (e, t, i) {
        "use strict";
        var a = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {staticClass: "loading-box"}, [i("div", {staticClass: "loader"}, [e._m(0), i("p", {staticClass: "loading-num"}, [e._v(e._s(e.msg))])])])
        }, n = [function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {staticClass: "loadings"}, [i("i"), i("i"), i("i"), i("i"), i("i"), i("i"), i("i"), i("i")])
        }], r = {
            name: "load", props: {msg: {type: String, default: ""}}, data: function () {
                return {}
            }
        }, c = r, A = (i("fb59"), i("2877")), s = Object(A["a"])(c, a, n, !1, null, "6dc09571", null);
        t["a"] = s.exports
    }, eac6: function (e, t, i) {
    }, eebe: function (e, t, i) {
        "use strict";
        i("28a5");
        var a = i("18a0"), n = i.n(a),
            r = (i("a481"), i("3b2b"), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
            c = (new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1), function (e) {
                var t, i, a, n, c, A;
                a = e.length, i = 0, t = "";
                while (i < a) {
                    if (n = 255 & e.charCodeAt(i++), i == a) {
                        t += r.charAt(n >> 2), t += r.charAt((3 & n) << 4), t += "==";
                        break
                    }
                    if (c = e.charCodeAt(i++), i == a) {
                        t += r.charAt(n >> 2), t += r.charAt((3 & n) << 4 | (240 & c) >> 4), t += r.charAt((15 & c) << 2), t += "=";
                        break
                    }
                    A = e.charCodeAt(i++), t += r.charAt(n >> 2), t += r.charAt((3 & n) << 4 | (240 & c) >> 4), t += r.charAt((15 & c) << 2 | (192 & A) >> 6), t += r.charAt(63 & A)
                }
                return t
            }), A = i("8c89"), s = i("b383");

        function u(e, t) {
            var i = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "g");
            return e.replace(i, "$3")
        }

        function o(e) {
            var t = s.stringify(e);
            return "?" + t
        }

        function l() {
            var e, t, i, a = location.origin, r = sessionStorage.getItem("search"), l = u(r, "openid"), p = s.parse(l),
                g = "AXBA", h = "同父母一起·全面呵护关爱儿童成长", m = "泰康安心保2.0 青春版", b = "";
            e = a + "/chips" + o(p), t = c(e), i = a + "/" + g + "/img/" + g + "_share.jpg", b = a + "/public/page/shareblank.html?redirect_url=https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2f763d09aa9ca523&redirect_uri=http://wxpt.taikang.com/tkmap/wechat/oauth2/redirect/wx2f763d09aa9ca523?other=" + t + "&response_type=code&scope=snsapi_base&state=redict#wechat_redirect", n.a.ready((function () {
                var e = ["menuItem:openWithSafari", "menuItem:openWithQQBrowser", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:QZone", "menuItem:share:email"];
                "production" === A["a"] && e.push("menuItem:copyUrl"), n.a.hideMenuItems({menuList: e}), n.a.onMenuShareTimeline({
                    title: m,
                    desc: h,
                    link: b,
                    imgUrl: i,
                    success: function () {
                    },
                    cancel: function () {
                    }
                }), n.a.onMenuShareAppMessage({
                    title: m,
                    desc: h,
                    link: b,
                    imgUrl: i,
                    type: "",
                    dataUrl: "",
                    success: function () {
                    },
                    cancel: function () {
                    }
                })
            }))
        }

        var p = l, g = i("d722"), h = i("b383"), m = i.n(h), b = i("bc3a"), d = i.n(b),
            C = {url: window.location.href.split("#")[0]};

        function f() {
            d.a.post("".concat(g["a"], "/wechatsign/signature"), m.a.stringify(C)).then((function (e) {
                var t = e.data;
                n.a.config({
                    jsApiList: ["hideOptionMenu", "showOptionMenu", "onMenuShareTimeline", "onMenuShareAppMessage", "addCard", "hideMenuItems"],
                    debug: !1,
                    appId: t.appId,
                    timestamp: t.timestamp,
                    nonceStr: t.noncestr,
                    signature: t.signature
                }), p()
            })).catch((function (e) {
                console.log(e)
            }))
        }

        t["a"] = f
    }, fb59: function (e, t, i) {
        "use strict";
        var a = i("8880"), n = i.n(a);
        n.a
    }
}]);
//# sourceMappingURL=chunk-common.10cb2f7e.js.map