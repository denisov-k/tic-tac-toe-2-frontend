<template>
  <div id="blow-up">
    <div class="buttons">
      <div class="button">
        {{ $t('blow_up') }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlowUp"
  }
</script>

<style scoped>
  #blow-up {
    width: calc(100% - 20px);
    /*margin-bottom: 10px;*/
  }
  .caption {
    color: #898989;
    font-weight: 600;
    font-size: 14px;
    margin: 0px 15px;
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
    background-color: #ffffff;
    color: black;
  }
</style>

<i18n>
  {
    "en": {
      "blow_up": "Blow up"
    },
    "ru": {
      "blow_up": "Blow up"
    }
  }
</i18n>