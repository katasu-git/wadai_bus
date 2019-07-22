<template>
  <div id="headparts">

    <div class="header l-justify-center l-100">
      <div class="title">WADAI BUS</div>
    </div>

    <div class="nav_wrapper l-justify-center">
      <div class="mask_inner">
        <div class="mask"></div>
        <div class="nav">
          <div class="loop">
            <div class="time_wrapper">
              <div class="time_container">
                <div class="time1 l-justify-center l-0">
                  00:00
                </div>
                <div class="text l-justify-center l-0">
                  消す
                </div>
              </div>
            </div>
          <div class="triangle_wrapper">
            <div class="triangle_container">
              <div class="time1 l-justify-center l-0">
                ▶
              </div>
              <div class="text l-justify-center l-0">
              </div>
            </div>
          </div>
          <div class="time_wrapper">
            <div class="time_container">
              <div class="time1 l-justify-center l-3">
                {{ pHour }} : {{ pMin }}
              </div>
              <div class="text l-justify-center l-3">
                前のバス
              </div>
            </div>
          </div>
          <div class="triangle_wrapper">
            <div class="triangle_container">
              <div class="time1 l-justify-center l-3">
                ▶
              </div>
              <div class="text l-justify-center l-3">
              </div>
            </div>
          </div>
          <div class="time_wrapper">
            <div class="time_container">
              <div class="time2 l-justify-center d-1">
                {{ nHour }} : {{ nMin }}
              </div>
              <div class="text l-justify-center l-1">
                次のバス
              </div>
            </div>
          </div>
          <div class="triangle_wrapper">
            <div class="triangle_container">
              <div class="time1 l-justify-center l-2">
                ▶
              </div>
              <div class="text l-justify-center l-3">
              </div>
            </div>
          </div>
          <div class="time_wrapper">
            <div class="time_container">
              <div class="time3 l-justify-center l-2">
                {{ nnHour }} : {{ nnMin }}
              </div>
              <div class="text l-justify-center l-2">
                次の次のバス
              </div>
            </div>
          </div>
          </div>
          <div class="loop" v-for="hour in HourArray">
            <div class="triangle_wrapper">
              <div class="triangle_container">
                <div class="time1 l-justify-center l-3">
                  ▶
                </div>
                <div class="text l-justify-center l-3">
                </div>
              </div>
            </div>
            <div class="time_wrapper">
              <div class="time_container">
                <div class="time3 l-justify-center l-3">
                  {{ hour }}
                </div>
                <div class="text l-justify-center l-3">
                  さらに...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "maincircle",
  props: {
    tTable: Array
  },
  data() {
    return {
      nHour: this.getDouble(this.getNextMin(this.tTable)[0]),
      nMin: this.getDouble(this.getNextMin(this.tTable)[1]),
      pHour: this.getDouble(this.getPre(this.tTable)[0]),
      pMin: this.getDouble(this.getPre(this.tTable)[1]),
      nnHour: this.getDouble(this.getNextNext(this.tTable)[0]),
      nnMin: this.getDouble(this.getNextNext(this.tTable)[1]),
      HourArray: [],
    }
  },
  beforeCreate: function(){
    this.acr = false;
    setInterval(() => {
      this.nHour = this.getDouble(this.getNextMin(this.tTable)[0]);
      this.nMin = this.getDouble(this.getNextMin(this.tTable)[1]);
      this.pHour = this.getDouble(this.getPre(this.tTable)[0]);
      this.pMin = this.getDouble(this.getPre(this.tTable)[1]);
      this.nnHour = this.getDouble(this.getNextNext(this.tTable)[0]);
      this.nnMin = this.getDouble(this.getNextNext(this.tTable)[1]);
      this.getMoreNext(this.tTable);
    }, 1000);
  },
  created: function() {
    this.getMoreNext(this.tTable);
  },
  methods: {
    getNow: function() {
      const nowTime = new Date();
      //return [8, 40, nowTime.getSeconds()];
      return [nowTime.getHours(), nowTime.getMinutes(), nowTime.getSeconds()];
    },
    getNextMin: function(timeTable) {
      const now = this.getNow();
      const nowHour =  now[0];
      const nowMin = now[1];
      var nextHour = nowHour;
      var nextMin;

      for(var i=0; ;i++){
        if(timeTable[nextHour][i] == null) {
          //配列末尾が空の場合はnextHour++の最初を選ぶ
          nextHour++;
          //nextHour++が空の場合の対策
          nextHour = this.getNextHour(nextHour, this.tTable);
          nextMin = timeTable[nextHour][0];
          break;
        } else if(timeTable[nextHour][i] > nowMin) {
          nextMin = timeTable[nextHour][i];
          break;
        }
      }
      return [nextHour, nextMin];
    },
    getNextNext: function(timeTable) {
      var nowNum;
      var nextNum;
      var nextNextHour;
      var nextNextMin;
      const nHHMM = this.getNextMin(timeTable);
      const nextHour = nHHMM[0];
      const nextMin = nHHMM[1];
      for(var i=0;;i++) {
        if(timeTable[nextHour][i] == nextMin) { //分が配列の何番目かを調べる
          nowNum = nextHour*6 + i; //各配列の格納数を最大6個と仮定し、配列に通し番号を与える(0~143番)
          nextNum = nowNum + 1; //次の時刻は通し番号+１に入っている
          for(;;){
            if(timeTable[Math.floor(nextNum / 6)][nextNum % 6] != null){
              nextNextHour = Math.floor(nextNum / 6); //通し番号から時刻を復元
              nextNextMin = timeTable[nextNextHour][nextNum % 6]; //通し番号から分数を復元
              break;
            } else {
              nextNum++; //通し番号の中身がnullの場合は、番号に移る
              if(nextNum > 143) {
                //終電です
                nextNum = 0;
              }
            }
          }
          break;
        }
      }
      //処理終了
      return [nextNextHour, nextNextMin];
    },
    getMoreNext: function(timeTable) {
      const nnnNum = this.getNextNext(timeTable);
      let nowHour = nnnNum[0];
      let nowMin = nnnNum[1];
      let nowNum = 0;

      for(let i=0;;i++) {
        if(timeTable[nowHour][i] > nowMin) {
          nowHour++;
        }
        if(timeTable[nowHour][i] == nowMin) {
          nowNum = nowHour*6 + i;
          break;
        }
      }

      for(let i=0;i<15;i=i+1) {
      nowNum++;
        for(;;){
          if(timeTable[Math.floor(nowNum / 6)][nowNum % 6] != null){
            if(this.HourArray != null) {
              this.HourArray[i] = this.getDouble(Math.floor(nowNum / 6)) + ":" + this.getDouble(timeTable[Math.floor(nowNum / 6)][nowNum % 6]);
            } else {
              this.HourArray.push( this.getDouble(Math.floor(nowNum / 6)) + ":" + this.getDouble(timeTable[Math.floor(nowNum / 6)][nowNum % 6]));
            }
            break;
          } else {
            nowNum++;
            if(nowNum > 143) {
              nowNum = 0;
            }
          }
        }
      }
      //console.log(this.HourArray);
    },
    getPre: function(timeTable) {
      var nowNum;
      var preNum;
      var preHour;
      var preMin;
      const nHHMM = this.getNextMin(timeTable);
      const nextHour = nHHMM[0];
      const nextMin = nHHMM[1];
      for(var i=0;;i++) {
        if(timeTable[nextHour][i] == nextMin) {
          nowNum = nextHour*6 + i;
          preNum = nowNum - 1;
          for(;;){
            if(timeTable[Math.floor(preNum / 6)][preNum % 6] != null){ //Math.floorで小数点以下切り捨て
              preHour = Math.floor(preNum / 6);
              preMin = timeTable[preHour][preNum % 6];
              break;
            }
            preNum--;
            if(preNum < 0){ //通し番号が0以下の場合は最後尾(143)に戻す
              preNum = 143; //timetabel[23][5] = 23*6 + 5 = 143より
            }
          }
          break;
        }
      }
      //処理終了
      return [preHour, preMin];
    },
    getNextHour: function(nextHour, timeTable) {
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
    getDouble: function(number) {
      return ("0" + number).slice(-2)
    }
  }
};

