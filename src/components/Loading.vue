<template>
  <div class="loading-screen">
    <lottie :animation-data="require('@/assets/images/home/blow_up_loading.json')"
            class="animation" :loop="true" :auto-play="true"></lottie>
  </div>
</template>

<script>
  export default {
    name: "Loading",
    components: {

    },
    computed: {

    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>
  .loading-screen {
    display: flex;
    padding: 1.5vh 2vw 12vh;
    position: absolute;
    left: 0; right: 0; top:0; bottom: 0;
  }
  .animation >>> path {
    stroke: #1b1b1b;
  }
</style>
