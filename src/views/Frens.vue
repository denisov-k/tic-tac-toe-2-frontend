<template>
  <main>
    <span class="header">{{ $t('header') }}</span>
    <inline-svg :src="require('@/assets/frens-header.svg')" class="icon" />

    <span class="how-it-works">{{ $t('how_it_works') }}</span>
    <steps></steps>
    <invite-button :onClick="showPopup"></invite-button>
    <invite-frame ref="invite-popup"></invite-frame>
  </main>
</template>

<script>

  import Steps from "@/components/Frens/Steps";
  import InviteButton from "@/components/Frens/InviteButton";
  import InviteFrame from "@/components/Frens/InviteFrame";

  export default {
    name: "Frens",
    components: {InviteButton, InviteFrame, Steps},
    data() {
      return {
        // isPopupShowing: false
      }
    },
    created() {

    },
    methods: {
      showPopup() {
        this.$refs['invite-popup'].show();
      }
    }
  }
</script>

<style scoped>
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
    flex: auto;
    justify-content: center;
    overflow-y: auto;
    box-sizing: border-box;
    width: 100%;
  }
  .header {
    font-size: 30px;
    font-weight: 600;
    padding: 10px;
  }
  .icon {
    width: 120px;
    height: 120px;
    margin: 10px auto;
  }
  .how-it-works {
    font-size: 20px;
    font-weight: 600;
    padding: 10px;
  }

</style>

<i18n>
  {
    "en": {
      "header": "Invite frens. Earn points",
      "how_it_works": "How it works"
    },
    "ru": {
      "header": "Invite frens. Earn points",
      "how_it_works": "How it works"
    }
  }
</i18n>