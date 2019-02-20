import Vue from 'vue';
import VueRouter from "vue-router";
import Top from "./views/Top";
import TimeTable0 from "./views/TimeTable0";
import TimeTable1 from "./views/TimeTable1";
import TimeTable2 from "./views/TimeTable2";
import TimeTable3 from "./views/TimeTable3";

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: "top",
    component: Top
  },
  {
    path: "/timetable0",
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
  }
];

export default new VueRouter({
  routes: routes
});
