<template>

  <div class="acr-inner l-bottom020">
    <transition name="fade">
      <div v-show="acr" class="acordion l-justify-center l-100">
        <router-link :to="{ name: 'timetable0' }" >大学 → 南海大学前</router-link>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="acr" class="acordion l-justify-center l-100">
        <router-link :to="{ name: 'timetable1' }" >大学 → JR和歌山</router-link>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="acr" class="acordion l-justify-center l-100">
        <router-link :to="{ name: 'timetable2' }" >南海大学前 → 大学</router-link>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="acr" class="acordion l-justify-center l-100">
        <router-link :to="{ name: 'timetable3' }" >JR和歌山 → 大学</router-link>
      </div>
    </transition>
    <!--切り替えボタン-->
    <transition name="fade">
    <div v-if="acr" v-on:click="toggle" class="acordion-active l-justify-center d-087">
      閉じる
    </div>
    <div v-else v-on:click="toggle" class="acordion-main l-justify-center l-100">
      行き先を選択
    </div>
    </transition>

  </div>

</template>

<script>
export default {
  name: "selector",
  data() {
    return {
      acr: false
    }
  },
  methods: {
    toggle: function() {
      if(this.acr) {
        this.acr = false;
      } else {
        this.acr = true;
      }
    },
    close: function() {
      //this.acr = true;
    }
  }
};
</script>

<style lang="scss" scoped>

.acordion {
  border: solid .5px rgba(0,0,0,0.26);
  background: #16B2B2;
  width: 70vw;
  height: 6vh;
  opacity: .9;
}

.acordion-main {
  border-radius: 30px;
  background: #16B2B2;
  width: 70vw;
  height: 6vh;
  opacity: .9;
}

.acordion-active {
  color: white;
  background: #E271A0; //main-20%
  width: 70vw;
  height: 6vh;
}

.acordion:hover {
  opacity: .5;
}

.fade-enter-active, .fade-leave-active {
  /*表示されているときのcss*/
  transition: opacity .5s ease;
}

.fade-enter, .fade-leave-to {
  /*非表示のcss*/
  /*transform: translateY(-30px);*/
  opacity: 0;
}
</style>
