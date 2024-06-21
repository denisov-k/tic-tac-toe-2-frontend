<template>
  <div id="blow-up" :class="userTeam === 'red' ? 'red': 'blue'">
    <div class="button enabled" v-on:click="blowUp" v-if="enabled && !inAction">
      <span>{{ $t('blow_up') }} +{{ valueFormatted }}</span>
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
      setInterval(this.reduceTimer, 1000);
      //setInterval(this.updateValue, 1000);
    },
    methods: {
      async blowUp() {
        if (this.inAction)
          return;

        this.$store.state.session.user.last_blow_up = Date.now();
        this.resetTimer();
        this.resetValue();

        this.inAction = true;
        this.enabled = false;
        // window.navigator.vibrate([200]);
        this.afterClick();

        this.service = new Service();

        await this.service.blowUp();
        await this.$store.dispatch('updateBalance');

        this.inAction = false;
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
        this.updateValue();
        if (this.timer > 0) {
          this.timerFormatted = this.convertSecondsToTime(this.timer--);
          this.enabled = false;
        } else this.enabled = true;
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
        this.value = (this.timeout - this.timer) / (this.timeout) * this.maxValue;

        if (!lastBlowUp)
          this.value = 100
        else if (this.value > this.maxValue)
          this.value = this.maxValue;

        this.valueFormatted = (this.value).toFixed(3);
      },
      updateValue() {
        let newValue = (this.timeout - this.timer) / (this.timeout) * this.maxValue;
        this.value = newValue > this.maxValue ? this.maxValue : newValue;
        this.valueFormatted = (this.value).toFixed(3);
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
    }
  }
  .red .button.enabled {
    background-color: #FF0A47;
    box-shadow: 0 0 15px 4px #FF0A47;

    &:after {
      background: linear-gradient(45deg, #FF0A47, rgb(255, 255, 255));
      animation: border-animation 3s ease alternate infinite;
      -webkit-animation-play-state: running;
      animation-play-state: running;
      background-size: 300% 300%;
    }
  }
  .blue .button.enabled {
    background-image: linear-gradient(210deg, #017ad1, #3badff);
    box-shadow: 0 0 15px 4px #3BADFF;

    &:after {
      background: linear-gradient(89deg, #3c94d3, rgb(229 244 255));
      animation: border-animation 3s ease alternate infinite;
      -webkit-animation-play-state: running;
      animation-play-state: running;
      background-size: 300% 300%;
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

  @keyframes gradient-animation {
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
      "blow_up": "Blow up",
      "recovery": "Recovery"
    },
    "ru": {
      "blow_up": "Blow up",
      "recovery": "Recovery"
    }
  }
</i18n>