import { route } from "quasar/wrappers";
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { postStore, postPreviewStore } from "src/stores/store";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // I dont need to handle post and post preview loading at the router level. 
  // The components can deal with it. I will leave this here to be an example
  // for myself in some future when I make another website again.
  // Router.beforeEach((to, from, next) => {
  //   if (to.matched.length > 1 && to.matched[0].path == "/posts")
  //   {
  //     // If the parent page is the portfolio page, we need to load a post
  //     postStore.setLoading(true);
  //   }
  //   else 
  //   {
  //     // Otherwise, every other page loads post previews
  //     postPreviewStore.setLoading(true);
  //   }
  //   next();
  // });

  // Router.afterEach(() => {
  //   postStore.setLoading(false);
  //   postPreviewStore.setLoading(false);
  // });

  return Router;
});
