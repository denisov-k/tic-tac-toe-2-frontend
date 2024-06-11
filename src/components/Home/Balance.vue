<template>
  <div id="balance">
    <inline-svg :src="require('@/assets/images/home/coin.svg')" class="icon"></inline-svg>
    <span class="value">{{ value }}</span>
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
        return Number(this.$store.state.session.user.balance).toFixed(2);
      }
    }
  }
</script>

<style scoped>
  #balance {
    display: flex;
    align-items: center;
    font-size: 3.1vh;
    margin: 2.7vh 0;
  }
  .icon {
    width: auto;
    height: 7vh;
  }
  .value {
    padding-right: 2vw;
    align-content: center;
  }
</style>