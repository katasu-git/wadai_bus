import Vue from 'vue';
import VueRouter from "vue-router";
//import Top from "./views/Top";
import TimeTable0 from "./views/TimeTable0";
import TimeTable1 from "./views/TimeTable1";
import TimeTable2 from "./views/TimeTable2";
import TimeTable3 from "./views/TimeTable3";
import Top from "./s_views/Top.vue";
import Result from "./s_views/Result.vue";

Vue.use(VueRouter);
const routes = [
  /* {
    path: '/',
    name: "top",
    component: Top
  }, */
  {
    path: "/",
    name: "timetable0",
    component: TimeTable0
  },
  {
    path: "/timetable1",
    name: "timetable1",
    component: TimeTable1
  },
  {
    path: "/timetable2",
    name: "timetable2",
    component: TimeTable2
  },
  {
    path: "/timetable3",
    name: "timetable3",
    component: TimeTable3
  },
  {
    path: "/s_top",
    name: "s_top",
    component: Top
  },
  {
    path: "/s_result",
    name: "s_result",
    component: Result
  },
];

export default new VueRouter({
  routes: routes
});
