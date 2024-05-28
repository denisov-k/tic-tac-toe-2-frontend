<template>
  <div id="stats">
    <span class="first-team">{{ firstTeam }}</span>
    <inline-svg :src="require('@/assets/images/home/blue-score.svg')" class="icon" />
    <span> vs </span>
    <inline-svg :src="require('@/assets/images/home/red-score.svg')" class="icon" />
    <span class="second-team">{{ secondTeam }}</span>
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
        let team = this.stats.find(item => item.team === 'blue')
        return team ? team.total_balance : 0
      },
      secondTeam() {
        let team = this.stats.find(item => item.team === 'red')
        return team ? team.total_balance : 0
      }
    }
  }
</script>

<style scoped>
  #stats {
    font-size: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .first-team {
    color: #3BADFF;
  }
  .second-team {
    color: #FF0A47;
  }
  svg.icon {
    width: 36px;
    height: 36px;
  }
</style>