import Vue from 'vue';
import VueRouter from "vue-router";
import Top from "./views/Top";
import Terms from "./views/Terms";
import TimeTable1 from "./views/TimeTable1";

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: "top",
    component: Top
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms
  },
  {
    path: "/timetable1",
    name: "timetable1",
    component: TimeTable1
  }
];

export default new VueRouter({
  routes: routes
});
