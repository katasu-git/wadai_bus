<template>
  <div id="returnTop" v-on:click="returnToTop">
    <div class="wrapper">
    <svg  class="search_icon" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
      <g>
	      <path d="M495.272,423.558c0,0-68.542-59.952-84.937-76.328c-24.063-23.938-33.69-35.466-25.195-54.931
		        c37.155-75.78,24.303-169.854-38.72-232.858c-79.235-79.254-207.739-79.254-286.984,0c-79.245,79.264-79.245,207.729,0,287.003
		        c62.985,62.985,157.088,75.837,232.839,38.691c19.466-8.485,31.022,1.142,54.951,25.215c16.384,16.385,76.308,84.937,76.308,84.937
		        c31.089,31.071,55.009,11.95,69.368-2.39C507.232,478.547,526.362,454.638,495.272,423.558z M286.017,286.012
		        c-45.9,45.871-120.288,45.871-166.169,0c-45.88-45.871-45.88-120.278,0-166.149c45.881-45.871,120.269-45.871,166.169,0
	    	    C331.898,165.734,331.898,240.141,286.017,286.012z">
        </path>
      </g>
    </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'retTopBtn',
  data () {
    return {
    }
  },
  methods: {
    returnToTop: function() {
      console.log("hellow");
      this.$router.push({ path: 'top' });
  },
  }
};
</script>

<style lang="scss" scoped>

#returnTop {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30vw;
  height: 10vh;
  margin: 0;
  padding: 0;
  border: solid 0 wihte;
  border-radius: 100px 0 0 0;
  background: #A3B800;
}

#returnTop:hover {
  opacity: 0.7;
}

.search_icon {
  position: absolute;
  top: 0;
  right: 0;
  left: 15%;
  bottom: 0;
  margin: auto;
  width: 15vw;
  height: 5vh;
  fill: white;
}

</style>

