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
      <p>{{route}}</p>
      <div class="triangle"></div>
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
  props: {
    route: String
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

.triangle {
  border-top: 7px solid #FFF;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  position: absolute;
  top: 46%;
  right: 11%;
}

.acordion {
  border: solid .5px rgba(0,0,0,0.26);
  border-radius: 5px;
  background: #16B2B2;
  width: 60vw;
  height: 7vh;
  opacity: .9;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  margin: 3px 0;
}

.acordion-main {
  border-radius: 30px;
  background: #16B2B2;
  width: 60vw;
  height: 7vh;
  opacity: .9;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

.acordion-active {
  color: white;
  border-radius: 5px;
  background: #E271A0; //main-20%
  width: 60vw;
  height: 7vh;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
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
  opacity: 0;
}
</style>
