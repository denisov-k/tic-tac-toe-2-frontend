<template>
  <div id="invite-button" v-on:click="onClick">{{ $t('invite') }}</div>
</template>

<script>
  export default {
    name: "InviteButton",
    props: {
      onClick: Function
    }
  }
</script>

<style scoped>
  #invite-button {
    width: calc(100% - 30px);
    background-color: #04B75C;
    box-sizing: border-box;
    color: white;
    font-size: 16px;
    height: 50px;
    align-content: center;
    margin: 10px auto;
    cursor: pointer;
    border: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, #ffffff, #04B75C);
    box-shadow: 0 0 10px 3px #04B75C;
  }
</style>

<i18n>
  {
    "en": {
      "invite": "Invite a fren"
    },
    "ru": {
      "invite": "Invite a fren"
    }
  }
</i18n>