<template>

  <div id="timetable3">

    <HeadParts :tTable="timeTable"></Headparts>
    <div class="l-position-t90">
      <MainCircle :tTable="timeTable"></maincircle>
    </div>
    <Selector :route="route"></Selector>
    
  </div>

</template>

<script>
import HeadParts from "../components/HeadParts.vue";
import MainCircle from "../components/MainCircle.vue";
import Selector from "../components/Selector.vue";

export default {
  name: "timetable3",
  data() {
    return {
      route: "JR和歌山 → 大学"
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
          [39],
          [0, 28], //[7][0,1] 7時
          [6, 15, 24, 38, 43],//43は和大ライナー
          [8, 30, 44, 57],
          [14, 49],
          [28, 58],
          [29, 58],
          [28, 58],
          [17, 58],
          [28],//15
          [6, 28, 58],//16
          [20, 49],//17
          [19, 51],//18
          [18, 51],//19
          [18, 55],//20
          [18, 56],//21
          [26],
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
          [4, 42],//7
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
          [15, 36, 55],
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
    Selector: Selector
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
