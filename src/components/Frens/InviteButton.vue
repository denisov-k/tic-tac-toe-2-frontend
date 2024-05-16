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
    width: calc(100% - 20px);
    background-color: rgb(66, 157, 76);
    border-radius: 10px;
    color: black;
    font-size: 20px;
    font-weight: 600;
    height: 80px;
    align-content: center;
    margin: 10px auto;
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