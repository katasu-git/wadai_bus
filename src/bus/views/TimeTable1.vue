<template>

  <div id="timetable1">

    <HeadParts :tTable="timeTable"></Headparts>
    <MainCircle :tTable="timeTable" :routeNum="routeNum"></maincircle>
    <div class="double_btn_wrapper l-justify-space-around">
      <FAB :routeNum="routeNum"></FAB>
      <Selector :route="route" :routeNum="routeNum"></Selector>
    </div>
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
          [37],
          [7, 22, 43],
          [4, 27, 47, 53],
          [23, 53],
          [28, 53],
          [23, 53],
          [23, 53],
          [10, 53],//15
          [30, 40, 53],//16
          [23, 53],//17
          [15, 20, 49],//18
          [19, 49],//19
          [19, 49],//20
          [19, 49],//21
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
          [5, 25, 45],
          [5, 25, 45],
          [5, 25, 45],
          [5, 25, 45],
          [5, 25, 45],
          [5, 25, 45],
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
