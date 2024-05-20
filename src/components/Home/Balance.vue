<template>
  <div id="balance">
    {{ value }} $
  </div>
</template>

<script>
  export default {
    name: "Balance",
    data: () => {
      return {
        // value: 0
      }
    },
    computed: {
      value() {
        return this.$store.state.session.user.balance;
      }
    }
  }
</script>

<style scoped>
  #balance {
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
  }
</style>