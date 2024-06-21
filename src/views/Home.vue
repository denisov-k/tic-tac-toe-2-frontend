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
  import Balance from "@/components/Home/UserBalance.vue";
  import BlowUp from "@/components/Home/BlowUp";
  import Teaser from "@/components/Home/Teaser";
  import Stats from "@/components/Home/TeamBalance.vue";
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
    background-size: 100% 100%, 100% 100%;
    /*animation: zoom-in-zoom-out 1s ease infinite;*/
    padding: 1.5vh 2vw 12vh;
    animation: zoom-in-zoom-out 3s linear infinite;
    background-position: center;
  }

  main.blue {
    background-image: radial-gradient(circle at 50% -100%, hsl(202.71deg 67.39% 40.27% / 50%) 48%, hsla(0, 0%, 0%, 0.5) 70%), radial-gradient(circle at 50% 100%, hsl(202.71deg 84.42% 37.74% / 50%) 25%, hsla(0, 0%, 0%, 0.5) 50%);
  }
  main.red {
    background-image: radial-gradient(circle at 50% -100%, #FF0A4780 48%, hsla(0, 0%, 0%, 0.5) 70%), radial-gradient(circle at 50% 100%, #FF0A4780 20%, hsla(0, 0%, 0%, 0.5) 46%);
  }
  .header {
    display: flex;
    width: calc(100% - 10px);
    align-items: center;
    padding-right: 2vw;
    box-sizing: border-box;
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