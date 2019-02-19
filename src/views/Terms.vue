<template>

  <div id="terms">

    <div class="header l-justify-center l-100 u-fs120">
      <div class="text">WADAI BUS</div>
    </div>
    <HeadParts></Headparts>
    <MainCircle></maincircle>
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
    return {}
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
