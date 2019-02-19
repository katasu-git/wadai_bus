<template>
  <div id="top">
    <Home v-if="!isLogin"></Home>
    <Editor v-if="isLogin" :user="userData"></Editor>
    <div class="l-justify-center u-mt3">
      <router-link :to="{ name: 'terms' }" >バスアプリはここをクリック</router-link>
    </div>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import Editor from "../components/Editor.vue";

export default {
  name: 'top',
  data () {
    return {
      isLogin: false,
      userData: null
    };
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      //console.log(user);
      if(user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    })
  },
  components: {
    Home: Home,
    Editor: Editor
  }
};
</script>

<style lang="scss">
#top {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
