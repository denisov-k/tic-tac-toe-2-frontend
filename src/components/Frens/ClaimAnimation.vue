<template>
  <div id="claim-animation" v-if="isShowing">
    <lottie :animation-data="require('@/assets/images/frens/claim_animation.json')" :loop="false" @AnimControl="setAnimController"></lottie>
  </div>
</template>

<script>

  export default {
    name: "InviteFrame",
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
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
