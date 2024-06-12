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
    width: calc(100% - 24px);
    color: white;
    cursor: pointer;
    border: 3.5px solid #04B75C;
    box-shadow: 0 0 15px 4px #04B75C;
    height: 7.8vh;
    font-size: 1.9vh;
    border-radius: 8px;
    background-image: linear-gradient(210deg, #1a9255, #04B75C);
    margin: 2.5vh auto;
    box-sizing: border-box;
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