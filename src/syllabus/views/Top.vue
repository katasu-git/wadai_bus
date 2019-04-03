<template>
<div id="s_top">

  <div class="orange_wrapper">
    <div class="orange_container">
      <div class="header l-1">
        <p>WADAI</p>
        <p>SYLLABUS</p>
      </div>
      <div class="searh_warpper">
        <div class="searchForm">
          <input v-on:keyup.enter="click" v-model="search" placeholder="講義の名前でさがす" class="searchForm-input" type="text">
          <button class="searchForm-submit"></button>
        </div>
      </div>
      <div v-show="showError" class="errorMessage l-1">
        科目名が空っぽですよ
      </div>
    </div>
    <div class="link l-1">
      空きコマ検索（COMING SOON）
    </div>
  </div>

</div>
</template>

<script>

export default {
  name: 's_top',
  data () {
    return {
      search:'',
      showError: false,
        /*btnData: {
          libOn: 0,
          ecoOn: 0,
          sysOn: 0,
          eduOn: 0,
          touOn: 0,
        },*/
    }
  },
  methods: {
    click: function() {
      if(this.judgeError) {
        this.showError = true;
      } else {
        this.showError = false;
        this.$router.push({
          name: 's_result',
          params: {
            message: this.search
          }
        })
      }
    }
  },
  computed: {
    judgeError: function() {
      if(this.search === "") {
        //空の時エラーを表示
        return true;
      } else {
        //空でなければエラー非表示
        return false;
      }
    }
  },
  /*components: {
    HeadParts: HeadParts,
    Department: Department,
  }*/
};
</script>

<style lang="scss" scoped>

.orange_wrapper {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100vw;
  background-color: #20526B;
}

.orange_container {
  position: relative;
  height: 50vh;
  width: 100vw;
  border: solid 0 #EF8732;
  border-radius: 0 0 0 60px;
  background-color: #EF8732;
}

.header {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80vw;
  font-size: 6vh;
  font-weight: 600;
  /*background: black;*/
}

.searh_warpper {
  position: absolute;
  top: 60%;
  left: 10%;
  width: 80vw;
}

.errorMessage {
  position: absolute;
  bottom: 42%;
  left: 11.5%;
  /*text-align: center;*/
  width: 80vw;
}

.link {
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: auto;
  width: 80vw;
  text-align: center;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #B0501F;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #B0501F;
  border-radius: 100px;
  outline: none;
}

input::placeholder {
  color: rgba(255,255,255,0.30);
}

.searchForm {
  position: relative;
}
.searchForm-input {
  color: rgba(255,255,255,1.00);
  width: 100%;
}
.searchForm-submit {
  position: absolute;
  width: 39px;
  height: 39px;
  top: calc(50% - 19px);
  right: 0;
  border: solid 0 white;
  border-left: solid 1px rgba(255,255,255,0.30);
  border-radius: 0 100px 100px 0;
  background: #B0501F;
  outline: none;
}
.searchForm-submit::before {
  position: absolute;
  content: '';
  width: 12px;
  height: 12px;
  top: calc(50% - 9px);
  left: calc(50% - 9px);
  border-radius: 50%;
  box-shadow: 0 0 0 2px #fff;
}
.searchForm-submit::after {
  position: absolute;
  content: '';
  width: 6px;
  height: 5px;
  top: calc(50% + 6px);
  left: calc(50% + 2px);
  border-top: solid 2px #fff;
  transform: rotate(45deg);
}

</style>
