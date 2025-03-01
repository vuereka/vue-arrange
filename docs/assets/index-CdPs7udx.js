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
  $t = [],
  Ye = () => {},
  co = () => !1,
  Nn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ts = (e) => e.startsWith("onUpdate:"),
  pe = Object.assign,
  Es = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  fo = Object.prototype.hasOwnProperty,
  Y = (e, t) => fo.call(e, t),
  M = Array.isArray,
  Rt = (e) => fn(e) === "[object Map]",
  Ut = (e) => fn(e) === "[object Set]",
  Js = (e) => fn(e) === "[object Date]",
  N = (e) => typeof e == "function",
  fe = (e) => typeof e == "string",
  Ke = (e) => typeof e == "symbol",
  ee = (e) => e !== null && typeof e == "object",
  Fr = (e) => (ee(e) || N(e)) && N(e.then) && N(e.catch),
  Nr = Object.prototype.toString,
  fn = (e) => Nr.call(e),
  uo = (e) => fn(e).slice(8, -1),
  kr = (e) => fn(e) === "[object Object]",
  Is = (e) =>
    fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Jt = Ss(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  kn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  po = /-(\w)/g,
  He = kn((e) => e.replace(po, (t, n) => (n ? n.toUpperCase() : ""))),
  ho = /\B([A-Z])/g,
  yt = kn((e) => e.replace(ho, "-$1").toLowerCase()),
  Hn = kn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Xn = kn((e) => (e ? `on${Hn(e)}` : "")),
  ht = (e, t) => !Object.is(e, t),
  Cn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Hr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  jr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  go = (e) => {
    const t = fe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Zs;
const jn = () =>
  Zs ||
  (Zs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Ze(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = fe(s) ? bo(s) : Ze(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (fe(e) || ee(e)) return e;
}
const mo = /;(?![^(]*\))/g,
  vo = /:([^]+)/,
  yo = /\/\*[^]*?\*\//g;
function bo(e) {
  const t = {};
  return (
    e
      .replace(yo, "")
      .split(mo)
      .forEach((n) => {
        if (n) {
          const s = n.split(vo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ve(e) {
  let t = "";
  if (fe(e)) t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ve(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Br(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !fe(t) && (e.class = Ve(t)), n && (e.style = Ze(n)), e;
}
const _o =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  xo = Ss(_o);
function Kr(e) {
  return !!e || e === "";
}
function Co(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = un(e[s], t[s]);
  return n;
}
function un(e, t) {
  if (e === t) return !0;
  let n = Js(e),
    s = Js(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = Ke(e)), (s = Ke(t)), n || s)) return e === t;
  if (((n = M(e)), (s = M(t)), n || s)) return n && s ? Co(e, t) : !1;
  if (((n = ee(e)), (s = ee(t)), n || s)) {
    if (!n || !s) return !1;
    const r = Object.keys(e).length,
      i = Object.keys(t).length;
    if (r !== i) return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        a = t.hasOwnProperty(o);
      if ((l && !a) || (!l && a) || !un(e[o], t[o])) return !1;
    }
  }
  return String(e) === String(t);
}
function As(e, t) {
  return e.findIndex((n) => un(n, t));
}
const Vr = (e) => !!(e && e.__v_isRef === !0),
  gt = (e) =>
    fe(e)
      ? e
      : e == null
        ? ""
        : M(e) || (ee(e) && (e.toString === Nr || !N(e.toString)))
          ? Vr(e)
            ? gt(e.value)
            : JSON.stringify(e, Ur, 2)
          : String(e),
  Ur = (e, t) =>
    Vr(t)
      ? Ur(e, t.value)
      : Rt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Qn(s, i) + " =>"] = r), n),
              {},
            ),
          }
        : Ut(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Qn(n)) }
          : Ke(t)
            ? Qn(t)
            : ee(t) && !M(t) && !kr(t)
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
function Wr() {
  return Ee;
}
function So(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let re;
const es = new WeakSet();
class Gr {
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
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || zr(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Xs(this), Yr(this);
    const t = re,
      n = Be;
    (re = this), (Be = !0);
    try {
      return this.fn();
    } finally {
      Jr(this), (re = t), (Be = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ms(t);
      (this.deps = this.depsTail = void 0),
        Xs(this),
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
let qr = 0,
  Zt,
  Xt;
function zr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Xt), (Xt = e);
    return;
  }
  (e.next = Zt), (Zt = e);
}
function Os() {
  qr++;
}
function Ps() {
  if (--qr > 0) return;
  if (Xt) {
    let t = Xt;
    for (Xt = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Zt; ) {
    let t = Zt;
    for (Zt = void 0; t; ) {
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
function Yr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Jr(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Ms(s), To(s)) : (t = s),
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
      (t.dep.computed && (Zr(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Zr(e) {
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
  const n = re,
    s = Be;
  (re = e), (Be = !0);
  try {
    Yr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ht(r, e._value)) && ((e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (re = n), (Be = s), Jr(e), (e.flags &= -3);
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
function To(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Be = !0;
const Xr = [];
function bt() {
  Xr.push(Be), (Be = !1);
}
function _t() {
  const e = Xr.pop();
  Be = e === void 0 ? !0 : e;
}
function Xs(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = re;
    re = void 0;
    try {
      t();
    } finally {
      re = n;
    }
  }
}
let tn = 0;
class Eo {
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
    if (!re || !Be || re === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      (n = this.activeLink = new Eo(re, this)),
        re.deps
          ? ((n.prevDep = re.depsTail),
            (re.depsTail.nextDep = n),
            (re.depsTail = n))
          : (re.deps = re.depsTail = n),
        Qr(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = re.depsTail),
        (n.nextDep = void 0),
        (re.depsTail.nextDep = n),
        (re.depsTail = n),
        re.deps === n && (re.deps = s);
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
function Qr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Qr(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const En = new WeakMap(),
  Ot = Symbol(""),
  ps = Symbol(""),
  nn = Symbol("");
function Ce(e, t, n) {
  if (Be && re) {
    let s = En.get(e);
    s || En.set(e, (s = new Map()));
    let r = s.get(n);
    r || (s.set(n, (r = new Bn())), (r.map = s), (r.key = n)), r.track();
  }
}
function rt(e, t, n, s, r, i) {
  const o = En.get(e);
  if (!o) {
    tn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((Os(), t === "clear")) o.forEach(l);
  else {
    const a = M(e),
      d = a && Is(n);
    if (a && n === "length") {
      const f = Number(s);
      o.forEach((p, g) => {
        (g === "length" || g === nn || (!Ke(g) && g >= f)) && l(p);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(nn)), t)
      ) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(Ot)), Rt(e) && l(o.get(ps)));
          break;
        case "delete":
          a || (l(o.get(Ot)), Rt(e) && l(o.get(ps)));
          break;
        case "set":
          Rt(e) && l(o.get(Ot));
          break;
      }
  }
  Ps();
}
function Io(e, t) {
  const n = En.get(e);
  return n && n.get(t);
}
function Lt(e) {
  const t = j(e);
  return t === e ? t : (Ce(t, "iterate", nn), ke(e) ? t : t.map(we));
}
function Kn(e) {
  return Ce((e = j(e)), "iterate", nn), e;
}
const Ao = {
  __proto__: null,
  [Symbol.iterator]() {
    return ts(this, Symbol.iterator, we);
  },
  concat(...e) {
    return Lt(this).concat(...e.map((t) => (M(t) ? Lt(t) : t)));
  },
  entries() {
    return ts(this, "entries", (e) => ((e[1] = we(e[1])), e));
  },
  every(e, t) {
    return tt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return tt(this, "filter", e, t, (n) => n.map(we), arguments);
  },
  find(e, t) {
    return tt(this, "find", e, t, we, arguments);
  },
  findIndex(e, t) {
    return tt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return tt(this, "findLast", e, t, we, arguments);
  },
  findLastIndex(e, t) {
    return tt(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return tt(this, "forEach", e, t, void 0, arguments);
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
    return tt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Gt(this, "pop");
  },
  push(...e) {
    return Gt(this, "push", e);
  },
  reduce(e, ...t) {
    return Qs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Qs(this, "reduceRight", e, t);
  },
  shift() {
    return Gt(this, "shift");
  },
  some(e, t) {
    return tt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Gt(this, "splice", e);
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
    return Gt(this, "unshift", e);
  },
  values() {
    return ts(this, "values", we);
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
const Oo = Array.prototype;
function tt(e, t, n, s, r, i) {
  const o = Kn(e),
    l = o !== e && !ke(e),
    a = o[t];
  if (a !== Oo[t]) {
    const p = a.apply(e, i);
    return l ? we(p) : p;
  }
  let d = n;
  o !== e &&
    (l
      ? (d = function (p, g) {
          return n.call(this, we(p), g, e);
        })
      : n.length > 2 &&
        (d = function (p, g) {
          return n.call(this, p, g, e);
        }));
  const f = a.call(o, d, s);
  return l && r ? r(f) : f;
}
function Qs(e, t, n, s) {
  const r = Kn(e);
  let i = n;
  return (
    r !== e &&
      (ke(e)
        ? n.length > 3 &&
          (i = function (o, l, a) {
            return n.call(this, o, l, a, e);
          })
        : (i = function (o, l, a) {
            return n.call(this, o, we(l), a, e);
          })),
    r[t](i, ...s)
  );
}
function ns(e, t, n) {
  const s = j(e);
  Ce(s, "iterate", nn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && $s(n[0])
    ? ((n[0] = j(n[0])), s[t](...n))
    : r;
}
function Gt(e, t, n = []) {
  bt(), Os();
  const s = j(e)[t].apply(e, n);
  return Ps(), _t(), s;
}
const Po = Ss("__proto__,__v_isRef,__isVue"),
  ei = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ke),
  );
function Mo(e) {
  Ke(e) || (e = String(e));
  const t = j(this);
  return Ce(t, "has", e), t.hasOwnProperty(e);
}
class ti {
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
      return s === (r ? (i ? Bo : ii) : i ? ri : si).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = M(t);
    if (!r) {
      let a;
      if (o && (a = Ao[n])) return a;
      if (n === "hasOwnProperty") return Mo;
    }
    const l = Reflect.get(t, n, be(t) ? t : s);
    return (Ke(n) ? ei.has(n) : Po(n)) || (r || Ce(t, "get", n), i)
      ? l
      : be(l)
        ? o && Is(n)
          ? l
          : l.value
        : ee(l)
          ? r
            ? oi(l)
            : dn(l)
          : l;
  }
}
class ni extends ti {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = Pt(i);
      if (
        (!ke(s) && !Pt(s) && ((i = j(i)), (s = j(s))), !M(t) && be(i) && !be(s))
      )
        return a ? !1 : ((i.value = s), !0);
    }
    const o = M(t) && Is(n) ? Number(n) < t.length : Y(t, n),
      l = Reflect.set(t, n, s, be(t) ? t : r);
    return (
      t === j(r) && (o ? ht(s, i) && rt(t, "set", n, s) : rt(t, "add", n, s)), l
    );
  }
  deleteProperty(t, n) {
    const s = Y(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && rt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ke(n) || !ei.has(n)) && Ce(t, "has", n), s;
  }
  ownKeys(t) {
    return Ce(t, "iterate", M(t) ? "length" : Ot), Reflect.ownKeys(t);
  }
}
class Lo extends ti {
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
const Do = new ni(),
  $o = new Lo(),
  Ro = new ni(!0);
const hs = (e) => e,
  yn = (e) => Reflect.getPrototypeOf(e);
function Fo(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = j(r),
      o = Rt(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      a = e === "keys" && o,
      d = r[e](...s),
      f = n ? hs : t ? gs : we;
    return (
      !t && Ce(i, "iterate", a ? ps : Ot),
      {
        next() {
          const { value: p, done: g } = d.next();
          return g
            ? { value: p, done: g }
            : { value: l ? [f(p[0]), f(p[1])] : f(p), done: g };
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
function No(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = j(i),
        l = j(r);
      e || (ht(r, l) && Ce(o, "get", r), Ce(o, "get", l));
      const { has: a } = yn(o),
        d = t ? hs : e ? gs : we;
      if (a.call(o, r)) return d(i.get(r));
      if (a.call(o, l)) return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ce(j(r), "iterate", Ot), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw,
        o = j(i),
        l = j(r);
      return (
        e || (ht(r, l) && Ce(o, "has", r), Ce(o, "has", l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        a = j(l),
        d = t ? hs : e ? gs : we;
      return (
        !e && Ce(a, "iterate", Ot),
        l.forEach((f, p) => r.call(i, d(f), d(p), o))
      );
    },
  };
  return (
    pe(
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
                yn(i).has.call(i, r) || (i.add(r), rt(i, "add", r, r)), this
              );
            },
            set(r, i) {
              !t && !ke(i) && !Pt(i) && (i = j(i));
              const o = j(this),
                { has: l, get: a } = yn(o);
              let d = l.call(o, r);
              d || ((r = j(r)), (d = l.call(o, r)));
              const f = a.call(o, r);
              return (
                o.set(r, i),
                d ? ht(i, f) && rt(o, "set", r, i) : rt(o, "add", r, i),
                this
              );
            },
            delete(r) {
              const i = j(this),
                { has: o, get: l } = yn(i);
              let a = o.call(i, r);
              a || ((r = j(r)), (a = o.call(i, r))), l && l.call(i, r);
              const d = i.delete(r);
              return a && rt(i, "delete", r, void 0), d;
            },
            clear() {
              const r = j(this),
                i = r.size !== 0,
                o = r.clear();
              return i && rt(r, "clear", void 0, void 0), o;
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = Fo(r, e, t);
    }),
    n
  );
}
function Ls(e, t) {
  const n = No(e, t);
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(Y(n, r) && r in s ? n : s, r, i);
}
const ko = { get: Ls(!1, !1) },
  Ho = { get: Ls(!1, !0) },
  jo = { get: Ls(!0, !1) };
const si = new WeakMap(),
  ri = new WeakMap(),
  ii = new WeakMap(),
  Bo = new WeakMap();
function Ko(e) {
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
function Vo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ko(uo(e));
}
function dn(e) {
  return Pt(e) ? e : Ds(e, !1, Do, ko, si);
}
function Uo(e) {
  return Ds(e, !1, Ro, Ho, ri);
}
function oi(e) {
  return Ds(e, !0, $o, jo, ii);
}
function Ds(e, t, n, s, r) {
  if (!ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const o = Vo(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return r.set(e, l), l;
}
function Ft(e) {
  return Pt(e) ? Ft(e.__v_raw) : !!(e && e.__v_isReactive);
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
function Wo(e) {
  return (
    !Y(e, "__v_skip") && Object.isExtensible(e) && Hr(e, "__v_skip", !0), e
  );
}
const we = (e) => (ee(e) ? dn(e) : e),
  gs = (e) => (ee(e) ? oi(e) : e);
function be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ae(e) {
  return li(e, !1);
}
function Go(e) {
  return li(e, !0);
}
function li(e, t) {
  return be(e) ? e : new qo(e, t);
}
class qo {
  constructor(t, n) {
    (this.dep = new Bn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : j(t)),
      (this._value = n ? t : we(t)),
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
        (this._value = s ? t : we(t)),
        this.dep.trigger());
  }
}
function B(e) {
  return be(e) ? e.value : e;
}
const zo = {
  get: (e, t, n) => (t === "__v_raw" ? e : B(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return be(r) && !be(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function ai(e) {
  return Ft(e) ? e : new Proxy(e, zo);
}
class Yo {
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
function Jo(e) {
  return new Yo(e);
}
function Zo(e) {
  const t = M(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Qo(e, n);
  return t;
}
class Xo {
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
    return Io(j(this._object), this._key);
  }
}
function Qo(e, t, n) {
  const s = e[t];
  return be(s) ? s : new Xo(e, t, n);
}
class el {
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
    if (((this.flags |= 16), !(this.flags & 8) && re !== this))
      return zr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function tl(e, t, n = !1) {
  let s, r;
  return N(e) ? (s = e) : ((s = e.get), (r = e.set)), new el(s, r, n);
}
const _n = {},
  In = new WeakMap();
let Et;
function nl(e, t = !1, n = Et) {
  if (n) {
    let s = In.get(n);
    s || In.set(n, (s = [])), s.push(e);
  }
}
function sl(e, t, n = Q) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: a,
    } = n,
    d = (L) => (r ? L : ke(L) || r === !1 || r === 0 ? it(L, 1) : it(L));
  let f,
    p,
    g,
    m,
    S = !1,
    E = !1;
  if (
    (be(e)
      ? ((p = () => e.value), (S = ke(e)))
      : Ft(e)
        ? ((p = () => d(e)), (S = !0))
        : M(e)
          ? ((E = !0),
            (S = e.some((L) => Ft(L) || ke(L))),
            (p = () =>
              e.map((L) => {
                if (be(L)) return L.value;
                if (Ft(L)) return d(L);
                if (N(L)) return a ? a(L, 2) : L();
              })))
          : N(e)
            ? t
              ? (p = a ? () => a(e, 2) : e)
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
                  Et = f;
                  try {
                    return a ? a(e, 3, [m]) : e(m);
                  } finally {
                    Et = L;
                  }
                })
            : (p = Ye),
    t && r)
  ) {
    const L = p,
      W = r === !0 ? 1 / 0 : r;
    p = () => it(L(), W);
  }
  const P = Wr(),
    I = () => {
      f.stop(), P && Es(P.effects, f);
    };
  if (i && t) {
    const L = t;
    t = (...W) => {
      L(...W), I();
    };
  }
  let K = E ? new Array(e.length).fill(_n) : _n;
  const U = (L) => {
    if (!(!(f.flags & 1) || (!f.dirty && !L)))
      if (t) {
        const W = f.run();
        if (r || S || (E ? W.some((G, te) => ht(G, K[te])) : ht(W, K))) {
          g && g();
          const G = Et;
          Et = f;
          try {
            const te = [W, K === _n ? void 0 : E && K[0] === _n ? [] : K, m];
            a ? a(t, 3, te) : t(...te), (K = W);
          } finally {
            Et = G;
          }
        }
      } else f.run();
  };
  return (
    l && l(U),
    (f = new Gr(p)),
    (f.scheduler = o ? () => o(U, !1) : U),
    (m = (L) => nl(L, !1, f)),
    (g = f.onStop =
      () => {
        const L = In.get(f);
        if (L) {
          if (a) a(L, 4);
          else for (const W of L) W();
          In.delete(f);
        }
      }),
    t ? (s ? U(!0) : (K = f.run())) : o ? o(U.bind(null, !0), !0) : f.run(),
    (I.pause = f.pause.bind(f)),
    (I.resume = f.resume.bind(f)),
    (I.stop = I),
    I
  );
}
function it(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, be(e))) it(e.value, t, n);
  else if (M(e)) for (let s = 0; s < e.length; s++) it(e[s], t, n);
  else if (Ut(e) || Rt(e))
    e.forEach((s) => {
      it(s, t, n);
    });
  else if (kr(e)) {
    for (const s in e) it(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && it(e[s], t, n);
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
  if (N(e)) {
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
  if (M(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(Ue(e[i], t, n, s));
    return r;
  }
}
function Vn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || Q;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let p = 0; p < f.length; p++) if (f[p](e, a, d) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      bt(), pn(i, null, 10, [e, a, d]), _t();
      return;
    }
  }
  rl(e, n, r, s, o);
}
function rl(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const Ie = [];
let qe = -1;
const Nt = [];
let ft = null,
  Dt = 0;
const ci = Promise.resolve();
let An = null;
function On(e) {
  const t = An || ci;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function il(e) {
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
function Rs(e) {
  if (!(e.flags & 1)) {
    const t = sn(e),
      n = Ie[Ie.length - 1];
    !n || (!(e.flags & 2) && t >= sn(n)) ? Ie.push(e) : Ie.splice(il(t), 0, e),
      (e.flags |= 1),
      fi();
  }
}
function fi() {
  An || (An = ci.then(di));
}
function ol(e) {
  M(e)
    ? Nt.push(...e)
    : ft && e.id === -1
      ? ft.splice(Dt + 1, 0, e)
      : e.flags & 1 || (Nt.push(e), (e.flags |= 1)),
    fi();
}
function er(e, t, n = qe + 1) {
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
function ui(e) {
  if (Nt.length) {
    const t = [...new Set(Nt)].sort((n, s) => sn(n) - sn(s));
    if (((Nt.length = 0), ft)) {
      ft.push(...t);
      return;
    }
    for (ft = t, Dt = 0; Dt < ft.length; Dt++) {
      const n = ft[Dt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (ft = null), (Dt = 0);
  }
}
const sn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function di(e) {
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
      ui(),
      (An = null),
      (Ie.length || Nt.length) && di();
  }
}
let ye = null,
  pi = null;
function Pn(e) {
  const t = ye;
  return (ye = e), (pi = (e && e.type.__scopeId) || null), t;
}
function ve(e, t = ye, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && ur(-1);
    const i = Pn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Pn(i), s._d && ur(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function tr(e, t) {
  if (ye === null) return e;
  const n = Yn(ye),
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = Q] = t[r];
    i &&
      (N(i) && (i = { mounted: i, updated: i }),
      i.deep && it(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function wt(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (bt(), Ue(a, n, 8, [e.el, l, e, t]), _t());
  }
}
const ll = Symbol("_vte"),
  hi = (e) => e.__isTeleport,
  ut = Symbol("_leaveCb"),
  xn = Symbol("_enterCb");
function gi() {
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
    wi(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ne = [Function, Array],
  mi = {
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
  vi = (e) => {
    const t = e.subTree;
    return t.component ? vi(t.component) : t;
  },
  al = {
    name: "BaseTransition",
    props: mi,
    setup(e, { slots: t }) {
      const n = zi(),
        s = gi();
      return () => {
        const r = t.default && Fs(t.default(), !0);
        if (!r || !r.length) return;
        const i = yi(r),
          o = j(e),
          { mode: l } = o;
        if (s.isLeaving) return ss(i);
        const a = nr(i);
        if (!a) return ss(i);
        let d = rn(a, o, s, n, (g) => (d = g));
        a.type !== Ae && Mt(a, d);
        const f = n.subTree,
          p = f && nr(f);
        if (p && p.type !== Ae && !It(a, p) && vi(n).type !== Ae) {
          const g = rn(p, o, s, n);
          if ((Mt(p, g), l === "out-in" && a.type !== Ae))
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
            a.type !== Ae &&
            (g.delayLeave = (m, S, E) => {
              const P = bi(s, p);
              (P[String(p.key)] = p),
                (m[ut] = () => {
                  S(), (m[ut] = void 0), delete d.delayedLeave;
                }),
                (d.delayedLeave = E);
            });
        }
        return i;
      };
    },
  };
function yi(e) {
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
const cl = al;
function bi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function rn(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: a,
      onEnter: d,
      onAfterEnter: f,
      onEnterCancelled: p,
      onBeforeLeave: g,
      onLeave: m,
      onAfterLeave: S,
      onLeaveCancelled: E,
      onBeforeAppear: P,
      onAppear: I,
      onAfterAppear: K,
      onAppearCancelled: U,
    } = t,
    L = String(e.key),
    W = bi(n, e),
    G = (k, z) => {
      k && Ue(k, s, 9, z);
    },
    te = (k, z) => {
      const ie = z[1];
      G(k, z),
        M(k) ? k.every((A) => A.length <= 1) && ie() : k.length <= 1 && ie();
    },
    me = {
      mode: o,
      persisted: l,
      beforeEnter(k) {
        let z = a;
        if (!n.isMounted)
          if (i) z = P || a;
          else return;
        k[ut] && k[ut](!0);
        const ie = W[L];
        ie && It(e, ie) && ie.el[ut] && ie.el[ut](), G(z, [k]);
      },
      enter(k) {
        let z = d,
          ie = f,
          A = p;
        if (!n.isMounted)
          if (i) (z = I || d), (ie = K || f), (A = U || p);
          else return;
        let J = !1;
        const ge = (k[xn] = (Qe) => {
          J ||
            ((J = !0),
            Qe ? G(A, [k]) : G(ie, [k]),
            me.delayedLeave && me.delayedLeave(),
            (k[xn] = void 0));
        });
        z ? te(z, [k, ge]) : ge();
      },
      leave(k, z) {
        const ie = String(e.key);
        if ((k[xn] && k[xn](!0), n.isUnmounting)) return z();
        G(g, [k]);
        let A = !1;
        const J = (k[ut] = (ge) => {
          A ||
            ((A = !0),
            z(),
            ge ? G(E, [k]) : G(S, [k]),
            (k[ut] = void 0),
            W[ie] === e && delete W[ie]);
        });
        (W[ie] = e), m ? te(m, [k, J]) : J();
      },
      clone(k) {
        const z = rn(k, t, n, s, r);
        return r && r(z), z;
      },
    };
  return me;
}
function ss(e) {
  if (Un(e)) return (e = vt(e)), (e.children = null), e;
}
function nr(e) {
  if (!Un(e)) return hi(e.type) && e.children ? yi(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && N(n.default)) return n.default();
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
/*! #__NO_SIDE_EFFECTS__ */ function Xe(e, t) {
  return N(e) ? pe({ name: e.name }, t, { setup: e }) : e;
}
function _i(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ms(e, t, n, s, r = !1) {
  if (M(e)) {
    e.forEach((S, E) => ms(S, t && (M(t) ? t[E] : t), n, s, r));
    return;
  }
  if (kt(s) && !r) return;
  const i = s.shapeFlag & 4 ? Yn(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: a } = e,
    d = t && t.r,
    f = l.refs === Q ? (l.refs = {}) : l.refs,
    p = l.setupState,
    g = j(p),
    m = p === Q ? () => !1 : (S) => Y(g, S);
  if (
    (d != null &&
      d !== a &&
      (fe(d)
        ? ((f[d] = null), m(d) && (p[d] = null))
        : be(d) && (d.value = null)),
    N(a))
  )
    pn(a, l, 12, [o, f]);
  else {
    const S = fe(a),
      E = be(a);
    if (S || E) {
      const P = () => {
        if (e.f) {
          const I = S ? (m(a) ? p[a] : f[a]) : a.value;
          r
            ? M(I) && Es(I, i)
            : M(I)
              ? I.includes(i) || I.push(i)
              : S
                ? ((f[a] = [i]), m(a) && (p[a] = f[a]))
                : ((a.value = [i]), e.k && (f[e.k] = a.value));
        } else
          S
            ? ((f[a] = o), m(a) && (p[a] = o))
            : E && ((a.value = o), e.k && (f[e.k] = o));
      };
      o ? ((P.id = -1), De(P, n)) : P();
    }
  }
}
jn().requestIdleCallback;
jn().cancelIdleCallback;
const kt = (e) => !!e.type.__asyncLoader,
  Un = (e) => e.type.__isKeepAlive;
function fl(e, t) {
  xi(e, "a", t);
}
function ul(e, t) {
  xi(e, "da", t);
}
function xi(e, t, n = _e) {
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
      Un(r.parent.vnode) && dl(s, t, n, r), (r = r.parent);
  }
}
function dl(e, t, n, s) {
  const r = Wn(t, e, s, !0);
  Ns(() => {
    Es(s[t], r);
  }, n);
}
function Wn(e, t, n = _e, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          bt();
          const l = hn(n),
            a = Ue(t, n, e, o);
          return l(), _t(), a;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const ot =
    (e) =>
    (t, n = _e) => {
      (!an || e === "sp") && Wn(e, (...s) => t(...s), n);
    },
  pl = ot("bm"),
  Gn = ot("m"),
  hl = ot("bu"),
  Ci = ot("u"),
  wi = ot("bum"),
  Ns = ot("um"),
  gl = ot("sp"),
  ml = ot("rtg"),
  vl = ot("rtc");
function yl(e, t = _e) {
  Wn("ec", e, t);
}
const bl = "components",
  Si = Symbol.for("v-ndc");
function Mn(e) {
  return fe(e) ? _l(bl, e, !1) || e : e || Si;
}
function _l(e, t, n = !0, s = !1) {
  const r = ye || _e;
  if (r) {
    const i = r.type;
    {
      const l = ra(i, !1);
      if (l && (l === t || l === He(t) || l === Hn(He(t)))) return i;
    }
    const o = sr(r[e] || i[e], t) || sr(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function sr(e, t) {
  return e && (e[t] || e[He(t)] || e[Hn(He(t))]);
}
function Ti(e, t, n, s) {
  let r;
  const i = n,
    o = M(e);
  if (o || fe(e)) {
    const l = o && Ft(e);
    let a = !1;
    l && ((a = !ke(e)), (e = Kn(e))), (r = new Array(e.length));
    for (let d = 0, f = e.length; d < f; d++)
      r[d] = t(a ? we(e[d]) : e[d], d, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (ee(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, a) => t(l, a, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const f = l[a];
        r[a] = t(e[f], f, a, i);
      }
    }
  else r = [];
  return r;
}
function At(e, t, n = {}, s, r) {
  if (ye.ce || (ye.parent && kt(ye.parent) && ye.parent.ce))
    return (
      t !== "default" && (n.name = t),
      ue(),
      Oe(Se, null, [ce("slot", n, s)], 64)
    );
  let i = e[t];
  i && i._c && (i._d = !1), ue();
  const o = i && Ei(i(n)),
    l = n.key || (o && o.key),
    a = Oe(
      Se,
      { key: (l && !Ke(l) ? l : `_${t}`) + (!o && s ? "_fb" : "") },
      o || [],
      o && e._ === 1 ? 64 : -2,
    );
  return (
    a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    a
  );
}
function Ei(e) {
  return e.some((t) =>
    ln(t) ? !(t.type === Ae || (t.type === Se && !Ei(t.children))) : !0,
  )
    ? e
    : null;
}
const vs = (e) => (e ? (Yi(e) ? Yn(e) : vs(e.parent)) : null),
  Qt = pe(Object.create(null), {
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
        Rs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = On.bind(e.proxy)),
    $watch: (e) => Bl.bind(e),
  }),
  rs = (e, t) => e !== Q && !e.__isScriptSetup && Y(e, t),
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
        appContext: a,
      } = e;
      let d;
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
          if (r !== Q && Y(r, t)) return (o[t] = 2), r[t];
          if ((d = e.propsOptions[0]) && Y(d, t)) return (o[t] = 3), i[t];
          if (n !== Q && Y(n, t)) return (o[t] = 4), n[t];
          ys && (o[t] = 0);
        }
      }
      const f = Qt[t];
      let p, g;
      if (f) return t === "$attrs" && Ce(e.attrs, "get", ""), f(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== Q && Y(n, t)) return (o[t] = 4), n[t];
      if (((g = a.config.globalProperties), Y(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return rs(r, t)
        ? ((r[t] = n), !0)
        : s !== Q && Y(s, t)
          ? ((s[t] = n), !0)
          : Y(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
        (e !== Q && Y(e, o)) ||
        rs(t, o) ||
        ((l = i[0]) && Y(l, o)) ||
        Y(s, o) ||
        Y(Qt, o) ||
        Y(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Y(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function rr(e) {
  return M(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ys = !0;
function Cl(e) {
  const t = ks(e),
    n = e.proxy,
    s = e.ctx;
  (ys = !1), t.beforeCreate && ir(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    created: f,
    beforeMount: p,
    mounted: g,
    beforeUpdate: m,
    updated: S,
    activated: E,
    deactivated: P,
    beforeDestroy: I,
    beforeUnmount: K,
    destroyed: U,
    unmounted: L,
    render: W,
    renderTracked: G,
    renderTriggered: te,
    errorCaptured: me,
    serverPrefetch: k,
    expose: z,
    inheritAttrs: ie,
    components: A,
    directives: J,
    filters: ge,
  } = t;
  if ((d && wl(d, s, null), o))
    for (const ne in o) {
      const Z = o[ne];
      N(Z) && (s[ne] = Z.bind(n));
    }
  if (r) {
    const ne = r.call(n, n);
    ee(ne) && (e.data = dn(ne));
  }
  if (((ys = !0), i))
    for (const ne in i) {
      const Z = i[ne],
        et = N(Z) ? Z.bind(n, n) : N(Z.get) ? Z.get.bind(n, n) : Ye,
        xt = !N(Z) && N(Z.set) ? Z.set.bind(n) : Ye,
        le = $e({ get: et, set: xt });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (Fe) => (le.value = Fe),
      });
    }
  if (l) for (const ne in l) Ii(l[ne], s, n, ne);
  if (a) {
    const ne = N(a) ? a.call(n) : a;
    Reflect.ownKeys(ne).forEach((Z) => {
      Hs(Z, ne[Z]);
    });
  }
  f && ir(f, e, "c");
  function he(ne, Z) {
    M(Z) ? Z.forEach((et) => ne(et.bind(n))) : Z && ne(Z.bind(n));
  }
  if (
    (he(pl, p),
    he(Gn, g),
    he(hl, m),
    he(Ci, S),
    he(fl, E),
    he(ul, P),
    he(yl, me),
    he(vl, G),
    he(ml, te),
    he(wi, K),
    he(Ns, L),
    he(gl, k),
    M(z))
  )
    if (z.length) {
      const ne = e.exposed || (e.exposed = {});
      z.forEach((Z) => {
        Object.defineProperty(ne, Z, {
          get: () => n[Z],
          set: (et) => (n[Z] = et),
        });
      });
    } else e.exposed || (e.exposed = {});
  W && e.render === Ye && (e.render = W),
    ie != null && (e.inheritAttrs = ie),
    A && (e.components = A),
    J && (e.directives = J),
    k && _i(e);
}
function wl(e, t, n = Ye) {
  M(e) && (e = bs(e));
  for (const s in e) {
    const r = e[s];
    let i;
    ee(r)
      ? "default" in r
        ? (i = jt(r.from || s, r.default, !0))
        : (i = jt(r.from || s))
      : (i = jt(r)),
      be(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i);
  }
}
function ir(e, t, n) {
  Ue(M(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ii(e, t, n, s) {
  let r = s.includes(".") ? Bi(n, s) : () => n[s];
  if (fe(e)) {
    const i = t[e];
    N(i) && Je(r, i);
  } else if (N(e)) Je(r, e.bind(n));
  else if (ee(e))
    if (M(e)) e.forEach((i) => Ii(i, t, n, s));
    else {
      const i = N(e.handler) ? e.handler.bind(n) : t[e.handler];
      N(i) && Je(r, i, e);
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
  let a;
  return (
    l
      ? (a = l)
      : !r.length && !n && !s
        ? (a = t)
        : ((a = {}),
          r.length && r.forEach((d) => Ln(a, d, o, !0)),
          Ln(a, t, o)),
    ee(t) && i.set(t, a),
    a
  );
}
function Ln(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Ln(e, i, n, !0), r && r.forEach((o) => Ln(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Sl[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Sl = {
  data: or,
  props: lr,
  emits: lr,
  methods: Yt,
  computed: Yt,
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
  components: Yt,
  directives: Yt,
  watch: El,
  provide: or,
  inject: Tl,
};
function or(e, t) {
  return t
    ? e
      ? function () {
          return pe(
            N(e) ? e.call(this, this) : e,
            N(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Tl(e, t) {
  return Yt(bs(e), bs(t));
}
function bs(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Yt(e, t) {
  return e ? pe(Object.create(null), e, t) : t;
}
function lr(e, t) {
  return e
    ? M(e) && M(t)
      ? [...new Set([...e, ...t])]
      : pe(Object.create(null), rr(e), rr(t ?? {}))
    : t;
}
function El(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pe(Object.create(null), e);
  for (const s in t) n[s] = Te(e[s], t[s]);
  return n;
}
function Ai() {
  return {
    app: null,
    config: {
      isNativeTag: co,
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
    N(s) || (s = pe({}, s)), r != null && !ee(r) && (r = null);
    const i = Ai(),
      o = new WeakSet(),
      l = [];
    let a = !1;
    const d = (i.app = {
      _uid: Il++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: la,
      get config() {
        return i.config;
      },
      set config(f) {},
      use(f, ...p) {
        return (
          o.has(f) ||
            (f && N(f.install)
              ? (o.add(f), f.install(d, ...p))
              : N(f) && (o.add(f), f(d, ...p))),
          d
        );
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), d;
      },
      component(f, p) {
        return p ? ((i.components[f] = p), d) : i.components[f];
      },
      directive(f, p) {
        return p ? ((i.directives[f] = p), d) : i.directives[f];
      },
      mount(f, p, g) {
        if (!a) {
          const m = d._ceVNode || ce(s, r);
          return (
            (m.appContext = i),
            g === !0 ? (g = "svg") : g === !1 && (g = void 0),
            p && t ? t(m, f) : e(m, f, g),
            (a = !0),
            (d._container = f),
            (f.__vue_app__ = d),
            Yn(m.component)
          );
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a &&
          (Ue(l, d._instance, 16),
          e(null, d._container),
          delete d._container.__vue_app__);
      },
      provide(f, p) {
        return (i.provides[f] = p), d;
      },
      runWithContext(f) {
        const p = Ht;
        Ht = d;
        try {
          return f();
        } finally {
          Ht = p;
        }
      },
    });
    return d;
  };
}
let Ht = null;
function Hs(e, t) {
  if (_e) {
    let n = _e.provides;
    const s = _e.parent && _e.parent.provides;
    s === n && (n = _e.provides = Object.create(s)), (n[e] = t);
  }
}
function jt(e, t, n = !1) {
  const s = _e || ye;
  if (s || Ht) {
    const r = Ht
      ? Ht._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && N(t) ? t.call(s && s.proxy) : t;
  }
}
const Oi = {},
  Pi = () => Object.create(Oi),
  Mi = (e) => Object.getPrototypeOf(e) === Oi;
function Ol(e, t, n, s = !1) {
  const r = {},
    i = Pi();
  (e.propsDefaults = Object.create(null)), Li(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : Uo(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function Pl(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = j(r),
    [a] = e.propsOptions;
  let d = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let g = f[p];
        if (qn(e.emitsOptions, g)) continue;
        const m = t[g];
        if (a)
          if (Y(i, g)) m !== i[g] && ((i[g] = m), (d = !0));
          else {
            const S = He(g);
            r[S] = _s(a, l, S, m, e, !1);
          }
        else m !== i[g] && ((i[g] = m), (d = !0));
      }
    }
  } else {
    Li(e, t, r, i) && (d = !0);
    let f;
    for (const p in l)
      (!t || (!Y(t, p) && ((f = yt(p)) === p || !Y(t, f)))) &&
        (a
          ? n &&
            (n[p] !== void 0 || n[f] !== void 0) &&
            (r[p] = _s(a, l, p, void 0, e, !0))
          : delete r[p]);
    if (i !== l) for (const p in i) (!t || !Y(t, p)) && (delete i[p], (d = !0));
  }
  d && rt(e.attrs, "set", "");
}
function Li(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let a in t) {
      if (Jt(a)) continue;
      const d = t[a];
      let f;
      r && Y(r, (f = He(a)))
        ? !i || !i.includes(f)
          ? (n[f] = d)
          : ((l || (l = {}))[f] = d)
        : qn(e.emitsOptions, a) ||
          ((!(a in s) || d !== s[a]) && ((s[a] = d), (o = !0)));
    }
  if (i) {
    const a = j(n),
      d = l || Q;
    for (let f = 0; f < i.length; f++) {
      const p = i[f];
      n[p] = _s(r, a, p, d[p], e, !Y(d, p));
    }
  }
  return o;
}
function _s(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = Y(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && N(a)) {
        const { propsDefaults: d } = r;
        if (n in d) s = d[n];
        else {
          const f = hn(r);
          (s = d[n] = a.call(null, t)), f();
        }
      } else s = a;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] &&
      (i && !l ? (s = !1) : o[1] && (s === "" || s === yt(n)) && (s = !0));
  }
  return s;
}
const Ml = new WeakMap();
function Di(e, t, n = !1) {
  const s = n ? Ml : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let a = !1;
  if (!N(e)) {
    const f = (p) => {
      a = !0;
      const [g, m] = Di(p, t, !0);
      pe(o, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!i && !a) return ee(e) && s.set(e, $t), $t;
  if (M(i))
    for (let f = 0; f < i.length; f++) {
      const p = He(i[f]);
      ar(p) && (o[p] = Q);
    }
  else if (i)
    for (const f in i) {
      const p = He(f);
      if (ar(p)) {
        const g = i[f],
          m = (o[p] = M(g) || N(g) ? { type: g } : pe({}, g)),
          S = m.type;
        let E = !1,
          P = !0;
        if (M(S))
          for (let I = 0; I < S.length; ++I) {
            const K = S[I],
              U = N(K) && K.name;
            if (U === "Boolean") {
              E = !0;
              break;
            } else U === "String" && (P = !1);
          }
        else E = N(S) && S.name === "Boolean";
        (m[0] = E), (m[1] = P), (E || Y(m, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return ee(e) && s.set(e, d), d;
}
function ar(e) {
  return e[0] !== "$" && !Jt(e);
}
const $i = (e) => e[0] === "_" || e === "$stable",
  js = (e) => (M(e) ? e.map(ze) : [ze(e)]),
  Ll = (e, t, n) => {
    if (t._n) return t;
    const s = ve((...r) => js(t(...r)), n);
    return (s._c = !1), s;
  },
  Ri = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if ($i(r)) continue;
      const i = e[r];
      if (N(i)) t[r] = Ll(r, i, s);
      else if (i != null) {
        const o = js(i);
        t[r] = () => o;
      }
    }
  },
  Fi = (e, t) => {
    const n = js(t);
    e.slots.default = () => n;
  },
  Ni = (e, t, n) => {
    for (const s in t) (n || s !== "_") && (e[s] = t[s]);
  },
  Dl = (e, t, n) => {
    const s = (e.slots = Pi());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Ni(s, t, n), n && Hr(s, "_", r, !0)) : Ri(t, s);
    } else t && Fi(e, t);
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
          : Ni(r, t, n)
        : ((i = !t.$stable), Ri(t, r)),
        (o = t);
    } else t && (Fi(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !$i(l) && o[l] == null && delete r[l];
  },
  De = zl;
function Rl(e) {
  return Fl(e);
}
function Fl(e, t) {
  const n = jn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: a,
      setText: d,
      setElementText: f,
      parentNode: p,
      nextSibling: g,
      setScopeId: m = Ye,
      insertStaticContent: S,
    } = e,
    E = (
      c,
      u,
      h,
      y = null,
      v = null,
      b = null,
      w = void 0,
      C = null,
      x = !!u.dynamicChildren,
    ) => {
      if (c === u) return;
      c && !It(c, u) && ((y = D(c)), Fe(c, v, b, !0), (c = null)),
        u.patchFlag === -2 && ((x = !1), (u.dynamicChildren = null));
      const { type: _, ref: $, shapeFlag: T } = u;
      switch (_) {
        case zn:
          P(c, u, h, y);
          break;
        case Ae:
          I(c, u, h, y);
          break;
        case ls:
          c == null && K(u, h, y, w);
          break;
        case Se:
          A(c, u, h, y, v, b, w, C, x);
          break;
        default:
          T & 1
            ? W(c, u, h, y, v, b, w, C, x)
            : T & 6
              ? J(c, u, h, y, v, b, w, C, x)
              : (T & 64 || T & 128) && _.process(c, u, h, y, v, b, w, C, x, oe);
      }
      $ != null && v && ms($, c && c.ref, b, u || c, !u);
    },
    P = (c, u, h, y) => {
      if (c == null) s((u.el = l(u.children)), h, y);
      else {
        const v = (u.el = c.el);
        u.children !== c.children && d(v, u.children);
      }
    },
    I = (c, u, h, y) => {
      c == null ? s((u.el = a(u.children || "")), h, y) : (u.el = c.el);
    },
    K = (c, u, h, y) => {
      [c.el, c.anchor] = S(c.children, u, h, y, c.el, c.anchor);
    },
    U = ({ el: c, anchor: u }, h, y) => {
      let v;
      for (; c && c !== u; ) (v = g(c)), s(c, h, y), (c = v);
      s(u, h, y);
    },
    L = ({ el: c, anchor: u }) => {
      let h;
      for (; c && c !== u; ) (h = g(c)), r(c), (c = h);
      r(u);
    },
    W = (c, u, h, y, v, b, w, C, x) => {
      u.type === "svg" ? (w = "svg") : u.type === "math" && (w = "mathml"),
        c == null ? G(u, h, y, v, b, w, C, x) : k(c, u, v, b, w, C, x);
    },
    G = (c, u, h, y, v, b, w, C) => {
      let x, _;
      const { props: $, shapeFlag: T, transition: O, dirs: R } = c;
      if (
        ((x = c.el = o(c.type, b, $ && $.is, $)),
        T & 8
          ? f(x, c.children)
          : T & 16 && me(c.children, x, null, y, v, is(c, b), w, C),
        R && wt(c, null, y, "created"),
        te(x, c, c.scopeId, w, y),
        $)
      ) {
        for (const se in $)
          se !== "value" && !Jt(se) && i(x, se, null, $[se], b, y);
        "value" in $ && i(x, "value", null, $.value, b),
          (_ = $.onVnodeBeforeMount) && Ge(_, y, c);
      }
      R && wt(c, null, y, "beforeMount");
      const V = Nl(v, O);
      V && O.beforeEnter(x),
        s(x, u, h),
        ((_ = $ && $.onVnodeMounted) || V || R) &&
          De(() => {
            _ && Ge(_, y, c), V && O.enter(x), R && wt(c, null, y, "mounted");
          }, v);
    },
    te = (c, u, h, y, v) => {
      if ((h && m(c, h), y)) for (let b = 0; b < y.length; b++) m(c, y[b]);
      if (v) {
        let b = v.subTree;
        if (
          u === b ||
          (Vi(b.type) && (b.ssContent === u || b.ssFallback === u))
        ) {
          const w = v.vnode;
          te(c, w, w.scopeId, w.slotScopeIds, v.parent);
        }
      }
    },
    me = (c, u, h, y, v, b, w, C, x = 0) => {
      for (let _ = x; _ < c.length; _++) {
        const $ = (c[_] = C ? dt(c[_]) : ze(c[_]));
        E(null, $, u, h, y, v, b, w, C);
      }
    },
    k = (c, u, h, y, v, b, w) => {
      const C = (u.el = c.el);
      let { patchFlag: x, dynamicChildren: _, dirs: $ } = u;
      x |= c.patchFlag & 16;
      const T = c.props || Q,
        O = u.props || Q;
      let R;
      if (
        (h && St(h, !1),
        (R = O.onVnodeBeforeUpdate) && Ge(R, h, u, c),
        $ && wt(u, c, h, "beforeUpdate"),
        h && St(h, !0),
        ((T.innerHTML && O.innerHTML == null) ||
          (T.textContent && O.textContent == null)) &&
          f(C, ""),
        _
          ? z(c.dynamicChildren, _, C, h, y, is(u, v), b)
          : w || Z(c, u, C, null, h, y, is(u, v), b, !1),
        x > 0)
      ) {
        if (x & 16) ie(C, T, O, h, v);
        else if (
          (x & 2 && T.class !== O.class && i(C, "class", null, O.class, v),
          x & 4 && i(C, "style", T.style, O.style, v),
          x & 8)
        ) {
          const V = u.dynamicProps;
          for (let se = 0; se < V.length; se++) {
            const X = V[se],
              Pe = T[X],
              xe = O[X];
            (xe !== Pe || X === "value") && i(C, X, Pe, xe, v, h);
          }
        }
        x & 1 && c.children !== u.children && f(C, u.children);
      } else !w && _ == null && ie(C, T, O, h, v);
      ((R = O.onVnodeUpdated) || $) &&
        De(() => {
          R && Ge(R, h, u, c), $ && wt(u, c, h, "updated");
        }, y);
    },
    z = (c, u, h, y, v, b, w) => {
      for (let C = 0; C < u.length; C++) {
        const x = c[C],
          _ = u[C],
          $ =
            x.el && (x.type === Se || !It(x, _) || x.shapeFlag & 70)
              ? p(x.el)
              : h;
        E(x, _, $, null, y, v, b, w, !0);
      }
    },
    ie = (c, u, h, y, v) => {
      if (u !== h) {
        if (u !== Q)
          for (const b in u) !Jt(b) && !(b in h) && i(c, b, u[b], null, v, y);
        for (const b in h) {
          if (Jt(b)) continue;
          const w = h[b],
            C = u[b];
          w !== C && b !== "value" && i(c, b, C, w, v, y);
        }
        "value" in h && i(c, "value", u.value, h.value, v);
      }
    },
    A = (c, u, h, y, v, b, w, C, x) => {
      const _ = (u.el = c ? c.el : l("")),
        $ = (u.anchor = c ? c.anchor : l(""));
      let { patchFlag: T, dynamicChildren: O, slotScopeIds: R } = u;
      R && (C = C ? C.concat(R) : R),
        c == null
          ? (s(_, h, y), s($, h, y), me(u.children || [], h, $, v, b, w, C, x))
          : T > 0 && T & 64 && O && c.dynamicChildren
            ? (z(c.dynamicChildren, O, h, v, b, w, C),
              (u.key != null || (v && u === v.subTree)) && ki(c, u, !0))
            : Z(c, u, h, $, v, b, w, C, x);
    },
    J = (c, u, h, y, v, b, w, C, x) => {
      (u.slotScopeIds = C),
        c == null
          ? u.shapeFlag & 512
            ? v.ctx.activate(u, h, y, w, x)
            : ge(u, h, y, v, b, w, x)
          : Qe(c, u, x);
    },
    ge = (c, u, h, y, v, b, w) => {
      const C = (c.component = Ql(c, y, v));
      if ((Un(c) && (C.ctx.renderer = oe), ea(C, !1, w), C.asyncDep)) {
        if ((v && v.registerDep(C, he, w), !c.el)) {
          const x = (C.subTree = ce(Ae));
          I(null, x, u, h);
        }
      } else he(C, c, u, h, v, b, w);
    },
    Qe = (c, u, h) => {
      const y = (u.component = c.component);
      if (Gl(c, u, h))
        if (y.asyncDep && !y.asyncResolved) {
          ne(y, u, h);
          return;
        } else (y.next = u), y.update();
      else (u.el = c.el), (y.vnode = u);
    },
    he = (c, u, h, y, v, b, w) => {
      const C = () => {
        if (c.isMounted) {
          let { next: T, bu: O, u: R, parent: V, vnode: se } = c;
          {
            const Me = Hi(c);
            if (Me) {
              T && ((T.el = se.el), ne(c, T, w)),
                Me.asyncDep.then(() => {
                  c.isUnmounted || C();
                });
              return;
            }
          }
          let X = T,
            Pe;
          St(c, !1),
            T ? ((T.el = se.el), ne(c, T, w)) : (T = se),
            O && Cn(O),
            (Pe = T.props && T.props.onVnodeBeforeUpdate) && Ge(Pe, V, T, se),
            St(c, !0);
          const xe = os(c),
            je = c.subTree;
          (c.subTree = xe),
            E(je, xe, p(je.el), D(je), c, v, b),
            (T.el = xe.el),
            X === null && ql(c, xe.el),
            R && De(R, v),
            (Pe = T.props && T.props.onVnodeUpdated) &&
              De(() => Ge(Pe, V, T, se), v);
        } else {
          let T;
          const { el: O, props: R } = u,
            { bm: V, m: se, parent: X, root: Pe, type: xe } = c,
            je = kt(u);
          if (
            (St(c, !1),
            V && Cn(V),
            !je && (T = R && R.onVnodeBeforeMount) && Ge(T, X, u),
            St(c, !0),
            O && lt)
          ) {
            const Me = () => {
              (c.subTree = os(c)), lt(O, c.subTree, c, v, null);
            };
            je && xe.__asyncHydrate ? xe.__asyncHydrate(O, c, Me) : Me();
          } else {
            Pe.ce && Pe.ce._injectChildStyle(xe);
            const Me = (c.subTree = os(c));
            E(null, Me, h, y, c, v, b), (u.el = Me.el);
          }
          if ((se && De(se, v), !je && (T = R && R.onVnodeMounted))) {
            const Me = u;
            De(() => Ge(T, X, Me), v);
          }
          (u.shapeFlag & 256 ||
            (X && kt(X.vnode) && X.vnode.shapeFlag & 256)) &&
            c.a &&
            De(c.a, v),
            (c.isMounted = !0),
            (u = h = y = null);
        }
      };
      c.scope.on();
      const x = (c.effect = new Gr(C));
      c.scope.off();
      const _ = (c.update = x.run.bind(x)),
        $ = (c.job = x.runIfDirty.bind(x));
      ($.i = c), ($.id = c.uid), (x.scheduler = () => Rs($)), St(c, !0), _();
    },
    ne = (c, u, h) => {
      u.component = c;
      const y = c.vnode.props;
      (c.vnode = u),
        (c.next = null),
        Pl(c, u.props, y, h),
        $l(c, u.children, h),
        bt(),
        er(c),
        _t();
    },
    Z = (c, u, h, y, v, b, w, C, x = !1) => {
      const _ = c && c.children,
        $ = c ? c.shapeFlag : 0,
        T = u.children,
        { patchFlag: O, shapeFlag: R } = u;
      if (O > 0) {
        if (O & 128) {
          xt(_, T, h, y, v, b, w, C, x);
          return;
        } else if (O & 256) {
          et(_, T, h, y, v, b, w, C, x);
          return;
        }
      }
      R & 8
        ? ($ & 16 && Ct(_, v, b), T !== _ && f(h, T))
        : $ & 16
          ? R & 16
            ? xt(_, T, h, y, v, b, w, C, x)
            : Ct(_, v, b, !0)
          : ($ & 8 && f(h, ""), R & 16 && me(T, h, y, v, b, w, C, x));
    },
    et = (c, u, h, y, v, b, w, C, x) => {
      (c = c || $t), (u = u || $t);
      const _ = c.length,
        $ = u.length,
        T = Math.min(_, $);
      let O;
      for (O = 0; O < T; O++) {
        const R = (u[O] = x ? dt(u[O]) : ze(u[O]));
        E(c[O], R, h, null, v, b, w, C, x);
      }
      _ > $ ? Ct(c, v, b, !0, !1, T) : me(u, h, y, v, b, w, C, x, T);
    },
    xt = (c, u, h, y, v, b, w, C, x) => {
      let _ = 0;
      const $ = u.length;
      let T = c.length - 1,
        O = $ - 1;
      for (; _ <= T && _ <= O; ) {
        const R = c[_],
          V = (u[_] = x ? dt(u[_]) : ze(u[_]));
        if (It(R, V)) E(R, V, h, null, v, b, w, C, x);
        else break;
        _++;
      }
      for (; _ <= T && _ <= O; ) {
        const R = c[T],
          V = (u[O] = x ? dt(u[O]) : ze(u[O]));
        if (It(R, V)) E(R, V, h, null, v, b, w, C, x);
        else break;
        T--, O--;
      }
      if (_ > T) {
        if (_ <= O) {
          const R = O + 1,
            V = R < $ ? u[R].el : y;
          for (; _ <= O; )
            E(null, (u[_] = x ? dt(u[_]) : ze(u[_])), h, V, v, b, w, C, x), _++;
        }
      } else if (_ > O) for (; _ <= T; ) Fe(c[_], v, b, !0), _++;
      else {
        const R = _,
          V = _,
          se = new Map();
        for (_ = V; _ <= O; _++) {
          const Le = (u[_] = x ? dt(u[_]) : ze(u[_]));
          Le.key != null && se.set(Le.key, _);
        }
        let X,
          Pe = 0;
        const xe = O - V + 1;
        let je = !1,
          Me = 0;
        const Wt = new Array(xe);
        for (_ = 0; _ < xe; _++) Wt[_] = 0;
        for (_ = R; _ <= T; _++) {
          const Le = c[_];
          if (Pe >= xe) {
            Fe(Le, v, b, !0);
            continue;
          }
          let We;
          if (Le.key != null) We = se.get(Le.key);
          else
            for (X = V; X <= O; X++)
              if (Wt[X - V] === 0 && It(Le, u[X])) {
                We = X;
                break;
              }
          We === void 0
            ? Fe(Le, v, b, !0)
            : ((Wt[We - V] = _ + 1),
              We >= Me ? (Me = We) : (je = !0),
              E(Le, u[We], h, null, v, b, w, C, x),
              Pe++);
        }
        const zs = je ? kl(Wt) : $t;
        for (X = zs.length - 1, _ = xe - 1; _ >= 0; _--) {
          const Le = V + _,
            We = u[Le],
            Ys = Le + 1 < $ ? u[Le + 1].el : y;
          Wt[_] === 0
            ? E(null, We, h, Ys, v, b, w, C, x)
            : je && (X < 0 || _ !== zs[X] ? le(We, h, Ys, 2) : X--);
        }
      }
    },
    le = (c, u, h, y, v = null) => {
      const { el: b, type: w, transition: C, children: x, shapeFlag: _ } = c;
      if (_ & 6) {
        le(c.component.subTree, u, h, y);
        return;
      }
      if (_ & 128) {
        c.suspense.move(u, h, y);
        return;
      }
      if (_ & 64) {
        w.move(c, u, h, oe);
        return;
      }
      if (w === Se) {
        s(b, u, h);
        for (let T = 0; T < x.length; T++) le(x[T], u, h, y);
        s(c.anchor, u, h);
        return;
      }
      if (w === ls) {
        U(c, u, h);
        return;
      }
      if (y !== 2 && _ & 1 && C)
        if (y === 0) C.beforeEnter(b), s(b, u, h), De(() => C.enter(b), v);
        else {
          const { leave: T, delayLeave: O, afterLeave: R } = C,
            V = () => s(b, u, h),
            se = () => {
              T(b, () => {
                V(), R && R();
              });
            };
          O ? O(b, V, se) : se();
        }
      else s(b, u, h);
    },
    Fe = (c, u, h, y = !1, v = !1) => {
      const {
        type: b,
        props: w,
        ref: C,
        children: x,
        dynamicChildren: _,
        shapeFlag: $,
        patchFlag: T,
        dirs: O,
        cacheIndex: R,
      } = c;
      if (
        (T === -2 && (v = !1),
        C != null && ms(C, null, h, c, !0),
        R != null && (u.renderCache[R] = void 0),
        $ & 256)
      ) {
        u.ctx.deactivate(c);
        return;
      }
      const V = $ & 1 && O,
        se = !kt(c);
      let X;
      if ((se && (X = w && w.onVnodeBeforeUnmount) && Ge(X, u, c), $ & 6))
        vn(c.component, h, y);
      else {
        if ($ & 128) {
          c.suspense.unmount(h, y);
          return;
        }
        V && wt(c, null, u, "beforeUnmount"),
          $ & 64
            ? c.type.remove(c, u, h, oe, y)
            : _ && !_.hasOnce && (b !== Se || (T > 0 && T & 64))
              ? Ct(_, u, h, !1, !0)
              : ((b === Se && T & 384) || (!v && $ & 16)) && Ct(x, u, h),
          y && mn(c);
      }
      ((se && (X = w && w.onVnodeUnmounted)) || V) &&
        De(() => {
          X && Ge(X, u, c), V && wt(c, null, u, "unmounted");
        }, h);
    },
    mn = (c) => {
      const { type: u, el: h, anchor: y, transition: v } = c;
      if (u === Se) {
        Zn(h, y);
        return;
      }
      if (u === ls) {
        L(c);
        return;
      }
      const b = () => {
        r(h), v && !v.persisted && v.afterLeave && v.afterLeave();
      };
      if (c.shapeFlag & 1 && v && !v.persisted) {
        const { leave: w, delayLeave: C } = v,
          x = () => w(h, b);
        C ? C(c.el, b, x) : x();
      } else b();
    },
    Zn = (c, u) => {
      let h;
      for (; c !== u; ) (h = g(c)), r(c), (c = h);
      r(u);
    },
    vn = (c, u, h) => {
      const { bum: y, scope: v, job: b, subTree: w, um: C, m: x, a: _ } = c;
      cr(x),
        cr(_),
        y && Cn(y),
        v.stop(),
        b && ((b.flags |= 8), Fe(w, c, u, h)),
        C && De(C, u),
        De(() => {
          c.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    Ct = (c, u, h, y = !1, v = !1, b = 0) => {
      for (let w = b; w < c.length; w++) Fe(c[w], u, h, y, v);
    },
    D = (c) => {
      if (c.shapeFlag & 6) return D(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const u = g(c.anchor || c.el),
        h = u && u[ll];
      return h ? g(h) : u;
    };
  let q = !1;
  const H = (c, u, h) => {
      c == null
        ? u._vnode && Fe(u._vnode, null, null, !0)
        : E(u._vnode || null, c, u, null, null, null, h),
        (u._vnode = c),
        q || ((q = !0), er(), ui(), (q = !1));
    },
    oe = {
      p: E,
      um: Fe,
      m: le,
      r: mn,
      mt: ge,
      mc: me,
      pc: Z,
      pbc: z,
      n: D,
      o: e,
    };
  let de, lt;
  return { render: H, hydrate: de, createApp: Al(H, de) };
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
function St({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Nl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ki(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (M(s) && M(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = dt(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && ki(o, l)),
        l.type === zn && (l.el = o.el);
    }
}
function kl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const d = e[s];
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < d ? (i = l + 1) : (o = l);
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
function Hi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Hi(t);
}
function cr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Hl = Symbol.for("v-scx"),
  jl = () => jt(Hl);
function Je(e, t, n) {
  return ji(e, t, n);
}
function ji(e, t, n = Q) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = pe({}, n),
    a = (t && s) || (!t && i !== "post");
  let d;
  if (an) {
    if (i === "sync") {
      const m = jl();
      d = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {};
      return (m.stop = Ye), (m.resume = Ye), (m.pause = Ye), m;
    }
  }
  const f = _e;
  l.call = (m, S, E) => Ue(m, f, S, E);
  let p = !1;
  i === "post"
    ? (l.scheduler = (m) => {
        De(m, f && f.suspense);
      })
    : i !== "sync" &&
      ((p = !0),
      (l.scheduler = (m, S) => {
        S ? m() : Rs(m);
      })),
    (l.augmentJob = (m) => {
      t && (m.flags |= 4),
        p && ((m.flags |= 2), f && ((m.id = f.uid), (m.i = f)));
    });
  const g = sl(e, t, l);
  return an && (d ? d.push(g) : a && g()), g;
}
function Bl(e, t, n) {
  const s = this.proxy,
    r = fe(e) ? (e.includes(".") ? Bi(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  N(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = hn(this),
    l = ji(r, i.bind(s), n);
  return o(), l;
}
function Bi(e, t) {
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
    (o.trim && (r = n.map((f) => (fe(f) ? f.trim() : f))),
    o.number && (r = n.map(jr)));
  let l,
    a = s[(l = Xn(t))] || s[(l = Xn(He(t)))];
  !a && i && (a = s[(l = Xn(yt(t)))]), a && Ue(a, e, 6, r);
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ue(d, e, 6, r);
  }
}
function Ki(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!N(e)) {
    const a = (d) => {
      const f = Ki(d, t, !0);
      f && ((l = !0), pe(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !i && !l
    ? (ee(e) && s.set(e, null), null)
    : (M(i) ? i.forEach((a) => (o[a] = null)) : pe(o, i),
      ee(e) && s.set(e, o),
      o);
}
function qn(e, t) {
  return !e || !Nn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, yt(t)) || Y(e, t));
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
      emit: a,
      render: d,
      renderCache: f,
      props: p,
      data: g,
      setupState: m,
      ctx: S,
      inheritAttrs: E,
    } = e,
    P = Pn(e);
  let I, K;
  try {
    if (n.shapeFlag & 4) {
      const L = r || s,
        W = L;
      (I = ze(d.call(W, L, f, p, m, g, S))), (K = l);
    } else {
      const L = t;
      (I = ze(
        L.length > 1 ? L(p, { attrs: l, slots: o, emit: a }) : L(p, null),
      )),
        (K = t.props ? l : Ul(l));
    }
  } catch (L) {
    (en.length = 0), Vn(L, e, 1), (I = ce(Ae));
  }
  let U = I;
  if (K && E !== !1) {
    const L = Object.keys(K),
      { shapeFlag: W } = U;
    L.length &&
      W & 7 &&
      (i && L.some(Ts) && (K = Wl(K, i)), (U = vt(U, K, !1, !0)));
  }
  return (
    n.dirs &&
      ((U = vt(U, null, !1, !0)),
      (U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Mt(U, n.transition),
    (I = U),
    Pn(P),
    I
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
    { props: o, children: l, patchFlag: a } = t,
    d = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? fr(s, o, d) : !!o;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const g = f[p];
        if (o[g] !== s[g] && !qn(d, g)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? fr(s, o, d)
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
const Vi = (e) => e.__isSuspense;
function zl(e, t) {
  t && t.pendingBranch
    ? M(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ol(e);
}
const Se = Symbol.for("v-fgt"),
  zn = Symbol.for("v-txt"),
  Ae = Symbol.for("v-cmt"),
  ls = Symbol.for("v-stc"),
  en = [];
let Re = null;
function ue(e = !1) {
  en.push((Re = e ? null : []));
}
function Yl() {
  en.pop(), (Re = en[en.length - 1] || null);
}
let on = 1;
function ur(e) {
  (on += e), e < 0 && Re && (Re.hasOnce = !0);
}
function Ui(e) {
  return (
    (e.dynamicChildren = on > 0 ? Re || $t : null),
    Yl(),
    on > 0 && Re && Re.push(e),
    e
  );
}
function mt(e, t, n, s, r, i) {
  return Ui(F(e, t, n, s, r, i, !0));
}
function Oe(e, t, n, s, r) {
  return Ui(ce(e, t, n, s, r, !0));
}
function ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function It(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wi = ({ key: e }) => e ?? null,
  wn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? fe(e) || be(e) || N(e)
        ? { i: ye, r: e, k: t, f: !!n }
        : e
      : null
  );
function F(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === Se ? 0 : 1,
  o = !1,
  l = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wi(t),
    ref: t && wn(t),
    scopeId: pi,
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
    ctx: ye,
  };
  return (
    l
      ? (Vs(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= fe(n) ? 8 : 16),
    on > 0 &&
      !o &&
      Re &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      Re.push(a),
    a
  );
}
const ce = Jl;
function Jl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Si) && (e = Ae), ln(e))) {
    const l = vt(e, t, !0);
    return (
      n && Vs(l, n),
      on > 0 &&
        !i &&
        Re &&
        (l.shapeFlag & 6 ? (Re[Re.indexOf(e)] = l) : Re.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((ia(e) && (e = e.__vccOpts), t)) {
    t = Bs(t);
    let { class: l, style: a } = t;
    l && !fe(l) && (t.class = Ve(l)),
      ee(a) && ($s(a) && !M(a) && (a = pe({}, a)), (t.style = Ze(a)));
  }
  const o = fe(e) ? 1 : Vi(e) ? 128 : hi(e) ? 64 : ee(e) ? 4 : N(e) ? 2 : 0;
  return F(e, t, n, s, r, o, i, !0);
}
function Bs(e) {
  return e ? ($s(e) || Mi(e) ? pe({}, e) : e) : null;
}
function vt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e,
    d = t ? qi(r || {}, t) : r,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && Wi(d),
      ref:
        t && t.ref
          ? n && i
            ? M(i)
              ? i.concat(wn(t))
              : [i, wn(t)]
            : wn(t)
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
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && vt(e.ssContent),
      ssFallback: e.ssFallback && vt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && s && Mt(f, a.clone(f)), f;
}
function Ks(e = " ", t = 0) {
  return ce(zn, null, e, t);
}
function Gi(e = "", t = !1) {
  return t ? (ue(), Oe(Ae, null, e)) : ce(Ae, null, e);
}
function ze(e) {
  return e == null || typeof e == "boolean"
    ? ce(Ae)
    : M(e)
      ? ce(Se, null, e.slice())
      : ln(e)
        ? dt(e)
        : ce(zn, null, String(e));
}
function dt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : vt(e);
}
function Vs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (M(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Vs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Mi(t)
        ? (t._ctx = ye)
        : r === 3 &&
          ye &&
          (ye.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    N(t)
      ? ((t = { default: t, _ctx: ye }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Ks(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function qi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ve([t.class, s.class]));
      else if (r === "style") t.style = Ze([t.style, s.style]);
      else if (Nn(r)) {
        const i = t[r],
          o = s[r];
        o &&
          i !== o &&
          !(M(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ge(e, t, n, s = null) {
  Ue(e, t, 7, [n, s]);
}
const Zl = Ai();
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
      propsOptions: Di(s, r),
      emitsOptions: Ki(s, r),
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
let _e = null;
const zi = () => _e || ye;
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
  (Dn = t("__VUE_INSTANCE_SETTERS__", (n) => (_e = n))),
    (xs = t("__VUE_SSR_SETTERS__", (n) => (an = n)));
}
const hn = (e) => {
    const t = _e;
    return (
      Dn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Dn(t);
      }
    );
  },
  dr = () => {
    _e && _e.scope.off(), Dn(null);
  };
function Yi(e) {
  return e.vnode.shapeFlag & 4;
}
let an = !1;
function ea(e, t = !1, n = !1) {
  t && xs(t);
  const { props: s, children: r } = e.vnode,
    i = Yi(e);
  Ol(e, s, i, t), Dl(e, r, n);
  const o = i ? ta(e, t) : void 0;
  return t && xs(!1), o;
}
function ta(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, xl));
  const { setup: s } = n;
  if (s) {
    bt();
    const r = (e.setupContext = s.length > 1 ? sa(e) : null),
      i = hn(e),
      o = pn(s, e, 0, [e.props, r]),
      l = Fr(o);
    if ((_t(), i(), (l || e.sp) && !kt(e) && _i(e), l)) {
      if ((o.then(dr, dr), t))
        return o
          .then((a) => {
            pr(e, a, t);
          })
          .catch((a) => {
            Vn(a, e, 0);
          });
      e.asyncDep = o;
    } else pr(e, o, t);
  } else Ji(e, t);
}
function pr(e, t, n) {
  N(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ee(t) && (e.setupState = ai(t)),
    Ji(e, n);
}
let hr;
function Ji(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && hr && !s.render) {
      const r = s.template || ks(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = s,
          d = pe(pe({ isCustomElement: i, delimiters: l }, o), a);
        s.render = hr(r, d);
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
const na = {
  get(e, t) {
    return Ce(e, "get", ""), e[t];
  },
};
function sa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, na),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Yn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ai(Wo(e.exposed)), {
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
function ra(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function ia(e) {
  return N(e) && "__vccOpts" in e;
}
const $e = (e, t) => tl(e, t, an);
function oa(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ee(t) && !M(t)
      ? ln(t)
        ? ce(e, null, [t])
        : ce(e, t)
      : ce(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && ln(n) && (n = [n]),
      ce(e, t, n));
}
const la = "3.5.12";
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Cs;
const gr = typeof window < "u" && window.trustedTypes;
if (gr)
  try {
    Cs = gr.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Zi = Cs ? (e) => Cs.createHTML(e) : (e) => e,
  aa = "http://www.w3.org/2000/svg",
  ca = "http://www.w3.org/1998/Math/MathML",
  st = typeof document < "u" ? document : null,
  mr = st && st.createElement("template"),
  fa = {
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
          ? st.createElementNS(aa, e)
          : t === "mathml"
            ? st.createElementNS(ca, e)
            : n
              ? st.createElement(e, { is: n })
              : st.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => st.createTextNode(e),
    createComment: (e) => st.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => st.querySelector(e),
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
        mr.innerHTML = Zi(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const l = mr.content;
        if (s === "svg" || s === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  at = "transition",
  qt = "animation",
  Vt = Symbol("_vtc"),
  Xi = {
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
  Qi = pe({}, mi, Xi),
  ua = (e) => ((e.displayName = "Transition"), (e.props = Qi), e),
  da = ua((e, { slots: t }) => oa(cl, eo(e), t)),
  Tt = (e, t = []) => {
    M(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  vr = (e) => (e ? (M(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function eo(e) {
  const t = {};
  for (const A in e) A in Xi || (t[A] = e[A]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = i,
      appearActiveClass: d = o,
      appearToClass: f = l,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: g = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    S = pa(r),
    E = S && S[0],
    P = S && S[1],
    {
      onBeforeEnter: I,
      onEnter: K,
      onEnterCancelled: U,
      onLeave: L,
      onLeaveCancelled: W,
      onBeforeAppear: G = I,
      onAppear: te = K,
      onAppearCancelled: me = U,
    } = t,
    k = (A, J, ge) => {
      ct(A, J ? f : l), ct(A, J ? d : o), ge && ge();
    },
    z = (A, J) => {
      (A._isLeaving = !1), ct(A, p), ct(A, m), ct(A, g), J && J();
    },
    ie = (A) => (J, ge) => {
      const Qe = A ? te : K,
        he = () => k(J, A, ge);
      Tt(Qe, [J, he]),
        yr(() => {
          ct(J, A ? a : i), nt(J, A ? f : l), vr(Qe) || br(J, s, E, he);
        });
    };
  return pe(t, {
    onBeforeEnter(A) {
      Tt(I, [A]), nt(A, i), nt(A, o);
    },
    onBeforeAppear(A) {
      Tt(G, [A]), nt(A, a), nt(A, d);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(A, J) {
      A._isLeaving = !0;
      const ge = () => z(A, J);
      nt(A, p),
        nt(A, g),
        no(),
        yr(() => {
          A._isLeaving && (ct(A, p), nt(A, m), vr(L) || br(A, s, P, ge));
        }),
        Tt(L, [A, ge]);
    },
    onEnterCancelled(A) {
      k(A, !1), Tt(U, [A]);
    },
    onAppearCancelled(A) {
      k(A, !0), Tt(me, [A]);
    },
    onLeaveCancelled(A) {
      z(A), Tt(W, [A]);
    },
  });
}
function pa(e) {
  if (e == null) return null;
  if (ee(e)) return [as(e.enter), as(e.leave)];
  {
    const t = as(e);
    return [t, t];
  }
}
function as(e) {
  return go(e);
}
function nt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Vt] || (e[Vt] = new Set())).add(t);
}
function ct(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Vt];
  n && (n.delete(t), n.size || (e[Vt] = void 0));
}
function yr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ha = 0;
function br(e, t, n, s) {
  const r = (e._endId = ++ha),
    i = () => {
      r === e._endId && s();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: l, propCount: a } = to(e, t);
  if (!o) return s();
  const d = o + "end";
  let f = 0;
  const p = () => {
      e.removeEventListener(d, g), i();
    },
    g = (m) => {
      m.target === e && ++f >= a && p();
    };
  setTimeout(() => {
    f < a && p();
  }, l + 1),
    e.addEventListener(d, g);
}
function to(e, t) {
  const n = window.getComputedStyle(e),
    s = (S) => (n[S] || "").split(", "),
    r = s(`${at}Delay`),
    i = s(`${at}Duration`),
    o = _r(r, i),
    l = s(`${qt}Delay`),
    a = s(`${qt}Duration`),
    d = _r(l, a);
  let f = null,
    p = 0,
    g = 0;
  t === at
    ? o > 0 && ((f = at), (p = o), (g = i.length))
    : t === qt
      ? d > 0 && ((f = qt), (p = d), (g = a.length))
      : ((p = Math.max(o, d)),
        (f = p > 0 ? (o > d ? at : qt) : null),
        (g = f ? (f === at ? i.length : a.length) : 0));
  const m =
    f === at && /\b(transform|all)(,|$)/.test(s(`${at}Property`).toString());
  return { type: f, timeout: p, propCount: g, hasTransform: m };
}
function _r(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => xr(n) + xr(e[s])));
}
function xr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function no() {
  return document.body.offsetHeight;
}
function ga(e, t, n) {
  const s = e[Vt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t);
}
const Cr = Symbol("_vod"),
  ma = Symbol("_vsh"),
  va = Symbol(""),
  ya = /(^|;)\s*display\s*:/;
function ba(e, t, n) {
  const s = e.style,
    r = fe(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (fe(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Sn(s, l, "");
        }
      else for (const o in t) n[o] == null && Sn(s, o, "");
    for (const o in n) o === "display" && (i = !0), Sn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[va];
      o && (n += ";" + o), (s.cssText = n), (i = ya.test(n));
    }
  } else t && e.removeAttribute("style");
  Cr in e && ((e[Cr] = i ? s.display : ""), e[ma] && (s.display = "none"));
}
const wr = /\s*!important$/;
function Sn(e, t, n) {
  if (M(n)) n.forEach((s) => Sn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = _a(e, t);
    wr.test(n)
      ? e.setProperty(yt(s), n.replace(wr, ""), "important")
      : (e[s] = n);
  }
}
const Sr = ["Webkit", "Moz", "ms"],
  cs = {};
function _a(e, t) {
  const n = cs[t];
  if (n) return n;
  let s = He(t);
  if (s !== "filter" && s in e) return (cs[t] = s);
  s = Hn(s);
  for (let r = 0; r < Sr.length; r++) {
    const i = Sr[r] + s;
    if (i in e) return (cs[t] = i);
  }
  return t;
}
const Tr = "http://www.w3.org/1999/xlink";
function Er(e, t, n, s, r, i = xo(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Tr, t.slice(6, t.length))
      : e.setAttributeNS(Tr, t, n)
    : n == null || (i && !Kr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : Ke(n) ? String(n) : n);
}
function Ir(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Zi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (l !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = Kr(n))
      : n == null && l === "string"
        ? ((n = ""), (o = !0))
        : l === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(r || t);
}
function Us(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function xa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ar = Symbol("_vei");
function Ca(e, t, n, s, r = null) {
  const i = e[Ar] || (e[Ar] = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, a] = wa(t);
    if (s) {
      const d = (i[t] = Ea(s, r));
      Us(e, l, d, a);
    } else o && (xa(e, l, o, a), (i[t] = void 0));
  }
}
const Or = /(?:Once|Passive|Capture)$/;
function wa(e) {
  let t;
  if (Or.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Or)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t];
}
let fs = 0;
const Sa = Promise.resolve(),
  Ta = () => fs || (Sa.then(() => (fs = 0)), (fs = Date.now()));
function Ea(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Ue(Ia(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Ta()), n;
}
function Ia(e, t) {
  if (M(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Pr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Aa = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class"
      ? ga(e, s, o)
      : t === "style"
        ? ba(e, n, s)
        : Nn(t)
          ? Ts(t) || Ca(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Oa(e, t, s, o)
              )
            ? (Ir(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Er(e, t, s, o, i, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !fe(s))
              ? Ir(e, He(t), s, i, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Er(e, t, s, o));
  };
function Oa(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Pr(t) && N(n))
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
  return Pr(t) && fe(n) ? !1 : t in e;
}
const so = new WeakMap(),
  ro = new WeakMap(),
  $n = Symbol("_moveCb"),
  Mr = Symbol("_enterCb"),
  Pa = (e) => (delete e.props.mode, e),
  Ma = Pa({
    name: "TransitionGroup",
    props: pe({}, Qi, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = zi(),
        s = gi();
      let r, i;
      return (
        Ci(() => {
          if (!r.length) return;
          const o = e.moveClass || `${e.name || "v"}-move`;
          if (!Fa(r[0].el, n.vnode.el, o)) return;
          r.forEach(Da), r.forEach($a);
          const l = r.filter(Ra);
          no(),
            l.forEach((a) => {
              const d = a.el,
                f = d.style;
              nt(d, o),
                (f.transform = f.webkitTransform = f.transitionDuration = "");
              const p = (d[$n] = (g) => {
                (g && g.target !== d) ||
                  ((!g || /transform$/.test(g.propertyName)) &&
                    (d.removeEventListener("transitionend", p),
                    (d[$n] = null),
                    ct(d, o)));
              });
              d.addEventListener("transitionend", p);
            });
        }),
        () => {
          const o = j(e),
            l = eo(o);
          let a = o.tag || Se;
          if (((r = []), i))
            for (let d = 0; d < i.length; d++) {
              const f = i[d];
              f.el &&
                f.el instanceof Element &&
                (r.push(f),
                Mt(f, rn(f, l, s, n)),
                so.set(f, f.el.getBoundingClientRect()));
            }
          i = t.default ? Fs(t.default()) : [];
          for (let d = 0; d < i.length; d++) {
            const f = i[d];
            f.key != null && Mt(f, rn(f, l, s, n));
          }
          return ce(a, null, i);
        }
      );
    },
  }),
  La = Ma;
function Da(e) {
  const t = e.el;
  t[$n] && t[$n](), t[Mr] && t[Mr]();
}
function $a(e) {
  ro.set(e, e.el.getBoundingClientRect());
}
function Ra(e) {
  const t = so.get(e),
    n = ro.get(e),
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
function Fa(e, t, n) {
  const s = e.cloneNode(),
    r = e[Vt];
  r &&
    r.forEach((l) => {
      l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
    }),
    n.split(/\s+/).forEach((l) => l && s.classList.add(l)),
    (s.style.display = "none");
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: o } = to(s);
  return i.removeChild(s), o;
}
const Rn = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return M(t) ? (n) => Cn(t, n) : t;
  },
  Bt = Symbol("_assign"),
  Na = {
    deep: !0,
    created(e, t, n) {
      (e[Bt] = Rn(n)),
        Us(e, "change", () => {
          const s = e._modelValue,
            r = cn(e),
            i = e.checked,
            o = e[Bt];
          if (M(s)) {
            const l = As(s, r),
              a = l !== -1;
            if (i && !a) o(s.concat(r));
            else if (!i && a) {
              const d = [...s];
              d.splice(l, 1), o(d);
            }
          } else if (Ut(s)) {
            const l = new Set(s);
            i ? l.add(r) : l.delete(r), o(l);
          } else o(io(e, i));
        });
    },
    mounted: Lr,
    beforeUpdate(e, t, n) {
      (e[Bt] = Rn(n)), Lr(e, t, n);
    },
  };
function Lr(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let r;
  if (M(t)) r = As(t, s.props.value) > -1;
  else if (Ut(t)) r = t.has(s.props.value);
  else {
    if (t === n) return;
    r = un(t, io(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const ka = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Ut(t);
    Us(e, "change", () => {
      const i = Array.prototype.filter
        .call(e.options, (o) => o.selected)
        .map((o) => (n ? jr(cn(o)) : cn(o)));
      e[Bt](e.multiple ? (r ? new Set(i) : i) : i[0]),
        (e._assigning = !0),
        On(() => {
          e._assigning = !1;
        });
    }),
      (e[Bt] = Rn(s));
  },
  mounted(e, { value: t }) {
    Dr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Bt] = Rn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Dr(e, t);
  },
};
function Dr(e, t) {
  const n = e.multiple,
    s = M(t);
  if (!(n && !s && !Ut(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r],
        l = cn(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number"
            ? (o.selected = t.some((d) => String(d) === String(l)))
            : (o.selected = As(t, l) > -1);
        } else o.selected = t.has(l);
      else if (un(cn(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function cn(e) {
  return "_value" in e ? e._value : e.value;
}
function io(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Ha = ["ctrl", "shift", "alt", "meta"],
  ja = {
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
    exact: (e, t) => Ha.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  ws = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = ja[t[o]];
          if (l && l(r, t)) return;
        }
        return e(r, ...i);
      })
    );
  },
  Ba = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Ka = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!("key" in r)) return;
        const i = yt(r.key);
        if (t.some((o) => o === i || Ba[o] === i)) return e(r);
      })
    );
  },
  Va = pe({ patchProp: Aa }, fa);
let $r;
function Ua() {
  return $r || ($r = Rl(Va));
}
const Wa = (...e) => {
  const t = Ua().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = qa(s);
      if (!r) return;
      const i = t._component;
      !N(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
      const o = n(r, !1, Ga(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function Ga(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function qa(e) {
  return fe(e) ? document.querySelector(e) : e;
}
function za(e) {
  return Wr() ? (So(e), !0) : !1;
}
function Ws(e) {
  return typeof e == "function" ? e() : B(e);
}
const Ya = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ja = Object.prototype.toString,
  Za = (e) => Ja.call(e) === "[object Object]",
  Xa = () => {};
function Qa(e, t, n = !1) {
  return t.reduce(
    (s, r) => (r in e && (!n || e[r] !== void 0) && (s[r] = e[r]), s),
    {},
  );
}
function ec(e, t = {}) {
  if (!be(e)) return Zo(e);
  const n = Array.isArray(e.value)
    ? Array.from({ length: e.value.length })
    : {};
  for (const s in e.value)
    n[s] = Jo(() => ({
      get() {
        return e.value[s];
      },
      set(r) {
        var i;
        if ((i = Ws(t.replaceRef)) != null ? i : !0)
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
const Gs = Ya ? window : void 0;
function tc(e) {
  var t;
  const n = Ws(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Kt(...e) {
  let t, n, s, r;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = Gs))
      : ([t, n, s, r] = e),
    !t)
  )
    return Xa;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [],
    o = () => {
      i.forEach((f) => f()), (i.length = 0);
    },
    l = (f, p, g, m) => (
      f.addEventListener(p, g, m), () => f.removeEventListener(p, g, m)
    ),
    a = Je(
      () => [tc(t), Ws(r)],
      ([f, p]) => {
        if ((o(), !f)) return;
        const g = Za(p) ? { ...p } : p;
        i.push(...n.flatMap((m) => s.map((S) => l(f, m, S, g))));
      },
      { immediate: !0, flush: "post" },
    ),
    d = () => {
      a(), o();
    };
  return za(d), d;
}
const oo = {
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
  nc = Object.keys(oo);
function lo(e = {}) {
  const { target: t = Gs } = e,
    n = ae(!1),
    s = ae(e.initialValue || {});
  Object.assign(s.value, oo, s.value);
  const r = (i) => {
    (n.value = !0),
      !(e.pointerTypes && !e.pointerTypes.includes(i.pointerType)) &&
        (s.value = Qa(i, nc, !1));
  };
  if (t) {
    const i = { passive: !0 };
    Kt(t, ["pointerdown", "pointermove", "pointerup"], r, i),
      Kt(t, "pointerleave", () => (n.value = !1), i);
  }
  return { ...ec(s), isInside: n };
}
function sc(e = {}) {
  const { window: t = Gs, behavior: n = "auto" } = e;
  if (!t) return { x: ae(0), y: ae(0) };
  const s = ae(t.scrollX),
    r = ae(t.scrollY),
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
    Kt(
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
const zt = ae(void 0),
  gn = () => {
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
  { movingItemCanTarget: rc } = gn(),
  pt = dn({}),
  qs = ae(void 0),
  ic = $e(() => {
    var e;
    return (e = qs.value) == null ? void 0 : e.identifier;
  });
Je(
  () =>
    Reflect.ownKeys(pt)
      .filter((e) => rc([e, pt[e].group]))
      .filter((e) => pt[e].pointerIsAbove)
      .toSorted((e, t) => pt[t].stackLevel - pt[e].stackLevel)
      .map((e) => pt[e]),
  (e) => {
    qs.value = e.length ? e.at(0) : void 0;
  },
);
Je(
  () => qs.value,
  (e, t) => {
    e !== t && (t && t.leaveList(), e && e.enterList());
  },
);
const oc = () => {
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
    return { addList: e, removeList: t, targetedList: ic };
  },
  Tn = Xe({
    __name: "PointerElement",
    props: { tag: { type: String, default: "div" } },
    emits: ["pointer-enter", "pointer-leave"],
    setup(e, { expose: t, emit: n }) {
      const s = ae(),
        { x: r, y: i } = lo(),
        o = $e(() => {
          const d = s.value.getBoundingClientRect();
          return (
            r.value >= d.x &&
            r.value <= d.x + d.width &&
            i.value >= d.y &&
            i.value <= d.y + d.height
          );
        }),
        l = n;
      return (
        t({ isAbove: o }),
        Gn(() => {
          Je(o, (a, d) => {
            a && !d
              ? l("pointer-enter", s.value)
              : d && !a && l("pointer-leave", s.value);
          });
        }),
        (a, d) => (
          ue(),
          Oe(
            Mn(e.tag),
            { ref_key: "PointerElement", ref: s },
            {
              default: ve(() => [At(a.$slots, "default", Br(Bs(a.$attrs)))]),
              _: 3,
            },
            512,
          )
        )
      );
    },
  }),
  Jn = Xe({
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
        a = lo(),
        { x: d, y: f } = sc(),
        { movingItem: p, isMoving: g, movingItemCanTarget: m } = gn(),
        { addList: S, removeList: E, targetedList: P } = oc(),
        I = ae(),
        K = ae();
      let U = 0,
        L = 0,
        W;
      const G = ae([]),
        te = $e(() => G.value.map(({ payload: D }) => D) || []);
      function me(D) {
        const q = [];
        D.forEach((H) => {
          const oe = n.listKey
            ? G.value.find(({ key: de }) => de === H[n.listKey])
            : G.value.find(({ payload: de }) => H === de);
          oe
            ? q.push({ ...oe, payload: H })
            : q.push({
                key:
                  n.listKey && Object.keys(H).includes(n.listKey)
                    ? H[n.listKey]
                    : Symbol(),
                payload: H,
              });
        }),
          (G.value = q);
      }
      Je(() => n.list, me, { deep: !0 }),
        Je(
          () => {
            var D;
            return (D = p.value) == null ? void 0 : D.destination;
          },
          (D, q) => {
            (D == null ? void 0 : D.identifier) !== r.value &&
              (q == null ? void 0 : q.identifier) === r.value &&
              (G.value = G.value.filter(({ payload: H }) => {
                var oe;
                return H !== ((oe = p.value) == null ? void 0 : oe.payload);
              }));
          },
        );
      const k = t,
        z = (D) => {
          var H, oe;
          if (
            !p.value ||
            ((oe = (H = p.value) == null ? void 0 : H.destination) == null
              ? void 0
              : oe.identifier) !== r.value ||
            g(te.value[D])
          )
            return;
          let q = p.value.destination.index;
          if (
            (q === void 0 &&
              (q = G.value.findIndex(({ payload: de }) => {
                var lt;
                return de === ((lt = p.value) == null ? void 0 : lt.payload);
              })),
            q === -1)
          )
            G.value.splice(D, 0, {
              payload: p.value.payload,
              key: p.value.key,
            });
          else {
            const [de] = G.value.splice(q, 1);
            G.value.splice(D, 0, de);
          }
          (p.value.destination.index = D),
            (p.value.destination.listItems = te.value);
        },
        ie = () => {
          var q;
          if (p.value === void 0) return;
          const D = te.value.indexOf(p.value.payload);
          D >= 0 && G.value.splice(D, 1),
            ((q = p.value.destination) == null ? void 0 : q.identifier) ===
              r.value && (p.value.destination = p.value.origin);
        },
        A = () => {
          p.value &&
            (te.value.length === 0 &&
              (G.value = [{ payload: p.value.payload, key: p.value.key }]),
            (p.value.destination = {
              identifier: r.value,
              type: "list",
              group: n.group,
              listItems: te.value,
              meta: n.meta,
            }));
        },
        J = (D, q) => {
          D &&
            q.split(" ").forEach((H) => {
              H && D.classList.add(H);
            });
        },
        ge = (D, q) => {
          D &&
            q.split(" ").forEach((H) => {
              H && D.classList.remove(H);
            });
        },
        Qe = $e(() =>
          typeof o.value.handle == "string" ? o.value.handle : "",
        ),
        he = (D, { key: q, payload: H }) => {
          (W = D.getBoundingClientRect()),
            (U = a.x.value - W.x),
            (L = a.y.value - W.y);
          const oe = te.value.indexOf(H),
            de = {
              identifier: r.value,
              type: "list",
              group: n.group,
              listItems: te.value,
              index: oe,
            };
          (p.value = {
            payload: H,
            hoverElement: I,
            origin: de,
            destination: { ...de, meta: n.meta },
            dropTargets: [n.targets ?? n.group ?? r.value].flat(),
            key: q,
          }),
            On(() => {
              xt(),
                J(I.value, o.value.hoverTransitionClass || ""),
                J(I.value, o.value.hoverClass || ""),
                Kt(
                  I.value,
                  "transitionend",
                  () => {
                    ge(I.value, o.value.hoverTransitionClass || "");
                  },
                  { once: !0 },
                );
            }),
            p.value && k("liftItem", j(p.value));
        };
      let ne;
      const Z = (D, q) => {
          const { target: H, currentTarget: oe } = D;
          (o.value.handle &&
            (H == null ? void 0 : H.getAttribute("data-handle")) !==
              Qe.value) ||
            (ne = setTimeout(() => {
              he(oe, q);
            }, o.value.liftDelay));
        },
        et = () => {
          clearTimeout(ne);
        },
        xt = () => {
          var D;
          (le.value =
            ((D = document.getElementById("arrangeable-list-target-element")) ==
            null
              ? void 0
              : D.getBoundingClientRect()) ?? W),
            le.value &&
              (le.value = {
                ...le.value,
                top: le.value.top + f.value,
                left: le.value.left + d.value,
                right: le.value.right + d.value,
                bottom: le.value.bottom + f.value,
                x: le.value.x + d.value,
                y: le.value.y + f.value,
              });
        },
        le = ae(),
        Fe = () => {
          if (p.value === void 0 || p.value.origin.identifier !== r.value)
            return;
          let D = !1;
          On(() => {
            xt(),
              J(I.value, o.value.hoverTransitionClass || ""),
              l.value && J(I.value, l.value);
            let q = getComputedStyle(I.value).transitionProperty,
              H = getComputedStyle(I.value).transitionDuration;
            q !== "none" &&
              H.split(", ").some((oe) => parseFloat(oe) > 0) &&
              (D = !0),
              ge(I.value, o.value.hoverClass || ""),
              D
                ? Kt(I.value, "transitionend", () => (p.value = void 0), {
                    once: !0,
                  })
                : (p.value = void 0);
          }),
            k("dropItem", j(p.value)),
            me(n.list);
        };
      Kt(document, "pointerup", () => {
        et(), Fe();
      });
      const mn = Symbol(),
        Zn = Symbol(),
        vn = jt("arrangeableListStackLevel", 0);
      Hs("arrangeableListStackLevel", vn + 1);
      const Ct = $e(() => P.value === r.value);
      return (
        Gn(() => {
          S(
            r.value,
            n.group,
            vn,
            $e(() => {
              var D;
              return ((D = K.value) == null ? void 0 : D.isAbove) ?? !1;
            }),
            A,
            ie,
          ),
            me(n.list),
            (document.body.style.touchAction = "none");
        }),
        Ns(() => {
          E(r.value), (document.body.style.touchAction = "");
        }),
        (D, q) => (
          ue(),
          Oe(
            Tn,
            {
              name: "ArrangeableList",
              ref_key: "listElement",
              ref: K,
              tag: D.tag ?? "ul",
              class: Ve(Ct.value ? o.value.hoveredOverListClass : ""),
            },
            {
              default: ve(() => [
                ce(
                  La,
                  Br(
                    Bs(
                      !B(p) || B(m)([r.value, D.group])
                        ? o.value.listTransition
                        : {},
                    ),
                  ),
                  {
                    default: ve(() => [
                      (ue(),
                      Oe(
                        Mn(D.listItemTag ?? "li"),
                        { key: B(mn) },
                        {
                          default: ve(() => [
                            At(D.$slots, "before", { arrangedItems: te.value }),
                          ]),
                          _: 3,
                        },
                      )),
                      (ue(!0),
                      mt(
                        Se,
                        null,
                        Ti(
                          G.value || [],
                          (H, oe) => (
                            ue(),
                            Oe(
                              Tn,
                              {
                                key: H.key,
                                tag: D.listItemTag ?? "li",
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
                                onTouchstart: ws(
                                  (de) => Z(de, H),
                                  ["left", "prevent"],
                                ),
                                onPointerdown: ws(
                                  (de) => Z(de, H),
                                  ["left", "stop"],
                                ),
                                onPointerEnter: (de) => z(oe),
                              },
                              {
                                default: ve(() => [
                                  At(D.$slots, "default", {
                                    item: H.payload,
                                    arrangedItems: te.value,
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
                      (ue(),
                      Oe(
                        Tn,
                        {
                          key: B(Zn),
                          tag: D.listItemTag ?? "li",
                          onPointerEnter:
                            q[0] || (q[0] = (H) => z(G.value.length)),
                        },
                        {
                          default: ve(() => [
                            At(D.$slots, "after", { arrangedItems: te.value }),
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
                  ? (ue(),
                    Oe(
                      da,
                      { key: 0, ref_key: "hoverElement", ref: I },
                      {
                        default: ve(() => {
                          var H, oe, de, lt, c, u, h, y;
                          return [
                            (ue(),
                            Oe(
                              Mn(D.listItemTag ?? "li"),
                              {
                                style: Ze([
                                  {
                                    left: B(a).x.value - B(U) + B(d) + "px",
                                    top: B(a).y.value - B(L) + B(f) + "px",
                                    width:
                                      ((H = B(W)) == null ? void 0 : H.width) +
                                      "px",
                                    height:
                                      ((oe = B(W)) == null
                                        ? void 0
                                        : oe.height) + "px",
                                    "--landingzone-top":
                                      ((de = le.value) == null
                                        ? void 0
                                        : de.top) + "px",
                                    "--landingzone-left":
                                      ((lt = le.value) == null
                                        ? void 0
                                        : lt.left) + "px",
                                    "--landingzone-right":
                                      ((c = le.value) == null
                                        ? void 0
                                        : c.right) + "px",
                                    "--landingzone-bottom":
                                      ((u = le.value) == null
                                        ? void 0
                                        : u.bottom) + "px",
                                    "--landingzone-width":
                                      ((h = le.value) == null
                                        ? void 0
                                        : h.width) + "px",
                                    "--landingzone-height":
                                      ((y = le.value) == null
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
                                default: ve(() => [
                                  At(D.$slots, "default", {
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
                  : Gi("", !0),
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
  lc = Xe({
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
        r = ae(),
        i = t,
        o = () => {
          var a, d;
          ((d = (a = s.value) == null ? void 0 : a.destination) == null
            ? void 0
            : d.identifier) === n.identifier &&
            ((s.value.destination = void 0), i("leaveZone", j(s.value)));
        },
        l = () => {
          var a;
          s.value &&
            ((a = s.value.destination) == null ? void 0 : a.identifier) !==
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
      return (a, d) => {
        var f, p;
        return (
          ue(),
          Oe(
            Tn,
            qi(
              {
                onPointerLeave: o,
                onPointerEnter: l,
                id:
                  ((p = (f = B(s)) == null ? void 0 : f.destination) == null
                    ? void 0
                    : p.identifier) === n.identifier
                    ? "arrangeable-list-target-element"
                    : void 0,
              },
              a.$attrs,
              { ref_key: "dropZone", ref: r },
            ),
            {
              default: ve(() => {
                var g, m, S, E;
                return [
                  At(a.$slots, "default", {
                    isHovering:
                      ((m = (g = B(s)) == null ? void 0 : g.destination) == null
                        ? void 0
                        : m.identifier) === n.identifier,
                    class: Ve(
                      ((E = (S = B(s)) == null ? void 0 : S.destination) == null
                        ? void 0
                        : E.identifier) === n.identifier
                        ? a.options.hoverClass
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
  ac = { class: "flex flex-grow flex-col items-center overflow-auto" },
  Rr = Xe({
    __name: "ColorSorting",
    setup(e) {
      const t = ae(
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
        ue(),
        mt("main", ac, [
          o[0] ||
            (o[0] = F(
              "h1",
              { class: "m-2 text-xl font-extrabold" },
              "Tailwind color sorting game:",
              -1,
            )),
          F("div", null, [
            F(
              "button",
              {
                onClick: s,
                class:
                  "m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5",
              },
              " shuffle ",
            ),
            F(
              "button",
              {
                onClick: r,
                class:
                  "m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5",
              },
              " reset ",
            ),
          ]),
          ce(
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
              default: ve(({ item: l }) => [
                F(
                  "div",
                  {
                    class:
                      "m-2 flex h-10 w-96 cursor-grab select-none justify-center rounded-lg p-2 hover:drop-shadow-lg",
                    style: Ze({ backgroundColor: l.color }),
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
  cc = Xe({
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
        ue(),
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
            default: ve(({ item: l }) => [
              F(
                "div",
                {
                  class:
                    "m-1 flex items-center whitespace-normal break-words rounded border-2 border-black p-2 text-xl",
                  style: Ze({ backgroundColor: i.list.color[300] }),
                },
                [
                  o[2] ||
                    (o[2] = F(
                      "div",
                      {
                        "data-handle": "cardHandle",
                        class: "mr-2 cursor-grab select-none",
                      },
                      " ︙ ",
                      -1,
                    )),
                  Ks(" " + gt(l.description), 1),
                ],
                4,
              ),
            ]),
            after: ve(() => [
              F(
                "div",
                {
                  class:
                    "m-1 flex items-center rounded border-2 border-black p-2 text-xl",
                  style: Ze({ backgroundColor: i.list.color[200] }),
                },
                [
                  F(
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
  fc = { class: "flex flex-grow flex-row items-start overflow-auto" },
  uc = { class: "flex border-none p-2 text-2xl font-bold" },
  dc = ["onChange", "value"],
  pc = Xe({
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
        i = ae(
          n.map((g, m) => ({ name: g, id: Symbol(g), color: us(), index: m })),
        ),
        o = ae(
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
        a = (g) => {
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
        d = (g) => {
          var S, E, P;
          const m = "listId" in g.payload ? o : i;
          g.destination !== void 0 &&
            (g.destination.identifier === r
              ? (m.value = m.value.filter(({ id: I }) => I !== g.payload.id))
              : (((S = g.destination.listItems) == null ? void 0 : S.length) ===
                  0 &&
                  ((g.payload.index = 0),
                  "listId" in g.payload &&
                    (g.payload.listId =
                      (E = g.destination) == null ? void 0 : E.identifier)),
                (P = g.destination.listItems) == null ||
                  P.forEach((I, K) => {
                    var U;
                    (I.index = K),
                      "listId" in I &&
                        (I.listId =
                          (U = g.destination) == null ? void 0 : U.identifier);
                  }),
                m.value.sort((I, K) => I.index - K.index)));
        },
        f = {
          hoverClass:
            "opacity-70 cursor-grabbing drop-shadow-[0_10px_15px_rgba(0,0,0,0.75)] scale-110 -rotate-3",
          pickedItemClass: "opacity-20",
        },
        p = ae(us());
      return (g, m) => (
        ue(),
        mt("main", fc, [
          ce(
            B(Jn),
            {
              list: i.value,
              identifier: "lists",
              class: "flex flex-grow flex-row items-start overflow-auto",
              options: { ...f, handle: "listHandle" },
              onDropItem: d,
              targets: [B(r), "lists"],
            },
            {
              default: ve(({ item: S }) => [
                F(
                  "div",
                  {
                    class:
                      "float-left m-1 h-fit w-60 rounded-md border-2 border-black",
                    style: Ze({ backgroundColor: S.color[100] }),
                  },
                  [
                    F("div", uc, [
                      m[0] ||
                        (m[0] = F(
                          "div",
                          {
                            "data-handle": "listHandle",
                            class: "mr-2 cursor-grab select-none",
                          },
                          " ︙ ",
                          -1,
                        )),
                      F(
                        "input",
                        {
                          class: "w-full bg-transparent",
                          onChange: (E) => {
                            var P;
                            return (S.name =
                              (P = E.target) == null ? void 0 : P.value);
                          },
                          value: S.name,
                        },
                        null,
                        40,
                        dc,
                      ),
                    ]),
                    ce(
                      cc,
                      {
                        list: S,
                        items: o.value.filter(({ listId: E }) => E === S.id),
                        group: B(s),
                        trashBin: B(r),
                        arrangeableOptions: f,
                        onAddItem: l,
                        onDropItem: d,
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
                F(
                  "div",
                  {
                    class:
                      "m-1 flex h-fit w-60 rounded-md border-2 border-black p-2 text-2xl",
                    style: Ze({ backgroundColor: p.value[100] }),
                  },
                  [
                    F(
                      "input",
                      {
                        class:
                          "w-full border-b-2 border-gray-400 bg-transparent italic outline-none focus-visible:border-black",
                        onChange: a,
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
          ce(
            B(lc),
            { identifier: B(r), group: B(s), class: "inline-block" },
            {
              default: ve(({ isHovering: S }) => [
                F(
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
  hc = Xe({
    __name: "DisclosurePanel",
    setup(e, { expose: t }) {
      const n = ae(!1),
        s = jt("expandAll", ae(!1));
      Je(
        s,
        (i) => {
          i != null && (n.value = i);
        },
        { immediate: !0 },
      );
      function r(i) {
        i !== void 0 ? (n.value = i) : (n.value = !n.value), (s.value = void 0);
      }
      return (
        t({ open: n, toggle: r }),
        (i, o) => (
          ue(),
          mt("div", null, [
            At(i.$slots, "default", { open: n.value, toggle: r }),
          ])
        )
      );
    },
  }),
  gc = {
    class:
      "flex items-center whitespace-normal break-words p-1 text-xl select-none",
  },
  mc = ["onClick"],
  vc = { "data-handle": "", class: "ml-1 cursor-grab flex flex-row w-full" },
  yc = ["value", "onChange"],
  bc = { class: "ml-auto text-slate-400" },
  _c = { key: 0, class: "ml-10 border-l-2 border-slate-300" },
  xc = "⏷",
  Cc = "⏵",
  wc = "📁",
  Sc = "📂",
  Tc = "📄",
  ao = Xe({
    __name: "FileSystemDirectory",
    props: { toc: {}, directory: {}, parent: {} },
    setup(e) {
      const { isMoving: t } = gn(),
        n = (s) => {
          var r;
          s.payload.parent =
            (r = s.destination) == null ? void 0 : r.identifier;
        };
      return (s, r) => (
        ue(),
        Oe(
          Jn,
          {
            list: s.toc.filter((i) => i.parent === s.directory),
            identifier: s.directory,
            group: "directories",
            class: "rounded m-1 p-1",
            options: {
              handle: !0,
              pickedItemClass: "h-0 bg-blue-200 rounded text-transparent",
              hoverClass: "opacity-80 bg-white cursor-grabbing rounded",
              hoveredOverListClass: "bg-sky-100",
              liftDelay: 200,
            },
            onDropItem: n,
          },
          {
            default: ve(({ item: i }) => [
              ce(
                hc,
                null,
                {
                  default: ve(({ open: o, toggle: l }) => [
                    F("div", gc, [
                      F(
                        "div",
                        {
                          class: Ve([
                            "w-4 cursor-pointer text-slate-400",
                            B(t)(i) && "invisible",
                          ]),
                          onClick: () => l(),
                        },
                        gt(i.type === "directory" ? (o ? xc : Cc) : ""),
                        11,
                        mc,
                      ),
                      F("div", vc, [
                        Ks(
                          gt(i.type === "directory" ? (o ? Sc : wc) : Tc) + " ",
                          1,
                        ),
                        F(
                          "input",
                          {
                            "data-handle": "",
                            class: "ml-2 w-full bg-transparent cursor-grab",
                            value: i.name,
                            onChange: ({ target: a }) => (i.name = a.value),
                            onDblclick:
                              r[0] || (r[0] = (a) => a.target.focus()),
                            onMousedown:
                              r[1] || (r[1] = ws(() => {}, ["prevent"])),
                            onKeyup:
                              r[2] ||
                              (r[2] = Ka((a) => a.target.blur(), ["enter"])),
                          },
                          null,
                          40,
                          yc,
                        ),
                        F("div", bc, gt(i.created.toLocaleDateString()), 1),
                      ]),
                    ]),
                    i.type === "directory" && o && !B(t)(i)
                      ? (ue(),
                        mt("div", _c, [
                          ce(
                            ao,
                            {
                              toc: s.toc,
                              directory: i.id,
                              parent: s.directory,
                              ref: "nestedDirectory",
                              class: "min-h-5",
                            },
                            null,
                            8,
                            ["toc", "directory", "parent"],
                          ),
                        ]))
                      : Gi("", !0),
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
    },
  }),
  Ec = { class: "border-black border rounded-lg m-2 w-1/2" },
  Ic = {
    name: "Controls",
    class:
      "flex flex-row justify-between border border-1 rounded m-1 border-slate-300",
  },
  Ac = { class: "flex flex-col" },
  Oc = { name: "Sorting control" },
  Pc = { name: "Directories first control" },
  Mc = { name: "Expand/collapse controls", class: "flex flex-col" },
  Lc = Xe({
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
        a = Symbol("local"),
        d = Symbol("log"),
        f = dn([
          { id: s, name: "usr", parent: n, type: "directory" },
          { id: o, name: "bin", parent: s, type: "directory" },
          { id: a, name: "local", parent: s, type: "directory" },
          { id: r, name: "etc", parent: n, type: "directory" },
          { id: i, name: "var", parent: n, type: "directory" },
          { id: l, name: "lib", parent: n, type: "directory" },
          { id: d, name: "log", parent: i, type: "directory" },
          { id: Symbol(), name: "python3.sh", parent: a, type: "file" },
          { id: Symbol(), name: "grub.conf", parent: r, type: "file" },
          { id: Symbol(), name: "wallet.dat", parent: a, type: "file" },
          { id: Symbol(), name: "hostname", parent: r, type: "file" },
          { id: Symbol(), name: "sysctl.conf", parent: r, type: "file" },
          { id: Symbol(), name: ".Xauthority", parent: i, type: "file" },
          { id: Symbol(), name: "syslog", parent: d, type: "file" },
          { id: Symbol(), name: "grep", parent: o, type: "file" },
          { id: Symbol(), name: "umount", parent: o, type: "file" },
          { id: Symbol(), name: "swapfile", parent: n, type: "file" },
        ]);
      f.forEach((E, P) => {
        (E.index = P), (E.created = t());
      });
      const p = ae("none"),
        g = ae(!0),
        m = $e(() =>
          f.slice().sort((E, P) => {
            if (g.value) {
              if (E.type === "directory" && P.type !== "directory") return -1;
              if (E.type !== "directory" && P.type === "directory") return 1;
            }
            return p.value === "none"
              ? E.index - P.index
              : p.value === "name"
                ? E.name.localeCompare(P.name)
                : E.created.getTime() - P.created.getTime();
          }),
        ),
        S = ae(!1);
      return (
        Hs("expandAll", S),
        (E, P) => (
          ue(),
          mt("div", Ec, [
            F("div", Ic, [
              F("div", Ac, [
                F("div", Oc, [
                  P[5] ||
                    (P[5] = F(
                      "label",
                      { for: "sortDropdown", class: "m-2" },
                      "Sort by:",
                      -1,
                    )),
                  tr(
                    F(
                      "select",
                      {
                        id: "sortDropdown",
                        "onUpdate:modelValue":
                          P[0] || (P[0] = (I) => (p.value = I)),
                        class: "m-2 p-1",
                      },
                      P[4] ||
                        (P[4] = [
                          F("option", { value: "none" }, "-", -1),
                          F("option", { value: "name" }, "Name", -1),
                          F("option", { value: "created" }, "Created", -1),
                        ]),
                      512,
                    ),
                    [[ka, p.value]],
                  ),
                ]),
                F("div", Pc, [
                  P[6] ||
                    (P[6] = F(
                      "label",
                      { for: "directoriesFirst", class: "m-2" },
                      "Directories first:",
                      -1,
                    )),
                  tr(
                    F(
                      "input",
                      {
                        id: "directoriesFirst",
                        type: "checkbox",
                        "onUpdate:modelValue":
                          P[1] || (P[1] = (I) => (g.value = I)),
                        class: "m-2 p-1",
                      },
                      null,
                      512,
                    ),
                    [[Na, g.value]],
                  ),
                ]),
              ]),
              F("div", Mc, [
                F(
                  "button",
                  {
                    onClick: P[2] || (P[2] = (I) => (S.value = !0)),
                    class: "rounded bg-slate-200 m-1 p-1 border-black border-2",
                  },
                  " Expand all ",
                ),
                F(
                  "button",
                  {
                    onClick: P[3] || (P[3] = (I) => (S.value = !1)),
                    class: "rounded bg-slate-200 m-1 p-1 border-black border-2",
                  },
                  " Collapse all ",
                ),
              ]),
            ]),
            P[7] ||
              (P[7] = F(
                "div",
                { class: "ml-14 p-1 font-bold flex flex-row w-full" },
                [
                  F("div", null, "Name:"),
                  F("div", { class: "ml-auto mr-16" }, "Created:"),
                ],
                -1,
              )),
            ce(ao, { toc: m.value, directory: B(n) }, null, 8, [
              "toc",
              "directory",
            ]),
          ])
        )
      );
    },
  }),
  Dc = { class: "flex h-screen flex-col" },
  $c = { class: "bg-blue-200 p-1" },
  Rc = { class: "flex flex-row" },
  Fc = ["onClick"],
  Nc = { class: "text-sm italic font-light text-wrap" },
  kc = Xe({
    __name: "App",
    setup(e) {
      const t = Go(Rr),
        n = [
          {
            title: "Color Sorting Game",
            subtitle: "Simple drag&drop list example",
            component: Rr,
          },
          {
            title: "Kanban (Trello-like)",
            subtitle: "Lists within lists",
            component: pc,
          },
          {
            title: "File Manager",
            subtitle: "Recursively stacked lists",
            component: Lc,
          },
        ];
      return (s, r) => (
        ue(),
        mt("div", Dc, [
          F("header", $c, [
            F("nav", Rc, [
              (ue(),
              mt(
                Se,
                null,
                Ti(n, (i) =>
                  F(
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
                      F(
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
                      F("div", Nc, gt(i.subtitle), 1),
                    ],
                    10,
                    Fc,
                  ),
                ),
                64,
              )),
            ]),
          ]),
          (ue(), Oe(Mn(t.value))),
        ])
      );
    },
  });
Wa(kc).mount("#app");
