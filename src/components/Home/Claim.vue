<template>
  <div id="claim">

    <div class="buttons">
      <div class="button red">
        {{ $t('red') }}
      </div>
      <span class="caption">Claim</span>
      <div class="button blue">
        {{ $t('blue') }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Claim"
  }
</script>

<style scoped>
  #claim {
    width: calc(100% - 20px);
    /*margin-bottom: 10px;*/
  }
  .caption {
    color: #898989;
    font-weight: 600;
    font-size: 14px;
    margin: 0px 15px;
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
      "blue": "Blue"
    },
    "ru": {
      "red": "Красные",
      "blue": "Синие"
    }
  }
</i18n>