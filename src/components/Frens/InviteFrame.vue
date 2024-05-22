<template>
  <div id="invite-frame" v-if="isShowing" v-on:click.self="hide">
    <div class="invite-popup">
      <span class="caption">{{ $t('invite') }}</span>
      <div class="button" v-on:click="onShare">{{ $t('share') }}</div>
      <div class="button" v-on:click="onCopy">{{ $t('copy') }}</div>
      <span class="caption">{{ $t('your_refs') }}</span>
      <div class="refs-list">
        <div class="ref-item" v-for="ref in refs" :key="ref.id">
          <span>{{ ref.first_name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "@/services/UsersService";

  export default {
    name: "InviteFrame",
    data() {
      return {
        isShowing: false,
        baseURL: "https://t.me/TicTacTon_bot/tic_tac_ton",
        refs: []
      }
    },
    mounted() {
      this.service = new Service();
    },
    methods: {
      show() {

        this.service.getRefs().then((refs) => {
          this.refs = refs;
          this.isShowing = true;
        })

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
    background-color: #3f3f3f;
    border-radius: 10px 10px 0 0;
    padding: 5px 0;
  }
  .caption {
    font-weight: 600;
    font-size: 20px;
    padding: 12px 0 4px;
  }
  .button {
    background-color: #121212;
    font-weight: 600;
    font-size: 14px;
    border-radius: 8px;
    margin: 5px 10px;
    cursor: pointer;
    height: 40px;
    align-content: center;
  }
  .refs-list {

  }
  .ref-item {
    background-color: #272727;
    border-radius: 16px;
    margin: 5px 10px;
    height: 24px;
    align-content: center;
    font-weight: 600;
  }
</style>

<i18n>
  {
    "en": {
      "invite": "Invite a fren",
      "your_refs": "Your refs",
      "share": "Share link",
      "copy": "Copy link"
    },
    "ru": {
      "invite": "Invite a fren",
      "your_refs": "Your refs",
      "share": "Share link",
      "copy": "Copy link"
    }
  }
</i18n>