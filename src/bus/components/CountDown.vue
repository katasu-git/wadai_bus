<template>
  <div id="countDown">
      {{ leftTime }}
  </div>
</template>

<script>
import { setTimeout } from 'timers';

export default {
    name: "countDown",
    props: {
        timeTable: Array,
    },
    data() {
        return {
            leftTime: '10m15s'
        }
    },
    created: function () {
        setInterval(()=> {
            this.getLeftTime();
        }, 1000);
    },
    methods: {
        getDouble: function(number) {
            return ("0" + number).slice(-2)
        },
        getNextBus: function() {
            const timeTable = this.timeTable;
            const nowMin = new Date().getMinutes();
            let nextHour = new Date().getHours();
            let nextMin;

            for(let i=0; i<100; i++) {
                if(timeTable[nextHour][i] == null) {
                    nextHour++;
                    if(nextHour > 23) {
                        nextHour = 0;
                    }
                } else if(timeTable[nextHour][i] > nowMin) {
                    nextMin = timeTable[nextHour][i];
                    break;
                }
            }
            return [nextHour, nextMin];
        },
        getLeftTime: function() {
            const nowHour = new Date().getHours();
            const nowMin = new Date().getMinutes();
            const nowSec = new Date().getSeconds();
            const nextHour = this.getNextBus()[0];
            const nextMin = this.getNextBus()[1];
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

            if(lefHour != 0) {
                this.leftTime = this.getDouble(lefHour) + "h" + this.getDouble(lefMin) + "m" + this.getDouble(lefSec) + "s";
            } else {
                this.leftTime = this.getDouble(lefMin) + "m" + this.getDouble(lefSec) + "s";
            }
        }
    }
};

</script>

<style lang="scss" scoped>

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
