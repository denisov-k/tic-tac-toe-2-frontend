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
        this.$refs['animation'].show(team);
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
    background: linear-gradient(240deg, #186219, #21306b, #1a131b, #000000);
    background-size: 150% 140%;
    animation: gradient-animation-65563b56 15s ease infinite;
  }
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  svg.icon {
    width: auto;
    height: 37.5vh;
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