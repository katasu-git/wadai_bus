<template>

  <div id="timetable2">

    <HeadParts :tTable="timeTable"></Headparts>
      <MainCircle :tTable="timeTable"></maincircle>
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
  name: "timetable2",
  data() {
    return {
      route: "南海大学前 → 大学",
      routeNum: 2
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
        [19, 45],
        [18, 45], //[7][0,1] 7時
        [5, 18, 31, 49, 55],
        [4, 17, 32, 45, 56],
        [10, 21, 33, 40, 42],
        [18, 48],
        [23, 48],//12
        [18, 48],//13
        [18, 48],//14
        [5, 48],//15
        [23, 43],//16
        [20, 48],//17
        [10, 14, 40],//18
        [11, 45, 57],//19
        [11, 44],
        [13, 44],
        [10],
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
        [15, 46],//7
        [28],//8
        [13, 43],//9
        [11, 43],//10
        [0, 20, 43],//11
        [0, 20, 40],//12
        [0, 20, 40],//13
        [0, 20, 40],
        [0, 20, 40],
        [0, 20, 40],
        [0, 20, 40],//17
        [0, 20, 40],
        [0, 20, 49],
        [19, 49],
        [19, 49],
        [19],
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
