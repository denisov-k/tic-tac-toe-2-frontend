<template>
  <main>
    <inline-svg :src="require('@/assets/images/frens/frens-header.svg')" class="icon" />
    <span class="header">{{ $t('header') }}</span>
    <steps></steps>
    <my-frens-list></my-frens-list>
    <invite-button :onClick="showInvitePopup"></invite-button>
    <invite-frame ref="invite-popup"></invite-frame>
    <slot name="footer"></slot>
  </main>
</template>

<script>

  import Steps from "@/components/Frens/Steps";
  import InviteButton from "@/components/Frens/InviteButton";
  import InviteFrame from "@/components/Frens/InviteFrame";
  import MyFrensList from "@/components/Frens/MyFrensList.vue";

  export default {
    name: "Frens",
    components: {MyFrensList, InviteButton, InviteFrame, Steps},
    data() {
      return {
        // isPopupShowing: false
      }
    },
    created() {

    },
    methods: {
      showInvitePopup() {
        this.$refs['invite-popup'].show();
      },
      showMyFrensPopup() {
        this.$refs['my-frens-popup'].show();
      }
    }
  }
</script>

<style scoped>
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: auto;
    justify-content: space-between;
    overflow-y: auto;
    box-sizing: border-box;
    width: 100%;
    background: linear-gradient(210deg,#151515, #225e23, #007777,#020202,#0d8e8e);
    background-size: 200% 200%;
    animation: gradient-animation 40s ease infinite;
  }
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .header {
    font-size: 26px;
    font-weight: 600;
    padding: 10px 10px 0;
  }
  .icon {
    width: 80px;
    height: 80px;
    align-self: center;
  }

</style>

<i18n>
  {
    "en": {
      "header": "Invite frens",
      "how_it_works": "How it works"
    },
    "ru": {
      "header": "Invite frens",
      "how_it_works": "How it works"
    }
  }
</i18n>