</script>

<style lang="scss" scoped>

#headparts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.header {
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  background: #1D1D27;
  height: 8vh;
  min-height: 40px;
  min-width: 320px;
}

.nav_wrapper {
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  background: #1D1D27;
  height: 10vh;
  width: 100%;
}

.nav {
  width: 100%;
  max-width: 375px;
  min-width: 320px;
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  overflow-y: hidden;
}

.time_wrapper {
  width: 20%;
  min-width: 62px;
  max-width: 75px;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.triangle_wrapper {
  width: 5%;
  min-width: 16px;
  max-width: 18.75px;
  height: 10vh;
  font-size: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mask_inner {
  position: relative;
  width: 100%;
  max-width: 375px;
  min-width: 320px;
}

.mask {
  position: absolute;
  top: 5%;
  right: 0%;
  height: 9vh;
  width: 7%;
  background: #1D1D27;
}

.loop {
  display: flex;
}

.time2 {
  padding: 0.8em;
  background: white;
  max-height: 30px;
}

.time1, .time2, .time3 {
  height: 4vh;
  border-radius: 50px;
  font-size: 0.7em;
  font-weight: 600;
  white-space: nowrap;
  max-height: 30px;
}

.text {
  height: 4vh;
  font-size: 0.5em;
  white-space: nowrap;
}

.title {
  font-size: 3vh;
}

</style>
