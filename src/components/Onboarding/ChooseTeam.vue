<template>
  <div id="choose-team">
    <span class="caption">{{ $t('choose') }}</span>
    <div class="buttons">
      <div class="button red" v-on:click="chooseTeam('red')">
        <inline-svg :src="require('@/assets/images/onboarding/choose_red_team.svg')" class="icon" />
      </div>
      <div class="button blue" v-on:click="chooseTeam('blue')">
        <inline-svg :src="require('@/assets/images/onboarding/choose_blue_team.svg')" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChooseTeam",
    props: {
      afterClick: Function
    },
    methods: {
      chooseTeam(team) {
        Promise.all([
            this.afterClick(team),
            this.$store.dispatch('setTeam', team)
        ]).then(() => {
          this.$router.push('/');
        })
      }
    }
  }
</script>

<style scoped>
  #choose-team {
    padding: 3vh 0;
  }
  .caption {
    color: #fff;
    font-size: 2.4vh;
    margin: 2vh 0;
    white-space-collapse: preserve-breaks;
    display: flex;
    justify-content: center;
    white-space: break-spaces;
  }
  .buttons {
    display: flex;
    align-items: center;
    color: black;
  }
  .button {
    flex: auto;
    height: 15.7vh;
    align-content: center;
    cursor: pointer;
    margin: 2vh 0;
    -webkit-tap-highlight-color: transparent;
  }
  svg.icon {
    width: 100%;
    height: 100%;
  }
  .red {

  }
  .blue {

  }
</style>

<i18n>
  {
    "en": {
      "choose": "Select the fraction you \r\nwish to join"
    },
    "ru": {
      "choose": "Select the fraction you \r\nwish to join"
    }
  }
</i18n>