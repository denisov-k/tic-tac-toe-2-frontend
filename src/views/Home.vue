<template>
  <main>
    <user-info></user-info>
    <claim></claim>
  </main>
</template>

<script>

  import UserInfo from "@/components/Home/UserInfo";
  import Claim from "@/components/Home/Claim";
  export default {
    name: "Home",
    components: {
      Claim,
      UserInfo

    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>
  main {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    flex: auto;
    justify-content: space-between;
    align-items: center;
  }
</style>

<i18n>
  {
    "en": {
      "playWithHuman": "Play",
      "playWithComputer": "Play with computer",
      "cancelSearch": "Cancel search"
    },
    "ru": {
      "playWithHuman": "Играть",
      "playWithComputer": "Играть с компьютером",
      "cancelSearch": "Отменить поиск"
    }
  }
</i18n>