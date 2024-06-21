<template>
  <main>
    <inline-svg :src="require('@/assets/images/changelog/icon.svg')" class="icon" />
    <div class="header">
      <span>{{ $t('header') }}</span>
      <span class="description">{{ $t('description') }}</span>
    </div>
    <transactions-list></transactions-list>
  </main>
</template>

<script>

  import TransactionsList from "@/components/Changelog/TransactionsList.vue";

  export default {
    name: "Changelog",
    components: {
      TransactionsList
    },
    data() {
      return {
      }
    },
    created() {

    },
    methods: {

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
    width: 100%;
    align-items: center;
    height: 100%;
    padding: 1.5vh 2vw 12vh;
    overflow: hidden;
    background-position: center;
    background-image: radial-gradient(circle at 50% -100%, #f0bb0078 48%, hsla(0, 0%, 0%, 0.5) 70%), radial-gradient(circle at 51% 101%, #F0BB0080 20%, hsla(0, 0%, 0%, 0.5) 46%);
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
    display: flex;
    flex-direction: column;
    font-size: 2.5vh;
    margin: 2.5vh 0;
  }
  .icon {
    width: auto;
    height: 16vh;
    margin: 1vh 0;
    align-self: center;
  }
  .description {
    font-size: 1.7vh;
    margin-top: 1vh;
  }
</style>

<i18n>
  {
    "en": {
      "header": "Changelog",
      "description": "Check out the changelog"
    },
    "ru": {
      "header": "Changelog",
      "description": "Check out the changelog"
    }
  }
</i18n>