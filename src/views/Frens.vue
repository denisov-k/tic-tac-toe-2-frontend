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
    background-image: linear-gradient(210deg, #61722e, #225e23, #08192f, #0d8e8e);
    background-size: 200% 200%;
    animation: gradient-animation 30s ease infinite;
    padding: 1.5vh 2vw 12vh;
    overflow: hidden;
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