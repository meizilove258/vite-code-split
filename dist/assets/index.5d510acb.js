import {
  o as p,
  c as h,
  r as _,
  a as y,
  b as g,
  d as v,
} from "./vendor.df285358.js";
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) c(t);
  new MutationObserver((t) => {
    for (const e of t)
      if (e.type === "childList")
        for (const n of e.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && c(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(t) {
    const e = {};
    return (
      t.integrity && (e.integrity = t.integrity),
      t.referrerpolicy && (e.referrerPolicy = t.referrerpolicy),
      t.crossorigin === "use-credentials"
        ? (e.credentials = "include")
        : t.crossorigin === "anonymous"
        ? (e.credentials = "omit")
        : (e.credentials = "same-origin"),
      e
    );
  }
  function c(t) {
    if (t.ep) return;
    t.ep = !0;
    const e = r(t);
    fetch(t.href, e);
  }
})();
const E = (s, o) => {
    const r = s.__vccOpts || s;
    for (const [c, t] of o) r[c] = t;
    return r;
  },
  L = {};
function k(s, o) {
  const r = _("RouterView");
  return p(), h(r);
}
const R = E(L, [["render", k]]),
  b = "modulepreload",
  O = function (s) {
    return "/" + s;
  },
  u = {},
  f = function (o, r, c) {
    if (!r || r.length === 0) return o();
    const t = document.getElementsByTagName("link");
    return Promise.all(
      r.map((e) => {
        if (((e = O(e)), e in u)) return;
        u[e] = !0;
        const n = e.endsWith(".css"),
          m = n ? '[rel="stylesheet"]' : "";
        if (!!c)
          for (let l = t.length - 1; l >= 0; l--) {
            const a = t[l];
            if (a.href === e && (!n || a.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${e}"]${m}`)) return;
        const i = document.createElement("link");
        if (
          ((i.rel = n ? "stylesheet" : b),
          n || ((i.as = "script"), (i.crossOrigin = "")),
          (i.href = e),
          document.head.appendChild(i),
          n)
        )
          return new Promise((l, a) => {
            i.addEventListener("load", l),
              i.addEventListener("error", () =>
                a(new Error(`Unable to preload CSS for ${e}`))
              );
          });
      })
    ).then(() => o());
  },
  P = y({
    history: g(),
    routes: [
      { path: "/", redirect: "/about" },
      {
        path: "/about",
        name: "about",
        component: () =>
          f(
            () => import("./about.26919907.js"),
            ["assets/about.26919907.js", "assets/vendor.df285358.js"]
          ),
      },
      {
        path: "/help",
        name: "help",
        component: () =>
          f(
            () => import("./help.c9ed23db.js"),
            ["assets/help.c9ed23db.js", "assets/vendor.df285358.js"]
          ),
      },
    ],
  }),
  d = v(R);
d.use(P);
d.mount("#app");
export { E as _, f as a };
