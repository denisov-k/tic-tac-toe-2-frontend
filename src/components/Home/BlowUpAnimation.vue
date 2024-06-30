<template>
  <div id="blow-up-animation" v-show="isShowing">
    <lottie ref="animation" :animation-data="animationPath" :loop="false"
            :auto-play="false" @complete="hide"></lottie>
  </div>
</template>

<script>
  export default {
    name: "BlowUpAnimation",
    components: {

    },
    computed: {
      animationPath() {
        return this.$store.state.session.user.team === 'red' ?
            require('@/assets/images/home/home_red_arrow.json') : require('@/assets/images/home/home_blue_arrow.json');
      }
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
  #blow-up-animation {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
  }
</style>
