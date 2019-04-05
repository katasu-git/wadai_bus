<template>
<div id="s_top">

  <div class="orange_wrapper">
    <div class="orange_container">
      <div class="header l-1">
        <p>WADAI</p>
        <p>SYLLABUS</p>
      </div>
      <div class="neko_wrapper">
        <img class="neko" alt="neko_img" src="../../assets/neko.png" />
      </div>
      <div class="searh_warpper">
        <div class="searchForm">
          <input v-on:keyup.enter="click" v-model="search" placeholder="授業の名前でさがす" class="searchForm-input" type="text">
          <!--検索アイコン-->
          <svg  class="search_icon" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
            <g>
	          <path d="M495.272,423.558c0,0-68.542-59.952-84.937-76.328c-24.063-23.938-33.69-35.466-25.195-54.931
		          c37.155-75.78,24.303-169.854-38.72-232.858c-79.235-79.254-207.739-79.254-286.984,0c-79.245,79.264-79.245,207.729,0,287.003
		          c62.985,62.985,157.088,75.837,232.839,38.691c19.466-8.485,31.022,1.142,54.951,25.215c16.384,16.385,76.308,84.937,76.308,84.937
		          c31.089,31.071,55.009,11.95,69.368-2.39C507.232,478.547,526.362,454.638,495.272,423.558z M286.017,286.012
		          c-45.9,45.871-120.288,45.871-166.169,0c-45.88-45.871-45.88-120.278,0-166.149c45.881-45.871,120.269-45.871,166.169,0
	    	      C331.898,165.734,331.898,240.141,286.017,286.012z">
            </path>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div v-show="judgeError" class="errorMessage l-1">科目名を入力してください!!</div>
    <div v-on:click="goToLink" class="link l-3">
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
      search: "",
      enterKeyFlag: false,
    }
  },
  methods: {
    click: function() {
      this.enterKeyFlag = true;
      if(this.judgeError == false) {
        this.$router.push({
          name: 's_result',
          params: {
            message: this.search,
            judge: 'top'
          }
        })
      }
    },
    goToLink: function() {
      this.$router.push({
          name: 's_blanksearch',
      })
    },
  },
  computed: {
    judgeError: function() {
      if(this.search == "" && this.enterKeyFlag) {
        return true;
      } else {
        return false;
      }
    }
  },
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
  font-weight: 900;
  white-space: nowrap;
}

.neko_wrapper {
  position: absolute;
  top: 8%;
  right: 8%;
}

img {
  width: 48px;
}

.searh_warpper {
  position: absolute;
  top: 60%;
  left: 10%;
  width: 80vw;
}

.errorMessage {
  position: absolute;
  bottom: 30%;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
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
  text-align: center;
}

::-webkit-input-placeholder {
  text-align:center;
  color: rgba(255,255,255,0.30);
}

:-moz-placeholder { /* Firefox 18- */
  text-align:center;
  color: rgba(255,255,255,0.30);
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align:center;
   color: rgba(255,255,255,0.30);
}

:-ms-input-placeholder {
  text-align:center;
  color: rgba(255,255,255,0.30);
}

.searchForm {
  position: relative;
}

.search_icon {
  position: absolute;
  top: 0;
  left: 12%;
  bottom: 0;
  margin: auto;
  width: 16px;
  color: rgba(255,255,255,0.30);
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
