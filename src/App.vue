<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #FAFAFA;
  color: rgba(#374149, .87);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
