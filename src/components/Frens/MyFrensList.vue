<template>
  <div id="my-frens-list">
    <span class="caption">{{refs.length}} {{ $t('your_refs') }}</span>
    <div class="refs-list">
      <div class="ref-item" v-for="ref in refs" :key="ref.id">
        <inline-svg :src="require('@/assets/images/frens/fren.svg')" class="icon" />
        <div class="name">
          <span :class="ref.team === 'red' ? 'red': 'blue'">{{ ref.first_name }}</span>
          <span class="frens-count">{{ ref.refs }}</span>
        </div>
        <div class="balance">
          <inline-svg :src="require('@/assets/images/frens/coin.svg')" class="coin" />
          <span>{{ Number(ref.balance).toFixed(3) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "@/services/UsersService";

  export default {
    name: "MyFrensList",
    data() {
      return {
        refs: []
      }
    },
    mounted() {
      this.service = new Service();

      this.service.getRefs().then((refs) => {
        this.refs = refs;
      })
    },
    methods: {
      show() {

      },
      hide() {

      }
    }
  }
</script>

<style scoped>
  #my-frens-list {
    flex: 1;
    width: 100%;
    margin: 2.5vh auto;
    min-height: 6vh;
    display: flex;
    flex-direction: column;
  }
  .caption {
    font-size: 1.9vh;
    margin: 2vh auto;
    width: calc(100% - 30px);
    display: flex;
  }
  .refs-list {
    margin: 0;
    overflow-y: auto;
  }
  .ref-item {
    background-color: #1d2025;
    display: flex;
    align-items: center;
    height: 6.8vh;
    margin: 2.5vh 0;
    padding: 0 5vw;
    font-size: 1.5vh;
    border-radius: 10px;
  }
  .ref-item:first-child {
    margin-top: 0;
  }
  .ref-item:last-child {
    margin-bottom: 0;
  }
  .ref-item .icon {
    width: auto;
    height: 2.6vh;
    padding-right: 4.2vw;
  }
  .ref-item .balance {
    margin-right: 0;
    margin-left: auto;
    display: flex;
    align-items: center;
  }
  .ref-item .name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .coin {
    width: auto;
    height: 5.7vh;
  }
  span.blue {
    color: #3BADFF;
  }
  span.red {
    color: #FF0A47;
  }
  span.frens-count {
    color: #828282;
  }
</style>

<i18n>
  {
    "en": {
      "invite": "Invite a fren",
      "your_refs": "frens",
      "share": "Share link",
      "copy": "Copy link"
    },
    "ru": {
      "invite": "Invite a fren",
      "your_refs": "frens",
      "share": "Share link",
      "copy": "Copy link"
    }
  }
</i18n>