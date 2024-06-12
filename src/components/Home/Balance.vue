<template>
  <div id="balance">
    <div class="icon">
      <inline-svg :src="require('@/assets/images/home/coin.svg')"></inline-svg>
    </div>
    <div class="value">{{ value }}</div>
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
    margin: 2.5vh 0;
    text-align: center;
    /*background-color: blue;*/
    padding-right: 2.5vw;
  }
  div.icon {
    width: auto;
    height: 7vh;
    /*background-color: red;*/
  }
  div.icon > svg {
    height: 100%;
    width: auto;
  }
  .value {
    display: inline-flex;
    /*background-color: green;*/
    font-size: 3.1vh;
    margin: auto;
    align-items: center;
    text-align: center;
    align-content: center;
    height: auto;
    vertical-align: middle;
  }
</style>