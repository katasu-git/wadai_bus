<template>
  <div id="fab">

    <transition name="fade">
    <div v-show="showSelector" class="balloon1 d-1">
      <div v-on:click="wakeRoute" class="routeName l-justify-center">南海</div>
      <div class="border"></div>
      <div v-on:click="wakeRoute2" class="routeName l-justify-center">JR</div>
    </div>
    </transition>

    <div class="l-fab">

      <svg v-if="changer" v-on:click="openSelector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 48.52">
        <path d="M24.61 10.88v11.44c0 5.24-2.91 11.68-6.61 15.32L7.94 27.56" fill="#f30"/>
        <path d="M25.39 10.88v11.44c0 5.24 2.91 11.68 6.61 15.32l10.06-10.08" fill="#f90"/>
      </svg>

      <svg v-else v-on:click="openSelector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 48.52">
        <ellipse cx="25" cy="24.26" rx="25" ry="24.26" fill="#fff"/>
        <path d="M9.07 22.53h4.34v5.28C13.41 29 16.36 29 17 29s4.42 0
            4.42-1.54V15.63h16.11c2.88 0 3.39 4.1 3.39 5.16s-.47 5.52-3.15
              5.52h-1.68l4.84 6.08H35.5l-7.86-9.86h8.16c.94 0 1-1.31
                1-1.58s0-1.42-1-1.42H25.71v8.75c0 3.86-6.07 4.61-8.36 4.61-3.15
                  0-8.28-1.06-8.28-4.33v-6"/>
      </svg>

    </div>
  </div>
</template>

<script>
export default {
  name: "fab",
  data() {
    return {
      showSelector: false,
    }
  },
  props: {
    routeNum: Number
  },
  methods: {
    wakeRoute: function() {
      this.showSelector = false;
      if(this.routeNum === 0 || this.routeNum === 1) {
        this.$router.push({ path: '/' });
      } else {
        this.$router.push({ path: '/timetable2' });
      }
    },
    wakeRoute2: function() {
      this.showSelector = false;
      if(this.routeNum === 0 || this.routeNum === 1) {
        this.$router.push({ path: '/timetable1' });
      } else {
        this.$router.push({ path: '/timetable3' });
      }
    },
    openSelector: function() {
      if(this.showSelector) {
        this.showSelector = false;
      } else {
        this.showSelector = true;
      }
      //console.log("hello");
    },
  },
  computed: {
    changer: function() {
      if(this.routeNum === 0 || this.routeNum === 2) {
        //南海
        return true;
      } else {
        //JR
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.l-fab {
  position: absolute;
  left: 10%;
  bottom: 5.2%;
  border-radius: 200px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 2px 2px 0 rgba(0,0,0,0.24);
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

.l-fab:hover {
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
}

svg {
  height: 8vh;
}

.balloon1 {
  position: absolute;
  bottom: 14%;
  left: 12.4%;
  display: inline-block;
  margin: 1.5em 0;
  padding: 7px 10px;
  min-width: 160px;
  max-width: 100%;
  height: 20vh;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.routeName {
  font-size: 1.6em;
  font-weight: 600;
}

.routeName:active {
  color: rgba(0,0,0,0.26);
}

.border {
  margin: 1em 0;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
