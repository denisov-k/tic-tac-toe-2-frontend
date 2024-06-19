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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 24px);
    color: white;
    cursor: pointer;
    box-shadow: 0 0 15px 4px #04B75C;
    height: 7.8vh;
    font-size: 1.9vh;
    background-image: linear-gradient(210deg, #1a9255, #04B75C);
    margin: 2.5vh auto;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    border-radius: 10px;
    z-index: 1;
    overflow: hidden;
    animation: gradient-animation 30s ease infinite;

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
      background: linear-gradient(100deg, #07b15b, rgb(144 249 196));
      animation: border-animation-0466b1bc 3s ease alternate infinite;
      animation-play-state: running;
      background-size: 200% 200%;
    }
  }
  @keyframes border-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 95% 50%;
    }
    100% {
      background-position: 0% 50%;
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