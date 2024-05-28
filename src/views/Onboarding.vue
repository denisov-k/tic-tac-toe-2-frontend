<template>
  <main>
    <greetings></greetings>
    <inline-svg :src="require('@/assets/images/home/cube.svg')" class="icon" />
    <choose-team></choose-team>
  </main>
</template>

<script>
  import ChooseTeam from "@/components/Onboarding/ChooseTeam";
  import Greetings from "@/components/Onboarding/Greetings.vue";

  export default {
    name: "Onboarding",
    components: {
      Greetings,
      ChooseTeam
    },
    data() {
      return {}
    },
    created() {

    },
    methods: {}
  }
</script>

<style scoped>
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
    flex: auto;
    justify-content: center;
    overflow-y: auto;
    box-sizing: border-box;
    width: 100%;
  }
  svg.icon {
    height: 360px;
    width: 360px;
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