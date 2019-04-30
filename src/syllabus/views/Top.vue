<template>
<div id="s_top">

  <div class="orange_area">
      <div class="header">
                  <p>WADAI</p>
                  <p>SYLLABUS</p>
      </div>
      <div class="neko_wrapper">
          <img class="neko" alt="neko_img" src="../../assets/neko.png" v-on:click="goToBus" ontouchstart=""/>
      </div>
  </div>
  <div class="container">
      <div class="area1">
          <div class="word_search">
          <div class="searh_warpper">
                  <div class="searchForm">
                        <input v-on:keyup.enter="click" v-model="search" placeholder="授業の名前でさがす" class="searchForm-input" type="text">
                            <svg  class="search_icon" v-on:click="click" ontouchstart="" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                            <g>
	                          <path d="M495.272,423.558c0,0-68.542-59.952-84.937-76.328c-24.063-23.938-33.69-35.466-25.195-54.931
		                            c37.155-75.78,24.303-169.854-38.72-232.858c-79.235-79.254-207.739-79.254-286.984,0c-79.245,79.264-79.245,207.729,0,287.003
		                            c62.985,62.985,157.088,75.837,232.839,38.691c19.466-8.485,31.022,1.142,54.951,25.215c16.384,16.385,76.308,84.937,76.308,84.937
		                              c31.089,31.071,55.009,11.95,69.368-2.39C507.232,478.547,526.362,454.638,495.272,423.558z M286.017,286.012
		                                c-45.9,45.871-120.288,45.871-166.169,0c-45.88-45.871-45.88-120.278,0-166.149c45.881-45.871,120.269-45.871,166.169,0
	    	                            C331.898,165.734,331.898,240.141,286.017,286.012z">
                            </path>
                            </g>
                            </svg>
                  </div>
              </div>
          <div class="linkToBrank"><p>スクロールして空きコマ検索</p><p>↓</p></div>
      </div>
      </div>

      <div class="area2">
          <div class="brank_search">
          <a href="#top"><div class="linkToName"><p>↑</p><p>スクロールして授業名検索</p></div></a>
          <div class="calender_overflow">
              <div class="calender_wrapper">
                  <div class="grid_wrapper">
                      <div class="grid" :style='{ color : activeColor(calendarNum), background : activeBackground(calendarNum) }' v-for="calendarNum in calendarNums" v-on:click="judgeNum(calendarNum)" ontouchstart="">{{ calendarNum }}</div>
                  </div>
              </div>
          </div>
          <div class="link_choicekoma">コマを選んでください</div>
      </div>
      </div>
  </div>

</div>
</template>

<script>

export default {
  name: 's_top',
  data () {
    return {
      search: "",
      enterKeyFlag: false,
      calendarNums: [35],
    }
  },
  created: function() {
      //calenderNumに0~24の数字を持たせる
      for(let i=0; i < 36; i++) {
          this.calendarNums[i] = i;
      }
      //外周を置き換える
      for(let i=0; i < 36; i++) {
          if(this.calendarNums[i] === 0) {
              this.calendarNums[i] = "";
          } else if(this.calendarNums[i] === 1) {
              this.calendarNums[i] = "月";
          } else if(this.calendarNums[i] === 2) {
              this.calendarNums[i] = "火";
          } else if(this.calendarNums[i] === 3) {
              this.calendarNums[i] = "水";
          } else if(this.calendarNums[i] === 4) {
              this.calendarNums[i] = "木";
          } else if(this.calendarNums[i] === 5) {
              this.calendarNums[i] = "金";
          } else if(this.calendarNums[i] === 6) {
              this.calendarNums[i] = "1";
          } else if(this.calendarNums[i] === 12) {
              this.calendarNums[i] = "2";
          } else if(this.calendarNums[i] === 18) {
              this.calendarNums[i] = "3";
          } else if(this.calendarNums[i] === 24) {
              this.calendarNums[i] = "4";
          } else if(this.calendarNums[i] === 30) {
              this.calendarNums[i] = "5";
          }
      }

  },
  methods: {
    click: function() {
      this.enterKeyFlag = true;
      if(this.judgeError == false) {
        this.$router.push({
          name: 's_result',
          params: {
            message: this.search,
            judge: 'top',
          }
        })
      }
    },
    goToLink: function() {
      this.$router.push({
          name: 's_blanksearch',
      })
    },
    goToBus: function() {
      this.$router.push({
          name: 'timetable0',
      })
    },
    goToResult: function() {
        this.$router.push({
          name: 's_result',
          params: {
            message: this.search,
            judge: 'blank',
          }
        })
    },
    judgeNum: function(num) {
        let jumpFlag = false;
        if(num != "月" && num != "火" && num != "水" && num != "木" && num != "金") {
          jumpFlag = true;
        }
        let time = Math.floor(num/6);
        let dayOfWeekNum = num%6;
        let dayOfWeekStr = dayOfWeekNum.toString();

        if(dayOfWeekNum === 1) {
            dayOfWeekStr = "月";
        } else if(dayOfWeekNum === 2) {
            dayOfWeekStr = "火";
        } else if (dayOfWeekNum === 3) {
            dayOfWeekStr = "水";
        } else if (dayOfWeekNum === 4) {
            dayOfWeekStr = "木";
        } else if (dayOfWeekNum === 5) {
            dayOfWeekStr = "金";
        }
        this.keyWord = dayOfWeekStr + time;

        if(jumpFlag && time != 0) {
            this.$router.push({
                name: 's_result',
                params: {
                    keyWord: this.keyWord,
                    judge: 'blank'
                }
            })
        }
    },
    activeColor: function(num) {
        if(num < 6) {
            return 'white';
        } else if(num == "月" || num == "火" || num == "水" || num == "木" || num == "金") {
        　  return 'white';
        } else {
            return 'rgba(0,0,0,0)';
        }
    },
    activeBackground: function(num) {
      if(num < 6) {
            return 'rgba(0,0,0,0)';
        } else if(num == "月" || num == "火" || num == "水" || num == "木" || num == "金") {
        　  return 'rgba(0,0,0,0)';
        } else {
            return 'rgb(16, 42, 54)';
        }
    }
  },
  computed: {
    judgeError: function() {
      if(this.search == "" && this.enterKeyFlag) {
        return true;
      } else {
        return false;
      }
    }
  },
};
</script>

