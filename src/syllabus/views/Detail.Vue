<template>
<div id="s_detail">

  <div class="orange_wrapper">
    <div class="orange_container">
      <div class="header l-1">
        WADAI SYLLABUS
      </div>
      <div class="title u-mt10 l-1">
        {{ details[0].title }}
      </div>
    </div>
  </div>

  <div class="u-mt10"> {{ message }} </div>
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
    if(this.$route.params.title != null) {
      this.message = this.$route.params.title; //データ受け取り
    }
    console.log(this.message);
    fb
    .collection("syllabus")
    .orderBy("title")
    .startAt(this.message)
    .endAt(this.message + '\uf8ff')
    .get()
    .then(snap => {
      const array = [];
      snap.forEach(doc => {
        array.push(doc.data());
      });
      this.details = array
    });
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
  left: 5%;
  width: 80vw;
  font-size: 6vh;
  font-weight: 600;
}

</style>
