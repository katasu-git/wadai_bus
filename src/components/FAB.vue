<template>
  <div id="fab">
    <div class="l-fab">


      <svg v-if="changer" v-on:click="wakeRoute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 48.52">
        <path d="M24.61 10.88v11.44c0 5.24-2.91 11.68-6.61 15.32L7.94 27.56" fill="#f30"/>
        <path d="M25.39 10.88v11.44c0 5.24 2.91 11.68 6.61 15.32l10.06-10.08" fill="#f90"/>
      </svg>

      <svg v-else v-on:click="wakeRoute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 48.52">
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
    return {}
  },
  props: {
    routeNum: Number
  },
  methods: {
    wakeRoute: function() {
      if(this.changer) {
        this.$router.push({ path: 'timetable1' });
      } else {
        this.$router.push({ path: 'timetable0' });
      }
    }
  },
  computed: {
    changer: function() {
      if(this.routeNum === 0 || this.routeNum === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.l-fab {
  position: absolute;
  right: 5%;
  bottom: 15%;
  border-radius: 50px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 2px 2px 0 rgba(0,0,0,0.24);
}

.l-fab:hover {
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
}

svg {
  width: 15vw;
}

</style>
