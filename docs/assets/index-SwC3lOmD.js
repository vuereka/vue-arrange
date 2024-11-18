(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
/**
 * @vue/shared v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ss(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {},
  Dt = [],
  Ye = () => {},
  ao = () => !1,
  Rn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ws = (e) => e.startsWith("onUpdate:"),
  ae = Object.assign,
  Ts = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  uo = Object.prototype.hasOwnProperty,
  z = (e, t) => uo.call(e, t),
  P = Array.isArray,
  $t = (e) => dn(e) === "[object Map]",
  jt = (e) => dn(e) === "[object Set]",
  zs = (e) => dn(e) === "[object Date]",
  $ = (e) => typeof e == "function",
  oe = (e) => typeof e == "string",
  Ve = (e) => typeof e == "symbol",
  ee = (e) => e !== null && typeof e == "object",
  $r = (e) => (ee(e) || $(e)) && $(e.then) && $(e.catch),
  Fr = Object.prototype.toString,
  dn = (e) => Fr.call(e),
  po = (e) => dn(e).slice(8, -1),
  Rr = (e) => dn(e) === "[object Object]",
  Es = (e) =>
    oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Zt = Ss(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  Nn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ho = /-(\w)/g,
  He = Nn((e) => e.replace(ho, (t, n) => (n ? n.toUpperCase() : ""))),
  go = /\B([A-Z])/g,
  yt = Nn((e) => e.replace(go, "-$1").toLowerCase()),
  Hn = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Yn = Nn((e) => (e ? `on${Hn(e)}` : "")),
  ht = (e, t) => !Object.is(e, t),
  Cn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Nr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  Hr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  mo = (e) => {
    const t = oe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Js;
const kn = () =>
  Js ||
  (Js =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Xe(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = oe(s) ? _o(s) : Xe(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (oe(e) || ee(e)) return e;
}
const vo = /;(?![^(]*\))/g,
  yo = /:([^]+)/,
  bo = /\/\*[^]*?\*\//g;
function _o(e) {
  const t = {};
  return (
    e
      .replace(bo, "")
      .split(vo)
      .forEach((n) => {
        if (n) {
          const s = n.split(yo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ue(e) {
  let t = "";
  if (oe(e)) t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ue(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function kr(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !oe(t) && (e.class = Ue(t)), n && (e.style = Xe(n)), e;
}
const xo =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Co = Ss(xo);
function Br(e) {
  return !!e || e === "";
}
function So(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = pn(e[s], t[s]);
  return n;
}
function pn(e, t) {
  if (e === t) return !0;
  let n = zs(e),
    s = zs(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = Ve(e)), (s = Ve(t)), n || s)) return e === t;
  if (((n = P(e)), (s = P(t)), n || s)) return n && s ? So(e, t) : !1;
  if (((n = ee(e)), (s = ee(t)), n || s)) {
    if (!n || !s) return !1;
    const r = Object.keys(e).length,
      i = Object.keys(t).length;
    if (r !== i) return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        c = t.hasOwnProperty(o);
      if ((l && !c) || (!l && c) || !pn(e[o], t[o])) return !1;
    }
  }
  return String(e) === String(t);
}
function Is(e, t) {
  return e.findIndex((n) => pn(n, t));
}
const jr = (e) => !!(e && e.__v_isRef === !0),
  gt = (e) =>
    oe(e)
      ? e
      : e == null
        ? ""
        : P(e) || (ee(e) && (e.toString === Fr || !$(e.toString)))
          ? jr(e)
            ? gt(e.value)
            : JSON.stringify(e, Kr, 2)
          : String(e),
  Kr = (e, t) =>
    jr(t)
      ? Kr(e, t.value)
      : $t(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Xn(s, i) + " =>"] = r), n),
              {},
            ),
          }
        : jt(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Xn(n)) }
          : Ve(t)
            ? Xn(t)
            : ee(t) && !P(t) && !Rr(t)
              ? String(t)
              : t,
  Xn = (e, t = "") => {
    var n;
    return Ve(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ee;
class wo {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ee),
      !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return (Ee = this), t();
      } finally {
        Ee = n;
      }
    }
  }
  on() {
    Ee = this;
  }
  off() {
    Ee = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Vr() {
  return Ee;
}
function To(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let se;
const Qn = new WeakSet();
class Ur {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ee && Ee.active && Ee.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Qn.has(this) && (Qn.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Gr(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Zs(this), qr(this);
    const t = se,
      n = Ke;
    (se = this), (Ke = !0);
    try {
      return this.fn();
    } finally {
      zr(this), (se = t), (Ke = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ps(t);
      (this.deps = this.depsTail = void 0),
        Zs(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Qn.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    us(this) && this.run();
  }
  get dirty() {
    return us(this);
  }
}
let Wr = 0,
  Yt,
  Xt;
function Gr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Xt), (Xt = e);
    return;
  }
  (e.next = Yt), (Yt = e);
}
function As() {
  Wr++;
}
function Os() {
  if (--Wr > 0) return;
  if (Xt) {
    let t = Xt;
    for (Xt = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Yt; ) {
    let t = Yt;
    for (Yt = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function qr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function zr(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Ps(s), Eo(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r);
  }
  (e.deps = t), (e.depsTail = n);
}
function us(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Jr(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Jr(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === sn)
  )
    return;
  e.globalVersion = sn;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !us(e))) {
    e.flags &= -3;
    return;
  }
  const n = se,
    s = Ke;
  (se = e), (Ke = !0);
  try {
    qr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ht(r, e._value)) && ((e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (se = n), (Ke = s), zr(e), (e.flags &= -3);
  }
}
function Ps(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Ps(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Eo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Ke = !0;
const Zr = [];
function bt() {
  Zr.push(Ke), (Ke = !1);
}
function _t() {
  const e = Zr.pop();
  Ke = e === void 0 ? !0 : e;
}
function Zs(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = se;
    se = void 0;
    try {
      t();
    } finally {
      se = n;
    }
  }
}
let sn = 0;
class Io {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Bn {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!se || !Ke || se === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== se)
      (n = this.activeLink = new Io(se, this)),
        se.deps
          ? ((n.prevDep = se.depsTail),
            (se.depsTail.nextDep = n),
            (se.depsTail = n))
          : (se.deps = se.depsTail = n),
        Yr(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = se.depsTail),
        (n.nextDep = void 0),
        (se.depsTail.nextDep = n),
        (se.depsTail = n),
        se.deps === n && (se.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, sn++, this.notify(t);
  }
  notify(t) {
    As();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Os();
    }
  }
}
function Yr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Yr(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const En = new WeakMap(),
  It = Symbol(""),
  ds = Symbol(""),
  rn = Symbol("");
function xe(e, t, n) {
  if (Ke && se) {
    let s = En.get(e);
    s || En.set(e, (s = new Map()));
    let r = s.get(n);
    r || (s.set(n, (r = new Bn())), (r.map = s), (r.key = n)), r.track();
  }
}
function st(e, t, n, s, r, i) {
  const o = En.get(e);
  if (!o) {
    sn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((As(), t === "clear")) o.forEach(l);
  else {
    const c = P(e),
      a = c && Es(n);
    if (c && n === "length") {
      const u = Number(s);
      o.forEach((p, g) => {
        (g === "length" || g === rn || (!Ve(g) && g >= u)) && l(p);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(rn)), t)
      ) {
        case "add":
          c ? a && l(o.get("length")) : (l(o.get(It)), $t(e) && l(o.get(ds)));
          break;
        case "delete":
          c || (l(o.get(It)), $t(e) && l(o.get(ds)));
          break;
        case "set":
          $t(e) && l(o.get(It));
          break;
      }
  }
  Os();
}
function Ao(e, t) {
  const n = En.get(e);
  return n && n.get(t);
}
function Mt(e) {
  const t = B(e);
  return t === e ? t : (xe(t, "iterate", rn), Ne(e) ? t : t.map(Ce));
}
function jn(e) {
  return xe((e = B(e)), "iterate", rn), e;
}
const Oo = {
  __proto__: null,
  [Symbol.iterator]() {
    return es(this, Symbol.iterator, Ce);
  },
  concat(...e) {
    return Mt(this).concat(...e.map((t) => (P(t) ? Mt(t) : t)));
  },
  entries() {
    return es(this, "entries", (e) => ((e[1] = Ce(e[1])), e));
  },
  every(e, t) {
    return et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return et(this, "filter", e, t, (n) => n.map(Ce), arguments);
  },
  find(e, t) {
    return et(this, "find", e, t, Ce, arguments);
  },
  findIndex(e, t) {
    return et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return et(this, "findLast", e, t, Ce, arguments);
  },
  findLastIndex(e, t) {
    return et(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ts(this, "includes", e);
  },
  indexOf(...e) {
    return ts(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  lastIndexOf(...e) {
    return ts(this, "lastIndexOf", e);
  },
  map(e, t) {
    return et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Gt(this, "pop");
  },
  push(...e) {
    return Gt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ys(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ys(this, "reduceRight", e, t);
  },
  shift() {
    return Gt(this, "shift");
  },
  some(e, t) {
    return et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Gt(this, "splice", e);
  },
  toReversed() {
    return Mt(this).toReversed();
  },
  toSorted(e) {
    return Mt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Gt(this, "unshift", e);
  },
  values() {
    return es(this, "values", Ce);
  },
};
function es(e, t, n) {
  const s = jn(e),
    r = s[t]();
  return (
    s !== e &&
      !Ne(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    r
  );
}
const Po = Array.prototype;
function et(e, t, n, s, r, i) {
  const o = jn(e),
    l = o !== e && !Ne(e),
    c = o[t];
  if (c !== Po[t]) {
    const p = c.apply(e, i);
    return l ? Ce(p) : p;
  }
  let a = n;
  o !== e &&
    (l
      ? (a = function (p, g) {
          return n.call(this, Ce(p), g, e);
        })
      : n.length > 2 &&
        (a = function (p, g) {
          return n.call(this, p, g, e);
        }));
  const u = c.call(o, a, s);
  return l && r ? r(u) : u;
}
function Ys(e, t, n, s) {
  const r = jn(e);
  let i = n;
  return (
    r !== e &&
      (Ne(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e);
          })
        : (i = function (o, l, c) {
            return n.call(this, o, Ce(l), c, e);
          })),
    r[t](i, ...s)
  );
}
function ts(e, t, n) {
  const s = B(e);
  xe(s, "iterate", rn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Ds(n[0])
    ? ((n[0] = B(n[0])), s[t](...n))
    : r;
}
function Gt(e, t, n = []) {
  bt(), As();
  const s = B(e)[t].apply(e, n);
  return Os(), _t(), s;
}
const Mo = Ss("__proto__,__v_isRef,__isVue"),
  Xr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ve),
  );
function Lo(e) {
  Ve(e) || (e = String(e));
  const t = B(this);
  return xe(t, "has", e), t.hasOwnProperty(e);
}
class Qr {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return s === (r ? (i ? Ko : si) : i ? ni : ti).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = P(t);
    if (!r) {
      let c;
      if (o && (c = Oo[n])) return c;
      if (n === "hasOwnProperty") return Lo;
    }
    const l = Reflect.get(t, n, he(t) ? t : s);
    return (Ve(n) ? Xr.has(n) : Mo(n)) || (r || xe(t, "get", n), i)
      ? l
      : he(l)
        ? o && Es(n)
          ? l
          : l.value
        : ee(l)
          ? r
            ? ri(l)
            : hn(l)
          : l;
  }
}
class ei extends Qr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const c = At(i);
      if (
        (!Ne(s) && !At(s) && ((i = B(i)), (s = B(s))), !P(t) && he(i) && !he(s))
      )
        return c ? !1 : ((i.value = s), !0);
    }
    const o = P(t) && Es(n) ? Number(n) < t.length : z(t, n),
      l = Reflect.set(t, n, s, he(t) ? t : r);
    return (
      t === B(r) && (o ? ht(s, i) && st(t, "set", n, s) : st(t, "add", n, s)), l
    );
  }
  deleteProperty(t, n) {
    const s = z(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && st(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ve(n) || !Xr.has(n)) && xe(t, "has", n), s;
  }
  ownKeys(t) {
    return xe(t, "iterate", P(t) ? "length" : It), Reflect.ownKeys(t);
  }
}
class Do extends Qr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const $o = new ei(),
  Fo = new Do(),
  Ro = new ei(!0);
const ps = (e) => e,
  yn = (e) => Reflect.getPrototypeOf(e);
function No(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = B(r),
      o = $t(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      c = e === "keys" && o,
      a = r[e](...s),
      u = n ? ps : t ? hs : Ce;
    return (
      !t && xe(i, "iterate", c ? ds : It),
      {
        next() {
          const { value: p, done: g } = a.next();
          return g
            ? { value: p, done: g }
            : { value: l ? [u(p[0]), u(p[1])] : u(p), done: g };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function bn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ho(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = B(i),
        l = B(r);
      e || (ht(r, l) && xe(o, "get", r), xe(o, "get", l));
      const { has: c } = yn(o),
        a = t ? ps : e ? hs : Ce;
      if (c.call(o, r)) return a(i.get(r));
      if (c.call(o, l)) return a(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && xe(B(r), "iterate", It), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw,
        o = B(i),
        l = B(r);
      return (
        e || (ht(r, l) && xe(o, "has", r), xe(o, "has", l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = B(l),
        a = t ? ps : e ? hs : Ce;
      return (
        !e && xe(c, "iterate", It),
        l.forEach((u, p) => r.call(i, a(u), a(p), o))
      );
    },
  };
  return (
    ae(
      n,
      e
        ? {
            add: bn("add"),
            set: bn("set"),
            delete: bn("delete"),
            clear: bn("clear"),
          }
        : {
            add(r) {
              !t && !Ne(r) && !At(r) && (r = B(r));
              const i = B(this);
              return (
                yn(i).has.call(i, r) || (i.add(r), st(i, "add", r, r)), this
              );
            },
            set(r, i) {
              !t && !Ne(i) && !At(i) && (i = B(i));
              const o = B(this),
                { has: l, get: c } = yn(o);
              let a = l.call(o, r);
              a || ((r = B(r)), (a = l.call(o, r)));
              const u = c.call(o, r);
              return (
                o.set(r, i),
                a ? ht(i, u) && st(o, "set", r, i) : st(o, "add", r, i),
                this
              );
            },
            delete(r) {
              const i = B(this),
                { has: o, get: l } = yn(i);
              let c = o.call(i, r);
              c || ((r = B(r)), (c = o.call(i, r))), l && l.call(i, r);
              const a = i.delete(r);
              return c && st(i, "delete", r, void 0), a;
            },
            clear() {
              const r = B(this),
                i = r.size !== 0,
                o = r.clear();
              return i && st(r, "clear", void 0, void 0), o;
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = No(r, e, t);
    }),
    n
  );
}
function Ms(e, t) {
  const n = Ho(e, t);
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(z(n, r) && r in s ? n : s, r, i);
}
const ko = { get: Ms(!1, !1) },
  Bo = { get: Ms(!1, !0) },
  jo = { get: Ms(!0, !1) };
const ti = new WeakMap(),
  ni = new WeakMap(),
  si = new WeakMap(),
  Ko = new WeakMap();
function Vo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Uo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vo(po(e));
}
function hn(e) {
  return At(e) ? e : Ls(e, !1, $o, ko, ti);
}
function Wo(e) {
  return Ls(e, !1, Ro, Bo, ni);
}
function ri(e) {
  return Ls(e, !0, Fo, jo, si);
}
function Ls(e, t, n, s, r) {
  if (!ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const o = Uo(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return r.set(e, l), l;
}
function Ft(e) {
  return At(e) ? Ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function At(e) {
  return !!(e && e.__v_isReadonly);
}
function Ne(e) {
  return !!(e && e.__v_isShallow);
}
function Ds(e) {
  return e ? !!e.__v_raw : !1;
}
function B(e) {
  const t = e && e.__v_raw;
  return t ? B(t) : e;
}
function Go(e) {
  return (
    !z(e, "__v_skip") && Object.isExtensible(e) && Nr(e, "__v_skip", !0), e
  );
}
const Ce = (e) => (ee(e) ? hn(e) : e),
  hs = (e) => (ee(e) ? ri(e) : e);
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function be(e) {
  return ii(e, !1);
}
function qo(e) {
  return ii(e, !0);
}
function ii(e, t) {
  return he(e) ? e : new zo(e, t);
}
class zo {
  constructor(t, n) {
    (this.dep = new Bn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : B(t)),
      (this._value = n ? t : Ce(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ne(t) || At(t);
    (t = s ? t : B(t)),
      ht(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Ce(t)),
        this.dep.trigger());
  }
}
function W(e) {
  return he(e) ? e.value : e;
}
const Jo = {
  get: (e, t, n) => (t === "__v_raw" ? e : W(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return he(r) && !he(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function oi(e) {
  return Ft(e) ? e : new Proxy(e, Jo);
}
class Zo {
  constructor(t) {
    (this.__v_isRef = !0), (this._value = void 0);
    const n = (this.dep = new Bn()),
      { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n));
    (this._get = s), (this._set = r);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function Yo(e) {
  return new Zo(e);
}
function Xo(e) {
  const t = P(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = el(e, n);
  return t;
}
class Qo {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Ao(B(this._object), this._key);
  }
}
function el(e, t, n) {
  const s = e[t];
  return he(s) ? s : new Qo(e, t, n);
}
class tl {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Bn(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = sn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && se !== this))
      return Gr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Jr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function nl(e, t, n = !1) {
  let s, r;
  return $(e) ? (s = e) : ((s = e.get), (r = e.set)), new tl(s, r, n);
}
const _n = {},
  In = new WeakMap();
let wt;
function sl(e, t = !1, n = wt) {
  if (n) {
    let s = In.get(n);
    s || In.set(n, (s = [])), s.push(e);
  }
}
function rl(e, t, n = Q) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: c,
    } = n,
    a = (T) => (r ? T : Ne(T) || r === !1 || r === 0 ? rt(T, 1) : rt(T));
  let u,
    p,
    g,
    v,
    w = !1,
    x = !1;
  if (
    (he(e)
      ? ((p = () => e.value), (w = Ne(e)))
      : Ft(e)
        ? ((p = () => a(e)), (w = !0))
        : P(e)
          ? ((x = !0),
            (w = e.some((T) => Ft(T) || Ne(T))),
            (p = () =>
              e.map((T) => {
                if (he(T)) return T.value;
                if (Ft(T)) return a(T);
                if ($(T)) return c ? c(T, 2) : T();
              })))
          : $(e)
            ? t
              ? (p = c ? () => c(e, 2) : e)
              : (p = () => {
                  if (g) {
                    bt();
                    try {
                      g();
                    } finally {
                      _t();
                    }
                  }
                  const T = wt;
                  wt = u;
                  try {
                    return c ? c(e, 3, [v]) : e(v);
                  } finally {
                    wt = T;
                  }
                })
            : (p = Ye),
    t && r)
  ) {
    const T = p,
      k = r === !0 ? 1 / 0 : r;
    p = () => rt(T(), k);
  }
  const j = Vr(),
    F = () => {
      u.stop(), j && Ts(j.effects, u);
    };
  if (i && t) {
    const T = t;
    t = (...k) => {
      T(...k), F();
    };
  }
  let K = x ? new Array(e.length).fill(_n) : _n;
  const H = (T) => {
    if (!(!(u.flags & 1) || (!u.dirty && !T)))
      if (t) {
        const k = u.run();
        if (r || w || (x ? k.some((le, ue) => ht(le, K[ue])) : ht(k, K))) {
          g && g();
          const le = wt;
          wt = u;
          try {
            const ue = [k, K === _n ? void 0 : x && K[0] === _n ? [] : K, v];
            c ? c(t, 3, ue) : t(...ue), (K = k);
          } finally {
            wt = le;
          }
        }
      } else u.run();
  };
  return (
    l && l(H),
    (u = new Ur(p)),
    (u.scheduler = o ? () => o(H, !1) : H),
    (v = (T) => sl(T, !1, u)),
    (g = u.onStop =
      () => {
        const T = In.get(u);
        if (T) {
          if (c) c(T, 4);
          else for (const k of T) k();
          In.delete(u);
        }
      }),
    t ? (s ? H(!0) : (K = u.run())) : o ? o(H.bind(null, !0), !0) : u.run(),
    (F.pause = u.pause.bind(u)),
    (F.resume = u.resume.bind(u)),
    (F.stop = F),
    F
  );
}
function rt(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, he(e))) rt(e.value, t, n);
  else if (P(e)) for (let s = 0; s < e.length; s++) rt(e[s], t, n);
  else if (jt(e) || $t(e))
    e.forEach((s) => {
      rt(s, t, n);
    });
  else if (Rr(e)) {
    for (const s in e) rt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && rt(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function gn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Kn(r, t, n);
  }
}
function We(e, t, n, s) {
  if ($(e)) {
    const r = gn(e, t, n, s);
    return (
      r &&
        $r(r) &&
        r.catch((i) => {
          Kn(i, t, n);
        }),
      r
    );
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(We(e[i], t, n, s));
    return r;
  }
}
function Kn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || Q;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let p = 0; p < u.length; p++) if (u[p](e, c, a) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      bt(), gn(i, null, 10, [e, c, a]), _t();
      return;
    }
  }
  il(e, n, r, s, o);
}
function il(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const Ie = [];
let Je = -1;
const Rt = [];
let at = null,
  Lt = 0;
const li = Promise.resolve();
let An = null;
function On(e) {
  const t = An || li;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ol(e) {
  let t = Je + 1,
    n = Ie.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ie[s],
      i = on(r);
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function $s(e) {
  if (!(e.flags & 1)) {
    const t = on(e),
      n = Ie[Ie.length - 1];
    !n || (!(e.flags & 2) && t >= on(n)) ? Ie.push(e) : Ie.splice(ol(t), 0, e),
      (e.flags |= 1),
      ci();
  }
}
function ci() {
  An || (An = li.then(ai));
}
function ll(e) {
  P(e)
    ? Rt.push(...e)
    : at && e.id === -1
      ? at.splice(Lt + 1, 0, e)
      : e.flags & 1 || (Rt.push(e), (e.flags |= 1)),
    ci();
}
function Xs(e, t, n = Je + 1) {
  for (; n < Ie.length; n++) {
    const s = Ie[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      Ie.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}
function fi(e) {
  if (Rt.length) {
    const t = [...new Set(Rt)].sort((n, s) => on(n) - on(s));
    if (((Rt.length = 0), at)) {
      at.push(...t);
      return;
    }
    for (at = t, Lt = 0; Lt < at.length; Lt++) {
      const n = at[Lt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (at = null), (Lt = 0);
  }
}
const on = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ai(e) {
  try {
    for (Je = 0; Je < Ie.length; Je++) {
      const t = Ie[Je];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        gn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Je < Ie.length; Je++) {
      const t = Ie[Je];
      t && (t.flags &= -2);
    }
    (Je = -1),
      (Ie.length = 0),
      fi(),
      (An = null),
      (Ie.length || Rt.length) && ai();
  }
}
let pe = null,
  ui = null;
function Pn(e) {
  const t = pe;
  return (pe = e), (ui = (e && e.type.__scopeId) || null), t;
}
function ve(e, t = pe, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && fr(-1);
    const i = Pn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Pn(i), s._d && fr(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Qs(e, t) {
  if (pe === null) return e;
  const n = zn(pe),
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = Q] = t[r];
    i &&
      ($(i) && (i = { mounted: i, updated: i }),
      i.deep && rt(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function xt(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (bt(), We(c, n, 8, [e.el, l, e, t]), _t());
  }
}
const cl = Symbol("_vte"),
  di = (e) => e.__isTeleport,
  ut = Symbol("_leaveCb"),
  xn = Symbol("_enterCb");
function pi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Wn(() => {
      e.isMounted = !0;
    }),
    xi(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Re = [Function, Array],
  hi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Re,
    onEnter: Re,
    onAfterEnter: Re,
    onEnterCancelled: Re,
    onBeforeLeave: Re,
    onLeave: Re,
    onAfterLeave: Re,
    onLeaveCancelled: Re,
    onBeforeAppear: Re,
    onAppear: Re,
    onAfterAppear: Re,
    onAppearCancelled: Re,
  },
  gi = (e) => {
    const t = e.subTree;
    return t.component ? gi(t.component) : t;
  },
  fl = {
    name: "BaseTransition",
    props: hi,
    setup(e, { slots: t }) {
      const n = Ji(),
        s = pi();
      return () => {
        const r = t.default && Fs(t.default(), !0);
        if (!r || !r.length) return;
        const i = mi(r),
          o = B(e),
          { mode: l } = o;
        if (s.isLeaving) return ns(i);
        const c = er(i);
        if (!c) return ns(i);
        let a = ln(c, o, s, n, (g) => (a = g));
        c.type !== Ae && Ot(c, a);
        const u = n.subTree,
          p = u && er(u);
        if (p && p.type !== Ae && !Tt(c, p) && gi(n).type !== Ae) {
          const g = ln(p, o, s, n);
          if ((Ot(p, g), l === "out-in" && c.type !== Ae))
            return (
              (s.isLeaving = !0),
              (g.afterLeave = () => {
                (s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete g.afterLeave;
              }),
              ns(i)
            );
          l === "in-out" &&
            c.type !== Ae &&
            (g.delayLeave = (v, w, x) => {
              const j = vi(s, p);
              (j[String(p.key)] = p),
                (v[ut] = () => {
                  w(), (v[ut] = void 0), delete a.delayedLeave;
                }),
                (a.delayedLeave = x);
            });
        }
        return i;
      };
    },
  };
function mi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ae) {
        t = n;
        break;
      }
  }
  return t;
}
const al = fl;
function vi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function ln(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: a,
      onAfterEnter: u,
      onEnterCancelled: p,
      onBeforeLeave: g,
      onLeave: v,
      onAfterLeave: w,
      onLeaveCancelled: x,
      onBeforeAppear: j,
      onAppear: F,
      onAfterAppear: K,
      onAppearCancelled: H,
    } = t,
    T = String(e.key),
    k = vi(n, e),
    le = (N, q) => {
      N && We(N, s, 9, q);
    },
    ue = (N, q) => {
      const Y = q[1];
      le(N, q),
        P(N) ? N.every((A) => A.length <= 1) && Y() : N.length <= 1 && Y();
    },
    ge = {
      mode: o,
      persisted: l,
      beforeEnter(N) {
        let q = c;
        if (!n.isMounted)
          if (i) q = j || c;
          else return;
        N[ut] && N[ut](!0);
        const Y = k[T];
        Y && Tt(e, Y) && Y.el[ut] && Y.el[ut](), le(q, [N]);
      },
      enter(N) {
        let q = a,
          Y = u,
          A = p;
        if (!n.isMounted)
          if (i) (q = F || a), (Y = K || u), (A = H || p);
          else return;
        let te = !1;
        const de = (N[xn] = (Ge) => {
          te ||
            ((te = !0),
            Ge ? le(A, [N]) : le(Y, [N]),
            ge.delayedLeave && ge.delayedLeave(),
            (N[xn] = void 0));
        });
        q ? ue(q, [N, de]) : de();
      },
      leave(N, q) {
        const Y = String(e.key);
        if ((N[xn] && N[xn](!0), n.isUnmounting)) return q();
        le(g, [N]);
        let A = !1;
        const te = (N[ut] = (de) => {
          A ||
            ((A = !0),
            q(),
            de ? le(x, [N]) : le(w, [N]),
            (N[ut] = void 0),
            k[Y] === e && delete k[Y]);
        });
        (k[Y] = e), v ? ue(v, [N, te]) : te();
      },
      clone(N) {
        const q = ln(N, t, n, s, r);
        return r && r(q), q;
      },
    };
  return ge;
}
function ns(e) {
  if (Vn(e)) return (e = vt(e)), (e.children = null), e;
}
function er(e) {
  if (!Vn(e)) return di(e.type) && e.children ? mi(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && $(n.default)) return n.default();
  }
}
function Ot(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Ot(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Fs(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === Se
      ? (o.patchFlag & 128 && r++, (s = s.concat(Fs(o.children, t, l))))
      : (t || o.type !== Ae) && s.push(l != null ? vt(o, { key: l }) : o);
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */ function ot(e, t) {
  return $(e) ? ae({ name: e.name }, t, { setup: e }) : e;
}
function yi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gs(e, t, n, s, r = !1) {
  if (P(e)) {
    e.forEach((w, x) => gs(w, t && (P(t) ? t[x] : t), n, s, r));
    return;
  }
  if (Nt(s) && !r) return;
  const i = s.shapeFlag & 4 ? zn(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    a = t && t.r,
    u = l.refs === Q ? (l.refs = {}) : l.refs,
    p = l.setupState,
    g = B(p),
    v = p === Q ? () => !1 : (w) => z(g, w);
  if (
    (a != null &&
      a !== c &&
      (oe(a)
        ? ((u[a] = null), v(a) && (p[a] = null))
        : he(a) && (a.value = null)),
    $(c))
  )
    gn(c, l, 12, [o, u]);
  else {
    const w = oe(c),
      x = he(c);
    if (w || x) {
      const j = () => {
        if (e.f) {
          const F = w ? (v(c) ? p[c] : u[c]) : c.value;
          r
            ? P(F) && Ts(F, i)
            : P(F)
              ? F.includes(i) || F.push(i)
              : w
                ? ((u[c] = [i]), v(c) && (p[c] = u[c]))
                : ((c.value = [i]), e.k && (u[e.k] = c.value));
        } else
          w
            ? ((u[c] = o), v(c) && (p[c] = o))
            : x && ((c.value = o), e.k && (u[e.k] = o));
      };
      o ? ((j.id = -1), Le(j, n)) : j();
    }
  }
}
kn().requestIdleCallback;
kn().cancelIdleCallback;
const Nt = (e) => !!e.type.__asyncLoader,
  Vn = (e) => e.type.__isKeepAlive;
function ul(e, t) {
  bi(e, "a", t);
}
function dl(e, t) {
  bi(e, "da", t);
}
function bi(e, t, n = ye) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Un(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Vn(r.parent.vnode) && pl(s, t, n, r), (r = r.parent);
  }
}
function pl(e, t, n, s) {
  const r = Un(t, e, s, !0);
  Rs(() => {
    Ts(s[t], r);
  }, n);
}
function Un(e, t, n = ye, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          bt();
          const l = mn(n),
            c = We(t, n, e, o);
          return l(), _t(), c;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const lt =
    (e) =>
    (t, n = ye) => {
      (!an || e === "sp") && Un(e, (...s) => t(...s), n);
    },
  hl = lt("bm"),
  Wn = lt("m"),
  gl = lt("bu"),
  _i = lt("u"),
  xi = lt("bum"),
  Rs = lt("um"),
  ml = lt("sp"),
  vl = lt("rtg"),
  yl = lt("rtc");
function bl(e, t = ye) {
  Un("ec", e, t);
}
const Ci = "components";
function _l(e, t) {
  return wi(Ci, e, !0, t) || e;
}
const Si = Symbol.for("v-ndc");
function Ns(e) {
  return oe(e) ? wi(Ci, e, !1) || e : e || Si;
}
function wi(e, t, n = !0, s = !1) {
  const r = pe || ye;
  if (r) {
    const i = r.type;
    {
      const l = rc(i, !1);
      if (l && (l === t || l === He(t) || l === Hn(He(t)))) return i;
    }
    const o = tr(r[e] || i[e], t) || tr(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function tr(e, t) {
  return e && (e[t] || e[He(t)] || e[Hn(He(t))]);
}
function Ti(e, t, n, s) {
  let r;
  const i = n,
    o = P(e);
  if (o || oe(e)) {
    const l = o && Ft(e);
    let c = !1;
    l && ((c = !Ne(e)), (e = jn(e))), (r = new Array(e.length));
    for (let a = 0, u = e.length; a < u; a++)
      r[a] = t(c ? Ce(e[a]) : e[a], a, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (ee(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, a = l.length; c < a; c++) {
        const u = l[c];
        r[c] = t(e[u], u, c, i);
      }
    }
  else r = [];
  return r;
}
function Et(e, t, n = {}, s, r) {
  if (pe.ce || (pe.parent && Nt(pe.parent) && pe.parent.ce))
    return (
      t !== "default" && (n.name = t),
      fe(),
      De(Se, null, [ie("slot", n, s)], 64)
    );
  let i = e[t];
  i && i._c && (i._d = !1), fe();
  const o = i && Ei(i(n)),
    l = n.key || (o && o.key),
    c = De(
      Se,
      { key: (l && !Ve(l) ? l : `_${t}`) + (!o && s ? "_fb" : "") },
      o || [],
      o && e._ === 1 ? 64 : -2,
    );
  return (
    c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    c
  );
}
function Ei(e) {
  return e.some((t) =>
    fn(t) ? !(t.type === Ae || (t.type === Se && !Ei(t.children))) : !0,
  )
    ? e
    : null;
}
const ms = (e) => (e ? (Zi(e) ? zn(e) : ms(e.parent)) : null),
  Qt = ae(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ms(e.parent),
    $root: (e) => ms(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hs(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        $s(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = On.bind(e.proxy)),
    $watch: (e) => jl.bind(e),
  }),
  ss = (e, t) => e !== Q && !e.__isScriptSetup && z(e, t),
  xl = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c,
      } = e;
      let a;
      if (t[0] !== "$") {
        const v = o[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (ss(s, t)) return (o[t] = 1), s[t];
          if (r !== Q && z(r, t)) return (o[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && z(a, t)) return (o[t] = 3), i[t];
          if (n !== Q && z(n, t)) return (o[t] = 4), n[t];
          vs && (o[t] = 0);
        }
      }
      const u = Qt[t];
      let p, g;
      if (u) return t === "$attrs" && xe(e.attrs, "get", ""), u(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== Q && z(n, t)) return (o[t] = 4), n[t];
      if (((g = c.config.globalProperties), z(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return ss(r, t)
        ? ((r[t] = n), !0)
        : s !== Q && z(s, t)
          ? ((s[t] = n), !0)
          : z(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o,
    ) {
      let l;
      return (
        !!n[o] ||
        (e !== Q && z(e, o)) ||
        ss(t, o) ||
        ((l = i[0]) && z(l, o)) ||
        z(s, o) ||
        z(Qt, o) ||
        z(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : z(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function nr(e) {
  return P(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let vs = !0;
function Cl(e) {
  const t = Hs(e),
    n = e.proxy,
    s = e.ctx;
  (vs = !1), t.beforeCreate && sr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: a,
    created: u,
    beforeMount: p,
    mounted: g,
    beforeUpdate: v,
    updated: w,
    activated: x,
    deactivated: j,
    beforeDestroy: F,
    beforeUnmount: K,
    destroyed: H,
    unmounted: T,
    render: k,
    renderTracked: le,
    renderTriggered: ue,
    errorCaptured: ge,
    serverPrefetch: N,
    expose: q,
    inheritAttrs: Y,
    components: A,
    directives: te,
    filters: de,
  } = t;
  if ((a && Sl(a, s, null), o))
    for (const re in o) {
      const J = o[re];
      $(J) && (s[re] = J.bind(n));
    }
  if (r) {
    const re = r.call(n, n);
    ee(re) && (e.data = hn(re));
  }
  if (((vs = !0), i))
    for (const re in i) {
      const J = i[re],
        we = $(J) ? J.bind(n, n) : $(J.get) ? J.get.bind(n, n) : Ye,
        Pt = !$(J) && $(J.set) ? J.set.bind(n) : Ye,
        Qe = je({ get: we, set: Pt });
      Object.defineProperty(s, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (Fe) => (Qe.value = Fe),
      });
    }
  if (l) for (const re in l) Ii(l[re], s, n, re);
  if (c) {
    const re = $(c) ? c.call(n) : c;
    Reflect.ownKeys(re).forEach((J) => {
      Oi(J, re[J]);
    });
  }
  u && sr(u, e, "c");
  function ce(re, J) {
    P(J) ? J.forEach((we) => re(we.bind(n))) : J && re(J.bind(n));
  }
  if (
    (ce(hl, p),
    ce(Wn, g),
    ce(gl, v),
    ce(_i, w),
    ce(ul, x),
    ce(dl, j),
    ce(bl, ge),
    ce(yl, le),
    ce(vl, ue),
    ce(xi, K),
    ce(Rs, T),
    ce(ml, N),
    P(q))
  )
    if (q.length) {
      const re = e.exposed || (e.exposed = {});
      q.forEach((J) => {
        Object.defineProperty(re, J, {
          get: () => n[J],
          set: (we) => (n[J] = we),
        });
      });
    } else e.exposed || (e.exposed = {});
  k && e.render === Ye && (e.render = k),
    Y != null && (e.inheritAttrs = Y),
    A && (e.components = A),
    te && (e.directives = te),
    N && yi(e);
}
function Sl(e, t, n = Ye) {
  P(e) && (e = ys(e));
  for (const s in e) {
    const r = e[s];
    let i;
    ee(r)
      ? "default" in r
        ? (i = en(r.from || s, r.default, !0))
        : (i = en(r.from || s))
      : (i = en(r)),
      he(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i);
  }
}
function sr(e, t, n) {
  We(P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ii(e, t, n, s) {
  let r = s.includes(".") ? Ki(n, s) : () => n[s];
  if (oe(e)) {
    const i = t[e];
    $(i) && it(r, i);
  } else if ($(e)) it(r, e.bind(n));
  else if (ee(e))
    if (P(e)) e.forEach((i) => Ii(i, t, n, s));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) && it(r, i, e);
    }
}
function Hs(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((a) => Mn(c, a, o, !0)),
          Mn(c, t, o)),
    ee(t) && i.set(t, c),
    c
  );
}
function Mn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Mn(e, i, n, !0), r && r.forEach((o) => Mn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = wl[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const wl = {
  data: rr,
  props: ir,
  emits: ir,
  methods: Jt,
  computed: Jt,
  beforeCreate: Te,
  created: Te,
  beforeMount: Te,
  mounted: Te,
  beforeUpdate: Te,
  updated: Te,
  beforeDestroy: Te,
  beforeUnmount: Te,
  destroyed: Te,
  unmounted: Te,
  activated: Te,
  deactivated: Te,
  errorCaptured: Te,
  serverPrefetch: Te,
  components: Jt,
  directives: Jt,
  watch: El,
  provide: rr,
  inject: Tl,
};
function rr(e, t) {
  return t
    ? e
      ? function () {
          return ae(
            $(e) ? e.call(this, this) : e,
            $(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Tl(e, t) {
  return Jt(ys(e), ys(t));
}
function ys(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Jt(e, t) {
  return e ? ae(Object.create(null), e, t) : t;
}
function ir(e, t) {
  return e
    ? P(e) && P(t)
      ? [...new Set([...e, ...t])]
      : ae(Object.create(null), nr(e), nr(t ?? {}))
    : t;
}
function El(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(Object.create(null), e);
  for (const s in t) n[s] = Te(e[s], t[s]);
  return n;
}
function Ai() {
  return {
    app: null,
    config: {
      isNativeTag: ao,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Il = 0;
function Al(e, t) {
  return function (s, r = null) {
    $(s) || (s = ae({}, s)), r != null && !ee(r) && (r = null);
    const i = Ai(),
      o = new WeakSet(),
      l = [];
    let c = !1;
    const a = (i.app = {
      _uid: Il++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: lc,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...p) {
        return (
          o.has(u) ||
            (u && $(u.install)
              ? (o.add(u), u.install(a, ...p))
              : $(u) && (o.add(u), u(a, ...p))),
          a
        );
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), a;
      },
      component(u, p) {
        return p ? ((i.components[u] = p), a) : i.components[u];
      },
      directive(u, p) {
        return p ? ((i.directives[u] = p), a) : i.directives[u];
      },
      mount(u, p, g) {
        if (!c) {
          const v = a._ceVNode || ie(s, r);
          return (
            (v.appContext = i),
            g === !0 ? (g = "svg") : g === !1 && (g = void 0),
            p && t ? t(v, u) : e(v, u, g),
            (c = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            zn(v.component)
          );
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c &&
          (We(l, a._instance, 16),
          e(null, a._container),
          delete a._container.__vue_app__);
      },
      provide(u, p) {
        return (i.provides[u] = p), a;
      },
      runWithContext(u) {
        const p = Ht;
        Ht = a;
        try {
          return u();
        } finally {
          Ht = p;
        }
      },
    });
    return a;
  };
}
let Ht = null;
function Oi(e, t) {
  if (ye) {
    let n = ye.provides;
    const s = ye.parent && ye.parent.provides;
    s === n && (n = ye.provides = Object.create(s)), (n[e] = t);
  }
}
function en(e, t, n = !1) {
  const s = ye || pe;
  if (s || Ht) {
    const r = Ht
      ? Ht._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && $(t) ? t.call(s && s.proxy) : t;
  }
}
const Pi = {},
  Mi = () => Object.create(Pi),
  Li = (e) => Object.getPrototypeOf(e) === Pi;
function Ol(e, t, n, s = !1) {
  const r = {},
    i = Mi();
  (e.propsDefaults = Object.create(null)), Di(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : Wo(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function Pl(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = B(r),
    [c] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        let g = u[p];
        if (Gn(e.emitsOptions, g)) continue;
        const v = t[g];
        if (c)
          if (z(i, g)) v !== i[g] && ((i[g] = v), (a = !0));
          else {
            const w = He(g);
            r[w] = bs(c, l, w, v, e, !1);
          }
        else v !== i[g] && ((i[g] = v), (a = !0));
      }
    }
  } else {
    Di(e, t, r, i) && (a = !0);
    let u;
    for (const p in l)
      (!t || (!z(t, p) && ((u = yt(p)) === p || !z(t, u)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[u] !== void 0) &&
            (r[p] = bs(c, l, p, void 0, e, !0))
          : delete r[p]);
    if (i !== l) for (const p in i) (!t || !z(t, p)) && (delete i[p], (a = !0));
  }
  a && st(e.attrs, "set", "");
}
function Di(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let c in t) {
      if (Zt(c)) continue;
      const a = t[c];
      let u;
      r && z(r, (u = He(c)))
        ? !i || !i.includes(u)
          ? (n[u] = a)
          : ((l || (l = {}))[u] = a)
        : Gn(e.emitsOptions, c) ||
          ((!(c in s) || a !== s[c]) && ((s[c] = a), (o = !0)));
    }
  if (i) {
    const c = B(n),
      a = l || Q;
    for (let u = 0; u < i.length; u++) {
      const p = i[u];
      n[p] = bs(r, c, p, a[p], e, !z(a, p));
    }
  }
  return o;
}
function bs(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = z(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && $(c)) {
        const { propsDefaults: a } = r;
        if (n in a) s = a[n];
        else {
          const u = mn(r);
          (s = a[n] = c.call(null, t)), u();
        }
      } else s = c;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] &&
      (i && !l ? (s = !1) : o[1] && (s === "" || s === yt(n)) && (s = !0));
  }
  return s;
}
const Ml = new WeakMap();
function $i(e, t, n = !1) {
  const s = n ? Ml : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let c = !1;
  if (!$(e)) {
    const u = (p) => {
      c = !0;
      const [g, v] = $i(p, t, !0);
      ae(o, g), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !c) return ee(e) && s.set(e, Dt), Dt;
  if (P(i))
    for (let u = 0; u < i.length; u++) {
      const p = He(i[u]);
      or(p) && (o[p] = Q);
    }
  else if (i)
    for (const u in i) {
      const p = He(u);
      if (or(p)) {
        const g = i[u],
          v = (o[p] = P(g) || $(g) ? { type: g } : ae({}, g)),
          w = v.type;
        let x = !1,
          j = !0;
        if (P(w))
          for (let F = 0; F < w.length; ++F) {
            const K = w[F],
              H = $(K) && K.name;
            if (H === "Boolean") {
              x = !0;
              break;
            } else H === "String" && (j = !1);
          }
        else x = $(w) && w.name === "Boolean";
        (v[0] = x), (v[1] = j), (x || z(v, "default")) && l.push(p);
      }
    }
  const a = [o, l];
  return ee(e) && s.set(e, a), a;
}
function or(e) {
  return e[0] !== "$" && !Zt(e);
}
const Fi = (e) => e[0] === "_" || e === "$stable",
  ks = (e) => (P(e) ? e.map(Ze) : [Ze(e)]),
  Ll = (e, t, n) => {
    if (t._n) return t;
    const s = ve((...r) => ks(t(...r)), n);
    return (s._c = !1), s;
  },
  Ri = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Fi(r)) continue;
      const i = e[r];
      if ($(i)) t[r] = Ll(r, i, s);
      else if (i != null) {
        const o = ks(i);
        t[r] = () => o;
      }
    }
  },
  Ni = (e, t) => {
    const n = ks(t);
    e.slots.default = () => n;
  },
  Hi = (e, t, n) => {
    for (const s in t) (n || s !== "_") && (e[s] = t[s]);
  },
  Dl = (e, t, n) => {
    const s = (e.slots = Mi());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Hi(s, t, n), n && Nr(s, "_", r, !0)) : Ri(t, s);
    } else t && Ni(e, t);
  },
  $l = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = Q;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : Hi(r, t, n)
        : ((i = !t.$stable), Ri(t, r)),
        (o = t);
    } else t && (Ni(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !Fi(l) && o[l] == null && delete r[l];
  },
  Le = zl;
function Fl(e) {
  return Rl(e);
}
function Rl(e, t) {
  const n = kn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: a,
      setElementText: u,
      parentNode: p,
      nextSibling: g,
      setScopeId: v = Ye,
      insertStaticContent: w,
    } = e,
    x = (
      f,
      d,
      h,
      y = null,
      m = null,
      b = null,
      E = void 0,
      S = null,
      C = !!d.dynamicChildren,
    ) => {
      if (f === d) return;
      f && !Tt(f, d) && ((y = V(f)), Fe(f, m, b, !0), (f = null)),
        d.patchFlag === -2 && ((C = !1), (d.dynamicChildren = null));
      const { type: _, ref: L, shapeFlag: I } = d;
      switch (_) {
        case qn:
          j(f, d, h, y);
          break;
        case Ae:
          F(f, d, h, y);
          break;
        case os:
          f == null && K(d, h, y, E);
          break;
        case Se:
          A(f, d, h, y, m, b, E, S, C);
          break;
        default:
          I & 1
            ? k(f, d, h, y, m, b, E, S, C)
            : I & 6
              ? te(f, d, h, y, m, b, E, S, C)
              : (I & 64 || I & 128) && _.process(f, d, h, y, m, b, E, S, C, ke);
      }
      L != null && m && gs(L, f && f.ref, b, d || f, !d);
    },
    j = (f, d, h, y) => {
      if (f == null) s((d.el = l(d.children)), h, y);
      else {
        const m = (d.el = f.el);
        d.children !== f.children && a(m, d.children);
      }
    },
    F = (f, d, h, y) => {
      f == null ? s((d.el = c(d.children || "")), h, y) : (d.el = f.el);
    },
    K = (f, d, h, y) => {
      [f.el, f.anchor] = w(f.children, d, h, y, f.el, f.anchor);
    },
    H = ({ el: f, anchor: d }, h, y) => {
      let m;
      for (; f && f !== d; ) (m = g(f)), s(f, h, y), (f = m);
      s(d, h, y);
    },
    T = ({ el: f, anchor: d }) => {
      let h;
      for (; f && f !== d; ) (h = g(f)), r(f), (f = h);
      r(d);
    },
    k = (f, d, h, y, m, b, E, S, C) => {
      d.type === "svg" ? (E = "svg") : d.type === "math" && (E = "mathml"),
        f == null ? le(d, h, y, m, b, E, S, C) : N(f, d, m, b, E, S, C);
    },
    le = (f, d, h, y, m, b, E, S) => {
      let C, _;
      const { props: L, shapeFlag: I, transition: O, dirs: D } = f;
      if (
        ((C = f.el = o(f.type, b, L && L.is, L)),
        I & 8
          ? u(C, f.children)
          : I & 16 && ge(f.children, C, null, y, m, rs(f, b), E, S),
        D && xt(f, null, y, "created"),
        ue(C, f, f.scopeId, E, y),
        L)
      ) {
        for (const ne in L)
          ne !== "value" && !Zt(ne) && i(C, ne, null, L[ne], b, y);
        "value" in L && i(C, "value", null, L.value, b),
          (_ = L.onVnodeBeforeMount) && ze(_, y, f);
      }
      D && xt(f, null, y, "beforeMount");
      const U = Nl(m, O);
      U && O.beforeEnter(C),
        s(C, d, h),
        ((_ = L && L.onVnodeMounted) || U || D) &&
          Le(() => {
            _ && ze(_, y, f), U && O.enter(C), D && xt(f, null, y, "mounted");
          }, m);
    },
    ue = (f, d, h, y, m) => {
      if ((h && v(f, h), y)) for (let b = 0; b < y.length; b++) v(f, y[b]);
      if (m) {
        let b = m.subTree;
        if (
          d === b ||
          (Ui(b.type) && (b.ssContent === d || b.ssFallback === d))
        ) {
          const E = m.vnode;
          ue(f, E, E.scopeId, E.slotScopeIds, m.parent);
        }
      }
    },
    ge = (f, d, h, y, m, b, E, S, C = 0) => {
      for (let _ = C; _ < f.length; _++) {
        const L = (f[_] = S ? dt(f[_]) : Ze(f[_]));
        x(null, L, d, h, y, m, b, E, S);
      }
    },
    N = (f, d, h, y, m, b, E) => {
      const S = (d.el = f.el);
      let { patchFlag: C, dynamicChildren: _, dirs: L } = d;
      C |= f.patchFlag & 16;
      const I = f.props || Q,
        O = d.props || Q;
      let D;
      if (
        (h && Ct(h, !1),
        (D = O.onVnodeBeforeUpdate) && ze(D, h, d, f),
        L && xt(d, f, h, "beforeUpdate"),
        h && Ct(h, !0),
        ((I.innerHTML && O.innerHTML == null) ||
          (I.textContent && O.textContent == null)) &&
          u(S, ""),
        _
          ? q(f.dynamicChildren, _, S, h, y, rs(d, m), b)
          : E || J(f, d, S, null, h, y, rs(d, m), b, !1),
        C > 0)
      ) {
        if (C & 16) Y(S, I, O, h, m);
        else if (
          (C & 2 && I.class !== O.class && i(S, "class", null, O.class, m),
          C & 4 && i(S, "style", I.style, O.style, m),
          C & 8)
        ) {
          const U = d.dynamicProps;
          for (let ne = 0; ne < U.length; ne++) {
            const Z = U[ne],
              Oe = I[Z],
              _e = O[Z];
            (_e !== Oe || Z === "value") && i(S, Z, Oe, _e, m, h);
          }
        }
        C & 1 && f.children !== d.children && u(S, d.children);
      } else !E && _ == null && Y(S, I, O, h, m);
      ((D = O.onVnodeUpdated) || L) &&
        Le(() => {
          D && ze(D, h, d, f), L && xt(d, f, h, "updated");
        }, y);
    },
    q = (f, d, h, y, m, b, E) => {
      for (let S = 0; S < d.length; S++) {
        const C = f[S],
          _ = d[S],
          L =
            C.el && (C.type === Se || !Tt(C, _) || C.shapeFlag & 70)
              ? p(C.el)
              : h;
        x(C, _, L, null, y, m, b, E, !0);
      }
    },
    Y = (f, d, h, y, m) => {
      if (d !== h) {
        if (d !== Q)
          for (const b in d) !Zt(b) && !(b in h) && i(f, b, d[b], null, m, y);
        for (const b in h) {
          if (Zt(b)) continue;
          const E = h[b],
            S = d[b];
          E !== S && b !== "value" && i(f, b, S, E, m, y);
        }
        "value" in h && i(f, "value", d.value, h.value, m);
      }
    },
    A = (f, d, h, y, m, b, E, S, C) => {
      const _ = (d.el = f ? f.el : l("")),
        L = (d.anchor = f ? f.anchor : l(""));
      let { patchFlag: I, dynamicChildren: O, slotScopeIds: D } = d;
      D && (S = S ? S.concat(D) : D),
        f == null
          ? (s(_, h, y), s(L, h, y), ge(d.children || [], h, L, m, b, E, S, C))
          : I > 0 && I & 64 && O && f.dynamicChildren
            ? (q(f.dynamicChildren, O, h, m, b, E, S),
              (d.key != null || (m && d === m.subTree)) && ki(f, d, !0))
            : J(f, d, h, L, m, b, E, S, C);
    },
    te = (f, d, h, y, m, b, E, S, C) => {
      (d.slotScopeIds = S),
        f == null
          ? d.shapeFlag & 512
            ? m.ctx.activate(d, h, y, E, C)
            : de(d, h, y, m, b, E, C)
          : Ge(f, d, C);
    },
    de = (f, d, h, y, m, b, E) => {
      const S = (f.component = Ql(f, y, m));
      if ((Vn(f) && (S.ctx.renderer = ke), ec(S, !1, E), S.asyncDep)) {
        if ((m && m.registerDep(S, ce, E), !f.el)) {
          const C = (S.subTree = ie(Ae));
          F(null, C, d, h);
        }
      } else ce(S, f, d, h, m, b, E);
    },
    Ge = (f, d, h) => {
      const y = (d.component = f.component);
      if (Gl(f, d, h))
        if (y.asyncDep && !y.asyncResolved) {
          re(y, d, h);
          return;
        } else (y.next = d), y.update();
      else (d.el = f.el), (y.vnode = d);
    },
    ce = (f, d, h, y, m, b, E) => {
      const S = () => {
        if (f.isMounted) {
          let { next: I, bu: O, u: D, parent: U, vnode: ne } = f;
          {
            const Pe = Bi(f);
            if (Pe) {
              I && ((I.el = ne.el), re(f, I, E)),
                Pe.asyncDep.then(() => {
                  f.isUnmounted || S();
                });
              return;
            }
          }
          let Z = I,
            Oe;
          Ct(f, !1),
            I ? ((I.el = ne.el), re(f, I, E)) : (I = ne),
            O && Cn(O),
            (Oe = I.props && I.props.onVnodeBeforeUpdate) && ze(Oe, U, I, ne),
            Ct(f, !0);
          const _e = is(f),
            Be = f.subTree;
          (f.subTree = _e),
            x(Be, _e, p(Be.el), V(Be), f, m, b),
            (I.el = _e.el),
            Z === null && ql(f, _e.el),
            D && Le(D, m),
            (Oe = I.props && I.props.onVnodeUpdated) &&
              Le(() => ze(Oe, U, I, ne), m);
        } else {
          let I;
          const { el: O, props: D } = d,
            { bm: U, m: ne, parent: Z, root: Oe, type: _e } = f,
            Be = Nt(d);
          if (
            (Ct(f, !1),
            U && Cn(U),
            !Be && (I = D && D.onVnodeBeforeMount) && ze(I, Z, d),
            Ct(f, !0),
            O && Ut)
          ) {
            const Pe = () => {
              (f.subTree = is(f)), Ut(O, f.subTree, f, m, null);
            };
            Be && _e.__asyncHydrate ? _e.__asyncHydrate(O, f, Pe) : Pe();
          } else {
            Oe.ce && Oe.ce._injectChildStyle(_e);
            const Pe = (f.subTree = is(f));
            x(null, Pe, h, y, f, m, b), (d.el = Pe.el);
          }
          if ((ne && Le(ne, m), !Be && (I = D && D.onVnodeMounted))) {
            const Pe = d;
            Le(() => ze(I, Z, Pe), m);
          }
          (d.shapeFlag & 256 ||
            (Z && Nt(Z.vnode) && Z.vnode.shapeFlag & 256)) &&
            f.a &&
            Le(f.a, m),
            (f.isMounted = !0),
            (d = h = y = null);
        }
      };
      f.scope.on();
      const C = (f.effect = new Ur(S));
      f.scope.off();
      const _ = (f.update = C.run.bind(C)),
        L = (f.job = C.runIfDirty.bind(C));
      (L.i = f), (L.id = f.uid), (C.scheduler = () => $s(L)), Ct(f, !0), _();
    },
    re = (f, d, h) => {
      d.component = f;
      const y = f.vnode.props;
      (f.vnode = d),
        (f.next = null),
        Pl(f, d.props, y, h),
        $l(f, d.children, h),
        bt(),
        Xs(f),
        _t();
    },
    J = (f, d, h, y, m, b, E, S, C = !1) => {
      const _ = f && f.children,
        L = f ? f.shapeFlag : 0,
        I = d.children,
        { patchFlag: O, shapeFlag: D } = d;
      if (O > 0) {
        if (O & 128) {
          Pt(_, I, h, y, m, b, E, S, C);
          return;
        } else if (O & 256) {
          we(_, I, h, y, m, b, E, S, C);
          return;
        }
      }
      D & 8
        ? (L & 16 && G(_, m, b), I !== _ && u(h, I))
        : L & 16
          ? D & 16
            ? Pt(_, I, h, y, m, b, E, S, C)
            : G(_, m, b, !0)
          : (L & 8 && u(h, ""), D & 16 && ge(I, h, y, m, b, E, S, C));
    },
    we = (f, d, h, y, m, b, E, S, C) => {
      (f = f || Dt), (d = d || Dt);
      const _ = f.length,
        L = d.length,
        I = Math.min(_, L);
      let O;
      for (O = 0; O < I; O++) {
        const D = (d[O] = C ? dt(d[O]) : Ze(d[O]));
        x(f[O], D, h, null, m, b, E, S, C);
      }
      _ > L ? G(f, m, b, !0, !1, I) : ge(d, h, y, m, b, E, S, C, I);
    },
    Pt = (f, d, h, y, m, b, E, S, C) => {
      let _ = 0;
      const L = d.length;
      let I = f.length - 1,
        O = L - 1;
      for (; _ <= I && _ <= O; ) {
        const D = f[_],
          U = (d[_] = C ? dt(d[_]) : Ze(d[_]));
        if (Tt(D, U)) x(D, U, h, null, m, b, E, S, C);
        else break;
        _++;
      }
      for (; _ <= I && _ <= O; ) {
        const D = f[I],
          U = (d[O] = C ? dt(d[O]) : Ze(d[O]));
        if (Tt(D, U)) x(D, U, h, null, m, b, E, S, C);
        else break;
        I--, O--;
      }
      if (_ > I) {
        if (_ <= O) {
          const D = O + 1,
            U = D < L ? d[D].el : y;
          for (; _ <= O; )
            x(null, (d[_] = C ? dt(d[_]) : Ze(d[_])), h, U, m, b, E, S, C), _++;
        }
      } else if (_ > O) for (; _ <= I; ) Fe(f[_], m, b, !0), _++;
      else {
        const D = _,
          U = _,
          ne = new Map();
        for (_ = U; _ <= O; _++) {
          const Me = (d[_] = C ? dt(d[_]) : Ze(d[_]));
          Me.key != null && ne.set(Me.key, _);
        }
        let Z,
          Oe = 0;
        const _e = O - U + 1;
        let Be = !1,
          Pe = 0;
        const Wt = new Array(_e);
        for (_ = 0; _ < _e; _++) Wt[_] = 0;
        for (_ = D; _ <= I; _++) {
          const Me = f[_];
          if (Oe >= _e) {
            Fe(Me, m, b, !0);
            continue;
          }
          let qe;
          if (Me.key != null) qe = ne.get(Me.key);
          else
            for (Z = U; Z <= O; Z++)
              if (Wt[Z - U] === 0 && Tt(Me, d[Z])) {
                qe = Z;
                break;
              }
          qe === void 0
            ? Fe(Me, m, b, !0)
            : ((Wt[qe - U] = _ + 1),
              qe >= Pe ? (Pe = qe) : (Be = !0),
              x(Me, d[qe], h, null, m, b, E, S, C),
              Oe++);
        }
        const Gs = Be ? Hl(Wt) : Dt;
        for (Z = Gs.length - 1, _ = _e - 1; _ >= 0; _--) {
          const Me = U + _,
            qe = d[Me],
            qs = Me + 1 < L ? d[Me + 1].el : y;
          Wt[_] === 0
            ? x(null, qe, h, qs, m, b, E, S, C)
            : Be && (Z < 0 || _ !== Gs[Z] ? Qe(qe, h, qs, 2) : Z--);
        }
      }
    },
    Qe = (f, d, h, y, m = null) => {
      const { el: b, type: E, transition: S, children: C, shapeFlag: _ } = f;
      if (_ & 6) {
        Qe(f.component.subTree, d, h, y);
        return;
      }
      if (_ & 128) {
        f.suspense.move(d, h, y);
        return;
      }
      if (_ & 64) {
        E.move(f, d, h, ke);
        return;
      }
      if (E === Se) {
        s(b, d, h);
        for (let I = 0; I < C.length; I++) Qe(C[I], d, h, y);
        s(f.anchor, d, h);
        return;
      }
      if (E === os) {
        H(f, d, h);
        return;
      }
      if (y !== 2 && _ & 1 && S)
        if (y === 0) S.beforeEnter(b), s(b, d, h), Le(() => S.enter(b), m);
        else {
          const { leave: I, delayLeave: O, afterLeave: D } = S,
            U = () => s(b, d, h),
            ne = () => {
              I(b, () => {
                U(), D && D();
              });
            };
          O ? O(b, U, ne) : ne();
        }
      else s(b, d, h);
    },
    Fe = (f, d, h, y = !1, m = !1) => {
      const {
        type: b,
        props: E,
        ref: S,
        children: C,
        dynamicChildren: _,
        shapeFlag: L,
        patchFlag: I,
        dirs: O,
        cacheIndex: D,
      } = f;
      if (
        (I === -2 && (m = !1),
        S != null && gs(S, null, h, f, !0),
        D != null && (d.renderCache[D] = void 0),
        L & 256)
      ) {
        d.ctx.deactivate(f);
        return;
      }
      const U = L & 1 && O,
        ne = !Nt(f);
      let Z;
      if ((ne && (Z = E && E.onVnodeBeforeUnmount) && ze(Z, d, f), L & 6))
        M(f.component, h, y);
      else {
        if (L & 128) {
          f.suspense.unmount(h, y);
          return;
        }
        U && xt(f, null, d, "beforeUnmount"),
          L & 64
            ? f.type.remove(f, d, h, ke, y)
            : _ && !_.hasOnce && (b !== Se || (I > 0 && I & 64))
              ? G(_, d, h, !1, !0)
              : ((b === Se && I & 384) || (!m && L & 16)) && G(C, d, h),
          y && Kt(f);
      }
      ((ne && (Z = E && E.onVnodeUnmounted)) || U) &&
        Le(() => {
          Z && ze(Z, d, f), U && xt(f, null, d, "unmounted");
        }, h);
    },
    Kt = (f) => {
      const { type: d, el: h, anchor: y, transition: m } = f;
      if (d === Se) {
        Zn(h, y);
        return;
      }
      if (d === os) {
        T(f);
        return;
      }
      const b = () => {
        r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
      };
      if (f.shapeFlag & 1 && m && !m.persisted) {
        const { leave: E, delayLeave: S } = m,
          C = () => E(h, b);
        S ? S(f.el, b, C) : C();
      } else b();
    },
    Zn = (f, d) => {
      let h;
      for (; f !== d; ) (h = g(f)), r(f), (f = h);
      r(d);
    },
    M = (f, d, h) => {
      const { bum: y, scope: m, job: b, subTree: E, um: S, m: C, a: _ } = f;
      lr(C),
        lr(_),
        y && Cn(y),
        m.stop(),
        b && ((b.flags |= 8), Fe(E, f, d, h)),
        S && Le(S, d),
        Le(() => {
          f.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    G = (f, d, h, y = !1, m = !1, b = 0) => {
      for (let E = b; E < f.length; E++) Fe(f[E], d, h, y, m);
    },
    V = (f) => {
      if (f.shapeFlag & 6) return V(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const d = g(f.anchor || f.el),
        h = d && d[cl];
      return h ? g(h) : d;
    };
  let X = !1;
  const me = (f, d, h) => {
      f == null
        ? d._vnode && Fe(d._vnode, null, null, !0)
        : x(d._vnode || null, f, d, null, null, null, h),
        (d._vnode = f),
        X || ((X = !0), Xs(), fi(), (X = !1));
    },
    ke = {
      p: x,
      um: Fe,
      m: Qe,
      r: Kt,
      mt: de,
      mc: ge,
      pc: J,
      pbc: q,
      n: V,
      o: e,
    };
  let Vt, Ut;
  return { render: me, hydrate: Vt, createApp: Al(me, Vt) };
}
function rs({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Ct({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Nl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ki(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (P(s) && P(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = dt(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && ki(o, l)),
        l.type === qn && (l.el = o.el);
    }
}
function Hl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < a ? (i = l + 1) : (o = l);
      a < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
function Bi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Bi(t);
}
function lr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const kl = Symbol.for("v-scx"),
  Bl = () => en(kl);
function it(e, t, n) {
  return ji(e, t, n);
}
function ji(e, t, n = Q) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = ae({}, n),
    c = (t && s) || (!t && i !== "post");
  let a;
  if (an) {
    if (i === "sync") {
      const v = Bl();
      a = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!c) {
      const v = () => {};
      return (v.stop = Ye), (v.resume = Ye), (v.pause = Ye), v;
    }
  }
  const u = ye;
  l.call = (v, w, x) => We(v, u, w, x);
  let p = !1;
  i === "post"
    ? (l.scheduler = (v) => {
        Le(v, u && u.suspense);
      })
    : i !== "sync" &&
      ((p = !0),
      (l.scheduler = (v, w) => {
        w ? v() : $s(v);
      })),
    (l.augmentJob = (v) => {
      t && (v.flags |= 4),
        p && ((v.flags |= 2), u && ((v.id = u.uid), (v.i = u)));
    });
  const g = rl(e, t, l);
  return an && (a ? a.push(g) : c && g()), g;
}
function jl(e, t, n) {
  const s = this.proxy,
    r = oe(e) ? (e.includes(".") ? Ki(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  $(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = mn(this),
    l = ji(r, i.bind(s), n);
  return o(), l;
}
function Ki(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const Kl = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${He(t)}Modifiers`] || e[`${yt(t)}Modifiers`];
function Vl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  let r = n;
  const i = t.startsWith("update:"),
    o = i && Kl(s, t.slice(7));
  o &&
    (o.trim && (r = n.map((u) => (oe(u) ? u.trim() : u))),
    o.number && (r = n.map(Hr)));
  let l,
    c = s[(l = Yn(t))] || s[(l = Yn(He(t)))];
  !c && i && (c = s[(l = Yn(yt(t)))]), c && We(c, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), We(a, e, 6, r);
  }
}
function Vi(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!$(e)) {
    const c = (a) => {
      const u = Vi(a, t, !0);
      u && ((l = !0), ae(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !i && !l
    ? (ee(e) && s.set(e, null), null)
    : (P(i) ? i.forEach((c) => (o[c] = null)) : ae(o, i),
      ee(e) && s.set(e, o),
      o);
}
function Gn(e, t) {
  return !e || !Rn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      z(e, t[0].toLowerCase() + t.slice(1)) || z(e, yt(t)) || z(e, t));
}
function is(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: a,
      renderCache: u,
      props: p,
      data: g,
      setupState: v,
      ctx: w,
      inheritAttrs: x,
    } = e,
    j = Pn(e);
  let F, K;
  try {
    if (n.shapeFlag & 4) {
      const T = r || s,
        k = T;
      (F = Ze(a.call(k, T, u, p, v, g, w))), (K = l);
    } else {
      const T = t;
      (F = Ze(
        T.length > 1 ? T(p, { attrs: l, slots: o, emit: c }) : T(p, null),
      )),
        (K = t.props ? l : Ul(l));
    }
  } catch (T) {
    (tn.length = 0), Kn(T, e, 1), (F = ie(Ae));
  }
  let H = F;
  if (K && x !== !1) {
    const T = Object.keys(K),
      { shapeFlag: k } = H;
    T.length &&
      k & 7 &&
      (i && T.some(ws) && (K = Wl(K, i)), (H = vt(H, K, !1, !0)));
  }
  return (
    n.dirs &&
      ((H = vt(H, null, !1, !0)),
      (H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Ot(H, n.transition),
    (F = H),
    Pn(j),
    F
  );
}
const Ul = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Rn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Wl = (e, t) => {
    const n = {};
    for (const s in e) (!ws(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Gl(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    a = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? cr(s, o, a) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const g = u[p];
        if (o[g] !== s[g] && !Gn(a, g)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? cr(s, o, a)
            : !0
          : !!o;
  return !1;
}
function cr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !Gn(n, i)) return !0;
  }
  return !1;
}
function ql({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Ui = (e) => e.__isSuspense;
function zl(e, t) {
  t && t.pendingBranch
    ? P(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ll(e);
}
const Se = Symbol.for("v-fgt"),
  qn = Symbol.for("v-txt"),
  Ae = Symbol.for("v-cmt"),
  os = Symbol.for("v-stc"),
  tn = [];
let $e = null;
function fe(e = !1) {
  tn.push(($e = e ? null : []));
}
function Jl() {
  tn.pop(), ($e = tn[tn.length - 1] || null);
}
let cn = 1;
function fr(e) {
  (cn += e), e < 0 && $e && ($e.hasOnce = !0);
}
function Wi(e) {
  return (
    (e.dynamicChildren = cn > 0 ? $e || Dt : null),
    Jl(),
    cn > 0 && $e && $e.push(e),
    e
  );
}
function mt(e, t, n, s, r, i) {
  return Wi(R(e, t, n, s, r, i, !0));
}
function De(e, t, n, s, r) {
  return Wi(ie(e, t, n, s, r, !0));
}
function fn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gi = ({ key: e }) => e ?? null,
  Sn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? oe(e) || he(e) || $(e)
        ? { i: pe, r: e, k: t, f: !!n }
        : e
      : null
  );
function R(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === Se ? 0 : 1,
  o = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Gi(t),
    ref: t && Sn(t),
    scopeId: ui,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: pe,
  };
  return (
    l
      ? (Ks(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= oe(n) ? 8 : 16),
    cn > 0 &&
      !o &&
      $e &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      $e.push(c),
    c
  );
}
const ie = Zl;
function Zl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Si) && (e = Ae), fn(e))) {
    const l = vt(e, t, !0);
    return (
      n && Ks(l, n),
      cn > 0 &&
        !i &&
        $e &&
        (l.shapeFlag & 6 ? ($e[$e.indexOf(e)] = l) : $e.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((ic(e) && (e = e.__vccOpts), t)) {
    t = Bs(t);
    let { class: l, style: c } = t;
    l && !oe(l) && (t.class = Ue(l)),
      ee(c) && (Ds(c) && !P(c) && (c = ae({}, c)), (t.style = Xe(c)));
  }
  const o = oe(e) ? 1 : Ui(e) ? 128 : di(e) ? 64 : ee(e) ? 4 : $(e) ? 2 : 0;
  return R(e, t, n, s, r, o, i, !0);
}
function Bs(e) {
  return e ? (Ds(e) || Li(e) ? ae({}, e) : e) : null;
}
function vt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    a = t ? zi(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && Gi(a),
      ref:
        t && t.ref
          ? n && i
            ? P(i)
              ? i.concat(Sn(t))
              : [i, Sn(t)]
            : Sn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Se ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && vt(e.ssContent),
      ssFallback: e.ssFallback && vt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return c && s && Ot(u, c.clone(u)), u;
}
function js(e = " ", t = 0) {
  return ie(qn, null, e, t);
}
function qi(e = "", t = !1) {
  return t ? (fe(), De(Ae, null, e)) : ie(Ae, null, e);
}
function Ze(e) {
  return e == null || typeof e == "boolean"
    ? ie(Ae)
    : P(e)
      ? ie(Se, null, e.slice())
      : fn(e)
        ? dt(e)
        : ie(qn, null, String(e));
}
function dt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : vt(e);
}
function Ks(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (P(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ks(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Li(t)
        ? (t._ctx = pe)
        : r === 3 &&
          pe &&
          (pe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    $(t)
      ? ((t = { default: t, _ctx: pe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [js(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function zi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ue([t.class, s.class]));
      else if (r === "style") t.style = Xe([t.style, s.style]);
      else if (Rn(r)) {
        const i = t[r],
          o = s[r];
        o &&
          i !== o &&
          !(P(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function ze(e, t, n, s = null) {
  We(e, t, 7, [n, s]);
}
const Yl = Ai();
let Xl = 0;
function Ql(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Yl,
    i = {
      uid: Xl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new wo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: $i(s, r),
      emitsOptions: Vi(s, r),
      emit: null,
      emitted: null,
      propsDefaults: Q,
      inheritAttrs: s.inheritAttrs,
      ctx: Q,
      data: Q,
      props: Q,
      attrs: Q,
      slots: Q,
      refs: Q,
      setupState: Q,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Vl.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let ye = null;
const Ji = () => ye || pe;
let Ln, _s;
{
  const e = kn(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
        }
      );
    };
  (Ln = t("__VUE_INSTANCE_SETTERS__", (n) => (ye = n))),
    (_s = t("__VUE_SSR_SETTERS__", (n) => (an = n)));
}
const mn = (e) => {
    const t = ye;
    return (
      Ln(e),
      e.scope.on(),
      () => {
        e.scope.off(), Ln(t);
      }
    );
  },
  ar = () => {
    ye && ye.scope.off(), Ln(null);
  };
function Zi(e) {
  return e.vnode.shapeFlag & 4;
}
let an = !1;
function ec(e, t = !1, n = !1) {
  t && _s(t);
  const { props: s, children: r } = e.vnode,
    i = Zi(e);
  Ol(e, s, i, t), Dl(e, r, n);
  const o = i ? tc(e, t) : void 0;
  return t && _s(!1), o;
}
function tc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, xl));
  const { setup: s } = n;
  if (s) {
    bt();
    const r = (e.setupContext = s.length > 1 ? sc(e) : null),
      i = mn(e),
      o = gn(s, e, 0, [e.props, r]),
      l = $r(o);
    if ((_t(), i(), (l || e.sp) && !Nt(e) && yi(e), l)) {
      if ((o.then(ar, ar), t))
        return o
          .then((c) => {
            ur(e, c, t);
          })
          .catch((c) => {
            Kn(c, e, 0);
          });
      e.asyncDep = o;
    } else ur(e, o, t);
  } else Yi(e, t);
}
function ur(e, t, n) {
  $(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ee(t) && (e.setupState = oi(t)),
    Yi(e, n);
}
let dr;
function Yi(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && dr && !s.render) {
      const r = s.template || Hs(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          a = ae(ae({ isCustomElement: i, delimiters: l }, o), c);
        s.render = dr(r, a);
      }
    }
    e.render = s.render || Ye;
  }
  {
    const r = mn(e);
    bt();
    try {
      Cl(e);
    } finally {
      _t(), r();
    }
  }
}
const nc = {
  get(e, t) {
    return xe(e, "get", ""), e[t];
  },
};
function sc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, nc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function zn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(oi(Go(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Qt) return Qt[n](e);
          },
          has(t, n) {
            return n in t || n in Qt;
          },
        }))
    : e.proxy;
}
function rc(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function ic(e) {
  return $(e) && "__vccOpts" in e;
}
const je = (e, t) => nl(e, t, an);
function oc(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ee(t) && !P(t)
      ? fn(t)
        ? ie(e, null, [t])
        : ie(e, t)
      : ie(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && fn(n) && (n = [n]),
      ie(e, t, n));
}
const lc = "3.5.12";
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let xs;
const pr = typeof window < "u" && window.trustedTypes;
if (pr)
  try {
    xs = pr.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Xi = xs ? (e) => xs.createHTML(e) : (e) => e,
  cc = "http://www.w3.org/2000/svg",
  fc = "http://www.w3.org/1998/Math/MathML",
  nt = typeof document < "u" ? document : null,
  hr = nt && nt.createElement("template"),
  ac = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? nt.createElementNS(cc, e)
          : t === "mathml"
            ? nt.createElementNS(fc, e)
            : n
              ? nt.createElement(e, { is: n })
              : nt.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => nt.createTextNode(e),
    createComment: (e) => nt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => nt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        hr.innerHTML = Xi(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const l = hr.content;
        if (s === "svg" || s === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  ct = "transition",
  qt = "animation",
  Bt = Symbol("_vtc"),
  Qi = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  eo = ae({}, hi, Qi),
  uc = (e) => ((e.displayName = "Transition"), (e.props = eo), e),
  dc = uc((e, { slots: t }) => oc(al, to(e), t)),
  St = (e, t = []) => {
    P(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  gr = (e) => (e ? (P(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function to(e) {
  const t = {};
  for (const A in e) A in Qi || (t[A] = e[A]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: a = o,
      appearToClass: u = l,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: g = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    w = pc(r),
    x = w && w[0],
    j = w && w[1],
    {
      onBeforeEnter: F,
      onEnter: K,
      onEnterCancelled: H,
      onLeave: T,
      onLeaveCancelled: k,
      onBeforeAppear: le = F,
      onAppear: ue = K,
      onAppearCancelled: ge = H,
    } = t,
    N = (A, te, de) => {
      ft(A, te ? u : l), ft(A, te ? a : o), de && de();
    },
    q = (A, te) => {
      (A._isLeaving = !1), ft(A, p), ft(A, v), ft(A, g), te && te();
    },
    Y = (A) => (te, de) => {
      const Ge = A ? ue : K,
        ce = () => N(te, A, de);
      St(Ge, [te, ce]),
        mr(() => {
          ft(te, A ? c : i), tt(te, A ? u : l), gr(Ge) || vr(te, s, x, ce);
        });
    };
  return ae(t, {
    onBeforeEnter(A) {
      St(F, [A]), tt(A, i), tt(A, o);
    },
    onBeforeAppear(A) {
      St(le, [A]), tt(A, c), tt(A, a);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(A, te) {
      A._isLeaving = !0;
      const de = () => q(A, te);
      tt(A, p),
        tt(A, g),
        so(),
        mr(() => {
          A._isLeaving && (ft(A, p), tt(A, v), gr(T) || vr(A, s, j, de));
        }),
        St(T, [A, de]);
    },
    onEnterCancelled(A) {
      N(A, !1), St(H, [A]);
    },
    onAppearCancelled(A) {
      N(A, !0), St(ge, [A]);
    },
    onLeaveCancelled(A) {
      q(A), St(k, [A]);
    },
  });
}
function pc(e) {
  if (e == null) return null;
  if (ee(e)) return [ls(e.enter), ls(e.leave)];
  {
    const t = ls(e);
    return [t, t];
  }
}
function ls(e) {
  return mo(e);
}
function tt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Bt] || (e[Bt] = new Set())).add(t);
}
function ft(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Bt];
  n && (n.delete(t), n.size || (e[Bt] = void 0));
}
function mr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hc = 0;
function vr(e, t, n, s) {
  const r = (e._endId = ++hc),
    i = () => {
      r === e._endId && s();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = no(e, t);
  if (!o) return s();
  const a = o + "end";
  let u = 0;
  const p = () => {
      e.removeEventListener(a, g), i();
    },
    g = (v) => {
      v.target === e && ++u >= c && p();
    };
  setTimeout(() => {
    u < c && p();
  }, l + 1),
    e.addEventListener(a, g);
}
function no(e, t) {
  const n = window.getComputedStyle(e),
    s = (w) => (n[w] || "").split(", "),
    r = s(`${ct}Delay`),
    i = s(`${ct}Duration`),
    o = yr(r, i),
    l = s(`${qt}Delay`),
    c = s(`${qt}Duration`),
    a = yr(l, c);
  let u = null,
    p = 0,
    g = 0;
  t === ct
    ? o > 0 && ((u = ct), (p = o), (g = i.length))
    : t === qt
      ? a > 0 && ((u = qt), (p = a), (g = c.length))
      : ((p = Math.max(o, a)),
        (u = p > 0 ? (o > a ? ct : qt) : null),
        (g = u ? (u === ct ? i.length : c.length) : 0));
  const v =
    u === ct && /\b(transform|all)(,|$)/.test(s(`${ct}Property`).toString());
  return { type: u, timeout: p, propCount: g, hasTransform: v };
}
function yr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => br(n) + br(e[s])));
}
function br(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function so() {
  return document.body.offsetHeight;
}
function gc(e, t, n) {
  const s = e[Bt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t);
}
const _r = Symbol("_vod"),
  mc = Symbol("_vsh"),
  vc = Symbol(""),
  yc = /(^|;)\s*display\s*:/;
function bc(e, t, n) {
  const s = e.style,
    r = oe(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && wn(s, l, "");
        }
      else for (const o in t) n[o] == null && wn(s, o, "");
    for (const o in n) o === "display" && (i = !0), wn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[vc];
      o && (n += ";" + o), (s.cssText = n), (i = yc.test(n));
    }
  } else t && e.removeAttribute("style");
  _r in e && ((e[_r] = i ? s.display : ""), e[mc] && (s.display = "none"));
}
const xr = /\s*!important$/;
function wn(e, t, n) {
  if (P(n)) n.forEach((s) => wn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = _c(e, t);
    xr.test(n)
      ? e.setProperty(yt(s), n.replace(xr, ""), "important")
      : (e[s] = n);
  }
}
const Cr = ["Webkit", "Moz", "ms"],
  cs = {};
function _c(e, t) {
  const n = cs[t];
  if (n) return n;
  let s = He(t);
  if (s !== "filter" && s in e) return (cs[t] = s);
  s = Hn(s);
  for (let r = 0; r < Cr.length; r++) {
    const i = Cr[r] + s;
    if (i in e) return (cs[t] = i);
  }
  return t;
}
const Sr = "http://www.w3.org/1999/xlink";
function wr(e, t, n, s, r, i = Co(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Sr, t.slice(6, t.length))
      : e.setAttributeNS(Sr, t, n)
    : n == null || (i && !Br(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : Ve(n) ? String(n) : n);
}
function Tr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (l !== c || !("_value" in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = Br(n))
      : n == null && l === "string"
        ? ((n = ""), (o = !0))
        : l === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(r || t);
}
function Vs(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function xc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Er = Symbol("_vei");
function Cc(e, t, n, s, r = null) {
  const i = e[Er] || (e[Er] = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, c] = Sc(t);
    if (s) {
      const a = (i[t] = Ec(s, r));
      Vs(e, l, a, c);
    } else o && (xc(e, l, o, c), (i[t] = void 0));
  }
}
const Ir = /(?:Once|Passive|Capture)$/;
function Sc(e) {
  let t;
  if (Ir.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Ir)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t];
}
let fs = 0;
const wc = Promise.resolve(),
  Tc = () => fs || (wc.then(() => (fs = 0)), (fs = Date.now()));
function Ec(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    We(Ic(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Tc()), n;
}
function Ic(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Ar = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ac = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class"
      ? gc(e, s, o)
      : t === "style"
        ? bc(e, n, s)
        : Rn(t)
          ? ws(t) || Cc(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Oc(e, t, s, o)
              )
            ? (Tr(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                wr(e, t, s, o, i, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !oe(s))
              ? Tr(e, He(t), s, i, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                wr(e, t, s, o));
  };
function Oc(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Ar(t) && $(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ar(t) && oe(n) ? !1 : t in e;
}
const ro = new WeakMap(),
  io = new WeakMap(),
  Dn = Symbol("_moveCb"),
  Or = Symbol("_enterCb"),
  Pc = (e) => (delete e.props.mode, e),
  Mc = Pc({
    name: "TransitionGroup",
    props: ae({}, eo, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Ji(),
        s = pi();
      let r, i;
      return (
        _i(() => {
          if (!r.length) return;
          const o = e.moveClass || `${e.name || "v"}-move`;
          if (!Rc(r[0].el, n.vnode.el, o)) return;
          r.forEach(Dc), r.forEach($c);
          const l = r.filter(Fc);
          so(),
            l.forEach((c) => {
              const a = c.el,
                u = a.style;
              tt(a, o),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const p = (a[Dn] = (g) => {
                (g && g.target !== a) ||
                  ((!g || /transform$/.test(g.propertyName)) &&
                    (a.removeEventListener("transitionend", p),
                    (a[Dn] = null),
                    ft(a, o)));
              });
              a.addEventListener("transitionend", p);
            });
        }),
        () => {
          const o = B(e),
            l = to(o);
          let c = o.tag || Se;
          if (((r = []), i))
            for (let a = 0; a < i.length; a++) {
              const u = i[a];
              u.el &&
                u.el instanceof Element &&
                (r.push(u),
                Ot(u, ln(u, l, s, n)),
                ro.set(u, u.el.getBoundingClientRect()));
            }
          i = t.default ? Fs(t.default()) : [];
          for (let a = 0; a < i.length; a++) {
            const u = i[a];
            u.key != null && Ot(u, ln(u, l, s, n));
          }
          return ie(c, null, i);
        }
      );
    },
  }),
  Lc = Mc;
function Dc(e) {
  const t = e.el;
  t[Dn] && t[Dn](), t[Or] && t[Or]();
}
function $c(e) {
  io.set(e, e.el.getBoundingClientRect());
}
function Fc(e) {
  const t = ro.get(e),
    n = io.get(e),
    s = t.left - n.left,
    r = t.top - n.top;
  if (s || r) {
    const i = e.el.style;
    return (
      (i.transform = i.webkitTransform = `translate(${s}px,${r}px)`),
      (i.transitionDuration = "0s"),
      e
    );
  }
}
function Rc(e, t, n) {
  const s = e.cloneNode(),
    r = e[Bt];
  r &&
    r.forEach((l) => {
      l.split(/\s+/).forEach((c) => c && s.classList.remove(c));
    }),
    n.split(/\s+/).forEach((l) => l && s.classList.add(l)),
    (s.style.display = "none");
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: o } = no(s);
  return i.removeChild(s), o;
}
const $n = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return P(t) ? (n) => Cn(t, n) : t;
  },
  kt = Symbol("_assign"),
  Nc = {
    deep: !0,
    created(e, t, n) {
      (e[kt] = $n(n)),
        Vs(e, "change", () => {
          const s = e._modelValue,
            r = un(e),
            i = e.checked,
            o = e[kt];
          if (P(s)) {
            const l = Is(s, r),
              c = l !== -1;
            if (i && !c) o(s.concat(r));
            else if (!i && c) {
              const a = [...s];
              a.splice(l, 1), o(a);
            }
          } else if (jt(s)) {
            const l = new Set(s);
            i ? l.add(r) : l.delete(r), o(l);
          } else o(oo(e, i));
        });
    },
    mounted: Pr,
    beforeUpdate(e, t, n) {
      (e[kt] = $n(n)), Pr(e, t, n);
    },
  };
function Pr(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let r;
  if (P(t)) r = Is(t, s.props.value) > -1;
  else if (jt(t)) r = t.has(s.props.value);
  else {
    if (t === n) return;
    r = pn(t, oo(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const Hc = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = jt(t);
    Vs(e, "change", () => {
      const i = Array.prototype.filter
        .call(e.options, (o) => o.selected)
        .map((o) => (n ? Hr(un(o)) : un(o)));
      e[kt](e.multiple ? (r ? new Set(i) : i) : i[0]),
        (e._assigning = !0),
        On(() => {
          e._assigning = !1;
        });
    }),
      (e[kt] = $n(s));
  },
  mounted(e, { value: t }) {
    Mr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[kt] = $n(n);
  },
  updated(e, { value: t }) {
    e._assigning || Mr(e, t);
  },
};
function Mr(e, t) {
  const n = e.multiple,
    s = P(t);
  if (!(n && !s && !jt(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r],
        l = un(o);
      if (n)
        if (s) {
          const c = typeof l;
          c === "string" || c === "number"
            ? (o.selected = t.some((a) => String(a) === String(l)))
            : (o.selected = Is(t, l) > -1);
        } else o.selected = t.has(l);
      else if (pn(un(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function un(e) {
  return "_value" in e ? e._value : e.value;
}
function oo(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const kc = ["ctrl", "shift", "alt", "meta"],
  Bc = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => kc.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Cs = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = Bc[t[o]];
          if (l && l(r, t)) return;
        }
        return e(r, ...i);
      })
    );
  },
  jc = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Kc = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!("key" in r)) return;
        const i = yt(r.key);
        if (t.some((o) => o === i || jc[o] === i)) return e(r);
      })
    );
  },
  Vc = ae({ patchProp: Ac }, ac);
let Lr;
function Uc() {
  return Lr || (Lr = Fl(Vc));
}
const Wc = (...e) => {
  const t = Uc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = qc(s);
      if (!r) return;
      const i = t._component;
      !$(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
      const o = n(r, !1, Gc(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function Gc(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function qc(e) {
  return oe(e) ? document.querySelector(e) : e;
}
function zc(e) {
  return Vr() ? (To(e), !0) : !1;
}
function Us(e) {
  return typeof e == "function" ? e() : W(e);
}
const Jc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Zc = Object.prototype.toString,
  Yc = (e) => Zc.call(e) === "[object Object]",
  Xc = () => {};
function Qc(e, t, n = !1) {
  return t.reduce(
    (s, r) => (r in e && (!n || e[r] !== void 0) && (s[r] = e[r]), s),
    {},
  );
}
function ef(e, t = {}) {
  if (!he(e)) return Xo(e);
  const n = Array.isArray(e.value)
    ? Array.from({ length: e.value.length })
    : {};
  for (const s in e.value)
    n[s] = Yo(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var i;
        if ((i = Us(t.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            (l[s] = r), (e.value = l);
          } else {
            const l = { ...e.value, [s]: r };
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)),
              (e.value = l);
          }
        else e.value[s] = r;
      },
    }));
  return n;
}
const lo = Jc ? window : void 0;
function tf(e) {
  var t;
  const n = Us(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function nn(...e) {
  let t, n, s, r;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = lo))
      : ([t, n, s, r] = e),
    !t)
  )
    return Xc;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [],
    o = () => {
      i.forEach((u) => u()), (i.length = 0);
    },
    l = (u, p, g, v) => (
      u.addEventListener(p, g, v), () => u.removeEventListener(p, g, v)
    ),
    c = it(
      () => [tf(t), Us(r)],
      ([u, p]) => {
        if ((o(), !u)) return;
        const g = Yc(p) ? { ...p } : p;
        i.push(...n.flatMap((v) => s.map((w) => l(u, v, w, g))));
      },
      { immediate: !0, flush: "post" },
    ),
    a = () => {
      c(), o();
    };
  return zc(a), a;
}
const co = {
    x: 0,
    y: 0,
    pointerId: 0,
    pressure: 0,
    tiltX: 0,
    tiltY: 0,
    width: 0,
    height: 0,
    twist: 0,
    pointerType: null,
  },
  nf = Object.keys(co);
function fo(e = {}) {
  const { target: t = lo } = e,
    n = be(!1),
    s = be(e.initialValue || {});
  Object.assign(s.value, co, s.value);
  const r = (i) => {
    (n.value = !0),
      !(e.pointerTypes && !e.pointerTypes.includes(i.pointerType)) &&
        (s.value = Qc(i, nf, !1));
  };
  if (t) {
    const i = { passive: !0 };
    nn(t, ["pointerdown", "pointermove", "pointerup"], r, i),
      nn(t, "pointerleave", () => (n.value = !1), i);
  }
  return { ...ef(s), isInside: n };
}
const zt = be(void 0),
  vn = () => {
    function e(n) {
      return zt.value === void 0 ? !1 : n === zt.value.payload;
    }
    function t(n) {
      return zt.value === void 0
        ? !1
        : zt.value.dropTargets.some((s) => s !== void 0 && n.includes(s));
    }
    return { isMoving: e, movingItemCanTarget: t, movingItem: zt };
  },
  { movingItemCanTarget: sf } = vn(),
  pt = hn({}),
  Ws = be(void 0),
  rf = je(() => {
    var e;
    return (e = Ws.value) == null ? void 0 : e.identifier;
  });
it(
  () =>
    Reflect.ownKeys(pt)
      .filter((e) => sf([e, pt[e].group]))
      .filter((e) => pt[e].pointerIsAbove)
      .toSorted((e, t) => pt[t].stackLevel - pt[e].stackLevel)
      .map((e) => pt[e]),
  (e) => {
    Ws.value = e.length ? e.at(0) : void 0;
  },
);
it(
  () => Ws.value,
  (e, t) => {
    e !== t && (t && t.leaveList(), e && e.enterList());
  },
);
const of = () => {
    function e(n, s, r, i, o, l) {
      pt[n] = {
        identifier: n,
        group: s,
        stackLevel: r,
        pointerIsAbove: i,
        enterList: o,
        leaveList: l,
      };
    }
    function t(n) {
      delete pt[n];
    }
    return { addList: e, removeList: t, targetedList: rf };
  },
  Tn = ot({
    __name: "PointerElement",
    props: { tag: { type: String, default: "div" } },
    emits: ["pointer-enter", "pointer-leave"],
    setup(e, { expose: t, emit: n }) {
      const s = be(),
        { x: r, y: i } = fo(),
        o = je(() => {
          const a = s.value.getBoundingClientRect();
          return (
            r.value >= a.x &&
            r.value <= a.x + a.width &&
            i.value >= a.y &&
            i.value <= a.y + a.height
          );
        }),
        l = n;
      return (
        t({ isAbove: o }),
        Wn(() => {
          it(o, (c, a) => {
            c && !a
              ? l("pointer-enter", s.value)
              : a && !c && l("pointer-leave", s.value);
          });
        }),
        (c, a) => (
          fe(),
          De(
            Ns(e.tag),
            { ref_key: "PointerElement", ref: s },
            {
              default: ve(() => [Et(c.$slots, "default", kr(Bs(c.$attrs)))]),
              _: 3,
            },
            512,
          )
        )
      );
    },
  }),
  Jn = ot({
    __name: "ArrangeableList",
    props: {
      tag: {},
      listItemTag: {},
      options: {},
      list: {},
      listKey: {},
      identifier: {},
      meta: {},
      group: {},
      targets: {},
    },
    emits: ["liftItem", "dropItem"],
    setup(e, { emit: t }) {
      const n = e,
        s = Symbol(),
        r = je(() => n.identifier ?? s),
        i = {
          defaultItemClass: "",
          pickedItemClass: "arrangeable-list__invisible",
          hoveredOverListClass: "",
          listTransition: {
            moveClass: "arrangeable-list__transition-all",
            leaveActiveClass: "arrangeable-list__absolute",
          },
          hoverTransitionClass: "arrangeable-list__transition-all-but-location",
          hoverClass: "",
          homingEffect: !0,
          handle: !1,
          liftDelay: 0,
        },
        o = je(() => ({ ...i, ...n.options })),
        l = je(() =>
          typeof o.value.homingEffect == "boolean" && o.value.homingEffect
            ? "arrangeable-list__homing-effect"
            : o.value.homingEffect || "",
        ),
        c = fo(),
        { movingItem: a, isMoving: u, movingItemCanTarget: p } = vn(),
        { addList: g, removeList: v, targetedList: w } = of(),
        x = be(),
        j = be();
      let F = 0,
        K = 0,
        H;
      const T = be([]),
        k = je(() => T.value.map(({ payload: M }) => M) || []);
      function le(M) {
        const G = [];
        M.forEach((V) => {
          const X = n.listKey
            ? T.value.find(({ key: me }) => me === V[n.listKey])
            : T.value.find(({ payload: me }) => V === me);
          X
            ? G.push({ ...X, payload: V })
            : G.push({
                key:
                  n.listKey && Object.keys(V).includes(n.listKey)
                    ? V[n.listKey]
                    : Symbol(),
                payload: V,
              });
        }),
          (T.value = G);
      }
      it(() => n.list, le, { deep: !0 }),
        it(
          () => {
            var M;
            return (M = a.value) == null ? void 0 : M.destination;
          },
          (M, G) => {
            (M == null ? void 0 : M.identifier) !== r.value &&
              (G == null ? void 0 : G.identifier) === r.value &&
              (T.value = T.value.filter(({ payload: V }) => {
                var X;
                return V !== ((X = a.value) == null ? void 0 : X.payload);
              }));
          },
        );
      const ue = t,
        ge = (M) => {
          var G, V;
          if (
            !(
              !a.value ||
              ((V = (G = a.value) == null ? void 0 : G.destination) == null
                ? void 0
                : V.identifier) !== r.value ||
              u(k.value[M])
            )
          ) {
            if (
              T.value.findIndex(({ payload: X }) => {
                var me;
                return X === ((me = a.value) == null ? void 0 : me.payload);
              }) === -1
            )
              T.value.splice(M, 0, {
                payload: a.value.payload,
                key: a.value.key,
              });
            else {
              const X = T.value.findIndex(({ payload: me }) => {
                var ke;
                return me === ((ke = a.value) == null ? void 0 : ke.payload);
              });
              T.value =
                X < M
                  ? [
                      ...T.value.slice(0, X),
                      ...T.value.slice(X + 1, M + 1),
                      T.value[X],
                      ...T.value.slice(M + 1),
                    ]
                  : [
                      ...T.value.slice(0, M),
                      T.value[X],
                      ...T.value.slice(M, X),
                      ...T.value.slice(X + 1),
                    ];
            }
            (a.value.destination.index = M),
              (a.value.destination.listItems = k.value);
          }
        },
        N = () => {
          var G;
          if (a.value === void 0) return;
          const M = k.value.indexOf(a.value.payload);
          M >= 0 && T.value.splice(M, 1),
            ((G = a.value.destination) == null ? void 0 : G.identifier) ===
              r.value && (a.value.destination = a.value.origin);
        },
        q = () => {
          a.value &&
            (k.value.length === 0 &&
              (T.value = [{ payload: a.value.payload, key: a.value.key }]),
            (a.value.destination = {
              identifier: r.value,
              type: "list",
              listItems: k.value,
              meta: n.meta,
            }));
        },
        Y = (M, G) => {
          M &&
            G.split(" ").forEach((V) => {
              V && M.classList.add(V);
            });
        },
        A = (M, G) => {
          M &&
            G.split(" ").forEach((V) => {
              V && M.classList.remove(V);
            });
        },
        te = je(() =>
          typeof o.value.handle == "string" ? o.value.handle : "handle",
        ),
        de = (M, { key: G, payload: V }) => {
          (H = M.getBoundingClientRect()),
            (F = c.x.value - H.x),
            (K = c.y.value - H.y);
          const X = k.value.indexOf(V),
            me = {
              identifier: r.value,
              type: "list",
              listItems: k.value,
              index: X,
            };
          (a.value = {
            payload: V,
            hoverElement: x,
            origin: me,
            destination: { ...me, meta: n.meta },
            dropTargets: [n.targets ?? n.group ?? r.value].flat(),
            key: G,
          }),
            On(() => {
              J(),
                Y(x.value, o.value.hoverTransitionClass || ""),
                Y(x.value, o.value.hoverClass || ""),
                nn(
                  x.value,
                  "transitionend",
                  () => {
                    A(x.value, o.value.hoverTransitionClass || "");
                  },
                  { once: !0 },
                );
            }),
            a.value && ue("liftItem", B(a.value));
        };
      let Ge;
      const ce = (M, G) => {
          const { target: V, currentTarget: X } = M;
          (o.value.handle &&
            (V == null ? void 0 : V.getAttribute("name")) !== te.value) ||
            (Ge = setTimeout(() => {
              de(X, G);
            }, o.value.liftDelay));
        },
        re = () => {
          clearTimeout(Ge);
        },
        J = () => {
          var M;
          we.value =
            ((M = document.getElementById("arrangeable-list-target-element")) ==
            null
              ? void 0
              : M.getBoundingClientRect()) ?? H;
        },
        we = be(),
        Pt = () => {
          if (a.value === void 0 || a.value.origin.identifier !== r.value)
            return;
          let M = !1;
          On(() => {
            J(),
              Y(x.value, o.value.hoverTransitionClass || ""),
              l.value && Y(x.value, l.value);
            let G = getComputedStyle(x.value).transitionProperty,
              V = getComputedStyle(x.value).transitionDuration;
            G !== "none" &&
              V.split(", ").some((X) => parseFloat(X) > 0) &&
              (M = !0),
              A(x.value, o.value.hoverClass || ""),
              M
                ? nn(x.value, "transitionend", () => (a.value = void 0), {
                    once: !0,
                  })
                : (a.value = void 0);
          }),
            ue("dropItem", B(a.value)),
            le(n.list);
        };
      nn(document, "pointerup", () => {
        re(), Pt();
      });
      const Qe = Symbol(),
        Fe = Symbol(),
        Kt = en("arrangeableListStackLevel", 0);
      Oi("arrangeableListStackLevel", Kt + 1);
      const Zn = je(() => w.value === r.value);
      return (
        Wn(() => {
          g(
            r.value,
            n.group,
            Kt,
            je(() => {
              var M;
              return ((M = j.value) == null ? void 0 : M.isAbove) ?? !1;
            }),
            q,
            N,
          ),
            le(n.list),
            (document.body.style.touchAction = "none");
        }),
        Rs(() => {
          v(r.value), (document.body.style.touchAction = "");
        }),
        (M, G) => (
          fe(),
          De(
            Tn,
            {
              name: "ArrangeableList",
              ref_key: "listElement",
              ref: j,
              tag: M.tag ?? "ul",
              class: Ue(Zn.value ? o.value.hoveredOverListClass : ""),
            },
            {
              default: ve(() => {
                var V, X, me, ke, Vt, Ut, f, d;
                return [
                  ie(
                    Lc,
                    kr(
                      Bs(
                        !W(a) || W(p)([r.value, M.group])
                          ? o.value.listTransition
                          : {},
                      ),
                    ),
                    {
                      default: ve(() => [
                        (fe(),
                        De(
                          Ns(M.listItemTag ?? "li"),
                          { key: W(Qe) },
                          {
                            default: ve(() => [
                              Et(M.$slots, "before", {
                                arrangedItems: k.value,
                              }),
                            ]),
                            _: 3,
                          },
                        )),
                        (fe(!0),
                        mt(
                          Se,
                          null,
                          Ti(
                            T.value || [],
                            (h, y) => (
                              fe(),
                              De(
                                Tn,
                                {
                                  key: h.key,
                                  tag: M.listItemTag ?? "li",
                                  id: W(u)(h.payload)
                                    ? "arrangeable-list-target-element"
                                    : void 0,
                                  class: Ue(
                                    W(u)(h.payload)
                                      ? o.value.pickedItemClass
                                      : o.value.defaultItemClass,
                                  ),
                                  onTouchstart: Cs(
                                    (m) => ce(m, h),
                                    ["left", "prevent"],
                                  ),
                                  onPointerdown: Cs(
                                    (m) => ce(m, h),
                                    ["left", "stop"],
                                  ),
                                  onPointerEnter: (m) => ge(y),
                                },
                                {
                                  default: ve(() => [
                                    Et(M.$slots, "default", {
                                      item: h.payload,
                                      arrangedItems: k.value,
                                    }),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                [
                                  "tag",
                                  "id",
                                  "class",
                                  "onTouchstart",
                                  "onPointerdown",
                                  "onPointerEnter",
                                ],
                              )
                            ),
                          ),
                          128,
                        )),
                        (fe(),
                        De(
                          Tn,
                          {
                            key: W(Fe),
                            tag: M.listItemTag ?? "li",
                            onPointerEnter:
                              G[0] || (G[0] = (h) => ge(T.value.length)),
                          },
                          {
                            default: ve(() => [
                              Et(M.$slots, "after", { arrangedItems: k.value }),
                            ]),
                            _: 3,
                          },
                          8,
                          ["tag"],
                        )),
                      ]),
                      _: 3,
                    },
                    16,
                  ),
                  W(a) && W(a).origin.identifier === r.value
                    ? (fe(),
                      De(
                        dc,
                        {
                          key: 0,
                          tag: "div",
                          ref_key: "hoverElement",
                          ref: x,
                          style: Xe([
                            {
                              left: W(c).x.value - W(F) + "px",
                              top: W(c).y.value - W(K) + "px",
                              width:
                                ((V = W(H)) == null ? void 0 : V.width) + "px",
                              height:
                                ((X = W(H)) == null ? void 0 : X.height) + "px",
                              "--landingzone-top":
                                ((me = we.value) == null ? void 0 : me.top) +
                                "px",
                              "--landingzone-left":
                                ((ke = we.value) == null ? void 0 : ke.left) +
                                "px",
                              "--landingzone-right":
                                ((Vt = we.value) == null ? void 0 : Vt.right) +
                                "px",
                              "--landingzone-bottom":
                                ((Ut = we.value) == null ? void 0 : Ut.bottom) +
                                "px",
                              "--landingzone-width":
                                ((f = we.value) == null ? void 0 : f.width) +
                                "px",
                              "--landingzone-height":
                                ((d = we.value) == null ? void 0 : d.height) +
                                "px",
                            },
                            { "z-index": "100000000", position: "absolute" },
                          ]),
                        },
                        {
                          default: ve(() => [
                            Et(M.$slots, "default", { item: W(a).payload }),
                          ]),
                          _: 3,
                        },
                        8,
                        ["style"],
                      ))
                    : qi("", !0),
                ];
              }),
              _: 3,
            },
            8,
            ["tag", "class"],
          )
        )
      );
    },
  }),
  lf = ot({
    __name: "DropZone",
    props: {
      options: { default: () => ({ hoverClass: "" }) },
      identifier: { default: Symbol() },
      group: {},
    },
    emits: ["enterZone", "leaveZone"],
    setup(e, { emit: t }) {
      const n = e,
        { movingItem: s } = vn(),
        r = be(),
        i = t,
        o = () => {
          var c, a;
          ((a = (c = s.value) == null ? void 0 : c.destination) == null
            ? void 0
            : a.identifier) === n.identifier &&
            ((s.value.destination = void 0), i("leaveZone", B(s.value)));
        },
        l = () => {
          var c;
          s.value &&
            ((c = s.value.destination) == null ? void 0 : c.identifier) !==
              n.identifier &&
            (s.value.dropTargets.includes(n.identifier) ||
              (n.group && s.value.dropTargets.includes(n.group))) &&
            ((s.value.destination = {
              identifier: n.identifier,
              group: n.group,
              type: "dropzone",
            }),
            i("enterZone", B(s.value)));
        };
      return (c, a) => {
        var u, p;
        return (
          fe(),
          De(
            Tn,
            zi(
              {
                onPointerLeave: o,
                onPointerEnter: l,
                id:
                  ((p = (u = W(s)) == null ? void 0 : u.destination) == null
                    ? void 0
                    : p.identifier) === n.identifier
                    ? "arrangeable-list-target-element"
                    : void 0,
              },
              c.$attrs,
              { ref_key: "dropZone", ref: r },
            ),
            {
              default: ve(() => {
                var g, v, w, x;
                return [
                  Et(c.$slots, "default", {
                    isHovering:
                      ((v = (g = W(s)) == null ? void 0 : g.destination) == null
                        ? void 0
                        : v.identifier) === n.identifier,
                    class: Ue(
                      ((x = (w = W(s)) == null ? void 0 : w.destination) == null
                        ? void 0
                        : x.identifier) === n.identifier
                        ? c.options.hoverClass
                        : "",
                    ),
                  }),
                ];
              }),
              _: 3,
            },
            16,
            ["id"],
          )
        );
      };
    },
  }),
  as = () => {
    const e = Object.keys(Fn);
    return Fn[e[Math.floor(Math.random() * e.length)]];
  },
  Fn = {
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a",
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407",
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03",
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006",
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05",
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16",
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22",
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e",
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344",
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49",
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b",
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065",
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764",
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e",
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724",
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519",
    },
  },
  cf = { class: "flex flex-grow flex-col items-center overflow-auto" },
  Dr = ot({
    __name: "ColorSorting",
    setup(e) {
      const t = be(
          Object.keys(Fn).map((i, o) => ({
            name: i,
            color: Fn[i][300],
            index: o,
          })),
        ),
        n = ({ destination: i }) => {
          t.value = i == null ? void 0 : i.listItems;
        },
        s = () => {
          t.value.sort(() => Math.random() - 0.5);
        },
        r = () => {
          t.value.sort((i, o) => i.index - o.index);
        };
      return (i, o) => (
        fe(),
        mt("main", cf, [
          o[0] ||
            (o[0] = R(
              "h1",
              { class: "m-2 text-xl font-extrabold" },
              "Tailwind color sorting game:",
              -1,
            )),
          R("div", null, [
            R(
              "button",
              {
                onClick: s,
                class:
                  "m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5",
              },
              " shuffle ",
            ),
            R(
              "button",
              {
                onClick: r,
                class:
                  "m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5",
              },
              " reset ",
            ),
          ]),
          ie(
            W(Jn),
            {
              tag: "ul",
              "list-item-tag": "li",
              list: t.value,
              options: {
                hoverClass:
                  "opacity-70 cursor-grabbing scale-150 drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]",
              },
              onDropItem: n,
            },
            {
              default: ve(({ item: l }) => [
                R(
                  "div",
                  {
                    class:
                      "m-2 flex h-10 w-96 cursor-grab select-none justify-center rounded-lg p-2 hover:drop-shadow-lg",
                    style: Xe({ backgroundColor: l.color }),
                  },
                  gt(l.name),
                  5,
                ),
              ]),
              _: 1,
            },
            8,
            ["list"],
          ),
        ])
      );
    },
  }),
  ff = ot({
    __name: "KanBanList",
    props: {
      list: {},
      items: {},
      group: {},
      trashBin: {},
      arrangeableOptions: {},
    },
    emits: ["add-item", "drop-item"],
    setup(e, { emit: t }) {
      const n = t,
        { movingItem: s } = vn(),
        r = (i, o) => {
          !i.target ||
            !o ||
            (n("add-item", i.target.value, o), (i.target.value = ""));
        };
      return (i, o) => (
        fe(),
        De(
          W(Jn),
          {
            list: i.items,
            identifier: i.list.id,
            group: i.group,
            options: { ...i.arrangeableOptions, handle: "cardHandle" },
            onDropItem: o[1] || (o[1] = (l) => n("drop-item", W(s))),
          },
          {
            default: ve(({ item: l }) => [
              R(
                "div",
                {
                  class:
                    "m-1 flex items-center whitespace-normal break-words rounded border-2 border-black p-2 text-xl",
                  style: Xe({ backgroundColor: i.list.color[300] }),
                },
                [
                  o[2] ||
                    (o[2] = R(
                      "div",
                      {
                        name: "cardHandle",
                        class: "mr-2 cursor-grab select-none",
                      },
                      " ︙ ",
                      -1,
                    )),
                  js(" " + gt(l.description), 1),
                ],
                4,
              ),
            ]),
            after: ve(() => [
              R(
                "div",
                {
                  class:
                    "m-1 flex items-center rounded border-2 border-black p-2 text-xl",
                  style: Xe({ backgroundColor: i.list.color[200] }),
                },
                [
                  R(
                    "input",
                    {
                      onChange: o[0] || (o[0] = (l) => r(l, i.list.id)),
                      class:
                        "w-full border-b-2 border-gray-400 bg-transparent italic outline-none focus-visible:border-black",
                      placeholder: "New item",
                    },
                    null,
                    32,
                  ),
                ],
                4,
              ),
            ]),
            _: 1,
          },
          8,
          ["list", "identifier", "group", "options"],
        )
      );
    },
  }),
  af = { class: "flex flex-grow flex-row items-start overflow-auto" },
  uf = { class: "flex border-none p-2 text-2xl font-bold" },
  df = ["onChange", "value"],
  pf = ot({
    __name: "KanBan",
    setup(e) {
      const t = [
          "Build app",
          "Debug the code",
          "Commit and push to github",
          "Deploy to production",
          "Be awesome",
          "Set up Vue project",
        ],
        n = ["To do:", "Done"],
        s = Symbol("Drop targets"),
        r = Symbol("Trash bin"),
        i = be(
          n.map((g, v) => ({ name: g, id: Symbol(g), color: as(), index: v })),
        ),
        o = be(
          t.map((g, v) => ({
            description: g,
            id: Symbol(),
            listId: i.value[Math.floor(Math.random() * n.length)].id,
            index: v,
          })),
        ),
        l = (g, v) => {
          o.value.push({
            description: g,
            id: Symbol(),
            listId: v,
            index: Math.max(...o.value.map(({ index: w }) => w)) + 1,
          });
        },
        c = (g) => {
          const v = g.target;
          i.value.push({
            name: v.value,
            id: Symbol(v.value),
            color: p.value,
            index: Math.max(...i.value.map(({ index: w }) => w)) + 1,
          }),
            (p.value = as()),
            (v.value = "");
        },
        a = (g) => {
          var w, x, j;
          const v = "listId" in g.payload ? o : i;
          g.destination !== void 0 &&
            (g.destination.identifier === r
              ? (v.value = v.value.filter(({ id: F }) => F !== g.payload.id))
              : (((w = g.destination.listItems) == null ? void 0 : w.length) ===
                  0 &&
                  ((g.payload.index = 0),
                  "listId" in g.payload &&
                    (g.payload.listId =
                      (x = g.destination) == null ? void 0 : x.identifier)),
                (j = g.destination.listItems) == null ||
                  j.forEach((F, K) => {
                    var H;
                    (F.index = K),
                      "listId" in F &&
                        (F.listId =
                          (H = g.destination) == null ? void 0 : H.identifier);
                  }),
                v.value.sort((F, K) => F.index - K.index)));
        },
        u = {
          hoverClass:
            "opacity-70 cursor-grabbing drop-shadow-[0_10px_15px_rgba(0,0,0,0.75)] scale-110 -rotate-3",
          pickedItemClass: "opacity-20",
        },
        p = be(as());
      return (g, v) => (
        fe(),
        mt("main", af, [
          ie(
            W(Jn),
            {
              list: i.value,
              identifier: "lists",
              class: "flex flex-grow flex-row items-start overflow-auto",
              options: { ...u, handle: "listHandle" },
              onDropItem: a,
              targets: [W(r), "lists"],
            },
            {
              default: ve(({ item: w }) => [
                R(
                  "div",
                  {
                    class:
                      "float-left m-1 h-fit w-60 rounded-md border-2 border-black",
                    style: Xe({ backgroundColor: w.color[100] }),
                  },
                  [
                    R("div", uf, [
                      v[0] ||
                        (v[0] = R(
                          "div",
                          {
                            name: "listHandle",
                            class: "mr-2 cursor-grab select-none",
                          },
                          " ︙ ",
                          -1,
                        )),
                      R(
                        "input",
                        {
                          class: "w-full bg-transparent",
                          onChange: (x) => {
                            var j;
                            return (w.name =
                              (j = x.target) == null ? void 0 : j.value);
                          },
                          value: w.name,
                        },
                        null,
                        40,
                        df,
                      ),
                    ]),
                    ie(
                      ff,
                      {
                        list: w,
                        items: o.value.filter(({ listId: x }) => x === w.id),
                        group: W(s),
                        trashBin: W(r),
                        arrangeableOptions: u,
                        onAddItem: l,
                        onDropItem: a,
                      },
                      null,
                      8,
                      ["list", "items", "group", "trashBin"],
                    ),
                  ],
                  4,
                ),
              ]),
              after: ve(() => [
                R(
                  "div",
                  {
                    class:
                      "m-1 flex h-fit w-60 rounded-md border-2 border-black p-2 text-2xl",
                    style: Xe({ backgroundColor: p.value[100] }),
                  },
                  [
                    R(
                      "input",
                      {
                        class:
                          "w-full border-b-2 border-gray-400 bg-transparent italic outline-none focus-visible:border-black",
                        onChange: c,
                        placeholder: "New list",
                      },
                      null,
                      32,
                    ),
                  ],
                  4,
                ),
              ]),
              _: 1,
            },
            8,
            ["list", "options", "targets"],
          ),
          ie(
            W(lf),
            { identifier: W(r), group: W(s), class: "inline-block" },
            {
              default: ve(({ isHovering: w }) => [
                R(
                  "div",
                  {
                    class: Ue([
                      "flex h-40 w-40 items-center justify-center transition-all",
                      w ? "text-8xl" : "text-7xl",
                    ]),
                  },
                  " 🗑 ",
                  2,
                ),
              ]),
              _: 1,
            },
            8,
            ["identifier", "group"],
          ),
        ])
      );
    },
  }),
  hf = {
    __name: "DisclosurePanel",
    setup(e) {
      const t = be(!1);
      function n() {
        t.value = !t.value;
      }
      return (s, r) => (
        fe(),
        mt("div", null, [Et(s.$slots, "default", { open: t.value, toggle: n })])
      );
    },
  },
  gf = {
    class:
      "flex items-center whitespace-normal break-words p-1 text-xl select-none",
  },
  mf = ["onClick"],
  vf = { name: "treeHandle", class: "ml-1 cursor-grab flex flex-row w-full" },
  yf = ["value", "onChange"],
  bf = { class: "ml-auto text-slate-400" },
  _f = { key: 0, class: "ml-10 border-l-2 border-slate-300" },
  xf = "⏷",
  Cf = "⏵",
  Sf = "📁",
  wf = "📂",
  Tf = "📄",
  Ef = ot({
    __name: "FileSystemDirectory",
    props: { toc: {}, directory: {}, parent: {} },
    setup(e) {
      const { isMoving: t } = vn(),
        n = (s) => {
          var r;
          s.payload.parent =
            (r = s.destination) == null ? void 0 : r.identifier;
        };
      return (s, r) => {
        const i = _l("FileSystemDirectory", !0);
        return (
          fe(),
          De(
            Jn,
            {
              list: s.toc.filter((o) => o.parent === s.directory),
              identifier: s.directory,
              group: "directories",
              class: "rounded m-1 p-1",
              options: {
                handle: "treeHandle",
                pickedItemClass: "hidden bg-blue-200 rounded text-transparent",
                hoverClass: "opacity-70 cursor-grabbing",
                hoveredOverListClass: "bg-sky-100",
                liftDelay: 200,
              },
              onDropItem: n,
              parent: s.parent,
            },
            {
              default: ve(({ item: o }) => [
                ie(
                  hf,
                  null,
                  {
                    default: ve(({ open: l, toggle: c }) => [
                      R("div", gf, [
                        R(
                          "div",
                          {
                            class: Ue([
                              "w-4 cursor-pointer text-slate-400",
                              W(t)(o) && "invisible",
                            ]),
                            onClick: c,
                          },
                          gt(o.type === "directory" ? (l ? xf : Cf) : ""),
                          11,
                          mf,
                        ),
                        R("div", vf, [
                          js(
                            gt(o.type === "directory" ? (l ? wf : Sf) : Tf) +
                              " ",
                            1,
                          ),
                          R(
                            "input",
                            {
                              name: "treeHandle",
                              class: "ml-2 w-full bg-transparent cursor-grab",
                              value: o.name,
                              onChange: ({ target: a }) => (o.name = a.value),
                              onDblclick:
                                r[0] || (r[0] = (a) => a.target.focus()),
                              onMousedown:
                                r[1] || (r[1] = Cs(() => {}, ["prevent"])),
                              onKeyup:
                                r[2] ||
                                (r[2] = Kc((a) => a.target.blur(), ["enter"])),
                            },
                            null,
                            40,
                            yf,
                          ),
                          R("div", bf, gt(o.created.toLocaleDateString()), 1),
                        ]),
                      ]),
                      l && !W(t)(o)
                        ? (fe(),
                          mt("div", _f, [
                            ie(
                              i,
                              {
                                toc: s.toc,
                                directory: o.id,
                                parent: s.directory,
                              },
                              null,
                              8,
                              ["toc", "directory", "parent"],
                            ),
                          ]))
                        : qi("", !0),
                    ]),
                    _: 2,
                  },
                  1024,
                ),
              ]),
              _: 1,
            },
            8,
            ["list", "identifier", "parent"],
          )
        );
      };
    },
  }),
  If = { class: "border-black border rounded-lg m-2 w-1/2" },
  Af = {
    name: "Controls",
    class: "flex flex-col border border-1 rounded m-1 border-slate-300",
  },
  Of = { name: "Sorting control" },
  Pf = { name: "Directories first control" },
  Mf = ot({
    __name: "FileSystem",
    setup(e) {
      function t() {
        return new Date(Date.now() - Math.floor(Math.random() * 2e11));
      }
      const n = Symbol("root"),
        s = Symbol("usr"),
        r = Symbol("etc"),
        i = Symbol("var"),
        o = Symbol("bin"),
        l = Symbol("lib"),
        c = Symbol("local"),
        a = Symbol("log"),
        u = hn([
          { id: s, name: "usr", parent: n, type: "directory" },
          { id: o, name: "bin", parent: s, type: "directory" },
          { id: c, name: "local", parent: s, type: "directory" },
          { id: r, name: "etc", parent: n, type: "directory" },
          { id: i, name: "var", parent: n, type: "directory" },
          { id: l, name: "lib", parent: n, type: "directory" },
          { id: a, name: "log", parent: i, type: "directory" },
          { id: Symbol(), name: "python3.sh", parent: c, type: "file" },
          { id: Symbol(), name: "grub.conf", parent: r, type: "file" },
          { id: Symbol(), name: "wallet.dat", parent: c, type: "file" },
          { id: Symbol(), name: "hostname", parent: r, type: "file" },
          { id: Symbol(), name: "sysctl.conf", parent: r, type: "file" },
          { id: Symbol(), name: ".Xauthority", parent: i, type: "file" },
          { id: Symbol(), name: "syslog", parent: a, type: "file" },
          { id: Symbol(), name: "grep", parent: o, type: "file" },
          { id: Symbol(), name: "umount", parent: o, type: "file" },
          { id: Symbol(), name: "swapfile", parent: n, type: "file" },
        ]);
      u.forEach((w, x) => {
        (w.index = x), (w.created = t());
      });
      const p = be("none"),
        g = be(!0),
        v = je(() =>
          u.slice().sort((w, x) => {
            if (g.value) {
              if (w.type === "directory" && x.type !== "directory") return -1;
              if (w.type !== "directory" && x.type === "directory") return 1;
            }
            return p.value === "none"
              ? w.index - x.index
              : p.value === "name"
                ? w.name.localeCompare(x.name)
                : w.created.getTime() - x.created.getTime();
          }),
        );
      return (w, x) => (
        fe(),
        mt("div", If, [
          R("div", Af, [
            R("div", Of, [
              x[3] ||
                (x[3] = R(
                  "label",
                  { for: "sortDropdown", class: "m-2" },
                  "Sort by:",
                  -1,
                )),
              Qs(
                R(
                  "select",
                  {
                    id: "sortDropdown",
                    "onUpdate:modelValue":
                      x[0] || (x[0] = (j) => (p.value = j)),
                    class: "m-2 p-1",
                  },
                  x[2] ||
                    (x[2] = [
                      R("option", { value: "none" }, "-", -1),
                      R("option", { value: "name" }, "Name", -1),
                      R("option", { value: "created" }, "Created", -1),
                    ]),
                  512,
                ),
                [[Hc, p.value]],
              ),
            ]),
            R("div", Pf, [
              x[4] ||
                (x[4] = R(
                  "label",
                  { for: "directoriesFirst", class: "m-2" },
                  "Directories first:",
                  -1,
                )),
              Qs(
                R(
                  "input",
                  {
                    id: "directoriesFirst",
                    type: "checkbox",
                    "onUpdate:modelValue":
                      x[1] || (x[1] = (j) => (g.value = j)),
                    class: "m-2 p-1",
                  },
                  null,
                  512,
                ),
                [[Nc, g.value]],
              ),
            ]),
          ]),
          x[5] ||
            (x[5] = R(
              "div",
              { class: "ml-14 p-1 font-bold flex flex-row w-full" },
              [
                R("div", null, "Name:"),
                R("div", { class: "ml-auto mr-16" }, "Created:"),
              ],
              -1,
            )),
          ie(Ef, { toc: v.value, directory: W(n) }, null, 8, [
            "toc",
            "directory",
          ]),
        ])
      );
    },
  }),
  Lf = { class: "flex h-screen flex-col" },
  Df = { class: "bg-blue-200 p-1" },
  $f = { class: "flex flex-row" },
  Ff = ["onClick"],
  Rf = { class: "text-sm italic font-light text-wrap" },
  Nf = ot({
    __name: "App",
    setup(e) {
      const t = qo(Dr),
        n = [
          {
            title: "Color Sorting Game",
            subtitle: "Simple drag&drop list example",
            component: Dr,
          },
          {
            title: "Kanban (Trello-like)",
            subtitle: "Lists within lists",
            component: pf,
          },
          {
            title: "File Manager",
            subtitle: "Recursively stacked lists",
            component: Mf,
          },
        ];
      return (s, r) => (
        fe(),
        mt("div", Lf, [
          R("header", Df, [
            R("nav", $f, [
              (fe(),
              mt(
                Se,
                null,
                Ti(n, (i) =>
                  R(
                    "div",
                    {
                      key: i.title,
                      onClick: (o) => (t.value = i.component),
                      class: Ue([
                        "m-2 inline cursor-pointer rounded-lg p-4 hover:underline",
                        t.value === i.component ? "bg-blue-300" : "",
                      ]),
                    },
                    [
                      R(
                        "div",
                        {
                          class: Ue(
                            t.value === i.component
                              ? "bg-blue-300 font-extrabold"
                              : "font-bold",
                          ),
                        },
                        gt(i.title),
                        3,
                      ),
                      R("div", Rf, gt(i.subtitle), 1),
                    ],
                    10,
                    Ff,
                  ),
                ),
                64,
              )),
            ]),
          ]),
          (fe(), De(Ns(t.value))),
        ])
      );
    },
  });
Wc(Nf).mount("#app");
