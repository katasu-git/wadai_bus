<template>

  <div id="timetable3">

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
  name: "timetable3",
  data() {
    return {
      route: "JR和歌山 → 大学",
      routeNum: 3
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
          [0, 28], //[7][0,1] 7時
          [6, 15, 24, 38, 43], //43は和大ライナー
          [8, 30, 44, 57],
          [14, 43, 49], //43は和大ライナー
          [28, 58],
          [28, 58],//12
          [28, 58],
          [17, 58],
          [28, 54],//15
          [11, 28, 58],//16
          [20, 34, 52],//17
          [22, 52],//18
          [28, 58],//19
          [28, 58],//20
          [22],//21
          [null],
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
          [42],//7
          [22, 50],
          [23, 50],
          [15, 35, 55],//10
          [15, 35, 55],
          [15, 35, 55],
          [15, 35, 55],//13
          [15, 35, 55],
          [15, 35, 55],
          [15, 35, 56],
          [15, 35, 55],
          [15, 35, 55],
          [22, 53],//19
          [22, 52],
          [22],
          [null],
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
