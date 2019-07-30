<template>
  <div id="header">
      <header class="width100-16 mt16">
        <div class="smallContainer posTopLeft">
          <img class="mikan" src="../../assets/wadai.png" />
          <span class="text ml4">WADAI BUS</span>
        </div>
        <div class="smallContainer posTopRight">
          <img v-on:click="$emit('change', true)"  v-bind:style="{opacity: changeLogo(true)}" class="jr mt4" src="../../assets/jr.png" />
          <img v-on:click="$emit('change', false)" v-bind:style="{opacity: changeLogo(false)}" class="nankai" src="../../assets/nankai.png" />
        </div>
      </header>
  </div>
</template>

<script>

export default {
    name: "header",
    data() {
        return {
        }
    },
    props: {
        nankaiFlag: true,
    },
    methods: {
        changeLogo: function(jrButton) {
            if(jrButton && this.nankaiFlag) {
                return '.2'
            } else if(jrButton && !this.nankaiFlag) {
                return '1'
            } else if (!jrButton && this.nankaiFlag) {
                return '1'
            } else {
                return '.2'
            }
        },
    }
};

</script>

<style lang="scss" scoped>

#header {
    width: calc(100% - 16px);
}

header {
    position: relative;
    width: 100%;
    height: 52px;
    img {
      width: 36px;
    }
}

.mikan {
    width: 24px;
}

.text {
    font-size: 12px;
    font-weight: 600;
}

.smallContainer {
  display: flex;
  align-items: flex-start;
}

img {
    transition: all 300 linear;
}

img:active {
    transform: scale(1.3, 1.3);
}

.ml4 {
    margin-left: 4px;
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
