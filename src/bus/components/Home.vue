<template>
  <div id="home">
    <div class="l-justify-center u-mt3">
      意味のないトップページ
    </div>
    <div class="l-justify-center u-mt3">
      <button @click="googleLogin">意味のないログイン</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to MyMarkdown"
    };
  },
  methods: {
    googleLogin: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
};
</script>
