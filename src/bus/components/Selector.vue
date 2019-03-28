<template>
  <div id="selector">
    <div class="btn_wrapper l-justify-center">
      <div v-if="acr" v-on:click="wakeRoute" class="btn_text l-justify-center l-1">
        {{getGoOrBack}}
      </div>
      <div v-else v-on:click="wakeRoute2" class="btn_text l-justify-center l-1">
        {{getGoOrBack}}
      </div>
    </div>
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
    route: String,
    routeNum: Number
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
    },
    wakeRoute: function() {
      //帰るボタン
      if(this.routeNum === 0 || this.routeNum === 1){
        this.toggle();
      } else if(this.routeNum === 0 || this.routeNum === 2) {
        //今いるページが南海のとき
        this.$router.push({ path: '/' });
      } else {
        this.$router.push({ path: 'timetable1' });
      }
    },
    wakeRoute2: function() {
      //行くボタン
      if(this.routeNum === 2 || this.routeNum === 3){
        this.toggle();
      } else if(this.routeNum === 0 || this.routeNum === 2) {
        //今いるページが南海のとき
        this.$router.push({ path: 'timetable2' });
      } else {
        this.$router.push({ path: 'timetable3' });
      }
    }
  },
  computed: {
    getGoOrBack: function() {
      if(this.routeNum === 0 || this.routeNum === 1) {
        return "下校";
      } else {
        return "登校";
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.btn_wrapper {
  border: solid .5px rgba(0,0,0,0.26);
  border-radius: 50px;
  background: #16B2B2;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  margin: 3px 0;
  width: 70vw;
  height: 8vh;
  max-width: 220px;
  max-height: 70px;
}

.btn_wrapper:active {
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
}

.btn_text {
  font-weight: 600;
  font-size: 1.2em;
}

</style>
