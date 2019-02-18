<template>

  <div id="terms">
    <div class="header l-justify-center l-100 u-fs150">
      <div class="text">BUSBUS</div>
    </div>
    <div class="nav l-justify-center">
      <div class="l-justify-space-around">

      <div class="">
        <div class="l-012 u-tx-al-c">
          {{ pHour }} : {{ pMin }}
        </div>
        <div class="u-fs060 u-tx-al-c l-000 u-mt1">
          さらに次のバス
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

  <div class="l-justify-center u-mt10">
    <div class="u-w060">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 249">

        <!--後ろの白いところ-->
          <path d="M48.1 239a135 135 0 1 1 193.8 0" fill="none" stroke="#efefef" stroke-linecap="round"
          stroke-miterlimit="10" stroke-width="20"/>

        <!--伸びる線-->
        <g data-name="レイヤー 2">
          <path class="logo" d="M48.1 239a135 135 0 1 1 193.8 0" fill="none" stroke="#16b2b2" stroke-linecap="round"
            stroke-miterlimit="10" stroke-width="20" data-name="レイヤー 1"/>
        </g>

        <text class="d-054 u-fs080" x="102" y="110">バスが来るまで</text>
        <text class="d-087 u-fs250" x="90" y="160">{{ lefMin }} : {{ lefSec }}</text>

      </svg>

    </div>
  </div>

  <div class="l-justify-center">
    <div class="u-w020 u-mt-5">
      <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <path class="walk" d="M129.71 51.34a18.67 18.67 0 1 0 19.45-17.85 18.68 18.68 0 0 0-19.45 17.85zM121.87 121c-.01 0-.05.09 0 0z"/>
        <path class="walk" d="M90.45 148l15.16-34.28a9.83 9.83 0 0 1 .68-1.12 8.83 8.83 0 0 1 1.43-2.5s9-18.16 16.46-25.44c5.06-5.26 10.81-8.56
              17.66-8.53 11.4.07 17.57 5.4 21 11l16.35 26.41 28 21.76a7.26 7.26 0 0 1-8.4 11.85L169.08 128c.29 7.82 9.89 127.82 9.89 127.82a9.47 9.47
                0 0 1-18.78 2.53l-9-49.81-1.81 5.25a20.76 20.76 0 0 1-3.36 5.89l-29.9 31.72a8.52 8.52 0 1 1-12.26-11.84l23.67-34 8.31-33.41c-.07-5-8.91-56.87-8.91-56.87l-5 5.67s0-.08
                0 0l-18.41 33.48a7.26 7.26 0 1 1-13-6.46z"/>
        <path fill="none" d="M0 0h300v300H0z"/>
      </svg>
    </div>
  </div>

  <div class="l-justify-center u-mt1 d-087">まだ余裕</div>
  <div class="l-justify-center u-mt1 d-054 u-fs080">次のバスは {{nHour}} : {{nMin}}</div>

    <div class="l-justify-center u-mt10">
      <ul id="dropmenu" contouchstart="">
        <li><a href="#">行き先を選択</a>
          <ul>
            <li><router-link :to="{ name: 'top' }"><div class="l-justify-center">TOPに戻る</div></router-link></li>
            <li><router-link :to="{ name: 'top' }"><div class="l-justify-center">TOPに戻る</div></router-link></li>
            <li><router-link :to="{ name: 'top' }"><div class="l-justify-center">TOPに戻る</div></router-link></li>
            <li><router-link :to="{ name: 'top' }"><div class="l-justify-center">TOPに戻る</div></router-link></li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "terms",
  data() {
    return {
      nHour: doF()[0],
      nMin: doF()[1],
      pHour: doF()[2],
      pMin: doF()[3],
      nnHour: doF()[4],
      nnMin: doF()[5],
      lefHour: doF()[6],
      lefMin: doF()[7],
      lefSec: doF()[8]
    }
  },
  created: function(){
    setInterval(() => {
      this.nHour = doF()[0];
      this.nMin = doF()[1];
      this.pHour = doF()[2];
      this.pMin = doF()[3];
      this.nnHour = doF()[4];
      this.nnMin = doF()[5];
      this.lefHour = doF()[6];
      this.lefMin = doF()[7];
      this.lefSec = doF()[8];
    }, 1000);
  }
};


const retTimeTable1 = () => {
  const hh = [
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
    [27, 53],
    [22, 52],
    [22, 48],
    [22, 52],//15
    [30, 52],//16
    [22, 44, 46],//17
    [7, 22, 55],//18
    [19, 40, 50],//19
    [18, 25, 41],//20
    [19, 49],//21
    [null],
    [null],
  ];
  return hh;
}

const hh = retTimeTable1(); //時刻表の読み込み

const doF = () => {
  return [
    getdoubleDigestNumer(getNextMin(hh)[0]),
    getdoubleDigestNumer(getNextMin(hh)[1]),
    getdoubleDigestNumer(getPre(hh)[0]),
    getdoubleDigestNumer(getPre(hh)[1]),
    getdoubleDigestNumer(getNextNext(hh)[0]),
    getdoubleDigestNumer(getNextNext(hh)[1]),
    getdoubleDigestNumer(getLeftTime()[0]),
    getdoubleDigestNumer(getLeftTime()[1]),
    getdoubleDigestNumer(getLeftTime()[2]),
  ];
}

