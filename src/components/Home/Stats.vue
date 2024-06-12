<template>
  <div id="stats">
    <div class="first-team">{{ firstTeam }}</div>
    <inline-svg :src="require('@/assets/images/home/blue-score.svg')" class="icon" />
    <div> vs </div>
    <inline-svg :src="require('@/assets/images/home/red-score.svg')" class="icon" />
    <div class="second-team">{{ secondTeam }}</div>
  </div>
</template>

<script>
  export default {
    name: "Stats",
    data: () => {
      return {
        balances: []
      }
    },
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
    },
    methods: {
      animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = (progress * (end - start) + start).toFixed(3);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }
  }
</script>

<style scoped>
  #stats {
    font-size: 2.4vh;
    margin: 2.5vh 0;
    display: flex;
    align-items: center;
  }
  #stats > div {
    height: 100%;
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
    height: 6.25vh;
  }
</style>