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
  import UsersService from '../../services/UsersService';

  export default {
    name: "ChooseTeam",
    methods: {
      chooseTeam(team) {
        this.$store.dispatch('setTeam', team).then(() => {
          console.log(this.$store.state.session.user)
          this.$router.push('/');
        })
        /*let service = new UsersService();

        service.chooseTeam(team).then(() => {
          this.$router.push('home');
        })*/
      }
    }
  }
</script>

<style scoped>
  #choose-team {
    /*width: calc(100% - 20px);
    margin-bottom: 10px;*/
  }
  .caption {
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    margin: 0 15px;
    white-space-collapse: preserve-breaks;
    display: flex;
    justify-content: center;
  }
  .buttons {
    display: flex;
    align-items: center;
    color: black;
  }
  .button {
    flex: auto;
    height: 100px;
    border-radius: 10px;
    align-content: center;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    margin: 10px;
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