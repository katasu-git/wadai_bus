<template>
  <div id="footer">
      <div class="middleContainer mt48">
        <div class="smallContainer">
          <div class="text">前のバス</div>
          <div class="text bkNone mt4">9:32</div>
        </div>
        <div class="smallContainer">
          <div class="text">次のバス</div>
          <div class="text bkWhite mt4">9:52</div>
        </div>
        <div class="smallContainer" v-for="hour in hourArray">
          <div class="text">さらに次</div>
          <div class="text bkNone mt4">{{ hour }}</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    name: "footer",
    props: {
        leftTimeToProg: Number
    },
    data() {
        return {
            hourArray: ['10:12', '12:54', '13:23', '13:52', '14:56', '15:34'],
        }
    },
};

</script>

<style lang="scss" scoped>

#footer {
    width: 100%;
}

.middleContainer {
    width: 100%;
    height: 104px;
    background-color: #374149;
    border-radius: 43px 0 0 0;

    display: flex;
    overflow-x: scroll;

    .smallContainer {
        margin: 0 16px;
        min-width: 20%;
        color: #FAFAFA;
        font-size: 12px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

.bkWhite, .bkNone {
    width: 100%;
    height: 32px;
    background-color: #FAFAFA;
    color: #374149;
    border-radius: 43px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.bkNone {
    background-color: rgba(0, 0, 0, 0);
    color: #FAFAFA;
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
