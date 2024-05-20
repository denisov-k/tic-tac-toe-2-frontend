<template>
  <main>
    <user-info></user-info>
    <choose-team></choose-team>
  </main>
</template>

<script>
  import ChooseTeam from "@/components/Onboarding/ChooseTeam";
  import UserInfo from "@/components/Home/UserInfo";

  export default {
    name: "Onboarding",
    components: {
      UserInfo,
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
</style>

<i18n>
  {
    "en": {

    },
    "ru": {

    }
  }
</i18n>