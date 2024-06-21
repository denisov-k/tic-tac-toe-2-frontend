<template>
  <div id="claim-animation" v-show="isShowing">
    <lottie :animation-data="require('@/assets/images/frens/claim_animation.json')"
            ref="animation" :loop="false" :auto-play="false" @complete="hide"></lottie>
  </div>
</template>

<script>

  export default {
    name: "ClaimAnimation",
    components: {

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
      show() {
        this.isShowing = true;
        this.$refs.animation.anim.goToAndPlay(0, true);
      },
      hide() {
        this.isShowing = false;
      }
    }
  }
</script>

<style scoped>
  #claim-animation {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
