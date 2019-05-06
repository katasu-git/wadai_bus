<template>
<div id="s_blacksearch">
  <!-- <div class="orange_wrapper">
    <div class="orange_container">
      <div class="header l-1">
        <p>WADAI</p>
        <p>SYLLABUS</p>
      </div>
      <div class="neko_wrapper">
        <img class="neko" alt="neko_img" src="../../assets/neko.png" />
      </div>
    </div>
    <div class="calender_wrapper">
        <div class="grid_wrapper">
            <div class="grid" :style="{ color : activeColor(calendarNum) }" v-for="calendarNum in calendarNums" v-on:click="judgeNum(calendarNum)" ontouchstart="">{{ calendarNum }}</div>
        </div>
    </div>
  </div>
  <div class="link l-1">コマを選んでください</div> -->
</div>
</template>

<script>
export default {
  name: 's_blanksearch',
  data () {
    return {
        calendarNums: [35],
        keyWord: "",
    }
  },
  /*created: function() {
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
    goToLink: function() {
      this.$router.push({
          name: 's_top',
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
  },*/
};
</script>

<style lang="scss" scoped>

/*.orange_wrapper {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: #EF8732;
  min-width: 320px;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

.orange_container {
  position: absolute;
  height: 50vh;
  width: 100vw;
}

.header {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80vw;
  font-size: 6vh;
  font-weight: 900;
}

.neko_wrapper {
  position: absolute;
  top: 8%;
  right: 8%;
}

img {
  width: 48px;
}

.link {
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: auto;
  width: 80vw;
  text-align: center;
}

.calender_wrapper {
    position: absolute;
    top: 30%;
    left: 10%;
    width: 80vw;
    height: 50vh;
}

.grid_wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.grid {
  border: solid 1px rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  font-weight: 600;
}

.grid:active {
    background: white;
    opacity: .5;
}*/

</style>
