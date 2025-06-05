import { ref, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "hookable";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$2 = {
  __name: "Preloader",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(true);
    const messages = [
      "Frontend Developer",
      "4+ years",
      "HTML5/CSS/SCSS/SASS",
      "Tailwind & Bootstrap",
      "JS/ES6+",
      "Vue 2/3, Nuxt 2/3",
      "CSS/JS Animations",
      "Lenis & GSAP Effects",
      "Swiper & Fancybox",
      "Creativity & Precision",
      "Problem Solver"
    ];
    const currentText = ref(messages[0]);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isVisible)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "preloader" }, _attrs))}><h2 class="preloader__text">${ssrInterpolate(unref(currentText))}</h2></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/general/Preloader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="footer__container container"><div class="footer__wrap"><div class="footer__row"><small class="footer__copyright">Handcrafted by me ©2024</small></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/partials/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BAycjLcc.js.map
