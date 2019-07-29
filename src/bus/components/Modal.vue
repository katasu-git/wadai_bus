<template>
  <div id="modal" v-on:click="$emit('hide')">
      <div class="container">
        <div class="text" v-on:click="fromUniv()">大学から帰る</div>
        <div class="border mt32"></div>
        <div class="text mt32" v-on:click="toUniv()">大学に行く</div>
      </div>
  </div>
</template>

<script>

export default {
    name: "modal",
    data() {
        return {
        }
    },
    methods: {
        fromUniv: function() {
            console.log("帰るー");
        },
        toUniv: function() {
            console.log("いくー");
        }
    }
};

</script>

<style lang="scss" scoped>

#modal {
    z-index: 1;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(black, .27);

    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 70%;
    height: 30%;
    background-color: #FAFAFA;
    border-radius:10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.border {
    height: 1px;
    width: 100%;
    background: rgba(0,0,0,0.12);
}

.text {
    font-size: 24px;
    font-weight: 600;
    transition: all 300 linear;
}

.text:active {
    transform: scale(.9, .9);
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
