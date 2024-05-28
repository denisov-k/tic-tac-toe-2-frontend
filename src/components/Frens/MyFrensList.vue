<template>
  <div id="my-frens-list">
    <span class="caption">{{refs.length}} {{ $t('your_refs') }}</span>
    <div class="refs-list">
      <div class="ref-item" v-for="ref in refs" :key="ref.id">
        <inline-svg :src="require('@/assets/images/frens/fren.svg')" class="icon" />
        <span>{{ ref.first_name }}</span>
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
    width: calc(100% - 30px);
    margin: 0 auto;
  }
  .caption {
    font-size: 18px;
    padding: 12px 0 4px;
  }
  .refs-list {
    margin: auto;
  }
  .ref-item {
    background-color: #00000099;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
  }
  .ref-item .icon {
    width: 16px;
    height: 16px;
    padding-right: 5px;
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