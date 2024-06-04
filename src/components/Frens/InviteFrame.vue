<template>
  <div id="invite-frame" v-if="isShowing" v-on:click.self="hide">
    <div class="invite-popup">
      <span class="caption">{{ $t('invite') }}</span>
      <div class="button" v-on:click="onShare">{{ $t('share') }}</div>
      <div class="button" v-on:click="onCopy">{{ $t('copy') }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InviteFrame",
    data() {
      return {
        isShowing: false,
        baseURL: "https://t.me/TicTacTon_bot/tic_tac_ton",
      }
    },
    mounted() {

    },
    methods: {
      show() {
        this.isShowing = true;
      },
      hide() {
        this.isShowing = false;
      },
      onCopy() {
        navigator.clipboard.writeText(this.baseURL + '?startapp=' + this.$store.state.session.user.id);
        this.hide();
      },
      onShare() {
        let refURL = this.baseURL + '?startapp=' + this.$store.state.session.user.id;
        let text = 'Come with me!'
        Telegram.WebApp.openTelegramLink('https://t.me/share/url?url=' + refURL + '&text=' + text);
        this.hide();
      }
    }
  }
</script>

<style scoped>
  #invite-frame {
    position: absolute;
    background-color: #000000cc;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-content: flex-end;
  }
  .invite-popup {
    display: flex;
    flex-direction: column;
    background-color: #151515;
    /*border-radius: 10px 10px 0 0;*/
    padding: 10px 0 30px 0;
  }
  .caption {
    font-size: 20px;
    padding: 10px;
  }
  .button {
    background-color: #04B75C;
    font-size: 14px;
    margin: 10px 10px;
    cursor: pointer;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px 1px #04B75C;
  }

</style>

<i18n>
  {
    "en": {
      "invite": "Invite a fren",
      "share": "Share link",
      "copy": "Copy link"
    },
    "ru": {
      "invite": "Invite a fren",
      "share": "Share link",
      "copy": "Copy link"
    }
  }
</i18n>