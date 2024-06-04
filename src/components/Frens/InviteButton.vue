<template>
  <div id="invite-button" v-on:click="onClick">
    <span>{{ $t('invite') }}</span>
  </div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 30px);
    background-color: #04B75C;
    color: white;
    margin: 2.7vh auto;
    cursor: pointer;
    border: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, #ffffff, #04B75C);
    box-shadow: 0 0 10px 3px #04B75C;
    height: 7vh;
    font-size: 1.9vh;
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