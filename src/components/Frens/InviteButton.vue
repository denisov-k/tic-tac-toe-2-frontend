<template>
  <div id="invite-button" v-on:click="onClick">

      <div>{{ $t('invite') }}</div>

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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 24px);
    color: white;
    cursor: pointer;
    height: 7.8vh;
    font-size: 1.9vh;
    background-image: linear-gradient(210deg, #04B75C, #00A350);
    margin: 2.5vh auto;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    border-radius: 10px;
    z-index: 1;

    &:before {
      content: "";
      display: block;
      border-radius: 8px;
      position: absolute;
      background: inherit;
      top: 3px;
      left: 3px;
      right: 3px;
      bottom: 3px;
      z-index: -1;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -2;
      transform: rotate(0deg);
      background: linear-gradient(100deg, #00A350, #FFF, #00A350, #FFF, #00A350);
      animation: border-animation 7s linear infinite;
      animation-play-state: running;
      background-size: 200% 200%;
      filter: blur(10px);
    }
  }
  @keyframes border-animation {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 100% 0;
    }

    100% {
      background-position: 0 0;
    }
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