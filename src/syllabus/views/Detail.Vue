<template>
<div id="s_detail">

  <HeadParts></HeadParts>
  <div class="u-mt10"> {{ message }} </div>
  <div class="res_contents u-mt3 " v-for="detail in details" :key="detail.id">
    {{ detail }}
  </div>

</div>
</template>

<script>
import HeadParts from "../components/HeadParts.vue";

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
    HeadParts: HeadParts,
  }
};
</script>

<style lang="scss" scoped>

</style>
