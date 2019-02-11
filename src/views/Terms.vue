<template>
  <div id="terms">
    <button>特に意味のないボタン</button>
    <router-link :to="{ name: 'top' }">TOPに戻る</router-link>
    <p>NEXT BUS {{ nHour }} : {{ nMin }}</p>
    <p>PRE BUS {{ pHour }} : {{ pMin }}</p>
    <p>NEXT NEXT BUS {{ nnHour }} : {{ nnMin }}</p>
    <p>{{ lefHour }} : {{ lefMin }} : {{ lefSec }}</p>
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
    getdoubleDigestNumer(getLeftMin()[0]),
    getdoubleDigestNumer(getLeftMin()[1]),
    getdoubleDigestNumer(getLeftMin()[2]),
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
  var nowNum = 0;
  var nextNum = 0;
  var nextNextHour = 0;
  var nextNextMin = 0;
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
  var nowNum = 0;
  var preNum = 0;
  var preHour = 0;
  var preMin = 0;
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

const getLeftMin = () => {
  const nowHour = getNow()[0];
  const nowMin = getNow()[1];
  const nowSec = getNow()[2];
  const nextHour = getNextMin(hh)[0];
  const nextMin = getNextMin(hh)[1];
  var lefHour = nextHour - nowHour;
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
  //ここまでで差分の時間と分が求まっている
  var lefSec = 59 - nowSec;
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
