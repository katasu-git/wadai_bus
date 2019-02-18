<template>

  <div id="terms">
    <div class="header l-justify-center">
      <div class="text">BUSBUS</div>
    </div>
    <div class="nav l-justify-center">
      <span class="text">{{ pHour }} : {{ pMin }}</span>
      <span class="text">・・・・・</span>
      <span class="text">{{ nHour }} : {{ nMin }}</span>
      <span class="text">・・・・・</span>
      <span class="text">{{ nnHour }} : {{ nnMin }}</span>
    </div>

  <div class="l-justify-center u-mt8">
    <div class="u-w80">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 249">

        <!--後ろの白いところ-->
        <svg data-name="レイヤー" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 249">
          <path d="M48.1 239a135 135 0 1 1 193.8 0" fill="none" stroke="#efefef" stroke-linecap="round"
          stroke-miterlimit="10" stroke-width="20"/></svg>

        <!--伸びる線-->
        <g data-name="レイヤー 2">
          <path class="logo" d="M48.1 239a135 135 0 1 1 193.8 0" fill="none" stroke="#16b2b2" stroke-linecap="round"
            stroke-miterlimit="10" stroke-width="20" data-name="レイヤー 1"/>
        </g>

        <text x="90" y="110">バスが来るまで</text>
        <text x="110" y="160">{{ lefHour }} : {{ lefMin }} : {{ lefSec }}</text>

      </svg>
      
    </div>
  </div>

    <div class="l-justify-center u-mt8">
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

var test = "hey";

const dotest = () => {
  console.log(test);
  test = "hi";
  console.log(test);
}

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

.l-justify-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.u-w80 {
  width: 70%;
}

.u-mt10 {
  margin-top: 10vh;
}

.u-mt8 {
  margin-top: 8vh;
}

.u-ab {
  position: absolute;
  top: 50%;
  left: 50%;
}

.header {
  font-size: 24px;
  background: #1D1D27;
  color: white;
  height: 5vh;
  display: flex;
}

.nav {
  background: #1D1D27;
  color: white;
  height: 8vh;
  display: flex;
  font-size: 16px;
}

circle {
}

#ccc {
  stroke: lightgray;
  fill: none;
  stroke-width: 20;
}

#back {
  fill: red;
}

@keyframes circle {
  /* 直径*3.14 */
  0% { stroke-dashoffset: 200; }
  99.9%,to { stroke-dashoffset: 600; }
}



#dropmenu{
  list-style-type: none;
  width: 240px;
  height: 50px;
  margin: 5vh;
  padding: 0;
  background: #8a9b0f;
  border-bottom: 5px solid #535d09;
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
  background: #6e7c0c;
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
  background: #6e7c0c;
  text-align: left;
  font-size: 12px;
  font-weight: normal;
}
#dropmenu li:hover ul li{
  overflow: visible;
  height: 38px;
  border-top: 1px solid #7c8c0e;
  border-bottom: 1px solid #616d0b;
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

#logo {

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

}
@keyframes hello {
 0% {
 stroke-dashoffset: 2000;
}
 30% {
  stroke: #16B2B2;;
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


</style>
