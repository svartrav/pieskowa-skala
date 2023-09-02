import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ListingPL from "@/views/ListingPL.vue";
import ListingEN from "@/views/ListingEN.vue";
import ListingUA from "@/views/ListingUA.vue";
import ListingDE from "@/views/ListingDE.vue";
import ListingCZ from "@/views/ListingCZ.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/listing-PL", name: "Listing PL", component: ListingPL },
  { path: "/listing-EN", name: "Listing EN", component: ListingEN },
  { path: "/listing-UA", name: "Listing UA", component: ListingUA },
  { path: "/listing-DE", name: "Listing DE", component: ListingDE },
  { path: "/listing-CZ", name: "Listing CZ", component: ListingCZ },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
