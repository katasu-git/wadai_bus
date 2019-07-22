<template>
  <div id="selector">
    <div class="btn_wrapper l-justify-center" v-on:click="wakeRoute">
      <div v-if="acr" class="btn_text l-justify-center l-1">
        {{getGoOrBack}}
      </div>
      <div v-else class="btn_text l-justify-center l-1">
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
      acr: false,
      flag: false, //true=帰る　false=行く
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
    wakeRoute: function() {
      if(this.flag == false) {
        //帰るボタン
        if(this.routeNum === 0 || this.routeNum === 1){
          this.toggle();
        } else if(this.routeNum === 0 || this.routeNum === 2) {
          //今いるページが南海のとき
          this.$router.push({ path: '/' });
        } else {
          this.$router.push({ path: 'timetable1' });
        }
      } else {
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
  },
  computed: {
    getGoOrBack: function() {
      if(this.routeNum === 0 || this.routeNum === 1) {
        this.flag = true;
        return "大学から帰る";
      } else {
        this.flag = false;
        return "大学に行く";
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
