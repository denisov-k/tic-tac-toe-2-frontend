<template>
  <div id="blow-up" :class="userTeam === 'red' ? 'red': 'blue'">
    <div class="button enabled" v-on:click="blowUp" v-if="enabled && !inAction">
      <span>{{ $t('blow_up') }} +{{ maxValue.toFixed(2) }}</span>
    </div>
    <div class="button" v-else-if="inAction">
      <lottie :animation-data="require('@/assets/images/home/blow_up_loading.json')"
              class="animation" :loop="true" :auto-play="true"></lottie>
    </div>
    <div class="button" v-else>
      <span class="recovery">{{ $t('recovery') }} +{{ valueFormatted }}</span>
      <span class="timer">{{ timerFormatted }}</span>
    </div>
  </div>
</template>

<script>
  import Service from "@/services/UsersService";

  export default {
    name: "BlowUp",
    props: {
      afterClick: Function
    },
    data() {
      return {
        enabled: true,
        timer: 0,
        timerFormatted: '',
        value: 0,
        valueFormatted: '',
        inAction: false,
        timeout: 60,
        maxValue: 10
        //timeout: 6 * 60 * 60
      }
    },
    mounted() {
      this.resetTimer();
      this.resetValue();
      this.reduceTimer();
      this.updateValue();

      setInterval(() => {
        this.reduceTimer();
        this.updateValue();
      }, 1000);
      //setInterval(this.updateValue, 1000);
    },
    methods: {
      async blowUp() {
        if (this.inAction)
          return;

        Telegram.WebApp.HapticFeedback.notificationOccurred("success");

        this.inAction = true;
        this.enabled = false;
        this.$store.state.session.user.last_blow_up = Date.now();
        this.resetTimer();
        this.resetValue();
        //this.value

        this.afterClick();

        this.service = new Service();

        this.service.blowUp().then(()=> {
          this.$store.dispatch('updateBalance');

          this.inAction = false;
        })
      },
      convertSecondsToTime(input) {
        const dateObj = new Date(input * 1000);
        const hours = dateObj.getUTCHours();
        const minutes = dateObj.getUTCMinutes();
        const seconds = dateObj.getSeconds();

        return `${hours.toString().padStart(2, '0')}h
            ${minutes.toString().padStart(2, '0')}m
            ${seconds.toString().padStart(2, '0')}s`;
      },
      reduceTimer(){
        if (this.timer > 0) {
          this.timerFormatted = this.convertSecondsToTime(this.timer--);
        }
      },
      resetTimer() {
        const lastBlowUp = this.$store.state.session.user.last_blow_up;

        if (lastBlowUp)
          this.timer = (this.timeout * 1000 - (Date.now() - new Date(lastBlowUp))) / 1000;
        else
          this.timer = 0;
      },
      resetValue() {
        const lastBlowUp = this.$store.state.session.user.last_blow_up;
        this.maxValue = lastBlowUp ? 10 : 100;
        this.value = (this.timeout - this.timer) / (this.timeout) * this.maxValue;

        if (this.value > this.maxValue)
          this.value = this.maxValue;

        this.valueFormatted = (this.value).toFixed(3);
      },
      updateValue() {
        let newValue = (this.timeout - this.timer) / (this.timeout) * this.maxValue;
        if (newValue > this.maxValue)
          newValue = this.maxValue;

        if (newValue < this.value)
          this.valueFormatted = newValue.toFixed(2)
        else
          this.animateValue(this.value, newValue);
        this.value = newValue;
        //this.valueFormatted = (this.value).toFixed(3);
        this.enabled = this.value === this.maxValue;
      },
      animateValue(start, end, duration = 1000) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          this.valueFormatted = (progress * (end - start) + start).toFixed(2);

          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    },
    computed: {
      userTeam() {
        return this.$store.state.session.user.team;
      }
    }
  }
</script>

<style scoped>
  #blow-up {
    width: calc(100% - 24px);
    margin: 2.5vh auto;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
  }
  .button {
    position: relative;
    height: 7.8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.9vh;
    background-color: #151515;
    color: white;
    border-radius: 8px;
    box-sizing: border-box;

  }
  .button.enabled {
    cursor: pointer;

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
      filter: blur(10px);
    }
  }
  .red .button.enabled {
    background-color: #FF0A47;

    &:after {
      background: linear-gradient(45deg, #FF0A47, #FFF, #FF0A47, #FFF);
      animation: border-animation 7s linear alternate infinite;
      -webkit-animation-play-state: running;
      animation-play-state: running;
      background-size: 200% 200%;
    }
  }
  .blue .button.enabled {
    background-image: linear-gradient(210deg, #017ad1, #3badff);

    &:after {
      background: linear-gradient(89deg, #3c94d3, #FFF, #3c94d3, #FFF);
      animation: border-animation 7s linear alternate infinite;
      -webkit-animation-play-state: running;
      animation-play-state: running;
      background-size: 200% 200%;
    }
  }
  .recovery {
    color: #828282;
  }
  .timer {
    position: absolute;
    right: 5vw;
    color: #565656;
    font-size: 1.5vh;
  }
  .animation {
    display: flex;
    height: 9vh;
  }
  .animation >>> path {
    stroke: #5c5c5c;
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
      "blow_up": "Blow up",
      "recovery": "Recovery"
    },
    "ru": {
      "blow_up": "Blow up",
      "recovery": "Recovery"
    }
  }
</i18n>