<style lang="scss" scoped>

#s_top {
  height: 100vh;
  background-color: #20526B;
}

.container {
  position: absolute;
  top: 30vh;
  height: 70vh;
  width: 100vw;
  background-color: #20526B;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch; /* Needed to work on iOS Safari */
}

.area1 , .area2 {
  scroll-snap-align: start;
  height: 70vh;
}

.orange_area {
  position: fixed;
  height: 30vh;
  width: 100vw;
  padding: 32px;
  border: solid 0 #EF8732;
  border-radius: 0 0 0 60px;
  background-color: #EF8732;
  z-index: 1;
}

.header {
  font-size: 5vh;
  font-weight: 900;
  white-space: nowrap;
  color: white;
}

.neko_wrapper {
  position: absolute;
  top: 32px;
  right: 32px;
}

img {
  width: 48px;
}

.word_search {
  position: relative;
  height: 100%;
  padding: 32px;
}

.linkToBrank, .link_choicekoma {
  position: absolute;
  right: 0;
  bottom: 5%;
  left: 0;
  margin: auto;
  text-align: center;
  color: white;
}

.searh_warpper {
  position: absolute;
  top: 30%;
  left: 10%;
  width: 80vw;
}

.brank_search {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.linkToName {
  position: absolute;
  top: 5%;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
  color: white;
}

.calender_overflow {
    position: absolute;
    top: 25%;
    height: 40vh;
    width: 40vh;
}

.grid_wrapper {
  width: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
}

.grid {
  width: 4vh;
  height: 4vh;
  margin: 1vh;
  border: solid 0 #EF8732;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vh;
  font-weight: 600;
}

.grid:active {
    background: white;
    opacity: .5;
}


input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: rgb(16, 42, 54);
  padding: 10px;
  margin: 5px 0;
  border: 1px solid rgb(16, 42, 54);
  border-radius: 100px;
  outline: none;
  //text-align: center;
}

::-webkit-input-placeholder {
  //text-align:center;
  padding-left: .8em;
  color: rgba(255,255,255,0.70);
}

:-moz-placeholder {
  //text-align:center;
  padding-left: .8em;
  color: rgba(255,255,255,0.70);
}

::-moz-placeholder {
   //text-align:center;
   padding-left: .8em;
   color: rgba(255,255,255,0.70);
}

:-ms-input-placeholder {
  //text-align:center;
  padding-left: .8em;
  color: rgba(255,255,255,0.70);
}

.searchForm {
  position: relative;
}

.search_icon {
  position: absolute;
  top: 0;
  right: 10%;
  bottom: 0;
  margin: auto;
  width: 24px;
  color: rgba(255,255,255,.7);
}

.search_icon:active {
  opacity: .5;
  transform:scale(.7, .7);
}

.neko_wrapper:active {
  opacity: .5;
  transform:scale(.9, .9);
}

.searchForm-input {
  color: rgba(255,255,255,.7);
  width: 100%;
}

.searchForm-submit {
  position: absolute;
  width: 39px;
  height: 39px;
  top: calc(50% - 19px);
  right: 0;
  border: solid 0 white;
  border-left: solid 1px rgba(255,255,255,0.30);
  border-radius: 0 100px 100px 0;
  background: #B0501F;
  outline: none;
}
.searchForm-submit::before {
  position: absolute;
  content: '';
  width: 12px;
  height: 12px;
  top: calc(50% - 9px);
  left: calc(50% - 9px);
  border-radius: 50%;
  box-shadow: 0 0 0 2px #fff;
}
.searchForm-submit::after {
  position: absolute;
  content: '';
  width: 6px;
  height: 5px;
  top: calc(50% + 6px);
  left: calc(50% + 2px);
  border-top: solid 2px #fff;
  transform: rotate(45deg);
}

</style>
