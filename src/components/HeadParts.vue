<template>
  <div id="headparts">

    <div class="header l-justify-center l-100 u-fs120">
      <div class="text">WADAI BUS</div>
    </div>

  <div class="nav l-justify-center">
    <div class="l-justify-space-around">

    <div class="">
      <div class="l-012 u-tx-al-c">
        {{ pHour }} : {{ pMin }}
      </div>
      <div class="u-fs060 u-tx-al-c l-012 u-mt1">
        ひとつ前のバス
      </div>
    </div>

    <div class="u-fs060 u-ph1">
      <div class="l-012">
        ・・・
      </div>
      <div class="u-fs060 u-tx-al-c l-000 u-mt1">
        透明化
      </div>
    </div>

    <div class="">
      <div class="whitebox d-087 u-ph3">
        {{ nHour }} : {{ nMin }}
      </div>
      <div class="u-fs060 u-tx-al-c l-100 u-mt1">
        次のバス
      </div>
    </div>

    <div class="u-fs060 u-ph1">
        <div class="l-070">
          ・・・
        </div>
        <div class="u-fs060 u-tx-al-c l-000 u-mt1">
          透明化
        </div>
    </div>

    <div class="">
      <div class="u-tx-al-c">
        <div class="l-070">
          {{ nnHour }} : {{ nnMin }}
        </div>
        <div class="u-fs060 l-070 u-mt1">
          さらに次のバス
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
      nnMin: this.getDouble(this.getNextNext(this.tTable)[1])
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
    }, 1000);
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

.nav {
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  background: #1D1D27;
  height: 10vh;
}

.whitebox {
  background: white;
  border-radius: 30px;
}

.header {
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  background: #1D1D27;
  height: 5vh;
}
</style>
