<template>
  <div id="blow-up" :class="userTeam === 'red' ? 'red': 'blue'">
    <div class="button enabled" v-on:click="blowUp" v-if="enabled">
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
        inAction: false
      }
    },
    mounted() {
      this.resetTimer();
      this.resetValue();
      this.reduceTimer();
      this.increaseValue();
      setInterval(this.reduceTimer, 1000);
      setInterval(this.increaseValue, 1000);
    },
    methods: {
      async blowUp() {
        if (this.inAction)
          return;

        this.inAction = true;
        // window.navigator.vibrate([200]);
        this.afterClick();

        this.service = new Service();

        await this.service.blowUp();
        await this.$store.dispatch('auth');

        this.resetTimer();
        this.resetValue();
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
        if (this.timer > 0) {
          this.timerFormatted = this.convertSecondsToTime(--this.timer);
          this.enabled = false;
        } else this.enabled = true;
      },
      resetTimer() {
        const lastBlowUp = this.$store.state.session.user.last_blow_up;

        if (lastBlowUp)
          this.timer = (6 * 60 * 60 * 1000 - (Date.now() - new Date(lastBlowUp))) / 1000;
        else
          this.timer = 0;
      },
      resetValue() {
        const lastBlowUp = this.$store.state.session.user.last_blow_up;
        this.value = (6 * 60 * 60 - this.timer) / (6 * 60 * 60) * 5;
        console.log((6 * 60 * 60 - this.timer) / (6 * 60 * 60) * 5);

        if (!lastBlowUp)
          this.value = 100
        else if (this.value > 5)
          this.value = 5;

        this.valueFormatted = (this.value).toFixed(3);
      },
      increaseValue() {
        if (this.value < 5) {
          this.value = (6 * 60 * 60 - this.timer) / (6 * 60 * 60) * 5;
          this.valueFormatted = (this.value).toFixed(3);
        }
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
    margin: 2.7vh 0;
    position: relative;
  }
  .button {
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.9vh;
    background-color: #151515;
    color: white;
  }
  .button.enabled {
    cursor: pointer;
    border: 3px solid;
    border-image-slice: 1;
  }
  .red .button.enabled {
    background-color: #FF0A47;
    border-image-source: linear-gradient(to left, #ffffff, #FF0A47);
    box-shadow: 0 0 10px 3px #FF0A47;
  }
  .blue .button.enabled {
    background-color: #3BADFF;
    border-image-source: linear-gradient(to left, #ffffff, #3BADFF);
    box-shadow: 0 0 10px 3px #3BADFF;
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