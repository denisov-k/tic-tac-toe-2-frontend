<template>
  <div id="stats">
    <span class="first-team">{{ firstTeam }}</span> vs <span class="second-team">{{ secondTeam }}</span>
  </div>
</template>

<script>
  import Service from "@/services/Service";

  export default {
    name: "Stats",
    data() {
      return {
        stats: [],
        service: null
      }
    },
    mounted() {
      this.service = new Service();

      this.updateStats();
      setInterval(this.updateStats, 5000);
    },
    methods: {
      updateStats() {
        this.service.transport.request(`transactions/teams_balance`, null,
          (res) => {
            this.stats = res.data;
          },
          'get', {withCredentials: true })
      }
    },
    computed: {
      firstTeam() {
        let team = this.stats.find(item => item.team === 'red')
        return team ? team.total_balance : 0
      },
      secondTeam() {
        let team = this.stats.find(item => item.team === 'blue')
        return team ? team.total_balance : 0
      }
    }
  }
</script>

<style scoped>
  #stats {
    font-size: 24px;
    font-weight: 600;
    padding: 20px;
  }
  .first-team {
    color: #ef1212;
  }
  .second-team {
    color: #0079cd;
  }
</style>