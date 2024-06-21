<template>
  <main>
    <inline-svg :src="require('@/assets/images/frens/frens-header.svg')" class="icon" />
    <div class="header">
      <span>{{ $t('header') }}</span>
      <steps></steps>
    </div>
    <claim :after-click="showAnimation"></claim>
    <claim-animation ref="animation"></claim-animation>
    <my-frens-list></my-frens-list>
    <invite-button :onClick="showInvitePopup"></invite-button>
    <invite-frame ref="invite-popup"></invite-frame>
  </main>
</template>

<script>

  import Steps from "@/components/Frens/Steps";
  import InviteButton from "@/components/Frens/InviteButton";
  import InviteFrame from "@/components/Frens/InviteFrame";
  import MyFrensList from "@/components/Frens/MyFrensList.vue";
  import Claim from "@/components/Frens/Claim.vue";
  import ClaimAnimation from "@/components/Frens/ClaimAnimation.vue";
  import BlowUp from "@/components/Home/BlowUp.vue";

  export default {
    name: "Frens",
    components: {BlowUp, Claim, ClaimAnimation, MyFrensList, InviteButton, InviteFrame, Steps},
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
      },
      showAnimation() {
        this.$refs['animation'].show();
      }
    }
  }
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    flex: auto;
    /*overflow-y: auto;*/
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 100%;
    padding: 1.5vh 2vw 12vh;
    overflow: hidden;
    background-position: center;
    background-image: radial-gradient(circle at 50% -100%, #04b75cb5 48%, hsla(0, 0%, 0%, 0.5) 70%), radial-gradient(circle at 51% 101%, #04b75c8a 20%, hsla(0, 0%, 0%, 0.5) 46%);
    animation: zoom-in-zoom-out 3s linear infinite;
  }
  @keyframes zoom-in-zoom-out {
    0% {
      background-size: 100% 100%;
    }
    50% {
      background-size: 100% 130%;
    }
    100% {
      background-size: 100% 100%;
    }
  }
  .header {
    font-size: 2.5vh;
    margin: 2.5vh 0;
  }
  .icon {
    width: auto;
    height: 16vh;
    margin: 1vh 0;
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