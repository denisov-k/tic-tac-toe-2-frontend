<template>
  <div id="greetings">
    <span class="caption">{{ $t('caption') }}, {{ user.first_name }}!</span>
  </div>
</template>

<script>
  export default {
    name: "Greetings",
    computed: {
      user() {
        return this.$store.state.session.user;
      }
    }
  }
</script>

<style scoped>
  #greetings {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3vh 0;
  }
  .caption {
    font-size: 3vh;
  }
</style>

<i18n>
  {
    "en": {
      "caption": "Greetings"
    },
    "ru": {
      "caption": "Greetings"
    }
  }
</i18n>