<template>
  <div id="userinfo">
    <inline-svg v-if="user.team === 'red'" :src="require('@/assets/images/home/red-team.svg')" class="icon" />
    <inline-svg v-else-if="user.team === 'blue'" :src="require('@/assets/images/home/blue-team.svg')" class="icon" />
    <span>{{ user.first_name }}</span>
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
    font-size: 16px;
    font-weight: 600;
    /*padding: 20px;*/
  }
  svg.icon {
    width: 80px;
    height: 80px;
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