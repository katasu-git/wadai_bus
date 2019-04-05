<template>
<div id="s_result">
  <div class="orange_wrapper">
    <div class="orange_container">
      <div class="header l-1">
        <p>WADAI</p>
        <p>SYLLABUS</p>
      </div>
    </div>
  </div>
  <div class="res_body">
    <!-- 検索結果がない場合 -->
    <div v-if="tunaFlag" class="errorMessage" v-cloak>
      <img v-on:click="wakeTuna" alt="マグロ" class="tuna" src="../../assets/tuna.svg" />
      <div class="tunaSerif l-2" v-show="tunaSerifFlag">I'm Tuna !!</div>
      <div class="errorText">
        <div class="notFond l-1">検索結果がありません</div>
        <div class="u-mt1 l-2">代わりにマグロをお楽しみください</div>
      </div>
    </div>
    <div v-else class="res_contents_wrapper">
      <div class="res_contents" v-for="data in sData" :key="data.id">
        <div class="major_circle_wrapper l-justify-center">
          <div class="major_circle l-justify-center">
            <div :style="{ color : activeColor(data) }" class="major_text l-1"></div>
          </div>
        </div>
        <div class="res_text_body">
          <div class="title l-1" :style="{ 'font-size' : activeFontSize(data.title.length) }" v-on:click="routeToDetail(data)"> {{ data.title }} </div>
          <div class="detail_text_wrapper l-2 u-mt2">
            <div class="detail_text"> {{ data.day }} </div>
            <div class="detail_text"> {{ data.term }} </div>
            <div class="detail_text"> {{ data.target }} </div>
            <div class="detail_text"> {{ data.teacher }} </div>
          </div>
          <!--<img :src="link(data)" />-->
          <div class="border_white u-mt3"></div>
        </div>
      </div>
    </div>
  </div>
  <RetTopBtn></RetTopBtn>
</div>
</template>

<script>
import RetTopBtn from "../components/RetTopBtn.vue";
export default {
  name: 's_result',
  data () {
    return {
      sData: [],
      receiveMessage: "dmaskdalk",
      avoid: "",
      tunaFlag: false,
      tunaSerif: '',
      tunaSerifFlag: false,
    }
  },
  created: function() {
    //console.log( JSON.stringify(this.$route.params.message) );
    this.$nextTick(() => {
      if(this.$route.params.message != null) {
        this.receiveMessage = this.$route.params.message; //データ受け取り
      }
      if(this.$route.params.judge == "top") {
        fb
        .collection("syllabussyoudai")
        .orderBy("title")
        .startAt(this.receiveMessage)
        .endAt(this.receiveMessage + '\uf8ff')
        .get()
        .then(snap => {
          const array = [];
          snap.forEach(doc => {
            array.push(doc.data());
            //console.log(array);
          });
          this.sData = array
        });
      } else {
          fb
          .collection("syllabussyoudai")
          .orderBy("day")
          .startAt(this.receiveMessage)
          .endAt(this.receiveMessage + '\uf8ff')
          .get()
          .then(snap => {
            const array = [];
            snap.forEach(doc => {
              array.push(doc.data());
              //console.log(array);
            });
            this.sData = array
          });
      }
    })
  },
  methods: {
    activeColor: function(data) {
      /*if(data.major[0] === "経") {
        return 'skyblue';
      } else if(data.major[0] === "シ") {
        return 'yellowgreen';
      } else if(data.major[0] === "観") {
        return 'pink';
      } else if(data.major[0] === "教") {
        return 'brown';
      } else {
        return 'darkgray';
      }*/
      return "darkgray";
    },
    activeFontSize: function(length) {
      if(length < 8) {
        return "2em";
      } else if (length < 14) {
        return "1.5em";
      } else {
        return "1.2em";
      }
    },
    routeToDetail: function(data) {
      this. avoid = data.title;
      let routeData = this.$router.resolve({
        name: 's_detail',
        query: {
          data: this.avoid
        }
      });
      window.open(routeData.href, '_blank');
    },
    wakeTuna: function() {
      if(this.tunaSerifFlag) {
        this.tunaSerifFlag = false;
      } else {
        this.tunaSerifFlag = true;
      }
    },
    /*link: function(data) {
      if(data.major[0] === "経") {
        return require("../../assets/mikan.png");
      } else if(data.major[0] === "シ") {
        return require("../../assets/logo.png");
      } else if(data.major[0] === "観") {
        return require("../../assets/mikan.png");
      }
    }*/
  },
  updated: function() {
    this.$nextTick(() => {
      //console.log(JSON.stringify(this.sData));
      if(this.sData == "") {
        this.tunaFlag = true;
      } else {
        this.tunaFlag = false;
      }
    })
  },
  components: {
    RetTopBtn: RetTopBtn,
  },
};
</script>

<style lang="scss" scoped>

#s_result {
  background-color: #EF8732;
}

.res_body {
  background-color: #EF8732;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 70%;
  min-width: 320px;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

.res_contents_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.res_contents {
  display: flex;
  width: 90%;
  max-width: 375px;
  height: 12vh; 
  min-height: 80px;
  max-height: 120px;
  margin-bottom: 4em;
  position: relative;
}

.major_circle_wrapper {
  width: 25%;
  min-width: 60px;
}

.major_circle {
  position: absolute;
  top: 0;
  margin: 10px 0 0 0;
  width: 7vh;
  height: 7vh;
  max-width: 80px;
  max-height: 80px;
  min-width: 60px;
  min-height: 60px;
  background: white;
  border: solid 0 rgba(0,0,0,0.87);
  border-radius: 100px;
}

.major_text {
  font-size: 2em;
  font-weight: 600;
}

.res_text_body {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 75%;
  min-width: 160px;
  padding: 0 0 0 1em;
}

.title {
  font-size: 1.8em;
  font-weight: 600;
}

.detail_text_wrapper {
  display: flex;
  font-size: 0.9em;
  font-weight: 500;
}

.detail_text {
  margin: 0 9px 0 3px;
}

.orange_wrapper {
  position: absolute;
  top: 0;
  width: 100vw;
  background-color: #EF8732;
  min-width: 320px;
}

.orange_container {
  position: absolute;
  height: 50vh;
  width: 100vw;
  background-color: #EF8732;
}

.header {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80vw;
  font-size: 6vh;
  font-weight: 900;
}

.errorMessage {
  position: absolute;
  top: -5%;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tuna {
  width: 40vh;
  max-width: 450px;
  min-width: 150px;
}

.errorText {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.notFond {
  font-size: 1.9em;
  font-weight: 600;
}

.tunaSerif {
  position: absolute;
  top: 5%;
  right: 20%;
}

</style>
