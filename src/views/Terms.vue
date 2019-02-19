<template>

  <div id="terms">

    <div class="header l-justify-center l-100 u-fs120">
      <div class="text">WADAI BUS</div>
    </div>
    <HeadParts :tTable="timeTable"></Headparts>
    <MainCircle :tTable="timeTable"></maincircle>
    <Selector></Selector>

  </div>
</template>

<script>
import HeadParts from "../components/HeadParts.vue";
import MainCircle from "../components/MainCircle.vue";
import Selector from "../components/Selector.vue";

export default {
  name: "terms",
  data() {
    return {
      timeTable: [
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [24, 52], //[7][0,1] 7時
          [30, 39],
          [2, 32, 54],
          [null],
          [13, 52],
          [17, 24, 28, 53],
          [22, 52],
          [22, 48],
          [22, 52],//15
          [30, 52],//16
          [22, 44, 46],//17
          [7, 34, 55, 59],//18
          [5],//19
          [18, 25, 41],//20
          [19,52,58],//21
          [51],
          [null],
      ]
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
