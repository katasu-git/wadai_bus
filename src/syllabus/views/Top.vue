<template>
<div id="s_top">

  <HeadParts></HeadParts>
  <div class="l-justify-center u-mt10">
    <Department v-model="btnData"></Department>
  </div>
  <div class="searchBar u-mt5 u-width090">
    <!-- search に入力された値が格納される -->
    <!--<el-input v-model="search" placeholder="科目名で検索" clearable>
      <!--<el-button slot="append" v-on:click="wakeRouter" icon="el-icon-search"></el-button>
    </el-input>-->
  </div>
  <div> {{ btnData }} </div>
  <input type="text" v-model="text">
  {{ text }}
  <button v-on:click="click">押してね</button>

</div>
</template>

<script>
import HeadParts from "../components/HeadParts.vue";
import Department from "../components/Department.vue";
//import EventBus from "../components/EventBus.js";

export default {
  name: 's_top',
  data () {
    return {
        btnData: {
          libOn: 0,
          ecoOn: 0,
          sysOn: 0,
          eduOn: 0,
          touOn: 0,
        },
        search:'',
        text:"初期テキスト"
    }
  },
  methods: {
    click: function() {
      this.$router.push({
        name: 's_result',
        params: {
          message: this.text
        }
      })
    }
  },
  components: {
    HeadParts: HeadParts,
    Department: Department,
  }
};
</script>

<style lang="scss" scoped>

.searchBar {
  position: absolute;
  left: 5%;
}

</style>
