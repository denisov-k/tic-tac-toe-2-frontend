<template>
  <div id="team-balance">
    <div class="first-team">{{ firstTeam }}</div>
    <inline-svg :src="require('@/assets/images/home/blue-score.svg')" class="icon" />
    <div> vs </div>
    <inline-svg :src="require('@/assets/images/home/red-score.svg')" class="icon" />
    <div class="second-team">{{ secondTeam }}</div>
  </div>
</template>

<script>
  export default {
    name: "TeamBalance",
    data: () => {
      return {
        balances: [],
        firstTeam: (0).toFixed(2),
        secondTeam: (0).toFixed(2),
      }
    },
    props: {
      stats: Array
    },
    computed: {
      /*firstTeam() {
        let team = this.stats.find(item => item.team === 'blue');
        const value = team ? team.total_balance : 0;
        return Number(value).toFixed(2);
      },
      secondTeam() {
        let team = this.stats.find(item => item.team === 'red')
        const value =  team ? team.total_balance : 0
        return Number(value).toFixed(2);
      }*/
    },
    methods: {
      animateValue(team, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          if (team === 'red')
            this.firstTeam = (progress * (end - start) + start).toFixed(2);
          else
            this.secondTeam = (progress * (end - start) + start).toFixed(2);

          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    },
    watch: {
      stats: function (teams, state) {
        let firstTeam = teams.find(item => item.team === 'blue');
        let firstValue = firstTeam ? firstTeam.total_balance : 0;

        //this.firstTeam = Number(firstValue).toFixed(2);
        this.animateValue('red', Number(this.firstTeam), Number(firstValue), 1000);

        let secondTeam = teams.find(item => item.team === 'red');
        let secondValue = secondTeam ? secondTeam.total_balance : 0;

        this.animateValue('blue', Number(this.secondTeam), Number(secondValue), 1000);
      }
    }
  }
</script>

<style scoped>
  #team-balance {
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