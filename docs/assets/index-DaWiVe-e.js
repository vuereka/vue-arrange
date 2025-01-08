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
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ws(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = {},
  $t = [],
  Ye = () => {},
  ao = () => !1,
  Nn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ts = (e) => e.startsWith("onUpdate:"),
  de = Object.assign,
  Es = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  uo = Object.prototype.hasOwnProperty,
  J = (e, t) => uo.call(e, t),
  P = Array.isArray,
  Ft = (e) => an(e) === "[object Map]",
  Vt = (e) => an(e) === "[object Set]",
  Ys = (e) => an(e) === "[object Date]",
  F = (e) => typeof e == "function",
  ce = (e) => typeof e == "string",
  Ke = (e) => typeof e == "symbol",
  te = (e) => e !== null && typeof e == "object",
  Fr = (e) => (te(e) || F(e)) && F(e.then) && F(e.catch),
  Rr = Object.prototype.toString,
  an = (e) => Rr.call(e),
  po = (e) => an(e).slice(8, -1),
  Nr = (e) => an(e) === "[object Object]",
  Is = (e) =>
    ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Yt = ws(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  kn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ho = /-(\w)/g,
  He = kn((e) => e.replace(ho, (t, n) => (n ? n.toUpperCase() : ""))),
  go = /\B([A-Z])/g,
  yt = kn((e) => e.replace(go, "-$1").toLowerCase()),
  Hn = kn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Xn = kn((e) => (e ? `on${Hn(e)}` : "")),
  ht = (e, t) => !Object.is(e, t),
  Cn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  kr = (e, t, n, s = !1) => {
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
    const t = ce(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Js;
const jn = () =>
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
function Je(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ce(s) ? _o(s) : Je(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (ce(e) || te(e)) return e;
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
function Ve(e) {
  let t = "";
  if (ce(e)) t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ve(e[n]);
      s && (t += s + " ");
    }
  else if (te(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function jr(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !ce(t) && (e.class = Ve(t)), n && (e.style = Je(n)), e;
}
const xo =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Co = ws(xo);
function Br(e) {
  return !!e || e === "";
}
function So(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = un(e[s], t[s]);
  return n;
}
function un(e, t) {
  if (e === t) return !0;
  let n = Ys(e),
    s = Ys(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = Ke(e)), (s = Ke(t)), n || s)) return e === t;
  if (((n = P(e)), (s = P(t)), n || s)) return n && s ? So(e, t) : !1;
  if (((n = te(e)), (s = te(t)), n || s)) {
    if (!n || !s) return !1;
    const r = Object.keys(e).length,
      i = Object.keys(t).length;
    if (r !== i) return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        c = t.hasOwnProperty(o);
      if ((l && !c) || (!l && c) || !un(e[o], t[o])) return !1;
    }
  }
  return String(e) === String(t);
}
function As(e, t) {
  return e.findIndex((n) => un(n, t));
}
const Kr = (e) => !!(e && e.__v_isRef === !0),
  gt = (e) =>
    ce(e)
      ? e
      : e == null
        ? ""
        : P(e) || (te(e) && (e.toString === Rr || !F(e.toString)))
          ? Kr(e)
            ? gt(e.value)
            : JSON.stringify(e, Vr, 2)
          : String(e),
  Vr = (e, t) =>
    Kr(t)
      ? Vr(e, t.value)
      : Ft(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Qn(s, i) + " =>"] = r), n),
              {},
            ),
          }
        : Vt(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Qn(n)) }
          : Ke(t)
            ? Qn(t)
            : te(t) && !P(t) && !Nr(t)
              ? String(t)
              : t,
  Qn = (e, t = "") => {
    var n;
    return Ke(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
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
function Ur() {
  return Ee;
}
function To(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let ie;
const es = new WeakSet();
class Wr {
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
      ((this.flags &= -65), es.has(this) && (es.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || qr(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Zs(this), zr(this);
    const t = ie,
      n = Be;
    (ie = this), (Be = !0);
    try {
      return this.fn();
    } finally {
      Yr(this), (ie = t), (Be = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ms(t);
      (this.deps = this.depsTail = void 0),
        Zs(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? es.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    ds(this) && this.run();
  }
  get dirty() {
    return ds(this);
  }
}
let Gr = 0,
  Jt,
  Zt;
function qr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Zt), (Zt = e);
    return;
  }
  (e.next = Jt), (Jt = e);
}
function Os() {
  Gr++;
}
function Ps() {
  if (--Gr > 0) return;
  if (Zt) {
    let t = Zt;
    for (Zt = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Jt; ) {
    let t = Jt;
    for (Jt = void 0; t; ) {
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
function zr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Yr(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Ms(s), Eo(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r);
  }
  (e.deps = t), (e.depsTail = n);
}
function ds(e) {
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
    ((e.flags &= -17), e.globalVersion === tn)
  )
    return;
  e.globalVersion = tn;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !ds(e))) {
    e.flags &= -3;
    return;
  }
  const n = ie,
    s = Be;
  (ie = e), (Be = !0);
  try {
    zr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ht(r, e._value)) && ((e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (ie = n), (Be = s), Yr(e), (e.flags &= -3);
  }
}
function Ms(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Ms(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Eo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Be = !0;
const Zr = [];
function bt() {
  Zr.push(Be), (Be = !1);
}
function _t() {
  const e = Zr.pop();
  Be = e === void 0 ? !0 : e;
}
function Zs(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = ie;
    ie = void 0;
    try {
      t();
    } finally {
      ie = n;
    }
  }
}
let tn = 0;
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
    if (!ie || !Be || ie === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ie)
      (n = this.activeLink = new Io(ie, this)),
        ie.deps
          ? ((n.prevDep = ie.depsTail),
            (ie.depsTail.nextDep = n),
            (ie.depsTail = n))
          : (ie.deps = ie.depsTail = n),
        Xr(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ie.depsTail),
        (n.nextDep = void 0),
        (ie.depsTail.nextDep = n),
        (ie.depsTail = n),
        ie.deps === n && (ie.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, tn++, this.notify(t);
  }
  notify(t) {
    Os();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ps();
    }
  }
}
function Xr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Xr(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const En = new WeakMap(),
  Ot = Symbol(""),
  ps = Symbol(""),
  nn = Symbol("");
function xe(e, t, n) {
  if (Be && ie) {
    let s = En.get(e);
    s || En.set(e, (s = new Map()));
    let r = s.get(n);
    r || (s.set(n, (r = new Bn())), (r.map = s), (r.key = n)), r.track();
  }
}
function nt(e, t, n, s, r, i) {
  const o = En.get(e);
  if (!o) {
    tn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((Os(), t === "clear")) o.forEach(l);
  else {
    const c = P(e),
      u = c && Is(n);
    if (c && n === "length") {
      const a = Number(s);
      o.forEach((p, g) => {
        (g === "length" || g === nn || (!Ke(g) && g >= a)) && l(p);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(nn)), t)
      ) {
        case "add":
          c ? u && l(o.get("length")) : (l(o.get(Ot)), Ft(e) && l(o.get(ps)));
          break;
        case "delete":
          c || (l(o.get(Ot)), Ft(e) && l(o.get(ps)));
          break;
        case "set":
          Ft(e) && l(o.get(Ot));
          break;
      }
  }
  Ps();
}
function Ao(e, t) {
  const n = En.get(e);
  return n && n.get(t);
}
function Lt(e) {
  const t = j(e);
  return t === e ? t : (xe(t, "iterate", nn), ke(e) ? t : t.map(Ce));
}
function Kn(e) {
  return xe((e = j(e)), "iterate", nn), e;
}
const Oo = {
  __proto__: null,
  [Symbol.iterator]() {
    return ts(this, Symbol.iterator, Ce);
  },
  concat(...e) {
    return Lt(this).concat(...e.map((t) => (P(t) ? Lt(t) : t)));
  },
  entries() {
    return ts(this, "entries", (e) => ((e[1] = Ce(e[1])), e));
  },
  every(e, t) {
    return Qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qe(this, "filter", e, t, (n) => n.map(Ce), arguments);
  },
  find(e, t) {
    return Qe(this, "find", e, t, Ce, arguments);
  },
  findIndex(e, t) {
    return Qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qe(this, "findLast", e, t, Ce, arguments);
  },
  findLastIndex(e, t) {
    return Qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Qe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ns(this, "includes", e);
  },
  indexOf(...e) {
    return ns(this, "indexOf", e);
  },
  join(e) {
    return Lt(this).join(e);
  },
  lastIndexOf(...e) {
    return ns(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wt(this, "pop");
  },
  push(...e) {
    return Wt(this, "push", e);
  },
  reduce(e, ...t) {
    return Xs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Xs(this, "reduceRight", e, t);
  },
  shift() {
    return Wt(this, "shift");
  },
  some(e, t) {
    return Qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wt(this, "splice", e);
  },
  toReversed() {
    return Lt(this).toReversed();
  },
  toSorted(e) {
    return Lt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Lt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wt(this, "unshift", e);
  },
  values() {
    return ts(this, "values", Ce);
  },
};
function ts(e, t, n) {
  const s = Kn(e),
    r = s[t]();
  return (
    s !== e &&
      !ke(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    r
  );
}
const Po = Array.prototype;
function Qe(e, t, n, s, r, i) {
  const o = Kn(e),
    l = o !== e && !ke(e),
    c = o[t];
  if (c !== Po[t]) {
    const p = c.apply(e, i);
    return l ? Ce(p) : p;
  }
  let u = n;
  o !== e &&
    (l
      ? (u = function (p, g) {
          return n.call(this, Ce(p), g, e);
        })
      : n.length > 2 &&
        (u = function (p, g) {
          return n.call(this, p, g, e);
        }));
  const a = c.call(o, u, s);
  return l && r ? r(a) : a;
}
function Xs(e, t, n, s) {
  const r = Kn(e);
  let i = n;
  return (
    r !== e &&
      (ke(e)
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
function ns(e, t, n) {
  const s = j(e);
  xe(s, "iterate", nn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && $s(n[0])
    ? ((n[0] = j(n[0])), s[t](...n))
    : r;
}
function Wt(e, t, n = []) {
  bt(), Os();
  const s = j(e)[t].apply(e, n);
  return Ps(), _t(), s;
}
const Mo = ws("__proto__,__v_isRef,__isVue"),
  Qr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ke),
  );
function Lo(e) {
  Ke(e) || (e = String(e));
  const t = j(this);
  return xe(t, "has", e), t.hasOwnProperty(e);
}
class ei {
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
      return s === (r ? (i ? Ko : ri) : i ? si : ni).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = P(t);
    if (!r) {
      let c;
      if (o && (c = Oo[n])) return c;
      if (n === "hasOwnProperty") return Lo;
    }
    const l = Reflect.get(t, n, ye(t) ? t : s);
    return (Ke(n) ? Qr.has(n) : Mo(n)) || (r || xe(t, "get", n), i)
      ? l
      : ye(l)
        ? o && Is(n)
          ? l
          : l.value
        : te(l)
          ? r
            ? ii(l)
            : dn(l)
          : l;
  }
}
class ti extends ei {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const c = Pt(i);
      if (
        (!ke(s) && !Pt(s) && ((i = j(i)), (s = j(s))), !P(t) && ye(i) && !ye(s))
      )
        return c ? !1 : ((i.value = s), !0);
    }
    const o = P(t) && Is(n) ? Number(n) < t.length : J(t, n),
      l = Reflect.set(t, n, s, ye(t) ? t : r);
    return (
      t === j(r) && (o ? ht(s, i) && nt(t, "set", n, s) : nt(t, "add", n, s)), l
    );
  }
  deleteProperty(t, n) {
    const s = J(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && nt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ke(n) || !Qr.has(n)) && xe(t, "has", n), s;
  }
  ownKeys(t) {
    return xe(t, "iterate", P(t) ? "length" : Ot), Reflect.ownKeys(t);
  }
}
class Do extends ei {
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
const $o = new ti(),
  Fo = new Do(),
  Ro = new ti(!0);
const hs = (e) => e,
  yn = (e) => Reflect.getPrototypeOf(e);
function No(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = j(r),
      o = Ft(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      c = e === "keys" && o,
      u = r[e](...s),
      a = n ? hs : t ? gs : Ce;
    return (
      !t && xe(i, "iterate", c ? ps : Ot),
      {
        next() {
          const { value: p, done: g } = u.next();
          return g
            ? { value: p, done: g }
            : { value: l ? [a(p[0]), a(p[1])] : a(p), done: g };
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
function ko(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = j(i),
        l = j(r);
      e || (ht(r, l) && xe(o, "get", r), xe(o, "get", l));
      const { has: c } = yn(o),
        u = t ? hs : e ? gs : Ce;
      if (c.call(o, r)) return u(i.get(r));
      if (c.call(o, l)) return u(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && xe(j(r), "iterate", Ot), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw,
        o = j(i),
        l = j(r);
      return (
        e || (ht(r, l) && xe(o, "has", r), xe(o, "has", l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = j(l),
        u = t ? hs : e ? gs : Ce;
      return (
        !e && xe(c, "iterate", Ot),
        l.forEach((a, p) => r.call(i, u(a), u(p), o))
      );
    },
  };
  return (
    de(
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
              !t && !ke(r) && !Pt(r) && (r = j(r));
              const i = j(this);
              return (
                yn(i).has.call(i, r) || (i.add(r), nt(i, "add", r, r)), this
              );
            },
            set(r, i) {
              !t && !ke(i) && !Pt(i) && (i = j(i));
              const o = j(this),
                { has: l, get: c } = yn(o);
              let u = l.call(o, r);
              u || ((r = j(r)), (u = l.call(o, r)));
              const a = c.call(o, r);
              return (
                o.set(r, i),
                u ? ht(i, a) && nt(o, "set", r, i) : nt(o, "add", r, i),
                this
              );
            },
            delete(r) {
              const i = j(this),
                { has: o, get: l } = yn(i);
              let c = o.call(i, r);
              c || ((r = j(r)), (c = o.call(i, r))), l && l.call(i, r);
              const u = i.delete(r);
              return c && nt(i, "delete", r, void 0), u;
            },
            clear() {
              const r = j(this),
                i = r.size !== 0,
                o = r.clear();
              return i && nt(r, "clear", void 0, void 0), o;
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = No(r, e, t);
    }),
    n
  );
}
function Ls(e, t) {
  const n = ko(e, t);
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(J(n, r) && r in s ? n : s, r, i);
}
const Ho = { get: Ls(!1, !1) },
  jo = { get: Ls(!1, !0) },
  Bo = { get: Ls(!0, !1) };
const ni = new WeakMap(),
  si = new WeakMap(),
  ri = new WeakMap(),
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
function dn(e) {
  return Pt(e) ? e : Ds(e, !1, $o, Ho, ni);
}
function Wo(e) {
  return Ds(e, !1, Ro, jo, si);
}
function ii(e) {
  return Ds(e, !0, Fo, Bo, ri);
}
function Ds(e, t, n, s, r) {
  if (!te(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const o = Uo(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return r.set(e, l), l;
}
function Rt(e) {
  return Pt(e) ? Rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Pt(e) {
  return !!(e && e.__v_isReadonly);
}
function ke(e) {
  return !!(e && e.__v_isShallow);
}
function $s(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Go(e) {
  return (
    !J(e, "__v_skip") && Object.isExtensible(e) && kr(e, "__v_skip", !0), e
  );
}
const Ce = (e) => (te(e) ? dn(e) : e),
  gs = (e) => (te(e) ? ii(e) : e);
function ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ue(e) {
  return oi(e, !1);
}
function qo(e) {
  return oi(e, !0);
}
function oi(e, t) {
  return ye(e) ? e : new zo(e, t);
}
class zo {
  constructor(t, n) {
    (this.dep = new Bn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : j(t)),
      (this._value = n ? t : Ce(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || ke(t) || Pt(t);
    (t = s ? t : j(t)),
      ht(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Ce(t)),
        this.dep.trigger());
  }
}
function B(e) {
  return ye(e) ? e.value : e;
}
const Yo = {
  get: (e, t, n) => (t === "__v_raw" ? e : B(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return ye(r) && !ye(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function li(e) {
  return Rt(e) ? e : new Proxy(e, Yo);
}
class Jo {
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
function Zo(e) {
  return new Jo(e);
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
    return Ao(j(this._object), this._key);
  }
}
function el(e, t, n) {
  const s = e[t];
  return ye(s) ? s : new Qo(e, t, n);
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
      (this.globalVersion = tn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ie !== this))
      return qr(this, !0), !0;
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
  return F(e) ? (s = e) : ((s = e.get), (r = e.set)), new tl(s, r, n);
}
const _n = {},
  In = new WeakMap();
let Et;
function sl(e, t = !1, n = Et) {
  if (n) {
    let s = In.get(n);
    s || In.set(n, (s = [])), s.push(e);
  }
}
function rl(e, t, n = ee) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: c,
    } = n,
    u = (L) => (r ? L : ke(L) || r === !1 || r === 0 ? st(L, 1) : st(L));
  let a,
    p,
    g,
    m,
    S = !1,
    T = !1;
  if (
    (ye(e)
      ? ((p = () => e.value), (S = ke(e)))
      : Rt(e)
        ? ((p = () => u(e)), (S = !0))
        : P(e)
          ? ((T = !0),
            (S = e.some((L) => Rt(L) || ke(L))),
            (p = () =>
              e.map((L) => {
                if (ye(L)) return L.value;
                if (Rt(L)) return u(L);
                if (F(L)) return c ? c(L, 2) : L();
              })))
          : F(e)
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
                  const L = Et;
                  Et = a;
                  try {
                    return c ? c(e, 3, [m]) : e(m);
                  } finally {
                    Et = L;
                  }
                })
            : (p = Ye),
    t && r)
  ) {
    const L = p,
      G = r === !0 ? 1 / 0 : r;
    p = () => st(L(), G);
  }
  const U = Ur(),
    M = () => {
      a.stop(), U && Es(U.effects, a);
    };
  if (i && t) {
    const L = t;
    t = (...G) => {
      L(...G), M();
    };
  }
  let K = T ? new Array(e.length).fill(_n) : _n;
  const W = (L) => {
    if (!(!(a.flags & 1) || (!a.dirty && !L)))
      if (t) {
        const G = a.run();
        if (r || S || (T ? G.some((R, ne) => ht(R, K[ne])) : ht(G, K))) {
          g && g();
          const R = Et;
          Et = a;
          try {
            const ne = [G, K === _n ? void 0 : T && K[0] === _n ? [] : K, m];
            c ? c(t, 3, ne) : t(...ne), (K = G);
          } finally {
            Et = R;
          }
        }
      } else a.run();
  };
  return (
    l && l(W),
    (a = new Wr(p)),
    (a.scheduler = o ? () => o(W, !1) : W),
    (m = (L) => sl(L, !1, a)),
    (g = a.onStop =
      () => {
        const L = In.get(a);
        if (L) {
          if (c) c(L, 4);
          else for (const G of L) G();
          In.delete(a);
        }
      }),
    t ? (s ? W(!0) : (K = a.run())) : o ? o(W.bind(null, !0), !0) : a.run(),
    (M.pause = a.pause.bind(a)),
    (M.resume = a.resume.bind(a)),
    (M.stop = M),
    M
  );
}
function st(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, ye(e))) st(e.value, t, n);
  else if (P(e)) for (let s = 0; s < e.length; s++) st(e[s], t, n);
  else if (Vt(e) || Ft(e))
    e.forEach((s) => {
      st(s, t, n);
    });
  else if (Nr(e)) {
    for (const s in e) st(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && st(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function pn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Vn(r, t, n);
  }
}
function Ue(e, t, n, s) {
  if (F(e)) {
    const r = pn(e, t, n, s);
    return (
      r &&
        Fr(r) &&
        r.catch((i) => {
          Vn(i, t, n);
        }),
      r
    );
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(Ue(e[i], t, n, s));
    return r;
  }
}
function Vn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || ee;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++) if (a[p](e, c, u) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      bt(), pn(i, null, 10, [e, c, u]), _t();
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
let qe = -1;
const Nt = [];
let at = null,
  Dt = 0;
const ci = Promise.resolve();
let An = null;
function On(e) {
  const t = An || ci;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ol(e) {
  let t = qe + 1,
    n = Ie.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ie[s],
      i = sn(r);
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = sn(e),
      n = Ie[Ie.length - 1];
    !n || (!(e.flags & 2) && t >= sn(n)) ? Ie.push(e) : Ie.splice(ol(t), 0, e),
      (e.flags |= 1),
      fi();
  }
}
function fi() {
  An || (An = ci.then(ui));
}
function ll(e) {
  P(e)
    ? Nt.push(...e)
    : at && e.id === -1
      ? at.splice(Dt + 1, 0, e)
      : e.flags & 1 || (Nt.push(e), (e.flags |= 1)),
    fi();
}
function Qs(e, t, n = qe + 1) {
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
function ai(e) {
  if (Nt.length) {
    const t = [...new Set(Nt)].sort((n, s) => sn(n) - sn(s));
    if (((Nt.length = 0), at)) {
      at.push(...t);
      return;
    }
    for (at = t, Dt = 0; Dt < at.length; Dt++) {
      const n = at[Dt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (at = null), (Dt = 0);
  }
}
const sn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ui(e) {
  try {
    for (qe = 0; qe < Ie.length; qe++) {
      const t = Ie[qe];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        pn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; qe < Ie.length; qe++) {
      const t = Ie[qe];
      t && (t.flags &= -2);
    }
    (qe = -1),
      (Ie.length = 0),
      ai(),
      (An = null),
      (Ie.length || Nt.length) && ui();
  }
}
let ve = null,
  di = null;
function Pn(e) {
  const t = ve;
  return (ve = e), (di = (e && e.type.__scopeId) || null), t;
}
function me(e, t = ve, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && ar(-1);
    const i = Pn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Pn(i), s._d && ar(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function er(e, t) {
  if (ve === null) return e;
  const n = Yn(ve),
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r];
    i &&
      (F(i) && (i = { mounted: i, updated: i }),
      i.deep && st(o),
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
function St(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (bt(), Ue(c, n, 8, [e.el, l, e, t]), _t());
  }
}
const cl = Symbol("_vte"),
  pi = (e) => e.__isTeleport,
  ut = Symbol("_leaveCb"),
  xn = Symbol("_enterCb");
function hi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Gn(() => {
      e.isMounted = !0;
    }),
    Ci(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ne = [Function, Array],
  gi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ne,
    onEnter: Ne,
    onAfterEnter: Ne,
    onEnterCancelled: Ne,
    onBeforeLeave: Ne,
    onLeave: Ne,
    onAfterLeave: Ne,
    onLeaveCancelled: Ne,
    onBeforeAppear: Ne,
    onAppear: Ne,
    onAfterAppear: Ne,
    onAppearCancelled: Ne,
  },
  mi = (e) => {
    const t = e.subTree;
    return t.component ? mi(t.component) : t;
  },
  fl = {
    name: "BaseTransition",
    props: gi,
    setup(e, { slots: t }) {
      const n = Ji(),
        s = hi();
      return () => {
        const r = t.default && Rs(t.default(), !0);
        if (!r || !r.length) return;
        const i = vi(r),
          o = j(e),
          { mode: l } = o;
        if (s.isLeaving) return ss(i);
        const c = tr(i);
        if (!c) return ss(i);
        let u = rn(c, o, s, n, (g) => (u = g));
        c.type !== Ae && Mt(c, u);
        const a = n.subTree,
          p = a && tr(a);
        if (p && p.type !== Ae && !It(c, p) && mi(n).type !== Ae) {
          const g = rn(p, o, s, n);
          if ((Mt(p, g), l === "out-in" && c.type !== Ae))
            return (
              (s.isLeaving = !0),
              (g.afterLeave = () => {
                (s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete g.afterLeave;
              }),
              ss(i)
            );
          l === "in-out" &&
            c.type !== Ae &&
            (g.delayLeave = (m, S, T) => {
              const U = yi(s, p);
              (U[String(p.key)] = p),
                (m[ut] = () => {
                  S(), (m[ut] = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = T);
            });
        }
        return i;
      };
    },
  };
function vi(e) {
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
function yi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function rn(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: a,
      onEnterCancelled: p,
      onBeforeLeave: g,
      onLeave: m,
      onAfterLeave: S,
      onLeaveCancelled: T,
      onBeforeAppear: U,
      onAppear: M,
      onAfterAppear: K,
      onAppearCancelled: W,
    } = t,
    L = String(e.key),
    G = yi(n, e),
    R = (k, z) => {
      k && Ue(k, s, 9, z);
    },
    ne = (k, z) => {
      const oe = z[1];
      R(k, z),
        P(k) ? k.every((I) => I.length <= 1) && oe() : k.length <= 1 && oe();
    },
    ge = {
      mode: o,
      persisted: l,
      beforeEnter(k) {
        let z = c;
        if (!n.isMounted)
          if (i) z = U || c;
          else return;
        k[ut] && k[ut](!0);
        const oe = G[L];
        oe && It(e, oe) && oe.el[ut] && oe.el[ut](), R(z, [k]);
      },
      enter(k) {
        let z = u,
          oe = a,
          I = p;
        if (!n.isMounted)
          if (i) (z = M || u), (oe = K || a), (I = W || p);
          else return;
        let Z = !1;
        const he = (k[xn] = (Ze) => {
          Z ||
            ((Z = !0),
            Ze ? R(I, [k]) : R(oe, [k]),
            ge.delayedLeave && ge.delayedLeave(),
            (k[xn] = void 0));
        });
        z ? ne(z, [k, he]) : he();
      },
      leave(k, z) {
        const oe = String(e.key);
        if ((k[xn] && k[xn](!0), n.isUnmounting)) return z();
        R(g, [k]);
        let I = !1;
        const Z = (k[ut] = (he) => {
          I ||
            ((I = !0),
            z(),
            he ? R(T, [k]) : R(S, [k]),
            (k[ut] = void 0),
            G[oe] === e && delete G[oe]);
        });
        (G[oe] = e), m ? ne(m, [k, Z]) : Z();
      },
      clone(k) {
        const z = rn(k, t, n, s, r);
        return r && r(z), z;
      },
    };
  return ge;
}
function ss(e) {
  if (Un(e)) return (e = vt(e)), (e.children = null), e;
}
function tr(e) {
  if (!Un(e)) return pi(e.type) && e.children ? vi(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && F(n.default)) return n.default();
  }
}
function Mt(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Mt(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Rs(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === Se
      ? (o.patchFlag & 128 && r++, (s = s.concat(Rs(o.children, t, l))))
      : (t || o.type !== Ae) && s.push(l != null ? vt(o, { key: l }) : o);
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */ function it(e, t) {
  return F(e) ? de({ name: e.name }, t, { setup: e }) : e;
}
function bi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ms(e, t, n, s, r = !1) {
  if (P(e)) {
    e.forEach((S, T) => ms(S, t && (P(t) ? t[T] : t), n, s, r));
    return;
  }
  if (kt(s) && !r) return;
  const i = s.shapeFlag & 4 ? Yn(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    u = t && t.r,
    a = l.refs === ee ? (l.refs = {}) : l.refs,
    p = l.setupState,
    g = j(p),
    m = p === ee ? () => !1 : (S) => J(g, S);
  if (
    (u != null &&
      u !== c &&
      (ce(u)
        ? ((a[u] = null), m(u) && (p[u] = null))
        : ye(u) && (u.value = null)),
    F(c))
  )
    pn(c, l, 12, [o, a]);
  else {
    const S = ce(c),
      T = ye(c);
    if (S || T) {
      const U = () => {
        if (e.f) {
          const M = S ? (m(c) ? p[c] : a[c]) : c.value;
          r
            ? P(M) && Es(M, i)
            : P(M)
              ? M.includes(i) || M.push(i)
              : S
                ? ((a[c] = [i]), m(c) && (p[c] = a[c]))
                : ((c.value = [i]), e.k && (a[e.k] = c.value));
        } else
          S
            ? ((a[c] = o), m(c) && (p[c] = o))
            : T && ((c.value = o), e.k && (a[e.k] = o));
      };
      o ? ((U.id = -1), De(U, n)) : U();
    }
  }
}
jn().requestIdleCallback;
jn().cancelIdleCallback;
const kt = (e) => !!e.type.__asyncLoader,
  Un = (e) => e.type.__isKeepAlive;
function ul(e, t) {
  _i(e, "a", t);
}
function dl(e, t) {
  _i(e, "da", t);
}
function _i(e, t, n = be) {
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
  if ((Wn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Un(r.parent.vnode) && pl(s, t, n, r), (r = r.parent);
  }
}
function pl(e, t, n, s) {
  const r = Wn(t, e, s, !0);
  Ns(() => {
    Es(s[t], r);
  }, n);
}
function Wn(e, t, n = be, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          bt();
          const l = hn(n),
            c = Ue(t, n, e, o);
          return l(), _t(), c;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const ot =
    (e) =>
    (t, n = be) => {
      (!cn || e === "sp") && Wn(e, (...s) => t(...s), n);
    },
  hl = ot("bm"),
  Gn = ot("m"),
  gl = ot("bu"),
  xi = ot("u"),
  Ci = ot("bum"),
  Ns = ot("um"),
  ml = ot("sp"),
  vl = ot("rtg"),
  yl = ot("rtc");
function bl(e, t = be) {
  Wn("ec", e, t);
}
const Si = "components";
function _l(e, t) {
  return Ti(Si, e, !0, t) || e;
}
const wi = Symbol.for("v-ndc");
function Mn(e) {
  return ce(e) ? Ti(Si, e, !1) || e : e || wi;
}
function Ti(e, t, n = !0, s = !1) {
  const r = ve || be;
  if (r) {
    const i = r.type;
    {
      const l = rc(i, !1);
      if (l && (l === t || l === He(t) || l === Hn(He(t)))) return i;
    }
    const o = nr(r[e] || i[e], t) || nr(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function nr(e, t) {
  return e && (e[t] || e[He(t)] || e[Hn(He(t))]);
}
function Ei(e, t, n, s) {
  let r;
  const i = n,
    o = P(e);
  if (o || ce(e)) {
    const l = o && Rt(e);
    let c = !1;
    l && ((c = !ke(e)), (e = Kn(e))), (r = new Array(e.length));
    for (let u = 0, a = e.length; u < a; u++)
      r[u] = t(c ? Ce(e[u]) : e[u], u, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (te(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, u = l.length; c < u; c++) {
        const a = l[c];
        r[c] = t(e[a], a, c, i);
      }
    }
  else r = [];
  return r;
}
function At(e, t, n = {}, s, r) {
  if (ve.ce || (ve.parent && kt(ve.parent) && ve.parent.ce))
    return (
      t !== "default" && (n.name = t),
      ae(),
      Oe(Se, null, [le("slot", n, s)], 64)
    );
  let i = e[t];
  i && i._c && (i._d = !1), ae();
  const o = i && Ii(i(n)),
    l = n.key || (o && o.key),
    c = Oe(
      Se,
      { key: (l && !Ke(l) ? l : `_${t}`) + (!o && s ? "_fb" : "") },
      o || [],
      o && e._ === 1 ? 64 : -2,
    );
  return (
    c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    c
  );
}
function Ii(e) {
  return e.some((t) =>
    ln(t) ? !(t.type === Ae || (t.type === Se && !Ii(t.children))) : !0,
  )
    ? e
    : null;
}
const vs = (e) => (e ? (Zi(e) ? Yn(e) : vs(e.parent)) : null),
  Xt = de(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => vs(e.parent),
    $root: (e) => vs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ks(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Fs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = On.bind(e.proxy)),
    $watch: (e) => Bl.bind(e),
  }),
  rs = (e, t) => e !== ee && !e.__isScriptSetup && J(e, t),
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
      let u;
      if (t[0] !== "$") {
        const m = o[t];
        if (m !== void 0)
          switch (m) {
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
          if (rs(s, t)) return (o[t] = 1), s[t];
          if (r !== ee && J(r, t)) return (o[t] = 2), r[t];
          if ((u = e.propsOptions[0]) && J(u, t)) return (o[t] = 3), i[t];
          if (n !== ee && J(n, t)) return (o[t] = 4), n[t];
          ys && (o[t] = 0);
        }
      }
      const a = Xt[t];
      let p, g;
      if (a) return t === "$attrs" && xe(e.attrs, "get", ""), a(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== ee && J(n, t)) return (o[t] = 4), n[t];
      if (((g = c.config.globalProperties), J(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return rs(r, t)
        ? ((r[t] = n), !0)
        : s !== ee && J(s, t)
          ? ((s[t] = n), !0)
          : J(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
        (e !== ee && J(e, o)) ||
        rs(t, o) ||
        ((l = i[0]) && J(l, o)) ||
        J(s, o) ||
        J(Xt, o) ||
        J(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : J(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function sr(e) {
  return P(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ys = !0;
function Cl(e) {
  const t = ks(e),
    n = e.proxy,
    s = e.ctx;
  (ys = !1), t.beforeCreate && rr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: u,
    created: a,
    beforeMount: p,
    mounted: g,
    beforeUpdate: m,
    updated: S,
    activated: T,
    deactivated: U,
    beforeDestroy: M,
    beforeUnmount: K,
    destroyed: W,
    unmounted: L,
    render: G,
    renderTracked: R,
    renderTriggered: ne,
    errorCaptured: ge,
    serverPrefetch: k,
    expose: z,
    inheritAttrs: oe,
    components: I,
    directives: Z,
    filters: he,
  } = t;
  if ((u && Sl(u, s, null), o))
    for (const se in o) {
      const X = o[se];
      F(X) && (s[se] = X.bind(n));
    }
  if (r) {
    const se = r.call(n, n);
    te(se) && (e.data = dn(se));
  }
  if (((ys = !0), i))
    for (const se in i) {
      const X = i[se],
        Xe = F(X) ? X.bind(n, n) : F(X.get) ? X.get.bind(n, n) : Ye,
        xt = !F(X) && F(X.set) ? X.set.bind(n) : Ye,
        we = $e({ get: Xe, set: xt });
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (Re) => (we.value = Re),
      });
    }
  if (l) for (const se in l) Ai(l[se], s, n, se);
  if (c) {
    const se = F(c) ? c.call(n) : c;
    Reflect.ownKeys(se).forEach((X) => {
      Pi(X, se[X]);
    });
  }
  a && rr(a, e, "c");
  function pe(se, X) {
    P(X) ? X.forEach((Xe) => se(Xe.bind(n))) : X && se(X.bind(n));
  }
  if (
    (pe(hl, p),
    pe(Gn, g),
    pe(gl, m),
    pe(xi, S),
    pe(ul, T),
    pe(dl, U),
    pe(bl, ge),
    pe(yl, R),
    pe(vl, ne),
    pe(Ci, K),
    pe(Ns, L),
    pe(ml, k),
    P(z))
  )
    if (z.length) {
      const se = e.exposed || (e.exposed = {});
      z.forEach((X) => {
        Object.defineProperty(se, X, {
          get: () => n[X],
          set: (Xe) => (n[X] = Xe),
        });
      });
    } else e.exposed || (e.exposed = {});
  G && e.render === Ye && (e.render = G),
    oe != null && (e.inheritAttrs = oe),
    I && (e.components = I),
    Z && (e.directives = Z),
    k && bi(e);
}
function Sl(e, t, n = Ye) {
  P(e) && (e = bs(e));
  for (const s in e) {
    const r = e[s];
    let i;
    te(r)
      ? "default" in r
        ? (i = Qt(r.from || s, r.default, !0))
        : (i = Qt(r.from || s))
      : (i = Qt(r)),
      ye(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i);
  }
}
function rr(e, t, n) {
  Ue(P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ai(e, t, n, s) {
  let r = s.includes(".") ? Vi(n, s) : () => n[s];
  if (ce(e)) {
    const i = t[e];
    F(i) && rt(r, i);
  } else if (F(e)) rt(r, e.bind(n));
  else if (te(e))
    if (P(e)) e.forEach((i) => Ai(i, t, n, s));
    else {
      const i = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(i) && rt(r, i, e);
    }
}
function ks(e) {
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
          r.length && r.forEach((u) => Ln(c, u, o, !0)),
          Ln(c, t, o)),
    te(t) && i.set(t, c),
    c
  );
}
function Ln(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Ln(e, i, n, !0), r && r.forEach((o) => Ln(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = wl[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const wl = {
  data: ir,
  props: or,
  emits: or,
  methods: zt,
  computed: zt,
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
  components: zt,
  directives: zt,
  watch: El,
  provide: ir,
  inject: Tl,
};
function ir(e, t) {
  return t
    ? e
      ? function () {
          return de(
            F(e) ? e.call(this, this) : e,
            F(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Tl(e, t) {
  return zt(bs(e), bs(t));
}
function bs(e) {
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
function zt(e, t) {
  return e ? de(Object.create(null), e, t) : t;
}
function or(e, t) {
  return e
    ? P(e) && P(t)
      ? [...new Set([...e, ...t])]
      : de(Object.create(null), sr(e), sr(t ?? {}))
    : t;
}
function El(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(Object.create(null), e);
  for (const s in t) n[s] = Te(e[s], t[s]);
  return n;
}
function Oi() {
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
    F(s) || (s = de({}, s)), r != null && !te(r) && (r = null);
    const i = Oi(),
      o = new WeakSet(),
      l = [];
    let c = !1;
    const u = (i.app = {
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
      set config(a) {},
      use(a, ...p) {
        return (
          o.has(a) ||
            (a && F(a.install)
              ? (o.add(a), a.install(u, ...p))
              : F(a) && (o.add(a), a(u, ...p))),
          u
        );
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), u;
      },
      component(a, p) {
        return p ? ((i.components[a] = p), u) : i.components[a];
      },
      directive(a, p) {
        return p ? ((i.directives[a] = p), u) : i.directives[a];
      },
      mount(a, p, g) {
        if (!c) {
          const m = u._ceVNode || le(s, r);
          return (
            (m.appContext = i),
            g === !0 ? (g = "svg") : g === !1 && (g = void 0),
            p && t ? t(m, a) : e(m, a, g),
            (c = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            Yn(m.component)
          );
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c &&
          (Ue(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(a, p) {
        return (i.provides[a] = p), u;
      },
      runWithContext(a) {
        const p = Ht;
        Ht = u;
        try {
          return a();
        } finally {
          Ht = p;
        }
      },
    });
    return u;
  };
}
let Ht = null;
function Pi(e, t) {
  if (be) {
    let n = be.provides;
    const s = be.parent && be.parent.provides;
    s === n && (n = be.provides = Object.create(s)), (n[e] = t);
  }
}
function Qt(e, t, n = !1) {
  const s = be || ve;
  if (s || Ht) {
    const r = Ht
      ? Ht._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && F(t) ? t.call(s && s.proxy) : t;
  }
}
const Mi = {},
  Li = () => Object.create(Mi),
  Di = (e) => Object.getPrototypeOf(e) === Mi;
function Ol(e, t, n, s = !1) {
  const r = {},
    i = Li();
  (e.propsDefaults = Object.create(null)), $i(e, t, r, i);
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
    l = j(r),
    [c] = e.propsOptions;
  let u = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let g = a[p];
        if (qn(e.emitsOptions, g)) continue;
        const m = t[g];
        if (c)
          if (J(i, g)) m !== i[g] && ((i[g] = m), (u = !0));
          else {
            const S = He(g);
            r[S] = _s(c, l, S, m, e, !1);
          }
        else m !== i[g] && ((i[g] = m), (u = !0));
      }
    }
  } else {
    $i(e, t, r, i) && (u = !0);
    let a;
    for (const p in l)
      (!t || (!J(t, p) && ((a = yt(p)) === p || !J(t, a)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[a] !== void 0) &&
            (r[p] = _s(c, l, p, void 0, e, !0))
          : delete r[p]);
    if (i !== l) for (const p in i) (!t || !J(t, p)) && (delete i[p], (u = !0));
  }
  u && nt(e.attrs, "set", "");
}
function $i(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let c in t) {
      if (Yt(c)) continue;
      const u = t[c];
      let a;
      r && J(r, (a = He(c)))
        ? !i || !i.includes(a)
          ? (n[a] = u)
          : ((l || (l = {}))[a] = u)
        : qn(e.emitsOptions, c) ||
          ((!(c in s) || u !== s[c]) && ((s[c] = u), (o = !0)));
    }
  if (i) {
    const c = j(n),
      u = l || ee;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      n[p] = _s(r, c, p, u[p], e, !J(u, p));
    }
  }
  return o;
}
function _s(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = J(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && F(c)) {
        const { propsDefaults: u } = r;
        if (n in u) s = u[n];
        else {
          const a = hn(r);
          (s = u[n] = c.call(null, t)), a();
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
function Fi(e, t, n = !1) {
  const s = n ? Ml : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let c = !1;
  if (!F(e)) {
    const a = (p) => {
      c = !0;
      const [g, m] = Fi(p, t, !0);
      de(o, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  if (!i && !c) return te(e) && s.set(e, $t), $t;
  if (P(i))
    for (let a = 0; a < i.length; a++) {
      const p = He(i[a]);
      lr(p) && (o[p] = ee);
    }
  else if (i)
    for (const a in i) {
      const p = He(a);
      if (lr(p)) {
        const g = i[a],
          m = (o[p] = P(g) || F(g) ? { type: g } : de({}, g)),
          S = m.type;
        let T = !1,
          U = !0;
        if (P(S))
          for (let M = 0; M < S.length; ++M) {
            const K = S[M],
              W = F(K) && K.name;
            if (W === "Boolean") {
              T = !0;
              break;
            } else W === "String" && (U = !1);
          }
        else T = F(S) && S.name === "Boolean";
        (m[0] = T), (m[1] = U), (T || J(m, "default")) && l.push(p);
      }
    }
  const u = [o, l];
  return te(e) && s.set(e, u), u;
}
function lr(e) {
  return e[0] !== "$" && !Yt(e);
}
const Ri = (e) => e[0] === "_" || e === "$stable",
  Hs = (e) => (P(e) ? e.map(ze) : [ze(e)]),
  Ll = (e, t, n) => {
    if (t._n) return t;
    const s = me((...r) => Hs(t(...r)), n);
    return (s._c = !1), s;
  },
  Ni = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Ri(r)) continue;
      const i = e[r];
      if (F(i)) t[r] = Ll(r, i, s);
      else if (i != null) {
        const o = Hs(i);
        t[r] = () => o;
      }
    }
  },
  ki = (e, t) => {
    const n = Hs(t);
    e.slots.default = () => n;
  },
  Hi = (e, t, n) => {
    for (const s in t) (n || s !== "_") && (e[s] = t[s]);
  },
  Dl = (e, t, n) => {
    const s = (e.slots = Li());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Hi(s, t, n), n && kr(s, "_", r, !0)) : Ni(t, s);
    } else t && ki(e, t);
  },
  $l = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = ee;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : Hi(r, t, n)
        : ((i = !t.$stable), Ni(t, r)),
        (o = t);
    } else t && (ki(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !Ri(l) && o[l] == null && delete r[l];
  },
  De = zl;
function Fl(e) {
  return Rl(e);
}
function Rl(e, t) {
  const n = jn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: a,
      parentNode: p,
      nextSibling: g,
      setScopeId: m = Ye,
      insertStaticContent: S,
    } = e,
    T = (
      f,
      d,
      h,
      y = null,
      v = null,
      b = null,
      w = void 0,
      C = null,
      x = !!d.dynamicChildren,
    ) => {
      if (f === d) return;
      f && !It(f, d) && ((y = A(f)), Re(f, v, b, !0), (f = null)),
        d.patchFlag === -2 && ((x = !1), (d.dynamicChildren = null));
      const { type: _, ref: D, shapeFlag: E } = d;
      switch (_) {
        case zn:
          U(f, d, h, y);
          break;
        case Ae:
          M(f, d, h, y);
          break;
        case ls:
          f == null && K(d, h, y, w);
          break;
        case Se:
          I(f, d, h, y, v, b, w, C, x);
          break;
        default:
          E & 1
            ? G(f, d, h, y, v, b, w, C, x)
            : E & 6
              ? Z(f, d, h, y, v, b, w, C, x)
              : (E & 64 || E & 128) && _.process(f, d, h, y, v, b, w, C, x, q);
      }
      D != null && v && ms(D, f && f.ref, b, d || f, !d);
    },
    U = (f, d, h, y) => {
      if (f == null) s((d.el = l(d.children)), h, y);
      else {
        const v = (d.el = f.el);
        d.children !== f.children && u(v, d.children);
      }
    },
    M = (f, d, h, y) => {
      f == null ? s((d.el = c(d.children || "")), h, y) : (d.el = f.el);
    },
    K = (f, d, h, y) => {
      [f.el, f.anchor] = S(f.children, d, h, y, f.el, f.anchor);
    },
    W = ({ el: f, anchor: d }, h, y) => {
      let v;
      for (; f && f !== d; ) (v = g(f)), s(f, h, y), (f = v);
      s(d, h, y);
    },
    L = ({ el: f, anchor: d }) => {
      let h;
      for (; f && f !== d; ) (h = g(f)), r(f), (f = h);
      r(d);
    },
    G = (f, d, h, y, v, b, w, C, x) => {
      d.type === "svg" ? (w = "svg") : d.type === "math" && (w = "mathml"),
        f == null ? R(d, h, y, v, b, w, C, x) : k(f, d, v, b, w, C, x);
    },
    R = (f, d, h, y, v, b, w, C) => {
      let x, _;
      const { props: D, shapeFlag: E, transition: O, dirs: $ } = f;
      if (
        ((x = f.el = o(f.type, b, D && D.is, D)),
        E & 8
          ? a(x, f.children)
          : E & 16 && ge(f.children, x, null, y, v, is(f, b), w, C),
        $ && St(f, null, y, "created"),
        ne(x, f, f.scopeId, w, y),
        D)
      ) {
        for (const re in D)
          re !== "value" && !Yt(re) && i(x, re, null, D[re], b, y);
        "value" in D && i(x, "value", null, D.value, b),
          (_ = D.onVnodeBeforeMount) && Ge(_, y, f);
      }
      $ && St(f, null, y, "beforeMount");
      const V = Nl(v, O);
      V && O.beforeEnter(x),
        s(x, d, h),
        ((_ = D && D.onVnodeMounted) || V || $) &&
          De(() => {
            _ && Ge(_, y, f), V && O.enter(x), $ && St(f, null, y, "mounted");
          }, v);
    },
    ne = (f, d, h, y, v) => {
      if ((h && m(f, h), y)) for (let b = 0; b < y.length; b++) m(f, y[b]);
      if (v) {
        let b = v.subTree;
        if (
          d === b ||
          (Wi(b.type) && (b.ssContent === d || b.ssFallback === d))
        ) {
          const w = v.vnode;
          ne(f, w, w.scopeId, w.slotScopeIds, v.parent);
        }
      }
    },
    ge = (f, d, h, y, v, b, w, C, x = 0) => {
      for (let _ = x; _ < f.length; _++) {
        const D = (f[_] = C ? dt(f[_]) : ze(f[_]));
        T(null, D, d, h, y, v, b, w, C);
      }
    },
    k = (f, d, h, y, v, b, w) => {
      const C = (d.el = f.el);
      let { patchFlag: x, dynamicChildren: _, dirs: D } = d;
      x |= f.patchFlag & 16;
      const E = f.props || ee,
        O = d.props || ee;
      let $;
      if (
        (h && wt(h, !1),
        ($ = O.onVnodeBeforeUpdate) && Ge($, h, d, f),
        D && St(d, f, h, "beforeUpdate"),
        h && wt(h, !0),
        ((E.innerHTML && O.innerHTML == null) ||
          (E.textContent && O.textContent == null)) &&
          a(C, ""),
        _
          ? z(f.dynamicChildren, _, C, h, y, is(d, v), b)
          : w || X(f, d, C, null, h, y, is(d, v), b, !1),
        x > 0)
      ) {
        if (x & 16) oe(C, E, O, h, v);
        else if (
          (x & 2 && E.class !== O.class && i(C, "class", null, O.class, v),
          x & 4 && i(C, "style", E.style, O.style, v),
          x & 8)
        ) {
          const V = d.dynamicProps;
          for (let re = 0; re < V.length; re++) {
            const Q = V[re],
              Pe = E[Q],
              _e = O[Q];
            (_e !== Pe || Q === "value") && i(C, Q, Pe, _e, v, h);
          }
        }
        x & 1 && f.children !== d.children && a(C, d.children);
      } else !w && _ == null && oe(C, E, O, h, v);
      (($ = O.onVnodeUpdated) || D) &&
        De(() => {
          $ && Ge($, h, d, f), D && St(d, f, h, "updated");
        }, y);
    },
    z = (f, d, h, y, v, b, w) => {
      for (let C = 0; C < d.length; C++) {
        const x = f[C],
          _ = d[C],
          D =
            x.el && (x.type === Se || !It(x, _) || x.shapeFlag & 70)
              ? p(x.el)
              : h;
        T(x, _, D, null, y, v, b, w, !0);
      }
    },
    oe = (f, d, h, y, v) => {
      if (d !== h) {
        if (d !== ee)
          for (const b in d) !Yt(b) && !(b in h) && i(f, b, d[b], null, v, y);
        for (const b in h) {
          if (Yt(b)) continue;
          const w = h[b],
            C = d[b];
          w !== C && b !== "value" && i(f, b, C, w, v, y);
        }
        "value" in h && i(f, "value", d.value, h.value, v);
      }
    },
    I = (f, d, h, y, v, b, w, C, x) => {
      const _ = (d.el = f ? f.el : l("")),
        D = (d.anchor = f ? f.anchor : l(""));
      let { patchFlag: E, dynamicChildren: O, slotScopeIds: $ } = d;
      $ && (C = C ? C.concat($) : $),
        f == null
          ? (s(_, h, y), s(D, h, y), ge(d.children || [], h, D, v, b, w, C, x))
          : E > 0 && E & 64 && O && f.dynamicChildren
            ? (z(f.dynamicChildren, O, h, v, b, w, C),
              (d.key != null || (v && d === v.subTree)) && ji(f, d, !0))
            : X(f, d, h, D, v, b, w, C, x);
    },
    Z = (f, d, h, y, v, b, w, C, x) => {
      (d.slotScopeIds = C),
        f == null
          ? d.shapeFlag & 512
            ? v.ctx.activate(d, h, y, w, x)
            : he(d, h, y, v, b, w, x)
          : Ze(f, d, x);
    },
    he = (f, d, h, y, v, b, w) => {
      const C = (f.component = Ql(f, y, v));
      if ((Un(f) && (C.ctx.renderer = q), ec(C, !1, w), C.asyncDep)) {
        if ((v && v.registerDep(C, pe, w), !f.el)) {
          const x = (C.subTree = le(Ae));
          M(null, x, d, h);
        }
      } else pe(C, f, d, h, v, b, w);
    },
    Ze = (f, d, h) => {
      const y = (d.component = f.component);
      if (Gl(f, d, h))
        if (y.asyncDep && !y.asyncResolved) {
          se(y, d, h);
          return;
        } else (y.next = d), y.update();
      else (d.el = f.el), (y.vnode = d);
    },
    pe = (f, d, h, y, v, b, w) => {
      const C = () => {
        if (f.isMounted) {
          let { next: E, bu: O, u: $, parent: V, vnode: re } = f;
          {
            const Me = Bi(f);
            if (Me) {
              E && ((E.el = re.el), se(f, E, w)),
                Me.asyncDep.then(() => {
                  f.isUnmounted || C();
                });
              return;
            }
          }
          let Q = E,
            Pe;
          wt(f, !1),
            E ? ((E.el = re.el), se(f, E, w)) : (E = re),
            O && Cn(O),
            (Pe = E.props && E.props.onVnodeBeforeUpdate) && Ge(Pe, V, E, re),
            wt(f, !0);
          const _e = os(f),
            je = f.subTree;
          (f.subTree = _e),
            T(je, _e, p(je.el), A(je), f, v, b),
            (E.el = _e.el),
            Q === null && ql(f, _e.el),
            $ && De($, v),
            (Pe = E.props && E.props.onVnodeUpdated) &&
              De(() => Ge(Pe, V, E, re), v);
        } else {
          let E;
          const { el: O, props: $ } = d,
            { bm: V, m: re, parent: Q, root: Pe, type: _e } = f,
            je = kt(d);
          if (
            (wt(f, !1),
            V && Cn(V),
            !je && (E = $ && $.onVnodeBeforeMount) && Ge(E, Q, d),
            wt(f, !0),
            O && lt)
          ) {
            const Me = () => {
              (f.subTree = os(f)), lt(O, f.subTree, f, v, null);
            };
            je && _e.__asyncHydrate ? _e.__asyncHydrate(O, f, Me) : Me();
          } else {
            Pe.ce && Pe.ce._injectChildStyle(_e);
            const Me = (f.subTree = os(f));
            T(null, Me, h, y, f, v, b), (d.el = Me.el);
          }
          if ((re && De(re, v), !je && (E = $ && $.onVnodeMounted))) {
            const Me = d;
            De(() => Ge(E, Q, Me), v);
          }
          (d.shapeFlag & 256 ||
            (Q && kt(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
            f.a &&
            De(f.a, v),
            (f.isMounted = !0),
            (d = h = y = null);
        }
      };
      f.scope.on();
      const x = (f.effect = new Wr(C));
      f.scope.off();
      const _ = (f.update = x.run.bind(x)),
        D = (f.job = x.runIfDirty.bind(x));
      (D.i = f), (D.id = f.uid), (x.scheduler = () => Fs(D)), wt(f, !0), _();
    },
    se = (f, d, h) => {
      d.component = f;
      const y = f.vnode.props;
      (f.vnode = d),
        (f.next = null),
        Pl(f, d.props, y, h),
        $l(f, d.children, h),
        bt(),
        Qs(f),
        _t();
    },
    X = (f, d, h, y, v, b, w, C, x = !1) => {
      const _ = f && f.children,
        D = f ? f.shapeFlag : 0,
        E = d.children,
        { patchFlag: O, shapeFlag: $ } = d;
      if (O > 0) {
        if (O & 128) {
          xt(_, E, h, y, v, b, w, C, x);
          return;
        } else if (O & 256) {
          Xe(_, E, h, y, v, b, w, C, x);
          return;
        }
      }
      $ & 8
        ? (D & 16 && Ct(_, v, b), E !== _ && a(h, E))
        : D & 16
          ? $ & 16
            ? xt(_, E, h, y, v, b, w, C, x)
            : Ct(_, v, b, !0)
          : (D & 8 && a(h, ""), $ & 16 && ge(E, h, y, v, b, w, C, x));
    },
    Xe = (f, d, h, y, v, b, w, C, x) => {
      (f = f || $t), (d = d || $t);
      const _ = f.length,
        D = d.length,
        E = Math.min(_, D);
      let O;
      for (O = 0; O < E; O++) {
        const $ = (d[O] = x ? dt(d[O]) : ze(d[O]));
        T(f[O], $, h, null, v, b, w, C, x);
      }
      _ > D ? Ct(f, v, b, !0, !1, E) : ge(d, h, y, v, b, w, C, x, E);
    },
    xt = (f, d, h, y, v, b, w, C, x) => {
      let _ = 0;
      const D = d.length;
      let E = f.length - 1,
        O = D - 1;
      for (; _ <= E && _ <= O; ) {
        const $ = f[_],
          V = (d[_] = x ? dt(d[_]) : ze(d[_]));
        if (It($, V)) T($, V, h, null, v, b, w, C, x);
        else break;
        _++;
      }
      for (; _ <= E && _ <= O; ) {
        const $ = f[E],
          V = (d[O] = x ? dt(d[O]) : ze(d[O]));
        if (It($, V)) T($, V, h, null, v, b, w, C, x);
        else break;
        E--, O--;
      }
      if (_ > E) {
        if (_ <= O) {
          const $ = O + 1,
            V = $ < D ? d[$].el : y;
          for (; _ <= O; )
            T(null, (d[_] = x ? dt(d[_]) : ze(d[_])), h, V, v, b, w, C, x), _++;
        }
      } else if (_ > O) for (; _ <= E; ) Re(f[_], v, b, !0), _++;
      else {
        const $ = _,
          V = _,
          re = new Map();
        for (_ = V; _ <= O; _++) {
          const Le = (d[_] = x ? dt(d[_]) : ze(d[_]));
          Le.key != null && re.set(Le.key, _);
        }
        let Q,
          Pe = 0;
        const _e = O - V + 1;
        let je = !1,
          Me = 0;
        const Ut = new Array(_e);
        for (_ = 0; _ < _e; _++) Ut[_] = 0;
        for (_ = $; _ <= E; _++) {
          const Le = f[_];
          if (Pe >= _e) {
            Re(Le, v, b, !0);
            continue;
          }
          let We;
          if (Le.key != null) We = re.get(Le.key);
          else
            for (Q = V; Q <= O; Q++)
              if (Ut[Q - V] === 0 && It(Le, d[Q])) {
                We = Q;
                break;
              }
          We === void 0
            ? Re(Le, v, b, !0)
            : ((Ut[We - V] = _ + 1),
              We >= Me ? (Me = We) : (je = !0),
              T(Le, d[We], h, null, v, b, w, C, x),
              Pe++);
        }
        const qs = je ? kl(Ut) : $t;
        for (Q = qs.length - 1, _ = _e - 1; _ >= 0; _--) {
          const Le = V + _,
            We = d[Le],
            zs = Le + 1 < D ? d[Le + 1].el : y;
          Ut[_] === 0
            ? T(null, We, h, zs, v, b, w, C, x)
            : je && (Q < 0 || _ !== qs[Q] ? we(We, h, zs, 2) : Q--);
        }
      }
    },
    we = (f, d, h, y, v = null) => {
      const { el: b, type: w, transition: C, children: x, shapeFlag: _ } = f;
      if (_ & 6) {
        we(f.component.subTree, d, h, y);
        return;
      }
      if (_ & 128) {
        f.suspense.move(d, h, y);
        return;
      }
      if (_ & 64) {
        w.move(f, d, h, q);
        return;
      }
      if (w === Se) {
        s(b, d, h);
        for (let E = 0; E < x.length; E++) we(x[E], d, h, y);
        s(f.anchor, d, h);
        return;
      }
      if (w === ls) {
        W(f, d, h);
        return;
      }
      if (y !== 2 && _ & 1 && C)
        if (y === 0) C.beforeEnter(b), s(b, d, h), De(() => C.enter(b), v);
        else {
          const { leave: E, delayLeave: O, afterLeave: $ } = C,
            V = () => s(b, d, h),
            re = () => {
              E(b, () => {
                V(), $ && $();
              });
            };
          O ? O(b, V, re) : re();
        }
      else s(b, d, h);
    },
    Re = (f, d, h, y = !1, v = !1) => {
      const {
        type: b,
        props: w,
        ref: C,
        children: x,
        dynamicChildren: _,
        shapeFlag: D,
        patchFlag: E,
        dirs: O,
        cacheIndex: $,
      } = f;
      if (
        (E === -2 && (v = !1),
        C != null && ms(C, null, h, f, !0),
        $ != null && (d.renderCache[$] = void 0),
        D & 256)
      ) {
        d.ctx.deactivate(f);
        return;
      }
      const V = D & 1 && O,
        re = !kt(f);
      let Q;
      if ((re && (Q = w && w.onVnodeBeforeUnmount) && Ge(Q, d, f), D & 6))
        vn(f.component, h, y);
      else {
        if (D & 128) {
          f.suspense.unmount(h, y);
          return;
        }
        V && St(f, null, d, "beforeUnmount"),
          D & 64
            ? f.type.remove(f, d, h, q, y)
            : _ && !_.hasOnce && (b !== Se || (E > 0 && E & 64))
              ? Ct(_, d, h, !1, !0)
              : ((b === Se && E & 384) || (!v && D & 16)) && Ct(x, d, h),
          y && mn(f);
      }
      ((re && (Q = w && w.onVnodeUnmounted)) || V) &&
        De(() => {
          Q && Ge(Q, d, f), V && St(f, null, d, "unmounted");
        }, h);
    },
    mn = (f) => {
      const { type: d, el: h, anchor: y, transition: v } = f;
      if (d === Se) {
        Zn(h, y);
        return;
      }
      if (d === ls) {
        L(f);
        return;
      }
      const b = () => {
        r(h), v && !v.persisted && v.afterLeave && v.afterLeave();
      };
      if (f.shapeFlag & 1 && v && !v.persisted) {
        const { leave: w, delayLeave: C } = v,
          x = () => w(h, b);
        C ? C(f.el, b, x) : x();
      } else b();
    },
    Zn = (f, d) => {
      let h;
      for (; f !== d; ) (h = g(f)), r(f), (f = h);
      r(d);
    },
    vn = (f, d, h) => {
      const { bum: y, scope: v, job: b, subTree: w, um: C, m: x, a: _ } = f;
      cr(x),
        cr(_),
        y && Cn(y),
        v.stop(),
        b && ((b.flags |= 8), Re(w, f, d, h)),
        C && De(C, d),
        De(() => {
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
    Ct = (f, d, h, y = !1, v = !1, b = 0) => {
      for (let w = b; w < f.length; w++) Re(f[w], d, h, y, v);
    },
    A = (f) => {
      if (f.shapeFlag & 6) return A(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const d = g(f.anchor || f.el),
        h = d && d[cl];
      return h ? g(h) : d;
    };
  let Y = !1;
  const H = (f, d, h) => {
      f == null
        ? d._vnode && Re(d._vnode, null, null, !0)
        : T(d._vnode || null, f, d, null, null, null, h),
        (d._vnode = f),
        Y || ((Y = !0), Qs(), ai(), (Y = !1));
    },
    q = {
      p: T,
      um: Re,
      m: we,
      r: mn,
      mt: he,
      mc: ge,
      pc: X,
      pbc: z,
      n: A,
      o: e,
    };
  let fe, lt;
  return { render: H, hydrate: fe, createApp: Al(H, fe) };
}
function is({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function wt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Nl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ji(e, t, n = !1) {
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
        !n && l.patchFlag !== -2 && ji(o, l)),
        l.type === zn && (l.el = o.el);
    }
}
function kl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l);
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
function Bi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Bi(t);
}
function cr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Hl = Symbol.for("v-scx"),
  jl = () => Qt(Hl);
function rt(e, t, n) {
  return Ki(e, t, n);
}
function Ki(e, t, n = ee) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = de({}, n),
    c = (t && s) || (!t && i !== "post");
  let u;
  if (cn) {
    if (i === "sync") {
      const m = jl();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!c) {
      const m = () => {};
      return (m.stop = Ye), (m.resume = Ye), (m.pause = Ye), m;
    }
  }
  const a = be;
  l.call = (m, S, T) => Ue(m, a, S, T);
  let p = !1;
  i === "post"
    ? (l.scheduler = (m) => {
        De(m, a && a.suspense);
      })
    : i !== "sync" &&
      ((p = !0),
      (l.scheduler = (m, S) => {
        S ? m() : Fs(m);
      })),
    (l.augmentJob = (m) => {
      t && (m.flags |= 4),
        p && ((m.flags |= 2), a && ((m.id = a.uid), (m.i = a)));
    });
  const g = rl(e, t, l);
  return cn && (u ? u.push(g) : c && g()), g;
}
function Bl(e, t, n) {
  const s = this.proxy,
    r = ce(e) ? (e.includes(".") ? Vi(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  F(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = hn(this),
    l = Ki(r, i.bind(s), n);
  return o(), l;
}
function Vi(e, t) {
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
  const s = e.vnode.props || ee;
  let r = n;
  const i = t.startsWith("update:"),
    o = i && Kl(s, t.slice(7));
  o &&
    (o.trim && (r = n.map((a) => (ce(a) ? a.trim() : a))),
    o.number && (r = n.map(Hr)));
  let l,
    c = s[(l = Xn(t))] || s[(l = Xn(He(t)))];
  !c && i && (c = s[(l = Xn(yt(t)))]), c && Ue(c, e, 6, r);
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ue(u, e, 6, r);
  }
}
function Ui(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!F(e)) {
    const c = (u) => {
      const a = Ui(u, t, !0);
      a && ((l = !0), de(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !i && !l
    ? (te(e) && s.set(e, null), null)
    : (P(i) ? i.forEach((c) => (o[c] = null)) : de(o, i),
      te(e) && s.set(e, o),
      o);
}
function qn(e, t) {
  return !e || !Nn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      J(e, t[0].toLowerCase() + t.slice(1)) || J(e, yt(t)) || J(e, t));
}
function os(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: u,
      renderCache: a,
      props: p,
      data: g,
      setupState: m,
      ctx: S,
      inheritAttrs: T,
    } = e,
    U = Pn(e);
  let M, K;
  try {
    if (n.shapeFlag & 4) {
      const L = r || s,
        G = L;
      (M = ze(u.call(G, L, a, p, m, g, S))), (K = l);
    } else {
      const L = t;
      (M = ze(
        L.length > 1 ? L(p, { attrs: l, slots: o, emit: c }) : L(p, null),
      )),
        (K = t.props ? l : Ul(l));
    }
  } catch (L) {
    (en.length = 0), Vn(L, e, 1), (M = le(Ae));
  }
  let W = M;
  if (K && T !== !1) {
    const L = Object.keys(K),
      { shapeFlag: G } = W;
    L.length &&
      G & 7 &&
      (i && L.some(Ts) && (K = Wl(K, i)), (W = vt(W, K, !1, !0)));
  }
  return (
    n.dirs &&
      ((W = vt(W, null, !1, !0)),
      (W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Mt(W, n.transition),
    (M = W),
    Pn(U),
    M
  );
}
const Ul = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Nn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Wl = (e, t) => {
    const n = {};
    for (const s in e) (!Ts(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Gl(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    u = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? fr(s, o, u) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const g = a[p];
        if (o[g] !== s[g] && !qn(u, g)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? fr(s, o, u)
            : !0
          : !!o;
  return !1;
}
function fr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !qn(n, i)) return !0;
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
const Wi = (e) => e.__isSuspense;
function zl(e, t) {
  t && t.pendingBranch
    ? P(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ll(e);
}
const Se = Symbol.for("v-fgt"),
  zn = Symbol.for("v-txt"),
  Ae = Symbol.for("v-cmt"),
  ls = Symbol.for("v-stc"),
  en = [];
let Fe = null;
function ae(e = !1) {
  en.push((Fe = e ? null : []));
}
function Yl() {
  en.pop(), (Fe = en[en.length - 1] || null);
}
let on = 1;
function ar(e) {
  (on += e), e < 0 && Fe && (Fe.hasOnce = !0);
}
function Gi(e) {
  return (
    (e.dynamicChildren = on > 0 ? Fe || $t : null),
    Yl(),
    on > 0 && Fe && Fe.push(e),
    e
  );
}
function mt(e, t, n, s, r, i) {
  return Gi(N(e, t, n, s, r, i, !0));
}
function Oe(e, t, n, s, r) {
  return Gi(le(e, t, n, s, r, !0));
}
function ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function It(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qi = ({ key: e }) => e ?? null,
  Sn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ce(e) || ye(e) || F(e)
        ? { i: ve, r: e, k: t, f: !!n }
        : e
      : null
  );
function N(
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
    key: t && qi(t),
    ref: t && Sn(t),
    scopeId: di,
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
    ctx: ve,
  };
  return (
    l
      ? (Ks(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ce(n) ? 8 : 16),
    on > 0 &&
      !o &&
      Fe &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Fe.push(c),
    c
  );
}
const le = Jl;
function Jl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === wi) && (e = Ae), ln(e))) {
    const l = vt(e, t, !0);
    return (
      n && Ks(l, n),
      on > 0 &&
        !i &&
        Fe &&
        (l.shapeFlag & 6 ? (Fe[Fe.indexOf(e)] = l) : Fe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((ic(e) && (e = e.__vccOpts), t)) {
    t = js(t);
    let { class: l, style: c } = t;
    l && !ce(l) && (t.class = Ve(l)),
      te(c) && ($s(c) && !P(c) && (c = de({}, c)), (t.style = Je(c)));
  }
  const o = ce(e) ? 1 : Wi(e) ? 128 : pi(e) ? 64 : te(e) ? 4 : F(e) ? 2 : 0;
  return N(e, t, n, s, r, o, i, !0);
}
function js(e) {
  return e ? ($s(e) || Di(e) ? de({}, e) : e) : null;
}
function vt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    u = t ? Yi(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && qi(u),
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
  return c && s && Mt(a, c.clone(a)), a;
}
function Bs(e = " ", t = 0) {
  return le(zn, null, e, t);
}
function zi(e = "", t = !1) {
  return t ? (ae(), Oe(Ae, null, e)) : le(Ae, null, e);
}
function ze(e) {
  return e == null || typeof e == "boolean"
    ? le(Ae)
    : P(e)
      ? le(Se, null, e.slice())
      : ln(e)
        ? dt(e)
        : le(zn, null, String(e));
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
      !r && !Di(t)
        ? (t._ctx = ve)
        : r === 3 &&
          ve &&
          (ve.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    F(t)
      ? ((t = { default: t, _ctx: ve }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Bs(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Yi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ve([t.class, s.class]));
      else if (r === "style") t.style = Je([t.style, s.style]);
      else if (Nn(r)) {
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
function Ge(e, t, n, s = null) {
  Ue(e, t, 7, [n, s]);
}
const Zl = Oi();
let Xl = 0;
function Ql(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Zl,
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
      propsOptions: Fi(s, r),
      emitsOptions: Ui(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
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
let be = null;
const Ji = () => be || ve;
let Dn, xs;
{
  const e = jn(),
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
  (Dn = t("__VUE_INSTANCE_SETTERS__", (n) => (be = n))),
    (xs = t("__VUE_SSR_SETTERS__", (n) => (cn = n)));
}
const hn = (e) => {
    const t = be;
    return (
      Dn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Dn(t);
      }
    );
  },
  ur = () => {
    be && be.scope.off(), Dn(null);
  };
function Zi(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function ec(e, t = !1, n = !1) {
  t && xs(t);
  const { props: s, children: r } = e.vnode,
    i = Zi(e);
  Ol(e, s, i, t), Dl(e, r, n);
  const o = i ? tc(e, t) : void 0;
  return t && xs(!1), o;
}
function tc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, xl));
  const { setup: s } = n;
  if (s) {
    bt();
    const r = (e.setupContext = s.length > 1 ? sc(e) : null),
      i = hn(e),
      o = pn(s, e, 0, [e.props, r]),
      l = Fr(o);
    if ((_t(), i(), (l || e.sp) && !kt(e) && bi(e), l)) {
      if ((o.then(ur, ur), t))
        return o
          .then((c) => {
            dr(e, c, t);
          })
          .catch((c) => {
            Vn(c, e, 0);
          });
      e.asyncDep = o;
    } else dr(e, o, t);
  } else Xi(e, t);
}
function dr(e, t, n) {
  F(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : te(t) && (e.setupState = li(t)),
    Xi(e, n);
}
let pr;
function Xi(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && pr && !s.render) {
      const r = s.template || ks(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          u = de(de({ isCustomElement: i, delimiters: l }, o), c);
        s.render = pr(r, u);
      }
    }
    e.render = s.render || Ye;
  }
  {
    const r = hn(e);
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
function Yn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(li(Go(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Xt) return Xt[n](e);
          },
          has(t, n) {
            return n in t || n in Xt;
          },
        }))
    : e.proxy;
}
function rc(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function ic(e) {
  return F(e) && "__vccOpts" in e;
}
const $e = (e, t) => nl(e, t, cn);
function oc(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? te(t) && !P(t)
      ? ln(t)
        ? le(e, null, [t])
        : le(e, t)
      : le(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && ln(n) && (n = [n]),
      le(e, t, n));
}
const lc = "3.5.12";
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Cs;
const hr = typeof window < "u" && window.trustedTypes;
if (hr)
  try {
    Cs = hr.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Qi = Cs ? (e) => Cs.createHTML(e) : (e) => e,
  cc = "http://www.w3.org/2000/svg",
  fc = "http://www.w3.org/1998/Math/MathML",
  tt = typeof document < "u" ? document : null,
  gr = tt && tt.createElement("template"),
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
          ? tt.createElementNS(cc, e)
          : t === "mathml"
            ? tt.createElementNS(fc, e)
            : n
              ? tt.createElement(e, { is: n })
              : tt.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => tt.createTextNode(e),
    createComment: (e) => tt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => tt.querySelector(e),
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
        gr.innerHTML = Qi(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const l = gr.content;
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
  Gt = "animation",
  Kt = Symbol("_vtc"),
  eo = {
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
  to = de({}, gi, eo),
  uc = (e) => ((e.displayName = "Transition"), (e.props = to), e),
  dc = uc((e, { slots: t }) => oc(al, no(e), t)),
  Tt = (e, t = []) => {
    P(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  mr = (e) => (e ? (P(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function no(e) {
  const t = {};
  for (const I in e) I in eo || (t[I] = e[I]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: u = o,
      appearToClass: a = l,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: g = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    S = pc(r),
    T = S && S[0],
    U = S && S[1],
    {
      onBeforeEnter: M,
      onEnter: K,
      onEnterCancelled: W,
      onLeave: L,
      onLeaveCancelled: G,
      onBeforeAppear: R = M,
      onAppear: ne = K,
      onAppearCancelled: ge = W,
    } = t,
    k = (I, Z, he) => {
      ft(I, Z ? a : l), ft(I, Z ? u : o), he && he();
    },
    z = (I, Z) => {
      (I._isLeaving = !1), ft(I, p), ft(I, m), ft(I, g), Z && Z();
    },
    oe = (I) => (Z, he) => {
      const Ze = I ? ne : K,
        pe = () => k(Z, I, he);
      Tt(Ze, [Z, pe]),
        vr(() => {
          ft(Z, I ? c : i), et(Z, I ? a : l), mr(Ze) || yr(Z, s, T, pe);
        });
    };
  return de(t, {
    onBeforeEnter(I) {
      Tt(M, [I]), et(I, i), et(I, o);
    },
    onBeforeAppear(I) {
      Tt(R, [I]), et(I, c), et(I, u);
    },
    onEnter: oe(!1),
    onAppear: oe(!0),
    onLeave(I, Z) {
      I._isLeaving = !0;
      const he = () => z(I, Z);
      et(I, p),
        et(I, g),
        ro(),
        vr(() => {
          I._isLeaving && (ft(I, p), et(I, m), mr(L) || yr(I, s, U, he));
        }),
        Tt(L, [I, he]);
    },
    onEnterCancelled(I) {
      k(I, !1), Tt(W, [I]);
    },
    onAppearCancelled(I) {
      k(I, !0), Tt(ge, [I]);
    },
    onLeaveCancelled(I) {
      z(I), Tt(G, [I]);
    },
  });
}
function pc(e) {
  if (e == null) return null;
  if (te(e)) return [cs(e.enter), cs(e.leave)];
  {
    const t = cs(e);
    return [t, t];
  }
}
function cs(e) {
  return mo(e);
}
function et(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Kt] || (e[Kt] = new Set())).add(t);
}
function ft(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Kt];
  n && (n.delete(t), n.size || (e[Kt] = void 0));
}
function vr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hc = 0;
function yr(e, t, n, s) {
  const r = (e._endId = ++hc),
    i = () => {
      r === e._endId && s();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = so(e, t);
  if (!o) return s();
  const u = o + "end";
  let a = 0;
  const p = () => {
      e.removeEventListener(u, g), i();
    },
    g = (m) => {
      m.target === e && ++a >= c && p();
    };
  setTimeout(() => {
    a < c && p();
  }, l + 1),
    e.addEventListener(u, g);
}
function so(e, t) {
  const n = window.getComputedStyle(e),
    s = (S) => (n[S] || "").split(", "),
    r = s(`${ct}Delay`),
    i = s(`${ct}Duration`),
    o = br(r, i),
    l = s(`${Gt}Delay`),
    c = s(`${Gt}Duration`),
    u = br(l, c);
  let a = null,
    p = 0,
    g = 0;
  t === ct
    ? o > 0 && ((a = ct), (p = o), (g = i.length))
    : t === Gt
      ? u > 0 && ((a = Gt), (p = u), (g = c.length))
      : ((p = Math.max(o, u)),
        (a = p > 0 ? (o > u ? ct : Gt) : null),
        (g = a ? (a === ct ? i.length : c.length) : 0));
  const m =
    a === ct && /\b(transform|all)(,|$)/.test(s(`${ct}Property`).toString());
  return { type: a, timeout: p, propCount: g, hasTransform: m };
}
function br(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => _r(n) + _r(e[s])));
}
function _r(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ro() {
  return document.body.offsetHeight;
}
function gc(e, t, n) {
  const s = e[Kt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t);
}
const xr = Symbol("_vod"),
  mc = Symbol("_vsh"),
  vc = Symbol(""),
  yc = /(^|;)\s*display\s*:/;
function bc(e, t, n) {
  const s = e.style,
    r = ce(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ce(t))
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
  xr in e && ((e[xr] = i ? s.display : ""), e[mc] && (s.display = "none"));
}
const Cr = /\s*!important$/;
function wn(e, t, n) {
  if (P(n)) n.forEach((s) => wn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = _c(e, t);
    Cr.test(n)
      ? e.setProperty(yt(s), n.replace(Cr, ""), "important")
      : (e[s] = n);
  }
}
const Sr = ["Webkit", "Moz", "ms"],
  fs = {};
function _c(e, t) {
  const n = fs[t];
  if (n) return n;
  let s = He(t);
  if (s !== "filter" && s in e) return (fs[t] = s);
  s = Hn(s);
  for (let r = 0; r < Sr.length; r++) {
    const i = Sr[r] + s;
    if (i in e) return (fs[t] = i);
  }
  return t;
}
const wr = "http://www.w3.org/1999/xlink";
function Tr(e, t, n, s, r, i = Co(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(wr, t.slice(6, t.length))
      : e.setAttributeNS(wr, t, n)
    : n == null || (i && !Br(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : Ke(n) ? String(n) : n);
}
function Er(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Qi(n) : n);
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
const Ir = Symbol("_vei");
function Cc(e, t, n, s, r = null) {
  const i = e[Ir] || (e[Ir] = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, c] = Sc(t);
    if (s) {
      const u = (i[t] = Ec(s, r));
      Vs(e, l, u, c);
    } else o && (xc(e, l, o, c), (i[t] = void 0));
  }
}
const Ar = /(?:Once|Passive|Capture)$/;
function Sc(e) {
  let t;
  if (Ar.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Ar)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t];
}
let as = 0;
const wc = Promise.resolve(),
  Tc = () => as || (wc.then(() => (as = 0)), (as = Date.now()));
function Ec(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Ue(Ic(s, n.value), t, 5, [s]);
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
const Or = (e) =>
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
        : Nn(t)
          ? Ts(t) || Cc(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Oc(e, t, s, o)
              )
            ? (Er(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Tr(e, t, s, o, i, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !ce(s))
              ? Er(e, He(t), s, i, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Tr(e, t, s, o));
  };
function Oc(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Or(t) && F(n))
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
  return Or(t) && ce(n) ? !1 : t in e;
}
const io = new WeakMap(),
  oo = new WeakMap(),
  $n = Symbol("_moveCb"),
  Pr = Symbol("_enterCb"),
  Pc = (e) => (delete e.props.mode, e),
  Mc = Pc({
    name: "TransitionGroup",
    props: de({}, to, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Ji(),
        s = hi();
      let r, i;
      return (
        xi(() => {
          if (!r.length) return;
          const o = e.moveClass || `${e.name || "v"}-move`;
          if (!Rc(r[0].el, n.vnode.el, o)) return;
          r.forEach(Dc), r.forEach($c);
          const l = r.filter(Fc);
          ro(),
            l.forEach((c) => {
              const u = c.el,
                a = u.style;
              et(u, o),
                (a.transform = a.webkitTransform = a.transitionDuration = "");
              const p = (u[$n] = (g) => {
                (g && g.target !== u) ||
                  ((!g || /transform$/.test(g.propertyName)) &&
                    (u.removeEventListener("transitionend", p),
                    (u[$n] = null),
                    ft(u, o)));
              });
              u.addEventListener("transitionend", p);
            });
        }),
        () => {
          const o = j(e),
            l = no(o);
          let c = o.tag || Se;
          if (((r = []), i))
            for (let u = 0; u < i.length; u++) {
              const a = i[u];
              a.el &&
                a.el instanceof Element &&
                (r.push(a),
                Mt(a, rn(a, l, s, n)),
                io.set(a, a.el.getBoundingClientRect()));
            }
          i = t.default ? Rs(t.default()) : [];
          for (let u = 0; u < i.length; u++) {
            const a = i[u];
            a.key != null && Mt(a, rn(a, l, s, n));
          }
          return le(c, null, i);
        }
      );
    },
  }),
  Lc = Mc;
function Dc(e) {
  const t = e.el;
  t[$n] && t[$n](), t[Pr] && t[Pr]();
}
function $c(e) {
  oo.set(e, e.el.getBoundingClientRect());
}
function Fc(e) {
  const t = io.get(e),
    n = oo.get(e),
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
    r = e[Kt];
  r &&
    r.forEach((l) => {
      l.split(/\s+/).forEach((c) => c && s.classList.remove(c));
    }),
    n.split(/\s+/).forEach((l) => l && s.classList.add(l)),
    (s.style.display = "none");
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: o } = so(s);
  return i.removeChild(s), o;
}
const Fn = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return P(t) ? (n) => Cn(t, n) : t;
  },
  jt = Symbol("_assign"),
  Nc = {
    deep: !0,
    created(e, t, n) {
      (e[jt] = Fn(n)),
        Vs(e, "change", () => {
          const s = e._modelValue,
            r = fn(e),
            i = e.checked,
            o = e[jt];
          if (P(s)) {
            const l = As(s, r),
              c = l !== -1;
            if (i && !c) o(s.concat(r));
            else if (!i && c) {
              const u = [...s];
              u.splice(l, 1), o(u);
            }
          } else if (Vt(s)) {
            const l = new Set(s);
            i ? l.add(r) : l.delete(r), o(l);
          } else o(lo(e, i));
        });
    },
    mounted: Mr,
    beforeUpdate(e, t, n) {
      (e[jt] = Fn(n)), Mr(e, t, n);
    },
  };
function Mr(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let r;
  if (P(t)) r = As(t, s.props.value) > -1;
  else if (Vt(t)) r = t.has(s.props.value);
  else {
    if (t === n) return;
    r = un(t, lo(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const kc = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Vt(t);
    Vs(e, "change", () => {
      const i = Array.prototype.filter
        .call(e.options, (o) => o.selected)
        .map((o) => (n ? Hr(fn(o)) : fn(o)));
      e[jt](e.multiple ? (r ? new Set(i) : i) : i[0]),
        (e._assigning = !0),
        On(() => {
          e._assigning = !1;
        });
    }),
      (e[jt] = Fn(s));
  },
  mounted(e, { value: t }) {
    Lr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[jt] = Fn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Lr(e, t);
  },
};
function Lr(e, t) {
  const n = e.multiple,
    s = P(t);
  if (!(n && !s && !Vt(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r],
        l = fn(o);
      if (n)
        if (s) {
          const c = typeof l;
          c === "string" || c === "number"
            ? (o.selected = t.some((u) => String(u) === String(l)))
            : (o.selected = As(t, l) > -1);
        } else o.selected = t.has(l);
      else if (un(fn(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function fn(e) {
  return "_value" in e ? e._value : e.value;
}
function lo(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Hc = ["ctrl", "shift", "alt", "meta"],
  jc = {
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
    exact: (e, t) => Hc.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Ss = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = jc[t[o]];
          if (l && l(r, t)) return;
        }
        return e(r, ...i);
      })
    );
  },
  Bc = {
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
        if (t.some((o) => o === i || Bc[o] === i)) return e(r);
      })
    );
  },
  Vc = de({ patchProp: Ac }, ac);
let Dr;
function Uc() {
  return Dr || (Dr = Fl(Vc));
}
const Wc = (...e) => {
  const t = Uc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = qc(s);
      if (!r) return;
      const i = t._component;
      !F(i) && !i.render && !i.template && (i.template = r.innerHTML),
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
  return ce(e) ? document.querySelector(e) : e;
}
function zc(e) {
  return Ur() ? (To(e), !0) : !1;
}
function Us(e) {
  return typeof e == "function" ? e() : B(e);
}
const Yc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Jc = Object.prototype.toString,
  Zc = (e) => Jc.call(e) === "[object Object]",
  Xc = () => {};
function Qc(e, t, n = !1) {
  return t.reduce(
    (s, r) => (r in e && (!n || e[r] !== void 0) && (s[r] = e[r]), s),
    {},
  );
}
function ef(e, t = {}) {
  if (!ye(e)) return Xo(e);
  const n = Array.isArray(e.value)
    ? Array.from({ length: e.value.length })
    : {};
  for (const s in e.value)
    n[s] = Zo(() => ({
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
const Ws = Yc ? window : void 0;
function tf(e) {
  var t;
  const n = Us(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Bt(...e) {
  let t, n, s, r;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = Ws))
      : ([t, n, s, r] = e),
    !t)
  )
    return Xc;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [],
    o = () => {
      i.forEach((a) => a()), (i.length = 0);
    },
    l = (a, p, g, m) => (
      a.addEventListener(p, g, m), () => a.removeEventListener(p, g, m)
    ),
    c = rt(
      () => [tf(t), Us(r)],
      ([a, p]) => {
        if ((o(), !a)) return;
        const g = Zc(p) ? { ...p } : p;
        i.push(...n.flatMap((m) => s.map((S) => l(a, m, S, g))));
      },
      { immediate: !0, flush: "post" },
    ),
    u = () => {
      c(), o();
    };
  return zc(u), u;
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
  const { target: t = Ws } = e,
    n = ue(!1),
    s = ue(e.initialValue || {});
  Object.assign(s.value, co, s.value);
  const r = (i) => {
    (n.value = !0),
      !(e.pointerTypes && !e.pointerTypes.includes(i.pointerType)) &&
        (s.value = Qc(i, nf, !1));
  };
  if (t) {
    const i = { passive: !0 };
    Bt(t, ["pointerdown", "pointermove", "pointerup"], r, i),
      Bt(t, "pointerleave", () => (n.value = !1), i);
  }
  return { ...ef(s), isInside: n };
}
function sf(e = {}) {
  const { window: t = Ws, behavior: n = "auto" } = e;
  if (!t) return { x: ue(0), y: ue(0) };
  const s = ue(t.scrollX),
    r = ue(t.scrollY),
    i = $e({
      get() {
        return s.value;
      },
      set(l) {
        scrollTo({ left: l, behavior: n });
      },
    }),
    o = $e({
      get() {
        return r.value;
      },
      set(l) {
        scrollTo({ top: l, behavior: n });
      },
    });
  return (
    Bt(
      t,
      "scroll",
      () => {
        (s.value = t.scrollX), (r.value = t.scrollY);
      },
      { capture: !1, passive: !0 },
    ),
    { x: i, y: o }
  );
}
const qt = ue(void 0),
  gn = () => {
    function e(n) {
      return qt.value === void 0 ? !1 : n === qt.value.payload;
    }
    function t(n) {
      return qt.value === void 0
        ? !1
        : qt.value.dropTargets.some((s) => s !== void 0 && n.includes(s));
    }
    return { isMoving: e, movingItemCanTarget: t, movingItem: qt };
  },
  { movingItemCanTarget: rf } = gn(),
  pt = dn({}),
  Gs = ue(void 0),
  of = $e(() => {
    var e;
    return (e = Gs.value) == null ? void 0 : e.identifier;
  });
rt(
  () =>
    Reflect.ownKeys(pt)
      .filter((e) => rf([e, pt[e].group]))
      .filter((e) => pt[e].pointerIsAbove)
      .toSorted((e, t) => pt[t].stackLevel - pt[e].stackLevel)
      .map((e) => pt[e]),
  (e) => {
    Gs.value = e.length ? e.at(0) : void 0;
  },
);
rt(
  () => Gs.value,
  (e, t) => {
    e !== t && (t && t.leaveList(), e && e.enterList());
  },
);
const lf = () => {
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
    return { addList: e, removeList: t, targetedList: of };
  },
  Tn = it({
    __name: "PointerElement",
    props: { tag: { type: String, default: "div" } },
    emits: ["pointer-enter", "pointer-leave"],
    setup(e, { expose: t, emit: n }) {
      const s = ue(),
        { x: r, y: i } = fo(),
        o = $e(() => {
          const u = s.value.getBoundingClientRect();
          return (
            r.value >= u.x &&
            r.value <= u.x + u.width &&
            i.value >= u.y &&
            i.value <= u.y + u.height
          );
        }),
        l = n;
      return (
        t({ isAbove: o }),
        Gn(() => {
          rt(o, (c, u) => {
            c && !u
              ? l("pointer-enter", s.value)
              : u && !c && l("pointer-leave", s.value);
          });
        }),
        (c, u) => (
          ae(),
          Oe(
            Mn(e.tag),
            { ref_key: "PointerElement", ref: s },
            {
              default: me(() => [At(c.$slots, "default", jr(js(c.$attrs)))]),
              _: 3,
            },
            512,
          )
        )
      );
    },
  }),
  Jn = it({
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
        r = $e(() => n.identifier ?? s),
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
        o = $e(() => ({ ...i, ...n.options })),
        l = $e(() =>
          typeof o.value.homingEffect == "boolean" && o.value.homingEffect
            ? "arrangeable-list__homing-effect"
            : o.value.homingEffect || "",
        ),
        c = fo(),
        { x: u, y: a } = sf(),
        { movingItem: p, isMoving: g, movingItemCanTarget: m } = gn(),
        { addList: S, removeList: T, targetedList: U } = lf(),
        M = ue(),
        K = ue();
      let W = 0,
        L = 0,
        G;
      const R = ue([]),
        ne = $e(() => R.value.map(({ payload: A }) => A) || []);
      function ge(A) {
        const Y = [];
        A.forEach((H) => {
          const q = n.listKey
            ? R.value.find(({ key: fe }) => fe === H[n.listKey])
            : R.value.find(({ payload: fe }) => H === fe);
          q
            ? Y.push({ ...q, payload: H })
            : Y.push({
                key:
                  n.listKey && Object.keys(H).includes(n.listKey)
                    ? H[n.listKey]
                    : Symbol(),
                payload: H,
              });
        }),
          (R.value = Y);
      }
      rt(() => n.list, ge, { deep: !0 }),
        rt(
          () => {
            var A;
            return (A = p.value) == null ? void 0 : A.destination;
          },
          (A, Y) => {
            (A == null ? void 0 : A.identifier) !== r.value &&
              (Y == null ? void 0 : Y.identifier) === r.value &&
              (R.value = R.value.filter(({ payload: H }) => {
                var q;
                return H !== ((q = p.value) == null ? void 0 : q.payload);
              }));
          },
        );
      const k = t,
        z = (A) => {
          var Y, H;
          if (
            p.value &&
            ((H = (Y = p.value) == null ? void 0 : Y.destination) == null
              ? void 0
              : H.identifier) === r.value &&
            !g(ne.value[A])
          ) {
            if (
              R.value.findIndex(({ payload: q }) => {
                var fe;
                return q === ((fe = p.value) == null ? void 0 : fe.payload);
              }) === -1
            )
              R.value.splice(A, 0, {
                payload: p.value.payload,
                key: p.value.key,
              });
            else {
              const q = R.value.findIndex(({ payload: fe }) => {
                var lt;
                return fe === ((lt = p.value) == null ? void 0 : lt.payload);
              });
              R.value =
                q < A
                  ? [
                      ...R.value.slice(0, q),
                      ...R.value.slice(q + 1, A + 1),
                      R.value[q],
                      ...R.value.slice(A + 1),
                    ]
                  : [
                      ...R.value.slice(0, A),
                      R.value[q],
                      ...R.value.slice(A, q),
                      ...R.value.slice(q + 1),
                    ];
            }
            (p.value.destination.index = A),
              (p.value.destination.listItems = ne.value);
          }
        },
        oe = () => {
          var Y;
          if (p.value === void 0) return;
          const A = ne.value.indexOf(p.value.payload);
          A >= 0 && R.value.splice(A, 1),
            ((Y = p.value.destination) == null ? void 0 : Y.identifier) ===
              r.value && (p.value.destination = p.value.origin);
        },
        I = () => {
          p.value &&
            (ne.value.length === 0 &&
              (R.value = [{ payload: p.value.payload, key: p.value.key }]),
            (p.value.destination = {
              identifier: r.value,
              type: "list",
              group: n.group,
              listItems: ne.value,
              meta: n.meta,
            }));
        },
        Z = (A, Y) => {
          A &&
            Y.split(" ").forEach((H) => {
              H && A.classList.add(H);
            });
        },
        he = (A, Y) => {
          A &&
            Y.split(" ").forEach((H) => {
              H && A.classList.remove(H);
            });
        },
        Ze = $e(() =>
          typeof o.value.handle == "string" ? o.value.handle : "",
        ),
        pe = (A, { key: Y, payload: H }) => {
          (G = A.getBoundingClientRect()),
            (W = c.x.value - G.x),
            (L = c.y.value - G.y);
          const q = ne.value.indexOf(H),
            fe = {
              identifier: r.value,
              type: "list",
              group: n.group,
              listItems: ne.value,
              index: q,
            };
          (p.value = {
            payload: H,
            hoverElement: M,
            origin: fe,
            destination: { ...fe, meta: n.meta },
            dropTargets: [n.targets ?? n.group ?? r.value].flat(),
            key: Y,
          }),
            On(() => {
              xt(),
                Z(M.value, o.value.hoverTransitionClass || ""),
                Z(M.value, o.value.hoverClass || ""),
                Bt(
                  M.value,
                  "transitionend",
                  () => {
                    he(M.value, o.value.hoverTransitionClass || "");
                  },
                  { once: !0 },
                );
            }),
            p.value && k("liftItem", j(p.value));
        };
      let se;
      const X = (A, Y) => {
          const { target: H, currentTarget: q } = A;
          (o.value.handle &&
            (H == null ? void 0 : H.getAttribute("data-handle")) !==
              Ze.value) ||
            (se = setTimeout(() => {
              pe(q, Y);
            }, o.value.liftDelay));
        },
        Xe = () => {
          clearTimeout(se);
        },
        xt = () => {
          var A;
          we.value =
            ((A = document.getElementById("arrangeable-list-target-element")) ==
            null
              ? void 0
              : A.getBoundingClientRect()) ?? G;
        },
        we = ue(),
        Re = () => {
          if (p.value === void 0 || p.value.origin.identifier !== r.value)
            return;
          let A = !1;
          On(() => {
            xt(),
              Z(M.value, o.value.hoverTransitionClass || ""),
              l.value && Z(M.value, l.value);
            let Y = getComputedStyle(M.value).transitionProperty,
              H = getComputedStyle(M.value).transitionDuration;
            Y !== "none" &&
              H.split(", ").some((q) => parseFloat(q) > 0) &&
              (A = !0),
              he(M.value, o.value.hoverClass || ""),
              A
                ? Bt(M.value, "transitionend", () => (p.value = void 0), {
                    once: !0,
                  })
                : (p.value = void 0);
          }),
            k("dropItem", j(p.value)),
            ge(n.list);
        };
      Bt(document, "pointerup", () => {
        Xe(), Re();
      });
      const mn = Symbol(),
        Zn = Symbol(),
        vn = Qt("arrangeableListStackLevel", 0);
      Pi("arrangeableListStackLevel", vn + 1);
      const Ct = $e(() => U.value === r.value);
      return (
        Gn(() => {
          S(
            r.value,
            n.group,
            vn,
            $e(() => {
              var A;
              return ((A = K.value) == null ? void 0 : A.isAbove) ?? !1;
            }),
            I,
            oe,
          ),
            ge(n.list),
            (document.body.style.touchAction = "none");
        }),
        Ns(() => {
          T(r.value), (document.body.style.touchAction = "");
        }),
        (A, Y) => (
          ae(),
          Oe(
            Tn,
            {
              name: "ArrangeableList",
              ref_key: "listElement",
              ref: K,
              tag: A.tag ?? "ul",
              class: Ve(Ct.value ? o.value.hoveredOverListClass : ""),
            },
            {
              default: me(() => [
                le(
                  Lc,
                  jr(
                    js(
                      !B(p) || B(m)([r.value, A.group])
                        ? o.value.listTransition
                        : {},
                    ),
                  ),
                  {
                    default: me(() => [
                      (ae(),
                      Oe(
                        Mn(A.listItemTag ?? "li"),
                        { key: B(mn) },
                        {
                          default: me(() => [
                            At(A.$slots, "before", { arrangedItems: ne.value }),
                          ]),
                          _: 3,
                        },
                      )),
                      (ae(!0),
                      mt(
                        Se,
                        null,
                        Ei(
                          R.value || [],
                          (H, q) => (
                            ae(),
                            Oe(
                              Tn,
                              {
                                key: H.key,
                                tag: A.listItemTag ?? "li",
                                id: B(g)(H.payload)
                                  ? "arrangeable-list-target-element"
                                  : void 0,
                                class: Ve(
                                  B(g)(H.payload)
                                    ? [
                                        o.value.defaultItemClass,
                                        o.value.pickedItemClass,
                                      ].join(" ")
                                    : o.value.defaultItemClass,
                                ),
                                onTouchstart: Ss(
                                  (fe) => X(fe, H),
                                  ["left", "prevent"],
                                ),
                                onPointerdown: Ss(
                                  (fe) => X(fe, H),
                                  ["left", "stop"],
                                ),
                                onPointerEnter: (fe) => z(q),
                              },
                              {
                                default: me(() => [
                                  At(A.$slots, "default", {
                                    item: H.payload,
                                    arrangedItems: ne.value,
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
                      (ae(),
                      Oe(
                        Tn,
                        {
                          key: B(Zn),
                          tag: A.listItemTag ?? "li",
                          onPointerEnter:
                            Y[0] || (Y[0] = (H) => z(R.value.length)),
                        },
                        {
                          default: me(() => [
                            At(A.$slots, "after", { arrangedItems: ne.value }),
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
                B(p) && B(p).origin.identifier === r.value
                  ? (ae(),
                    Oe(
                      dc,
                      { key: 0, ref_key: "hoverElement", ref: M },
                      {
                        default: me(() => {
                          var H, q, fe, lt, f, d, h, y;
                          return [
                            (ae(),
                            Oe(
                              Mn(A.listItemTag ?? "li"),
                              {
                                style: Je([
                                  {
                                    left: B(c).x.value - B(W) + B(u) + "px",
                                    top: B(c).y.value - B(L) + B(a) + "px",
                                    width:
                                      ((H = B(G)) == null ? void 0 : H.width) +
                                      "px",
                                    height:
                                      ((q = B(G)) == null ? void 0 : q.height) +
                                      "px",
                                    "--landingzone-top":
                                      ((fe = we.value) == null
                                        ? void 0
                                        : fe.top) + "px",
                                    "--landingzone-left":
                                      ((lt = we.value) == null
                                        ? void 0
                                        : lt.left) + "px",
                                    "--landingzone-right":
                                      ((f = we.value) == null
                                        ? void 0
                                        : f.right) + "px",
                                    "--landingzone-bottom":
                                      ((d = we.value) == null
                                        ? void 0
                                        : d.bottom) + "px",
                                    "--landingzone-width":
                                      ((h = we.value) == null
                                        ? void 0
                                        : h.width) + "px",
                                    "--landingzone-height":
                                      ((y = we.value) == null
                                        ? void 0
                                        : y.height) + "px",
                                  },
                                  {
                                    "z-index": "100000000",
                                    position: "absolute",
                                  },
                                ]),
                              },
                              {
                                default: me(() => [
                                  At(A.$slots, "default", {
                                    item: B(p).payload,
                                  }),
                                ]),
                                _: 3,
                              },
                              8,
                              ["style"],
                            )),
                          ];
                        }),
                        _: 3,
                      },
                      512,
                    ))
                  : zi("", !0),
              ]),
              _: 3,
            },
            8,
            ["tag", "class"],
          )
        )
      );
    },
  }),
  cf = it({
    __name: "DropZone",
    props: {
      options: { default: () => ({ hoverClass: "" }) },
      identifier: { default: Symbol() },
      group: {},
    },
    emits: ["enterZone", "leaveZone"],
    setup(e, { emit: t }) {
      const n = e,
        { movingItem: s } = gn(),
        r = ue(),
        i = t,
        o = () => {
          var c, u;
          ((u = (c = s.value) == null ? void 0 : c.destination) == null
            ? void 0
            : u.identifier) === n.identifier &&
            ((s.value.destination = void 0), i("leaveZone", j(s.value)));
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
            i("enterZone", j(s.value)));
        };
      return (c, u) => {
        var a, p;
        return (
          ae(),
          Oe(
            Tn,
            Yi(
              {
                onPointerLeave: o,
                onPointerEnter: l,
                id:
                  ((p = (a = B(s)) == null ? void 0 : a.destination) == null
                    ? void 0
                    : p.identifier) === n.identifier
                    ? "arrangeable-list-target-element"
                    : void 0,
              },
              c.$attrs,
              { ref_key: "dropZone", ref: r },
            ),
            {
              default: me(() => {
                var g, m, S, T;
                return [
                  At(c.$slots, "default", {
                    isHovering:
                      ((m = (g = B(s)) == null ? void 0 : g.destination) == null
                        ? void 0
                        : m.identifier) === n.identifier,
                    class: Ve(
                      ((T = (S = B(s)) == null ? void 0 : S.destination) == null
                        ? void 0
                        : T.identifier) === n.identifier
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
  us = () => {
    const e = Object.keys(Rn);
    return Rn[e[Math.floor(Math.random() * e.length)]];
  },
  Rn = {
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
  ff = { class: "flex flex-grow flex-col items-center overflow-auto" },
  $r = it({
    __name: "ColorSorting",
    setup(e) {
      const t = ue(
          Object.keys(Rn).map((i, o) => ({
            name: i,
            color: Rn[i][300],
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
        ae(),
        mt("main", ff, [
          o[0] ||
            (o[0] = N(
              "h1",
              { class: "m-2 text-xl font-extrabold" },
              "Tailwind color sorting game:",
              -1,
            )),
          N("div", null, [
            N(
              "button",
              {
                onClick: s,
                class:
                  "m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5",
              },
              " shuffle ",
            ),
            N(
              "button",
              {
                onClick: r,
                class:
                  "m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5",
              },
              " reset ",
            ),
          ]),
          le(
            B(Jn),
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
              default: me(({ item: l }) => [
                N(
                  "div",
                  {
                    class:
                      "m-2 flex h-10 w-96 cursor-grab select-none justify-center rounded-lg p-2 hover:drop-shadow-lg",
                    style: Je({ backgroundColor: l.color }),
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
  af = it({
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
        { movingItem: s } = gn(),
        r = (i, o) => {
          !i.target ||
            !o ||
            (n("add-item", i.target.value, o), (i.target.value = ""));
        };
      return (i, o) => (
        ae(),
        Oe(
          B(Jn),
          {
            list: i.items,
            identifier: i.list.id,
            group: i.group,
            options: { ...i.arrangeableOptions, handle: "cardHandle" },
            onDropItem: o[1] || (o[1] = (l) => n("drop-item", B(s))),
          },
          {
            default: me(({ item: l }) => [
              N(
                "div",
                {
                  class:
                    "m-1 flex items-center whitespace-normal break-words rounded border-2 border-black p-2 text-xl",
                  style: Je({ backgroundColor: i.list.color[300] }),
                },
                [
                  o[2] ||
                    (o[2] = N(
                      "div",
                      {
                        "data-handle": "cardHandle",
                        class: "mr-2 cursor-grab select-none",
                      },
                      " ︙ ",
                      -1,
                    )),
                  Bs(" " + gt(l.description), 1),
                ],
                4,
              ),
            ]),
            after: me(() => [
              N(
                "div",
                {
                  class:
                    "m-1 flex items-center rounded border-2 border-black p-2 text-xl",
                  style: Je({ backgroundColor: i.list.color[200] }),
                },
                [
                  N(
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
  uf = { class: "flex flex-grow flex-row items-start overflow-auto" },
  df = { class: "flex border-none p-2 text-2xl font-bold" },
  pf = ["onChange", "value"],
  hf = it({
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
        i = ue(
          n.map((g, m) => ({ name: g, id: Symbol(g), color: us(), index: m })),
        ),
        o = ue(
          t.map((g, m) => ({
            description: g,
            id: Symbol(),
            listId: i.value[Math.floor(Math.random() * n.length)].id,
            index: m,
          })),
        ),
        l = (g, m) => {
          o.value.push({
            description: g,
            id: Symbol(),
            listId: m,
            index: Math.max(...o.value.map(({ index: S }) => S)) + 1,
          });
        },
        c = (g) => {
          const m = g.target;
          i.value.push({
            name: m.value,
            id: Symbol(m.value),
            color: p.value,
            index: Math.max(...i.value.map(({ index: S }) => S)) + 1,
          }),
            (p.value = us()),
            (m.value = "");
        },
        u = (g) => {
          var S, T, U;
          const m = "listId" in g.payload ? o : i;
          g.destination !== void 0 &&
            (g.destination.identifier === r
              ? (m.value = m.value.filter(({ id: M }) => M !== g.payload.id))
              : (((S = g.destination.listItems) == null ? void 0 : S.length) ===
                  0 &&
                  ((g.payload.index = 0),
                  "listId" in g.payload &&
                    (g.payload.listId =
                      (T = g.destination) == null ? void 0 : T.identifier)),
                (U = g.destination.listItems) == null ||
                  U.forEach((M, K) => {
                    var W;
                    (M.index = K),
                      "listId" in M &&
                        (M.listId =
                          (W = g.destination) == null ? void 0 : W.identifier);
                  }),
                m.value.sort((M, K) => M.index - K.index)));
        },
        a = {
          hoverClass:
            "opacity-70 cursor-grabbing drop-shadow-[0_10px_15px_rgba(0,0,0,0.75)] scale-110 -rotate-3",
          pickedItemClass: "opacity-20",
        },
        p = ue(us());
      return (g, m) => (
        ae(),
        mt("main", uf, [
          le(
            B(Jn),
            {
              list: i.value,
              identifier: "lists",
              class: "flex flex-grow flex-row items-start overflow-auto",
              options: { ...a, handle: "listHandle" },
              onDropItem: u,
              targets: [B(r), "lists"],
            },
            {
              default: me(({ item: S }) => [
                N(
                  "div",
                  {
                    class:
                      "float-left m-1 h-fit w-60 rounded-md border-2 border-black",
                    style: Je({ backgroundColor: S.color[100] }),
                  },
                  [
                    N("div", df, [
                      m[0] ||
                        (m[0] = N(
                          "div",
                          {
                            "data-handle": "listHandle",
                            class: "mr-2 cursor-grab select-none",
                          },
                          " ︙ ",
                          -1,
                        )),
                      N(
                        "input",
                        {
                          class: "w-full bg-transparent",
                          onChange: (T) => {
                            var U;
                            return (S.name =
                              (U = T.target) == null ? void 0 : U.value);
                          },
                          value: S.name,
                        },
                        null,
                        40,
                        pf,
                      ),
                    ]),
                    le(
                      af,
                      {
                        list: S,
                        items: o.value.filter(({ listId: T }) => T === S.id),
                        group: B(s),
                        trashBin: B(r),
                        arrangeableOptions: a,
                        onAddItem: l,
                        onDropItem: u,
                      },
                      null,
                      8,
                      ["list", "items", "group", "trashBin"],
                    ),
                  ],
                  4,
                ),
              ]),
              after: me(() => [
                N(
                  "div",
                  {
                    class:
                      "m-1 flex h-fit w-60 rounded-md border-2 border-black p-2 text-2xl",
                    style: Je({ backgroundColor: p.value[100] }),
                  },
                  [
                    N(
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
          le(
            B(cf),
            { identifier: B(r), group: B(s), class: "inline-block" },
            {
              default: me(({ isHovering: S }) => [
                N(
                  "div",
                  {
                    class: Ve([
                      "flex h-40 w-40 items-center justify-center transition-all",
                      S ? "text-8xl" : "text-7xl",
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
  gf = {
    __name: "DisclosurePanel",
    setup(e) {
      const t = ue(!1);
      function n() {
        t.value = !t.value;
      }
      return (s, r) => (
        ae(),
        mt("div", null, [At(s.$slots, "default", { open: t.value, toggle: n })])
      );
    },
  },
  mf = {
    class:
      "flex items-center whitespace-normal break-words p-1 text-xl select-none",
  },
  vf = ["onClick"],
  yf = { "data-handle": "", class: "ml-1 cursor-grab flex flex-row w-full" },
  bf = ["value", "onChange"],
  _f = { class: "ml-auto text-slate-400" },
  xf = { key: 0, class: "ml-10 border-l-2 border-slate-300" },
  Cf = "⏷",
  Sf = "⏵",
  wf = "📁",
  Tf = "📂",
  Ef = "📄",
  If = it({
    __name: "FileSystemDirectory",
    props: { toc: {}, directory: {}, parent: {} },
    setup(e) {
      const { isMoving: t } = gn(),
        n = (s) => {
          var r;
          s.payload.parent =
            (r = s.destination) == null ? void 0 : r.identifier;
        };
      return (s, r) => {
        const i = _l("FileSystemDirectory", !0);
        return (
          ae(),
          Oe(
            Jn,
            {
              list: s.toc.filter((o) => o.parent === s.directory),
              identifier: s.directory,
              group: "directories",
              class: "rounded m-1 p-1",
              options: {
                handle: !0,
                pickedItemClass: "hidden bg-blue-200 rounded text-transparent",
                hoverClass: "opacity-80 bg-white cursor-grabbing rounded",
                hoveredOverListClass: "bg-sky-100",
                liftDelay: 200,
              },
              onDropItem: n,
            },
            {
              default: me(({ item: o }) => [
                le(
                  gf,
                  null,
                  {
                    default: me(({ open: l, toggle: c }) => [
                      N("div", mf, [
                        N(
                          "div",
                          {
                            class: Ve([
                              "w-4 cursor-pointer text-slate-400",
                              B(t)(o) && "invisible",
                            ]),
                            onClick: c,
                          },
                          gt(o.type === "directory" ? (l ? Cf : Sf) : ""),
                          11,
                          vf,
                        ),
                        N("div", yf, [
                          Bs(
                            gt(o.type === "directory" ? (l ? Tf : wf) : Ef) +
                              " ",
                            1,
                          ),
                          N(
                            "input",
                            {
                              "data-handle": "",
                              class: "ml-2 w-full bg-transparent cursor-grab",
                              value: o.name,
                              onChange: ({ target: u }) => (o.name = u.value),
                              onDblclick:
                                r[0] || (r[0] = (u) => u.target.focus()),
                              onMousedown:
                                r[1] || (r[1] = Ss(() => {}, ["prevent"])),
                              onKeyup:
                                r[2] ||
                                (r[2] = Kc((u) => u.target.blur(), ["enter"])),
                            },
                            null,
                            40,
                            bf,
                          ),
                          N("div", _f, gt(o.created.toLocaleDateString()), 1),
                        ]),
                      ]),
                      l && !B(t)(o)
                        ? (ae(),
                          mt("div", xf, [
                            le(
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
                        : zi("", !0),
                    ]),
                    _: 2,
                  },
                  1024,
                ),
              ]),
              _: 1,
            },
            8,
            ["list", "identifier"],
          )
        );
      };
    },
  }),
  Af = { class: "border-black border rounded-lg m-2 w-1/2" },
  Of = {
    name: "Controls",
    class: "flex flex-col border border-1 rounded m-1 border-slate-300",
  },
  Pf = { name: "Sorting control" },
  Mf = { name: "Directories first control" },
  Lf = it({
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
        u = Symbol("log"),
        a = dn([
          { id: s, name: "usr", parent: n, type: "directory" },
          { id: o, name: "bin", parent: s, type: "directory" },
          { id: c, name: "local", parent: s, type: "directory" },
          { id: r, name: "etc", parent: n, type: "directory" },
          { id: i, name: "var", parent: n, type: "directory" },
          { id: l, name: "lib", parent: n, type: "directory" },
          { id: u, name: "log", parent: i, type: "directory" },
          { id: Symbol(), name: "python3.sh", parent: c, type: "file" },
          { id: Symbol(), name: "grub.conf", parent: r, type: "file" },
          { id: Symbol(), name: "wallet.dat", parent: c, type: "file" },
          { id: Symbol(), name: "hostname", parent: r, type: "file" },
          { id: Symbol(), name: "sysctl.conf", parent: r, type: "file" },
          { id: Symbol(), name: ".Xauthority", parent: i, type: "file" },
          { id: Symbol(), name: "syslog", parent: u, type: "file" },
          { id: Symbol(), name: "grep", parent: o, type: "file" },
          { id: Symbol(), name: "umount", parent: o, type: "file" },
          { id: Symbol(), name: "swapfile", parent: n, type: "file" },
        ]);
      a.forEach((S, T) => {
        (S.index = T), (S.created = t());
      });
      const p = ue("none"),
        g = ue(!0),
        m = $e(() =>
          a.slice().sort((S, T) => {
            if (g.value) {
              if (S.type === "directory" && T.type !== "directory") return -1;
              if (S.type !== "directory" && T.type === "directory") return 1;
            }
            return p.value === "none"
              ? S.index - T.index
              : p.value === "name"
                ? S.name.localeCompare(T.name)
                : S.created.getTime() - T.created.getTime();
          }),
        );
      return (S, T) => (
        ae(),
        mt("div", Af, [
          N("div", Of, [
            N("div", Pf, [
              T[3] ||
                (T[3] = N(
                  "label",
                  { for: "sortDropdown", class: "m-2" },
                  "Sort by:",
                  -1,
                )),
              er(
                N(
                  "select",
                  {
                    id: "sortDropdown",
                    "onUpdate:modelValue":
                      T[0] || (T[0] = (U) => (p.value = U)),
                    class: "m-2 p-1",
                  },
                  T[2] ||
                    (T[2] = [
                      N("option", { value: "none" }, "-", -1),
                      N("option", { value: "name" }, "Name", -1),
                      N("option", { value: "created" }, "Created", -1),
                    ]),
                  512,
                ),
                [[kc, p.value]],
              ),
            ]),
            N("div", Mf, [
              T[4] ||
                (T[4] = N(
                  "label",
                  { for: "directoriesFirst", class: "m-2" },
                  "Directories first:",
                  -1,
                )),
              er(
                N(
                  "input",
                  {
                    id: "directoriesFirst",
                    type: "checkbox",
                    "onUpdate:modelValue":
                      T[1] || (T[1] = (U) => (g.value = U)),
                    class: "m-2 p-1",
                  },
                  null,
                  512,
                ),
                [[Nc, g.value]],
              ),
            ]),
          ]),
          T[5] ||
            (T[5] = N(
              "div",
              { class: "ml-14 p-1 font-bold flex flex-row w-full" },
              [
                N("div", null, "Name:"),
                N("div", { class: "ml-auto mr-16" }, "Created:"),
              ],
              -1,
            )),
          le(If, { toc: m.value, directory: B(n) }, null, 8, [
            "toc",
            "directory",
          ]),
        ])
      );
    },
  }),
  Df = { class: "flex h-screen flex-col" },
  $f = { class: "bg-blue-200 p-1" },
  Ff = { class: "flex flex-row" },
  Rf = ["onClick"],
  Nf = { class: "text-sm italic font-light text-wrap" },
  kf = it({
    __name: "App",
    setup(e) {
      const t = qo($r),
        n = [
          {
            title: "Color Sorting Game",
            subtitle: "Simple drag&drop list example",
            component: $r,
          },
          {
            title: "Kanban (Trello-like)",
            subtitle: "Lists within lists",
            component: hf,
          },
          {
            title: "File Manager",
            subtitle: "Recursively stacked lists",
            component: Lf,
          },
        ];
      return (s, r) => (
        ae(),
        mt("div", Df, [
          N("header", $f, [
            N("nav", Ff, [
              (ae(),
              mt(
                Se,
                null,
                Ei(n, (i) =>
                  N(
                    "div",
                    {
                      key: i.title,
                      onClick: (o) => (t.value = i.component),
                      class: Ve([
                        "m-2 inline cursor-pointer rounded-lg p-4 hover:underline",
                        t.value === i.component ? "bg-blue-300" : "",
                      ]),
                    },
                    [
                      N(
                        "div",
                        {
                          class: Ve(
                            t.value === i.component
                              ? "bg-blue-300 font-extrabold"
                              : "font-bold",
                          ),
                        },
                        gt(i.title),
                        3,
                      ),
                      N("div", Nf, gt(i.subtitle), 1),
                    ],
                    10,
                    Rf,
                  ),
                ),
                64,
              )),
            ]),
          ]),
          (ae(), Oe(Mn(t.value))),
        ])
      );
    },
  });
Wc(kf).mount("#app");
