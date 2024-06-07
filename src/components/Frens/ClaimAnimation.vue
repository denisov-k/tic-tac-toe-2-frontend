<template>
  <div id="claim-animation" v-if="isShowing">
    <lottie-animation path="./claim_animation.json" :loop="false" @AnimControl="setAnimController"></lottie-animation>
  </div>
</template>

<script>
  import LottieAnimation from "lottie-vuejs/src/LottieAnimation";

  export default {
    name: "InviteFrame",
    components: {
      LottieAnimation
    },
    computed: {

    },
    data() {
      return {
        isShowing: false
      }
    },
    mounted() {

    },
    methods: {
      setAnimController(controller) {
        controller.addEventListener('complete', (data) => {
          this.isShowing = false;
        })
      }
    }
  }
</script>

<style scoped>
  #claim-animation {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-content: flex-end;
  }
</style>
