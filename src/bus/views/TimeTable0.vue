<template>
  <div id="timetable0">
    <transition name="trModal">
      <Modal v-show="modalFlag" @hide="hideModal"></Modal>
    </transition>
    <div class="largeContainer">
      <Header></Header>
      <div class="subHeader mt4 width100-16">
        <div class="text minText posTopLeft">次のバスが来るで</div>
        <div class="text minText posTopRight">路線切替</div>
      </div>
      <div class="subHeader width100-16 mt8">
        <div class="text timer posTopLeft">{{ leftTime }}</div>
      </div>
      <img class="mainImg mt16 width100-16" src="../../assets/clip-waiting.png" />
      <Progress :leftTimeToProg="leftTimeToProg"></Progress>
      <button class="mt48" v-on:click="showModal()">大学から帰る<div class="triangle">▼</div></button>
      <Footer
        :timeTable="timeTable"
        :leftTimeToProg="leftTimeToProg">
      </Footer>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import Progress from "../components/Progress"
import Footer from "../components/Footer"
import Modal from "../components/Modal"
import { setTimeout } from 'timers';

export default {
  name: "timetable0",
  data() {
    return {
      leftTime: '',
      leftTimeToProg: 0,
      modalFlag: false,
    }
  },
  created: function () {
    this.getLeftTime();
    setInterval(()=> {
      this.getLeftTime();
    }, 1000);
  },
  methods: {
    showModal: function() {
      setTimeout(()=> {
        this.modalFlag = true;
      },150);
    },
    hideModal: function() {
      setTimeout(()=> {
        this.modalFlag = false;
      },50);
    },
    getDouble: function(number) {
      return ("0" + number).slice(-2)
    },
    toSecond: function(hour, min, sec) {
        return Number(hour)*3600 + Number(min)*60 + Number(sec);
    },
    getNextBus: function(nowHour, nowMin) {
      const timeTable = this.timeTable;
      let nextHour = nowHour;
      let nextMin;

      for(var i=0; ;i++){
        if(timeTable[nextHour][i] == null) {
          //配列末尾が空の場合はnextHour++の最初を選ぶ
          nextHour++;
          //nextHour++が空の場合の対策
          nextHour = this.skipNull(nextHour, timeTable);
          nextMin = timeTable[nextHour][0];
          break;
        } else if(timeTable[nextHour][i] > nowMin) {
          nextMin = timeTable[nextHour][i];
          break;
        }
      }
      //console.log(nextHour + ":" + nextMin);
      return [nextHour, nextMin];
    },
    skipNull: function(nextHour, timeTable) {
      for(;;){
        //23時以降は0時に戻す
        if(nextHour > 23) {
          nextHour = 0;
        }
        //配列が空でなければ抜ける
        if(timeTable[nextHour] != "") {
          break;
        }
        //空の時は次の時間に移る
        nextHour++;
      }
      return nextHour;
    },
    getLeftTime: function() {
      const nowHour = new Date().getHours();
      const nowMin = new Date().getMinutes();
      const nowSec = new Date().getSeconds();
      let next = [];
      next = this.getNextBus(nowHour, nowMin);
      const nextHour = next[0];
      const nextMin = next[1];
      var lefHour = nextHour - nowHour;
      var lefSec = 59 - nowSec;
      if(lefHour < 0 ){
        lefHour = lefHour + 24;
      }
      var lefMin = nextMin - nowMin;
      if(lefMin < 0) {
        lefMin = lefMin + 59;
        lefHour = lefHour - 1;
      } else if(lefMin != 0) {
        lefMin = lefMin - 1
      }

      this.leftTimeToProg = this.toSecond(lefHour, lefMin, lefSec);
      if(lefHour != 0) {
        this.leftTime = this.getDouble(lefHour) + "h" + this.getDouble(lefMin) + "m" + this.getDouble(lefSec) + "s";
      } else {
        this.leftTime = this.getDouble(lefMin) + "m" + this.getDouble(lefSec) + "s";
      }
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
          [5, 53], //8
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
    Header: Header,
    Progress: Progress,
    Footer: Footer,
    Modal: Modal,
  }
};

</script>

<style lang="scss" scoped>

#timetable0 {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
    color: rgba(#374149, .87);

    display: flex;
    align-items: center;
    justify-content: center;
}

.largeContainer {
    width: 100%;
    max-width: 500px;
    background-color: #FAFAFA;

    display: flex;
    flex-direction: column;
    align-items: center;
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

button {
    position: relative;
    width: calc(80% - 16px);
    min-height: 52px;
    border: none;
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

.width100-16 {
    width: calc(100% - 16px);
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

.trModal-enter-active, .trModal-leave-active {
  transition: opacity .5s;
}

.trModal-enter, .trModal-leave-to {
  opacity: 0;
}

</style>
