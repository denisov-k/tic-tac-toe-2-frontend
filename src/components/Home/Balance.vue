<template>
  <div id="balance">
    <inline-svg :src="require('@/assets/images/home/coin.svg')" class="icon"></inline-svg>
    {{ value }}
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
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 10px;
  }
  .icon {
    width: 36px;
    height: 36px;
  }
</style>