<template>
  <div id="userinfo">
    {{ user.first_name }}
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
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
  }
</style>