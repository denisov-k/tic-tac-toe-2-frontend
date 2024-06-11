<template>
  <div id="blow-up-animation" v-if="isShowing">
    <lottie :animation-data="animationPath" :loop="false" @AnimControl="setAnimController"></lottie>
  </div>
</template>

<script>
  export default {
    name: "InviteFrame",
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
      setAnimController(controller) {
        controller.addEventListener('complete', (data) => {
          this.isShowing = false;
        })
      }
    }
  }
</script>

<style scoped>
  #blow-up-animation {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
