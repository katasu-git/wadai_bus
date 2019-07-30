<template>
  <div id="progress">
    <div class="">{{ getComment() }}</div>
    <div class="progressBarBottom mt16">
        <div class="progressBarTop" v-bind:style="{width: getWidth(), background: getColor()}"></div>
    </div>
  </div>
</template>

<script>

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
            if(this.leftTimeToProg > 900) {
                return '0%'
            } else {
                //100(%) / 900 = 0.111111...
                par = 100 - 0.1111111 * this.leftTimeToProg;
                return `${par}%`
            }
        },
        getColor: function() {
            if(this.leftTimeToProg > 360) {
                return '#45B5AA'
            } else if(this.leftTimeToProg > 120) {
                return '#F0C05A'
            } else {
                return '#D94F70'
            }
        },
        getComment: function() {
            if(this.leftTimeToProg > 360) {
                return 'のんびり待とう';
            } else if(this.leftTimeToProg > 120) {
                return 'もうすぐ来るよ！';
            }  else {
                return 'やばい！急いで！'
            }
        }
    }
};

</script>

<style lang="scss" scoped>

#progress {
    width: calc(100% - 16px);
    color: rgba(#374149, .54);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.mainImg {
  width: 100%;
}

.progressBarTop,  .progressBarBottom{
    height: 5px;
    border-radius: 50px;
    transition: all 600ms ease;
}

.progressBarBottom {
    width: 80%;
    background-color: rgba(#949494, .27);
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
