<template>
  <div id="timetable0">
    <div class="largeContainer">
      <header>
        <div class="smallContainer posTopLeft">
          <img src="../../assets/wadai.png" />
          <span class="text mt4">WADAI BUS</span>
        </div>
        <div class="smallContainer posTopRight">
          <img class="mt4" src="../../assets/jr.png" />
          <img src="../../assets/nankai.png" />
        </div>
      </header>
      <div class="subHeader mt8">
        <div class="text minText posTopLeft">次のバスが来るで</div>
        <div class="text minText posTopRight">路線切替</div>
      </div>
      <div class="subHeader">
        <div class="text timer posTopLeft">
          <CountDown :timeTable="timeTable"></CountDown>
        </div>
      </div>
      <img class="mainImg mt16" src="../../assets/clip-waiting.png" />
      <div class="progressBarBottom mt8">
        <div class="progressBarTop"></div>
      </div>
      <button class="mt48">大学から帰る<div class="triangle">▼</div></button>
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
  </div>
</template>

<script>
import CountDown from "../components/CountDown"

export default {
  name: "timetable0",
  data() {
    return {
      hourArray: ['10:12', '12:54', '13:23', '13:52', '14:56', '15:34'],
    }
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
          [30, 39, 55],
          [2, 32, 54],
          [8, 28, 38],
          [13, 52],
          [29, 52],//12
          [22, 52],
          [22, 48],
          [22, 52],
          [25, 35, 52],//16
          [22, 48],
          [9, 20, 50],
          [20, 51],
          [21, 51],
          [21, 45],
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
    CountDown: CountDown,
  }
};

</script>

<style lang="scss" scoped>

#timetable0 {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
    color: #374149;

    display: flex;
    align-items: center;
    justify-content: center;
}

.largeContainer {
    width: calc(100% - 16px);
    max-width: 500px;
    height: calc(100% - 16px);
    background-color: #FAFAFA;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.smallContainer {
  display: flex;
  align-items: flex-start;
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

.mainImg {
  width: 100%;
}

.progressBarTop,  .progressBarBottom{
    width: 80%;
    height: 4px;
    background-color: #45B5AA;
    border-radius: 50px;
}

.progressBarBottom {
    width: 80%;
    background-color: #949494;
}

button {
    position: relative;
    width: 80%;
    height: 52px;
    border-radius: 43px;
    background-color: #45B5AA;
    color: #FAFAFA;
    font-weight: 600;
    outline: none;
    transition: 200ms;
}

button:active {
    transform: scale(1.05, 1.05);
}

.triangle {
    position: absolute;
    top: 35%;
    right: 10%;
    margin: auto;
    color: #FAFAFA;
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
