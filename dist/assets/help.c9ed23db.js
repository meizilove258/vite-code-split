import { a } from "./index.5d510acb.js";
import { o as n, e as _, f as t, F as r } from "./vendor.df285358.js";
const l = t("div", null, " help 2 ", -1),
  u = {
    __name: "help",
    setup(c) {
      function o() {
        a(() => import("./foo.3614bac2.js"), []).then(({ default: e }) => e);
      }
      return (e, s) => (
        n(), _(r, null, [t("button", { onClick: o }, "\u6309\u94AE"), l], 64)
      );
    },
  };
export { u as default };
