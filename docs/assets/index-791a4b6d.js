(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
function Vn(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function De(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ee(s) ? No(s) : De(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else {
    if (ee(e)) return e;
    if (Y(e)) return e;
  }
}
const $o = /;(?![^(]*\))/g,
  Fo = /:([^]+)/,
  Lo = /\/\*.*?\*\//gs;
function No(e) {
  const t = {};
  return (
    e
      .replace(Lo, "")
      .split($o)
      .forEach((n) => {
        if (n) {
          const s = n.split(Fo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ge(e) {
  let t = "";
  if (ee(e)) t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ge(e[n]);
      s && (t += s + " ");
    }
  else if (Y(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function hr(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !ee(t) && (e.class = Ge(t)), n && (e.style = De(n)), e;
}
const So =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ro = Vn(So);
function gr(e) {
  return !!e || e === "";
}
const Zn = (e) =>
    ee(e)
      ? e
      : e == null
      ? ""
      : N(e) || (Y(e) && (e.toString === br || !H(e.toString)))
      ? JSON.stringify(e, mr, 2)
      : String(e),
  mr = (e, t) =>
    t && t.__v_isRef
      ? mr(e, t.value)
      : yt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : _r(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : Y(t) && !N(t) && !yr(t)
      ? String(t)
      : t,
  G = {},
  bt = [],
  Fe = () => {},
  Bo = () => !1,
  Do = /^on[^a-z]/,
  dn = (e) => Do.test(e),
  Qn = (e) => e.startsWith("onUpdate:"),
  ce = Object.assign,
  Yn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ho = Object.prototype.hasOwnProperty,
  U = (e, t) => Ho.call(e, t),
  N = Array.isArray,
  yt = (e) => pn(e) === "[object Map]",
  _r = (e) => pn(e) === "[object Set]",
  H = (e) => typeof e == "function",
  ee = (e) => typeof e == "string",
  Jn = (e) => typeof e == "symbol",
  Y = (e) => e !== null && typeof e == "object",
  vr = (e) => Y(e) && H(e.then) && H(e.catch),
  br = Object.prototype.toString,
  pn = (e) => br.call(e),
  jo = (e) => pn(e).slice(8, -1),
  yr = (e) => pn(e) === "[object Object]",
  Xn = (e) =>
    ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  en = Vn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  hn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ko = /-(\w)/g,
  He = hn((e) => e.replace(Ko, (t, n) => (n ? n.toUpperCase() : ""))),
  ko = /\B([A-Z])/g,
  Tt = hn((e) => e.replace(ko, "-$1").toLowerCase()),
  gn = hn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  On = hn((e) => (e ? `on${gn(e)}` : "")),
  Dt = (e, t) => !Object.is(e, t),
  Tn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  rn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Uo = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Wo = (e) => {
    const t = ee(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ws;
const zo = () =>
  ws ||
  (ws =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let we;
class qo {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = we),
      !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = we;
      try {
        return (we = this), t();
      } finally {
        we = n;
      }
    }
  }
  on() {
    we = this;
  }
  off() {
    we = this.parent;
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
function Vo(e, t = we) {
  t && t.active && t.effects.push(e);
}
function xr() {
  return we;
}
function Zo(e) {
  we && we.cleanups.push(e);
}
const Gn = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Cr = (e) => (e.w & Je) > 0,
  wr = (e) => (e.n & Je) > 0,
  Qo = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Je;
  },
  Yo = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Cr(r) && !wr(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~Je),
          (r.n &= ~Je);
      }
      t.length = n;
    }
  },
  on = new WeakMap();
let Nt = 0,
  Je = 1;
const Rn = 30;
let Me;
const at = Symbol(""),
  Bn = Symbol("");
class es {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Vo(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Me,
      n = Qe;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Me),
        (Me = this),
        (Qe = !0),
        (Je = 1 << ++Nt),
        Nt <= Rn ? Qo(this) : Es(this),
        this.fn()
      );
    } finally {
      Nt <= Rn && Yo(this),
        (Je = 1 << --Nt),
        (Me = this.parent),
        (Qe = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Me === this
      ? (this.deferStop = !0)
      : this.active &&
        (Es(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Es(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Qe = !0;
const Er = [];
function Pt() {
  Er.push(Qe), (Qe = !1);
}
function At() {
  const e = Er.pop();
  Qe = e === void 0 ? !0 : e;
}
function ye(e, t, n) {
  if (Qe && Me) {
    let s = on.get(e);
    s || on.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Gn())), Ir(r);
  }
}
function Ir(e, t) {
  let n = !1;
  Nt <= Rn ? wr(e) || ((e.n |= Je), (n = !Cr(e))) : (n = !e.has(Me)),
    n && (e.add(Me), Me.deps.push(e));
}
function Ue(e, t, n, s, r, o) {
  const i = on.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && N(e)) {
    const c = Number(s);
    i.forEach((a, d) => {
      (d === "length" || d >= c) && l.push(a);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        N(e)
          ? Xn(n) && l.push(i.get("length"))
          : (l.push(i.get(at)), yt(e) && l.push(i.get(Bn)));
        break;
      case "delete":
        N(e) || (l.push(i.get(at)), yt(e) && l.push(i.get(Bn)));
        break;
      case "set":
        yt(e) && l.push(i.get(at));
        break;
    }
  if (l.length === 1) l[0] && Dn(l[0]);
  else {
    const c = [];
    for (const a of l) a && c.push(...a);
    Dn(Gn(c));
  }
}
function Dn(e, t) {
  const n = N(e) ? e : [...e];
  for (const s of n) s.computed && Is(s);
  for (const s of n) s.computed || Is(s);
}
function Is(e, t) {
  (e !== Me || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function Jo(e, t) {
  var n;
  return (n = on.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const Xo = Vn("__proto__,__v_isRef,__isVue"),
  Or = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Jn)
  ),
  Go = ts(),
  ei = ts(!1, !0),
  ti = ts(!0),
  Os = ni();
function ni() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = j(this);
        for (let o = 0, i = this.length; o < i; o++) ye(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(j)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Pt();
        const s = j(this)[t].apply(this, n);
        return At(), s;
      };
    }),
    e
  );
}
function si(e) {
  const t = j(this);
  return ye(t, "has", e), t.hasOwnProperty(e);
}
function ts(e = !1, t = !1) {
  return function (s, r, o) {
    if (r === "__v_isReactive") return !e;
    if (r === "__v_isReadonly") return e;
    if (r === "__v_isShallow") return t;
    if (r === "__v_raw" && o === (e ? (t ? bi : $r) : t ? Mr : Ar).get(s))
      return s;
    const i = N(s);
    if (!e) {
      if (i && U(Os, r)) return Reflect.get(Os, r, o);
      if (r === "hasOwnProperty") return si;
    }
    const l = Reflect.get(s, r, o);
    return (Jn(r) ? Or.has(r) : Xo(r)) || (e || ye(s, "get", r), t)
      ? l
      : fe(l)
      ? i && Xn(r)
        ? l
        : l.value
      : Y(l)
      ? e
        ? Fr(l)
        : rs(l)
      : l;
  };
}
const ri = Tr(),
  oi = Tr(!0);
function Tr(e = !1) {
  return function (n, s, r, o) {
    let i = n[s];
    if (It(i) && fe(i) && !fe(r)) return !1;
    if (
      !e &&
      (!ln(r) && !It(r) && ((i = j(i)), (r = j(r))), !N(n) && fe(i) && !fe(r))
    )
      return (i.value = r), !0;
    const l = N(n) && Xn(s) ? Number(s) < n.length : U(n, s),
      c = Reflect.set(n, s, r, o);
    return (
      n === j(o) && (l ? Dt(r, i) && Ue(n, "set", s, r) : Ue(n, "add", s, r)), c
    );
  };
}
function ii(e, t) {
  const n = U(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Ue(e, "delete", t, void 0), s;
}
function li(e, t) {
  const n = Reflect.has(e, t);
  return (!Jn(t) || !Or.has(t)) && ye(e, "has", t), n;
}
function fi(e) {
  return ye(e, "iterate", N(e) ? "length" : at), Reflect.ownKeys(e);
}
const Pr = { get: Go, set: ri, deleteProperty: ii, has: li, ownKeys: fi },
  ci = {
    get: ti,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  ai = ce({}, Pr, { get: ei, set: oi }),
  ns = (e) => e,
  mn = (e) => Reflect.getPrototypeOf(e);
function Zt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = j(e),
    o = j(t);
  n || (t !== o && ye(r, "get", t), ye(r, "get", o));
  const { has: i } = mn(r),
    l = s ? ns : n ? is : Ht;
  if (i.call(r, t)) return l(e.get(t));
  if (i.call(r, o)) return l(e.get(o));
  e !== r && e.get(t);
}
function Qt(e, t = !1) {
  const n = this.__v_raw,
    s = j(n),
    r = j(e);
  return (
    t || (e !== r && ye(s, "has", e), ye(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function Yt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ye(j(e), "iterate", at), Reflect.get(e, "size", e)
  );
}
function Ts(e) {
  e = j(e);
  const t = j(this);
  return mn(t).has.call(t, e) || (t.add(e), Ue(t, "add", e, e)), this;
}
function Ps(e, t) {
  t = j(t);
  const n = j(this),
    { has: s, get: r } = mn(n);
  let o = s.call(n, e);
  o || ((e = j(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? Dt(t, i) && Ue(n, "set", e, t) : Ue(n, "add", e, t), this
  );
}
function As(e) {
  const t = j(this),
    { has: n, get: s } = mn(t);
  let r = n.call(t, e);
  r || ((e = j(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ue(t, "delete", e, void 0), o;
}
function Ms() {
  const e = j(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ue(e, "clear", void 0, void 0), n;
}
function Jt(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = j(i),
      c = t ? ns : e ? is : Ht;
    return (
      !e && ye(l, "iterate", at), i.forEach((a, d) => s.call(r, c(a), c(d), o))
    );
  };
}
function Xt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = j(r),
      i = yt(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      a = r[e](...s),
      d = n ? ns : t ? is : Ht;
    return (
      !t && ye(o, "iterate", c ? Bn : at),
      {
        next() {
          const { value: g, done: p } = a.next();
          return p
            ? { value: g, done: p }
            : { value: l ? [d(g[0]), d(g[1])] : d(g), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ze(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function ui() {
  const e = {
      get(o) {
        return Zt(this, o);
      },
      get size() {
        return Yt(this);
      },
      has: Qt,
      add: Ts,
      set: Ps,
      delete: As,
      clear: Ms,
      forEach: Jt(!1, !1),
    },
    t = {
      get(o) {
        return Zt(this, o, !1, !0);
      },
      get size() {
        return Yt(this);
      },
      has: Qt,
      add: Ts,
      set: Ps,
      delete: As,
      clear: Ms,
      forEach: Jt(!1, !0),
    },
    n = {
      get(o) {
        return Zt(this, o, !0);
      },
      get size() {
        return Yt(this, !0);
      },
      has(o) {
        return Qt.call(this, o, !0);
      },
      add: ze("add"),
      set: ze("set"),
      delete: ze("delete"),
      clear: ze("clear"),
      forEach: Jt(!0, !1),
    },
    s = {
      get(o) {
        return Zt(this, o, !0, !0);
      },
      get size() {
        return Yt(this, !0);
      },
      has(o) {
        return Qt.call(this, o, !0);
      },
      add: ze("add"),
      set: ze("set"),
      delete: ze("delete"),
      clear: ze("clear"),
      forEach: Jt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Xt(o, !1, !1)),
        (n[o] = Xt(o, !0, !1)),
        (t[o] = Xt(o, !1, !0)),
        (s[o] = Xt(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [di, pi, hi, gi] = ui();
function ss(e, t) {
  const n = t ? (e ? gi : hi) : e ? pi : di;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(U(n, r) && r in s ? n : s, r, o);
}
const mi = { get: ss(!1, !1) },
  _i = { get: ss(!1, !0) },
  vi = { get: ss(!0, !1) },
  Ar = new WeakMap(),
  Mr = new WeakMap(),
  $r = new WeakMap(),
  bi = new WeakMap();
function yi(e) {
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
function xi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yi(jo(e));
}
function rs(e) {
  return It(e) ? e : os(e, !1, Pr, mi, Ar);
}
function Ci(e) {
  return os(e, !1, ai, _i, Mr);
}
function Fr(e) {
  return os(e, !0, ci, vi, $r);
}
function os(e, t, n, s, r) {
  if (!Y(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = xi(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function xt(e) {
  return It(e) ? xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function It(e) {
  return !!(e && e.__v_isReadonly);
}
function ln(e) {
  return !!(e && e.__v_isShallow);
}
function Lr(e) {
  return xt(e) || It(e);
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Nr(e) {
  return rn(e, "__v_skip", !0), e;
}
const Ht = (e) => (Y(e) ? rs(e) : e),
  is = (e) => (Y(e) ? Fr(e) : e);
function ls(e) {
  Qe && Me && ((e = j(e)), Ir(e.dep || (e.dep = Gn())));
}
function fs(e, t) {
  e = j(e);
  const n = e.dep;
  n && Dn(n);
}
function fe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ie(e) {
  return Sr(e, !1);
}
function wi(e) {
  return Sr(e, !0);
}
function Sr(e, t) {
  return fe(e) ? e : new Ei(e, t);
}
class Ei {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : j(t)),
      (this._value = n ? t : Ht(t));
  }
  get value() {
    return ls(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || ln(t) || It(t);
    (t = n ? t : j(t)),
      Dt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Ht(t)), fs(this));
  }
}
function B(e) {
  return fe(e) ? e.value : e;
}
const Ii = {
  get: (e, t, n) => B(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Rr(e) {
  return xt(e) ? e : new Proxy(e, Ii);
}
class Oi {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: s } = t(
      () => ls(this),
      () => fs(this)
    );
    (this._get = n), (this._set = s);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Ti(e) {
  return new Oi(e);
}
function Pi(e) {
  const t = N(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Mi(e, n);
  return t;
}
class Ai {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Jo(j(this._object), this._key);
  }
}
function Mi(e, t, n) {
  const s = e[t];
  return fe(s) ? s : new Ai(e, t, n);
}
var Br;
class $i {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Br] = !1),
      (this._dirty = !0),
      (this.effect = new es(t, () => {
        this._dirty || ((this._dirty = !0), fs(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = j(this);
    return (
      ls(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Br = "__v_isReadonly";
function Fi(e, t, n = !1) {
  let s, r;
  const o = H(e);
  return (
    o ? ((s = e), (r = Fe)) : ((s = e.get), (r = e.set)),
    new $i(s, r, o || !r, n)
  );
}
function Ye(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    _n(o, t, n);
  }
  return r;
}
function Te(e, t, n, s) {
  if (H(e)) {
    const o = Ye(e, t, n, s);
    return (
      o &&
        vr(o) &&
        o.catch((i) => {
          _n(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(Te(e[o], t, n, s));
  return r;
}
function _n(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let d = 0; d < a.length; d++) if (a[d](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ye(c, null, 10, [e, i, l]);
      return;
    }
  }
  Li(e, n, r, s);
}
function Li(e, t, n, s = !0) {
  console.error(e);
}
let jt = !1,
  Hn = !1;
const pe = [];
let Be = 0;
const Ct = [];
let Ke = null,
  it = 0;
const Dr = Promise.resolve();
let cs = null;
function jn(e) {
  const t = cs || Dr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ni(e) {
  let t = Be + 1,
    n = pe.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    Kt(pe[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function as(e) {
  (!pe.length || !pe.includes(e, jt && e.allowRecurse ? Be + 1 : Be)) &&
    (e.id == null ? pe.push(e) : pe.splice(Ni(e.id), 0, e), Hr());
}
function Hr() {
  !jt && !Hn && ((Hn = !0), (cs = Dr.then(Kr)));
}
function Si(e) {
  const t = pe.indexOf(e);
  t > Be && pe.splice(t, 1);
}
function Ri(e) {
  N(e)
    ? Ct.push(...e)
    : (!Ke || !Ke.includes(e, e.allowRecurse ? it + 1 : it)) && Ct.push(e),
    Hr();
}
function $s(e, t = jt ? Be + 1 : 0) {
  for (; t < pe.length; t++) {
    const n = pe[t];
    n && n.pre && (pe.splice(t, 1), t--, n());
  }
}
function jr(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)];
    if (((Ct.length = 0), Ke)) {
      Ke.push(...t);
      return;
    }
    for (Ke = t, Ke.sort((n, s) => Kt(n) - Kt(s)), it = 0; it < Ke.length; it++)
      Ke[it]();
    (Ke = null), (it = 0);
  }
}
const Kt = (e) => (e.id == null ? 1 / 0 : e.id),
  Bi = (e, t) => {
    const n = Kt(e) - Kt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Kr(e) {
  (Hn = !1), (jt = !0), pe.sort(Bi);
  const t = Fe;
  try {
    for (Be = 0; Be < pe.length; Be++) {
      const n = pe[Be];
      n && n.active !== !1 && Ye(n, null, 14);
    }
  } finally {
    (Be = 0),
      (pe.length = 0),
      jr(),
      (jt = !1),
      (cs = null),
      (pe.length || Ct.length) && Kr();
  }
}
function Di(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || G;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: g, trim: p } = s[d] || G;
    p && (r = n.map((C) => (ee(C) ? C.trim() : C))), g && (r = n.map(Uo));
  }
  let l,
    c = s[(l = On(t))] || s[(l = On(He(t)))];
  !c && o && (c = s[(l = On(Tt(t)))]), c && Te(c, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Te(a, e, 6, r);
  }
}
function kr(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!H(e)) {
    const c = (a) => {
      const d = kr(a, t, !0);
      d && ((l = !0), ce(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !l
    ? (Y(e) && s.set(e, null), null)
    : (N(o) ? o.forEach((c) => (i[c] = null)) : ce(i, o),
      Y(e) && s.set(e, i),
      i);
}
function vn(e, t) {
  return !e || !dn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Tt(t)) || U(e, t));
}
let he = null,
  Ur = null;
function fn(e) {
  const t = he;
  return (he = e), (Ur = (e && e.type.__scopeId) || null), t;
}
function Ee(e, t = he, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Ks(-1);
    const o = fn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      fn(o), s._d && Ks(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Pn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: a,
    render: d,
    renderCache: g,
    data: p,
    setupState: C,
    ctx: P,
    inheritAttrs: O,
  } = e;
  let k, T;
  const W = fn(e);
  try {
    if (n.shapeFlag & 4) {
      const z = r || s;
      (k = Re(d.call(z, z, g, o, C, p, P))), (T = c);
    } else {
      const z = t;
      (k = Re(
        z.length > 1 ? z(o, { attrs: c, slots: l, emit: a }) : z(o, null)
      )),
        (T = t.props ? c : Hi(c));
    }
  } catch (z) {
    (Bt.length = 0), _n(z, e, 1), (k = oe(Pe));
  }
  let F = k;
  if (T && O !== !1) {
    const z = Object.keys(T),
      { shapeFlag: se } = F;
    z.length && se & 7 && (i && z.some(Qn) && (T = ji(T, i)), (F = Xe(F, T)));
  }
  return (
    n.dirs && ((F = Xe(F)), (F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (F.transition = n.transition),
    (k = F),
    fn(W),
    k
  );
}
const Hi = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || dn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  ji = (e, t) => {
    const n = {};
    for (const s in e) (!Qn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Ki(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Fs(s, i, a) : !!i;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        const p = d[g];
        if (i[p] !== s[p] && !vn(a, p)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Fs(s, i, a)
        : !0
      : !!i;
  return !1;
}
function Fs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !vn(n, o)) return !0;
  }
  return !1;
}
function ki({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ui = (e) => e.__isSuspense;
function Wi(e, t) {
  t && t.pendingBranch
    ? N(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ri(e);
}
function zi(e, t) {
  if (ne) {
    let n = ne.provides;
    const s = ne.parent && ne.parent.provides;
    s === n && (n = ne.provides = Object.create(s)), (n[e] = t);
  }
}
function tn(e, t, n = !1) {
  const s = ne || he;
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && H(t) ? t.call(s.proxy) : t;
  }
}
const Gt = {};
function wt(e, t, n) {
  return Wr(e, t, n);
}
function Wr(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = G
) {
  const l = xr() === (ne == null ? void 0 : ne.scope) ? ne : null;
  let c,
    a = !1,
    d = !1;
  if (
    (fe(e)
      ? ((c = () => e.value), (a = ln(e)))
      : xt(e)
      ? ((c = () => e), (s = !0))
      : N(e)
      ? ((d = !0),
        (a = e.some((F) => xt(F) || ln(F))),
        (c = () =>
          e.map((F) => {
            if (fe(F)) return F.value;
            if (xt(F)) return _t(F);
            if (H(F)) return Ye(F, l, 2);
          })))
      : H(e)
      ? t
        ? (c = () => Ye(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return g && g(), Te(e, l, 3, [p]);
          })
      : (c = Fe),
    t && s)
  ) {
    const F = c;
    c = () => _t(F());
  }
  let g,
    p = (F) => {
      g = T.onStop = () => {
        Ye(F, l, 4);
      };
    },
    C;
  if (zt)
    if (
      ((p = Fe),
      t ? n && Te(t, l, 3, [c(), d ? [] : void 0, p]) : c(),
      r === "sync")
    ) {
      const F = Rl();
      C = F.__watcherHandles || (F.__watcherHandles = []);
    } else return Fe;
  let P = d ? new Array(e.length).fill(Gt) : Gt;
  const O = () => {
    if (T.active)
      if (t) {
        const F = T.run();
        (s || a || (d ? F.some((z, se) => Dt(z, P[se])) : Dt(F, P))) &&
          (g && g(),
          Te(t, l, 3, [F, P === Gt ? void 0 : d && P[0] === Gt ? [] : P, p]),
          (P = F));
      } else T.run();
  };
  O.allowRecurse = !!t;
  let k;
  r === "sync"
    ? (k = O)
    : r === "post"
    ? (k = () => be(O, l && l.suspense))
    : ((O.pre = !0), l && (O.id = l.uid), (k = () => as(O)));
  const T = new es(c, k);
  t
    ? n
      ? O()
      : (P = T.run())
    : r === "post"
    ? be(T.run.bind(T), l && l.suspense)
    : T.run();
  const W = () => {
    T.stop(), l && l.scope && Yn(l.scope.effects, T);
  };
  return C && C.push(W), W;
}
function qi(e, t, n) {
  const s = this.proxy,
    r = ee(e) ? (e.includes(".") ? zr(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  H(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = ne;
  Ot(this);
  const l = Wr(r, o.bind(s), n);
  return i ? Ot(i) : ut(), l;
}
function zr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function _t(e, t) {
  if (!Y(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), fe(e))) _t(e.value, t);
  else if (N(e)) for (let n = 0; n < e.length; n++) _t(e[n], t);
  else if (_r(e) || yt(e))
    e.forEach((n) => {
      _t(n, t);
    });
  else if (yr(e)) for (const n in e) _t(e[n], t);
  return e;
}
function qr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    xn(() => {
      e.isMounted = !0;
    }),
    Jr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Oe = [Function, Array],
  Vi = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Oe,
      onEnter: Oe,
      onAfterEnter: Oe,
      onEnterCancelled: Oe,
      onBeforeLeave: Oe,
      onLeave: Oe,
      onAfterLeave: Oe,
      onLeaveCancelled: Oe,
      onBeforeAppear: Oe,
      onAppear: Oe,
      onAfterAppear: Oe,
      onAppearCancelled: Oe,
    },
    setup(e, { slots: t }) {
      const n = mo(),
        s = qr();
      let r;
      return () => {
        const o = t.default && us(t.default(), !0);
        if (!o || !o.length) return;
        let i = o[0];
        if (o.length > 1) {
          for (const O of o)
            if (O.type !== Pe) {
              i = O;
              break;
            }
        }
        const l = j(e),
          { mode: c } = l;
        if (s.isLeaving) return An(i);
        const a = Ls(i);
        if (!a) return An(i);
        const d = kt(a, l, s, n);
        Ut(a, d);
        const g = n.subTree,
          p = g && Ls(g);
        let C = !1;
        const { getTransitionKey: P } = a.type;
        if (P) {
          const O = P();
          r === void 0 ? (r = O) : O !== r && ((r = O), (C = !0));
        }
        if (p && p.type !== Pe && (!lt(a, p) || C)) {
          const O = kt(p, l, s, n);
          if ((Ut(p, O), c === "out-in"))
            return (
              (s.isLeaving = !0),
              (O.afterLeave = () => {
                (s.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              An(i)
            );
          c === "in-out" &&
            a.type !== Pe &&
            (O.delayLeave = (k, T, W) => {
              const F = Zr(s, p);
              (F[String(p.key)] = p),
                (k._leaveCb = () => {
                  T(), (k._leaveCb = void 0), delete d.delayedLeave;
                }),
                (d.delayedLeave = W);
            });
        }
        return i;
      };
    },
  },
  Vr = Vi;
function Zr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function kt(e, t, n, s) {
  const {
      appear: r,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: a,
      onEnterCancelled: d,
      onBeforeLeave: g,
      onLeave: p,
      onAfterLeave: C,
      onLeaveCancelled: P,
      onBeforeAppear: O,
      onAppear: k,
      onAfterAppear: T,
      onAppearCancelled: W,
    } = t,
    F = String(e.key),
    z = Zr(n, e),
    se = (D, J) => {
      D && Te(D, s, 9, J);
    },
    Le = (D, J) => {
      const q = J[1];
      se(D, J),
        N(D) ? D.every((ie) => ie.length <= 1) && q() : D.length <= 1 && q();
    },
    ge = {
      mode: o,
      persisted: i,
      beforeEnter(D) {
        let J = l;
        if (!n.isMounted)
          if (r) J = O || l;
          else return;
        D._leaveCb && D._leaveCb(!0);
        const q = z[F];
        q && lt(e, q) && q.el._leaveCb && q.el._leaveCb(), se(J, [D]);
      },
      enter(D) {
        let J = c,
          q = a,
          ie = d;
        if (!n.isMounted)
          if (r) (J = k || c), (q = T || a), (ie = W || d);
          else return;
        let E = !1;
        const X = (D._enterCb = (me) => {
          E ||
            ((E = !0),
            me ? se(ie, [D]) : se(q, [D]),
            ge.delayedLeave && ge.delayedLeave(),
            (D._enterCb = void 0));
        });
        J ? Le(J, [D, X]) : X();
      },
      leave(D, J) {
        const q = String(e.key);
        if ((D._enterCb && D._enterCb(!0), n.isUnmounting)) return J();
        se(g, [D]);
        let ie = !1;
        const E = (D._leaveCb = (X) => {
          ie ||
            ((ie = !0),
            J(),
            X ? se(P, [D]) : se(C, [D]),
            (D._leaveCb = void 0),
            z[q] === e && delete z[q]);
        });
        (z[q] = e), p ? Le(p, [D, E]) : E();
      },
      clone(D) {
        return kt(D, t, n, s);
      },
    };
  return ge;
}
function An(e) {
  if (bn(e)) return (e = Xe(e)), (e.children = null), e;
}
function Ls(e) {
  return bn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Ut(e, t) {
  e.shapeFlag & 6 && e.component
    ? Ut(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function us(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === ve
      ? (i.patchFlag & 128 && r++, (s = s.concat(us(i.children, t, l))))
      : (t || i.type !== Pe) && s.push(l != null ? Xe(i, { key: l }) : i);
  }
  if (r > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2;
  return s;
}
function pt(e) {
  return H(e) ? { setup: e, name: e.name } : e;
}
const St = (e) => !!e.type.__asyncLoader,
  bn = (e) => e.type.__isKeepAlive;
function Zi(e, t) {
  Qr(e, "a", t);
}
function Qi(e, t) {
  Qr(e, "da", t);
}
function Qr(e, t, n = ne) {
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
  if ((yn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      bn(r.parent.vnode) && Yi(s, t, n, r), (r = r.parent);
  }
}
function Yi(e, t, n, s) {
  const r = yn(t, e, s, !0);
  Xr(() => {
    Yn(s[t], r);
  }, n);
}
function yn(e, t, n = ne, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Pt(), Ot(n);
          const l = Te(t, n, e, i);
          return ut(), At(), l;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const We =
    (e) =>
    (t, n = ne) =>
      (!zt || e === "sp") && yn(e, (...s) => t(...s), n),
  Ji = We("bm"),
  xn = We("m"),
  Xi = We("bu"),
  Yr = We("u"),
  Jr = We("bum"),
  Xr = We("um"),
  Gi = We("sp"),
  el = We("rtg"),
  tl = We("rtc");
function nl(e, t = ne) {
  yn("ec", e, t);
}
function nt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[s];
    c && (Pt(), Te(c, n, 8, [e.el, l, e, t]), At());
  }
}
const Gr = "components",
  eo = Symbol();
function sl(e) {
  return ee(e) ? rl(Gr, e, !1) || e : e || eo;
}
function rl(e, t, n = !0, s = !1) {
  const r = he || ne;
  if (r) {
    const o = r.type;
    if (e === Gr) {
      const l = Fl(o, !1);
      if (l && (l === t || l === He(t) || l === gn(He(t)))) return o;
    }
    const i = Ns(r[e] || o[e], t) || Ns(r.appContext[e], t);
    return !i && s ? o : i;
  }
}
function Ns(e, t) {
  return e && (e[t] || e[He(t)] || e[gn(He(t))]);
}
function to(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (N(e) || ee(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (Y(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const a = i[l];
        r[l] = t(e[a], a, l, o && o[l]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
function vt(e, t, n = {}, s, r) {
  if (he.isCE || (he.parent && St(he.parent) && he.parent.isCE))
    return t !== "default" && (n.name = t), oe("slot", n, s && s());
  let o = e[t];
  o && o._c && (o._d = !1), de();
  const i = o && no(o(n)),
    l = ke(
      ve,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    l
  );
}
function no(e) {
  return e.some((t) =>
    an(t) ? !(t.type === Pe || (t.type === ve && !no(t.children))) : !0
  )
    ? e
    : null;
}
const Kn = (e) => (e ? (_o(e) ? ms(e) || e.proxy : Kn(e.parent)) : null),
  Rt = ce(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Kn(e.parent),
    $root: (e) => Kn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ds(e),
    $forceUpdate: (e) => e.f || (e.f = () => as(e.update)),
    $nextTick: (e) => e.n || (e.n = jn.bind(e.proxy)),
    $watch: (e) => qi.bind(e),
  }),
  Mn = (e, t) => e !== G && !e.__isScriptSetup && U(e, t),
  ol = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: c,
      } = e;
      let a;
      if (t[0] !== "$") {
        const C = i[t];
        if (C !== void 0)
          switch (C) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Mn(s, t)) return (i[t] = 1), s[t];
          if (r !== G && U(r, t)) return (i[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && U(a, t)) return (i[t] = 3), o[t];
          if (n !== G && U(n, t)) return (i[t] = 4), n[t];
          kn && (i[t] = 0);
        }
      }
      const d = Rt[t];
      let g, p;
      if (d) return t === "$attrs" && ye(e, "get", t), d(e);
      if ((g = l.__cssModules) && (g = g[t])) return g;
      if (n !== G && U(n, t)) return (i[t] = 4), n[t];
      if (((p = c.config.globalProperties), U(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return Mn(r, t)
        ? ((r[t] = n), !0)
        : s !== G && U(s, t)
        ? ((s[t] = n), !0)
        : U(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== G && U(e, i)) ||
        Mn(t, i) ||
        ((l = o[0]) && U(l, i)) ||
        U(s, i) ||
        U(Rt, i) ||
        U(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : U(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let kn = !0;
function il(e) {
  const t = ds(e),
    n = e.proxy,
    s = e.ctx;
  (kn = !1), t.beforeCreate && Ss(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: a,
    created: d,
    beforeMount: g,
    mounted: p,
    beforeUpdate: C,
    updated: P,
    activated: O,
    deactivated: k,
    beforeDestroy: T,
    beforeUnmount: W,
    destroyed: F,
    unmounted: z,
    render: se,
    renderTracked: Le,
    renderTriggered: ge,
    errorCaptured: D,
    serverPrefetch: J,
    expose: q,
    inheritAttrs: ie,
    components: E,
    directives: X,
    filters: me,
  } = t;
  if ((a && ll(a, s, null, e.appContext.config.unwrapInjectedRef), i))
    for (const S in i) {
      const L = i[S];
      H(L) && (s[S] = L.bind(n));
    }
  if (r) {
    const S = r.call(n, n);
    Y(S) && (e.data = rs(S));
  }
  if (((kn = !0), o))
    for (const S in o) {
      const L = o[S],
        V = H(L) ? L.bind(n, n) : H(L.get) ? L.get.bind(n, n) : Fe,
        le = !H(L) && H(L.set) ? L.set.bind(n) : Fe,
        ue = ft({ get: V, set: le });
      Object.defineProperty(s, S, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: (xe) => (ue.value = xe),
      });
    }
  if (l) for (const S in l) so(l[S], s, n, S);
  if (c) {
    const S = H(c) ? c.call(n) : c;
    Reflect.ownKeys(S).forEach((L) => {
      zi(L, S[L]);
    });
  }
  d && Ss(d, e, "c");
  function A(S, L) {
    N(L) ? L.forEach((V) => S(V.bind(n))) : L && S(L.bind(n));
  }
  if (
    (A(Ji, g),
    A(xn, p),
    A(Xi, C),
    A(Yr, P),
    A(Zi, O),
    A(Qi, k),
    A(nl, D),
    A(tl, Le),
    A(el, ge),
    A(Jr, W),
    A(Xr, z),
    A(Gi, J),
    N(q))
  )
    if (q.length) {
      const S = e.exposed || (e.exposed = {});
      q.forEach((L) => {
        Object.defineProperty(S, L, {
          get: () => n[L],
          set: (V) => (n[L] = V),
        });
      });
    } else e.exposed || (e.exposed = {});
  se && e.render === Fe && (e.render = se),
    ie != null && (e.inheritAttrs = ie),
    E && (e.components = E),
    X && (e.directives = X);
}
function ll(e, t, n = Fe, s = !1) {
  N(e) && (e = Un(e));
  for (const r in e) {
    const o = e[r];
    let i;
    Y(o)
      ? "default" in o
        ? (i = tn(o.from || r, o.default, !0))
        : (i = tn(o.from || r))
      : (i = tn(o)),
      fe(i) && s
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[r] = i);
  }
}
function Ss(e, t, n) {
  Te(N(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function so(e, t, n, s) {
  const r = s.includes(".") ? zr(n, s) : () => n[s];
  if (ee(e)) {
    const o = t[e];
    H(o) && wt(r, o);
  } else if (H(e)) wt(r, e.bind(n));
  else if (Y(e))
    if (N(e)) e.forEach((o) => so(o, t, n, s));
    else {
      const o = H(e.handler) ? e.handler.bind(n) : t[e.handler];
      H(o) && wt(r, o, e);
    }
}
function ds(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
      ? (c = t)
      : ((c = {}), r.length && r.forEach((a) => cn(c, a, i, !0)), cn(c, t, i)),
    Y(t) && o.set(t, c),
    c
  );
}
function cn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && cn(e, o, n, !0), r && r.forEach((i) => cn(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = fl[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const fl = {
  data: Rs,
  props: ot,
  emits: ot,
  methods: ot,
  computed: ot,
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  components: ot,
  directives: ot,
  watch: al,
  provide: Rs,
  inject: cl,
};
function Rs(e, t) {
  return t
    ? e
      ? function () {
          return ce(
            H(e) ? e.call(this, this) : e,
            H(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function cl(e, t) {
  return ot(Un(e), Un(t));
}
function Un(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ot(e, t) {
  return e ? ce(ce(Object.create(null), e), t) : t;
}
function al(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(Object.create(null), e);
  for (const s in t) n[s] = _e(e[s], t[s]);
  return n;
}
function ul(e, t, n, s = !1) {
  const r = {},
    o = {};
  rn(o, wn, 1), (e.propsDefaults = Object.create(null)), ro(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : Ci(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function dl(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = j(r),
    [c] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        let p = d[g];
        if (vn(e.emitsOptions, p)) continue;
        const C = t[p];
        if (c)
          if (U(o, p)) C !== o[p] && ((o[p] = C), (a = !0));
          else {
            const P = He(p);
            r[P] = Wn(c, l, P, C, e, !1);
          }
        else C !== o[p] && ((o[p] = C), (a = !0));
      }
    }
  } else {
    ro(e, t, r, o) && (a = !0);
    let d;
    for (const g in l)
      (!t || (!U(t, g) && ((d = Tt(g)) === g || !U(t, d)))) &&
        (c
          ? n &&
            (n[g] !== void 0 || n[d] !== void 0) &&
            (r[g] = Wn(c, l, g, void 0, e, !0))
          : delete r[g]);
    if (o !== l) for (const g in o) (!t || !U(t, g)) && (delete o[g], (a = !0));
  }
  a && Ue(e, "set", "$attrs");
}
function ro(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let c in t) {
      if (en(c)) continue;
      const a = t[c];
      let d;
      r && U(r, (d = He(c)))
        ? !o || !o.includes(d)
          ? (n[d] = a)
          : ((l || (l = {}))[d] = a)
        : vn(e.emitsOptions, c) ||
          ((!(c in s) || a !== s[c]) && ((s[c] = a), (i = !0)));
    }
  if (o) {
    const c = j(n),
      a = l || G;
    for (let d = 0; d < o.length; d++) {
      const g = o[d];
      n[g] = Wn(r, c, g, a[g], e, !U(a, g));
    }
  }
  return i;
}
function Wn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = U(i, "default");
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && H(c)) {
        const { propsDefaults: a } = r;
        n in a ? (s = a[n]) : (Ot(r), (s = a[n] = c.call(null, t)), ut());
      } else s = c;
    }
    i[0] &&
      (o && !l ? (s = !1) : i[1] && (s === "" || s === Tt(n)) && (s = !0));
  }
  return s;
}
function oo(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    l = [];
  let c = !1;
  if (!H(e)) {
    const d = (g) => {
      c = !0;
      const [p, C] = oo(g, t, !0);
      ce(i, p), C && l.push(...C);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!o && !c) return Y(e) && s.set(e, bt), bt;
  if (N(o))
    for (let d = 0; d < o.length; d++) {
      const g = He(o[d]);
      Bs(g) && (i[g] = G);
    }
  else if (o)
    for (const d in o) {
      const g = He(d);
      if (Bs(g)) {
        const p = o[d],
          C = (i[g] = N(p) || H(p) ? { type: p } : Object.assign({}, p));
        if (C) {
          const P = js(Boolean, C.type),
            O = js(String, C.type);
          (C[0] = P > -1),
            (C[1] = O < 0 || P < O),
            (P > -1 || U(C, "default")) && l.push(g);
        }
      }
    }
  const a = [i, l];
  return Y(e) && s.set(e, a), a;
}
function Bs(e) {
  return e[0] !== "$";
}
function Ds(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Hs(e, t) {
  return Ds(e) === Ds(t);
}
function js(e, t) {
  return N(t) ? t.findIndex((n) => Hs(n, e)) : H(t) && Hs(t, e) ? 0 : -1;
}
const io = (e) => e[0] === "_" || e === "$stable",
  ps = (e) => (N(e) ? e.map(Re) : [Re(e)]),
  pl = (e, t, n) => {
    if (t._n) return t;
    const s = Ee((...r) => ps(t(...r)), n);
    return (s._c = !1), s;
  },
  lo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (io(r)) continue;
      const o = e[r];
      if (H(o)) t[r] = pl(r, o, s);
      else if (o != null) {
        const i = ps(o);
        t[r] = () => i;
      }
    }
  },
  fo = (e, t) => {
    const n = ps(t);
    e.slots.default = () => n;
  },
  hl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = j(t)), rn(t, "_", n)) : lo(t, (e.slots = {}));
    } else (e.slots = {}), t && fo(e, t);
    rn(e.slots, wn, 1);
  },
  gl = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = G;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (ce(r, t), !n && l === 1 && delete r._)
        : ((o = !t.$stable), lo(t, r)),
        (i = t);
    } else t && (fo(e, t), (i = { default: 1 }));
    if (o) for (const l in r) !io(l) && !(l in i) && delete r[l];
  };
function co() {
  return {
    app: null,
    config: {
      isNativeTag: Bo,
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
let ml = 0;
function _l(e, t) {
  return function (s, r = null) {
    H(s) || (s = Object.assign({}, s)), r != null && !Y(r) && (r = null);
    const o = co(),
      i = new Set();
    let l = !1;
    const c = (o.app = {
      _uid: ml++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Bl,
      get config() {
        return o.config;
      },
      set config(a) {},
      use(a, ...d) {
        return (
          i.has(a) ||
            (a && H(a.install)
              ? (i.add(a), a.install(c, ...d))
              : H(a) && (i.add(a), a(c, ...d))),
          c
        );
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), c;
      },
      component(a, d) {
        return d ? ((o.components[a] = d), c) : o.components[a];
      },
      directive(a, d) {
        return d ? ((o.directives[a] = d), c) : o.directives[a];
      },
      mount(a, d, g) {
        if (!l) {
          const p = oe(s, r);
          return (
            (p.appContext = o),
            d && t ? t(p, a) : e(p, a, g),
            (l = !0),
            (c._container = a),
            (a.__vue_app__ = c),
            ms(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, d) {
        return (o.provides[a] = d), c;
      },
    });
    return c;
  };
}
function zn(e, t, n, s, r = !1) {
  if (N(e)) {
    e.forEach((p, C) => zn(p, t && (N(t) ? t[C] : t), n, s, r));
    return;
  }
  if (St(s) && !r) return;
  const o = s.shapeFlag & 4 ? ms(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: l, r: c } = e,
    a = t && t.r,
    d = l.refs === G ? (l.refs = {}) : l.refs,
    g = l.setupState;
  if (
    (a != null &&
      a !== c &&
      (ee(a)
        ? ((d[a] = null), U(g, a) && (g[a] = null))
        : fe(a) && (a.value = null)),
    H(c))
  )
    Ye(c, l, 12, [i, d]);
  else {
    const p = ee(c),
      C = fe(c);
    if (p || C) {
      const P = () => {
        if (e.f) {
          const O = p ? (U(g, c) ? g[c] : d[c]) : c.value;
          r
            ? N(O) && Yn(O, o)
            : N(O)
            ? O.includes(o) || O.push(o)
            : p
            ? ((d[c] = [o]), U(g, c) && (g[c] = d[c]))
            : ((c.value = [o]), e.k && (d[e.k] = c.value));
        } else
          p
            ? ((d[c] = i), U(g, c) && (g[c] = i))
            : C && ((c.value = i), e.k && (d[e.k] = i));
      };
      i ? ((P.id = -1), be(P, n)) : P();
    }
  }
}
const be = Wi;
function vl(e) {
  return bl(e);
}
function bl(e, t) {
  const n = zo();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: a,
      setElementText: d,
      parentNode: g,
      nextSibling: p,
      setScopeId: C = Fe,
      insertStaticContent: P,
    } = e,
    O = (
      f,
      u,
      h,
      _ = null,
      m = null,
      y = null,
      w = !1,
      b = null,
      x = !!u.dynamicChildren
    ) => {
      if (f === u) return;
      f && !lt(f, u) && ((_ = ht(f)), xe(f, m, y, !0), (f = null)),
        u.patchFlag === -2 && ((x = !1), (u.dynamicChildren = null));
      const { type: v, ref: M, shapeFlag: I } = u;
      switch (v) {
        case Cn:
          k(f, u, h, _);
          break;
        case Pe:
          T(f, u, h, _);
          break;
        case $n:
          f == null && W(u, h, _, w);
          break;
        case ve:
          E(f, u, h, _, m, y, w, b, x);
          break;
        default:
          I & 1
            ? se(f, u, h, _, m, y, w, b, x)
            : I & 6
            ? X(f, u, h, _, m, y, w, b, x)
            : (I & 64 || I & 128) && v.process(f, u, h, _, m, y, w, b, x, gt);
      }
      M != null && m && zn(M, f && f.ref, y, u || f, !u);
    },
    k = (f, u, h, _) => {
      if (f == null) s((u.el = l(u.children)), h, _);
      else {
        const m = (u.el = f.el);
        u.children !== f.children && a(m, u.children);
      }
    },
    T = (f, u, h, _) => {
      f == null ? s((u.el = c(u.children || "")), h, _) : (u.el = f.el);
    },
    W = (f, u, h, _) => {
      [f.el, f.anchor] = P(f.children, u, h, _, f.el, f.anchor);
    },
    F = ({ el: f, anchor: u }, h, _) => {
      let m;
      for (; f && f !== u; ) (m = p(f)), s(f, h, _), (f = m);
      s(u, h, _);
    },
    z = ({ el: f, anchor: u }) => {
      let h;
      for (; f && f !== u; ) (h = p(f)), r(f), (f = h);
      r(u);
    },
    se = (f, u, h, _, m, y, w, b, x) => {
      (w = w || u.type === "svg"),
        f == null ? Le(u, h, _, m, y, w, b, x) : J(f, u, m, y, w, b, x);
    },
    Le = (f, u, h, _, m, y, w, b) => {
      let x, v;
      const { type: M, props: I, shapeFlag: $, transition: R, dirs: K } = f;
      if (
        ((x = f.el = i(f.type, y, I && I.is, I)),
        $ & 8
          ? d(x, f.children)
          : $ & 16 &&
            D(f.children, x, null, _, m, y && M !== "foreignObject", w, b),
        K && nt(f, null, _, "created"),
        ge(x, f, f.scopeId, w, _),
        I)
      ) {
        for (const Z in I)
          Z !== "value" &&
            !en(Z) &&
            o(x, Z, null, I[Z], y, f.children, _, m, ae);
        "value" in I && o(x, "value", null, I.value),
          (v = I.onVnodeBeforeMount) && Se(v, _, f);
      }
      K && nt(f, null, _, "beforeMount");
      const Q = (!m || (m && !m.pendingBranch)) && R && !R.persisted;
      Q && R.beforeEnter(x),
        s(x, u, h),
        ((v = I && I.onVnodeMounted) || Q || K) &&
          be(() => {
            v && Se(v, _, f), Q && R.enter(x), K && nt(f, null, _, "mounted");
          }, m);
    },
    ge = (f, u, h, _, m) => {
      if ((h && C(f, h), _)) for (let y = 0; y < _.length; y++) C(f, _[y]);
      if (m) {
        let y = m.subTree;
        if (u === y) {
          const w = m.vnode;
          ge(f, w, w.scopeId, w.slotScopeIds, m.parent);
        }
      }
    },
    D = (f, u, h, _, m, y, w, b, x = 0) => {
      for (let v = x; v < f.length; v++) {
        const M = (f[v] = b ? Ze(f[v]) : Re(f[v]));
        O(null, M, u, h, _, m, y, w, b);
      }
    },
    J = (f, u, h, _, m, y, w) => {
      const b = (u.el = f.el);
      let { patchFlag: x, dynamicChildren: v, dirs: M } = u;
      x |= f.patchFlag & 16;
      const I = f.props || G,
        $ = u.props || G;
      let R;
      h && st(h, !1),
        (R = $.onVnodeBeforeUpdate) && Se(R, h, u, f),
        M && nt(u, f, h, "beforeUpdate"),
        h && st(h, !0);
      const K = m && u.type !== "foreignObject";
      if (
        (v
          ? q(f.dynamicChildren, v, b, h, _, K, y)
          : w || L(f, u, b, null, h, _, K, y, !1),
        x > 0)
      ) {
        if (x & 16) ie(b, u, I, $, h, _, m);
        else if (
          (x & 2 && I.class !== $.class && o(b, "class", null, $.class, m),
          x & 4 && o(b, "style", I.style, $.style, m),
          x & 8)
        ) {
          const Q = u.dynamicProps;
          for (let Z = 0; Z < Q.length; Z++) {
            const re = Q[Z],
              Ae = I[re],
              mt = $[re];
            (mt !== Ae || re === "value") &&
              o(b, re, Ae, mt, m, f.children, h, _, ae);
          }
        }
        x & 1 && f.children !== u.children && d(b, u.children);
      } else !w && v == null && ie(b, u, I, $, h, _, m);
      ((R = $.onVnodeUpdated) || M) &&
        be(() => {
          R && Se(R, h, u, f), M && nt(u, f, h, "updated");
        }, _);
    },
    q = (f, u, h, _, m, y, w) => {
      for (let b = 0; b < u.length; b++) {
        const x = f[b],
          v = u[b],
          M =
            x.el && (x.type === ve || !lt(x, v) || x.shapeFlag & 70)
              ? g(x.el)
              : h;
        O(x, v, M, null, _, m, y, w, !0);
      }
    },
    ie = (f, u, h, _, m, y, w) => {
      if (h !== _) {
        if (h !== G)
          for (const b in h)
            !en(b) && !(b in _) && o(f, b, h[b], null, w, u.children, m, y, ae);
        for (const b in _) {
          if (en(b)) continue;
          const x = _[b],
            v = h[b];
          x !== v && b !== "value" && o(f, b, v, x, w, u.children, m, y, ae);
        }
        "value" in _ && o(f, "value", h.value, _.value);
      }
    },
    E = (f, u, h, _, m, y, w, b, x) => {
      const v = (u.el = f ? f.el : l("")),
        M = (u.anchor = f ? f.anchor : l(""));
      let { patchFlag: I, dynamicChildren: $, slotScopeIds: R } = u;
      R && (b = b ? b.concat(R) : R),
        f == null
          ? (s(v, h, _), s(M, h, _), D(u.children, h, M, m, y, w, b, x))
          : I > 0 && I & 64 && $ && f.dynamicChildren
          ? (q(f.dynamicChildren, $, h, m, y, w, b),
            (u.key != null || (m && u === m.subTree)) && ao(f, u, !0))
          : L(f, u, h, M, m, y, w, b, x);
    },
    X = (f, u, h, _, m, y, w, b, x) => {
      (u.slotScopeIds = b),
        f == null
          ? u.shapeFlag & 512
            ? m.ctx.activate(u, h, _, w, x)
            : me(u, h, _, m, y, w, x)
          : et(f, u, x);
    },
    me = (f, u, h, _, m, y, w) => {
      const b = (f.component = Tl(f, _, m));
      if ((bn(f) && (b.ctx.renderer = gt), Pl(b), b.asyncDep)) {
        if ((m && m.registerDep(b, A), !f.el)) {
          const x = (b.subTree = oe(Pe));
          T(null, x, u, h);
        }
        return;
      }
      A(b, f, u, h, m, y, w);
    },
    et = (f, u, h) => {
      const _ = (u.component = f.component);
      if (Ki(f, u, h))
        if (_.asyncDep && !_.asyncResolved) {
          S(_, u, h);
          return;
        } else (_.next = u), Si(_.update), _.update();
      else (u.el = f.el), (_.vnode = u);
    },
    A = (f, u, h, _, m, y, w) => {
      const b = () => {
          if (f.isMounted) {
            let { next: M, bu: I, u: $, parent: R, vnode: K } = f,
              Q = M,
              Z;
            st(f, !1),
              M ? ((M.el = K.el), S(f, M, w)) : (M = K),
              I && Tn(I),
              (Z = M.props && M.props.onVnodeBeforeUpdate) && Se(Z, R, M, K),
              st(f, !0);
            const re = Pn(f),
              Ae = f.subTree;
            (f.subTree = re),
              O(Ae, re, g(Ae.el), ht(Ae), f, m, y),
              (M.el = re.el),
              Q === null && ki(f, re.el),
              $ && be($, m),
              (Z = M.props && M.props.onVnodeUpdated) &&
                be(() => Se(Z, R, M, K), m);
          } else {
            let M;
            const { el: I, props: $ } = u,
              { bm: R, m: K, parent: Q } = f,
              Z = St(u);
            if (
              (st(f, !1),
              R && Tn(R),
              !Z && (M = $ && $.onVnodeBeforeMount) && Se(M, Q, u),
              st(f, !0),
              I && In)
            ) {
              const re = () => {
                (f.subTree = Pn(f)), In(I, f.subTree, f, m, null);
              };
              Z
                ? u.type.__asyncLoader().then(() => !f.isUnmounted && re())
                : re();
            } else {
              const re = (f.subTree = Pn(f));
              O(null, re, h, _, f, m, y), (u.el = re.el);
            }
            if ((K && be(K, m), !Z && (M = $ && $.onVnodeMounted))) {
              const re = u;
              be(() => Se(M, Q, re), m);
            }
            (u.shapeFlag & 256 ||
              (Q && St(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
              f.a &&
              be(f.a, m),
              (f.isMounted = !0),
              (u = h = _ = null);
          }
        },
        x = (f.effect = new es(b, () => as(v), f.scope)),
        v = (f.update = () => x.run());
      (v.id = f.uid), st(f, !0), v();
    },
    S = (f, u, h) => {
      u.component = f;
      const _ = f.vnode.props;
      (f.vnode = u),
        (f.next = null),
        dl(f, u.props, _, h),
        gl(f, u.children, h),
        Pt(),
        $s(),
        At();
    },
    L = (f, u, h, _, m, y, w, b, x = !1) => {
      const v = f && f.children,
        M = f ? f.shapeFlag : 0,
        I = u.children,
        { patchFlag: $, shapeFlag: R } = u;
      if ($ > 0) {
        if ($ & 128) {
          le(v, I, h, _, m, y, w, b, x);
          return;
        } else if ($ & 256) {
          V(v, I, h, _, m, y, w, b, x);
          return;
        }
      }
      R & 8
        ? (M & 16 && ae(v, m, y), I !== v && d(h, I))
        : M & 16
        ? R & 16
          ? le(v, I, h, _, m, y, w, b, x)
          : ae(v, m, y, !0)
        : (M & 8 && d(h, ""), R & 16 && D(I, h, _, m, y, w, b, x));
    },
    V = (f, u, h, _, m, y, w, b, x) => {
      (f = f || bt), (u = u || bt);
      const v = f.length,
        M = u.length,
        I = Math.min(v, M);
      let $;
      for ($ = 0; $ < I; $++) {
        const R = (u[$] = x ? Ze(u[$]) : Re(u[$]));
        O(f[$], R, h, null, m, y, w, b, x);
      }
      v > M ? ae(f, m, y, !0, !1, I) : D(u, h, _, m, y, w, b, x, I);
    },
    le = (f, u, h, _, m, y, w, b, x) => {
      let v = 0;
      const M = u.length;
      let I = f.length - 1,
        $ = M - 1;
      for (; v <= I && v <= $; ) {
        const R = f[v],
          K = (u[v] = x ? Ze(u[v]) : Re(u[v]));
        if (lt(R, K)) O(R, K, h, null, m, y, w, b, x);
        else break;
        v++;
      }
      for (; v <= I && v <= $; ) {
        const R = f[I],
          K = (u[$] = x ? Ze(u[$]) : Re(u[$]));
        if (lt(R, K)) O(R, K, h, null, m, y, w, b, x);
        else break;
        I--, $--;
      }
      if (v > I) {
        if (v <= $) {
          const R = $ + 1,
            K = R < M ? u[R].el : _;
          for (; v <= $; )
            O(null, (u[v] = x ? Ze(u[v]) : Re(u[v])), h, K, m, y, w, b, x), v++;
        }
      } else if (v > $) for (; v <= I; ) xe(f[v], m, y, !0), v++;
      else {
        const R = v,
          K = v,
          Q = new Map();
        for (v = K; v <= $; v++) {
          const Ce = (u[v] = x ? Ze(u[v]) : Re(u[v]));
          Ce.key != null && Q.set(Ce.key, v);
        }
        let Z,
          re = 0;
        const Ae = $ - K + 1;
        let mt = !1,
          ys = 0;
        const $t = new Array(Ae);
        for (v = 0; v < Ae; v++) $t[v] = 0;
        for (v = R; v <= I; v++) {
          const Ce = f[v];
          if (re >= Ae) {
            xe(Ce, m, y, !0);
            continue;
          }
          let Ne;
          if (Ce.key != null) Ne = Q.get(Ce.key);
          else
            for (Z = K; Z <= $; Z++)
              if ($t[Z - K] === 0 && lt(Ce, u[Z])) {
                Ne = Z;
                break;
              }
          Ne === void 0
            ? xe(Ce, m, y, !0)
            : (($t[Ne - K] = v + 1),
              Ne >= ys ? (ys = Ne) : (mt = !0),
              O(Ce, u[Ne], h, null, m, y, w, b, x),
              re++);
        }
        const xs = mt ? yl($t) : bt;
        for (Z = xs.length - 1, v = Ae - 1; v >= 0; v--) {
          const Ce = K + v,
            Ne = u[Ce],
            Cs = Ce + 1 < M ? u[Ce + 1].el : _;
          $t[v] === 0
            ? O(null, Ne, h, Cs, m, y, w, b, x)
            : mt && (Z < 0 || v !== xs[Z] ? ue(Ne, h, Cs, 2) : Z--);
        }
      }
    },
    ue = (f, u, h, _, m = null) => {
      const { el: y, type: w, transition: b, children: x, shapeFlag: v } = f;
      if (v & 6) {
        ue(f.component.subTree, u, h, _);
        return;
      }
      if (v & 128) {
        f.suspense.move(u, h, _);
        return;
      }
      if (v & 64) {
        w.move(f, u, h, gt);
        return;
      }
      if (w === ve) {
        s(y, u, h);
        for (let I = 0; I < x.length; I++) ue(x[I], u, h, _);
        s(f.anchor, u, h);
        return;
      }
      if (w === $n) {
        F(f, u, h);
        return;
      }
      if (_ !== 2 && v & 1 && b)
        if (_ === 0) b.beforeEnter(y), s(y, u, h), be(() => b.enter(y), m);
        else {
          const { leave: I, delayLeave: $, afterLeave: R } = b,
            K = () => s(y, u, h),
            Q = () => {
              I(y, () => {
                K(), R && R();
              });
            };
          $ ? $(y, K, Q) : Q();
        }
      else s(y, u, h);
    },
    xe = (f, u, h, _ = !1, m = !1) => {
      const {
        type: y,
        props: w,
        ref: b,
        children: x,
        dynamicChildren: v,
        shapeFlag: M,
        patchFlag: I,
        dirs: $,
      } = f;
      if ((b != null && zn(b, null, h, f, !0), M & 256)) {
        u.ctx.deactivate(f);
        return;
      }
      const R = M & 1 && $,
        K = !St(f);
      let Q;
      if ((K && (Q = w && w.onVnodeBeforeUnmount) && Se(Q, u, f), M & 6))
        Vt(f.component, h, _);
      else {
        if (M & 128) {
          f.suspense.unmount(h, _);
          return;
        }
        R && nt(f, null, u, "beforeUnmount"),
          M & 64
            ? f.type.remove(f, u, h, m, gt, _)
            : v && (y !== ve || (I > 0 && I & 64))
            ? ae(v, u, h, !1, !0)
            : ((y === ve && I & 384) || (!m && M & 16)) && ae(x, u, h),
          _ && Mt(f);
      }
      ((K && (Q = w && w.onVnodeUnmounted)) || R) &&
        be(() => {
          Q && Se(Q, u, f), R && nt(f, null, u, "unmounted");
        }, h);
    },
    Mt = (f) => {
      const { type: u, el: h, anchor: _, transition: m } = f;
      if (u === ve) {
        qt(h, _);
        return;
      }
      if (u === $n) {
        z(f);
        return;
      }
      const y = () => {
        r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
      };
      if (f.shapeFlag & 1 && m && !m.persisted) {
        const { leave: w, delayLeave: b } = m,
          x = () => w(h, y);
        b ? b(f.el, y, x) : x();
      } else y();
    },
    qt = (f, u) => {
      let h;
      for (; f !== u; ) (h = p(f)), r(f), (f = h);
      r(u);
    },
    Vt = (f, u, h) => {
      const { bum: _, scope: m, update: y, subTree: w, um: b } = f;
      _ && Tn(_),
        m.stop(),
        y && ((y.active = !1), xe(w, f, u, h)),
        b && be(b, u),
        be(() => {
          f.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    ae = (f, u, h, _ = !1, m = !1, y = 0) => {
      for (let w = y; w < f.length; w++) xe(f[w], u, h, _, m);
    },
    ht = (f) =>
      f.shapeFlag & 6
        ? ht(f.component.subTree)
        : f.shapeFlag & 128
        ? f.suspense.next()
        : p(f.anchor || f.el),
    tt = (f, u, h) => {
      f == null
        ? u._vnode && xe(u._vnode, null, null, !0)
        : O(u._vnode || null, f, u, null, null, null, h),
        $s(),
        jr(),
        (u._vnode = f);
    },
    gt = {
      p: O,
      um: xe,
      m: ue,
      r: Mt,
      mt: me,
      mc: D,
      pc: L,
      pbc: q,
      n: ht,
      o: e,
    };
  let En, In;
  return (
    t && ([En, In] = t(gt)), { render: tt, hydrate: En, createApp: _l(tt, En) }
  );
}
function st({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ao(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (N(s) && N(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = Ze(r[o])), (l.el = i.el)),
        n || ao(i, l)),
        l.type === Cn && (l.el = i.el);
    }
}
function yl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < a ? (o = l + 1) : (i = l);
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const xl = (e) => e.__isTeleport,
  ve = Symbol(void 0),
  Cn = Symbol(void 0),
  Pe = Symbol(void 0),
  $n = Symbol(void 0),
  Bt = [];
let $e = null;
function de(e = !1) {
  Bt.push(($e = e ? null : []));
}
function Cl() {
  Bt.pop(), ($e = Bt[Bt.length - 1] || null);
}
let Wt = 1;
function Ks(e) {
  Wt += e;
}
function uo(e) {
  return (
    (e.dynamicChildren = Wt > 0 ? $e || bt : null),
    Cl(),
    Wt > 0 && $e && $e.push(e),
    e
  );
}
function dt(e, t, n, s, r, o) {
  return uo(te(e, t, n, s, r, o, !0));
}
function ke(e, t, n, s, r) {
  return uo(oe(e, t, n, s, r, !0));
}
function an(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wn = "__vInternal",
  po = ({ key: e }) => e ?? null,
  nn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ee(e) || fe(e) || H(e)
        ? { i: he, r: e, k: t, f: !!n }
        : e
      : null;
function te(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === ve ? 0 : 1,
  i = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && po(t),
    ref: t && nn(t),
    scopeId: Ur,
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
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: he,
  };
  return (
    l
      ? (gs(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ee(n) ? 8 : 16),
    Wt > 0 &&
      !i &&
      $e &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      $e.push(c),
    c
  );
}
const oe = wl;
function wl(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === eo) && (e = Pe), an(e))) {
    const l = Xe(e, t, !0);
    return (
      n && gs(l, n),
      Wt > 0 &&
        !o &&
        $e &&
        (l.shapeFlag & 6 ? ($e[$e.indexOf(e)] = l) : $e.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Ll(e) && (e = e.__vccOpts), t)) {
    t = hs(t);
    let { class: l, style: c } = t;
    l && !ee(l) && (t.class = Ge(l)),
      Y(c) && (Lr(c) && !N(c) && (c = ce({}, c)), (t.style = De(c)));
  }
  const i = ee(e) ? 1 : Ui(e) ? 128 : xl(e) ? 64 : Y(e) ? 4 : H(e) ? 2 : 0;
  return te(e, t, n, s, r, i, o, !0);
}
function hs(e) {
  return e ? (Lr(e) || wn in e ? ce({}, e) : e) : null;
}
function Xe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    l = t ? go(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && po(l),
    ref:
      t && t.ref ? (n && r ? (N(r) ? r.concat(nn(t)) : [r, nn(t)]) : nn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ve ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function ho(e = " ", t = 0) {
  return oe(Cn, null, e, t);
}
function El(e = "", t = !1) {
  return t ? (de(), ke(Pe, null, e)) : oe(Pe, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean"
    ? oe(Pe)
    : N(e)
    ? oe(ve, null, e.slice())
    : typeof e == "object"
    ? Ze(e)
    : oe(Cn, null, String(e));
}
function Ze(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Xe(e);
}
function gs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (N(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), gs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(wn in t)
        ? (t._ctx = he)
        : r === 3 &&
          he &&
          (he.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    H(t)
      ? ((t = { default: t, _ctx: he }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [ho(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function go(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ge([t.class, s.class]));
      else if (r === "style") t.style = De([t.style, s.style]);
      else if (dn(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(N(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Se(e, t, n, s = null) {
  Te(e, t, 7, [n, s]);
}
const Il = co();
let Ol = 0;
function Tl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Il,
    o = {
      uid: Ol++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new qo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: oo(s, r),
      emitsOptions: kr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: G,
      inheritAttrs: s.inheritAttrs,
      ctx: G,
      data: G,
      props: G,
      attrs: G,
      slots: G,
      refs: G,
      setupState: G,
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
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Di.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ne = null;
const mo = () => ne || he,
  Ot = (e) => {
    (ne = e), e.scope.on();
  },
  ut = () => {
    ne && ne.scope.off(), (ne = null);
  };
function _o(e) {
  return e.vnode.shapeFlag & 4;
}
let zt = !1;
function Pl(e, t = !1) {
  zt = t;
  const { props: n, children: s } = e.vnode,
    r = _o(e);
  ul(e, n, r, t), hl(e, s);
  const o = r ? Al(e, t) : void 0;
  return (zt = !1), o;
}
function Al(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Nr(new Proxy(e.ctx, ol)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? $l(e) : null);
    Ot(e), Pt();
    const o = Ye(s, e, 0, [e.props, r]);
    if ((At(), ut(), vr(o))) {
      if ((o.then(ut, ut), t))
        return o
          .then((i) => {
            ks(e, i, t);
          })
          .catch((i) => {
            _n(i, e, 0);
          });
      e.asyncDep = o;
    } else ks(e, o, t);
  } else vo(e, t);
}
function ks(e, t, n) {
  H(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Y(t) && (e.setupState = Rr(t)),
    vo(e, n);
}
let Us;
function vo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Us && !s.render) {
      const r = s.template || ds(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          a = ce(ce({ isCustomElement: o, delimiters: l }, i), c);
        s.render = Us(r, a);
      }
    }
    e.render = s.render || Fe;
  }
  Ot(e), Pt(), il(e), At(), ut();
}
function Ml(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ye(e, "get", "$attrs"), t[n];
    },
  });
}
function $l(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Ml(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ms(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Rr(Nr(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Rt) return Rt[n](e);
        },
        has(t, n) {
          return n in t || n in Rt;
        },
      }))
    );
}
function Fl(e, t = !0) {
  return H(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Ll(e) {
  return H(e) && "__vccOpts" in e;
}
const ft = (e, t) => Fi(e, t, zt);
function Nl(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? Y(t) && !N(t)
      ? an(t)
        ? oe(e, null, [t])
        : oe(e, t)
      : oe(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && an(n) && (n = [n]),
      oe(e, t, n));
}
const Sl = Symbol(""),
  Rl = () => tn(Sl),
  Bl = "3.2.47",
  Dl = "http://www.w3.org/2000/svg",
  ct = typeof document < "u" ? document : null,
  Ws = ct && ct.createElement("template"),
  Hl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? ct.createElementNS(Dl, e)
        : ct.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => ct.createTextNode(e),
    createComment: (e) => ct.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ct.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        Ws.innerHTML = s ? `<svg>${e}</svg>` : e;
        const l = Ws.content;
        if (s) {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function jl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Kl(e, t, n) {
  const s = e.style,
    r = ee(n);
  if (n && !r) {
    if (t && !ee(t)) for (const o in t) n[o] == null && qn(s, o, "");
    for (const o in n) qn(s, o, n[o]);
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = o);
  }
}
const zs = /\s*!important$/;
function qn(e, t, n) {
  if (N(n)) n.forEach((s) => qn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = kl(e, t);
    zs.test(n)
      ? e.setProperty(Tt(s), n.replace(zs, ""), "important")
      : (e[s] = n);
  }
}
const qs = ["Webkit", "Moz", "ms"],
  Fn = {};
function kl(e, t) {
  const n = Fn[t];
  if (n) return n;
  let s = He(t);
  if (s !== "filter" && s in e) return (Fn[t] = s);
  s = gn(s);
  for (let r = 0; r < qs.length; r++) {
    const o = qs[r] + s;
    if (o in e) return (Fn[t] = o);
  }
  return t;
}
const Vs = "http://www.w3.org/1999/xlink";
function Ul(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Vs, t.slice(6, t.length))
      : e.setAttributeNS(Vs, t, n);
  else {
    const o = Ro(t);
    n == null || (o && !gr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function Wl(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const c = n ?? "";
    (e.value !== c || e.tagName === "OPTION") && (e.value = c),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = gr(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function zl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ql(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Vl(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [l, c] = Zl(t);
    if (s) {
      const a = (o[t] = Jl(s, r));
      zl(e, l, a, c);
    } else i && (ql(e, l, i, c), (o[t] = void 0));
  }
}
const Zs = /(?:Once|Passive|Capture)$/;
function Zl(e) {
  let t;
  if (Zs.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Zs)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Tt(e.slice(2)), t];
}
let Ln = 0;
const Ql = Promise.resolve(),
  Yl = () => Ln || (Ql.then(() => (Ln = 0)), (Ln = Date.now()));
function Jl(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Te(Xl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Yl()), n;
}
function Xl(e, t) {
  if (N(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Qs = /^on[a-z]/,
  Gl = (e, t, n, s, r = !1, o, i, l, c) => {
    t === "class"
      ? jl(e, s, r)
      : t === "style"
      ? Kl(e, n, s)
      : dn(t)
      ? Qn(t) || Vl(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : ef(e, t, s, r)
        )
      ? Wl(e, t, s, o, i, l, c)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Ul(e, t, s, r));
  };
function ef(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Qs.test(t) && H(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Qs.test(t) && ee(n))
    ? !1
    : t in e;
}
const qe = "transition",
  Ft = "animation",
  _s = (e, { slots: t }) => Nl(Vr, yo(e), t);
_s.displayName = "Transition";
const bo = {
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
  tf = (_s.props = ce({}, Vr.props, bo)),
  rt = (e, t = []) => {
    N(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ys = (e) => (e ? (N(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function yo(e) {
  const t = {};
  for (const E in e) E in bo || (t[E] = e[E]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: a = i,
      appearToClass: d = l,
      leaveFromClass: g = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: C = `${n}-leave-to`,
    } = e,
    P = nf(r),
    O = P && P[0],
    k = P && P[1],
    {
      onBeforeEnter: T,
      onEnter: W,
      onEnterCancelled: F,
      onLeave: z,
      onLeaveCancelled: se,
      onBeforeAppear: Le = T,
      onAppear: ge = W,
      onAppearCancelled: D = F,
    } = t,
    J = (E, X, me) => {
      Ve(E, X ? d : l), Ve(E, X ? a : i), me && me();
    },
    q = (E, X) => {
      (E._isLeaving = !1), Ve(E, g), Ve(E, C), Ve(E, p), X && X();
    },
    ie = (E) => (X, me) => {
      const et = E ? ge : W,
        A = () => J(X, E, me);
      rt(et, [X, A]),
        Js(() => {
          Ve(X, E ? c : o), je(X, E ? d : l), Ys(et) || Xs(X, s, O, A);
        });
    };
  return ce(t, {
    onBeforeEnter(E) {
      rt(T, [E]), je(E, o), je(E, i);
    },
    onBeforeAppear(E) {
      rt(Le, [E]), je(E, c), je(E, a);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(E, X) {
      E._isLeaving = !0;
      const me = () => q(E, X);
      je(E, g),
        Co(),
        je(E, p),
        Js(() => {
          E._isLeaving && (Ve(E, g), je(E, C), Ys(z) || Xs(E, s, k, me));
        }),
        rt(z, [E, me]);
    },
    onEnterCancelled(E) {
      J(E, !1), rt(F, [E]);
    },
    onAppearCancelled(E) {
      J(E, !0), rt(D, [E]);
    },
    onLeaveCancelled(E) {
      q(E), rt(se, [E]);
    },
  });
}
function nf(e) {
  if (e == null) return null;
  if (Y(e)) return [Nn(e.enter), Nn(e.leave)];
  {
    const t = Nn(e);
    return [t, t];
  }
}
function Nn(e) {
  return Wo(e);
}
function je(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Ve(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Js(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let sf = 0;
function Xs(e, t, n, s) {
  const r = (e._endId = ++sf),
    o = () => {
      r === e._endId && s();
    };
  if (n) return setTimeout(o, n);
  const { type: i, timeout: l, propCount: c } = xo(e, t);
  if (!i) return s();
  const a = i + "end";
  let d = 0;
  const g = () => {
      e.removeEventListener(a, p), o();
    },
    p = (C) => {
      C.target === e && ++d >= c && g();
    };
  setTimeout(() => {
    d < c && g();
  }, l + 1),
    e.addEventListener(a, p);
}
function xo(e, t) {
  const n = window.getComputedStyle(e),
    s = (P) => (n[P] || "").split(", "),
    r = s(`${qe}Delay`),
    o = s(`${qe}Duration`),
    i = Gs(r, o),
    l = s(`${Ft}Delay`),
    c = s(`${Ft}Duration`),
    a = Gs(l, c);
  let d = null,
    g = 0,
    p = 0;
  t === qe
    ? i > 0 && ((d = qe), (g = i), (p = o.length))
    : t === Ft
    ? a > 0 && ((d = Ft), (g = a), (p = c.length))
    : ((g = Math.max(i, a)),
      (d = g > 0 ? (i > a ? qe : Ft) : null),
      (p = d ? (d === qe ? o.length : c.length) : 0));
  const C =
    d === qe && /\b(transform|all)(,|$)/.test(s(`${qe}Property`).toString());
  return { type: d, timeout: g, propCount: p, hasTransform: C };
}
function Gs(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => er(n) + er(e[s])));
}
function er(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Co() {
  return document.body.offsetHeight;
}
const wo = new WeakMap(),
  Eo = new WeakMap(),
  Io = {
    name: "TransitionGroup",
    props: ce({}, tf, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = mo(),
        s = qr();
      let r, o;
      return (
        Yr(() => {
          if (!r.length) return;
          const i = e.moveClass || `${e.name || "v"}-move`;
          if (!af(r[0].el, n.vnode.el, i)) return;
          r.forEach(lf), r.forEach(ff);
          const l = r.filter(cf);
          Co(),
            l.forEach((c) => {
              const a = c.el,
                d = a.style;
              je(a, i),
                (d.transform = d.webkitTransform = d.transitionDuration = "");
              const g = (a._moveCb = (p) => {
                (p && p.target !== a) ||
                  ((!p || /transform$/.test(p.propertyName)) &&
                    (a.removeEventListener("transitionend", g),
                    (a._moveCb = null),
                    Ve(a, i)));
              });
              a.addEventListener("transitionend", g);
            });
        }),
        () => {
          const i = j(e),
            l = yo(i);
          let c = i.tag || ve;
          (r = o), (o = t.default ? us(t.default()) : []);
          for (let a = 0; a < o.length; a++) {
            const d = o[a];
            d.key != null && Ut(d, kt(d, l, s, n));
          }
          if (r)
            for (let a = 0; a < r.length; a++) {
              const d = r[a];
              Ut(d, kt(d, l, s, n)), wo.set(d, d.el.getBoundingClientRect());
            }
          return oe(c, null, o);
        }
      );
    },
  },
  rf = (e) => delete e.mode;
Io.props;
const of = Io;
function lf(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function ff(e) {
  Eo.set(e, e.el.getBoundingClientRect());
}
function cf(e) {
  const t = wo.get(e),
    n = Eo.get(e),
    s = t.left - n.left,
    r = t.top - n.top;
  if (s || r) {
    const o = e.el.style;
    return (
      (o.transform = o.webkitTransform = `translate(${s}px,${r}px)`),
      (o.transitionDuration = "0s"),
      e
    );
  }
}
function af(e, t, n) {
  const s = e.cloneNode();
  e._vtc &&
    e._vtc.forEach((i) => {
      i.split(/\s+/).forEach((l) => l && s.classList.remove(l));
    }),
    n.split(/\s+/).forEach((i) => i && s.classList.add(i)),
    (s.style.display = "none");
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(s);
  const { hasTransform: o } = xo(s);
  return r.removeChild(s), o;
}
const uf = ["ctrl", "shift", "alt", "meta"],
  df = {
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
    exact: (e, t) => uf.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  tr =
    (e, t) =>
    (n, ...s) => {
      for (let r = 0; r < t.length; r++) {
        const o = df[t[r]];
        if (o && o(n, t)) return;
      }
      return e(n, ...s);
    },
  pf = ce({ patchProp: Gl }, Hl);
let nr;
function hf() {
  return nr || (nr = vl(pf));
}
const gf = (...e) => {
  const t = hf().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = mf(s);
      if (!r) return;
      const o = t._component;
      !H(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function mf(e) {
  return ee(e) ? document.querySelector(e) : e;
}
var sr;
const Oo = typeof window < "u",
  _f = (e) => typeof e == "string",
  vf = () => {};
Oo &&
  (sr = window == null ? void 0 : window.navigator) != null &&
  sr.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function To(e) {
  return typeof e == "function" ? e() : B(e);
}
function bf(e) {
  return e;
}
function yf(e, t, n = !1) {
  return t.reduce(
    (s, r) => (r in e && (!n || e[r] !== void 0) && (s[r] = e[r]), s),
    {}
  );
}
function xf(e) {
  return xr() ? (Zo(e), !0) : !1;
}
var Cf = Object.defineProperty,
  wf = Object.defineProperties,
  Ef = Object.getOwnPropertyDescriptors,
  rr = Object.getOwnPropertySymbols,
  If = Object.prototype.hasOwnProperty,
  Of = Object.prototype.propertyIsEnumerable,
  or = (e, t, n) =>
    t in e
      ? Cf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Tf = (e, t) => {
    for (var n in t || (t = {})) If.call(t, n) && or(e, n, t[n]);
    if (rr) for (var n of rr(t)) Of.call(t, n) && or(e, n, t[n]);
    return e;
  },
  Pf = (e, t) => wf(e, Ef(t));
function Af(e) {
  if (!fe(e)) return Pi(e);
  const t = Array.isArray(e.value) ? new Array(e.value.length) : {};
  for (const n in e.value)
    t[n] = Ti(() => ({
      get() {
        return e.value[n];
      },
      set(s) {
        if (Array.isArray(e.value)) {
          const r = [...e.value];
          (r[n] = s), (e.value = r);
        } else {
          const r = Pf(Tf({}, e.value), { [n]: s });
          Object.setPrototypeOf(r, e.value), (e.value = r);
        }
      },
    }));
  return t;
}
function Mf(e) {
  var t;
  const n = To(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Po = Oo ? window : void 0;
function Et(...e) {
  let t, n, s, r;
  if (
    (_f(e[0]) || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = Po))
      : ([t, n, s, r] = e),
    !t)
  )
    return vf;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [],
    i = () => {
      o.forEach((d) => d()), (o.length = 0);
    },
    l = (d, g, p, C) => (
      d.addEventListener(g, p, C), () => d.removeEventListener(g, p, C)
    ),
    c = wt(
      () => [Mf(t), To(r)],
      ([d, g]) => {
        i(), d && o.push(...n.flatMap((p) => s.map((C) => l(d, p, C, g))));
      },
      { immediate: !0, flush: "post" }
    ),
    a = () => {
      c(), i();
    };
  return xf(a), a;
}
const ir =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  lr = "__vueuse_ssr_handlers__";
ir[lr] = ir[lr] || {};
var $f = Object.defineProperty,
  Ff = Object.defineProperties,
  Lf = Object.getOwnPropertyDescriptors,
  fr = Object.getOwnPropertySymbols,
  Nf = Object.prototype.hasOwnProperty,
  Sf = Object.prototype.propertyIsEnumerable,
  cr = (e, t, n) =>
    t in e
      ? $f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Rf = (e, t) => {
    for (var n in t || (t = {})) Nf.call(t, n) && cr(e, n, t[n]);
    if (fr) for (var n of fr(t)) Sf.call(t, n) && cr(e, n, t[n]);
    return e;
  },
  Bf = (e, t) => Ff(e, Lf(t));
const Ao = {
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
  Df = Object.keys(Ao);
function Mo(e = {}) {
  const { target: t = Po } = e,
    n = Ie(!1),
    s = Ie(e.initialValue || {});
  Object.assign(s.value, Ao, s.value);
  const r = (o) => {
    (n.value = !0),
      !(e.pointerTypes && !e.pointerTypes.includes(o.pointerType)) &&
        (s.value = yf(o, Df, !1));
  };
  return (
    t &&
      (Et(t, "pointerdown", r, { passive: !0 }),
      Et(t, "pointermove", r, { passive: !0 }),
      Et(t, "pointerleave", () => (n.value = !1), { passive: !0 })),
    Bf(Rf({}, Af(s)), { isInside: n })
  );
}
var ar;
(function (e) {
  (e.UP = "UP"),
    (e.RIGHT = "RIGHT"),
    (e.DOWN = "DOWN"),
    (e.LEFT = "LEFT"),
    (e.NONE = "NONE");
})(ar || (ar = {}));
var Hf = Object.defineProperty,
  ur = Object.getOwnPropertySymbols,
  jf = Object.prototype.hasOwnProperty,
  Kf = Object.prototype.propertyIsEnumerable,
  dr = (e, t, n) =>
    t in e
      ? Hf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  kf = (e, t) => {
    for (var n in t || (t = {})) jf.call(t, n) && dr(e, n, t[n]);
    if (ur) for (var n of ur(t)) Kf.call(t, n) && dr(e, n, t[n]);
    return e;
  };
const Uf = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
kf({ linear: bf }, Uf);
const Lt = Ie(void 0),
  vs = () => {
    function e(n) {
      return Lt.value === void 0 ? !1 : n === Lt.value.payload;
    }
    function t(n) {
      return Lt.value === void 0
        ? !1
        : Lt.value.dropTargets.some((s) => s !== void 0 && n.includes(s));
    }
    return { isMoving: e, movingItemCanTarget: t, movingItem: Lt };
  },
  sn = pt({
    __name: "PointerElement",
    emits: ["pointer-enter", "pointer-leave"],
    setup(e, { expose: t, emit: n }) {
      const s = Ie(),
        { x: r, y: o } = Mo(),
        i = ft(() => {
          const c = s.value.getBoundingClientRect();
          return (
            r.value >= c.x &&
            r.value <= c.x + c.width &&
            o.value >= c.y &&
            o.value <= c.y + c.height
          );
        });
      return (
        t({ isInside: i }),
        xn(() => {
          wt(i, (l, c) => {
            l && !c
              ? n("pointer-enter", s.value)
              : c && !l && n("pointer-leave", s.value);
          });
        }),
        (l, c) => (
          de(),
          dt(
            "div",
            { ref_key: "PointerElement", ref: s },
            [vt(l.$slots, "default", hr(hs(l.$attrs)))],
            512
          )
        )
      );
    },
  }),
  Wf = pt({
    __name: "ArrangeableList",
    props: {
      options: null,
      list: null,
      listKey: null,
      identifier: null,
      meta: null,
      group: null,
      targets: null,
    },
    emits: ["liftItem", "dropItem"],
    setup(e, { emit: t }) {
      const n = e,
        s = Symbol(),
        r = ft(() => n.identifier ?? s),
        o = {
          defaultItemClass: "",
          pickedItemClass: "arrangeable-list__invisible",
          listTransition: {
            moveClass: "arrangeable-list__transition-all",
            leaveActiveClass: "arrangeable-list__absolute",
          },
          hoverTransitionClass: "arrangeable-list__transition-all-but-location",
          hoverClass: "",
          homingEffect: !0,
          handle: !1,
        },
        i = ft(() => ({ ...o, ...n.options })),
        l = ft(() =>
          typeof i.value.homingEffect == "boolean" && i.value.homingEffect
            ? "arrangeable-list__homing-effect"
            : i.value.homingEffect || ""
        ),
        c = Mo(),
        { movingItem: a, isMoving: d, movingItemCanTarget: g } = vs(),
        p = Ie(),
        C = Ie();
      let P = 0,
        O = 0,
        k;
      const T = Ie([]),
        W = ft(() => T.value.map(({ payload: A }) => A) || []);
      function F(A) {
        const S = [];
        A.forEach((L) => {
          const V = n.listKey
            ? T.value.find(({ key: le }) => le === L[n.listKey])
            : T.value.find(({ payload: le }) => L === le);
          V
            ? S.push({ ...V, payload: L })
            : S.push({
                key:
                  n.listKey && Object.keys(L).includes(n.listKey)
                    ? L[n.listKey]
                    : Symbol(),
                payload: L,
              });
        }),
          (T.value = S);
      }
      wt(() => n.list, F, { deep: !0 });
      const z = (A) => {
          var S, L;
          if (
            !(
              !a.value ||
              ((L = (S = a.value) == null ? void 0 : S.destination) == null
                ? void 0
                : L.identifier) !== r.value ||
              d(W.value[A])
            )
          ) {
            if (
              T.value.findIndex(({ payload: V }) => {
                var le;
                return V === ((le = a.value) == null ? void 0 : le.payload);
              }) === -1
            )
              T.value.splice(A, 0, {
                payload: a.value.payload,
                key: a.value.key,
              });
            else {
              const V = T.value.findIndex(({ payload: le }) => {
                var ue;
                return le === ((ue = a.value) == null ? void 0 : ue.payload);
              });
              T.value =
                V < A
                  ? [
                      ...T.value.slice(0, V),
                      ...T.value.slice(V + 1, A + 1),
                      T.value[V],
                      ...T.value.slice(A + 1),
                    ]
                  : [
                      ...T.value.slice(0, A),
                      T.value[V],
                      ...T.value.slice(A, V),
                      ...T.value.slice(V + 1),
                    ];
            }
            (a.value.destination.index = A),
              (a.value.destination.listItems = W.value);
          }
        },
        se = () => {
          var A;
          if (a.value !== void 0) {
            const S = W.value.indexOf(a.value.payload);
            S >= 0 && T.value.splice(S, 1),
              ((A = a.value.destination) == null ? void 0 : A.identifier) ===
                r.value && (a.value.destination = a.value.origin);
          }
        },
        Le = () => {
          a.value &&
            (a.value.dropTargets.includes(r.value) ||
              (n.group && a.value.dropTargets.includes(n.group))) &&
            (W.value.length === 0 &&
              (T.value = [{ payload: a.value.payload, key: a.value.key }]),
            (a.value.destination = {
              identifier: r.value,
              type: "list",
              listItems: W.value,
              meta: n.meta,
            }));
        },
        ge = (A, S) => {
          A &&
            S.split(" ").forEach((L) => {
              L && A.classList.add(L);
            });
        },
        D = (A, S) => {
          A &&
            S.split(" ").forEach((L) => {
              L && A.classList.remove(L);
            });
        },
        J = ft(() =>
          typeof i.value.handle == "string" ? i.value.handle : "handle"
        ),
        q = ({ target: A, currentTarget: S }, { key: L, payload: V }) => {
          if (
            i.value.handle &&
            (A == null ? void 0 : A.getAttribute("name")) !== J.value
          )
            return;
          (k = S == null ? void 0 : S.getBoundingClientRect()),
            (P = c.x.value - k.x),
            (O = c.y.value - k.y);
          const le = W.value.indexOf(V),
            ue = {
              identifier: r.value,
              type: "list",
              listItems: W.value,
              index: le,
            };
          (a.value = {
            payload: V,
            hoverElement: p,
            origin: ue,
            destination: { ...ue, meta: n.meta },
            dropTargets: [n.targets ?? n.group ?? r.value].flat(),
            key: L,
          }),
            jn(() => {
              ie(),
                ge(p.value, i.value.hoverTransitionClass || ""),
                ge(p.value, i.value.hoverClass || ""),
                Et(
                  p.value,
                  "transitionend",
                  () => {
                    D(p.value, i.value.hoverTransitionClass || "");
                  },
                  { once: !0 }
                );
            }),
            t("liftItem", j(a.value));
        },
        ie = () => {
          var A;
          E.value =
            ((A = document.getElementById("arrangeable-list-target-element")) ==
            null
              ? void 0
              : A.getBoundingClientRect()) ?? k;
        },
        E = Ie();
      Et(document, "pointerup", () => {
        if (a.value === void 0 || a.value.origin.identifier !== r.value) return;
        let A = !1;
        jn(() => {
          ie(),
            ge(p.value, i.value.hoverTransitionClass || ""),
            l.value && ge(p.value, l.value);
          let S = getComputedStyle(p.value).transitionProperty,
            L = getComputedStyle(p.value).transitionDuration;
          S !== "none" &&
            L.split(", ").some((V) => parseFloat(V) > 0) &&
            (A = !0),
            D(p.value, i.value.hoverClass || ""),
            A
              ? Et(p.value, "transitionend", () => (a.value = void 0), {
                  once: !0,
                })
              : (a.value = void 0);
        }),
          t("dropItem", j(a.value)),
          F(n.list);
      });
      const me = Symbol(),
        et = Symbol();
      return (
        xn(() => {
          F(n.list), (document.body.style.touchAction = "none");
        }),
        (A, S) => (
          de(),
          ke(
            sn,
            {
              onPointerLeave: se,
              onPointerEnter: Le,
              name: "ArrangeableList",
              ref_key: "listElement",
              ref: C,
            },
            {
              default: Ee(() => {
                var L, V, le, ue, xe, Mt, qt, Vt;
                return [
                  oe(
                    of,
                    hr(
                      hs(
                        !B(a) || B(g)([B(r), e.group])
                          ? B(i).listTransition
                          : {}
                      )
                    ),
                    {
                      default: Ee(() => [
                        (de(),
                        dt("div", { key: B(me) }, [
                          vt(
                            A.$slots,
                            "before",
                            { arrangedItems: B(W) },
                            void 0,
                            !0
                          ),
                        ])),
                        (de(!0),
                        dt(
                          ve,
                          null,
                          to(
                            B(T) || [],
                            (ae, ht) => (
                              de(),
                              ke(
                                sn,
                                {
                                  key: ae.key,
                                  id: B(d)(ae.payload)
                                    ? "arrangeable-list-target-element"
                                    : void 0,
                                  class: Ge(
                                    B(d)(ae.payload)
                                      ? B(i).pickedItemClass
                                      : B(i).defaultItemClass
                                  ),
                                  onTouchstart: tr(
                                    (tt) => q(tt, ae),
                                    ["left", "prevent"]
                                  ),
                                  onPointerdown: tr(
                                    (tt) => q(tt, ae),
                                    ["left", "stop"]
                                  ),
                                  onPointerEnter: (tt) => z(ht),
                                },
                                {
                                  default: Ee(() => [
                                    vt(
                                      A.$slots,
                                      "default",
                                      { item: ae.payload, arrangedItems: B(W) },
                                      void 0,
                                      !0
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                [
                                  "id",
                                  "class",
                                  "onTouchstart",
                                  "onPointerdown",
                                  "onPointerEnter",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                        (de(),
                        ke(
                          sn,
                          {
                            key: B(et),
                            onPointerEnter:
                              S[0] || (S[0] = (ae) => z(B(T).length)),
                          },
                          {
                            default: Ee(() => [
                              vt(
                                A.$slots,
                                "after",
                                { arrangedItems: B(W) },
                                void 0,
                                !0
                              ),
                            ]),
                            _: 3,
                          }
                        )),
                      ]),
                      _: 3,
                    },
                    16
                  ),
                  B(a) && B(a).origin.identifier === B(r)
                    ? (de(),
                      ke(
                        _s,
                        {
                          key: 0,
                          tag: "div",
                          ref_key: "hoverElement",
                          ref: p,
                          style: De([
                            {
                              left: B(c).x.value - B(P) + "px",
                              top: B(c).y.value - B(O) + "px",
                              width:
                                ((L = B(k)) == null ? void 0 : L.width) + "px",
                              height:
                                ((V = B(k)) == null ? void 0 : V.height) + "px",
                              "--landingzone-top":
                                ((le = E.value) == null ? void 0 : le.top) +
                                "px",
                              "--landingzone-left":
                                ((ue = E.value) == null ? void 0 : ue.left) +
                                "px",
                              "--landingzone-right":
                                ((xe = E.value) == null ? void 0 : xe.right) +
                                "px",
                              "--landingzone-bottom":
                                ((Mt = E.value) == null ? void 0 : Mt.bottom) +
                                "px",
                              "--landingzone-width":
                                ((qt = E.value) == null ? void 0 : qt.width) +
                                "px",
                              "--landingzone-height":
                                ((Vt = E.value) == null ? void 0 : Vt.height) +
                                "px",
                            },
                            { "z-index": "100000000", position: "absolute" },
                          ]),
                        },
                        {
                          default: Ee(() => [
                            vt(
                              A.$slots,
                              "default",
                              { item: B(a).payload },
                              void 0,
                              !0
                            ),
                          ]),
                          _: 3,
                        },
                        8,
                        ["style"]
                      ))
                    : El("", !0),
                ];
              }),
              _: 3,
            },
            512
          )
        )
      );
    },
  });
const zf = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  bs = zf(Wf, [["__scopeId", "data-v-b463437c"]]),
  qf = pt({
    __name: "DropZone",
    props: {
      options: { default: () => ({ hoverClass: "" }) },
      identifier: { default: Symbol() },
      group: null,
    },
    emits: ["enterZone", "leaveZone"],
    setup(e, { emit: t }) {
      const n = e,
        { movingItem: s } = vs(),
        r = Ie(),
        o = () => {
          var l, c;
          ((c = (l = s.value) == null ? void 0 : l.destination) == null
            ? void 0
            : c.identifier) === n.identifier &&
            ((s.value.destination = void 0), t("leaveZone", j(s.value)));
        },
        i = () => {
          var l;
          s.value &&
            ((l = s.value.destination) == null ? void 0 : l.identifier) !==
              n.identifier &&
            (s.value.dropTargets.includes(n.identifier) ||
              (n.group && s.value.dropTargets.includes(n.group))) &&
            ((s.value.destination = {
              identifier: n.identifier,
              group: n.group,
              type: "dropzone",
            }),
            t("enterZone", j(s.value)));
        };
      return (l, c) => {
        var a, d;
        return (
          de(),
          ke(
            sn,
            go(
              {
                onPointerLeave: o,
                onPointerEnter: i,
                id:
                  ((d = (a = B(s)) == null ? void 0 : a.destination) == null
                    ? void 0
                    : d.identifier) === n.identifier
                    ? "arrangeable-list-target-element"
                    : void 0,
              },
              l.$attrs,
              { ref_key: "dropZone", ref: r }
            ),
            {
              default: Ee(() => {
                var g, p, C, P;
                return [
                  vt(l.$slots, "default", {
                    isHovering:
                      ((p = (g = B(s)) == null ? void 0 : g.destination) == null
                        ? void 0
                        : p.identifier) === n.identifier,
                    class: Ge(
                      ((P = (C = B(s)) == null ? void 0 : C.destination) == null
                        ? void 0
                        : P.identifier) === n.identifier
                        ? e.options.hoverClass
                        : ""
                    ),
                  }),
                ];
              }),
              _: 3,
            },
            16,
            ["id"]
          )
        );
      };
    },
  }),
  Sn = () => {
    const e = Object.keys(un);
    return un[e[Math.floor(Math.random() * e.length)]];
  },
  un = {
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
  Vf = { class: "flex flex-grow flex-col items-center overflow-auto" },
  Zf = te(
    "h1",
    { class: "m-2 text-xl font-extrabold" },
    "Tailwind color sorting game:",
    -1
  ),
  pr = pt({
    __name: "ColorSorting",
    setup(e) {
      const t = Ie(
          Object.keys(un).map((o, i) => ({
            name: o,
            color: un[o][300],
            index: i,
          }))
        ),
        n = ({ destination: o }) => {
          t.value = o == null ? void 0 : o.listItems;
        },
        s = () => {
          t.value.sort(() => Math.random() - 0.5);
        },
        r = () => {
          t.value.sort((o, i) => o.index - i.index);
        };
      return (o, i) => (
        de(),
        dt("main", Vf, [
          Zf,
          te("div", null, [
            te(
              "button",
              {
                onClick: s,
                class:
                  "m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5",
              },
              " shuffle "
            ),
            te(
              "button",
              {
                onClick: r,
                class:
                  "m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5",
              },
              " reset "
            ),
          ]),
          oe(
            B(bs),
            {
              list: t.value,
              "list-key": "color",
              options: {
                hoverClass:
                  "opacity-70 cursor-grabbing scale-150 drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]",
              },
              onDropItem: n,
            },
            {
              default: Ee(({ item: l }) => [
                te(
                  "div",
                  {
                    class:
                      "m-2 flex h-10 w-96 cursor-grab select-none justify-center rounded-lg p-2 hover:drop-shadow-lg",
                    style: De({ backgroundColor: l.color }),
                  },
                  Zn(l.name),
                  5
                ),
              ]),
              _: 1,
            },
            8,
            ["list", "options"]
          ),
        ])
      );
    },
  }),
  Qf = te(
    "div",
    { name: "cardHandle", class: "mr-2 cursor-grab select-none" },
    " ︙ ",
    -1
  ),
  Yf = pt({
    __name: "KanBanList",
    props: {
      list: null,
      items: null,
      group: null,
      trashBin: null,
      arrangeableOptions: null,
    },
    emits: ["add-item", "drop-item"],
    setup(e, { emit: t }) {
      const { movingItem: n } = vs(),
        s = (r, o) => {
          !r.target ||
            !o ||
            (t("add-item", r.target.value, o), (r.target.value = ""));
        };
      return (r, o) => (
        de(),
        ke(
          B(bs),
          {
            list: e.items,
            identifier: e.list.id,
            group: e.group,
            options: { ...e.arrangeableOptions, handle: "cardHandle" },
            onDropItem: o[1] || (o[1] = (i) => t("drop-item", B(n))),
          },
          {
            default: Ee(({ item: i }) => [
              te(
                "div",
                {
                  class:
                    "m-1 flex items-center whitespace-normal break-words rounded border-2 border-black p-2 text-xl",
                  style: De({ backgroundColor: e.list.color[300] }),
                },
                [Qf, ho(" " + Zn(i.description), 1)],
                4
              ),
            ]),
            after: Ee(() => [
              te(
                "div",
                {
                  class:
                    "m-1 flex items-center rounded border-2 border-black p-2 text-xl",
                  style: De({ backgroundColor: e.list.color[200] }),
                },
                [
                  te(
                    "input",
                    {
                      onChange: o[0] || (o[0] = (i) => s(i, e.list.id)),
                      class:
                        "w-full border-b-2 border-gray-400 bg-transparent italic outline-none focus-visible:border-black",
                      placeholder: "New item",
                    },
                    null,
                    32
                  ),
                ],
                4
              ),
            ]),
            _: 1,
          },
          8,
          ["list", "identifier", "group", "options"]
        )
      );
    },
  }),
  Jf = { class: "flex flex-grow flex-row items-start overflow-auto" },
  Xf = { class: "flex border-none p-2 text-2xl font-bold" },
  Gf = te(
    "div",
    { name: "listHandle", class: "mr-2 cursor-grab select-none" },
    " ︙ ",
    -1
  ),
  ec = ["onChange", "value"],
  tc = pt({
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
        o = Ie(
          n.map((p, C) => ({ name: p, id: Symbol(p), color: Sn(), index: C }))
        ),
        i = Ie(
          t.map((p, C) => ({
            description: p,
            id: Symbol(),
            listId: o.value[Math.floor(Math.random() * n.length)].id,
            index: C,
          }))
        ),
        l = (p, C) => {
          i.value.push({
            description: p,
            id: Symbol(),
            listId: C,
            index: Math.max(...i.value.map(({ index: P }) => P)) + 1,
          });
        },
        c = ({ target: p }) => {
          o.value.push({
            name: p.value,
            id: Symbol(p.value),
            color: g.value,
            index: Math.max(...o.value.map(({ index: C }) => C)) + 1,
          }),
            (g.value = Sn()),
            (p.value = "");
        },
        a = (p) => {
          var P, O, k;
          const C = "listId" in p.payload ? i : o;
          p.destination !== void 0 &&
            (p.destination.identifier === r
              ? (C.value = C.value.filter(({ id: T }) => T !== p.payload.id))
              : (((P = p.destination.listItems) == null ? void 0 : P.length) ===
                  0 &&
                  ((p.payload.index = 0),
                  "listId" in p.payload &&
                    (p.payload.listId =
                      (O = p.destination) == null ? void 0 : O.identifier)),
                (k = p.destination.listItems) == null ||
                  k.forEach((T, W) => {
                    var F;
                    (T.index = W),
                      "listId" in T &&
                        (T.listId =
                          (F = p.destination) == null ? void 0 : F.identifier);
                  }),
                C.value.sort((T, W) => T.index - W.index)));
        },
        d = {
          hoverClass:
            "opacity-70 cursor-grabbing drop-shadow-[0_10px_15px_rgba(0,0,0,0.75)] scale-110 -rotate-3",
        },
        g = Ie(Sn());
      return (p, C) => (
        de(),
        dt("main", Jf, [
          oe(
            B(bs),
            {
              list: o.value,
              identifier: "lists",
              class: "flex flex-grow flex-row items-start overflow-auto",
              options: { ...d, handle: "listHandle" },
              onDropItem: a,
              targets: [B(r), "lists"],
            },
            {
              default: Ee(({ item: P }) => [
                te(
                  "div",
                  {
                    class:
                      "float-left m-1 h-fit w-60 rounded-md border-2 border-black",
                    style: De({ backgroundColor: P.color[100] }),
                  },
                  [
                    te("div", Xf, [
                      Gf,
                      te(
                        "input",
                        {
                          class: "w-full bg-transparent",
                          onChange: (O) => {
                            var k;
                            return (P.name =
                              (k = O.target) == null ? void 0 : k.value);
                          },
                          value: P.name,
                        },
                        null,
                        40,
                        ec
                      ),
                    ]),
                    oe(
                      Yf,
                      {
                        list: P,
                        items: i.value.filter(({ listId: O }) => O === P.id),
                        group: B(s),
                        trashBin: B(r),
                        arrangeableOptions: d,
                        onAddItem: l,
                        onDropItem: a,
                      },
                      null,
                      8,
                      ["list", "items", "group", "trashBin"]
                    ),
                  ],
                  4
                ),
              ]),
              after: Ee(() => [
                te(
                  "div",
                  {
                    class:
                      "m-1 flex h-fit w-60 rounded-md border-2 border-black p-2 text-2xl",
                    style: De({ backgroundColor: g.value[100] }),
                  },
                  [
                    te(
                      "input",
                      {
                        class:
                          "w-full border-b-2 border-gray-400 bg-transparent italic outline-none focus-visible:border-black",
                        onChange: c,
                        placeholder: "New list",
                      },
                      null,
                      32
                    ),
                  ],
                  4
                ),
              ]),
              _: 1,
            },
            8,
            ["list", "options", "targets"]
          ),
          oe(
            B(qf),
            { identifier: B(r), group: B(s), class: "inline-block" },
            {
              default: Ee(({ isHovering: P }) => [
                te(
                  "div",
                  {
                    class: Ge([
                      "flex h-40 w-40 items-center justify-center transition-all",
                      P ? "text-8xl" : "text-7xl",
                    ]),
                  },
                  " 🗑 ",
                  2
                ),
              ]),
              _: 1,
            },
            8,
            ["identifier", "group"]
          ),
        ])
      );
    },
  }),
  nc = { class: "flex h-screen flex-col" },
  sc = { class: "bg-blue-200 p-4" },
  rc = { class: "" },
  oc = ["onClick"],
  ic = pt({
    __name: "App",
    setup(e) {
      const t = wi(pr),
        n = [
          { title: "Color Sorting Game", comp: pr },
          { title: "Kanban (Trello-like)", comp: tc },
        ];
      return (s, r) => (
        de(),
        dt("div", nc, [
          te("header", sc, [
            te("nav", rc, [
              (de(),
              dt(
                ve,
                null,
                to(n, (o) =>
                  te(
                    "div",
                    {
                      key: o.title,
                      onClick: (i) => (t.value = o.comp),
                      class: Ge([
                        "m-2 inline cursor-pointer rounded-lg p-4 hover:underline",
                        B(t) === o.comp ? "bg-blue-300 font-extrabold" : "",
                      ]),
                    },
                    Zn(o.title),
                    11,
                    oc
                  )
                ),
                64
              )),
            ]),
          ]),
          (de(), ke(sl(B(t)))),
        ])
      );
    },
  });
gf(ic).mount("#app");
