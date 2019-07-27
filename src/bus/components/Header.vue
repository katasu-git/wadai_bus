<template>
  <div id="header">
      <header class="width100-16">
        <div class="smallContainer posTopLeft">
          <img src="../../assets/wadai.png" />
          <span class="text mt4">WADAI BUS</span>
        </div>
        <div class="smallContainer posTopRight">
          <img class="mt4" src="../../assets/jr.png" />
          <img src="../../assets/nankai.png" />
        </div>
      </header>
  </div>
</template>

<script>

export default {
    name: "header",
    data() {
        return {
        }
    },
};

</script>

<style lang="scss" scoped>

#header {
    width: calc(100% - 16px);
}

header {
    position: relative;
    width: 100%;
    height: 52px;
    img {
      width: 40px;
    }
}

.subHeader {
    position: relative;
    width: 100%;
    height: 26px;

    .minText {
        font-size: 12px;
        opacity: .54;
    }

    .timer {
        font-size: 40px;
        font-weight: 600;
    }
}

.smallContainer {
  display: flex;
  align-items: flex-start;
}


.mt-4 {
    margin-top: -4px;
}

.mt4 {
    margin-top: 4px;
}

.mt8 {
    margin-top: 8px;
}

.mt16 {
    margin-top: 16px;
}

.mt32 {
    margin-top: 32px;
}

.mt48 {
    margin-top: 48px;
}

.posTopLeft {
    position: absolute;
    top: 0;
    left: 0;
}

.posTopRight {
    position: absolute;
    top: 0;
    right: 0;
}

</style>
