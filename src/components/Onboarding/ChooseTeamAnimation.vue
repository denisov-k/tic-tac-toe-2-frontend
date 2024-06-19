<template>
  <div id="choose-team-animation" v-show="isShowing">
    <lottie ref="animation" v-if="isShowing" :animation-data="animationPath" :loop="false"
            :auto-play="false" @complete="hide" class="animation"></lottie>
  </div>
</template>

<script>
  export default {
    name: "ChooseTeamAnimation",
    components: {

    },
    data() {
      return {
        isShowing: false,
        animationPath: require('@/assets/images/home/home_red_arrow.json')
      }
    },
    mounted() {

    },
    methods: {
      show(team) {
        console.log(team)
        this.animationPath = team === 'red' ? require('@/assets/images/onboarding/red_team_change.json')
           : require('@/assets/images/onboarding/blue_team_change.json')

        this.isShowing = true;

        this.$nextTick().then(() => {
          this.$refs.animation.anim.goToAndPlay(0, true);
        })
      },
      hide() {
        //this.isShowing = false;
      }
    }
  }
</script>

<style scoped>
  #choose-team-animation {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #0000009e;
  }
  .animation {
    margin-left: 30%;
    margin-right: 30%;
  }
</style>
