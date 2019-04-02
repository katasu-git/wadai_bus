<template>
<div id="s_result">
  <HeadParts></HeadParts>
  <div class="res_body u-mt8 l-justify-center">
    <div class="res_contents u-mt3 " v-for="data in sData" :key="data.id">
      <div class="major_circle_wrapper l-justify-center">
        <div :style="{ border : activeColor(data) }" class="major_circle l-justify-center">
          <div class="major_text d-1"> {{ data.major[0] }} </div>
        </div>
      </div>
      <div class="res_text_body">
        <span class="title d-1" v-on:click="routeToDetail(data)"> {{ data.title }} </span>
        <span class="time d-1"> {{ data.time }} </span>
        <div class="detail_text_wrapper d-2">
          <div class="detail_text"> {{ data.term }} </div>
          <div class="detail_text"> {{ data.target }} </div>
          <div class="detail_text"> {{ data.teacher }} </div>
        </div>
        <!--<img :src="link(data)" />-->
        <div class="border u-mt2"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeadParts from "../components/HeadParts.vue";
export default {
  name: 's_result',
  data () {
    return {
      sData: [],
      testMessage: "",
      avoid: ""
    }
  },
  created: function() {
    console.log( JSON.stringify(this.$route.params.message) );
    if(this.$route.params.message != null) {
      this.testMessage = this.$route.params.message; //データ受け取り
    }
    //console.log(this.testMessage);
    //firebase.firestore()
    fb
    .collection("syllabus")
    //.where("title", "==", "マクロ経済学")
    .orderBy("title")
    .startAt(this.testMessage)
    .endAt(this.testMessage + '\uf8ff')
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
        return 'solid 2px orange';
      } else if(data.major[0] === "シ") {
        return 'solid 2px yellowgreen';
      } else if(data.major[0] === "観") {
        return 'solid 2px pink';
      }
    },
    routeToDetail: function(data) {
      this. avoid = JSON.stringify(data.title);
      this. avoid = data.title;
      //console.log("this.avoid = " + this.avoid);
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
    HeadParts: HeadParts,
  },
};
</script>

<style lang="scss" scoped>

.res_body {
  flex-direction: column;
}

.res_contents {
  display: flex;
  width: 90%;
  max-width: 375px;
  height: 12vh; 
  min-height: 80px;
  max-height: 120px;
  position: relative;
}

.major_circle_wrapper {
  width: 25%;
  min-width: 60px;
}

.major_circle {
  position: absolute;
  top: 0;
  margin: 5px 0 0 0;
  width: 7vh;
  height: 7vh;
  max-width: 80px;
  max-height: 80px;
  min-width: 60px;
  min-height: 60px;
  border: solid 2px rgba(0,0,0,0.87);
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
}

.title {
  font-size: 1.3em;
  font-weight: 600;
}

.time {
  position: absolute;
  right: 0;
  top: 0;
  margin: 2px 10px 0 0;
  font-weight: 600;
}

.detail_text_wrapper {
  display: flex;
}

.detail_text {
  margin: 0 10px 0 0;
}


</style>
