<template>
  <main :class="userTeam === 'red' ? 'red': 'blue'">
    <user-info></user-info>
    <balance></balance>

    <teaser></teaser>
    <stats :stats="stats" v-if="stats"></stats>
    <blow-up :after-click="showAnimation"></blow-up>
    <blow-up-animation ref="animation"></blow-up-animation>
    <slot name="footer"></slot>
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

  export default {
    name: "Home",
    components: {
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
      showAnimation() {
        this.$refs['animation'].isShowing = true;
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
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: auto;
    justify-content: space-between;
    align-items: center;
    background-size: 200% 200%;
    animation: gradient-animation 40s ease infinite;
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  main.red {

    background: linear-gradient(210deg, #660029, #403909, #121316, #6e0a32);
  }
  main.blue {

    background: linear-gradient(210deg,  #134d7e, #403909, #121316, #0d448e);
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