import Vue from 'vue';
import VueRouter from "vue-router";
import TimeTable0 from "./bus/views/TimeTable0";
import TimeTable1 from "./bus/views/TimeTable1";
import TimeTable2 from "./bus/views/TimeTable2";
import TimeTable3 from "./bus/views/TimeTable3";
import Top from "./syllabus/views/Top.vue";
import Result from "./syllabus/views/Result.vue";
import Detail from "./syllabus/views/Detail.vue";
import NewUI from "./bus/views/NewUI"

Vue.use(VueRouter);
const routes = [
  {
    path: "/new",
    name: "newUI",
    component: NewUI
  },
  {
    path: "/",
    name: "timetable0",
    component: TimeTable0
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
  },
  {
    path: "/syllabus/top",
    name: "s_top",
    component: Top
  },
  {
    path: "/syllabus/result",
    name: "s_result",
    /*redirect: {
      name: "s_top"
    },*/
    component: Result
  },
  {
    path: "/syllabus/detail",
    name: "s_detail",
    component: Detail
  },
];

export default new VueRouter({
  routes: routes
});
