import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Todo from "./pages/Todo.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/todo", component: Todo },
  { path: "/", component: Home },
  { path: "/about", component: About },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
