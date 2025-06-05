import { mergeProps, useSSRContext, ref, unref, computed, defineComponent, createElementBlock, provide, shallowRef, toRef, getCurrentInstance, onServerPrefetch, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import axios from "axios";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { u as useRouter, b as useNuxtApp, e as asyncDataDefaults, f as createError } from "../server.mjs";
import "hookable";
import "swiper/modules";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const squidexBaseUrl = "https://cloud.squidex.io";
const clientId = process.env.SQUIDEX_CLIENT_ID;
const clientSecret = process.env.SQUIDEX_CLIENT_SECRET;
const appName = process.env.SQUIDEX_APP_NAME;
const squidexApiBase = `${squidexBaseUrl}/api/content/${appName}`;
function constructImageUrl(imgId) {
  return imgId ? `${squidexBaseUrl}/api/assets/${appName}/${imgId}` : null;
}
async function getSquidexToken() {
  try {
    const authUrl = `${squidexBaseUrl}/identity-server/connect/token`;
    const authData = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: "squidex-api"
    });
    const response = await axios.post(authUrl, authData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Failed to fetch Squidex token:", error);
    throw new Error("Authentication failed");
  }
}
function unwrapIvFields(data) {
  return Object.entries(data).reduce((acc, [key, value]) => {
    acc[key] = value.iv !== void 0 ? value.iv : value;
    return acc;
  }, {});
}
async function fetchSquidexData(endpoint) {
  try {
    const token = await getSquidexToken();
    const response = await axios.get(`${squidexApiBase}/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.items.map((item) => {
      item.data = unwrapIvFields(item.data);
      if (Array.isArray(item.data.img) && item.data.img[0]) {
        item.imgUrl = constructImageUrl(item.data.img[0]);
      }
      return item;
    });
  } catch (error) {
    console.error("Failed to fetch Squidex data:", error);
    throw new Error("Data fetching failed");
  }
}
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))}><h1 class="sr-only">Vasyl Tsiutsyk | Frontend Developer | Web Development</h1><div class="hero__container container"><div class="hero__wrap"><div class="hero__row"><div class="hero__col"><h2 class="hero__title"><span data-aos="fade-right">Vasyl Tsiutsyk</span><small data-aos="fade-right" data-aos-delay="800">Frontend Developer</small></h2></div><div class="hero__col"><blockquote class="hero__quote hero-quote"><p class="hero-quote__body">&quot;The supreme art of coding is to subdue bugs without crying.&quot;</p><div class="hero-quote__author">Sun Tzu</div></blockquote></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {
  __name: "StatsCard",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const displayedValue = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "stats-card" }, _attrs))}><div class="stats-card__value"${ssrRenderAttr("aria-label", `Over ${__props.value} ${__props.label}`)}>${ssrInterpolate(unref(displayedValue))}+</div><div class="stats-card__label">${ssrInterpolate(__props.label)}</div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/general/StatsCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Stats",
  __ssrInlineRender: true,
  setup(__props) {
    const statsData = [
      {
        value: 4,
        label: "years of experience"
      },
      {
        value: 100,
        label: "projects completed"
      },
      {
        value: 40,
        label: "satisfied clients"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-stats",
        "aria-label": "My Personal Statistics"
      }, _attrs))}><div class="section-stats__container container"><div class="section-stats__wrap"><ul class="section-stats__row"><!--[-->`);
      ssrRenderList(statsData, (stat, statIndex) => {
        _push(`<li class="section-stats__col">`);
        _push(ssrRenderComponent(_sfc_main$7, {
          value: stat.value,
          label: stat.label
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home/Stats.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const projectLink = computed(() => {
      var _a, _b;
      return (_b = (_a = props.project) == null ? void 0 : _a.data) == null ? void 0 : _b.link;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["project-card", { _clickable: unref(projectLink) }]
      }, _attrs))}><img${ssrRenderAttr("src", __props.project.imgUrl)} alt="" loading="lazy" class="project-card__img"><div class="project-card__overlay"><h3 class="project-card__title">${ssrInterpolate(__props.project.data.title)}</h3><ul class="project-card__techs"><!--[-->`);
      ssrRenderList(__props.project.data.technologies, (technology) => {
        _push(`<li>${ssrInterpolate(technology.technology)}</li>`);
      });
      _push(`<!--]--></ul></div></article>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/general/ProjectCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Cards",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    projects: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-cards" }, _attrs))}><div class="section-cards__container container"><div class="section-cards__wrap">`);
      if (__props.title) {
        _push(`<div class="section-cards__header"><h2 class="section-cards__title">${ssrInterpolate(__props.title)}</h2></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="section-cards__grid"><!--[-->`);
      ssrRenderList(__props.projects, (project) => {
        _push(`<li data-aos="fade-in" class="section-cards__grid-item">`);
        _push(ssrRenderComponent(_sfc_main$5, { project }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home/Cards.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-about" }, _attrs))}><div class="section-about__container container"><div class="section-about__wrap"><div class="section-about__header"><h2 class="section-about__title">About</h2></div><div class="section-about__body"><div class="section-about__row"><div class="section-about__col"><div class="section-about__group about-group"><h3 class="about-group__title">Soft Skills</h3><div class="about-group__description"><ul><li>Responsibility</li><li>Communication Skills</li><li>Quick-learning</li><li>Punctuality</li><li>Good analytical skills</li><li>Creative</li></ul></div></div></div><div class="section-about__col"><div class="section-about__group about-group"><h3 class="about-group__title">Hard Skills</h3><div class="about-group__description"><ul><li>HTML5</li><li>CSS3, SASS/SCSS, BEM, Bootstap 4+, TailwindCSS</li><li>Native JS/ES6+</li><li>Vue 2/3, Nuxt 2/3</li><li>Gulp, Webpack, npm</li><li>Git, GitHub, GitLab</li></ul></div></div></div></div><div class="section-about__row"><div class="section-about__col"><div class="section-about__group about-group"><h3 class="about-group__title">Languages</h3><div class="about-group__description"><ul><li>Ukrainian - Native</li><li>English - Intermediate</li><li>Russian - X</li></ul></div></div></div><div class="section-about__col"><div class="section-about__group about-group"><h3 class="about-group__title">Academic Back</h3><div class="about-group__description"><ul><li><strong>LPML</strong> - sept 2012 - may 2015</li><li><strong>LPNU</strong> - Food Tech (Winemaking) - sept 2015 - dec 2020</li><li><strong>LOGOS IT Academy</strong> - sept 2019 - may 2020</li></ul></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home/About.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AboutSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Cta",
  __ssrInlineRender: true,
  setup(__props) {
    const socLinks = [
      {
        id: "telegram",
        ref: "https://telegram.me/tsiutsyk",
        icon: "fa-telegram"
      },
      {
        id: "github",
        ref: "https://github.com/VasylTsiutsyk",
        icon: "fa-github"
      },
      {
        id: "linkedin",
        ref: "https://www.linkedin.com/in/vasyl-tsiutsyk-85147317b/",
        icon: "fa-linkedin"
      },
      {
        id: "instagram",
        ref: "https://www.instagram.com/v_tsiutsyk/",
        icon: "fa-instagram"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-cta" }, _attrs))}><div class="section-cta__container container"><div class="section-cta__wrap"><div class="section-cta__row"><div class="section-cta__col"><h2 class="section-cta__title"><span data-aos="fade-right">GET IN TOUCH</span><small data-aos="fade-right" data-aos-delay="200">with me</small></h2></div><div class="section-cta__col"><ul class="section-cta__soc soc"><!--[-->`);
      ssrRenderList(socLinks, (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.ref)} target="_blank" rel="noopener noreferrer"><i class="${ssrRenderClass([link.icon, "fab"])}"></i></a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home/Cta.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$1 = {
  __name: "Ticker",
  __ssrInlineRender: true,
  props: {
    words: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-texts" }, _attrs))}><div class="section-texts__container"><div class="section-texts__wrap"><div class="section-texts__slider-wrap">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home/Ticker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !import.meta.prerender || !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("projects", () => fetchSquidexData("projects"))), __temp = await __temp, __restore(), __temp);
    const sortedProjects = computed(() => {
      var _a;
      return ((_a = projects.value) == null ? void 0 : _a.sort((a, b) => {
        const aPriority = typeof a.data.priority === "number" ? a.data.priority : Infinity;
        const bPriority = typeof b.data.priority === "number" ? b.data.priority : Infinity;
        return aPriority - bPriority;
      })) || [];
    });
    const tailwindProjects = computed(() => {
      return projects.value.filter((p) => p.data.type.includes("tailwindcss")) || [];
    });
    const onlineStoresProjects = computed(() => {
      return projects.value.filter((p) => p.data.type.includes("store")) || [];
    });
    const landingsProjects = computed(() => {
      return projects.value.filter((p) => p.data.type.includes("landing")) || [];
    });
    const bettingProjects = computed(() => {
      return projects.value.filter((p) => p.data.type.includes("betting")) || [];
    });
    const usedTechs = [
      "HTML5",
      "CSS3",
      "SCSS",
      "SASS",
      "BEM",
      "Bootstap",
      "TailwindCSS",
      "JS",
      "Vue 2/3",
      "Nuxt 2/3",
      "Swiper",
      "Lenis.js",
      "AOS",
      "Simple Parallax",
      "GSAP",
      "Masonry",
      "CursorDot",
      "FancyBox",
      "Chart.js",
      "Apexcharts",
      "SVG Animations"
    ];
    const softSkills = [
      "Adaptability",
      "Problem-solving",
      "Teamwork",
      "Leadership",
      "Critical thinking",
      "Emotional intelligence",
      "Conflict resolution",
      "Time management",
      "Interpersonal skills",
      "Work ethic",
      "Attention to detail",
      "Collaboration",
      "Empathy",
      "Decision-making",
      "Stress management",
      "Self-motivation",
      "Public speaking",
      "Networking",
      "Open-mindedness",
      "Accountability"
    ];
    const workValues = [
      "Integrity",
      "Innovation",
      "Excellence",
      "Collaboration",
      "Accountability",
      "Customer Focus",
      "Transparency",
      "Sustainability",
      "Inclusivity",
      "Continuous Learning",
      "Work-Life Balance",
      "Diversity",
      "Fairness",
      "Team Success",
      "Leadership by Example",
      "Commitment",
      "Growth Mindset"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      if (unref(sortedProjects) && unref(sortedProjects).length) {
        _push(ssrRenderComponent(_sfc_main$4, {
          title: "Projects",
          projects: unref(sortedProjects)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(AboutSection, null, null, _parent));
      if (unref(tailwindProjects) && unref(tailwindProjects).length) {
        _push(ssrRenderComponent(_sfc_main$4, {
          title: "TailwindCSS",
          projects: unref(tailwindProjects)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (usedTechs && usedTechs.length) {
        _push(ssrRenderComponent(_sfc_main$1, { words: usedTechs }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(onlineStoresProjects) && unref(onlineStoresProjects).length) {
        _push(ssrRenderComponent(_sfc_main$4, {
          title: "Online Stores",
          projects: unref(onlineStoresProjects)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (softSkills && softSkills.length) {
        _push(ssrRenderComponent(_sfc_main$1, { words: softSkills }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(landingsProjects) && unref(landingsProjects).length) {
        _push(ssrRenderComponent(_sfc_main$4, {
          title: "Landings",
          projects: unref(landingsProjects)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (workValues && workValues.length) {
        _push(ssrRenderComponent(_sfc_main$1, { words: workValues }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(bettingProjects) && unref(bettingProjects).length) {
        _push(ssrRenderComponent(_sfc_main$4, {
          title: "Betting",
          projects: unref(bettingProjects)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DKy8ldJS.js.map
