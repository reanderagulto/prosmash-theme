if ("undefined" == typeof jQuery) {
    let headTag = document.getElementsByTagName("head")[0];
    let scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
    scriptTag.onload = sectionhub_init;
    headTag.appendChild(scriptTag);
} else {
    sectionhub_init();
}

function sectionhub_init() {

    if (window.mdp_init) {
        return;
    }
    window.mdp_init = true;

    if(!('lazySizesConfig' in window) && !('lazySizes' in window)) {
    /*! lazysizes - v4.1.8 */
    !function (a, b) { var c = function (d) { b(a.lazySizes, d), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c, d) { "use strict"; function e(a) { var b = getComputedStyle(a, null) || {}, c = b.fontFamily || "", d = c.match(j) || "", e = d && c.match(k) || ""; return e && (e = e[1]), { fit: d && d[1] || "", position: n[e] || e || "center" } } function f(a, b) { var d, e, f = c.cfg, g = a.cloneNode(!1), h = g.style, i = function () { var b = a.currentSrc || a.src; b && e !== b && (e = b, h.backgroundImage = "url(" + (m.test(b) ? JSON.stringify(b) : b) + ")", d || (d = !0, c.rC(g, f.loadingClass), c.aC(g, f.loadedClass))) }, j = function () { c.rAF(i) }; a._lazysizesParentFit = b.fit, a.addEventListener("lazyloaded", j, !0), a.addEventListener("load", j, !0), g.addEventListener("load", function () { var a = g.currentSrc || g.src; a && a != l && (g.src = l, g.srcset = "") }), c.rAF(function () { var d = a, e = a.parentNode; "PICTURE" == e.nodeName.toUpperCase() && (d = e, e = e.parentNode), c.rC(g, f.loadedClass), c.rC(g, f.lazyClass), c.aC(g, f.loadingClass), c.aC(g, f.objectFitClass || "lazysizes-display-clone"), g.getAttribute(f.srcsetAttr) && g.setAttribute(f.srcsetAttr, ""), g.getAttribute(f.srcAttr) && g.setAttribute(f.srcAttr, ""), g.src = l, g.srcset = "", h.backgroundRepeat = "no-repeat", h.backgroundPosition = b.position, h.backgroundSize = b.fit, d.style.display = "none", a.setAttribute("data-parent-fit", b.fit), a.setAttribute("data-parent-container", "prev"), e.insertBefore(g, d), a._lazysizesParentFit && delete a._lazysizesParentFit, a.complete && i() }) } var g = b.createElement("a").style, h = "objectFit" in g, i = h && "objectPosition" in g, j = /object-fit["']*\s*:\s*["']*(contain|cover)/, k = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/, l = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", m = /\(|\)|'/, n = { center: "center", "50% 50%": "center" }; if (!h || !i) { var o = function (a) { if (a.detail.instance == c) { var b = a.target, d = e(b); !d.fit || h && "center" == d.position || f(b, d) } }; a.addEventListener("lazyunveilread", o, !0), d && d.detail && o(d) } });
    /*! lazysizes - v4.1.8 */
    !function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; function d(b, c) { var d, e, f, g, h = a.getComputedStyle(b); e = b.parentNode, g = { isPicture: !(!e || !m.test(e.nodeName || "")) }, f = function (a, c) { var d = b.getAttribute("data-" + a); if (!d) { var e = h.getPropertyValue("--ls-" + a); e && (d = e.trim()) } if (d) { if ("true" == d) d = !0; else if ("false" == d) d = !1; else if (l.test(d)) d = parseFloat(d); else if ("function" == typeof j[a]) d = j[a](b, d); else if (q.test(d)) try { d = JSON.parse(d) } catch (a) { } g[a] = d } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d)) }; for (d in j) f(d); return c.replace(p, function (a, b) { b in g || f(b, !0) }), g } function e(a, b) { var c = [], d = function (a, c) { return k[typeof b[c]] ? b[c] : a }; return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) { var e = b.widthmap[d] || d, f = b.aspectratio || b.ratio, g = !b.aspectratio && j.traditionalRatio, h = { u: a.replace(n, e).replace(o, f ? g ? Math.round(d * f) : Math.round(d / f) : ""), w: d }; c.push(h), c.srcset.push(h.c = h.u + " " + d + "w") }), c } function f(a, c, d) { var f = 0, g = 0, h = d; if (a) { if ("container" === c.ratio) { for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);)h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight; f && g && (c.ratio = g / f) } a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", { value: a, writable: !0 }) } } function g(a, b) { var e = d(a, b); return j.modifyOptions.call(a, { target: a, details: e, detail: e }), c.fire(a, "lazyriasmodifyoptions", e), e } function h(a) { return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "" } var i, j, k = { string: 1, number: 1 }, l = /^\-*\+*\d+\.*\d*$/, m = /^picture$/i, n = /\s*\{\s*width\s*\}\s*/i, o = /\s*\{\s*height\s*\}\s*/i, p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi, q = /^\[.*\]|\{.*\}$/, r = /^(?:auto|\d+(px)?)$/, s = b.createElement("a"), t = b.createElement("img"), u = "srcset" in t && !("sizes" in t), v = !!a.HTMLPictureElement && !u; !function () { var b, d = function () { }, e = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: d, widthmap: {}, ratio: !1, traditionalRatio: !1, aspectratio: !1 }; i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) { return !a }), i.rias || (i.rias = {}), "widths" in (j = i.rias) || (j.widths = [], function (a) { for (var b, c = 0; !b || b < 3e3;)c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b) }(j.widths)); for (b in e) b in j || (j[b] = e[b]) }(), addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c) { var b, d, e, k, l, m, o, p, q, s, t, u, x; if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) { if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; m < o; m++)(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0); t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", { value: x, writable: !0 })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = { width: parseInt(q, 10) }, w({ target: b, detail: s }))) } } }, !0); var w = function () { var d = function (a, b) { return a.w - b.w }, e = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, f = function (a, b) { var d; return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", { value: d, writable: !0 }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias }, g = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.4, d) }, h = function (b, c) { var h, i, j, k, l, m; if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; i < j; i++)if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) { l = h[i]._lazyrias; break } return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m }, j = function (d) { if (d.detail.instance == c) { var e, g = d.target; if (!u && (a.respimage || a.picturefill || lazySizesConfig.pf)) return void b.removeEventListener("lazybeforesizes", j); ("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width)) && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () { g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u) })) } }; return v ? j = function () { } : addEventListener("lazybeforesizes", j), j }() });
    /*! lazysizes - v4.1.8 */
    !function (a, b) { var c = b(a, a.document); a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c) }(window, function (a, b) { "use strict"; if (b.getElementsByClassName) { var c, d, e = b.documentElement, f = a.Date, g = a.HTMLPictureElement, h = "addEventListener", i = "getAttribute", j = a[h], k = a.setTimeout, l = a.requestAnimationFrame || k, m = a.requestIdleCallback, n = /^picture$/i, o = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, q = Array.prototype.forEach, r = function (a, b) { return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b] }, s = function (a, b) { r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b) }, t = function (a, b) { var c; (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " ")) }, u = function (a, b, c) { var d = c ? h : "removeEventListener"; c && u(a, b), o.forEach(function (c) { a[d](c, b) }) }, v = function (a, d, e, f, g) { var h = b.createEvent("Event"); return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h }, w = function (b, c) { var e; !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src) }, x = function (a, b) { return (getComputedStyle(a, null) || {})[b] }, y = function (a, b, c) { for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;)c = b.offsetWidth, b = b.parentNode; return c }, z = function () { var a, c, d = [], e = [], f = d, g = function () { var b = f; for (f = d.length ? e : d, a = !0, c = !1; b.length;)b.shift()(); a = !1 }, h = function (d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g))) }; return h._lsFlush = g, h }(), A = function (a, b) { return b ? function () { z(a) } : function () { var b = this, c = arguments; z(function () { a.apply(b, c) }) } }, B = function (a) { var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function () { b = !1, c = f.now(), a() }, i = m && g > 49 ? function () { m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout) } : A(function () { k(h) }, !0); return function (a) { var d; (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d)) } }, C = function (a) { var b, c, d = 99, e = function () { b = null, a() }, g = function () { var a = f.now() - c; a < d ? k(g, d - a) : (m || e)(e) }; return function () { c = f.now(), b || (b = k(g, d)) } }; !function () { var b, c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; d = a.lazySizesConfig || a.lazysizesConfig || {}; for (b in c) b in d || (d[b] = c[b]); a.lazySizesConfig = d, k(function () { d.init && F() }) }(); var D = function () { var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i, L = /^iframe$/i, M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), N = 0, O = 0, P = 0, Q = -1, R = function (a) { P-- , (!a || P < 0 || !a.target) && (P = 0) }, S = function (a) { return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility") }, T = function (a, c) { var d, f = a, g = S(a); for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1); return g }, U = function () { var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements; if ((o = d.loadMode) && P < 8 && (a = u.length)) { for (f = 0, Q++; f < a; f++)if (u[f] && !u[f]._lazyRace) if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]); else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) { if (aa(u[f]), k = !0, P > 9) break } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]); j && !k && aa(j) } }, V = B(U), W = function (a) { var b = a.target; if (b._lazyCache) return void delete b._lazyCache; R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded") }, X = A(W), Y = function (a) { X({ target: a.target }) }, Z = function (a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } }, $ = function (a) { var b, c = a[i](d.srcsetAttr); (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c) }, _ = A(function (a, b, c, e, f) { var g, h, j, l, o, p; (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () { var b = a.complete && a.naturalWidth > 1; p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () { "_lazyCache" in a && delete a._lazyCache }, 9)), "lazy" == a.loading && P-- }, !0) }), aa = function (a) { if (!a._lazyRace) { var b, c = K.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e; (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++ , _(a, b, f, e, c)) } }, ba = C(function () { d.loadMode = 3, V() }), ca = function () { 3 == d.loadMode && (d.loadMode = 2), ba() }, da = function () { if (!l) { if (f.now() - p < 999) return void k(da, 999); l = !0, d.loadMode = 3, V(), j("scroll", ca, !0) } }; return { _: function () { p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) { b[h](a, V, !0) }), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V() }, checkElems: V, unveil: aa, _aLSL: ca } }(), E = function () { var a, c = A(function (a, b, c, d) { var e, f, g; if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++)e[f].setAttribute("sizes", d); c.detail.dataAttr || w(a, c.detail) }), e = function (a, b, d) { var e, f = a.parentNode; f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)) }, f = function () { var b, c = a.length; if (c) for (b = 0; b < c; b++)e(a[b]) }, g = C(f); return { _: function () { a = b.getElementsByClassName(d.autosizesClass), j("resize", g) }, checkElems: g, updateElem: e } }(), F = function () { F.i || (F.i = !0, E._(), D._()) }; return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z } } });
    /*! lazysizes - v4.1.8 */
    !function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; if (a.addEventListener) { var d = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, e = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/, f = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/, g = /^picture$/i, h = function (a) { return getComputedStyle(a, null) || {} }, i = { getParent: function (b, c) { var d = b, e = b.parentNode; return c && "prev" != c || !e || !g.test(e.nodeName || "") || (e = e.parentNode), "self" != c && (d = "prev" == c ? b.previousElementSibling : c && (e.closest || a.jQuery) ? (e.closest ? e.closest(c) : jQuery(e).closest(c)[0]) || e : e), d }, getFit: function (a) { var b, c, d = h(a), g = d.content || d.fontFamily, j = { fit: a._lazysizesParentFit || a.getAttribute("data-parent-fit") }; return !j.fit && g && (b = g.match(e)) && (j.fit = b[1]), j.fit ? (c = a._lazysizesParentContainer || a.getAttribute("data-parent-container"), !c && g && (b = g.match(f)) && (c = b[1]), j.parent = i.getParent(a, c)) : j.fit = d.objectFit, j }, getImageRatio: function (b) { var c, e, f, h, i, j, k, l = b.parentNode, m = l && g.test(l.nodeName || "") ? l.querySelectorAll("source, img") : [b]; for (c = 0; c < m.length; c++)if (b = m[c], e = b.getAttribute(lazySizesConfig.srcsetAttr) || b.getAttribute("srcset") || b.getAttribute("data-pfsrcset") || b.getAttribute("data-risrcset") || "", f = b._lsMedia || b.getAttribute("media"), f = lazySizesConfig.customMedia[b.getAttribute("data-media") || f] || f, e && (!f || (a.matchMedia && matchMedia(f) || {}).matches)) { h = parseFloat(b.getAttribute("data-aspectratio")), h || (i = e.match(d), i ? "w" == i[2] ? (j = i[1], k = i[3]) : (j = i[3], k = i[1]) : (j = b.getAttribute("width"), k = b.getAttribute("height")), h = j / k); break } return h }, calculateSize: function (a, b) { var c, d, e, f, g = this.getFit(a), h = g.fit, i = g.parent; return "width" == h || ("contain" == h || "cover" == h) && (e = this.getImageRatio(a)) ? (i ? b = i.clientWidth : i = a, f = b, "width" == h ? f = b : (d = i.clientHeight) > 40 && (c = b / d) && ("cover" == h && c < e || "contain" == h && c > e) && (f = b * (e / c)), f) : b } }; c.parentFit = i, b.addEventListener("lazybeforesizes", function (a) { if (!a.defaultPrevented && a.detail.instance == c) { var b = a.target; a.detail.width = i.calculateSize(b, a.detail.width) } }) } });
    /*! lazysizes - v4.1.8 */
    !function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; var d, e = c && c.cfg, f = b.createElement("img"), g = "sizes" in f && "srcset" in f, h = /\s+\d+h/g, i = function () { var a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, d = Array.prototype.forEach; return function () { var e = b.createElement("img"), f = function (b) { var c, d, e = b.getAttribute(lazySizesConfig.srcsetAttr); e && (d = e.match(a)) && (c = "w" == d[2] ? d[1] / d[3] : d[3] / d[1], c && b.setAttribute("data-aspectratio", c), b.setAttribute(lazySizesConfig.srcsetAttr, e.replace(h, ""))) }, g = function (a) { if (a.detail.instance == c) { var b = a.target.parentNode; b && "PICTURE" == b.nodeName && d.call(b.getElementsByTagName("source"), f), f(a.target) } }, i = function () { e.currentSrc && b.removeEventListener("lazybeforeunveil", g) }; b.addEventListener("lazybeforeunveil", g), e.onload = i, e.onerror = i, e.srcset = "data:,a 1w 1h", e.complete && i() } }(); if (e.supportsType || (e.supportsType = function (a) { return !a }), a.HTMLPictureElement && g) return void (!c.hasHDescriptorFix && b.msElementsFromPoint && (c.hasHDescriptorFix = !0, i())); a.picturefill || e.pf || (e.pf = function (b) { var c, e; if (!a.picturefill) for (c = 0, e = b.elements.length; c < e; c++)d(b.elements[c]) }, d = function () { var f = function (a, b) { return a.w - b.w }, i = /^\s*\d+\.*\d*px\s*$/, j = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, k = function () { var a, b = /(([^,\s].[^\s]+)\s+(\d+)w)/g, c = /\s/, d = function (b, c, d, e) { a.push({ c: c, u: d, w: 1 * e }) }; return function (e) { return a = [], e = e.trim(), e.replace(h, "").replace(b, d), a.length || !e || c.test(e) || a.push({ c: e, u: e, w: 99 }), a } }(), l = function () { l.init || (l.init = !0, addEventListener("resize", function () { var a, c = b.getElementsByClassName("lazymatchmedia"), e = function () { var a, b; for (a = 0, b = c.length; a < b; a++)d(c[a]) }; return function () { clearTimeout(a), a = setTimeout(e, 66) } }())) }, m = function (b, d) { var f, g = b.getAttribute("srcset") || b.getAttribute(e.srcsetAttr); !g && d && (g = b._lazypolyfill ? b._lazypolyfill._set : b.getAttribute(e.srcAttr) || b.getAttribute("src")), b._lazypolyfill && b._lazypolyfill._set == g || (f = k(g || ""), d && b.parentNode && (f.isPicture = "PICTURE" == b.parentNode.nodeName.toUpperCase(), f.isPicture && a.matchMedia && (c.aC(b, "lazymatchmedia"), l())), f._set = g, Object.defineProperty(b, "_lazypolyfill", { value: f, writable: !0 })) }, n = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.5, d) }, o = function (b) { return a.matchMedia ? (o = function (a) { return !a || (matchMedia(a) || {}).matches })(b) : !b }, p = function (a) { var b, d, g, h, k, l, p; if (h = a, m(h, !0), k = h._lazypolyfill, k.isPicture) for (d = 0, b = a.parentNode.getElementsByTagName("source"), g = b.length; d < g; d++)if (e.supportsType(b[d].getAttribute("type"), a) && o(b[d].getAttribute("media"))) { h = b[d], m(h), k = h._lazypolyfill; break } return k.length > 1 ? (p = h.getAttribute("sizes") || "", p = i.test(p) && parseInt(p, 10) || c.gW(a, a.parentNode), k.d = n(a), !k.src || !k.w || k.w < p ? (k.w = p, l = j(k.sort(f)), k.src = l) : l = k.src) : l = k[0], l }, q = function (a) { if (!g || !a.parentNode || "PICTURE" == a.parentNode.nodeName.toUpperCase()) { var b = p(a); b && b.u && a._lazypolyfill.cur != b.u && (a._lazypolyfill.cur = b.u, b.cached = !0, a.setAttribute(e.srcAttr, b.u), a.setAttribute("src", b.u)) } }; return q.parse = k, q }(), e.loadedClass && e.loadingClass && function () { var a = [];['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function (b) { a.push(b + e.loadedClass), a.push(b + e.loadingClass) }), e.pf({ elements: b.querySelectorAll(a.join(", ")) }) }()) });
    /*! lazysizes - v4.1.8 */
    !function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; if (a.addEventListener) { var d = /\s+/g, e = /\s*\|\s+|\s+\|\s*/g, f = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/, g = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/, h = /\(|\)|'/, i = { contain: 1, cover: 1 }, j = function (a) { var b = c.gW(a, a.parentNode); return (!a._lazysizesWidth || b > a._lazysizesWidth) && (a._lazysizesWidth = b), a._lazysizesWidth }, k = function (a) { var b; return b = (getComputedStyle(a) || { getPropertyValue: function () { } }).getPropertyValue("background-size"), !i[b] && i[a.style.backgroundSize] && (b = a.style.backgroundSize), b }, l = function (a, b) { if (b) { var c = b.match(g); c && c[1] ? a.setAttribute("type", c[1]) : a.setAttribute("media", lazySizesConfig.customMedia[b] || b) } }, m = function (a, c, g) { var h = b.createElement("picture"), i = c.getAttribute(lazySizesConfig.sizesAttr), j = c.getAttribute("data-ratio"), k = c.getAttribute("data-optimumx"); c._lazybgset && c._lazybgset.parentNode == c && c.removeChild(c._lazybgset), Object.defineProperty(g, "_lazybgset", { value: c, writable: !0 }), Object.defineProperty(c, "_lazybgset", { value: h, writable: !0 }), a = a.replace(d, " ").split(e), h.style.display = "none", g.className = lazySizesConfig.lazyClass, 1 != a.length || i || (i = "auto"), a.forEach(function (a) { var c, d = b.createElement("source"); i && "auto" != i && d.setAttribute("sizes", i), (c = a.match(f)) ? (d.setAttribute(lazySizesConfig.srcsetAttr, c[1]), l(d, c[2]), l(d, c[3])) : d.setAttribute(lazySizesConfig.srcsetAttr, a), h.appendChild(d) }), i && (g.setAttribute(lazySizesConfig.sizesAttr, i), c.removeAttribute(lazySizesConfig.sizesAttr), c.removeAttribute("sizes")), k && g.setAttribute("data-optimumx", k), j && g.setAttribute("data-ratio", j), h.appendChild(g), c.appendChild(h) }, n = function (a) { if (a.target._lazybgset) { var b = a.target, d = b._lazybgset, e = b.currentSrc || b.src; if (e) { var f = c.fire(d, "bgsetproxy", { src: e, useSrc: h.test(e) ? JSON.stringify(e) : e }); f.defaultPrevented || (d.style.backgroundImage = "url(" + f.detail.useSrc + ")") } b._lazybgsetLoading && (c.fire(d, "_lazyloaded", {}, !1, !0), delete b._lazybgsetLoading) } }; addEventListener("lazybeforeunveil", function (a) { var d, e, f; !a.defaultPrevented && (d = a.target.getAttribute("data-bgset")) && (f = a.target, e = b.createElement("img"), e.alt = "", e._lazybgsetLoading = !0, a.detail.firesLoad = !0, m(d, f, e), setTimeout(function () { c.loader.unveil(e), c.rAF(function () { c.fire(e, "_lazyloaded", {}, !0, !0), e.complete && n({ target: e }) }) })) }), b.addEventListener("load", n, !0), a.addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c && a.target._lazybgset && a.detail.dataAttr) { var b = a.target._lazybgset, d = k(b); i[d] && (a.target._lazysizesParentFit = d, c.rAF(function () { a.target.setAttribute("data-parent-fit", d), a.target._lazysizesParentFit && delete a.target._lazysizesParentFit })) } }, !0), b.documentElement.addEventListener("lazybeforesizes", function (a) { !a.defaultPrevented && a.target._lazybgset && a.detail.instance == c && (a.detail.width = j(a.target._lazybgset)) }) } });
    }

    if('lazySizesConfig' in window) {
      lazySizesConfig.loadHidden = true;
      jQuery('.mdp').each(function(){
        var $sh = jQuery(this);
        if(lazySizesConfig.lazyClass && lazySizesConfig.lazyClass != 'lazyload') {
          $sh.find('.lazyload').removeClass('lazyload').addClass(lazySizesConfig.lazyClass);
        }
        if(lazySizesConfig.loadedClass && lazySizesConfig.loadedClass != 'lazyloaded') {
          $sh.find('.lazyload').removeClass('lazyloaded').addClass(lazySizesConfig.loadedClass);
        }
        if(lazySizesConfig.loadingClass && lazySizesConfig.loadingClass != 'lazyloading') {
          $sh.find('.lazyload').removeClass('lazyloading').addClass(lazySizesConfig.loadingClass);
        }
        if(lazySizesConfig.preloadClass && lazySizesConfig.preloadClass != 'lazypreload') {
          $sh.find('.lazyload').removeClass('lazypreload').addClass(lazySizesConfig.preloadClass);
        }
      });
    }


    /*!
     * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
     * Copyright (c) 2016 Edson Hilios
     */
    !function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.firstTick=!0,this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var a,b=new Date;return a=this.finalDate.getTime()-b.getTime(),a=Math.ceil(a/1e3),a=!this.options.elapse&&a<0?0:Math.abs(a),this.totalSecsLeft===a||this.firstTick?void(this.firstTick=!1):(this.totalSecsLeft=a,this.elapsed=b>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-b.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},void(this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish"))))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});

    /*
     * jQuery throttle / debounce - v1.1 - 3/7/2010
     * http://benalman.com/projects/jquery-throttle-debounce-plugin/
     *
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);


    /*! Magnific Popup - v1.1.0 - 2016-02-20
    * http://dimsemenov.com/plugins/magnific-popup/
    * Copyright (c) 2016 Dmitry Semenov; */
    !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

    // Ion.RangeSlider | version 2.1.4 | https://github.com/IonDen/ion.rangeSlider
    !function(t){"function"==typeof define&&define.amd?define(["jquery"],function(i){t(i,document,window,navigator)}):t(jQuery,document,window,navigator)}(function(t,i,s,o,e){var h=0,r=function(){var i=o.userAgent,s=/msie\s\d+/i;return 0<i.search(s)&&(i=s.exec(i).toString(),i=i.split(" ")[1],9>i)&&(t("html").addClass("lt-ie9"),!0)}();Function.prototype.bind||(Function.prototype.bind=function(t){var i=this,s=[].slice;if("function"!=typeof i)throw new TypeError;var o=s.call(arguments,1),e=function(){if(this instanceof e){var h=function(){};h.prototype=i.prototype;var h=new h,r=i.apply(h,o.concat(s.call(arguments)));return Object(r)===r?r:h}return i.apply(t,o.concat(s.call(arguments)))};return e}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,i){var s;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),e=o.length>>>0;if(0===e)return-1;if(s=+i||0,1/0===Math.abs(s)&&(s=0),s>=e)return-1;for(s=Math.max(0<=s?s:e-Math.abs(s),0);s<e;){if(s in o&&o[s]===t)return s;s++}return-1});var n=function(o,e,h){this.VERSION="2.1.4",this.input=o,this.plugin_count=h,this.old_to=this.old_from=this.update_tm=this.calc_count=this.current_plugin=0,this.raf_id=this.old_min_interval=null,this.is_update=this.is_key=this.no_diapason=this.force_redraw=this.dragging=!1,this.is_start=!0,this.is_click=this.is_resize=this.is_active=this.is_finish=!1,this.$cache={win:t(s),body:t(i.body),input:t(o),cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,edge:null,grid:null,grid_labels:[]},this.coords={x_gap:0,x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single_fake:0,p_single_real:0,p_from_fake:0,p_from_real:0,p_to_fake:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]},this.labels={w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from_fake:0,p_from_left:0,p_to_fake:0,p_to_left:0,p_single_fake:0,p_single_left:0};var r=this.$cache.input;o=r.prop("value");var n;h={type:"single",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:" ",prettify:null,force_edges:!1,keyboard:!1,keyboard_step:5,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:"",postfix:"",max_postfix:"",decorate_both:!0,values_separator:" — ",input_values_separator:";",disable:!1,onStart:null,onChange:null,onFinish:null,onUpdate:null},r={type:r.data("type"),min:r.data("min"),max:r.data("max"),from:r.data("from"),to:r.data("to"),step:r.data("step"),min_interval:r.data("minInterval"),max_interval:r.data("maxInterval"),drag_interval:r.data("dragInterval"),values:r.data("values"),from_fixed:r.data("fromFixed"),from_min:r.data("fromMin"),from_max:r.data("fromMax"),from_shadow:r.data("fromShadow"),to_fixed:r.data("toFixed"),to_min:r.data("toMin"),to_max:r.data("toMax"),to_shadow:r.data("toShadow"),prettify_enabled:r.data("prettifyEnabled"),prettify_separator:r.data("prettifySeparator"),force_edges:r.data("forceEdges"),keyboard:r.data("keyboard"),keyboard_step:r.data("keyboardStep"),grid:r.data("grid"),grid_margin:r.data("gridMargin"),grid_num:r.data("gridNum"),grid_snap:r.data("gridSnap"),hide_min_max:r.data("hideMinMax"),hide_from_to:r.data("hideFromTo"),prefix:r.data("prefix"),postfix:r.data("postfix"),max_postfix:r.data("maxPostfix"),decorate_both:r.data("decorateBoth"),values_separator:r.data("valuesSeparator"),input_values_separator:r.data("inputValuesSeparator"),disable:r.data("disable")},r.values=r.values&&r.values.split(",");for(n in r)r.hasOwnProperty(n)&&(r[n]||0===r[n]||delete r[n]);o&&(o=o.split(r.input_values_separator||e.input_values_separator||";"),o[0]&&o[0]==+o[0]&&(o[0]=+o[0]),o[1]&&o[1]==+o[1]&&(o[1]=+o[1]),e&&e.values&&e.values.length?(h.from=o[0]&&e.values.indexOf(o[0]),h.to=o[1]&&e.values.indexOf(o[1])):(h.from=o[0]&&+o[0],h.to=o[1]&&+o[1])),t.extend(h,e),t.extend(h,r),this.options=h,this.validate(),this.result={input:this.$cache.input,slider:null,min:this.options.min,max:this.options.max,from:this.options.from,from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null},this.init()};n.prototype={init:function(t){this.no_diapason=!1,this.coords.p_step=this.convertToPercent(this.options.step,!0),this.target="base",this.toggleInput(),this.append(),this.setMinMax(),t?(this.force_redraw=!0,this.calc(!0),this.callOnUpdate()):(this.force_redraw=!0,this.calc(!0),this.callOnStart()),this.updateScene()},append:function(){this.$cache.input.before('<span class="irs js-irs-'+this.plugin_count+'"></span>'),this.$cache.input.prop("readonly",!0),this.$cache.cont=this.$cache.input.prev(),this.result.slider=this.$cache.cont,this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'),this.$cache.rs=this.$cache.cont.find(".irs"),this.$cache.min=this.$cache.cont.find(".irs-min"),this.$cache.max=this.$cache.cont.find(".irs-max"),this.$cache.from=this.$cache.cont.find(".irs-from"),this.$cache.to=this.$cache.cont.find(".irs-to"),this.$cache.single=this.$cache.cont.find(".irs-single"),this.$cache.bar=this.$cache.cont.find(".irs-bar"),this.$cache.line=this.$cache.cont.find(".irs-line"),this.$cache.grid=this.$cache.cont.find(".irs-grid"),"single"===this.options.type?(this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'),this.$cache.edge=this.$cache.cont.find(".irs-bar-edge"),this.$cache.s_single=this.$cache.cont.find(".single"),this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.shad_single=this.$cache.cont.find(".shadow-single")):(this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),this.$cache.s_from=this.$cache.cont.find(".from"),this.$cache.s_to=this.$cache.cont.find(".to"),this.$cache.shad_from=this.$cache.cont.find(".shadow-from"),this.$cache.shad_to=this.$cache.cont.find(".shadow-to"),this.setTopHandler()),this.options.hide_from_to&&(this.$cache.from[0].style.display="none",this.$cache.to[0].style.display="none",this.$cache.single[0].style.display="none"),this.appendGrid(),this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.cont.removeClass("irs-disabled"),this.$cache.input[0].disabled=!1,this.bindEvents()),this.options.drag_interval&&(this.$cache.bar[0].style.cursor="ew-resize")},setTopHandler:function(){var t=this.options.max,i=this.options.to;this.options.from>this.options.min&&i===t?this.$cache.s_from.addClass("type_last"):i<t&&this.$cache.s_to.addClass("type_last")},changeLevel:function(t){switch(t){case"single":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single_fake);break;case"from":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.$cache.s_from.addClass("state_hover"),this.$cache.s_from.addClass("type_last"),this.$cache.s_to.removeClass("type_last");break;case"to":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to_fake),this.$cache.s_to.addClass("state_hover"),this.$cache.s_to.addClass("type_last"),this.$cache.s_from.removeClass("type_last");break;case"both":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.coords.p_gap_right=this.toFixed(this.coords.p_to_fake-this.coords.p_pointer),this.$cache.s_to.removeClass("type_last"),this.$cache.s_from.removeClass("type_last")}},appendDisableMask:function(){this.$cache.cont.append('<span class="irs-disable-mask"></span>'),this.$cache.cont.addClass("irs-disabled")},remove:function(){this.$cache.cont.remove(),this.$cache.cont=null,this.$cache.line.off("keydown.irs_"+this.plugin_count),this.$cache.body.off("touchmove.irs_"+this.plugin_count),this.$cache.body.off("mousemove.irs_"+this.plugin_count),this.$cache.win.off("touchend.irs_"+this.plugin_count),this.$cache.win.off("mouseup.irs_"+this.plugin_count),r&&(this.$cache.body.off("mouseup.irs_"+this.plugin_count),this.$cache.body.off("mouseleave.irs_"+this.plugin_count)),this.$cache.grid_labels=[],this.coords.big=[],this.coords.big_w=[],this.coords.big_p=[],this.coords.big_x=[],cancelAnimationFrame(this.raf_id)},bindEvents:function(){this.no_diapason||(this.$cache.body.on("touchmove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.body.on("mousemove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.win.on("touchend.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.win.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.line.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.line.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.options.drag_interval&&"double"===this.options.type?(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"both")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"both"))):(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),"single"===this.options.type?(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.edge.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_single.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))):(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),this.options.keyboard&&this.$cache.line.on("keydown.irs_"+this.plugin_count,this.key.bind(this,"keyboard")),r&&(this.$cache.body.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on("mouseleave.irs_"+this.plugin_count,this.pointerUp.bind(this))))},pointerMove:function(t){this.dragging&&(this.coords.x_pointer=(t.pageX||t.originalEvent.touches&&t.originalEvent.touches[0].pageX)-this.coords.x_gap,this.calc())},pointerUp:function(i){this.current_plugin===this.plugin_count&&this.is_active&&(this.is_active=!1,this.$cache.cont.find(".state_hover").removeClass("state_hover"),this.force_redraw=!0,r&&t("*").prop("unselectable",!1),this.updateScene(),this.restoreOriginalMinInterval(),(t.contains(this.$cache.cont[0],i.target)||this.dragging)&&(this.is_finish=!0,this.callOnFinish()),this.dragging=!1)},pointerDown:function(i,s){s.preventDefault();var o=s.pageX||s.originalEvent.touches&&s.originalEvent.touches[0].pageX;2!==s.button&&("both"===i&&this.setTempMinInterval(),i||(i=this.target),this.current_plugin=this.plugin_count,this.target=i,this.dragging=this.is_active=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=o-this.coords.x_gap,this.calcPointerPercent(),this.changeLevel(i),r&&t("*").prop("unselectable",!0),this.$cache.line.trigger("focus"),this.updateScene())},pointerClick:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&(this.current_plugin=this.plugin_count,this.target=t,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(s-this.coords.x_gap).toFixed(),this.force_redraw=!0,this.calc(),this.$cache.line.trigger("focus"))},key:function(t,i){if(!(this.current_plugin!==this.plugin_count||i.altKey||i.ctrlKey||i.shiftKey||i.metaKey)){switch(i.which){case 83:case 65:case 40:case 37:i.preventDefault(),this.moveByKey(!1);break;case 87:case 68:case 38:case 39:i.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(t){var i=this.coords.p_pointer,i=t?i+this.options.keyboard_step:i-this.options.keyboard_step;this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*i),this.is_key=!0,this.calc()},setMinMax:function(){this.options&&(this.options.hide_min_max?(this.$cache.min[0].style.display="none",this.$cache.max[0].style.display="none"):(this.options.values.length?(this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))):(this.$cache.min.html(this.decorate(this._prettify(this.options.min),this.options.min)),this.$cache.max.html(this.decorate(this._prettify(this.options.max),this.options.max))),this.labels.w_min=this.$cache.min.outerWidth(!1),this.labels.w_max=this.$cache.max.outerWidth(!1)))},setTempMinInterval:function(){var t=this.result.to-this.result.from;null===this.old_min_interval&&(this.old_min_interval=this.options.min_interval),this.options.min_interval=t},restoreOriginalMinInterval:function(){null!==this.old_min_interval&&(this.options.min_interval=this.old_min_interval,this.old_min_interval=null)},calc:function(t){if(this.options&&(this.calc_count++,(10===this.calc_count||t)&&(this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.calcHandlePercent()),this.coords.w_rs)){switch(this.calcPointerPercent(),t=this.getHandleX(),"click"===this.target&&(this.coords.p_gap=this.coords.p_handle/2,t=this.getHandleX(),this.target=this.options.drag_interval?"both_one":this.chooseHandle(t)),this.target){case"base":var i=(this.options.max-this.options.min)/100;t=(this.result.from-this.options.min)/i,i=(this.result.to-this.options.min)/i,this.coords.p_single_real=this.toFixed(t),this.coords.p_from_real=this.toFixed(t),this.coords.p_to_real=this.toFixed(i),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real),this.target=null;break;case"single":if(this.options.from_fixed)break;this.coords.p_single_real=this.convertToRealPercent(t),this.coords.p_single_real=this.calcWithStep(this.coords.p_single_real),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);break;case"from":if(this.options.from_fixed)break;this.coords.p_from_real=this.convertToRealPercent(t),this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real>this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_real=this.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);break;case"to":if(this.options.to_fixed)break;this.coords.p_to_real=this.convertToRealPercent(t),this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=this.coords.p_from_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both":if(this.options.from_fixed||this.options.to_fixed)break;t=this.toFixed(t+.1*this.coords.p_handle),this.coords.p_from_real=this.convertToRealPercent(t)-this.coords.p_gap_left,this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.convertToRealPercent(t)+this.coords.p_gap_right,this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both_one":if(!this.options.from_fixed&&!this.options.to_fixed){var s=this.convertToRealPercent(t);t=this.result.to_percent-this.result.from_percent;var o=t/2,i=s-o,s=s+o;0>i&&(i=0,s=i+t),100<s&&(s=100,i=s-t),this.coords.p_from_real=this.calcWithStep(i),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.calcWithStep(s),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real)}}"single"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single_fake,this.result.from_percent=this.coords.p_single_real,this.result.from=this.convertToValue(this.coords.p_single_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=this.toFixed(this.coords.p_from_fake+this.coords.p_handle/2),this.coords.p_bar_w=this.toFixed(this.coords.p_to_fake-this.coords.p_from_fake),this.result.from_percent=this.coords.p_from_real,this.result.from=this.convertToValue(this.coords.p_from_real),this.result.to_percent=this.coords.p_to_real,this.result.to=this.convertToValue(this.coords.p_to_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to])),this.calcMinMax(),this.calcLabels()}},calcPointerPercent:function(){this.coords.w_rs?(0>this.coords.x_pointer||isNaN(this.coords.x_pointer)?this.coords.x_pointer=0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100)):this.coords.p_pointer=0},convertToRealPercent:function(t){return t/(100-this.coords.p_handle)*100},convertToFakePercent:function(t){return t/100*(100-this.coords.p_handle)},getHandleX:function(){var t=100-this.coords.p_handle,i=this.toFixed(this.coords.p_pointer-this.coords.p_gap);return 0>i?i=0:i>t&&(i=t),i},calcHandlePercent:function(){this.coords.w_handle="single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100)},chooseHandle:function(t){return"single"===this.options.type?"single":t>=this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2?this.options.to_fixed?"from":"to":this.options.from_fixed?"to":"from"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=this.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&("single"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single_fake+this.coords.p_handle/2-this.labels.p_single_fake/2):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from_fake=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=this.coords.p_from_fake+this.coords.p_handle/2-this.labels.p_from_fake/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from_fake),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to_fake=this.labels.w_to/this.coords.w_rs*100,this.labels.p_to_left=this.coords.p_to_fake+this.coords.p_handle/2-this.labels.p_to_fake/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=this.checkEdges(this.labels.p_to_left,this.labels.p_to_fake),this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to_fake)/2-this.labels.p_single_fake/2,this.labels.p_single_left=this.toFixed(this.labels.p_single_left)),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single_fake))},updateScene:function(){this.raf_id&&(cancelAnimationFrame(this.raf_id),this.raf_id=null),clearTimeout(this.update_tm),this.update_tm=null,this.options&&(this.drawHandles(),this.is_active?this.raf_id=requestAnimationFrame(this.updateScene.bind(this)):this.update_tm=setTimeout(this.updateScene.bind(this),300))},drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_rs!==this.coords.w_rs_old&&(this.target="base",this.is_resize=!0),(this.coords.w_rs!==this.coords.w_rs_old||this.force_redraw)&&(this.setMinMax(),this.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow()),this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)&&((this.old_from!==this.result.from||this.old_to!==this.result.to||this.force_redraw||this.is_key)&&(this.drawLabels(),this.$cache.bar[0].style.left=this.coords.p_bar_x+"%",this.$cache.bar[0].style.width=this.coords.p_bar_w+"%","single"===this.options.type?(this.$cache.s_single[0].style.left=this.coords.p_single_fake+"%",this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.options.values.length?this.$cache.input.prop("value",this.result.from_value):this.$cache.input.prop("value",this.result.from),this.$cache.input.data("from",this.result.from)):(this.$cache.s_from[0].style.left=this.coords.p_from_fake+"%",this.$cache.s_to[0].style.left=this.coords.p_to_fake+"%",(this.old_from!==this.result.from||this.force_redraw)&&(this.$cache.from[0].style.left=this.labels.p_from_left+"%"),(this.old_to!==this.result.to||this.force_redraw)&&(this.$cache.to[0].style.left=this.labels.p_to_left+"%"),this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.options.values.length?this.$cache.input.prop("value",this.result.from_value+this.options.input_values_separator+this.result.to_value):this.$cache.input.prop("value",this.result.from+this.options.input_values_separator+this.result.to),this.$cache.input.data("from",this.result.from),this.$cache.input.data("to",this.result.to)),this.old_from===this.result.from&&this.old_to===this.result.to||this.is_start||this.$cache.input.trigger("change"),this.old_from=this.result.from,this.old_to=this.result.to,this.is_resize||this.is_update||this.is_start||this.is_finish||this.callOnChange(),(this.is_key||this.is_click)&&(this.is_click=this.is_key=!1,this.callOnFinish()),this.is_finish=this.is_resize=this.is_update=!1),this.force_redraw=this.is_click=this.is_key=this.is_start=!1))},drawLabels:function(){if(this.options){var t,i=this.options.values.length,s=this.options.p_values;if(!this.options.hide_from_to)if("single"===this.options.type)i=i?this.decorate(s[this.result.from]):this.decorate(this._prettify(this.result.from),this.result.from),this.$cache.single.html(i),this.calcLabels(),this.$cache.min[0].style.visibility=this.labels.p_single_left<this.labels.p_min+1?"hidden":"visible",this.$cache.max[0].style.visibility=this.labels.p_single_left+this.labels.p_single_fake>100-this.labels.p_max-1?"hidden":"visible";else{i?(this.options.decorate_both?(i=this.decorate(s[this.result.from]),i+=this.options.values_separator,i+=this.decorate(s[this.result.to])):i=this.decorate(s[this.result.from]+this.options.values_separator+s[this.result.to]),t=this.decorate(s[this.result.from]),s=this.decorate(s[this.result.to])):(this.options.decorate_both?(i=this.decorate(this._prettify(this.result.from),this.result.from),i+=this.options.values_separator,i+=this.decorate(this._prettify(this.result.to),this.result.to)):i=this.decorate(this._prettify(this.result.from)+this.options.values_separator+this._prettify(this.result.to),this.result.to),t=this.decorate(this._prettify(this.result.from),this.result.from),s=this.decorate(this._prettify(this.result.to),this.result.to)),this.$cache.single.html(i),this.$cache.from.html(t),this.$cache.to.html(s),this.calcLabels(),s=Math.min(this.labels.p_single_left,this.labels.p_from_left),i=this.labels.p_single_left+this.labels.p_single_fake,t=this.labels.p_to_left+this.labels.p_to_fake;var o=Math.max(i,t);this.labels.p_from_left+this.labels.p_from_fake>=this.labels.p_to_left?(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",this.result.from===this.result.to?("from"===this.target?this.$cache.from[0].style.visibility="visible":"to"===this.target?this.$cache.to[0].style.visibility="visible":this.target||(this.$cache.from[0].style.visibility="visible"),this.$cache.single[0].style.visibility="hidden",o=t):(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",o=Math.max(i,t))):(this.$cache.from[0].style.visibility="visible",this.$cache.to[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden"),this.$cache.min[0].style.visibility=s<this.labels.p_min+1?"hidden":"visible",this.$cache.max[0].style.visibility=o>100-this.labels.p_max-1?"hidden":"visible"}}},drawShadow:function(){var t=this.options,i=this.$cache,s="number"==typeof t.from_min&&!isNaN(t.from_min),o="number"==typeof t.from_max&&!isNaN(t.from_max),e="number"==typeof t.to_min&&!isNaN(t.to_min),h="number"==typeof t.to_max&&!isNaN(t.to_max);"single"===t.type?t.from_shadow&&(s||o)?(s=this.convertToPercent(s?t.from_min:t.min),o=this.convertToPercent(o?t.from_max:t.max)-s,s=this.toFixed(s-this.coords.p_handle/100*s),o=this.toFixed(o-this.coords.p_handle/100*o),s+=this.coords.p_handle/2,i.shad_single[0].style.display="block",i.shad_single[0].style.left=s+"%",i.shad_single[0].style.width=o+"%"):i.shad_single[0].style.display="none":(t.from_shadow&&(s||o)?(s=this.convertToPercent(s?t.from_min:t.min),o=this.convertToPercent(o?t.from_max:t.max)-s,s=this.toFixed(s-this.coords.p_handle/100*s),o=this.toFixed(o-this.coords.p_handle/100*o),s+=this.coords.p_handle/2,i.shad_from[0].style.display="block",i.shad_from[0].style.left=s+"%",i.shad_from[0].style.width=o+"%"):i.shad_from[0].style.display="none",t.to_shadow&&(e||h)?(e=this.convertToPercent(e?t.to_min:t.min),t=this.convertToPercent(h?t.to_max:t.max)-e,e=this.toFixed(e-this.coords.p_handle/100*e),t=this.toFixed(t-this.coords.p_handle/100*t),e+=this.coords.p_handle/2,i.shad_to[0].style.display="block",i.shad_to[0].style.left=e+"%",i.shad_to[0].style.width=t+"%"):i.shad_to[0].style.display="none")},callOnStart:function(){this.options.onStart&&"function"==typeof this.options.onStart&&this.options.onStart(this.result)},callOnChange:function(){this.options.onChange&&"function"==typeof this.options.onChange&&this.options.onChange(this.result)},callOnFinish:function(){this.options.onFinish&&"function"==typeof this.options.onFinish&&this.options.onFinish(this.result)},callOnUpdate:function(){this.options.onUpdate&&"function"==typeof this.options.onUpdate&&this.options.onUpdate(this.result)},toggleInput:function(){this.$cache.input.toggleClass("irs-hidden-input")},convertToPercent:function(t,i){var s=this.options.max-this.options.min;return s?this.toFixed((i?t:t-this.options.min)/(s/100)):(this.no_diapason=!0,0)},convertToValue:function(t){var i,s,o=this.options.min,e=this.options.max,h=o.toString().split(".")[1],r=e.toString().split(".")[1],n=0,a=0;return 0===t?this.options.min:100===t?this.options.max:(h&&(n=i=h.length),r&&(n=s=r.length),i&&s&&(n=i>=s?i:s),0>o&&(a=Math.abs(o),o=+(o+a).toFixed(n),e=+(e+a).toFixed(n)),t=(e-o)/100*t+o,(o=this.options.step.toString().split(".")[1])?t=+t.toFixed(o.length):(t/=this.options.step,t*=this.options.step,t=+t.toFixed(0)),a&&(t-=a),a=o?+t.toFixed(o.length):this.toFixed(t),a<this.options.min?a=this.options.min:a>this.options.max&&(a=this.options.max),a)},calcWithStep:function(t){var i=Math.round(t/this.coords.p_step)*this.coords.p_step;return 100<i&&(i=100),100===t&&(i=100),this.toFixed(i)},checkMinInterval:function(t,i,s){var o=this.options;return o.min_interval?(t=this.convertToValue(t),i=this.convertToValue(i),"from"===s?i-t<o.min_interval&&(t=i-o.min_interval):t-i<o.min_interval&&(t=i+o.min_interval),this.convertToPercent(t)):t},checkMaxInterval:function(t,i,s){var o=this.options;return o.max_interval?(t=this.convertToValue(t),i=this.convertToValue(i),"from"===s?i-t>o.max_interval&&(t=i-o.max_interval):t-i>o.max_interval&&(t=i+o.max_interval),this.convertToPercent(t)):t},checkDiapason:function(t,i,s){t=this.convertToValue(t);var o=this.options;return"number"!=typeof i&&(i=o.min),"number"!=typeof s&&(s=o.max),t<i&&(t=i),t>s&&(t=s),this.convertToPercent(t)},toFixed:function(t){return t=t.toFixed(9),+t},_prettify:function(t){return this.options.prettify_enabled?this.options.prettify&&"function"==typeof this.options.prettify?this.options.prettify(t):this.prettify(t):t},prettify:function(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1"+this.options.prettify_separator)},checkEdges:function(t,i){return this.options.force_edges?(0>t?t=0:t>100-i&&(t=100-i),
    this.toFixed(t)):this.toFixed(t)},validate:function(){var t,i,s=this.options,o=this.result,e=s.values,h=e.length;if("string"==typeof s.min&&(s.min=+s.min),"string"==typeof s.max&&(s.max=+s.max),"string"==typeof s.from&&(s.from=+s.from),"string"==typeof s.to&&(s.to=+s.to),"string"==typeof s.step&&(s.step=+s.step),"string"==typeof s.from_min&&(s.from_min=+s.from_min),"string"==typeof s.from_max&&(s.from_max=+s.from_max),"string"==typeof s.to_min&&(s.to_min=+s.to_min),"string"==typeof s.to_max&&(s.to_max=+s.to_max),"string"==typeof s.keyboard_step&&(s.keyboard_step=+s.keyboard_step),"string"==typeof s.grid_num&&(s.grid_num=+s.grid_num),s.max<s.min&&(s.max=s.min),h)for(s.p_values=[],s.min=0,s.max=h-1,s.step=1,s.grid_num=s.max,s.grid_snap=!0,i=0;i<h;i++)t=+e[i],isNaN(t)?t=e[i]:(e[i]=t,t=this._prettify(t)),s.p_values.push(t);("number"!=typeof s.from||isNaN(s.from))&&(s.from=s.min),("number"!=typeof s.to||isNaN(s.from))&&(s.to=s.max),"single"===s.type?(s.from<s.min&&(s.from=s.min),s.from>s.max&&(s.from=s.max)):((s.from<s.min||s.from>s.max)&&(s.from=s.min),(s.to>s.max||s.to<s.min)&&(s.to=s.max),s.from>s.to&&(s.from=s.to)),("number"!=typeof s.step||isNaN(s.step)||!s.step||0>s.step)&&(s.step=1),("number"!=typeof s.keyboard_step||isNaN(s.keyboard_step)||!s.keyboard_step||0>s.keyboard_step)&&(s.keyboard_step=5),"number"==typeof s.from_min&&s.from<s.from_min&&(s.from=s.from_min),"number"==typeof s.from_max&&s.from>s.from_max&&(s.from=s.from_max),"number"==typeof s.to_min&&s.to<s.to_min&&(s.to=s.to_min),"number"==typeof s.to_max&&s.from>s.to_max&&(s.to=s.to_max),o&&(o.min!==s.min&&(o.min=s.min),o.max!==s.max&&(o.max=s.max),(o.from<o.min||o.from>o.max)&&(o.from=s.from),(o.to<o.min||o.to>o.max)&&(o.to=s.to)),("number"!=typeof s.min_interval||isNaN(s.min_interval)||!s.min_interval||0>s.min_interval)&&(s.min_interval=0),("number"!=typeof s.max_interval||isNaN(s.max_interval)||!s.max_interval||0>s.max_interval)&&(s.max_interval=0),s.min_interval&&s.min_interval>s.max-s.min&&(s.min_interval=s.max-s.min),s.max_interval&&s.max_interval>s.max-s.min&&(s.max_interval=s.max-s.min)},decorate:function(t,i){var s="",o=this.options;return o.prefix&&(s+=o.prefix),s+=t,o.max_postfix&&(o.values.length&&t===o.p_values[o.max]?(s+=o.max_postfix,o.postfix&&(s+=" ")):i===o.max&&(s+=o.max_postfix,o.postfix&&(s+=" "))),o.postfix&&(s+=o.postfix),s},updateFrom:function(){this.result.from=this.options.from,this.result.from_percent=this.convertToPercent(this.result.from),this.options.values&&(this.result.from_value=this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to,this.result.to_percent=this.convertToPercent(this.result.to),this.options.values&&(this.result.to_value=this.options.values[this.result.to])},updateResult:function(){this.result.min=this.options.min,this.result.max=this.options.max,this.updateFrom(),this.updateTo()},appendGrid:function(){if(this.options.grid){var t,i,s=this.options;t=s.max-s.min;var o,e,h=s.grid_num,r=0,n=0,a=4,c=0,l="";for(this.calcGridMargin(),s.grid_snap?(h=t/s.step,r=this.toFixed(s.step/(t/100))):r=this.toFixed(100/h),4<h&&(a=3),7<h&&(a=2),14<h&&(a=1),28<h&&(a=0),t=0;t<h+1;t++){for(o=a,n=this.toFixed(r*t),100<n&&(n=100,o-=2,0>o&&(o=0)),this.coords.big[t]=n,e=(n-r*(t-1))/(o+1),i=1;i<=o&&0!==n;i++)c=this.toFixed(n-e*i),l+='<span class="irs-grid-pol small" style="left: '+c+'%"></span>';l+='<span class="irs-grid-pol" style="left: '+n+'%"></span>',c=this.convertToValue(n),c=s.values.length?s.p_values[c]:this._prettify(c),l+='<span class="irs-grid-text js-grid-text-'+t+'" style="left: '+n+'%">'+c+"</span>"}this.coords.big_num=Math.ceil(h+1),this.$cache.cont.addClass("irs-with-grid"),this.$cache.grid.html(l),this.cacheGridLabels()}},cacheGridLabels:function(){var t,i,s=this.coords.big_num;for(i=0;i<s;i++)t=this.$cache.grid.find(".js-grid-text-"+i),this.$cache.grid_labels.push(t);this.calcGridLabels()},calcGridLabels:function(){var t,i;i=[];var s=[],o=this.coords.big_num;for(t=0;t<o;t++)this.coords.big_w[t]=this.$cache.grid_labels[t].outerWidth(!1),this.coords.big_p[t]=this.toFixed(this.coords.big_w[t]/this.coords.w_rs*100),this.coords.big_x[t]=this.toFixed(this.coords.big_p[t]/2),i[t]=this.toFixed(this.coords.big[t]-this.coords.big_x[t]),s[t]=this.toFixed(i[t]+this.coords.big_p[t]);for(this.options.force_edges&&(i[0]<-this.coords.grid_gap&&(i[0]=-this.coords.grid_gap,s[0]=this.toFixed(i[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),s[o-1]>100+this.coords.grid_gap&&(s[o-1]=100+this.coords.grid_gap,i[o-1]=this.toFixed(s[o-1]-this.coords.big_p[o-1]),this.coords.big_x[o-1]=this.toFixed(this.coords.big_p[o-1]-this.coords.grid_gap))),this.calcGridCollision(2,i,s),this.calcGridCollision(4,i,s),t=0;t<o;t++)i=this.$cache.grid_labels[t][0],i.style.marginLeft=-this.coords.big_x[t]+"%"},calcGridCollision:function(t,i,s){var o,e,h,r=this.coords.big_num;for(o=0;o<r&&(e=o+t/2,!(e>=r));o+=t)h=this.$cache.grid_labels[e][0],h.style.visibility=s[o]<=i[e]?"visible":"hidden"},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_handle="single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+"%",this.$cache.grid[0].style.left=this.coords.grid_gap+"%"))},update:function(i){this.input&&(this.is_update=!0,this.options.from=this.result.from,this.options.to=this.result.to,this.options=t.extend(this.options,i),this.validate(),this.updateResult(i),this.toggleInput(),this.remove(),this.init(!0))},reset:function(){this.input&&(this.updateResult(),this.update())},destroy:function(){this.input&&(this.toggleInput(),this.$cache.input.prop("readonly",!1),t.data(this.input,"ionRangeSlider",null),this.remove(),this.options=this.input=null)}},t.fn.ionRangeSlider=function(i){return this.each(function(){t.data(this,"ionRangeSlider")||t.data(this,"ionRangeSlider",new n(this,i,(h++)))})},function(){for(var t=0,i=["ms","moz","webkit","o"],o=0;o<i.length&&!s.requestAnimationFrame;++o)s.requestAnimationFrame=s[i[o]+"RequestAnimationFrame"],s.cancelAnimationFrame=s[i[o]+"CancelAnimationFrame"]||s[i[o]+"CancelRequestAnimationFrame"];s.requestAnimationFrame||(s.requestAnimationFrame=function(i,o){var e=(new Date).getTime(),h=Math.max(0,16-(e-t)),r=s.setTimeout(function(){i(e+h)},h);return t=e+h,r}),s.cancelAnimationFrame||(s.cancelAnimationFrame=function(t){clearTimeout(t)})}()});

    /*!
     * imagesLoaded PACKAGED v4.1.1
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    !function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),o=i[n+=r?0:1]}return this}},t}),
    /*!
     * imagesLoaded v4.1.1
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){var i=t.jQuery,n=t.console;function o(t,e){for(var i in e)t[i]=e[i];return t}function s(t,e,n){if(!(this instanceof s))return new s(t,e,n);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=function(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}(t),this.options=o({},this.options),"function"==typeof e?n=e:o(this.options,e),n&&this.on("always",n),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(function(){this.check()}.bind(this))}s.prototype=Object.create(e.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&r[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var s=t.querySelectorAll(this.options.background);for(n=0;n<s.length;n++){var h=s[n];this.addElementBackgroundImages(h)}}}};var r={1:!0,9:!0,11:!0};function h(t){this.img=t}function a(t,e){this.url=t,this.element=e,this.img=new Image}return s.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},s.prototype.addImage=function(t){var e=new h(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var i=new a(t,e);this.images.push(i)},s.prototype.check=function(){var t=this;function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},s.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&n&&n.log("progress: "+i,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},h.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},a.prototype=Object.create(h.prototype),a.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},a.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},s.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((i=e).fn.imagesLoaded=function(t,e){return new s(this,t,e).jqDeferred.promise(i(this))})},s.makeJQueryPlugin(),s});

    !function(t){"AZ_jQueryBridget"in window||(
    /*!
     * Isotope PACKAGED v3.0.1
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * http://isotope.metafizzy.co
     * Copyright 2016 Metafizzy
     */
    !function(e,i){"use strict";e.AZ_jQueryBridget=function(t,e){var i=Array.prototype.slice,n=t.console,o=void 0===n?function(){}:function(t){n.error(t)};function s(t,n,s){(s=s||e)&&(n.prototype.option||(n.prototype.option=function(t){s.isPlainObject(t)&&(this.options=s.extend(!0,this.options,t))}),s.fn[t]=function(e){if("string"==typeof e){var r=i.call(arguments,1);return function(e,i,n){var r,a="$()."+t+'("'+i+'")';return e.each(function(e,h){var u=s.data(h,t);if(u){var l=u[i];if(l&&"_"!=i.charAt(0)){var c=l.apply(u,n);r=void 0===r?c:r}else o(a+" is not a valid method")}else o(t+" not initialized. Cannot call methods, i.e. "+a)}),void 0!==r?r:e}(this,e,r)}var a;return a=e,this.each(function(e,i){var o=s.data(i,t);o?(o.option(a),o._init()):(o=new n(i,a),s.data(i,t,o))}),this},r(s))}function r(t){!t||t&&t.bridget||(t.bridget=s)}return r(e),s}(e,t)}(window),("undefined"!=typeof window?window:this).AZ_EvEmitter=function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),o=i[n+=r?0:1]}return this}},t}(),
    /*!
     * getSize v2.0.2
     * measure size of elements
     * MIT license
     */
    function(t,e){"use strict";t.AZ_getSize=function(){function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],n=i.length;function o(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}var s,r=!1;function a(e){if(function(){if(r)return;r=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);a.isBoxSizeOuter=s=200==t(n.width),i.removeChild(e)}(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var h=o(e);if("none"==h.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<n;e++){var o=i[e];t[o]=0}return t}();var u={};u.width=e.offsetWidth,u.height=e.offsetHeight;for(var l=u.isBorderBox="border-box"==h.boxSizing,c=0;c<n;c++){var d=i[c],f=h[d],p=parseFloat(f);u[d]=isNaN(p)?0:p}var m=u.paddingLeft+u.paddingRight,g=u.paddingTop+u.paddingBottom,y=u.marginLeft+u.marginRight,v=u.marginTop+u.marginBottom,_=u.borderLeftWidth+u.borderRightWidth,I=u.borderTopWidth+u.borderBottomWidth,z=l&&s,S=t(h.width);!1!==S&&(u.width=S+(z?0:m+_));var E=t(h.height);return!1!==E&&(u.height=E+(z?0:g+I)),u.innerWidth=u.width-(m+_),u.innerHeight=u.height-(g+I),u.outerWidth=u.width+y,u.outerHeight=u.height+v,u}}return a}()}(window),function(t,e){"use strict";t.AZ_matchesSelector=function(){var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}()}(window),function(e,i){e.AZ_fizzyUIUtils=function(e,i){var n={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e},makeArray:function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},removeFrom:function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)}};n.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,i(t,e))return t},n.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.filterFindElements=function(t,e){t=n.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(e){i(t,e)&&o.push(t);for(var n=t.querySelectorAll(e),s=0;s<n.length;s++)o.push(n[s])}else o.push(t)}),o},n.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},n.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},n.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=e.console;return n.htmlInit=function(e,i){n.docReady(function(){var s=n.toDashed(i),r="data-"+s,a=document.querySelectorAll("["+r+"]"),h=document.querySelectorAll(".js-"+s),u=n.makeArray(a).concat(n.makeArray(h)),l=r+"-options";u.forEach(function(n){var s,a=n.getAttribute(r)||n.getAttribute(l);try{s=a&&JSON.parse(a)}catch(t){return void(o&&o.error("Error parsing "+r+" on "+n.className+": "+t))}var h=new e(n,s);t&&t.data(n,i,h)})})},n}(e,e.AZ_matchesSelector)}(window),function(t,e){t.AZ_Outlayer={},t.AZ_Outlayer.Item=function(t,e){"use strict";var i=document.documentElement.style,n="string"==typeof i.transition?"transition":"WebkitTransition",o="string"==typeof i.transform?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[n],r={transform:o,transition:n,transitionDuration:n+"Duration",transitionProperty:n+"Property",transitionDelay:n+"Delay"};function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=a.prototype=Object.create(t.prototype);h.constructor=a,h._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.getSize=function(){this.size=e(this.element)},h.css=function(t){var e=this.element.style;for(var i in t){var n=r[i]||i;e[n]=t[i]}},h.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=this.layout.size,r=-1!=n.indexOf("%")?parseFloat(n)/100*s.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*s.height:parseInt(o,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},h.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",l=n?"bottom":"top",c=this.position.y+t[h];e[u]=this.getYValue(c),e[l]="",this.css(e),this.emitEvent("layout",[this])},h.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},h.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},h._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),s=parseInt(e,10),r=o===this.position.x&&s===this.position.y;if(this.setPosition(t,e),!r||this.isTransitioning){var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},h.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return"translate3d("+(t=i?t:-t)+"px, "+(e=n?e:-e)+"px, 0)"},h.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},h.moveTo=h._transitionTo,h.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},h._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},h.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var u="opacity,"+(l=o,l.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()}));var l;h.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:u,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(s,this,!1)}},h.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},h.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};h.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],function(t){for(var e in t)return!1;return null,!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd){var n=e.onEnd[i];n.call(this),delete e.onEnd[i]}this.emitEvent("transitionEnd",[this])}},h.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},h._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var d={transitionProperty:"",transitionDuration:"",transitionDelay:""};return h.removeTransitionStyles=function(){this.css(d)},h.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},h.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},h.remove=function(){n&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),this.hide()):this.removeElem()},h.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},h.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},h.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},h.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},h.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},h.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}(t.AZ_EvEmitter,t.AZ_getSize)}(window),
    /*!
     * Outlayer v2.1.0
     * the brains and guts of a layout library
     * MIT license
     */
    function(e,i){"use strict";e.AZ_Outlayer=function(e,i,n,o,s){var r=e.console,a=function(){},h=0,u={};function l(e,i){var n=o.getQueryElement(e);if(n){this.element=n,t&&(this.$element=t(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(i);var s=++h;this.element.outlayerGUID=s,u[s]=this,this._create();var a=this._getOption("initLayout");a&&this.layout()}else r&&r.error("Bad element for "+this.constructor.namespace+": "+(n||e))}l.namespace="outlayer",l.Item=s,l.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=l.prototype;function d(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}o.extend(c,i.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},l.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=e[o],r=new i(s,this);n.push(r)}return n},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=n(this.element)},c._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):o instanceof HTMLElement&&(i=o),this[t]=i?n(i)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;if(null!=t)return this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=f[n]||1;return i*o}(t),this.stagger;this.stagger=0},c._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=a,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){var i=this;function n(){i.dispatchEvent(t+"Complete",null,[e])}var o=e.length;if(e&&o){var s=0;e.forEach(function(e){e.once(t,r)})}else n();function r(){++s==o&&n()}},c.dispatchEvent=function(e,i,n){var o=i?[i].concat(n):n;if(this.emitEvent(e,o),t)if(this.$element=this.$element||t(this.element),i){var s=t.Event(i);s.type=e,this.$element.trigger(s,n)}else this.$element.trigger(e,n)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=a,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=n(t),s={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){e.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){e.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(l,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=n(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var e=this.element.style;e.height="",e.position="",e.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var i=this.element.outlayerGUID;delete u[i],delete this.element.outlayerGUID,t&&t.removeData(this.element,this.constructor.namespace)},l.data=function(t){var e=(t=o.getQueryElement(t))&&t.outlayerGUID;return e&&u[e]},l.create=function(e,i){var n=d(l);return n.defaults=o.extend({},l.defaults),o.extend(n.defaults,i),n.compatOptions=o.extend({},l.compatOptions),n.namespace=e,n.data=l.data,n.Item=d(s),o.htmlInit(n,e),t&&t.bridget&&t.bridget(e,n),n};var f={ms:1,s:1e3};return l.Item=s,l}(e,e.AZ_EvEmitter,e.AZ_getSize,e.AZ_fizzyUIUtils,e.AZ_Outlayer.Item)}(window),function(t,e){t.AZ_Isotope=t.AZ_Isotope||{},t.AZ_Isotope.Item=function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var o=i.destroy;return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e}(t.AZ_Outlayer)}(window),function(t,e){t.AZ_Isotope=t.AZ_Isotope||{},t.AZ_Isotope.LayoutMode=function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element);return this.isotope.size&&e&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var o=this.getFirstItemSize();this[i]=o&&o[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=Object.create(n),o.prototype.constructor=o,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}(t.AZ_getSize,t.AZ_Outlayer)}(window),
    /*!
     * Masonry v4.1.0
     * Cascading grid layout library
     * http://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */
    function(t,e){var i,n,o;t.AZ_Masonry=(i=t.AZ_Outlayer,n=t.AZ_getSize,(o=i.create("masonry")).compatOptions.fitWidth="isFitWidth",o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],e=t&&t.element;this.columnWidth=e&&n(e).outerWidth||this.containerWidth}var i=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/i,r=i-o%i;s=Math[r&&r<1?"round":"floor"](s),this.cols=Math.max(s,1)},o.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,e=n(t);this.containerWidth=e&&e.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var n=this._getColGroup(i),o=Math.min.apply(Math,n),s=n.indexOf(o),r={x:this.columnWidth*s,y:o},a=o+t.size.outerHeight,h=this.cols+1-n.length,u=0;u<h;u++)this.colYs[s+u]=a;return r},o.prototype._getColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},o.prototype._manageStamp=function(t){var e=n(t),i=this._getElementOffset(t),o=this._getOption("originLeft")?i.left:i.right,s=o+e.outerWidth,r=Math.floor(o/this.columnWidth);r=Math.max(0,r);var a=Math.floor(s/this.columnWidth);a-=s%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var h=(this._getOption("originTop")?i.top:i.bottom)+e.outerHeight,u=r;u<=a;u++)this.colYs[u]=Math.max(h,this.colYs[u])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},o)}(window),
    /*!
     * Masonry layout mode
     * sub-classes Masonry
     * http://masonry.desandro.com
     */
    function(t,e){!function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)o[s]||(n[s]=e.prototype[s]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)}}(t.AZ_Isotope.LayoutMode,t.AZ_Masonry)}(window),function(t,e){!function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}}}(t.AZ_Isotope.LayoutMode)}(window),function(t,e){!function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}}}(t.AZ_Isotope.LayoutMode)}(window),
    /*!
     * Isotope v3.0.1
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * http://isotope.metafizzy.co
     * Copyright 2016 Metafizzy
     */
    function(e,i){e.AZ_Isotope=function(e,i,n,o,s,r,a){var h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=i.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});u.Item=r,u.LayoutMode=a;var l=u.prototype;l._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),i.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],a.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,i.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=i.prototype._itemize.apply(this,arguments),e=0;e<t.length;e++){var n=t[e];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=a.modes[t],i=this.options[t]||{};this.options[t]=e.options?s.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){this._isLayoutInited||!this._getOption("initLayout")?this._layout():this.arrange()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){var t,e,i,n=this;function o(){t&&e&&i&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}this.once("layoutComplete",function(){t=!0,o()}),this.once("hideComplete",function(){e=!0,o()}),this.once("revealComplete",function(){i=!0,o()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],o=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var h=s(a);h&&i.push(a),h&&a.isHidden?n.push(a):h||a.isHidden||o.push(a)}}return{matches:i,needReveal:n,needHide:o}},l._getFilterTest=function(e){return t&&this.options.isJQueryFiltering?function(i){return t(i.element).is(e)}:"function"==typeof e?function(t){return e(t.element)}:function(t){return o(t.element,e)}},l.updateSortData=function(t){var e;t?(t=s.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=c(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var n=t[i];n.updateSortData()}};var c=function(){return function(t){if("string"!=typeof t)return t;var e=h(t).split(" "),i=e[0],n=i.match(/^\[(.+)\]$/),o=function(t,e){if(t)return function(e){return e.getAttribute(t)};return function(t){var i=t.querySelector(e);return i&&i.textContent}}(n&&n[1],i),s=u.sortDataParsers[e[1]];return t=s?function(t){return t&&s(o(t))}:function(t){return t&&o(t)}}}();u.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=function(t,e){return function(i,n){for(var o=0;o<t.length;o++){var s=t[o],r=i.sortData[s],a=n.sortData[s];if(r>a||r<a){var h=void 0!==e[s]?e[s]:e,u=h?1:-1;return(r>a?1:-1)*u}}return 0}}(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){i.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,o=e.length;for(i=0;i<o;i++)n=e[i],this.element.appendChild(n.element);var s=this._filter(e).matches;for(i=0;i<o;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<o;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var d=l.remove;return l.remove=function(t){t=s.makeArray(t);var e=this.getItems(t);d.call(this,t);for(var i=e&&e.length,n=0;i&&n<i;n++){var o=e[n];s.removeFrom(this.filteredItems,o)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++)this.items[t].sortData.random=Math.random();this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},u}(0,e.AZ_Outlayer,e.AZ_getSize,e.AZ_matchesSelector,e.AZ_fizzyUIUtils,e.AZ_Isotope.Item,e.AZ_Isotope.LayoutMode)}(window))
    /*!
     * Isotope PACKAGED v3.0.1
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * http://isotope.metafizzy.co
     * Copyright 2016 Metafizzy
     */}(window.jQuery);

    /*!
     * Name    : Just Another Parallax [    Jarallax]
     * Version : 1.12.5
     * Author  : nK <https://nkdev.info>
     * GitHub  : https://github.com/nk-o/jarallax
     */!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(n,e,t){(function(e){var t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};n.exports=t}).call(this,t(4))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},,,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),a=n(3),r=n(12);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s,c,u=a.window.jarallax;a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=u,this},void 0!==a.jQuery&&((s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=r.default.apply(a.window,t);return"object"!==l(o)?o:this}).constructor=r.default.constructor,c=a.jQuery.fn.jarallax,a.jQuery.fn.jarallax=s,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=c,this}),i()(function(){Object(r.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),b=n(3);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l,h,p=b.window.navigator,d=-1<p.userAgent.indexOf("MSIE ")||-1<p.userAgent.indexOf("Trident/")||-1<p.userAgent.indexOf("Edge/"),s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent),m=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function f(){h=s?(!l&&document.body&&((l=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(l)),(l?l.clientHeight:0)||b.window.innerHeight||document.documentElement.clientHeight):b.window.innerHeight||document.documentElement.clientHeight}f(),b.window.addEventListener("resize",f),b.window.addEventListener("orientationchange",f),b.window.addEventListener("load",f),i()(function(){f()});var g=[];function y(){g.length&&(g.forEach(function(e,t){var n=e.instance,o=e.oldData,i=n.$item.getBoundingClientRect(),a={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:b.window.innerWidth,wndH:h},r=!o||o.wndW!==a.wndW||o.wndH!==a.wndH||o.width!==a.width||o.height!==a.height,l=r||!o||o.top!==a.top||o.bottom!==a.bottom;g[t].oldData=a,r&&n.onResize(),l&&n.onScroll()}),b.window.requestAnimationFrame(y))}function v(e,t){("object"===("undefined"==typeof HTMLElement?"undefined":u(HTMLElement))?e instanceof HTMLElement:e&&"object"===u(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var n,o=e.length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;i<o;i+=1)if("object"===u(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new w(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e}var x=0,w=function(){function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var n=this;n.instanceID=x,x+=1,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o,i,a=n.$item.dataset||{},r={};Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(r[t]=a[e])}),n.options=n.extend({},n.defaults,r,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp&&(o=n.options.disableParallax,n.options.disableParallax=function(){return o.test(p.userAgent)}),"function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp&&(i=n.options.disableVideo,n.options.disableVideo=function(){return i.test(p.userAgent)}),"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});var l=n.options.elementInViewport;l&&"object"===u(l)&&void 0!==l.length&&(l=c(l,1)[0]),l instanceof Element||(l=null),n.options.elementInViewport=l,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(p.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}var e,t,n;return e=s,(t=[{key:"css",value:function(t,n){return"string"==typeof n?b.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&m&&(n[m]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n=n||{},Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){n[e]=o[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:b.window.innerWidth||document.documentElement.clientWidth,height:h,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return m&&!this.options.disableParallax()}},{key:"init",value:function(){var e,t,n,o=this,i={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},a={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};o.options.keepImg||((e=o.$item.getAttribute("style"))&&o.$item.setAttribute("data-jarallax-original-styles",e),!o.image.useImgTag||(t=o.image.$item.getAttribute("style"))&&o.image.$item.setAttribute("data-jarallax-original-styles",t)),"static"===o.css(o.$item,"position")&&o.css(o.$item,{position:"relative"}),"auto"===o.css(o.$item,"z-index")&&o.css(o.$item,{zIndex:0}),o.image.$container=document.createElement("div"),o.css(o.image.$container,i),o.css(o.image.$container,{"z-index":o.options.zIndex}),d&&o.css(o.image.$container,{opacity:.9999}),o.image.$container.setAttribute("id","jarallax-container-".concat(o.instanceID)),o.$item.appendChild(o.image.$container),o.image.useImgTag?a=o.extend({"object-fit":o.options.imgSize,"object-position":o.options.imgPosition,"font-family":"object-fit: ".concat(o.options.imgSize,"; object-position: ").concat(o.options.imgPosition,";"),"max-width":"none"},i,a):(o.image.$item=document.createElement("div"),o.image.src&&(a=o.extend({"background-position":o.options.imgPosition,"background-size":o.options.imgSize,"background-repeat":o.options.imgRepeat,"background-image":o.image.bgImage||'url("'.concat(o.image.src,'")')},i,a))),"opacity"!==o.options.type&&"scale"!==o.options.type&&"scale-opacity"!==o.options.type&&1!==o.options.speed||(o.image.position="absolute"),"fixed"===o.image.position&&(n=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(o.$item).filter(function(e){var t=b.window.getComputedStyle(e),n=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return n&&"none"!==n||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}),o.image.position=n.length?"absolute":"fixed"),a.position=o.image.position,o.css(o.image.$item,a),o.image.$container.appendChild(o.image.$item),o.onResize(),o.onScroll(!0),o.options.onInit&&o.options.onInit.call(o),"none"!==o.css(o.$item,"background-image")&&o.css(o.$item,{"background-image":"none"}),o.addToParallaxList()}},{key:"addToParallaxList",value:function(){g.push({instance:this}),1===g.length&&b.window.requestAnimationFrame(y)}},{key:"removeFromParallaxList",value:function(){var n=this;g.forEach(function(e,t){e.instance.instanceID===n.instanceID&&g.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,n=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),n?e.$item.setAttribute("style",n):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",n):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,n,o,i;"fixed"===this.image.position&&(n=(t=(e=this).image.$container.getBoundingClientRect()).width,o=t.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),i="#jarallax-container-".concat(e.instanceID," {\n            clip: rect(0 ").concat(n,"px ").concat(o,"px 0);\n            clip: rect(0, ").concat(n,"px, ").concat(o,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i)}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,o=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return i&&(o<0?(a=o*Math.max(n,h),h<n&&(a-=o*(n-h))):a=o*(n+h),1<o?r=Math.abs(a-h):o<0?r=a/o+Math.abs(a):r+=(h-n)*(1-o),a/=2),e.parallaxScrollDistance=a,l=i?(h-r)/2:(n-r)/2,e.css(e.image.$item,{height:"".concat(r,"px"),marginTop:"".concat(l,"px"),left:"fixed"===e.image.position?"".concat(t.left,"px"):"0",width:"".concat(t.width,"px")}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,n,o,i,a,r,l,s,c,u,p=this,d=p.$item.getBoundingClientRect(),m=d.top,f=d.height,g={},y=d;p.options.elementInViewport&&(y=p.options.elementInViewport.getBoundingClientRect()),p.isElementInViewport=0<=y.bottom&&0<=y.right&&y.top<=h&&y.left<=b.window.innerWidth,(e||p.isElementInViewport)&&(t=Math.max(0,m),n=Math.max(0,f+m),o=Math.max(0,-m),i=Math.max(0,m+f-h),a=Math.max(0,f-(m+f-h)),r=Math.max(0,-m+h-f),l=1-(h-m)/(h+f)*2,s=1,f<h?s=1-(o||i)/f:n<=h?s=n/h:a<=h&&(s=a/h),"opacity"!==p.options.type&&"scale-opacity"!==p.options.type&&"scroll-opacity"!==p.options.type||(g.transform="translate3d(0,0,0)",g.opacity=s),"scale"!==p.options.type&&"scale-opacity"!==p.options.type||(c=1,p.options.speed<0?c-=p.options.speed*s:c+=p.options.speed*(1-s),g.transform="scale(".concat(c,") translate3d(0,0,0)")),"scroll"!==p.options.type&&"scroll-opacity"!==p.options.type||(u=p.parallaxScrollDistance*l,"absolute"===p.image.position&&(u-=m),g.transform="translate3d(0,".concat(u,"px,0)")),p.css(p.image.$item,g),p.options.onScroll&&p.options.onScroll.call(p,{section:d,beforeTop:t,beforeTopEnd:n,afterTop:o,beforeBottom:i,beforeBottomEnd:a,afterBottom:r,visiblePercent:s,fromViewportCenter:l}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&r(e.prototype,t),n&&r(e,n),s}();v.constructor=w,t.default=v}]);

    /*!
     * Name    : Video Background Extension for Jarallax
     * Version : 1.0.1
     * Author  : nK <https://nkdev.info>
     * GitHub  : https://github.com/nk-o/jarallax
     */!function(o){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(o,e,t){(function(e){var t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};o.exports=t}).call(this,t(4))},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(i=window)}e.exports=i},,function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";o.r(t);var i=o(8),n=o(3),a=o.n(n),r=o(2),l=o.n(r),p=o(9);a.a.VideoWorker=a.a.VideoWorker||i.default,Object(p.default)(),l()(function(){void 0!==a.a.jarallax&&a.a.jarallax(document.querySelectorAll("[data-jarallax-video]"))})},function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return v});var i=o(3),s=o.n(i);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(){this.doneCallbacks=[],this.failCallbacks=[]}r.prototype={execute:function(e,t){var o=e.length;for(t=Array.prototype.slice.call(t);o;)e[--o].apply(null,t)},resolve:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this.execute(this.doneCallbacks,t)},reject:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this.execute(this.failCallbacks,t)},done:function(e){this.doneCallbacks.push(e)},fail:function(e){this.failCallbacks.push(e)}};var l=0,p=0,u=0,d=0,c=0,y=new r,m=new r,v=function(){function i(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var o=this;o.url=e,o.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},o.options=o.extend({},o.options_default,t),o.videoID=o.parseURL(e),o.videoID&&(o.ID=l,l+=1,o.loadAPI(),o.init())}var e,t,o;return e=i,(t=[{key:"extend",value:function(){for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];var i=o[0]||{};return Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){i[e]=o[t][e]})}),i}},{key:"parseURL",value:function(e){var t,o,i,n,a,r=!(!(t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==t[1].length)&&t[1],l=!(!(o=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/))||!o[3])&&o[3],p=(i=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),n={},a=0,i.forEach(function(e){var t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(n["ogv"===t[1]?"ogg":t[1]]=t[2],a=1)}),!!a&&n);return r?(this.type="youtube",r):l?(this.type="vimeo",l):!!p&&(this.type="local",p)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}},{key:"off",value:function(o,i){var n=this;this.userEventsList&&this.userEventsList[o]&&(i?this.userEventsList[o].forEach(function(e,t){e===i&&(n.userEventsList[o][t]=!1)}):delete this.userEventsList[o])}},{key:"fire",value:function(e){for(var t=this,o=arguments.length,i=new Array(1<o?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(function(e){e&&e.apply(t,i)})}},{key:"play",value:function(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),s.a.YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(function(e){e&&t.player.play()})),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}},{key:"pause",value:function(){var t=this;t.player&&("youtube"===t.type&&t.player.pauseVideo&&s.a.YT.PlayerState.PLAYING===t.player.getPlayerState()&&t.player.pauseVideo(),"vimeo"===t.type&&t.player.getPaused().then(function(e){e||t.player.pause()}),"local"===t.type&&(t.player.paused||t.player.pause()))}},{key:"mute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.mute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(0),"local"===e.type&&(e.$video.muted=!0))}},{key:"unmute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.unMute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(e.options.volume),"local"===e.type&&(e.$video.muted=!1))}},{key:"setVolume",value:function(e){var t=0<arguments.length&&void 0!==e&&e,o=this;o.player&&t&&("youtube"===o.type&&o.player.setVolume&&o.player.setVolume(t),"vimeo"===o.type&&o.player.setVolume&&o.player.setVolume(t),"local"===o.type&&(o.$video.volume=t/100))}},{key:"getVolume",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.getVolume&&t(e.player.getVolume()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(e)}),"local"===e.type&&t(100*e.$video.volume)):t(!1)}},{key:"getMuted",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.isMuted&&t(e.player.isMuted()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(!!e)}),"local"===e.type&&t(e.$video.muted)):t(null)}},{key:"getImageURL",value:function(t){var e,o,i,n,a=this;a.videoImage?t(a.videoImage):("youtube"===a.type&&(e=["maxresdefault","sddefault","hqdefault","0"],o=0,(i=new Image).onload=function(){120!==(this.naturalWidth||this.width)||o===e.length-1?(a.videoImage="https://img.youtube.com/vi/".concat(a.videoID,"/").concat(e[o],".jpg"),t(a.videoImage)):(o+=1,this.src="https://img.youtube.com/vi/".concat(a.videoID,"/").concat(e[o],".jpg"))},i.src="https://img.youtube.com/vi/".concat(a.videoID,"/").concat(e[o],".jpg")),"vimeo"===a.type&&((n=new XMLHttpRequest).open("GET","https://vimeo.com/api/v2/video/".concat(a.videoID,".json"),!0),n.onreadystatechange=function(){var e;4===this.readyState&&200<=this.status&&this.status<400&&(e=JSON.parse(this.responseText),a.videoImage=e[0].thumbnail_large,t(a.videoImage))},n.send(),n=null))}},{key:"getIframe",value:function(e){this.getVideo(e)}},{key:"getVideo",value:function(p){var u=this;u.$video?p(u.$video):u.onAPIready(function(){var e,t,o,i,n,a,r,l;u.$video||((e=document.createElement("div")).style.display="none"),"youtube"===u.type&&(u.playerOptions={},u.playerOptions.videoId=u.videoID,u.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},u.options.showContols||(u.playerOptions.playerVars.iv_load_policy=3,u.playerOptions.playerVars.modestbranding=1,u.playerOptions.playerVars.controls=0,u.playerOptions.playerVars.showinfo=0,u.playerOptions.playerVars.disablekb=1),u.playerOptions.events={onReady:function(t){u.options.mute?t.target.mute():u.options.volume&&t.target.setVolume(u.options.volume),u.options.autoplay&&u.play(u.options.startTime),u.fire("ready",t),u.options.loop&&!u.options.endTime&&(u.options.endTime=u.player.getDuration()-.1),setInterval(function(){u.getVolume(function(e){u.options.volume!==e&&(u.options.volume=e,u.fire("volumechange",t))})},150)},onStateChange:function(e){u.options.loop&&e.data===s.a.YT.PlayerState.ENDED&&u.play(u.options.startTime),t||e.data!==s.a.YT.PlayerState.PLAYING||(t=1,u.fire("started",e)),e.data===s.a.YT.PlayerState.PLAYING&&u.fire("play",e),e.data===s.a.YT.PlayerState.PAUSED&&u.fire("pause",e),e.data===s.a.YT.PlayerState.ENDED&&u.fire("ended",e),e.data===s.a.YT.PlayerState.PLAYING?o=setInterval(function(){u.fire("timeupdate",e),u.options.endTime&&u.player.getCurrentTime()>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())},150):clearInterval(o)},onError:function(e){u.fire("error",e)}},(i=!u.$video)&&((n=document.createElement("div")).setAttribute("id",u.playerID),e.appendChild(n),document.body.appendChild(e)),u.player=u.player||new s.a.YT.Player(u.playerID,u.playerOptions),i&&(u.$video=document.getElementById(u.playerID),u.videoWidth=parseInt(u.$video.getAttribute("width"),10)||1280,u.videoHeight=parseInt(u.$video.getAttribute("height"),10)||720)),"vimeo"===u.type&&(u.playerOptions={id:u.videoID,autopause:0,transparent:0,autoplay:u.options.autoplay?1:0,loop:u.options.loop?1:0,muted:u.options.mute?1:0},u.options.volume&&(u.playerOptions.volume=u.options.volume),u.options.showContols||(u.playerOptions.badge=0,u.playerOptions.byline=0,u.playerOptions.portrait=0,u.playerOptions.title=0,u.playerOptions.background=1),u.$video||(a="",Object.keys(u.playerOptions).forEach(function(e){""!==a&&(a+="&"),a+="".concat(e,"=").concat(encodeURIComponent(u.playerOptions[e]))}),u.$video=document.createElement("iframe"),u.$video.setAttribute("id",u.playerID),u.$video.setAttribute("src","https://player.vimeo.com/video/".concat(u.videoID,"?").concat(a)),u.$video.setAttribute("frameborder","0"),u.$video.setAttribute("mozallowfullscreen",""),u.$video.setAttribute("allowfullscreen",""),e.appendChild(u.$video),document.body.appendChild(e)),u.player=u.player||new s.a.Vimeo.Player(u.$video,u.playerOptions),u.options.startTime&&u.options.autoplay&&u.player.setCurrentTime(u.options.startTime),u.player.getVideoWidth().then(function(e){u.videoWidth=e||1280}),u.player.getVideoHeight().then(function(e){u.videoHeight=e||720}),u.player.on("timeupdate",function(e){r||(u.fire("started",e),r=1),u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&e.seconds>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.on("play",function(e){u.fire("play",e),u.options.startTime&&0===e.seconds&&u.play(u.options.startTime)}),u.player.on("pause",function(e){u.fire("pause",e)}),u.player.on("ended",function(e){u.fire("ended",e)}),u.player.on("loaded",function(e){u.fire("ready",e)}),u.player.on("volumechange",function(e){u.fire("volumechange",e)}),u.player.on("error",function(e){u.fire("error",e)})),"local"===u.type&&(u.$video||(u.$video=document.createElement("video"),u.options.showContols&&(u.$video.controls=!0),u.options.mute?u.$video.muted=!0:u.$video.volume&&(u.$video.volume=u.options.volume/100),u.options.loop&&(u.$video.loop=!0),u.$video.setAttribute("playsinline",""),u.$video.setAttribute("webkit-playsinline",""),u.$video.setAttribute("id",u.playerID),e.appendChild(u.$video),document.body.appendChild(e),Object.keys(u.videoID).forEach(function(e){var t,o,i,n;t=u.$video,o=u.videoID[e],i="video/".concat(e),(n=document.createElement("source")).src=o,n.type=i,t.appendChild(n)})),u.player=u.player||u.$video,u.player.addEventListener("playing",function(e){l||u.fire("started",e),l=1}),u.player.addEventListener("timeupdate",function(e){u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&this.currentTime>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.addEventListener("play",function(e){u.fire("play",e)}),u.player.addEventListener("pause",function(e){u.fire("pause",e)}),u.player.addEventListener("ended",function(e){u.fire("ended",e)}),u.player.addEventListener("loadedmetadata",function(){u.videoWidth=this.videoWidth||1280,u.videoHeight=this.videoHeight||720,u.fire("ready"),u.options.autoplay&&u.play(u.options.startTime)}),u.player.addEventListener("volumechange",function(e){u.getVolume(function(e){u.options.volume=e}),u.fire("volumechange",e)}),u.player.addEventListener("error",function(e){u.fire("error",e)})),p(u.$video)})}},{key:"init",value:function(){this.playerID="VideoWorker-".concat(this.ID)}},{key:"loadAPI",value:function(){if(!p||!u){var e,t,o="";if("youtube"!==this.type||p||(p=1,o="https://www.youtube.com/iframe_api"),"vimeo"===this.type&&!u){if(u=1,void 0!==s.a.Vimeo)return;o="https://player.vimeo.com/api/player.js"}o&&(e=document.createElement("script"),t=document.getElementsByTagName("head")[0],e.src=o,t.appendChild(e),e=t=null)}}},{key:"onAPIready",value:function(e){var t;"youtube"===this.type&&(void 0!==s.a.YT&&0!==s.a.YT.loaded||d?"object"===n(s.a.YT)&&1===s.a.YT.loaded?e():y.done(function(){e()}):(d=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,y.resolve("done"),e()})),"vimeo"===this.type&&(void 0!==s.a.Vimeo||c?void 0!==s.a.Vimeo?e():m.done(function(){e()}):(c=1,t=setInterval(function(){void 0!==s.a.Vimeo&&(clearInterval(t),m.resolve("done"),e())},20))),"local"===this.type&&e()}}])&&a(e.prototype,t),o&&a(e,o),i}()},function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return n});var r=o(8),i=o(3),p=o.n(i);function n(){var e,t,l,o,n,i,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:p.a.jarallax;void 0!==a&&(e=a.constructor,t=e.prototype.onScroll,e.prototype.onScroll=function(){var o=this;t.apply(o),o.isVideoInserted||!o.video||o.options.videoLazyLoading&&!o.isElementInViewport||o.options.disableVideo()||(o.isVideoInserted=!0,o.video.getVideo(function(e){var t=e.parentNode;o.css(e,{position:o.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),o.$video=e,"local"===o.video.type&&(o.image.src?o.$video.setAttribute("poster",o.image.src):o.image.$item&&"IMG"===o.image.$item.tagName&&o.image.$item.src&&o.$video.setAttribute("poster",o.image.$item.src)),o.image.$container.appendChild(e),t.parentNode.removeChild(t)}))},l=e.prototype.coverImage,e.prototype.coverImage=function(){var e,t,o,i,n=this,a=l.apply(n),r=!!n.image.$item&&n.image.$item.nodeName;return a&&n.video&&r&&("IFRAME"===r||"VIDEO"===r)&&(t=(e=a.image.height)*n.image.width/n.image.height,o=(a.container.width-t)/2,i=a.image.marginTop,a.container.width>t&&(e=(t=a.container.width)*n.image.height/n.image.width,o=0,i+=(a.image.height-e)/2),"IFRAME"===r&&(e+=400,i-=200),n.css(n.$video,{width:"".concat(t,"px"),marginLeft:"".concat(o,"px"),height:"".concat(e,"px"),marginTop:"".concat(i,"px")})),a},o=e.prototype.initImg,e.prototype.initImg=function(){var e=this,t=o.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t},n=e.prototype.canInitParallax,e.prototype.canInitParallax=function(){var o=this,e=n.apply(o);if(!o.options.videoSrc)return e;var t=new r.default(o.options.videoSrc,{autoplay:!0,loop:o.options.videoLoop,showContols:!1,startTime:o.options.videoStartTime||0,endTime:o.options.videoEndTime||0,mute:o.options.videoVolume?0:1,volume:o.options.videoVolume||0});function i(){o.image.$default_item&&(o.image.$item=o.image.$default_item,o.image.$item.style.display="block",o.coverImage(),o.clipContainer(),o.onScroll())}if(t.isValid())if(this.options.disableParallax()&&(e=!0,o.image.position="absolute",o.options.type="scroll",o.options.speed=1),e){if(t.on("ready",function(){var e;o.options.videoPlayOnlyVisible?(e=o.onScroll,o.onScroll=function(){e.apply(o),o.videoError||!o.options.videoLoop&&(o.options.videoLoop||o.videoEnded)||(o.isVisible()?t.play():t.pause())}):t.play()}),t.on("started",function(){o.image.$default_item=o.image.$item,o.image.$item=o.$video,o.image.width=o.video.videoWidth||1280,o.image.height=o.video.videoHeight||720,o.coverImage(),o.clipContainer(),o.onScroll(),o.image.$default_item&&(o.image.$default_item.style.display="none")}),t.on("ended",function(){o.videoEnded=!0,i()}),t.on("error",function(){o.videoError=!0,i()}),o.video=t,!o.defaultInitImgResult&&(o.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"!==t.type))return t.getImageURL(function(e){o.image.bgImage='url("'.concat(e,'")'),o.init()}),!1}else o.defaultInitImgResult||t.getImageURL(function(e){var t=o.$item.getAttribute("style");t&&o.$item.setAttribute("data-jarallax-original-styles",t),o.css(o.$item,{"background-image":'url("'.concat(e,'")'),"background-position":"center","background-size":"cover"})});return e},i=e.prototype.destroy,e.prototype.destroy=function(){var e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),i.apply(e)})}}]);


    (function ($) {
        if (!('mdp' in window)) {
            window.mdp = {};
        }
        window.mdp.init = function ($wrapper) {
            function makeid() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                for (var i = 0; i < 5; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            }
            function mega_menu($wrapper) {
                function on_hover($menu, $mega) {
                    $mega.addClass('mdp-mega-menu');
                    var $container = $menu.closest('.mdp-container');
                    if ($container.length) {
                        $mega.css('width', $container.width() + 'px');
                        $mega.css('left', ($container.offset().left + 15 - $mega.parent().offset().left) + 'px');
                    }
                }
                function init($mega) {
                    var fixed = false;
                    $mega.parents().each(function () {
                        if ($(this).css('position') == 'fixed') {
                            fixed = true;
                            return false;
                        }
                    });
                    if (!fixed) {
                        $mega.closest('.mdp-sub-menu').on('hover', function () {
                            on_hover($mega, $mega);
                        });
                        on_hover($mega, $mega);
                        $(window).on('resize', function () {
                            on_hover($mega, $mega);
                        });
                    }
                }
                $wrapper.find('[data-mega-menu]:not(.mdp-mega-menu)').each(function () {
                    var $mega = $(this);
                    var mm = parseInt($mega.data('mega-menu'), 10);
                    $mega.find('.mdp-sub-menu').each(function () {
                        var $sub_menu = $(this);
                        if ($sub_menu.parents('.mdp-mega-menu').length === 0 && $sub_menu.children().length >= mm) {
                            $sub_menu.closest('.mdp-menu-item').addClass('mdp-mega-menu');
                            init($sub_menu);
                        }
                    });
                });
            }
            function sticky($wrapper) {
                $wrapper.find('[data-sticky-style], [data-sticky-class]').each(function () {
                    var $sticky = $(this);
                    if (!$sticky.data('top')) {
                        if ($sticky.offset().top < 0) {
                            $sticky.data('top', 0)
                        } else {
                            $sticky.data('top', $sticky.offset().top)
                        }
                    }
                    $('body').imagesLoaded(function () {
                    //add class to container with "az-sticky" class or body
                    if ($sticky.data('sticky-class')) {
                        var $container = $('body');
                        if ($sticky.closest('.mdp-sticky').length) {
                            $container = $sticky.closest('.mdp-sticky');
                        }
                        var interval = setInterval(function () {
                            if (!$container.hasClass($sticky.data('sticky-class'))) {
                                if ($sticky.offset().top < 0) {
                                    $sticky.data('top', 0);
                                } else {
                                    $sticky.data('top', $sticky.offset().top);
                                }
                                clearInterval(interval);
                            }
                        }, 100);
                    }
                    if ($sticky.data('namespace') === undefined) {
                        $sticky.data('namespace', makeid());
                    }
                    $(window).off('scroll.' + $sticky.data('namespace')).on('scroll.' + $sticky.data('namespace'), function () {
                        if ($(window).scrollTop() > $sticky.data('top')) {
                            //add class to container with "az-sticky" class or body
                            if ($sticky.data('sticky-class')) {
                                if ($sticky.closest('.mdp-sticky').length) {
                                    $sticky.closest('.mdp-sticky').addClass($sticky.data('sticky-class'));
                                } else {
                                    $('body').addClass($sticky.data('sticky-class'));
                                }
                            }
                            //add styles to container/child with "az-sticky" class or self
                            if ($sticky.data('sticky-style')) {
                                if ($sticky.closest('.mdp-sticky').length) {
                                    $sticky.closest('.mdp-sticky').attr('style', $sticky.data('sticky-style'));
                                } else {
                                    if ($sticky.find('.mdp-sticky').length) {
                                        $sticky.find('.mdp-sticky').attr('style', $sticky.data('sticky-style'));
                                    } else {
                                        $sticky.attr('style', $sticky.data('sticky-style'));
                                    }
                                }
                            }
                        } else {
                            //add class to container with "az-sticky" class or body
                            if ($sticky.data('sticky-class')) {
                                if ($sticky.closest('.mdp-sticky').length) {
                                    $sticky.closest('.mdp-sticky').removeClass($sticky.data('sticky-class'));
                                } else {
                                    $('body').removeClass($sticky.data('sticky-class'));
                                }
                            }
                            //add styles to container/child with "az-sticky" class or self
                            if ($sticky.data('sticky-style')) {
                                if ($sticky.closest('.mdp-sticky').length) {
                                    $sticky.closest('.mdp-sticky').attr('style', '');
                                } else {
                                    if ($sticky.find('.mdp-sticky').length) {
                                        $sticky.find('.mdp-sticky').attr('style', '');
                                    } else {
                                        $sticky.attr('style', '');
                                    }
                                }
                            }
                        }
                    });
                    });
                });
                $wrapper.find('.az-children-height').each(function () {
                    $(this).height($(this).children().height());
                    $(this).off('azh-refresh').on('azh-refresh', function () {
                        $(this).height($(this).children().height());
                    });
                });
            }
            function magnific_gallery($wrapper) {
                if ('magnificPopup' in $.fn) {
                    if ($wrapper.children().length === $wrapper.find('img, [style*="background-image"]').length) {
                        var gallery_items = $.makeArray($wrapper.find('img, [style*="background-image"]').map(function () {
                            var $this = $(this);
                            if ($this.attr('src')) {
                                return {src: $this.attr('src')};
                            }
                            if ($this.attr('data-src')) {
                                return {src: $this.attr('data-src')};
                            }
                            if ($this.css('background-image') != 'none') {
                                return {src: $this.css('background-image').replace(/url\(|'|"|\)$/ig, "")};
                            }
                            return {};
                        }));
                        $wrapper.find('img, [style*="background-image"]').each(function () {
                            var $this = $(this);
                            if ($this.parentsUntil($wrapper).filter('a').length === 0 && $this.find('a').length === 0 || $this.parentsUntil($wrapper).filter('a').length && $this.parentsUntil($wrapper).filter('a').attr('href') == '/') {
                                if (gallery_items.length > 0) {
                                    $this.css('cursor', 'zoom-in');
                                } else {
                                    if ($this.attr('src')) {
                                        $this.css('cursor', 'zoom-in');
                                    }
                                    if ($this.css('background-image') != 'none') {
                                        $this.css('cursor', 'zoom-in');
                                    }
                                }
                                $this.on('click', function () {
                                    var $this = $(this);
                                    if (gallery_items.length > 0) {
                                        $.magnificPopup.open({
                                            items: gallery_items,
                                            gallery: {
                                                enabled: true
                                            },
                                            type: 'image'
                                        }, $this.parentsUntil($wrapper).last().index());
                                    } else {
                                        if ($this.attr('src')) {
                                            $.magnificPopup.open({
                                                items: {
                                                    src: $this.attr('src')
                                                },
                                                type: 'image'
                                            });
                                        }
                                        if ($this.css('background-image') != 'none') {
                                            $.magnificPopup.open({
                                                items: {
                                                    src: $this.css('background-image').replace(/url\(|'|"|\)$/ig, "")
                                                },
                                                type: 'image'
                                            });
                                        }
                                    }
                                    return false;
                                });
                            }
                        });

                    }
                }
            }

            function getParameterByName(name, url) {
                if (!url)
                    url = window.location.href;
                name = name.replace(/[[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                        results = regex.exec(url);
                if (!results)
                    return null;
                if (!results[2])
                    return '';
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            }
            function formatMoney(cents, format) {
                if (typeof cents === 'string') {
                    cents = cents.replace('.', '');
                }
                var value = '';
                var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
                var formatString = format;

                function formatWithDelimiters(number, precision, thousands, decimal) {
                    thousands = thousands || ',';
                    decimal = decimal || '.';

                    if (isNaN(number) || number === null) {
                        return 0;
                    }

                    number = (number / 100.0).toFixed(precision);

                    var parts = number.split('.');
                    var dollarsAmount = parts[0].replace(
                            /(\d)(?=(\d\d\d)+(?!\d))/g,
                            '$1' + thousands
                            );
                    var centsAmount = parts[1] ? decimal + parts[1] : '';

                    return dollarsAmount + centsAmount;
                }

                switch (formatString.match(placeholderRegex)[1]) {
                    case 'amount':
                        value = formatWithDelimiters(cents, 2);
                        break;
                    case 'amount_no_decimals':
                        value = formatWithDelimiters(cents, 0);
                        break;
                    case 'amount_with_comma_separator':
                        value = formatWithDelimiters(cents, 2, '.', ',');
                        break;
                    case 'amount_no_decimals_with_comma_separator':
                        value = formatWithDelimiters(cents, 0, '.', ',');
                        break;
                    case 'amount_no_decimals_with_space_separator':
                        value = formatWithDelimiters(cents, 0, ' ');
                        break;
                    case 'amount_with_apostrophe_separator':
                        value = formatWithDelimiters(cents, 2, "'");
                        break;
                }

                return formatString.replace(placeholderRegex, value);
            }
            function update_price($product, selected_variant) {
                if(selected_variant.compare_at_price) {
                  $product.find('.mdp-price-wrapper .mdp-price .mdp-price-compare').html(formatMoney(selected_variant.compare_at_price, mdp.money_format));
                } else {
                  $product.find('.mdp-price-wrapper .mdp-price .mdp-price-compare').empty();
                }
                $product.find('.mdp-price-wrapper .mdp-price .mdp-price-varies').html(formatMoney(selected_variant.price, mdp.money_format));
                if(selected_variant.unit_price_measurement) {
                  $product.find('.mdp-price-wrapper .mdp-unit-price').html(' ' + formatMoney(selected_variant.unit_price, mdp.money_format) + '/' + selected_variant.unit_price_measurement.reference_value + selected_variant.unit_price_measurement.reference_unit);
                } else {
                  $product.find('.mdp-price-wrapper .mdp-unit-price').empty();
                }
            }
            function update_pickup_availability($product, selected_variant) {
				$.get('/variants/' + selected_variant.id + '/?section_id=mdp-pickup-availability', function (data) {
                  var $container = $product.find('[data-store-availability-container]');
                  $container.empty();
                  $(data).appendTo($container);
                  window.mdp.init($container);
                  $container.find('[data-pickup-availability-modal-open]').on('click', function(){
                    var $modal = $container.find('.mdp-pickup-availabilities-modal');
                    var $overlay = $('.mdp-right-side-popup-overlay');
                    if(!$overlay.length) {
                      $overlay = $('<div class="mdp-right-side-popup-overlay"></div>').appendTo('body');
                    }
                    var $wrapper = $('.mdp-right-side-popup-wrapper');
                    if(!$wrapper.length) {
                      $wrapper = $('<div class="mdp-right-side-popup-wrapper"></div>').appendTo('body');
                    }
                    $wrapper.empty().html('<div class="mdp-pickup-availabilities-modal">' + $modal.html() + '</div>');
                    $wrapper.find('.mdp-modal__close').on('click', function(){
                      $overlay.removeClass('mdp-active');
                      $wrapper.removeClass('mdp-active');
                    });
                    $overlay.off('click').on('click', function(){
                      $overlay.removeClass('mdp-active');
                      $wrapper.removeClass('mdp-active');
                    });
                    setTimeout(function(){
                      $overlay.toggleClass('mdp-active');
                      $wrapper.toggleClass('mdp-active');
                    });
                  });
                });
            }
            function get_variant($product, id) {
                var variant = false;
                var product = $product.find('.mdp-product-json').text();
                product = JSON.parse(product);
                if (product) {
                    if ('variants' in product) {
                        product.variants.forEach(function (v) {
                            if (v.id == id) {
                                variant = v;
                                return;
                            }
                        });
                    }
                }
                return variant;
            }
            function update_add_to_cart($product, variant) {
                $product.find('[data-product-id]').attr('data-product-id', variant.id);
                var $add_to_cart = $product.find('.mdp-add-to-cart');
                if (variant.available) {
                    $add_to_cart.addClass('mdp-available');
                    $add_to_cart.text($add_to_cart.attr('data-add-to-cart'));
                } else {
                    $add_to_cart.removeClass('mdp-available');
                    $add_to_cart.text($add_to_cart.attr('data-sold-out'));
                }
            }
            function parse_query_string(a) {
                if (a == "")
                    return {};
                var b = {};
                for (var i = 0; i < a.length; ++i)
                {
                    var p = a[i].split('=');
                    if (p.length != 2)
                        continue;
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
                }
                return b;
            }
            function set_url_argument(url, argument, value) {
                url = url.split('?');
                var args = {};
                if (url.length === 2) {
                    args = parse_query_string(url[1].split('&'));
                }

                var query = {};
                for (var arg in args) {
                    if (arg === argument) {
                        query[arg] = encodeURIComponent(value);
                    } else {
                        query[arg] = encodeURIComponent(args[arg]);
                    }
                }
                if (!(argument in args)) {
                    query[argument] = encodeURIComponent(value);
                }
                query = Object.entries(query).map(function callback(currentValue, index, array) {
                    return currentValue[0] + '=' + currentValue[1];
                });
                if (url.length === 1) {
                    url.push(query.join('&'));
                } else {
                    url[1] = query.join('&');
                }
                if (url[1] !== '') {
                    url = url.join('?');
                } else {
                    url = url[0];
                }
                return url;
            }
            function convert_to_embed(url) {
                function youtube_parser(url) {
                    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                    var match = url.match(regExp);
                    return (match && match[7].length == 11) ? match[7] : false;
                }
                function vimeo_parser(url) {
                    var match = /vimeo.*\/(\d+)/i.exec(url);
                    if (match) {
                        return match[1];
                    }
                    return false;
                }
                var id = youtube_parser(url);
                if (id) {
                    return '//www.youtube.com/embed/' + id;
                }
                var id = vimeo_parser(url);
                if (id) {
                    return '//player.vimeo.com/video/' + id;
                }
                return url;
            }
            function update_cart_popup() {
                var $wrapper = $('.mdp-right-side-popup-wrapper');
                if (!$wrapper.length) {
                    $wrapper = $('<div class="mdp-right-side-popup-wrapper"></div>').appendTo('body');
                }
                var $overlay = $('.mdp-right-side-popup-overlay');
                if (!$overlay.length) {
                    $overlay = $('<div class="mdp-right-side-popup-overlay"></div>').appendTo('body');
                }
                $overlay.off('click').on('click', function () {
                    $wrapper.removeClass('mdp-active');
                    $overlay.removeClass('mdp-active');
                });
                $.get('/cart?view=mdp-popup', function (data) {
                    $wrapper.removeClass('mdp-loading');
                    $wrapper.html(data);
                    $wrapper.addClass('mdp-active');
                    $overlay.addClass('mdp-active');
                    $wrapper.find('.mdp-cart-remove a').on('click', function () {
                        var $this = $(this);
                        $wrapper.addClass('mdp-loading');
                        $.get($this.attr('href'), function (data) {
                            update_cart_popup();
                        });
                        return false;
                    });
                    $wrapper.find('.mdp-close').on('click', function(){
                      $overlay.removeClass('mdp-active');
                      $wrapper.removeClass('mdp-active');
                    });
                });
            }
            mega_menu($wrapper);
            sticky($wrapper);
			$wrapper.find('.mdp-countdown').each(function () {
                var $countdown = $(this);
                if ($countdown.data('countdownInstance') === undefined) {
                    var dateTimeInUtc = Date.parse($countdown.data('time') + '+0000');
                    $countdown.countdown(dateTimeInUtc, function (event) {
                        $countdown.find('.mdp-days .mdp-count').text(event.offset.totalDays);
                        $countdown.find('.mdp-hours .mdp-count').text(event.offset.hours);
                        $countdown.find('.mdp-minutes .mdp-count').text(event.offset.minutes);
                        $countdown.find('.mdp-seconds .mdp-count').text(event.offset.seconds);
                    });
                }
            });

            $wrapper.find('.mdp-tabs').each(function () {
                var $tabs = $(this);
                if (!$tabs.data('mdp-tabs')) {
                    $(this).find('> .mdp-titles [data-target^="#"]').off('click').on('click', function (event) {
                        var $this = $(this);
                        event.preventDefault();
                        $this.addClass("mdp-active");
                        $this.siblings().removeClass("mdp-active");
                        var tab = $this.attr("data-target");
                        $this.closest('.mdp-tabs').find('> .mdp-content > .mdp-item').not(tab).css("display", "none");
                        $(tab).stop().fadeIn(function () {
                            //refresh
                        });
                    }).off('azh-clone').on('azh-clone', function () {
                        var $this = $(this);
                        setTimeout(function () {
                            $this.trigger('click');
                        });
                    });
                    $tabs.find('> .mdp-titles [data-target^="#"]:first-child').click();
                    $tabs.data('mdp-tabs', true);
                }
            });
          	$wrapper.find('.mdp-product .mdp-content').each(function () {
              var $content = $(this);
              if($content.children().length == $content.children('h1,h2,h3,p').length) {
                var accordion = [];
                $content.children('h1,h2,h3').each(function() {
                  accordion.push({
                    heading: $(this).html(),
                    content: $(this).nextUntil('h1,h2,h3').html()
                  });
                });
                if(accordion.length) {
                  var $accordion = $('<div class="mdp-accordion"></div>');
                  accordion.forEach(function(item, index) {
                    $accordion.append('<div class="mdp-item '+(!index ? 'mdp-active' : '')+'"><div class="mdp-heading">'+item.heading+'</div><div class="mdp-content">'+item.content+'</div></div>');
                  });
                  $content.empty().append($accordion);
                }
              }
            });
            $wrapper.find('.mdp-accordion').each(function () {
                var $accordion = $(this);
                if (!$accordion.data('mdp-accordion')) {
                    $(this).find('> div > div:first-child').off('click').on('click', function (event) {
                        var $this = $(this);
                        if ($this.parent().is('.mdp-active')) {
                            $this.parent().removeClass("mdp-active").find('> div:last-child').slideUp();
                        } else {
                            $this.parent().addClass("mdp-active").find('> div:last-child').slideDown(function () {
                                //refresh
                            });
                            $this.parent().siblings().removeClass("mdp-active").find('> div:last-child').slideUp();
                        }
                    });
                    $accordion.children().find('> div:last-child').slideUp(0);
                    $accordion.find('> div.mdp-active').find('> div:last-child').slideDown(0, function () {
                        //refresh
                    });
                    $accordion.data('mdp-accordion', true);
                }
            });
            $wrapper.find('.mdp-magnific-gallery').each(function () {
                magnific_gallery($(this));
            });
            $wrapper.find('a.mdp-magnific-popup').each(function () {
                function embed() {
                    var url = convert_to_embed($this.attr('href'));
                    url = set_url_argument(url, 'autoplay', '1');
                    url = set_url_argument(url, 'playsinline', '1');
                    $this.magnificPopup({
                        type: 'iframe',
                        removalDelay: 300,
                        mainClass: 'mfp-fade',
                        overflowY: 'scroll',
                        closeMarkup: '<div title="%title%" type="button" class="mfp-close">&#215;</div>',
                        iframe: {
                            markup: '<div class="mfp-iframe-scaler">' +
                                    '<div class="mfp-close"></div>' +
                                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen src=' + url + '></iframe>' +
                                    '</div>',
                            srcAction: false
                        }
                    });
                }

                var $this = $(this);
                try {
                    $("<img>", {
                        src: $this.attr('href'),
                        error: function () {
                            embed();
                        },
                        load: function () {
                            $this.magnificPopup({
                                type: 'image',
                                removalDelay: 300,
                                mainClass: 'mfp-fade',
                                overflowY: 'scroll',
                                closeMarkup: '<div title="%title%" type="button" class="mfp-close">&#215;</div>'
                            });
                        }
                    });
                } catch (e) {
                    embed();
                }
            });
            $('.mdp-isotope-items').each(function () {
                function isotope_get_params($grid) {
                    var options = {
                    };
                    var data_attributes = {
                        layoutMode: 'masonry',
                        masonry: {
                            gutter: 30
                        }
                    };
                    for (var key in data_attributes) {
                        if (typeof data_attributes[key] === 'object') {
                            for (var k in data_attributes[key]) {
                                var value = $grid.attr('data-' + key + '-' + k);
                                if (typeof value !== typeof undefined) {
                                    if (!options[key]) {
                                        options[key] = {};
                                    }
                                    $grid.removeData((key + '-' + k).toLocaleLowerCase());
                                    options[key][k] = $grid.data((key + '-' + k).toLocaleLowerCase());
                                }
                            }
                        } else {
                            var value = $grid.attr('data-' + key);
                            if (typeof value !== typeof undefined) {
                                $grid.removeData(key.toLocaleLowerCase());
                                options[key] = $grid.data(key.toLocaleLowerCase());
                            }
                        }
                    }
                    return options;
                }
                var $grid = $(this);
                $grid.isotope(isotope_get_params($grid));
                $grid.imagesLoaded().progress(function () {
                    $grid.isotope('layout');
                });
                $grid.one('arrangeComplete', function () {
                });
                var $filters = $grid.closest('.mdp-isotope').find('.mdp-isotope-filters').first();
                if ($filters && $filters.length) {
                    $filters.data('grid', $grid);
                    $filters.find('[data-filter]').on('click', function () {
                        var $this = $(this);
                        var $filters = $this.closest('.mdp-isotope-filters');
                        var $grid = $filters.data('grid');
                        $grid.isotope({filter: $this.attr('data-filter')});
                        $filters.find('[data-filter].mdp-active').removeClass('mdp-active');
                        $this.addClass('mdp-active');
                        return false;
                    });
                    $filters.find('[data-filter].mdp-active').trigger('click');
                }
            });

            $wrapper.find('.mdp-add-to-cart').off('click').on('click', function () {
                var $this = $(this);
                if ($this.is('.mdp-available')) {
                    $this.removeClass('mdp-added');
                    $this.addClass('mdp-adding');
                    $.post({
                        url: '/cart/add.js',
                        data: 'id=' + $this.attr('data-product-id') + '&quantity=' + ($this.attr('data-quantity') ? $this.attr('data-quantity') : '1'),
                        dataType: 'json',
                    }).done(function (item) {
                        if ($this.is('.mdp-redirect-to-cart')) {
                          window.location = '/cart';
                          return;
                        }
                        $this.removeClass('mdp-adding');
                        $this.addClass('mdp-added');
                        var count = parseInt($wrapper.find('.mdp-cart-count').text(), 10);
                        count = count + ($this.attr('data-quantity') ? parseInt($this.attr('data-quantity'), 10) : 1);
                        $wrapper.find('.mdp-cart-count').text(count);
                        update_cart_popup();
                    }).fail(function (response) {
                        $this.removeClass('mdp-adding');
                      if('responseJSON' in response && 'description' in response.responseJSON) {
                        alert(response.responseJSON.description);
                      } else if('statusText' in response) {
                        alert(response.statusText);
                      } else {
                        alert(response);
                      }
                    });
                }
              return false;
            });
            // $wrapper.find('.mdp-wishlist').each(function () {
            //     var $this = $(this);
            //     var wishlist = localStorage.getItem('mdp-wishlist');
            //     wishlist = JSON.parse(wishlist);
            //     if (!wishlist) {
            //         wishlist = {};
            //     }
            //     $this.empty();
            //     for(var handle in wishlist) {
            //         $.get('/products/' + handle + '/?view=' + $this.attr('data-view'), function (data) {
            //             var $product = $(data).appendTo($this);
            //             window.mdp.init($product);
            //         });
            //     }
            // });
            $wrapper.find('.mdp-wishlist').each(function () {
            var $this = $(this);
            var wishlist = JSON.parse(localStorage.getItem('mdp-wishlist') || '{}');

            $this.empty(); // clear any existing content

            Object.keys(wishlist).forEach(function (handle) {
                $.get('/products/' + handle + '/?view=' + $this.attr('data-view'), function (data) {
                // Append the product HTML to the wishlist container
                var $product = $(data);
                $product.appendTo($this);
                // Initialize your theme's scripts if needed
                if (window.mdp && typeof window.mdp.init === 'function') {
                    window.mdp.init($product);
                }
                });
            });
            });

            $wrapper.find('.mdp-add-to-wishlist').each(function () {
                var $this = $(this);
                var wishlist = localStorage.getItem('mdp-wishlist');
                wishlist = JSON.parse(wishlist);
                if (!wishlist) {
                    wishlist = {};
                }
                if ($this.attr('data-product-handle') in wishlist) {
                    $this.addClass('mdp-added');
                }
                $this.off('click').on('click', function () {
                    var wishlist = localStorage.getItem('mdp-wishlist');
                    wishlist = JSON.parse(wishlist);
                    if (!wishlist) {
                        wishlist = {};
                    }
                    if ($this.attr('data-product-handle') in wishlist) {
                        delete wishlist[$this.attr('data-product-handle')];
                        $this.removeClass('mdp-added');
                    } else {
                        wishlist[$this.attr('data-product-handle')] = 'added';
                        $this.addClass('mdp-added');
                    }
                    localStorage.setItem('mdp-wishlist', JSON.stringify(wishlist));
                });
            });

            $wrapper.find('.mdp-quantity-wrapper .mdp-quantity-minus').off('click').on('click', function () {
                var $input = $(this).closest('.mdp-quantity-wrapper').find('input');
                $input.val(parseInt($input.val(), 10) - 1);
                $input.closest('.mdp-product').find('[data-quantity]').attr('data-quantity', $input.val());
            });
            $wrapper.find('.mdp-quantity-wrapper .mdp-quantity-plus').off('click').on('click', function () {
                var $input = $(this).closest('.mdp-quantity-wrapper').find('input');
                $input.val(parseInt($input.val(), 10) + 1);
                $input.closest('.mdp-product').find('[data-quantity]').attr('data-quantity', $input.val());
            });

            $wrapper.find('.mdp-product-options .mdp-separated select').on('change', function () {

                function get_selected_variant($wrapper) {
                    let $product = $wrapper.closest('.mdp-product');
                    let product = $product.find('.mdp-product-json').text();
                    product = JSON.parse(product);

                    let selected_variant = false;
                    if (product) {
                        if ('variants' in product) {
                            let total = $wrapper.find('.mdp-option select[data-index]').length;
                            product.variants.forEach(function (variant) {
                                let matched = 0;
                                $wrapper.find('.mdp-option select[data-index]').each(function () {
                                    let $select = $(this);
                                    let index = $select.attr('data-index');
                                    if (index in variant) {
                                        if (variant[index] == $select.val()) {
                                            matched++;
                                        }
                                    }
                                });
                                if (total === matched) {
                                    selected_variant = variant;
                                    return;
                                }
                            });
                        }
                    }
                    return selected_variant;
                }

                let $select = $(this);
                let selected_variant = get_selected_variant($select.closest('.mdp-separated'));
                if (selected_variant) {
                    let $product = $select.closest('.mdp-product');
                    update_add_to_cart($product, selected_variant);
                    if (selected_variant.featured_media) {
                        let $image = $product.find('.mdp-product-swiper [data-media-id="' + selected_variant.featured_media.id + '"]');
                        if ($image.length) {
                            let $slider = $image.closest('.mdp-product-swiper');
                            $slider[0].swiper.slideTo($slider.find('.mdp-swiper-wrapper').children().index($image.closest('.mdp-swiper-slide')));
                        }
                    }
                    update_price($product, selected_variant);
                    update_pickup_availability($product, selected_variant);
                }

            }).first().trigger('change');
          	$wrapper.find('.mdp-product').each(function(){
              var $product = $(this);
              var product = $product.find('.mdp-product-json').text();
              if (product) {
                product = JSON.parse(product);
                if (product) {
                  if ('variants' in product && product.variants.length == 1) {
                    update_pickup_availability($product, product.variants[0]);
                  }
                }
              }
            });
          $wrapper.find('.mdp-visitors').each(function () {
            var $visitors = $(this);
            $visitors.find('.mdp-value').text(parseInt($visitors.data('min'), 10) + Math.floor(Math.random() * (parseInt($visitors.data('max'), 10) - parseInt($visitors.data('min'), 10))));
            setInterval(function(){
              $visitors.find('.mdp-value').text(parseInt($visitors.data('min'), 10) + Math.floor(Math.random() * (parseInt($visitors.data('max'), 10) - parseInt($visitors.data('min'), 10))));
            }, $visitors.data('duration') * 1000);
          });

            $wrapper.find('.mdp-hover-zoom').each(function () {
                function animate($zoom, offsetX, offsetY) {
                    var x = offsetX / $this.width() * 100;
                    var y = offsetY / $this.height() * 100;
                    $zoom.css({
                        'background-position-x': x + '%',
                        'background-position-y': y + '%'
                    }, 150);
                }
                var $this = $(this);
                var $img = $this.children('img');
                var src = $img.attr("src");
                if ($this.attr("data-zoom")) {
                    src = $this.attr("data-zoom");
                }
                $("<img/>").attr("src", src).one('load', function () {
                    var real_width = this.width;
                    var real_height = this.height;
                    var $zoom = $('<div class="mdp-zoom-result"></div>').appendTo($this).css({
                        'background-position-x': '50%',
                        'background-position-y': '50%',
                        'background-image': 'url(' + src + ')',
                        'background-size': real_width + 'px' + ' ' + real_height + 'px'
                    }).fadeOut(0);
                    $this.on('mouseenter', function (event) {
                        $zoom.fadeIn(150);
                        animate($zoom, event.offsetX, event.offsetY);
                    });
                    $this.on('mouseleave', function (event) {
                        $zoom.fadeOut(150);
                    });
                    $this.on('mousemove', function (event) {
                        animate($zoom, event.offsetX, event.offsetY);
                    });
                });
            });

            $wrapper.find('.mdp-sort-by').on('change', function () {
              var $filtering = $wrapper.find('form.mdp-collection-filtering');
              if($filtering.length) {
              	$filtering.find('[name=sort_by]').val($(this).val());
                $filtering.submit();
              } else {
                var sort = 'sort_by=' + $(this).val();
                var url = window.location.href.replace(window.location.search, '');
                var queryStringValue = getParameterByName('q');
                var query = queryStringValue !== null ? queryStringValue : '';
                if (sort.length) {
                    var urlStripped = url.replace(window.location.hash, '');
                    query = query !== '' ? '?q=' + query + '&' : '?';
                    window.location.href = urlStripped + query + sort;
                } else {
                    window.location.href = url;
                }
              }
              return false;
            });

            $wrapper.find('.mdp-filter-tags').on('change', function () {
                var filter = $(this).val();
                var search = document.location.search.replace(/\?(page=\w+)?&?/, '');
                search = search !== '' ? '?' + search : '';
                document.location.href = filter + search;
                return false;
            });

            $wrapper.find('.mdp-collection-sidebar').each(function () {
                function parseUrl() {
                    current.url = decodeURIComponent(window.location.href);
                    current.ajax = current.url;

                    if (current.ajax.indexOf('view=') != -1) {
                        $.each([6, 12, 18, 24], function () {
                            current.ajax.replace('view=' + this, 'view=' + this + '-mdp-ajax');
                        });
                    } else {
                        current.ajax += current.ajax.indexOf('?') != -1 ? '&' : '?';
                        current.ajax += 'view=mdp-ajax';
                    }

                    var search = current.url.split('collections/')[1].split('/');

                    url.collection = search[0].split('?')[0];
                    url.params = null;

                    var is_custom_filter = current.url.indexOf('custom-filter') != -1 ? true : false;

                    function parseParams(values) {
                        $.each(values, function () {
                            if (this === 'custom-filter') {
                                return;
                            }

                            if (!url.params) {
                                url.params = {};
                            }

                            var param = this.split('='),
                                    prop = param[0],
                                    val = param[1];

                            if (prop === 'tag') {
                                prop = 'constraint';
                            }

                            if (!url.params[prop]) {
                                url.params[prop] = [];
                            }

                            url.params[prop].push(val);
                        });
                    }

                    current.url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, k, v) {
                        var values = v.split('+');

                        if (is_custom_filter && k === 'constraint') {
                            parseParams(values);
                        } else {
                            if (!url.params) {
                                url.params = {};
                            }

                            url.params[k] = values;
                        }
                    });

                    if (search[1] && search[1].split('?')[0].length) {
                        var values = search[1].split('?')[0].split('+');

                        if (!url.params) {
                            url.params = {};
                        }

                        if (!url.params.constraint) {
                            url.params.constraint = [];
                        }

                        $.each(values, function () {
                            url.params.constraint.push(this);
                        });
                    }
                }
                function buildUrl(unset_url_params) {
                    var params = {},
                            params_ajax = {},
                            collection = controls.collection ? controls.collection : url.collection;

                    current.url = '/collections/' + collection;

                    if (controls.params) {
                        if (controls.params.constraint || controls.params.vendor || controls.params.type || controls.params.title || controls.params.price || controls.params.only_available || window.mdp.default.only_available) {
                            params.constraint = 'custom-filter';
                            params_ajax.constraint = 'custom-filter';

                            $.each(['constraint', 'vendor', 'type', 'title', 'price', 'page', 'only_available'], function (i, v) {

                                if (controls.params[this]) {
                                    var name = v === 'constraint' ? 'tag' : v,
                                            is_unset = false;

                                    $.each(unset_url_params, function (j, val) {
                                        if (name === val) {
                                            is_unset = val;
                                        }
                                    });

                                    name = '+' + name + '=';

                                    var value = name + controls.params[v].join(v === 'price' ? '-' : name);

                                    if (!is_unset)
                                        params.constraint += value.replace(/ /gi, '-');
                                    params_ajax.constraint += value.replace(/ /gi, '-');
                                }
                            });

                            if (!controls.params.only_available && window.mdp.default.only_available) {
                                params_ajax.constraint += '+only_available=true';
                            }

                            $.each(['sort_by', 'view'], function () {
                                if (controls.params[this]) {
                                    var value = controls.params[this][0];

                                    params[this] = value;
                                    params_ajax[this] = value;
                                }
                            });
                        } else {
                            $.each(controls.params, function (k, v) {
                                var value = v.join('+');

                                params[k] = value;
                                params_ajax[k] = value;
                            });

                            $.each(unset_url_params, function () {
                                delete params[this];
                            });
                        }
                    }

                    params_ajax.view = params_ajax.view ? params_ajax.view + '-mdp-ajax' : 'mdp-ajax';

                    params = $.param(params);
                    params_ajax = $.param(params_ajax);

                    current.ajax = current.url;

                    if (params)
                        current.url += '?' + decodeURIComponent(params);
                    if (params_ajax)
                        current.ajax += '?' + decodeURIComponent(params_ajax);
                }
                function setUrl() {
                    history.pushState({foo: 'filters'}, current.url, current.url);
                }
                function parseControls() {
                    var params = {};

                    controls.collection = null;
                    controls.params = null;

                    $.each(['collection'], function () {
                        var value = $container.find('[name="' + this + '"]:checked').val();

                        if (value)
                            controls[this] = value;
                    });

                    if (!controls.collection)
                        controls.collection = url.collection;

                    $.each({
                        'sort_by': 'sort_by',
                        'view': 'view_length',
                        'only_available': 'only_available'
                    }, function (k, v) {
                        var value = $container.find('[name="' + v + '"]').val(),
                                default_value = window.mdp.default[v] + '';

                        if (value && value !== default_value)
                            params[k] = [value];
                    });

                    $.each({
                        'constraint': ['collection_with_tag', 'filter_by_tag', 'filter_by_color'],
                        'vendor': 'filter_by_vendor',
                        'type': 'filter_by_type'
                    }, function (k, v) {
                        var arr = [];

                        $.each($.isArray(v) ? v : [v], function () {
                            $container.find('[name="' + this + '"]:checked').each(function () {
                                var value = $(this).val();

                                for (var i = 0; i < arr.length; i++) {
                                    if (arr[i] === value)
                                        return;
                                }

                                arr.push(value);
                            });
                        });

                        if (arr.length) {
                            params[k] = arr;
                        }
                    });

                    $(['filter_by_title']).each(function () {
                        var value = $container.find('[name="' + this + '"]').val();

                        if (value)
                            params.title = [value];
                    });

                    $(['filter_by_price']).each(function () {
                        var $this = $container.find('[name="' + this + '"]'),
                                value = $this.val();

                        if (value) {
                            var values = value ? value.split(';') : null,
                                    from = values ? +values[0] : +$this.attr('data-from'),
                                    to = values ? +values[1] : +$this.attr('data-to');

                            if (from !== +$this.attr('data-min') || to !== +$this.attr('data-max')) {
                                params['price'] = [from * 100, to * 100];
                            }
                        }
                    });

                    $(['filter_by_title']).each(function () {
                        var value = $container.find('[name="' + this + '"]').val();

                        if (value)
                            params.title = [value];
                    });

                    $(['page']).each(function () {
                        var value = $container.find('[name="' + this + '"]').val();

                        if (value && +value !== 1)
                            params[this] = [value];
                    });

                    if (Object.keys(params).length) {
                        controls.params = params;
                    }
                }
                function setControls() {
                    $.each({
                        'sort_by': 'sort_by',
                        'view': 'view_length'
                    }, function (k, v) {
                        var value = url.params && url.params[k] ? url.params[k] : window.mdp.default[v];
                        $('[name="' + v + '"]').val(value).trigger('update');
                    });

                    $container.find('[name="collection"]').prop('checked', false);
                    $container.find('[name="collection"][value="' + this.url.collection + '"]').prop('checked', true);

                    $container.find('[name="collection_with_tag"], [name="filter_by_tag"], [name="filter_by_color"], [name="filter_by_vendor"], [name="filter_by_type"], [name="only_available"]').prop('checked', false);
                    $.each({
                        'constraint': ['collection_with_tag', 'filter_by_tag', 'filter_by_color'],
                        'vendor': 'filter_by_vendor',
                        'type': 'filter_by_type',
                        'only_available': 'only_available'
                    }, function (k, v) {
                        if (url.params && url.params[k]) {
                            $.each(url.params[k], function () {
                                var value = this;

                                $.each($.isArray(v) ? v : [v], function () {
                                    var for_collection = this === 'collection_with_tag' ? '[data-section-for-collection="' + url.collection + '"] ' : '';

                                    $container.find(for_collection + '[name="' + this + '"][value="' + value + '"]').prop('checked', true);
                                });
                            });
                        }
                    });

                    $container.find('[name="filter_by_title"]').val(url.params && url.params['title'] ? url.params['title'] : '');

                    if (url.params && url.params['price']) {
                        var price = url.params['price'][0].split('-');
                        update_range_of_price(price[0] / 100, price[1] / 100);
                    } else {
                        reset_range_of_price();
                    }
                }
                function checkCurrentFilters(params) {
                    if (params) {
                        delete params.page;
                        delete params.sort_by;
                        delete params.view;
                    }

                    $current_filter[params && Object.keys(params).length ? 'removeClass' : 'addClass']('mdp-hidden');
                }
                function loadContent(current_obj, event_type, callback) {
                    var xhr = null;

                    if (xhr)
                        xhr.abort();

                    xhr = $.ajax({
                        type: 'GET',
                        url: current.ajax,
                        cache: false,
                        dataType: 'html',
                        success: function (data) {
                            var $page = $(data.replace('<!doctype html>', '').replace(/<head>.*<\/head>/gms, ''));
							$('html, body').animate({ scrollTop: 0 }, 500);

                            $container.find('[data-mdp-collection-replace]').each(function () {
                                var $this = $(this),
                                        full_replace = $this.is('[data-mdp-collection-replace-only-full]');

                                if (content.collection === current_obj.collection && full_replace)
                                    return;

                                var name = $this.attr('data-mdp-collection-replace'),
                                        $element = $container.find('[data-mdp-collection-replace="' + name + '"]'),
                                        $page_element = $page.find('[data-mdp-collection-replace="' + name + '"]'),
                                        $widget;

                                if (event_type === 'page' && $element.attr('data-mdp-collection-replace-method') === 'add') {
                                    $element.append($page_element.children());

                                } else {
                                    $element.replaceWith($page_element);

                                    if ($page_element.is('.mdp-collection-replace-hide-empty')) {
                                        $widget = $page_element.parents('[data-mdp-collection-widget]');
                                        $widget[$page_element.find('input').length ? 'removeClass' : 'addClass']('mdp-hidden');
                                    }

                                    $element.remove();
                                }
                                window.mdp.init($page_element);
                                $pagination = $container.find('.mdp-collection-pagination');
                            });


                            if (content.collection !== current_obj.collection) {
                                $.each({
                                    'sort_by': 'sort_by',
                                    'view': 'view_length'
                                }, function (k, v) {
                                    var value = current_obj.params && current_obj.params[k] ? current_obj.params[k] : window.mdp.default[v];

                                    $('[name="' + v + '"]').val(value).trigger('update');
                                });
                            }


                            $page.remove();

                            xhr = null;

                            content.collection = current_obj.collection;

                            if (callback) {
                                callback();
                            }
                        }
                    });
                }
                function removeFilter(type, value) {
                    switch (type) {
                        case 'tag':
                        {
                            $container.find('[name="collection_with_tag"], [name="filter_by_tag"], [name="filter_by_color"]').filter('[value="' + value + '"]').prop('checked', false);
                            break;
                        }
                        case 'title':
                        {
                            $container.find('[name="filter_by_title"]').val('');
                            break;
                        }
                        case 'price':
                        {
                            reset_range_of_price();
                            break;
                        }
                        case 'vendor':
                        {
                            $container.find('[name="filter_by_vendor"]').filter('[value="' + value + '"]').prop('checked', false);
                            break;
                        }
                        case 'type':
                        {
                            $container.find('[name="filter_by_type"]').filter('[value="' + value + '"]').prop('checked', false);
                            break;
                        }
                    }
                }
                function onChangeControls(event_type, unset_url_params) {
                    if (is_mobile) {
                        /*
                         theme.Loader.set(this.$sidebar, {
                         fixed: true
                         });
                         */
                    }

                    if (event_type !== 'page') {
                        $container.find('[name="page"]').val(1);
                    }

                    parseControls();
                    buildUrl(unset_url_params);
                    setUrl();
                    loadContent(controls, event_type, function () {
                        checkCurrentFilters(controls.params);
                    });
                }
                function onChangeHistory() {
                    if (is_mobile) {
                        /*
                         theme.Loader.set(this.$sidebar, {
                         fixed: true
                         });
                         */
                    }

                    parseUrl();
                    setControls();
                    loadContent(url, null, function () {
                        checkCurrentFilters(url.params);
                    });
                }
                function reset_range_of_price() {
                    $container.find('.mdp-range-of-price').each(function () {
                        var api = $(this).data('ionRangeSlider');
                        api.update({
                            from: api.result.min,
                            to: api.result.max
                        });
                    });
                }
                function update_range_of_price(from, to) {
                    $container.find('.mdp-range-of-price').each(function () {
                        var api = $(this).data('ionRangeSlider');
                        api.update({
                            from: from,
                            to: to
                        });
                    });
                }
                var $sidebar = $(this);
                var $container = $('.mdp-container');
                var current = {
                    url: null,
                    ajax: null
                };
                var url = {
                    collection: null,
                    params: null
                };
                var controls = {
                    collection: null,
                    params: null
                };
                var content = {
                    collection: null
                };
                var $collections_body = $container.find('.mdp-collections-body');
                var $current_filter = $sidebar.find('[data-mdp-collection-widget="current_filters"]');
                var $pagination = $container.find('.mdp-collection-pagination');
                var $window = $(window);
                var is_mobile = window.innerWidth < 1025;

                parseUrl();
                content.collection = url.collection;

                $sidebar.on('change', '.mdp-collections-menu input', function () {
                    var $this = $(this),
                            name = $this.attr('name');

                    if (name === 'collection') {
                        $container.find('.mdp-collections-menu [name="collection_with_tag"]:checked').prop('checked', false);
                        $container.find('[name="filter_by_tag"], [name="filter_by_color"], [name="filter_by_vendor"], [name="filter_by_type"]').prop('checked', false);
                        $container.find('[name="filter_by_title"]').val('');
                        $.each({
                            'sort_by': 'sort_by',
                            'view': 'view_length'
                        }, function (k, v) {
                            $container.find('[name="' + v + '"]').val(window.mdp.default[v]).trigger('update');
                        });
                        reset_range_of_price();
                    } else if (name === 'collection_with_tag') {
                        var $current_collection = $this.parents('.mdp-collections-menu-item').find('[name="collection"]'),
                                $remove_collections = $container.find('.mdp-collections-menu [name="collection"]:checked').not($current_collection);

                        $remove_collections.add($remove_collections.parents('.mdp-collections-menu-item').find('[name="collection_with_tag"]:checked')).prop('checked', false);

                        if (!$current_collection.is(':checked')) {
                            reset_range_of_price();
                        }

                        $current_collection.prop('checked', true);
                    }

                    onChangeControls();
                });

                $sidebar.on('click', '.mdp-collections-menu [name="collection"]:checked', function () {
                    var $this = $(this),
                            $collection_with_tag = $this.parents('.mdp-collections-menu-item').find('[name="collection_with_tag"]:checked');

                    if ($collection_with_tag.length) {
                        $collection_with_tag.prop('checked', false);

                        $this.change();
                    }
                });

                $sidebar.on('change', '.mdp-collection-filters input', function () {
                    onChangeControls();
                });

                $sidebar.on('change', '[name="only_available"]', function () {
                    var $this = $(this),
                            value = $this.is(':checked') ? true : false;

                    $this.attr('value', value);

                    onChangeControls();
                });

                $sidebar.on('click', '.mdp-collection-filter-by-title button', function () {
                    onChangeControls();
                });

                $sidebar.on('keyup', '.mdp-collection-filter-by-title input', $.debounce(500, function () {
                    onChangeControls();
                }));

                $container.on('change', '.mdp-collection-sort-by select, .mdp-collection-view-length select', function () {
                    onChangeControls();
                });

                $container.on('click', '.mdp-collection-pagination a', function (e) {
                    var $this = $(this),
                            $pagination = $this.parents('.mdp-collection-pagination'),
                            value = $this.attr('data-value') || $this.attr('href').split('page=')[1].split('&')[0],
                            type = $pagination.attr('data-pagination-type'),
                            event_type = 'page',
                            unset_url_params,
                            header_h;

                    $container.find('[name="page"]').val(value);

                    if (type === 'button_load_more' || type === 'infinite_scroll') {
                        unset_url_params = ['page'];
                    }

                    onChangeControls(event_type, unset_url_params);

                    e.preventDefault();
                    return false;
                });

                $sidebar.on('click', '.mdp-collection-current-tags [data-value]', function () {
                    var $this = $(this),
                            value = $this.attr('data-value'),
                            type = $this.attr('data-filter-type');

                    removeFilter(type, value);

                    onChangeControls();
                });

                $sidebar.on('click', '.mdp-collection-current-tags-clear', function () {
                    $container.find('.mdp-collection-current-tags [data-value]').each(function () {
                        var $this = $(this),
                                value = $this.attr('data-value'),
                                type = $this.attr('data-filter-type');

                        removeFilter(type, value);
                    });

                    onChangeControls();
                });

                $sidebar.find('.mdp-range-of-price').each(function () {
                    var $range = $(this);
                    $range.ionRangeSlider({
                        type: "double",
                        force_edges: true,
                        prettify: function (data) {
                            return formatMoney(data * 100, mdp.money_format);
                        }
                    });
                }).on('change', $.debounce(500, function () {
                    onChangeControls();
                }));

                $sidebar.on('click', '.mdp-widget-head', function () {
                  var $head = $(this);
                  if($head.is('.mdp-open')) {
                    $head.removeClass('mdp-open');
                    $head.next().slideUp();
                  } else {
                    $head.addClass('mdp-open');
                    $head.next().slideDown();
                  }
                  return false;
                });
              	$sidebar.find('.mdp-widget-head:not(.mdp-open)').each(function () {
                  $(this).next().slideUp(0);
                });

                $(window).on('popstate', function () {
                    onChangeHistory();
                });
            });
          	var collection_filtering = $wrapper.find('.mdp-collection-filtering').html();
            if(collection_filtering && collection_filtering.length) {
              $wrapper.find('.mdp-filter').on('click', function(){
                var $overlay = $('.mdp-left-side-popup-overlay');
                if(!$overlay.length) {
                  $overlay = $('<div class="mdp-left-side-popup-overlay"></div>').appendTo('body');
                }
                var $wrapper = $('.mdp-left-side-popup-wrapper');
                if(!$wrapper.length) {
                  $wrapper = $('<div class="mdp-left-side-popup-wrapper mdp"></div>').appendTo('body');
                }
                $wrapper.empty().html('<form class="mdp-collection-filtering">' + collection_filtering + '</form>');
                $overlay.off('click').on('click', function(){
                  $overlay.removeClass('mdp-active');
                  $wrapper.removeClass('mdp-active');
                });
                setTimeout(function(){
                  $overlay.toggleClass('mdp-active');
                  $wrapper.toggleClass('mdp-active');
                });
                window.mdp.init($wrapper);
              });
            }
            $wrapper.find('.mdp-collection-filtering').each(function(){
              var $filtering = $(this);
              $filtering.find('.mdp-range-of-price').each(function () {
                var $range = $(this);
                $range.ionRangeSlider({
                  type: "double",
                  force_edges: true,
                  prettify: function (data) {
                    return formatMoney(data * 100, mdp.money_format);
                  }
                });
              }).on('change', $.debounce(500, function () {
                var $range = $(this);
                var range = $range.data("ionRangeSlider");
                $range.parent().find('.mdp-from').val(range.result.from);
                $range.parent().find('.mdp-to').val(range.result.to);
                $filtering.submit();
              }));
              $filtering.find('.mdp-collection-filters input').on('change', function() {
                setTimeout(function(){
                  $filtering.submit();
                });
              });

              $filtering.find('.mdp-widget-head').on('click', function () {
                var $head = $(this);
                if($head.is('.mdp-open')) {
                  $head.removeClass('mdp-open');
                  $head.next().slideUp();
                } else {
                  $head.addClass('mdp-open');
                  $head.next().slideDown();
                }
                return false;
              });
              $filtering.find('.mdp-widget-head:not(.mdp-open)').each(function () {
                $(this).next().slideUp(0);
              });

            });


            $wrapper.find('.mdp-cart-table').each(function () {
                var $cart = $(this);
                $cart.find('.mdp-cart-edit').on('click', function () {
                    var $row = $(this).closest('.mdp-cart-row');
                    if ($row.next().is('.mdp-cart-update-wrapper')) {
                        $cart.find('.mdp-cart-row input[name="updates[]"]').remove();
                        $row.next().show();
                    }
                });
                $cart.find('.mdp-cart-submit-controls [type="submit"]').on('click', function () {
                    $cart.find('.mdp-cart-update-wrapper input[name="updates[]"]').remove();
                });
            });
            $wrapper.find('a.mdp-cart').on('click', function (e) {
                update_cart_popup();
                return false;
            });
            $wrapper.find('.mdp-comparison-table').each(function () {
              function htmlToText(html){
                  //remove code brakes and tabs
                  html = html.replace(/\n/g, "");
                  html = html.replace(/\t/g, "");

                  //keep html brakes and tabs
                  html = html.replace(/<\/td>/g, "\t");
                  html = html.replace(/<\/table>/g, "\n");
                  html = html.replace(/<\/tr>/g, "\n");
                  html = html.replace(/<\/p>/g, "\n");
                  html = html.replace(/<\/div>/g, "\n");
                  html = html.replace(/<\/h>/g, "\n");
                  html = html.replace(/<br>/g, "\n"); html = html.replace(/<br( )*\/>/g, "\n");

                  //parse html into text
                  var dom = (new DOMParser()).parseFromString('<!doctype html><body>' + html, 'text/html');
                  return dom.body.textContent;
              }
              var $table = $(this).find('table');
              var $products = $(this).find('.mdp-products');
              var names = [];
              var values = [];
              $products.find('.mdp-product').each(function () {
                var product_values = [];
                var $product = $(this);
                var product = JSON.parse($product.find('.mdp-json').text());
                var parameters = $.trim(htmlToText($product.find('.mdp-parameters').html())).split("\n");
                parameters.forEach(function (parameter) {
                  var name = $.trim(parameter.split(':')[0]);
                  var value = $.trim(parameter.split(':')[1]);
                  if(names.indexOf(name) < 0) {
                    names.push(name);
                  }
                  product_values[name] = value;
                });
                values.push(product_values);
              });
              var $tbody = $table.find('tbody');
              names.forEach(function (name) {
                var $tr = $('<tr></tr>').appendTo($tbody);
                $tr.append('<td>' + name + '</td>');
                values.forEach(function (parameters) {
                  $tr.append('<td>' + (name in parameters ? parameters[name] : '') + '</td>');
                });
              });
            });
            $wrapper.find('form[id="localization_form"]').each(function(){
              var $form = $(this);
              $form.find('[name="country_code"], [name="language_code"]').on('change', function(){
                $form.submit();
              });
            });

            /** START: Mobile Menu */
            /*
            let mobileMenu = document.querySelector(".mdp-menu-element");
            let mobileMenuLabel = mobileMenu.querySelector("label");

            function displayMobileMenu(){
                let overlay = document.querySelector('.mdp-left-side-popup-overlay');
                let wrapper = document.querySelector('.mdp-left-side-popup-wrapper');

                //if(!overlay.length) {
                    $('<div class="mdp-left-side-popup-overlay"></div>').appendTo('body');
                //}

                //if(!wrapper.length) {
                    $('<div class="mdp-left-side-popup-wrapper mdp"></div>').appendTo('body');
                //}

                console.debug('overlay');
                console.debug( overlay );
                console.debug('displayMobileMenu');
            }

            mobileMenuLabel.addEventListener("click", displayMobileMenu );
            */
            /** END: Mobile Menu */


            $wrapper.find('.mdp-menu-element').each(function () {
                let $menu = $(this);
                $menu.children('label').on('click', function () {
                    //let menu = $menu.html();
                    let $overlay = $('.mdp-left-side-popup-overlay');
                    if (!$overlay.length) {
                        $overlay = $('<div class="mdp-left-side-popup-overlay"></div>').appendTo('body');
                    }

                    let $wrapper = $('.mdp-left-side-popup-wrapper');
                    if (!$wrapper.length) {
                        $wrapper = $('<div class="mdp-left-side-popup-wrapper mdp"></div>').appendTo('body');
                    }

                    $wrapper.empty().html($menu.html());

                    $overlay.off('click').on('click', function () {
                        $overlay.removeClass('mdp-active');
                        $wrapper.removeClass('mdp-active');
                    });

                    setTimeout(function () {
                        $overlay.toggleClass('mdp-active');
                        $wrapper.toggleClass('mdp-active');
                    });

                    $wrapper.find('input, label, .mdp-right-icon').remove();
                    $wrapper.find('.mdp-down-icon').html($('#mdp-right-icon').html()).removeClass('mdp-down-icon').addClass('mdp-right-icon');
                    $wrapper.find('.mdp-menu-root > .mdp-menu-item > .mdp-sub-menu').prepend('<div class="mdp-back">' + $('#mdp-left-icon').html() + '<span>' + $('#mdp-back').text() + '</span></div>');

                    let $menu_wrapper = $wrapper.find('.mdp-menu-wrapper');

                    let itemsParent = $menu_wrapper[0].querySelectorAll('.mdp-has-children');

                    for(let i = 0; i <= itemsParent.length - 1; i++){
                        itemsParent[i].addEventListener("click", function (e) {
                            console.debug(itemsParent[i]);
                            $menu_wrapper.find('.mdp-open').removeClass('mdp-open');
                            $menu_wrapper.addClass('mdp-open');
                            $(this).find('> .mdp-sub-menu').addClass('mdp-open');
                        });
                    }

                    $menu_wrapper.find('.mdp-back').on('click', function () {
                        $menu_wrapper.removeClass('mdp-open');
                        return false;
                    });

                    return false;
                });
            });


          $wrapper.find('[name="discount"]').on('change', function() {
            localStorage.setItem('mdp-discount-code', $(this).val());
		  }).val(localStorage.getItem('mdp-discount-code'));
          $wrapper.find('.mdp-estimate-shipping').each(function() {
            var query = "query countries($locale: SupportedLocale!) {" + "  countries(locale: $locale) {" + "    name" + "    code" + "    labels {" + "      address1" + "      address2" + "      city" + "      company" + "      country" + "      firstName" + "      lastName" + "      phone" + "      postalCode" + "      zone" + "    }" + "    formatting {" + "      edit" + "    }" + "    zones {" + "      name" + "      code" + "    }" + "  }" + "}";
            var GRAPHQL_ENDPOINT = 'https://country-service.shopifycloud.com/graphql';
            function loadCountries(locale) {
              var response = fetch(GRAPHQL_ENDPOINT, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                  query: query,
                  operationName: 'countries',
                  variables: {
                    locale: toSupportedLocale(locale)
                  }
                })
              });
              return response.then(function (res) {
                return res.json();
              }).then(function (countries) {
                return countries.data.countries;
              });
            }
            var DEFAULT_LOCALE = 'EN';
            var SUPPORTED_LOCALES = ['DA', 'DE', 'EN', 'ES', 'FR', 'IT', 'JA', 'NL', 'PT', 'PT_BR'];
            function toSupportedLocale(locale) {
              var supportedLocale = locale.replace(/-/, '_').toUpperCase();

              if (SUPPORTED_LOCALES.indexOf(supportedLocale) !== -1) {
                return supportedLocale;
              } else if (SUPPORTED_LOCALES.indexOf(supportedLocale.substring(0, 2)) !== -1) {
                return supportedLocale.substring(0, 2);
              } else {
                return DEFAULT_LOCALE;
              }
            }
            function mergeObjects() {
              var to = Object({});

              for (var index = 0; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource) {
                  for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                      to[nextKey] = nextSource[nextKey];
                    }
                  }
                }
              }

              return to;
            }


            var FIELD_REGEXP = /({\w+})/g;
            var LINE_DELIMITER = '_';
            var INPUT_SELECTORS = {
              lastName: '[name="address[last_name]"]',
              firstName: '[name="address[first_name]"]',
              company: '[name="address[company]"]',
              address1: '[name="address[address1]"]',
              address2: '[name="address[address2]"]',
              country: '[name="address[country]"]',
              zone: '[name="address[province]"]',
              postalCode: '[name="address[zip]"]',
              city: '[name="address[city]"]',
              phone: '[name="address[phone]"]'
            };
            function AddressForm(rootEl, locale, options) {
              locale = locale || 'en';
              options = options || {
                inputSelectors: {}
              };
              var formElements = loadFormElements(rootEl, mergeObjects(INPUT_SELECTORS, options.inputSelectors));
              validateElements(formElements);
              return loadShippingCountries(options.shippingCountriesOnly).then(function (shippingCountryCodes) {
                return loadCountries(locale).then(function (countries) {
                  init(rootEl, formElements, filterCountries(countries, shippingCountryCodes));
                });
              });
            }
            /**
             * Runs when countries have been loaded
             */

            function init(rootEl, formElements, countries) {
              populateCountries(formElements, countries);
              var selectedCountry = formElements.country.input ? formElements.country.input.value : null;
              setEventListeners(rootEl, formElements, countries);
              handleCountryChange(rootEl, formElements, selectedCountry, countries);
            }
            /**
             * Handles when a country change: set labels, reorder fields, populate zones
             */


            function handleCountryChange(rootEl, formElements, countryCode, countries) {
              var country = getCountry(countryCode, countries);
              setLabels(formElements, country);
              reorderFields(rootEl, formElements, country);
              populateZones(formElements, country);
            }
            /**
             * Sets up event listener for country change
             */


            function setEventListeners(rootEl, formElements, countries) {
              formElements.country.input.addEventListener('change', function (event) {
                handleCountryChange(rootEl, formElements, event.target.value, countries);
              });
            }
            /**
             * Reorder fields in the DOM and add data-attribute to fields given a country
             */


            function reorderFields(rootEl, formElements, country) {
              var formFormat = country.formatting.edit;
              var countryWrapper = formElements.country.wrapper;
              var afterCountry = false;
              getOrderedField(formFormat).forEach(function (row) {
                row.forEach(function (line) {
                  formElements[line].wrapper.dataset.lineCount = row.length;

                  if (!formElements[line].wrapper) {
                    return;
                  }

                  if (line === 'country') {
                    afterCountry = true;
                    return;
                  }

                  if (afterCountry) {
                    rootEl.append(formElements[line].wrapper);
                  } else {
                    rootEl.insertBefore(formElements[line].wrapper, countryWrapper);
                  }
                });
              });
            }
            /**
             * Update labels for a given country
             */


            function setLabels(formElements, country) {
              Object.keys(formElements).forEach(function (formElementName) {
                formElements[formElementName].labels.forEach(function (label) {
                  label.textContent = country.labels[formElementName];
                });
              });
            }
            /**
             * Add right countries in the dropdown for a given country
             */


            function populateCountries(formElements, countries) {
              var countrySelect = formElements.country.input;
              var duplicatedCountrySelect = countrySelect.cloneNode(true);
              countries.forEach(function (country) {
                var optionElement = document.createElement('option');
                optionElement.value = country.code;
                optionElement.textContent = country.name;
                duplicatedCountrySelect.appendChild(optionElement);
              });
              countrySelect.innerHTML = duplicatedCountrySelect.innerHTML;

              if (countrySelect.dataset.default) {
                countrySelect.value = countrySelect.dataset.default;
              }
            }
            /**
             * Add right zones in the dropdown for a given country
             */


            function populateZones(formElements, country) {
              var zoneEl = formElements.zone;

              if (!zoneEl) {
                return;
              }

              if (country.zones.length === 0) {
                zoneEl.wrapper.dataset.ariaHidden = 'true';
                zoneEl.input.innerHTML = '';
                return;
              }

              zoneEl.wrapper.dataset.ariaHidden = 'false';
              var zoneSelect = zoneEl.input;
              var duplicatedZoneSelect = zoneSelect.cloneNode(true);
              duplicatedZoneSelect.innerHTML = '';
              country.zones.forEach(function (zone) {
                var optionElement = document.createElement('option');
                optionElement.value = zone.code;
                optionElement.textContent = zone.name;
                duplicatedZoneSelect.appendChild(optionElement);
              });
              zoneSelect.innerHTML = duplicatedZoneSelect.innerHTML;

              if (zoneSelect.dataset.default) {
                zoneSelect.value = zoneSelect.dataset.default;
              }
            }
            /**
             * Will throw if an input or a label is missing from the wrapper
             */


            function validateElements(formElements) {
              Object.keys(formElements).forEach(function (elementKey) {
                var element = formElements[elementKey].input;
                var labels = formElements[elementKey].labels;

                if (!element) {
                  return;
                }

                if (typeof element !== 'object') {
                  throw new TypeError(formElements[elementKey] + ' is missing an input or select.');
                } else if (typeof labels !== 'object') {
                  throw new TypeError(formElements[elementKey] + ' is missing a label.');
                }
              });
            }
            /**
             * Given an countryCode (eg. 'CA'), will return the data of that country
             */


            function getCountry(countryCode, countries) {
              countryCode = countryCode || 'CA';
              return countries.filter(function (country) {
                return country.code === countryCode;
              })[0];
            }
            /**
             * Given a format (eg. "{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{country}{province}{zip}_{phone}")
             * will return an array of how the form needs to be formatted, eg.:
             * =>
             * [
             *   ['firstName', 'lastName'],
             *   ['company'],
             *   ['address1'],
             *   ['address2'],
             *   ['city'],
             *   ['country', 'province', 'zip'],
             *   ['phone']
             * ]
             */


            function getOrderedField(format) {
              return format.split(LINE_DELIMITER).map(function (fields) {
                var result = fields.match(FIELD_REGEXP);

                if (!result) {
                  return [];
                }

                return result.map(function (fieldName) {
                  var newFieldName = fieldName.replace(/[{}]/g, '');

                  switch (newFieldName) {
                    case 'zip':
                      return 'postalCode';

                    case 'province':
                      return 'zone';

                    default:
                      return newFieldName;
                  }
                });
              });
            }
            /**
             * Given a rootEl where all `input`s, `select`s, and `labels` are nested, it
             * will returns all form elements (wrapper, input and labels) of the form.
             * See `FormElements` type for details
             */


            function loadFormElements(rootEl, inputSelectors) {
              var elements = {};
              Object.keys(INPUT_SELECTORS).forEach(function (inputKey) {
                var input = rootEl.querySelector(inputSelectors[inputKey]);
                elements[inputKey] = input ? {
                  wrapper: input.parentElement,
                  input: input,
                  labels: document.querySelectorAll('[for="' + input.id + '"]')
                } : {};
              });
              return elements;
            }
            /**
             * If shippingCountriesOnly is set to true, will return the list of countries the
             * shop ships to. Otherwise returns null.
             */


            function loadShippingCountries(shippingCountriesOnly) {
              if (!shippingCountriesOnly) {
                // eslint-disable-next-line no-undef
                return Promise.resolve(null);
              }

              var response = fetch(location.origin + '/meta.json');
              return response.then(function (res) {
                return res.json();
              }).then(function (meta) {
                // If ships_to_countries has * in the list, it means the shop ships to
                // all countries
                return meta.ships_to_countries.indexOf('*') !== -1 ? null : meta.ships_to_countries;
              }).catch(function () {
                return null;
              });
            }
            /**
             * Only returns countries that are in includedCountryCodes
             * Returns all countries if no includedCountryCodes is passed
             */


            function filterCountries(countries, includedCountryCodes) {
              if (!includedCountryCodes) {
                return countries;
              }

              return countries.filter(function (country) {
                return includedCountryCodes.indexOf(country.code) !== -1;
              });
            }
            function calculateShipping($shippingContent) {
              const zipCode = $('[name="address[zip]"]').val();
              const country = $('[name="address[country]"]').val();
              const province = $('[name="address[province]"]').val();
              $shippingContent.removeClass('mdp-error');
              $shippingContent.empty();
              fetch('/cart/shipping_rates.json?shipping_address%5Bzip%5D='+zipCode+'&shipping_address%5Bcountry%5D='+country+'&shipping_address%5Bprovince%5D=' + province).then(res => res.json()).then(res => {
                if (res && res.shipping_rates) {
                  const {
                    shipping_rates
                  } = res;

                  if (shipping_rates.length > 0) {
                    shipping_rates.map(rate => {
                      $shippingContent.append('<p>' + rate.name + ': ' + formatMoney(rate.price, mdp.money_format) + '</p>');
                    });
                  } else {
                    $shippingContent.html('<p>noShippingRate</p>');
                  }
                } else {
                  $shippingContent.addClass('mdp-error');
                  Object.entries(res).map(error => {
                    const message = error[0] + '' + error[1][0];
                    $shippingContent.append('<p>' + message + '</p>');
                  });
                }
              }).catch(error => {
                console.log(error, 'error');
              });
            }

            var $this = $(this);
            AddressForm($this.find('[data-address="root"]').get(0), window.Shopify.locale);
            $this.find('.mdp-calc').on('click', function(){
              calculateShipping($this.find('.mdp-message'));
              return false;
            });
		  });

          $wrapper.find('test[name="checkout"][type="submit"]').on('click', function() {
            $.get(location.origin + '/cart.json', function (data) {
              if('items' in data) {
                var line_items = [];
                data.items.forEach(function (item) {
                  line_items.push(
                    {
                      'variant_id': item.variant_id,
                      'quantity': item.quantity,
                    }
                  );
                });
              }
            });
            return false;
          });


        }
        $(function () {
            window.mdp.device_prefixes = {
                "xlg": {"width": 2560, "height": false, "container": 1320, "max": 2560, "min": 1441 },
                "lg" : {"width": 1440, "height": false, "container": 1200, "max": 1440, "min": 1025 },
                "md" : {"width": 1024, "height": false, "container": 950,  "max": 1024, "min": 769 },
                "sm" : {"width": 768,  "height": false, "container": 720,  "max": 768,  "min": 426 },
                "s"  : {"width": 425,  "height": false, "container": 395,  "max": 425,  "min": 376 },
                "sl" : {"width": 375,  "height": false, "container": 345,  "max": 345,  "min": 321 },
                "xs" : {"width": 320,  "height": false, "container": 290,  "max": 320 }
            };
            setTimeout(function() {
              window.mdp.init($('body'));
            }, 300 );

            $(document).off('shopify:section:load.mdp').on('shopify:section:load.mdp', function(evt){
              window.mdp.init($(evt.target));
            });
        });
    })(window.jQuery);

    let loadProductRecommendationsIntoSection = function() {
        let productRecommendationsSection = document.querySelector(".mdp-weare-product-recommendations");
        if (productRecommendationsSection === null) { return; }
        let productId = productRecommendationsSection.dataset.productId;
        let baseUrl = productRecommendationsSection.dataset.baseUrl;
        let requestUrl = baseUrl + "?section_id=mdp-weare-product-recommendations&product_id=" + productId + "&limit=12";
        let request = new XMLHttpRequest();
        request.open("GET", requestUrl);
        request.onload = function() {
            if (request.status >= 200 && request.status < 300) {
                if('jQuery' in window && 'mdp' in window && 'init' in window.mdp) {
                    let $container = $(productRecommendationsSection).parent();
                    $(productRecommendationsSection).replaceWith(request.response);
                    window.mdp.init($container);
                }
            }
        };
        request.send();
    };

    loadProductRecommendationsIntoSection();

}