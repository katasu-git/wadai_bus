<template>

  <div id="timetable1">

    <HeadParts :tTable="timeTable"></Headparts>
    <div class="l-position-t90">
      <MainCircle :tTable="timeTable"></maincircle>
    </div>
    <Selector :route="route" :routeNum="routeNum"></Selector>
    <FAB :routeNum="routeNum"></FAB>

  </div>

</template>

<script>
import HeadParts from "../components/HeadParts.vue";
import MainCircle from "../components/MainCircle.vue";
import Selector from "../components/Selector.vue";
import FAB from "../components/FAB.vue";

export default {
  name: "timetable1",
  data() {
    return {
      route: "大学 → JR和歌山",
      routeNum: 1
    }
  },
  computed: {
    timeTable: function() {
      const nowTime = new Date();
      const dayOfWeek = nowTime.getDay();//6が土曜 0が日曜
      const weekday = [
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [50], //[7][0,1] 7時
          [59],
          [9],
          [1, 47],
          [23, 53],
          [28],
          [23, 53],
          [23, 53],
          [53],//15
          [28],//16
          [25, 53],//17
          [15, 45],//18
          [16, 50],//19
          [16, 49],//20
          [18, 49],//21
          [15],
          [null],
      ];
      const holiday = [ //休日ダイヤ
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [33],
          [18, 48],
          [16, 48],
          [5, 25, 48],
          [5, 45],
          [5, 25, 45],
          [5, 25, 45],
          [5, 25, 45],
          [5, 25, 45],
          [25, 45],
          [5, 25, 45],
          [5, 25, 54],
          [24, 54],
          [24, 54],
          [24],
          [null],
      ];
      if(dayOfWeek === 0 || dayOfWeek === 6) {
        return holiday;
      } else {
        return weekday;
      }
    }
  },
  components: {
    HeadParts: HeadParts,
    MainCircle: MainCircle,
    Selector: Selector,
    FAB: FAB
  }
};

</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  background: #1D1D27;
  height: 5vh;
}
</style>
