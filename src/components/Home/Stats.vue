<template>
  <div id="stats">
    <span class="first-team">{{ firstTeam }}</span><span> vs </span><span class="second-team">{{ secondTeam }}</span>
  </div>
</template>

<script>
  export default {
    name: "Stats",
    props: {
      stats: Array
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