<template>
  <div>
    <main>
      <inline-svg :src="require('@/assets/images/frens/frens-header.svg')" class="icon" />
      <div class="header">
        <span>{{ $t('header') }}</span>
        <steps></steps>
      </div>
      <claim></claim>
      <my-frens-list></my-frens-list>
      <invite-button :onClick="showInvitePopup"></invite-button>
      <invite-frame ref="invite-popup"></invite-frame>
    </main>
    <slot name="footer"></slot>
  </div>
</template>

<script>

  import Steps from "@/components/Frens/Steps";
  import InviteButton from "@/components/Frens/InviteButton";
  import InviteFrame from "@/components/Frens/InviteFrame";
  import MyFrensList from "@/components/Frens/MyFrensList.vue";
  import Claim from "@/components/Frens/Claim.vue";

  export default {
    name: "Frens",
    components: {Claim, MyFrensList, InviteButton, InviteFrame, Steps},
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
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(210deg,#151515, #225e23, #007777,#020202,#0d8e8e);
    background-size: 200% 200%;
    animation: gradient-animation 30s ease infinite;
    padding: 1.5vh 2vw;
    box-sizing: border-box;
  }
  main {
    display: flex;
    flex-direction: column;
    flex: auto;
    justify-content: space-between;
    overflow-y: auto;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
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
    margin: 2.7vh 0;
  }
  .icon {
    width: auto;
    height: 14.5vh;
    margin: 2.7vh 0;
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