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
        let team = this.stats.find(item => item.team === 'blue');
        const value = team ? team.total_balance : 0;
        return Number(value).toFixed(2);
      },
      secondTeam() {
        let team = this.stats.find(item => item.team === 'red')
        const value =  team ? team.total_balance : 0
        return Number(value).toFixed(2);
      }
    }
  }
</script>

<style scoped>
  #stats {
    font-size: 2.3vh;
    margin: 2.7vh 0;
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
    width: auto;
    height: 3.75vh;
  }
</style>