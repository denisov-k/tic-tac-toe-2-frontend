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
    padding: 20px;
  }
  .caption {
    font-size: 24px;
    font-weight: 600;
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