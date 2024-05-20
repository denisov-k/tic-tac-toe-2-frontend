<template>
  <div id="choose-team">
    <div class="buttons">
      <div class="button red" v-on:click="chooseTeam('red')">
        {{ $t('red') }}
      </div>
      <span class="caption">{{ $t('choose') }}</span>
      <div class="button blue" v-on:click="chooseTeam('blue')">
        {{ $t('blue') }}
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
    color: #898989;
    font-weight: 600;
    font-size: 14px;
    margin: 0 15px;
    white-space-collapse: preserve-breaks;
  }
  .buttons {
    display: flex;
    align-items: center;
    color: black;
  }
  .button {
    flex: auto;
    height: 60px;
    border-radius: 10px;
    align-content: center;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    margin: 10px;
  }
  .red {
    background-color: #ef1212;
  }
  .blue {
    background-color: #0079cd;
  }
</style>

<i18n>
  {
    "en": {
      "red": "Red",
      "blue": "Blue",
      "choose": "Choose \r\n team"
    },
    "ru": {
      "red": "Красные",
      "blue": "Синие",
      "choose": "Выбирай \r\n команду"
    }
  }
</i18n>