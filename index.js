// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import FullCalendar from "vue-full-calendar";

import "fullcalendar-scheduler";
import "fullcalendar/dist/fullcalendar.min.css";
import "fullcalendar-scheduler/dist/scheduler.min.css";

Vue.use(FullCalendar);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
