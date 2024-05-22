<template>
  <div id="blow-up">
    <div class="buttons">
      <div class="button" v-on:click="blowUp" :class="{'enabled': enabled }">
        {{ enabled ? $t('blow_up') : timerFormatted }}
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "@/services/UsersService";
  import SessionActions from "@/store/store-session-actions";

  export default {
    name: "BlowUp",
    data() {
      return {
        enabled: true,
        timer: 0,
        timerFormatted: ''
      }
    },
    mounted() {
      this.resetTimer();
      this.reduceTimer();
      setInterval(this.reduceTimer, 1000);
    },
    methods: {
      blowUp() {
        this.service = new Service();

        this.service.blowUp()
            .then(() => {
              this.$store.dispatch(SessionActions.AUTH);
            })
            .catch(() => {});
      },
      convertSecondsToTime(input) {
        const dateObj = new Date(input * 1000);
        const hours = dateObj.getUTCHours();
        const minutes = dateObj.getUTCMinutes();
        const seconds = dateObj.getSeconds();

        return hours.toString().padStart(2, '0')
            + ':' + minutes.toString().padStart(2, '0')
            + ':' + seconds.toString().padStart(2, '0');
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
      }
    }
  }
</script>

<style scoped>
  #blow-up {
    width: calc(100% - 20px);
    /*margin-bottom: 10px;*/
  }
  .button {
    flex: auto;
    height: 60px;
    border-radius: 10px;
    align-content: center;
    font-weight: 600;
    font-size: 16px;
    margin: 10px;
    background-color: #5c5c5c;
    color: black;
  }
  .button.enabled {
    background-color: #ffffff;
    cursor: pointer;
  }
</style>

<i18n>
  {
    "en": {
      "blow_up": "Blow up"
    },
    "ru": {
      "blow_up": "Blow up"
    }
  }
</i18n>