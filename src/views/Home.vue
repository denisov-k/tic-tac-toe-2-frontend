<template>
  <main>
    <div class="header">
      <user-info></user-info>
      <balance></balance>
    </div>

    <teaser></teaser>
    <stats></stats>
    <blow-up></blow-up>
  </main>
</template>

<script>

  import UserInfo from "@/components/Home/UserInfo";
  import Balance from "@/components/Home/Balance";
  import BlowUp from "@/components/Home/BlowUp";
  import Teaser from "@/components/Home/Teaser";
  import Stats from "@/components/Home/Stats";
  export default {
    name: "Home",
    components: {
      Stats,
      Teaser,
      BlowUp,
      UserInfo,
      Balance
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
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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