<template>

  <div id="terms">

    <div class="header l-justify-center l-100 u-fs120">
      <div class="text">WADAI BUS</div>
    </div>
    <HeadParts :tTable="timeTable"></Headparts>
    <MainCircle :tTable="timeTable"></maincircle>
    <Selector></Selector>

    <div class="l-justify-center d-087 u-fs120 u-mt3">
      <div class="text">大学　→　南海 大学前</div>
    </div>

  </div>
</template>

<script>
import HeadParts from "../components/HeadParts.vue";
import MainCircle from "../components/MainCircle.vue";
import Selector from "../components/Selector.vue";

export default {
  name: "terms",
  data() {
    return {}
  },
  computed: {
    timeTable: function() {
      const nowTime = new Date();
      const dayOfWeek = nowTime.getDay();//6が土曜 0が日曜
      const weekday = [ //平日ダイヤ
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [24, 52], //7時
          [30, 39],
          [2, 32, 54],
          [8, 28, 38],
          [13, 52],
          [29, 53],
          [22, 52],
          [22, 48],
          [22, 52],
          [25, 30, 52],
          [22, 48],
          [8, 17, 47],
          [19, 41, 49],
          [18, 41],
          [19, 49],
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
          [null],
          [5, 53],
          [13, 46],
          [13, 38, 58],
          [18, 38, 58],
          [18, 46, 58],
          [18, 38, 58],
          [18, 38, 58],
          [18, 38, 58],
          [18, 38, 58],
          [19, 38, 58],
          [18, 38, 59],
          [18, 45],
          [16, 45],
          [15, 45],
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
  background: #1D1D27;
  height: 5vh;
}
</style>
