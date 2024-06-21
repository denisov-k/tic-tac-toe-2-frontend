<template>
  <main>
    <greetings></greetings>
    <inline-svg :src="require('@/assets/images/home/cube.svg')" class="icon" />
    <choose-team :after-click="showAnimation"></choose-team>
    <choose-team-animation ref="animation"></choose-team-animation>
  </main>
</template>

<script>
  import ChooseTeam from "@/components/Onboarding/ChooseTeam";
  import ChooseTeamAnimation from "@/components/Onboarding/ChooseTeamAnimation.vue";
  import Greetings from "@/components/Onboarding/Greetings.vue";

  export default {
    name: "Onboarding",
    components: {
      Greetings,
      ChooseTeam,
      ChooseTeamAnimation
    },
    data() {
      return {}
    },
    created() {

    },
    methods: {
      showAnimation(team) {
        return this.$refs['animation'].show(team);
      }
    }
  }
</script>

<style scoped>
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5vh 2vw;
    flex: auto;
    justify-content: center;
    overflow-y: auto;
    box-sizing: border-box;
    width: 100%;
    background-position: center;
    background-image: radial-gradient(circle at 50% -100%, #18621980 48%, hsla(0, 0%, 0%, 0.5) 70%), radial-gradient(circle at 51% 101%, #ff60ef80 20%, hsla(0, 0%, 0%, 0.5) 46%);
    animation: zoom-in-zoom-out 3s linear infinite;
  }
  @keyframes zoom-in-zoom-out {
    0% {
      background-size: 100% 100%;
    }
    50% {
      background-size: 100% 130%;
    }
    100% {
      background-size: 100% 100%;
    }
  }
  svg.icon {
    width: auto;
    height: 40vh;
    align-self: center;
  }
</style>

<i18n>
  {
    "en": {

    },
    "ru": {

    }
  }
</i18n>