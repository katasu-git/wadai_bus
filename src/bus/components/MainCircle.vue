<template>

  <div id="maincircle">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 249">
          <!--後ろの白いところ-->
          <path d="M48.1 239a135 135 0 1 1 193.8 0" fill="none" stroke="#efefef" stroke-linecap="round"
              stroke-miterlimit="10" stroke-width="20"/>
          <!--伸びる線-->
          <path v-show="progress" class="logo" id="mypath" v-bind:style="prog" d="M48.1 239a135 135 0 1 1 193.8 0" fill="none" stroke="#16b2b2" stroke-linecap="round"
              stroke-miterlimit="10" stroke-width="20" data-name="レイヤー 1"/>
          <text class="d-054 u-fs080" x="100" y="110">バスが来るまで</text>
          <text v-if="leftTime" class="d-087 u-fs250" x="86" y="160">{{ lefMin }} : {{ lefSec }}</text>
          <text v-else class="d-087 u-fs200" x="68" y="160">{{lefHour}} : {{ lefMin }} : {{ lefSec }}</text>
        </svg>

    <div class="l-justify-center">
      <div class="u-w040 u-mt-7">
        <svg v-if="human" class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
          <path class="walk" d="M129.71 51.34a18.67 18.67 0 1 0 19.45-17.85 18.68 18.68 0 0 0-19.45 17.85zM121.87 121c-.01 0-.05.09 0 0z"/>
          <path class="walk" d="M90.45 148l15.16-34.28a9.83 9.83 0 0 1 .68-1.12 8.83 8.83 0 0 1 1.43-2.5s9-18.16 16.46-25.44c5.06-5.26 10.81-8.56
              17.66-8.53 11.4.07 17.57 5.4 21 11l16.35 26.41 28 21.76a7.26 7.26 0 0 1-8.4 11.85L169.08 128c.29 7.82 9.89 127.82 9.89 127.82a9.47 9.47
                0 0 1-18.78 2.53l-9-49.81-1.81 5.25a20.76 20.76 0 0 1-3.36 5.89l-29.9 31.72a8.52 8.52 0 1 1-12.26-11.84l23.67-34 8.31-33.41c-.07-5-8.91-56.87-8.91-56.87l-5 5.67s0-.08
                  0 0l-18.41 33.48a7.26 7.26 0 1 1-13-6.46z"/>
          <path fill="none" d="M0 0h300v300H0z"/>
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
          <path fill="none" d="M0 0h300v300H0z"/>
          <path class="dash" d="M71.95 100.43l57.24 1.39v-2.78l-57.24 1.39zM38.52 141.44l87.61 2.12v-4.25l-87.61 2.13zM62.73 173.05l45.54 1.1v-2.21l-45.54 1.11zM255.93 77.15a18.79 18.79 0 1 1-19.83-17.67 18.8 18.8 0 0 1 19.83 17.67z"/>
          <path class="dash" d="M254.23 141.7l-30-2.94V113.4c0-7.49 1.61-25.53-31.82-25.53h-38.76c-3 0-7.06.74-9.93 3.59l-24.38 22.4a6.9 6.9 0 0 0 8.83 10.58l25.07-18.26 19.58 1.74c.08 0-94.85 118.26-94.85 118.26a8.46 8.46 0 0 0 .4 11.86 8.24 8.24 0 0 0 11.73.12l31.72-29s67-3.91 72.79-4.28c6.88-.44 12.57-8 9.11-16.72l-15-36.94 15.12-14.82s1 10.22 1.34 13.14 3.61 6.85 8.31 6.85l40.57.27a7 7 0 0 0 7.41-7.09 7.77 7.77 0 0 0-7.24-7.87zM169 185.56l-26 4.56 21.88-19.76 4.83 12.5c.66 1.72.37 2.44.71 2.7z"/>
        </svg>

      </div>
    </div>

    <div v-if="human" class="l-justify-center u-mt1 d-087">まだ余裕</div>
      <div v-else class="l-justify-center u-mt1 d-087">急いで！！</div>

  </div>

</template>

<script>

export default {
  name: "mainCiecle",
  props: {
    tTable: Array
  },
  data() {
    return {
      lefHour: this.getDouble(this.getLeftTime(this.tTable)[0]),
      lefMin: this.getDouble(this.getLeftTime(this.tTable)[1]),
      lefSec: this.getDouble(this.getLeftTime(this.tTable)[2]),
      pathLength: 0,
      //myPath: "",
      strColor: "#16B2B2", //#E84379
    }
  },
  beforeCreate: function(){
    setInterval(() => {
      this.lefHour = this.getDouble(this.getLeftTime(this.tTable)[0]);
      this.lefMin = this.getDouble(this.getLeftTime(this.tTable)[1]);
      this.lefSec = this.getDouble(this.getLeftTime(this.tTable)[2]);
    }, 1000);
  },
  mounted: function() {
    //DOMの描画後に処理しないとバグります
    //this.myPath = document.getElementById("mypath");
    this.pathLength = document.getElementById("mypath").getTotalLength();
   },
  computed: {
    human: function() {
      if(this.lefMin >= 5 || this.lefHour > 0) {
        //まだ余裕
        this.strColor = "#16B2B2"
        return true;
      } else {
        //急いで！
        this.strColor = "#E84379";
        return false;
      }
    },
    progress: function() {
      if(this.lefMin < 15 && this.lefHour < 1) {
        return true;
      } else {
        return false;
      }
    },
    prog: function() {
      return {
        '--pathLength': `${this.pathLength}`,
        '--pathPosition': `${this.pathPosition}`,
        '--strColor': `${this.strColor}`
      }
    },
    pathPosition: function() {
      //60*カウントスタート分
      let position = Number(this.pathLength) / 900 * (Number(this.lefMin) * 60 + Number(this.lefSec));
      return position;
    },
    leftTime: function() {
      if(this.lefHour > 0) {
        //1時間 以上と表示
        return false;
      } else {
        return true;
      }
    },
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
    },
    getLeftTime: function(timeTable) {
      const nowHour = this.getNow()[0];
      const nowMin = this.getNow()[1];
      const nowSec = this.getNow()[2];
      const nextHour = this.getNextMin(timeTable)[0];
      const nextMin = this.getNextMin(timeTable)[1];
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
      return [lefHour, lefMin, lefSec];
    },
  }
};

</script>

<style lang="scss" scoped>

#maincircle {
  position: absolute;
  top: 28%;
  left: 0%;
  right: 0%;
  margin: auto;
  width: 35vh;
}

svg .logo{
  fill: none;
  stroke: var(--strColor);
  stroke-dasharray: var(--pathLength) var(--pathLength);
  stroke-dashoffset: var(--pathPosition);
  stroke-width: 20;
}

svg .walk {
  fill: #16B2B2;
}

svg .dash {
  fill: #E84379;
}

</style>
