import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    // route level code-splitting
    // this generates a separate chunk (counter.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/CounterView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/UsersView.vue"),
  },
  {
    path: "/search-pokemon",
    name: "search-pokemon",
    component: () =>
      import(
        /* webpackChunkName: "search-pokemon" */ "../views/SearchPokemonView.vue"
      ),
  },
  {
    path: "/pokemon/:id",
    name: "pokemon",
    component: () =>
      import(/* webpackChunkName: "pokemon" */ "../views/PokemonView.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    component: () =>
      import(/* webpackChunkName: "todo" */ "../views/TodoVuexView.vue"),
  },
  {
    path: "/customSlots",
    name: "slots",
    component: () =>
      import(/* webpackChunkName: "slots" */ "../views/CustomSlots.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
