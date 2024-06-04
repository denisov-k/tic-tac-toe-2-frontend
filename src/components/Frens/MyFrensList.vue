<template>
  <div id="my-frens-list">
    <span class="caption">{{refs.length}} {{ $t('your_refs') }}</span>
    <div class="refs-list">
      <div class="ref-item" v-for="ref in refs" :key="ref.id">
        <inline-svg :src="require('@/assets/images/frens/fren.svg')" class="icon" />
        <div class="name">
          <span>{{ ref.first_name }}</span>
          <span>{{ ref.refs }}</span>
        </div>
        <div class="balance">
          <span>{{ ref.balance.toFixed(2) }} XO</span>
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
    width: 100%;
    margin: 2.7vh auto;
  }
  .caption {
    font-size: 1.9vh;
    margin: 2vh auto;
    width: calc(100% - 30px);
    display: flex;
  }
  .refs-list {
    margin: auto;
  }
  .ref-item {
    background-color: #00000099;
    display: flex;
    align-items: center;
    height: 6.5vh;
    margin: 1.5vh 0;
    padding: 0 5vw;
    font-size: 1.5vh;
  }
  .ref-item .icon {
    width: auto;
    height: 2.6vh;
    padding-right: 4.2vw;
  }
  .ref-item .balance {
    margin-right: 0;
    margin-left: auto;
  }
  .ref-item .name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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