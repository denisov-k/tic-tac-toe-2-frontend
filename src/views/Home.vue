<template>
  <main :class="userTeam === 'red' ? 'red': 'blue'">
    <user-info></user-info>
    <div class="header">
      <balance></balance>
      <protection :after-click="showProtectAnimation"></protection>
    </div>
    <teaser></teaser>
    <stats :stats="stats" v-if="stats"></stats>
    <blow-up :after-click="showBlowUpAnimation"></blow-up>
    <blow-up-animation ref="blow-up-animation" ></blow-up-animation>
    <protect-animation ref="protect-animation"></protect-animation>
  </main>
</template>

<script>

  import BlowUpAnimation from "@/components/Home/BlowUpAnimation";
  import UserInfo from "@/components/Home/UserInfo";
  import Balance from "@/components/Home/Balance";
  import BlowUp from "@/components/Home/BlowUp";
  import Teaser from "@/components/Home/Teaser";
  import Stats from "@/components/Home/Stats";
  import Service from "@/services/Service";
  import Protection from "@/components/Home/Protection.vue";
  import ProtectAnimation from "@/components/Home/ProtectAnimation.vue";

  export default {
    name: "Home",
    components: {
      ProtectAnimation,
      Protection,
      BlowUpAnimation,
      Stats,
      Teaser,
      BlowUp,
      UserInfo,
      Balance
    },
    data() {
      return {
        stats: [],
        service: null,
        interval: null
      }
    },
    mounted() {
      this.service = new Service();

      this.updateStats();
      this.interval = setInterval(this.updateStats, 5000);
    },
    destroyed() {
      clearInterval(this.interval);
    },
    methods: {
      updateStats() {
        this.service.transport.request(`game/balance`, null,
            (res) => {
              this.stats = res.data.teams;
              this.$store.commit('setBalance', res.data.user);
            },
            'get', {withCredentials: true })
      },
      showBlowUpAnimation() {
        this.$refs['blow-up-animation'].show();
      },
      showProtectAnimation() {
        this.$refs['protect-animation'].show();
      }
    },
    computed: {
      userTeam() {
        return this.$store.state.session.user.team;
      }
    }
  }
</script>

<style scoped>
  main.red {
    background-image: linear-gradient(210deg, #660029, #403909, #121316, #6e0a32);
  }
  main.blue {
    background-image: linear-gradient(210deg, #051929, #134d7e, #403909, #0c1a45, #0d448e);
  }
  main {
    display: flex;
    position: relative;
    flex-direction: column;
    flex: auto;
    justify-content: space-between;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    height: 100%;
    background-size: 200% 200%;
    animation: gradient-animation 30s ease infinite;
    padding: 1.5vh 2vw 12vh;
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
  .header {
    display: flex;
    width: calc(100% - 10px);
    align-items: center;
    padding-right: 15px;
    box-sizing: border-box;
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