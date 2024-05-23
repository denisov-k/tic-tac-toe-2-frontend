<template>
  <div id="userinfo">
    <span>{{ user.first_name }}</span>
    <span class="team">{{ $t('team') }} {{ user.team }}</span>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    computed: {
      user() {
        return this.$store.state.session.user;
      }
    }
  }
</script>

<style scoped>
  #userinfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
  }
  .team {
    font-size: 12px;
  }
</style>

<i18n>
  {
    "en": {
      "team": "Team: "
    },
    "ru": {
      "team": "Team: "
    }
  }
</i18n>