const getNextMin = (timeTable) => {

  const now = getNow();
  const nowHour =  now[0];
  const nowMin = now[1];
  var nextHour = nowHour;
  var nextMin;

  for(var i=0; ;i++){
    if(timeTable[nextHour][i] == null) {
      //配列末尾が空の場合はnextHour++の最初を選ぶ
      nextHour++;
      //nextHour++が空の場合の対策
      nextHour = getNextHour(nextHour, timeTable);
      nextMin = timeTable[nextHour][0];
      break;
    } else if(timeTable[nextHour][i] > nowMin) {
      nextMin = timeTable[nextHour][i];
      break;
    }
  }
  return [nextHour, nextMin, nowHour, nowMin];
}

const getNextNext = (timeTable) => { //時刻表が引数
  var nowNum;
  var nextNum;
  var nextNextHour;
  var nextNextMin;
  const nHHMM = getNextMin(timeTable);
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
        }
        nextNum++; //通し番号の中身がnullの場合は、番号に移る
      }
      break;
    }
  }
  //処理終了
  return [nextNextHour, nextNextMin];
}

//基本的にはgetNextNext()と同じ
const getPre = (timeTable) => {
  var nowNum;
  var preNum;
  var preHour;
  var preMin;
  const nHHMM = getNextMin(timeTable);
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
}

const getLeftTime = () => {
  const nowHour = getNow()[0];
  const nowMin = getNow()[1];
  const nowSec = getNow()[2];
  const nextHour = getNextMin(hh)[0];
  const nextMin = getNextMin(hh)[1];
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
}

const getNow = () => {
  const nowTime = new Date();
  //return [8, 40, nowTime.getSeconds()];
  return [nowTime.getHours(), nowTime.getMinutes(), nowTime.getSeconds()];
}

const getNextHour = (nextHour, timeTable) => {
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
}

//数字を二桁に変換
const getdoubleDigestNumer = (number) => {
return ("0" + number).slice(-2)
}

</script>

<style lang="scss">
.header {
  background: #1D1D27;
  height: 7vh;
}

.nav {
  background: #1D1D27;
  height: 10vh;
}

.whitebox {
  background: white;
  border-radius: 20px;
}

#dropmenu{
  list-style-type: none;
  width: 240px;
  height: 50px;
  margin: 5vh;
  padding: 0;
  background: #16B2B2;
  /*border-bottom: 5px solid #535d09;*/
  border-radius: 30px 30px 30px 30px;
}
#dropmenu li{
  position: relative;
  width: 100%; /*メニューが一つなら100%*/
  margin: 0;
  padding: 0;
  text-align: center;
}
#dropmenu li a{
  display: block;
  margin: 0;
  padding: 15px 0 11px;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
}
#dropmenu li:hover > a{
  background: #16B2B2;
  color: #eff7b1;
}
#dropmenu > li:hover > a{
  border-radius: 30px 30px 0px 0px;
}
#dropmenu li ul{
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  border-radius: 30px 30px 30px 30px;
}
#dropmenu li:last-child ul{
  width: 100%
}
#dropmenu li ul li{
  overflow: hidden;
  width: 100%;
  height: 0;
  color: #fff;
  -moz-transition: .2s;
  -webkit-transition: .2s;
  -o-transition: .2s;
  -ms-transition: .2s;
  transition: .2s;
}
#dropmenu li ul li a{
  padding: 13px 15px;
  background: #16B2B2;
  text-align: left;
  font-size: 12px;
  font-weight: normal;
}
#dropmenu li:hover ul li{
  overflow: visible;
  height: 38px;
  /*border-top: 1px solid #7c8c0e;
  border-bottom: 1px solid #616d0b;*/
}
#dropmenu li:hover ul li:first-child{
  border-top: 0;
}
#dropmenu li:hover ul li:last-child{
  border-bottom: 0;
}
#dropmenu li:hover ul li:last-child a{
  border-radius: 0px 0px 30px 30px;
}

svg .logo{
  fill: none;
  stroke: #16B2B2; /*線の色を指定する*/
  stroke-dasharray: 2000;/*線の間隔を指定する*/
  stroke-dashoffset: 0;/*線の位置を指定する(IEは効かない属性)*/
  stroke-width: 20;/*線の太さを指定する*/
  -webkit-animation: hello 5s ease-in forwards;
  animation: hello 5s ease-in forwards infinite;
}

 @-webkit-keyframes hello {
   0% {
   stroke-dashoffset: 2000;
  }
   30% {
    stroke: #16B2B2;
   /*fill:transparent;*/ /*透過*/
  }
   40% {
    stroke: #E84379;
  }
   100% {
     stroke: #E84379;
     stroke-dashoffset: 0;
   /*fill:#333;*/
  }
}

@keyframes hello {
  0% {
  stroke-dashoffset: 2000;
 }
  30% {
   stroke: #16B2B2;
  /*fill:transparent;*/ /*透過*/
 }
  40% {
   stroke: #E84379;
 }
  100% {
    stroke: #E84379;
    stroke-dashoffset: 0;
  /*fill:#333;*/
 }
}

svg .walk {
  fill: #16B2B2;
}

</style>
