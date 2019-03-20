<template>
<div id="s_result">
  <HeadParts></HeadParts>
  <div class="res_body u-mt10">
    <div class="res_contents u-mt5" v-for="data in sData" >
      <p>{{ data["target"] }}</p>
      <p>{{ data.teacher }}</p>
      <p>{{ data.title }}</p>
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
      sData: []
    }
  },
  created: function() {
    firebase.firestore()
    .collection("syllabus")
    //.where("target", "==", "")
    .get()
    .then(snap => {
      const array = [];
      snap.forEach(doc => {
        //array.push(doc.data().time);
        array.push(doc.data());
      });
      this.sData = array
    })
  },
  components: {
    HeadParts: HeadParts,
  }
};
</script>

<style lang="scss" scoped>
</style>
