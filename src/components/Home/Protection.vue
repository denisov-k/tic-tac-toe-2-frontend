<template>
  <div id="protection">
    <div class="button enabled" v-on:click="protect" v-if="enabled">
      <inline-svg :src="require('@/assets/images/home/protect.svg')" class="icon"></inline-svg>
      <span>{{ $t('protect') }}</span>
    </div>
    <div class="button" v-else>
      <inline-svg :src="require('@/assets/images/home/protect.svg')" class="icon"></inline-svg>
      <span class="recovery">{{ $t('protected') }} {{ timerFormatted }}</span></div>
  </div>
</template>

<script>
  import Service from "@/services/UsersService";

  export default {
    name: "Protection",
    props: {
      afterClick: Function
    },
    data() {
      return {
        enabled: true,
        timer: 0,
        timerFormatted: '',
        inAction: false,
        timeout: 30
        //timeout: 24 * 60 * 60
      }
    },
    mounted() {
      this.resetTimer();
      this.reduceTimer();
      setInterval(this.reduceTimer, 1000);},
    methods: {
      async protect() {
        if (this.inAction)
          return;

        this.inAction = true;
        Telegram.WebApp.HapticFeedback.notificationOccurred("success");
        this.afterClick();

        this.service = new Service();

        await this.service.protect();
        await this.$store.dispatch('auth');

        this.resetTimer();
        this.inAction = false;
      },
      convertSecondsToTime(input) {
        const dateObj = new Date(input * 1000);
        const hours = dateObj.getUTCHours();
        const minutes = dateObj.getUTCMinutes();
        const seconds = dateObj.getSeconds();

        return `${hours.toString().padStart(2, '0')}h
            ${minutes.toString().padStart(2, '0')}m`;
          //  ${seconds.toString().padStart(2, '0')}s`;
      },
      reduceTimer(){
        if (this.timer > 0) {
          this.timerFormatted = this.convertSecondsToTime(--this.timer);
          this.enabled = false;
        } else this.enabled = true;
      },
      resetTimer() {
        const protectedAt = this.$store.state.session.user.protected_at;

        if (protectedAt)
          this.timer = (this.timeout * 1000 - (Date.now() - new Date(protectedAt))) / 1000;
        else
          this.timer = 0;
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  #protection {
    margin-left: auto;
  }
  .button {
    position: relative;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7vh;
    background-color: #151515;
    color: white;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 0 2vw;
    -webkit-tap-highlight-color: transparent;
    z-index: 1;
  }
  .button svg {
    fill: #828282;
  }
  .button.enabled {
    cursor: pointer;
    background-color: #04B75C;

    &:before {
      content: "";
      display: block;
      border-radius: 8px;
      position: absolute;
      background: inherit;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
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
      background: linear-gradient(100deg, #04b75c, #FFF, #04b75c, #FFF, #04b75c);
      animation: border-animation 7s linear infinite;
      animation-play-state: running;
      background-size: 200% 200%;
      filter: blur(5px);
    }
  }
  .button.enabled svg {
    fill: white;
  }

  .recovery {
    color: #828282;
  }
  .icon {
    height: 3vh;
    width: auto;
    margin-right: 1.5vw;
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
      "protect": "Protect",
      "protected": "Protected"
    },
    "ru": {
      "protect": "Protect",
      "protected": "Protected"
    }
  }
</i18n>