<template>
  <div :class="userTeam === 'red' ? 'red': 'blue'">
    <main>
      <user-info></user-info>
      <balance></balance>

      <teaser></teaser>
      <stats :stats="stats" v-if="stats"></stats>
      <blow-up :after-click="showAnimation"></blow-up>
      <blow-up-animation ref="animation" ></blow-up-animation>
    </main>
    <slot name="footer"></slot>
  </div>
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
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-size: 200% 200%;
    animation: gradient-animation 30s ease infinite;
    justify-content: space-between;
    padding: 1.5vh 2vw;
    box-sizing: border-box;
  }
  .content.red {
    background-image: linear-gradient(210deg, #660029, #403909, #121316, #6e0a32);
  }
  .content.blue {
    background-image: linear-gradient(210deg, #051929, #134d7e, #403909, #0c1a45, #0d448e);
  }
  main {
    display: flex;
    flex-direction: column;
    flex: auto;
    justify-content: space-between;
    overflow-y: auto;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
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