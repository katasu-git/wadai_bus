<template>
<div id="s_detail">

  <div class="orange_wrapper" v-for="detail in details">
    <div class="orange_container">
      <div class="header l-1">WADAI SYLLABUS</div>
      <div :style="{ 'font-size' : activeFontSize(detail.title.length) }" class="title u-mt10 l-1">{{ detail.title }}</div>
    </div>
    <div class="wrapper">
      <div class="grid_wrapper">
        <div class="grid">
          <div class="content_title l-2">開講時期</div>
          <div class="content l-1"> {{ detail.term }} </div>
        </div>
        <div class="grid">
          <div class="content_title l-2">曜日</div>
          <div class="content l-1"> {{ detail.day }} </div>
        </div>
        <div class="grid">
          <div class="content_title l-2">学年</div>
          <div class="content l-1"> {{ detail.target }} </div>
        </div>
        <div class="grid">
          <div class="content_title l-2">取得単位</div>
          <div class="content l-1"> {{ detail.kazu }} </div>
        </div>
        <div class="grid">
          <div class="content_title l-2">教員</div>
          <div class="content l-1"> {{ detail.teacher }} </div>
        </div>
      </div>
      <div class="content_wrapper u-mt6">
        <div class="content_title l-2">教科書</div>
        <div class="Description u-mt2 l-1">
          {{ detail.text }}
        </div>
      </div>
      <div class="content_wrapper u-mt6">
        <div class="content_title l-2">成績評価</div>
        <div class="Description u-mt2 l-1">
          {{ detail.evaluation }}
        </div>
      </div>
      <div class="content_wrapper u-mt6">
        <div class="content_title l-2">履修上の注意</div>
        <div class="Description u-mt2 l-1">
          {{ detail.message }}
        </div>
      </div>
      <div class="content_wrapper u-mt6">
        <div class="content_title l-2">概要</div>
        <div class="Description u-mt2 l-1">
          {{ detail.overview }}
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
  name: 's_detail',
  data () {
    return {
        message: "マクロ経済学",
        details: [],
    }
  },
  created: function() {
    this.$nextTick(() => {
      if(this.$route.query.data != null) {
        this.message = this.$route.query.data; //データ受け取り

        fb
      .collection("syllabus-comp")
      //.orderBy("title")
      //.startAt(this.message)
      //.endAt(this.message + '\uf8ff')
      .where("title", "==", this.message)
      .get()
      .then(snap => {
        snap.forEach(doc => {
        this.details.push(doc.data());
        });
      });
      }
    })
  },
  methods: {
    activeFontSize: function(length) {
      if(length < 8) {
        return "3em";
      } else if (length < 14) {
        return "2.5em";
      } else {
        return "2em";
      }
    },
  },
  components: {
    RetTopBtn: RetTopBtn,
  }
};
</script>

<style lang="scss" scoped>

.orange_wrapper {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100vw;
  background-color: #EF8732;
  min-width: 320px;
}

.orange_container {
  position: absolute;
  height: 50%;
  width: 100vw;
  background-color: #EF8732;
}

.header {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 80vw;
  font-size: 3vh;
  font-weight: 600;
}

.title {
  position: absolute;
  top: 10%;
  left: 4.5%;
  width: 80vw;
  font-weight: 600;
}

.wrapper {
  position: absolute;
  top: 35%;
  left: 5%;
  height: 60%;
  width: 90vw;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

.grid_wrapper {
  width: 82%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid {
  width: 100%;
  height: 100%;
}

.content_title {
  font-size: 0.75em;
  height: 30%;
}

.content {
  height: 70%;
  white-space: nowrap;
  font-size: 1.3em;
  font-weight: 600;
}

.content_wrapper {
  width: 90%;
}

</style>
