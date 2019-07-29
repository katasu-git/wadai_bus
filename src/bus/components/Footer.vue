<template>
  <div id="footer">
      <div class="middleContainer mt48">
        <div class="smallContainer">
          <div class="text">前のバス</div>
          <div class="text bkNone mt4">{{ preBus[0] }}:{{ preBus[1] }}</div>
        </div>
        <div class="smallContainer">
          <div class="text">次のバス</div>
          <div class="text bkWhite mt4">{{ nextBus[0] }}:{{ nextBus[1] }}</div>
        </div>
        <div class="smallContainer" v-for="after in afterBus">
          <div class="text">さらに次</div>
          <div class="text bkNone mt4">{{ after }}</div>
        </div>
      </div>
      <div class="copyRight"></div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';

export default {
    name: "footer",
    props: {
        leftTimeToProg: Number,
        timeTable: Array,
    },
    data() {
        return {
            nextBus: [], //[hour, min]
            preBus: [], //[hour, min]
            afterBus: [],
        }
    },
    created: function() {
        this.doGetBus();
        setInterval(()=> {
            this.watchLeftTime();
        }, 1000);
    },
    methods: {
        getDouble: function(number) {
            number = Number(number);
            return ("0" + number).slice(-2)
        },
        watchLeftTime: function() {
            if(this.leftTimeToProg <= 0) {
                setTimeout(()=> {
                    this.doGetBus();
                },1000);
            }
        },
        doGetBus: function() {
            let next = [];
            let pre = [];

            next = this.getNextBus();
            this.nextBus[0] = this.getDouble(next[0]);
            this.nextBus[1] = this.getDouble(next[1]);

            pre = this.getPreBus(next[0], next[2]);
            this.preBus[0] = this.getDouble(pre[0]);
            this.preBus[1] = this.getDouble(pre[1]);

            this.getAfterBus(next[0], next[2]);
        },
        getNextBus: function() {
            const timeTable = this.timeTable;
            const nowMin = new Date().getMinutes();
            let nextHour = new Date().getHours();
            let nextMin;
            let minArrayNum;

            for(var i=0; ;i++){
                if(timeTable[nextHour][i] == null) {
                    //配列末尾が空の場合はnextHour++の最初を選ぶ
                    nextHour++;
                    //nextHour++が空の場合の対策
                    nextHour = this.skipNull(nextHour, timeTable);
                    nextMin = timeTable[nextHour][0];
                    minArrayNum = 0;
                    break;
                } else if(timeTable[nextHour][i] > nowMin) {
                    nextMin = timeTable[nextHour][i];
                    minArrayNum = i;
                    break;
                }
            }
            return [nextHour, nextMin, minArrayNum];
        },
        skipNull: function(nextHour, timeTable) {
            for(;;){
                //23時以降は0時に戻す
                //ここに次が平日か祝日かの判定を入れる
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
        getPreBus: function(nextHour, minArrayNum) {
            const timeTable = this.timeTable;
            let preHour =  nextHour;
            let preMin;
            if(minArrayNum == 0) {
                preHour--;
            }
            minArrayNum--;
            for(;;) {
                if(timeTable[preHour] == "") {
                    preHour--;
                    if(preHour < 0) {
                        preHour = 23;
                    }
                } else {
                    break;
                }
            }
            if(preHour != nextHour) {
                preMin = timeTable[preHour].slice(-1)[0];
            } else {
                preMin = timeTable[preHour][minArrayNum];
            }
            return [preHour, preMin]
        },
        getAfterBus :function(afterHour, minArrayNum) {
            const timeTable = this.timeTable;
            let afterArray = [];
            this.afterBus = [];  //配列の初期化

            for(let i=0; i<15; i++) {
                let afterMin;
                minArrayNum++;
                if(timeTable[afterHour][minArrayNum] == null) {
                    afterHour++;
                    minArrayNum = 0;
                }
                for(;;) {
                    if(timeTable[afterHour][minArrayNum] == null) {
                        afterHour++;
                        if(afterHour > 23) {
                            afterHour = 0;
                        }
                    } else {
                        break;
                    }
                }
                afterMin = timeTable[afterHour][minArrayNum];
                this.afterBus.push(`${this.getDouble(afterHour)}:${this.getDouble(afterMin)}`);
            }
        }
    }
};

</script>

<style lang="scss" scoped>

#footer {
    width: 100%;
    color: #FAFAFA;
}

.middleContainer {
    width: 100%;
    min-height: 104px;
    background-color: #374149;
    border-radius: 43px 0 0 0;

    display: flex;
    overflow-x: scroll;

    .smallContainer {
        margin: 0 16px;
        min-width: 20%;
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

.copyRight {
    width: 100%;
    background-color: #374149;
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
