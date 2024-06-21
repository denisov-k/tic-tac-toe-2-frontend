<template>
  <div id="team-balance">
    <div class="first-team">
      <span>{{ firstTeam }}</span>
      <inline-svg :src="blueIcon" class="icon" />
    </div>
    <div> vs </div>
    <div class="second-team">
      <inline-svg :src="redIcon" class="icon" />
      <span>{{ secondTeam }}</span>
    </div>
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
        blueIcon: require('@/assets/images/home/blue-score.svg'),
        redIcon: require('@/assets/images/home/red-score.svg'),
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
    width: 100%;
    justify-content: center;
  }
  #stats > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .first-team {
    color: #3BADFF;
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: right;
  }
  .second-team {
    color: #FF0A47;
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: left;
  }
  svg.icon {
    width: auto;
    height: 6.25vh;
  }
</style>