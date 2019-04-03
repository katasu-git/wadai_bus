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
    <div class="res_contents_wrapper">
      <div class="res_contents" v-for="data in sData" :key="data.id">
        <div class="major_circle_wrapper l-justify-center">
          <div class="major_circle l-justify-center">
            <div :style="{ color : activeColor(data) }" class="major_text l-1"> {{ data.major[0] }} </div>
          </div>
        </div>
        <div class="res_text_body">
          <div class="title l-1" v-on:click="routeToDetail(data)"> {{ data.title }} </div>
          <div class="detail_text_wrapper l-2">
            <div class="detail_text"> {{ data.time }} </div>
            <div class="detail_text"> {{ data.term }} </div>
            <div class="detail_text"> {{ data.target }} </div>
            <div class="detail_text"> {{ data.teacher }} </div>
          </div>
          <!--<img :src="link(data)" />-->
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
      receiveMessage: "",
      avoid: ""
    }
  },
  created: function() {
    console.log( JSON.stringify(this.$route.params.message) );
    if(this.$route.params.message != null) {
      this.receiveMessage = this.$route.params.message; //データ受け取り
    }
    fb
    .collection("syllabus")
    .orderBy("title")
    .startAt(this.receiveMessage)
    .endAt(this.receiveMessage + '\uf8ff')
    .get()
    .then(snap => {
      const array = [];
      snap.forEach(doc => {
        array.push(doc.data());
      });
      this.sData = array
    });
  },
  methods: {
    activeColor: function(data) {
      if(data.major[0] === "経") {
        return 'orange';
      } else if(data.major[0] === "シ") {
        return 'yellowgreen';
      } else if(data.major[0] === "観") {
        return 'pink';
      }
    },
    routeToDetail: function(data) {
      this. avoid = data.title;
      this.$router.push({
        name: 's_detail',
        params: {
          title: this.avoid
        }
      })
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
  components: {
    RetTopBtn: RetTopBtn,
  },
};
</script>

<style lang="scss" scoped>

#s_result {
  background-color: #EF8732;
  height: 100%;
}

.res_body {
  background-color: #EF8732;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  margin: auto;
  height: 75vh;
  min-width: 320px;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
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
  margin: 3vw;
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
  font-size: 1.5em;
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
  border-bottom: solid 2px rgba(255,255,255,0.30);
}

.title {
  font-size: 2em;
  font-weight: 600;
}

.detail_text_wrapper {
  display: flex;
  font-size: 0.9em;
  font-weight: 600;
}

.detail_text {
  margin: 0 6px 0 4px;
}

.orange_wrapper {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100vw;
  background-color: #EF8732;
  min-width: 320px;
}

.orange_container {
  position: relative;
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
  font-weight: 600;
}

</style>
