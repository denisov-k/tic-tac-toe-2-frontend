<template>
  <div id="claim">
    <div class="balance">
      <inline-svg :src="require('@/assets/images/tasks/coin.svg')" class="coin-icon"></inline-svg>
      <span class="value">{{ balance }}</span>
    </div>
    <div class="button" v-on:click="claim" v-if="balance > 0">
      {{ $t('claim') }}
    </div>
    <div class="button disabled" v-else>
      {{ $t('claim') }}
    </div>
  </div>
</template>

<script>
  import Service from "@/services/UsersService";

  export default {
    name: "Claim",
    computed: {
      balance() {
        return Number(this.$store.state.session.user.unclaimed_balance).toFixed(2);
      }
    },
    methods: {
      async claim() {
        this.service = new Service();

        await this.service.claimBalance().then(() => {
          this.$store.dispatch('updateBalance');
        })
      }
    }
  }
</script>

<style scoped>
  #claim {
    width: calc(100% - 30px);
    margin: 2.7vh auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5vh;
  }
  .balance {
    display: flex;
    align-items: center;

  }
  .coin-icon {
    width: auto;
    height: 3.75vh;
    padding-right: 1vw;
  }
  .value {
    font-size: 3.1vh;
    padding-left: 1vw;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #04b75c;
    width: 18.5vw;
    height: 3.75vh;
    box-shadow: 0 0 10px 3px #04B75C;
    cursor: pointer;
  }
  .button.disabled {
    cursor: auto;
    color: #828282;
    box-shadow: unset;
    background-color: #000000b3;
  }
</style>

<i18n>
  {
    "en": {
      "claim": "Claim"
    },
    "ru": {
      "claim": "Claim"
    }
  }
</i18n>