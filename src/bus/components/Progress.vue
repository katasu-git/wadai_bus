<template>
  <div id="progress">
    <div class="progressBarBottom mt8">
        <div class="progressBarTop" v-bind:style="{width: getWidth(), background: getColor()}"></div>
    </div>
  </div>
</template>

<script>
import { setInterval } from 'timers';

export default {
    name: "progress",
    props: {
        leftTimeToProg: Number
    },
    data() {
        return {
        }
    },
    methods: {
        getWidth: function() {
            let par;
            if(this.leftTimeToProg > 600) {
                return '0%';
            } else {
                //100(%) / 600 = 0.1666...
                par = 100 - 0.16666 * this.leftTimeToProg;
                return `${par}%`;
            }
        },
        getColor: function() {
            if(this.leftTimeToProg > 180) {
                return '#45B5AA';
            } else {
                return '#D94F70'
            }
        }
    }
};

</script>

<style lang="scss" scoped>

#progress {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.progressBarTop,  .progressBarBottom{
    height: 6px;
    border-radius: 50px;
    transition: all 100ms linear;
}

.progressBarBottom {
    width: 80%;
    background-color: #949494;
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
